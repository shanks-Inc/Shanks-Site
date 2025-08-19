import React from 'react'
import { Link } from 'react-router-dom'

// Inline fallback SVG (no extra files needed)
const FALLBACK =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="800" height="600">
    <rect width="100%" height="100%" fill="#111"/>
    <rect x="12" y="12" width="776" height="576" fill="none" stroke="#555" stroke-width="2"/>
    <text x="50%" y="48%" dominant-baseline="middle" text-anchor="middle"
          font-family="Arial, Helvetica, sans-serif" font-size="22" fill="#ddd">
      Smart Choice Suits
    </text>
    <text x="50%" y="58%" dominant-baseline="middle" text-anchor="middle"
          font-family="Arial, Helvetica, sans-serif" font-size="14" fill="#aaa">
      Image unavailable
    </text>
  </svg>`)

// You can add/remove items freely.
// If a specific photo URL 404s later, just update its `img` string below.
const items = [
  {
    title: 'Elegant Wedding Tuxedo — White with Fancy Lapel',
    href: 'https://smartchoicesuits.com/elegant-wedding-tuxedo-white-men/',
    img: 'https://smartchoicesuits.com/wp-content/uploads/2023/08/elegant-wedding-tuxedo-white-men.jpg'
  },
  {
    title: 'Slim Fit Black 3-Piece Vested Suit (Wedding)',
    href: 'https://smartchoicesuits.com/wedding-suit/',
    img: 'https://smartchoicesuits.com/wp-content/uploads/2024/04/slim-fit-black-3-piece-vested-suit.jpg'
  },
  {
    title: 'Black Spiked Glitter Smoking Loafer (S0176)',
    href: 'https://smartchoicesuits.com/black-spiked-glitter-smoking-loafer-s0176/',
    img: 'https://smartchoicesuits.com/wp-content/uploads/2023/08/black-spiked-glitter-smoking-loafer-s0176.jpg'
  },
  {
    title: 'Black & Silver Studded Smoking Loafer (S0173)',
    href: 'https://smartchoicesuits.com/black-silver-studded-smoking-loafer-s0173/',
    img: 'https://smartchoicesuits.com/wp-content/uploads/2023/08/black-silver-studded-smoking-loafer-s0173.jpg'
  },
  {
    title: 'Luxury Paisley Vest — White Waistcoat Set',
    href: 'https://smartchoicesuits.com/luxury-paisley-mens-vest-white-waistcoat-suit-set/',
    img: 'https://smartchoicesuits.com/wp-content/uploads/2023/08/luxury-paisley-mens-vest-white-waistcoat-suit-set.jpg'
  },
  {
    title: 'Luxury Paisley Vest — Royal Blue Waistcoat Set',
    href: 'https://smartchoicesuits.com/luxury-paisley-mens-vest-royal-blue-waistcoat-suit-set/',
    img: 'https://smartchoicesuits.com/wp-content/uploads/2023/08/luxury-paisley-mens-vest-royal-blue.jpg'
  },
  {
    title: 'Men’s Prom & Wedding Loafers — Mint',
    href: 'https://smartchoicesuits.com/mens-prom-wedding-loafers-mint/',
    img: 'https://smartchoicesuits.com/wp-content/uploads/2023/08/mens-prom-wedding-loafers-mint.jpg'
  },
  {
    title: 'Shop All at Smart Choice Suits',
    href: 'https://smartchoicesuits.com/shop/',
    img: 'https://smartchoicesuits.com/wp-content/uploads/2023/08/smart-choice-suits-shop.jpg'
  }
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
            <a
              key={idx}
              href={it.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl overflow-hidden border border-neutral-800 hover:border-neutral-600 transition"
            >
              <div className="aspect-[4/3] bg-neutral-900 overflow-hidden">
                <img
                  src={it.img}
                  alt={it.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  // many stores block hotlinking via Referer; this helps
                  referrerPolicy="no-referrer"
                  // graceful fallback
                  onError={(e) => { e.currentTarget.src = FALLBACK }}
                />
              </div>
              <div className="p-4 flex items-center justify-between">
                <div className="font-medium">{it.title}</div>
                <span className="text-xs text-black bg-[var(--gold)] rounded-full px-3 py-1">View</span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="https://smartchoicesuits.com/shop/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl px-5 py-2 bg-[var(--gold)] text-black font-semibold"
          >
            Shop All on SmartChoiceSuits.com ↗
          </a>
        </div>
      </main>
    </div>
  )
}
