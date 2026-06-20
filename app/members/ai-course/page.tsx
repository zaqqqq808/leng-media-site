import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import styles from '../course.module.css'

export default async function AiCoursePage() {
  const user = await currentUser()
  const purchases = (user?.publicMetadata?.purchases as string[]) ?? []

  if (!purchases.includes('ai-course')) {
    redirect('/ai-course')
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <span className={styles.label}>// AI for Ecommerce Course</span>
        <h1 className={styles.title}>Your session is ready.</h1>
        <p className={styles.sub}>
          You&apos;re getting direct 1-on-1 time. Come prepared and we will move fast.
        </p>
      </div>

      {/* Step 1: Book the call */}
      <section className={styles.module}>
        <div className={styles.moduleHeader}>
          <span className={styles.moduleNum}>01 // Action Required</span>
          <h2 className={styles.moduleName}>Book Your Live Session</h2>
        </div>
        <p className={styles.moduleDesc}>
          Pick a time that works. The session is 60 minutes over Zoom. Bring your store, your ad account, or whatever you want to work on — we will dig in.
        </p>
        <a
          href="https://calendly.com/zaq-lengmedia/leng-media-intro-call"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.btn}
        >
          Book Your Session →
        </a>
      </section>

      {/* Step 2: Prepare */}
      <section className={styles.module}>
        <div className={styles.moduleHeader}>
          <span className={styles.moduleNum}>02 // Preparation</span>
          <h2 className={styles.moduleName}>Come Ready</h2>
        </div>
        <div className={styles.checklist}>
          {[
            'Have your Shopify or store admin open and ready to share screen',
            'If you run ads, have Meta Ads Manager open so we can look at real data',
            'Write down the 2 or 3 biggest bottlenecks in your current workflow',
            'Think about which AI tools you have already tried and what happened',
            'The session is recorded (with your permission) — let us know if you prefer not',
          ].map(item => (
            <div key={item} className={styles.checkItem}>
              <span className={styles.checkMark}>✓</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Step 3: The Cheat Sheet */}
      <section className={styles.module}>
        <div className={styles.moduleHeader}>
          <span className={styles.moduleNum}>03 // Resource</span>
          <h2 className={styles.moduleName}>AI for Ecommerce Cheat Sheet</h2>
        </div>
        <p className={styles.moduleDesc}>
          Read through this before the session. It covers the main AI tools we use across copy, visuals, ads, SEO, and support — so we can spend the session applying them to your brand rather than explaining what they are.
        </p>
        <a
          href="https://ethereal-saturday-a3b.notion.site/AI-Cheat-Sheet-for-Ecom-DTC-2e74354e4a8880b8bc20f0e9ad6ba007"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.btnSecondary}
        >
          Open Cheat Sheet →
        </a>
      </section>

      {/* Coming: recorded modules */}
      <section className={`${styles.module} ${styles.moduleLocked}`}>
        <div className={styles.moduleHeader}>
          <span className={styles.moduleNum}>04 // Coming Soon</span>
          <h2 className={styles.moduleName}>Recorded Modules</h2>
        </div>
        <p className={styles.moduleDesc}>
          We are running live sessions first and recording the best ones. These will be available here as structured video modules once we have enough material. You will get access automatically.
        </p>
        <div className={styles.comingSoonBadge}>Recording in progress</div>
      </section>
    </div>
  )
}
