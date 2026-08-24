'use client'

import dynamic from 'next/dynamic'

// ssr:false previously kept this entire component — including the H1,
// tagline and CTAs passed in as children — out of the server-rendered
// HTML, so crawlers saw an empty hero. Server-render it; only the
// canvas drawing itself is deferred to the client (inside a useEffect).
const VideoScrollHero = dynamic(() => import('./VideoScrollHero'))

export default function VideoScrollHeroWrapper({ children }: { children: React.ReactNode }) {
  return <VideoScrollHero>{children}</VideoScrollHero>
}
