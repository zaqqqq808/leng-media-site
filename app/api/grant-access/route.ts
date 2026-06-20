import { NextRequest, NextResponse } from 'next/server'
import { auth, clerkClient } from '@clerk/nextjs/server'
import Stripe from 'stripe'

const VALID_PRODUCTS = ['ai-course', 'ecommerce-protocol', 'ai-cheat-sheet']

export async function GET(req: NextRequest) {
  const { userId } = await auth()
  if (!userId) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  const { searchParams } = new URL(req.url)
  const sessionId = searchParams.get('session_id')
  const product   = searchParams.get('product')

  if (!sessionId || !product || !VALID_PRODUCTS.includes(product)) {
    return NextResponse.redirect(new URL('/members', req.url))
  }

  // Verify the Stripe session
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
    const session = await stripe.checkout.sessions.retrieve(sessionId)

    if (session.payment_status !== 'paid') {
      return NextResponse.redirect(new URL('/members', req.url))
    }

    // Get current purchases and add the new one (deduplicated)
    const clerk = await clerkClient()
    const user  = await clerk.users.getUser(userId)
    const existing = (user.publicMetadata?.purchases as string[]) ?? []

    if (!existing.includes(product)) {
      await clerk.users.updateUserMetadata(userId, {
        publicMetadata: {
          purchases: [...existing, product],
        },
      })
    }
  } catch (err) {
    console.error('Grant access error:', err)
  }

  return NextResponse.redirect(new URL('/members', req.url))
}
