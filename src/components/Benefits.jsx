import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, TrendingUp, Monitor, CheckCircle } from 'lucide-react';

const benefits = [
  { icon: <TrendingUp className="w-[18px] h-[18px] text-[#6366F1]" />, title: '60–70% Cost Reduction', text: 'Trim operational overhead and eliminate local capital drains to immediately increase your profit margins.' },
  { icon: <Shield className="w-[18px] h-[18px] text-[#14B8A6]" />, title: 'Dedicated Exclusive Team', text: 'Your offshore talent integrates entirely as a dedicated extension working exclusively for your own firm.' },
  { icon: <Zap className="w-[18px] h-[18px] text-[#F5B324]" />, title: 'Flexible & Scalable Resource Model', text: 'Seamlessly scale capacity during tax seasons without the operational risk of standard hiring cycles.' },
  { icon: <Monitor className="w-[18px] h-[18px] text-[#10B981]" />, title: 'No Office or Infrastructure Costs', text: 'Workstations, software licencing, and HR management overhead are handled entirely on our end.' },
];

const Benefits = () => {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-[#14B8A6]/10 to-[#6366F1]/10 rounded-full blur-[120px] pointer-events-none transform -translate-y-1/2"></div>
      
      <div className="max-w-[1300px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Sticky Left Sidebar Header */}
          <div className="lg:col-span-5 lg:sticky top-32 relative z-20">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="pr-4 lg:pr-8"
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#14B8A6]/10 text-[#14B8A6] font-bold text-[11px] uppercase tracking-[0.2em] mb-6 border border-[#14B8A6]/20 rounded-[8px]">
                 Key Benefits
              </div>
              <h2 className="text-[28px] lg:text-[36px] font-display font-bold tracking-[-0.02em] text-[#0F172A] mb-6 leading-[1.15]">
                Why the fastest <br />
                growing firms <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14B8A6] to-[#6366F1]">choose Finovate.</span>
              </h2>
              <p className="text-[16px] lg:text-[18px] text-[#1E2937] leading-[1.6] font-medium mb-10 tracking-tight">
                Extending your capabilities globally means mitigating operational risk while generating increased profit margins.
              </p>
              
              <div className="group bg-[#F8FAFC] p-8 rounded-[24px] border border-gray-100 flex flex-col gap-4 shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)] relative overflow-hidden transition-all duration-500 hover:shadow-[0_15px_30px_-5px_rgba(15,23,42,0.1)] hover:border-[#14B8A6]/30">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br from-[#10B981]/15 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-gray-100 shadow-[0_4px_10px_rgba(0,0,0,0.05)] text-[#10B981] group-hover:bg-[#10B981] group-hover:text-white transition-colors duration-500 ease-[0.16_1_0.3_1]">
                  <CheckCircle className="w-6 h-6 text-current" />
                </div>
                <div>
                  <h4 className="text-[18px] font-display font-bold text-[#0F172A] mb-2 tracking-tight">Reduced Operational & Hiring Risk</h4>
                  <p className="text-[15px] font-medium text-[#1E2937] leading-[1.6] tracking-tight">
                    Skip the tedious placement cycles. We provide instant access to high-tier talent aligned strictly with your quality standards.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Grid Content (Timeline) */}
          <div className="lg:col-span-7 relative z-10 lg:-mt-10">
            {/* The single vertical line track perfectly aligned */}
            <div className="absolute top-14 bottom-14 left-[24px] lg:left-[34px] w-[2px] bg-gray-100 z-0 hidden sm:block"></div>
            
            <div className="grid gap-6 sm:gap-8 relative">
              {benefits.map((benefit, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative"
                >
                  {/* Floating Circular Pin */}
                  <div className="absolute top-10 left-[10px] lg:left-[20px] w-8 h-8 z-10 hidden sm:flex items-center justify-center bg-white rounded-full">
                    <div className="w-[14px] h-[14px] rounded-full bg-[#F8FAFC] border-[3px] border-[#14B8A6] shadow-[0_0_12px_rgba(20,184,166,0.5)] group-hover:scale-125 group-hover:bg-[#14B8A6] transition-all duration-300"></div>
                  </div>
                  
                  <div className="card-premium relative z-10 p-8 sm:ml-[70px] lg:ml-[80px] hover:-translate-y-1.5 duration-400 ease-[0.16_1_0.3_1]">
                    <div className="mb-6 inline-flex relative w-[46px] h-[46px] rounded-[14px] items-center justify-center bg-[#F8FAFC] border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.02)] group-hover:shadow-[0_8px_16px_-4px_rgba(20,184,166,0.2)] group-hover:bg-white group-hover:border-[#14B8A6]/30 transition-all duration-500 ease-[0.16_1_0.3_1]">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-[18px] lg:text-[20px] font-display font-bold text-[#0F172A] mb-2 tracking-tight group-hover:text-[#14B8A6] transition-colors duration-400">{benefit.title}</h3>
                      <p className="text-[14.5px] lg:text-[15px] text-[#1E2937] leading-[1.6] font-medium tracking-tight">
                        {benefit.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Benefits;
