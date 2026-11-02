import { useState, type FC } from 'react';
import { personalData } from '../data/portfolioData';
import { Asterisk14s } from './Doodles';
import { ChevronDown, ArrowUpRight } from 'lucide-react';

export const MilaFAQ: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="pt-12 pb-24 md:pt-16 md:pb-28 relative">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Heading & Ask Me Anything CTA */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-note text-[26px] text-[#35B47C] font-medium">
                questions people ask
              </span>
              <Asterisk14s size={18} className="text-[#F6C945]" />
            </div>

            <h2 className="font-pixel text-[42px] sm:text-[56px] lg:text-[72px] font-bold text-[#161616] leading-[1em] tracking-[-0.01em]">
              Before you write
            </h2>

            <p className="font-body text-[17px] sm:text-[18px] lg:text-[20px] text-[#6B6A66] leading-[1.5em]">
              Hal-hal yang sering ditanyakan mengenai kesiapan magang, metode pengujian, dan domisili kerja.
            </p>

            <div className="pt-4">
              <a
                href="#contact"
                className="btn-solid inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#F6C945] font-label text-sm sm:text-base font-bold uppercase tracking-wider text-[#161616]"
              >
                <span>Tanyakan Langsung</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: 4 Accordion Items */}
          <div className="lg:col-span-7 space-y-4">
            {personalData.faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#ffffff] border-ink-thick shadow-solid transition-all duration-200 overflow-hidden"
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-pixel text-xl sm:text-2xl font-bold text-[#161616] hover:text-[#F2679B] transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <span
                      className={`p-1.5 rounded-md border border-[#161616] bg-[#F6F3EC] transition-transform duration-200 ${
                        isOpen ? 'rotate-180 bg-[#F6C945]' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4 text-[#161616]" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 font-body text-base sm:text-lg text-[#6B6A66] leading-relaxed border-t border-[#161616]/10 animate-in fade-in duration-150">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
