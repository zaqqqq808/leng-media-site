'use client'

import { useMemo, useState } from 'react'
import { FORMS, isVisible, type Field } from '@/lib/projectRecord/schema'
import styles from './ProjectRecordForm.module.css'

type Status = 'idle' | 'sending' | 'done' | 'error'

interface Props {
  kind: 'brief' | 'update'
  prefill?: Record<string, string>
}

function download(base64: string, filename: string) {
  const bytes = Uint8Array.from(atob(base64), c => c.charCodeAt(0))
  const url = URL.createObjectURL(new Blob([bytes], { type: 'application/pdf' }))
  const a = document.createElement('a')
  a.href = url
  a.download = `${filename}.pdf`
  a.click()
  setTimeout(() => URL.revokeObjectURL(url), 5000)
}

export default function ProjectRecordForm({ kind, prefill = {} }: Props) {
  const form = FORMS[kind]
  const [values, setValues] = useState<Record<string, string>>(prefill)
  const [ticked, setTicked] = useState<string[]>([])
  const [status, setStatus] = useState<Status>('idle')
  const [message, setMessage] = useState('')
  const [receipt, setReceipt] = useState<{ ref: string; pdf?: string; filename?: string } | null>(null)

  const declarations = useMemo(() => form.declarations(values), [form, values])
  const set = (name: string, v: string) => setValues(prev => ({ ...prev, [name]: v }))
  const toggle = (name: string, option: string) => {
    const current = (values[name] ?? '').split('\n').filter(Boolean)
    set(name, (current.includes(option) ? current.filter(o => o !== option) : [...current, option]).join('\n'))
  }

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const missingChoice = form.sections.flatMap(s => s.fields)
      .find(f => f.required && isVisible(f, values) && (f.type === 'radio' || f.type === 'checkboxes') && !values[f.name])
    if (missingChoice) {
      setStatus('error')
      setMessage(`Please answer: ${missingChoice.label}`)
      document.getElementById(`f-${missingChoice.name}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }
    setStatus('sending')
    setMessage('')
    const hp = (e.currentTarget.elements.namedItem('company_website') as HTMLInputElement)?.value
    try {
      const res = await fetch('/api/project-record', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ kind, values, declarations: ticked, hp }),
      })
      const data = await res.json()
      if (res.ok) {
        setReceipt(data)
        setStatus('done')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        setStatus('error')
        setMessage(data.error ?? 'Something went wrong. Please try again.')
        if (data.pdf) setReceipt(data)
      }
    } catch {
      setStatus('error')
      setMessage('Could not reach the server. Please check your connection and try again.')
    }
  }

  if (status === 'done' && receipt) {
    return (
      <div className={styles.done}>
        <span className="section-label">// Record created</span>
        <h2 className={styles.doneTitle}>Thank you. Your {form.title.toLowerCase()} is signed and on record.</h2>
        <dl className={styles.doneMeta}>
          <div><dt>Reference</dt><dd>{receipt.ref}</dd></div>
          <div><dt>Emailed to</dt><dd>{values.email}</dd></div>
        </dl>
        <p className={styles.doneText}>A PDF copy has been emailed to you and to Leng Media. Keep it for your records. It is the version we work from.</p>
        {receipt.pdf && receipt.filename && (
          <button type="button" className="btn-primary" onClick={() => download(receipt.pdf!, receipt.filename!)}>Download PDF</button>
        )}
      </div>
    )
  }

  const disabled = status === 'sending'

  const renderField = (f: Field) => {
    if (!isVisible(f, values)) return null
    const id = `f-${f.name}`
    const v = values[f.name] ?? ''
    const labelEl = (
      <span className={styles.label}>
        {f.label}{f.required ? <span className={styles.req}> *</span> : <span className={styles.opt}> optional</span>}
      </span>
    )
    if (f.type === 'radio' || f.type === 'checkboxes') {
      const chosen = f.type === 'checkboxes' ? v.split('\n') : [v]
      return (
        <fieldset key={f.name} id={id} className={styles.field}>
          <legend>{labelEl}</legend>
          {f.help && <span className={styles.help}>{f.help}</span>}
          <div className={styles.chips}>
            {f.options!.map(o => (
              <label key={o} className={`${styles.chip} ${chosen.includes(o) ? styles.chipOn : ''}`}>
                <input
                  type={f.type === 'radio' ? 'radio' : 'checkbox'}
                  name={f.name}
                  checked={chosen.includes(o)}
                  onChange={() => (f.type === 'radio' ? set(f.name, o) : toggle(f.name, o))}
                  disabled={disabled}
                />
                {o}
              </label>
            ))}
          </div>
        </fieldset>
      )
    }
    const common = {
      id, name: f.name, value: v, required: f.required, disabled,
      placeholder: f.placeholder, className: styles.input,
      onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => set(f.name, e.target.value),
    }
    return (
      <label key={f.name} className={styles.field} htmlFor={id}>
        {labelEl}
        {f.help && <span className={styles.help}>{f.help}</span>}
        {f.type === 'textarea'
          ? <textarea {...common} className={`${styles.input} ${styles.textarea}`} maxLength={6000} />
          : <input {...common} type={f.type} maxLength={600} />}
      </label>
    )
  }

  return (
    <form className={styles.form} onSubmit={submit} noValidate={false}>
      {form.sections.map((section, i) => {
        const visible = section.fields.some(f => isVisible(f, values))
        if (!visible) return null
        return (
          <section key={section.title} className={styles.section}>
            <div className={styles.sectionHead}>
              <span className={styles.num}>{String(i + 1).padStart(2, '0')}</span>
              <h2 className={styles.sectionTitle}>{section.title}</h2>
              {section.intro && <p className={styles.intro}>{section.intro}</p>}
            </div>
            <div className={styles.fields}>{section.fields.map(renderField)}</div>
          </section>
        )
      })}

      {/* honeypot */}
      <input type="text" name="company_website" tabIndex={-1} autoComplete="off" className={styles.hp} aria-hidden="true" />

      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <span className={styles.num}>✓</span>
          <h2 className={styles.sectionTitle}>Sign off</h2>
          <p className={styles.intro}>Your answers become a signed, timestamped record. You and Leng Media each receive an identical PDF copy by email.</p>
        </div>
        <div className={styles.fields}>
          {declarations.map(d => (
            <label key={d.name} className={styles.declare}>
              <input
                type="checkbox"
                required
                checked={ticked.includes(d.name)}
                onChange={() => setTicked(t => (t.includes(d.name) ? t.filter(x => x !== d.name) : [...t, d.name]))}
                disabled={disabled}
              />
              <span>{d.text}</span>
            </label>
          ))}
          <label className={styles.field} htmlFor="f-signature">
            <span className={styles.label}>Type your full name to sign<span className={styles.req}> *</span></span>
            <input
              id="f-signature" name="signature" required disabled={disabled}
              className={`${styles.input} ${styles.signature}`}
              value={values.signature ?? ''} onChange={e => set('signature', e.target.value)}
              placeholder={values.clientName || 'Full name'}
            />
          </label>
          <p className={styles.small}>For record-keeping we store the time of submission, your IP address and browser details with this record.</p>
          <button type="submit" className="btn-primary" disabled={disabled}>
            {disabled ? 'Creating your record…' : `Sign and submit ${form.title.toLowerCase()}`}
          </button>
          {status === 'error' && (
            <p className={styles.error} role="alert">
              {message}{' '}
              {receipt?.pdf && receipt.filename && (
                <button type="button" className={styles.linkBtn} onClick={() => download(receipt.pdf!, receipt.filename!)}>Download PDF</button>
              )}
            </p>
          )}
        </div>
      </section>
    </form>
  )
}
