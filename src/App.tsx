import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { products, Product } from './data/products';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import FilterPanel from './components/FilterPanel';
import CartDrawer from './components/CartDrawer';
import WishlistDrawer from './components/WishlistDrawer';
import SkeletonCard from './components/SkeletonCard';
import { Zap, LayoutGrid, ListFilter, CheckCircle2, ArrowLeft, X } from 'lucide-react';

interface CartItem extends Product {
  quantity: number;
}

function SuccessPage() {
  return (
    <div className="min-h-screen pt-40 pb-20 px-6 flex flex-col items-center justify-center text-center bg-slate-900 overflow-hidden relative">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[150px]" />
      
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-24 h-24 bg-blue-500/20 frosted-glass rounded-[32px] flex items-center justify-center mb-8 shadow-2xl shadow-blue-500/20"
      >
        <CheckCircle2 className="w-12 h-12 text-blue-400" />
      </motion.div>
      <h1 className="text-5xl lg:text-7xl font-display font-black mb-6 text-white uppercase italic tracking-tight">ORDER SECURED!</h1>
      <p className="text-slate-400 mb-12 max-w-md mx-auto text-lg leading-relaxed font-medium">Your hardware is being processed. A confirmation protocol has been sent to your clearance email.</p>
      <Link 
        to="/"
        className="bg-blue-500 text-white px-10 py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-blue-600 transition-all shadow-2xl shadow-blue-500/30 active:scale-95"
      >
        <ArrowLeft className="w-5 h-5" /> Return to Grid
      </Link>
    </div>
  );
}

function MainStore() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [brand, setBrand] = useState('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 3000000]);

  // Simulate initial load
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Derived data
  const categories = useMemo(() => Array.from(new Set(products.map(p => p.category))), []);
  const brands = useMemo(() => Array.from(new Set(products.map(p => p.brand))), []);

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchCategory = category === 'all' || p.category === category;
      const matchBrand = brand === 'all' || p.brand === brand;
      const matchPrice = p.price <= priceRange[1];
      return matchSearch && matchCategory && matchBrand && matchPrice;
    });
  }, [searchQuery, category, brand, priceRange]);

  // Actions
  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateCartQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const toggleWishlist = (product: Product) => {
    setWishlist(prev => {
      const isExist = prev.find(p => p.id === product.id);
      if (isExist) return prev.filter(p => p.id !== product.id);
      return [...prev, product];
    });
  };

  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleCheckout = async () => {
    const userEmail = prompt('Please enter your email to finalize your secure Paystack order:', 'customer@ksempire.com');
    if (!userEmail) return;

    setIsCheckingOut(true);
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: cart, email: userEmail }),
      });
      const session = await response.json();
      if (session.url) {
        window.location.href = session.url;
      } else {
        alert(session.error || 'Payment gateway initialization failed. Please check your Paystack API key.');
        setIsCheckingOut(false);
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('A technical error occurred while initializing your session.');
      setIsCheckingOut(false);
    }
  };

  return (
    <>
      <Navbar 
        cartCount={cart.reduce((s, i) => s + i.quantity, 0)}
        wishlistCount={wishlist.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onSearch={setSearchQuery}
        activeCategory={category}
        onCategoryChange={setCategory}
        onToggleMobileFilters={() => setIsMobileFiltersOpen(true)}
      />

      <AnimatePresence>
        {isMobileFiltersOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileFiltersOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] lg:hidden"
            />
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              className="fixed left-0 top-0 bottom-0 w-80 bg-slate-900 border-r border-white/10 z-[70] p-8 lg:hidden overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-display font-black text-white italic uppercase tracking-tight">Security Filters</h2>
                <button onClick={() => setIsMobileFiltersOpen(false)} className="p-2 text-slate-400"><X /></button>
              </div>
              <FilterPanel 
                 categories={categories}
                 activeCategory={category}
                 onCategoryChange={(c) => { setCategory(c); setIsMobileFiltersOpen(false); }}
                 brands={brands}
                 activeBrand={brand}
                 onBrandChange={(b) => { setBrand(b); setIsMobileFiltersOpen(false); }}
                 priceRange={priceRange}
                 onPriceRangeChange={setPriceRange}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <main>
        <AnimatePresence mode="wait">
          {category === 'all' && searchQuery === '' && (
            <motion.div
              key="hero"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Hero />
            </motion.div>
          )}
        </AnimatePresence>

        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-[280px_1fr] gap-12">
            <aside className="hidden lg:block">
              <div className="sticky top-28 space-y-8 frosted-glass p-10 rounded-[40px]">
                 <FilterPanel 
                    categories={categories}
                    activeCategory={category}
                    onCategoryChange={setCategory}
                    brands={brands}
                    activeBrand={brand}
                    onBrandChange={setBrand}
                    priceRange={priceRange}
                    onPriceRangeChange={setPriceRange}
                 />
              </div>
            </aside>

            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-4xl font-display font-black tracking-tight text-white uppercase italic">
                    {category === 'all' ? 'Hardware' : category}
                  </h2>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-2">{filteredProducts.length} Units Available</p>
                </div>
                
                <div className="flex items-center gap-2 bg-white/5 p-1 rounded-2xl border border-white/10">
                   <button className="p-2.5 rounded-xl bg-blue-500 shadow-lg shadow-blue-500/20 text-white">
                      <LayoutGrid className="w-5 h-5" />
                   </button>
                   <button 
                    onClick={() => {
                      setIsLoading(true);
                      setTimeout(() => setIsLoading(false), 800);
                    }}
                    className="p-2.5 rounded-xl text-slate-500 hover:text-white transition-colors"
                   >
                      <ListFilter className="w-5 h-5" />
                   </button>
                </div>
              </div>

              {isLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 pb-20">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <SkeletonCard key={i} />
                  ))}
                </div>
              ) : filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 pb-20">
                  <AnimatePresence mode="popLayout">
                    {filteredProducts.map((product) => (
                      <ProductCard 
                        key={product.id}
                        product={product}
                        onAddToCart={addToCart}
                        onToggleWishlist={toggleWishlist}
                        isWishlisted={!!wishlist.find(p => p.id === product.id)}
                      />
                    ))}
                  </AnimatePresence>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-40 frosted-glass rounded-[40px] border-dashed">
                  <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6">
                    <Zap className="w-10 h-10 text-slate-800" />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-2 text-white">Zero units found</h3>
                  <p className="text-slate-500 mb-8 max-w-xs text-center text-sm">No hardware matches your active security clearance or filters.</p>
                  <button 
                    onClick={() => {
                      setCategory('all');
                      setBrand('all');
                      setPriceRange([0, 3000000]);
                      setSearchQuery('');
                    }}
                    className="bg-blue-500 text-white px-8 py-3 rounded-2xl font-bold active:scale-95 transition-transform"
                  >
                    Reset Grid Systems
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={updateCartQuantity}
        onRemove={removeFromCart}
        onCheckout={handleCheckout}
      />

      <WishlistDrawer 
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        items={wishlist}
        onRemove={(id) => setWishlist(prev => prev.filter(p => p.id !== id))}
        onAddToCart={addToCart}
      />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-900 text-slate-200">
        <Routes>
          <Route path="/" element={<MainStore />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>

        <footer className="frosted-glass-heavy border-t-0 py-20 px-6 relative overflow-hidden">
          {/* Background Decor */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -mr-32 -mt-32" />
          
          <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 text-left relative z-10">
            <div className="md:col-span-2 space-y-6">
              <div className="flex items-center gap-3">
                <div className="bg-blue-500 p-2 rounded-xl">
                  <Zap className="text-white w-6 h-6" />
                </div>
                <span className="font-display font-black text-3xl tracking-tighter text-white uppercase text-left">K's Empire</span>
              </div>
              <p className="text-slate-500 max-w-sm leading-relaxed font-medium">
                Pioneering the digital frontier with a focus on uncompromising quality, technical excellence, and visionary design.
              </p>
            </div>
            <div>
              <h4 className="font-display font-bold mb-8 text-[10px] uppercase tracking-[0.3em] text-blue-500">Inventory</h4>
              <ul className="space-y-4 text-slate-400 text-sm font-semibold">
                <li className="hover:text-white cursor-pointer transition-colors">Elite Phones</li>
                <li className="hover:text-white cursor-pointer transition-colors">Workstation Laptops</li>
                <li className="hover:text-white cursor-pointer transition-colors">Performance Audio</li>
                <li className="hover:text-white cursor-pointer transition-colors">Energy Solutions</li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-bold mb-8 text-[10px] uppercase tracking-[0.3em] text-blue-500">Concierge</h4>
              <ul className="space-y-4 text-slate-400 text-sm font-semibold">
                <li className="hover:text-white cursor-pointer transition-colors">Track Shipments</li>
                <li className="hover:text-white cursor-pointer transition-colors">Elite Warranty</li>
                <li className="hover:text-white cursor-pointer transition-colors">Technical Support</li>
                <li className="hover:text-white cursor-pointer transition-colors">Privileged Access</li>
              </ul>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600">
            <p>© 2026 K'S EMPIRE GLOBAL TRADING. ENGINEERED FOR EXCELLENCE.</p>
            <div className="flex gap-8">
              <span className="hover:text-slate-400 cursor-pointer">Security Protocol</span>
              <span className="hover:text-slate-400 cursor-pointer">Operational Terms</span>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}
