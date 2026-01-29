import React, { useEffect, useState, useRef } from 'react';
import { caseStudies, Metric } from '../data/caseStudies';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// --- Animated Components ---

const useIntersectionObserver = (options: IntersectionObserverInit) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Trigger animation every time it enters the viewport
      if (entry.isIntersecting) {
        setIsVisible(true);
      } else {
        setIsVisible(false); // Reset when scrolling out to allow re-animation
      }
    }, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [options]);

  return [containerRef, isVisible] as const;
};

const AnimatedCounter: React.FC<{ value: string; isVisible: boolean }> = ({ value, isVisible }) => {
  // Extract number if possible, else just show string
  const numberMatch = value.match(/(\d+(\.\d+)?)/);
  const numberVal = numberMatch ? parseFloat(numberMatch[0]) : 0;
  const prefix = value.split(numberMatch?.[0] || '')[0] || '';
  const suffix = value.split(numberMatch?.[0] || '')[1] || '';
  
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isVisible) {
      setDisplayValue(0);
      return;
    }

    let startTimestamp: number | null = null;
    const duration = 2000; // 2 seconds

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing function: easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setDisplayValue(numberVal * easeProgress);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [isVisible, numberVal]);

  if (!numberMatch) return <span>{value}</span>;

  // Format to match original precision
  const decimals = numberMatch[0].includes('.') ? numberMatch[0].split('.')[1].length : 0;
  const formattedNumber = displayValue.toFixed(decimals);

  return (
    <span className="tabular-nums">
      {prefix}{formattedNumber}{suffix}
    </span>
  );
};

const DonutChart: React.FC<{ metric: Metric; isVisible: boolean }> = ({ metric, isVisible }) => {
  const size = 120;
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = isVisible ? circumference - (metric.percentage / 100) * circumference : circumference;

  return (
    <div className="flex items-center gap-6">
      <div className="relative flex-shrink-0" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="transform -rotate-90">
          {/* Background Ring */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#374151" // Gray-700
            strokeWidth={strokeWidth}
            fill="transparent"
            className="opacity-50"
          />
          {/* Foreground Ring */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#800020" // Primary Color (Burgundy)
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-[2000ms] ease-out shadow-[0_0_10px_rgba(128,0,32,0.5)]"
          />
        </svg>
      </div>
      <div className="flex flex-col">
         <span className="text-4xl font-serif font-bold text-white mb-1">
            <AnimatedCounter value={metric.value} isVisible={isVisible} />
         </span>
         <span className="text-sm font-bold uppercase tracking-widest text-primary mb-1">
           {metric.label}
         </span>
         <p className="text-sm text-gray-400 leading-snug max-w-[200px]">
           {metric.description}
         </p>
      </div>
    </div>
  );
};

const MetricsSection: React.FC<{ metrics: Metric[] }> = ({ metrics }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.3 });

  return (
    <div ref={ref} className="bg-[#111827] p-8 md:p-12 rounded-xl mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 shadow-2xl relative overflow-hidden group">
       {/* Background accent - Subtle gradient glow */}
       <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-5 group-hover:opacity-10 transition-opacity duration-1000"></div>
       
       {metrics.map((metric, idx) => (
         <DonutChart key={idx} metric={metric} isVisible={isVisible} />
       ))}
    </div>
  );
};

// --- Main Page Component ---

export const CaseStudies: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-white text-charcoal py-20 lg:py-24 border-b border-gray-200 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
             <div className="w-full h-full bg-primary transform rotate-12 translate-x-20 -translate-y-20 blur-3xl rounded-full"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Case Studies</h1>
          <p className="text-lg md:text-xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
            How we've solved manufacturing challenges for our clients.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-32">
        {caseStudies.map((study, index) => (
          <div key={study.id} className="group">
            {/* Header for Study */}
            <div className="mb-8 md:mb-12 text-center md:text-left">
              <span className="inline-block py-1 px-3 rounded-full bg-gray-100 text-primary text-xs font-bold uppercase tracking-widest mb-4">
                {study.industry}
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal leading-tight">
                {study.title}
              </h2>
              <p className="text-lg text-gray-500 mt-2 font-medium">{study.clientType}</p>
            </div>

            {/* Layout Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              
              {/* Content Column */}
              <div className={`order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="space-y-10">
                  <div>
                    <h3 className="text-xl font-bold text-charcoal mb-3 font-serif border-l-4 border-gray-200 pl-4">The Challenge</h3>
                    <p className="text-gray-600 leading-relaxed text-lg font-light pl-4">
                      {study.challenge}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-charcoal mb-3 font-serif border-l-4 border-primary pl-4">The Solution</h3>
                    <p className="text-gray-600 leading-relaxed text-lg font-light pl-4">
                      {study.solution}
                    </p>
                  </div>
                </div>

                <div className="mt-10">
                  <Link 
                    to="/consultation" 
                    className="inline-flex items-center text-primary font-bold tracking-wide hover:text-[#500014] transition-colors group/link"
                  >
                    Discuss a similar project
                    <ArrowRight size={18} className="ml-2 transform group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Visuals Column */}
              <div className={`order-1 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="relative rounded-xl overflow-hidden shadow-2xl">
                  <div className="aspect-w-16 aspect-h-12 bg-gray-200">
                     <img 
                      src={study.image} 
                      alt={study.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                </div>
              </div>
            </div>

            {/* Metrics Infographic Section */}
            <MetricsSection metrics={study.metrics} />

          </div>
        ))}

        {/* Bottom CTA */}
        <div className="bg-gray-50 rounded-2xl p-12 text-center border border-gray-100 shadow-sm">
            <h2 className="text-3xl font-serif font-bold text-charcoal mb-6">
              Ready to optimize your supply chain?
            </h2>
            <Link 
              to="/consultation" 
              className="inline-block px-10 py-4 bg-primary text-white font-bold rounded shadow-lg hover:shadow-xl hover:bg-[#600018] transition-all transform hover:-translate-y-1 uppercase tracking-widest text-sm"
            >
              Start Consultation
            </Link>
        </div>
      </div>
    </div>
  );
};