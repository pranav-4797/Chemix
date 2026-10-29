import { Target, Compass, CheckCircle2, FlaskConical, Sparkles } from 'lucide-react';
import { projectContent } from '../data/content';

export const AboutSection: React.FC = () => {
  const { about } = projectContent;

  return (
    <section id="about" className="py-20 bg-white dark:bg-[#060e1a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-navy-900 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <FlaskConical className="w-3.5 h-3.5" />
            <span>Academic Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-navy-950 dark:text-white">
            {about.sectionTitle}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            {about.tagline}
          </p>
        </div>

        {/* Multidisciplinary AI & ML Callout Card (Humanised UX) */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-blue-50/80 via-white to-cyan-50/60 dark:from-navy-900/90 dark:via-navy-950 dark:to-navy-900/80 border border-blue-200/90 dark:border-blue-900/50 shadow-soft-lg relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-navy-800 text-blue-700 dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
                <span>Multidisciplinary Engineering Narrative</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-navy-950 dark:text-white">
                From Algorithms to Beakers: AI &amp; ML in Chemical Prototyping
              </h3>
              <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                {about.aiPerspective}
              </p>
            </div>
            <div className="shrink-0 p-4 rounded-2xl bg-white dark:bg-navy-900 border border-blue-100 dark:border-navy-800 shadow-sm text-center min-w-[200px]">
              <div className="text-2xl font-mono font-extrabold text-blue-600 dark:text-cyan-400">
                AI &amp; ML
              </div>
              <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-0.5">
                SY B.Tech Engineers
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                Subject: Chemical Prototyping
              </div>
            </div>
          </div>
        </div>

        {/* Narrative Paragraphs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-navy-900/60 border border-slate-200/80 dark:border-navy-800 shadow-soft">
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              {about.paragraphs[0]}
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-navy-900/60 border border-slate-200/80 dark:border-navy-800 shadow-soft">
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              {about.paragraphs[1]}
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-cyan-400">
              <Sparkles className="w-4 h-4 shrink-0" />
              <span>Documented with authentic lab photographs &amp; continuous tachometer readings.</span>
            </div>
          </div>
        </div>

        {/* Motivation and Aim Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {about.cards.map((card) => {
            const isMotivation = card.id === 'motivation';
            return (
              <div
                key={card.id}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-white to-slate-50 dark:from-navy-900 dark:to-navy-950 border border-slate-200/90 dark:border-navy-800 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    isMotivation 
                      ? 'bg-amber-100 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400' 
                      : 'bg-blue-100 dark:bg-blue-950/40 text-blue-600 dark:text-cyan-400'
                  }`}>
                    {isMotivation ? <Compass className="w-6 h-6" /> : <Target className="w-6 h-6" />}
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 dark:bg-navy-800 text-slate-600 dark:text-slate-300">
                    {card.badge}
                  </span>
                </div>
                <h3 className="text-xl font-display font-bold text-navy-950 dark:text-white mb-3">
                  {card.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  {card.content}
                </p>
              </div>
            );
          })}
        </div>

        {/* Project Objectives Checklist */}
        <div className="p-8 sm:p-10 rounded-2xl bg-blue-50/60 dark:bg-navy-900/40 border border-blue-100 dark:border-navy-800">
          <div className="max-w-3xl mb-6">
            <h3 className="text-xl font-display font-bold text-navy-950 dark:text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-cyan-400" />
              <span>Key Project Objectives</span>
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Methodical checkpoints followed during the laboratory synthesis and reporting stages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {about.objectives.map((obj, index) => (
              <div 
                key={index}
                className="flex items-start gap-3.5 p-4 rounded-xl bg-white dark:bg-navy-900 border border-slate-200/80 dark:border-navy-800 shadow-xs"
              >
                <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-navy-800 text-blue-600 dark:text-cyan-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                  {index + 1}
                </div>
                <span className="text-sm text-slate-700 dark:text-slate-300 leading-snug">
                  {obj}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
