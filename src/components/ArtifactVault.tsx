import { useState } from 'react';
import { artifactsVaultData } from '../data/artifactsData';
import type { QAArtifactItem } from '../types';
import {
  Archive,
  Search,
  Code2,
  Bug,
  Eye,
  X
} from 'lucide-react';

export const ArtifactVault = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedArtifact, setSelectedArtifact] = useState<QAArtifactItem | null>(null);

  const categories = ['All', 'Cypress E2E', 'Manual Test Matrix', 'Bug Report', 'SRS/UML Spec'];

  const filteredArtifacts = artifactsVaultData.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.project.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getCategoryBadge = (cat: string) => {
    switch (cat) {
      case 'Cypress E2E':
        return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30';
      case 'Bug Report':
        return 'bg-rose-500/10 text-rose-400 border-rose-500/30';
      case 'Manual Test Matrix':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'SRS/UML Spec':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
      default:
        return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  return (
    <section id="qa-hub" className="py-24 bg-[#070b14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
              <Archive className="w-3.5 h-3.5" />
              <span>Verifiable QA Deliverables</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              The QA & Technical Artifact Vault
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Explore sanitized real-world test scripts, reproducible bug defect tickets, and system specification blueprints authored for my projects.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search specs, bugs, tags..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 font-mono transition-colors"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Artifacts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArtifacts.map((artifact) => (
            <div
              key={artifact.id}
              onClick={() => setSelectedArtifact(artifact)}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-900/90 transition-all duration-300 flex flex-col justify-between cursor-pointer group glass-panel"
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-slate-400">{artifact.id}</span>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[10px] border font-semibold ${getCategoryBadge(
                      artifact.category
                    )}`}
                  >
                    {artifact.category}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    {artifact.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-1.5 text-xs text-slate-400 font-mono">
                    <span>{artifact.project}</span>
                    <span>•</span>
                    <span>{artifact.date}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                  {artifact.summary}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {artifact.tags.slice(0, 2).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-950 text-slate-400 border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <span className="flex items-center gap-1 text-xs font-mono text-cyan-400 group-hover:translate-x-1 transition-transform">
                  <span>Inspect</span>
                  <Eye className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Artifact Detail Modal */}
      {selectedArtifact && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-[#0a0f1d] border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 text-slate-200 glass-panel shadow-2xl">
            {/* Header */}
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono">
                  <span className="text-cyan-400 font-bold">{selectedArtifact.id}</span>
                  <span>•</span>
                  <span className="text-slate-400">{selectedArtifact.project}</span>
                  <span
                    className={`ml-2 px-2.5 py-0.5 rounded-full text-[10px] border font-semibold ${getCategoryBadge(
                      selectedArtifact.category
                    )}`}
                  >
                    {selectedArtifact.category}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {selectedArtifact.title}
                </h3>
              </div>

              <button
                onClick={() => setSelectedArtifact(null)}
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Summary */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed">
              {selectedArtifact.summary}
            </div>

            {/* Code Snippet if Cypress */}
            {selectedArtifact.details.testScriptSnippet && (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-cyan-400 font-semibold">
                  <span className="flex items-center gap-1.5">
                    <Code2 className="w-4 h-4" />
                    <span>Executable Test Script Snippet</span>
                  </span>
                  <span className="text-emerald-400 text-[11px]">CYPRESS AUTOMATED</span>
                </div>
                <pre className="p-4 rounded-xl bg-[#060911] border border-slate-800 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed">
                  <code>{selectedArtifact.details.testScriptSnippet}</code>
                </pre>
              </div>
            )}

            {/* Steps to Reproduce if Bug Report */}
            {selectedArtifact.details.stepsToReproduce && (
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-mono text-rose-400 font-semibold">
                  <Bug className="w-4 h-4" />
                  <span>Steps to Reproduce Defect:</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5 text-xs text-slate-300 font-mono">
                  {selectedArtifact.details.stepsToReproduce.map((step, idx) => (
                    <div key={idx}>{step}</div>
                  ))}
                </div>
              </div>
            )}

            {/* Expected vs Actual */}
            {(selectedArtifact.details.expectedResult || selectedArtifact.details.actualResult) && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                {selectedArtifact.details.expectedResult && (
                  <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20 space-y-1">
                    <div className="text-emerald-400 font-bold">Expected System Behavior:</div>
                    <div className="text-slate-300 font-sans">{selectedArtifact.details.expectedResult}</div>
                  </div>
                )}
                {selectedArtifact.details.actualResult && (
                  <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/20 space-y-1">
                    <div className="text-rose-400 font-bold">Observed Defect Behavior:</div>
                    <div className="text-slate-300 font-sans">{selectedArtifact.details.actualResult}</div>
                  </div>
                )}
              </div>
            )}

            {/* Architectural Notes */}
            {selectedArtifact.details.architectureNotes && (
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 font-mono text-xs text-slate-300 space-y-2">
                <div className="text-amber-400 font-bold uppercase tracking-wider text-[11px]">
                  Architectural Root-Cause Analysis:
                </div>
                <pre className="whitespace-pre-wrap font-mono text-slate-400 leading-relaxed">
                  {selectedArtifact.details.architectureNotes}
                </pre>
              </div>
            )}

            {/* Close Button */}
            <div className="flex justify-end pt-2 border-t border-slate-800">
              <button
                onClick={() => setSelectedArtifact(null)}
                className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs font-mono transition-colors cursor-pointer"
              >
                Close Spec Inspector
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
