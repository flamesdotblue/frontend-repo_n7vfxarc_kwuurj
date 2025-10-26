import React from 'react';
import { Shield, Clock, CheckCircle, Palette, Facebook, Instagram, Youtube, Star } from 'lucide-react';

function WhyChooseUs() {
  const points = [
    { icon: CheckCircle, title: '100% Genuine Paints' },
    { icon: Shield, title: 'Expert Painters' },
    { icon: Clock, title: 'On-Time Completion' },
    { icon: Palette, title: 'Free Color Consultation' },
  ];
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
      <h3 className="text-2xl font-bold text-neutral-900">Why Choose Us</h3>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 md:grid-cols-4">
        {points.map(({ icon: Icon, title }) => (
          <div key={title} className="flex items-center gap-3 rounded-xl border border-neutral-100 bg-neutral-50 p-4">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-rose-500/10 text-rose-600">
              <Icon className="h-5 w-5" />
            </span>
            <p className="text-sm font-medium text-neutral-800">{title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Gallery() {
  const pics = [
    'https://images.unsplash.com/photo-1508599589920-14cfa1c1fe4d?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519710884001-2f43f41fbbab?q=80&w=1200&auto=format&fit=crop',
  ];
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
      <h3 className="text-2xl font-bold text-neutral-900">Gallery</h3>
      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
        {pics.map((src, i) => (
          <div key={i} className="group relative overflow-hidden rounded-xl">
            <img src={src} alt="Painted project" className="h-40 w-full object-cover transition duration-500 group-hover:scale-105 md:h-44" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition group-hover:opacity-100" />
          </div>
        ))}
      </div>
    </div>
  );
}

function Testimonials() {
  const reviews = [
    {
      quote: 'Excellent finish and affordable prices. Highly recommended!',
      name: 'Ramesh K.',
    },
    {
      quote: 'The team guided me on colors and delivered on time. Loved the results!',
      name: 'Ananya S.',
    },
    {
      quote: 'Professional service with great attention to detail.',
      name: 'Vikram R.',
    },
  ];
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
      <h3 className="text-2xl font-bold text-neutral-900">Customer Testimonials</h3>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {reviews.map((r, i) => (
          <div key={i} className="rounded-xl border border-neutral-100 bg-neutral-50 p-6">
            <div className="flex items-center gap-1 text-amber-500">
              <Star className="h-4 w-4" />
              <Star className="h-4 w-4" />
              <Star className="h-4 w-4" />
              <Star className="h-4 w-4" />
              <Star className="h-4 w-4" />
            </div>
            <p className="mt-3 text-neutral-700">“{r.quote}”</p>
            <p className="mt-3 text-sm font-medium text-neutral-900">{r.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div id="contact" className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
      <h3 className="text-2xl font-bold text-neutral-900">Get in Touch With Us</h3>
      <p className="mt-2 text-neutral-600">Ready to color your world? Message us directly on WhatsApp.</p>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="space-y-3 text-neutral-700">
          <p><span className="font-semibold">Address:</span> 123 Rainbow Street, Near City Center, Mumbai, MH</p>
          <p><span className="font-semibold">Phone:</span> +91 98765 43210</p>
          <p><span className="font-semibold">Email:</span> hello@colorcrafters.in</p>
          <p><span className="font-semibold">Business Hours:</span> Mon–Sat: 9:00 AM – 7:00 PM</p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/919876543210?text=Hi%20I%27m%20interested%20in%20your%20paint%20services"
            target="_blank"
            className="whatsapp-button inline-flex items-center justify-center rounded-lg bg-green-500 px-5 py-3 font-semibold text-white shadow-lg transition hover:bg-green-600"
            rel="noreferrer"
          >
            💬 Chat on WhatsApp
          </a>
          <a href="tel:+919876543210" className="inline-flex items-center justify-center rounded-lg border border-neutral-200 bg-white px-5 py-3 font-semibold text-neutral-900 shadow-sm transition hover:bg-neutral-50">
            Call Now
          </a>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-neutral-200 py-8 text-sm text-neutral-600 md:flex-row">
      <p>© 2025 ColorCrafters Paints. All rights reserved.</p>
      <div className="flex items-center gap-4">
        <a href="#" aria-label="Facebook" className="rounded-md p-2 hover:bg-neutral-100"><Facebook className="h-5 w-5" /></a>
        <a href="#" aria-label="Instagram" className="rounded-md p-2 hover:bg-neutral-100"><Instagram className="h-5 w-5" /></a>
        <a href="#" aria-label="YouTube" className="rounded-md p-2 hover:bg-neutral-100"><Youtube className="h-5 w-5" /></a>
      </div>
      <p className="text-neutral-500">Designed with ❤️ by Redefine Technologies</p>
    </footer>
  );
}

export default function Connect() {
  return (
    <section className="w-full bg-neutral-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10">
          <WhyChooseUs />
          <Gallery />
          <Testimonials />
          <Contact />
          <Footer />
        </div>
      </div>
    </section>
  );
}
