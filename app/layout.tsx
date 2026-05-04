import type { Metadata } from 'next'
import { Cormorant_Garamond, Space_Mono, Inter } from 'next/font/google'
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
  title: 'Leng Media – AI & Growth Agency',
  description: 'London-based AI & growth hacking agency. We help ambitious brands launch, scale and maximise ROI.',
  openGraph: {
    title: 'Leng Media – AI & Growth Agency',
    description: 'London-based AI & growth hacking digital agency.',
    url: 'https://lengmedia.com',
    siteName: 'Leng Media',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${spaceMono.variable} ${inter.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
