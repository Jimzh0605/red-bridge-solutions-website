import React from 'react';
import { ShieldCheck, Cog, Handshake } from 'lucide-react';
import { Pillar } from '../types';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 px-4 sm:px-6 lg:px-8 pt-20">
          <main className="mt-10 mx-auto max-w-7xl sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-serif text-charcoal sm:text-5xl md:text-6xl">
                <span className="block font-bold">Bridging the Gap in</span>
                <span className="block text-primary font-medium leading-tight">North American and<br className="hidden lg:block" /> Asian Manufacturing</span>
              </h1>
              <p className="mt-6 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 font-light leading-relaxed font-sans">
                Red Bridge Solutions translates your product's technical specifications to ensure precise, compliant, and cost-effective manufacturing.
              </p>
              <div className="mt-8 sm:mt-10 sm:flex sm:justify-center lg:justify-start">
                <div className="shadow rounded-lg">
                  <a
                    href="mailto:redbridgesolutions.co@gmail.com"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold text-white bg-primary hover:bg-[#4a0012] md:py-4 md:text-lg md:px-10 transition-colors duration-150 font-sans tracking-wide uppercase rounded-lg"
                  >
                    Schedule a Consultation
                  </a>
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
        <div className="lg:text-center mb-12">
           <h2 className="text-base text-primary font-bold tracking-widest uppercase font-sans">Our Team's Background & Experience</h2>
           <p className="mt-6 max-w-4xl text-xl text-gray-600 lg:mx-auto font-sans leading-relaxed">
             Founded by Mechanical Engineering graduates from the University of Waterloo, Red Bridge Solutions brings a rigorous technical standard to international procurement. Our team honed its expertise in product design and mass manufacturing at industry leaders like Tesla and Apple, taking complex hardware from infancy to large-scale production. We apply these same "Big Tech" principles of Design for Manufacturing (DFM) and quality assurance to derisk your supply chain and deliver precision results.
           </p>
        </div>
        
        {/* Logo Strip */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 items-center justify-items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             {/* University of Waterloo */}
             <div className="flex justify-center w-full">
               <span className="text-lg md:text-xl font-serif font-bold tracking-wide text-gray-800 text-center">
                 UNIVERSITY OF<br/>WATERLOO
               </span>
             </div>
             {/* Tesla */}
             <div className="flex justify-center w-full">
               <span className="text-2xl md:text-3xl font-sans font-bold tracking-[0.2em] text-gray-800">
                 TESLA
               </span>
             </div>
             {/* Apple */}
             <div className="flex justify-center w-full">
               <span className="text-2xl md:text-3xl font-sans font-medium text-gray-800">
                 Apple
               </span>
             </div>
             {/* Purolator */}
             <div className="flex justify-center w-full">
               <span className="text-2xl md:text-3xl font-sans font-extrabold italic text-gray-800 tracking-tighter">
                 //Purolator
               </span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <PillarsSection />
      <ExperienceSection />
    </>
  );
};