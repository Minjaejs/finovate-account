import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import Button from './ui/Button';

const ContactForm = () => {
  const [formState, setFormState] = useState('idle'); // idle, submitting, success, error

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => setFormState('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F6F9FC] relative overflow-hidden -mt-10 lg:-mt-16 z-20">

      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent rounded-full blur-[100px] pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>

      <div className="max-w-[1300px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        <div className="mb-16 lg:mb-20 text-center max-w-[800px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100/50 text-[#635BFF] font-bold text-[11px] uppercase tracking-[0.2em] mb-6 border border-blue-200/50 rounded-md shadow-sm"
          >
            Let's Grow Together
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.1 }}
            className="text-[28px] lg:text-[36px] font-display font-bold tracking-[-0.02em] text-[#0A2540] mb-6 leading-[1.15]"
          >
            Scale your firm without <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#635BFF] to-[#00D4FF]">increasing overhead.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.2 }}
            className="text-[16px] lg:text-[20px] text-[#425466] leading-[1.6] font-medium tracking-tight px-4"
          >
            Increase margins, improve operational efficiency, and focus on acquiring clients while we manage the backend operations as your strategic outsourcing partner.
          </motion.p>
        </div>

        <div className="bg-white rounded-[24px] lg:rounded-[32px] overflow-hidden shadow-[0_15px_40px_-5px_rgba(0,0,0,0.1)] border border-transparent flex flex-col lg:flex-row max-w-[1100px] mx-auto">

          {/* Left Info Pane */}
          <div className="lg:w-[40%] bg-[#0A2540] relative p-10 lg:p-14 text-white overflow-hidden flex flex-col justify-between">
            <div className="absolute inset-0 bg-mesh opacity-20 mix-blend-screen pointer-events-none"></div>

            <div className="relative z-10 mb-12">
              <h3 className="text-[28px] font-display font-black tracking-tight mb-4 text-white">Contact Sales</h3>
              <p className="text-blue-50/70 text-[16px] leading-[1.6] font-medium tracking-tight">
                Ready to deploy your dedicated team? Reach out to schedule your free consultation and structural analysis.
              </p>
            </div>

            <div className="space-y-8 relative z-10">
              {[
                { icon: <Mail className="w-5 h-5" />, title: 'Email us', detail: 'hello@finovate.io', highlight: true },
                { icon: <Phone className="w-5 h-5" />, title: 'Call us', detail: '+44 7392 472035' },
                { icon: <MapPin className="w-5 h-5" />, title: 'London Office', detail: 'Level 39, One Canada Square, London E14 5AB' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start group">
                  <div className={`mt-0.5 p-3 rounded-xl transition-colors duration-300 ${item.highlight ? 'bg-[#635BFF] text-white shadow-[0_0_15px_rgba(99,91,255,0.4)]' : 'bg-white/5 text-[#00D4FF] group-hover:bg-white/10 group-hover:text-white'}`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-[12px] uppercase tracking-widest font-bold text-gray-500 mb-1">{item.title}</h4>
                    <p className={`text-[15px] font-medium tracking-tight ${item.highlight ? 'text-white' : 'text-blue-50/80'}`}>{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-[60%] p-10 lg:p-14 relative bg-white">
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10 max-w-[500px] mx-auto lg:mx-0">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[13px] font-bold text-[#0A2540] uppercase tracking-wide">First Name</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-[#F6F9FC] border border-gray-200 rounded-[12px] px-4 py-3.5 text-[15px] text-[#0A2540] font-medium tracking-tight focus:bg-white focus:border-[#635BFF] focus:ring-4 focus:ring-[#635BFF]/10 transition-all outline-none"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[13px] font-bold text-[#0A2540] uppercase tracking-wide">Last Name</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-[#F6F9FC] border border-gray-200 rounded-[12px] px-4 py-3.5 text-[15px] text-[#0A2540] font-medium tracking-tight focus:bg-white focus:border-[#635BFF] focus:ring-4 focus:ring-[#635BFF]/10 transition-all outline-none"
                    placeholder="Smith"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[13px] font-bold text-[#0A2540] uppercase tracking-wide">Work Email</label>
                <input
                  type="email"
                  required
                  className="w-full bg-[#F6F9FC] border border-gray-200 rounded-[12px] px-4 py-3.5 text-[15px] text-[#0A2540] font-medium tracking-tight focus:bg-white focus:border-[#635BFF] focus:ring-4 focus:ring-[#635BFF]/10 transition-all outline-none"
                  placeholder="john@firm.co.uk"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[13px] font-bold text-[#0A2540] uppercase tracking-wide">Company Size</label>
                <select
                  required
                  className="w-full bg-[#F6F9FC] border border-gray-200 rounded-[12px] px-4 py-3.5 text-[15px] text-[#0A2540] font-medium tracking-tight focus:bg-white focus:border-[#635BFF] focus:ring-4 focus:ring-[#635BFF]/10 transition-all outline-none appearance-none"
                >
                  <option value="" disabled selected>Select firm size...</option>
                  <option value="1-10">1 - 10 employees</option>
                  <option value="11-50">11 - 50 employees</option>
                  <option value="51-200">51 - 200 employees</option>
                  <option value="201+">201+ employees</option>
                </select>
              </div>

              <div className="space-y-2 mb-2">
                <label className="text-[13px] font-bold text-[#0A2540] uppercase tracking-wide">Message</label>
                <textarea
                  rows="4"
                  required
                  className="w-full bg-[#F6F9FC] border border-gray-200 rounded-[12px] px-4 py-3.5 text-[15px] text-[#0A2540] font-medium tracking-tight focus:bg-white focus:border-[#635BFF] focus:ring-4 focus:ring-[#635BFF]/10 transition-all outline-none resize-none"
                  placeholder="Tell us about your current operational bottlenecks..."
                ></textarea>
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  className="w-full group disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed disabled:shadow-none"
                  disabled={formState === 'submitting' || formState === 'success'}
                >
                  <AnimatePresence mode="wait">
                    {formState === 'idle' && (
                      <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center">
                        Request Consultation
                        <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </motion.div>
                    )}
                    {formState === 'submitting' && (
                      <motion.div key="submitting" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Processing...
                      </motion.div>
                    )}
                    {formState === 'success' && (
                      <motion.div key="success" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center text-green-300">
                        <CheckCircle2 className="mr-2 w-5 h-5" />
                        Message Sent Successfully
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
