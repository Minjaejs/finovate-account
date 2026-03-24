import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './ui/Button';

const links = [
  { name: 'About', href: '#about' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Services', href: '#services' },
  { name: 'Benefits', href: '#benefits' },
  { name: 'Process', href: '#how-it-works' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${scrolled ? 'py-3' : 'py-5'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`relative flex justify-between items-center transition-all duration-500 ease-in-out px-6 rounded-[22px] ${scrolled ? 'h-14 bg-white/80 backdrop-blur-xl shadow-lg' : 'h-16 bg-transparent'}`}>

          <a href="#home" className="flex items-center group">
            <img
              src="/logo.png"
              alt="Finovate Logo"
              className="h-40 w-auto transition-all duration-300 group-hover:scale-103"
            />
          </a>

          <div className="hidden lg:flex items-center">
            <div className="flex space-x-9 mr-9">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group relative py-2 font-display font-bold text-[14px] text-brand-body hover:text-brand-dark transition-colors duration-300"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full"></span>
                </a>
              ))}
            </div>
            <a href="#contact">
              <Button
                variant="primary"
                className={`transition-all duration-500 !h-10 px-5 text-[13px] font-display shadow-sm hover:shadow-premium ${scrolled ? 'bg-brand-primary' : 'bg-brand-dark'}`}
              >
                Consultation
              </Button>
            </a>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-dark focus:outline-none p-2 rounded-xl hover:bg-white/50 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full left-4 right-4 mt-3 lg:hidden"
          >
            <div className="bg-white/95 backdrop-blur-2xl rounded-3xl shadow-premium overflow-hidden border border-white/40">
              <div className="p-5 space-y-1">
                {links.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => setIsOpen(false)}
                    className="block px-5 py-3.5 text-[15px] font-display font-bold text-brand-dark hover:text-brand-primary hover:bg-brand-bg rounded-2xl transition-all duration-300"
                  >
                    {link.name}
                  </motion.a>
                ))}
                <div className="pt-4 pb-2 px-2 mt-2 border-t border-gray-100">
                  <a href="#contact">
                    <Button variant="primary" className="w-full justify-center !h-12 text-[15px]">
                      Get Started
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
