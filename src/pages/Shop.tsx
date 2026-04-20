import { useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { CATEGORIES, PRODUCTS } from '../constants';
import { Product } from '../types';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../lib/utils';
import { Filter, SlidersHorizontal, ArrowRight } from 'lucide-react';

interface ShopProps {
  addToCart: (product: Product, quantity?: number) => void;
}

export default function Shop({ addToCart }: ShopProps) {
  const { category: categorySlug } = useParams();
  
  const currentCategory = CATEGORIES.find(c => c.slug === categorySlug);
  const products = categorySlug 
    ? PRODUCTS.filter(p => p.category === categorySlug)
    : PRODUCTS;

  return (
    <div className="bg-brand-paper min-h-screen">
      {/* Header / Intro */}
      <section className="bg-white border-b border-brand-sep pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="uppercase tracking-[0.3em] text-[10px] font-bold text-stone-400 mb-4"
            >
              Curated Catalog
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-serif italic mb-6"
            >
              {currentCategory ? currentCategory.name : 'Seasonal Range'}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-stone-500 font-light text-lg leading-relaxed max-w-2xl"
            >
              {currentCategory 
                ? currentCategory.description 
                : 'Bespoke seasonal arrangements delivered to your door. Hand-tied by our master florists to capture life\'s most precious moments.'}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filters & Sorting Sticky Bar */}
      <div className="sticky top-20 z-30 bg-white/80 backdrop-blur-md border-b border-brand-sep">
        <div className="max-w-7xl mx-auto px-10 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-8 text-[10px] uppercase letter-spacing-wide font-bold">
            <button className="flex items-center space-x-2 hover:text-stone-400 transition-colors">
              <Filter className="w-3 h-3" />
              <span>Filter By</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-stone-400 transition-colors">
              <SlidersHorizontal className="w-3 h-3" />
              <span>Sort By</span>
            </button>
          </div>
          <p className="text-[10px] text-stone-400 uppercase letter-spacing-wide font-bold">
            {products.length} Results
          </p>
        </div>
      </div>

      {/* Product Grid */}
      <section className="py-16 px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-20">
            {products.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                <div className="group">
                  <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] overflow-hidden bg-brand-muted border border-brand-sep mb-6">
                    <img 
                      src={product.images[0]} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    {product.stockStatus === 'low-stock' && (
                      <span className="absolute top-4 right-4 bg-brand-blush text-stone-900 border border-brand-sep px-3 py-1 text-[9px] uppercase letter-spacing-wide font-bold">
                        Limited Quantities
                      </span>
                    )}
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart(product);
                      }}
                      className="absolute inset-x-0 bottom-0 bg-stone-900 text-white py-4 opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 uppercase letter-spacing-wide text-[10px] font-bold"
                    >
                      Quick Purchase
                    </button>
                  </Link>
                  <div className="flex flex-col">
                    <Link to={`/product/${product.id}`}>
                      <h3 className="font-serif italic text-2xl mb-1 hover:text-stone-400 transition-colors">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="text-stone-500 font-medium text-xs letter-spacing-wide uppercase">{formatCurrency(product.price)}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {products.length === 0 && (
            <div className="py-32 text-center">
              <h2 className="text-4xl font-serif italic text-stone-300">No arrangements found.</h2>
              <Link to="/shop" className="mt-8 inline-block uppercase letter-spacing-wide text-[10px] font-bold border-b border-stone-900 pb-1">
                View All Designs
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Suggestion Section for custom orders */}
      <section className="py-24 bg-stone-900 text-white px-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center space-y-12 md:space-y-0 md:space-x-20">
          <div className="flex-1">
            <span className="text-[10px] uppercase letter-spacing-wide font-bold text-stone-500 mb-4 block">Bespoke Services</span>
            <h2 className="text-5xl font-serif italic mb-8 leading-tight">Can't find the perfect <br /> match?</h2>
            <p className="text-stone-400 font-light text-lg mb-10 leading-relaxed italic">
              "We specialize in bespoke atelier arrangements and large-scale editorial installations. Our master florists are ready to curate your specific vision."
            </p>
            <button className="bg-white text-stone-900 px-10 py-5 uppercase letter-spacing-wide text-[11px] font-bold hover:bg-stone-200 transition-all">
              Inquire for Custom Design
            </button>
          </div>
          <div className="flex-1 aspect-[4/5] w-full border border-white/10 overflow-hidden">
            <img 
              src="https://picsum.photos/seed/florists/1000/1200" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100" 
              alt="Custom Floral Design"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
