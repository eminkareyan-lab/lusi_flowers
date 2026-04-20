import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Truck, ShieldCheck, Heart, Sparkles, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CATEGORIES, PRODUCTS } from '../constants';
import { Product } from '../types';
import { formatCurrency } from '../lib/utils';

interface HomeProps {
  addToCart: (product: Product, quantity?: number) => void;
}

export default function Home({ addToCart }: HomeProps) {
  const bestSellers = PRODUCTS.filter(p => p.isBestSeller);

  return (
    <div className="flex flex-col min-h-[calc(100vh-80px)]">
      {/* Hero Section - Split Grid */}
      <section className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-brand-sep">
        {/* Left Column: Messaging */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-5 p-10 lg:p-16 flex flex-col justify-center border-r border-brand-sep bg-brand-paper"
        >
          <span className="text-[10px] uppercase letter-spacing-wide mb-6 text-stone-500 font-bold">
            Premium Floral Atelier — Est. 2024
          </span>
          <h1 className="text-6xl md:text-8xl serif italic leading-[1.1] mb-8 text-brand-ink">
            Artfully Crafted <br /> <span className="text-stone-400">Emotions.</span>
          </h1>
          <p className="text-sm text-stone-600 mb-12 leading-relaxed max-w-sm font-light">
            Bespoke seasonal arrangements delivered to your door. Hand-tied by our master florists to capture life's most precious moments with botanical precision.
          </p>
          <div className="flex flex-col gap-6">
            <Link 
              to="/shop"
              className="bg-stone-900 text-white px-10 py-5 text-[11px] uppercase letter-spacing-wide hover:bg-stone-800 transition-colors inline-block text-center w-fit"
            >
              Send Blooms Now
            </Link>
            <div className="flex items-center space-x-3 text-[10px] text-stone-400 italic">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-stone-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-stone-400"></span>
              </span>
              <span>Order in the next 1h 42m for guaranteed same-day delivery.</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Featured Imagery & Teasers */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="lg:col-span-7 bg-brand-muted p-10 lg:p-16 flex flex-col gap-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 h-full">
            {/* Featured Product */}
            <div className="relative aspect-[4/5] bg-stone-200 group overflow-hidden border border-brand-sep shadow-sm">
              <img 
                src={bestSellers[0]?.images[0] || "https://picsum.photos/seed/luxury-flower/1000/1200"} 
                alt="Featured arrangement" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/40 via-black/20 to-transparent text-white">
                <div className="text-[10px] uppercase font-bold letter-spacing-wide mb-1">Featured Arrangement</div>
                <div className="serif text-2xl italic leading-none">{bestSellers[0]?.name} — {formatCurrency(bestSellers[0]?.price)}</div>
              </div>
              <Link to={`/product/${bestSellers[0]?.id}`} className="absolute inset-0 z-10" />
            </div>

            {/* Side Teasers */}
            <div className="flex flex-col gap-8">
              <div className="flex-1 bg-brand-blush p-8 flex flex-col justify-center border border-brand-sep hover:bg-[#ebd5d1] transition-colors group">
                <h3 className="serif text-2xl italic mb-3">Custom Bouquets</h3>
                <p className="text-xs text-stone-600 mb-6 font-light">Speak with a lead designer for bespoke events, weddings & editorial installations.</p>
                <Link to="/shop/events" className="text-[10px] uppercase font-bold border-b border-stone-900 pb-1 w-fit group-hover:border-transparent transition-all">
                  Inquire Now
                </Link>
              </div>
              <div className="flex-1 bg-white p-8 flex flex-col justify-center border border-brand-sep hover:bg-stone-50 transition-colors group">
                <h3 className="serif text-2xl italic mb-3">The Gift Edit</h3>
                <p className="text-xs text-stone-600 mb-6 font-light">Curated pairings of chocolates, scents, and local wines from our signature boutique.</p>
                <Link to="/shop" className="text-[10px] uppercase font-bold border-b border-stone-900 pb-1 w-fit group-hover:border-transparent transition-all">
                  View Add-ons
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-auto flex justify-between items-end border-t border-brand-sep pt-10">
            <div className="flex gap-12 text-[10px] uppercase letter-spacing-wide font-bold">
              <div className="flex flex-col gap-3">
                <span className="text-stone-400">Trust</span>
                <span className="text-brand-ink">9.8/10 Rated</span>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-stone-400">Service</span>
                <span className="text-brand-ink">24/7 Support</span>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-stone-400">Ethos</span>
                <span className="text-brand-ink">Eco Sourced</span>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-12 h-12 border border-brand-sep rounded-full flex items-center justify-center hover:bg-stone-100 cursor-pointer transition-colors text-stone-400">←</div>
              <div className="w-12 h-12 border border-stone-900 rounded-full flex items-center justify-center bg-stone-900 text-white hover:bg-stone-800 cursor-pointer transition-colors shadow-lg">→</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Occasions Gallery */}
      <section className="py-24 px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[10px] uppercase letter-spacing-wide font-bold text-stone-400 mb-4 block">Store Directory</span>
            <h2 className="text-5xl md:text-6xl font-serif italic mb-2">Shop by Occasion</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {CATEGORIES.map((category) => (
              <Link 
                key={category.id} 
                to={`/shop/${category.slug}`}
                className="group relative aspect-[3/4] overflow-hidden border border-brand-sep"
              >
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-ink/10 group-hover:bg-brand-ink/30 transition-all duration-500" />
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <h3 className="serif text-3xl">{category.name}</h3>
                  <ArrowRight className="w-6 h-6" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


interface ProductCardProps {
  product: Product;
  addToCart: (product: Product, quantity?: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, addToCart }) => {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="group"
    >
      <Link to={`/product/${product.id}`} className="block mb-6 relative aspect-[4/5] overflow-hidden bg-gray-100 rounded-sm">
        <img 
          src={product.images[0]} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        {product.isBestSeller && (
          <span className="absolute top-4 left-4 bg-brand-accent text-white px-3 py-1 text-[10px] uppercase tracking-widest font-bold">
            Best Seller
          </span>
        )}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button 
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="w-full bg-white/90 backdrop-blur-md text-brand-primary py-3 uppercase tracking-widest text-xs font-bold hover:bg-brand-primary hover:text-white transition-colors"
          >
            Quick Add
          </button>
        </div>
      </Link>
      <div className="text-center">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif text-xl mb-1 hover:text-brand-accent transition-colors">{product.name}</h3>
        </Link>
        <p className="text-brand-accent font-medium">{formatCurrency(product.price)}</p>
      </div>
    </motion.div>
  );
};
