import { SignUp } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import Stripe from 'stripe'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Create Your Account – Leng Media',
  robots: { index: false },
}

const PRODUCT_LABELS: Record<string, string> = {
  'ai-course':            'AI for Ecommerce Course',
  'ecommerce-protocol':   'The Ecommerce Protocol',
  'ai-cheat-sheet':       'AI for Ecommerce Cheat Sheet',
}

export default async function JoinPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string; product?: string }>
}) {
  const { session_id, product } = await searchParams

  // If no session, bounce to homepage
  if (!session_id || !product) redirect('/')

  // Verify the Stripe session server-side
  let verified = false
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
    const session = await stripe.checkout.sessions.retrieve(session_id)
    verified = session.payment_status === 'paid'
  } catch {
    // Invalid session ID
  }

  if (!verified) redirect('/')

  const productLabel = PRODUCT_LABELS[product] ?? 'Your Purchase'
  const afterSignUpUrl = `/api/grant-access?session_id=${session_id}&product=${product}`

  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--black)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: '80px',
      gap: '32px',
    }}>
      <div style={{ textAlign: 'center', maxWidth: 480 }}>
        <span style={{
          display: 'inline-block',
          padding: '6px 14px',
          border: '1px solid #d4ff00',
          color: '#d4ff00',
          fontFamily: 'var(--font-mono), monospace',
          fontSize: '9px',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          marginBottom: '20px',
        }}>
          Payment confirmed
        </span>
        <h1 style={{
          fontFamily: 'var(--font-serif), serif',
          fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
          fontWeight: 400,
          color: '#fff',
          lineHeight: 1.15,
          marginBottom: '12px',
        }}>
          You&apos;re in.
        </h1>
        <p style={{
          fontFamily: 'var(--font-inter), sans-serif',
          fontSize: '0.95rem',
          color: '#888',
          lineHeight: 1.6,
        }}>
          Create your account to access <strong style={{ color: '#fff' }}>{productLabel}</strong> and everything else in your members area.
        </p>
      </div>

      <SignUp
        routing="hash"
        forceRedirectUrl={afterSignUpUrl}
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
            headerTitle: { display: 'none' },
            headerSubtitle: { display: 'none' },
            footerActionLink: { color: '#d4ff00' },
          },
        }}
      />
    </div>
  )
}
