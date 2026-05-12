import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { TrustSections } from './components/TrustSections';
import { Contact, Footer, WhatsAppButton } from './components/Contact';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-4 border-slate-100">
               <img 
                src="https://images.unsplash.com/photo-1617196034602-48cdba7ad7c1?auto=format&fit=crop&q=80&w=800" 
                alt="Pressure Washing Professional" 
                className="w-full h-full object-cover"
               />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-10 -right-10 bg-brand-accent p-10 rounded-[2rem] text-white shadow-2xl border-4 border-white">
               <div className="text-5xl font-display font-extrabold mb-1">10+</div>
               <div className="font-bold uppercase tracking-widest text-xs opacity-80 text-nowrap">Years Experience</div>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <span className="text-brand-accent font-bold tracking-widest uppercase text-sm mb-4 block">About Clearstone</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-deep mb-8 leading-tight">
              A Local Business <br /> built on <span className="text-brand-accent italic font-light">Trust & Excellence.</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              At Clearstone, we believe your property's exterior is just as important as the interior. Based in Hucknall, we provide a premium, reliable cleaning service focused on restoring driveways, patios, and paving to their former glory.
            </p>
            
            <div className="space-y-4 mb-10">
              {[
                "Industrial strength machinery",
                "Eco-friendly cleaning detergents",
                "Minimum disturbance to neighbours",
                "Transparent, no-hidden-cost pricing"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand-accent" />
                  <span className="text-brand-deep font-bold">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-slate-500 mb-0 font-medium italic">
              "We treat every driveway and patio as if it were our own. That's why we have so many repeat customers and local recommendations."
              <br />
              <span className="text-brand-deep font-display font-bold not-italic block mt-4">— Mark Stevens, Founder</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Clearstone Exterior Cleaning",
    "image": "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80&w=2000",
    "@id": "",
    "url": "https://clearstonecleaning.co.uk",
    "telephone": "07000000000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Hucknall",
      "addressLocality": "Hucknall",
      "addressRegion": "Nottinghamshire",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 53.0360,
      "longitude": -1.2030
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.facebook.com/clearstonecleaning"
    ],
    "priceRange": "££"
  };

  return (
    <div className="relative font-sans text-brand-deep">
      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>
      
      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <About />
        <TrustSections />
        <Contact />
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
