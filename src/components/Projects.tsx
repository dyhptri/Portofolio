import { useState } from 'react';
import { projectsData } from '../data/projectsData';
import type { Project } from '../types';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { Code2 } from 'lucide-react';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<'All' | 'QA Automation' | 'Manual QA' | 'System Analysis'>('All');

  const filteredProjects = projectsData.filter((proj) => {
    if (filter === 'All') return true;
    if (filter === 'QA Automation') return proj.role.some((r) => r.includes('Automation') || r.includes('Cypress'));
    if (filter === 'Manual QA') return proj.role.some((r) => r.includes('Manual'));
    if (filter === 'System Analysis') return proj.role.some((r) => r.includes('Analyst') || r.includes('UAT'));
    return true;
  });

  return (
    <section id="projects" className="py-24 bg-[#070b14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
              <Code2 className="w-3.5 h-3.5" />
              <span>Production Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Selected Projects & Case Studies
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Explore key engineering deliverables demonstrating automated Cypress test suites, Figma mobile design systems, and formal SRS requirements engineering.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1 rounded-2xl bg-slate-900/80 border border-slate-800 text-xs font-mono">
            {(['All', 'QA Automation', 'Manual QA', 'System Analysis'] as const).map((tag) => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                  filter === tag
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 gap-12">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(proj) => setSelectedProject(proj)}
            />
          ))}
        </div>
      </div>

      {/* Deep-Dive Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
