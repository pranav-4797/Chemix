import { Award, Compass, CheckSquare2 } from 'lucide-react';
import { projectContent } from '../data/content';

export const ConclusionSection: React.FC = () => {
  const { conclusion } = projectContent;

  return (
    <section id="conclusion" className="py-20 bg-white dark:bg-[#060e1a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-navy-900 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Outcomes &amp; Horizons</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-navy-950 dark:text-white">
            {conclusion.sectionTitle}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            {conclusion.subtitle}
          </p>
        </div>

        {/* Executive Conclusion Card */}
        <div className="mb-14 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-blue-50/80 via-white to-slate-50 dark:from-navy-900 dark:via-navy-950 dark:to-[#081220] border border-blue-200/80 dark:border-navy-800 shadow-soft">
          <div className="max-w-4xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-cyan-400">
              Executive Project Conclusion
            </span>
            <p className="text-slate-700 dark:text-slate-200 text-base sm:text-lg leading-relaxed">
              {conclusion.conclusionText}
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
              <Compass className="w-4 h-4 text-blue-500" />
              <span>SY B.Tech AI &amp; ML • Chemical Prototyping Experimental Milestone | Academic Year 2026–2027</span>
            </div>
          </div>
        </div>

        {/* Future Scope Checklist Cards */}
        <div>
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h3 className="font-display font-bold text-xl text-navy-950 dark:text-white flex items-center gap-2">
                <CheckSquare2 className="w-5 h-5 text-blue-600 dark:text-cyan-400" />
                <span>Recommended Future Scope (Next-Phase Directives)</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Systematic engineering tasks recommended for the subsequent phase of practical development.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {conclusion.futureScopeList.map((item, idx) => (
              <div
                key={idx}
                className="group p-5 rounded-2xl bg-slate-50 dark:bg-navy-900/60 border border-slate-200/80 dark:border-navy-800 hover:border-blue-300 dark:hover:border-cyan-800/80 hover:bg-white dark:hover:bg-navy-900 transition-all duration-200 shadow-xs flex items-start gap-3.5"
              >
                <div className="w-7 h-7 rounded-lg bg-blue-100 dark:bg-navy-800 text-blue-600 dark:text-cyan-400 flex items-center justify-center shrink-0 font-mono font-bold text-xs mt-0.5 group-hover:scale-105 transition-transform">
                  0{idx + 1}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
