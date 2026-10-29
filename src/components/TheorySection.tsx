import React, { useState } from 'react';
import { BookOpen, CheckCircle } from 'lucide-react';
import { projectContent } from '../data/content';

export const TheorySection: React.FC = () => {
  const { theory } = projectContent;
  const [activeTab, setActiveTab] = useState(theory.topics[0].id);

  const activeTopic = theory.topics.find((t) => t.id === activeTab) || theory.topics[0];

  return (
    <section id="theory" className="py-20 bg-white dark:bg-[#060e1a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-navy-900 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Theoretical Foundation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-navy-950 dark:text-white">
            {theory.sectionTitle}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            {theory.subtitle}
          </p>
        </div>

        {/* Desktop Tabs / Mobile Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {theory.topics.map((topic) => {
            const isActive = activeTab === topic.id;
            return (
              <button
                key={topic.id}
                type="button"
                onClick={() => setActiveTab(topic.id)}
                className={`px-4 sm:px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 min-h-[44px] flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-soft-lg scale-[1.02]'
                    : 'bg-slate-100 dark:bg-navy-900 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-navy-800'
                }`}
              >
                <span>{topic.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Topic Content Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-navy-900/60 border border-slate-200/90 dark:border-navy-800 shadow-soft max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-cyan-400">
              {activeTopic.subtitle}
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-navy-950 dark:text-white mt-1">
              {activeTopic.title}
            </h3>
          </div>

          <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed mb-8 p-4 rounded-xl bg-white dark:bg-navy-950/80 border border-slate-200/70 dark:border-navy-800">
            {activeTopic.summary}
          </p>

          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              Key Mechanism Takeaways
            </h4>
            {activeTopic.points.map((pt, idx) => (
              <div 
                key={idx}
                className="flex items-start gap-3 p-3.5 rounded-xl bg-white dark:bg-navy-950 border border-slate-200/60 dark:border-navy-800 shadow-xs"
              >
                <CheckCircle className="w-5 h-5 text-blue-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {pt}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
