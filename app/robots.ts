import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
          rules: [
                  {
                            userAgent: '*',
                            allow: '/',
                            disallow: [
                                        '/protocol-dashboard/',
                                        '/dashboard/',
                                        '/ai-for-ecom-tutorials-dashboard/',
                                      ],
                          },
                ],
          sitemap: 'https://www.lengmedia.com/sitemap.xml',
        }
  }
