import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, FileText, PieChart, PoundSterling, Users, ShieldCheck, ArrowRight, Laptop } from 'lucide-react';

const services = [
  {
    title: 'Bookkeeping API',
    description: 'Accurate, timely recording of transactions. Real-time ledger maintenance ensuring gapless sync.',
    icon: <BookOpen className="w-[20px] h-[20px] text-[#14B8A6]" />
  },
  {
    title: 'Final Accounts',
    description: 'Statutory preparation aligned meticulously with complex UK GAAP and IFRS framework standards.',
    icon: <FileText className="w-[20px] h-[20px] text-[#6366F1]" />
  },
  {
    title: 'Management Ops',
    description: 'Granular financial reporting providing deep strategic visibility for board-level business decisions.',
    icon: <PieChart className="w-[20px] h-[20px] text-[#10B981]" />
  },
  {
    title: 'VAT Automation',
    description: 'Automated extraction formatting and MTD-compliant VAT filing, ensuring absolute filing accuracy.',
    icon: <PoundSterling className="w-[20px] h-[20px] text-[#14B8A6]" />
  },
  {
    title: 'Payroll Engine',
    description: 'End-to-end processing, strict PAYE compliance, and scalable employee onboarding without the overhead.',
    icon: <Users className="w-[20px] h-[20px] text-[#6366F1]" />
  },
  {
    title: 'Tax Compliance',
    description: 'Complex strategic tax planning and corporate tax return (CT600) filing handled in isolated environments.',
    icon: <ShieldCheck className="w-[20px] h-[20px] text-[#10B981]" />
  },
  {
    title: 'MTD for ITSA',
    description: 'Stop dreading the January tax bill. From April 2026, with MTD for ITSA, switch to quarterly digital updates for real-time tax insights and better control over your cash flow..',
    icon: <Laptop className="w-[20px] h-[20px] text-[#14B8A6]" />
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white relative z-20 -mt-10 lg:-mt-20">

      <div className="max-w-[1300px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-16 lg:mb-20 pt-8 lg:pt-12 hairline-t">
          <div className="max-w-[600px]">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[28px] lg:text-[36px] font-display font-bold tracking-[-0.02em] text-[#0F172A] leading-[1.15] drop-shadow-sm"
            >
              Unified accounting <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14B8A6] via-[#6366F1] to-[#10B981]">infrastructure.</span>
            </motion.h2>
          </div>
          <div className="max-w-[480px]">
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, delay: 0.1 }}
              className="text-[16px] lg:text-[18px] text-[#1E2937] leading-[1.6] font-medium tracking-tight"
            >
              A fully integrated suite of premium financial services. Built specifically to handle the compliance and volume of top-tier UK & Ireland firms.
            </motion.p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 lg:gap-5">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * index, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-14px)] xl:w-[calc(25%-15px)] flex"
            >
              <div className="card-premium relative h-full w-full bg-white rounded-[20px] border border-gray-200/80 p-6 z-10 overflow-hidden flex flex-col gap-4 items-start cursor-default transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(20,184,166,0.15)]">
                {/* Subtle gradient border on hover */}
                <div className="absolute inset-0 rounded-[20px] bg-gradient-to-br from-[#14B8A6]/0 to-[#6366F1]/0 opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity duration-500 border-2 border-transparent group-hover:border-[#14B8A6]/30"></div>

                <div className="shrink-0 relative w-[48px] h-[48px] rounded-[14px] bg-[#F8FAFC] flex items-center justify-center border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all duration-500 ease-[0.16_1_0.3_1] group-hover:-translate-y-1 group-hover:bg-white group-hover:shadow-[0_8px_16px_rgba(20,184,166,0.2)] group-hover:border-[#14B8A6]/20">
                  <div className="transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    {service.icon}
                  </div>
                </div>

                <div className="flex-1 relative z-10">
                  <h3 className="text-[17px] font-display font-bold text-[#0F172A] tracking-tight group-hover:text-[#14B8A6] transition-colors duration-300">{service.title}</h3>
                  <p className="text-[14px] text-[#1E2937] leading-[1.6] opacity-80 font-medium tracking-tight mt-1.5 transition-opacity group-hover:opacity-100">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
