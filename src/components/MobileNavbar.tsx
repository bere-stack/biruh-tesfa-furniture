import React from 'react';
import { Home, Image, Phone, Sun, Moon, Sparkles, Languages } from 'lucide-react';

interface MobileNavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  lang: 'EN' | 'AM';
  setLang: (lang: 'EN' | 'AM') => void;
  onOpenQuote: () => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function MobileNavbar({
  darkMode,
  setDarkMode,
  lang,
  setLang,
  onOpenQuote,
  activeSection,
  setActiveSection,
}: MobileNavbarProps) {
  
  const handleScroll = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 64; // header offset
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { id: 'hero', icon: Home, labelEN: 'Home', labelAM: 'ዋና ገጽ' },
    { id: 'gallery', icon: Image, labelEN: 'Gallery', labelAM: 'ምርቶች' },
    { id: 'contact', icon: Phone, labelEN: 'Contact', labelAM: 'አድራሻ' },
  ];

  return (
    <>
      {/* 1. Elegant mobile-only top bar for branding & language toggle */}
      <div className="fixed top-0 left-0 w-full h-16 bg-white/75 dark:bg-[#121212]/80 backdrop-blur-md border-b border-gray-100 dark:border-white/5 z-45 flex items-center justify-between px-5 md:hidden transition-colors">
        
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-crimson-600 to-crimson-800 dark:from-gold-500 dark:to-gold-600 flex items-center justify-center text-white dark:text-[#121212] font-semibold text-sm shadow-sm">
            BT
          </div>
          <div>
            <h2 className="font-serif text-sm font-bold text-crimson-800 dark:text-gold-400">
              {lang === 'EN' ? 'Biruh Tesfa' : 'ብሩህ ተስፋ'}
            </h2>
            <p className="text-[8px] uppercase tracking-wider font-space text-gray-500 dark:text-gray-400">
              Halaba, Ethiopia
            </p>
          </div>
        </div>

        {/* Top actions: Language switcher */}
        <button
          onClick={() => setLang(lang === 'EN' ? 'AM' : 'EN')}
          className="flex items-center space-x-1 px-2.5 py-1 rounded-full border border-gray-150 dark:border-white/10 bg-gray-50/50 dark:bg-white/5 text-gray-700 dark:text-gray-200 text-[11px] font-mono hover:scale-105 active:scale-95 transition-all cursor-pointer"
          id="mobile-lang-btn"
        >
          <Languages size={12} className="text-crimson-600 dark:text-gold-400" />
          <span>{lang === 'EN' ? 'አማርኛ' : 'EN'}</span>
        </button>
      </div>

      {/* 2. Floating Bottom Mobile Navigation Bar */}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 w-[92%] max-w-md bg-white/80 dark:bg-[#121212]/90 backdrop-blur-lg border border-gray-200/30 dark:border-white/10 rounded-2xl md:hidden shadow-[0_12px_40px_rgba(0,0,0,0.12)] z-45 px-2 py-2 flex items-center justify-around transition-colors">
        {navItems.map((item) => {
          const isSelected = activeSection === item.id;
          const IconComponent = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="flex flex-col items-center justify-center py-1.5 px-3 rounded-xl transition-all cursor-pointer relative"
              id={`mobile-nav-${item.id}`}
            >
              <IconComponent 
                size={20} 
                className={`transition-colors duration-250 ${
                  isSelected 
                    ? 'text-crimson-600 dark:text-gold-400 scale-110' 
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-100'
                }`} 
              />
              <span className={`text-[9px] font-space mt-1 transition-all ${
                isSelected 
                  ? 'text-crimson-700 dark:text-gold-400 font-bold' 
                  : 'text-gray-500 dark:text-gray-400'
              }`}>
                {lang === 'EN' ? item.labelEN : item.labelAM}
              </span>
              {isSelected && (
                <span className="absolute -bottom-1 w-5 h-1 rounded-full bg-crimson-600 dark:bg-gold-400" />
              )}
            </button>
          );
        })}

        {/* Dynamic Theme Switcher Tab */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="flex flex-col items-center justify-center py-1.5 px-3 rounded-xl hover:scale-105 active:scale-95 transition-all text-gray-500 dark:text-gray-400 cursor-pointer"
          title="Theme Toggle"
          id="mobile-nav-theme"
        >
          {darkMode ? (
            <Sun size={20} className="text-gold-400 animate-pulse" />
          ) : (
            <Moon size={20} className="text-crimson-700" />
          )}
          <span className="text-[9px] font-space mt-1 text-gray-500 dark:text-gray-400">
            {lang === 'EN' ? 'Theme' : 'ገጽታ'}
          </span>
        </button>

        {/* Floating Custom Request Action Button */}
        <button
          onClick={onOpenQuote}
          className="flex flex-col items-center justify-center py-1 rounded-xl bg-gradient-to-tr from-crimson-700 to-crimson-500 dark:from-gold-500 dark:to-gold-600 h-11 w-11 text-white dark:text-[#121212] rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer relative"
          id="mobile-nav-quote"
        >
          <Sparkles size={18} className="animate-pulse" />
          <span className="absolute -bottom-5 text-[8px] whitespace-nowrap font-medium text-crimson-700 dark:text-gold-400">
            {lang === 'EN' ? 'Order' : 'ይዘዙ'}
          </span>
        </button>
      </div>
    </>
  );
}
