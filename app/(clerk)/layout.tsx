import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from 'next'

// Every route that needs Clerk lives in this group: login, sign-up, the
// post-checkout /join page and the members area. Scoping the provider here
// keeps Clerk's JavaScript off the marketing pages entirely.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

export default function ClerkLayout({ children }: { children: React.ReactNode }) {
  return <ClerkProvider afterSignOutUrl="/">{children}</ClerkProvider>
}
