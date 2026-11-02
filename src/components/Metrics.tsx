import { impactMetricsData } from '../data/experienceData';
import { GraduationCap, Layers, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export const Metrics = () => {
  const getMetricIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-cyan-400" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-purple-400" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-6 h-6 text-emerald-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-sky-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section className="py-20 bg-[#060a13] border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Verifiable Impact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Key Performance Metrics
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            A numerical snapshot of academic rigor, design output, testing accuracy, and organizational responsibility.
          </p>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactMetricsData.map((metric, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900/90 transition-all duration-300 relative overflow-hidden group glass-panel flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 group-hover:scale-105 transition-transform">
                    {getMetricIcon(metric.icon)}
                  </div>
                  <span className="text-xs font-mono font-semibold text-slate-500">
                    METRIC 0{idx + 1}
                  </span>
                </div>

                <div>
                  <div className="flex items-baseline gap-1.5 font-mono">
                    <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                      {metric.value}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-cyan-400">
                      {metric.subvalue}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-200 mt-2 font-mono">
                    {metric.label}
                  </h3>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  {metric.description}
                </p>
              </div>

              {/* Bottom decorative bar */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-emerald-400">
                <span>Verified Metric</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
