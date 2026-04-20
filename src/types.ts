export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  images: string[];
  features: string[];
  isBestSeller?: boolean;
  stockStatus: 'in-stock' | 'low-stock' | 'out-of-stock';
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
  selectedAddons?: string[];
  deliveryDate?: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  content: string;
  date: string;
}
