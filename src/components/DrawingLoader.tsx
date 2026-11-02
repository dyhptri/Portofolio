import { useEffect, useState, type FC } from 'react';
import { Asterisk14s, CoffeeMug } from './Doodles';
import { personalData } from '../data/portfolioData';

export const DrawingLoader: FC = () => {
  const [visible, setVisible] = useState<boolean>(() => {
    return !sessionStorage.getItem('diyah_loader_shown');
  });
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (!visible) return;

    // 2.4 seconds active duration as specified in design
    const timer = setTimeout(() => {
      setExiting(true);
      // 0.9s exit transition as specified
      const exitTimer = setTimeout(() => {
        setVisible(false);
        sessionStorage.setItem('diyah_loader_shown', 'true');
      }, 900);
      return () => clearTimeout(exitTimer);
    }, 2400);

    return () => clearTimeout(timer);
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#F6F3EC] transition-all duration-900 ${
        exiting ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100'
      }`}
      style={{
        backgroundImage: 'linear-gradient(to bottom, #E2DED3 1px, transparent 1px)',
        backgroundSize: '100% 56px'
      }}
    >
      <div className="relative p-8 rounded-2xl bg-[#ffffff] border-ink-thick shadow-solid-lg max-w-sm w-[90%] text-center space-y-4">
        {/* Washi tape on top */}
        <div
          className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-32 h-6 bg-[rgba(217,220,247,0.85)] border-y border-dashed border-[#161616]/40 shadow-sm"
          style={{ transform: 'translateX(-50%) rotate(-1.5deg)' }}
        />

        {/* QA & Design animation doodles */}
        <div className="flex items-center justify-center gap-3 py-2">
          <span className="p-3 rounded-full bg-[#F6C945] border-ink shadow-solid-sm animate-bounce">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#161616" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </span>
          <Asterisk14s size={32} />
          <span className="p-3 rounded-full bg-[#F2679B] border-ink shadow-solid-sm animate-pulse">
            <CoffeeMug className="w-8 h-8 text-[#161616]" />
          </span>
        </div>

        {/* Wordmark & Note */}
        <div>
          <h2 className="font-pixel text-2xl sm:text-3xl font-bold text-[#161616]">
            {personalData.name}
          </h2>
          <p className="font-note text-xl sm:text-2xl text-[#161616] font-medium mt-1">
            calibrating test cases & brewing coffee...
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-[#F6F3EC] h-3 rounded-full border-ink overflow-hidden p-0.5">
          <div className="bg-[#35B47C] h-full rounded-full transition-all duration-2000 ease-out w-full" />
        </div>

        <button
          onClick={() => {
            setVisible(false);
            sessionStorage.setItem('diyah_loader_shown', 'true');
          }}
          className="text-xs font-label text-[#6B6A66] underline hover:text-[#161616] cursor-pointer pt-1"
        >
          [ lewati loader ]
        </button>
      </div>
    </div>
  );
};
