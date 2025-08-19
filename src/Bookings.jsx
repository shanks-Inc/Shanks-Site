import React from 'react'
import { Link } from 'react-router-dom'


export default function Bookings(){
  return (
    <div className="min-h-screen bg-brand-black text-neutral-100">
      <header className="sticky top-0 z-50 border-b border-neutral-800 backdrop-blur bg-black/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="text-neutral-300 hover:text-white">← Back</Link>
          <div className="text-sm text-neutral-400">Bookings</div>
          <Link to="/shop" className="text-neutral-300 hover:text-white">Shop</Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-bold">Booking Request</h1>
        <p className="mt-2 text-neutral-300">Tell me about your event, and I’ll get back to you.</p>

        <form action="https://formspree.io/f/movloake" method="POST" className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">Name*</label>
            <input required name="name" className="w-full rounded-xl bg-neutral-900 border border-neutral-700 px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm mb-1">Company</label>
            <input name="company" className="w-full rounded-xl bg-neutral-900 border border-neutral-700 px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm mb-1">Email*</label>
            <input type="email" required name="email" className="w-full rounded-xl bg-neutral-900 border border-neutral-700 px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm mb-1">Phone</label>
            <input name="phone" className="w-full rounded-xl bg-neutral-900 border border-neutral-700 px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm mb-1">Event Date</label>
            <input type="date" name="event_date" className="w-full rounded-xl bg-neutral-900 border border-neutral-700 px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm mb-1">Budget (USD)</label>
            <input name="budget" className="w-full rounded-xl bg-neutral-900 border border-neutral-700 px-3 py-2" />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm mb-1">Event Details / Message</label>
            <textarea name="message" rows="6" className="w-full rounded-xl bg-neutral-900 border border-neutral-700 px-3 py-2" />
          </div>

          <input type="text" name="_gotcha" className="hidden" />
          <input type="hidden" name="_subject" value="New Booking Inquiry" />
          <input type="hidden" name="_redirect" value="/?submitted=1" />

          <div className="sm:col-span-2 flex items-center justify-between">
            <p className="text-xs text-neutral-400">By submitting, you agree to be contacted regarding this inquiry.</p>
            <button className="rounded-2xl px-5 py-2 bg-[var(--gold)] text-black font-semibold shadow-glow">Submit</button>
          </div>
        </form>
      </main>
    </div>
  )
}
