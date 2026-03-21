import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Server, FileWarning, Key, ShieldCheck, DatabaseBackup } from 'lucide-react';

const securityFeatures = [
  { icon: <Lock className="w-5 h-5" />, title: 'Strict GDPR Compliance', text: 'All client information is handled under secure access management protocols.' },
  { icon: <Key className="w-5 h-5" />, title: 'Restricted Systems', text: 'Monitored workflows and controlled data access with strict biometric entry.' },
  { icon: <ShieldCheck className="w-5 h-5" />, title: 'Confidentiality Agreements', text: 'Every team member signs rigorous NDAs that ensure privacy remains fully protected.' },
  { icon: <Server className="w-5 h-5" />, title: 'Internal Data Controls', text: 'We strictly follow structured internal data protection controls globally.' },
];

const Security = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#0A2540] text-white relative overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none mix-blend-overlay"></div>
      <div className="absolute -top-[300px] right-[100px] w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#00D4FF]/20 via-[#635BFF]/5 to-transparent rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-[1300px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          <div className="lg:col-span-5 relative pr-0 lg:pr-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#10B981]/10 text-[#10B981] font-bold text-[11px] uppercase tracking-[0.2em] mb-6 border border-[#10B981]/20 rounded-[8px] shadow-sm"
            >
              Enterprise Security
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, delay: 0.1 }}
              className="text-[28px] lg:text-[36px] font-display font-bold tracking-[-0.02em] mb-8 leading-[1.15] text-white drop-shadow-sm"
            >
              Data Security & <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] via-emerald-300 to-[#10B981]">Confidentiality.</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, delay: 0.2 }}
              className="text-[16px] lg:text-[18px] text-blue-50/70 leading-[1.65] font-medium tracking-tight"
            >
              We strictly follow GDPR-compliant processes supported by structured internal data protection controls. Confidentiality agreements, controlled data access, and monitored workflows ensure your firm’s information and your clients’ privacy remain fully protected at all times.
            </motion.p>
          </div>
          
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {securityFeatures.map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="glass-panel-dark h-full rounded-[24px] p-8 lg:p-10 hover:bg-white/10 hover:border-[#635BFF]/40 border border-[#334155]/60 transition-all duration-500 ease-[0.16_1_0.3_1] group cursor-default shadow-[0_4px_25px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_35px_rgba(99,91,255,0.15)] hover:-translate-y-2">
                  <div className="flex items-start gap-5 mb-5">
                    <div className="p-3 bg-[#0A2540] border border-[#635BFF]/30 rounded-[12px] text-[#00D4FF] group-hover:scale-110 group-hover:bg-[#635BFF] group-hover:text-white transition-all duration-500 ease-[0.16_1_0.3_1] shadow-inner">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                     <h3 className="text-[18px] font-display font-bold mb-3 text-white tracking-tight">{feature.title}</h3>
                     <p className="text-blue-50/60 text-[14px] leading-[1.65] font-medium tracking-tight">
                       {feature.text}
                     </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Security;
