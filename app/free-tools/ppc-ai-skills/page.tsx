import Link from 'next/link'
import styles from './page.module.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PPC AI Skills for Claude – Leng Media',
  description: 'Free Claude AI skills for PPC and paid media professionals. Install these skills into Claude Code to automate keyword research, ad copy, bid management and more.',
}

const SKILLS = [
  {
    id: '01',
    tag: 'Safety',
    name: 'Mutation Safety',
    desc: 'Two-step dry-run protocol before any account change. Preview impact before committing — eliminates costly mistakes.',
  },
  {
    id: '02',
    tag: 'Quality',
    name: 'Ad Copy Verification',
    desc: '"Empty > Inaccurate" standard. Flags missing claims rather than hallucinating them. Every ad checked before publishing.',
  },
  {
    id: '03',
    tag: 'Analysis',
    name: 'Investigation Methodology',
    desc: 'Hypothesis-driven diagnostic approach. Trace performance drops to root cause rather than guessing at fixes.',
  },
  {
    id: '04',
    tag: 'Keywords',
    name: 'SQR Pipeline',
    desc: 'Three-pass LLM consensus for search query reports. Reduces misclassification and surfaces clean negatives at scale.',
  },
  {
    id: '05',
    tag: 'Keywords',
    name: 'Non-Serving Keyword Scanner',
    desc: 'Automatically surfaces keywords that exist but aren\'t triggering. Finds hidden wasted spend in any account.',
  },
  {
    id: '06',
    tag: 'Strategy',
    name: 'Portfolio Prioritisation',
    desc: '5-tier framework for ranking which campaigns to fix first. Focus effort where it moves the needle most.',
  },
  {
    id: '07',
    tag: 'Creative',
    name: 'Ad Copy Generation',
    desc: '23-element RSA framework. Writes headlines and descriptions that hit policy, character limits and conversion goals.',
  },
  {
    id: '08',
    tag: 'Creative',
    name: 'RSA Single Account',
    desc: 'Bulk ad copy generation across an entire account in one run. Consistent voice, compliant output, fast turnaround.',
  },
  {
    id: '09',
    tag: 'Audit',
    name: 'Account Audit',
    desc: 'Full structural audit across campaigns, ad groups, keywords and assets. Outputs a prioritised action list.',
  },
  {
    id: '10',
    tag: 'Budget',
    name: 'Budget Guardian',
    desc: 'Monitors pacing against targets and flags over/underspend before it compounds. Set it and stop fire-fighting.',
  },
  {
    id: '11',
    tag: 'Analysis',
    name: 'Impression Share Diagnostics',
    desc: 'Diagnoses whether IS loss is from budget, rank or both — and prescribes the right lever to pull.',
  },
  {
    id: '12',
    tag: 'Tracking',
    name: 'Conversion Tracking Health',
    desc: 'Validates that conversion actions are firing, deduplicating and attributing correctly. Catches silent tracking failures.',
  },
]

export default function PPCAISkills() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroGrid} />
        <div className={styles.heroScanlines} />
        <div className={styles.heroContent}>
          <p className={styles.sys}><span className={styles.accent}>SYS:</span> FREE RESOURCE // PPC × AI</p>
          <h1 className={styles.title}>PPC AI Skills<br />for Claude.</h1>
          <p className={styles.sub}>12 specialist Claude skills for paid media professionals. Install into Claude Code and automate the repetitive, high-stakes work — keyword analysis, ad copy, audits, budget monitoring and more.</p>
          <div className={styles.actions}>
            <a href="https://github.com/fourteenwm/ppc-ai-skills" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Get the Skills on GitHub ↗
            </a>
            <Link href="/free-tools" className="btn-ghost">← Back to Resources</Link>
          </div>
        </div>
      </section>

      <section className={styles.explainer}>
        <div className={styles.explainerInner}>
          <div className={styles.explainerText}>
            <span className={styles.explainerLabel}>// WHAT ARE CLAUDE SKILLS</span>
            <h2 className={styles.explainerTitle}>Specialist AI behaviour,<br />installed in seconds.</h2>
            <p>Claude AI Skills are slash commands that give Claude deep, domain-specific expertise. Instead of writing long prompts every time, you invoke a skill with <code>/skill-name</code> and Claude knows exactly how to behave — what questions to ask, what to check, what format to return.</p>
            <p>These 12 skills were built specifically for PPC and paid media. Each one encodes a best-practice workflow so Claude operates like a senior account manager, not a generic chatbot.</p>
          </div>
          <div className={styles.explainerSteps}>
            <div className={styles.step}>
              <span className={styles.stepNum}>01</span>
              <div>
                <strong>Install Claude Code</strong>
                <p>The CLI version of Claude. Free to set up.</p>
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNum}>02</span>
              <div>
                <strong>Clone the GitHub repo</strong>
                <p>Copy the skills folder into your project.</p>
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNum}>03</span>
              <div>
                <strong>Invoke with /skill-name</strong>
                <p>Claude runs the skill immediately. No prompt engineering needed.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.skillsSection}>
        <div className={styles.skillsHeader}>
          <span className={styles.skillsLabel}>// THE SKILLS</span>
          <h2 className={styles.skillsTitle}>12 skills. Every major PPC workflow covered.</h2>
        </div>
        <div className={styles.skillsGrid}>
          {SKILLS.map(s => (
            <div key={s.id} className={styles.skillCard}>
              <div className={styles.skillTop}>
                <span className={styles.skillId}>{s.id}</span>
                <span className={styles.skillTag}>{s.tag}</span>
              </div>
              <h3 className={styles.skillName}>{s.name}</h3>
              <p className={styles.skillDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
        <div className={styles.ctaRow}>
          <a href="https://github.com/fourteenwm/ppc-ai-skills" target="_blank" rel="noopener noreferrer" className="btn-primary">
            View All Skills on GitHub ↗
          </a>
        </div>
      </section>
    </>
  )
}
