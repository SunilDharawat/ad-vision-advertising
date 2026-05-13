// src/app/loading.tsx
export default function Loading() {
  return (
    <div className="min-h-screen bg-brand-dark flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-2 border-brand-orange/20 border-t-brand-orange rounded-full animate-spin" />
        <p className="font-display text-xl text-white/40 tracking-widest">
          LOADING...
        </p>
      </div>
    </div>
  );
}
