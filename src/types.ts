export type Category = 'living-room' | 'bedroom' | 'dining' | 'doors-cabinets';

export interface FurnitureItem {
  id: string;
  title: string;
  titleAmharic: string;
  category: Category;
  priceRange: string;
  material: string;
  materialAmharic: string;
  description: string;
  descriptionAmharic: string;
  image: string;
  dimensions: string;
  isFeatured: boolean;
}

export interface Testimonial {
  id: string;
  author: string;
  authorAmharic: string;
  role: string;
  roleAmharic: string;
  comment: string;
  commentAmharic: string;
  rating: number;
  date: string;
}

export interface CustomInquiry {
  id: string;
  fullName: string;
  phoneNumber: string;
  location: string;
  category: Category | 'custom';
  description: string;
  selectedProduct?: string;
  createdAt: string;
}
