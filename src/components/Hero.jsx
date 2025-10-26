import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const handleQuoteClick = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-neutral-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 pt-28 pb-24 md:pt-40">
        <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
          Welcome to ColorCrafters Paints
        </span>
        <h1 className="text-4xl font-bold leading-tight md:text-6xl">
          Transform Your Space with Premium Quality Paints 🎨
        </h1>
        <p className="max-w-2xl text-lg text-white/80 md:text-xl">
          Bringing colors to life with our wide range of wall paints, textures, and finishes.
        </p>
        <div className="mt-4 flex items-center gap-4">
          <button onClick={handleQuoteClick} className="rounded-lg bg-rose-500 px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-rose-600 hover:shadow-rose-500/30">
            Get a Free Quote
          </button>
          <a href="#about" className="rounded-lg border border-white/20 px-6 py-3 text-base font-semibold text-white/90 transition hover:bg-white/10">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
