import type { Metadata } from 'next'
import ProjectRecordForm from '@/components/ProjectRecordForm'
import { UPDATE_TYPES } from '@/lib/projectRecord/schema'
import styles from '../brief/page.module.css'

// Private: sent to clients directly. Not in the sitemap and never indexed.
export const metadata: Metadata = {
  title: 'Project Update – Leng Media',
  robots: { index: false, follow: false },
}

type Search = Promise<Record<string, string | string[] | undefined>>

export default async function ProjectUpdatePage({ searchParams }: { searchParams: Search }) {
  const sp = await searchParams
  const one = (k: string) => (typeof sp[k] === 'string' ? (sp[k] as string) : undefined)
  const type = one('type')
  const prefill = Object.fromEntries(
    Object.entries({
      clientName: one('name'),
      businessName: one('business'),
      email: one('email'),
      project: one('project'),
      updateType: type && (UPDATE_TYPES as readonly string[]).includes(type) ? type : undefined,
    }).filter(([, v]) => v),
  ) as Record<string, string>

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroGrid} />
        <div className={styles.heroContent}>
          <p className={styles.sys}><span className={styles.accent}>SYS:</span> UPDATE.LENG.MEDIA // PROJECT RECORD</p>
          <h1 className={styles.title}>Project update.</h1>
          <p className={styles.lede}>
            Use this for change requests, feedback rounds and sign-offs. Each one is logged against your project,
            and you receive a signed PDF copy, so we are always working from the same agreed version.
          </p>
        </div>
      </section>
      <section className={styles.body}>
        <div className={styles.inner}>
          <ProjectRecordForm kind="update" prefill={prefill} />
        </div>
      </section>
    </>
  )
}
