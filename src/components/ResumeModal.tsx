import { useState, type FC } from 'react';
import { resumeData } from '../data/resumeData';
import { X, Printer, Copy, Check, Mail, Phone, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import confetti from 'canvas-confetti';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export const ResumeModal: FC<ResumeModalProps> = ({ isOpen, onClose, onShowToast }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    confetti({
      particleCount: 40,
      spread: 50,
      origin: { y: 0.6 }
    });
    window.print();
  };

  const handleCopyText = () => {
    const plainResume = `
${resumeData.name}
${resumeData.headline}
${resumeData.contact.location} | ${resumeData.contact.email} | ${resumeData.contact.phone}
LinkedIn: ${resumeData.contact.linkedin} | GitHub: ${resumeData.contact.github}

PROFESSIONAL SUMMARY
${resumeData.summary}

EDUCATION
${resumeData.education[0].institution} - ${resumeData.education[0].degree}
${resumeData.education[0].period} | GPA: ${resumeData.education[0].gpa}

CORE SKILLS
- QA & Testing: ${resumeData.skills.qaAndTesting.join(', ')}
- UI/UX Design: ${resumeData.skills.designAndPrototyping.join(', ')}
- System Analysis: ${resumeData.skills.systemAnalysis.join(', ')}
- Technologies: ${resumeData.skills.technologies.join(', ')}

FEATURED PROJECTS
${resumeData.projects.map(p => `* ${p.title}${'role' in p && p.role ? ` (${p.role})` : ''}\n  Stack: ${p.stack}\n  ${p.bullets.join('\n  ')}`).join('\n\n')}

LEADERSHIP & EXPERIENCE
${resumeData.experience.map(e => `* ${e.role} - ${e.organization} (${e.period})\n  ${e.bullets.join('\n  ')}`).join('\n\n')}
    `.trim();

    navigator.clipboard.writeText(plainResume);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    onShowToast('ATS Resume copied as formatted plain text!');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#0a0f1d] border border-slate-800 rounded-3xl shadow-2xl glass-panel text-slate-200">
        {/* Top Control Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between p-4 sm:p-6 bg-[#0a0f1d]/95 backdrop-blur-md border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              ATS Standard Resume
            </span>
            <span className="text-xs font-mono text-slate-500 hidden sm:inline">
              Optimized for Technical Recruiters
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Copy Plain Text */}
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 hover:text-white hover:border-slate-700 transition-colors cursor-pointer"
              title="Copy ATS text format"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            {/* Print / Save as PDF */}
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-mono font-bold transition-all cursor-pointer shadow-md shadow-cyan-500/20"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            {/* Close */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer ml-1"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ATS Resume Document Container */}
        <div className="p-6 sm:p-10 bg-slate-950 font-sans space-y-8 select-text">
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 space-y-2 text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {resumeData.name}
            </h1>
            <p className="text-sm sm:text-base font-semibold text-cyan-400 font-mono">
              {resumeData.headline}
            </p>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4 text-xs font-mono text-slate-400 pt-2">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                {resumeData.contact.location}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                {resumeData.contact.email}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-slate-500" />
                {resumeData.contact.phone}
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs font-mono text-slate-400 pt-1">
              <a
                href={resumeData.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-cyan-400 hover:underline flex items-center gap-1"
              >
                <LinkedinIcon className="w-3 h-3" />
                linkedin.com/in/{resumeData.contact.linkedinHandle}
              </a>
              <span>•</span>
              <a
                href={resumeData.contact.github}
                target="_blank"
                rel="noreferrer"
                className="text-cyan-400 hover:underline flex items-center gap-1"
              >
                <GithubIcon className="w-3 h-3" />
                github.com/{resumeData.contact.githubHandle}
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 border-b border-slate-800 pb-1">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {resumeData.summary}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 border-b border-slate-800 pb-1">
              Education
            </h2>
            {resumeData.education.map((edu, idx) => (
              <div key={idx} className="space-y-1 text-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-white font-bold text-sm">
                  <span>{edu.institution}</span>
                  <span className="font-mono text-xs text-slate-400">{edu.period}</span>
                </div>
                <div className="text-slate-300 font-medium">
                  {edu.degree} — <span className="text-emerald-400 font-mono font-bold">GPA: {edu.gpa}</span>
                </div>
                <div className="text-slate-400 text-[11px] pt-1">
                  <strong>Coursework:</strong> {edu.relevantCourses.join(', ')}
                </div>
              </div>
            ))}
          </div>

          {/* Technical Skills Grid */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 border-b border-slate-800 pb-1">
              Core Technical Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                <span className="font-bold text-white block">QA & Automated Testing:</span>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  {resumeData.skills.qaAndTesting.join(' • ')}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                <span className="font-bold text-white block">UI/UX Design & Prototyping:</span>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  {resumeData.skills.designAndPrototyping.join(' • ')}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                <span className="font-bold text-white block">System Analysis & SRS:</span>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  {resumeData.skills.systemAnalysis.join(' • ')}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                <span className="font-bold text-white block">Developer Technologies & Tools:</span>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  {resumeData.skills.technologies.join(' • ')}
                </p>
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 border-b border-slate-800 pb-1">
              Key Engineering Projects
            </h2>
            {resumeData.projects.map((proj, idx) => (
              <div key={idx} className="space-y-2 text-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <span className="font-bold text-white text-sm">{proj.title}</span>
                  <span className="font-mono text-slate-400 text-[11px]">{proj.period}</span>
                </div>
                <div className="text-cyan-300 font-mono text-[11px]">
                  {'role' in proj && proj.role ? `Role: ${proj.role} | ` : ''}Tech: {proj.stack}
                </div>
                <ul className="space-y-1 list-disc list-inside text-slate-300 text-[11px] leading-relaxed pl-1">
                  {proj.bullets.map((b, bIdx) => (
                    <li key={bIdx}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Experience & Leadership */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 border-b border-slate-800 pb-1">
              Leadership & Campus Governance
            </h2>
            {resumeData.experience.map((exp, idx) => (
              <div key={idx} className="space-y-2 text-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <span className="font-bold text-white text-sm">{exp.role}</span>
                  <span className="font-mono text-slate-400 text-[11px]">{exp.period}</span>
                </div>
                <div className="text-slate-400 font-mono text-[11px]">
                  {exp.organization}
                </div>
                <ul className="space-y-1 list-disc list-inside text-slate-300 text-[11px] leading-relaxed pl-1">
                  {exp.bullets.map((b, bIdx) => (
                    <li key={bIdx}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
