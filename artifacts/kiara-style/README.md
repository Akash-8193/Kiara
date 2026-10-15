# KIARA STYLE storefront

This is a Next.js App Router + TypeScript storefront preview. The logo and generated editorial images are local assets.

## Run

- `pnpm --filter @workspace/kiara-style run dev`
- `pnpm --filter @workspace/kiara-style run typecheck`
- `pnpm --filter @workspace/kiara-style run build`

## Current preview limitations

- The 12 product listings and INR prices are sample values, not an approved catalogue.
- The local preview bag and wishlist are browser-only and are not customer or order records.
- Product stock, verified fabric details, official size measurements, shipping, returns, customer accounts, support submissions, order tracking, and payment are not connected.
- Checkout deliberately does not collect personal or payment details and cannot create an order.
- Search engines are blocked by `robots` and page metadata until the store is ready for launch.

Before launch, connect a commerce provider and authentication service, load approved products and variants, confirm support and policy details, configure a real domain, and verify the complete order flow.
