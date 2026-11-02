import { useState, type FC } from 'react';
import type { Project } from '../types';
import {
  ShieldCheck,
  Palette,
  Terminal,
  CheckCircle2,
  Layers,
  ArrowRight
} from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: FC<ProjectCardProps> = ({ project, onSelect }) => {
  const [activeTab, setActiveTab] = useState<'qa' | 'ui'>('qa');

  return (
    <div className="rounded-3xl bg-[#090e1b] border border-slate-800/80 shadow-xl overflow-hidden glass-panel hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between">
      {/* Top Header */}
      <div className="p-6 sm:p-8 space-y-4">
        {/* Meta Pills */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
              {project.tag}
            </span>
            <span className="text-xs font-mono text-slate-500">
              {project.period}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            {project.tools.slice(0, 3).map((tool, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 border border-slate-800 text-slate-400"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Project Title & Subtitle */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {project.title}
          </h3>
          <p className="text-sm font-mono text-slate-400 mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Summary */}
        <p className="text-sm text-slate-300 leading-relaxed">
          {project.summary}
        </p>

        {/* Impact Metrics Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
          {project.impactMetrics.map((metric, idx) => (
            <div
              key={idx}
              className="p-3 rounded-xl bg-slate-900/70 border border-slate-800/80 text-center"
            >
              <div className="text-sm sm:text-base font-bold font-mono text-cyan-300">
                {metric.value}
              </div>
              <div className="text-[10px] text-slate-400 truncate mt-0.5">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dual Tab Switcher: QA Test Artifacts vs UI Design Showcase */}
      <div className="px-6 sm:px-8 border-t border-slate-800/80 pt-4 bg-[#070b16]/50">
        <div className="flex items-center justify-between mb-4">
          <div className="inline-flex p-1 rounded-xl bg-slate-900 border border-slate-800">
            <button
              onClick={() => setActiveTab('qa')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                activeTab === 'qa'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>QA Test Artifacts</span>
            </button>

            <button
              onClick={() => setActiveTab('ui')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                activeTab === 'ui'
                  ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Palette className="w-3.5 h-3.5" />
              <span>UI Design Showcase</span>
            </button>
          </div>

          <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">
            {activeTab === 'qa' ? 'Automation & Scenarios' : 'Figma & Design Tokens'}
          </span>
        </div>

        {/* Tab 1: QA View */}
        {activeTab === 'qa' && (
          <div className="space-y-3 pb-6 animate-in fade-in duration-200">
            <div className="p-4 rounded-xl bg-[#0a1020] border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-cyan-400 font-semibold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>{project.qaArtifacts.title}</span>
                </span>
                <span className="text-[10px] text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                  ALL VERIFIED
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-normal">
                {project.qaArtifacts.description}
              </p>
            </div>

            {/* Test Case Excerpts */}
            <div className="space-y-1.5">
              {project.qaArtifacts.testCases.slice(0, 2).map((tc) => (
                <div
                  key={tc.id}
                  className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80 flex items-center justify-between text-xs font-mono"
                >
                  <div className="flex items-center gap-2.5 truncate pr-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="text-slate-200 font-semibold truncate">
                      {tc.id}: {tc.title}
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 shrink-0">
                    {tc.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: UI Design View */}
        {activeTab === 'ui' && (
          <div className="space-y-4 pb-6 animate-in fade-in duration-200">
            <div className="p-4 rounded-xl bg-[#0a1020] border border-slate-800 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                <span className="text-purple-300 font-bold">
                  {project.uiDesign.figmaStats.designSystem}
                </span>
                <div className="flex items-center gap-3 text-slate-400 text-[11px]">
                  <span>{project.uiDesign.figmaStats.screens} Screens</span>
                  <span>•</span>
                  <span>{project.uiDesign.figmaStats.components} Components</span>
                </div>
              </div>

              {/* Color Tokens Preview */}
              <div className="flex items-center gap-2 pt-1">
                <span className="text-[10px] font-mono text-slate-400 mr-1">Tokens:</span>
                {project.uiDesign.colorPalette.map((col, idx) => (
                  <div key={idx} className="flex items-center gap-1.5" title={`${col.name}: ${col.hex}`}>
                    <span
                      className="w-4 h-4 rounded-full border border-white/20 shadow-sm"
                      style={{ backgroundColor: col.hex }}
                    />
                    <span className="text-[10px] font-mono text-slate-400 hidden sm:inline">
                      {col.hex}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mockup Preview Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {project.uiDesign.screenMockups.map((mockup, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80 space-y-1"
                >
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-white font-semibold truncate">{mockup.title}</span>
                    <span className="text-[9px] px-1.5 py-0.2 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20">
                      {mockup.previewBadge}
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-400 line-clamp-1">
                    {mockup.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Card Footer: Action Trigger */}
      <div className="p-6 sm:p-8 pt-4 border-t border-slate-800/80 bg-slate-950/60 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <Layers className="w-4 h-4 text-cyan-400" />
          <span>Includes SRS & UML Architecture</span>
        </div>

        <button
          onClick={() => onSelect(project)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold bg-slate-900 hover:bg-cyan-500 hover:text-slate-950 text-cyan-300 border border-cyan-500/30 hover:border-transparent transition-all cursor-pointer group"
        >
          <span>Deep-Dive Case Study</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};
