import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Truck, ShieldCheck, Heart, Share2, Star, Calendar, Minus, Plus, ShoppingBag, Sparkles } from 'lucide-react';
import { PRODUCTS, REVIEWS } from '../constants';
import { Product } from '../types';
import { formatCurrency, cn } from '../lib/utils';

interface ProductDetailProps {
  addToCart: (product: Product, quantity?: number) => void;
}

export default function ProductDetail({ addToCart }: ProductDetailProps) {
  const { id } = useParams();
  const product = PRODUCTS.find(p => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [timeLeft, setTimeLeft] = useState('02:45:12'); // Mock timer

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) return <div>Product Not Found</div>;

  const addons = [
    { id: 'choc', name: 'Artisan Chocolates', price: 15.99 },
    { id: 'vase', name: 'Luxury Glass Vase', price: 25.00 },
    { id: 'card', name: 'Handwritten Calligraphy Card', price: 5.00 }
  ];

  const handleAddonToggle = (id: string) => {
    setSelectedAddons(prev => 
      prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
    );
  };

  return (
    <div className="bg-brand-paper min-h-screen pt-24 pb-24 border-b border-brand-sep">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left: Image Gallery */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="aspect-[4/5] bg-brand-muted overflow-hidden border border-brand-sep relative"
            >
              <img 
                src={product.images[activeImg]} 
                alt={product.name} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="grid grid-cols-4 gap-6">
              {product.images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImg(idx)}
                  className={cn(
                    "aspect-square bg-brand-muted border transition-all overflow-hidden",
                    activeImg === idx ? "border-stone-900" : "border-brand-sep opacity-50 hover:opacity-100"
                  )}
                >
                  <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col py-6">
            {/* Header */}
            <div className="border-b border-brand-sep pb-10 mb-10">
              <div className="flex items-center space-x-3 text-stone-400 mb-6">
                <span className="text-[10px] uppercase letter-spacing-wide font-bold">Verified Collector Choice</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 fill-stone-300 text-stone-300" />)}
                </div>
              </div>
              <h1 className="text-6xl md:text-7xl font-serif italic mb-6 leading-tight">{product.name}</h1>
              <div className="flex items-baseline justify-between">
                <span className="text-3xl font-light text-stone-600">{formatCurrency(product.price)}</span>
                {product.stockStatus === 'low-stock' && (
                  <span className="text-stone-400 text-[10px] uppercase letter-spacing-wide font-bold">
                    Atelier Reserve • Extremely Limited
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="mb-12">
              <p className="text-stone-500 leading-relaxed font-light text-lg italic mb-10 max-w-lg">
                "{product.description} Each arrangement is a singular masterpiece, curated with seasonal rarities that speak the language of elevated affection."
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-12 border-t border-brand-sep pt-10">
                {product.features.map((f, i) => (
                  <div key={i} className="flex items-center text-[10px] uppercase letter-spacing-wide font-bold text-stone-500">
                    <div className="w-1 h-1 bg-brand-blush rounded-full mr-3" />
                    {f}
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery Section */}
            <div className="mb-12 p-8 bg-brand-muted border border-brand-sep space-y-6">
              <label className="text-[10px] uppercase letter-spacing-wide font-bold flex items-center space-x-2 text-stone-500">
                <Calendar className="w-4 h-4" />
                <span>Select Arrival Date</span>
              </label>
              <div className="grid grid-cols-4 gap-4">
                {['Today', 'Tomorrow', 'Apr 22', 'Apr 23'].map((d, i) => (
                  <button 
                    key={i} 
                    className={cn(
                      "py-4 border text-[10px] uppercase letter-spacing-wide font-bold transition-all",
                      i === 0 ? "bg-stone-900 text-white border-stone-900" : "bg-white border-brand-sep hover:border-stone-900 text-stone-400"
                    )}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {/* Add-ons */}
            <div className="mb-12 space-y-6">
              <h3 className="text-[10px] uppercase letter-spacing-wide font-bold text-stone-500">Enhance the Experience</h3>
              <div className="grid grid-cols-1 gap-3">
                {addons.map(addon => (
                  <div 
                    key={addon.id}
                    onClick={() => handleAddonToggle(addon.id)}
                    className={cn(
                      "flex items-center justify-between p-5 border transition-all cursor-pointer group",
                      selectedAddons.includes(addon.id) ? "border-stone-900 bg-brand-blush/20" : "border-brand-sep hover:border-stone-300"
                    )}
                  >
                    <span className="text-xs uppercase letter-spacing-wide font-bold flex items-center">
                      <div className={cn(
                        "w-4 h-4 border border-brand-sep mr-4 flex items-center justify-center transition-colors",
                        selectedAddons.includes(addon.id) && "bg-stone-900 border-stone-900"
                      )}>
                        {selectedAddons.includes(addon.id) && <div className="w-1.5 h-1.5 bg-white" />}
                      </div>
                      {addon.name}
                    </span>
                    <span className="text-xs font-medium text-stone-400">+{formatCurrency(addon.price)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Purchase */}
            <div className="flex gap-4 mb-4">
              <div className="flex items-center border border-brand-sep h-16 bg-white">
                <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="px-6 hover:text-stone-400 h-full transition-colors"><Minus className="w-4 h-4" /></button>
                <span className="w-12 text-center text-sm font-bold">{quantity}</span>
                <button onClick={() => setQuantity(q => q + 1)} className="px-6 hover:text-stone-400 h-full transition-colors"><Plus className="w-4 h-4" /></button>
              </div>
              <button 
                onClick={() => addToCart(product, quantity)}
                className="flex-grow bg-stone-900 text-white h-16 flex items-center justify-center uppercase letter-spacing-wide text-[11px] font-bold hover:bg-stone-800 transition-all shadow-xl active:scale-[0.99]"
              >
                Send Arrangement Now
              </button>
            </div>
            <p className="text-[10px] text-stone-400 italic text-center">Secure checkout powered by Lili's Atelier Encryption.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
