'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import styles from './WhatsAppQualifier.module.css'
import {
  SERVICES, SERVICE_PHRASES, WHATSAPP_NUMBER, stepsFor, isServiceKey,
  type ServiceKey, type Step,
} from '@/lib/whatsapp-qualify'

type Phase = 'questions' | 'details' | 'disqualified'

function visibleSteps(service: ServiceKey, answers: Record<string, string>): Step[] {
  return stepsFor(service).filter(s => !s.when || s.when(answers))
}

function whatsappMessage(service: ServiceKey, steps: Step[], answers: Record<string, string>, name: string, notes: string) {
  const lines = [`Hi Zaq, it's ${name}. I'm interested in ${SERVICE_PHRASES[service]}.`, '']
  for (const s of steps) {
    if (answers[s.id]) lines.push(`• ${s.label}: ${answers[s.id]}`)
  }
  if (notes.trim()) lines.push('', notes.trim())
  return lines.join('\n')
}

export default function WhatsAppQualifier({ initialService }: { initialService: string | null }) {
  const [service, setService] = useState<ServiceKey | null>(isServiceKey(initialService) ? initialService : null)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [index, setIndex] = useState(0)
  const [phase, setPhase] = useState<Phase>('questions')
  const [draft, setDraft] = useState('')
  const [name, setName] = useState('')
  const [notes, setNotes] = useState('')

  const steps = useMemo(() => (service ? visibleSteps(service, answers) : []), [service, answers])
  const step = steps[index]
  // +1 for the service question when it wasn't preselected, +1 for details
  const total = steps.length + 1
  const done = phase === 'details' ? steps.length : index
  const progress = service ? Math.round((done / total) * 100) : 0

  function log(qualified: boolean, finalAnswers: Record<string, string>, extra: { name?: string; notes?: string } = {}) {
    if (!service) return
    const eventId = crypto.randomUUID()
    const body = JSON.stringify({
      service: SERVICES[service],
      answers: visibleSteps(service, finalAnswers).map(s => ({ label: s.label, answer: finalAnswers[s.id] || '' })),
      qualified,
      eventId,
      ...extra,
    })
    // keepalive lets the request finish while the page hands over to WhatsApp
    fetch('/api/whatsapp-lead', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body, keepalive: true }).catch(() => {})
    if (qualified) {
      window.fbq?.('track', 'Contact', {}, { eventID: eventId })
      window.gtag?.('event', 'generate_lead', { method: 'whatsapp', service: SERVICES[service] })
    }
  }

  function answer(value: string) {
    if (!step || !service) return
    const next = { ...answers, [step.id]: value }
    setAnswers(next)
    setDraft('')
    if (step.disqualify?.includes(value)) {
      log(false, next)
      setPhase('disqualified')
      return
    }
    const nextSteps = visibleSteps(service, next)
    const pos = nextSteps.findIndex(s => s.id === step.id)
    if (pos + 1 < nextSteps.length) setIndex(pos + 1)
    else setPhase('details')
  }

  function back() {
    if (phase === 'details') { setPhase('questions'); setIndex(steps.length - 1); return }
    if (index > 0) setIndex(index - 1)
    else if (!isServiceKey(initialService)) { setService(null); setAnswers({}) }
  }

  function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!service || !name.trim()) return
    log(true, answers, { name: name.trim(), notes: notes.trim() })
    const text = whatsappMessage(service, steps, answers, name.trim(), notes)
    // Same-tab navigation: popup blockers can't stop it, and on phones it
    // opens the WhatsApp app directly.
    window.location.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
  }

  if (phase === 'disqualified') {
    return (
      <div className={styles.card}>
        <p className={styles.eyebrow}>// Thanks for being straight with us</p>
        <h1 className={styles.question}>We&apos;re probably not the right fit right now.</h1>
        <p className={styles.hint}>
          We only take on projects we can commit to fully, and that needs the budget behind it. When you&apos;re ready, we&apos;d love to hear from you. In the meantime, these are free:
        </p>
        <div className={styles.links}>
          <Link href="/free-tools/ai-cheat-sheet" className={styles.linkBtn}>Free AI for Ecommerce cheat sheet →</Link>
          <Link href="/free-tools" className={styles.linkBtn}>All free growth tools →</Link>
          <Link href="/blog" className={styles.linkBtn}>Read the blog →</Link>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.card}>
      <div className={styles.progress} aria-hidden="true"><span style={{ width: `${progress}%` }} /></div>

      {!service && (
        <>
          <p className={styles.eyebrow}>// 30 seconds, then straight to WhatsApp</p>
          <h1 className={styles.question}>What can we help you with?</h1>
          <div className={styles.options}>
            {(Object.keys(SERVICES) as ServiceKey[]).map(k => (
              <button key={k} type="button" className={styles.option} onClick={() => { setService(k); setIndex(0) }}>
                {SERVICE_PHRASES[k].charAt(0).toUpperCase() + SERVICE_PHRASES[k].slice(1)}
              </button>
            ))}
          </div>
        </>
      )}

      {service && phase === 'questions' && step && (
        <>
          <p className={styles.eyebrow}>// Question {index + 1} of {steps.length}</p>
          <h1 className={styles.question}>{step.question}</h1>
          {step.hint && <p className={styles.hint}>{step.hint}</p>}
          {step.options ? (
            <div className={styles.options}>
              {step.options.map(o => (
                <button key={o} type="button" className={`${styles.option} ${answers[step.id] === o ? styles.selected : ''}`} onClick={() => answer(o)}>
                  {o}
                </button>
              ))}
            </div>
          ) : (
            <form className={styles.inputRow} onSubmit={e => { e.preventDefault(); if (draft.trim() || step.input?.optional) answer(draft.trim()) }}>
              <input
                className={styles.input}
                autoFocus
                value={draft}
                onChange={e => setDraft(e.target.value)}
                placeholder={step.input?.placeholder}
                aria-label={step.question}
              />
              <button type="submit" className={styles.next} disabled={!draft.trim() && !step.input?.optional}>
                {draft.trim() || !step.input?.optional ? 'Next →' : 'Skip →'}
              </button>
            </form>
          )}
        </>
      )}

      {service && phase === 'details' && (
        <form onSubmit={submit}>
          <p className={styles.eyebrow}>// Last step</p>
          <h1 className={styles.question}>Great. Who am I speaking to?</h1>
          <input className={styles.input} autoFocus required value={name} onChange={e => setName(e.target.value)} placeholder="Your first name" aria-label="Your first name" autoComplete="given-name" />
          <textarea className={`${styles.input} ${styles.textarea}`} value={notes} onChange={e => setNotes(e.target.value)} placeholder="Anything else I should know? (optional)" aria-label="Anything else I should know?" rows={3} />
          <button type="submit" className={styles.whatsapp} disabled={!name.trim()}>
            Continue on WhatsApp →
          </button>
          <p className={styles.small}>Your answers are added to the message, so you don&apos;t have to repeat yourself.</p>
        </form>
      )}

      {(service && (index > 0 || phase === 'details' || !isServiceKey(initialService))) && (
        <button type="button" className={styles.back} onClick={back}>← Back</button>
      )}
    </div>
  )
}
