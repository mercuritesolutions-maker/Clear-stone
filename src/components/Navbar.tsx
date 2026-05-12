import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-700 w-[95%] max-w-7xl rounded-[2.5rem] border border-white/10 px-8 py-5',
        isScrolled 
          ? 'bg-white/80 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-slate-100 py-4 top-4' 
          : 'bg-white/5 backdrop-blur-md py-6'
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-12 h-12 bg-brand-accent rounded-2xl flex items-center justify-center shadow-lg shadow-brand-accent/20 group-hover:rotate-12 transition-transform duration-500">
            <span className="text-white font-display font-black text-2xl italic">C</span>
          </div>
          <span className={cn(
            "text-2xl font-display font-black tracking-tighter leading-none transition-colors duration-500",
            isScrolled ? "text-brand-deep" : "text-white"
          )}>
            CLEAR<span className="text-brand-accent">STONE.</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={cn(
                "text-xs font-black uppercase tracking-[0.2em] transition-all hover:text-brand-accent relative group/link",
                isScrolled ? "text-slate-500" : "text-white/80"
              )}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand-accent transition-all group-hover/link:w-full" />
            </a>
          ))}
          <a
            href="tel:07000000000"
            className="flex items-center gap-3 bg-brand-accent hover:bg-brand-accent/90 text-white px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-[0_15px_30px_rgba(59,130,246,0.3)]"
          >
            <Phone className="w-4 h-4" />
            Book Quotes
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-brand-deep"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={cn("w-8 h-8", !isScrolled && !isMobileMenuOpen ? "text-white" : "text-brand-deep")} />
          ) : (
            <Menu className={cn("w-8 h-8", !isScrolled ? "text-white" : "text-brand-deep")} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-2xl p-6 flex flex-col gap-4 border-t border-slate-100"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-semibold text-slate-800 hover:text-brand-accent transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="tel:07000000000"
              className="flex items-center justify-center gap-2 bg-brand-deep text-white px-6 py-4 rounded-xl text-lg font-bold mt-4"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
