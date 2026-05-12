import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-40 bg-white overflow-hidden relative">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-slate-50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-[12px] border-slate-50 rotate-3 hover:rotate-0 transition-transform duration-700">
               <img 
                src="https://images.unsplash.com/photo-1617196034602-48cdba7ad7c1?auto=format&fit=crop&q=90&w=1000" 
                alt="Pressure Washing Professional" 
                className="w-full h-full object-cover"
               />
            </div>
            {/* Experience Badge */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -bottom-12 -right-12 bg-white p-12 rounded-[3.5rem] shadow-2xl border border-slate-100 flex flex-col items-center justify-center min-w-[240px]"
            >
               <div className="text-7xl font-display font-black text-brand-accent leading-none mb-2">10+</div>
               <div className="font-black uppercase tracking-[0.3em] text-[10px] text-slate-400">Years Mastery</div>
            </motion.div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-brand-accent" />
              <span className="text-brand-accent font-black tracking-[0.3em] uppercase text-xs">Our Heritage</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-display font-black text-brand-deep mb-10 leading-[1.1] tracking-tighter">
              Boutique Care <br />
              <span className="text-slate-400 italic font-medium">Local Excellence.</span>
            </h2>
            
            <p className="text-xl text-slate-500 mb-10 leading-relaxed font-medium">
              Clearstone is Hucknall's premier exterior cleaning collective. We don't just wash surfaces; we restore the architectural dignity of your property using the industry's most advanced restoration techniques.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6 mb-12">
              {[
                "Precision Grade Gear",
                "Bio-Safe Restoration",
                "Whisper-Quiet Ops",
                "Fixed Logic Pricing"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="text-brand-deep font-black text-sm uppercase tracking-wider">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 relative">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <CheckCircle2 className="w-20 h-20 text-brand-accent" />
              </div>
              <p className="text-brand-deep font-black italic text-xl leading-relaxed mb-6 relative z-10">
                "We treat every driveway and patio as a gallery piece. Precision is our only standard."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-accent/20 flex items-center justify-center font-black text-brand-accent">RS</div>
                <div>
                  <p className="text-brand-deep font-black text-sm">Ryan Scarborough</p>
                  <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Founder & Master Cleaner</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
