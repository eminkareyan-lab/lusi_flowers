import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Truck, CreditCard, Lock, ArrowLeft, CheckCircle2, Minus, Plus, Mail, Calendar, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CartItem } from '../types';
import { formatCurrency, cn } from '../lib/utils';

interface CheckoutProps {
  cart: CartItem[];
}

export default function Checkout({ cart }: CheckoutProps) {
  const [step, setStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 15.00;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen pt-32 pb-24 flex items-center justify-center bg-brand-paper px-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl w-full bg-white p-16 text-center border border-brand-sep shadow-2xl"
        >
          <div className="flex justify-center mb-10">
            <div className="w-24 h-24 bg-brand-blush/20 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-12 h-12 text-stone-900" />
            </div>
          </div>
          <h1 className="text-5xl font-serif italic mb-6">Order Received.</h1>
          <p className="text-stone-500 font-light mb-12 leading-relaxed italic text-lg max-w-md mx-auto">
            "Your botanical selection has been registered in our atelier. A confirmation of elegance has been dispatched to your inbox."
          </p>
          <div className="bg-brand-muted p-8 border border-brand-sep mb-10 text-left space-y-4">
            <div className="flex justify-between text-[11px] uppercase letter-spacing-wide font-bold text-stone-400">
              <span>Atelier Reference</span>
              <span className="text-stone-900">#LF-882910</span>
            </div>
            <div className="flex justify-between text-[11px] uppercase letter-spacing-wide font-bold text-stone-400">
              <span>Boutique Arrival</span>
              <span className="text-stone-900 italic">Today, before sunset</span>
            </div>
          </div>
          <Link 
            to="/" 
            className="inline-block bg-stone-900 text-white px-12 py-5 uppercase letter-spacing-wide text-[11px] font-bold hover:bg-stone-800 transition-all shadow-lg"
          >
            Return to Boutique
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-brand-paper min-h-screen pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex flex-col md:flex-row gap-16 lg:gap-24">
          {/* Main Content */}
          <div className="flex-grow max-w-2xl">
            <Link to="/shop" className="inline-flex items-center text-[10px] uppercase letter-spacing-wide font-bold text-stone-400 hover:text-stone-900 transition-colors mb-12">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Return to Catalog
            </Link>

            <div className="mb-12">
              <h1 className="text-6xl font-serif italic mb-4">Finalize Order.</h1>
              <p className="text-stone-500 italic font-light text-lg">Secure white-glove delivery from our botanical atelier.</p>
            </div>

            {/* Stepper */}
            <div className="flex items-center gap-10 mb-16 border-b border-brand-sep pb-8 text-[11px] uppercase letter-spacing-wide font-bold">
              <span className={cn(step === 1 ? "text-stone-900" : "text-stone-300")}>01 Identity</span>
              <span className={cn(step === 2 ? "text-stone-900" : "text-stone-300")}>02 Delivery Address</span>
              <span className={cn(step === 3 ? "text-stone-900" : "text-stone-300")}>03 Payment & Review</span>
            </div>

            <form onSubmit={handleOrder} className="space-y-12">
              {step === 1 && (
                <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <h3 className="serif text-3xl italic">Client Credentials</h3>
                  <div className="grid grid-cols-1 gap-12">
                    <div className="space-y-3">
                      <label className="text-[10px] uppercase letter-spacing-wide font-bold text-stone-400">Electronic Mail</label>
                      <input type="email" placeholder="client@luxury.com" className="w-full bg-transparent border-b border-brand-sep py-4 focus:outline-none focus:border-stone-900 transition-colors uppercase letter-spacing-wide text-sm font-light italic" required />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] uppercase letter-spacing-wide font-bold text-stone-400">Contact Number</label>
                      <input type="tel" placeholder="+1 (555) 000-0000" className="w-full bg-transparent border-b border-brand-sep py-4 focus:outline-none focus:border-stone-900 transition-colors uppercase letter-spacing-wide text-sm font-light italic" required />
                    </div>
                    <button type="button" onClick={() => setStep(2)} className="bg-stone-900 text-white py-5 px-12 uppercase letter-spacing-wide text-[11px] font-bold hover:bg-stone-800 transition-all w-fit shadow-xl">Continue to Logistics</button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <h3 className="serif text-3xl italic">Delivery Destination</h3>
                  <div className="grid grid-cols-2 gap-x-12 gap-y-10">
                    <div className="space-y-3">
                      <label className="text-[10px] uppercase letter-spacing-wide font-bold text-stone-400">Recipient Forename</label>
                      <input type="text" placeholder="First Name" className="w-full bg-transparent border-b border-brand-sep py-4 focus:outline-none focus:border-stone-900 uppercase letter-spacing-wide text-sm font-light italic" required />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] uppercase letter-spacing-wide font-bold text-stone-400">Recipient Surname</label>
                      <input type="text" placeholder="Last Name" className="w-full bg-transparent border-b border-brand-sep py-4 focus:outline-none focus:border-stone-900 uppercase letter-spacing-wide text-sm font-light italic" required />
                    </div>
                    <div className="col-span-2 space-y-3">
                      <label className="text-[10px] uppercase letter-spacing-wide font-bold text-stone-400">Atelier Street Address</label>
                      <input type="text" placeholder="123 Luxury Lane" className="w-full bg-transparent border-b border-brand-sep py-4 focus:outline-none focus:border-stone-900 uppercase letter-spacing-wide text-sm font-light italic" required />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] uppercase letter-spacing-wide font-bold text-stone-400">Postal Code</label>
                      <input type="text" placeholder="90210" className="w-full bg-transparent border-b border-brand-sep py-4 focus:outline-none focus:border-stone-900 uppercase letter-spacing-wide text-sm font-light italic" required />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] uppercase letter-spacing-wide font-bold text-stone-400">City / Atelier Port</label>
                      <input type="text" placeholder="Beverly Hills" className="w-full bg-transparent border-b border-brand-sep py-4 focus:outline-none focus:border-stone-900 uppercase letter-spacing-wide text-sm font-light italic" required />
                    </div>
                  </div>
                  <button type="button" onClick={() => setStep(3)} className="bg-stone-900 text-white py-5 px-12 uppercase letter-spacing-wide text-[11px] font-bold hover:bg-stone-800 transition-all w-fit shadow-xl">Proceed to Secure Payment</button>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <h3 className="serif text-3xl italic">Method of Transaction</h3>
                  <div className="p-12 border border-stone-900 bg-white space-y-10">
                    <div className="flex justify-between items-center border-b border-brand-sep pb-8">
                      <span className="text-[11px] uppercase letter-spacing-wide font-bold">Encrypted Credit Instrument</span>
                      <ShieldCheck className="w-5 h-5 text-stone-900" />
                    </div>
                    <div className="space-y-10">
                      <div className="space-y-3">
                        <label className="text-[10px] uppercase letter-spacing-wide font-bold text-stone-400">Document Identifier</label>
                        <input type="text" placeholder="0000 0000 0000 0000" className="w-full bg-transparent border-b border-brand-sep py-4 focus:outline-none focus:border-stone-900 uppercase letter-spacing-wide text-xs font-mono" required />
                      </div>
                      <div className="grid grid-cols-2 gap-12">
                        <div className="space-y-3">
                          <label className="text-[10px] uppercase letter-spacing-wide font-bold text-stone-400">Expiry Horizon</label>
                          <input type="text" placeholder="MM/YY" className="w-full bg-transparent border-b border-brand-sep py-4 focus:outline-none focus:border-stone-900 uppercase letter-spacing-wide text-xs font-mono" required />
                        </div>
                        <div className="space-y-3">
                          <label className="text-[10px] uppercase letter-spacing-wide font-bold text-stone-400">Verification Cipher</label>
                          <input type="text" placeholder="CVV" className="w-full bg-transparent border-b border-brand-sep py-4 focus:outline-none focus:border-stone-900 uppercase letter-spacing-wide text-xs font-mono" required />
                        </div>
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="w-full bg-stone-900 text-white py-6 uppercase letter-spacing-wide text-[11px] font-bold hover:bg-stone-800 transition-all shadow-2xl">Confirm Transaction — {formatCurrency(total)}</button>
                </div>
              )}
            </form>
          </div>

          {/* Sidebar Summary */}
          <div className="w-full md:w-96 lg:w-[420px]">
            <div className="sticky top-32 bg-brand-muted p-12 border border-brand-sep space-y-12">
              <h3 className="serif text-3xl italic">Atelier Summary</h3>
              <div className="space-y-8 max-h-[450px] overflow-y-auto pr-4 scrollbar-thin">
                {cart.map(item => (
                  <div key={item.id} className="flex gap-6 items-center">
                    <div className="w-20 h-24 bg-white border border-brand-sep flex-shrink-0">
                      <img src={item.images[0]} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" alt={item.name} />
                    </div>
                    <div className="flex-grow flex flex-col justify-center">
                      <h4 className="serif italic text-xl leading-none mb-1">{item.name}</h4>
                      <div className="flex justify-between items-center bg-white/50 px-2 py-1 border border-brand-sep/10">
                        <span className="text-[10px] uppercase letter-spacing-wide font-bold text-stone-400">Unit x{item.quantity}</span>
                        <span className="text-[11px] font-bold">{formatCurrency(item.price * item.quantity)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-5 pt-12 border-t border-brand-sep">
                <div className="flex justify-between text-[11px] uppercase letter-spacing-wide font-bold text-stone-400">
                  <span>Arrangements</span>
                  <span className="text-stone-900">{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex justify-between text-[11px] uppercase letter-spacing-wide font-bold text-stone-400">
                  <span>Concierge Delivery</span>
                  <span className="text-stone-900">{formatCurrency(shipping)}</span>
                </div>
                <div className="flex justify-between text-[11px] uppercase letter-spacing-wide font-bold text-stone-400">
                  <span>at-Source Tax</span>
                  <span className="text-stone-900">{formatCurrency(tax)}</span>
                </div>
                <div className="flex justify-between text-3xl serif italic font-bold pt-6 text-stone-900 border-t border-stone-900/5">
                  <span>Total Due</span>
                  <span>{formatCurrency(total)}</span>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 border border-brand-sep bg-white/70 italic text-[10px] text-stone-400 leading-relaxed">
                <Lock className="w-3 h-3 flex-shrink-0 mt-0.5" />
                <span>"Your botanical transaction is safeguarded by 256-bit atelier-grade encryption. Lili's boutique preserves your absolute privacy."</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
