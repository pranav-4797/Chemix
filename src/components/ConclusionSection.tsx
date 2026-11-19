import React from 'react';
import { Award, Compass, CheckSquare2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { projectContent } from '../data/content';

export const ConclusionSection: React.FC = () => {
  const { conclusion } = projectContent;

  return (
    <section id="conclusion" className="py-20 bg-white dark:bg-[#060e1a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
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
        </motion.div>

        {/* Executive Conclusion Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-14 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-blue-50/80 via-white to-slate-50 dark:from-navy-900 dark:via-navy-950 dark:to-[#081220] border border-blue-200/80 dark:border-navy-800 shadow-soft"
        >
          <div className="max-w-4xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-cyan-400">
              Executive Project Conclusion
            </span>
            <p className="text-slate-700 dark:text-slate-200 text-base sm:text-lg leading-relaxed">
              {conclusion.conclusionText}
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
              <Compass className="w-4 h-4 text-blue-500" />
              <span>SY B.Tech Chemical Prototyping Experimental Milestone | Academic Year 2026–2027</span>
            </div>
          </div>
        </motion.div>

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
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group p-5 rounded-2xl bg-slate-50 dark:bg-navy-900/60 border border-slate-200/80 dark:border-navy-800 hover:border-blue-300 dark:hover:border-cyan-800/80 hover:bg-white dark:hover:bg-navy-900 transition-all duration-200 shadow-xs flex items-start gap-3.5"
              >
                <div className="w-6 h-6 rounded-lg bg-blue-100 dark:bg-navy-800 text-blue-600 dark:text-cyan-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold font-mono group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  0{idx + 1}
                </div>
                <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
