import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Search, UserCheck, Laptop, Rocket } from 'lucide-react';

const steps = [
  { step: '01', icon: <Search className="w-6 h-6 text-[#14B8A6]" />, title: 'Consultation & Discovery', text: 'We map out your firm’s goals, current workload bottlenecks, and the precise velocity metrics you need.' },
  { step: '02', icon: <UserCheck className="w-6 h-6 text-[#6366F1]" />, title: 'Sourcing & Verification', text: 'Our specialized recruiting engine algorithmically matches you with candidates from our top 2% vetted talent pool.' },
  { step: '03', icon: <Laptop className="w-6 h-6 text-[#10B981]" />, title: 'Systems Onboarding', text: 'Your new team members undergo SOC2-compliant training on your firm’s specific tech stack and communication protocols.' },
  { step: '04', icon: <Rocket className="w-6 h-6 text-[#00D4FF]" />, title: 'Live Deployment', text: 'Your fully dedicated offshore unit begins production within our encrypted facility, scaling your output immediately.' },
];

const HowItWorks = () => {
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-[#0F172A] relative z-0">
      {/* Immersive Background Architecture */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#14B8A6]/10 via-[#6366F1]/5 to-transparent rounded-full blur-[120px] mix-blend-screen opacity-60"></div>
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#10B981]/10 via-teal-900/10 to-transparent rounded-full blur-[100px] mix-blend-screen opacity-50"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] mix-blend-overlay"></div>
      </div>

      <div className="max-w-[1300px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-20 lg:mb-28">
          <div className="max-w-[650px]">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#14B8A6]/10 text-[#14B8A6] font-bold text-[11px] uppercase tracking-[0.2em] mb-6 border border-[#14B8A6]/20 rounded-md shadow-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] shadow-[0_0_8px_rgba(20,184,166,0.8)] animate-pulse"></span>
              Deployment Engine
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, delay: 0.1 }}
              className="text-[28px] lg:text-[36px] font-display font-bold tracking-[-0.02em] text-white leading-[1.15]"
            >
              A seamless, zero-friction <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14B8A6] via-emerald-300 to-[#10B981] drop-shadow-[0_0_20px_rgba(16,185,129,0.2)]">Integration Process.</span>
            </motion.h2>
          </div>
          <div className="max-w-[420px] pb-3">
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, delay: 0.2 }}
              className="text-[16px] lg:text-[18px] text-blue-50/70 leading-[1.65] font-medium tracking-tight"
            >
              We completely abstract away the complexities of international hiring. In under four weeks, you deploy an integrated offshore team functioning natively inside your infrastructure.
            </motion.p>
          </div>
        </div>

        {/* Premium Redesigned Stepper */}
        <div className="relative">
          {/* Animated Stepper Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-[#1E293B] -translate-y-1/2 hidden lg:block rounded-full"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="group relative"
              >
                <div className="flex-1 h-full bg-gradient-to-b from-[#1E293B]/80 to-transparent border border-[#334155] rounded-[24px] p-8 lg:p-10 backdrop-blur-sm group-hover:from-[#14B8A6]/10 group-hover:to-transparent group-hover:border-[#14B8A6]/40 hover:shadow-[0_0_40px_rgba(20,184,166,0.1)] transition-all duration-500 ease-[0.16_1_0.3_1] relative overflow-hidden group-hover:-translate-y-3 flex flex-col justify-start">
                  
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-[16px] bg-[#0F172A] border border-[#334155] mb-8 group-hover:border-[#14B8A6] group-hover:bg-[#14B8A6]/10 shadow-[inset_0_2px_10px_rgba(255,255,255,0.05)] transition-all duration-400 relative">
                     <span className="absolute -top-3 -right-3 text-[10px] bg-[#1E293B] border border-[#334155] px-2 py-0.5 rounded-full font-bold text-gray-400 group-hover:text-white group-hover:bg-[#14B8A6] transition-colors">{step.step}</span>
                     <div className="group-hover:scale-110 transition-transform">{step.icon}</div>
                  </div>

                  <h3 className="text-[18px] lg:text-[20px] font-display font-bold text-white mb-3 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#14B8A6] group-hover:to-[#00D4FF] transition-all duration-300">{step.title}</h3>
                  <p className="text-[14px] lg:text-[15px] text-blue-50/60 leading-[1.65] font-medium tracking-tight group-hover:text-blue-50/90 transition-colors">
                    {step.text}
                  </p>

                  <div className="w-8 h-[3px] bg-gradient-to-r from-[#14B8A6] to-[#6366F1] rounded-full mt-auto pt-8 opacity-40 group-hover:opacity-100 group-hover:w-full transition-all duration-500 ease-[0.16_1_0.3_1]"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
