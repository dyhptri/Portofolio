import { useState, type FC } from 'react';
import { personalData, type JournalNote } from '../data/portfolioData';
import { SlantedSticker, Asterisk14s } from './Doodles';
import { ArrowUpRight, X, Clock } from 'lucide-react';

export const MilaJournal: FC = () => {
  const [selectedPost, setSelectedPost] = useState<JournalNote | null>(null);

  return (
    <section id="journal" className="pt-8 pb-24 md:pt-12 md:pb-28 relative">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="font-note text-[26px] text-[#F2679B] font-medium">
                notes & test logs
              </span>
              <Asterisk14s size={18} className="text-[#F6C945]" />
            </div>

            <h2 className="font-pixel text-[42px] sm:text-[56px] lg:text-[72px] font-bold text-[#161616] leading-[1em] tracking-[-0.01em]">
              From the QA Journal
            </h2>

            <p className="font-body text-[17px] sm:text-[18px] lg:text-[20px] text-[#6B6A66] leading-[1.5em]">
              Catatan praktis dan refleksi seputar automated testing Cypress, desain sistem Figma, dan analisis kebutuhan perangkat lunak.
            </p>
          </div>

          <div className="self-start md:self-end">
            <SlantedSticker
              text="practical dev logs"
              bg="#D9DCF7"
              rot="2.5deg"
              size="md"
            />
          </div>
        </div>

        {/* 3-Column Responsive Journal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {personalData.journalNotes.map((post) => (
            <div
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="p-6 sm:p-7 rounded-2xl bg-[#ffffff] border-ink-thick shadow-solid-card hover:shadow-solid-lg transition-all duration-200 cursor-pointer flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-label font-bold text-[#6B6A66]">
                  <span className="bg-[#F6F3EC] px-2.5 py-0.5 rounded border border-[#161616]">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </span>
                </div>

                <h3 className="font-pixel text-xl sm:text-2xl font-bold text-[#161616] group-hover:text-[#F2679B] transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="font-body text-sm text-[#6B6A66] leading-relaxed">
                  {post.summary}
                </p>
              </div>

              {/* Bottom Note & Date */}
              <div className="mt-6 pt-3 border-t border-[#161616]/15 flex items-center justify-between">
                <span className="font-note text-[19px] text-[#F07A3C] font-semibold">
                  ~ {post.note}
                </span>
                <span className="font-label text-xs font-bold text-[#161616] underline group-hover:text-[#F2679B] flex items-center gap-1">
                  baca <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Journal Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="relative w-full max-w-xl max-h-[85vh] overflow-y-auto bg-[#ffffff] border-ink-thick rounded-2xl shadow-solid-lg p-6 sm:p-8 space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <span className="font-label text-xs font-bold uppercase bg-[#D9DCF7] px-2.5 py-0.5 rounded border border-[#161616]">
                  {selectedPost.category}
                </span>
                <h3 className="font-pixel text-2xl sm:text-3xl font-bold text-[#161616] mt-2">
                  {selectedPost.title}
                </h3>
                <span className="font-label text-xs text-[#6B6A66] mt-1 block">
                  {selectedPost.date} • {selectedPost.readTime}
                </span>
              </div>

              <button
                onClick={() => setSelectedPost(null)}
                className="btn-solid p-2 rounded-lg bg-[#ffffff] text-[#161616]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="font-body text-base text-[#161616] leading-relaxed">
              {selectedPost.summary}
            </p>

            <div className="p-4 rounded-xl bg-[#F6F3EC] border-ink font-body text-sm text-[#161616] leading-relaxed space-y-2">
              <p>
                Dalam proses QA, saya selalu menerapkan pendekatan <em>Shift-Left Testing</em>: pengujian dimulai sejak analisis kebutuhan dan perancangan wireframe. Ini menghemat biaya perbaikan bug hingga 10x lipat dibandingkan menemukan anomali setelah kode siap dirilis.
              </p>
              <p>
                Kombinasi test suite Cypress yang deterministik dan skenario manual eksploratif memastikan aplikasi tidak hanya bebas bug, namun juga nyaman digunakan pengguna akhir.
              </p>
            </div>

            <div className="flex justify-between items-center pt-2">
              <span className="font-note text-2xl text-[#F07A3C]">
                ~ {selectedPost.note}
              </span>
              <button
                onClick={() => setSelectedPost(null)}
                className="btn-solid px-5 py-2 rounded-xl bg-[#F6C945] font-label text-xs font-bold uppercase text-[#161616]"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
