import React, { useEffect, useState, useRef } from 'react';
import { caseStudies, CaseStudy, Metric } from '../data/caseStudies';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

// --- Utility: Intersection Observer Hook ---
const useIntersectionObserver = (options: IntersectionObserverInit) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.disconnect();
    };
  }, [options]);

  return [containerRef, isVisible] as const;
};

// --- Component: Hero Animated Stat ---
const HeroStat: React.FC<{ value: string; label: string; delay?: number }> = ({ value, label, delay = 0 }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.5 });
  const [displayValue, setDisplayValue] = useState(0);

  // Parse number for animation (e.g. "150+" -> 150)
  const numberMatch = value.match(/(\d+(\.\d+)?)/);
  const numberVal = numberMatch ? parseFloat(numberMatch[0]) : 0;
  const prefix = value.split(numberMatch?.[0] || '')[0] || '';
  const suffix = value.split(numberMatch?.[0] || '')[1] || '';

  useEffect(() => {
    if (!isVisible) return;
    
    let startTimestamp: number | null = null;
    const duration = 2000;
    
    // Add delay before starting
    const timeout = setTimeout(() => {
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        // EaseOutExpo
        const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        setDisplayValue(numberVal * ease);
        if (progress < 1) window.requestAnimationFrame(step);
      };
      window.requestAnimationFrame(step);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isVisible, numberVal, delay]);

  const formattedNum = displayValue.toFixed(numberVal % 1 !== 0 ? 1 : 0);

  return (
    <div ref={ref} className="text-center p-6 border-r last:border-r-0 border-white/10">
      <div className="text-5xl md:text-6xl font-serif font-bold text-white mb-2 tracking-tight">
        {prefix}{formattedNum}{suffix}
      </div>
      <div className="text-sm font-bold uppercase tracking-widest text-white/60 font-sans">
        {label}
      </div>
    </div>
  );
};

// --- Component: Metric Bar (Mini-Infographic) ---
const MetricBar: React.FC<{ metric: Metric; delay: number }> = ({ metric, delay }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  
  return (
    <div ref={ref} className="w-full">
      <div className="flex justify-between items-end mb-1">
        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{metric.label}</span>
        <span className="text-sm font-bold text-primary tabular-nums">{metric.value}</span>
      </div>
      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
        <div 
          className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
          style={{ 
            width: isVisible ? `${metric.percentage}%` : '0%',
            transitionDelay: `${delay}ms`
          }}
        />
      </div>
    </div>
  );
};

// --- Component: Case Study Card ---
const CaseStudyCard: React.FC<{ study: CaseStudy }> = ({ study }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col h-full group">
      
      {/* Content Body */}
      <div className="p-8 flex-grow flex flex-col">
        {/* Category Badge - Moved inside since image is gone */}
        <div className="mb-4">
           <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-primary/20">
             {study.category}
           </span>
        </div>

        <h3 className="text-2xl font-serif font-bold text-charcoal mb-4 leading-tight group-hover:text-primary transition-colors">
          {study.title}
        </h3>

        <div className="space-y-4 mb-6 flex-grow">
          <div>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">The Challenge</span>
            <p className="text-sm text-gray-600 leading-relaxed mt-2 border-l-2 border-gray-200 pl-3">
              {study.challenge}
            </p>
          </div>
          
          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-4 block">The Solution</span>
            <p className="text-sm text-gray-600 leading-relaxed mt-2 border-l-2 border-primary pl-3">
              {study.solution}
            </p>
          </div>
        </div>

        {/* Toggle Button */}
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center text-xs font-bold text-primary uppercase tracking-widest hover:text-[#500014] transition-colors mb-8"
        >
          {isExpanded ? (
            <>Read Less <ChevronUp size={14} className="ml-1" /></>
          ) : (
            <>Read Solution <ChevronDown size={14} className="ml-1" /></>
          )}
        </button>

        {/* Mini Infographics Footer */}
        <div className="pt-6 border-t border-gray-100 grid grid-cols-1 gap-4 mt-auto">
          {study.metrics.map((metric, idx) => (
             <MetricBar key={idx} metric={metric} delay={idx * 200} />
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Main Page ---
export const CaseStudies: React.FC = () => {
  return (
    <div className="bg-offwhite min-h-screen">
      
      {/* 1. Hero Section with Animated Stats (Burgundy Theme) */}
      <div className="bg-primary text-white py-20 relative overflow-hidden">
        {/* Abstract Background Decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white opacity-5 transform skew-x-12 translate-x-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black opacity-10 rounded-full blur-3xl -translate-x-10 translate-y-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Proven Results</h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto font-light">
              We don't just advise; we execute. Browse our portfolio of technical procurement wins.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-b border-white/20 divide-y md:divide-y-0 md:divide-x divide-white/20 bg-white/5 rounded-lg backdrop-blur-sm">
            <HeroStat value="22%" label="Avg Cost Reduction" delay={0} />
            <HeroStat value="150+" label="Projects Delivered" delay={200} />
            <HeroStat value="$50M+" label="Total Savings" delay={400} />
          </div>
        </div>
      </div>

      {/* 2. Case Study Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {caseStudies.map(study => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="bg-charcoal rounded-2xl p-12 text-center shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-serif font-bold text-white mb-6">
              See a similar challenge?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Every project starts with a feasibility assessment. Let us review your drawings and provide a no-obligation sourcing strategy.
            </p>
            <Link 
              to="/consultation" 
              className="inline-flex items-center px-10 py-4 bg-primary text-white font-bold rounded shadow-lg hover:shadow-primary/50 hover:bg-[#900028] transition-all transform hover:-translate-y-1 uppercase tracking-widest text-sm"
            >
              Start Consultation <ArrowRight className="ml-2" size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};