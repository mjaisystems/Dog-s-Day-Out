import React, { useState } from 'react';
import { Menu, X, PawPrint } from 'lucide-react';
import { NAV_LINKS, BRAND_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    e.stopPropagation(); // Prevent event bubbling
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={handleLogoClick}>
            <div className="bg-brand-blue p-2 rounded-lg text-white">
              <PawPrint size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-800 leading-tight">{BRAND_INFO.name}</h1>
              <p className="text-xs text-slate-500 hidden sm:block">Seattle, WA</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-slate-600 hover:text-brand-blue font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, '#contact')}
              className="bg-brand-yellow hover:bg-amber-300 text-slate-900 px-5 py-2.5 rounded-full font-semibold transition-colors shadow-sm"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-slate-600 hover:text-slate-900 p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg h-screen md:h-auto">
          <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="block px-3 py-4 rounded-md text-base font-medium text-slate-600 hover:text-brand-blue hover:bg-slate-50 border-b border-slate-100 last:border-0"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4">
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, '#contact')}
                className="block w-full text-center bg-brand-yellow text-slate-900 px-5 py-3 rounded-xl font-bold"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;