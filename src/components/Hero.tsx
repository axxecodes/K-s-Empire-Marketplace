import { motion } from 'motion/react';
import { ArrowRight, Smartphone, Zap, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden mesh-gradient-1">
      {/* Mesh Gradient Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-6 border border-blue-500/20">
            <Zap className="w-3 h-3" />
            Next Gen Performance
          </div>
          <h1 className="font-display text-6xl lg:text-[100px] font-black tracking-tighter leading-[0.85] mb-8 text-white">
            ELEVATE <br />
            <span className="text-blue-500 italic drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">YOUR GEAR.</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-md mb-10 leading-relaxed">
            Discover a massive collection of premium electronics featuring Tecno, Infinix, Poco, and Redmi, plus 100+ high-performance accessories.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-500 text-white px-10 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-blue-600 transition-all shadow-2xl shadow-blue-500/30 active:scale-95">
              Shop Now <ArrowRight className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-6 text-xs font-bold uppercase tracking-wider text-slate-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-500/50" /> 2-YR Warranty
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-500/50" /> Verified Tech
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative aspect-square rounded-[60px] p-1 bg-gradient-to-br from-white/20 to-transparent shadow-2xl skew-y-2 transform hover:skew-y-0 transition-transform duration-700 overflow-hidden frosted-glass">
            <img 
              src="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&q=80&w=1000" 
              alt="Latest Smartphone"
              className="w-full h-full object-cover rounded-[58px]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
            <div className="absolute bottom-12 left-12">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-2">Featured Series</p>
              <h3 className="text-4xl font-display font-bold text-white">Quantum Pro Max</h3>
            </div>
          </div>
          
          {/* Floating Glass Component */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-6 top-1/4 frosted-glass-heavy p-6 rounded-[32px] shadow-2xl hidden md:block"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center">
                <Zap className="text-blue-400 w-7 h-7" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Live Deals</p>
                <p className="text-2xl font-display font-black text-white">UP TO 30%</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
