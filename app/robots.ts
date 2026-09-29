import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Never disallow /_next/: it holds the CSS and JS Google needs to
        // render pages. Blocking it makes Google judge half-styled pages.
        disallow: ['/api/', '/members'],
      },
    ],
    sitemap: 'https://www.lengmedia.com/sitemap.xml',
    host: 'https://www.lengmedia.com',
  }
}
