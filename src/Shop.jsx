import React from 'react'
import { Link } from 'react-router-dom'

// Self-contained list so you can paste this file alone.
// Change or add items anytime.
const items = [
  {
    title: 'Elegant Wedding Tuxedo — White with Fancy Lapel',
    href: 'https://smartchoicesuits.com/elegant-wedding-tuxedo-white-men/',
    img: '/src/assets/shop/white-tuxedo.jpg',
  },
  {
    title: 'Slim Fit Black 3-Piece Vested Suit',
    href: 'https://smartchoicesuits.com/product-tag/wedding-suit/',
    img: '/src/assets/shop/black-3pc-suit.jpg',
  },
  {
    title: 'Black Spiked Glitter Smoking Loafer (S0176)',
    href: 'https://smartchoicesuits.com/black-spiked-glitter-smoking-loafer-s0176/',
    img: '/src/assets/shop/loafer-s0176.jpg',
  },
  {
    title: 'Black & Silver Studded Smoking Loafer (S0173)',
    href: 'https://smartchoicesuits.com/black-silver-studded-smoking-loafer-s0173/',
    img: '/src/assets/shop/loafer-s0173.jpg',
  },
  {
    title: 'Luxury Paisley Vest — White Waistcoat Set',
    href: 'https://smartchoicesuits.com/luxury-paisley-mens-vest-white-waistcoat-suit-set/',
    img: '/src/assets/shop/vest-white.jpg',
  },
  {
    title: 'Luxury Paisley Vest — Royal Blue Waistcoat Set',
    href: 'https://smartchoicesuits.com/luxury-paisley-mens-vest-royal-blue-waistcoat-suit-set/',
    img: '/src/assets/shop/vest-royal.jpg',
  },
  {
    title: 'Men’s Prom & Wedding Loafers — Mint',
    href: 'https://smartchoicesuits.com/mens-prom-wedding-loafers-mint/',
    img: '/src/assets/shop/loafers-mint.jpg',
  },
  {
    title: 'Shop All at Smart Choice Suits',
    href: 'https://smartchoicesuits.com/shop/',
    img: '/src/assets/shop/shop-all.jpg',
  },
]

export default function Shop() {
  return (
    <div className="min-h-screen bg-brand-black text-neutral-100">
      <header className="sticky top-0 z-50 border-b border-neutral-800 backdrop-blur bg-black/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="text-neutral-300 hover:text-white">← Back</Link>
          <div className="text-sm text-neutral-400">Shop — Smart Choice Suits</div>
          <Link to="/bookings" className="text-neutral-300 hover:text-white">Bookings</Link>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-bold">Shop</h1>
        <p className="mt-2 text-neutral-300">Featured picks. Clicking an item opens SmartChoiceSuits.com.</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <a key={idx} href={it.href} target="_blank" rel="noopener noreferrer" className="group rounded-2xl overflow-hidden border border-neutral-800 hover:border-neutral-600 transition">
              <div className="aspect-[4/3] bg-neutral-900 overflow-hidden">
                <img src={it.img} alt={it.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
              </div>
              <div className="p-4 flex items-center justify-between">
                <div className="font-medium">{it.title}</div>
                <span className="text-xs text-black bg-[var(--gold)] rounded-full px-3 py-1">View</span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10">
          <a href="https://smartchoicesuits.com/shop/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-2xl px-5 py-2 bg-[var(--gold)] text-black font-semibold">
            Shop All on SmartChoiceSuits.com ↗
          </a>
        </div>
      </main>
    </div>
  )
}
