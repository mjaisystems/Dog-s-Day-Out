import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-brand-gray border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-extrabold text-slate-900 mb-16">
          Community Love
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-2xl shadow-sm relative">
              <div className="absolute -top-4 left-8 bg-brand-yellow text-amber-900 p-2 rounded-lg">
                <Quote size={20} fill="currentColor" />
              </div>
              <p className="text-slate-600 italic mb-6 pt-4">"{testimonial.quote}"</p>
              <div className="border-t border-slate-100 pt-4 flex items-center">
                <div className="w-10 h-10 bg-slate-200 rounded-full flex-shrink-0 mr-3">
                    <img src={`https://picsum.photos/seed/${testimonial.id}/100`} className="w-full h-full rounded-full object-cover" alt="Avatar" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{testimonial.name}</h4>
                  <p className="text-slate-400 text-xs">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;