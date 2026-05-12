import React from 'react';
import { Mail, Phone, MapPin, MessageSquare, Facebook, Instagram, Send } from 'lucide-react';
import { motion } from 'motion/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { cn } from '../lib/utils';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Valid phone number is required'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    const mailtoUrl = `mailto:hello@clearstonecleaning.co.uk?subject=Quote Request from ${data.name}&body=Service: ${data.service}%0D%0APhone: ${data.phone}%0D%0AEmail: ${data.email}%0D%0A%0D%0AMessage:%0D%0A${data.message}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-40 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-brand-accent" />
              <span className="text-brand-accent font-black tracking-[0.3em] uppercase text-xs">Direct Channel</span>
            </div>
            
            <h2 className="text-6xl md:text-8xl font-display font-black text-brand-deep mb-10 tracking-tighter leading-none">
              Initiate <br />
              <span className="text-slate-400 italic font-medium">Transformation.</span>
            </h2>
            
            <p className="text-2xl text-slate-500 mb-16 leading-snug max-w-lg font-medium tracking-tight">
              Ready to restore your property's original character? Reach out for a specialized consultation.
            </p>

            <div className="space-y-12">
              {[
                { icon: <Phone className="w-8 h-8" />, label: 'Call HQ', value: '07000 000000' },
                { icon: <Mail className="w-8 h-8" />, label: 'Email', value: 'hello@clearstonecleaning.co.uk' },
                { icon: <MapPin className="w-8 h-8" />, label: 'Hucknall Base', value: 'Serving Hucknall & Surrounds' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-8 group">
                  <div className="w-20 h-20 bg-slate-50 rounded-[2rem] flex items-center justify-center text-brand-deep shrink-0 border border-slate-100 group-hover:bg-brand-accent group-hover:text-white transition-all duration-500 shadow-inner group-hover:rotate-6">
                    {item.icon}
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="text-slate-400 text-xs font-black uppercase tracking-[0.2em] mb-2">{item.label}</h4>
                    <p className="text-2xl font-black text-brand-deep leading-none">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20 flex gap-6">
               {[Facebook, Instagram].map((Icon, i) => (
                 <a key={i} href="#" className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-brand-deep hover:bg-brand-accent hover:text-white transition-all shadow-sm hover:shadow-xl hover:-translate-y-1">
                   <Icon className="w-6 h-6" />
                 </a>
               ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-slate-50/50 p-12 md:p-20 rounded-[4rem] border border-slate-100 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.05)] backdrop-blur-3xl"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Full Name</label>
                  <input
                    {...register('name')}
                    placeholder="Enter your name"
                    className={cn(
                      "w-full bg-white px-8 py-5 rounded-2xl border-2 border-transparent transition-all outline-none font-bold text-brand-deep",
                      errors.name ? "border-red-400" : "focus:border-brand-accent shadow-xl shadow-black/[0.02] focus:shadow-brand-accent/5"
                    )}
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Mobile</label>
                  <input
                    {...register('phone')}
                    placeholder="UK Contact"
                    className={cn(
                      "w-full bg-white px-8 py-5 rounded-2xl border-2 border-transparent transition-all outline-none font-bold text-brand-deep",
                      errors.phone ? "border-red-400" : "focus:border-brand-accent shadow-xl shadow-black/[0.02] focus:shadow-brand-accent/5"
                    )}
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Email Channel</label>
                <input
                  {...register('email')}
                  placeholder="Primary address"
                  className={cn(
                    "w-full bg-white px-8 py-5 rounded-2xl border-2 border-transparent transition-all outline-none font-bold text-brand-deep",
                    errors.email ? "border-red-400" : "focus:border-brand-accent shadow-xl shadow-black/[0.02] focus:shadow-brand-accent/5"
                  )}
                />
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Project Scope</label>
                <select
                  {...register('service')}
                  className={cn(
                    "w-full bg-white px-8 py-5 rounded-2xl border-2 border-transparent transition-all outline-none appearance-none cursor-pointer font-bold text-brand-deep",
                    errors.service ? "border-red-400" : "focus:border-brand-accent shadow-xl shadow-black/[0.02] focus:shadow-brand-accent/5"
                  )}
                >
                  <option value="">Choose Service</option>
                  <option value="driveway">Driveway Restoration</option>
                  <option value="patio">Patio Revitalisation</option>
                  <option value="pathway">Stone Pathway Care</option>
                  <option value="jet-wash">Master Jet Washing</option>
                  <option value="general">Estate Maintenance</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Notes</label>
                <textarea
                  {...register('message')}
                  rows={4}
                  placeholder="Share details about the property..."
                  className={cn(
                    "w-full bg-white px-8 py-6 rounded-[2.5rem] border-2 border-transparent transition-all outline-none resize-none font-bold text-brand-deep",
                    errors.message ? "border-red-400" : "focus:border-brand-accent shadow-xl shadow-black/[0.02] focus:shadow-brand-accent/5"
                  )}
                />
              </div>

              <button
                type="submit"
                className="group relative w-full bg-brand-deep text-white py-6 rounded-[2rem] font-black text-xl flex items-center justify-center gap-4 hover:shadow-[0_20px_50px_rgba(15,23,42,0.3)] transition-all duration-500 overflow-hidden active:scale-95"
              >
                <span className="relative z-10">Send Request</span>
                <Send className="w-6 h-6 relative z-10 transition-transform group-hover:translate-x-2 group-hover:-translate-y-2" />
                <div className="absolute inset-0 bg-brand-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-brand-deep text-white pt-40 pb-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-brand-accent/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-4 gap-24 mb-24 pb-24 border-b border-white/5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-10 group cursor-pointer">
              <div className="w-16 h-16 bg-brand-accent rounded-[1.5rem] flex items-center justify-center shadow-2xl shadow-brand-accent/20 group-hover:rotate-12 transition-transform duration-500">
                <span className="text-white font-display font-black text-3xl italic">C</span>
              </div>
              <span className="text-4xl font-display font-black tracking-tighter">
                CLEAR<span className="text-brand-accent">STONE.</span>
              </span>
            </div>
            <p className="text-slate-400 max-w-md text-2xl leading-snug font-medium tracking-tight">
              Crafting impeccably clean environments for Hucknall's most distinguished properties. Restoration as an art form.
            </p>
          </div>
          
          <div>
            <h4 className="font-black uppercase tracking-[0.3em] text-[10px] text-brand-accent mb-10">Operations</h4>
            <ul className="space-y-6 text-slate-300 font-black text-sm uppercase tracking-widest">
              <li>Hucknall</li>
              <li>Watnall</li>
              <li>Nottinghamshire</li>
              <li>East Midlands</li>
            </ul>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-[0.3em] text-[10px] text-brand-accent mb-10">Intelligence</h4>
            <ul className="space-y-6 text-slate-300 font-black text-sm uppercase tracking-widest">
              <li><a href="#" className="hover:text-brand-accent transition-colors">Vision</a></li>
              <li><a href="#services" className="hover:text-brand-accent transition-colors">Methods</a></li>
              <li><a href="#gallery" className="hover:text-brand-accent transition-colors">Archive</a></li>
              <li><a href="#contact" className="hover:text-brand-accent transition-colors">Connect</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-10 text-slate-500 text-[10px] font-black uppercase tracking-[0.3em]">
          <p>© {new Date().getFullYear()} Clearstone Collective. Impeccable Standards.</p>
          <div className="flex gap-12">
            <a href="#" className="hover:text-white transition-colors">Privacy Logic</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Ops</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/447000000000"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 active:scale-95 group flex items-center gap-2 pr-6"
    >
      <MessageSquare className="w-7 h-7" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-[200px] transition-all duration-500 whitespace-nowrap font-bold">
        Chat with us
      </span>
    </a>
  );
};
