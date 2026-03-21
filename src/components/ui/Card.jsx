import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', hover = true }) => {
  const baseStyle = "bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 p-6 sm:p-8";
  
  if (hover) {
    return (
      <motion.div 
        whileHover={{ y: -5, boxShadow: "0 10px 30px -5px rgba(0,0,0,0.1)" }}
        transition={{ duration: 0.3 }}
        className={`${baseStyle} ${className}`}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={`${baseStyle} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
