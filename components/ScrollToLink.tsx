'use client'

interface Props {
  targetId: string
  className?: string
  children: React.ReactNode
}

function easeInOutQuad(t: number) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2
}

// Manual rAF-driven scroll rather than scrollIntoView({behavior:'smooth'}):
// native smooth-scroll timing is inconsistent across browsers/automation,
// this is guaranteed to animate the same way everywhere.
function smoothScrollTo(targetY: number, duration = 600) {
  const startY = window.scrollY
  const distance = targetY - startY
  const startTime = performance.now()

  function step(now: number) {
    const elapsed = now - startTime
    const progress = Math.min(elapsed / duration, 1)
    window.scrollTo(0, startY + distance * easeInOutQuad(progress))
    if (progress < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

/** Smooth-scrolls to an in-page element by id. Falls back to a normal
 * hash link (href="#id") if JS hasn't loaded yet. */
export default function ScrollToLink({ targetId, className, children }: Props) {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    const target = document.getElementById(targetId)
    if (target) {
      e.preventDefault()
      const targetY = target.getBoundingClientRect().top + window.scrollY
      smoothScrollTo(targetY)
    }
  }

  return (
    <a href={`#${targetId}`} className={className} onClick={handleClick}>
      {children}
    </a>
  )
}
