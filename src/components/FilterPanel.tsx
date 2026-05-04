import { Filter, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface FilterPanelProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (c: string) => void;
  brands: string[];
  activeBrand: string;
  onBrandChange: (b: string) => void;
  priceRange: [number, number];
  onPriceRangeChange: (r: [number, number]) => void;
}

export default function FilterPanel({
  categories,
  activeCategory,
  onCategoryChange,
  brands,
  activeBrand,
  onBrandChange,
  priceRange,
  onPriceRangeChange
}: FilterPanelProps) {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-display font-bold text-xs uppercase tracking-[0.2em] text-slate-500 flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Categories
          </h3>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {['all', ...categories.sort()].map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={cn(
                "px-5 py-2.5 rounded-xl text-xs font-bold transition-all border",
                activeCategory === cat 
                  ? "bg-blue-500 border-blue-500 text-white shadow-lg shadow-blue-500/30" 
                  : "bg-white/5 border-white/5 text-slate-400 hover:border-white/20 hover:text-white"
              )}
            >
              {cat === 'all' ? 'All Units' : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-display font-bold text-xs uppercase tracking-[0.2em] text-slate-500 flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-500" /> Collections
          </h3>
        </div>
        <div className="space-y-3">
          {['all', ...brands.sort()].map((brand) => (
            <button
              key={brand}
              onClick={() => onBrandChange(brand)}
              className={cn(
                "w-full flex items-center justify-between px-5 py-4 rounded-2xl text-sm font-bold transition-all border",
                activeBrand === brand 
                  ? "bg-white/10 border-blue-500/50 text-white" 
                  : "bg-white/5 border-white/10 text-slate-400 hover:bg-white/10 hover:text-white"
              )}
            >
              {brand === 'all' ? 'All Brands' : brand}
              {activeBrand === brand && <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.6)]" />}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-blue-600/10 border border-blue-500/20 rounded-3xl p-6">
        <h3 className="font-display font-bold text-xs uppercase tracking-[0.2em] text-blue-400 mb-6">
          Price Index
        </h3>
        <div className="space-y-6">
           <input 
              type="range" 
              min="0" 
              max="3000000" 
              step="50000"
              value={priceRange[1]}
              onChange={(e) => onPriceRangeChange([0, parseInt(e.target.value)])}
              className="w-full accent-blue-500 h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer"
           />
           <div className="flex justify-between items-center text-[11px] font-bold text-slate-400">
             <span>₦0</span>
             <span className="text-white bg-blue-500 px-3 py-1.5 rounded-lg shadow-lg shadow-blue-500/20">
               UNDER ₦{(priceRange[1] / 1000).toLocaleString()}K
             </span>
           </div>
        </div>
      </div>
    </div>
  );
}
