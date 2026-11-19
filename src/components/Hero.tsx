import React from 'react';
import { Play, ArrowRight, Award, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { projectContent } from '../data/content';

export const Hero: React.FC = () => {
  const { hero } = projectContent;

  return (
    <section 
      id="hero" 
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-slate-200/80 dark:border-slate-800/80"
    >
      {/* Background Group Photo with Subtle Blur & Overlay Gradient (Inkcraft studio style) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
        <img
          src="/images/team-group.jpg"
          alt="Chemix Project Team Background"
          className="w-full h-full object-cover object-top sm:object-center filter blur-xs sm:blur-sm scale-105 opacity-25 dark:opacity-20 brightness-95 dark:brightness-60"
        />
        {/* Multi-layer gradient overlays ensuring flawless contrast and typography readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/70 dark:from-[#060e1a]/95 dark:via-[#060e1a]/88 dark:to-[#060e1a]/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent dark:from-[#060e1a]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Top pill badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 dark:bg-navy-900/90 backdrop-blur-xs border border-slate-200 dark:border-navy-800 text-slate-700 dark:text-slate-300 text-xs font-medium shadow-2xs">
                <span>{hero.supertitle}</span>
              </div>

              <a
                href="#team"
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 dark:bg-navy-900/90 backdrop-blur-xs hover:bg-slate-100 dark:hover:bg-navy-800 border border-slate-200 dark:border-navy-700 text-slate-700 dark:text-slate-300 text-xs font-medium transition-colors shadow-2xs"
              >
                <img
                  src="/images/team-group.jpg"
                  alt="Student Team"
                  className="w-4 h-4 rounded-full object-cover"
                />
                <span>SY B.Tech Team</span>
                <Users className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>

            {/* Main Title - Calm, Solid, Authoritative */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-navy-950 dark:text-white tracking-tight leading-[1.15]">
              Preparation of <span className="text-blue-600 dark:text-blue-400">Liquid Detergent</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl font-normal text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              {hero.subtitle}
            </p>

            {/* Institutional Line */}
            <div className="p-3.5 rounded-xl bg-white/80 dark:bg-navy-900/70 backdrop-blur-xs border border-slate-200/80 dark:border-navy-800 text-xs sm:text-sm text-slate-600 dark:text-slate-300 flex items-start gap-3 shadow-2xs">
              <Award className="w-5 h-5 text-blue-600 dark:text-cyan-400 shrink-0 mt-0.5" />
              <span>{hero.institutionLine}</span>
            </div>

            {/* CTA Action Buttons - Focused Primary & Secondary */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#process-video-view"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm sm:text-base shadow-sm transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 min-h-[44px]"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>Watch Process Video</span>
              </a>

              <a
                href={hero.primaryCta.href}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/90 dark:bg-navy-900 hover:bg-slate-100 dark:hover:bg-navy-800 text-slate-800 dark:text-slate-200 font-semibold text-sm sm:text-base border border-slate-200 dark:border-navy-700 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 min-h-[44px]"
              >
                <span>{hero.primaryCta.text}</span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </a>

              <a
                href="#quiz"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 text-sm font-medium transition-colors min-h-[44px]"
              >
                <span>Take Lab Quiz →</span>
              </a>
            </div>

            {/* Key Measurements Strip */}
            <div className="pt-2 grid grid-cols-3 gap-3 sm:gap-4">
              {hero.quickStats.map((st, i) => (
                <div key={i} className="p-3 rounded-xl bg-white/80 dark:bg-navy-900/60 backdrop-blur-xs border border-slate-200/70 dark:border-navy-800 shadow-2xs">
                  <div className="text-lg sm:text-xl font-mono font-bold text-navy-950 dark:text-white">
                    {st.value}
                  </div>
                  <div className="text-xs font-medium text-slate-600 dark:text-slate-400">
                    {st.label}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-500 hidden sm:block">
                    {st.note}
                  </div>
                </div>
              ))}
            </div>

          </motion.div>

          {/* Right Column: Hero Visual - Real Photo without slop halos */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Clean Card Container */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={hero.heroImage.src}
                    alt={hero.heroImage.alt}
                    loading="eager"
                    className="w-full h-full object-cover object-center"
                  />
                  
                  {/* Digital Readout Overlay */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-sm border border-white/10 text-white shadow-md">
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                    <span className="font-mono text-xs text-red-400 font-bold tracking-wider">
                      970 RPM
                    </span>
                    <span className="text-[10px] text-slate-300">
                      Tachometer
                    </span>
                  </div>

                  {/* Prototype Label */}
                  <div className="absolute top-4 right-4 px-2.5 py-1 rounded-md bg-blue-600 text-white text-xs font-semibold shadow">
                    Lab Prototype
                  </div>

                  {/* Bottom Caption Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent text-white">
                    <p className="text-xs sm:text-sm font-medium leading-snug">
                      {hero.heroImage.caption}
                    </p>
                    <div className="mt-1.5 flex items-center justify-between text-[11px] text-slate-300">
                      <span>REMI 2MLH Magnetic Stirrer</span>
                      <span>Prototype Agitation</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
