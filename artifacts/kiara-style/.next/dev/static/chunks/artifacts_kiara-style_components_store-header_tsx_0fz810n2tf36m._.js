(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/artifacts/kiara-style/components/store-header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StoreHeader",
    ()=>StoreHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.1_@babel+core@7.2_e20dd83558281a44de59b10a44a9de12/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.1_@babel+core@7.2_e20dd83558281a44de59b10a44a9de12/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.1_@babel+core@7.2_e20dd83558281a44de59b10a44a9de12/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$545$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.545.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$545$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.545.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-client] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$545$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserRound$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.545.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/user-round.js [app-client] (ecmascript) <export default as UserRound>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$545$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.545.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$545$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.545.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$545$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.545.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function StoreHeader() {
    _s();
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [bagCount, setBagCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [wishCount, setWishCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StoreHeader.useEffect": ()=>{
            const syncCounts = {
                "StoreHeader.useEffect.syncCounts": ()=>{
                    try {
                        const bag = JSON.parse(localStorage.getItem("kiara-preview-bag") || "[]");
                        const wish = JSON.parse(localStorage.getItem("kiara-preview-wishlist") || "[]");
                        setBagCount(bag.reduce({
                            "StoreHeader.useEffect.syncCounts": (sum, item)=>sum + (Number(item.quantity) || 0)
                        }["StoreHeader.useEffect.syncCounts"], 0));
                        setWishCount(wish.length);
                    } catch  {
                        setBagCount(0);
                        setWishCount(0);
                    }
                }
            }["StoreHeader.useEffect.syncCounts"];
            syncCounts();
            window.addEventListener("kiara-preview-state", syncCounts);
            window.addEventListener("storage", syncCounts);
            return ({
                "StoreHeader.useEffect": ()=>{
                    window.removeEventListener("kiara-preview-state", syncCounts);
                    window.removeEventListener("storage", syncCounts);
                }
            })["StoreHeader.useEffect"];
        }
    }["StoreHeader.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StoreHeader.useEffect": ()=>{
            if (menuOpen) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "";
            }
            return ({
                "StoreHeader.useEffect": ()=>{
                    document.body.style.overflow = "";
                }
            })["StoreHeader.useEffect"];
        }
    }["StoreHeader.useEffect"], [
        menuOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "gazu-header-wrap",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "gazu-announcement-bar",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "gazu-announcement-inner",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "announcement-left",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "FREE DELIVERY ON ORDERS ABOVE ₹999"
                            }, void 0, false, {
                                fileName: "[project]/artifacts/kiara-style/components/store-header.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/artifacts/kiara-style/components/store-header.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "announcement-right",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/app",
                                    className: "announcement-link",
                                    children: "DOWNLOAD APP"
                                }, void 0, false, {
                                    fileName: "[project]/artifacts/kiara-style/components/store-header.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "announcement-sep",
                                    children: "|"
                                }, void 0, false, {
                                    fileName: "[project]/artifacts/kiara-style/components/store-header.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/track",
                                    className: "announcement-link",
                                    children: "TRACK ORDER"
                                }, void 0, false, {
                                    fileName: "[project]/artifacts/kiara-style/components/store-header.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "announcement-sep",
                                    children: "|"
                                }, void 0, false, {
                                    fileName: "[project]/artifacts/kiara-style/components/store-header.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/help",
                                    className: "announcement-link",
                                    children: "HELP"
                                }, void 0, false, {
                                    fileName: "[project]/artifacts/kiara-style/components/store-header.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/artifacts/kiara-style/components/store-header.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/artifacts/kiara-style/components/store-header.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/artifacts/kiara-style/components/store-header.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "gazu-main-nav",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "gazu-nav-inner",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "gazu-mobile-toggle",
                            type: "button",
                            "aria-label": menuOpen ? "Close menu" : "Open menu",
                            onClick: ()=>setMenuOpen(!menuOpen),
                            children: menuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$545$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/artifacts/kiara-style/components/store-header.tsx",
                                lineNumber: 72,
                                columnNumber: 25
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$545$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/artifacts/kiara-style/components/store-header.tsx",
                                lineNumber: 72,
                                columnNumber: 43
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/artifacts/kiara-style/components/store-header.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "gazu-left-nav",
                            "aria-label": "Department navigation",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/shop",
                                    className: "gazu-nav-item active",
                                    children: "MEN"
                                }, void 0, false, {
                                    fileName: "[project]/artifacts/kiara-style/components/store-header.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/shop",
                                    className: "gazu-nav-item",
                                    children: "WOMEN"
                                }, void 0, false, {
                                    fileName: "[project]/artifacts/kiara-style/components/store-header.tsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/shop",
                                    className: "gazu-nav-item",
                                    children: "KIDS"
                                }, void 0, false, {
                                    fileName: "[project]/artifacts/kiara-style/components/store-header.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/shop",
                                    className: "gazu-nav-item",
                                    children: " "
                                }, void 0, false, {
                                    fileName: "[project]/artifacts/kiara-style/components/store-header.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/artifacts/kiara-style/components/store-header.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "gazu-center-brand",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "gazu-brand-text",
                                "aria-label": "KIARA Home",
                                children: "KIARA"
                            }, void 0, false, {
                                fileName: "[project]/artifacts/kiara-style/components/store-header.tsx",
                                lineNumber: 85,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/artifacts/kiara-style/components/store-header.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "gazu-right-actions",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "gazu-action-btn",
                                    href: "/search",
                                    "aria-label": "Search",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$545$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                            size: 16,
                                            strokeWidth: 1.8
                                        }, void 0, false, {
                                            fileName: "[project]/artifacts/kiara-style/components/store-header.tsx",
                                            lineNumber: 93,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "action-label",
                                            children: "SEARCH"
                                        }, void 0, false, {
                                            fileName: "[project]/artifacts/kiara-style/components/store-header.tsx",
                                            lineNumber: 94,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/artifacts/kiara-style/components/store-header.tsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "gazu-action-btn",
                                    href: "/account",
                                    "aria-label": "Login",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$545$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserRound$3e$__["UserRound"], {
                                            size: 16,
                                            strokeWidth: 1.8
                                        }, void 0, false, {
                                            fileName: "[project]/artifacts/kiara-style/components/store-header.tsx",
                                            lineNumber: 97,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "action-label",
                                            children: "LOGIN"
                                        }, void 0, false, {
                                            fileName: "[project]/artifacts/kiara-style/components/store-header.tsx",
                                            lineNumber: 98,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/artifacts/kiara-style/components/store-header.tsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "gazu-action-btn",
                                    href: "/wishlist",
                                    "aria-label": "Wishlist",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$545$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                            size: 16,
                                            strokeWidth: 1.8
                                        }, void 0, false, {
                                            fileName: "[project]/artifacts/kiara-style/components/store-header.tsx",
                                            lineNumber: 101,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "action-label",
                                            children: "WISHLIST"
                                        }, void 0, false, {
                                            fileName: "[project]/artifacts/kiara-style/components/store-header.tsx",
                                            lineNumber: 102,
                                            columnNumber: 15
                                        }, this),
                                        wishCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "action-count-pill",
                                            children: wishCount
                                        }, void 0, false, {
                                            fileName: "[project]/artifacts/kiara-style/components/store-header.tsx",
                                            lineNumber: 103,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/artifacts/kiara-style/components/store-header.tsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "gazu-action-btn",
                                    href: "/cart",
                                    "aria-label": "Cart",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$545$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                            size: 16,
                                            strokeWidth: 1.8
                                        }, void 0, false, {
                                            fileName: "[project]/artifacts/kiara-style/components/store-header.tsx",
                                            lineNumber: 106,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "action-label",
                                            children: [
                                                "CART (",
                                                bagCount,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/artifacts/kiara-style/components/store-header.tsx",
                                            lineNumber: 107,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/artifacts/kiara-style/components/store-header.tsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/artifacts/kiara-style/components/store-header.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/artifacts/kiara-style/components/store-header.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/artifacts/kiara-style/components/store-header.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `gazu-drawer-backdrop ${menuOpen ? "open" : ""}`,
                onClick: ()=>setMenuOpen(false),
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/artifacts/kiara-style/components/store-header.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `gazu-drawer-menu ${menuOpen ? "open" : ""}`,
                "aria-hidden": !menuOpen,
                role: "dialog",
                "aria-modal": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "gazu-drawer-header",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "gazu-drawer-brand",
                                onClick: ()=>setMenuOpen(false),
                                children: "KIARA"
                            }, void 0, false, {
                                fileName: "[project]/artifacts/kiara-style/components/store-header.tsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "gazu-drawer-close",
                                type: "button",
                                "aria-label": "Close menu",
                                onClick: ()=>setMenuOpen(false),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$545$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 22
                                }, void 0, false, {
                                    fileName: "[project]/artifacts/kiara-style/components/store-header.tsx",
                                    lineNumber: 138,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/artifacts/kiara-style/components/store-header.tsx",
                                lineNumber: 132,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/artifacts/kiara-style/components/store-header.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "gazu-drawer-body",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "gazu-drawer-nav",
                                "aria-label": "Mobile Navigation",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        className: "gazu-drawer-link primary",
                                        onClick: ()=>setMenuOpen(false),
                                        children: "HOME"
                                    }, void 0, false, {
                                        fileName: "[project]/artifacts/kiara-style/components/store-header.tsx",
                                        lineNumber: 146,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/shop",
                                        className: "gazu-drawer-link primary active",
                                        onClick: ()=>setMenuOpen(false),
                                        children: "MEN"
                                    }, void 0, false, {
                                        fileName: "[project]/artifacts/kiara-style/components/store-header.tsx",
                                        lineNumber: 149,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/shop",
                                        className: "gazu-drawer-link primary",
                                        onClick: ()=>setMenuOpen(false),
                                        children: "WOMEN"
                                    }, void 0, false, {
                                        fileName: "[project]/artifacts/kiara-style/components/store-header.tsx",
                                        lineNumber: 152,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/shop",
                                        className: "gazu-drawer-link primary",
                                        onClick: ()=>setMenuOpen(false),
                                        children: "KIDS"
                                    }, void 0, false, {
                                        fileName: "[project]/artifacts/kiara-style/components/store-header.tsx",
                                        lineNumber: 155,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/artifacts/kiara-style/components/store-header.tsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "gazu-drawer-divider"
                            }, void 0, false, {
                                fileName: "[project]/artifacts/kiara-style/components/store-header.tsx",
                                lineNumber: 160,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "gazu-drawer-section",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "gazu-drawer-section-title",
                                        children: "COLLECTIONS"
                                    }, void 0, false, {
                                        fileName: "[project]/artifacts/kiara-style/components/store-header.tsx",
                                        lineNumber: 164,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/collections/oversized-t-shirts",
                                        className: "gazu-drawer-sublink",
                                        onClick: ()=>setMenuOpen(false),
                                        children: "Oversized T-Shirts"
                                    }, void 0, false, {
                                        fileName: "[project]/artifacts/kiara-style/components/store-header.tsx",
                                        lineNumber: 165,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/collections/regular-fit-t-shirts",
                                        className: "gazu-drawer-sublink",
                                        onClick: ()=>setMenuOpen(false),
                                        children: "Regular Fit T-Shirts"
                                    }, void 0, false, {
                                        fileName: "[project]/artifacts/kiara-style/components/store-header.tsx",
                                        lineNumber: 168,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/collections/printed-t-shirts",
                                        className: "gazu-drawer-sublink",
                                        onClick: ()=>setMenuOpen(false),
                                        children: "Printed T-Shirts"
                                    }, void 0, false, {
                                        fileName: "[project]/artifacts/kiara-style/components/store-header.tsx",
                                        lineNumber: 171,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/collections/new-arrivals",
                                        className: "gazu-drawer-sublink highlight",
                                        onClick: ()=>setMenuOpen(false),
                                        children: "New Arrivals 🔥"
                                    }, void 0, false, {
                                        fileName: "[project]/artifacts/kiara-style/components/store-header.tsx",
                                        lineNumber: 174,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/artifacts/kiara-style/components/store-header.tsx",
                                lineNumber: 163,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "gazu-drawer-divider"
                            }, void 0, false, {
                                fileName: "[project]/artifacts/kiara-style/components/store-header.tsx",
                                lineNumber: 179,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "gazu-drawer-section",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "gazu-drawer-section-title",
                                        children: "ACCOUNT & MORE"
                                    }, void 0, false, {
                                        fileName: "[project]/artifacts/kiara-style/components/store-header.tsx",
                                        lineNumber: 183,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/account",
                                        className: "gazu-drawer-sublink",
                                        onClick: ()=>setMenuOpen(false),
                                        children: "My Account / Login"
                                    }, void 0, false, {
                                        fileName: "[project]/artifacts/kiara-style/components/store-header.tsx",
                                        lineNumber: 184,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/wishlist",
                                        className: "gazu-drawer-sublink",
                                        onClick: ()=>setMenuOpen(false),
                                        children: [
                                            "Wishlist ",
                                            wishCount > 0 ? `(${wishCount})` : ""
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/artifacts/kiara-style/components/store-header.tsx",
                                        lineNumber: 187,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/track",
                                        className: "gazu-drawer-sublink",
                                        onClick: ()=>setMenuOpen(false),
                                        children: "Track Order"
                                    }, void 0, false, {
                                        fileName: "[project]/artifacts/kiara-style/components/store-header.tsx",
                                        lineNumber: 190,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/help",
                                        className: "gazu-drawer-sublink",
                                        onClick: ()=>setMenuOpen(false),
                                        children: "Help & Support"
                                    }, void 0, false, {
                                        fileName: "[project]/artifacts/kiara-style/components/store-header.tsx",
                                        lineNumber: 193,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/artifacts/kiara-style/components/store-header.tsx",
                                lineNumber: 182,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/artifacts/kiara-style/components/store-header.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "gazu-drawer-footer",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$1_$40$babel$2b$core$40$7$2e$2_e20dd83558281a44de59b10a44a9de12$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "gazu-drawer-footer-text",
                            children: "KIARA STYLE • EVERYDAY EDIT"
                        }, void 0, false, {
                            fileName: "[project]/artifacts/kiara-style/components/store-header.tsx",
                            lineNumber: 201,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/artifacts/kiara-style/components/store-header.tsx",
                        lineNumber: 200,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/artifacts/kiara-style/components/store-header.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/artifacts/kiara-style/components/store-header.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_s(StoreHeader, "9I8qgBl8f/61Nrp8/VnGbjyie68=");
_c = StoreHeader;
var _c;
__turbopack_context__.k.register(_c, "StoreHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=artifacts_kiara-style_components_store-header_tsx_0fz810n2tf36m._.js.map