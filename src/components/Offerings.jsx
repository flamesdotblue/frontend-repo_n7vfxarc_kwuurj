import React from 'react';
import { PaintRoller, Palette, Brush, Layers } from 'lucide-react';

const products = [
  {
    title: 'Interior Paints',
    desc: 'Smooth, elegant finishes for living spaces',
    icon: PaintRoller,
    color: 'from-rose-500/10 to-rose-500/5',
  },
  {
    title: 'Exterior Paints',
    desc: 'Durable and weather-resistant',
    icon: Brush,
    color: 'from-orange-500/10 to-orange-500/5',
  },
  {
    title: 'Texture & Designer Finishes',
    desc: 'Creative wall textures',
    icon: Palette,
    color: 'from-amber-500/10 to-amber-500/5',
  },
  {
    title: 'Primers & Enamels',
    desc: 'For a lasting base and shine',
    icon: Layers,
    color: 'from-pink-500/10 to-pink-500/5',
  },
];

const services = [
  'Wall Painting & Repainting',
  'Texture Design Consultation',
  'Color Combination Guidance',
  'Home & Office Painting Packages',
];

export default function Offerings() {
  return (
    <section className="w-full bg-neutral-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <h2 className="text-3xl font-bold text-neutral-900 md:text-4xl">Our Products</h2>
          <p className="max-w-xl text-neutral-600">
            Explore our range of premium paints and finishes designed for durability and beauty.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {products.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className={`rounded-xl border border-neutral-200 bg-gradient-to-b ${p.color} p-5 shadow-sm transition hover:shadow-md`}>
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-white shadow-sm">
                    <Icon className="h-5 w-5 text-rose-600" />
                  </span>
                  <h3 className="text-base font-semibold text-neutral-900">{p.title}</h3>
                </div>
                <p className="mt-3 text-sm text-neutral-600">{p.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-bold text-neutral-900">Our Services</h3>
            <ul className="mt-6 space-y-3">
              {services.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-rose-500" />
                  <span className="text-neutral-700">{s}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-neutral-600">
              “From choosing the right shade to the final coat — we make your painting experience seamless!”
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="grid grid-cols-2 gap-3">
              <div className="h-28 rounded-lg bg-gradient-to-br from-rose-500 to-orange-400/90" />
              <div className="h-28 rounded-lg bg-gradient-to-br from-neutral-200 to-neutral-100" />
              <div className="col-span-2 h-28 rounded-lg bg-gradient-to-r from-amber-400 to-pink-500" />
              <div className="h-28 rounded-lg bg-gradient-to-br from-rose-300 to-rose-100" />
              <div className="h-28 rounded-lg bg-gradient-to-br from-neutral-300 to-neutral-100" />
            </div>
            <p className="mt-4 text-sm text-neutral-500">A peek at textures, finishes, and colors we love.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
