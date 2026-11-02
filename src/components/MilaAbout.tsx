import type { FC } from 'react';
import { personalData } from '../data/portfolioData';
import { Asterisk14s, SlantedSticker, CoffeeMug } from './Doodles';

export const MilaAbout: FC = () => {
  const toolsStickers = [
    { label: 'Cypress (E2E)', color: '#F6C945', rot: '-2deg' },
    { label: 'Figma', color: '#F2679B', rot: '3deg' },
    { label: 'Supabase & SQL', color: '#CDEBDD', rot: '2.5deg' },
    { label: 'Laravel & PHP', color: '#F07A3C', rot: '-2deg' },
    { label: 'Git & GitHub', color: '#FBE9A6', rot: '1.5deg' }
  ];

  const skillRows = [
    { num: '01', title: 'Automated QA & Cypress', subtitle: 'E2E test suites, payment validation, regression' },
    { num: '02', title: 'Manual & Functional Testing', subtitle: 'Black-box, boundary value analysis (BVA), UAT' },
    { num: '03', title: 'UI/UX Interface Design', subtitle: 'Figma design systems, auto-layout, mobile apps' },
    { num: '04', title: 'System Analysis & SRS/SKPL', subtitle: 'UML modeling, RBAC matrices, relational ERD' }
  ];

  return (
    <section id="about" className="pt-20 pb-28 relative">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* Top Grid: Bio Note on Left, Stickers on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          
          {/* Left Column: Post-it / Sketchbook Note */}
          <div className="lg:col-span-7 relative">
            {/* Washi tape on top */}
            <div
              className="absolute -top-3 left-8 w-28 h-5 washi-mint border-y border-dashed border-[#161616]/30 shadow-sm z-10"
              style={{ transform: 'rotate(-1.5deg)' }}
            />

            <div className="p-8 sm:p-10 rounded-2xl bg-[#ffffff] border-ink-thick shadow-solid-card space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-note text-[28px] sm:text-[34px] text-[#F2679B] font-bold leading-none">
                  about me!
                </span>
                <CoffeeMug className="w-5 h-5 text-[#F07A3C]" />
              </div>

              {/* Note Text: Official Bio from CV */}
              <p className="font-body text-base sm:text-lg text-[#161616] leading-relaxed">
                {personalData.about}
              </p>

              <div className="pt-3 border-t border-[#161616]/10 flex flex-wrap items-center justify-between gap-2 font-label text-xs text-[#6B6A66]">
                <span>D4 Sistem Informasi Bisnis • Politeknik Negeri Malang</span>
                <span className="bg-[#F6C945] text-[#161616] px-2.5 py-0.5 rounded border border-[#161616] font-bold shadow-solid-sm">
                  IPK: 3.78 / 4.00
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: PS Note & Tool Stickers */}
          <div className="lg:col-span-5 space-y-6">
            {/* PS Sticky Note */}
            <div
              className="relative p-6 sm:p-7 rounded-xl bg-[#FBE9A6] border-ink shadow-solid transform rotate-1 hover:rotate-0 transition-transform"
            >
              <div
                className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-5 washi-lilac border-y border-dashed border-[#161616]/30 shadow-sm"
              />
              <span className="font-label text-xs font-bold uppercase text-[#F07A3C] block mb-1">
                A QUICK REMINDER
              </span>
              <p className="font-note text-[23px] sm:text-[25px] text-[#161616] font-bold leading-snug">
                p.s. yes, I am open for QA, UI/UX & tech roles / internships. Scroll down and say hi.
              </p>
            </div>

            {/* Tools & Mediums Stickers */}
            <div className="p-6 rounded-2xl bg-[#ffffff] border-ink shadow-solid space-y-3">
              <span className="font-label text-xs font-bold uppercase tracking-wider text-[#6B6A66] block">
                CORE TOOLS & TECHNOLOGIES:
              </span>
              <div className="flex flex-wrap gap-2.5">
                {toolsStickers.map((tool) => (
                  <SlantedSticker
                    key={tool.label}
                    text={tool.label}
                    bg={tool.color}
                    rot={tool.rot}
                    size="md"
                  />
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Section: "Things I do" */}
        <div className="space-y-10">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="font-note text-[26px] text-[#35B47C] font-medium">
                what I do
              </span>
              <Asterisk14s size={18} className="text-[#F6C945]" />
            </div>

            <h2 className="font-pixel text-[42px] sm:text-[56px] lg:text-[72px] font-bold text-[#161616] leading-[1em] tracking-[-0.01em]">
              Things I do
            </h2>

            <p className="font-body text-[17px] sm:text-[18px] lg:text-[20px] text-[#6B6A66] leading-[1.5em]">
              Four areas where I bridge design empathy with rigorous automated and functional testing.
            </p>
          </div>

          {/* 4 Skill Rows */}
          <div className="divide-y-2 divide-[#161616] border-y-2 border-[#161616] bg-[#ffffff] rounded-2xl shadow-solid overflow-hidden">
            {skillRows.map((skill) => (
              <div
                key={skill.num}
                className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#FBE9A6]/40 transition-colors group cursor-default"
              >
                <div className="flex items-center gap-6">
                  <span className="font-label text-sm sm:text-base font-bold text-[#F2679B] px-3 py-1 rounded bg-[#F6F3EC] border border-[#161616]">
                    {skill.num}
                  </span>
                  <div>
                    <h3 className="font-pixel text-2xl sm:text-3xl font-bold text-[#161616] group-hover:text-[#F2679B] transition-colors">
                      {skill.title}
                    </h3>
                  </div>
                </div>

                <div className="font-label text-xs sm:text-sm font-bold uppercase tracking-wider text-[#6B6A66] sm:text-right">
                  {skill.subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
