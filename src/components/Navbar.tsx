import { useState, useEffect } from 'react';
import { Search, ShoppingCart, Heart, Menu, X, Laptop, Smartphone, Headphones, Zap, SlidersHorizontal } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

interface NavbarProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onSearch: (query: string) => void;
  activeCategory: string;
  onCategoryChange: (cat: string) => void;
  onToggleMobileFilters?: () => void;
}

export default function Navbar({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onSearch,
  activeCategory,
  onCategoryChange,
  onToggleMobileFilters
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    { id: 'all', name: 'All', icon: Zap },
    { id: 'smartphones', name: 'Phones', icon: Smartphone },
    { id: 'laptops', name: 'Laptops', icon: Laptop },
    { id: 'chargers', name: 'Chargers', icon: Zap },
    { id: 'accessories', name: 'Accessories', icon: Headphones },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "frosted-glass py-3 shadow-lg shadow-black/20" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
        {/* Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => onCategoryChange('all')}
        >
          <div className="bg-blue-500 p-2 rounded-xl group-hover:rotate-12 transition-transform shadow-lg shadow-blue-500/20">
            <Zap className="text-white w-6 h-6" />
          </div>
          <span className="font-display font-extrabold text-2xl tracking-tighter text-white">
            K'S<span className="text-blue-500"> EMPIRE</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-4 bg-white/5 p-1.5 rounded-2xl border border-white/5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all",
                activeCategory === cat.id 
                  ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30" 
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              )}
            >
              <cat.icon className="w-4 h-4" />
              {cat.name}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="flex-1 max-w-sm relative hidden sm:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            placeholder="Find tech..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              onSearch(e.target.value);
            }}
            className="w-full bg-slate-900/50 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button 
            onClick={onToggleMobileFilters}
            className="lg:hidden p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-slate-400"
          >
            <SlidersHorizontal className="w-5 h-5" />
          </button>
          
          <button 
            onClick={onOpenWishlist}
            className="relative p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all group"
          >
            <Heart className={cn("w-5 h-5", wishlistCount > 0 ? "text-accent fill-accent" : "text-slate-400")} />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-accent text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                {wishlistCount}
              </span>
            )}
          </button>
          
          <button 
            onClick={onOpenCart}
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 transition-all px-5 py-2.5 rounded-xl text-white text-sm font-bold shadow-lg shadow-blue-500/20 active:scale-95"
          >
            <ShoppingCart className="w-5 h-5" />
            <span className="hidden md:inline">Cart</span>
            {cartCount > 0 && (
              <span className="bg-white/20 px-1.5 py-0.5 rounded text-[10px]">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
