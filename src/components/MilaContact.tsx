import { useState, type FC, type FormEvent } from 'react';
import { SlantedSticker, CoffeeMug } from './Doodles';
import { Mail, Phone, Copy, Check, Send, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { personalData } from '../data/portfolioData';
import confetti from 'canvas-confetti';

export const MilaContact: FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    idea: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalData.contact.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.idea) return;
    setFormSent(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 }
    });
    const subject = encodeURIComponent(`[Inquiry / Opportunity] from ${formData.name}`);
    const body = encodeURIComponent(`Halo Diyah,\n\n${formData.idea}\n\nSalam,\n${formData.name} (${formData.email})`);
    setTimeout(() => {
      window.location.href = `mailto:${personalData.contact.email}?subject=${subject}&body=${body}`;
    }, 800);
  };

  return (
    <section id="contact" className="pt-10 pb-28 md:pt-14 md:pb-36 relative">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* Contact Container Box with solid neo-brutalist border and shadow */}
        <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-[#ffffff] border-ink-thick shadow-solid-lg relative overflow-hidden">
          
          {/* Top Washi Tape */}
          <div
            className="absolute -top-3.5 left-16 w-36 h-6 washi-lilac border-y border-dashed border-[#161616]/40 shadow-sm"
            style={{ transform: 'rotate(-2deg)' }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Direct info, Sticker, Socials */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Reply Sticker */}
              <div className="flex items-center gap-3">
                <SlantedSticker
                  text="replies within 24 hours"
                  bg="#F6C945"
                  rot="-2deg"
                  size="md"
                />
                <CoffeeMug className="w-5 h-5 text-[#F07A3C]" />
              </div>

              {/* Note: "let’s collaborate" */}
              <div className="space-y-2">
                <span className="font-note text-[28px] sm:text-[34px] text-[#F2679B] font-medium leading-none block">
                  let’s collaborate & build something reliable
                </span>

                {/* Title: "Say hello" */}
                <h2 className="font-pixel text-[48px] sm:text-[64px] lg:text-[76px] font-bold text-[#161616] leading-[1em] tracking-[-0.01em]">
                  Say hello
                </h2>
              </div>

              {/* Text */}
              <p className="font-body text-base sm:text-lg text-[#6B6A66] leading-relaxed max-w-lg">
                Punya peluang magang (internship), proyek pengujian QA, kebutuhan desain antarmuka Figma, atau sekadar ingin berdiskusi? Jangan ragu untuk menghubungi saya!
              </p>

              {/* Email Direct Button */}
              <div className="space-y-2 pt-2">
                <span className="font-label text-xs font-bold uppercase tracking-wider text-[#6B6A66] block">
                  Email Langsung:
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  <a
                    href={`mailto:${personalData.contact.email}`}
                    className="btn-solid inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#F6F3EC] font-pixel text-lg sm:text-xl font-bold text-[#161616] hover:bg-[#FBE9A6]"
                  >
                    <Mail className="w-5 h-5 text-[#F07A3C]" />
                    <span>{personalData.contact.email}</span>
                  </a>

                  <button
                    onClick={handleCopyEmail}
                    className="btn-solid p-3 rounded-xl bg-[#ffffff] text-[#161616] cursor-pointer"
                    title="Salin alamat email"
                  >
                    {copiedEmail ? <Check className="w-5 h-5 text-[#35B47C]" /> : <Copy className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* WhatsApp Direct */}
              <div className="space-y-2 pt-1">
                <span className="font-label text-xs font-bold uppercase tracking-wider text-[#6B6A66] block">
                  WhatsApp / Telepon:
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  <a
                    href={personalData.contact.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-solid inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#F6F3EC] font-pixel text-lg sm:text-xl font-bold text-[#161616] hover:bg-[#CDEBDD]"
                  >
                    <Phone className="w-5 h-5 text-[#35B47C]" />
                    <span>{personalData.contact.phone}</span>
                  </a>

                  <button
                    onClick={handleCopyPhone}
                    className="btn-solid p-3 rounded-xl bg-[#ffffff] text-[#161616] cursor-pointer"
                    title="Salin nomor WhatsApp"
                  >
                    {copiedPhone ? <Check className="w-5 h-5 text-[#35B47C]" /> : <Copy className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Social Channels (LinkedIn & GitHub) */}
              <div className="space-y-2 pt-3">
                <span className="font-label text-xs font-bold uppercase tracking-wider text-[#6B6A66] block">
                  Jaringan Profesional & Kode:
                </span>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={personalData.contact.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-solid inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#ffffff] font-label text-xs font-bold text-[#161616] hover:bg-[#F6C945]"
                  >
                    <LinkedinIcon className="w-4 h-4 text-[#0284c7]" />
                    <span>LinkedIn Profile</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={personalData.contact.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-solid inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#ffffff] font-label text-xs font-bold text-[#161616] hover:bg-[#F2679B] hover:text-white"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub Repositories</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>

            {/* Right Column: Sketchbook Note Form */}
            <div className="lg:col-span-6">
              <div className="p-6 sm:p-8 rounded-2xl bg-[#F6F3EC] border-ink shadow-solid space-y-4 relative">
                {/* Washi tape */}
                <div
                  className="absolute -top-3 right-8 w-24 h-5 washi-mint border-y border-dashed border-[#161616]/30 shadow-sm"
                  style={{ transform: 'rotate(2deg)' }}
                />

                <span className="font-label text-xs font-bold uppercase tracking-wider text-[#161616] block pb-1 border-b border-[#161616]/20">
                  KIRIM PESAN / TAWARAN KERJA:
                </span>

                {formSent ? (
                  <div className="p-6 rounded-xl bg-[#CDEBDD] border-ink text-center space-y-2 animate-in fade-in">
                    <span className="font-pixel text-2xl font-bold text-[#161616] block">
                      Pesan Disiapkan!
                    </span>
                    <p className="font-note text-2xl text-[#161616]">
                      Terima kasih! Email client Anda sedang dibuka dengan draf pesan ini. Sampai jumpa!
                    </p>
                    <button
                      onClick={() => setFormSent(false)}
                      className="font-label text-xs font-bold underline cursor-pointer text-[#161616] mt-2"
                    >
                      tulis pesan baru
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-1">
                      <label className="font-label text-xs font-bold text-[#161616]">
                        Nama Anda / Perusahaan *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Budi Pratama / Tech Studio"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#ffffff] border-ink font-body text-sm text-[#161616] placeholder-[#6B6A66]/60 focus:outline-none focus:ring-2 focus:ring-[#F6C945]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-label text-xs font-bold text-[#161616]">
                        Alamat Email Balasan *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. budi@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#ffffff] border-ink font-body text-sm text-[#161616] placeholder-[#6B6A66]/60 focus:outline-none focus:ring-2 focus:ring-[#F6C945]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-label text-xs font-bold text-[#161616]">
                        Pesan / Deskripsi Peluang *
                      </label>
                      <textarea
                        required
                        rows={3}
                        value={formData.idea}
                        onChange={(e) => setFormData({ ...formData, idea: e.target.value })}
                        placeholder="Halo Diyah, kami tertarik mendiskusikan peluang magang QA / UI/UX untuk tim kami..."
                        className="w-full px-4 py-2.5 rounded-xl bg-[#ffffff] border-ink font-body text-sm text-[#161616] placeholder-[#6B6A66]/60 focus:outline-none focus:ring-2 focus:ring-[#F6C945] resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-solid w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[#F6C945] font-label text-sm font-bold uppercase tracking-wider text-[#161616] cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Kirim Pesan & Siapkan Email</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
