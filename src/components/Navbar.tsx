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
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-accent rounded-lg flex items-center justify-center">
            <span className="text-white font-display font-extrabold text-xl italic">C</span>
          </div>
          <span className={cn(
            "text-2xl font-display font-extrabold tracking-tight",
            isScrolled ? "text-brand-deep" : "text-white"
          )}>
            CLEAR<span className="text-brand-accent">STONE</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-brand-accent",
                isScrolled ? "text-slate-600" : "text-white/90"
              )}
            >
              {item.label}
            </a>
          ))}
          <a
            href="tel:07000000000"
            className="flex items-center gap-2 bg-brand-accent hover:bg-brand-accent/90 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-brand-accent/20"
          >
            <Phone className="w-4 h-4" />
            07000 000000
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
