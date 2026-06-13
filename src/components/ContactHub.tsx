import React from 'react';
import { motion } from 'motion/react';
import { BRAND_CONTACTS } from '../data';
import { Phone, MessageSquare, Instagram, Facebook, MapPin, Clock, Award, ShieldCheck, HeartHandshake } from 'lucide-react';

interface ContactHubProps {
  lang: 'EN' | 'AM';
  onOpenQuote: () => void;
}

export default function ContactHub({ lang, onOpenQuote }: ContactHubProps) {
  
  const socialCards = [
    {
      id: 'phone',
      icon: Phone,
      titleEN: 'Direct Phone Dial',
      titleAM: 'ቀጥታ ስልክ መስመር',
      value: BRAND_CONTACTS.phoneFormated,
      actionLabelEN: 'Call Now',
      actionLabelAM: 'አሁን ይደውሉ',
      href: `tel:${BRAND_CONTACTS.phone}`,
      colorClass: 'from-crimson-850 to-crimson-600 dark:from-gold-650 dark:to-gold-450 text-white dark:text-[#121212]'
    },
    {
      id: 'telegram',
      icon: MessageSquare,
      titleEN: 'Telegram Brand Channel',
      titleAM: 'ቴሌግራም ቻናል',
      value: '@Biruhtesfa_furniture',
      actionLabelEN: 'Join Channel',
      actionLabelAM: 'ቻናሉን ይቀላቀሉ',
      href: BRAND_CONTACTS.telegram,
      colorClass: 'bg-[#229ED9] text-white'
    },
    {
      id: 'instagram',
      icon: Instagram,
      titleEN: 'Instagram Portfolio',
      titleAM: 'ኢንስታግራም ማሳያ',
      value: 'biruh_tesfa_furniture_halaba',
      actionLabelEN: 'View Posts',
      actionLabelAM: 'ፎቶዎችን ይመልከቱ',
      href: BRAND_CONTACTS.instagram,
      colorClass: 'bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white'
    },
    {
      id: 'facebook',
      icon: Facebook,
      titleEN: 'Facebook Page',
      titleAM: 'ፌስቡክ ገጽ',
      value: 'Biruh Tesfa Furniture',
      actionLabelEN: 'Like & Follow',
      actionLabelAM: 'ገጹን ይከተሉ',
      href: BRAND_CONTACTS.facebook,
      colorClass: 'bg-[#1877F2] text-white'
    }
  ];

  return (
    <section 
      id="contact" 
      className="py-24 px-6 max-w-7xl mx-auto bg-transparent transition-colors duration-350"
    >
      <div className="text-center mb-16">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.25em] text-crimson-700 dark:text-gold-450 font-space font-semibold"
        >
          {lang === 'EN' ? 'Showroom Consultation' : 'የግንኙነት ማዕከል'}
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-serif font-bold text-gray-950 dark:text-white mt-3 tracking-tight"
        >
          {lang === 'EN' ? 'Social Hub & Contact' : 'አድራሻችንና ማህበራዊ ሚዲያዎቻችን'}
        </motion.h2>
        <div className="w-16 h-1 bg-gradient-to-r from-crimson-700 to-crimson-500 dark:from-gold-500 dark:to-gold-400 mx-auto mt-5 rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start mt-8">
        
        {/* Left Column: Localized Map & Physical Visit Booking Card (3/5 wide) */}
        <div className="lg:col-span-3 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl bg-white dark:bg-[#181818] border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-lg transition-all p-8 md:p-10 relative"
            id="visit-card"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-6 border-b border-gray-100 dark:border-white/5">
              <div>
                <h3 className="font-serif text-2xl font-bold text-gray-950 dark:text-white">
                  {lang === 'EN' ? 'Visit Our Main Workshop' : 'ዋናው ማምረቻ ማዕከላችንን ይጎብኙ'}
                </h3>
                <p className="text-xs text-gray-400 font-sans mt-1">
                  {lang === 'EN' ? 'Located in the heart of wood craftsmanship' : 'በእንጨት ጥበብ እምብርት ውስጥ የሚገኝ'}
                </p>
              </div>
              <div className="shrink-0 flex items-center space-x-2 bg-crimson-50 dark:bg-gold-500/10 px-4 py-2 border border-crimson-100 dark:border-gold-500/20 rounded-lg text-crimson-800 dark:text-gold-400">
                <MapPin size={16} />
                <span className="text-xs font-mono font-bold">Halaba Kulito</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Working Hours */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-crimson-700 dark:text-gold-400">
                  <Clock size={18} />
                  <span className="font-space text-sm font-semibold tracking-wide">
                    {lang === 'EN' ? 'Working Hours' : 'የስራ ሰዓት'}
                  </span>
                </div>
                <div className="space-y-2.5 pl-7 text-xs text-gray-600 dark:text-gray-300">
                  <div className="flex justify-between border-b border-gray-100 dark:border-white/5 pb-1">
                    <span>{lang === 'EN' ? 'Monday - Friday' : 'ከሰኞ - አርብ'}</span>
                    <span className="font-mono font-medium">8:00 AM - 6:30 PM (LT)</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 dark:border-white/5 pb-1">
                    <span>{lang === 'EN' ? 'Saturday' : 'ቅዳሜ'}</span>
                    <span className="font-mono font-medium">8:30 AM - 5:00 PM (LT)</span>
                  </div>
                  <div className="flex justify-between text-crimson-600 dark:text-gold-400 font-medium">
                    <span>{lang === 'EN' ? 'Sunday' : 'እሁድ'}</span>
                    <span>{lang === 'EN' ? 'Closed (Appointments only)' : 'ዝግ ነው (በቀጠሮ ብቻ)'}</span>
                  </div>
                </div>
              </div>

              {/* Physical Location Details */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-crimson-700 dark:text-gold-400">
                  <MapPin size={18} />
                  <span className="font-space text-sm font-semibold tracking-wide">
                    {lang === 'EN' ? 'Address Details' : 'አድራሻ መግለጫ'}
                  </span>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-300 pl-7 leading-relaxed font-sans font-light">
                  {lang === 'EN' 
                    ? 'Main Street Showroom, adjacent to Commercial Bank of Ethiopia (Kulito Branch), Halaba Kulito, Southern Ethiopia.'
                    : 'ዋና ጠቅላይ ጎዳና ማሳያ፣ ከኢትዮጵያ ንግድ ባንክ (ቁሊቶ ቅርንጫፍ) አጠገብ፣ ሀላባ ቁሊቶ፣ ደቡብ ኢትዮጵያ።'}
                </p>
                <div className="pl-7 pt-2 font-mono text-[10px] text-gray-400 dark:text-gray-500">
                  GPS: 7.3116° N, 38.0892° E
                </div>
              </div>
            </div>

            {/* Custom Aesthetic Map Placeholder - styled beautifully for high craftsmanship */}
            <div className="rounded-xl border border-gray-150 dark:border-white/10 bg-gray-50 dark:bg-white/5 overflow-hidden h-40 flex flex-col items-center justify-center relative p-6 text-center group/map">
              <div className="absolute inset-0 bg-radial-gradient from-transparent to-gray-200/40 dark:to-black/35 group-hover/map:scale-105 transition-transform duration-500" />
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-crimson-850 dark:bg-gold-500 flex items-center justify-center text-white dark:text-[#121212] mb-3 shadow shadow-crimson-800/10">
                  <MapPin size={16} />
                </div>
                <h4 className="font-space text-xs font-bold text-gray-900 dark:text-white">
                  {lang === 'EN' ? 'Interactive Guide Roadmap' : 'ይጎብኙን - ሀላባ ቁሊቶ ማዕከል'}
                </h4>
                <p className="text-[10px] text-gray-500 dark:text-gray-400 mt-1 max-w-sm leading-relaxed">
                  {lang === 'EN' ? 'Providing swift delivery and installation services across Addis Ababa, Halaba, Hawassa, Hosaena, and Adama.' : 'አዲስ አበባ፣ ሀላባ፣ ሐዋሳ፣ ሆሳዕና እና አዳማ ድረስ አስተማማኝ መጫንና ማድረስ እናረጋግጣለን።'}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Three Key Trust Badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-4 rounded-xl border border-gray-100 dark:border-white/5 bg-white dark:bg-[#181818] flex items-center space-x-3.5">
              <div className="p-2.5 rounded-lg bg-crimson-50 dark:bg-gold-500/10 text-crimson-700 dark:text-gold-400">
                <Award size={18} />
              </div>
              <div>
                <h5 className="font-space font-bold text-xs text-gray-900 dark:text-white">{lang === 'EN' ? 'Local Premium Wood' : 'ምርጥ የሀገር በቀል እንጨት'}</h5>
                <p className="text-[10px] text-gray-400">{lang === 'EN' ? 'Solid kiln-dried timber' : 'ደረቅና ጠንካራ ዋንዛ'}</p>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-gray-100 dark:border-white/5 bg-white dark:bg-[#181818] flex items-center space-x-3.5">
              <div className="p-2.5 rounded-lg bg-crimson-50 dark:bg-gold-500/10 text-crimson-700 dark:text-gold-400">
                <ShieldCheck size={18} />
              </div>
              <div>
                <h5 className="font-space font-bold text-xs text-gray-900 dark:text-white">{lang === 'EN' ? '5-Year Guarantee' : 'የ 5 ዓመት ዋስትና'}</h5>
                <p className="text-[10px] text-gray-400">{lang === 'EN' ? 'Built to last generations' : 'ለንቃትና ለጥንካሬ ዋስትና'}</p>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-gray-100 dark:border-white/5 bg-white dark:bg-[#181818] flex items-center space-x-3.5">
              <div className="p-2.5 rounded-lg bg-crimson-50 dark:bg-gold-500/10 text-crimson-700 dark:text-gold-400">
                <HeartHandshake size={18} />
              </div>
              <div>
                <h5 className="font-space font-bold text-xs text-gray-900 dark:text-white">{lang === 'EN' ? 'Custom Dimensioning' : 'ልዩ ማበጀት'}</h5>
                <p className="text-[10px] text-gray-400">{lang === 'EN' ? 'Taylor-fit for your luxury' : 'ልክ እንደቤትዎ ማበጀት'}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Direct Connect Actions (2/5 wide) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="p-8 rounded-2xl bg-white dark:bg-[#181818] border border-gray-100 dark:border-white/5 shadow-sm space-y-6">
            <div>
              <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white">
                {lang === 'EN' ? 'Instant Social Media Links' : 'ቀጥታ ግንኙነት'}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                {lang === 'EN' 
                  ? 'Connect with Bereket Haylu and our workshop design unit. Browse our active updates, photos, and current builds.'
                  : 'ከዲዛይነር በረከት ኃይሉና ከማምረቻ ማዕከላችን ጋር በቀጥታ ይገናኙ። የአዳዲስ እቃዎች ቪዲዮዎችንና ማሻሻያዎችን ይመልከቱ።'}
              </p>
            </div>

            {/* Render direct floating buttons */}
            <div className="grid grid-cols-1 gap-4">
              {socialCards.map((card) => {
                const IconComponent = card.icon;
                return (
                  <a
                    key={card.id}
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-between p-4 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-sm cursor-pointer group ${card.colorClass}`}
                    id={`social-link-${card.id}`}
                  >
                    <div className="flex items-center space-x-3.5">
                      <div className="p-2 rounded-lg bg-white/15 backdrop-blur-md">
                        <IconComponent size={20} />
                      </div>
                      <div>
                        <h4 className="font-space font-bold text-xs">
                          {lang === 'EN' ? card.titleEN : card.titleAM}
                        </h4>
                        <p className="text-[10.5px] opacity-80 font-mono mt-0.5">
                          {card.value}
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] font-space tracking-wider uppercase font-bold bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-lg border border-white/10">
                      {lang === 'EN' ? card.actionLabelEN : card.actionLabelAM}
                    </span>
                  </a>
                );
              })}
            </div>

            {/* Quick quote trigger within the sidebar */}
            <div className="pt-4 border-t border-gray-100 dark:border-white/5">
              <button
                onClick={onOpenQuote}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-crimson-700 to-crimson-600 dark:from-gold-500 dark:to-gold-600 text-white dark:text-[#121212] font-space text-xs font-bold tracking-wide shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer flex items-center justify-center space-x-2"
                id="contact-quote-btn"
              >
                <span>{lang === 'EN' ? 'Inquire Online' : 'የዋጋ ዝርዝር ይጠይቁ'}</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
