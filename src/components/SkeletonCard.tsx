export default function SkeletonCard() {
  return (
    <div className="bg-white/5 border border-white/10 rounded-[32px] p-5 animate-pulse">
      <div className="aspect-[4/3] rounded-2xl bg-slate-800/50 mb-5" />
      <div className="px-1 space-y-4">
        <div className="flex justify-between">
          <div className="h-2 w-16 bg-slate-800 rounded" />
          <div className="h-2 w-12 bg-slate-800 rounded" />
        </div>
        <div className="h-5 w-3/4 bg-slate-800 rounded" />
        <div className="space-y-2">
          <div className="h-3 w-full bg-slate-800 rounded" />
          <div className="h-3 w-5/6 bg-slate-800 rounded" />
        </div>
        <div className="flex justify-between items-center pt-2">
          <div className="h-8 w-24 bg-slate-800 rounded-lg" />
          <div className="h-12 w-12 bg-slate-800 rounded-2xl" />
        </div>
      </div>
    </div>
  );
}
