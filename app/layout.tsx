import type { Metadata } from 'next'
import { Cormorant_Garamond, Space_Mono, Inter } from 'next/font/google'
import Script from 'next/script'
import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

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
  description: 'We scale ecommerce brands through performance marketing, AI solutions and revenue driven growth strategy. London based agency trusted by Nat Geo Traveller, Skin+Me and leading DTC brands.',
  openGraph: {
    title: 'Leng Media – Performance Marketing Agency for Ecommerce Brands',
    description: 'We scale ecommerce brands through performance marketing, AI solutions and revenue driven growth strategy. London based agency trusted by Nat Geo Traveller, Skin+Me and leading DTC brands.',
    url: 'https://www.lengmedia.com',
    siteName: 'Leng Media',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Leng Media – Performance Marketing Agency for Ecommerce Brands' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Leng Media – Performance Marketing Agency for Ecommerce Brands',
    description: 'We scale ecommerce brands through performance marketing, AI solutions and revenue driven growth strategy.',
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
      description: 'Performance marketing agency for ecommerce brands. We scale DTC brands through paid media, SEO, AI solutions and revenue driven growth strategy.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'London',
        addressCountry: 'GB',
      },
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
    <ClerkProvider afterSignOutUrl="/">
    <html lang="en" className={`${cormorant.variable} ${spaceMono.variable} ${inter.variable}`}>
      <body>
        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">{`
          !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
          n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
          document,'script','https://connect.facebook.net/en_US/fbevents.js');
          fbq('init','991276137090422');fbq('track','PageView');
        `}</Script>
        <noscript><img height="1" width="1" style={{display:'none'}} src="https://www.facebook.com/tr?id=991276137090422&ev=PageView&noscript=1" alt="" /></noscript>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NBQPLL55BS"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NBQPLL55BS');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Chatbot Widget */}
        <Script
          src="https://buildmyagent.io/widget/6a41ddf400831705339e941e/widget-professional.js?widgetId=6a41ddf400831705339e941e"
          strategy="lazyOnload"
        />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
    </ClerkProvider>
  )
}
