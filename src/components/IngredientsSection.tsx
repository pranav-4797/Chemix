import React, { useState } from 'react';
import { 
  Atom, 
  AlertTriangle, 
  ChevronDown, 
  ChevronUp, 
  Info
} from 'lucide-react';
import { motion } from 'framer-motion';
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
    <section id="ingredients" className="py-20 bg-white dark:bg-[#060e1a] relative border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 space-y-2.5"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-navy-900 border border-slate-200 dark:border-navy-800 text-slate-700 dark:text-slate-300 text-xs font-medium">
            <Atom className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
            <span>Chemical formulation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-navy-950 dark:text-white">
            {ingredients.sectionTitle}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            {ingredients.subtitle}
          </p>
        </motion.div>

        {/* Essential Info Note Box */}
        <motion.div 
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto mb-10 p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-navy-900/60 border border-slate-200 dark:border-navy-800 flex items-start gap-3.5"
        >
          <Info className="w-5 h-5 text-blue-600 dark:text-cyan-400 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            <strong className="font-semibold block sm:inline text-navy-950 dark:text-white mr-1">
              Formulation Notice:
            </strong>
            {ingredients.infoNote}
          </div>
        </motion.div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedFilter(cat.value)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors min-h-[44px] flex items-center gap-1.5 ${
                selectedFilter === cat.value
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-navy-900 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-navy-800'
              }`}
            >
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Ingredients Grid (9 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => {
            const isExpanded = expandedCard === item.id;
            const hasWarning = !!item.safetyWarning;
            const hasActual = item.actualQuantity && item.actualQuantity !== '—';

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                className={`rounded-2xl bg-white dark:bg-navy-900 border transition-all duration-200 shadow-sm hover:shadow-md flex flex-col justify-between ${
                  hasWarning 
                    ? 'border-red-200 dark:border-red-900/60 bg-red-50/10' 
                    : 'border-slate-200/90 dark:border-navy-800'
                }`}
              >
                <div className="p-5 sm:p-6">
                  {/* Card Header: Small Chemical Photo + Name & Formula */}
                  <div className="flex items-start gap-3.5 mb-3.5">
                    {item.image && (
                      <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden bg-slate-100 dark:bg-navy-950 border border-slate-200 dark:border-navy-800 shrink-0">
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
                        <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-navy-950 text-blue-600 dark:text-cyan-400 border border-slate-200/80 dark:border-navy-800">
                          {item.formula}
                        </span>
                        <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-slate-100 dark:bg-navy-800 text-slate-700 dark:text-slate-300 truncate">
                          {item.badge}
                        </span>
                      </div>
                      <h3 className="text-base font-display font-bold text-navy-950 dark:text-white leading-snug">
                        {item.name}
                      </h3>
                    </div>
                  </div>

                  {/* Role Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                    {item.role}
                  </p>

                  {/* Single Clear Actual Measured Quantity Badge */}
                  <div className="mb-4 px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-navy-950/80 border border-slate-200 dark:border-navy-800 flex items-center justify-between text-xs">
                    <span className="text-slate-500 dark:text-slate-400 font-medium">
                      {hasActual ? 'Actual Quantity:' : 'Status:'}
                    </span>
                    <span className={`font-mono font-semibold ${
                      hasActual 
                        ? 'text-blue-700 dark:text-cyan-300' 
                        : 'text-slate-500 dark:text-slate-400 font-normal'
                    }`}>
                      {hasActual ? item.actualQuantity : 'Optional (Not added in batch)'}
                    </span>
                  </div>

                  {/* Safety Warning Badge (e.g. for NaOH) */}
                  {item.safetyWarning && (
                    <div className="mb-4 p-3 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 text-red-800 dark:text-red-200 flex items-start gap-2 text-xs">
                      <AlertTriangle className="w-4 h-4 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
                      <span className="font-medium leading-tight">
                        {item.safetyWarning}
                      </span>
                    </div>
                  )}

                  {/* Expandable Technical Specification */}
                  {isExpanded && (
                    <div className="pt-3 border-t border-slate-200/80 dark:border-navy-800 space-y-1.5 text-xs">
                      <div className="font-semibold text-slate-700 dark:text-slate-300">
                        Lab Verification Status:
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        {item.statusNotes}
                      </p>
                    </div>
                  )}
                </div>

                {/* Flip / Expand Button */}
                <div className="px-5 pb-4 pt-1">
                  <button
                    type="button"
                    onClick={() => toggleCard(item.id)}
                    className="w-full py-2.5 px-3 rounded-xl bg-slate-50 dark:bg-navy-950 hover:bg-slate-100 dark:hover:bg-navy-800 text-slate-700 dark:text-slate-300 border border-slate-200/90 dark:border-navy-800 text-xs font-medium flex items-center justify-center gap-1.5 transition-colors min-h-[44px]"
                    aria-expanded={isExpanded}
                  >
                    <span>{isExpanded ? 'Hide Technical Details' : 'View Chemical Specs'}</span>
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
