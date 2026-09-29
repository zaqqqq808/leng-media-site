import { SignIn } from '@clerk/nextjs'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Member Login – Leng Media',
  robots: { index: false },
}

export default function LoginPage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--black)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: '80px',
    }}>
      <SignIn
        routing="hash"
        forceRedirectUrl="/members"
        appearance={{
          variables: {
            colorBackground: '#1a1a1a',
            colorPrimary: '#d4ff00',
            colorPrimaryForeground: '#000000',
            colorInput: '#262626',
            colorInputForeground: '#ffffff',
            borderRadius: '0px',
            fontFamily: 'var(--font-inter), sans-serif',
          },
          elements: {
            card: { boxShadow: 'none', border: '1px solid rgba(255,255,255,0.08)' },
            headerTitle: { fontFamily: 'var(--font-serif), serif', fontWeight: '400' },
            footerActionLink: { color: '#d4ff00' },
          },
        }}
      />
    </div>
  )
}
