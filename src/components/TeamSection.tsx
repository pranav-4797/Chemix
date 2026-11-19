import React, { useState } from 'react';
import { Users, GraduationCap, MapPin, Sparkles, Maximize2, X, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectContent } from '../data/content';

export const TeamSection: React.FC = () => {
  const { team } = projectContent;
  const [photoModalOpen, setPhotoModalOpen] = useState(false);

  return (
    <section id="team" className="py-20 bg-slate-50/70 dark:bg-[#081220] relative border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14 space-y-2.5"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-navy-900 border border-slate-200 dark:border-navy-800 text-slate-700 dark:text-slate-300 text-xs font-medium">
            <Users className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
            <span>Project collaborators</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-navy-950 dark:text-white">
            {team.sectionTitle}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            {team.subtitle}
          </p>
        </motion.div>

        {/* Feature Group Photo Showcase Card */}
        {team.groupPhoto && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 p-6 sm:p-8 lg:p-10 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200/90 dark:border-navy-800 shadow-soft-lg relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Photo Display Column */}
              <div className="lg:col-span-6 relative">
                <div 
                  onClick={() => setPhotoModalOpen(true)}
                  className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-navy-700 aspect-[4/4.5] sm:aspect-[4/3.8] bg-slate-900 group cursor-pointer"
                >
                  <img
                    src={team.groupPhoto.src}
                    alt={team.groupPhoto.alt}
                    loading="lazy"
                    className="w-full h-full object-cover object-top sm:object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                  
                  {/* Floating Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-navy-950/80 backdrop-blur-md text-cyan-300 border border-cyan-500/30 text-xs font-semibold flex items-center gap-1.5 shadow-md">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Project Team Photo</span>
                  </div>

                  {/* Expand hint */}
                  <div className="absolute top-4 right-4 p-2 rounded-xl bg-navy-950/70 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  {/* Caption bottom bar */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-navy-950/80 backdrop-blur-md border border-white/10 text-white">
                    <p className="text-xs sm:text-sm font-medium leading-snug">
                      {team.groupPhoto.caption}
                    </p>
                    <span className="text-[11px] text-cyan-300 font-mono mt-0.5 block">
                      Click to expand high-resolution photo →
                    </span>
                  </div>
                </div>
              </div>

              {/* Group Info / Collaboration Narrative */}
              <div className="lg:col-span-6 space-y-5 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-navy-800 text-blue-700 dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
                  <span>Laboratory Innovation Team</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-navy-950 dark:text-white leading-tight">
                  {team.groupPhoto.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  Collaborative minor project practical conducted at <strong>MIT Academy of Engineering, Pune</strong>. The team synthesized, character-tested, and scientifically documented the laboratory preparation of a liquid detergent prototype, evaluating interfacial micelle dynamics, sequential reagent stoichiometry, and agitation parameters.
                </p>

                {/* Campus Location Tag */}
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200/80 dark:border-navy-800 flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                  <MapPin className="w-4 h-4 text-blue-600 dark:text-cyan-400 shrink-0" />
                  <span>{team.groupPhoto.location}</span>
                </div>

                {/* Team Member Quick Pills */}
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2">
                    Student Collaborators:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {team.members.filter(m => !m.isGuide).map((m, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-navy-800/80 text-blue-800 dark:text-cyan-300 border border-blue-200/80 dark:border-blue-800 text-xs font-semibold shadow-2xs"
                      >
                        {m.name} {m.prn ? `• ${m.prn}` : ''}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </motion.div>
        )}

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.members.map((member, idx) => {
            const isGuide = member.isGuide;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`group p-6 rounded-2xl bg-white dark:bg-navy-900 border transition-all duration-300 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 ${
                  isGuide 
                    ? 'border-dashed border-blue-300 dark:border-blue-700/60 bg-blue-50/30 dark:bg-navy-900/40' 
                    : 'border-slate-200/90 dark:border-navy-800'
                }`}
              >
                <div className="flex items-start gap-4">
                  {/* Initials Avatar */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-display font-bold text-lg shrink-0 shadow-sm transition-transform group-hover:scale-105 ${
                    isGuide
                      ? 'bg-gradient-to-br from-amber-400 to-amber-600 text-white'
                      : 'bg-gradient-to-br from-blue-600 to-cyan-500 text-white'
                  }`}>
                    {member.initials}
                  </div>

                  {/* Details */}
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display font-bold text-base sm:text-lg text-navy-950 dark:text-white leading-tight">
                        {member.name}
                      </h3>
                      {isGuide ? (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                          Guide
                        </span>
                      ) : (
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-navy-800 text-slate-600 dark:text-slate-400">
                          Student
                        </span>
                      )}
                    </div>

                    {member.prn ? (
                      <div className="text-xs font-mono font-medium text-blue-600 dark:text-cyan-400">
                        PRN: {member.prn}
                      </div>
                    ) : (
                      <div className="text-xs font-medium text-amber-600 dark:text-amber-400 italic">
                        To be added
                      </div>
                    )}

                    <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5 pt-1">
                      <GraduationCap className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{member.role}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Group Photo Lightbox Modal */}
      <AnimatePresence>
        {photoModalOpen && team.groupPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPhotoModalOpen(false)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
          >
            <div 
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-navy-950 rounded-2xl overflow-hidden border border-white/20 shadow-2xl"
            >
              <div className="p-4 flex items-center justify-between border-b border-white/10 text-white">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-cyan-400" />
                  <span className="font-semibold text-sm sm:text-base">{team.groupPhoto.title}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setPhotoModalOpen(false)}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white min-h-[44px] min-w-[44px] flex items-center justify-center transition-colors"
                  aria-label="Close photo preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="max-h-[75vh] overflow-hidden flex items-center justify-center bg-black">
                <img
                  src={team.groupPhoto.src}
                  alt={team.groupPhoto.alt}
                  className="max-h-[75vh] w-full object-contain"
                />
              </div>

              <div className="p-4 bg-navy-950 text-slate-200 text-xs sm:text-sm text-center">
                {team.groupPhoto.caption}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
