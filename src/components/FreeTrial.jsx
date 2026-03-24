import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Zap } from 'lucide-react';
import Button from './ui/Button';

const FreeTrial = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center">

        <div className="relative rounded-[24px] md:rounded-[32px] bg-[#0A2540] shadow-[0_50px_100px_-20px_rgba(50,50,93,0.3)] overflow-hidden border border-[#334155] hidden-scroll group">
          {/* Animated Mesh Backdrops Inside */}
          <div className="absolute inset-0 bg-mesh opacity-[0.15] pointer-events-none mix-blend-screen transition-opacity duration-1000 group-hover:opacity-30"></div>

          <div className="absolute -top-[200px] -left-[200px] w-[500px] h-[500px] bg-gradient-to-br from-[#635BFF]/30 to-transparent rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute -bottom-[200px] -right-[200px] w-[500px] h-[500px] bg-gradient-to-tl from-[#00D4FF]/20 to-transparent rounded-full blur-[100px] pointer-events-none"></div>

          <div className="p-10 md:p-16 lg:p-24 relative z-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-[800px] mx-auto"
            >
              <div className="inline-flex justify-center items-center gap-1.5 px-3 py-1.5 bg-yellow-400/10 border border-yellow-400/20 text-[#F5B324] rounded-md font-bold tracking-[0.2em] uppercase text-[10px] mb-8 shadow-sm">
                <Zap className="w-3.5 h-3.5" />
                Risk-Free Trial Offer
              </div>

              <h2 className="text-[28px] lg:text-[36px] font-display font-bold tracking-[-0.02em] text-white mb-6 leading-[1.15]">
                Evaluate us securely. <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] via-emerald-300 to-[#10B981] drop-shadow-[0_0_15px_rgba(16,185,129,0.2)]">Zero commitment.</span>
              </h2>

              <p className="text-[16px] md:text-[20px] text-blue-100/70 mb-10 max-w-[700px] mx-auto leading-[1.65] font-medium tracking-tight">
                We offer a one-month <strong className="text-white">FREE trial</strong> for selected client bookkeeping. Evaluate work quality, communication standards, turnaround time, and cost efficiency before proceeding.
              </p>

              <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-10 md:mb-12 text-white/90 tracking-tight font-medium">
                {['No long-term contract required', 'Immediate deployment', 'SOC2 data compliant'].map((text, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                    <span className="text-[14px] md:text-[15px]">{text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button variant="primary" className="group text-[15px] font-display">
                  Start Your Free Trial
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" className="border-[#334155]/60 text-white hover:bg-white/10 hover:border-white/30 font-display text-[15px] shadow-sm">
                  View Security Docs
                </Button>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FreeTrial;
