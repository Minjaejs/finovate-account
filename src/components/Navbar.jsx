import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './ui/Button';

const links = [
  { name: 'Products', href: '#services' },
  { name: 'Solutions', href: '#about' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Resources', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200/50 shadow-[0_4px_20px_-10px_rgba(15,23,42,0.05)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          <div className="flex items-center">
            <a href="#home" className="text-[22px] font-display font-black text-[#0F172A] tracking-tight hover:opacity-80 transition-opacity">
              Finovate
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-2">
            <div className="flex space-x-6 mr-8">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group relative px-2 py-2 font-display font-bold text-[14.5px] text-[#1E2937] hover:text-[#0F172A] transition-colors duration-200"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#14B8A6] transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
            <a href="#contact" className="relative group">
              <Button variant="primary" className="relative !h-[48px] px-8 font-display text-[15px] tracking-tight group-hover:-translate-y-0.5 transition-all">
                Book Free Consultation
              </Button>
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#0F172A] focus:outline-none p-2 rounded-xl hover:bg-gray-50 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-4 right-4 mt-2 md:hidden"
          >
            <div className="bg-white/95 backdrop-blur-xl rounded-[20px] shadow-[0_20px_40px_-15px_rgba(15,23,42,0.2)] overflow-hidden relative ring-1 ring-gray-900/5 border border-gray-100">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#14B8A6] to-[#6366F1]"></div>
              <div className="p-4 space-y-1">
                {links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-5 py-3.5 text-[15px] font-display font-bold text-[#0F172A] hover:text-[#14B8A6] hover:bg-[#F8FAFC] rounded-xl transition-all duration-300"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-4 pb-2 px-2 border-t border-gray-100 mt-2 space-y-3">
                  <a href="#contact">
                    <Button variant="primary" className="w-full justify-center !h-[48px] text-[15px]">
                      Book Free Consultation
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
