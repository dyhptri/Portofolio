import { useState, useEffect } from 'react';
import { ArrowUp, Clock, ShieldCheck } from 'lucide-react';

export const Footer = () => {
  const [localTime, setLocalTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      // Calculate Malang time (UTC+7 / Asia/Jakarta)
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      setLocalTime(new Intl.DateTimeFormat('en-GB', options).format(now));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#04070d] border-t border-slate-800/80 text-xs font-mono text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Tagline */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-900 border border-cyan-500/30 text-cyan-400 font-bold text-xs">
              DRP
            </div>
            <div>
              <span className="text-white font-bold">Diyah Ramadhani Putri</span>
              <p className="text-[11px] text-slate-500 font-sans">
                Bridging UI/UX Design & Full-Pyramid Software Reliability
              </p>
            </div>
          </div>

          {/* Live Malang Time Clock (WIB) */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-[11px] text-slate-300">
            <Clock className="w-3.5 h-3.5 text-cyan-400" />
            <span>Malang, ID:</span>
            <span className="text-cyan-400 font-bold">{localTime || '15:00:00'}</span>
            <span className="text-slate-500 text-[10px]">WIB (UTC+7)</span>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} Diyah Ramadhani Putri. All rights reserved.
          </div>

          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Cypress E2E Verified</span>
            <span className="text-slate-700">•</span>
            <span>Engineered with React, TypeScript & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
