import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import { pageMetadata, breadcrumbJsonLd } from '@/lib/seo'
import JsonLd from '@/components/JsonLd'

export const metadata = pageMetadata({
  title: 'GDN Ad Specs Cheat Sheet – Leng Media',
  description: 'Every Google Display Network ad size, format and spec you need in one clean reference sheet. Free to download.',
  path: '/free-tools/gdn-ad-specs',
})

export default function GDNCheatSheet() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Free Tools', path: '/free-tools' }, { name: 'GDN Ad Specs Cheat Sheet', path: '/free-tools/gdn-ad-specs' }])} />
      <section className={styles.hero}>
        <div className={styles.heroGrid} />
        <div className={styles.heroScanlines} />
        <div className={styles.heroContent}>
          <p className={styles.sys}><span className={styles.accent}>SYS:</span> FREE RESOURCE // ADVERTISING</p>
          <h1 className={styles.title}>GDN Ad Specs<br />Cheat Sheet.</h1>
          <p className={styles.sub}>Every ad size, format and spec you need for Google Display Network campaigns — in one clean reference sheet.</p>
          <div className={styles.actions}>
            <a href="/gdn-cheat-sheet.jpg" download="GDN-Ad-Specs-Cheat-Sheet.jpg" className="btn-primary">
              Download Free ↓
            </a>
            <Link href="/free-tools" className="btn-ghost">← Back to Resources</Link>
          </div>
        </div>
      </section>

      <section className={styles.viewer}>
        <div className={styles.imageWrap}>
          <Image
            src="/gdn-cheat-sheet.jpg"
            alt="Google Display Network Ad Specs Cheat Sheet"
            width={1500}
            height={1063}
            className={styles.image}
            priority
          />
        </div>
        <div className={styles.downloadBar}>
          <p className={styles.downloadText}>Save this for your next GDN campaign</p>
          <a href="/gdn-cheat-sheet.jpg" download="GDN-Ad-Specs-Cheat-Sheet.jpg" className="btn-primary">
            Download Now ↓
          </a>
        </div>
      </section>
    </>
  )
}
