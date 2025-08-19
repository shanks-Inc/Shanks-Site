import React, { useState } from 'react'

/* ---------- Assets ---------- */
import LOGO from './assets/logo/shanks-wordmark-katana.png'
import HERO from './assets/hero/hero-shanks.jpg'

// Auto-import every image from ./assets/gallery (jpg/jpeg/png) and sort by filename
const galleryImports = import.meta.glob('./assets/gallery/*.{jpg,jpeg,png}', { eager: true, as: 'url' })
const GALLERY = Object.entries(galleryImports)
  .sort((a, b) => a[0].localeCompare(b[0], undefined, { numeric: true }))
  .map(([, url]) => url)

/* ---------- Links / Embeds (from your old code) ---------- */
const SOCIALS = [
  { href: 'https://www.instagram.com/prettyboy.shanks/?hl=en', label: 'Instagram' },
  { href: 'https://www.youtube.com/channel/UCAgglAtk38_WT5gvJgq0YOg', label: 'YouTube' },
  { href: 'https://open.spotify.com/artist/1BTAhC64HQDSnoGBybe2rC?si=9a3U9s_SQ12jbk10yZE-zA', label: 'Spotify' },
  { href: 'https://music.apple.com/us/artist/shanks/1688510048', label: 'Apple Music' },
  { href: 'https://www.tiktok.com/@playboyshanks', label: 'TikTok' }
]

const RELEASES = [
  { title: "Can’t Be Luck", embed: 'https://open.spotify.com/embed/track/2ahW3Z2TleFWq86EMhUXLQ?utm_source=generator' },
  { title: 'Sajaniya',      embed: 'https://open.spotify.com/embed/track/4dbAUCym1hoayEpDgYfvTa?utm_source=generator' }
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [lightbox, setLightbox] = useState({ open: false, src: null })

  const nav = [
    { href: '#home',    label: 'Home' },
    { href: '#music',   label: 'Music' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#shows',   label: 'Shows' },
    { href: '/shop',    label: 'Shop' }      // ← use /shop instead of Contact
  ]

  return (
    <div className="min-h-screen bg-brand-black text-neutral-100 bg-grid">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-neutral-800 backdrop-blur bg-black/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <img src={LOGO} alt="Shanks" className="h-12 md:h-14 w-auto drop-shadow" />
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            {nav.map(n => (
              <a key={n.href} href={n.href} className="opacity-85 hover:opacity-100">{n.label}</a>
            ))}
            {/* Bookings goes to the form page */}
            <a href="/bookings" className="rounded-2xl px-4 py-2 bg-[var(--gold)] text-black font-semibold shadow-glow">
              Bookings
            </a>
          </nav>

          <button
            className="md:hidden p-2 rounded-xl hover:bg-neutral-800"
            onClick={() => setMenuOpen(v => !v)}
            aria-label="menu"
          >
            ☰
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-neutral-800 bg-brand-black">
            <div className="px-4 py-3 space-y-2">
              {nav.map(n => (
                <a key={n.href} href={n.href} onClick={() => setMenuOpen(false)}
                   className="block rounded-xl px-3 py-2 hover:bg-neutral-800">
                  {n.label}
                </a>
              ))}
              <a href="/bookings" className="block rounded-xl px-3 py-2 bg-[var(--gold)] text-black font-semibold">
                Bookings
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 py-16 lg:py-24 items-center">
            <div>
              <p className="uppercase tracking-[0.25em] text-xs text-neutral-400">Chicago → Desi Hip-Hop</p>
              <h1 className="mt-3 text-5xl lg:text-6xl font-extrabold leading-tight">
                Shanks.<span className="text-neutral-400"> — </span>
                <span className="bg-gradient-to-br from-brand-burgundy to-[var(--gold)] bg-clip-text text-transparent">
                  Fly Fits, Fire Hits
                </span>
              </h1>
              <p className="mt-4 text-neutral-300 max-w-prose">
                Shanks, born in the streets of Chicago, representing Desi Hip-Hop worldwide.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://open.spotify.com/artist/1BTAhC64HQDSnoGBybe2rC?si=9a3U9s_SQ12jbk10yZE-zA"
                  target="_blank" rel="noreferrer"
                  className="rounded-2xl px-5 py-2.5 bg-[var(--gold)] text-black font-medium shadow-glow"
                >
                  Listen on Spotify
                </a>
                <a href="#music" className="rounded-2xl px-5 py-2.5 border border-neutral-700 hover:border-neutral-500">
                  Latest Releases
                </a>
              </div>

              {/* Social links (from your old code) */}
              <div className="mt-6 flex items-center gap-4 opacity-90 flex-wrap">
                {SOCIALS.map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                     className="hover:opacity-100 opacity-80 underline underline-offset-4">
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Hero image card */}
            <div className="relative">
              <div className="aspect-[4/5] w-full rounded-3xl bg-gradient-to-b from-neutral-800 to-neutral-900 ring-1 ring-white/10 p-2">
                <div className="h-full w-full rounded-2xl bg-cover bg-center" style={{ backgroundImage: `url(${HERO})` }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MUSIC — your two playable embeds */}
      <section id="music" className="py-16 lg:py-24 border-t border-neutral-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold">Latest Releases</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            {RELEASES.map((r, i) => (
              <div key={i} className="rounded-2xl overflow-hidden ring-1 ring-white/10">
                <iframe
                  title={r.title}
                  className="w-full h-80"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  src={r.embed}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY — bigger tiles + full image on click */}
      <section id="gallery" className="py-16 lg:py-24 border-t border-neutral-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold">Gallery</h2>
          <p className="mt-2 text-neutral-300">Live shows • Persona • Chicago</p>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {GALLERY.map((src, i) => (
              <button
                key={i}
                onClick={() => setLightbox({ open: true, src })}
                className="group relative overflow-hidden rounded-2xl border border-neutral-800 focus:outline-none"
                aria-label={`Open image ${i + 1}`}
              >
                <img
                  src={src}
                  alt={`Shanks gallery ${i + 1}`}
                  className="w-full h-72 md:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <span className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox overlay */}
      {lightbox.open && (
        <div
          className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox({ open: false, src: null })}
        >
          <img
            src={lightbox.src}
            alt="Full view"
            className="max-h-[85vh] max-w-[95vw] object-contain rounded-xl border border-neutral-700"
          />
        </div>
      )}

      {/* SHOWS (placeholder) */}
      <section id="shows" className="py-10 border-t border-neutral-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold">Shows</h2>
          <p className="text-neutral-300 mt-2">Dates announced soon.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-900 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-neutral-400">
            © {new Date().getFullYear()} Shanks. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
