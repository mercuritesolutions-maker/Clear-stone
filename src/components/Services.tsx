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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-brand-accent/30 transition-all hover:-translate-y-2 group"
            >
              <div className="w-14 h-14 bg-brand-accent/10 rounded-2xl flex items-center justify-center text-brand-accent mb-6 group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-display font-bold text-brand-deep mb-3 group-hover:text-brand-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Pricing Guide Section */}
        <div className="bg-brand-deep rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center md:text-left">
           <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/10 blur-[100px] rounded-full" />
           
           <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-brand-accent font-bold tracking-widest uppercase text-sm mb-4 block">Fair & Transparent</span>
                <h2 className="text-4xl font-display font-bold text-white mb-6">CLEARSTONE Price Guide</h2>
                <p className="text-slate-400 text-lg mb-8 max-w-md">Professional finishing for every budget. Every clean includes our signature deep-wash process and surface protection.</p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                   <div className="bg-white/5 border border-white/10 px-6 py-3 rounded-xl text-white font-bold">Driveways</div>
                   <div className="bg-white/5 border border-white/10 px-6 py-3 rounded-xl text-white font-bold">Patios</div>
                   <div className="bg-white/5 border border-white/10 px-6 py-3 rounded-xl text-white font-bold">Paths</div>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-6">
                 {[
                   { label: 'Small Areas', price: '£25' },
                   { label: 'Medium Areas', price: '£50' },
                   { label: 'Large Areas', price: '£75' }
                 ].map((tier, i) => (
                   <motion.div 
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white p-8 rounded-3xl text-center shadow-2xl"
                   >
                     <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">{tier.label}</p>
                     <p className="text-slate-500 text-sm mb-1 italic">From</p>
                     <p className="text-4xl font-display font-bold text-brand-deep mb-4">{tier.price}</p>
                     <div className="w-full h-[1px] bg-slate-100 mb-4" />
                     <button className="text-brand-accent font-bold text-xs uppercase tracking-tighter">Book Quote</button>
                   </motion.div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};
