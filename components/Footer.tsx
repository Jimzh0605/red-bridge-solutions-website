import React from 'react';
import { Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 border-b border-gray-700 pb-8">
          {/* Brand & Location */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif text-white">Red Bridge Solutions</h3>
            <div className="flex items-start space-x-2 text-gray-300">
              <MapPin size={18} className="mt-1 flex-shrink-0 text-burgundy" />
              <p className="text-sm">
                Based in Waterloo, Ontario<br />
                Serving North America
              </p>
            </div>
          </div>

          {/* Contacts */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400">Contact</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-burgundy" />
                <span>Jimmy Zhang: +1 902-208-0605</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-burgundy" />
                <span>Larry Wu: +1 669-225-5617</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-burgundy" />
                <a href="mailto:redbridgesolutions.co@gmail.com" className="hover:text-white transition-colors">
                  redbridgesolutions.co@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Social / Legal */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400">Connect</h4>
            <a 
              href="https://www.linkedin.com/company/red-bridge-solutions/posts/?feedView=all" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block p-2 bg-gray-800 rounded-full hover:bg-burgundy transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Red Bridge Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};