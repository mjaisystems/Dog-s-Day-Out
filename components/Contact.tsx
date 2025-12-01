import React, { useState } from 'react';
import { BRAND_INFO } from '../constants';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitted'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setFormStatus('submitted');
    setTimeout(() => setFormStatus('idle'), 5000);
  };

  return (
    <section id="contact" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-8">Get In Touch</h2>
            <p className="text-lg text-slate-600 mb-10">
              Ready to schedule a visit or have questions about our training programs? Reach out today!
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-brand-blue mt-1 flex-shrink-0" />
                <div className="ml-4">
                  <h3 className="font-medium text-slate-900">Visit Us</h3>
                  <p className="text-slate-600">{BRAND_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="w-6 h-6 text-brand-blue mt-1 flex-shrink-0" />
                <div className="ml-4">
                  <h3 className="font-medium text-slate-900">Call Us</h3>
                  <a href={`tel:${BRAND_INFO.phone}`} className="text-slate-600 hover:text-brand-blue">{BRAND_INFO.phone}</a>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="w-6 h-6 text-brand-blue mt-1 flex-shrink-0" />
                <div className="ml-4">
                  <h3 className="font-medium text-slate-900">Email Us</h3>
                  <a href={`mailto:${BRAND_INFO.email}`} className="text-slate-600 hover:text-brand-blue">{BRAND_INFO.email}</a>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="w-6 h-6 text-brand-blue mt-1 flex-shrink-0" />
                <div className="ml-4">
                  <h3 className="font-medium text-slate-900">Hours</h3>
                  <p className="text-slate-600">{BRAND_INFO.hours}</p>
                  <p className="text-sm text-slate-400 mt-1">Call for weekend availability</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-10 w-full h-64 bg-slate-100 rounded-2xl overflow-hidden relative">
              <img 
                src="https://picsum.photos/id/10/800/400" 
                alt="Map placeholder" 
                className="w-full h-full object-cover opacity-50 grayscale"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-white/80 px-4 py-2 rounded-lg font-medium text-slate-600">Map Integration Placeholder</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="mt-12 lg:mt-0 bg-brand-gray p-8 rounded-3xl">
            {formStatus === 'submitted' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-4">
                  <CheckIcon />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Message Sent!</h3>
                <p className="text-slate-600 mt-2">We'll get back to you and your pup shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700">Owner Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="mt-1 block w-full rounded-xl border-slate-300 shadow-sm focus:border-brand-blue focus:ring-brand-blue py-3 px-4 border"
                    placeholder="Jane Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="mt-1 block w-full rounded-xl border-slate-300 shadow-sm focus:border-brand-blue focus:ring-brand-blue py-3 px-4 border"
                    placeholder="jane@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="mt-1 block w-full rounded-xl border-slate-300 shadow-sm focus:border-brand-blue focus:ring-brand-blue py-3 px-4 border"
                    placeholder="(206) 555-0123"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message / Pet Info</label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="mt-1 block w-full rounded-xl border-slate-300 shadow-sm focus:border-brand-blue focus:ring-brand-blue py-3 px-4 border"
                    placeholder="Tell us about your dog (breed, age, needs)..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-sm text-base font-bold text-slate-900 bg-brand-yellow hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-yellow transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

const CheckIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
)

export default Contact;