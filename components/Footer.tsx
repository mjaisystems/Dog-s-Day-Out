import React from 'react';
import { BRAND_INFO, NAV_LINKS } from '../constants';
import { PawPrint, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    e.stopPropagation();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSocialClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    if (url === '#') {
      e.preventDefault();
    }
    // If it's a real link, let it proceed to new tab
  };

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4 text-white">
              <div className="bg-brand-blue p-1.5 rounded-lg text-white">
                <PawPrint size={20} />
              </div>
              <span className="text-xl font-bold">{BRAND_INFO.name}</span>
            </div>
            <p className="text-sm max-w-xs mb-6">
              {BRAND_INFO.tagline}. Creating a happier world for dogs and the people who love them.
            </p>
            <div className="flex space-x-4">
              <a 
                href={BRAND_INFO.social.facebook} 
                onClick={(e) => handleSocialClick(e, BRAND_INFO.social.facebook)}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-brand-yellow transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href={BRAND_INFO.social.instagram} 
                onClick={(e) => handleSocialClick(e, BRAND_INFO.social.instagram)}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-brand-yellow transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map(link => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    onClick={(e) => handleScroll(e, link.href)}
                    className="hover:text-brand-blue transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <address className="not-italic text-sm space-y-2">
              <p>{BRAND_INFO.address}</p>
              <p>{BRAND_INFO.phone}</p>
              <p>{BRAND_INFO.email}</p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          <p>&copy; {currentYear} {BRAND_INFO.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;