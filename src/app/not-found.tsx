// src/app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-dark flex items-center justify-center">
      <div className="section-container text-center py-20">
        <p
          className="font-display text-[20vw] text-white/5 leading-none select-none"
          aria-hidden
        >
          404
        </p>
        <div className="-mt-8 relative">
          <h1 className="font-display text-5xl lg:text-7xl text-white mb-4">
            PAGE NOT <span className="text-brand-orange">FOUND.</span>
          </h1>
          <p className="text-white/40 text-lg mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="bg-brand-orange hover:bg-orange-500 text-white font-medium px-8 py-3 rounded transition-all"
            >
              Go Home
            </Link>
            <Link
              href="/contact"
              className="border border-white/20 hover:border-brand-orange text-white/60 hover:text-white font-medium px-8 py-3 rounded transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
