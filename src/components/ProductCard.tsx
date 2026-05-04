import { Heart, ShoppingCart, Plus, Minus, Info } from 'lucide-react';
import { motion } from 'motion/react';
import { Product } from '../data/products';
import { cn, formatPrice } from '../lib/utils';

interface ProductCardProps {
  product: Product;
  onAddToCart: (p: Product) => void;
  onToggleWishlist: (p: Product) => void;
  isWishlisted: boolean;
  key?: string;
}

export default function ProductCard({ product, onAddToCart, onToggleWishlist, isWishlisted }: ProductCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="group bg-white/5 border border-white/10 rounded-[32px] p-5 hover:bg-white/10 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden relative"
    >
      {/* hot tag */}
      {product.isHot && (
        <div className="absolute top-6 left-6 z-10 bg-blue-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-lg shadow-xl">
          HOT ITEM
        </div>
      )}

      {/* image container */}
      <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-5 relative bg-slate-800/50">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent group-hover:from-blue-500/20 transition-all duration-500" />
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-x-4 bottom-4 flex justify-between opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          <button 
            onClick={() => onToggleWishlist(product)}
            className={cn(
               "p-3 rounded-xl backdrop-blur-md shadow-lg transition-transform hover:scale-110 active:scale-95",
               isWishlisted ? "bg-accent text-white" : "bg-white/10 text-white border border-white/10"
            )}
          >
            <Heart className={cn("w-5 h-5", isWishlisted && "fill-current")} />
          </button>
          <button className="p-3 bg-white/10 backdrop-blur-md rounded-xl text-white border border-white/10 shadow-lg transition-transform hover:scale-110 active:scale-95">
            <Info className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* info */}
      <div className="px-1 flex flex-col h-fit">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400">{product.brand}</span>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
            <span className="text-[10px] font-bold text-green-500 uppercase tracking-widest">Available</span>
          </div>
        </div>
        <h3 className="font-display font-bold text-xl mb-2 text-white line-clamp-1">{product.name}</h3>
        <p className="text-xs text-slate-400 line-clamp-2 mb-6 leading-relaxed">
          {product.description}
        </p>

        <div className="mt-auto flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-slate-500 line-through mb-0.5">
              {formatPrice(product.price * 1.2)}
            </span>
            <span className="font-display font-black text-2xl tracking-tight text-blue-400">
              {formatPrice(product.price)}
            </span>
          </div>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-blue-500 text-white p-4 rounded-2xl shadow-xl shadow-blue-500/20 hover:bg-blue-600 transition-all transform active:scale-90"
          >
            <Plus className="w-6 h-6" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
