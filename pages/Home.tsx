import React, { memo, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Cog, Handshake } from 'lucide-react';
import { Pillar } from '../types';

// Static data moved outside components to prevent recreation on each render
const LOGOS = [
  { name: 'University of Waterloo', src: '/images/logos/uwaterloo.png' },
  { name: 'Tesla', src: '/images/logos/tesla.png' },
  { name: 'Apple', src: '/images/logos/apple.png' },
  { name: 'Toyota', src: '/images/logos/toyota.png' },
  { name: 'XPeng', src: '/images/logos/xpeng.png' },
  { name: 'BYD', src: '/images/logos/byd.png' },
  { name: 'Multimatic', src: '/images/logos/multimatic.png' },
  { name: 'Purolator', src: '/images/logos/purolator.png' },
] as const;

// Hero background image - download from Unsplash and place in /public/images/hero-bg.jpg
// URL: https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80
const HERO_BG_URL = 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80';

const HeroSection: React.FC = memo(() => {
  // Memoize style object to prevent recreation on each render
  const heroImageStyle = useMemo(() => ({
    backgroundImage: `url("${HERO_BG_URL}")`,
    filter: 'grayscale(100%) sepia(10%)'
  }), []);

  return (
    <section className="relative bg-white overflow-hidden" aria-labelledby="hero-heading">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 px-4 sm:px-6 lg:px-8 pt-20">
          <div className="mt-10 mx-auto max-w-7xl sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              {/* Brand Text */}
              <div className="mb-2">
                <span className="block text-3xl sm:text-4xl font-serif font-bold text-primary tracking-tight">
                  Red Bridge Solutions
                </span>
              </div>

              <h1 id="hero-heading" className="text-4xl tracking-tight font-serif text-charcoal sm:text-5xl md:text-6xl">
                <span className="block font-bold">The Bridge Between</span>
                <span className="block text-primary font-medium leading-tight">North American and<br className="hidden lg:block" /> Asian Manufacturing</span>
              </h1>
              <p className="mt-6 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 font-light leading-relaxed font-sans">
                We translate your technical specifications into manufacturing-ready documentation that prevents miscommunication and cost overruns.
              </p>
              <div className="mt-8 sm:mt-10 sm:flex sm:justify-center lg:justify-start">
                <div className="shadow rounded-md">
                  <Link
                    to="/consultation"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold text-white bg-[#46515A] hover:bg-[#363f46] md:py-4 md:text-lg md:px-10 transition-colors duration-150 font-sans tracking-wide uppercase rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
                  >
                    Schedule a Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-gray-50 flex items-center justify-center" aria-hidden="true">
        <div
          className="w-full h-full bg-cover bg-center opacity-80"
          style={heroImageStyle}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent"></div>
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

// Logo item component for better rendering optimization
const LogoItem = memo<{ logo: typeof LOGOS[number]; keyPrefix: string; index: number }>(
  ({ logo, keyPrefix, index }) => (
    <div key={`${keyPrefix}-${index}`} className="logo-item-wrapper px-4">
      <img
        src={logo.src}
        alt={`${logo.name} logo`}
        className="h-10 md:h-12 w-auto max-w-[140px] md:max-w-[160px] object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
        loading="lazy"
      />
    </div>
  )
);

LogoItem.displayName = 'LogoItem';

const LogoSection: React.FC = memo(() => {
  return (
    <section className="py-12 bg-white border-b border-gray-100 overflow-hidden" aria-label="Trusted by industry leaders">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="text-center">
          <p className="text-lg font-serif italic text-gray-500">
            We gained our experience at firms you know and trust.
          </p>
        </div>
      </div>

      <div className="logo-container" role="marquee" aria-label="Partner logos carousel">
        <div className="logo-scroll">
          {/* First set of logos */}
          <div className="logo-scroll__wrapper" aria-hidden="false">
            {LOGOS.map((logo, index) => (
              <LogoItem key={`logo-1-${index}`} logo={logo} keyPrefix="logo-1" index={index} />
            ))}
          </div>

          {/* Second identical set of logos for seamless loop */}
          <div className="logo-scroll__wrapper" aria-hidden="true">
            {LOGOS.map((logo, index) => (
              <LogoItem key={`logo-2-${index}`} logo={logo} keyPrefix="logo-2" index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

LogoSection.displayName = 'LogoSection';

// Pillar card component
const PillarCard = memo<{ pillar: Pillar; icon: React.ReactNode }>(({ pillar, icon }) => (
  <div className="flex flex-col bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border-t-4 border-primary rounded-xl overflow-hidden">
    <div className="flex items-center mb-6">
      <div className="flex-shrink-0 mr-4" aria-hidden="true">
        {icon}
      </div>
      <h3 className="text-2xl font-serif font-bold text-charcoal tracking-tight">{pillar.title}</h3>
    </div>
    <p className="text-lg text-gray-700 leading-relaxed flex-grow font-sans">
      {pillar.description}
    </p>
  </div>
));

PillarCard.displayName = 'PillarCard';

// Pillars data defined outside component
const PILLARS_DATA = [
  {
    title: "Engineering Foundation",
    description: "Founded by mechanical engineering graduates. We ensure Design for Manufacturing (DFM) analysis and absolute technical accuracy before production begins.",
  },
  {
    title: "Risk Mitigation",
    description: "We bridge cultural and technical gaps to prevent quality fade. Our on-the-ground understanding safeguards your IP and product integrity.",
  },
  {
    title: "Strategic Execution",
    description: "Access to vetted sourcing agents and direct negotiation capabilities. We handle the complexities of logistics so you can focus on innovation.",
  },
] as const;

// Icons defined outside to prevent recreation
const PILLAR_ICONS = [
  <Cog key="cog" size={40} className="text-primary" strokeWidth={1.5} aria-hidden="true" />,
  <ShieldCheck key="shield" size={40} className="text-primary" strokeWidth={1.5} aria-hidden="true" />,
  <Handshake key="handshake" size={40} className="text-primary" strokeWidth={1.5} aria-hidden="true" />,
];

const PillarsSection: React.FC = memo(() => {
  const pillars: Pillar[] = useMemo(() =>
    PILLARS_DATA.map((data, index) => ({
      ...data,
      icon: PILLAR_ICONS[index],
    })), []);

  return (
    <section className="py-24 bg-offwhite" aria-labelledby="pillars-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-primary font-bold tracking-widest uppercase font-sans">Our Expertise</h2>
          <p id="pillars-heading" className="mt-2 text-3xl leading-8 font-serif font-bold tracking-tight text-charcoal sm:text-4xl">
            The Three Pillars of Reliability
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <PillarCard key={pillar.title} pillar={pillar} icon={PILLAR_ICONS[index]} />
          ))}
        </div>
      </div>
    </section>
  );
});

PillarsSection.displayName = 'PillarsSection';

const ExperienceSection: React.FC = memo(() => {
  return (
    <section className="py-20 bg-white border-t border-gray-100" aria-labelledby="experience-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 id="experience-heading" className="text-base text-primary font-bold tracking-widest uppercase font-sans">Our Team's Background & Experience</h2>
          <p className="mt-6 max-w-4xl text-xl text-gray-600 lg:mx-auto font-sans leading-relaxed">
            Founded by Mechanical Engineering graduates from the University of Waterloo. Our team gained expertise in product design and manufacturing at Tesla and Apple, navigating the entire supply chain from concept to large-scale production.
          </p>
        </div>
      </div>
    </section>
  );
});

ExperienceSection.displayName = 'ExperienceSection';

export const Home: React.FC = memo(() => {
  return (
    <>
      <HeroSection />
      <LogoSection />
      <PillarsSection />
      <ExperienceSection />
    </>
  );
});

Home.displayName = 'Home';
