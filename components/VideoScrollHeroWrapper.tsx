'use client'

import dynamic from 'next/dynamic'

const VideoScrollHero = dynamic(() => import('./VideoScrollHero'), { ssr: false })

export default function VideoScrollHeroWrapper({ children }: { children: React.ReactNode }) {
  return <VideoScrollHero>{children}</VideoScrollHero>
}
