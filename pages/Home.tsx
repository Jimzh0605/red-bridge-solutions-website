import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Cog, Handshake } from 'lucide-react';
import { Pillar } from '../types';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 px-4 sm:px-6 lg:px-8 pt-20">
          <main className="mt-10 mx-auto max-w-7xl sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              {/* Brand Text */}
              <div className="mb-2">
                <span className="block text-3xl sm:text-4xl font-serif font-bold text-primary tracking-tight">
                  Red Bridge Solutions
                </span>
              </div>
              
              <h1 className="text-4xl tracking-tight font-serif text-charcoal sm:text-5xl md:text-6xl">
                <span className="block font-bold">Bridging the Gap in</span>
                <span className="block text-primary font-medium leading-tight">North American and<br className="hidden lg:block" /> Asian Manufacturing</span>
              </h1>
              <p className="mt-6 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 font-light leading-relaxed font-sans">
                Red Bridge Solutions translates your product's technical specifications to ensure precise, compliant, and cost-effective manufacturing.
              </p>
              <div className="mt-8 sm:mt-10 sm:flex sm:justify-center lg:justify-start">
                <div className="shadow rounded-md">
                  <Link
                    to="/consultation"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold text-white bg-[#46515A] hover:bg-[#363f46] md:py-4 md:text-lg md:px-10 transition-colors duration-150 font-sans tracking-wide uppercase rounded-md"
                  >
                    Schedule a Consultation
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-gray-50 flex items-center justify-center">
        {/* Logistics/Shipping Container Image */}
        <div className="w-full h-full bg-cover bg-center opacity-80" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80")', filter: 'grayscale(100%) sepia(10%)' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

const LogoSection: React.FC = () => {
  const logos = [
    { name: 'University of Waterloo', src: '/images/logos/uwaterloo.png', className: "h-16 md:h-20" },
    { name: 'Tesla', src: '/images/logos/tesla.png', className: "h-11 md:h-14" },
    { name: 'Apple', src: '/images/logos/apple.png', className: "h-14 md:h-16" },
    { name: 'Toyota', src: '/images/logos/toyota.png', className: "h-12 md:h-16" },
    { name: 'XPeng', src: '/images/logos/xpeng.png', className: "h-10 md:h-12" },
    { name: 'BYD', src: '/images/logos/byd.png', className: "h-10 md:h-12" },
    { name: 'Multimatic', src: '/images/logos/multimatic.png', className: "h-8 md:h-10" },
    { name: 'RMT Robotics', src: '/images/logos/rmt.png', className: "h-11 md:h-14" },
    { name: 'Purolator', src: '/images/logos/purolator.png', className: "h-11 md:h-14" },
  ];

  return (
    <section className="py-12 bg-white border-b border-gray-100 overflow-hidden">
      <style>{`
        :root {
          --gap: 3rem;
          --duration: 40s;
        }
        
        .logo-container {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          width: 100%;
          overflow: hidden;
        }

        .logo-scroll {
          display: flex;
          width: 100%;
          gap: var(--gap);
          user-select: none;
        }

        .logo-scroll__wrapper {
          display: flex;
          flex-shrink: 0;
          align-items: center;
          justify-content: space-around;
          gap: var(--gap);
          min-width: 100%;
          animation: scroll var(--duration) linear infinite;
        }

        .logo-item-wrapper {
          transition: transform 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .logo-item-wrapper:hover {
          transform: scale(1.05);
        }

        .logo-container:hover .logo-scroll__wrapper {
          animation-play-state: paused;
        }
        
        @keyframes scroll {
          to {
            transform: translateX(calc(-100% - var(--gap)));
          }
        }
        
        @media (max-width: 768px) {
           :root {
             --gap: 2rem;
             --duration: 30s;
           }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .logo-scroll__wrapper {
            animation-play-state: paused;
          }
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="text-center">
          <p className="text-lg font-serif italic text-gray-400">
            We gained our experience at firms you know and trust.
          </p>
        </div>
      </div>

      <div className="logo-container">
        <div className="logo-scroll">
          {/* First set of logos */}
          <div className="logo-scroll__wrapper">
            {logos.map((logo, index) => (
              <div key={`logo-1-${index}`} className="logo-item-wrapper px-4">
                <img 
                  src={logo.src} 
                  alt={logo.name} 
                  className={`${logo.className} w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500`}
                />
              </div>
            ))}
          </div>
          
          {/* Second identical set of logos for seamless loop */}
          <div className="logo-scroll__wrapper">
            {logos.map((logo, index) => (
              <div key={`logo-2-${index}`} className="logo-item-wrapper px-4">
                <img 
                  src={logo.src} 
                  alt={logo.name} 
                  className={`${logo.className} w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const PillarsSection: React.FC = () => {
  const pillars: Pillar[] = [
    {
      title: "Engineering Foundation",
      description: "Founded by mechanical engineering graduates. We ensure Design for Manufacturing (DFM) analysis and absolute technical accuracy before production begins.",
      icon: <Cog size={40} className="text-primary" strokeWidth={1.5} />,
    },
    {
      title: "Risk Mitigation",
      description: "We bridge cultural and technical gaps to prevent quality fade. Our on-the-ground understanding safeguards your IP and product integrity.",
      icon: <ShieldCheck size={40} className="text-primary" strokeWidth={1.5} />,
    },
    {
      title: "Strategic Execution",
      description: "Access to vetted sourcing agents and direct negotiation capabilities. We handle the complexities of logistics so you can focus on innovation.",
      icon: <Handshake size={40} className="text-primary" strokeWidth={1.5} />,
    },
  ];

  return (
    <section className="py-24 bg-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-primary font-bold tracking-widest uppercase font-sans">Our Expertise</h2>
          <p className="mt-2 text-3xl leading-8 font-serif font-bold tracking-tight text-charcoal sm:text-4xl">
            The Three Pillars of Reliability
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <div key={index} className="flex flex-col bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border-t-4 border-primary rounded-xl overflow-hidden">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 mr-4">
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold text-charcoal tracking-tight">{pillar.title}</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed flex-grow font-sans">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperienceSection: React.FC = () => {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
           <h2 className="text-base text-primary font-bold tracking-widest uppercase font-sans">Our Team's Background & Experience</h2>
           <p className="mt-6 max-w-4xl text-xl text-gray-600 lg:mx-auto font-sans leading-relaxed">
             Founded by Mechanical Engineering graduates from the University of Waterloo, Red Bridge Solutions brings a rigorous technical standard to international procurement. Our team honed its expertise in product design and manufacturing at industry leaders like Tesla and Apple; we have experience navigating through the entire supply chain, bringing complex hardware from an idea to large-scale production.
           </p>
        </div>
      </div>
    </section>
  );
};

export const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <LogoSection />
      <PillarsSection />
      <ExperienceSection />
    </>
  );
};