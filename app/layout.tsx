import type { Metadata } from 'next'
import { Cormorant_Garamond, Space_Mono, Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CookieConsent from '@/components/CookieConsent'

const cormorant = Cormorant_Garamond({
  variable: '--font-serif',
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal'],
})
const spaceMono = Space_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['400', '700'],
})
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.lengmedia.com'),
  title: 'Leng Media – Performance Marketing Agency for Ecommerce Brands',
  description: 'London performance marketing agency scaling DTC brands through paid ads, AI solutions and SEO — trusted by Nat Geo Traveller and Skin+Me.',
  openGraph: {
    title: 'Leng Media – Performance Marketing Agency for Ecommerce Brands',
    description: 'London performance marketing agency scaling DTC brands through paid ads, AI solutions and SEO — trusted by Nat Geo Traveller and Skin+Me.',
    url: 'https://www.lengmedia.com',
    siteName: 'Leng Media',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Leng Media – Performance Marketing Agency for Ecommerce Brands' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Leng Media – Performance Marketing Agency for Ecommerce Brands',
    description: 'London performance marketing agency scaling DTC brands through paid ads, AI solutions and SEO — trusted by Nat Geo Traveller and Skin+Me.',
    images: ['/og-image.jpg'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.lengmedia.com/#organization',
      name: 'Leng Media',
      url: 'https://www.lengmedia.com',
      logo: 'https://www.lengmedia.com/apple-icon.png',
      description: 'Performance marketing agency for ecommerce brands. We scale DTC brands through paid media, SEO, AI solutions and revenue driven growth strategy.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'London',
        addressCountry: 'GB',
      },
      sameAs: ['https://www.instagram.com/lengmedia.ai/'],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.lengmedia.com/#website',
      url: 'https://www.lengmedia.com',
      name: 'Leng Media',
      publisher: { '@id': 'https://www.lengmedia.com/#organization' },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${spaceMono.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Nav />
        <main>{children}</main>
        <Footer />
        {/* Meta Pixel and Google Analytics load from here, only after consent. */}
        <CookieConsent />
      </body>
    </html>
  )
}
