import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, FileText, PieChart, PoundSterling, Users, ShieldCheck, ArrowRight } from 'lucide-react';

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * index, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              <div className="card-premium h-full bg-white border border-gray-200/80 p-6 relative z-10 overflow-hidden flex flex-col sm:flex-row gap-5 items-start hover:-translate-y-1 transition-transform duration-300 ease-out cursor-default hover:border-[#14B8A6]/30">
                <div className="shrink-0 w-[46px] h-[46px] rounded-[14px] bg-[#F8FAFC] flex items-center justify-center border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.02)] group-hover:bg-white group-hover:shadow-[0_4px_12px_rgba(20,184,166,0.15)] group-hover:scale-110 transition-all duration-400 ease-[0.16_1_0.3_1]">
                  {service.icon}
                </div>

                <div className="flex-1">
                  <h3 className="text-[17px] font-display font-bold text-[#0F172A] mb-2 tracking-tight group-hover:text-[#14B8A6] transition-colors">{service.title}</h3>
                  <p className="text-[14px] text-[#1E2937] leading-[1.6] opacity-80 font-medium tracking-tight">
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
