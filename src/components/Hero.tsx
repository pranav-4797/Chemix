import React from 'react';
import { Play, ArrowRight, FlaskConical, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {

  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#060e1a] text-white pt-24 pb-16"
    >
      {/* Background Group Photo - Prominently visible with dark atmospheric overlay (Like inkcraft-studio reference) */}
      <div className="absolute inset-0 z-0 select-none overflow-hidden" aria-hidden="true">
        <img
          src="/images/team-group.jpg"
          alt="Chemix Student Formulation Team"
          className="w-full h-full object-cover object-top sm:object-center filter brightness-[0.42] contrast-105 scale-100 sm:scale-105"
        />
        {/* Layered cinematic gradients to guarantee perfect text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060e1a] via-[#060e1a]/60 to-[#060e1a]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(6,14,26,0.85)_100%)]" />

        {/* Ambient cyan reference dots */}
        <div className="absolute top-1/4 left-1/6 w-2 h-2 rounded-full bg-cyan-400/70 blur-[0.5px]" />
        <div className="absolute top-1/3 right-1/5 w-2 h-2 rounded-full bg-cyan-400/60 blur-[0.5px]" />
        <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 rounded-full bg-cyan-400/50 blur-[0.5px]" />
        <div className="absolute bottom-1/4 right-1/4 w-2.5 h-2.5 rounded-full bg-blue-400/60 blur-[0.5px]" />
      </div>

      {/* Foreground Centered Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-7">
        
        {/* Top Tag Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-slate-200 text-xs sm:text-sm font-medium shadow-md"
        >
          <FlaskConical className="w-3.5 h-3.5 text-cyan-400" />
          <span>Chemical Prototyping Laboratory Project</span>
        </motion.div>

        {/* Big Centered Headline with Serif Elegance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-1 sm:space-y-2"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight leading-[1.12]">
            Chemical Prototyping &amp;
            <span className="block mt-1 sm:mt-2 text-cyan-400 font-serif">
              Preparation of Liquid Detergent
            </span>
          </h1>
        </motion.div>

        {/* Subtitle Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm sm:text-base md:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto"
        >
          A comprehensive laboratory study of liquid detergent formulation using SLS, NaOH, castor oil, EDTA, glycerol, and copper sulfate through systematic chemical unit operations.
        </motion.p>

        {/* Institutional Metadata Bullets */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-cyan-300/90 font-medium pt-1"
        >
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            MIT Academy of Engineering, Pune
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            SY B.Tech Chemical Prototyping
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            Academic Year 2026–2027
          </span>
        </motion.div>

        {/* Centered CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-3 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          <a
            href="#process-video-view"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-navy-950 font-bold text-sm sm:text-base shadow-lg shadow-cyan-500/25 transition-all duration-150 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 min-h-[46px]"
          >
            <Play className="w-4 h-4 fill-navy-950" />
            <span>Watch Process Video</span>
          </a>

          <a
            href="#process"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base border border-white/20 backdrop-blur-md transition-all duration-150 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-white min-h-[46px]"
          >
            <span>View Process Diagram</span>
            <ArrowRight className="w-4 h-4 text-cyan-300" />
          </a>

          <a
            href="#quiz"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg text-xs sm:text-sm text-slate-300 hover:text-cyan-400 transition-colors min-h-[40px]"
          >
            <span>Take Lab Quiz →</span>
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="pt-6 sm:pt-10 flex flex-col items-center gap-1.5 text-[11px] uppercase tracking-[0.25em] text-slate-400 font-medium"
        >
          <span>SCROLL TO EXPLORE</span>
          <ChevronDown className="w-4 h-4 text-cyan-400 animate-bounce" />
        </motion.div>

      </div>
    </section>
  );
};
