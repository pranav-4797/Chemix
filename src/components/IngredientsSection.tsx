import React, { useState } from 'react';
import { 
  Atom, 
  AlertTriangle, 
  ChevronDown, 
  ChevronUp, 
  Info
} from 'lucide-react';
import { projectContent } from '../data/content';

export const IngredientsSection: React.FC = () => {
  const { ingredients } = projectContent;
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const toggleCard = (id: string) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const categories = [
    { label: 'All Components (9)', value: 'all' },
    { label: 'Surfactant', value: 'surfactant' },
    { label: 'Alkalis & Builders', value: 'builder' },
    { label: 'Oils & Fatty Acids', value: 'fatty-acid' },
  ];

  const filteredItems = ingredients.items.filter(item => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'surfactant') return item.category === 'surfactant';
    if (selectedFilter === 'builder') return item.category === 'builder' || item.category === 'alkali' || item.category === 'chelant';
    if (selectedFilter === 'fatty-acid') return item.category === 'fatty-acid' || item.category === 'oil' || item.category === 'humectant';
    return true;
  });

  return (
    <section id="ingredients" className="py-20 bg-white dark:bg-[#060e1a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-navy-900 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Atom className="w-3.5 h-3.5" />
            <span>Chemical Formulation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-navy-950 dark:text-white">
            {ingredients.sectionTitle}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            {ingredients.subtitle}
          </p>
        </div>

        {/* Essential Info Note Box */}
        <div className="max-w-4xl mx-auto mb-10 p-4 sm:p-5 rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 flex items-start gap-3.5 shadow-xs">
          <Info className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-amber-900 dark:text-amber-200/90 leading-relaxed">
            <strong className="font-semibold block sm:inline text-amber-950 dark:text-amber-200 mr-1">
              Formulation Notice:
            </strong>
            {ingredients.infoNote}
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedFilter(cat.value)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 min-h-[44px] flex items-center gap-1.5 ${
                selectedFilter === cat.value
                  ? 'bg-blue-600 text-white shadow-soft'
                  : 'bg-slate-100 dark:bg-navy-900 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-navy-800'
              }`}
            >
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Ingredients Grid (9 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const isExpanded = expandedCard === item.id;
            const hasWarning = !!item.safetyWarning;

            return (
              <div
                key={item.id}
                className={`group rounded-2xl bg-slate-50 dark:bg-navy-900 border transition-all duration-300 shadow-soft hover:shadow-soft-lg flex flex-col justify-between ${
                  hasWarning 
                    ? 'border-red-300 dark:border-red-900/60 bg-red-50/20 dark:bg-navy-900' 
                    : 'border-slate-200/80 dark:border-navy-800'
                }`}
              >
                <div className="p-5 sm:p-6">
                  {/* Card Header: Small Chemical Photo + Name & Formula */}
                  <div className="flex items-start gap-3.5 mb-3.5">
                    {item.image && (
                      <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden bg-slate-100 dark:bg-navy-950 border border-slate-200 dark:border-navy-700 shadow-2xs shrink-0 group-hover:scale-105 transition-transform duration-300">
                        <img
                          src={item.image}
                          alt={item.name}
                          loading="lazy"
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                        <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-white dark:bg-navy-950 text-blue-600 dark:text-cyan-400 border border-slate-200 dark:border-navy-800">
                          {item.formula}
                        </span>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-100 dark:bg-navy-800 text-blue-700 dark:text-cyan-300 truncate">
                          {item.badge}
                        </span>
                      </div>
                      <h3 className="text-base font-display font-bold text-navy-950 dark:text-white leading-snug">
                        {item.name}
                      </h3>
                    </div>
                  </div>

                  {/* Warning Badge for Corrosive NaOH */}
                  {hasWarning && (
                    <div className="mb-3 p-2.5 rounded-xl bg-red-100/80 dark:bg-red-950/50 border border-red-200 dark:border-red-800/60 flex items-start gap-2 text-xs text-red-700 dark:text-red-300 font-medium">
                      <AlertTriangle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                      <span>{item.safetyWarning}</span>
                    </div>
                  )}

                  {/* Primary Role Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                    {item.role}
                  </p>

                  {/* Lab Notebook Quantities Badge (if recorded) */}
                  {item.targetQuantity && (
                    <div className="mb-4 px-3 py-1.5 rounded-lg bg-white dark:bg-navy-950 border border-slate-200/80 dark:border-navy-800 flex items-center justify-between text-xs">
                      <span className="text-slate-500 dark:text-slate-400">
                        Target: <strong className="text-navy-950 dark:text-white font-mono">{item.targetQuantity}</strong>
                      </span>
                      <span className="text-blue-600 dark:text-cyan-400 font-semibold font-mono">
                        Actual: {item.actualQuantity}
                      </span>
                    </div>
                  )}

                  {/* Expanded Technical Note */}
                  {isExpanded && (
                    <div className="pt-3 border-t border-slate-200 dark:border-navy-800 text-xs text-slate-500 dark:text-slate-400 space-y-1 animate-in fade-in duration-200">
                      <div className="font-semibold text-slate-700 dark:text-slate-300">
                        Lab Verification Status:
                      </div>
                      <p>{item.statusNotes}</p>
                    </div>
                  )}
                </div>

                {/* Footer Action to expand/collapse */}
                <div className="px-6 py-3 bg-white/60 dark:bg-navy-950/60 border-t border-slate-200/60 dark:border-navy-800/80 rounded-b-2xl flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 font-mono">
                    ID: {item.id}
                  </span>
                  <button
                    type="button"
                    onClick={() => toggleCard(item.id)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-cyan-400 hover:underline min-h-[36px] px-2 py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                    aria-expanded={isExpanded}
                  >
                    <span>{isExpanded ? 'Less Details' : 'Chemical Notes'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
