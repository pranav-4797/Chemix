import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Beaker, ChevronRight } from 'lucide-react';
import { projectContent } from '../data/content';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
      setIsScrolled(window.scrollY > 40);

      // Determine active section based on scroll position
      const sections = projectContent.header.navLinks.map(l => l.href.substring(1));
      const current = sections.find(id => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 160 && rect.bottom >= 160;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Scroll Progress Bar */}
      <div 
        className="h-1 bg-gradient-to-r from-cyan-400 via-blue-600 to-sky-400 origin-left transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <nav 
        className={`w-full px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 dark:bg-[#060e1a]/95 backdrop-blur-md shadow-md py-3 border-b border-slate-200/80 dark:border-navy-800' 
            : 'bg-transparent py-4 sm:py-5 border-transparent'
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo / Project Identification */}
          <a 
            href="#hero" 
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-200">
              <Beaker className="w-5 h-5" />
            </div>
            <div>
              <span className={`block font-display font-bold text-base sm:text-lg leading-tight transition-colors ${
                isScrolled ? 'text-navy-950 dark:text-white' : 'text-white drop-shadow-xs'
              }`}>
                Chemix
              </span>
              <span className="block text-xs text-cyan-400 font-medium">
                Liquid Detergent Proto
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className={`hidden xl:flex items-center gap-1 p-1.5 rounded-full transition-all duration-300 ${
            isScrolled
              ? 'bg-slate-100/80 dark:bg-navy-900/80 border border-slate-200/80 dark:border-navy-800'
              : 'bg-black/35 backdrop-blur-md border border-white/20 shadow-md'
          }`}>
            {projectContent.header.navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? isScrolled
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'bg-cyan-500 text-navy-950 font-bold shadow-sm'
                      : isScrolled
                      ? 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400'
                      : 'text-white/85 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Action Controls: Dark Mode Toggle & Mobile Menu Trigger */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Dark / Light Toggle */}
            <button
              type="button"
              onClick={() => setDarkMode(!darkMode)}
              className={`w-11 h-11 flex items-center justify-center rounded-xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                isScrolled
                  ? 'bg-slate-100 dark:bg-navy-900 border border-slate-200 dark:border-navy-800 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-cyan-400'
                  : 'bg-black/35 backdrop-blur-md border border-white/20 text-white hover:text-cyan-400 shadow-sm'
              }`}
              aria-label={darkMode ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-amber-300" />}
            </button>

            {/* Minor Project Badge (Desktop) */}
            <span className={`hidden md:inline-flex items-center text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors ${
              isScrolled
                ? 'bg-blue-50 dark:bg-navy-900 text-blue-700 dark:text-cyan-300 border border-blue-200 dark:border-blue-800/50'
                : 'bg-black/35 backdrop-blur-md text-cyan-300 border border-white/20 shadow-sm'
            }`}>
              MIT AoE 2026–27
            </span>

            {/* Mobile Menu Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`xl:hidden w-11 h-11 flex items-center justify-center rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                isScrolled
                  ? 'bg-slate-100 dark:bg-navy-900 border border-slate-200 dark:border-navy-800 text-slate-700 dark:text-slate-200 hover:text-blue-600'
                  : 'bg-black/35 backdrop-blur-md border border-white/20 text-white hover:text-cyan-400 shadow-sm'
              }`}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[68px] bg-navy-950/98 text-white backdrop-blur-xl border-b border-navy-800 shadow-2xl max-h-[calc(100vh-70px)] overflow-y-auto animate-in slide-in-from-top-4 duration-200">
          <div className="px-5 py-6 space-y-2">
            <div className="pb-3 mb-2 border-b border-navy-800 flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider text-cyan-400 font-semibold">
                Project Sections
              </span>
              <span className="text-xs text-slate-400">
                SY B.Tech
              </span>
            </div>

            {projectContent.header.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-white/10 transition-colors text-sm font-medium text-slate-200 hover:text-cyan-300"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
