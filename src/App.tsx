import React, { useState, useEffect } from 'react';
import DesktopNavbar from './components/DesktopNavbar';
import MobileNavbar from './components/MobileNavbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import AboutBrand from './components/AboutBrand';
import ContactHub from './components/ContactHub';
import QuoteModal from './components/QuoteModal';
import { BRAND_CONTACTS } from './data';
import { Award, ShieldCheck, HeartHandshake, Phone, ArrowUp, Sparkles, Languages, Sun, Moon } from 'lucide-react';

export default function App() {
  // Dual layout customization preferences
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('bt_furniture_theme');
    if (saved) return saved === 'dark';
    // Fallback default: dark luxury
    return true;
  });

  const [lang, setLang] = useState<'EN' | 'AM'>(() => {
    const saved = localStorage.getItem('bt_furniture_lang');
    return (saved === 'AM') ? 'AM' : 'EN';
  });

  const [activeSection, setActiveSection] = useState('hero');
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedProductForQuote, setSelectedProductForQuote] = useState<string>('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Synchronize theme configuration onto root document
  useEffect(() => {
    localStorage.setItem('bt_furniture_theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Synchronize language selection
  useEffect(() => {
    localStorage.setItem('bt_furniture_lang', lang);
  }, [lang]);

  // Handle active navigation scrolling observer
  useEffect(() => {
    const handleScroll = () => {
      // Toggle back-to-top button
      setShowScrollTop(window.scrollY > 500);

      const sections = ['hero', 'gallery', 'about', 'contact'];
      const scrollPosition = window.scrollY + 120; // anchor offset trigger

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenGeneralQuote = () => {
    setSelectedProductForQuote('');
    setIsQuoteOpen(true);
  };

  const handleOpenProductQuote = (productTitle: string) => {
    setSelectedProductForQuote(productTitle);
    setIsQuoteOpen(true);
  };

  const handleExploreGallery = () => {
    setActiveSection('gallery');
    const galleryEl = document.getElementById('gallery');
    if (galleryEl) {
      const topOffset = 80;
      const elementPosition = galleryEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FCFBF7] dark:bg-[#121212] text-gray-900 dark:text-[#E8E8E8] transition-colors duration-500 pb-28 md:pb-0 font-sans selection:bg-gold-200 selection:text-gold-900 dark:selection:bg-crimson-800 dark:selection:text-gold-100">
      
      {/* 1. Header Navigation elements */}
      <DesktopNavbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        lang={lang}
        setLang={setLang}
        onOpenQuote={handleOpenGeneralQuote}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      
      <MobileNavbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        lang={lang}
        setLang={setLang}
        onOpenQuote={handleOpenGeneralQuote}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* 2. Main Sections layout */}
      <main className="w-full">
        {/* Full-bleed Slideshow Hero */}
        <Hero 
          lang={lang} 
          onOpenQuote={handleOpenGeneralQuote} 
          onExploreGallery={handleExploreGallery} 
        />

        {/* Narrative Story Lineage, Developer Tribute & Trust badges */}
        <AboutBrand 
          lang={lang} 
          onOpenQuote={handleOpenGeneralQuote} 
        />

        {/* Staggered Portfolio Card Grid & Dialog detail panes */}
        <Gallery 
          lang={lang} 
          onSelectProductForQuote={handleOpenProductQuote} 
        />

        {/* Dynamic Connect Hub with Direct Social triggers */}
        <ContactHub 
          lang={lang} 
          onOpenQuote={handleOpenGeneralQuote} 
        />
      </main>

      {/* 3. Aesthetic Luxury Footer displaying bereavement of credits */}
      <footer className="w-full bg-white dark:bg-[#111111] border-t border-gray-100 dark:border-white/5 py-12 px-6 transition-colors">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          <div className="space-y-1.5">
            <h4 className="font-serif text-base font-bold text-crimson-800 dark:text-gold-400">
              {lang === 'EN' ? '© 2026 Biruh Tesfa Furniture' : '© 2026 ብሩህ ተስፋ የቤት ማሳያ'}
            </h4>
            <p className="text-[11px] text-gray-400 font-sans font-light max-w-sm">
              {lang === 'EN'
                ? 'Sculpting high-end luxury products and bespoke structures across Halaba Kulito, Ethiopia. Designed to withstand generations.'
                : 'ተወዳዳሪ የሌለው ጥራት ያላቸውን የቤትና የቢሮ እቃዎች በሀላባ ቁሊቶ ደቡብ ኢትዮጵያ እያዘጋጀን እናቀርባለን።'}
            </p>
          </div>

          {/* Quick link anchors footer */}
          <div className="flex flex-wrap justify-center gap-5 text-xs text-gray-500 dark:text-gray-400 font-space font-medium">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-crimson-600 dark:hover:text-gold-450 cursor-pointer">
              {lang === 'EN' ? 'Top' : 'ወደ ላይ'}
            </button>
            <span>•</span>
            <a href={`tel:${BRAND_CONTACTS.phone}`} className="hover:text-crimson-600 dark:hover:text-gold-450">
              0916212042
            </a>
            <span>•</span>
            <a href={BRAND_CONTACTS.telegram} target="_blank" rel="noopener noreferrer" className="hover:text-crimson-600 dark:hover:text-gold-450">
              Telegram
            </a>
          </div>

          {/* Strict Developer Attribution as specified in brand guidelines */}
          <div className="space-y-1 bg-gray-50 dark:bg-white/5 px-5 py-3 rounded-xl border border-gray-100 dark:border-white/5">
            <p className="text-[11px] font-sans font-light text-gray-500 dark:text-gray-400">
              Designed and Developed by <span className="font-semibold text-gray-800 dark:text-gold-400">Bereket Haylu</span>
            </p>
            <p className="text-[11px] font-mono font-bold text-crimson-800 dark:text-gold-350">
              Phone: <a href="tel:0916212042" className="hover:underline">0916212042</a>
            </p>
          </div>

        </div>
      </footer>

      {/* 4. Overlay Quote dialogue */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        lang={lang}
        prefilledProduct={selectedProductForQuote}
      />

      {/* Back to top floating shortcut button for desktop */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 hidden md:flex w-12 h-12 rounded-full bg-crimson-700 dark:bg-gold-550 hover:bg-crimson-800 dark:hover:bg-gold-600 text-white dark:text-[#121212] items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer border border-crimson-500/20 dark:border-white/10"
          title="To Top"
          id="back-to-top"
        >
          <ArrowUp size={18} />
        </button>
      )}

    </div>
  );
}
