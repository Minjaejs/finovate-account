import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, ShieldCheck, CheckCircle2, X } from 'lucide-react';

const comparisonData = [
  { role: 'Bookkeeper', local: '£27,000 – £35,000', finovate: '£10,000 – £12,000', savings: '60–70%' },
  { role: 'Full Client Accountant', local: '£35,000 – £50,000', finovate: '£18,000 – £24,000', savings: '50–60%' }
];

const overheadCosts = [
  'Employer National Insurance Contributions',
  'Pension Contributions',
  'Office Rent & Utilities',
  'Recruitment & Agency Fees',
  'HR & Management Overhead',
  'Paid Leave & Sick Pay',
  'Equipment, Software & Licensing Costs'
];

const CostComparison = () => {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-white relative overflow-hidden -mt-10 lg:-mt-16 z-20">

      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#14B8A6]/5 rounded-full blur-[100px] pointer-events-none transform -translate-y-1/2"></div>

      <div className="max-w-[1300px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        <div className="mb-16 lg:mb-20 max-w-[1100px] mx-auto">
          <div className="max-w-[700px]">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F8FAFC] text-[#0F172A] font-bold text-[11px] uppercase tracking-[0.2em] mb-6 border border-gray-200/60 shadow-sm rounded-md">
              <ShieldCheck className="w-4 h-4 text-[#14B8A6]" />
              The Current UK Cost Structure
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[28px] lg:text-[36px] font-display font-bold tracking-[-0.02em] text-[#0F172A] leading-[1.15] mb-5"
            >
              Hiring in the UK involves <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14B8A6] via-[#6366F1] to-[#10B981]">more than base salary.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, delay: 0.1 }}
              className="text-[16px] xl:text-[18px] text-[#1E2937] leading-[1.65] font-medium tracking-tight max-w-[500px]"
            >
              Employers must account for several additional overhead costs that significantly increase the total employment expense.
            </motion.p>
          </div>
        </div>

        {/* Premium Redesigned Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, delay: 0.15 }}
          className="flex flex-col xl:flex-row gap-8 items-stretch max-w-[1100px] mx-auto"
        >
          {/* Left Side: Clean Overhead List */}
          <div className="xl:w-[280px] shrink-0 w-full relative">
            <div className="h-full bg-[#fafafa] rounded-[24px] p-6 lg:p-8 border border-gray-100 flex flex-col shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] relative z-10 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-red-400 to-orange-400"></div>

              <h3 className="font-display font-bold text-[#0F172A] text-[20px] mb-2 tracking-tight leading-tight">
                Hidden UK Overheads
              </h3>
              <p className="text-[14px] text-gray-500 font-medium mb-6 pb-6 border-b border-gray-200/60 leading-tight">
                Instantly eliminated with our model.
              </p>

              <ul className="space-y-4">
                {overheadCosts.map((cost, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[14px] xl:text-[14px] text-[#1E2937] font-medium tracking-tight leading-snug">
                    <div className="w-[18px] h-[18px] mt-0.5 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                      <X className="w-[10px] h-[10px] text-red-500" />
                    </div>
                    <span>{cost}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Side: Primary Pricing Comparison Cards */}
          <div className="flex-1 w-full flex flex-col gap-6 relative z-20">
            {comparisonData.map((item, index) => (
              <div key={index} className="relative rounded-[24px] bg-white shadow-super-layered border border-gray-200 p-6 lg:p-8 flex flex-col overflow-hidden group hover:border-[#14B8A6]/30 hover:shadow-[0_25px_50px_-12px_rgba(20,184,166,0.15)] transition-all duration-400">
                {/* Subtle top highlight */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-gray-100 to-gray-200 group-hover:from-[#14B8A6] group-hover:to-[#6366F1] transition-all duration-500"></div>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                  <h3 className="font-display font-black text-[#0F172A] text-[22px] tracking-tight">{item.role}</h3>
                  <div className="inline-flex items-center mt-3 md:mt-0 font-display font-black text-[#10B981] text-[16px] tracking-tight bg-[#10B981]/10 px-3 py-1.5 rounded-full">
                    Saves {item.savings}
                    <TrendingDown className="w-4 h-4 ml-1.5" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {/* UK Cost */}
                  <div className="bg-red-50/50 rounded-[16px] p-5 border border-red-100/50">
                    <div className="flex items-center gap-2 mb-2 text-red-500 text-[12px] font-bold uppercase tracking-wider">
                      <X className="w-4 h-4" /> UK Internal Cost
                    </div>
                    <div className="text-[20px] text-gray-400 font-medium line-through decoration-red-400/50 decoration-2">{item.local}</div>
                  </div>

                  {/* Finovate Cost */}
                  <div className="bg-[#14B8A6]/5 rounded-[16px] p-5 border border-[#14B8A6]/20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#14B8A6]/20 to-transparent blur-xl rounded-full"></div>
                    <div className="flex items-center gap-2 mb-2 text-[#14B8A6] text-[12px] font-bold uppercase tracking-wider relative z-10">
                      <CheckCircle2 className="w-4 h-4" /> Finovate Remote Cost
                    </div>
                    <div className="font-display font-black text-[#0F172A] text-[24px] tracking-tight relative z-10">{item.finovate}</div>
                  </div>
                </div>

                {/* Progress Bar Visualizer */}
                <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden flex">
                  {/* The actual cost we charge (approx 35%) */}
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "35%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="bg-[#14B8A6] h-full"
                  />
                  {/* The savings amount (approx 65%) */}
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "65%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    className="bg-[#10B981]/20 relative h-full flex items-center"
                  >
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30 mix-blend-overlay"></div>
                  </motion.div>
                </div>
                <div className="flex justify-between mt-2 text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                  <span>Cost you pay</span>
                  <span className="text-[#10B981]">Saved Capital</span>
                </div>
              </div>
            ))}
            
            {/* Trust Footer below Cards */}
            <div className="bg-[#F8FAFC] rounded-[24px] px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center sm:items-start gap-4 border border-gray-100 z-10">
              <div className="w-10 h-10 rounded-[12px] bg-white border border-[#14B8A6]/20 shadow-sm flex flex-shrink-0 items-center justify-center text-[#14B8A6]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <p className="text-[13px] lg:text-[14px] font-medium text-[#1E2937] leading-[1.65] text-center sm:text-left">
                Each resource works exclusively for your firm and is <strong className="text-[#0F172A] font-bold bg-[#10B981]/10 px-1 py-0.5 rounded">not shared</strong> with any other organisation. This ensures accountability, consistency, and complete alignment with your processes and quality standards.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default CostComparison;
