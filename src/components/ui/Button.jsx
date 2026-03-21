import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "inline-flex items-center justify-center px-8 font-bold tracking-tight rounded-[12px] h-[56px] transition-all duration-300 disabled:opacity-50";
  
  const variants = {
    primary: "bg-[#14B8A6] hover:bg-[#22D3B6] hover:scale-105 text-white shadow-[0_4px_12px_rgba(20,184,166,0.25)] hover:shadow-[0_8px_20px_rgba(20,184,166,0.4)] transition-all duration-300",
    secondary: "bg-[#6366F1] hover:bg-[#4F46E5] text-white shadow-md hover:shadow-lg hover:-translate-y-1",
    outline: "border border-gray-200 text-[#0F172A] hover:bg-[#F8FAFC] hover:border-gray-300 hover:shadow-sm",
    white: "bg-white text-[#14B8A6] hover:bg-[#F8FAFC] shadow-[0_4px_15px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_25px_-5px_rgba(0,0,0,0.15)] hover:-translate-y-1 hover:scale-105 transition-transform"
  };

  return (
    <motion.button 
      whileTap={{ scale: 0.98 }}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
