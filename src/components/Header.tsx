import { Link } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
}

export default function Header({ cartCount, onOpenCart }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Shop All', href: '/shop' },
    { name: 'Birthdays', href: '/shop/birthday' },
    { name: 'Romance', href: '/shop/romance' },
    { name: 'Events', href: '/shop/events' }
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-brand-paper/80 backdrop-blur-md border-b border-brand-sep">
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex justify-between items-center h-20">
          {/* Left Nav */}
          <div className="hidden md:flex gap-8 text-[11px] uppercase letter-spacing-wide font-semibold">
            <Link to="/shop" className="hover:text-stone-500 transition-colors">Shop All</Link>
            <Link to="/shop/romance" className="hover:text-stone-500 transition-colors">Occasions</Link>
          </div>

          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center absolute left-1/2 -translate-x-1/2">
            <span className="text-2xl serif font-bold italic tracking-normal lowercase">Lilis_flowers</span>
          </Link>

          {/* Right Nav / Actions */}
          <div className="flex items-center gap-8 text-[11px] uppercase letter-spacing-wide font-semibold">
            <div className="hidden md:flex gap-8">
              <Link to="/shop/events" className="hover:text-stone-500 transition-colors">Events</Link>
              <button 
                onClick={onOpenCart}
                className="relative hover:text-stone-500 transition-colors"
              >
                Cart ({cartCount})
              </button>
            </div>
            
            {/* Mobile Menu Toggle */}
            <div className="flex md:hidden">
              <button onClick={() => setIsMenuOpen(true)}>
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-50"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 w-full max-w-sm bg-brand-soft z-50 p-6 shadow-xl"
            >
              <div className="flex justify-between items-center mb-8">
                <span className="text-xl font-serif uppercase tracking-widest font-semibold">Menu</span>
                <button onClick={() => setIsMenuOpen(false)}>
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg font-medium uppercase tracking-wider border-b border-brand-primary/10 pb-2"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
