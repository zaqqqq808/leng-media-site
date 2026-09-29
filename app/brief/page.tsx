import type { Metadata } from 'next'
import ProjectRecordForm from '@/components/ProjectRecordForm'
import styles from './page.module.css'

// Private: sent to clients directly. Not in the sitemap and never indexed.
export const metadata: Metadata = {
  title: 'Project Brief – Leng Media',
  robots: { index: false, follow: false },
}

type Search = Promise<Record<string, string | string[] | undefined>>

export default async function BriefPage({ searchParams }: { searchParams: Search }) {
  const sp = await searchParams
  const one = (k: string) => (typeof sp[k] === 'string' ? (sp[k] as string) : undefined)
  const prefill = Object.fromEntries(
    Object.entries({ clientName: one('name'), businessName: one('business'), email: one('email') }).filter(([, v]) => v),
  ) as Record<string, string>

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroGrid} />
        <div className={styles.heroContent}>
          <p className={styles.sys}><span className={styles.accent}>SYS:</span> BRIEF.LENG.MEDIA // PROJECT RECORD</p>
          <h1 className={styles.title}>Project brief.</h1>
          <p className={styles.lede}>
            This is the foundation of your website. Everything we design, build and check is measured against it,
            so the more specific you are, the better the result. It takes about 15 minutes.
          </p>
          <div className={styles.steps}>
            <span><b>01</b>Answer the questions</span>
            <span><b>02</b>Sign off</span>
            <span><b>03</b>Receive your PDF copy</span>
          </div>
        </div>
      </section>
      <section className={styles.body}>
        <div className={styles.inner}>
          <ProjectRecordForm kind="brief" prefill={prefill} />
        </div>
      </section>
    </>
  )
}
