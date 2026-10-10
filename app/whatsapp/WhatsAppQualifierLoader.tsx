'use client'

import { useSearchParams } from 'next/navigation'
import WhatsAppQualifier from '@/components/WhatsAppQualifier'

// Reads ?service= on the client so the page itself stays static.
export default function WhatsAppQualifierLoader() {
  const service = useSearchParams().get('service')
  return <WhatsAppQualifier initialService={service} />
}
