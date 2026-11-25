import { useState } from 'react'
import { serviceOptions } from '../../data/services'

const initial = { name: '', email: '', company: '', service: '', details: '', website: '' } // website = honeypot
const input = 'w-full bg-transparent border-b border-ink/50 py-3 placeholder:text-muted/70 focus:outline-none focus:border-brand focus:shadow-[0_1px_0_0_#0E5A4F]'

export default function Contact() {
  const [form, setForm] = useState(initial)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [error, setError] = useState('')
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    setError('')
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL ?? ''}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.error || 'Something went wrong. Please try again.')
      setStatus('sent')
    } catch (err) {
      setError(err.message)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="border-t border-ink/80">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-10 py-16 md:py-24 grid lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-4">
          <h2 className="font-display font-bold text-3xl md:text-4xl leading-[1.1] tracking-tight">Talk to a data architect</h2>
          <p className="mt-4 text-muted">We review your current systems, find the bottlenecks, and send you a practical roadmap.</p>
          <dl className="mt-8 space-y-5 text-sm">
            <div><dt className="text-muted">Email</dt><dd><a className="font-medium underline underline-offset-4" href="mailto:hello@dataforge.com">hello@dataforge.com</a></dd></div>
            <div><dt className="text-muted">Where we work</dt><dd className="font-medium">India, with remote delivery worldwide</dd></div>
            <div><dt className="text-muted">Response time</dt><dd className="font-medium">Within 24 hours, with an NDA if you want one</dd></div>
          </dl>
        </div>

        <div className="lg:col-span-8">
          {status === 'sent' ? (
            <div role="status" className="border border-ink bg-paper p-8">
              <h3 className="font-display font-semibold text-2xl">Thanks, we’ve got your inquiry.</h3>
              <p className="mt-2 text-muted">A data architect will reply within 24 hours.</p>
              <button onClick={() => { setForm(initial); setStatus('idle') }} className="mt-6 font-medium underline underline-offset-4">Send another inquiry</button>
            </div>
          ) : (
            <form onSubmit={submit} className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
              <Field label="Full name"><input required className={input} value={form.name} onChange={set('name')} autoComplete="name" /></Field>
              <Field label="Work email"><input required type="email" className={input} value={form.email} onChange={set('email')} autoComplete="email" /></Field>
              <Field label="Company"><input required className={input} value={form.company} onChange={set('company')} autoComplete="organization" /></Field>
              <Field label="What do you need help with?">
                <select required className={input} value={form.service} onChange={set('service')}>
                  <option value="" disabled>Choose one</option>
                  {serviceOptions.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
                </select>
              </Field>
              <div className="sm:col-span-2">
                <Field label="Project details (optional)">
                  <textarea rows="4" className={input} placeholder="Data volumes, current tools, what’s slow or broken" value={form.details} onChange={set('details')} />
                </Field>
              </div>
              {/* Honeypot: hidden from people, visible to bots */}
              <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" value={form.website} onChange={set('website')} />
              {status === 'error' && <p role="alert" className="sm:col-span-2 text-sm font-medium text-red-700">{error}</p>}
              <div className="sm:col-span-2">
                <button type="submit" disabled={status === 'sending'} className="bg-ink text-paper px-8 py-4 rounded-sm font-medium hover:bg-brand transition-colors disabled:opacity-70">
                  {status === 'sending' ? 'Sending…' : 'Send inquiry'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="text-sm font-medium">{label}</span>
      {children}
    </label>
  )
}
