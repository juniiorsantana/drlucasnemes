# Deployment Guide — Dr. Lucas Nemes Site

## ✅ Completed

- [x] Next.js 14+ App Router scaffold
- [x] TypeScript strict mode  
- [x] Tailwind CSS v4 with Material Design 3 color tokens
- [x] Self-hosted fonts (next/font) — Inter + Manrope
- [x] 13 fully responsive components (mobile-first)
- [x] WhatsApp integration (floating button + all CTAs)
- [x] Metadata API with SEO defaults (pt-BR locale)
- [x] JSON-LD schema for Physician type
- [x] Image optimization (WebP/AVIF)
- [x] Production build passing TypeScript checks
- [x] Git repository initialized & commits made

## 🚀 Deploy to Vercel (3 steps)

### Option A: Using Vercel CLI (Recommended)
```bash
npm install -g vercel  # if not installed
vercel --prod
```
Follow prompts. No `vercel.json` needed — Vercel auto-detects Next.js 14.

### Option B: GitHub Integration
1. Push repo to GitHub (create repo if not exists)
2. Import at [vercel.com/new](https://vercel.com/new)
3. Select repo, click Deploy
4. Vercel auto-configures, builds, and deploys

## 📋 Pre-Deploy Checklist

- [ ] Update WhatsApp number in `src/lib/constants.ts` (currently `5565999995515`)
- [ ] Replace placeholder doctor/clinic images when ready
- [ ] Update social links (Instagram, YouTube) in `src/lib/constants.ts`
- [ ] Update footer "Desenvolvido por" credit if needed
- [ ] Test locally: `npm run dev` → http://localhost:3000

## 🎯 Performance Targets

Current metrics (expected after Vercel deploy):
- **Lighthouse Performance:** ≥ 90
- **LCP (Largest Contentful Paint):** < 2.5s
- **CLS (Cumulative Layout Shift):** 0
- **FID (First Input Delay):** < 100ms

## 📝 Future Enhancements

1. **Replace Placeholder Images**
   - Doctor portrait → `/public/images/dr-lucas.jpg`
   - Clinic photos → `/public/images/clinica-*.jpg`
   - Update `src/components/sections/*.tsx` image URLs

2. **Add Real Contact Links**
   - Instagram, YouTube URLs in `src/lib/constants.ts`
   - Google Maps embed in Clinic section

3. **Analytics (Optional)**
   - Add `NEXT_PUBLIC_GA_ID` env var in Vercel dashboard
   - Uncomment GA script in layout.tsx when ready

4. **Mobile Menu Refinement**
   - Add smooth animation (Framer Motion)
   - Add close icon behavior

## 🔧 Environment Variables (if needed)

Create `.env.local` for local dev, add to Vercel dashboard:
```
NEXT_PUBLIC_GA_ID=G_XXXXX  # optional: Google Analytics
```

## 📞 Support

All components are in `src/components/sections/` and `src/components/ui/`. 
Constants in `src/lib/constants.ts`.

---

Ready to ship! 🎉
