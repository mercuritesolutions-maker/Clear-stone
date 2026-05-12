import React from 'react';
import { Shovel, ShieldCheck, Waves, Sparkles, Home, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    title: 'Driveway Cleaning',
    description: 'Breathe new life into your driveway. We remove oil stains, moss, weeds, and years of stubborn dirt.',
    icon: <Home className="w-8 h-8" />,
  },
  {
    title: 'Patio Cleaning',
    description: 'Transform your outdoor living space. Our precise cleaning restores the natural colour of your stone or slabs.',
    icon: <Sparkles className="w-8 h-8" />,
  },
  {
    title: 'Pathway Cleaning',
    description: 'Safe and slip-free walkways. We ensure your paths look pristine and are safe for all weather conditions.',
    icon: <Shovel className="w-8 h-8" />,
  },
  {
    title: 'Jet Washing',
    description: 'High-pressure solutions for any surface. From brickwork to garden furniture, we handle it all with care.',
    icon: <Waves className="w-8 h-8" />,
  },
  {
    title: 'General Exterior cleans',
    description: 'Complete property facelifts. Comprehensive exterior cleaning tailored to your property\'s specific needs.',
    icon: <ShieldCheck className="w-8 h-8" />,
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-32 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-accent font-bold tracking-widest uppercase text-sm mb-4 block">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-deep mb-6 text-balance">
               Professional Cleaning Solutions <br /> For Every Surface
            </h2>
            <div className="w-20 h-1.5 bg-brand-accent mx-auto rounded-full" />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group relative bg-white p-10 rounded-[3.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100/80 hover:border-brand-accent/40 transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(59,130,246,0.15)] hover:-translate-y-4"
            >
              <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center text-brand-deep mb-8 group-hover:bg-brand-accent group-hover:text-white group-hover:rotate-6 transition-all duration-500 shadow-inner">
                {service.icon}
              </div>
              <h3 className="text-2xl font-display font-black text-brand-deep mb-4 group-hover:text-brand-accent transition-colors tracking-tight">
                {service.title}
              </h3>
              <p className="text-slate-500 leading-relaxed font-medium mb-8">
                {service.description}
              </p>
              <div className="flex items-center gap-2 text-brand-accent font-black text-sm uppercase tracking-widest opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                Explore Service <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pricing Guide Section */}
        <div className="group bg-brand-deep rounded-[4rem] p-12 md:p-24 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-brand-accent/20 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/3" />
           <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-blue-600/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/3" />
           
           <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-[1px] bg-brand-accent" />
                  <span className="text-brand-accent font-black tracking-[0.3em] uppercase text-xs">Premium Value</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-display font-black text-white mb-8 tracking-tighter leading-none">
                  Investment <br />
                  <span className="text-slate-500 italic">Framework.</span>
                </h2>
                <p className="text-xl text-slate-400 mb-10 max-w-md leading-relaxed font-medium">Professional finishing for every budget. Every clean includes our signature deep-wash process and surface protection.</p>
                <div className="flex flex-wrap gap-4">
                   {['Driveways', 'Patios', 'Decking', 'Brickwork'].map(tag => (
                     <div key={tag} className="bg-white/5 border border-white/10 px-8 py-4 rounded-2xl text-white font-bold text-sm hover:bg-white/10 hover:border-white/20 transition-all cursor-default">
                       {tag}
                     </div>
                   ))}
                </div>
              </div>

              <div className="grid gap-6">
                 {[
                   { label: 'Compact Strategy', price: '25', desc: 'Up to 20m² surfaces' },
                   { label: 'Executive Tier', price: '50', desc: 'Up to 50m² surfaces' },
                   { label: 'Estate Solution', price: '75', desc: 'Large scale projects' }
                 ].map((tier, i) => (
                   <motion.div 
                    key={i}
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="group/item bg-white p-10 rounded-[2.5rem] flex items-center justify-between shadow-2xl border-2 border-transparent hover:border-brand-accent/20 transition-all"
                   >
                     <div>
                       <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mb-2">{tier.label}</p>
                       <h4 className="text-brand-deep font-black text-xl mb-1">{tier.desc}</h4>
                       <p className="text-slate-400 text-xs font-bold">Comprehensive restoration included</p>
                     </div>
                     <div className="text-right">
                       <p className="text-slate-400 text-[10px] font-black uppercase mb-1">From</p>
                       <p className="text-5xl font-display font-black text-brand-deep leading-none">£{tier.price}</p>
                     </div>
                   </motion.div>
                 ))}
                 <p className="text-slate-500 text-center text-xs font-bold mt-4 italic">* Prices vary based on layout and condition. Fixed quote provided after site survey.</p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};
