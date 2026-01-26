import React from 'react';
import { teamData, aboutContent } from '../data/content';

export const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-serif font-bold text-charcoal tracking-tight">About Us</h1>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl font-sans">
            Bridging the divide between concept and production through engineering excellence.
          </p>
        </div>
      </div>

      {/* Narrative Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-base text-primary font-bold tracking-widest uppercase font-sans mb-3">Our Mission</h2>
            <p className="text-2xl font-serif font-bold text-charcoal leading-tight">
              {aboutContent.mission}
            </p>
          </div>
          <div className="prose prose-lg text-gray-600 font-sans">
             <p>{aboutContent.story}</p>
          </div>
        </div>
      </div>

      {/* Leadership Section - Moved from Home */}
      <section className="py-20 bg-offwhite border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-charcoal tracking-tight">Leadership</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto font-sans">
              Driven by technical excellence and strategic vision.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-16">
            {teamData.map((member, index) => (
              <div key={index} className="text-center w-full sm:w-80">
                <div className="relative mx-auto mb-6">
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-40 h-40 mx-auto rounded-full object-cover border-4 border-primary shadow-sm"
                    />
                  ) : (
                    <div className="w-40 h-40 mx-auto bg-white rounded-full flex items-center justify-center text-gray-300 font-serif text-3xl border-4 border-primary shadow-sm">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}
                </div>
                
                <h3 className="text-xl leading-6 font-bold text-charcoal font-serif tracking-tight mb-2">
                  {member.name}
                </h3>
                <p className="text-primary text-sm font-bold uppercase tracking-widest font-sans mb-3">
                  {member.role}
                </p>
                {member.description && (
                  <p className="text-gray-500 text-sm font-sans leading-relaxed">
                    {member.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};