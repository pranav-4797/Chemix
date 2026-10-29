import React, { useState } from 'react';
import { Video, ExternalLink, Play, HardDrive, Film, Sparkles } from 'lucide-react';
import { projectContent } from '../data/content';

export const VideoSection: React.FC = () => {
  const { video } = projectContent;
  const [sourceMode, setSourceMode] = useState<'drive' | 'local'>('drive');

  return (
    <section id="video" className="py-20 bg-slate-50/70 dark:bg-[#081220] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-navy-900 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Video className="w-3.5 h-3.5" />
            <span>Project Video Documentation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-navy-950 dark:text-white">
            {video.sectionTitle}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            {video.subtitle}
          </p>
        </div>

        {/* Video Player Container */}
        <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden bg-white dark:bg-navy-900 border border-slate-200/90 dark:border-navy-800 shadow-soft-lg">
          
          {/* Player Source Selector Tabs */}
          <div className="px-6 py-3.5 bg-slate-100/80 dark:bg-navy-950 border-b border-slate-200 dark:border-navy-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setSourceMode('drive')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                  sourceMode === 'drive'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-cyan-400'
                }`}
              >
                <Film className="w-3.5 h-3.5" />
                <span>Google Drive Stream</span>
              </button>

              <button
                type="button"
                onClick={() => setSourceMode('local')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                  sourceMode === 'local'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-cyan-400'
                }`}
              >
                <HardDrive className="w-3.5 h-3.5" />
                <span>Local Lab Recording (87s)</span>
              </button>
            </div>

            {/* External Drive Link Button */}
            <a
              href={video.driveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-700 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-cyan-400 text-xs font-medium transition-colors"
            >
              <span>Open in Drive</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* 16:9 Aspect Ratio Video Frame */}
          <div className="relative aspect-video w-full bg-black flex items-center justify-center">
            {sourceMode === 'drive' ? (
              <iframe
                src={video.driveEmbedUrl}
                title="Liquid Detergent Prototype Lab Recording"
                className="w-full h-full border-0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            ) : (
              <video
                controls
                className="w-full h-full object-contain"
                preload="metadata"
              >
                <source src={video.localVideoUrl} type="video/mp4" />
                Your browser does not support HTML5 video streaming. Please use the Google Drive link above.
              </video>
            )}
          </div>

          {/* Video Metadata / Caption Footer */}
          <div className="p-5 sm:p-6 bg-slate-50 dark:bg-navy-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-cyan-400">
                <Sparkles className="w-4 h-4" />
                <span>Documented Lab Session Presentation</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                {video.caption}
              </p>
            </div>

            <a
              href={video.driveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm shadow-soft transition-all duration-200 flex items-center gap-2 min-h-[44px]"
            >
              <Play className="w-3.5 h-3.5 fill-white" />
              <span>Watch on Google Drive</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
