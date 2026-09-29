// Inline SVG charts used on the service pages.

export function FunnelDiagram() {
  const digital = ['META', 'GOOGLE ADS', 'TIKTOK', 'LINKEDIN', 'DISPLAY']
  const traditional = ['DAYTIME TV', 'PRESS ADS', 'DIRECT MAIL']
  const all = [...digital, ...traditional]
  const px = [55, 160, 268, 375, 468, 568, 682, 800]
  const tx = [215, 272, 332, 390, 448, 505, 563, 622]

  return (
    <svg viewBox="0 0 870 315" style={{width:'100%',maxWidth:870,display:'block',margin:'0 auto'}} aria-label="Platform agnostic funnel: digital and traditional channels">
      {/* Group annotations */}
      <text x="262" y="13" textAnchor="middle" fontFamily="'Courier New',monospace" fontSize="8" fill="rgba(212,255,0,0.6)" letterSpacing="2">// DIGITAL</text>
      <text x="683" y="13" textAnchor="middle" fontFamily="'Courier New',monospace" fontSize="8" fill="rgba(255,255,255,0.32)" letterSpacing="2">// TRADITIONAL</text>

      {/* Divider between groups */}
      <line x1="518" y1="20" x2="518" y2="103" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="3,5" />

      {/* Convergence lines */}
      {all.map((_, i) => (
        <line key={`l${i}`} x1={px[i]} y1={54} x2={tx[i]} y2={106}
          stroke={i < 5 ? 'rgba(212,255,0,0.28)' : 'rgba(255,255,255,0.16)'}
          strokeWidth="1" strokeDasharray="4,4" />
      ))}

      {/* Channel dots */}
      {all.map((_, i) => (
        <circle key={`d${i}`} cx={px[i]} cy={54} r={i < 5 ? 3 : 2.5}
          fill={i < 5 ? '#d4ff00' : 'rgba(255,255,255,0.5)'} opacity={i < 5 ? 0.65 : 0.75} />
      ))}

      {/* Channel labels */}
      {all.map((p, i) => (
        <text key={`p${i}`} x={px[i]} y={38} textAnchor="middle"
          fontFamily="'Courier New',monospace"
          fontSize={i < 5 ? 9 : 8}
          fill={i < 5 ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.3)'}
          letterSpacing="1.5">
          {p}
        </text>
      ))}

      {/* Funnel trapezoid */}
      <polygon points="215,106 628,106 462,228 385,228"
        fill="rgba(212,255,0,0.04)" stroke="rgba(212,255,0,0.55)" strokeWidth="1.5" strokeLinejoin="round" />
      {/* Funnel triangle */}
      <polygon points="385,228 462,228 423,263"
        fill="rgba(212,255,0,0.07)" stroke="rgba(212,255,0,0.55)" strokeWidth="1.5" strokeLinejoin="round" />

      {/* Funnel label */}
      <text x="423" y="161" textAnchor="middle" fontFamily="'Courier New',monospace" fontSize="12" fill="rgba(255,255,255,0.6)" letterSpacing="3">SMART</text>
      <text x="423" y="179" textAnchor="middle" fontFamily="'Courier New',monospace" fontSize="12" fill="rgba(255,255,255,0.6)" letterSpacing="3">STRATEGY</text>

      {/* Output arrow */}
      <line x1="423" y1="267" x2="423" y2="281" stroke="rgba(212,255,0,0.6)" strokeWidth="2" />
      <polygon points="416,278 430,278 423,292" fill="rgba(212,255,0,0.7)" />

      {/* Result label */}
      <text x="423" y="310" textAnchor="middle" fontFamily="'Courier New',monospace" fontSize="13" fill="#d4ff00" letterSpacing="4">ROI {'&'} PROFIT</text>
    </svg>
  )
}

export function TrafficChart() {
  const W = 860, H = 300, PL = 52, PR = 20, PT = 48, PB = 44
  const cW = W - PL - PR, cH = H - PT - PB

  // 24 months of realistic organic traffic — seasonality, dips, overall upward trend
  // Takeover happens after month index 7 (Aug)
  const data = [
    { m: 'May', v: 680 },
    { m: 'Jun', v: 720 },
    { m: 'Jul', v: 695 },
    { m: 'Aug', v: 760 },
    { m: 'Sep', v: 730 },
    { m: 'Oct', v: 810 },
    { m: 'Nov', v: 850 },
    { m: 'Dec', v: 890 },  // ← LENG MEDIA TOOK OVER (after this bar)
    { m: 'Jan', v: 820 },  // jan dip post-christmas
    { m: 'Feb', v: 960 },
    { m: 'Mar', v: 1240 },
    { m: 'Apr', v: 1580 },
    { m: 'May', v: 1490 }, // slight regression
    { m: 'Jun', v: 1820 },
    { m: 'Jul', v: 1750 }, // summer dip
    { m: 'Aug', v: 2190 },
    { m: 'Sep', v: 2680 },
    { m: 'Oct', v: 3140 },
    { m: 'Nov', v: 4280 }, // q4 spike
    { m: 'Dec', v: 5120 },
    { m: 'Jan', v: 4350 }, // post-xmas dip
    { m: 'Feb', v: 4980 },
    { m: 'Mar', v: 6240 },
    { m: 'Apr', v: 7180 },
  ]

  const maxV = 8000
  const takeoverIdx = 7 // after bar index 7
  const n = data.length
  const barW = (cW / n) * 0.62
  const gap = cW / n

  const bx = (i: number) => PL + i * gap + (gap - barW) / 2
  const by = (v: number) => PT + cH - (v / maxV) * cH
  const bh = (v: number) => (v / maxV) * cH

  const yTicks = [0, 2000, 4000, 6000, 8000]
  const takeoverX = PL + (takeoverIdx + 1) * gap

  // Trend line — smooth curve through data midpoints
  const tpts = data.map((d, i) => [bx(i) + barW / 2, by(d.v)] as [number, number])
  let trendD = `M ${tpts[0][0]} ${tpts[0][1]}`
  for (let i = 1; i < tpts.length; i++) {
    const [x0, y0] = tpts[i - 1], [x1, y1] = tpts[i]
    const cx = (x0 + x1) / 2
    trendD += ` C ${cx} ${y0} ${cx} ${y1} ${x1} ${y1}`
  }

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{width:'100%',maxWidth:W,display:'block',margin:'0 auto'}} aria-label="Organic traffic growth after Leng Media engagement">
      <defs>
        <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d4ff00" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#d4ff00" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="barGradMuted" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d4ff00" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#d4ff00" stopOpacity="0.05" />
        </linearGradient>
      </defs>

      {/* Background panel */}
      <rect x={PL} y={PT} width={cW} height={cH} fill="rgba(255,255,255,0.015)" rx="2" />

      {/* Grid lines + Y labels */}
      {yTicks.map(t => {
        const y = PT + cH - (t / maxV) * cH
        return (
          <g key={t}>
            <line x1={PL} y1={y} x2={W - PR} y2={y}
              stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
            <text x={PL - 6} y={y + 4} textAnchor="end"
              fontFamily="'Courier New',monospace" fontSize="8.5"
              fill="rgba(255,255,255,0.3)">
              {t === 0 ? '0' : `${t / 1000}k`}
            </text>
          </g>
        )
      })}

      {/* Bars */}
      {data.map((d, i) => (
        <rect key={i}
          x={bx(i)} y={by(d.v)}
          width={barW} height={bh(d.v)}
          fill={i <= takeoverIdx ? 'url(#barGradMuted)' : 'url(#barGrad)'}
          rx="1.5"
        />
      ))}

      {/* Trend line */}
      <path d={trendD} fill="none" stroke="rgba(212,255,0,0.5)" strokeWidth="1.5"
        strokeDasharray="none" opacity="0.7" />

      {/* Takeover vertical line */}
      <line x1={takeoverX} y1={PT - 8} x2={takeoverX} y2={PT + cH}
        stroke="#d4ff00" strokeWidth="1.2" strokeDasharray="4,3" opacity="0.6" />

      {/* Takeover label box */}
      <rect x={takeoverX - 82} y={PT - 26} width={164} height={22} rx="3"
        fill="rgba(10,10,10,0.9)" stroke="rgba(212,255,0,0.4)" strokeWidth="1" />
      <text x={takeoverX} y={PT - 11} textAnchor="middle"
        fontFamily="'Courier New',monospace" fontSize="9" letterSpacing="2.5"
        fill="#d4ff00">
        LENG MEDIA TOOK OVER
      </text>

      {/* X-axis month labels — every other one to avoid crowding */}
      {data.map((d, i) => i % 2 === 0 ? (
        <text key={i}
          x={bx(i) + barW / 2} y={PT + cH + 14}
          textAnchor="middle" fontFamily="'Courier New',monospace"
          fontSize="8" fill="rgba(255,255,255,0.28)">
          {d.m}
        </text>
      ) : null)}

      {/* Y-axis label */}
      <text x={10} y={PT + cH / 2} textAnchor="middle"
        fontFamily="'Courier New',monospace" fontSize="7.5"
        fill="rgba(255,255,255,0.2)" letterSpacing="1.5"
        transform={`rotate(-90, 10, ${PT + cH / 2})`}>
        ORGANIC TRAFFIC
      </text>

      {/* Footer note */}
      <text x={W - PR} y={H - 4} textAnchor="end"
        fontFamily="'Courier New',monospace" fontSize="7"
        fill="rgba(255,255,255,0.15)" letterSpacing="1.5">
        // CLIENT NAME OMITTED · REAL DATA
      </text>
    </svg>
  )
}
