import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, ShieldCheck, CheckCircle2, X } from 'lucide-react';

const comparisonData = [
  { role: 'Bookkeeper', local: '£27,000 – £35,000', finovate: '£10,000 – £12,000', savings: '60–70%' },
  { role: 'Full Client Accountant', local: '£35,000 – £50,000', finovate: '£18,000 – £24,000', savings: '50–60%' }
];

const overheadCosts = [
  'Employer National Insurance',
  'Pension Contributions',
  'Office Rent & Utilities',
  'Recruitment & Agency Fees',
  'HR & Mgmt. Overhead',
  'Paid Leave & Sick Pay',
  'Equipment & Software'
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
              Hiring involves more <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14B8A6] via-[#6366F1] to-[#10B981]">than base salary.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, delay: 0.1 }}
              className="text-[16px] xl:text-[18px] text-[#1E2937] leading-[1.65] font-medium tracking-tight max-w-[500px]"
            >
              Employers must account for severe overhead multipliers that silently drain operational capital.
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

          {/* Right Side: Primary Pricing Grid Matrix (Not HTML Table) */}
          <div className="flex-1 w-full flex flex-col relative z-20">
            <div className="relative rounded-[24px] bg-white shadow-super-layered border border-gray-200 flex flex-col h-full overflow-hidden group">

              {/* Top Gradient */}
              <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#14B8A6] to-[#6366F1]"></div>

              <div className="w-full flex-1 overflow-x-auto p-4 lg:p-8">
                <div className="min-w-[700px]">

                  {/* Column Headers */}
                  <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] gap-6 pb-6 border-b border-gray-100 items-end">
                    <div className="text-[11px] font-bold text-gray-400 tracking-[0.2em] uppercase">Role</div>
                    <div className="text-[11px] font-bold text-gray-400 tracking-[0.2em] uppercase text-center">Typical UK Salary</div>

                    {/* Highlighted Header Node */}
                    <div className="relative text-center pb-2">
                      <div className="absolute inset-0 bg-[#14B8A6]/5 rounded-[12px] border border-[#14B8A6]/10 -inset-x-4 -inset-y-4 -z-10"></div>
                      <div className="inline-block bg-[#0F172A] text-white text-[9px] uppercase tracking-[0.2em] font-bold px-3 py-1 rounded-full mb-3 shadow-[0_4px_10px_rgba(15,23,42,0.3)]">Finovate Rate</div>
                      <div className="text-[12px] font-black text-[#14B8A6] tracking-wider uppercase">Our Annual Fee</div>
                    </div>

                    <div className="text-[11px] font-bold text-[#10B981] tracking-[0.2em] uppercase text-right">Est. Savings</div>
                  </div>

                  {/* Data Rows */}
                  <div className="flex flex-col gap-2 pt-4">
                    {comparisonData.map((item, index) => (
                      <div key={index} className="grid grid-cols-[1.5fr_1fr_1fr_1fr] gap-6 items-center py-6 px-4 hover:bg-gray-50/80 rounded-[16px] transition-colors border-b border-gray-50 last:border-0 relative">

                        <div className="font-display font-bold text-[#0F172A] text-[18px] tracking-tight">{item.role}</div>

                        <div className="text-center">
                          <span className="text-[16px] text-gray-400 font-medium whitespace-nowrap px-3 py-1 rounded-md line-through decoration-red-400/50 decoration-2">{item.local}</span>
                        </div>

                        <div className="text-center relative">
                          {/* Active Column Glow Underlay */}
                          <div className="absolute inset-y-0 -inset-x-4 bg-gradient-to-b from-[#14B8A6]/[0.05] to-transparent -z-10 rounded-[12px]"></div>
                          <span className="font-display font-black text-[#0F172A] text-[20px] whitespace-nowrap">{item.finovate}</span>
                        </div>

                        <div className="text-right">
                          <div className="inline-flex items-center justify-end font-display font-black text-[#10B981] text-[22px] tracking-tighter whitespace-nowrap">
                            {item.savings}
                            <TrendingDown className="w-5 h-5 ml-1.5 opacity-80" />
                          </div>
                        </div>

                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Trust Footer inside the Table Card */}
              <div className="bg-[#F8FAFC] px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center sm:items-start gap-4 border-t border-gray-100 z-10 shrink-0">
                <div className="w-10 h-10 rounded-[12px] bg-white border border-gray-200 shadow-sm flex flex-shrink-0 items-center justify-center group-hover:bg-[#14B8A6] group-hover:border-[#14B8A6] transition-colors duration-400">
                  <CheckCircle2 className="w-5 h-5 text-[#14B8A6] group-hover:text-white transition-colors duration-400" />
                </div>
                <p className="text-[13px] lg:text-[14px] font-medium text-[#1E2937] leading-[1.65] text-center sm:text-left">
                  Each resource works exclusively for your firm and is <strong className="text-[#0F172A] font-bold bg-[#10B981]/10 px-1 py-0.5 rounded">never shared</strong> with any other organisation. This ensures accountability, consistency, and complete alignment with your processes and quality standards.
                </p>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default CostComparison;
