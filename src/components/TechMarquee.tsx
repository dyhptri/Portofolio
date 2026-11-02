import { tickerRowOne, tickerRowTwo } from '../data/skillsData';
import { Shield, Database, GitBranch, Layers } from 'lucide-react';
import { FigmaIcon } from './BrandIcons';

export const TechMarquee = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'QA':
        return <Shield className="w-3.5 h-3.5 text-cyan-400" />;
      case 'Design':
        return <FigmaIcon className="w-3.5 h-3.5 text-purple-400" />;
      case 'Backend/DB':
        return <Database className="w-3.5 h-3.5 text-emerald-400" />;
      case 'Analysis':
        return <Layers className="w-3.5 h-3.5 text-amber-400" />;
      default:
        return <GitBranch className="w-3.5 h-3.5 text-sky-400" />;
    }
  };

  return (
    <section className="py-12 bg-[#060911] border-y border-slate-800/80 overflow-hidden relative">
      {/* Side gradient fades */}
      <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-[#060911] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-[#060911] to-transparent z-10 pointer-events-none" />

      <div className="flex flex-col space-y-4">
        {/* Row 1: Leftward Marquee */}
        <div className="flex overflow-hidden">
          <div className="animate-marquee flex items-center gap-3">
            {[...tickerRowOne, ...tickerRowOne].map((skill, index) => (
              <div
                key={`r1-${index}`}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-medium border transition-all cursor-default select-none ${
                  skill.highlight
                    ? 'bg-slate-900/90 border-cyan-500/40 text-slate-200 shadow-sm shadow-cyan-500/10 hover:border-cyan-400 hover:text-white'
                    : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                {getCategoryIcon(skill.category)}
                <span>{skill.name}</span>
                {skill.highlight && (
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Rightward Marquee */}
        <div className="flex overflow-hidden">
          <div className="animate-marquee-reverse flex items-center gap-3">
            {[...tickerRowTwo, ...tickerRowTwo].map((skill, index) => (
              <div
                key={`r2-${index}`}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-medium border transition-all cursor-default select-none ${
                  skill.highlight
                    ? 'bg-slate-900/90 border-emerald-500/40 text-slate-200 shadow-sm shadow-emerald-500/10 hover:border-emerald-400 hover:text-white'
                    : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                {getCategoryIcon(skill.category)}
                <span>{skill.name}</span>
                {skill.highlight && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
