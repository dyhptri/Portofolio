import { experienceData } from '../data/experienceData';
import { Briefcase, Award, CheckCircle2, Calendar, Building2, ChevronRight } from 'lucide-react';

export const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-[#070b14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Track Record of Responsibility</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Leadership & Organizational Experience
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Leading governance, auditing multi-million rupiah event cash flows with zero deficit, and mentoring university cohorts with high organizational accountability.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l border-slate-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {experienceData.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1 flex items-center justify-center w-6 h-6 rounded-full bg-slate-950 border-2 border-cyan-500/50 group-hover:border-cyan-400 group-hover:shadow-[0_0_12px_rgba(56,189,248,0.5)] transition-all">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/30 hover:bg-slate-900/90 transition-all duration-300 glass-panel space-y-6">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-2">
                      {exp.badge}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mt-1">
                      <Building2 className="w-3.5 h-3.5 text-slate-500" />
                      <span>{exp.organization}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 sm:self-start bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="space-y-2">
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 block">
                    Core Operational Mandate:
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5">
                        <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Achievements */}
                <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                    <Award className="w-4 h-4" />
                    <span>Key Measurable Outcomes:</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-200">
                    {exp.keyAchievements.map((ach, aIdx) => (
                      <li key={aIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills Applied Tags */}
                <div className="pt-2 flex flex-wrap items-center gap-2">
                  {exp.skillsApplied.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-950 border border-slate-800 text-slate-400"
                    >
                      {skill}
                    </span>
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
