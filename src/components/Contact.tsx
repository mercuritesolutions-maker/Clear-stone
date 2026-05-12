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
    <section id="contact" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-accent font-bold tracking-widest uppercase text-sm mb-4 block">Get In Touch</span>
            <h2 className="text-5xl font-display font-bold text-brand-deep mb-8 leading-tight">Ready to see <br /> the transformation?</h2>
            <p className="text-xl text-slate-500 mb-12 leading-relaxed max-w-lg">
              Fill out the form below or give us a call. We usually respond to all quote requests within 24 hours.
            </p>

            <div className="space-y-8">
              {[
                { icon: <Phone className="w-6 h-6" />, label: 'Call or WhatsApp', value: '07000 000000' },
                { icon: <Mail className="w-6 h-6" />, label: 'Email Us', value: 'hello@clearstonecleaning.co.uk' },
                { icon: <MapPin className="w-6 h-6" />, label: 'Service Areas', value: 'Serving Hucknall & Surrounding Areas' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-accent shrink-0 border border-slate-100">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-1">{item.label}</h4>
                    <p className="text-xl font-bold text-brand-deep">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 flex gap-4">
               <a href="#" className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-brand-deep hover:bg-brand-accent hover:text-white transition-all">
                 <Facebook className="w-5 h-5" />
               </a>
               <a href="#" className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-brand-deep hover:bg-brand-accent hover:text-white transition-all">
                 <Instagram className="w-5 h-5" />
               </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-10 md:p-12 rounded-[3rem] border border-slate-100 shadow-2xl shadow-slate-200/50"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500 uppercase ml-2">Your Name</label>
                  <input
                    {...register('name')}
                    placeholder="John Doe"
                    className={cn(
                      "w-full bg-white px-6 py-4 rounded-2xl border-2 border-transparent transition-all outline-none",
                      errors.name ? "border-red-400" : "focus:border-brand-accent shadow-sm focus:shadow-brand-accent/10"
                    )}
                  />
                  {errors.name && <p className="text-red-500 text-xs ml-2 uppercase font-bold">{errors.name.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500 uppercase ml-2">Phone Number</label>
                  <input
                    {...register('phone')}
                    placeholder="07xxx xxxxxx"
                    className={cn(
                      "w-full bg-white px-6 py-4 rounded-2xl border-2 border-transparent transition-all outline-none",
                      errors.phone ? "border-red-400" : "focus:border-brand-accent shadow-sm focus:shadow-brand-accent/10"
                    )}
                  />
                  {errors.phone && <p className="text-red-500 text-xs ml-2 uppercase font-bold">{errors.phone.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500 uppercase ml-2">Email Address</label>
                <input
                  {...register('email')}
                  placeholder="john@example.com"
                  className={cn(
                    "w-full bg-white px-6 py-4 rounded-2xl border-2 border-transparent transition-all outline-none",
                    errors.email ? "border-red-400" : "focus:border-brand-accent shadow-sm focus:shadow-brand-accent/10"
                  )}
                />
                {errors.email && <p className="text-red-500 text-xs ml-2 uppercase font-bold">{errors.email.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500 uppercase ml-2">Interested In</label>
                <select
                  {...register('service')}
                  className={cn(
                    "w-full bg-white px-6 py-4 rounded-2xl border-2 border-transparent transition-all outline-none appearance-none cursor-pointer",
                    errors.service ? "border-red-400" : "focus:border-brand-accent shadow-sm focus:shadow-brand-accent/10"
                  )}
                >
                  <option value="">Select a service</option>
                  <option value="driveway">Driveway Cleaning</option>
                  <option value="patio">Patio Cleaning</option>
                  <option value="pathway">Pathway Cleaning</option>
                  <option value="jet-wash">Specialist Jet Washing</option>
                  <option value="general">General Exterior Clean</option>
                </select>
                {errors.service && <p className="text-red-500 text-xs ml-2 uppercase font-bold">{errors.service.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500 uppercase ml-2">Message</label>
                <textarea
                  {...register('message')}
                  rows={4}
                  placeholder="Tell us about your project..."
                  className={cn(
                    "w-full bg-white px-6 py-4 rounded-2xl border-2 border-transparent transition-all outline-none resize-none",
                    errors.message ? "border-red-400" : "focus:border-brand-accent shadow-sm focus:shadow-brand-accent/10"
                  )}
                />
                {errors.message && <p className="text-red-500 text-xs ml-2 uppercase font-bold">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-brand-deep text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-slate-800 transition-all active:scale-95 shadow-xl"
              >
                Send Request
                <Send className="w-5 h-5" />
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
    <footer className="bg-brand-deep text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16 pb-16 border-b border-white/10">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6 text-3xl font-display font-extrabold tracking-tight">
              CLEAR<span className="text-brand-accent">STONE</span>
            </div>
            <p className="text-slate-400 max-w-sm text-lg leading-relaxed">
              Professional exterior cleaning specialists. We restore the beauty and safety of your property using professional-grade equipment and eco-friendly solutions.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Service Areas</h4>
            <ul className="space-y-3 text-slate-400 font-medium">
              <li>Hucknall</li>
              <li>Linby & Papplewick</li>
              <li>Nottinghamshire</li>
              <li>Surrounding Areas</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3 text-slate-400 font-medium">
              <li><a href="#" className="hover:text-brand-accent transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-brand-accent transition-colors">Our Services</a></li>
              <li><a href="#gallery" className="hover:text-brand-accent transition-colors">Project Gallery</a></li>
              <li><a href="#contact" className="hover:text-brand-accent transition-colors">Get a Quote</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm font-medium">
          <p>© {new Date().getFullYear()} Clearstone Exterior Cleaning. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
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
