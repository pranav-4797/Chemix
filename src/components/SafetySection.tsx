import React from 'react';
import { 
  ShieldAlert, 
  AlertTriangle, 
  Flame, 
  Ban, 
  Tag, 
  Trash2, 
  HeartPulse, 
  ShieldCheck 
} from 'lucide-react';
import { projectContent } from '../data/content';

// Icon Map helper for safety
const safetyIcons: Record<string, React.ReactNode> = {
  ShieldAlert: <ShieldAlert className="w-6 h-6" />,
  AlertTriangle: <AlertTriangle className="w-6 h-6" />,
  Flame: <Flame className="w-6 h-6" />,
  Ban: <Ban className="w-6 h-6" />,
  Tag: <Tag className="w-6 h-6" />,
  Trash2: <Trash2 className="w-6 h-6" />,
  HeartPulse: <HeartPulse className="w-6 h-6" />
};

export const SafetySection: React.FC = () => {
  const { safety } = projectContent;

  return (
    <section id="safety" className="py-20 bg-slate-50/70 dark:bg-[#081220] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 dark:bg-red-950/60 border border-red-200 dark:border-red-900/60 text-red-700 dark:text-red-400 text-xs font-semibold uppercase tracking-wider">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Hazard Prevention &amp; Protocol</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-navy-950 dark:text-white">
            {safety.sectionTitle}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            {safety.subtitle}
          </p>
        </div>

        {/* Safety Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {safety.rules.map((rule) => {
            const isDanger = rule.severity === 'danger';

            return (
              <div
                key={rule.id}
                className={`p-6 rounded-2xl border transition-all duration-300 shadow-soft hover:shadow-soft-lg flex flex-col justify-between ${
                  isDanger
                    ? 'bg-red-50/40 dark:bg-red-950/20 border-red-200 dark:border-red-900/60'
                    : 'bg-amber-50/40 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900/60'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      isDanger
                        ? 'bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-300'
                        : 'bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-300'
                    }`}>
                      {safetyIcons[rule.icon] || <ShieldAlert className="w-6 h-6" />}
                    </div>

                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                      isDanger
                        ? 'bg-red-100 dark:bg-red-900/80 text-red-800 dark:text-red-200'
                        : 'bg-amber-100 dark:bg-amber-900/80 text-amber-800 dark:text-amber-200'
                    }`}>
                      {rule.severity}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-base sm:text-lg text-navy-950 dark:text-white mb-2 leading-snug">
                    {rule.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {rule.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-navy-800 flex items-center gap-2 text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-500 dark:text-cyan-400" />
                  <span>Institutional Chemical Lab Mandate</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Emergency Eye Wash / Shower Callout Box */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white shadow-soft-lg flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-xs flex items-center justify-center shrink-0">
              <HeartPulse className="w-7 h-7 text-white" />
            </div>
            <div>
              <h4 className="font-display font-bold text-base sm:text-lg">
                Emergency Exposure Protocol (15-Minute Rinse Rule)
              </h4>
              <p className="text-xs sm:text-sm text-white/90">
                Immediately flush affected eyes or dermal areas at the nearest eyewash / deluge shower. Inform supervisor immediately.
              </p>
            </div>
          </div>
          <span className="shrink-0 px-4 py-2 rounded-xl bg-white text-red-700 font-bold text-xs uppercase tracking-wider shadow">
            SOS Protocol
          </span>
        </div>

      </div>
    </section>
  );
};
