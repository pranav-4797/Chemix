import { MessageSquare, AlertOctagon, ShieldX } from 'lucide-react';
import { projectContent } from '../data/content';

export const DiscussionSection: React.FC = () => {
  const { discussion } = projectContent;

  return (
    <section id="discussion" className="py-20 bg-white dark:bg-[#060e1a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-navy-900 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Academic Analysis</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-navy-950 dark:text-white">
            {discussion.sectionTitle}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            {discussion.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Discussion Points (Left Column) */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-xl font-display font-bold text-navy-950 dark:text-white mb-2">
              Engineering Discussion
            </h3>

            {discussion.discussionPoints.map((point, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 dark:bg-navy-900/60 border border-slate-200/90 dark:border-navy-800 shadow-xs"
              >
                <div className="flex items-start gap-3.5">
                  <span className="w-6 h-6 rounded-full bg-blue-100 dark:bg-navy-800 text-blue-600 dark:text-cyan-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold font-mono">
                    {idx + 1}
                  </span>
                  <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                    {point}
                  </p>
                </div>
              </div>
            ))}

            {/* Crucial Usage Caveat Banner */}
            <div className="p-5 rounded-2xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/60 flex items-start gap-3.5 text-red-800 dark:text-red-200 text-xs sm:text-sm leading-relaxed">
              <ShieldX className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <div>
                <strong>Safety Disclaimer:</strong> Do not use this prototype on human skin, culinary dishes, clothing textiles, or domestic surfaces until exact composition, pH stability, and intended purpose are professionally certified.
              </div>
            </div>
          </div>

          {/* Limitations Card (Right Column) */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-3xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/50 shadow-soft space-y-4">
              <div className="flex items-center gap-2.5 text-amber-800 dark:text-amber-300">
                <AlertOctagon className="w-6 h-6 shrink-0 text-amber-600 dark:text-amber-400" />
                <h3 className="font-display font-bold text-lg sm:text-xl">
                  Identified Limitations
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-amber-900/90 dark:text-amber-200/80 leading-relaxed">
                As a minor project exploratory prototype, several critical parameters remain uncharacterized:
              </p>

              <div className="space-y-3 pt-2">
                {discussion.limitations.map((limit, idx) => (
                  <div 
                    key={idx}
                    className="p-3.5 rounded-xl bg-white dark:bg-navy-950 border border-amber-200/60 dark:border-amber-900/40 flex items-start gap-3 shadow-2xs"
                  >
                    <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-snug">
                      {limit}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-[11px] text-amber-700 dark:text-amber-400 italic">
                *Requires consultation with Chemical Prototyping course faculty advisors.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
