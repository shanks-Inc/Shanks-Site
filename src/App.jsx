import React, { useState } from 'react'

// Assets
import LOGO from './assets/logo/shanks-wordmark-katana.png'
import HERO from './assets/hero/hero-shanks.jpg'

// Auto-import gallery (1.jpg … 6.jpg in src/assets/gallery)
const galleryImports = import.meta.glob('./assets/gallery/*.{jpg,jpeg,png}', { eager: true, as: 'url' })
const GALLERY = Object.entries(galleryImports)
  .sort((a,b)=>a[0].localeCompare(b[0], undefined, { numeric: true }))
  .map(([,url])=>url)

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const nav = [
    { href: '#home', label: 'Home' },
    { href: '#music', label: 'Music' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#shows', label: 'Shows' },
    { href: '/shop', label: 'Shop' },
  ]

  return (
    <div className="min-h-screen bg-brand-black text-neutral-100">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-neutral-800 backdrop-blur bg-black/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            {/* IMPORTANT: no lazy here; and note the proper JSX self-closing tag */}
            <img src={LOGO} alt="Shanks" className="h-12 md:h-14 w-auto drop-shadow" />
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            {nav.map(n => (
              <a key={n.href} href={n.href} className="opacity-85 hover:opacity-100">{n.label}</a>
            ))}
            <a href="/bookings" className="rounded-2xl px-4 py-2 bg-[var(--gold)] text-black font-semibold">
              Bookings
            </a>
          </nav>

          <button
            className="md:hidden rounded-xl border border-neutral-700 px-3 py-2"
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-neutral-800 bg-brand-black px-4 py-3 space-y-2">
            {nav.map(n => (
              <a key={n.href} href={n.href} onClick={() => setMenuOpen(false)} className="block rounded-xl px-3 py-2 hover:bg-neutral-800">{n.label}</a>
            ))}
            <a href="/bookings" className="block rounded-xl px-3 py-2 bg-[var(--gold)] text-black font-semibold">
              Bookings
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="mt-3 text-5xl lg:text-6xl font-extrabold leading-tight">
              Shanks.<span className="text-neutral-400"> — </span>
              <span className="bg-gradient-to-br from-brand-gold/80 to-white bg-clip-text text-transparent">
                Fly Fits, Fire Hits
              </span>
            </h1>
            <p className="mt-4 text-neutral-300 max-w-prose">
              Desi Hip-Hop artist & men’s fashion tastemaker from the streets of Chicago, representing worldwide.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="https://open.spotify.com/artist/1BTAhC64HQDSnoGBybe2rC?si=9a3U9s_SQ12jbk10yZE-zA"
                 target="_blank" rel="noopener noreferrer"
                 className="rounded-2xl px-4 py-2 bg-[var(--gold)] text-black font-medium">
                Listen on Spotify
              </a>
              <a href="#music" className="rounded-2xl px-4 py-2 border border-neutral-700 hover:border-neutral-500">
                Latest Releases
              </a>
            </div>
          </div>

          <div className="relative">
            <img src={HERO} alt="Shanks hero" className="w-full h-auto rounded-2xl border border-neutral-800" />
          </div>
        </div>
      </section>

      {/* MUSIC (placeholder anchor) */}
      <section id="music" className="py-10 border-t border-neutral-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold">Music</h2>
          <p className="text-neutral-300 mt-2">New drops coming soon.</p>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-10 border-t border-neutral-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold mb-6">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {GALLERY.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Gallery ${i+1}`}
                className="w-full h-48 object-cover rounded-xl border border-neutral-800"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      {/* SHOWS (placeholder anchor) */}
      <section id="shows" className="py-10 border-t border-neutral-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold">Shows</h2>
          <p className="text-neutral-300 mt-2">Dates announced soon.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-900 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-neutral-400">© {new Date().getFullYear()} Shanks. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
