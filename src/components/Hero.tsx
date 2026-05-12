import React from 'react';
import { ChevronRight, Star } from 'lucide-react';
import { motion } from 'motion/react';

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-brand-deep">
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80&w=2000"
          alt="Professional Driveway Cleaning"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-r from-brand-deep via-brand-deep/80 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="flex -space-x-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-4 h-4 fill-brand-accent text-brand-accent" />
              ))}
            </div>
            <span className="text-white/80 text-sm font-medium tracking-wide uppercase">
              5-Star Rated Service in [City]
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold text-white leading-tight mb-6">
            Your Property, <br />
            <span className="text-brand-accent">Spotless.</span>
          </h1>
          
          <p className="text-xl text-slate-300 mb-10 max-w-lg leading-relaxed">
            Premium driveway, patio, and exterior cleaning for homeowners who demand the best results. Professional jet washing specialists.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-brand-accent hover:bg-brand-accent/90 text-white px-8 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-xl shadow-brand-accent/20">
              Get a Free Quote
              <ChevronRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white/20 hover:border-white/40 text-white px-8 py-5 rounded-2xl font-bold text-lg flex items-center justify-center transition-all bg-white/5 backdrop-blur-sm">
              Our Services
            </button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8 border-t border-white/10 pt-8 max-w-lg">
            <div>
              <div className="text-3xl font-display font-bold text-white mb-1">500+</div>
              <div className="text-slate-400 text-sm">Houses Cleaned</div>
            </div>
            <div>
              <div className="text-3xl font-display font-bold text-white mb-1">100%</div>
              <div className="text-slate-400 text-sm">Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-display font-bold text-white mb-1">24h</div>
              <div className="text-slate-400 text-sm">Quote Turnaround</div>
            </div>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1, delay: 0.2 }}
           className="hidden lg:block relative"
        >
          <div className="aspect-square rounded-[3rem] overflow-hidden border-8 border-white/10 shadow-2xl relative">
             <img 
              src="https://images.unsplash.com/photo-1621905252509-b45091724738?auto=format&fit=crop&q=80&w=800" 
              alt="Impeccable Patio" 
              className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-linear-to-t from-brand-deep/60 to-transparent" />
             <div className="absolute bottom-10 left-10 p-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl max-w-[240px]">
                <p className="text-brand-deep font-bold italic mb-2">"Transformed my driveway in just one morning. Incredible service!"</p>
                <p className="text-slate-500 text-sm font-medium">— Sarah M., Local Resident</p>
             </div>
          </div>
          {/* Decorative element */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-accent/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
};
