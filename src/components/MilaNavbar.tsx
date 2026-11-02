import { useState, useEffect, type FC } from 'react';
import { Menu, X } from 'lucide-react';
import { Asterisk14s } from './Doodles';

export const MilaNavbar: FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills & Services', href: '#services' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 border-b-2 border-[#161616] ${
        scrolled ? 'bg-[#F6F3EC]/95 backdrop-blur-md shadow-solid-sm py-3' : 'bg-[#F6F3EC] py-4'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between">
          {/* Wordmark (Pixelify Sans 700, 28px) */}
          <a href="#" className="group flex items-center gap-2.5">
            <span className="font-pixel text-[24px] sm:text-[28px] font-bold text-[#161616] tracking-tight group-hover:text-[#F2679B] transition-colors leading-none">
              Diyah Ramadhani
            </span>
            <Asterisk14s size={20} className="text-[#F6C945]" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-label text-xs sm:text-[13px] font-bold uppercase tracking-[0.06em] text-[#161616] hover:text-[#F2679B] transition-colors relative py-1 group"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#161616] group-hover:w-full transition-all duration-200" />
              </a>
            ))}
          </nav>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="btn-solid p-2 rounded-lg bg-[#ffffff] text-[#161616]"
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileOpen && (
          <div className="md:hidden mt-3 p-4 rounded-xl bg-[#ffffff] border-ink shadow-solid space-y-2 animate-in fade-in">
            <div className="flex flex-col space-y-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-label text-xs sm:text-sm font-bold uppercase tracking-wider text-[#161616] hover:text-[#F2679B] py-1.5 px-2 rounded hover:bg-[#F6F3EC]"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
