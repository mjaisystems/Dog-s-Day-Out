import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    e.stopPropagation();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-slate-50 pt-10 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-brand-blue text-sm font-semibold mb-6">
              <span className="flex h-2 w-2 rounded-full bg-brand-blue mr-2"></span>
              Now accepting new clients in Seattle
            </div>
            <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Safe, Happy &</span>{' '}
              <span className="block text-brand-blue xl:inline">Fear-Free Care</span>{' '}
              <span className="block xl:inline">for Your Dog</span>
            </h1>
            <p className="mt-4 text-base text-slate-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Positive-reinforcement training, small-group daycare, and full-service grooming. Serving Ballard, Greenwood, and Crown Hill.
            </p>
            <div className="mt-8 sm:mt-12 sm:flex sm:justify-center lg:justify-start gap-4">
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, '#contact')}
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-xl text-slate-900 bg-brand-yellow hover:bg-amber-300 md:py-4 md:text-lg md:px-10 transition-transform active:scale-95 shadow-lg shadow-amber-300/30"
              >
                Schedule a Visit
              </a>
              <a
                href="#services"
                onClick={(e) => handleScroll(e, '#services')}
                className="mt-3 sm:mt-0 w-full flex items-center justify-center px-8 py-3 border-2 border-slate-200 text-base font-bold rounded-xl text-slate-600 bg-transparent hover:border-brand-blue hover:text-brand-blue md:py-4 md:text-lg md:px-10 transition-colors"
              >
                View Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-3xl shadow-2xl lg:max-w-md overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500">
               <img
                className="w-full h-full object-cover"
                src="https://picsum.photos/id/237/800/1000"
                alt="Happy black dog playing"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
             {/* Decorative blob */}
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-blue/20 rounded-full blur-3xl -z-10"></div>
             <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-yellow/30 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;