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
      setIsScrolled(window.scrollY > 20);

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
            ? 'glass-nav shadow-soft py-3' 
            : 'bg-white/80 dark:bg-navy-950/80 backdrop-blur-md py-4'
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo / Project Identification */}
          <a 
            href="#hero" 
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200">
              <Beaker className="w-5 h-5" />
            </div>
            <div>
              <span className="block font-display font-bold text-base sm:text-lg text-navy-950 dark:text-white leading-tight">
                Chemix
              </span>
              <span className="block text-xs text-blue-600 dark:text-cyan-400 font-medium">
                Liquid Detergent Proto
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center gap-1 bg-slate-100/70 dark:bg-navy-900/60 p-1.5 rounded-full border border-slate-200/60 dark:border-navy-800">
            {projectContent.header.navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400'
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
              className="w-11 h-11 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-navy-900 border border-slate-200 dark:border-navy-800 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label={darkMode ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
            </button>

            {/* Minor Project Badge (Desktop) */}
            <span className="hidden md:inline-flex items-center text-xs font-semibold px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-navy-900 text-blue-700 dark:text-cyan-300 border border-blue-200 dark:border-blue-800/50">
              MIT AoE 2026–27
            </span>

            {/* Mobile Menu Hamburger Button (Min 44x44px touch target) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden w-11 h-11 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-navy-900 border border-slate-200 dark:border-navy-800 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-cyan-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu (Mobile-first responsive drawer) */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[65px] bg-white/95 dark:bg-navy-950/95 backdrop-blur-xl border-b border-slate-200 dark:border-navy-800 shadow-xl max-h-[calc(100vh-70px)] overflow-y-auto animate-in slide-in-from-top-4 duration-200">
          <div className="px-5 py-6 space-y-2">
            <div className="pb-3 mb-2 border-b border-slate-200 dark:border-navy-800">
              <span className="text-xs uppercase tracking-wider text-slate-400 dark:text-slate-400 font-semibold">
                Project Sections
              </span>
            </div>
            {projectContent.header.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className="flex items-center justify-between min-h-[44px] px-3 py-2.5 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-navy-900 hover:text-blue-600 dark:hover:text-cyan-400 font-medium text-sm transition-colors"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}
            <div className="pt-4 border-t border-slate-200 dark:border-navy-800 text-xs text-slate-500 dark:text-slate-400">
              School of Chemical Engineering • MIT AoE
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
