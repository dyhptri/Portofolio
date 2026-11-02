import type { FC } from 'react';
import { personalData } from '../data/portfolioData';
import { Asterisk14s } from './Doodles';
import { Check, ArrowRight } from 'lucide-react';

export const MilaPricing: FC = () => {
  return (
    <section id="pricing" className="pt-8 pb-24 md:pt-12 md:pb-28 relative">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="font-note text-[26px] text-[#F07A3C] font-medium">
                honest commitment
              </span>
              <Asterisk14s size={18} className="text-[#35B47C]" />
            </div>

            <h2 className="font-pixel text-[42px] sm:text-[56px] lg:text-[72px] font-bold text-[#161616] leading-[1em] tracking-[-0.01em]">
              Engagement Models
            </h2>

            <p className="font-body text-[17px] sm:text-[18px] lg:text-[20px] text-[#6B6A66] leading-[1.5em]">
              Format kolaborasi fleksibel untuk posisi magang, sprint pengujian QA, maupun perancangan antarmuka & analisis sistem.
            </p>
          </div>
        </div>

        {/* 3-Column Responsive Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {personalData.pricingTiers.map((tier) => (
            <div
              key={tier.id}
              className={`p-6 sm:p-8 rounded-2xl bg-[#ffffff] border-ink-thick shadow-solid-card hover:shadow-solid-lg transition-all duration-200 flex flex-col justify-between relative ${
                tier.popular ? 'ring-2 ring-[#F6C945]' : ''
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#F6C945] border-ink px-3 py-0.5 rounded-full font-label text-[11px] font-bold uppercase shadow-solid-sm">
                  ★ REKOMENDASI UTAMA
                </div>
              )}

              <div className="space-y-4">
                {/* Header */}
                <div className="space-y-1">
                  <h3 className="font-pixel text-3xl font-bold text-[#161616]">
                    {tier.name}
                  </h3>
                  <div className="font-pixel text-3xl sm:text-4xl font-bold text-[#161616] tracking-tight">
                    {tier.price}
                  </div>
                  <div className="font-label text-xs font-bold uppercase text-[#F07A3C]">
                    {tier.scope}
                  </div>
                </div>

                <p className="font-body text-sm text-[#161616] bg-[#F6F3EC] p-3 rounded-lg border border-[#161616]/20">
                  {tier.summary}
                </p>

                {/* Features */}
                <ul className="space-y-2 pt-2">
                  {tier.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 font-label text-xs text-[#161616]">
                      <span className="p-0.5 rounded bg-[#35B47C] text-white shrink-0 mt-0.5 border border-[#161616]">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom CTA & Timeline */}
              <div className="mt-8 pt-4 border-t-2 border-[#161616] space-y-3">
                <span className="font-label text-xs font-bold text-[#6B6A66] block">
                  DURASI: {tier.timeline}
                </span>

                <a
                  href={`mailto:${personalData.contact.email}?subject=Diskusi%20Model%20Kerja%20-%20${encodeURIComponent(tier.name)}`}
                  className="btn-solid w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#F6C945] font-label text-xs sm:text-sm font-bold uppercase tracking-wider text-[#161616]"
                >
                  <span>{tier.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <div className="mt-8 p-4 rounded-xl bg-[#FBE9A6] border-ink text-center max-w-xl mx-auto shadow-solid-sm">
          <p className="font-body text-xs sm:text-sm font-medium text-[#161616]">
            Terbuka untuk posisi magang (internship) full-time / part-time, kontrak proyek, dan kolaborasi remote berbasis hasil terukur.
          </p>
        </div>

      </div>
    </section>
  );
};
