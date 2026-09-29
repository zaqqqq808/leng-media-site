import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isProtectedRoute = createRouteMatcher(['/members(.*)'])

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    await auth.protect()
  }
})

// Only the routes that use Clerk run through this middleware. Marketing
// pages are static HTML and skip it, so they're served straight from the
// CDN without an extra hop on every request.
export const config = {
  matcher: [
    '/members/:path*',
    '/login/:path*',
    '/sign-in/:path*',
    '/sign-up/:path*',
    '/join/:path*',
    '/api/grant-access/:path*',
    '/__clerk/:path*',
  ],
}
