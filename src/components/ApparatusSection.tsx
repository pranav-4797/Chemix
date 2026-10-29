import React from 'react';
import { 
  FlaskConical, 
  Scale, 
  Pipette, 
  Wand2, 
  Activity, 
  Gauge, 
  Filter, 
  Tag, 
  Check, 
  Layers
} from 'lucide-react';
import { projectContent } from '../data/content';

// Icon Map helper
const iconMap: Record<string, React.ReactNode> = {
  FlaskConical: <FlaskConical className="w-6 h-6" />,
  Scale: <Scale className="w-6 h-6" />,
  Pipette: <Pipette className="w-6 h-6" />,
  Wand2: <Wand2 className="w-6 h-6" />,
  Activity: <Activity className="w-6 h-6" />,
  Gauge: <Gauge className="w-6 h-6" />,
  Filter: <Filter className="w-6 h-6" />,
  Tag: <Tag className="w-6 h-6" />
};

export const ApparatusSection: React.FC = () => {
  const { apparatus } = projectContent;

  return (
    <section id="apparatus" className="py-20 bg-slate-50/70 dark:bg-[#081220] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-navy-900 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Equipment &amp; Hardware</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-navy-950 dark:text-white">
            {apparatus.sectionTitle}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            {apparatus.subtitle}
          </p>
        </div>

        {/* Apparatus Grid (8 cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {apparatus.items.map((item) => {
            const isRecommended = item.recommended;

            return (
              <div
                key={item.id}
                className={`group p-6 rounded-2xl bg-white dark:bg-navy-900 border transition-all duration-300 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 relative flex flex-col justify-between ${
                  isRecommended 
                    ? 'border-cyan-300 dark:border-cyan-800/80 ring-1 ring-cyan-400/20' 
                    : 'border-slate-200/90 dark:border-navy-800'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-navy-800 text-blue-600 dark:text-cyan-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {iconMap[item.iconName] || <FlaskConical className="w-6 h-6" />}
                    </div>

                    {isRecommended && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-cyan-100 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800">
                        Recommended
                      </span>
                    )}
                  </div>

                  <h3 className="font-display font-bold text-base sm:text-lg text-navy-950 dark:text-white mb-2 leading-snug">
                    {item.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-navy-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Chemical Lab Spec</span>
                  <Check className="w-3.5 h-3.5 text-blue-500 dark:text-cyan-400" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
