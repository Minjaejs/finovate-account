import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Activity, TrendingUp, ShieldCheck, ChevronRight, BarChart3, PieChart } from 'lucide-react';
import Button from './ui/Button';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 90]);
  const y2 = useTransform(scrollY, [0, 500], [0, -60]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.2]);

  return (
    <section id="home" className="relative pt-[100px] pb-24 lg:pt-[120px] lg:pb-[140px] overflow-hidden bg-white">
      {/* Precision Sweeping Background Stripe Style */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[80vw] lg:w-[60vw] h-full bg-[#F6F9FC] transform -skew-x-12 translate-x-32 z-0" />
        <div className="absolute inset-0 bg-mesh opacity-[0.8] z-0 mix-blend-multiply" />
      </div>

      {/* Precision Geometric Slant Cut */}
      <div className="absolute bottom-0 left-0 right-0 h-[80px] lg:h-[150px] bg-white transform -skew-y-2 origin-bottom-left z-10" />

      <div className="max-w-[1300px] mx-auto px-6 sm:px-8 lg:px-12 relative z-20">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-center">

          <motion.div
            style={{ opacity }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-[540px] relative z-30"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3 py-1 bg-white/60 backdrop-blur-xl rounded-[12px] shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-200/50 mb-8 font-display text-[12px] uppercase font-bold text-[#14B8A6] tracking-[0.1em]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-pulse" />
              Strategic Outsourcing Partner
            </motion.div>

            <h1 className="text-[52px] sm:text-[64px] lg:text-[76px] font-display font-black tracking-tighter text-[#0F172A] leading-[1.05] mb-6 drop-shadow-sm">
              Reducing Costs. <br />
              Increasing Margins. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14B8A6] via-[#00D4FF] to-[#10B981]">Scaling Smarter.</span>
            </h1>

            <p className="text-[18px] lg:text-[20px] text-[#425466] mb-10 leading-[1.6] font-medium tracking-tight">
              We provide high-quality accounting and operational support services to UK accounting firms. Reduce your staffing costs by 60–70% while improving productivity and scalability.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <a href="#pricing" className="inline-block">
                <Button variant="primary" className="group px-8 text-[15px] font-display w-full sm:w-auto">
                  Start your FREE trial
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="#contact" className="inline-block">
                <Button variant="outline" className="group px-8 text-[15px] font-display w-full sm:w-auto">
                  Contact sales
                  <ChevronRight className="ml-0.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-[13.5px] text-[#1E2937] font-semibold border-t border-gray-100 pt-6 mt-6">
              <div className="flex items-center gap-2.5 group cursor-default hover:bg-[#F8FAFC] px-3 py-2 rounded-lg -ml-3 transition-colors duration-300">
                <ShieldCheck className="h-5 w-5 text-[#10B981] group-hover:scale-110 transition-transform duration-300" />
                <span>GDPR & SOC2 Compliant</span>
              </div>
              <div className="flex items-center gap-2.5 group cursor-default hover:bg-[#F8FAFC] px-3 py-2 rounded-lg transition-colors duration-300">
                <Activity className="h-5 w-5 text-[#14B8A6] group-hover:scale-110 transition-transform duration-300" />
                <span><strong className="text-[#0F172A]">100%</strong> Dedicated Model</span>
              </div>
            </div>
          </motion.div>

          {/* High-End Photographic Hero Showcase */}
          <div className="relative w-full max-w-[650px] mx-auto lg:ml-auto h-[450px] lg:h-[600px] z-20 hidden md:block perspective-[2000px]">

            <motion.div
              style={{ y: y1 }}
              initial={{ opacity: 0, rotateX: 10, rotateY: -10, rotateZ: 2, scale: 0.95 }}
              animate={{ opacity: 1, rotateX: 5, rotateY: -5, rotateZ: 2, scale: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-0 right-0 w-[110%] h-[400px] lg:h-[500px] bg-white rounded-[24px] shadow-[0_40px_80px_-20px_rgba(15,23,42,0.15)] border border-gray-200/50 overflow-hidden transform-style-3d group z-10 p-2"
            >
              <div className="relative w-full h-full rounded-[16px] overflow-hidden bg-[#F8FAFC]">
                {/* Premium Overlay Mesh */}
                <div className="absolute inset-0 bg-[#0F172A]/[0.02] mix-blend-multiply z-10 transition-opacity duration-700 group-hover:bg-[#0F172A]/0 pointer-events-none" />

                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600"
                  alt="Financial Accounting and Data Analysis"
                  className="w-full h-full object-cover scale-[1.03] group-hover:scale-105 transition-transform duration-[2s] ease-out object-center"
                />

                {/* Integrated Floating Graphic inside the image */}
                <div className="absolute top-8 left-8 right-8 flex justify-between items-start z-20">
                  <div className="flex gap-2 bg-white/40 backdrop-blur-xl px-3 py-1.5 rounded-full border border-white/40 shadow-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] animate-pulse mt-0.5" />
                    <span className="text-[10px] font-bold text-[#0F172A] uppercase tracking-[0.1em] font-display">Active Offshore Link</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Overlapping Precision Widget */}
            <motion.div
              style={{ y: y2 }}
              initial={{ opacity: 0, x: -80, y: 50 }}
              animate={{ opacity: 1, x: -40, y: 30 }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
              className="absolute bottom-[20%] lg:bottom-[15%] left-[-40px] w-[280px] bg-white/90 backdrop-blur-2xl rounded-[20px] shadow-[0_30px_60px_-15px_rgba(15,23,42,0.2)] border border-white/50 p-6 z-30"
            >
              <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-100">
                <div className="w-12 h-12 bg-[#F8FAFC] text-[#14B8A6] rounded-[12px] border border-gray-100 shadow-sm flex items-center justify-center shrink-0">
                  <Activity className="w-6 h-6 stroke-[2.5]" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 font-bold tracking-[0.15em] uppercase mb-1 font-display">Deployment</div>
                  <div className="text-[16px] font-display font-black text-[#0F172A] tracking-tight leading-none">Global Extension</div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-1.5 items-end h-8">
                  <div className="w-1.5 h-5 bg-[#14B8A6] rounded-full animate-pulse"></div>
                  <div className="w-1.5 h-3 bg-[#14B8A6]/40 rounded-full"></div>
                  <div className="w-1.5 h-7 bg-[#14B8A6] rounded-full animate-pulse"></div>
                  <div className="w-1.5 h-4 bg-[#14B8A6]/40 rounded-full"></div>
                  <div className="w-1.5 h-8 bg-[#14B8A6] rounded-full animate-pulse delay-75"></div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="text-[18px] font-black text-[#14B8A6] tracking-tighter leading-none mb-1">100%</div>
                  <div className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.1em]">Aligned</div>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
