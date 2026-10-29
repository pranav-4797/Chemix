import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { TeamSection } from './components/TeamSection';
import { IngredientsSection } from './components/IngredientsSection';
import { ApparatusSection } from './components/ApparatusSection';
import { TheorySection } from './components/TheorySection';
import { ProcessSection } from './components/ProcessSection';
import { GallerySection } from './components/GallerySection';
import { ObservationsSection } from './components/ObservationsSection';
import { DiscussionSection } from './components/DiscussionSection';
import { SafetySection } from './components/SafetySection';
import { ConclusionSection } from './components/ConclusionSection';
import { VideoSection } from './components/VideoSection';
import { ReferencesSection } from './components/ReferencesSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  // Theme state with local storage persistence
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('chemix-theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('chemix-theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('chemix-theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#060e1a] text-slate-800 dark:text-slate-100 font-sans selection:bg-blue-600 selection:text-white transition-colors duration-300">
      {/* Sticky Translucent Navbar with Scroll Progress */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main Content Sections (Strict Order) */}
      <main>
        {/* 1. HERO */}
        <Hero />

        {/* 2. ABOUT / INTRODUCTION */}
        <AboutSection />

        {/* 3. TEAM */}
        <TeamSection />

        {/* 4. INGREDIENTS */}
        <IngredientsSection />

        {/* 5. APPARATUS */}
        <ApparatusSection />

        {/* 6. THEORY */}
        <TheorySection />

        {/* 7. PROCESS / METHODOLOGY */}
        <ProcessSection />

        {/* 8. PHOTO GALLERY */}
        <GallerySection />

        {/* 9. RESULTS AND OBSERVATIONS */}
        <ObservationsSection />

        {/* 10. DISCUSSION AND LIMITATIONS */}
        <DiscussionSection />

        {/* 11. SAFETY AND WASTE DISPOSAL */}
        <SafetySection />

        {/* 12. CONCLUSION AND FUTURE SCOPE */}
        <ConclusionSection />

        {/* 13. VIDEO */}
        <VideoSection />

        {/* 14. REFERENCES */}
        <ReferencesSection />
      </main>

      {/* 15. FOOTER */}
      <Footer />
    </div>
  );
};

export default App;
