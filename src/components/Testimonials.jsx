import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Partnering with Finovate was the best operational decision we made this year. We reduced our backlog by 80% in the first three months, and our offshore team’s knowledge of UK GAAP is outstanding.",
    name: "James Harrington",
    role: "Managing Partner",
    company: "Harrington & Co.",
    rating: 5,
  },
  {
    quote: "The quality of work on our Year-End accounts has been phenomenal. We managed to scale our firm's client base by over 40% without the headache of local recruitment struggles.",
    name: "Sarah Jenkins",
    role: "Director",
    company: "Jenkins Financial Group",
    rating: 5,
  },
  {
    quote: "Finovate’s GDPR compliant infrastructure and ISO certified processes put us completely at ease. The team feels like a direct extension of our own London office.",
    name: "David O'Connor",
    role: "Senior Accountant",
    company: "Elite Business Solutions",
    rating: 5,
  },
  {
    quote: "Their MTD for ITSA prep has been an absolute lifesaver. Handing over our quarterly filing volumes to Finovate completely eliminated our seasonal burnout.",
    name: "Emily Croft",
    role: "Head of Tax",
    company: "Croft & Associates",
    rating: 5,
  },
  {
    quote: "We save at least £120k annually using Finovate's bookkeeping operations. The cost difference is night and day, but more impressively, the precision is flawless.",
    name: "Michael Chen",
    role: "Founder",
    company: "Chen Accounting Partners",
    rating: 5,
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-16 md:py-24 bg-[#F6F9FC] relative overflow-hidden text-center">

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#635BFF]/10 text-[#635BFF] font-bold text-[10px] uppercase tracking-[0.2em] mb-4 border border-[#635BFF]/20 rounded-md shadow-sm"
          >
            Client Success
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[36px] md:text-[48px] font-display font-black tracking-tight text-[#0A2540] mb-2 leading-[1.05]"
          >
            Trusted by the <br className="md:hidden" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#635BFF] to-[#00D4FF]">Best Firms.</span>
          </motion.h2>
        </div>

        <div className="relative bg-white rounded-[24px] p-8 md:p-14 border border-gray-100 shadow-super-layered">
          {/* Subtle quotemarks */}
          <Quote className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-16 h-16 text-[#635BFF] opacity-10 transform -rotate-12" />
          <Quote className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-16 h-16 text-[#00D4FF] opacity-10 transform rotate-[168deg]" />

          <div className="relative min-h-[200px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, filter: "blur(5px)", scale: 0.98 }}
                animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                exit={{ opacity: 0, filter: "blur(5px)", scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="text-center px-4 md:px-10 w-full"
              >
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#F5B324] fill-[#F5B324] drop-shadow-[0_0_8px_rgba(245,179,36,0.3)]" />
                  ))}
                </div>
                <p className="text-[18px] md:text-[22px] text-[#425466] font-display font-medium leading-[1.6] mb-8 tracking-tight">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div>
                  <h4 className="font-display font-bold text-[#0A2540] text-[18px] mb-1">{testimonials[currentIndex].name}</h4>
                  <span className="text-[13px] text-gray-500 font-bold tracking-tight uppercase block">
                    {testimonials[currentIndex].role} <span className="text-[#635BFF] ml-1">@ {testimonials[currentIndex].company}</span>
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center items-center gap-6 mt-10 relative z-10">
            <button
              onClick={prev}
              className="p-3 rounded-full bg-gray-50 border border-gray-200 text-[#0A2540] hover:bg-white hover:border-[#635BFF] hover:text-[#635BFF] hover:shadow-[0_4px_10px_-2px_rgba(99,91,255,0.2)] transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 rounded-full transition-all duration-500 ${i === currentIndex ? 'bg-[#635BFF] w-8 shadow-[0_0_8px_rgba(99,91,255,0.4)]' : 'bg-gray-200 hover:bg-gray-300 w-2'}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-3 rounded-full bg-gray-50 border border-gray-200 text-[#0A2540] hover:bg-white hover:border-[#635BFF] hover:text-[#635BFF] hover:shadow-[0_4px_10px_-2px_rgba(99,91,255,0.2)] transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
