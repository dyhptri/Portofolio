import type { FC } from 'react';
import { personalData } from '../data/portfolioData';
import { SlantedSticker, Asterisk14s } from './Doodles';
import { ArrowUpRight, Check } from 'lucide-react';

export const MilaServices: FC = () => {
  return (
    <section id="services" className="pt-8 pb-24 md:pt-12 md:pb-28 relative">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="font-note text-[26px] text-[#35B47C] font-medium">
                what I can do for you
              </span>
              <Asterisk14s size={18} className="text-[#F2679B]" />
            </div>

            <h2 className="font-pixel text-[42px] sm:text-[56px] lg:text-[72px] font-bold text-[#161616] leading-[1em] tracking-[-0.01em]">
              Services & Skills
            </h2>

            <p className="font-body text-[17px] sm:text-[18px] lg:text-[20px] text-[#6B6A66] leading-[1.5em]">
              Empat kapabilitas teknis utama yang siap diterapkan pada tim software development Anda.
            </p>
          </div>

          <div className="self-start md:self-end">
            <SlantedSticker
              text="remote friendly • Malang based"
              bg="#CDEBDD"
              rot="2deg"
              size="md"
            />
          </div>
        </div>

        {/* 2-Column Responsive Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {personalData.services.map((service, idx) => (
            <div
              key={service.id}
              className="relative p-6 sm:p-8 rounded-2xl bg-[#ffffff] border-ink-thick shadow-solid-card hover:shadow-solid-lg transition-all duration-200 flex flex-col justify-between group"
            >
              {/* Corner washi tape */}
              <div
                className="absolute -top-3 right-8 w-24 h-5 washi-mint border-y border-dashed border-[#161616]/30 shadow-sm z-10"
                style={{ transform: idx % 2 === 0 ? 'rotate(-1.5deg)' : 'rotate(2deg)' }}
              />

              <div className="space-y-4">
                {/* Header: Title & Availability Tag */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b-2 border-[#161616]/10">
                  <h3 className="font-pixel text-2xl sm:text-3xl font-bold text-[#161616] group-hover:text-[#F2679B] transition-colors">
                    {service.title}
                  </h3>
                  <span className="font-label text-xs font-bold text-[#161616] bg-[#FBE9A6] px-2.5 py-1 rounded-md border border-[#161616] shadow-solid-sm self-start sm:self-auto">
                    {service.price}
                  </span>
                </div>

                <p className="font-body text-base text-[#6B6A66] leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 pt-2">
                  <span className="font-label text-xs font-bold uppercase tracking-wider text-[#161616] block">
                    Lingkup Hasil Kerja:
                  </span>
                  <ul className="space-y-2">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 font-label text-xs sm:text-sm text-[#161616]">
                        <span className="p-0.5 rounded bg-[#35B47C] text-white shrink-0 mt-0.5 border border-[#161616]">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer: Timeline & Inquire */}
              <div className="mt-6 pt-4 border-t-2 border-[#161616] flex items-center justify-between">
                <span className="font-label text-xs font-bold text-[#6B6A66] uppercase">
                  ESTIMASI: {service.timeline}
                </span>

                <a
                  href={`mailto:${personalData.contact.email}?subject=Diskusi%20Layanan%20QA%20-%20${encodeURIComponent(service.title)}`}
                  className="btn-solid inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#F6C945] font-label text-xs font-bold uppercase text-[#161616]"
                >
                  <span>Hubungi Diyah</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
