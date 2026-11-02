import type { FC } from 'react';
import type { Project } from '../types';
import { X, Shield, Layers, FileText, Code2, AlertTriangle } from 'lucide-react';
import { GithubIcon, FigmaIcon } from './BrandIcons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0a0f1d] border border-slate-800 rounded-3xl shadow-2xl glass-panel text-slate-200">
        {/* Sticky Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between p-6 bg-[#0a0f1d]/95 backdrop-blur-md border-b border-slate-800">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
              {project.category}
            </span>
            <span className="text-xs font-mono text-slate-500 hidden sm:inline">
              {project.period}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Title & Subtitle */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {project.title} — {project.subtitle}
            </h2>
            <div className="flex flex-wrap items-center gap-2 mt-3">
              {project.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-slate-900 border border-slate-800 text-slate-300"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Impact Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {project.impactMetrics.map((metric, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                <div className="text-lg sm:text-xl font-mono font-bold text-cyan-400">
                  {metric.value}
                </div>
                <div className="text-xs text-slate-400 mt-1">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* The Engineering Challenge & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-rose-950/20 border border-rose-500/20 space-y-2">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-xs font-mono uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4" />
                <span>The Core Engineering Problem</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/20 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs font-mono uppercase tracking-wider">
                <Shield className="w-4 h-4" />
                <span>The Engineered Solution</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* QA Artifacts Deep Dive */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-bold font-mono text-cyan-400 uppercase tracking-wider">
              <Code2 className="w-4 h-4" />
              <span>QA Verification Script & Test Scenarios</span>
            </div>

            {project.qaArtifacts.codeSnippet && (
              <div className="rounded-xl overflow-hidden border border-slate-800 bg-[#060911]">
                <div className="px-4 py-2 bg-slate-900/90 border-b border-slate-800 text-xs font-mono text-slate-400 flex items-center justify-between">
                  <span>Test Automation Spec File</span>
                  <span className="text-emerald-400">PASSING (100%)</span>
                </div>
                <pre className="p-4 text-xs font-mono text-slate-300 overflow-x-auto leading-relaxed">
                  <code>{project.qaArtifacts.codeSnippet}</code>
                </pre>
              </div>
            )}

            {/* Test Scenarios Table */}
            <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-900/50">
              <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 text-xs font-bold font-mono text-slate-300">
                Detailed Test Execution Matrix
              </div>
              <div className="divide-y divide-slate-800/80">
                {project.qaArtifacts.testCases.map((tc) => (
                  <div key={tc.id} className="p-4 space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-cyan-400">{tc.id}</span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-300">
                          {tc.type}
                        </span>
                        <span className="font-semibold text-slate-200">{tc.title}</span>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {tc.status}
                      </span>
                    </div>
                    <div className="text-slate-400 text-[11px]">
                      <strong>Precondition:</strong> {tc.precondition}
                    </div>
                    <div className="text-slate-300 text-[11px]">
                      <strong>Expected:</strong> {tc.expected}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* System Analysis & UML Section */}
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div className="flex items-center gap-2 text-sm font-bold font-mono text-amber-400 uppercase tracking-wider">
              <Layers className="w-4 h-4" />
              <span>System Analysis & Requirements Modeling</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <span className="text-xs font-mono font-semibold text-slate-300">
                  SRS / SKPL Artifacts:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-400">
                  {project.systemAnalysis.srsArtifacts.map((art, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <FileText className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{art}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono font-semibold text-slate-300">
                  UML Architecture Diagrams:
                </span>
                <ul className="space-y-2 text-xs text-slate-400">
                  {project.systemAnalysis.diagrams.map((diag, idx) => (
                    <li key={idx} className="p-2.5 rounded-lg bg-slate-950 border border-slate-800/80">
                      <div className="font-semibold text-slate-200 flex items-center justify-between">
                        <span>{diag.name}</span>
                        <span className="text-[10px] font-mono text-amber-400">{diag.type}</span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1">{diag.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Links & Close CTA */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
            <div className="flex items-center gap-3">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-medium text-slate-200"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              )}
              {project.links.figma && (
                <a
                  href={project.links.figma}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-medium text-slate-200"
                >
                  <FigmaIcon className="w-4 h-4 text-purple-400" />
                  <span>Figma Prototype</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs font-mono transition-colors cursor-pointer"
            >
              Done & Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
