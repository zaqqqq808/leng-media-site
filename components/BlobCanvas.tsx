'use client'
import { useEffect, useRef } from 'react'
import styles from './BlobCanvas.module.css'

const LAYERS = [
  { freq: 2, amp: 0.20, speed: 1.6,  phase: 0   },
  { freq: 3, amp: 0.14, speed: 1.1,  phase: 1.2 },
  { freq: 5, amp: 0.10, speed: 2.2,  phase: 2.5 },
  { freq: 7, amp: 0.07, speed: 0.85, phase: 0.7 },
  { freq: 4, amp: 0.08, speed: 1.75, phase: 3.8 },
]

type Pt = { x: number; y: number }

function blobPts(cx: number, cy: number, baseR: number, t: number): Pt[] {
  const N = 9
  return Array.from({ length: N }, (_, i) => {
    const a = (i / N) * Math.PI * 2
    let r = baseR
    for (const { freq, amp, speed, phase } of LAYERS)
      r += Math.sin(a * freq + t * speed + phase) * amp * baseR
    return { x: cx + Math.cos(a) * r, y: cy + Math.sin(a) * r }
  })
}

function smooth(ctx: CanvasRenderingContext2D, pts: Pt[]) {
  const n = pts.length
  ctx.beginPath()
  for (let i = 0; i < n; i++) {
    const p = pts[i], pn = pts[(i + 1) % n]
    const mx = (p.x + pn.x) / 2, my = (p.y + pn.y) / 2
    if (i === 0) ctx.moveTo(mx, my)
    else ctx.lineTo(mx, my)
    ctx.quadraticCurveTo(pn.x, pn.y,
      (pn.x + pts[(i + 2) % n].x) / 2,
      (pn.y + pts[(i + 2) % n].y) / 2)
  }
  ctx.closePath()
}

export default function BlobCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let W = 0, H = 0, dpr = 1, raf = 0, t = 0
    const resize = () => {
      dpr = window.devicePixelRatio || 1
      const r = canvas.getBoundingClientRect()
      W = r.width; H = r.height
      canvas.width = W * dpr; canvas.height = H * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    const frame = () => {
      if (!W || !H) { raf = requestAnimationFrame(frame); return }
      ctx.clearRect(0, 0, W, H)
      const cx = W * 0.05, cy = H * 0.50, R = Math.min(W, H) * 0.42
      // outer glow
      for (let p = 3; p >= 1; p--) {
        smooth(ctx, blobPts(cx, cy, R * (1.05 + p * 0.12), t * 0.6))
        ctx.fillStyle = `rgba(212,255,0,${0.04 - p * 0.005})`
        ctx.fill()
      }
      // body
      smooth(ctx, blobPts(cx, cy, R, t))
      const g = ctx.createRadialGradient(cx-R*.25,cy-R*.25,0,cx,cy,R*1.1)
      g.addColorStop(0,   'rgba(255,255,200,0.26)')
      g.addColorStop(.35, 'rgba(212,255,0,0.22)')
      g.addColorStop(.7,  'rgba(180,230,0,0.12)')
      g.addColorStop(1,   'rgba(120,180,0,0)')
      ctx.fillStyle = g; ctx.fill()
      // glow edge
      smooth(ctx, blobPts(cx, cy, R * .99, t + .15))
      ctx.save()
      ctx.shadowColor = '#D4FF00'; ctx.shadowBlur = 36
      ctx.strokeStyle = 'rgba(212,255,0,0.7)'; ctx.lineWidth = 2
      ctx.stroke(); ctx.restore()
      // inner highlight
      smooth(ctx, blobPts(cx-R*.08, cy-R*.12, R*.32, t*1.3))
      const h = ctx.createRadialGradient(cx-R*.2,cy-R*.2,0,cx-R*.1,cy-R*.1,R*.4)
      h.addColorStop(0, 'rgba(255,255,255,0.18)'); h.addColorStop(1, 'rgba(255,255,255,0)')
      ctx.fillStyle = h; ctx.fill()
      // flares
      ;[[-0.38,-0.32,3,0.6+.35*Math.sin(t*2.1)],[.25,-.18,2,0.4+.25*Math.sin(t*2.6+1)],[-.15,.28,2.2,.35+.2*Math.sin(t*1.8+2)]].forEach(([dx,dy,r,a])=>{
        ctx.beginPath(); ctx.arc(cx+R*dx,cy+R*dy,r,0,Math.PI*2)
        ctx.fillStyle=`rgba(255,255,200,${a})`; ctx.fill()
      })
      t += .022; raf = requestAnimationFrame(frame)
    }
    window.addEventListener('resize', resize)
    setTimeout(resize, 50)
    frame()
    return () => { window.removeEventListener('resize', resize); cancelAnimationFrame(raf) }
  }, [])
  return <canvas ref={ref} className={styles.canvas} />
}
