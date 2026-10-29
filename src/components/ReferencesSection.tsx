import { Bookmark } from 'lucide-react';
import { projectContent } from '../data/content';

export const ReferencesSection: React.FC = () => {
  const { references } = projectContent;

  return (
    <section id="references" className="py-20 bg-white dark:bg-[#060e1a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-navy-900 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Bookmark className="w-3.5 h-3.5" />
            <span>Bibliography</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-navy-950 dark:text-white">
            {references.sectionTitle}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            {references.subtitle}
          </p>
        </div>

        {/* References List Cards */}
        <div className="max-w-4xl mx-auto space-y-4">
          {references.items.map((ref, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-50 dark:bg-navy-900/60 border border-slate-200/90 dark:border-navy-800 shadow-xs flex items-start gap-4 hover:bg-white dark:hover:bg-navy-900 transition-colors"
            >
              <div className="w-8 h-8 rounded-xl bg-blue-100 dark:bg-navy-800 text-blue-600 dark:text-cyan-400 flex items-center justify-center shrink-0 font-mono font-bold text-xs mt-0.5">
                [{idx + 1}]
              </div>
              <div className="space-y-1 flex-1">
                <h3 className="font-display font-bold text-sm sm:text-base text-navy-950 dark:text-white leading-snug">
                  {ref.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  {ref.source}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
