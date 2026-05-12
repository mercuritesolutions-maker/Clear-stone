import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { TrustSections } from './components/TrustSections';
import { Contact, Footer, WhatsAppButton } from './components/Contact';

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
    <div className="relative font-sans text-brand-deep bg-white selection:bg-brand-accent/30">
      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>
      
      <Navbar />
      
      <main className="relative">
        {/* Global Structural Gradients */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-0 right-0 w-[80rem] h-[80re m] bg-brand-accent/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[60rem] h-[60rem] bg-blue-100/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="relative z-10">
          <Hero />
          <Services />
          <About />
          <TrustSections />
          <Contact />
        </div>
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
