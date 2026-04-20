import { Category, Product, Review } from './types';

export const CATEGORIES: Category[] = [
  {
    id: 'c1',
    name: 'Romance',
    slug: 'romance',
    image: 'https://picsum.photos/seed/roses/800/1000',
    description: 'Express your deepest feelings with our curated red rose collections.'
  },
  {
    id: 'c2',
    name: 'Birthdays',
    slug: 'birthday',
    image: 'https://picsum.photos/seed/birthday/800/1000',
    description: 'Bright and cheerful arrangements for their special day.'
  },
  {
    id: 'c3',
    name: 'Events',
    slug: 'events',
    image: 'https://picsum.photos/seed/wedding/800/1000',
    description: 'Custom floral design for weddings and corporate gatherings.'
  },
  {
    id: 'c4',
    name: 'Sympathy',
    slug: 'sympathy',
    image: 'https://picsum.photos/seed/lily/800/1000',
    description: 'Elegant and respectful tributes during difficult times.'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'The Eternal Rose',
    price: 89.99,
    description: 'A luxurious arrangement of 24 long-stemmed premium red roses, hand-selected for their velvet texture and deep hue.',
    category: 'romance',
    images: ['https://picsum.photos/seed/rose1/1000/1200', 'https://picsum.photos/seed/rose2/1000/1200'],
    features: ['Premium Red Roses', 'Satin Ribbon Wrap', 'Eco-friendly Packaging'],
    isBestSeller: true,
    stockStatus: 'in-stock'
  },
  {
    id: 'p2',
    name: 'Tuscany Sunset',
    price: 65.00,
    description: 'A vibrant mix of sunflowers, orange lilies, and seasonal greenery inspired by the warm glow of an Italian evening.',
    category: 'birthday',
    images: ['https://picsum.photos/seed/sunflower/1000/1200'],
    features: ['Fresh Sunflowers', 'Citrus Accents', 'Hand-tied Bouquet'],
    isBestSeller: true,
    stockStatus: 'low-stock'
  },
  {
    id: 'p3',
    name: 'White Elegance',
    price: 120.00,
    description: 'An architectural arrangement of white hydrangeas, orchids, and calla lilies in an elegant glass vase.',
    category: 'events',
    images: ['https://picsum.photos/seed/white-flower/1000/1200'],
    features: ['Luxury Exotics', 'Designer Vase Included', 'Long-lasting Blooms'],
    stockStatus: 'in-stock'
  },
  {
    id: 'p4',
    name: 'Spring Whisper',
    price: 55.00,
    description: 'Delicate tulips and ranunculus in pastel shades that capture the essence of a fresh spring morning.',
    category: 'birthday',
    images: ['https://picsum.photos/seed/tulip/1000/1200'],
    features: ['Pastel Harmony', 'Delivered in Bud', 'Sweet Fragrance'],
    stockStatus: 'low-stock'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Sarah M.',
    rating: 5,
    content: 'The roses were absolutely stunning. They lasted for over two weeks! The packaging was so elegant.',
    date: '2024-03-15'
  },
  {
    id: 'r2',
    author: 'James T.',
    rating: 5,
    content: 'Saved my anniversary! Ordered at 10 AM, delivered by 2 PM. My wife was thrilled.',
    date: '2024-03-10'
  }
];
