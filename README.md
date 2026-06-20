# Lumen Books
A small online bookstore with a seller dashboard, built to demonstrate every major Next.js rendering and data pattern in the place where it actually makes sense.

## Running locally
\`\`\`bash
git clone https://github.com/echopofi/Lumen-Book-Store
cd book-store
npm install
cp .env.example .env.local   # fill in SELLER_PASSWORD
npm run dev
\`\`\`
Visit http://localhost:3000
Test seller login: `seller` / `lumen-secret-2026` (or whatever you set in `.env.local`)

## Rendering table
| Route | Mode | Why |
|---|---|---|
| `/` | Static + ISR (`revalidate = 3600`) | Featured/bestselling books don't need to be fresh on every request — rebuilding hourly balances freshness with performance. |
| `/books` | SSR (Dynamic) | Reads `searchParams` for category/sort filters — every query is a different request, so it must run server-side on demand. No `force-dynamic` needed; reading `searchParams` triggers dynamic rendering automatically. |
| `/books/[slug]` | SSG via `generateStaticParams`, ISR fallback | Known books are pre-rendered at build time for speed; new books not yet built get rendered on first request and cached. |
| `/login` | Static (form shell), mutation via Server Action | The page itself is static; the actual logic (validating credentials, setting the cookie) runs through a Server Action, not page-level rendering. |
| `/dashboard` | SSR (Dynamic) | Reads the `auth` cookie via `cookies()` to render seller-specific content — cookies are request-time data, so this is dynamic automatically. |
| `/dashboard/new` | Static (form shell), mutation via Server Action | Form renders statically; submission triggers a Server Action that mutates data and calls `revalidatePath`. |
| `/api/books` | Route Handler (Dynamic) | Serves JSON on demand for the live search client component. |
| `/contact` | Placeholder | Deferred — Google SMTP integration planned for a future session. |

## next build output
\`\`\`
  Creating an optimized production build ...
✓ Compiled successfully in 4.9s
✓ Finished TypeScript in 3.1s    
✓ Collecting page data using 3 workers in 742ms    
⚠ metadataBase property in metadata export is not set for resolving social open graph or twitter images, using "http://localhost:3000". See https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadatabase
✓ Generating static pages using 3 workers (14/14) in 3.3s
✓ Finalizing page optimization in 11ms    

Route (app)                     Revalidate  Expire
┌ ○ /                                   1h      1y
├ ○ /_not-found
├ ƒ /api/books
├ ƒ /books
├ ● /books/[slug]
│ ├ /books/the-silent-orbit
│ ├ /books/harbor-of-ash
│ ├ /books/the-quiet-algorithm
│ └ /books/fields-of-glass
├ ○ /contact
├ ƒ /dashboard
├ ○ /dashboard/new
└ ○ /login


ƒ Proxy (Middleware)

○  (Static)   prerendered as static content
●  (SSG)      prerendered as static HTML (uses generateStaticParams)
ƒ  (Dynamic)  server-rendered on demand

\`\`\`
- `○ /` — static, confirmed by the `1h` revalidate window shown in the build output, matching ISR config.
- `ƒ /books` — dynamic, confirmed — proves `searchParams` forced server-rendering.
- `● /books/[slug]` — SSG, confirmed — proves `generateStaticParams` pre-rendered the known slugs.
- `ƒ /dashboard` — dynamic, confirmed — proves cookie-reading forced server-rendering.
- `ƒ /api/books` — dynamic, confirmed — Route Handlers are inherently request-time.

## Freshness proof (SSR)
Visiting `/books?sort=price` vs `/books?sort=newest` returns genuinely different server-rendered HTML each time — verified by viewing page source (not just inspecting the DOM) and confirming the book order differs directly in the raw HTML, proving the sort happened server-side before the response was sent, not client-side after load.

## Bonus items attempted
None this session — focus was on core requirements.

## Trade-off
Running this project without a proper database means the books array lives in server RAM, not on disk. After adding a new book through the dashboard, that data only exists for as long as the server process stays running — restarting the dev server (or redeploying in production) resets the array back to the original four hardcoded books, and anything added in between is lost. A real database would persist that data permanently and let multiple server instances share the same source of truth, but for this assessment, an in-memory store was enough to demonstrate the Server Action → revalidatePath mutation flow without the extra setup overhead of a DB connection.