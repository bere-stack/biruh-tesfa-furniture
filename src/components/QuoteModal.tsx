import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle, Sparkles, MapPin, Smartphone } from 'lucide-react';
import { Category, CustomInquiry } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'EN' | 'AM';
  prefilledProduct?: string;
}

export default function QuoteModal({ isOpen, onClose, lang, prefilledProduct }: QuoteModalProps) {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('Halaba Kulito');
  const [category, setCategory] = useState<Category | 'custom'>('custom');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [isDone, setIsDone] = useState(false);

  // Set preloaded product into state
  useEffect(() => {
    if (prefilledProduct) {
      setDescription(`I am highly interested in the custom design of "${prefilledProduct}". Please provide estimated cost with delivery and configuration.`);
      setCategory('custom');
    } else {
      setDescription('');
    }
  }, [prefilledProduct, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phoneNumber) return;

    setLoading(true);

    // Simulate luxury persistence and messaging delay
    setTimeout(() => {
      const newInquiry: CustomInquiry = {
        id: 'inq-' + Date.now(),
        fullName,
        phoneNumber,
        location,
        category,
        description,
        selectedProduct: prefilledProduct || undefined,
        createdAt: new Date().toISOString()
      };

      // Save to local storage for persistence
      try {
        const existing = localStorage.getItem('bt_furniture_inquiries');
        const inquiries = existing ? JSON.parse(existing) : [];
        inquiries.push(newInquiry);
        localStorage.setItem('bt_furniture_inquiries', JSON.stringify(inquiries));
      } catch (err) {
        console.error('Persistence failed', err);
      }

      setLoading(false);
      setIsDone(true);
    }, 1200);
  };

  const handleReset = () => {
    setFullName('');
    setPhoneNumber('');
    setLocation('Halaba Kulito');
    setCategory('custom');
    setDescription('');
    setIsDone(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-150 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="bg-white dark:bg-[#161616] rounded-2xl border border-gray-150 dark:border-white/10 shadow-2xl max-w-lg w-full overflow-hidden relative"
          id="quote-dialog-container"
        >
          {/* Header Close absolute */}
          <button
            onClick={handleReset}
            className="absolute top-5 right-5 z-20 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/5 text-gray-500 dark:text-gray-400 cursor-pointer transition-all"
            aria-label="Close form"
            id="close-quote-modal"
          >
            <X size={18} />
          </button>

          {!isDone ? (
            /* Submissions form layout */
            <form onSubmit={handleSubmit} className="p-8 md:p-10 space-y-6">
              
              {/* Badge & Title */}
              <div className="space-y-1.5 pb-2 border-b border-gray-100 dark:border-white/5">
                <div className="inline-flex items-center space-x-1 text-gold-550 bg-gold-450/10 px-3 py-1 rounded-full border border-gold-450/20 text-[10px] font-space font-medium uppercase tracking-wider">
                  <Sparkles size={11} />
                  <span>{lang === 'EN' ? 'Consultation Demand Form' : 'ልዩ ትዕዛዝ ማደራጃ'}</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-gray-900 dark:text-white">
                  {lang === 'EN' ? 'Request Custom Design' : 'ፍላጎትዎን ለባለሙያ ያጋሩ'}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {lang === 'EN' 
                    ? 'Let Bereket Haylu & our carpentry artisans craft the piece matching your custom dimensions.' 
                    : 'ሳሎን፣ አልጋ፣ በሮች ወይም ሙሉ ቁምሳጥን ለቤትዎ በሚስማማ ዋጋ እንድንሰራሎት መግለጫ ይሙሉልን።'}
                </p>
              </div>

              {/* Form Input elements */}
              <div className="space-y-4">
                
                {/* Full Name */}
                <div>
                  <label htmlFor="fullname" className="block text-[10px] font-space font-bold uppercase tracking-wider text-gray-405 dark:text-gray-400 mb-1.5">
                    {lang === 'EN' ? 'Full Name' : 'ሙሉ ስም'} <span className="text-crimson-600 dark:text-gold-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullname"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder={lang === 'EN' ? 'Enter your name' : 'ለምሳሌ፡ አበበ ከበደ'}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-transparent text-gray-950 dark:text-white text-xs font-sans placeholder-gray-400 focus:outline-none focus:border-crimson-600 dark:focus:border-gold-400 focus:ring-1 focus:ring-crimson-600/20 dark:focus:ring-gold-400/20 transition-all duration-350"
                  />
                </div>

                {/* Phone Number details */}
                <div>
                  <label htmlFor="phone" className="block text-[10px] font-space font-bold uppercase tracking-wider text-gray-405 dark:text-gray-400 mb-1.5">
                    {lang === 'EN' ? 'Phone Number & Telegram' : 'የስልክ ቁጥር'} <span className="text-crimson-600 dark:text-gold-400">*</span>
                  </label>
                  <div className="relative">
                    <Smartphone size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder={lang === 'EN' ? 'e.g. 0916212042' : 'ለምሳሌ፡ 0916212042'}
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-transparent text-gray-950 dark:text-white text-xs font-mono placeholder-gray-400 focus:outline-none focus:border-crimson-600 dark:focus:border-gold-400 focus:ring-1 focus:ring-crimson-600/20 dark:focus:ring-gold-400/20 transition-all duration-350"
                    />
                  </div>
                </div>

                {/* Two Column items: Location & Target categories */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Shipping / Consultation location */}
                  <div>
                    <label htmlFor="location" className="block text-[10px] font-space font-bold uppercase tracking-wider text-gray-405 dark:text-gray-400 mb-1.5 flex items-center space-x-1">
                      <MapPin size={10} className="text-crimson-600 dark:text-gold-400" />
                      <span>{lang === 'EN' ? 'Shipping Destination' : 'የማድረሻ ቦታ'}</span>
                    </label>
                    <select
                      id="location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#161616] text-gray-950 dark:text-white text-xs font-sans focus:outline-none focus:border-crimson-600 dark:focus:border-gold-400 transition-all"
                    >
                      <option value="Halaba Kulito">Halaba Kulito (ሀላባ ቁሊቶ)</option>
                      <option value="Addis Ababa">Addis Ababa (አዲስ አበባ)</option>
                      <option value="Hawassa">Hawassa (ሐዋሳ)</option>
                      <option value="Hosaena">Hosaena (ሆሳዕና)</option>
                      <option value="Adama">Adama (አዳማ)</option>
                      <option value="Other">Other (ሌላ ቦታ)</option>
                    </select>
                  </div>

                  {/* Target category selection */}
                  <div>
                    <label htmlFor="category" className="block text-[10px] font-space font-bold uppercase tracking-wider text-gray-405 dark:text-gray-400 mb-1.5All">
                      {lang === 'EN' ? 'Product Interest' : 'የሚፈልጉት እቃ አይነት'}
                    </label>
                    <select
                      id="category"
                      value={category}
                      onChange={(e) => setCategory(e.target.value as Category | 'custom')}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#161616] text-gray-950 dark:text-white text-xs font-sans focus:outline-none focus:border-crimson-600 dark:focus:border-gold-400 transition-all"
                    >
                      <option value="custom">{lang === 'EN' ? 'Custom Design Sheets' : 'ልዩ ዲዛይን'}</option>
                      <option value="living-room">{lang === 'EN' ? 'Living Room Set' : 'የሳሎን ሶፋ ስብስብ'}</option>
                      <option value="bedroom">{lang === 'EN' ? 'King Bed Frame' : 'የመኝታ አልጋ'}</option>
                      <option value="dining">{lang === 'EN' ? 'Dining Furniture' : 'የምግብ ጠረጴዛ'}</option>
                      <option value="doors-cabinets">{lang === 'EN' ? 'Closet, Doors & Cabinet' : 'ቁምሳጥንና በሮች'}</option>
                    </select>
                  </div>
                </div>

                {/* Additional Description sheets */}
                <div>
                  <label htmlFor="description" className="block text-[10px] font-space font-bold uppercase tracking-wider text-gray-405 dark:text-gray-400 mb-1.5 pb-0.5">
                    {lang === 'EN' ? 'Measurements & Style Details' : 'የመለኪያና የዲዛይን ማብራሪያ'}
                  </label>
                  <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={3}
                    placeholder={lang === 'EN' ? 'e.g. 2.5m x 3m mahogany wood closet with deep gold carvings...' : 'ለምሳሌ፡ የሳሎኑ ሶፋ እግሮች የዋንዛ ሆነው በወርቅ ወዝ ዲዛይን እንዲያልፉልኝ...'}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-transparent text-gray-950 dark:text-white text-xs font-sans placeholder-gray-400 focus:outline-none focus:border-crimson-600 dark:focus:border-gold-400 focus:ring-1 focus:ring-crimson-600/20 dark:focus:ring-gold-400/20 transition-all duration-350"
                  />
                </div>

              </div>

              {/* Action buttons footer */}
              <div className="pt-4 border-t border-gray-100 dark:border-white/5 flex items-center justify-end space-x-3">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-5 py-3 rounded-xl text-xs font-space font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 cursor-pointer transition-all"
                  id="cancel-quote-btn"
                >
                  {lang === 'EN' ? 'Cancel' : 'ሰርዝ'}
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-crimson-750 to-crimson-650 dark:from-gold-450 dark:to-gold-550 text-white dark:text-[#121212] text-xs font-space font-bold uppercase tracking-wider shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center space-x-1.5 disabled:opacity-50"
                  id="submit-quote-btn"
                >
                  {loading ? (
                    <span className="w-4 h-4 border-2 border-white dark:border-black border-t-transparent rounded-full animate-spin mr-2" />
                  ) : (
                    <Send size={12} />
                  )}
                  <span>{lang === 'EN' ? 'Send Request' : 'ትዕዛዝ ይላኩ'}</span>
                </button>
              </div>

            </form>
          ) : (
            /* Success confirmation splash screent */
            <div className="p-10 text-center flex flex-col items-center justify-center space-y-6">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', damping: 15 }}
                className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center"
              >
                <CheckCircle size={36} />
              </motion.div>
              
              <div className="space-y-2">
                <h3 className="font-serif text-2xl font-bold text-gray-900 dark:text-white">
                  {lang === 'EN' ? 'Inquiry Logged Successfully!' : 'ትዕዛዝዎ በተሳካ ሁኔታ ተመዝግቧል!'}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 max-w-sm mx-auto leading-relaxed">
                  {lang === 'EN' 
                    ? `Thank you, ${fullName}! Your luxury furniture request has been securely persisted. Our representative Bereket Haylu will coordinate your designs shortly.`
                    : `እናመሰግናለን ${fullName}! የቤት እቃዎች ጥያቄዎ በጥንቃቄ ተቀምጧል። የዲዛይን ባለሙያችን በረከት ኃይሉ በስልክ ቁጥርዎ (${phoneNumber}) በአጭር ሰዓት ውስጥ ያገኛችኋል።`}
                </p>
              </div>

              {/* Double direct link shortcut buttons */}
              <div className="pt-6 w-full max-w-xs space-y-3">
                <a
                  href={`https://t.me/Biruhtesfa_furniture?text=Hello Bereket, I just submitted an inquiry for custom furniture on the portal. My name is ${encodeURIComponent(fullName)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3.5 rounded-xl bg-[#229ED9] text-white font-space text-xs font-bold tracking-wide shadow cursor-pointer text-center hover:scale-103 active:scale-97 transition-all"
                  id="success-telegram-btn"
                >
                  {lang === 'EN' ? 'Open Telegram Chat Instead' : 'ወደ ቴሌግራም ቀጥታ ይሂዱ'}
                </a>

                <button
                  onClick={handleReset}
                  className="block w-full py-3.5 rounded-xl border border-gray-250 dark:border-white/15 hover:bg-gray-50 dark:hover:bg-white/5 text-gray-700 dark:text-gray-200 font-space text-xs font-medium cursor-pointer"
                  id="success-dismiss-btn"
                >
                  {lang === 'EN' ? 'Return to Showroom' : 'ወደ ማሳያ ይመለሱ'}
                </button>
              </div>
            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
