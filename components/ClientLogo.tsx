'use client'
import { useState } from 'react'
import Image from 'next/image'
import styles from './ClientLogo.module.css'

interface Props {
  name: string
  domain: string
}

export default function ClientLogo({ name, domain }: Props) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return <span className={styles.fallback}>{name}</span>
  }

  return (
    <Image
      src={`https://logo.clearbit.com/${domain}?size=200`}
      alt={name}
      width={140}
      height={56}
      unoptimized
      className={styles.logo}
      onError={() => setFailed(true)}
    />
  )
}
