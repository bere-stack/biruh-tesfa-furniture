import { FurnitureItem, Testimonial } from './types';

// Let's use the precise images generated using the AI Image tool
export const IMAGES = {
  hero: '/src/assets/images/hero_furniture_1781282952589.jpg',
  bed: '/src/assets/images/bed_furniture_1781282967404.jpg',
  dining: '/src/assets/images/dining_furniture_1781282980048.jpg',
};

export const FURNITURE_ITEMS: FurnitureItem[] = [
  {
    id: 'abyssinian-sofa',
    title: 'Majestic Heritage Sofa Set',
    titleAmharic: 'የሀገር ቅርስ የሶፋ ስብስብ',
    category: 'living-room',
    priceRange: '180,000 - 240,000 ETB',
    material: 'Premium Cordia Africana (Wanza) & Premium Velvet',
    materialAmharic: 'ውድ የዋንዛ እንጨት እና ልዩ ቬልቬት ጨርቅ',
    description: 'A masterpiece combining traditional Ethiopian hand-carving techniques with modern royal ergonomics. Features gorgeous gold accents on heavy, dense noble wood.',
    descriptionAmharic: 'የሀገር በቀል የእንጨት ቅርፃቅርፅ ጥበብን ከዘመናዊ የቅንጦት አቀማመጥ ጋር ያዋሃደ ድንቅ ስራ። ጠንካራ በሆነው የዋንዛ እንጨት ላይ የወርቅ ወዝ እና ድንቅ እጅ ስራዎችን ያካትታል።',
    image: IMAGES.hero,
    dimensions: '3-Seater: 220x90x95cm | 2-Seater: 170x90x95cm',
    isFeatured: true
  },
  {
    id: 'royal-kulito-bed',
    title: 'Imperial Bedstead Kulito',
    titleAmharic: 'ንጉሳዊ የቁሊቶ አልጋ',
    category: 'bedroom',
    priceRange: '120,000 - 165,000 ETB',
    material: 'Selected Hardwood (Kerero) & Polished Brass Accents',
    materialAmharic: 'የተመረጠ ከረሮ እንጨት እና የተወለወለ ነሐስ',
    description: 'Durable, grand bed frame designed for ultimate master bedrooms. Handcrafted by finest joiners in Halaba Kulito, with fine lines and custom velvet headboard integration.',
    descriptionAmharic: 'ለሚያምር ዘመናዊ መኝታ ቤት የሚሆን ጠንካራ እና ትልቅ የአልጋ ፍሬም። በሀላባ ቁሊቶ ምርጥ ባለሙያዎች የተሰራ፣ ከተስተካከሉ መስመሮች እና ልዩ የቬልቬት ራስጌ ጋር።',
    image: IMAGES.bed,
    dimensions: 'King Size: 200cm x 200cm x 150cm',
    isFeatured: true
  },
  {
    id: 'artisanal-dining-table',
    title: 'Halaba Sovereign Dining Suite',
    titleAmharic: 'ልዩ የሀላባ ምግብ ጠረጴዛና ወንበሮች',
    category: 'dining',
    priceRange: '145,000 - 195,000 ETB',
    material: 'Solid Eucalyptus Globulus (Bahir Zaf) / Treated Zigba Wood',
    materialAmharic: 'ባለ ጥራት የወንዛ ወይም የተስተካከለ የዝግባ እንጨት',
    description: 'Elegant dining set that commands attention. Handcrafted table with 8 accompanying ergonomically carved chairs, boasting flawless wood grain alignment and protective lacquer coating.',
    descriptionAmharic: 'ሁሉንም የሚስብ የሚያምር የመመገቢያ ስብስብ። ጠረጴዛው ከ 8 ምቹ ወንበሮች ጋር የተሰራ ሲሆን፣ ተፈጥሯዊውን የእንጨቱን ውበት የሚያሳይ እና እርጥበትን የሚከላከል ሙጫ የተቀባ ነው።',
    image: IMAGES.dining,
    dimensions: 'Table: 240cm x 100cm x 78cm',
    isFeatured: true
  },
  {
    id: 'chester-classic-sofa',
    title: 'Chesterfield Luxury Velvet Sofa',
    titleAmharic: 'የቬልቬት ቼስተርፊልድ ሶፋ',
    category: 'living-room',
    priceRange: '85,000 - 110,000 ETB',
    material: 'High-Density Foam & Hardwood Frame, Rich Emerald Velvet',
    materialAmharic: 'ከፍተኛ ጥግግት ስፖንጅ፣ ጠንካራ እንጨትና አረንጓዴ የቬልቬት ጨርቅ',
    description: 'Timeless deep-buttoned detailing combined with rolled arms and thick golden legs. Perfect for classic and sophisticated living spaces.',
    descriptionAmharic: 'ጊዜ የማይሽረው የቁልፍ ስራ ዲዛይን ከምርጥ እጅጌ እና ወርቃማ እግሮች ጋር። ለቤትዎ ውበት ልዩ ግርማን የሚሰጥ ሶፋ።',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800',
    dimensions: '220cm x 90cm x 85cm',
    isFeatured: false
  },
  {
    id: 'luxury-closet',
    title: 'Sleek Fitted Wardrobe Showcase',
    titleAmharic: 'ዘመናዊ የተገጠመ የእንጨት ቁምሳጥን',
    category: 'doors-cabinets',
    priceRange: '150,000 - 210,050 ETB',
    material: 'Compressed High-Grade Timber & Oak Veneer Panels',
    materialAmharic: 'ባለከፍተኛ ጥራት የተቀነባበረ እንጨት እና የኦክ ሽፋን',
    description: 'Designed to fit custom dimensions perfectly. Integrated soft-close drawers, gold-finished handles, and beautifully segmented shelves for high utility.',
    descriptionAmharic: 'ለሚፈልጉት ቦታ ልክ እንዲስማማ ተደርጎ የተሰራ። በቀስታ የሚዘጉ መሳቢያዎች፣ በወርቅ የተለበጡ እጀታዎች እና ነገሮችን ለማስቀመጥ በሚገባ የተከፋፈሉ ክፍሎች አሉት።',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800',
    dimensions: 'Custom dimension (Default: 240x260x60cm)',
    isFeatured: false
  },
  {
    id: 'sculptured-front-door',
    title: 'Sovereign Wood Entrance Door',
    titleAmharic: 'ግርማዊ የእንጨት መግቢያ በር',
    category: 'doors-cabinets',
    priceRange: '45,000 - 75,000 ETB',
    material: 'Solid Red Meranti Wood / Local Zigba with Traditional Finish',
    materialAmharic: 'ጠንካራ ዝግባ ወይም ማሆጋኒ እንጨት',
    description: 'A heavy, weather-resistant outer door beautifully carved with geometric relief panels. Symbolizes wealth and longevity at the threshold of the home.',
    descriptionAmharic: 'ከባድ፣ የአየር ንብረት መቋቋም የሚችል እና በጂኦሜትሪክ ቅርጾች ያጌጠ መግቢያ በር። በቤትዎ በር ላይ ጥንካሬንና ውበትን የሚመሰክር።',
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80&w=800',
    dimensions: '210cm x 110cm x 8cm (Customizable)',
    isFeatured: false
  },
  {
    id: 'lounge-armchair',
    title: 'Elite Nordic Wood Armchair',
    titleAmharic: 'ዘና የሚሉበት የታሸገ ወንበር',
    category: 'living-room',
    priceRange: '38,000 - 52,000 ETB',
    material: 'Form-pressed Birch Veneer, Genuine Premium Leather',
    materialAmharic: 'የተቀረጸ የዋንዛ ቅርንጫፍ እና እውነተኛ ቆዳ',
    description: 'Ergonomic structure that provides superb comfort. The dark rich leather contrasts elegantly against polished gold feet.',
    descriptionAmharic: 'እጅግ የላቀ ምቾትን እንዲሰጥ ተደርጎ የተሰራ። ውድ ቆዳው ከሚያብረቀርቁ ወርቃማ እግሮች ጋር ተዳምሮ የላቀ ዲዛይን ፈጥሯል።',
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=800',
    dimensions: '85cm x 85cm x 100cm',
    isFeatured: false
  },
  {
    id: 'master-dresser',
    title: 'Renaissance Oak Dresser & Mirror',
    titleAmharic: 'ዘመናዊ የእንጨት መኳኳያ መስታወትና መሳቢያዎች',
    category: 'bedroom',
    priceRange: '78,000 - 95,000 ETB',
    material: 'Natural Solid Oak with Brushed Gold Finished Knobs',
    materialAmharic: 'ተፈጥሯዊ የኦክ እንጨት ከወርቃማ እጀታዎች ጋር',
    description: 'Six wide drawers offering generous storage. Mounted with a gorgeous circular floating bevelled glass mirror reflecting true high luxury.',
    descriptionAmharic: 'ለማስቀመጫ የሚሆኑ ሰፋ ያሉ ስድስት መሳቢያዎች ያሉት። ውብ የሆነ ክብ መስታወት በላዩ ላይ የተገጠመለት የቅንጦት መገለጫ።',
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800',
    dimensions: '160cm x 45cm x 75cm',
    isFeatured: false
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    author: 'Abebe Kebe',
    authorAmharic: 'አበበ ከበደ',
    role: 'Homeowner, Addis Ababa',
    roleAmharic: 'የቤት ባለቤት፣ አዲስ አበባ',
    comment: 'The quality of the Majestic Heritage Sofa Set exceeded our expectations! The hand craftsmanship is incredible. Bereket Haylus help in guiding the custom design was top-notch.',
    commentAmharic: 'የሀገር ቅርስ ሶፋ ስብስብ ጥራት ከጠበቅነው በላይ አስደንቆናል። የእጅ ቅርፃቅርፁ በጣም ድንቅ ነው። የዲዛይን ገለጻውና አገልግሎታቸው ፍጹም የተስተካከለ ነበር።',
    rating: 5,
    date: 'June 2026'
  },
  {
    id: 't2',
    author: 'Selamawit Geremew',
    authorAmharic: 'ሰላማዊት ገረመው',
    role: 'Interior Designer, Hawassa',
    roleAmharic: 'የቤት ውስጥ ዲዛይነር፣ ሐዋሳ',
    comment: 'Biruh Tesfa is our favorite workshop for premium hardwood. Their joinery is flawless, and they deliver precisely on time. The solid wood bed frame they made for my client was majestic.',
    commentAmharic: 'ብሩህ ተስፋ ለእንጨት እቃዎች ምርጫችን ሆኗል። ስራቸው ጥራት ያለውና በሰዓቱ የሚያስረክብ ነው። ለደንበኛዬ የሰሩት አልጋ በጣም ማራኪ ነው።',
    rating: 5,
    date: 'May 2026'
  },
  {
    id: 't3',
    author: 'Dr. Yosef Teshome',
    authorAmharic: 'ዶ/ር ዮሴፍ ተሾመ',
    role: 'Villa Owner, Halaba Kulito',
    roleAmharic: 'የቪላ ባለቤት፣ ሀላባ ቁሊቶ',
    comment: 'Having Biruh Tesfa in Halaba Kulito is a blessing! They created custom doors and dining tables for my new villa matching Italian luxury catalogs.',
    commentAmharic: 'ብሩህ ተስፋ በሀላባ ቁሊቶ መኖሩ ትልቅ ክብር ነው! ለአዲሱ ቪላዬ የሰሩልኝ በሮችና የመመገቢያ ጠረጴዛዎች ከጣሊያን የቅንጦት ዲዛይኖች እኩል ናቸው።',
    rating: 5,
    date: 'April 2026'
  }
];

export const BRAND_CONTACTS = {
  phone: '0916212042',
  phoneFormated: '+251 91 621 2042',
  telegram: 'https://t.me/Biruhtesfa_furniture', // Real/mock luxurious telegram channel
  instagram: 'https://instagram.com/biruh_tesfa_furniture_halaba',
  facebook: 'https://facebook.com/biruhtesfafurniture',
  location: 'Halaba Kulito, Southern Ethiopia (ሀላባ ቁሊቶ፣ ደቡብ ኢትዮጵያ)',
  developer: {
    name: 'Bereket Haylu',
    phone: '0916212042'
  }
};
