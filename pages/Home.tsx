import React from 'react';
import { ArrowRight, ShieldCheck, Cog, Handshake } from 'lucide-react';
import { Pillar } from '../types';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 px-4 sm:px-6 lg:px-8 pt-20">
          <main className="mt-10 mx-auto max-w-7xl sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-serif text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Engineering the Gap</span>{' '}
                <span className="block text-burgundy mt-2">Between North America and Asian Manufacturing</span>
              </h1>
              <p className="mt-6 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 font-light">
                We translate technical specifications, not just languages. Our engineering team ensures your manufacturing is precise, compliant, and cost-effective.
              </p>
              <div className="mt-8 sm:mt-10 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-none shadow">
                  <a
                    href="mailto:redbridgesolutions.co@gmail.com"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium text-white bg-burgundy hover:bg-red-900 md:py-4 md:text-lg md:px-10 transition-colors duration-150"
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
      description: "Founded by Waterloo Engineering graduates. We ensure Design for Manufacturing (DFM) analysis and absolute technical accuracy before production begins.",
      icon: <Cog size={40} className="text-burgundy" strokeWidth={1.5} />,
    },
    {
      title: "Risk Mitigation",
      description: "We bridge cultural and technical gaps to prevent quality fade. Our on-the-ground understanding safeguards your IP and product integrity.",
      icon: <ShieldCheck size={40} className="text-burgundy" strokeWidth={1.5} />,
    },
    {
      title: "Strategic Execution",
      description: "Access to vetted sourcing agents and direct negotiation capabilities. We handle the complexities of logistics so you can focus on innovation.",
      icon: <Handshake size={40} className="text-burgundy" strokeWidth={1.5} />,
    },
  ];

  return (
    <section className="py-24 bg-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-burgundy font-semibold tracking-wide uppercase">Our Expertise</h2>
          <p className="mt-2 text-3xl leading-8 font-serif font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            The Three Pillars of Reliability
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <div key={index} className="flex flex-col bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border-t-4 border-burgundy">
              <div className="flex-shrink-0 mb-6">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-serif font-medium text-gray-900 mb-4">{pillar.title}</h3>
              <p className="text-base text-gray-500 leading-relaxed flex-grow">
                {pillar.description}
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <span className="text-sm text-burgundy font-medium flex items-center group cursor-pointer">
                  Learn more <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamSection: React.FC = () => {
  return (
    <section className="py-20 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-gray-900">Leadership</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Driven by technical excellence and strategic vision.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-12">
          <div className="text-center space-y-2">
            <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full mb-4 flex items-center justify-center text-gray-400 font-serif text-2xl border-2 border-burgundy">
              JZ
            </div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">Jimmy Zhang</h3>
            <p className="text-burgundy text-sm uppercase tracking-wider">Co-Founder</p>
          </div>
          <div className="text-center space-y-2">
            <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full mb-4 flex items-center justify-center text-gray-400 font-serif text-2xl border-2 border-burgundy">
              LW
            </div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">Larry Wu</h3>
            <p className="text-burgundy text-sm uppercase tracking-wider">Co-Founder</p>
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
      <TeamSection />
    </>
  );
};