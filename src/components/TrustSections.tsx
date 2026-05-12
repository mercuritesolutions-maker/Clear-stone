import React from 'react';
import { ShieldCheck, MapPin, ThumbsUp, Star, PlayCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const TrustSections = () => {
  return (
    <>
      {/* Why Choose Us */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <ShieldCheck className="w-10 h-10" />,
                title: 'Fully Insured',
                desc: 'Peace of mind with comprehensive public liability insurance for all residential and commercial work.'
              },
              {
                icon: <MapPin className="w-10 h-10" />,
                title: 'Local & Reliable',
                desc: 'Based in your community. We pride ourselves on punctuality and transparent communication.'
              },
              {
                icon: <ThumbsUp className="w-10 h-10" />,
                title: 'Satisfaction Guaranteed',
                desc: 'We don\'t leave until you are 100% happy with the transformation of your property.'
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-deep group-hover:bg-brand-accent group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-brand-deep mb-3">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed max-w-sm mx-auto">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery / Results */}
      <section id="gallery" className="py-32 bg-brand-deep overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-brand-accent font-bold tracking-widest uppercase text-sm mb-4 block">Proven Results</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-0">The Clearstone Difference</h2>
            </div>
            <button className="flex items-center gap-2 text-white/60 hover:text-white font-semibold transition-colors">
              <PlayCircle className="w-5 h-5" />
              Watch us in action
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                before: "https://images.unsplash.com/photo-1590483734731-50e50f3844da?auto=format&fit=crop&q=80&w=800",
                after: "https://images.unsplash.com/photo-1621905252509-b45091724738?auto=format&fit=crop&q=80&w=800",
                label: "Driveway Restoration"
              },
              {
                before: "https://images.unsplash.com/photo-1541818138-ef8634e9e0cb?auto=format&fit=crop&q=80&w=800",
                after: "https://images.unsplash.com/photo-1516528387618-afa90b13e000?auto=format&fit=crop&q=80&w=800",
                label: "Sandstone Patio Deep Clean"
              },
              {
                before: "https://images.unsplash.com/photo-1595428707305-654db52f5341?auto=format&fit=crop&q=80&w=800",
                after: "https://images.unsplash.com/photo-1558223931-9705503b2236?auto=format&fit=crop&q=80&w=800",
                label: "Stone Pathway Recovery"
              },
              {
                before: "https://images.unsplash.com/photo-1632759162353-19494191a357?auto=format&fit=crop&q=80&w=800",
                after: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
                label: "Commercial Surface Refresh"
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative rounded-3xl overflow-hidden aspect-video border border-white/10"
              >
                <div className="absolute inset-0 grid grid-cols-2">
                  <div className="relative overflow-hidden group">
                     <img src={item.before} alt="Before" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                     <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white text-[10px] uppercase font-bold tracking-widest px-2 py-1 rounded">Before</div>
                  </div>
                  <div className="relative overflow-hidden group">
                     <img src={item.after} alt="After" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 border-l border-white/20" />
                     <div className="absolute top-4 right-4 bg-brand-accent/80 backdrop-blur-sm text-white text-[10px] uppercase font-bold tracking-widest px-2 py-1 rounded">After</div>
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 bg-linear-to-t from-black/80 to-transparent">
                  <p className="text-white font-display font-bold text-lg">{item.label}</p>
                </div>
                {/* Drag Handle Placeholder */}
                <div className="absolute inset-y-0 left-1/2 -ml-[1px] w-[2px] bg-white pointer-events-none">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white flex items-center justify-center">
                    <div className="w-[1px] h-4 bg-brand-deep rotate-[-15deg] mx-[2px]" />
                    <div className="w-[1px] h-4 bg-brand-deep rotate-[-15deg] mx-[2px]" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-display font-bold text-brand-deep mb-4">What Our Clients Say</h2>
            <div className="flex items-center justify-center gap-1">
              {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-5 h-5 fill-brand-accent text-brand-accent" />)}
              <span className="ml-2 font-bold text-brand-deep">4.9/5 Average Rating</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "James Wilson",
                location: "Bristol",
                text: "Absolutely superb service. The driveway looks brand new. The team was professional, tidy and very thorough. Highly recommend Clearstone!",
              },
              {
                name: "Margaret Thorne",
                location: "Bath",
                text: "I was considering replacing my patio, but after Clearstone cleaned it, there is no need! The natural stone colors are back. Five stars.",
              },
              {
                name: "David Chen",
                location: "Cardiff",
                text: "Fast quote, fair price, and excellent results on our commercial property paths. Will be using them annually from now on.",
              }
            ].map((t, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-3xl shadow-lg shadow-slate-200/60 border border-slate-100"
              >
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 fill-brand-accent text-brand-accent" />)}
                </div>
                <p className="text-slate-600 italic mb-8 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center font-bold text-brand-deep">
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-deep">{t.name}</h4>
                    <p className="text-slate-400 text-sm">{t.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
