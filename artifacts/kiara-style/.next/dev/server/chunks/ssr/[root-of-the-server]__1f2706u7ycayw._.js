module.exports = [
(()=>{"use strict";return[
"[project]/artifacts/kiara-style/app/[[...segments]]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page,
    "generateMetadata",
    ()=>generateMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$types$2b$node$40$25$2e$9$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.1_@types+node@25.9.6_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$artifacts$2f$kiara$2d$style$2f$components$2f$storefront$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/artifacts/kiara-style/components/storefront.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$types$2b$node$40$25$2e$9$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.1_@types+node@25.9.6_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$types$2b$node$40$25$2e$9$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.1_@types+node@25.9.6_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$artifacts$2f$kiara$2d$style$2f$lib$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/artifacts/kiara-style/lib/products.ts [app-rsc] (ecmascript)");
;
;
;
;
;
const exactRoutes = new Set([
    "/",
    "/shop",
    "/search",
    "/wishlist",
    "/cart",
    "/checkout",
    "/checkout/payment",
    "/login",
    "/signup",
    "/forgot-password",
    "/account",
    "/account/profile",
    "/account/orders",
    "/track-order",
    "/about",
    "/contact",
    "/size-guide",
    "/faq",
    "/shipping-policy",
    "/returns-exchanges",
    "/privacy-policy",
    "/terms",
    "/not-found"
]);
const collectionRoutes = new Set([
    "oversized-t-shirts",
    "regular-fit-t-shirts",
    "printed-t-shirts",
    "solid-t-shirts",
    "best-sellers",
    "new-arrivals"
]);
const pageDescriptions = {
    "/": {
        title: "Men's T-shirts for everyday style",
        description: "Explore the KIARA STYLE sample edit of everyday men's T-shirts. Product details and sample INR prices are pending approval."
    },
    "/shop": {
        title: "Shop men's T-shirts",
        description: "Browse the KIARA STYLE sample collection of men's oversized, regular-fit, printed and solid T-shirts."
    },
    "/search": {
        title: "Search the sample collection",
        description: "Search the KIARA STYLE sample catalogue by name, fit, style or colour."
    },
    "/wishlist": {
        title: "Saved styles",
        description: "Review styles saved locally in this browser preview."
    },
    "/cart": {
        title: "Preview bag",
        description: "Review sample styles in your local preview bag. Ordering is not connected."
    },
    "/checkout": {
        title: "Checkout setup preview",
        description: "Checkout is not active. No personal or payment information is collected."
    },
    "/checkout/payment": {
        title: "Payment setup preview",
        description: "Payment methods are not connected and no payment can be accepted."
    },
    "/about": {
        title: "About KIARA STYLE",
        description: "Learn about the direction of KIARA STYLE, a men's everyday T-shirt label in development."
    },
    "/contact": {
        title: "Contact setup",
        description: "Customer support details are pending confirmation for the KIARA STYLE storefront."
    },
    "/size-guide": {
        title: "Men's T-shirt size guide",
        description: "Official garment measurements are pending. Review fit notes before choosing a size."
    },
    "/faq": {
        title: "Frequently asked questions",
        description: "Information about the KIARA STYLE sample storefront and its current setup status."
    },
    "/shipping-policy": {
        title: "Shipping policy setup",
        description: "Shipping fees, service regions and delivery estimates have not yet been configured."
    },
    "/returns-exchanges": {
        title: "Returns and exchanges setup",
        description: "Return and exchange terms are pending confirmation and are not yet available."
    },
    "/privacy-policy": {
        title: "Privacy information",
        description: "Learn how this browse-only storefront preview handles local wishlist and bag data."
    },
    "/terms": {
        title: "Terms of use",
        description: "Terms for reviewing the KIARA STYLE sample storefront."
    },
    "/login": {
        title: "Account sign in setup",
        description: "Customer account access is not connected in this storefront preview."
    },
    "/signup": {
        title: "Create account setup",
        description: "Customer account creation is not connected in this storefront preview."
    },
    "/forgot-password": {
        title: "Password recovery setup",
        description: "Password recovery is not connected in this storefront preview."
    },
    "/account": {
        title: "Customer account setup",
        description: "Customer accounts and order history are not connected in this storefront preview."
    },
    "/account/profile": {
        title: "Profile setup",
        description: "Customer profile and saved address features are not connected."
    },
    "/account/orders": {
        title: "Order history setup",
        description: "Customer order history is not connected in this storefront preview."
    },
    "/track-order": {
        title: "Order tracking setup",
        description: "Order tracking is not connected in this storefront preview."
    }
};
async function generateMetadata({ params }) {
    const { segments = [] } = await params;
    const path = segments.length ? `/${segments.join("/")}` : "/";
    const product = segments[0] === "product" ? __TURBOPACK__imported__module__$5b$project$5d2f$artifacts$2f$kiara$2d$style$2f$lib$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["products"].find((item)=>item.slug === segments[1]) : undefined;
    const collectionSlug = segments[0] === "collections" ? segments[1] : undefined;
    const base = pageDescriptions[path];
    const title = product?.name ?? (collectionSlug ? __TURBOPACK__imported__module__$5b$project$5d2f$artifacts$2f$kiara$2d$style$2f$lib$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["collectionNames"][collectionSlug] ?? "T-shirt collection" : base?.title ?? "KIARA STYLE");
    const description = product ? `${product.description} Sample product listing; specifications and price are pending approval.` : base?.description ?? `${title} from KIARA STYLE. Sample storefront; details are pending confirmation.`;
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
    const canonical = siteUrl ? new URL(path, siteUrl).toString() : undefined;
    return {
        title,
        description,
        alternates: canonical ? {
            canonical
        } : undefined,
        openGraph: {
            title: `${title} | KIARA STYLE`,
            description,
            type: "website"
        },
        robots: {
            index: process.env.STORE_LAUNCH_ENABLED === "true",
            follow: process.env.STORE_LAUNCH_ENABLED === "true"
        }
    };
}
async function Page({ params }) {
    const { segments = [] } = await params;
    const path = `/${segments.join("/")}`;
    const routeTail = segments.at(-1);
    const valid = exactRoutes.has(path) || segments[0] === "collections" && segments.length === 2 && collectionRoutes.has(routeTail || "") || segments[0] === "product" && segments.length === 2 && __TURBOPACK__imported__module__$5b$project$5d2f$artifacts$2f$kiara$2d$style$2f$lib$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["products"].some((product)=>product.slug === routeTail) || segments[0] === "order-confirmation" && segments.length === 2 || segments[0] === "account" && segments[1] === "orders" && segments.length === 3;
    if (!valid) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$types$2b$node$40$25$2e$9$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$types$2b$node$40$25$2e$9$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$artifacts$2f$kiara$2d$style$2f$components$2f$storefront$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Storefront"], {
        path: path
    }, void 0, false, {
        fileName: "[project]/artifacts/kiara-style/app/[[...segments]]/page.tsx",
        lineNumber: 75,
        columnNumber: 10
    }, this);
}
}),
"[project]/artifacts/kiara-style/components/storefront.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Storefront",
    ()=>Storefront
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$types$2b$node$40$25$2e$9$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.1_@types+node@25.9.6_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Storefront = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$types$2b$node$40$25$2e$9$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Storefront() from the server but Storefront is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/artifacts/kiara-style/components/storefront.tsx", "Storefront");
}),
"[project]/artifacts/kiara-style/components/storefront.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$artifacts$2f$kiara$2d$style$2f$components$2f$storefront$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/artifacts/kiara-style/components/storefront.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$artifacts$2f$kiara$2d$style$2f$components$2f$storefront$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/artifacts/kiara-style/lib/products.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "collectionNames",
    ()=>collectionNames,
    "inr",
    ()=>inr,
    "products",
    ()=>products
]);
const products = [
    {
        id: "KS-001",
        slug: "the-everyday-oversized-tee",
        name: "The Everyday Oversized Tee",
        fit: "Oversized",
        category: "Solid",
        tone: "Charcoal",
        price: 799,
        image: "/images/editorial-hero.jpg",
        description: "An easy, roomy silhouette made for repeat wear. A clean starting point for everyday dressing.",
        colors: [
            "Charcoal",
            "Bone",
            "Olive"
        ]
    },
    {
        id: "KS-002",
        slug: "soft-structure-regular-tee",
        name: "Soft Structure Regular Tee",
        fit: "Regular fit",
        category: "Solid",
        tone: "Warm cream",
        price: 599,
        image: "/images/editorial-everyday.jpg",
        description: "A familiar regular shape with a considered, pared-back look. Wear it on its own or under an open shirt.",
        colors: [
            "Warm cream",
            "Ink",
            "Stone"
        ]
    },
    {
        id: "KS-003",
        slug: "city-lines-printed-tee",
        name: "City Lines Printed Tee",
        fit: "Regular fit",
        category: "Printed",
        tone: "Muted rust",
        price: 699,
        image: "/images/editorial-studio.jpg",
        tag: "Sample pick",
        description: "A quiet graphic direction for off-duty days. Artwork and final colour may change before launch.",
        colors: [
            "Muted rust",
            "Charcoal"
        ]
    },
    {
        id: "KS-004",
        slug: "after-hours-oversized-tee",
        name: "After Hours Oversized Tee",
        fit: "Oversized",
        category: "Graphic",
        tone: "Deep olive",
        price: 899,
        image: "/images/editorial-everyday.jpg",
        description: "Relaxed proportions with a streetwear-minded attitude. Final garment details are pending approval.",
        colors: [
            "Deep olive",
            "Black"
        ]
    },
    {
        id: "KS-005",
        slug: "essential-ink-tee",
        name: "Essential Ink Tee",
        fit: "Regular fit",
        category: "Solid",
        tone: "Ink",
        price: 499,
        image: "/images/editorial-hero.jpg",
        description: "A straightforward dark tee for everyday rotation. Colour name and price shown as sample values.",
        colors: [
            "Ink",
            "Bone"
        ]
    },
    {
        id: "KS-006",
        slug: "quiet-form-oversized-tee",
        name: "Quiet Form Oversized Tee",
        fit: "Oversized",
        category: "Solid",
        tone: "Stone",
        price: 799,
        image: "/images/editorial-studio.jpg",
        description: "An understated oversized shape, styled with room to move and layer.",
        colors: [
            "Stone",
            "Charcoal",
            "Bone"
        ]
    },
    {
        id: "KS-007",
        slug: "weekend-club-graphic-tee",
        name: "Weekend Club Graphic Tee",
        fit: "Regular fit",
        category: "Graphic",
        tone: "Cream",
        price: 699,
        image: "/images/editorial-everyday.jpg",
        description: "A sample graphic-led style with an easy everyday fit. Artwork is a concept and subject to change.",
        colors: [
            "Cream",
            "Olive"
        ]
    },
    {
        id: "KS-008",
        slug: "mono-script-tee",
        name: "Mono Script Tee",
        fit: "Regular fit",
        category: "Printed",
        tone: "Charcoal",
        price: 599,
        image: "/images/editorial-hero.jpg",
        description: "A restrained print idea for those who like their details subtle. Final artwork pending.",
        colors: [
            "Charcoal",
            "Warm cream"
        ]
    },
    {
        id: "KS-009",
        slug: "off-duty-oversized-tee",
        name: "Off-Duty Oversized Tee",
        fit: "Oversized",
        category: "Printed",
        tone: "Warm cream",
        price: 999,
        image: "/images/editorial-studio.jpg",
        description: "A relaxed statement silhouette for slower days. All product information remains a sample.",
        colors: [
            "Warm cream",
            "Muted rust"
        ]
    },
    {
        id: "KS-010",
        slug: "daily-uniform-tee",
        name: "Daily Uniform Tee",
        fit: "Regular fit",
        category: "Solid",
        tone: "Olive",
        price: 599,
        image: "/images/editorial-everyday.jpg",
        description: "A versatile solid tee designed to sit comfortably in a regular-fit wardrobe.",
        colors: [
            "Olive",
            "Ink"
        ]
    },
    {
        id: "KS-011",
        slug: "midnight-mark-tee",
        name: "Midnight Mark Tee",
        fit: "Oversized",
        category: "Graphic",
        tone: "Charcoal",
        price: 899,
        image: "/images/editorial-hero.jpg",
        description: "A concept graphic tee in a dark, easy-to-style palette. Sample listing only.",
        colors: [
            "Charcoal",
            "Stone"
        ]
    },
    {
        id: "KS-012",
        slug: "sunroom-regular-tee",
        name: "Sunroom Regular Tee",
        fit: "Regular fit",
        category: "Solid",
        tone: "Muted rust",
        price: 699,
        image: "/images/editorial-studio.jpg",
        tag: "Sample pick",
        description: "A warmer tone for the everyday line-up, paired with a familiar regular silhouette.",
        colors: [
            "Muted rust",
            "Warm cream"
        ]
    }
];
const collectionNames = {
    "oversized-t-shirts": "Oversized T-shirts",
    "regular-fit-t-shirts": "Regular fit T-shirts",
    "printed-t-shirts": "Printed T-shirts",
    "solid-t-shirts": "Solid T-shirts",
    "best-sellers": "Best sellers",
    "new-arrivals": "New arrivals"
};
const inr = (amount)=>`₹${amount.toLocaleString("en-IN")}`;
}),
]})(),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/artifacts/kiara-style/app/[[...segments]]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/artifacts/kiara-style/app/[[...segments]]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1f2706u7ycayw._.js.map