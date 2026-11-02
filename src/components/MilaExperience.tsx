import type { FC } from 'react';
import { SlantedSticker, Asterisk14s } from './Doodles';
import { Building2, CheckCircle2 } from 'lucide-react';

export const MilaExperience: FC = () => {
  return (
    <section id="experience" className="pt-8 pb-24 md:pt-12 md:pb-28 relative">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="font-note text-[26px] text-[#F2679B] font-medium">
                where I’ve been
              </span>
              <Asterisk14s size={18} className="text-[#F6C945]" />
            </div>

            <h2 className="font-pixel text-[42px] sm:text-[56px] lg:text-[72px] font-bold text-[#161616] leading-[1em] tracking-[-0.01em]">
              Education & Leadership
            </h2>

            <p className="font-body text-[17px] sm:text-[18px] lg:text-[20px] text-[#6B6A66] leading-[1.5em]">
              Rekam jejak keunggulan akademik, tata kelola persuratan, audit anggaran acara Zero Deficit, dan pendampingan mahasiswa.
            </p>
          </div>

          <div className="self-start md:self-end">
            <SlantedSticker
              text="IPK 3.78 • Zero Deficit"
              bg="#F6C945"
              rot="-2deg"
              size="md"
            />
          </div>
        </div>

        {/* Experience & Education List Cards */}
        <div className="space-y-6">
          
          {/* Organisasi 1: HMTI Polinema */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#ffffff] border-ink-thick shadow-solid hover:shadow-solid-lg transition-all duration-200 flex flex-col md:flex-row md:items-start justify-between gap-6 group">
            <div className="md:w-56 shrink-0 space-y-1.5">
              <span className="font-label text-xs sm:text-sm font-bold text-[#161616] bg-[#F6F3EC] px-3 py-1 rounded-md border border-[#161616] inline-block shadow-solid-sm">
                2024 – 2025
              </span>
              <div className="font-label text-xs font-bold uppercase tracking-wider text-[#F07A3C]">
                Organisasi Kampus
              </div>
            </div>

            <div className="md:flex-1 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                <h3 className="font-pixel text-2xl sm:text-3xl font-bold text-[#161616] group-hover:text-[#F2679B] transition-colors">
                  Koordinator Kesekretariatan & Bendahara Pelaksana
                </h3>
              </div>
              <div className="font-label text-sm font-bold text-[#6B6A66] flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-[#F07A3C]" />
                <span>Himpunan Mahasiswa Teknologi Informasi (HMTI) Polinema</span>
              </div>

              <ul className="space-y-1.5 pt-1">
                <li className="flex items-start gap-2 font-body text-sm text-[#161616]">
                  <CheckCircle2 className="w-4 h-4 text-[#35B47C] shrink-0 mt-0.5" />
                  <span>Bertanggung jawab atas standardisasi tata kelola administrasi surat-menyurat, legalitas perizinan kegiatan internal/eksternal, serta digitalisasi arsip organisasi.</span>
                </li>
                <li className="flex items-start gap-2 font-body text-sm text-[#161616]">
                  <CheckCircle2 className="w-4 h-4 text-[#35B47C] shrink-0 mt-0.5" />
                  <span>Mengelola arus kas, merancang Rencana Anggaran Biaya (RAB), memvalidasi bukti transaksi, serta menyusun LPJ keuangan akuntabel berstatus <strong>Zero Deficit</strong> pada Dies Natalis HMTI 2025.</span>
                </li>
                <li className="flex items-start gap-2 font-body text-sm text-[#161616]">
                  <CheckCircle2 className="w-4 h-4 text-[#35B47C] shrink-0 mt-0.5" />
                  <span>Menginisiasi program kerja penguatan internal organisasi untuk meningkatkan kolaborasi tim lintas departemen.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Organisasi 2: Prastudi JTI */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#ffffff] border-ink-thick shadow-solid hover:shadow-solid-lg transition-all duration-200 flex flex-col md:flex-row md:items-start justify-between gap-6 group">
            <div className="md:w-56 shrink-0 space-y-1.5">
              <span className="font-label text-xs sm:text-sm font-bold text-[#161616] bg-[#F6F3EC] px-3 py-1 rounded-md border border-[#161616] inline-block shadow-solid-sm">
                Agustus 2025
              </span>
              <div className="font-label text-xs font-bold uppercase tracking-wider text-[#35B47C]">
                Kepanitiaan Jurusan
              </div>
            </div>

            <div className="md:flex-1 space-y-2">
              <h3 className="font-pixel text-2xl sm:text-3xl font-bold text-[#161616] group-hover:text-[#F2679B] transition-colors">
                Panitia Pendamping Kelompok (Student Mentor / Facilitator)
              </h3>
              <div className="font-label text-sm font-bold text-[#6B6A66] flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-[#35B47C]" />
                <span>Prastudi Mahasiswa Baru Jurusan TI Polinema</span>
              </div>
              <p className="font-body text-sm sm:text-base text-[#6B6A66] leading-relaxed">
                Mendampingi puluhan mahasiswa baru dalam masa orientasi pengenalan kultur akademik perkuliahan, adaptasi sarana laboratorium, dan kepatuhan SOP jurusan.
              </p>
            </div>
          </div>

          {/* Pendidikan: Polinema & SMA */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Polinema */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#FBE9A6] border-ink-thick shadow-solid space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-label text-xs font-bold bg-white px-2 py-0.5 rounded border border-[#161616]">
                  2024 – Sekarang
                </span>
                <span className="font-label text-xs font-bold bg-[#35B47C] text-white px-2.5 py-0.5 rounded shadow-sm">
                  IPK 3.78 / 4.00
                </span>
              </div>
              <h4 className="font-pixel text-2xl font-bold text-[#161616]">
                Politeknik Negeri Malang
              </h4>
              <p className="font-body text-sm text-[#161616] font-medium">
                D4 Sistem Informasi Bisnis — Jurusan Teknologi Informasi (Semester 5)
              </p>
            </div>

            {/* SMA 1 Purwosari */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#ffffff] border-ink-thick shadow-solid space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-label text-xs font-bold bg-[#F6F3EC] px-2 py-0.5 rounded border border-[#161616]">
                  2021 – 2024
                </span>
                <span className="font-label text-xs font-bold text-[#6B6A66]">
                  Lulus
                </span>
              </div>
              <h4 className="font-pixel text-2xl font-bold text-[#161616]">
                SMA Negeri 1 Purwosari
              </h4>
              <p className="font-body text-sm text-[#6B6A66]">
                Peminatan MIPA (Matematika dan Ilmu Pengetahuan Alam)
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
