import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
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
