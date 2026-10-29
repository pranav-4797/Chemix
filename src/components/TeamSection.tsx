import { Users, GraduationCap } from 'lucide-react';
import { projectContent } from '../data/content';

export const TeamSection: React.FC = () => {
  const { team } = projectContent;

  return (
    <section id="team" className="py-20 bg-slate-50/70 dark:bg-[#081220] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-navy-900 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5" />
            <span>Project Collaborators</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-navy-950 dark:text-white">
            {team.sectionTitle}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            {team.subtitle}
          </p>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.members.map((member, idx) => {
            const isGuide = member.isGuide;

            return (
              <div
                key={idx}
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
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
