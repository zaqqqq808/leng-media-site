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

// ── DATA PARTICLES ──────────────────────────────────────────────────────────
interface DataItem {
  text: string
  color: string
  bright: boolean
  spark: number[] | null
  bars: number[] | null
}

const DATA: DataItem[] = [
  // Revenue — neon, bright
  { text: '+127% ROAS',      color: '#D4FF00', bright: true,  spark: [10,14,12,18,22,28,26,35,42], bars: null },
  { text: '£2.3M revenue',   color: '#D4FF00', bright: true,  spark: null, bars: [3,5,4,7,6,9,8,10] },
  { text: 'CPA: £0.32',      color: '#C8F200', bright: true,  spark: null, bars: null },
  { text: '3.8x ROI',        color: '#D4FF00', bright: true,  spark: [5,8,7,12,10,15,18,22], bars: null },
  { text: '+£480k ARR',      color: '#C8F200', bright: false, spark: null, bars: null },
  { text: '£15k/mo',         color: '#D4FF00', bright: false, spark: null, bars: null },
  // Growth — lighter neon
  { text: '↑ 94% YoY',       color: '#AAEE00', bright: true,  spark: [8,12,11,16,20,24,28,34,40], bars: null },
  { text: '+847 leads',      color: '#AAEE00', bright: false, spark: null, bars: [2,4,3,6,5,8,7,10] },
  { text: 'SCALE: 10x',      color: '#AAEE00', bright: false, spark: null, bars: null },
  { text: '↑ MRR +38%',      color: '#AAEE00', bright: true,  spark: [6,9,8,13,16,19,22,27], bars: null },
  { text: 'CONV +4.2pp',     color: '#88CC00', bright: false, spark: null, bars: null },
  // Technical — grey/dim
  { text: 'CTR: 4.7%',       color: '#555555', bright: false, spark: null, bars: null },
  { text: 'CVR: 3.2%',       color: '#4a4a4a', bright: false, spark: null, bars: null },
  { text: 'A/B_TEST_02',     color: '#444444', bright: false, spark: null, bars: null },
  { text: 'FUNNEL_v4',       color: '#4a4a4a', bright: false, spark: null, bars: null },
  { text: 'seg_score: 0.91', color: '#3d3d3d', bright: false, spark: null, bars: null },
  { text: '0x4FF200',        color: '#3a3a3a', bright: false, spark: null, bars: null },
  { text: 'API_SYNC ✓',      color: '#505050', bright: false, spark: null, bars: null },
  { text: 'bid_adj: +22%',   color: '#454545', bright: false, spark: null, bars: null },
  // Architecture — very dim
  { text: 'DEPLOY_OK',       color: '#3d3d3d', bright: false, spark: null, bars: null },
  { text: 'sys: active',     color: '#404040', bright: false, spark: null, bars: null },
  { text: '[OPTIMISED]',     color: '#383838', bright: false, spark: null, bars: null },
  { text: 'NODE_07 ◆',       color: '#3a3a3a', bright: false, spark: null, bars: null },
  { text: 'pipeline: live',  color: '#404040', bright: false, spark: null, bars: null },
  { text: 'AUTO_BID_v3',     color: '#383838', bright: false, spark: null, bars: null },
]

interface Particle {
  x: number; y: number
  vx: number; vy: number
  alpha: number
  phaseOffset: number
  item: DataItem
  life: number
  maxLife: number
}

const recentItems = new Set<number>()

function spawnParticle(W: number, H: number): Particle {
  const cx = W * 0.50, cy = H * 0.5, R = Math.min(W, H) * 0.34
  const angle = (Math.random() * 1.22 - 0.61) * Math.PI
  const dist = R * (0.6 + Math.random() * 0.6)
  let idx = Math.floor(Math.random() * DATA.length)
  let tries = 0
  while (recentItems.has(idx) && tries++ < 8) idx = Math.floor(Math.random() * DATA.length)
  recentItems.add(idx)
  if (recentItems.size > 8) recentItems.delete(recentItems.values().next().value as number)
  const item = DATA[idx]
  return {
    x: cx + Math.cos(angle) * dist,
    y: cy + Math.sin(angle) * dist,
    vx: (Math.random() - 0.5) * 0.12,
    vy: (Math.random() - 0.5) * 0.08,
    alpha: 0,
    phaseOffset: Math.random() * Math.PI * 2,
    item,
    life: 0,
    maxLife: 280 + Math.random() * 200,
  }
}

function drawSparkline(
  ctx: CanvasRenderingContext2D,
  x: number, y: number,
  data: number[],
  alpha: number,
  color: string,
) {
  const w = 36, h = 10
  const min = Math.min(...data), max = Math.max(...data)
  const range = max - min || 1
  ctx.save()
  ctx.globalAlpha = alpha * 0.75
  ctx.strokeStyle = color
  ctx.lineWidth = 1
  ctx.lineJoin = 'round'
  ctx.beginPath()
  data.forEach((v, i) => {
    const px = x + (i / (data.length - 1)) * w
    const py = y - ((v - min) / range) * h
    i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py)
  })
  ctx.stroke()
  ctx.restore()
}

function drawBars(
  ctx: CanvasRenderingContext2D,
  x: number, y: number,
  data: number[],
  alpha: number,
  color: string,
) {
  const bw = 3, gap = 1.5, h = 10
  const max = Math.max(...data) || 1
  ctx.save()
  ctx.globalAlpha = alpha * 0.65
  ctx.fillStyle = color
  data.forEach((v, i) => {
    const bh = (v / max) * h
    ctx.fillRect(x + i * (bw + gap), y - bh, bw, bh)
  })
  ctx.restore()
}

// ────────────────────────────────────────────────────────────────────────────

export default function BlobCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let W = 0, H = 0, dpr = 1, raf = 0, t = 0
    let particles: Particle[] = []

    const resize = () => {
      dpr = window.devicePixelRatio || 1
      const r = canvas.getBoundingClientRect()
      W = r.width; H = r.height
      canvas.width  = W * dpr
      canvas.height = H * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      if (particles.length === 0 && W > 0) {
        particles = Array.from({ length: 14 }, () => {
          const p = spawnParticle(W, H)
          p.life = Math.random() * p.maxLife * 0.6
          p.alpha = Math.random() * 0.5
          return p
        })
      }
    }

    const frame = () => {
      if (!W || !H) { raf = requestAnimationFrame(frame); return }
      ctx.clearRect(0, 0, W, H)

      const cx = W * 0.50, cy = H * 0.50, R = Math.min(W, H) * 0.34

      // ── 1. GROUND SHADOW ──
      {
        const gs = ctx.createRadialGradient(cx, cy + R * 1.12, 0, cx, cy + R * 1.12, R * 0.62)
        gs.addColorStop(0,   'rgba(0,0,0,0.22)')
        gs.addColorStop(0.5, 'rgba(0,0,0,0.10)')
        gs.addColorStop(1,   'rgba(0,0,0,0)')
        ctx.fillStyle = gs
        ctx.beginPath()
        ctx.ellipse(cx, cy + R * 1.14, R * 0.52, R * 0.10, 0, 0, Math.PI * 2)
        ctx.fill()
      }

      // ── 2. OUTER GLOW RINGS ──
      for (let p = 3; p >= 1; p--) {
        smooth(ctx, blobPts(cx, cy, R * (1.05 + p * 0.12), t * 0.6))
        ctx.fillStyle = `rgba(212,255,0,${0.035 - p * 0.004})`
        ctx.fill()
      }

      // ── 3. MAIN BODY ──
      smooth(ctx, blobPts(cx, cy, R, t))
      const litX = cx - R * 0.30, litY = cy - R * 0.30
      const g = ctx.createRadialGradient(litX, litY, 0, cx + R * 0.1, cy + R * 0.1, R * 1.28)
      g.addColorStop(0,    'rgba(255,255,215,0.52)')
      g.addColorStop(0.10, 'rgba(225,255,0,0.44)')
      g.addColorStop(0.32, 'rgba(175,225,0,0.26)')
      g.addColorStop(0.58, 'rgba(100,165,0,0.15)')
      g.addColorStop(0.80, 'rgba(45,85,0,0.08)')
      g.addColorStop(1,    'rgba(0,10,0,0.02)')
      ctx.fillStyle = g; ctx.fill()

      // ── 4. SHADOW OVERLAY ──
      smooth(ctx, blobPts(cx, cy, R, t))
      const shX = cx + R * 0.40, shY = cy + R * 0.44
      const sh = ctx.createRadialGradient(shX, shY, 0, cx + R * 0.14, cy + R * 0.14, R * 1.18)
      sh.addColorStop(0,    'rgba(0,0,0,0.38)')
      sh.addColorStop(0.35, 'rgba(0,0,0,0.24)')
      sh.addColorStop(0.65, 'rgba(0,0,0,0.10)')
      sh.addColorStop(1,    'rgba(0,0,0,0)')
      ctx.fillStyle = sh; ctx.fill()

      // ── 5. THIN DARK EQUATOR BAND ──
      smooth(ctx, blobPts(cx, cy, R * 0.97, t))
      ctx.save()
      ctx.globalAlpha = 0.06
      ctx.strokeStyle = 'rgba(0,20,0,1)'
      ctx.lineWidth = R * 0.18
      ctx.stroke()
      ctx.restore()

      // ── 6. RIM / EDGE GLOW ──
      smooth(ctx, blobPts(cx, cy, R * 0.99, t + 0.15))
      ctx.save()
      ctx.shadowColor = '#D4FF00'
      ctx.shadowBlur = 30
      ctx.strokeStyle = 'rgba(212,255,0,0.62)'
      ctx.lineWidth = 1.5
      ctx.stroke()
      ctx.restore()

      // ── 7. SECONDARY RIM LIGHT ──
      smooth(ctx, blobPts(cx, cy, R * 1.005, t + 0.08))
      ctx.save()
      ctx.strokeStyle = 'rgba(255,255,200,0.22)'
      ctx.lineWidth = 2.5
      ctx.stroke()
      ctx.restore()

      // ── 8. LARGE SOFT SPECULAR HIGHLIGHT ──
      smooth(ctx, blobPts(cx - R * 0.12, cy - R * 0.16, R * 0.38, t * 1.12))
      const spec1 = ctx.createRadialGradient(
        cx - R * 0.30, cy - R * 0.32, 0,
        cx - R * 0.16, cy - R * 0.18, R * 0.42
      )
      spec1.addColorStop(0,    'rgba(255,255,255,0.46)')
      spec1.addColorStop(0.30, 'rgba(255,255,230,0.20)')
      spec1.addColorStop(0.65, 'rgba(255,255,210,0.07)')
      spec1.addColorStop(1,    'rgba(255,255,255,0)')
      ctx.fillStyle = spec1; ctx.fill()

      // ── 9. SMALL SHARP SPECULAR DOT ──
      const ssOx = Math.sin(t * 0.65) * R * 0.018
      const ssOy = Math.cos(t * 0.82) * R * 0.014
      const ssx = cx - R * 0.28 + ssOx
      const ssy = cy - R * 0.31 + ssOy
      ctx.beginPath()
      ctx.arc(ssx, ssy, R * 0.042, 0, Math.PI * 2)
      const spec2 = ctx.createRadialGradient(ssx, ssy, 0, ssx, ssy, R * 0.042)
      spec2.addColorStop(0,    'rgba(255,255,255,0.92)')
      spec2.addColorStop(0.45, 'rgba(255,255,240,0.28)')
      spec2.addColorStop(1,    'rgba(255,255,255,0)')
      ctx.fillStyle = spec2; ctx.fill()

      // ── 10. MICRO SECONDARY SPECULAR ──
      const ms2x = cx - R * 0.20 + ssOx * 0.5
      const ms2y = cy - R * 0.38 + ssOy * 0.5
      ctx.beginPath()
      ctx.arc(ms2x, ms2y, R * 0.018, 0, Math.PI * 2)
      const spec3 = ctx.createRadialGradient(ms2x, ms2y, 0, ms2x, ms2y, R * 0.018)
      spec3.addColorStop(0, 'rgba(255,255,255,0.55)')
      spec3.addColorStop(1, 'rgba(255,255,255,0)')
      ctx.fillStyle = spec3; ctx.fill()

      // ── 11. ANIMATED FLARES ──
      ;[[-0.38,-0.32,3,0.6+.35*Math.sin(t*2.1)],
        [0.25,-0.18,2,0.4+.25*Math.sin(t*2.6+1)],
        [-0.15,0.28,2.2,.35+.2*Math.sin(t*1.8+2)]
      ].forEach(([dx,dy,r,a]) => {
        ctx.beginPath()
        ctx.arc(cx+R*dx, cy+R*dy, r, 0, Math.PI*2)
        ctx.fillStyle = `rgba(255,255,200,${a})`
        ctx.fill()
      })

      // ── PARTICLES ──────────────────────────────────────────────
      particles.forEach((p, i) => {
        p.life++
        p.x += p.vx
        p.y += p.vy
        const { maxLife, life, phaseOffset, item } = p
        const fadeIn  = Math.min(life / 50, 1)
        const fadeOut = Math.min((maxLife - life) / 50, 1)
        const pulse   = item.bright
          ? 0.55 + Math.sin(t * 1.4 + phaseOffset) * 0.18
          : 0.28 + Math.sin(t * 0.9 + phaseOffset) * 0.08
        p.alpha = Math.min(fadeIn, fadeOut) * pulse

        if (life >= maxLife) {
          particles[i] = spawnParticle(W, H)
          return
        }

        ctx.save()
        ctx.globalAlpha = p.alpha
        ctx.font = `10px "Space Mono", monospace`
        ctx.fillStyle = item.color
        ctx.fillText(item.text, p.x, p.y)
        ctx.restore()

        if (item.spark) drawSparkline(ctx, p.x, p.y + 5, item.spark, p.alpha, item.color)
        if (item.bars)  drawBars(ctx, p.x, p.y + 5, item.bars, p.alpha, item.color)
      })

      while (particles.length < 16 && W > 0) {
        particles.push(spawnParticle(W, H))
      }

      t += .022
      raf = requestAnimationFrame(frame)
    }

    window.addEventListener('resize', resize)
    setTimeout(resize, 50)
    frame()
    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(raf)
    }
  }, [])

  return <canvas ref={ref} className={styles.canvas} />
}
