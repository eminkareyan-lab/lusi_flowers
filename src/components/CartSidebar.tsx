import { motion, AnimatePresence } from 'motion/react';
import { X, Minus, Plus, Trash2, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';
import { formatCurrency } from '../lib/utils';
import { Link } from 'react-router-dom';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: string) => void;
  onUpdateQty: (id: string, delta: number) => void;
}

export default function CartSidebar({ isOpen, onClose, items, onRemove, onUpdateQty }: CartSidebarProps) {
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 pointer-events-auto"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-full max-w-md bg-brand-paper z-50 shadow-2xl flex flex-col pointer-events-auto border-l border-brand-sep"
          >
            {/* Header */}
            <div className="p-8 border-b border-brand-sep flex justify-between items-center bg-brand-paper">
              <h2 className="text-xl serif italic font-bold">Shopping Bag</h2>
              <button onClick={onClose} className="p-2 hover:bg-stone-100 transition-colors">
                <X className="w-5 h-5 text-stone-400" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-grow overflow-y-auto p-8 space-y-10">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
                  <div className="w-16 h-16 bg-brand-muted border border-brand-sep rounded-full flex items-center justify-center">
                    <Trash2 className="w-6 h-6 text-stone-300" />
                  </div>
                  <p className="text-stone-400 font-serif italic text-lg text-stone-500">Your bag is empty.</p>
                  <button 
                    onClick={onClose}
                    className="text-[10px] uppercase letter-spacing-wide font-bold border-b border-stone-900 pb-1"
                  >
                    Return to Atelier
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-6">
                    <div className="w-24 h-32 flex-shrink-0 bg-brand-muted border border-brand-sep overflow-hidden">
                      <img 
                        src={item.images[0]} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex-grow flex flex-col justify-between py-1">
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="serif italic text-lg leading-none">{item.name}</h3>
                          <button 
                            onClick={() => onRemove(item.id)}
                            className="text-stone-300 hover:text-stone-900 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-[10px] uppercase letter-spacing-wide font-bold text-stone-400">Arrangement</p>
                      </div>
                      
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center border border-brand-sep h-8 bg-white">
                          <button 
                            onClick={() => onUpdateQty(item.id, -1)}
                            className="px-3 hover:text-stone-400 transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-6 text-center text-[10px] font-bold">{item.quantity}</span>
                          <button 
                            onClick={() => onUpdateQty(item.id, 1)}
                            className="px-3 hover:text-stone-400 transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="text-xs font-bold uppercase letter-spacing-wide">{formatCurrency(item.price * item.quantity)}</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-10 bg-brand-muted border-t border-brand-sep space-y-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-[10px] uppercase letter-spacing-wide font-bold text-stone-400">
                    <span>Subtotal</span>
                    <span>{formatCurrency(subtotal)}</span>
                  </div>
                  <div className="flex justify-between items-center text-xl serif italic font-bold border-t border-brand-sep/20 pt-4">
                    <span>Estimated Total</span>
                    <span>{formatCurrency(subtotal)}</span>
                  </div>
                </div>
                <Link 
                  to="/checkout" 
                  onClick={onClose}
                  className="w-full bg-stone-900 text-white py-5 flex items-center justify-center uppercase letter-spacing-wide text-[11px] font-bold hover:bg-stone-800 transition-all shadow-lg"
                >
                  Checkout at Atelier
                </Link>
                <button 
                  onClick={onClose}
                  className="w-full text-center text-[10px] uppercase letter-spacing-wide font-bold text-stone-400 hover:text-stone-900 transition-colors"
                >
                  Continue Browsing
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
