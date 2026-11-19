import React, { useState } from 'react';
import { 
  GitCommit, 
  ArrowRight, 
  ShieldCheck, 
  ZoomIn, 
  Maximize2,
  Gauge,
  FileText
} from 'lucide-react';
import { motion } from 'framer-motion';
import { projectContent } from '../data/content';

export const ProcessSection: React.FC = () => {
  const { process } = projectContent;
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [diagramModalOpen, setDiagramModalOpen] = useState(false);

  return (
    <section id="process" className="py-20 bg-slate-50/70 dark:bg-[#081220] relative border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-2.5"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-navy-900 border border-slate-200 dark:border-navy-800 text-slate-700 dark:text-slate-300 text-xs font-medium">
            <GitCommit className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
            <span>Unit operations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-navy-950 dark:text-white">
            {process.sectionTitle}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            {process.subtitle}
          </p>
        </motion.div>

        {/* Process Flow Stepper (Horizontal on Desktop, Stacked on Mobile) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-14 p-6 sm:p-8 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200/90 dark:border-navy-800 shadow-sm"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {process.flowStages.map((stage, idx) => {
              const isLast = idx === process.flowStages.length - 1;
              return (
                <React.Fragment key={idx}>
                  <div className="flex items-center gap-3 w-full lg:w-auto">
                    <div className="w-9 h-9 rounded-xl bg-blue-600 text-white font-display font-bold text-sm flex items-center justify-center shrink-0 shadow-xs">
                      {idx + 1}
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-navy-950 dark:text-slate-200">
                      {stage}
                    </span>
                  </div>

                  {!isLast && (
                    <div className="hidden lg:flex items-center text-slate-300 dark:text-navy-700">
                      <ArrowRight className="w-5 h-5 text-blue-500" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </motion.div>

        {/* Main Process Grid: Step Details (Left) + Process Flow Diagram (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Step Breakdown (Timeline) */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-xl font-display font-bold text-navy-950 dark:text-white mb-2">
              Experimental Execution Stages
            </h3>

            {process.steps.map((step, idx) => {
              const isSelected = activeStepIndex === idx;

              return (
                <div
                  key={step.stepNumber}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`cursor-pointer p-6 rounded-2xl border transition-all duration-200 ${
                    isSelected
                      ? 'bg-white dark:bg-navy-900 border-blue-500 shadow-sm ring-1 ring-blue-500/20'
                      : 'bg-white/60 dark:bg-navy-900/40 border-slate-200 dark:border-navy-800 hover:bg-white dark:hover:bg-navy-900'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-3">
                      <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-xs ${
                        isSelected 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-slate-100 dark:bg-navy-800 text-slate-600 dark:text-slate-300'
                      }`}>
                        0{step.stepNumber}
                      </span>
                      <h4 className="font-display font-bold text-base sm:text-lg text-navy-950 dark:text-white">
                        {step.title}
                      </h4>
                    </div>

                    {step.rpm && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-cyan-400">
                        <Gauge className="w-3 h-3" />
                        {step.rpm}
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-11">
                    {step.fullDesc}
                  </p>

                  <div className="mt-3 pl-11 flex flex-wrap items-center gap-2 text-xs">
                    <span className="font-medium text-blue-600 dark:text-cyan-400 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Key Action: {step.keyAction}
                    </span>
                    {step.caution && (
                      <span className="text-red-600 dark:text-red-400 font-medium">
                        • {step.caution}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Process Flow Diagram (PFD) Display */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="p-5 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200/90 dark:border-navy-800 shadow-sm space-y-4">
              <div className="flex items-center justify-between px-1">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
                  <h4 className="font-display font-bold text-sm text-navy-950 dark:text-white">
                    Process Flow Diagram (PFD)
                  </h4>
                </div>
                <button
                  type="button"
                  onClick={() => setDiagramModalOpen(true)}
                  className="p-1.5 rounded-lg bg-slate-100 dark:bg-navy-800 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
                  title="Enlarge Diagram"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              {/* Diagram Image Container */}
              <div 
                className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-navy-800 bg-[#0B1F3A] cursor-pointer group"
                onClick={() => setDiagramModalOpen(true)}
              >
                <img
                  src={process.diagramImage}
                  alt={process.diagramAlt}
                  loading="lazy"
                  className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-3 py-1.5 rounded-lg bg-navy-950/80 text-white text-xs font-semibold backdrop-blur-xs flex items-center gap-1.5 shadow">
                    <ZoomIn className="w-3.5 h-3.5 text-cyan-400" />
                    Click to Inspect PFD
                  </span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-navy-950/60 text-xs text-slate-600 dark:text-slate-300 leading-snug space-y-1">
                <span className="font-semibold text-navy-950 dark:text-white block">Flow Sequence:</span>
                <p>
                  Raw materials &amp; water → Controlled mixing (~970 RPM) → Mild heat assist (optional) → Ambient cooling/filtration → Sample vial collection.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Diagram Fullscreen Lightbox Modal */}
      {diagramModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setDiagramModalOpen(false)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] overflow-auto rounded-2xl bg-navy-950 p-2 sm:p-4 border border-blue-500/40">
            <button
              onClick={() => setDiagramModalOpen(false)}
              className="absolute top-4 right-4 z-10 px-3 py-1.5 rounded-lg bg-black/80 text-white text-xs font-bold hover:bg-red-600 transition-colors"
            >
              Close [ESC]
            </button>
            <img
              src={process.diagramImage}
              alt={process.diagramAlt}
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};
