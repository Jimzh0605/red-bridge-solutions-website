import React, { useEffect } from 'react';
import { ClipboardCheck, Truck, Factory, Mail } from 'lucide-react';

const CalendlyEmbed: React.FC<{ url: string }> = ({ url }) => {
  useEffect(() => {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
    script.setAttribute('async', 'true');
    head?.appendChild(script);

    return () => {
      // Optional: Cleanup script if necessary
    };
  }, []);

  return (
    <div 
      className="calendly-inline-widget w-full" 
      data-url={url} 
      style={{ minWidth: '320px', height: '700px' }} 
    />
  );
};

export const Consultation: React.FC = () => {
  // Updated URL from snippet
  const CALENDLY_URL = 'https://calendly.com/redbridgesolutions-co/30min?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=46515a'; 

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <div className="bg-gray-50 py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-serif font-bold text-charcoal">Schedule Consultation</h1>
          <p className="mt-4 text-lg text-gray-500 font-sans">
            Select a time below. Answer a few technical questions to confirm your slot.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column: Expectations */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-charcoal mb-8 pb-4 border-b border-gray-100">
              What to Expect
            </h2>
            <div className="space-y-10">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    <ClipboardCheck size={24} />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-bold text-charcoal font-serif">Review Technical Specs</h3>
                  <p className="mt-2 text-gray-600 leading-relaxed">
                    We'll do a preliminary review of your bill of materials (BOM) and tolerance requirements to ensure they are ready for international RFQs.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    <Truck size={24} />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-bold text-charcoal font-serif">Check Supply Chain Issues</h3>
                  <p className="mt-2 text-gray-600 leading-relaxed">
                    We will identify potential bottlenecks in logistics or raw material sourcing that could impact your specific product category.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    <Factory size={24} />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-bold text-charcoal font-serif">Feasibility for Asia Manufacturing</h3>
                  <p className="mt-2 text-gray-600 leading-relaxed">
                    An honest assessment of whether your volume and complexity are a good fit for our vetted factory network in China or Vietnam.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Calendly */}
          <div className="flex flex-col h-full">
            <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
              Book Time
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Pick a slot, fill out the intake form, and confirm directly below.
            </p>
            
            {/* Calendar Container */}
            <div className="flex-grow bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden">
               <CalendlyEmbed url={CALENDLY_URL} />
            </div>

            {/* Sub-form Contact */}
            <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-center space-x-2 text-sm text-gray-500">
               <span>Questions?</span>
               <a href="mailto:redbridgesolutions.co@gmail.com" className="flex items-center text-primary font-bold hover:underline">
                 <Mail size={14} className="mr-1" />
                 Contact redbridgesolutions.co@gmail.com
               </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};