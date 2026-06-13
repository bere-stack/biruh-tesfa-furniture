import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { IMAGES, BRAND_CONTACTS } from '../data';
import { Sparkles, ArrowRight, ChevronDown } from 'lucide-react';

interface HeroProps {
  lang: 'EN' | 'AM';
  onOpenQuote: () => void;
  onExploreGallery: () => void;
}

const SLIDESHOW_IMAGES = [
  IMAGES.hero,
  IMAGES.bed,
  IMAGES.dining
];

export default function Hero({ lang, onOpenQuote, onExploreGallery }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDESHOW_IMAGES.length);
    }, 6000); // 6 seconds long-interval for cinematic tranquility
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      id="hero" 
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black text-white"
    >
      {/* 1. Cinematic Slideshow background with slow zoom transition */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.65, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 2.2, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={SLIDESHOW_IMAGES[currentSlide]}
              alt="Premium Handcrafted Furniture Slideshow"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        {/* Multi-layered dark luxury vignette gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/30 to-black/60 z-1" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/70 z-1" />
      </div>

      {/* 2. Floating Fine Art Details Overlay (Top Left corner showcase) */}
      <div className="absolute top-24 left-6 md:left-12 z-10 hidden sm:block pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="flex items-center space-x-3 bg-white/5 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10"
        >
          <span className="w-2 h-2 rounded-full bg-gold-450 animate-ping" />
          <span className="text-[10px] tracking-[0.25em] uppercase text-gold-300 font-mono">
            {lang === 'EN' ? 'Artisanal Showroom : Halaba' : 'የእጅ ጥበብ ማሳያ : ሀላባ ቁሊቶ'}
          </span>
        </motion.div>
      </div>

      {/* 3. Hero content layout */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center justify-center h-full mt-8 md:mt-0">
        
        {/* Subtle decorative crown badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-4 flex items-center justify-center space-x-1.5 text-gold-350 bg-gold-500/10 px-4 py-1.5 rounded-full border border-gold-500/20"
        >
          <Sparkles size={14} className="text-gold-400" />
          <span className="text-xs font-space tracking-widest uppercase font-medium">
            {lang === 'EN' ? 'Premium Custom Woodwork' : 'ከፍተኛ ጥራት ያላቸው የእንጨት እቃዎች'}
          </span>
        </motion.div>

        {/* Amharic Epic Headline */}
        <h2 className="text-5xl md:text-8xl font-serif font-black tracking-tight leading-none mb-1 text-white select-none">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="block"
          >
            ብሩህ ተስፋ
          </motion.span>
        </h2>

        {/* Latin Brand Subtitle */}
        <h1 className="text-xl md:text-3xl font-space font-light tracking-[0.35em] text-gold-400 uppercase mb-6 select-none">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.6 }}
          >
            Biruh Tesfa Furniture
          </motion.span>
        </h1>

        {/* Dynamic Descriptive Pitch paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="text-gray-300 max-w-2xl text-sm md:text-base leading-relaxed mb-10 font-sans font-light"
        >
          {lang === 'EN' 
            ? 'We sculpt the noble hardwoods of Ethiopia into timeless, masterfully crafted luxury furniture. Designed for modern living, engineered to last generations, and customized for your absolute space.' 
            : 'የሀገራችንን መልካም እንጨቶች እውቀትና ዘመናዊ ዲዛይን አዋህደን ጊዜ የማይሽራቸው ውብ እቃዎች እንሰራለን። ለትውልድ የሚሻገሩ፣ ለዘመናዊ አኗኗር ተስማሚ የሆኑና ለቤትዎ ግርማ የሚጨምሩ ምርጫዎች።'}
        </motion.p>

        {/* Smooth, aesthetic Interactive Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-5 w-full max-w-md"
        >
          {/* Main call to action: Custom Quote Modal */}
          <button
            onClick={onOpenQuote}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-crimson-650 to-crimson-750 hover:from-crimson-700 hover:to-crimson-850 text-white font-space font-medium tracking-wide text-sm shadow-2xl hover:scale-[1.03] active:scale-[0.97] hover:shadow-crimson-800/35 transition-all duration-300 cursor-pointer flex items-center justify-center space-x-2 border border-crimson-500/25 group"
            id="hero-cta-quote"
          >
            <span>{lang === 'EN' ? 'Request Custom Design' : 'ልዩ ትዕዛዝ ይስጡ'}</span>
            <ArrowRight size={16} className="transform group-hover:translate-x-1.5 transition-transform" />
          </button>

          {/* Secondary action: Browse Gallery scroll helper */}
          <button
            onClick={onExploreGallery}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-space font-medium tracking-wide text-sm border border-white/20 hover:border-white/40 shadow-sm transition-all duration-300 cursor-pointer flex items-center justify-center"
            id="hero-cta-gallery"
          >
            {lang === 'EN' ? 'Browse Collection' : 'ማሳያዎችን ማሰስ'}
          </button>
        </motion.div>
      </div>

      {/* 4. Elegant lower scroll hint */}
      <div className="absolute bottom-28 md:bottom-10 left-1/2 -translate-x-1/2 z-10 text-center pointer-events-none">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="flex flex-col items-center cursor-pointer"
        >
          <span className="text-[10px] tracking-[0.3em] text-gray-400 font-space uppercase mb-2">
            {lang === 'EN' ? 'Scroll to Explore' : 'ለመመልከት ወደ ታች ያሸብልሉ'}
          </span>
          <div className="w-5 h-8 rounded-full border-2 border-white/20 flex items-start justify-center p-1">
            <div className="w-1.5 h-1.5 bg-gold-400 rounded-full animate-bounce" />
          </div>
        </motion.div>
      </div>

      {/* 5. Minimal Slide Index indicators (Bottom Right) */}
      <div className="absolute bottom-10 right-8 md:right-12 z-10 hidden sm:flex items-center space-x-2">
        {SLIDESHOW_IMAGES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-12 h-1 rounded-full transition-all duration-500 cursor-pointer ${
              currentSlide === idx 
                ? 'bg-gold-450 w-16' 
                : 'bg-white/20 hover:bg-white/40'
            }`}
            title={`Slide ${idx + 1}`}
            id={`hero-slide-${idx}`}
          />
        ))}
      </div>
    </section>
  );
}
