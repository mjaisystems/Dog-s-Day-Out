import React from 'react';
import { Heart, ShieldCheck, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          <div className="relative mb-12 lg:mb-0">
             <div className="absolute top-0 left-0 -ml-4 -mt-4 w-24 h-24 bg-brand-yellow rounded-full opacity-50 blur-xl"></div>
             <img 
               src="https://picsum.photos/id/1025/800/600" 
               alt="Dog trainer interacting with pug" 
               className="relative rounded-2xl shadow-xl w-full object-cover"
             />
             <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-slate-100 hidden md:block">
               <p className="font-bold text-slate-800 text-lg">5+ Years</p>
               <p className="text-slate-500 text-sm">Serving Seattle Pets</p>
             </div>
          </div>

          <div>
            <h2 className="text-base text-brand-blue font-semibold tracking-wide uppercase">About Us</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              More Than Just a Daycare
            </p>
            <p className="mt-4 text-lg text-slate-600">
              At Dog’s Day Out, we believe every dog deserves to feel safe, understood, and happy. Our mission is to provide fear-free care that focuses on the emotional and physical well-being of your canine companion.
            </p>
            <p className="mt-4 text-lg text-slate-600">
              Located in the heart of Seattle, we limit our playgroups to ensure every dog gets personal attention from our certified staff. Whether it's grooming without stress or training without force, we are your partners in pet parenthood.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-md bg-blue-100 text-brand-blue">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-slate-900">Fear-Free Philosophy</h3>
                  <p className="mt-1 text-base text-slate-500">We never use force, shock, or prong collars. Only positive reinforcement.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-md bg-yellow-100 text-yellow-600">
                    <Users className="w-6 h-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-slate-900">Small Group Sizes</h3>
                  <p className="mt-1 text-base text-slate-500">Structured playgroups matched by size and temperament for safety.</p>
                </div>
              </div>

              <div className="flex items-start">
                 <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-md bg-red-100 text-red-500">
                    <Heart className="w-6 h-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-slate-900">Experienced Staff</h3>
                  <p className="mt-1 text-base text-slate-500">Our team is trained in canine body language and first aid.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;