import React from 'react';

export default function About() {
  return (
    <section id="about" className="relative w-full bg-white py-20 text-neutral-800">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold md:text-4xl">About ColorCrafters Paints</h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-neutral-600">
          At ColorCrafters Paints, we specialize in delivering vibrant, long-lasting colors for homes, offices, and commercial spaces. With over a decade of experience, we pride ourselves on our commitment to quality, customer satisfaction, and affordable pricing.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-neutral-200 bg-gradient-to-b from-white to-neutral-50 p-6 shadow-sm">
            <p className="text-sm font-semibold text-rose-600">Premium Quality</p>
            <p className="mt-2 text-neutral-600">Top-grade paints that offer superior coverage and rich, lasting color.</p>
          </div>
          <div className="rounded-xl border border-neutral-200 bg-gradient-to-b from-white to-neutral-50 p-6 shadow-sm">
            <p className="text-sm font-semibold text-rose-600">Trusted Expertise</p>
            <p className="mt-2 text-neutral-600">Skilled guidance to help you select the perfect shades and finishes.</p>
          </div>
          <div className="rounded-xl border border-neutral-200 bg-gradient-to-b from-white to-neutral-50 p-6 shadow-sm">
            <p className="text-sm font-semibold text-rose-600">Great Value</p>
            <p className="mt-2 text-neutral-600">High-quality results at prices that make sense for every budget.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
