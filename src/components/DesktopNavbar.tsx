import React from 'react';
import { Sun, Moon, Languages, Sparkles, MessageSquare } from 'lucide-react';

interface DesktopNavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  lang: 'EN' | 'AM';
  setLang: (lang: 'EN' | 'AM') => void;
  onOpenQuote: () => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function DesktopNavbar({
  darkMode,
  setDarkMode,
  lang,
  setLang,
  onOpenQuote,
  activeSection,
  setActiveSection,
}: DesktopNavbarProps) {
  const scrollSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 80; // height of fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { id: 'hero', en: 'Home', am: 'ዋና ገጽ' },
    { id: 'gallery', en: 'Gallery Collection', am: 'ምርቶች ስብስብ' },
    { id: 'about', en: 'Our Story', am: 'ስለ እኛ' },
    { id: 'contact', en: 'Connect Hub', am: 'አድራሻና ግንኙነት' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-45 hidden md:block border-b border-white/5 dark:border-white/5 bg-white/75 dark:bg-[#121212]/80 backdrop-blur-md transition-colors duration-350">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Brand Identity */}
        <div 
          onClick={() => scrollSection('hero')} 
          className="flex items-center space-x-2.5 cursor-pointer group"
          id="desktop-logo"
        >
          <div className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-crimson-700 to-crimson-900 dark:from-gold-500 dark:to-gold-600 flex items-center justify-center text-white dark:text-[#121212] overflow-hidden shadow-md">
            <span className="font-serif font-bold text-lg">BT</span>
            <div className="absolute -inset-1 bg-white/10 rotate-12 translate-x-full group-hover:translate-x-[-150%] transition-transform duration-1000" />
          </div>
          <div>
            <h1 className="font-serif text-lg font-bold tracking-tight text-crimson-800 dark:text-gold-400 group-hover:text-crimson-600 dark:group-hover:text-gold-300 transition-colors">
              {lang === 'EN' ? 'Biruh Tesfa' : 'ብሩህ ተስፋ'}
            </h1>
            <p className="text-[10px] uppercase tracking-wider font-space text-gray-500 dark:text-gray-400">
              {lang === 'EN' ? 'Furniture Showroom' : 'የእንጨት እቃዎች'}
            </p>
          </div>
        </div>

        {/* Middle Navigation */}
        <nav className="flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollSection(link.id)}
                className={`relative py-1 font-space text-sm tracking-wide transition-all duration-300 cursor-pointer ${
                  isActive 
                    ? 'text-crimson-700 dark:text-gold-400 font-medium' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-crimson-600 dark:hover:text-gold-350'
                }`}
                id={`nav-${link.id}`}
              >
                {lang === 'EN' ? link.en : link.am}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-crimson-600 to-crimson-700 dark:from-gold-400 dark:to-gold-500 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center space-x-5">
          {/* Language Switch */}
          <button
            onClick={() => setLang(lang === 'EN' ? 'AM' : 'EN')}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full border border-gray-200 dark:border-white/10 hover:border-crimson-500 dark:hover:border-gold-500/50 hover:bg-gray-50 dark:hover:bg-white/5 text-gray-700 dark:text-gray-200 transition-all duration-300 cursor-pointer"
            title="Switch Language"
            id="lang-btn"
          >
            <Languages size={15} className="text-crimson-600 dark:text-gold-400" />
            <span className="text-xs font-mono font-medium">
              {lang === 'EN' ? 'አማርኛ' : 'EN'}
            </span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5 text-gray-700 dark:text-gray-200 transition-all cursor-pointer"
            title={lang === 'EN' ? 'Toggle Theme' : 'ገጽታ ቀይር'}
            id="theme-btn-desktop"
          >
            {darkMode ? (
              <Sun size={17} className="text-gold-400" />
            ) : (
              <Moon size={17} className="text-crimson-700" />
            )}
          </button>

          {/* Premium Consultation Inquiry */}
          <button
            onClick={onOpenQuote}
            className="relative px-4 py-2 rounded-lg bg-gradient-to-r from-crimson-750 to-crimson-600 dark:from-gold-500 dark:to-gold-600 text-white dark:text-[#121212] font-space text-xs font-medium tracking-wide shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer overflow-hidden group/btn flex items-center space-x-1"
            id="quote-btn-desktop"
          >
            <Sparkles size={13} className="animate-pulse" />
            <span>{lang === 'EN' ? 'Custom Request' : 'ትዕዛዝ ይስጡ'}</span>
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/20 opacity-40 group-hover/btn:animate-shine" />
          </button>
        </div>

      </div>
    </header>
  );
}
