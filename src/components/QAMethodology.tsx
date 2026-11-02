import { qaMethodologyPhases } from '../data/artifactsData';
import { Search, FileSpreadsheet, PlayCircle, Bug, ShieldCheck } from 'lucide-react';

export const QAMethodology = () => {
  const getPhaseIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search':
        return <Search className="w-6 h-6 text-cyan-400" />;
      case 'FileSpreadsheet':
        return <FileSpreadsheet className="w-6 h-6 text-sky-400" />;
      case 'PlayCircle':
        return <PlayCircle className="w-6 h-6 text-emerald-400" />;
      case 'Bug':
        return <Bug className="w-6 h-6 text-rose-400" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section className="py-20 bg-[#060912] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Structured SDLC Integration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            The 4-Phase QA Testing Lifecycle
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Quality is not an afterthought before release. Here is how I methodically engineer verification across every stage of the software development life cycle.
          </p>
        </div>

        {/* 4 Phases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {qaMethodologyPhases.map((phase) => (
            <div
              key={phase.step}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900/90 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 group-hover:scale-105 transition-transform">
                    {getPhaseIcon(phase.icon)}
                  </div>
                  <span className="text-2xl font-mono font-extrabold text-slate-600 group-hover:text-cyan-400 transition-colors">
                    {phase.step}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {phase.phase}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400/90 mt-1">
                    {phase.tagline}
                  </p>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {phase.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/80 space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-semibold block">
                  Core Deliverables:
                </span>
                <div className="space-y-1">
                  {phase.deliverables.map((del, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-300">
                      <span className="w-1 h-1 rounded-full bg-cyan-400" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
