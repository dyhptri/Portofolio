import type { FC } from 'react';
import { ArrowDown } from 'lucide-react';
import { SlantedSticker, Asterisk14s } from './Doodles';
import { personalData } from '../data/portfolioData';

export const MilaHero: FC = () => {
  return (
    <section className="pt-6 pb-16 md:pt-10 md:pb-24 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Typography, Status, CTAs, Hero Stickers */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Hi Note */}
            <div>
              <span className="font-note text-[30px] sm:text-[34px] text-[#161616] leading-[1.3em]">
                hi, my name is
              </span>
            </div>

            {/* Display Name: Diyah Ramadhani Putri */}
            <div className="relative">
              <h1 className="font-pixel text-[46px] sm:text-[72px] lg:text-[96px] font-bold text-[#161616] leading-[0.95em] tracking-[-0.02em] select-none">
                Diyah Ramadhani
              </h1>
              {/* Decorative mini asterisk sticker */}
              <div className="absolute -top-3 right-0 sm:-right-8">
                <Asterisk14s size={36} className="text-[#F2679B]" />
              </div>
            </div>

            {/* Sub-headline / Roles */}
            <div className="font-label text-sm sm:text-base font-bold text-[#F07A3C] bg-[#FBE9A6] px-3.5 py-1.5 rounded-lg border border-[#161616] shadow-solid-sm inline-block">
              Quality Assurance Engineer • UI/UX Designer • System Analyst
            </div>

            {/* Tagline */}
            <p className="font-body text-[19px] sm:text-[23px] lg:text-[28px] font-medium text-[#161616] leading-[1.3em] tracking-[-0.02em] max-w-2xl">
              "Bridging intuitive user interface design and bulletproof software reliability through full-pyramid automated testing and methodical requirements engineering."
            </p>

            {/* Action Buttons: About & Work */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#about"
                className="btn-solid inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#ffffff] font-label text-sm sm:text-base font-bold uppercase tracking-wider text-[#161616] hover:bg-[#FBE9A6]"
              >
                <span>About Me</span>
              </a>
              <a
                href="#work"
                className="btn-solid inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#F6C945] font-label text-sm sm:text-base font-bold uppercase tracking-wider text-[#161616]"
              >
                <span>See my work</span>
                <ArrowDown className="w-4 h-4" />
              </a>
            </div>

            {/* Hero Stickers Cluster */}
            <div className="flex flex-wrap items-center gap-2.5 pt-4">
              {personalData.heroStickers.map((sticker, sIdx) => (
                <SlantedSticker
                  key={sIdx}
                  text={sticker.label}
                  bg={sticker.color}
                  rot={sticker.rot}
                  size="sm"
                />
              ))}
            </div>
          </div>

          {/* Right Column: 2 Overlapping Polaroids with real photos */}
          <div className="lg:col-span-5 relative flex flex-col sm:flex-row lg:flex-col items-center justify-center gap-6 pt-4 lg:pt-0">
            
            {/* Polaroid 1: Photo 1 */}
            <div
              className="relative w-64 sm:w-72 polaroid-frame transition-transform hover:scale-105 duration-300 z-20"
              style={{ transform: 'rotate(-3deg)' }}
            >
              {/* Washi tape lilac */}
              <div
                className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-5 washi-lilac border-y border-dashed border-[#161616]/30 shadow-sm z-30"
                style={{ transform: 'translateX(-50%) rotate(1deg)' }}
              />

              {/* Photo 1 Container */}
              <div className="w-full h-64 sm:h-72 rounded-md border-ink overflow-hidden relative bg-[#FBE9A6]">
                <img
                  src="/images/diyah-hero-1.jpg"
                  alt="Diyah Ramadhani Putri"
                  className="w-full h-full object-cover object-[center_28%]"
                  loading="eager"
                />

                {/* Status pill badge */}
                <div className="absolute top-2.5 right-2.5">
                  <span className="font-label text-[10px] bg-[#35B47C] text-white px-2 py-0.5 rounded font-bold shadow-solid-sm border border-[#161616]">
                    IPK 3.78
                  </span>
                </div>
              </div>

              {/* Handwritten caption */}
              <p className="font-note text-[23px] text-center text-[#161616] pt-3 font-medium">
                diyah, mostly testing & designing
              </p>
            </div>

            {/* Polaroid 2: Photo 2 */}
            <div
              className="relative w-64 sm:w-72 polaroid-frame transition-transform hover:scale-105 duration-300 lg:-mt-12 sm:mt-8 z-10"
              style={{ transform: 'rotate(3.5deg)' }}
            >
              {/* Washi tape mint */}
              <div
                className="absolute -top-3 right-8 w-28 h-5 washi-mint border-y border-dashed border-[#161616]/30 shadow-sm z-30"
                style={{ transform: 'rotate(-2deg)' }}
              />

              {/* Photo 2 Container */}
              <div className="w-full h-60 sm:h-68 rounded-md border-ink overflow-hidden relative bg-[#CDEBDD]">
                <img
                  src="/images/diyah-hero-2.jpg"
                  alt="Diyah Ramadhani Putri"
                  className="w-full h-full object-cover object-[center_28%]"
                  loading="lazy"
                />

                {/* Subtitle pill badge */}
                <div className="absolute bottom-2.5 left-2.5">
                  <span className="font-label text-[10px] bg-[#ffffff] text-[#161616] px-2 py-0.5 rounded font-bold shadow-solid-sm border border-[#161616]">
                    Polinema JTI • 2026
                  </span>
                </div>
              </div>

              {/* Handwritten caption */}
              <p className="font-note text-[23px] text-center text-[#161616] pt-3 font-medium">
                ready to create & verify
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
