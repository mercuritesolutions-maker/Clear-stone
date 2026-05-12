import React from 'react';
import { ChevronRight, Star } from 'lucide-react';
import { motion } from 'motion/react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-deep">
      {/* Background Video / Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30 scale-110"
        >
          <source 
            src="https://assets.mixkit.co/videos/preview/mixkit-cleaning-a-dirty-pavement-with-a-pressure-washer-41481-large.mp4" 
            type="video/mp4" 
          />
        </video>
        <div className="absolute inset-0 bg-linear-to-r from-brand-deep via-brand-deep/80 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-brand-deep/20 to-brand-deep" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-2 mb-8">
            <div className="flex -space-x-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-5 h-5 fill-brand-accent text-brand-accent drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
              ))}
            </div>
            <span className="text-white/90 text-sm font-bold tracking-[0.2em] uppercase ml-2">
              Hucknall's #1 Exterior Specialist
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-extrabold text-white leading-[0.9] mb-8">
            Your Property, <br />
            <span className="text-brand-accent italic relative">
              Spotless.
              <motion.span 
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute -bottom-2 left-0 h-2 bg-brand-accent/30 rounded-full"
              />
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-xl leading-relaxed font-medium">
            Premium driveway, patio, and jet washing specialists. We restore your home's kerb appeal with professional-grade precision.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <button className="bg-brand-accent hover:bg-brand-accent/90 text-white px-10 py-6 rounded-2xl font-black text-xl flex items-center justify-center gap-3 transition-all hover:scale-105 shadow-2xl shadow-brand-accent/40 active:scale-95 cursor-pointer">
              Get Your Free Quote
              <ChevronRight className="w-6 h-6" />
            </button>
            <button className="border-2 border-white/10 hover:border-white/30 text-white px-10 py-6 rounded-2xl font-bold text-xl flex items-center justify-center transition-all bg-white/5 backdrop-blur-md hover:bg-white/10 cursor-pointer">
              View Our Work
            </button>
          </div>

          <div className="mt-20 grid grid-cols-3 gap-12 border-t border-white/10 pt-10 max-w-xl">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <div className="text-4xl font-display font-black text-white mb-2">500+</div>
              <div className="text-slate-500 text-xs font-black uppercase tracking-widest">Happy Clients</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.7 }}
            >
              <div className="text-4xl font-display font-black text-white mb-2">100%</div>
              <div className="text-slate-500 text-xs font-black uppercase tracking-widest">Guaranteed</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.9 }}
            >
              <div className="text-4xl font-display font-black text-white mb-2 italic">FREE</div>
              <div className="text-slate-500 text-xs font-black uppercase tracking-widest">Site Survey</div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
           animate={{ opacity: 1, scale: 1, rotate: 0 }}
           transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
           className="hidden lg:block relative"
        >
          <div className="aspect-square rounded-[4rem] overflow-hidden border-[12px] border-white/5 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] relative group">
             <img 
              src="https://images.unsplash.com/photo-1541818138-ef8634e9e0cb?auto=format&fit=crop&q=90&w=1000" 
              alt="Impeccable Transformation" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
             />
             <div className="absolute inset-0 bg-linear-to-t from-brand-deep/80 via-transparent to-transparent opacity-60" />
             <div className="absolute bottom-12 left-12 right-12 p-8 bg-white/95 backdrop-blur-xl rounded-[2.5rem] shadow-2xl border border-white/20 transform -rotate-2 hover:rotate-0 transition-transform">
                <div className="flex gap-1 mb-3">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-brand-accent text-brand-accent" />)}
                </div>
                <p className="text-brand-deep font-black italic text-xl leading-snug mb-3">"Transformed my driveway in just one morning. Absolute magic!"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center font-black text-brand-accent">S</div>
                  <div>
                    <p className="text-brand-deep font-bold text-sm">Sarah M.</p>
                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Hucknall Resident</p>
                  </div>
                </div>
             </div>
          </div>
          {/* Accent Blobs */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-brand-accent/20 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
};
