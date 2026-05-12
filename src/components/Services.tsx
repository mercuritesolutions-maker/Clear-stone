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
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-deep mb-6">
              Expert Cleaning Solutions <br /> For Every Surface
            </h2>
            <div className="w-20 h-1.5 bg-brand-accent mx-auto rounded-full" />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-brand-accent/30 transition-all hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-brand-accent/10 rounded-2xl flex items-center justify-center text-brand-accent mb-8 group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-display font-bold text-brand-deep mb-4 group-hover:text-brand-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-8">
                {service.description}
              </p>
              <button className="flex items-center gap-2 text-brand-deep font-bold hover:gap-4 transition-all">
                Learn More
                <ArrowRight className="w-4 h-4 text-brand-accent" />
              </button>
            </motion.div>
          ))}
          
          {/* Custom Quote Card */}
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="bg-brand-deep p-10 rounded-[2.5rem] flex flex-col justify-center text-center items-center text-white relative overflow-hidden"
          >
            <div className="relative z-10">
               <h3 className="text-3xl font-display font-bold mb-4 italic">Need something else?</h3>
               <p className="text-slate-400 mb-8 max-w-[240px]">We offer bespoke cleaning packages for larger properties and commercial clients.</p>
               <button className="bg-white text-brand-deep px-8 py-4 rounded-2xl font-bold hover:bg-slate-100 transition-colors">
                 Enquire Now
               </button>
            </div>
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/20 blur-3xl rounded-full" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
