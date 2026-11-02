import type { FC } from 'react';
import { Asterisk14s, CoffeeMug } from './Doodles';
import { ArrowUp, Mail, MessageCircle } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export const MilaFooter: FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t-2 border-[#161616] bg-[#F6F3EC] py-16 relative">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 space-y-12">
        
        {/* Top Row: Wordmark & Navigation */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
          
          {/* Wordmark & Tagline */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-pixel text-[30px] sm:text-[34px] font-bold text-[#161616] leading-none">
                {personalData.name}
              </span>
              <Asterisk14s size={22} className="text-[#F2679B]" />
            </div>
            <p className="font-label text-xs sm:text-sm font-bold text-[#6B6A66] uppercase tracking-wider">
              {personalData.title}
            </p>
            <p className="font-note text-2xl text-[#161616] pt-1 flex items-center gap-1.5">
              <span>made with passion & coffee in Malang, East Java</span>
              <CoffeeMug className="w-5 h-5 text-[#F07A3C]" />
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap gap-5 sm:gap-7 items-center">
            {[
              { name: 'About', href: '#about' },
              { name: 'Work', href: '#work' },
              { name: 'Experience', href: '#experience' },
              { name: 'Skills & Services', href: '#services' }
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-label text-xs sm:text-sm font-bold uppercase tracking-wider text-[#161616] hover:text-[#F2679B] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Links, Email, WhatsApp & Back to top */}
          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href={`mailto:${personalData.contact.email}`}
              className="btn-solid inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#ffffff] font-label text-xs font-bold text-[#161616] hover:bg-[#F6C945]"
              title="Kirim Email"
            >
              <Mail className="w-3.5 h-3.5 text-[#F07A3C]" />
              <span>Email</span>
            </a>
            <a
              href={`https://wa.me/${personalData.contact.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noreferrer"
              className="btn-solid inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#ffffff] font-label text-xs font-bold text-[#161616] hover:bg-[#35B47C] hover:text-white"
              title="Chat WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#35B47C]" />
              <span>WhatsApp</span>
            </a>
            <a
              href={personalData.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn-solid px-3 py-1.5 rounded-md bg-[#ffffff] font-label text-xs font-bold text-[#161616] hover:bg-[#F6C945]"
            >
              LinkedIn
            </a>
            <a
              href={personalData.contact.github}
              target="_blank"
              rel="noreferrer"
              className="btn-solid px-3 py-1.5 rounded-md bg-[#ffffff] font-label text-xs font-bold text-[#161616] hover:bg-[#F2679B] hover:text-white"
            >
              GitHub
            </a>
            <button
              onClick={scrollToTop}
              className="btn-solid p-2 rounded-md bg-[#F6C945] text-[#161616] cursor-pointer"
              title="Kembali ke atas"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Row: Copyright & Legal */}
        <div className="pt-8 border-t border-[#161616]/15 flex flex-col sm:flex-row items-center justify-between gap-4 font-label text-xs text-[#6B6A66]">
          <div>
            © {new Date().getFullYear()} Diyah Ramadhani Putri. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span>Politeknik Negeri Malang • D4 SIB</span>
            <span>•</span>
            <span className="font-note text-lg text-[#F07A3C]">
              Cypress & Figma Verified
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
