import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-40 mt-32 w-[500px] h-[500px] bg-[#635BFF]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-[1300px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            {/* Main Image with modern offset */}
            <div className="relative z-10 rounded-[24px] overflow-hidden shadow-super-layered border-[6px] border-white/50 aspect-[4/5] bg-gray-100 group">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1554200876-56c2f25224fa?q=80&w=2070&auto=format&fit=crop" 
                alt="Finovate Expertise" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[0.16_1_0.3_1]"
                loading="lazy"
              />
            </div>
            
            {/* Floating stat card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, delay: 0.2 }}
              className="absolute -bottom-8 right-6 lg:right-10 bg-white/95 backdrop-blur-xl p-5 md:p-6 rounded-[20px] shadow-[0_20px_40px_-10px_rgba(10,37,64,0.15)] border border-gray-100 max-w-[180px] z-20 flex flex-col justify-center"
            >
              <div className="flex flex-col gap-1">
                <div className="text-[44px] font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#0A2540] to-[#635BFF] leading-none text-center lg:text-left tracking-tighter mb-0.5">60%</div>
                <div className="text-[11px] font-bold text-gray-500 uppercase tracking-widest leading-tight text-center lg:text-left">
                  Minimum Cost Reduction
                </div>
              </div>
            </motion.div>
            
            {/* Floating stat card 2 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, delay: 0.4 }}
              className="absolute top-8 lg:top-12 -left-4 lg:-left-12 flex items-center gap-3 bg-[#0A2540] p-4 lg:p-5 rounded-[16px] shadow-[0_15px_30px_-5px_rgba(10,37,64,0.3)] z-20 ring-1 ring-white/10"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse shadow-[0_0_12px_rgba(16,185,129,0.6)]"></div>
              <div className="text-[11px] font-bold text-white tracking-[0.2em] font-display uppercase">Dedicated Staff Output</div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 mb-10 lg:mb-0"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50/80 text-[#635BFF] font-black text-[10px] uppercase tracking-[0.2em] mb-6 border border-blue-100/80 rounded-[8px]">
              About Us
            </div>
            
            <h2 className="text-[28px] lg:text-[36px] font-display font-bold tracking-[-0.02em] text-[#0A2540] leading-[1.15] mb-6">
              Elite operational support. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#635BFF]">Unmatched efficiency.</span>
            </h2>
            
            <div className="space-y-4 text-[16px] lg:text-[18px] text-[#425466] mb-8 leading-[1.6] font-medium border-l-[3px] border-[#635BFF] pl-5 md:pl-6 ml-1">
              <p>
                We are a dedicated offshore outsourcing company providing high-quality accounting and operational support services to UK accounting firms. 
              </p>
              <p>
                Our mission is to help firms significantly reduce operational costs while maintaining the highest possible standards of accuracy, compliance, and efficiency.
              </p>
            </div>

            <div className="space-y-3 mb-10 bg-gray-50/50 p-6 rounded-[16px] border border-gray-100">
              <div className="text-[#0A2540] font-bold text-[20px] font-display mb-4 tracking-tight">Our objective is simple:</div>
              {[
                'Reduce your firm’s staffing costs by 60–70%',
                'Dramatically improve overall productivity',
                'Ensure frictionless organizational scalability'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#635BFF] shrink-0" />
                  <span className="text-[#425466] font-semibold text-[15px]">{item}</span>
                </div>
              ))}
            </div>

            <Button variant="primary" className="group px-8 text-[15px] font-display">
              Partner With Us
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
