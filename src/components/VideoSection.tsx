import React, { useState, useRef, useEffect } from 'react';
import { Video, ExternalLink, Play, HardDrive, Film, VolumeX, Volume2, RotateCcw } from 'lucide-react';
import { motion } from 'framer-motion';
import { projectContent } from '../data/content';

export const VideoSection: React.FC = () => {
  const { video } = projectContent;
  const [sourceMode, setSourceMode] = useState<'process' | 'prototype' | 'drive'>('process');
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Ensure autoplay loop starts immediately when mode is process
  useEffect(() => {
    if (videoRef.current && sourceMode === 'process') {
      videoRef.current.muted = isMuted;
      videoRef.current.play().catch(() => {
        // Autoplay policy handled silently
      });
    }
  }, [sourceMode, isMuted]);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section 
      id="video" 
      className="py-20 bg-slate-50/70 dark:bg-[#081220] relative border-b border-slate-200/80 dark:border-slate-800/80 scroll-mt-20"
    >
      {/* Anchor for Hero CTA */}
      <div id="process-video-view" className="absolute -top-24 left-0 w-1 h-1 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 space-y-2.5"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-navy-900 border border-slate-200 dark:border-navy-800 text-slate-700 dark:text-slate-300 text-xs font-medium">
            <Video className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
            <span>Process execution recording</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-navy-950 dark:text-white">
            {video.sectionTitle}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            {video.subtitle}
          </p>
        </motion.div>

        {/* Large Widescreen Video Player Container (Cinema Format) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-5xl lg:max-w-6xl mx-auto rounded-3xl overflow-hidden bg-white dark:bg-navy-900 border border-slate-200/90 dark:border-navy-800 shadow-xl"
        >
          
          {/* Top Bar with Mode Switcher & Controls */}
          <div className="px-4 sm:px-6 py-3.5 bg-slate-100/90 dark:bg-navy-950 border-b border-slate-200 dark:border-navy-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setSourceMode('process')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2 transition-colors min-h-[38px] ${
                  sourceMode === 'process'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-cyan-400 bg-white/70 dark:bg-navy-900'
                }`}
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Live Process Video (Autoplay)</span>
              </button>

              <button
                type="button"
                onClick={() => setSourceMode('prototype')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2 transition-colors min-h-[38px] ${
                  sourceMode === 'prototype'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-cyan-400 bg-white/70 dark:bg-navy-900'
                }`}
              >
                <HardDrive className="w-3.5 h-3.5" />
                <span>Prototype Presentation</span>
              </button>

              <button
                type="button"
                onClick={() => setSourceMode('drive')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2 transition-colors min-h-[38px] ${
                  sourceMode === 'drive'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-cyan-400 bg-white/70 dark:bg-navy-900'
                }`}
              >
                <Film className="w-3.5 h-3.5" />
                <span>Google Drive Stream</span>
              </button>
            </div>

            <div className="flex items-center gap-2.5">
              {sourceMode === 'process' && (
                <button
                  type="button"
                  onClick={toggleSound}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-700 text-slate-700 dark:text-slate-300 hover:text-blue-600 text-xs font-medium transition-colors min-h-[38px]"
                  title={isMuted ? "Unmute audio" : "Mute audio"}
                >
                  {isMuted ? (
                    <>
                      <VolumeX className="w-3.5 h-3.5 text-slate-500" />
                      <span>Muted (No sound)</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-3.5 h-3.5 text-blue-600" />
                      <span>Sound On</span>
                    </>
                  )}
                </button>
              )}

              <a
                href={video.driveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-700 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 text-xs font-medium transition-colors min-h-[38px]"
              >
                <span>Drive Link</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Massive 16:9 Cinema-Scale Video Frame */}
          <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
            {sourceMode === 'process' && (
              <>
                <video
                  ref={videoRef}
                  autoPlay
                  muted={isMuted}
                  loop
                  playsInline
                  controls
                  poster="/images/fig-5-1.jpeg"
                  className="w-full h-full object-contain"
                  preload="auto"
                >
                  <source src={video.processVideoUrl || "/video/process-video.mp4"} type="video/mp4" />
                  Your browser does not support HTML5 video streaming.
                </video>

                {/* Floating Tachometer Readout Badge */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 text-white text-xs font-mono font-bold pointer-events-none shadow-md">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span>970 RPM Agitation Vortex</span>
                  <span className="text-[10px] text-slate-400 uppercase font-sans">Looping</span>
                </div>
              </>
            )}

            {sourceMode === 'prototype' && (
              <video
                controls
                playsInline
                className="w-full h-full object-contain"
                preload="metadata"
              >
                <source src={video.presentationVideoUrl} type="video/mp4" />
                Your browser does not support HTML5 video streaming. Please switch to Google Drive Stream.
              </video>
            )}

            {sourceMode === 'drive' && (
              <iframe
                src={video.driveEmbedUrl}
                title="Liquid Detergent Prototype Lab Recording"
                className="w-full h-full border-0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            )}
          </div>

          {/* Video Metadata / Caption Footer */}
          <div className="p-5 sm:p-6 bg-slate-50 dark:bg-navy-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-cyan-400">
                <RotateCcw className="w-3.5 h-3.5" />
                <span>
                  {sourceMode === 'process' 
                    ? 'Continuous Agitation & Vortex Mixing Demonstration (~970 RPM)' 
                    : sourceMode === 'prototype'
                    ? 'Laboratory Prototyping Presentation'
                    : 'Institutional Google Drive Archival Player'}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                {sourceMode === 'process'
                  ? 'Real-time observation of the magnetic stirrer forming a uniform vortex, accelerating surfactant micelle formation and reagent dissolution.'
                  : video.caption}
              </p>
            </div>

            <a
              href={video.driveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm shadow-sm transition-colors flex items-center gap-2 min-h-[44px]"
            >
              <Play className="w-3.5 h-3.5 fill-white" />
              <span>Full Archive</span>
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
