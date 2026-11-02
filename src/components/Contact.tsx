import { useState, type FC, type FormEvent } from 'react';
import { Mail, Phone, Send, Copy, Check, MessageSquare, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import confetti from 'canvas-confetti';

interface ContactProps {
  onShowToast: (msg: string) => void;
}

export const Contact: FC<ContactProps> = ({ onShowToast }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    roleInterest: 'Software QA Engineer',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2000);
    onShowToast(`${label} copied to clipboard!`);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      onShowToast('Please fill in all required fields.');
      return;
    }

    setSubmitted(true);
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.7 }
    });
    onShowToast('Thank you! Message logged and mail client prepared.');

    // Prepare mailto fallback
    const subject = encodeURIComponent(`[Portfolio Inquiry - ${formData.roleInterest}] from ${formData.name}`);
    const body = encodeURIComponent(`Hi Diyah,\n\n${formData.message}\n\nBest regards,\n${formData.name} (${formData.email})`);
    setTimeout(() => {
      window.location.href = `mailto:diyahrp10@gmail.com?subject=${subject}&body=${body}`;
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-[#060a13] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Initiate Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get in Touch & Discuss Opportunities
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Actively open for Software Quality Assurance, UI/UX Design, and System Analyst internships or entry-level positions. Reach out directly via email, WhatsApp, or through the message form below.
          </p>
        </div>

        {/* 2-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Communication Channels */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 glass-panel space-y-4">
              <h3 className="text-base font-bold text-white font-mono uppercase tracking-wider text-cyan-400">
                Direct Contact Channels
              </h3>
              <p className="text-xs text-slate-400">
                Guaranteed response within 24 hours. Click any card to copy or redirect.
              </p>

              {/* Email Card */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between group hover:border-cyan-500/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">Email Address</div>
                    <div className="text-xs sm:text-sm font-bold text-white font-mono">
                      diyahrp10@gmail.com
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => handleCopy('diyahrp10@gmail.com', 'Email')}
                    className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-900 transition-colors cursor-pointer"
                    title="Copy email"
                  >
                    {copiedField === 'Email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <a
                    href="mailto:diyahrp10@gmail.com"
                    className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-900 transition-colors"
                    title="Open mail client"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between group hover:border-emerald-500/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">WhatsApp / Phone</div>
                    <div className="text-xs sm:text-sm font-bold text-white font-mono">
                      +62 856-2470-4748
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => handleCopy('+6285624704748', 'WhatsApp')}
                    className="p-2 rounded-lg text-slate-400 hover:text-emerald-400 hover:bg-slate-900 transition-colors cursor-pointer"
                    title="Copy WhatsApp"
                  >
                    {copiedField === 'WhatsApp' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <a
                    href="https://wa.me/6285624704748"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg text-slate-400 hover:text-emerald-400 hover:bg-slate-900 transition-colors"
                    title="Open WhatsApp chat"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* LinkedIn Card */}
              <a
                href="https://linkedin.com/in/diyah-ramadhani-putri-428305327"
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between group hover:border-sky-500/40 transition-colors block"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">Professional Network</div>
                    <div className="text-xs sm:text-sm font-bold text-white font-mono">
                      in/diyah-ramadhani-putri
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-sky-400 transition-colors" />
              </a>

              {/* GitHub Card */}
              <a
                href="https://github.com/dyhptri"
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between group hover:border-purple-500/40 transition-colors block"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">Code & Repositories</div>
                    <div className="text-xs sm:text-sm font-bold text-white font-mono">
                      github.com/dyhptri
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-purple-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 glass-panel">
              <h3 className="text-lg font-bold text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill in your details below and I will get back to you promptly.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-center space-y-3 animate-in fade-in">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-bold text-white">Message Dispatched!</h4>
                  <p className="text-xs text-slate-300">
                    Your email client is opening with pre-filled details. Looking forward to connecting!
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-xs font-mono text-cyan-400 underline cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Pratama"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 font-sans"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 font-sans"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Role / Area of Interest</label>
                    <select
                      value={formData.roleInterest}
                      onChange={(e) => setFormData({ ...formData, roleInterest: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-cyan-500/50 font-sans cursor-pointer"
                    >
                      <option value="Software Quality Assurance (QA)">Software Quality Assurance (QA Engineer)</option>
                      <option value="UI/UX Interface Design">UI/UX Interface Design</option>
                      <option value="System & Business Analyst">System & Business Analysis (SRS/UML)</option>
                      <option value="General Tech Opportunity">General Technical Internship / Opportunity</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Message / Project Description *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Diyah, we reviewed your QA testing artifacts and would like to discuss an opportunity..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 font-sans resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold font-mono text-xs bg-gradient-to-r from-cyan-500 to-sky-600 hover:from-cyan-400 hover:to-sky-500 text-slate-950 transition-all cursor-pointer shadow-lg shadow-cyan-500/20"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message & Prepare Email</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
