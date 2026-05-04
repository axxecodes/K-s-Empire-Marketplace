import { X, Heart, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Product } from '../data/products';
import { formatPrice } from '../lib/utils';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: Product[];
  onRemove: (id: string) => void;
  onAddToCart: (p: Product) => void;
}

export default function WishlistDrawer({ isOpen, onClose, items, onRemove, onAddToCart }: WishlistDrawerProps) {
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
                <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-accent fill-accent" />
                </div>
                <h2 className="font-display font-bold text-2xl text-white tracking-tight">Wishlist</h2>
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
                    <Heart className="w-10 h-10 text-slate-700" />
                  </div>
                  <h3 className="font-bold text-xl text-white mb-2">Empty wishlist</h3>
                  <p className="text-slate-500 text-sm">Save your favorites here to find them later.</p>
                </div>
              ) : (
                items.map((item) => (
                  <motion.div 
                    layout
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex gap-5 group bg-white/5 p-5 rounded-[32px] border border-white/5 hover:border-blue-500/30 transition-all"
                  >
                    <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 bg-slate-800">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-sm text-white line-clamp-1">{item.name}</h4>
                        <button 
                          onClick={() => onRemove(item.id)}
                          className="text-slate-600 hover:text-accent transition-colors p-1"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-xs font-bold text-blue-500 mb-4">{formatPrice(item.price)}</p>
                      
                      <button 
                        onClick={() => {
                          onAddToCart(item);
                          onRemove(item.id);
                        }}
                        className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white hover:text-blue-400 transition-colors"
                      >
                        <ShoppingCart className="w-3.5 h-3.5" /> ADD TO BAG
                      </button>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
