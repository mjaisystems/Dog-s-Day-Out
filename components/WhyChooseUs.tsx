import React from 'react';
import { Star } from 'lucide-react';

const benefits = [
  "Positive Reinforcement Only",
  "CPR & First Aid Certified Staff",
  "Strict Vaccination Protocols",
  "Temperature Controlled Facility",
  "Separate Areas for Tiny Dogs",
  "Daily Report Cards"
];

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-20 bg-brand-blue relative overflow-hidden scroll-mt-24">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-brand-yellow opacity-20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden lg:grid lg:grid-cols-2">
          
          <div className="px-8 py-12 lg:px-16 lg:py-20 flex flex-col justify-center">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mb-6">
              Why Seattle Dogs Love Us
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              We know trusting someone with your family member is a big deal. We’ve built our reputation on transparency, safety, and genuine love for dogs.
            </p>
            
            <ul className="grid grid-cols-1 gap-4">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-center text-slate-700 font-medium">
                  <div className="bg-brand-yellow/30 p-1.5 rounded-full mr-3 text-amber-700">
                    <Star size={16} fill="currentColor" />
                  </div>
                  {benefit}
                </li>
              ))}
            </ul>

            <div className="mt-10 p-4 bg-blue-50 rounded-xl border border-blue-100">
              <p className="text-sm text-brand-blue font-semibold text-center">
                🚫 No shock collars. No prong collars. No intimidation. Just rewards and respect.
              </p>
            </div>
          </div>

          <div className="relative h-64 lg:h-auto">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src="https://picsum.photos/id/169/800/1000"
              alt="Peaceful dog resting"
            />
             <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/10 lg:hidden"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;