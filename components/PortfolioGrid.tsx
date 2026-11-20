'use client'
import { useRef, useState } from 'react'
import Image from 'next/image'
import CalendlyPopupLink from '@/components/CalendlyPopupLink'
import styles from './PortfolioGrid.module.css'

export type PortfolioProject = {
  industry: string
  feature: string
  name: string
  url?: string
  urlLabel: string
  brief: string
  work: string[]
  desktopImg: string
  mobileImg: string
}

// Cards lead with the industry and one key feature; the brand name and the
// detail only appear once a card is opened.
export default function PortfolioGrid({ projects, ctaHref }: { projects: PortfolioProject[]; ctaHref: string }) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [open, setOpen] = useState<PortfolioProject | null>(null)

  const show = (p: PortfolioProject) => {
    setOpen(p)
    dialogRef.current?.showModal()
  }
  const close = () => dialogRef.current?.close()

  return (
    <>
      <div className={styles.grid}>
        {projects.map((p, i) => (
          <button key={p.name} type="button" className={styles.card} onClick={() => show(p)} aria-haspopup="dialog">
            <div className={styles.cardImg}>
              <Image src={p.desktopImg} alt={`${p.industry} website we built`} fill sizes="(max-width:700px) 100vw, (max-width:1100px) 50vw, 33vw" style={{ objectFit: 'cover', objectPosition: 'top' }} />
            </div>
            <div className={styles.cardBody}>
              <span className={styles.cardNum}>{'// '}{String(i + 1).padStart(2, '0')}</span>
              <h3 className={styles.cardIndustry}>{p.industry}</h3>
              <p className={styles.cardFeature}>{p.feature}</p>
              <span className={styles.cardMore}>View project +</span>
            </div>
          </button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        className={styles.dialog}
        onClose={() => setOpen(null)}
        onClick={e => { if (e.target === e.currentTarget) close() }}
        aria-label={open ? `${open.name} project details` : 'Project details'}
      >
        {open && (
          <div className={styles.panel}>
            <button type="button" className={styles.close} onClick={close} aria-label="Close">×</button>
            <div className={styles.panelText}>
              <span className={styles.panelIndustry}>{'// '}{open.industry}</span>
              <h3 className={styles.panelName}>{open.name}</h3>
              {open.url ? (
                <a href={open.url} target="_blank" rel="noopener noreferrer" className={styles.panelUrl}>{open.urlLabel} ↗</a>
              ) : (
                <span className={styles.panelUrlPending}>{open.urlLabel}</span>
              )}
              <p className={styles.panelBrief}>{open.brief}</p>
              <span className={styles.panelLabel}>{'// What we did'}</span>
              <ul className={styles.panelList}>
                {open.work.map(w => <li key={w}>{w}</li>)}
              </ul>
              <div className={styles.panelCta}>
                <span>Want something like this?</span>
                <CalendlyPopupLink href={ctaHref} className={styles.panelCtaLink}>Book a call →</CalendlyPopupLink>
              </div>
            </div>
            <div className={styles.panelShots}>
              <div className={styles.panelDesktop}>
                <Image src={open.desktopImg} alt={`${open.name} on desktop`} fill sizes="(max-width:700px) 70vw, 480px" style={{ objectFit: 'cover', objectPosition: 'top' }} />
              </div>
              <div className={styles.panelMobile}>
                <Image src={open.mobileImg} alt={`${open.name} on mobile`} fill sizes="160px" style={{ objectFit: 'cover', objectPosition: 'top' }} />
              </div>
            </div>
          </div>
        )}
      </dialog>
    </>
  )
}
