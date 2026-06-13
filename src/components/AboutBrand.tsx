import React from 'react';
import { motion } from 'motion/react';
import { TESTIMONIALS, BRAND_CONTACTS, IMAGES } from '../data';
import { Star, ShieldCheck, Award, HeartHandshake, User, Smartphone, Sparkles, MapPin } from 'lucide-react';

interface AboutBrandProps {
  lang: 'EN' | 'AM';
  onOpenQuote: () => void;
}

export default function AboutBrand({ lang, onOpenQuote }: AboutBrandProps) {
  
  return (
    <section 
      id="about" 
      className="py-24 bg-gray-50/50 dark:bg-black/40 border-y border-gray-100 dark:border-white/5 transition-colors duration-350"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Story Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Dual overlapping images representing deep carpentry craftsmanship (5 cols) */}
          <div className="lg:col-span-5 relative h-[380px] md:h-[480px]">
            {/* Main overlay backdrops */}
            <div className="absolute inset-0 w-[85%] h-[85%] rounded-2xl overflow-hidden shadow-md border border-gray-150 dark:border-white/10">
              <img
                src="https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800"
                alt="Wood carpentry details"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Front outstanding overlapping block */}
            <div className="absolute bottom-0 right-0 w-[60%] h-[60%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-[#121212] z-10">
              <img
                src={IMAGES.dining}
                alt="Finished premium dining woodwork"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Float Badge */}
            <div className="absolute top-8 right-12 z-20 bg-gradient-to-r from-crimson-800 to-crimson-600 dark:from-gold-500 dark:to-gold-600 px-4.5 py-3 rounded-xl text-white dark:text-[#121212] font-space shadow-lg border border-white/10 hidden sm:block">
              <p className="text-xl font-bold tracking-tight">15+</p>
              <p className="text-[9px] uppercase tracking-wider font-semibold opacity-90">{lang === 'EN' ? 'Years Artisan' : 'ዓመታት በሙያ'}</p>
            </div>
          </div>

          {/* Right: Rich storytelling text & callouts (7 cols) */}
          <div className="lg:col-span-7 space-y-7">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-crimson-700 dark:text-gold-450 font-space font-semibold">
                {lang === 'EN' ? 'The Craftsmanship Legacy' : 'ታሪካዊ ጥረታችን'}
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-950 dark:text-white mt-3 leading-tight">
                {lang === 'EN' ? 'Biruh Tesfa Furniture' : 'የብሩህ ተስፋ የእንጨት ውጤቶች'}
              </h2>
              <h3 className="text-lg font-serif italic text-crimson-850 dark:text-gold-400 mt-2">
                {lang === 'EN' ? 'From Halaba Kulito, with absolute perfection' : 'ከሀላባ ቁሊቶ፣ በምርጥ ጥራትና እጅ ጥበብ'}
              </h3>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-sans font-light">
              {lang === 'EN'
                ? 'Deep in the heart of Southern Ethiopia, Halaba Kulito has long hosted exceptional wood artisans. Since our founding, Biruh Tesfa (meaning "Bright Hope") has raised the standards of local woodwork. We carefully select royal African hardwoods such as Wanza (Cordia Africana), Kerero, and Zigba. Every log is properly seasoned, hand-planed, kiln-dried, and finished with meticulous lacquer layers to resist high temperatures and humidity.'
                : 'በደቡብ ኢትዮጵያ እምብርት በምትገኘው ሀላባ ቁሊቶ ውስጥ ድንቅ የእንጨት ጠቢባን ይገኛሉ። ከተመሰረትንበት ጊዜ ጀምሮ "ብሩህ ተስፋ" የእንጨት ስራ ጥራትን ወደ ላቀ ደረጃ አሳድጓል። እንደ ዋንዛ፣ ከረሮ እና ዝግባ ያሉ ልዩ የሀገር ውስጥ እንጨቶችን በጥንቃቄ እንመርጣለን። እያንዳንዱ እንጨት የአየር ንብረትን እንዲቋቋም ሆኖ ታሽጎ፣ በጥንቃቄ ተጠርቦና በባለሙያዎች ጥበብ ተኳኩሎ ይወጣል።'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="space-y-2">
                <h4 className="font-space font-bold text-xs text-gray-900 dark:text-white uppercase tracking-wider flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-crimson-600 dark:bg-gold-400" />
                  <span>{lang === 'EN' ? 'Kiln-Dried Solidity' : 'የደረቀ ጠንካራ እንጨት'}</span>
                </h4>
                <p className="text-xs text-gray-500 font-sans pl-3.5 font-light">
                  {lang === 'EN' ? 'Zero wrapping, cracking, or dimensional shifting over years.' : 'እርጥበትን ስለሚያጣ ተበላሽቶ የማይዞር ጠንካራ መዋቅር።'}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-space font-bold text-xs text-gray-900 dark:text-white uppercase tracking-wider flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-crimson-600 dark:bg-gold-400" />
                  <span>{lang === 'EN' ? 'Traditional Veneers' : 'የእጅ ጥበብ ቅብ'}</span>
                </h4>
                <p className="text-xs text-gray-500 font-sans pl-3.5 font-light">
                  {lang === 'EN' ? 'Polished with high-grade organic oils and golden trim coats.' : 'ውበትን የሚያጎሉ ተፈጥሯዊ ቅባቶችን በመጠቀም የተወለወለ ውበት።'}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-150 dark:border-white/5 flex flex-col sm:flex-row items-center gap-5">
              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto px-6.5 py-3 rounded-xl bg-gradient-to-r from-crimson-850 to-crimson-600 dark:from-gold-500 dark:to-gold-600 text-white dark:text-[#121212] font-space text-xs font-bold tracking-wide shadow hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] transition-all cursor-pointer"
                id="about-cta-quote"
              >
                {lang === 'EN' ? 'Begin Custom Dream Order' : 'ዕቅድዎን ለኛ ያጋሩ'}
              </button>
            </div>
          </div>

        </div>

        {/* Testimonials Block (Client Feedback Grid) */}
        <div className="mt-28">
          <div className="text-center mb-14">
            <span className="text-xs uppercase tracking-[0.2em] text-crimson-700 dark:text-gold-450 font-space font-medium">
              {lang === 'EN' ? 'Social Proof & Praise' : 'የደንበኞች ምስክርነት'}
            </span>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-950 dark:text-white mt-1.5">
              {lang === 'EN' ? 'Trusted by Families & Architects' : 'በደንበኞቻችን የተሰጠ ክብር'}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="p-8 rounded-2xl bg-white dark:bg-[#181818] border border-gray-100 dark:border-white/5 shadow-sm space-y-4 flex flex-col justify-between"
                id={`testimonial-card-${t.id}`}
              >
                <div className="space-y-3">
                  {/* Real Star Rating */}
                  <div className="flex items-center space-x-1 text-gold-450">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  
                  {/* Comment */}
                  <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed font-sans font-light italic">
                    "{lang === 'EN' ? t.comment : t.commentAmharic}"
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 dark:border-white/5 flex items-center justify-between">
                  <div>
                    <h5 className="font-serif text-sm font-bold text-gray-900 dark:text-white">
                      {lang === 'EN' ? t.author : t.authorAmharic}
                    </h5>
                    <p className="text-[10px] text-gray-500 font-sans mt-0.5">
                      {lang === 'EN' ? t.role : t.roleAmharic}
                    </p>
                  </div>
                  <span className="text-[9px] font-mono text-gray-400">
                    {t.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Specialized Developer Showcase Tribute Block (Directly fulfilling structural brand requirements) */}
        <div className="mt-28 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-crimson-900 to-crimson-950 dark:from-[#1c1c1c] dark:to-[#121212] border border-crimson-800/20 dark:border-white/5 text-white relative overflow-hidden" id="developer-featured-card">
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 rounded-full bg-crimson-600/10 dark:bg-gold-550/5 blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left: Metadata Info (8 cols) */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center space-x-1.5 text-gold-350 bg-white/5 px-3 py-1 rounded-full border border-white/10 text-[9px] font-space font-medium uppercase tracking-widest">
                <Sparkles size={11} className="animate-pulse" />
                <span>{lang === 'EN' ? 'Digital Innovation & Engineering' : 'ዘመናዊ የዲጂታል ቴክኖሎጂ ስራ'}</span>
              </div>
              
              <h3 className="font-serif text-2xl md:text-3xl font-bold tracking-tight">
                {lang === 'EN' ? 'A High-End Collaboration' : 'ድንቅ የጥራት ሚስጥር'}
              </h3>
              
              <p className="text-xs text-gray-300 leading-relaxed font-sans font-light max-w-2xl">
                {lang === 'EN'
                  ? 'This immersive online preview portal represents elite programming design, pairing luxurious furniture craftsmanship with robust web technology. Every component is custom-engineered to respond smoothly across high-resolution displays and native mobile screens.'
                  : 'ይህ ዘመናዊ የኢንተርኔት ማሳያ መድረክ የተራቀቀ የኮዲንግ ጥበብን በመጠቀም በእንጨት እቃዎች ታሪክ ላይ አዲስ ምዕራፍ የከፈተ ነው። ለስማርትፎን እና ለኮምፒውተር እጅግ ፈጣን ምላሽ እንዲሰጥ ሆኖ የተዋቀረ የቴክኖሎጂ ስራ።'}
              </p>

              {/* Strict Developer Attribution Row */}
              <div className="pt-4 flex flex-wrap items-center gap-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-gold-350">
                    <User size={18} />
                  </div>
                  <div>
                    <span className="text-[9px] text-gray-400 block uppercase font-space tracking-wider">{lang === 'EN' ? 'Designed & Developed By' : 'ዲዛይንና ልማት በ'}</span>
                    <span className="text-sm font-bold text-white font-serif">Bereket Haylu</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-gold-350">
                    <Smartphone size={16} />
                  </div>
                  <div>
                    <span className="text-[9px] text-gray-400 block uppercase font-space tracking-wider">{lang === 'EN' ? 'Technical Architect Phone' : 'የገንቢው ስልክ ቁጥር'}</span>
                    <a href={`tel:${BRAND_CONTACTS.developer.phone}`} className="text-sm font-bold text-gold-300 font-mono hover:underline">
                      0916212042
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Direct Developer Call Button (4 cols) */}
            <div className="lg:col-span-4 flex justify-end">
              <a
                href={`tel:${BRAND_CONTACTS.developer.phone}`}
                className="w-full lg:w-auto px-7 py-4.5 rounded-xl bg-gold-450 hover:bg-gold-550 dark:bg-gold-500 dark:hover:bg-gold-600 text-[#121212] font-space text-xs font-bold tracking-wide shadow-2xl hover:scale-103 active:scale-97 transition-all text-center flex items-center justify-center space-x-2"
                id="developer-call-btn"
              >
                <Smartphone size={15} />
                <span>{lang === 'EN' ? 'Call Bereket Haylu' : 'በረከት ኃይሉን ያግኙ'}</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
