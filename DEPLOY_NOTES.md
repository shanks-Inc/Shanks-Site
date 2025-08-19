# Full Upgrade Pack — 2025-08-19

This bundle includes **everything** from our thread:
- Favicon & SEO tags in `index.html` + hero image preload
- Larger wordmark in header
- Lazy-loaded non-hero images
- React Router wired with routes: `/`, `/bookings` (Formspree), `/shop`
- Bookings form posts to **Formspree** (uses a hard-coded Formspree endpoint (`/f/movloake`))
- Shop grid with **live product links** to SmartChoiceSuits.com
- Vercel SPA rewrites so direct links work
- `.env.example` included

## Setup
```bash
npm i
npm run dev             # local
npm run build && npm run preview
```

Commit & push to GitHub, and Vercel will redeploy automatically.

## Edit shop items
Update `src/shop-items.json` with your preferred products (title, href, img). External image URLs are okay.
