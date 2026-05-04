import { X, ShoppingBag, Trash2, Plus, Minus, ArrowRight, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Product } from '../data/products';
import { formatPrice } from '../lib/utils';
import { useState } from 'react';

interface CartItem extends Product {
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
  onCheckout: () => void;
}

export default function CartDrawer({ isOpen, onClose, items, onUpdateQuantity, onRemove, onCheckout }: CartDrawerProps) {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 500000 ? 0 : 5000;

  const handleCheckout = async () => {
    setIsCheckingOut(true);
    await onCheckout();
    setIsCheckingOut(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-slate-900 border-l border-white/10 z-[60] shadow-2xl flex flex-col"
          >
            <div className="p-8 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <ShoppingBag className="w-6 h-6 text-white" />
                </div>
                <h2 className="font-display font-bold text-2xl text-white tracking-tight">Your Bag</h2>
              </div>
              <button 
                onClick={onClose}
                className="p-2.5 hover:bg-white/5 text-slate-400 hover:text-white rounded-xl transition-all"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-8 space-y-8">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-8">
                  <div className="w-24 h-24 bg-white/5 rounded-[40px] flex items-center justify-center mb-6">
                    <ShoppingBag className="w-10 h-10 text-slate-700" />
                  </div>
                  <h3 className="font-bold text-xl text-white mb-2">Your bag is empty</h3>
                  <p className="text-slate-500 text-sm">Looks like you haven't added anything to your collection yet.</p>
                </div>
              ) : (
                items.map((item) => (
                  <motion.div 
                    layout
                    key={item.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex gap-5 group"
                  >
                    <div className="w-24 h-24 rounded-2xl overflow-hidden bg-slate-800 shrink-0 border border-white/5">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-bold text-sm text-white line-clamp-1">{item.name}</h4>
                        <button 
                          onClick={() => onRemove(item.id)}
                          className="text-slate-600 hover:text-accent transition-colors p-1"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-xs font-bold text-blue-500 mb-4">{formatPrice(item.price)}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center bg-white/5 rounded-xl p-1 border border-white/5">
                          <button 
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="p-1.5 hover:bg-white/5 text-white rounded-lg transition-all active:scale-90"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-4 font-mono font-bold text-sm text-white">{item.quantity}</span>
                          <button 
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="p-1.5 hover:bg-white/5 text-white rounded-lg transition-all active:scale-90"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="font-display font-black text-white">{formatPrice(item.price * item.quantity)}</span>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-8 bg-slate-800/50 border-t border-white/10 backdrop-blur-md">
                <div className="space-y-4 mb-8 text-sm">
                  <div className="flex justify-between text-slate-400">
                    <span className="font-semibold uppercase tracking-widest text-[10px]">Subtotal</span>
                    <span className="font-bold text-white">{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span className="font-semibold uppercase tracking-widest text-[10px]">Estimated Shipping</span>
                    <span className="font-bold text-white">{shipping > 0 ? formatPrice(shipping) : <span className="text-blue-400 font-bold uppercase text-[10px]">Complimentary</span>}</span>
                  </div>
                  <div className="h-px bg-white/5 my-4" />
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-lg text-white">Grand Total</span>
                    <span className="font-display font-black text-3xl text-blue-400">{formatPrice(subtotal + shipping)}</span>
                  </div>
                </div>
                
                <button 
                  disabled={isCheckingOut}
                  onClick={handleCheckout}
                  className="w-full bg-blue-500 text-white py-4.5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-blue-600 transition-all shadow-2xl shadow-blue-500/20 active:scale-95 disabled:opacity-70"
                >
                  {isCheckingOut ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" /> Finalizing...
                    </>
                  ) : (
                    <>
                      Place Secure Order <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
