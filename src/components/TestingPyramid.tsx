import { useState } from 'react';
import { testingPyramidLevels } from '../data/skillsData';
import { Layers, ShieldCheck, CheckCircle2, Code2 } from 'lucide-react';

export const TestingPyramid = () => {
  const [selectedLevelId, setSelectedLevelId] = useState<string>('e2e');

  const activeLevel = testingPyramidLevels.find((lvl) => lvl.id === selectedLevelId) || testingPyramidLevels[0];

  return (
    <section id="pyramid" className="py-20 bg-[#070b14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            <Layers className="w-3.5 h-3.5" />
            <span>Methodological Rigor</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            The Interactive Testing Pyramid
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Click across each pyramid tier to inspect my verification approach, automated tooling, and production test assertions.
          </p>
        </div>

        {/* Pyramid Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Interactive Visual Pyramid Tiers */}
          <div className="lg:col-span-6 flex flex-col items-center space-y-3 w-full">
            {testingPyramidLevels.map((lvl) => {
              const isSelected = lvl.id === selectedLevelId;
              // Widths based on pyramid level
              const widthClasses = [
                'w-[45%] sm:w-[50%]',  // Level 1: E2E
                'w-[65%] sm:w-[70%]',  // Level 2: Integration
                'w-[85%] sm:w-[88%]',  // Level 3: Unit
                'w-full'               // Level 4: Manual (Base)
              ][lvl.levelNumber - 1];

              return (
                <button
                  key={lvl.id}
                  onClick={() => setSelectedLevelId(lvl.id)}
                  className={`group relative py-4 px-5 rounded-xl border text-left transition-all duration-300 cursor-pointer ${widthClasses} ${
                    isSelected
                      ? `${lvl.bgColor} ${lvl.borderColor} shadow-lg ring-1 ring-cyan-400/40 transform scale-[1.02]`
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-800/60'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 font-mono text-xs font-bold text-slate-300 border border-slate-800">
                        L{lvl.levelNumber}
                      </span>
                      <div>
                        <h4 className={`text-xs sm:text-sm font-bold tracking-tight ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                          {lvl.title.split('(')[0]}
                        </h4>
                        <p className="text-[11px] text-slate-400 hidden sm:block truncate max-w-[200px]">
                          {lvl.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`text-[11px] font-mono font-medium ${lvl.textColor}`}>
                        {lvl.sharePercentage}
                      </span>
                      {isSelected && (
                        <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8]" />
                      )}
                    </div>
                  </div>
                </button>
              );
            })}

            <div className="text-center pt-2">
              <span className="text-[11px] font-mono text-slate-500">
                Pyramid Foundation: Broad exploratory & edge-case coverage to focused top-tier Cypress E2E flows
              </span>
            </div>
          </div>

          {/* Right: Detailed Deep Dive Card for Selected Level */}
          <div className="lg:col-span-6 w-full">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl relative overflow-hidden glass-panel">
              {/* Top Accent Line */}
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ backgroundColor: activeLevel.color }}
              />

              <div className="space-y-6">
                {/* Header Info */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono font-semibold mb-1" style={{ color: activeLevel.color }}>
                      <span>LEVEL 0{activeLevel.levelNumber}</span>
                      <span>•</span>
                      <span>{activeLevel.sharePercentage}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {activeLevel.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1 font-mono">
                      {activeLevel.subtitle}
                    </p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-cyan-400">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                </div>

                {/* Core Description & Approach */}
                <div className="space-y-3 text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-4">
                  <div>
                    <span className="font-semibold text-white block text-xs uppercase tracking-wider font-mono text-slate-400 mb-1">
                      Verification Purpose
                    </span>
                    <p>{activeLevel.description}</p>
                  </div>

                  <div className="pt-2">
                    <span className="font-semibold text-white block text-xs uppercase tracking-wider font-mono text-slate-400 mb-1">
                      Engineering Approach
                    </span>
                    <p className="text-slate-300">{activeLevel.approach}</p>
                  </div>
                </div>

                {/* Tool Stack Tags */}
                <div>
                  <span className="font-semibold text-slate-400 block text-xs uppercase tracking-wider font-mono mb-2">
                    Validated With Tooling:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeLevel.toolsUsed.map((tool, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-950 border border-slate-800 text-slate-200"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Real Production Scenario & Code Assertion */}
                <div className="p-4 rounded-xl bg-[#090e1a] border border-slate-800/90 font-mono text-xs space-y-2">
                  <div className="flex items-center justify-between text-slate-400 text-[11px] pb-1 border-b border-slate-800">
                    <span className="flex items-center gap-1.5 text-cyan-400 font-semibold">
                      <Code2 className="w-3.5 h-3.5" />
                      <span>{activeLevel.exampleScenario.target}</span>
                    </span>
                    <span className="text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>ASSERTION</span>
                    </span>
                  </div>
                  <p className="text-slate-300 font-sans text-xs">
                    {activeLevel.exampleScenario.description}
                  </p>
                  <div className="p-2.5 rounded bg-black/60 text-emerald-400 overflow-x-auto text-[11px] border border-slate-900">
                    <code>{activeLevel.exampleScenario.assertion}</code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
