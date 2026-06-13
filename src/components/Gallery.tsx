import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FURNITURE_ITEMS } from '../data';
import { FurnitureItem, Category } from '../types';
import { X, Sparkles, Scale, Info, CheckCircle2, ChevronRight, MessageSquare, Phone } from 'lucide-react';

interface GalleryProps {
  lang: 'EN' | 'AM';
  onSelectProductForQuote: (productTitle: string) => void;
}

export default function Gallery({ lang, onSelectProductForQuote }: GalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');
  const [selectedProduct, setSelectedProduct] = useState<FurnitureItem | null>(null);

  const categories: { id: Category | 'all'; en: string; am: string }[] = [
    { id: 'all', en: 'All Masterpieces', am: 'ሁሉም እቃዎች' },
    { id: 'living-room', en: 'Living Room', am: 'ሳሎን ክፍሎች' },
    { id: 'bedroom', en: 'Bedroom', am: 'መኝታ ክፍሎች' },
    { id: 'dining', en: 'Dining Suite', am: 'ምግብ ቤቶች' },
    { id: 'doors-cabinets', en: 'Doors & Cabinets', am: 'በሮች እና ቁምሳጥኖች' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? FURNITURE_ITEMS
    : FURNITURE_ITEMS.filter(item => item.category === selectedCategory);

  return (
    <section 
      id="gallery" 
      className="py-24 px-6 max-w-7xl mx-auto bg-transparent transition-colors duration-350"
    >
      {/* Section Headline */}
      <div className="text-center mb-16">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.25em] text-crimson-700 dark:text-gold-450 font-space font-semibold"
        >
          {lang === 'EN' ? 'Showroom Curations' : 'የእጅ ጥበብ ማሳያ'}
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-serif font-bold text-gray-950 dark:text-white mt-3 tracking-tight"
        >
          {lang === 'EN' ? 'The Staggered Collection' : 'እጅግ ማራኪ የእንጨት ውጤቶች'}
        </motion.h2>
        <div className="w-16 h-1 bg-gradient-to-r from-crimson-700 to-crimson-500 dark:from-gold-500 dark:to-gold-400 mx-auto mt-5 rounded-full" />
      </div>

      {/* 1. Category Filter Controls */}
      <div className="flex flex-wrap justify-center items-center gap-2 mb-12 max-w-4xl mx-auto">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4.5 py-2.5 rounded-lg text-xs font-space font-medium tracking-wide transition-all duration-300 cursor-pointer ${
                isSelected
                  ? 'bg-gradient-to-r from-crimson-700 to-crimson-650 dark:from-gold-450 dark:to-gold-550 text-white dark:text-[#121212] shadow-md scale-105'
                  : 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10'
              }`}
              id={`filter-btn-${cat.id}`}
            >
              {lang === 'EN' ? cat.en : cat.am}
            </button>
          );
        })}
      </div>

      {/* 2. Fluid Grid Gallery (Supports Staggered Animated Entrances) */}
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        id="furniture-grid"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, index) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 15 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              onClick={() => setSelectedProduct(item)}
              className="group cursor-pointer bg-white dark:bg-[#181818] rounded-2xl overflow-hidden border border-gray-100 dark:border-white/5 hover:border-crimson-600/30 dark:hover:border-gold-500/30 shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)] transition-all duration-300 flex flex-col h-full relative"
              id={`product-card-${item.id}`}
            >
              {/* Product Badge: Featured Mark */}
              {item.isFeatured && (
                <div className="absolute top-4 left-4 z-10 bg-gold-400 dark:bg-crimson-700 text-gold-950 dark:text-white px-3 py-1 rounded-full text-[9px] font-space font-bold tracking-widest uppercase flex items-center space-x-1 shadow">
                  <Sparkles size={9} />
                  <span>{lang === 'EN' ? 'Signature Piece' : 'ልዩ ሞዴል'}</span>
                </div>
              )}

              {/* Product Image Frame */}
              <div className="overflow-hidden bg-gray-100 dark:bg-neutral-900 aspect-4/3 relative">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Dynamic Hover Ambient Backdrop */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-1" />
                
                {/* Quick Info Indicator */}
                <div className="absolute bottom-4 right-4 z-10 opacity-0 group-hover:opacity-100 bg-white/10 backdrop-blur-md p-2 rounded-full border border-white/20 text-white transition-all duration-300 hover:scale-115">
                  <Info size={14} />
                </div>
              </div>

              {/* Card Text Content */}
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-[10px] tracking-[0.2em] uppercase font-space text-crimson-700 dark:text-gold-400 font-medium">
                  {categories.find(c => c.id === item.category)?.en}
                </span>
                
                <h3 className="font-serif text-lg font-bold text-gray-950 dark:text-white mt-1.5 group-hover:text-crimson-700 dark:group-hover:text-gold-450 transition-colors">
                  {lang === 'EN' ? item.title : item.titleAmharic}
                </h3>
                
                {/* Shortened material representation */}
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 font-sans font-light line-clamp-2">
                  {lang === 'EN' ? item.description : item.descriptionAmharic}
                </p>

                <div className="border-t border-gray-100 dark:border-white/5 my-4 pt-4 mt-auto flex items-center justify-between">
                  <div>
                    <p className="text-[9px] uppercase tracking-wider text-gray-400">
                      {lang === 'EN' ? 'Estimated Range' : 'ግምታዊ ዋጋ'}
                    </p>
                    <p className="text-xs font-mono font-bold text-crimson-800 dark:text-gold-350 mt-0.5">
                      {item.priceRange}
                    </p>
                  </div>
                  <div className="flex items-center space-x-1 text-xs font-semibold text-crimson-700 dark:text-gold-400 group-hover:translate-x-1.5 transition-transform">
                    <span>{lang === 'EN' ? 'Details' : 'ዝርዝር'}</span>
                    <ChevronRight size={13} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* 3. Immersive Product Detail Modal / Overlay */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/85 backdrop-blur-md z-150 flex items-center justify-center p-4 md:p-6"
            id="product-detail-overlay"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="bg-white dark:bg-[#161616] rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] md:max-h-none overflow-y-auto border border-gray-200/50 dark:border-white/10 shadow-2xl relative"
              id="product-detail-modal"
            >
              {/* Close Button Trigger */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-40 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/90 active:scale-95 transition-all cursor-pointer"
                aria-label="Close details"
                id="close-detail-modal"
              >
                <X size={18} />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                
                {/* Left side: Pure media block */}
                <div className="relative aspect-4/3 md:aspect-auto md:h-full min-h-[280px] md:min-h-[480px] bg-neutral-900 border-b md:border-b-0 md:border-r border-gray-100 dark:border-white/5">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Right side: Deep content details specs */}
                <div className="p-8 md:p-10 flex flex-col justify-between">
                  <div>
                    {/* Category Label */}
                    <span className="text-[10px] tracking-[0.25em] uppercase font-space text-crimson-700 dark:text-gold-450 font-bold bg-crimson-50 dark:bg-gold-500/10 px-3 py-1 rounded-full border border-crimson-200/30 dark:border-gold-500/10">
                      {categories.find(c => c.id === selectedProduct.category)?.en}
                    </span>

                    {/* Double Names titles */}
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-gray-950 dark:text-white mt-5">
                      {selectedProduct.title}
                    </h3>
                    <h4 className="font-serif text-lg text-crimson-800 dark:text-gold-400 mt-1">
                      {selectedProduct.titleAmharic}
                    </h4>

                    <div className="w-12 h-0.5 bg-gradient-to-r from-crimson-600 to-gold-400 my-4" />

                    {/* Highly descriptive writeup */}
                    <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300 font-sans font-light mb-6">
                      {lang === 'EN' ? selectedProduct.description : selectedProduct.descriptionAmharic}
                    </p>

                    {/* Spec Sheets Block */}
                    <div className="grid grid-cols-1 gap-4.5 bg-gray-50 dark:bg-white/5 p-4.5 rounded-xl border border-gray-100 dark:border-white/5 mb-8">
                      {/* Material Specs */}
                      <div>
                        <span className="text-[10px] uppercase font-space text-gray-400 tracking-wider">
                          {lang === 'EN' ? 'Elite Material Source' : 'የተሰራበት ጥራት ያለው ቁሳቁስ'}
                        </span>
                        <p className="text-xs font-semibold text-gray-800 dark:text-gray-200 mt-0.5 flex items-center space-x-1.5">
                          <CheckCircle2 size={12} className="text-crimson-600 dark:text-gold-400 shrink-0" />
                          <span>{lang === 'EN' ? selectedProduct.material : selectedProduct.materialAmharic}</span>
                        </p>
                      </div>

                      {/* Dimension Specs */}
                      <div>
                        <span className="text-[10px] uppercase font-space text-gray-400 tracking-wider">
                          {lang === 'EN' ? 'Typical Dimensions' : 'ልኬቶች'}
                        </span>
                        <p className="text-xs font-mono font-medium text-gray-800 dark:text-gray-200 mt-0.5 flex items-center space-x-1.5">
                          <Scale size={12} className="text-crimson-600 dark:text-gold-400 shrink-0" />
                          <span>{selectedProduct.dimensions}</span>
                        </p>
                      </div>

                      {/* Estimated Rates */}
                      <div>
                        <span className="text-[10px] uppercase font-space text-gray-400 tracking-wider">
                          {lang === 'EN' ? 'Estimated Pricing' : 'ግምታዊ ዋጋ'}
                        </span>
                        <p className="text-sm font-mono font-bold text-crimson-800 dark:text-gold-400 mt-0.5">
                          {selectedProduct.priceRange}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Immediate Action Row: Interlocks with Form Quote */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-100 dark:border-white/5 mt-auto">
                    <button
                      onClick={() => {
                        onSelectProductForQuote(selectedProduct.title);
                        setSelectedProduct(null);
                      }}
                      className="flex-1 px-5 py-3.5 rounded-xl bg-gradient-to-r from-crimson-700 to-crimson-600 dark:from-gold-450 dark:to-gold-550 text-white dark:text-[#121212] font-space text-xs font-bold tracking-wide shadow-md hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center space-x-2"
                      id="detail-inquire-btn"
                    >
                      <Sparkles size={14} className="animate-spin-slow" />
                      <span>{lang === 'EN' ? 'Order Custom Setup' : 'ለትዕዛዝ ይህንን ምረጥ'}</span>
                    </button>

                    {/* Telegram support contact direct */}
                    <a
                      href="https://t.me/Biruhtesfa_furniture"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3.5 rounded-xl border border-gray-200 dark:border-white/10 hover:border-crimson-600/30 dark:hover:border-gold-500/30 hover:bg-gray-50 dark:hover:bg-white/5 text-gray-700 dark:text-gray-200 font-space text-xs font-medium tracking-wide transition-all float-right flex items-center justify-center space-x-2"
                      id="detail-telegram-btn"
                    >
                      <MessageSquare size={14} className="text-crimson-600 dark:text-gold-400" />
                      <span>Telegram</span>
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
