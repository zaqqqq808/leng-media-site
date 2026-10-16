import type { NextConfig } from 'next'

// Clerk's Frontend API host is encoded in the publishable key
// (pk_live_<base64 "clerk.lengmedia.com$">), so the CSP follows whichever
// Clerk instance this build is configured for, dev or live.
function clerkHost() {
  const key = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ?? ''
  try {
    const host = Buffer.from(key.split('_')[2] ?? '', 'base64').toString().replace(/\$$/, '')
    if (/^[a-z0-9.-]+$/i.test(host)) return `https://${host}`
  } catch {}
  return 'https://clerk.lengmedia.com'
}

const isDev = process.env.NODE_ENV !== 'production'
// Vercel's comment toolbar is injected on preview deployments only.
const preview = process.env.VERCEL_ENV === 'preview'
const vercelLive = preview ? ' https://vercel.live' : ''

// Content Security Policy. Marketing pages are static, so per-request nonces
// aren't possible; inline scripts (Next's bootstrap, JSON-LD) are allowed and
// everything else is limited to the vendors the site actually loads:
//   Google Analytics + Meta Pixel (only after cookie consent), the Calendly
//   popup, the Vimeo player on /ecommerce-protocol, and Clerk (+ its
//   Cloudflare Turnstile bot check) on the sign-in and members pages.
// Adding a new third-party script, frame or API means adding its host here,
// or the browser will block it.
const clerk = clerkHost()
// The pixel's Conversions API Gateway ("openbridge" in the config Meta serves
// for this pixel). If the gateway is rebuilt in Events Manager these hosts
// change, and the browser console will show the new ones being blocked.
const metaGateway = 'https://fh-118116076e9a4c2a96a99fbb70bea2a0.ecs.us-west-2.on.aws https://bded8a3c6ae-1-1053047382554.us-central1.run.app'
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''} https://www.googletagmanager.com https://connect.facebook.net https://assets.calendly.com ${clerk} https://challenges.cloudflare.com${vercelLive}`,
  `connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com https://www.facebook.com https://connect.facebook.net ${metaGateway} ${clerk}${preview ? ' https://vercel.live wss://ws-us3.pusher.com' : ''}`,
  `img-src 'self' data: blob: https://*.google-analytics.com https://www.googletagmanager.com https://www.facebook.com https://img.clerk.com https://assets.calendly.com${preview ? ' https://vercel.live https://vercel.com' : ''}`,
  `style-src 'self' 'unsafe-inline' https://assets.calendly.com${vercelLive}`,
  `font-src 'self' data:${preview ? ' https://vercel.live https://assets.vercel.com' : ''}`,
  "media-src 'self'",
  `frame-src https://calendly.com https://player.vimeo.com https://challenges.cloudflare.com https://www.facebook.com${vercelLive}`,
  "worker-src 'self' blob:",
  "frame-ancestors 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  // The pixel falls back to posting a form into a hidden facebook.com frame.
  "form-action 'self' https://www.facebook.com",
  ...(isDev ? [] : ['upgrade-insecure-requests']),
].join('; ')

const securityHeaders = [
  { key: 'Content-Security-Policy', value: csp },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()' },
  // allow-popups: Clerk's social sign-in can open a popup that must report back.
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin-allow-popups' },
]

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }]
  },
  async redirects() {
    return [
      // ── Old WordPress service pages → new Next.js routes ──
      { source: '/direct-response', destination: '/services/direct-response', permanent: true },
      { source: '/direct-response/', destination: '/services/direct-response', permanent: true },
      { source: '/seo', destination: '/services/seo', permanent: true },
      { source: '/seo/', destination: '/services/seo', permanent: true },
      { source: '/agency-assistance', destination: '/services/agency-assist', permanent: true },
      { source: '/agency-assistance/', destination: '/services/agency-assist', permanent: true },
      { source: '/a-i-solutions', destination: '/services/ai-solutions', permanent: true },
      { source: '/a-i-solutions/', destination: '/services/ai-solutions', permanent: true },
      { source: '/ai-solutions', destination: '/services/ai-solutions', permanent: true },
      { source: '/ai-solutions/', destination: '/services/ai-solutions', permanent: true },
      { source: '/cmoaas', destination: '/services/fractional-cmo', permanent: true },
      { source: '/cmoaas/', destination: '/services/fractional-cmo', permanent: true },
      { source: '/cmo-as-a-service', destination: '/services/fractional-cmo', permanent: true },
      { source: '/cmo-as-a-service/', destination: '/services/fractional-cmo', permanent: true },
      { source: '/services/cmo-as-a-service', destination: '/services/fractional-cmo', permanent: true },
      { source: '/services/cmo-as-a-service/', destination: '/services/fractional-cmo', permanent: true },
      { source: '/lead-generation', destination: '/services/lead-generation', permanent: true },
      { source: '/lead-generation/', destination: '/services/lead-generation', permanent: true },
      { source: '/website-builds', destination: '/services/website-builds', permanent: true },
      { source: '/website-builds/', destination: '/services/website-builds', permanent: true },
      { source: '/agency-assist', destination: '/services/agency-assist', permanent: true },
      { source: '/agency-assist/', destination: '/services/agency-assist', permanent: true },
      { source: '/ai-dashboard', destination: '/services/ai-solutions', permanent: true },
      { source: '/ai-cheat-sheet', destination: '/free-tools/ai-cheat-sheet', permanent: true },

      // ── Old WordPress dashboard module pages → ecommerce protocol ──
      { source: '/dashboard/module-1-research', destination: '/ecommerce-protocol', permanent: true },
      { source: '/dashboard/module-1-research/', destination: '/ecommerce-protocol', permanent: true },
      { source: '/dashboard/module-2-sourcing', destination: '/ecommerce-protocol', permanent: true },
      { source: '/dashboard/module-2-sourcing/', destination: '/ecommerce-protocol', permanent: true },
      { source: '/dashboard/module-3-build', destination: '/ecommerce-protocol', permanent: true },
      { source: '/dashboard/module-3-build/', destination: '/ecommerce-protocol', permanent: true },
      { source: '/dashboard/module-4-logistics', destination: '/ecommerce-protocol', permanent: true },
      { source: '/dashboard/module-4-logistics/', destination: '/ecommerce-protocol', permanent: true },
      { source: '/dashboard/module-5-traffic', destination: '/ecommerce-protocol', permanent: true },
      { source: '/dashboard/module-5-traffic/', destination: '/ecommerce-protocol', permanent: true },
      { source: '/dashboard/module-6-scale', destination: '/protocol-dashboard', permanent: true },
      { source: '/dashboard/module-6-scale/', destination: '/protocol-dashboard', permanent: true },

      // ── Old WordPress generic pages ──
      { source: '/home-2', destination: '/', permanent: true },
      { source: '/home-2/', destination: '/', permanent: true },
      { source: '/the-ecom-protocol', destination: '/ecommerce-protocol', permanent: true },
      { source: '/the-ecom-protocol/', destination: '/ecommerce-protocol', permanent: true },
      { source: '/products/ai-for-ecom-tutorials-bundle-offer', destination: '/free-tools', permanent: true },
      { source: '/products/ai-for-ecom-tutorials-bundle-offer/', destination: '/free-tools', permanent: true },
      { source: '/ai-for-ecom-tutorials-dashboard/:path*', destination: '/protocol-dashboard', permanent: true },
      { source: '/category/:path*', destination: '/', permanent: true },
      { source: '/protocol-dashboard', destination: '/ecommerce-protocol', permanent: false },
      { source: '/protocol-dashboard/', destination: '/ecommerce-protocol', permanent: false },
    ]
  },
}

export default nextConfig
