import { Play, ArrowRight, Gauge, Sparkles, Award } from 'lucide-react';
import { projectContent } from '../data/content';

export const Hero: React.FC = () => {
  const { hero } = projectContent;

  return (
    <section 
      id="hero" 
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-blue-50/50 via-slate-50 to-white dark:from-navy-950 dark:via-[#091528] dark:to-[#060e1a]"
    >
      {/* Decorative Background Bubbles / Foam Shapes */}
      <div className="bubble w-64 h-64 -top-16 -left-16 opacity-40 animate-float-slow" aria-hidden="true" />
      <div className="bubble w-48 h-48 top-1/2 -right-12 opacity-30 animate-float-reverse" aria-hidden="true" />
      <div className="bubble w-32 h-32 bottom-8 left-1/3 opacity-25 animate-float-medium" aria-hidden="true" />

      {/* Subtle radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-400/10 to-cyan-400/15 blur-3xl pointer-events-none rounded-full" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 dark:bg-navy-900 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-cyan-300 text-xs sm:text-sm font-semibold shadow-xs">
              <Sparkles className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
              <span>{hero.supertitle}</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-navy-950 dark:text-white tracking-tight leading-[1.15]">
              Preparation of <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 bg-clip-text text-transparent">Liquid Detergent</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl font-medium text-slate-700 dark:text-slate-200 leading-relaxed">
              {hero.subtitle}
            </p>

            {/* Institutional Line */}
            <div className="p-3.5 rounded-xl bg-white/70 dark:bg-navy-900/60 border border-slate-200/80 dark:border-navy-800 backdrop-blur-sm text-xs sm:text-sm text-slate-600 dark:text-slate-300 flex items-start gap-3">
              <Award className="w-5 h-5 text-blue-600 dark:text-cyan-400 shrink-0 mt-0.5" />
              <span>{hero.institutionLine}</span>
            </div>

            {/* CTA Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href={hero.secondaryCta.href}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm sm:text-base shadow-soft-lg hover:shadow-glow transition-all duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 min-h-[44px]"
              >
                <Play className="w-4 h-4 fill-white group-hover:scale-110 transition-transform" />
                <span>{hero.secondaryCta.text}</span>
              </a>

              <a
                href={hero.primaryCta.href}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-navy-900 hover:bg-slate-100 dark:hover:bg-navy-800 text-slate-800 dark:text-slate-100 font-semibold text-sm sm:text-base border border-slate-200 dark:border-navy-700 shadow-sm transition-all duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 min-h-[44px]"
              >
                <span>{hero.primaryCta.text}</span>
                <ArrowRight className="w-4 h-4 text-blue-600 dark:text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Quick Stat Chips */}
            <div className="pt-4 grid grid-cols-3 gap-3 sm:gap-4">
              {hero.quickStats.map((st, i) => (
                <div key={i} className="p-3 rounded-xl bg-white/60 dark:bg-navy-900/50 border border-slate-200/70 dark:border-navy-800 backdrop-blur-xs">
                  <div className="text-lg sm:text-xl font-display font-bold text-blue-600 dark:text-cyan-400">
                    {st.value}
                  </div>
                  <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                    {st.label}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 hidden sm:block">
                    {st.note}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Hero Visual - Figure 5.1 Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 via-cyan-400 to-sky-500 rounded-3xl blur-md opacity-30 dark:opacity-40 animate-pulse-subtle" />

              {/* Card Container */}
              <div className="relative rounded-2xl overflow-hidden bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-700 shadow-2xl group">
                <div className="relative aspect-[4/5] overflow-hidden bg-slate-900">
                  <img
                    src={hero.heroImage.src}
                    alt={hero.heroImage.alt}
                    loading="eager"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Floating Digital Readout Overlay */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/75 backdrop-blur-md border border-red-500/50 text-white shadow-lg">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                    <span className="font-mono text-xs text-red-400 font-bold tracking-wider">
                      970 RPM
                    </span>
                    <span className="text-[10px] text-slate-300 uppercase">
                      Tachometer
                    </span>
                  </div>

                  {/* Prototype Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-md bg-blue-600/90 text-white text-xs font-bold uppercase tracking-wider shadow">
                    Live Prototype
                  </div>

                  {/* Bottom Gradient Overlay & Caption */}
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-navy-950 via-navy-950/80 to-transparent text-white">
                    <p className="text-xs sm:text-sm font-medium leading-snug">
                      {hero.heroImage.caption}
                    </p>
                    <div className="mt-2 flex items-center justify-between text-[11px] text-cyan-300/90">
                      <span>REMI 2MLH Magnetic Stirrer</span>
                      <span>Prototype Agitation</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Mini Spec Card */}
              <div className="hidden sm:flex absolute -bottom-5 -left-5 p-3.5 rounded-xl bg-white/95 dark:bg-navy-900/95 border border-slate-200 dark:border-navy-700 shadow-soft-lg backdrop-blur-md items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-navy-800 flex items-center justify-center text-blue-600 dark:text-cyan-400">
                  <Gauge className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs text-slate-500 dark:text-slate-400 font-medium">
                    Observed Agitation Speed
                  </span>
                  <span className="block text-sm font-bold text-navy-950 dark:text-white">
                    970 RPM Digital Readout
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
