import React from 'react';
import { ShieldCheck, MapPin, ThumbsUp, Star, PlayCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const TrustSections = () => {
  return (
    <>
      {/* Why Choose Us */}
      <section className="py-40 bg-white border-y border-slate-100">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-16">
            {[
              {
                icon: <ShieldCheck className="w-12 h-12" />,
                title: 'Total Protection',
                desc: 'Peace of mind with comprehensive £5M public liability insurance for all residential assets.'
              },
              {
                icon: <MapPin className="w-12 h-12" />,
                title: 'Strategic Local presence',
                desc: 'Based in Hucknall. We prioritize localized precision and elite-tier response times.'
              },
              {
                icon: <ThumbsUp className="w-12 h-12" />,
                title: 'The Master Standard',
                desc: 'We don\'t conclude operations until every pixel of your property meets our zero-dirt benchmark.'
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                className="text-center group"
              >
                <div className="w-24 h-24 bg-slate-50 rounded-[2rem] flex items-center justify-center mx-auto mb-10 text-brand-deep group-hover:bg-brand-accent group-hover:text-white transition-all duration-500 shadow-inner group-hover:rotate-12">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-display font-black text-brand-deep mb-4 tracking-tight group-hover:text-brand-accent transition-colors">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed max-w-xs mx-auto font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery / Results */}
      <section id="gallery" className="py-40 bg-brand-deep overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[1px] bg-brand-accent" />
                <span className="text-brand-accent font-black tracking-[0.3em] uppercase text-xs">Vivid Restoration</span>
              </div>
              <h2 className="text-5xl md:text-8xl font-display font-black text-white mb-0 tracking-tighter leading-none">
                The Heritage <br />
                <span className="text-slate-500 italic">Portfolio.</span>
              </h2>
            </div>
            <button className="group flex items-center gap-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-2xl font-bold transition-all backdrop-blur-xl">
              <PlayCircle className="w-6 h-6 text-brand-accent group-hover:scale-125 transition-transform" />
              Watch Restoration Process
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                before: "https://images.unsplash.com/photo-1590483734731-50e50f3844da?auto=format&fit=crop&q=90&w=1000",
                after: "https://images.unsplash.com/photo-1621905252509-b45091724738?auto=format&fit=crop&q=90&w=1000",
                label: "Driveway Restoration"
              },
              {
                before: "https://images.unsplash.com/photo-1541818138-ef8634e9e0cb?auto=format&fit=crop&q=90&w=1000",
                after: "https://images.unsplash.com/photo-1516528387618-afa90b13e000?auto=format&fit=crop&q=90&w=1000",
                label: "Sandstone Patio Deep Clean"
              },
              {
                before: "https://images.unsplash.com/photo-1595428707305-654db52f5341?auto=format&fit=crop&q=90&w=1000",
                after: "https://images.unsplash.com/photo-1558223931-9705503b2236?auto=format&fit=crop&q=90&w=1000",
                label: "Stone Pathway Recovery"
              },
              {
                before: "https://images.unsplash.com/photo-1632759162353-19494191a357?auto=format&fit=crop&q=90&w=1000",
                after: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=90&w=1000",
                label: "Commercial Surface Refresh"
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 1 }}
                className="group relative rounded-[3rem] overflow-hidden aspect-video border-4 border-white/5 shadow-2xl shadow-black/50"
              >
                <div className="absolute inset-0 grid grid-cols-2">
                  <div className="relative overflow-hidden">
                     <img src={item.before} alt="Before" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                     <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md text-white text-[10px] uppercase font-black tracking-[0.3em] px-4 py-2 rounded-xl">Before</div>
                  </div>
                  <div className="relative overflow-hidden">
                     <img src={item.after} alt="After" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 border-l border-white/20" />
                     <div className="absolute top-6 right-6 bg-brand-accent/90 backdrop-blur-md text-white text-[10px] uppercase font-black tracking-[0.3em] px-4 py-2 rounded-xl">After</div>
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-10 bg-linear-to-t from-black via-black/40 to-transparent">
                  <p className="text-white font-display font-black text-2xl tracking-tight">{item.label}</p>
                </div>
                {/* Fixed Center Divider */}
                <div className="absolute inset-y-0 left-1/2 -ml-[2px] w-[4px] bg-white pointer-events-none group-hover:scale-y-110 transition-transform duration-500 shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-2xl">
                    <div className="flex gap-1">
                      <div className="w-[2px] h-4 bg-brand-deep rounded-full transform -rotate-12" />
                      <div className="w-[2px] h-4 bg-brand-deep rounded-full transform -rotate-12" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-40 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-black text-slate-100 italic pointer-events-none select-none -z-0">
          "REVIEWS"
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-brand-accent/30" />
              <span className="text-brand-accent font-black tracking-[0.3em] uppercase text-xs">Voice of Hucknall</span>
              <div className="w-12 h-[1px] bg-brand-accent/30" />
            </div>
            <h2 className="text-5xl md:text-7xl font-display font-black text-brand-deep mb-8 tracking-tighter">Client Enthusiasm.</h2>
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center justify-center gap-2">
                {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-8 h-8 fill-brand-accent text-brand-accent drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]" />)}
              </div>
              <span className="font-black text-brand-deep uppercase tracking-[0.2em] text-xs">4.9/5 Elite Average</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                name: "James Wilson",
                location: "Hucknall",
                text: "Absolutely superb service. The driveway looks brand new. The team was professional, tidy and very thorough. Highly recommend Clearstone!",
              },
              {
                name: "Margaret Thorne",
                location: "Watnall",
                text: "I was considering replacing my patio, but after Clearstone cleaned it, there is no need! The natural stone colors are back. Five stars.",
              },
              {
                name: "David Chen",
                location: "Nottingham",
                text: "Fast quote, fair price, and excellent results on our commercial property paths. Will be using them annually from now on.",
              }
            ].map((t, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-12 rounded-[3.5rem] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.08)] border border-white hover:border-brand-accent/20 transition-all duration-500"
              >
                <div className="flex gap-1 mb-8">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 fill-brand-accent text-brand-accent" />)}
                </div>
                <p className="text-brand-deep font-black italic text-xl mb-12 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-5 pt-8 border-t border-slate-50">
                  <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center font-black text-brand-accent text-xl shadow-inner group-hover:rotate-6 transition-transform">
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-black text-brand-deep text-lg">{t.name}</h4>
                    <p className="text-slate-400 text-xs font-black uppercase tracking-widest">{t.location} Resident</p>
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
