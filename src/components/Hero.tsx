import { useState, type FC } from 'react';
import {
  MapPin,
  ExternalLink,
  Mail,
  Phone,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  Copy,
  Check,
  Play
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import confetti from 'canvas-confetti';

interface HeroProps {
  onShowToast: (message: string) => void;
}

export const Hero: FC<HeroProps> = ({ onShowToast }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [testSimulating, setTestSimulating] = useState(false);
  const [testCount, setTestCount] = useState(28);

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
      onShowToast('Email copied to clipboard (diyahrp10@gmail.com)');
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
      onShowToast('WhatsApp number copied (+62 856-2470-4748)');
    }
  };

  const handleSimulateCypress = () => {
    if (testSimulating) return;
    setTestSimulating(true);
    setTestCount(0);

    const interval = setInterval(() => {
      setTestCount((prev) => {
        if (prev >= 28) {
          clearInterval(interval);
          setTestSimulating(false);
          confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.8 }
          });
          onShowToast('Cypress E2E test suite execution completed: 28/28 PASSED');
          return 28;
        }
        return prev + 4;
      });
    }, 150);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Background Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[300px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Geo & Academic Pill */}
            <div className="inline-flex flex-wrap items-center gap-2 p-1 pl-2.5 pr-3 rounded-full bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300 backdrop-blur-md shadow-sm">
              <span className="flex items-center gap-1.5 text-cyan-400">
                <MapPin className="w-3.5 h-3.5" />
                <span>Malang, East Java, ID</span>
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-300">Polinema IT Student</span>
              <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 font-semibold text-[10px] border border-cyan-500/20">
                GPA 3.78 / 4.00
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-400">
                  Diyah Ramadhani Putri
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-slate-300 font-mono tracking-tight">
                Software QA Engineer <span className="text-cyan-400">/</span> UI/UX Designer <span className="text-cyan-400">/</span> System Analyst
              </p>
            </div>

            {/* Core Value Proposition Quote */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md max-w-2xl relative">
              <div className="absolute left-0 top-3 bottom-3 w-1 bg-gradient-to-b from-cyan-400 to-emerald-500 rounded-r" />
              <p className="text-sm sm:text-base text-slate-300 italic pl-3 leading-relaxed">
                "Bridging the gap between intuitive user interface design and bulletproof software reliability through full-pyramid automated testing and methodical requirements engineering."
              </p>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-sky-600 text-slate-950 hover:from-cyan-400 hover:to-sky-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore Case Studies</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#qa-hub"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-cyan-500/50 transition-all"
              >
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>View Testing Specs & QA Vault</span>
              </a>
            </div>

            {/* Social Channels with Quick Copy */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-mono">
              <span className="text-slate-400 font-semibold tracking-wider uppercase text-[11px]">Connect:</span>
              
              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/diyah-ramadhani-putri-428305327"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-sky-400" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/dyhptri"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                title="GitHub Profile"
              >
                <GithubIcon className="w-3.5 h-3.5 text-slate-300" />
                <span>dyhptri</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>

              {/* WhatsApp Quick Copy */}
              <button
                onClick={() => handleCopy('+6285624704748', 'phone')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors cursor-pointer"
                title="Click to copy WhatsApp number"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp</span>
                {copiedPhone ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 opacity-60" />}
              </button>

              {/* Email Quick Copy */}
              <button
                onClick={() => handleCopy('diyahrp10@gmail.com', 'email')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors cursor-pointer"
                title="Click to copy Email"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>Email</span>
                {copiedEmail ? <Check className="w-3 h-3 text-cyan-400" /> : <Copy className="w-3 h-3 opacity-60" />}
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Cypress Runner Terminal Simulator */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-2xl bg-[#090e1a] border border-slate-800 shadow-2xl overflow-hidden glass-panel">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0c1322] border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-[11px] text-slate-400">cypress-runner — sorai_csp.cy.ts</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    E2E SUITE
                  </span>
                </div>
              </div>

              {/* Terminal Stats Bar */}
              <div className="px-4 py-3 bg-[#0d1527] border-b border-slate-800/80 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{testCount} Passing</span>
                  </div>
                  <div className="text-slate-500">0 Failing</div>
                  <div className="text-slate-400">1.42s</div>
                </div>
                <button
                  onClick={handleSimulateCypress}
                  disabled={testSimulating}
                  className="flex items-center gap-1 px-2.5 py-1 rounded bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-[11px] font-mono cursor-pointer transition-all disabled:opacity-50"
                >
                  <Play className={`w-3 h-3 ${testSimulating ? 'animate-spin' : ''}`} />
                  <span>{testSimulating ? 'Running...' : 'Re-Run'}</span>
                </button>
              </div>

              {/* Terminal Test Steps Feed */}
              <div className="p-4 space-y-2.5 font-mono text-xs max-h-[320px] overflow-y-auto">
                <div className="text-slate-500 text-[11px]">
                  &gt; cypress run --spec "cypress/e2e/sorai/contract_settlement.cy.ts"
                </div>

                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800/60 space-y-1">
                  <div className="flex items-center justify-between text-slate-200">
                    <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5" />
                      <span>TC-01: Auto-calculate net weight shrinkage (1.75%)</span>
                    </span>
                    <span className="text-slate-500 text-[10px]">340ms</span>
                  </div>
                  <p className="text-[11px] text-slate-400 pl-5 font-sans">
                    Asserts: Dispatched 1000kg vs Received 982.50kg triggers 'APPROVED' flag.
                  </p>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800/60 space-y-1">
                  <div className="flex items-center justify-between text-slate-200">
                    <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5" />
                      <span>TC-02: Prevent Midtrans payout when shrinkage &gt; 3.0%</span>
                    </span>
                    <span className="text-slate-500 text-[10px]">420ms</span>
                  </div>
                  <p className="text-[11px] text-slate-400 pl-5 font-sans">
                    Asserts: Shrinkage breach triggers escrow freeze modal and disables invoice generator.
                  </p>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800/60 space-y-1">
                  <div className="flex items-center justify-between text-slate-200">
                    <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5" />
                      <span>TC-03: Supabase inventory lock concurrency verification</span>
                    </span>
                    <span className="text-slate-500 text-[10px]">260ms</span>
                  </div>
                  <p className="text-[11px] text-slate-400 pl-5 font-sans">
                    Asserts: Idempotency keys prevent race condition during multi-node reservation.
                  </p>
                </div>
              </div>

              {/* Status Footer */}
              <div className="px-4 py-2.5 bg-[#0a0f1d] border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1 text-emerald-400">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Pyramid Level: E2E Automated</span>
                </span>
                <span className="text-cyan-400">Coverage: 100% Critical Paths</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
