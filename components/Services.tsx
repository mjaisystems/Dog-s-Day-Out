import React from 'react';
import { SERVICES } from '../constants';
import { Check } from 'lucide-react';

const Services: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    e.stopPropagation();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-brand-gray scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base text-brand-blue font-semibold tracking-wide uppercase">Our Services</h2>
          <p className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Everything Your Dog Needs
          </p>
          <p className="mt-4 text-xl text-slate-500">
            From socialization to spa days, we offer a comprehensive range of services tailored to your dog's individual needs.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-300 p-8 flex flex-col h-full">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-brand-blue mb-6">
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6 flex-grow">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-sm text-slate-500">
                      <Check className="w-5 h-5 text-brand-yellow mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a 
                  href="#contact" 
                  onClick={(e) => handleScroll(e, '#contact')}
                  className="mt-auto block text-center w-full py-2 rounded-lg border border-slate-200 text-slate-600 font-medium hover:border-brand-blue hover:text-brand-blue transition-colors"
                >
                  Learn More
                </a>
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
             <p className="text-slate-500">Not sure what you need? <a href="#contact" onClick={(e) => handleScroll(e, '#contact')} className="text-brand-blue font-semibold hover:underline">Contact us</a> for a consultation.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;