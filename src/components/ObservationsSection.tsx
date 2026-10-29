import React, { useState, useEffect } from 'react';
import { 
  ClipboardCheck, 
  Gauge, 
  FileSpreadsheet, 
  CheckCircle2
} from 'lucide-react';
import { projectContent } from '../data/content';

export const ObservationsSection: React.FC = () => {
  const { observations } = projectContent;
  const [rpmCount, setRpmCount] = useState(0);

  // Animated Count-up for the 970 RPM stat card
  useEffect(() => {
    let start = 0;
    const end = 970;
    const duration = 1600; // ms
    const increment = end / (duration / 25);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setRpmCount(end);
        clearInterval(timer);
      } else {
        setRpmCount(Math.floor(start));
      }
    }, 25);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="observations" className="py-20 bg-slate-50/70 dark:bg-[#081220] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-navy-900 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <ClipboardCheck className="w-3.5 h-3.5" />
            <span>Empirical Findings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-navy-950 dark:text-white">
            {observations.sectionTitle}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            {observations.subtitle}
          </p>
        </div>

        {/* Narrative Box + Highlighted 970 RPM Stat Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-14 items-stretch">
          
          {/* Narrative text */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200/90 dark:border-navy-800 shadow-soft flex flex-col justify-center">
            <h3 className="font-display font-bold text-lg sm:text-xl text-navy-950 dark:text-white mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-cyan-400" />
              <span>Qualitative Laboratory Observations</span>
            </h3>
            <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              {observations.narrative}
            </p>
          </div>

          {/* Highlighted 970 RPM Stat Card with animated count */}
          <div className="lg:col-span-4 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-600 to-navy-950 text-white shadow-soft-lg flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/10 rounded-full blur-2xl group-hover:scale-125 transition-transform" />
            
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs uppercase font-mono font-bold tracking-wider text-cyan-300">
                Instrument Readout
              </span>
              <Gauge className="w-5 h-5 text-cyan-300" />
            </div>

            <div className="my-3">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-mono font-extrabold text-white tracking-tight">
                  {rpmCount}
                </span>
                <span className="text-xl font-bold text-cyan-300 font-mono">
                  {observations.statHighlight.unit}
                </span>
              </div>
              <p className="text-xs font-semibold text-slate-200 mt-1">
                {observations.statHighlight.label}
              </p>
            </div>

            <div className="pt-3 border-t border-white/20 text-[11px] text-slate-300 leading-snug">
              {observations.statHighlight.detail}
            </div>
          </div>

        </div>

        {/* Primary Observation Table (Responsive Cards on Mobile) */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-display font-bold text-lg text-navy-950 dark:text-white">
              Experimental Parameter Status
            </h3>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Responsive table / cards view
            </span>
          </div>

          {/* Desktop Table View */}
          <div className="hidden md:block rounded-2xl overflow-hidden bg-white dark:bg-navy-900 border border-slate-200/90 dark:border-navy-800 shadow-soft">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100/80 dark:bg-navy-950/80 text-navy-950 dark:text-slate-200 text-xs font-semibold uppercase tracking-wider border-b border-slate-200 dark:border-navy-800">
                  <th className="py-3.5 px-6">Parameter</th>
                  <th className="py-3.5 px-6">Observation</th>
                  <th className="py-3.5 px-6">Value / Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/70 dark:divide-navy-800">
                {observations.observationTable.map((row, idx) => (
                  <tr 
                    key={idx}
                    className={`hover:bg-blue-50/50 dark:hover:bg-navy-800/40 transition-colors ${
                      row.highlight ? 'bg-blue-50/20 dark:bg-navy-900' : ''
                    }`}
                  >
                    <td className="py-4 px-6 font-semibold text-navy-950 dark:text-white">
                      {row.parameter}
                    </td>
                    <td className="py-4 px-6 text-slate-700 dark:text-slate-300">
                      {row.observation}
                    </td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold ${
                        row.highlight
                          ? 'bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-cyan-300'
                          : 'bg-slate-100 dark:bg-navy-800 text-slate-600 dark:text-slate-400'
                      }`}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Stacked Cards View */}
          <div className="md:hidden space-y-3">
            {observations.observationTable.map((row, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-xl bg-white dark:bg-navy-900 border border-slate-200/90 dark:border-navy-800 shadow-xs space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Parameter
                  </span>
                  <span className={`text-[11px] font-semibold px-2 py-0.5 rounded ${
                    row.highlight
                      ? 'bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-cyan-300'
                      : 'bg-slate-100 dark:bg-navy-800 text-slate-600 dark:text-slate-400'
                  }`}>
                    {row.status}
                  </span>
                </div>
                <div className="font-display font-bold text-base text-navy-950 dark:text-white">
                  {row.parameter}
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-300 pt-1 border-t border-slate-100 dark:border-navy-800">
                  <span className="font-medium text-slate-400 mr-1">Observed:</span>
                  {row.observation}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* "Data to be Completed" Table */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200/90 dark:border-navy-800 shadow-soft">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-navy-950 dark:text-white flex items-center gap-2">
                <FileSpreadsheet className="w-5 h-5 text-blue-600 dark:text-cyan-400" />
                <span>6.1 Suggested Data Table (Completed from Lab Notebook)</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                Target and actual measured quantities recorded during the experimental session.
              </p>
            </div>
            <span className="text-[11px] px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 shrink-0 self-start sm:self-auto font-medium flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Verified Lab Notebook Data
            </span>
          </div>

          {/* Desktop Table View */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-navy-950 text-navy-950 dark:text-slate-200 text-xs font-semibold uppercase tracking-wider border-b border-slate-200 dark:border-navy-800">
                  <th className="py-3 px-4">Ingredient</th>
                  <th className="py-3 px-4">Target Quantity</th>
                  <th className="py-3 px-4">Actual Quantity</th>
                  <th className="py-3 px-4">Remarks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-navy-800 font-mono text-xs">
                {observations.pendingDataTable.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/60 dark:hover:bg-navy-800/40">
                    <td className="py-3 px-4 font-sans font-semibold text-navy-950 dark:text-slate-200">
                      {row.ingredient}
                    </td>
                    <td className="py-3 px-4 font-bold text-blue-600 dark:text-cyan-400">
                      {row.targetQuantity}
                    </td>
                    <td className="py-3 px-4 font-bold text-blue-600 dark:text-cyan-400">
                      {row.actualQuantity}
                    </td>
                    <td className="py-3 px-4 font-sans text-slate-600 dark:text-slate-400">
                      {row.remarks}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Stacked View */}
          <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-3">
            {observations.pendingDataTable.map((row, idx) => (
              <div 
                key={idx}
                className="p-3.5 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200/80 dark:border-navy-800 space-y-1.5 text-xs"
              >
                <div className="font-semibold text-navy-950 dark:text-white">
                  {row.ingredient}
                </div>
                <div className="text-[11px] flex justify-between font-mono bg-white dark:bg-navy-900 p-2 rounded-lg border border-slate-200/60 dark:border-navy-800">
                  <span className="text-slate-600 dark:text-slate-300">Target: <strong className="text-blue-600 dark:text-cyan-400">{row.targetQuantity}</strong></span>
                  <span className="text-slate-600 dark:text-slate-300">Actual: <strong className="text-blue-600 dark:text-cyan-400">{row.actualQuantity}</strong></span>
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 italic pt-1">
                  {row.remarks}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 text-[11px] text-slate-400 italic">
            *Source: Lab Notebook Section 6.1 "Suggested data table to complete from lab notebook". All values synchronized in <code>src/data/content.ts</code>.
          </div>
        </div>

      </div>
    </section>
  );
};
