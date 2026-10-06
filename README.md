# Mari Pastries — Next.js site

Next.js 15 (App Router) version of the Mari Pastries design. Ready to run and deploy.

## Run locally
```
npm install
npm run dev     # http://localhost:3000
```

## Deploy (Vercel — easiest)
1. Push this folder to a GitHub repo.
2. Go to vercel.com → New Project → import the repo → Deploy. No settings needed.
3. (Optional) Add your domain under Project → Settings → Domains.

## Order form → email
The form posts to `/api/order`. To receive orders by email:
1. Create a free form at formspree.io and copy its endpoint (`https://formspree.io/f/xxxx`).
2. In Vercel → Settings → Environment Variables, add `ORDER_FORWARD_URL` = that endpoint. Redeploy.

## Updating content
Everything editable is in **`lib/data.js`**:
- **Find Us** — set `event.atEvent: true` and fill name/address/hours when the van is at an event; `false` shows the driving van + "Next stops".
- Menu items & prices, FAQ, journal posts, gallery photos, contact info.

Images live in `public/assets/`. Swap any file with the same name to update it (a full-resolution `boxes.jpg` will make the menu background sharper).

## Structure
- `app/page.js` — Home: hero logo → menu → gallery → order form → FAQ
- `app/find-us/page.js` — Find Us (event map or animated van)
- `app/journal/page.js` — Journal / blog
- `app/api/order/route.js` — order form endpoint
- `components/` — Header (transparent → raspberry on scroll), Footer, OrderForm, Faq, VanScene, JournalPosts
- `app/globals.css` — colors, fonts, hover states, animations

## Design tokens
Cream #F7EED8 · Chocolate #2A1405 · Raspberry #842936 · Pink #E1AFBB · Dusty rose #C98E9E · Blush #DD9BA9
Fonts: Goudy Bookletter 1911 (display), Sorts Mill Goudy (body) — loaded via next/font.

## Working with Claude Code
Open this folder in Claude Code and ask for changes directly, e.g. "add a Holiday section to the menu in lib/data.js" or "connect the order form to Resend".
