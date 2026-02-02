import React, { useEffect, useState, useRef, useCallback, memo, useMemo } from 'react';
import { caseStudies, CaseStudy, Metric } from '../data/caseStudies';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

// --- Utility: Intersection Observer Hook with proper memoization ---
const useIntersectionObserver = (threshold: number = 0.5) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = containerRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, disconnect to prevent further observations
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(currentRef);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return [containerRef, isVisible] as const;
};

// --- Component: Hero Animated Stat ---
interface HeroStatProps {
  value: string;
  label: string;
  delay?: number;
  footnote?: string;
  labelWithAsterisk?: boolean;
}

const HeroStat: React.FC<HeroStatProps> = memo(({ value, label, delay = 0, footnote, labelWithAsterisk }) => {
  const [ref, isVisible] = useIntersectionObserver(0.5);
  const [displayValue, setDisplayValue] = useState(0);

  // Parse number for animation - memoized
  const { numberVal, prefix, suffix } = useMemo(() => {
    const numberMatch = value.match(/(\d+(\.\d+)?)/);
    const numVal = numberMatch ? parseFloat(numberMatch[0]) : 0;
    const pref = value.split(numberMatch?.[0] || '')[0] || '';
    const suff = value.split(numberMatch?.[0] || '')[1] || '';
    return { numberVal: numVal, prefix: pref, suffix: suff };
  }, [value]);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp: number | null = null;
    const duration = 2000;
    let animationId: number;

    const timeout = setTimeout(() => {
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        setDisplayValue(numberVal * ease);
        if (progress < 1) {
          animationId = window.requestAnimationFrame(step);
        }
      };
      animationId = window.requestAnimationFrame(step);
    }, delay);

    return () => {
      clearTimeout(timeout);
      if (animationId) window.cancelAnimationFrame(animationId);
    };
  }, [isVisible, numberVal, delay]);

  const formattedNum = displayValue.toFixed(numberVal % 1 !== 0 ? 1 : 0);

  return (
    <div ref={ref} className="relative h-full text-center p-6 pb-12 border-r last:border-r-0 border-white/10 flex flex-col items-center justify-center">
      <div className="text-5xl md:text-6xl font-serif font-bold text-white mb-2 tracking-tight" aria-live="polite">
        {prefix}{formattedNum}{suffix}
      </div>
      <div className="text-sm font-bold uppercase tracking-widest text-white/60 font-sans relative">
        {label}{labelWithAsterisk && <span className="ml-0.5 text-xs text-white/60 font-medium align-top" aria-hidden="true">*</span>}
      </div>
      {footnote && (
        <div className="absolute bottom-1.5 left-0 right-0 text-center text-[9px] text-white/40 uppercase tracking-widest font-sans whitespace-nowrap px-2">
          {footnote}
        </div>
      )}
    </div>
  );
});

HeroStat.displayName = 'HeroStat';

// --- Component: Metric Bar ---
interface MetricBarProps {
  metric: Metric;
  delay: number;
}

const MetricBar: React.FC<MetricBarProps> = memo(({ metric, delay }) => {
  const [ref, isVisible] = useIntersectionObserver(0.1);

  const barStyle = useMemo(() => ({
    width: isVisible ? `${metric.percentage}%` : '0%',
    transitionDelay: `${delay}ms`
  }), [isVisible, metric.percentage, delay]);

  return (
    <div ref={ref} className="w-full mb-4 last:mb-0">
      <div className="flex justify-between items-end mb-2">
        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{metric.label}</span>
        <span className="text-base font-bold text-primary tabular-nums" aria-label={`${metric.label}: ${metric.value}`}>{metric.value}</span>
      </div>
      <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden" role="progressbar" aria-valuenow={metric.percentage} aria-valuemin={0} aria-valuemax={100}>
        <div
          className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
          style={barStyle}
        />
      </div>
    </div>
  );
});

MetricBar.displayName = 'MetricBar';

// --- Component: Accordion Row ---
interface CaseStudyRowProps {
  study: CaseStudy;
  isOpen: boolean;
  onToggle: () => void;
}

const CaseStudyRow: React.FC<CaseStudyRowProps> = memo(({ study, isOpen, onToggle }) => {
  const chevronStyle = useMemo(() => ({
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
  }), [isOpen]);

  return (
    <div className={`group bg-white border-b border-gray-200 transition-all duration-500 ${isOpen ? 'bg-gray-50/50' : 'hover:bg-gray-50'}`}>

      {/* Header (Always Visible) */}
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`case-study-content-${study.id}`}
        className="w-full text-left py-6 px-6 md:px-10 flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
      >
        <div className="flex-grow pr-8">
          {/* Subtitle / Client Name */}
          <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 font-sans">
            {study.client}
          </div>
          {/* Main Title */}
          <h3 className={`text-xl md:text-2xl font-serif font-bold text-charcoal transition-colors duration-200 ${isOpen ? 'text-primary' : 'group-hover:text-primary'}`}>
            {study.title}
          </h3>
        </div>

        <div className="flex-shrink-0 ml-4">
          <div className="p-3 rounded-full border border-gray-100 bg-white group-hover:border-primary/20 shadow-sm transition-colors duration-300">
            <ChevronDown
              size={24}
              className="text-primary transform transition-transform duration-500"
              style={chevronStyle}
              aria-hidden="true"
            />
          </div>
        </div>
      </button>

      {/* Expanded Content */}
      <div
        id={`case-study-content-${study.id}`}
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
        aria-hidden={!isOpen}
      >
        <div className="px-6 md:px-10 pb-10 pt-2">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-gray-200/60 pt-8">

            {/* Left Column: Narrative */}
            <div className="lg:col-span-7 space-y-8">
              {/* Challenge */}
              <div>
                <h4 className="text-sm font-bold text-charcoal uppercase tracking-widest mb-3 border-l-4 border-gray-300 pl-3">
                  The Challenge
                </h4>
                <p className="text-base text-gray-600 leading-relaxed font-sans pl-4">
                  {study.challenge}
                </p>
              </div>

              {/* Solution */}
              <div>
                <h4 className="text-sm font-bold text-primary uppercase tracking-widest mb-3 border-l-4 border-primary pl-3">
                  What RBS Did
                </h4>
                <ul className="list-disc pl-8 space-y-2">
                  {study.solution.map((item, idx) => (
                    <li key={idx} className="text-base text-gray-600 leading-relaxed font-sans">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Engineering Competency */}
              {study.engineering && study.engineering.length > 0 && (
                <div>
                  <h4 className="text-sm font-bold text-gray-800 uppercase tracking-widest mb-3 border-l-4 border-gray-800 pl-3">
                    Technical Requirements
                  </h4>
                  <ul className="list-disc pl-8 space-y-2">
                    {study.engineering.map((item, idx) => (
                      <li key={idx} className="text-base text-gray-600 leading-relaxed font-sans">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right Column: Metrics */}
            <div className="lg:col-span-5 bg-white p-6 rounded-lg border border-gray-100 shadow-sm h-fit">
              <h4 className="text-sm font-serif font-bold text-charcoal mb-6 pb-2 border-b border-gray-100">
                Illustrative Results
              </h4>
              <div className="space-y-6">
                {study.metrics.map((metric, idx) => (
                  <MetricBar key={idx} metric={metric} delay={isOpen ? idx * 200 : 0} />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
});

CaseStudyRow.displayName = 'CaseStudyRow';

// --- Main Page ---
export const CaseStudies: React.FC = memo(() => {
  const [openId, setOpenId] = useState<string | null>(null);

  const handleToggle = useCallback((id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  }, []);

  return (
    <div className="bg-white min-h-screen">

      {/* 1. Hero Section */}
      <section className="bg-primary text-white py-12 relative overflow-hidden" aria-labelledby="case-studies-heading">
        {/* Abstract Background Decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white opacity-5 transform skew-x-12 translate-x-20" aria-hidden="true"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black opacity-10 rounded-full blur-3xl -translate-x-10 translate-y-10" aria-hidden="true"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <h1 id="case-studies-heading" className="text-4xl md:text-5xl font-serif font-bold mb-4">Proven Results</h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto font-light">
              Our portfolio of technical procurement achievements at RBS
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-b border-white/20 divide-y md:divide-y-0 md:divide-x divide-white/20 bg-white/5 rounded-lg backdrop-blur-sm">
            <HeroStat value="14%" label="Avg Cost Reduction" delay={0} />
            <HeroStat value="20+" label="Projects Delivered" delay={200} />
            <HeroStat
              value="$50M+"
              label="Total Savings"
              delay={400}
              labelWithAsterisk={true}
              footnote="* Refer to North American vehicle program"
            />
          </div>
        </div>
      </section>

      {/* 2. Case Study List (Accordion) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20" aria-labelledby="portfolio-heading">
        <div className="mb-10 pl-2">
          <h2 id="portfolio-heading" className="text-3xl font-serif font-bold text-charcoal">Case Portfolio</h2>
          <p className="text-gray-500 mt-2">Select a project to view technical details and financial impact.</p>
        </div>

        <div className="border-t border-gray-200">
          {caseStudies.map(study => (
            <CaseStudyRow
              key={study.id}
              study={study}
              isOpen={openId === study.id}
              onToggle={() => handleToggle(study.id)}
            />
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-offwhite py-24 border-t border-gray-100" aria-labelledby="cta-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-charcoal rounded-2xl p-12 text-center shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black" aria-hidden="true"></div>
            <div className="relative z-10">
              <h2 id="cta-heading" className="text-3xl font-serif font-bold text-white mb-6">
                See a similar challenge?
              </h2>
              <p className="text-gray-400 max-w-4xl mx-auto mb-8">
                Let us review your technical requirements and provide a tailored sourcing strategy for your needs.
              </p>
              <Link
                to="/consultation"
                className="inline-flex items-center px-10 py-4 bg-primary text-white font-bold rounded shadow-lg hover:shadow-primary/50 hover:bg-[#900028] transition-all transform hover:-translate-y-1 uppercase tracking-widest text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
              >
                Schedule a Consultation <ArrowRight className="ml-2" size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

CaseStudies.displayName = 'CaseStudies';
