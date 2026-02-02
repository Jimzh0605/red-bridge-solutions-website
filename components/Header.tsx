import React, { memo, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'About', path: '/about' },
  { name: 'Case Studies', path: '/case-studies' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact', path: '/consultation' },
  { name: 'Client Portal', path: '/portal' },
];

export const Header: React.FC = memo(() => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const isActive = useCallback((path: string) => location.pathname === path, [location.pathname]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm transition-all duration-300">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded"
      >
        Skip to main content
      </a>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-32">

          <div className="flex items-center">
            {/* Logo Image */}
            <div className="flex-shrink-0 flex items-center">
              <Link
                to="/"
                className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
                aria-label="Red Bridge Solutions - Home"
              >
                <img
                  src="/images/logos/rbs-logo.png"
                  alt="Red Bridge Solutions Logo"
                  className="h-[52px] w-auto object-contain transition-opacity duration-200 hover:opacity-80"
                />
              </Link>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex space-x-8 items-center"
            role="navigation"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                aria-current={isActive(link.path) ? 'page' : undefined}
                className={`text-sm font-bold tracking-widest uppercase transition-colors duration-200 flex items-center font-sans focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded px-1 ${
                  isActive(link.path)
                    ? 'text-primary'
                    : 'text-gray-500 hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              className="text-gray-500 hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded p-1"
            >
              {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <nav
          id="mobile-menu"
          className="md:hidden bg-white border-b border-gray-100"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                aria-current={isActive(link.path) ? 'page' : undefined}
                className={`block px-3 py-2 text-base font-medium font-sans focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset rounded ${
                  isActive(link.path)
                    ? 'text-primary bg-gray-50'
                    : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
});

Header.displayName = 'Header';
