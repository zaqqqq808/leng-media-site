import { NextRequest, NextResponse } from 'next/server'

// NOTE: Once NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY and CLERK_SECRET_KEY are added
// to Vercel environment variables, swap this back to clerkMiddleware so that
// /members/* is properly auth-gated rather than just redirect-gated.

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith('/members')) {
    // TODO: replace with Clerk session check once env vars are set in Vercel
    return NextResponse.redirect(new URL('/login', req.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
  ],
}
