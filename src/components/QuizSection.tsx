import React, { useState } from 'react';
import { 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  RotateCcw, 
  Sparkles, 
  Award, 
  Lightbulb, 
  BookOpen
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectContent } from '../data/content';

export const QuizSection: React.FC = () => {
  const { quiz } = projectContent;
  const questions = quiz.questions;

  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQ = questions[currentIdx];

  const handleSelectOption = (idx: number) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(idx);
    setIsAnswerSubmitted(true);
    if (idx === currentQ.correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    } else {
      setIsCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setIsCompleted(false);
  };

  const progressPercent = Math.round(((currentIdx + 1) / questions.length) * 100);

  const getScoreSummary = () => {
    const percentage = Math.round((score / questions.length) * 100);
    if (percentage === 100) {
      return {
        badge: "Perfect Score! 🏆",
        title: "Master Chemical Formulator",
        desc: "Outstanding comprehension of surfactant kinetics, stoichiometric calculations, and lab safety."
      };
    }
    if (percentage >= 65) {
      return {
        badge: "High Distinction 🌟",
        title: "Chemical Prototyping Specialist",
        desc: "Great grasp of liquid detergent formulation, agitation parameters, and reaction mechanisms."
      };
    }
    return {
      badge: "Formulation Apprentice 🔬",
      title: "Good Lab Effort",
      desc: "Review the formulation theory, stoichiometric batch table, and safety data sheets to enhance your knowledge."
    };
  };

  return (
    <section id="quiz" className="py-20 bg-gradient-to-b from-white via-slate-50 to-blue-50/40 dark:from-[#060e1a] dark:via-[#091528] dark:to-[#060e1a] relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-1/3 -right-24 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-10 -left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 space-y-3"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-navy-900 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Interactive Knowledge Check</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-navy-950 dark:text-white">
            {quiz.sectionTitle}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            {quiz.subtitle}
          </p>
        </motion.div>

        {/* Main Card */}
        <div className="rounded-3xl bg-white dark:bg-navy-900 border border-slate-200/90 dark:border-navy-800 shadow-soft-lg p-6 sm:p-10 relative overflow-hidden">
          
          {!isCompleted ? (
            <div>
              {/* Progress & Stat Bar */}
              <div className="mb-8 space-y-3">
                <div className="flex items-center justify-between text-xs sm:text-sm font-semibold">
                  <span className="text-blue-600 dark:text-cyan-400 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4" />
                    Question {currentIdx + 1} of {questions.length}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-navy-800 text-slate-600 dark:text-slate-300 text-xs">
                      {currentQ.topicBadge}
                    </span>
                    <span className="font-mono text-slate-700 dark:text-slate-300">
                      Score: <strong className="text-blue-600 dark:text-cyan-400">{score}</strong>
                    </span>
                  </div>
                </div>

                {/* Animated Progress Bar */}
                <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-navy-950 overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-blue-600 to-cyan-400"
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercent}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              {/* Question Text */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIdx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h3 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-navy-950 dark:text-white leading-snug">
                    {currentQ.question}
                  </h3>

                  {/* Options List */}
                  <div className="grid grid-cols-1 gap-3 sm:gap-4">
                    {currentQ.options.map((option, optIdx) => {
                      const letter = String.fromCharCode(65 + optIdx);
                      const isSelected = selectedOption === optIdx;
                      const isCorrect = optIdx === currentQ.correctIndex;

                      let buttonStyles = "border-slate-200 dark:border-navy-800 hover:border-blue-400 dark:hover:border-blue-600 bg-white/70 dark:bg-navy-900/60 hover:bg-blue-50/50 dark:hover:bg-navy-800/80 text-slate-800 dark:text-slate-200";

                      if (isAnswerSubmitted) {
                        if (isCorrect) {
                          buttonStyles = "border-emerald-500 bg-emerald-50/80 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 font-semibold ring-1 ring-emerald-500/40";
                        } else if (isSelected) {
                          buttonStyles = "border-rose-500 bg-rose-50/80 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200 font-semibold ring-1 ring-rose-500/40";
                        } else {
                          buttonStyles = "border-slate-200/60 dark:border-navy-800/60 opacity-60 bg-white dark:bg-navy-900 text-slate-500";
                        }
                      }

                      return (
                        <button
                          key={optIdx}
                          type="button"
                          onClick={() => handleSelectOption(optIdx)}
                          disabled={isAnswerSubmitted}
                          className={`w-full text-left p-4 sm:p-4.5 rounded-2xl border transition-all duration-200 flex items-center justify-between gap-4 group min-h-[52px] ${buttonStyles}`}
                        >
                          <div className="flex items-center gap-3.5">
                            <span className={`w-8 h-8 rounded-xl font-mono text-xs font-bold flex items-center justify-center shrink-0 transition-colors ${
                              isAnswerSubmitted && isCorrect
                                ? 'bg-emerald-600 text-white'
                                : isAnswerSubmitted && isSelected
                                ? 'bg-rose-600 text-white'
                                : 'bg-slate-100 dark:bg-navy-800 group-hover:bg-blue-600 group-hover:text-white text-slate-600 dark:text-slate-300'
                            }`}>
                              {letter}
                            </span>
                            <span className="text-xs sm:text-sm font-medium leading-relaxed">
                              {option}
                            </span>
                          </div>

                          {/* Result Icons */}
                          {isAnswerSubmitted && (
                            <div className="shrink-0">
                              {isCorrect ? (
                                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 animate-scale-in" />
                              ) : isSelected ? (
                                <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 animate-scale-in" />
                              ) : null}
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Chemical Explanation Box (Appears after answer) */}
                  {isAnswerSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-4 sm:p-5 rounded-2xl bg-blue-50/80 dark:bg-navy-950/80 border border-blue-200/80 dark:border-blue-900/60 text-slate-700 dark:text-slate-200 text-xs sm:text-sm space-y-1.5"
                    >
                      <div className="flex items-center gap-2 font-bold text-blue-700 dark:text-cyan-300">
                        <Lightbulb className="w-4 h-4 text-blue-600 dark:text-cyan-400 shrink-0" />
                        <span>Mechanism &amp; Laboratory Insight</span>
                      </div>
                      <p className="leading-relaxed pl-6">
                        {currentQ.explanation}
                      </p>
                    </motion.div>
                  )}

                  {/* Bottom Action Footer */}
                  <div className="pt-4 flex items-center justify-between">
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {isAnswerSubmitted ? "Click Next to proceed" : "Select an answer to see instant verification"}
                    </span>

                    {isAnswerSubmitted && (
                      <button
                        type="button"
                        onClick={handleNext}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-soft transition-all duration-200 hover:gap-3 min-h-[44px]"
                      >
                        <span>{currentIdx < questions.length - 1 ? 'Next Question' : 'View Results'}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          ) : (
            /* Results Screen */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="text-center py-6 sm:py-8 space-y-6"
            >
              <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-white shadow-glow">
                <Award className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100 dark:bg-navy-800 text-blue-700 dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
                  {getScoreSummary().badge}
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-navy-950 dark:text-white">
                  {getScoreSummary().title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-lg mx-auto">
                  {getScoreSummary().desc}
                </p>
              </div>

              {/* Score Display Card */}
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-navy-950/80 border border-slate-200 dark:border-navy-800 max-w-sm mx-auto flex items-center justify-around">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-display font-extrabold text-blue-600 dark:text-cyan-400">
                    {score} / {questions.length}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">
                    Correct Answers
                  </div>
                </div>
                <div className="h-10 w-px bg-slate-200 dark:bg-navy-800" />
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-display font-extrabold text-navy-950 dark:text-white">
                    {Math.round((score / questions.length) * 100)}%
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">
                    Accuracy Rate
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={handleRestart}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-soft transition-all duration-200 min-h-[44px]"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Retake Lab Quiz</span>
                </button>

                <a
                  href="#theory"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-100 dark:bg-navy-800 hover:bg-slate-200 dark:hover:bg-navy-700 text-slate-800 dark:text-slate-200 font-semibold text-sm transition-all duration-200 min-h-[44px]"
                >
                  <BookOpen className="w-4 h-4 text-blue-500" />
                  <span>Review Formulation Theory</span>
                </a>
              </div>
            </motion.div>
          )}

        </div>

      </div>
    </section>
  );
};
