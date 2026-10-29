import { ArrowUp, Beaker, ShieldAlert } from 'lucide-react';
import { projectContent } from '../data/content';

export const Footer: React.FC = () => {
  const { footer } = projectContent;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-navy-950 text-white border-t border-navy-800 pt-16 pb-12 relative overflow-hidden">
      {/* Decorative backdrop bubbles */}
      <div className="bubble w-56 h-56 -bottom-20 -right-10 opacity-20" aria-hidden="true" />
      <div className="bubble w-40 h-40 -top-10 -left-10 opacity-15" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Tier: Logo, Institution, and Back to Top Button */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-navy-800/80">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-glow">
              <Beaker className="w-6 h-6" />
            </div>
            <div>
              <span className="font-display font-bold text-xl text-white block">
                Preparation of Liquid Detergent
              </span>
              <span className="text-xs text-cyan-400 font-medium">
                {footer.course} • {footer.academicYear}
              </span>
            </div>
          </div>

          {/* Back to Top Button (min 44x44px touch target) */}
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-navy-900 hover:bg-navy-800 border border-navy-700 text-xs sm:text-sm font-semibold text-cyan-300 hover:text-white transition-all duration-200 min-h-[44px] shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label="Back to top of the page"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Middle Tier: Department and Team Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm">
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Department &amp; Institution
            </span>
            <p className="font-medium text-slate-200 text-sm">
              {footer.department}
            </p>
            <p className="text-slate-400 leading-relaxed text-xs">
              {footer.institution}
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Project Team Members
            </span>
            <p className="font-medium text-slate-200 text-sm leading-relaxed">
              {footer.teamSummary}
            </p>
            <p className="text-slate-400 text-xs">
              Faculty Guide: Chemical Prototyping Course, MIT AoE (To be added)
            </p>
          </div>
        </div>

        {/* Mandatory Safety Disclaimer Banner */}
        <div className="p-4 rounded-xl bg-red-950/40 border border-red-900/60 flex items-center gap-3 text-red-200 text-xs sm:text-sm">
          <ShieldAlert className="w-5 h-5 text-red-400 shrink-0" />
          <div>
            <strong className="font-semibold text-red-300">Safety Notice: </strong>
            {footer.disclaimer}
          </div>
        </div>

        {/* Bottom Tier: Copyright & Metadata */}
        <div className="pt-6 border-t border-navy-900 text-center text-xs text-slate-500">
          <p>© 2026–2027 Department of Artificial Intelligence &amp; Machine Learning (AI &amp; ML), MIT Academy of Engineering, Pune. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};
