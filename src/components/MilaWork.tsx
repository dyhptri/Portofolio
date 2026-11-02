import { useState, type FC } from 'react';
import { personalData, type ProjectItem } from '../data/portfolioData';
import { ArrowUpRight, X, CheckCircle2 } from 'lucide-react';
import { SlantedSticker, Asterisk14s } from './Doodles';

export const MilaWork: FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="work" className="pt-16 pb-24 md:pt-20 md:pb-28 relative">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2 max-w-2xl">
            {/* Eyebrow Note (Caveat 24px) */}
            <div className="flex items-center gap-2">
              <span className="font-note text-[24px] sm:text-[28px] text-[#F07A3C] font-medium">
                explore my work!
              </span>
              <Asterisk14s size={18} className="text-[#35B47C]" />
            </div>

            {/* Title (Pixelify Sans 72px desktop, 56px tablet, 42px phone) */}
            <h2 className="font-pixel text-[42px] sm:text-[56px] lg:text-[72px] font-bold text-[#161616] leading-[1em] tracking-[-0.01em]">
              Selected work
            </h2>

            {/* Subtext */}
            <p className="font-body text-[17px] sm:text-[18px] lg:text-[20px] text-[#6B6A66] leading-[1.5em] max-w-xl">
              Proyek pengujian perangkat lunak terotomatisasi (Cypress E2E), perancangan sistem antarmuka mobile Figma, dan pemodelan sistem informasi laboratorium.
            </p>
          </div>

          {/* Count Sticker */}
          <div className="self-start md:self-end">
            <SlantedSticker
              text="3 featured projects, more on GitHub"
              bg="#FBE9A6"
              rot="-2deg"
              size="md"
            />
          </div>
        </div>

        {/* Responsive Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {personalData.projects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-2xl bg-[#ffffff] border-ink-thick shadow-solid-card hover:shadow-solid-lg transition-all duration-200 cursor-pointer p-6 flex flex-col justify-between"
            >
              {/* Corner washi tape decoration */}
              <div
                className="absolute -top-3 right-6 w-24 h-5 washi-yellow border-y border-dashed border-[#161616]/30 shadow-sm z-10"
                style={{ transform: idx % 2 === 0 ? 'rotate(-2deg)' : 'rotate(2.5deg)' }}
              />

              <div className="space-y-4">
                {/* Visual Viewport Banner */}
                <div
                  className="w-full h-52 sm:h-56 rounded-xl border-ink overflow-hidden relative group-hover:shadow-solid-sm transition-all bg-[#ffffff]"
                  style={{ backgroundColor: project.badgeBg }}
                >
                  {project.image ? (
                    <div className="w-full h-full relative overflow-hidden bg-[#ffffff]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                      {/* Subtle dark gradient overlay at bottom for role & view details readability */}
                      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/75 via-black/35 to-transparent" />
                    </div>
                  ) : (
                    <div className="w-full h-full bg-[#ffffff]" />
                  )}

                  {/* Period tag pill in top-right */}
                  <div className="absolute top-3 right-3 z-10">
                    <span className="bg-[#ffffff] border-ink px-2.5 py-0.5 rounded shadow-solid-sm text-xs font-label font-bold text-[#161616]">
                      {project.period}
                    </span>
                  </div>

                  {/* Bottom bar overlay */}
                  <div className={`absolute inset-x-0 bottom-0 p-3 flex justify-between items-center text-[11px] font-label font-bold z-10 ${
                    project.image ? 'text-white' : 'text-[#161616]'
                  }`}>
                    <span className="truncate max-w-[180px] drop-shadow-sm">
                      {project.role || project.title}
                    </span>
                    <span className="underline group-hover:text-[#F2679B] flex items-center gap-1 shrink-0 drop-shadow-sm">
                      view details <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Metadata */}
                <div>
                  <h3 className="font-pixel text-2xl font-bold text-[#161616] group-hover:text-[#F2679B] transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <div className="font-label text-xs text-[#F07A3C] font-bold mt-1">
                    {project.subtitle}
                  </div>
                  <p className="font-body text-sm text-[#6B6A66] mt-2 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.slice(0, 4).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="font-label text-[10px] font-bold bg-[#F6F3EC] border border-[#161616] px-2 py-0.5 rounded text-[#161616]"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="font-label text-[10px] text-[#6B6A66] px-1 py-0.5">
                      +{project.tags.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer: Handwritten sketch note */}
              <div className="mt-5 pt-3 border-t border-[#161616]/15 flex items-center justify-between">
                <span className="font-note text-[19px] text-[#F07A3C] font-semibold truncate max-w-[200px]">
                  ~ {project.sketchNote}
                </span>
                <span className="btn-solid inline-flex items-center gap-1 px-3 py-1 rounded bg-[#ffffff] font-label text-xs font-bold text-[#161616]">
                  Details
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Work CTA Button */}
        <div className="mt-14 text-center">
          <a
            href={personalData.contact.github}
            target="_blank"
            rel="noreferrer"
            className="btn-solid inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#ffffff] font-label text-sm sm:text-base font-bold uppercase tracking-wider text-[#161616] hover:bg-[#FBE9A6]"
          >
            <span>Lihat Repositori & Bukti Pengujian di GitHub</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#ffffff] border-ink-thick rounded-2xl shadow-solid-lg p-6 sm:p-8 space-y-6">
            <div className="flex items-start justify-between">
              <div>
                <span className="font-label text-xs font-bold uppercase tracking-wider bg-[#F6C945] px-2.5 py-1 rounded border-ink shadow-solid-sm">
                  {selectedProject.category}
                </span>
                <h3 className="font-pixel text-3xl sm:text-4xl font-bold text-[#161616] mt-3">
                  {selectedProject.title}
                </h3>
                <p className="font-label text-xs text-[#6B6A66] mt-1">
                  {selectedProject.subtitle} • {selectedProject.period}
                </p>
                {selectedProject.role && (
                  <div className="font-label text-xs font-bold text-[#F07A3C] mt-0.5">
                    Peran: {selectedProject.role}
                  </div>
                )}
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="btn-solid p-2 rounded-lg bg-[#ffffff] text-[#161616] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Project Screenshot Documentation / Multi-photo Gallery */}
            {selectedProject.gallery && selectedProject.gallery.length > 1 ? (
              <div className="space-y-2">
                <span className="font-label text-xs font-bold uppercase text-[#161616] block">
                  Dokumentasi Antarmuka Sistem:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="rounded-xl border-ink overflow-hidden shadow-solid-sm bg-[#ffffff]">
                    <div className="px-2.5 py-1 bg-[#F6F3EC] border-b border-[#161616] text-[10px] font-label font-bold text-[#6B6A66]">
                      01 • Website Profil Publik Lab InLET
                    </div>
                    <img
                      src={selectedProject.gallery[0]}
                      alt="Website Profil Lab InLET"
                      className="w-full h-44 object-cover object-top"
                    />
                  </div>
                  <div className="rounded-xl border-ink overflow-hidden shadow-solid-sm bg-[#ffffff]">
                    <div className="px-2.5 py-1 bg-[#F6F3EC] border-b border-[#161616] text-[10px] font-label font-bold text-[#6B6A66]">
                      02 • SIM & Dashboard Absensi Riset
                    </div>
                    <img
                      src={selectedProject.gallery[1]}
                      alt="SIM & Dashboard Absensi Lab InLET"
                      className="w-full h-44 object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            ) : selectedProject.image ? (
              <div className="w-full h-56 sm:h-72 rounded-xl border-ink overflow-hidden shadow-solid-sm bg-[#ffffff]">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            ) : null}

            <p className="font-body text-base text-[#161616] leading-relaxed">
              {selectedProject.description}
            </p>

            {/* Poin Kontribusi & Dampak */}
            <div className="p-4 rounded-xl bg-[#F6F3EC] border-ink space-y-3">
              <span className="font-label text-xs font-bold uppercase text-[#161616] block">
                Poin Kontribusi & Dampak Utama:
              </span>
              <ul className="space-y-2">
                {selectedProject.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2.5 font-body text-xs sm:text-sm text-[#161616] leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#35B47C] shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {selectedProject.tags.map((t, idx) => (
                <span
                  key={idx}
                  className="font-label text-[11px] font-bold bg-[#FBE9A6] border border-[#161616] px-2.5 py-0.5 rounded text-[#161616]"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Note & Close */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-[#161616]/20">
              <span className="font-note text-2xl text-[#F07A3C] font-bold">
                ~ {selectedProject.sketchNote}
              </span>

              <button
                onClick={() => setSelectedProject(null)}
                className="btn-solid px-6 py-2.5 rounded-xl bg-[#F6C945] font-label text-xs font-bold uppercase text-[#161616] cursor-pointer"
              >
                Tutup Detail
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
