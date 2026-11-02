import type { FC } from 'react';
import { personalData } from '../data/portfolioData';
import { Asterisk14s } from './Doodles';

export const MilaClients: FC = () => {
  return (
    <section className="pt-6 pb-24 md:pb-28 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 mb-6 text-center">
        {/* Note (Caveat 24px) */}
        <div className="inline-flex items-center gap-2">
          <span className="font-note text-[24px] sm:text-[28px] text-[#161616] font-medium">
            technologies & tools I work with daily
          </span>
          <Asterisk14s size={18} className="text-[#F2679B]" />
        </div>
      </div>

      {/* Tape Strip Border / Continuous Marquee */}
      <div className="border-y-2 border-[#161616] bg-[#FBE9A6] py-3.5 shadow-solid-sm overflow-hidden relative">
        <div className="animate-tape-scroll flex items-center gap-8">
          {[
            ...personalData.clientTechnologies,
            ...personalData.clientTechnologies,
            ...personalData.clientTechnologies
          ].map((tech, idx) => (
            <div key={idx} className="flex items-center gap-8">
              <span className="font-pixel text-2xl sm:text-3xl font-bold text-[#161616] tracking-tight uppercase hover:text-[#F2679B] transition-colors select-none">
                {tech}
              </span>
              <Asterisk14s size={18} className="text-[#161616]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
