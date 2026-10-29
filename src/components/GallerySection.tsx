import React, { useState, useEffect, useCallback } from 'react';
import { 
  Camera, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Maximize2
} from 'lucide-react';
import { projectContent } from '../data/content';

export const GallerySection: React.FC = () => {
  const { gallery } = projectContent;
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setSelectedPhotoIndex(null);
    document.body.style.overflow = 'auto';
  }, []);

  const showNext = useCallback(() => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % gallery.photos.length);
    }
  }, [selectedPhotoIndex, gallery.photos.length]);

  const showPrev = useCallback(() => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex(
        (selectedPhotoIndex - 1 + gallery.photos.length) % gallery.photos.length
      );
    }
  }, [selectedPhotoIndex, gallery.photos.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex, closeLightbox, showNext, showPrev]);

  // Mobile Touch Swipe Handling
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (diff > 50) {
      showNext();
    } else if (diff < -50) {
      showPrev();
    }
    setTouchStartX(null);
  };

  const currentPhoto = selectedPhotoIndex !== null ? gallery.photos[selectedPhotoIndex] : null;

  return (
    <section id="gallery" className="py-20 bg-white dark:bg-[#060e1a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-navy-900 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Camera className="w-3.5 h-3.5" />
            <span>Photographic Evidence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-navy-950 dark:text-white">
            {gallery.sectionTitle}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            {gallery.subtitle}
          </p>
          <div className="text-xs text-slate-500 dark:text-slate-400">
            {gallery.note}
          </div>
        </div>

        {/* Responsive Grid / Masonry Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {gallery.photos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(index)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-slate-50 dark:bg-navy-900 border border-slate-200/90 dark:border-navy-800 shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between"
            >
              {/* Photo Image Frame */}
              <div className="relative aspect-[3/4] overflow-hidden bg-slate-900">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />

                {/* Figure badge overlay */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-navy-950/80 backdrop-blur-xs text-cyan-300 text-xs font-mono font-bold shadow">
                  {photo.figNumber}
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-blue-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="p-2.5 rounded-full bg-white/90 text-navy-950 shadow-md transform scale-90 group-hover:scale-100 transition-transform">
                    <Maximize2 className="w-5 h-5" />
                  </span>
                </div>
              </div>

              {/* Photo Caption & Info */}
              <div className="p-4 space-y-1.5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-sm text-navy-950 dark:text-white leading-snug">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-3 mt-1 leading-relaxed">
                    {photo.caption}
                  </p>
                </div>
                <div className="pt-2 text-[11px] font-semibold text-blue-600 dark:text-cyan-400">
                  Click to inspect full photo →
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal (Keyboard + Touch Swipe) */}
      {currentPhoto && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          role="dialog"
          aria-modal="true"
          aria-label={currentPhoto.title}
        >
          {/* Lightbox Top Bar */}
          <div className="flex items-center justify-between text-white max-w-6xl mx-auto w-full pt-2">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-lg bg-blue-600 text-xs font-mono font-bold">
                {currentPhoto.figNumber}
              </span>
              <span className="text-sm font-semibold truncate hidden sm:inline">
                {currentPhoto.title}
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs">
              <span className="text-slate-400">
                {(selectedPhotoIndex ?? 0) + 1} of {gallery.photos.length}
              </span>
              <button
                type="button"
                onClick={closeLightbox}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                aria-label="Close Lightbox (Esc)"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Lightbox Center Content with Arrows */}
          <div className="relative flex-1 flex items-center justify-center max-w-5xl mx-auto w-full my-4">
            {/* Prev Arrow */}
            <button
              type="button"
              onClick={showPrev}
              className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-sm transition-transform active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Previous photograph (Left Arrow)"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Displayed Image */}
            <div className="max-h-[70vh] sm:max-h-[75vh] w-auto overflow-hidden rounded-2xl border border-white/10 shadow-2xl flex items-center justify-center bg-black">
              <img
                src={currentPhoto.src}
                alt={currentPhoto.alt}
                className="max-h-[70vh] sm:max-h-[75vh] w-auto object-contain select-none"
              />
            </div>

            {/* Next Arrow */}
            <button
              type="button"
              onClick={showNext}
              className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-sm transition-transform active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Next photograph (Right Arrow)"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Bottom Caption Bar */}
          <div className="max-w-3xl mx-auto w-full bg-navy-950/80 p-4 rounded-xl border border-white/10 text-center text-white backdrop-blur-md">
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
              {currentPhoto.caption}
            </p>
            <div className="mt-1 text-[11px] text-cyan-400 font-mono">
              Use ← / → keys or swipe on mobile to navigate
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
