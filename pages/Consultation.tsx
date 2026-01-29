import React, { useState } from 'react';
import { ClipboardCheck, Truck, Factory, Mail, AlertCircle } from 'lucide-react';

export const Consultation: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    details: ''
  });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    // Clear error when user starts typing
    if (error) setError(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Custom Validation
    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim()) {
      setError("Please kindly fill out all required fields (marked with *) so we can get in touch with you.");
      return;
    }

    // No functionality needed yet beyond validation
    console.log("Form submitted", formData);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <div className="bg-gray-50 py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-serif font-bold text-charcoal">Schedule Consultation</h1>
          <p className="mt-4 text-lg text-gray-500 font-sans max-w-2xl mx-auto">
            Connect with our engineering team to discuss your manufacturing requirements.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Form Section */}
        <div className="max-w-3xl mx-auto bg-white mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif font-bold text-charcoal">Send Us A Message</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Fill out this form with details on your project and we'll assign a professional agent to follow up and provide personalized assistance.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8" noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 tracking-wide">First Name *</label>
                <input 
                  type="text" 
                  id="firstName" 
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`block w-full border-b-2 px-0 py-2 bg-transparent transition-colors placeholder-gray-400 focus:ring-0 ${error && !formData.firstName ? 'border-red-400 focus:border-red-500' : 'border-gray-300 focus:border-primary'}`}
                  placeholder="Jane"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 tracking-wide">Last Name *</label>
                <input 
                  type="text" 
                  id="lastName" 
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`block w-full border-b-2 px-0 py-2 bg-transparent transition-colors placeholder-gray-400 focus:ring-0 ${error && !formData.lastName ? 'border-red-400 focus:border-red-500' : 'border-gray-300 focus:border-primary'}`}
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 tracking-wide">Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className={`block w-full border-b-2 px-0 py-2 bg-transparent transition-colors placeholder-gray-400 focus:ring-0 ${error && !formData.email ? 'border-red-400 focus:border-red-500' : 'border-gray-300 focus:border-primary'}`}
                  placeholder="jane.doe@company.com"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 tracking-wide">Phone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  className="block w-full border-gray-300 border-b-2 focus:border-primary focus:ring-0 px-0 py-2 bg-transparent transition-colors placeholder-gray-400"
                  placeholder="(519) 456-7890"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="address" className="block text-sm font-semibold text-gray-700 tracking-wide">
                Address for Shipping Samples <span className="text-gray-400 font-normal italic">(Optional)</span>
              </label>
              <input 
                type="text" 
                id="address" 
                value={formData.address}
                onChange={handleChange}
                className="block w-full border-gray-300 border-b-2 focus:border-primary focus:ring-0 px-0 py-2 bg-transparent transition-colors placeholder-gray-400"
                placeholder="123 Manufacturing Blvd, Unit 4"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="details" className="block text-sm font-semibold text-charcoal tracking-wide">Describe the products you're sourcing</label>
              <textarea 
                id="details" 
                rows={6} 
                value={formData.details}
                onChange={handleChange}
                className="block w-full border border-gray-300 rounded-sm p-3 focus:ring-1 focus:ring-primary focus:border-primary transition-colors bg-white placeholder-gray-400"
                placeholder={`Please describe your technical requirements, estimated volume, material, and country of shipping.

Example:
We are looking to manufacture a custom enclosure for a new IoT device. 
- Volume: 5,000 units/year
- Material: Aluminum 6061
- Shipping: Canada`}
              ></textarea>
            </div>

            <div className="pt-6 text-center">
              {error && (
                <div className="mb-4 flex items-center justify-center text-red-700 bg-red-50 p-3 rounded border border-red-200">
                  <AlertCircle size={18} className="mr-2" />
                  <span className="text-sm font-medium">{error}</span>
                </div>
              )}
              
              <button 
                type="submit" 
                className="w-full md:w-auto md:min-w-[200px] flex justify-center items-center py-4 px-8 border border-transparent text-sm font-bold rounded text-white bg-primary hover:bg-[#600018] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all uppercase tracking-widest mx-auto shadow-md hover:shadow-lg transform active:scale-95 duration-150"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Divider */}
        <div className="relative my-20">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-6 bg-white text-lg font-medium text-gray-400 font-serif italic">Our Consultation Process</span>
            </div>
        </div>

        {/* Expectations Section (Moved Below) */}
        <div>
          <h2 className="text-2xl font-serif font-bold text-charcoal mb-12 text-center tracking-tight">
            What to Expect
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center group">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-gray-50 text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <ClipboardCheck size={36} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-charcoal font-serif mb-3">Review Technical Specs</h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  We'll do a preliminary review of your bill of materials (BOM) and tolerance requirements to ensure they are ready for international RFQs.
                </p>
            </div>

            <div className="flex flex-col items-center text-center group">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-gray-50 text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Truck size={36} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-charcoal font-serif mb-3">Check Supply Chain Issues</h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  We will identify potential bottlenecks in logistics or raw material sourcing that could impact your specific product category.
                </p>
            </div>

            <div className="flex flex-col items-center text-center group">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-gray-50 text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Factory size={36} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-charcoal font-serif mb-3">Feasibility Assessment</h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  An honest assessment of whether your volume and complexity are a good fit for our vetted factory network in China or Vietnam.
                </p>
            </div>
          </div>
        </div>

        {/* Footer Contact */}
        <div className="mt-20 pt-10 border-t border-gray-100 text-center">
           <p className="text-gray-500 mb-3 text-sm uppercase tracking-wide">Direct Contact</p>
           <a href="mailto:redbridgesolutions.co@gmail.com" className="inline-flex items-center text-charcoal hover:text-primary transition-colors font-serif font-bold text-xl">
             <Mail size={20} className="mr-3 text-primary" />
             redbridgesolutions.co@gmail.com
           </a>
        </div>

      </div>
    </div>
  );
};