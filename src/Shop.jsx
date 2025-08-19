import React from 'react'
import { Link } from 'react-router-dom'
import items from './shop-items.json'

export default function Shop(){
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
        <p className="mt-2 text-neutral-300">Featured picks from Smart Choice Suits. Clicking an item opens the product on SmartChoiceSuits.com.</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.items.map((it, idx) => (
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
          <a href="https://smartchoicesuits.com/shop/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-2xl px-5 py-2 bg-[var(--gold)] text-black font-semibold shadow-glow">
            Shop All on SmartChoiceSuits.com ↗
          </a>
        </div>
      </main>
    </div>
  )
}
