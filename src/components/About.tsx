import { ShieldCheck, Palette, FileCode2, Award, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';

export const About = () => {
  const triadCompetencies = [
    {
      title: 'Software Quality Assurance',
      subtitle: 'Automation & Defect Prevention',
      icon: ShieldCheck,
      color: 'cyan',
      borderColor: 'border-cyan-500/30',
      bgColor: 'bg-cyan-500/10',
      textColor: 'text-cyan-400',
      points: [
        'Cypress E2E test suite authoring for critical business workflows',
        'Systematic manual black-box matrices & boundary value analysis (BVA)',
        'Idempotency, race condition & API payload integration checks (Postman)',
        'Structured bug reproduction logs with root cause isolation'
      ]
    },
    {
      title: 'UI/UX Interface Design',
      subtitle: 'Design Systems & User Empathy',
      icon: Palette,
      color: 'purple',
      borderColor: 'border-purple-500/30',
      bgColor: 'bg-purple-500/10',
      textColor: 'text-purple-400',
      points: [
        'High-fidelity web & mobile prototyping in Figma with auto-layout',
        'Scalable design token systems (typography, spacing, color scales)',
        'WCAG AA accessible contrast & multi-persona ergonomics',
        'System Usability Scale (SUS) heuristics & user feedback loops'
      ]
    },
    {
      title: 'System & Requirements Analysis',
      subtitle: 'SRS/SKPL & Architectural Modeling',
      icon: FileCode2,
      color: 'emerald',
      borderColor: 'border-emerald-500/30',
      bgColor: 'bg-emerald-500/10',
      textColor: 'text-emerald-400',
      points: [
        'Formal Software Requirement Specifications (SRS / SKPL) authoring',
        'UML diagrams (Use Case, Activity, Sequence, State Machine)',
        'Relational database architecture (3NF ERDs & schema integrity)',
        'Role-Based Access Control (RBAC) permission matrices'
      ]
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#060a12] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Engineering Philosophy</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              About Me & The Multi-Disciplinary Triad
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              I believe that software reliability is fundamentally engineered at the intersection of clear requirements, intuitive user interaction, and proactive automated verification.
            </p>
          </div>

          {/* Academic Distinction Badge */}
          <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-mono">
            <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-white font-bold text-sm">Politeknik Negeri Malang</div>
              <div className="text-slate-400">D4 Sistem Informasi Bisnis (Semester 5)</div>
              <div className="text-emerald-400 font-semibold mt-0.5">GPA 3.78 / 4.00 (Distinction)</div>
            </div>
          </div>
        </div>

        {/* Narrative Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-center">
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              I am an undergraduate student in <strong className="text-white font-semibold">Business Information Systems at Politeknik Negeri Malang</strong> with a sharp focus on Software Quality Assurance (QA), UI/UX Design, and Software Architecture Analysis.
            </p>
            <p>
              Unlike traditional QA who only discover bugs after release, my dual background in <span className="text-cyan-300 font-medium">UI/UX Design</span> and <span className="text-emerald-300 font-medium">System Analysis</span> allows me to identify edge cases, validation gaps, and user friction during the requirements and wireframing phases.
            </p>
            <p>
              Whether engineering automated <strong className="text-white">Cypress E2E suites</strong> for B2B supply chains, drafting 30+ screen design systems in <strong className="text-white">Figma</strong>, or architecting formal <strong className="text-white">SKPL/SRS</strong> specifications, my goal is always to deliver software that is both delightful to use and impossible to break.
            </p>
          </div>

          <div className="lg:col-span-4 p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-[#0b1324] border border-cyan-500/20 space-y-4">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-semibold">
              <Sparkles className="w-4 h-4" />
              <span>Core Principle</span>
            </div>
            <h3 className="text-lg font-bold text-white">Why Design + QA Synergize</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              "A QA engineer who understands Figma components designs cleaner test assertions. A UI designer who writes automated tests designs interfaces that gracefully handle network latency, edge errors, and boundary limits."
            </p>
            <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>Methodology: Shift-Left QA</span>
              <span className="text-emerald-400 font-semibold">100% Defect Prevention</span>
            </div>
          </div>
        </div>

        {/* 3 Triad Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {triadCompetencies.map((comp, idx) => {
            const Icon = comp.icon;
            return (
              <div
                key={idx}
                className={`group p-6 rounded-2xl bg-slate-900/60 border ${comp.borderColor} hover:bg-slate-900/90 hover:border-cyan-400/50 transition-all duration-300 flex flex-col justify-between`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-xl ${comp.bgColor} ${comp.textColor}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-slate-500 font-semibold">
                      0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {comp.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-400 mt-1">
                      {comp.subtitle}
                    </p>
                  </div>

                  <ul className="space-y-2 pt-2 border-t border-slate-800/80">
                    {comp.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 text-xs text-slate-300 leading-normal">
                        <CheckCircle2 className={`w-3.5 h-3.5 ${comp.textColor} shrink-0 mt-0.5`} />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
