import React from 'react';
import { ShieldCheck, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white pt-24 pb-12 text-[#425466] relative overflow-hidden border-t border-gray-100">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">

          <div className="lg:col-span-5 pr-0 lg:pr-10">
            <a href="#home" className="text-[28px] font-display font-black text-[#0A2540] tracking-tight mb-6 inline-block hover:text-[#635BFF] transition-colors">
              Finovate
            </a>
            <p className="text-[16px] leading-[1.6] mb-8 font-medium max-w-sm">
              Empowering UK & Ireland accounting firms with dedicated, highly-trained, and secure offshore infrastructure. Scale effortlessly.
            </p>
            <div className="flex items-center gap-3 text-[#10B981] bg-[#10B981]/10 w-max px-3 py-1.5 rounded-full border border-[#10B981]/20">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-[12px] font-bold tracking-[0.1em] uppercase font-display">SOC2 & GDPR Audited</span>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[#0A2540] font-bold mb-6 text-[14px] font-display">Products</h4>
            <ul className="space-y-4 text-[14px] font-medium">
              <li><a href="#" className="hover:text-[#635BFF] transition-colors">Bookkeeping</a></li>
              <li><a href="#" className="hover:text-[#635BFF] transition-colors">Final Accounts</a></li>
              <li><a href="#" className="hover:text-[#635BFF] transition-colors">Management</a></li>
              <li><a href="#" className="hover:text-[#635BFF] transition-colors">VAT Returns</a></li>
              <li><a href="#" className="hover:text-[#635BFF] transition-colors">Payroll API</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[#0A2540] font-bold mb-6 text-[14px] font-display">Company</h4>
            <ul className="space-y-4 text-[14px] font-medium">
              <li><a href="#about" className="hover:text-[#635BFF] transition-colors">About Us</a></li>
              <li><a href="#how-it-works" className="hover:text-[#635BFF] transition-colors">Deployment</a></li>
              <li><a href="#pricing" className="hover:text-[#635BFF] transition-colors">ROI Calculator</a></li>
              <li><a href="#" className="hover:text-[#635BFF] transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-[#635BFF] transition-colors">Careers</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-[#0A2540] font-bold mb-6 text-[14px] font-display">Updates</h4>
            <p className="text-[13px] font-medium mb-6">
              Subscribe for industry insights and scalability tips.
            </p>
            <div className="relative mb-8">
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-white border border-gray-200 rounded-[12px] px-4 py-3 text-[#0A2540] placeholder-gray-400 focus:outline-none focus:border-[#635BFF] focus:ring-4 focus:ring-[#635BFF]/10 transition-all text-[14px] font-medium"
              />
              <button
                className="absolute right-1 top-1 bottom-1 px-4 bg-[#635BFF] hover:bg-[#524BCC] text-white rounded-[10px] font-display font-bold text-[13px] transition-colors shadow-sm"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <a href="mailto:contact@finovate.io" className="flex items-center gap-3 text-[#425466] hover:text-[#00D4FF] transition-colors group">
              <div className="p-2 bg-gray-50 rounded-[8px] border border-gray-200 group-hover:bg-[#00D4FF]/10 group-hover:border-[#00D4FF]/30 transition-colors">
                <Mail className="w-4 h-4" />
              </div>
              <span className="font-semibold tracking-wide text-[14px]">contact@finovate.io</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-gray-100 text-[13px] font-medium tracking-wide">
          <p>&copy; {currentYear} Finovate Outsourcing Ltd.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#0A2540] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#0A2540] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#0A2540] transition-colors">Cookie Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
