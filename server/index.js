import 'dotenv/config'
import path from 'node:path'
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import express from 'express'
import cors from 'cors'
import rateLimit from 'express-rate-limit'
import nodemailer from 'nodemailer'

const {
  PORT = 3001,
  INQUIRY_TO = 'hritiknagpal07@gmail.com',
  SMTP_HOST = 'smtp.gmail.com',
  SMTP_PORT = '465',
  SMTP_USER,
  SMTP_PASS,
  ALLOWED_ORIGINS = 'http://localhost:5173',
  DRY_RUN = 'false',
} = process.env

const dryRun = DRY_RUN === 'true'
if (!dryRun && (!SMTP_USER || !SMTP_PASS)) {
  console.error('Missing SMTP_USER or SMTP_PASS in server/.env (or set DRY_RUN=true to test).')
  process.exit(1)
}

const transporter = nodemailer.createTransport(
  dryRun
    ? { jsonTransport: true }
    : { host: SMTP_HOST, port: Number(SMTP_PORT), secure: Number(SMTP_PORT) === 465, auth: { user: SMTP_USER, pass: SMTP_PASS } }
)

const SERVICES = [
  'Data Engineering', 'Data Science & AI', 'Data Analytics',
  'Cloud Data Solutions', 'Data Architecture', 'Data Automation',
]
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const clean = (v, max) => String(v ?? '').replace(/[\r\n]+/g, ' ').trim().slice(0, max)
const escapeHtml = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;')

const app = express()
app.disable('x-powered-by')
app.set('trust proxy', 1)
app.use(express.json({ limit: '20kb' }))
const allowed = ALLOWED_ORIGINS.split(',').map((o) => o.trim())
const previewRe = /^https:\/\/dataforge-[a-z0-9]+-dataforge7\.vercel\.app$/
app.use(cors({ origin: (origin, cb) => cb(null, !origin || allowed.includes(origin) || previewRe.test(origin)) }))

app.get('/api/health', (_req, res) => res.json({ ok: true }))

// 5 inquiries per IP per 15 minutes
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many inquiries. Please try again in a few minutes.' },
})

app.post('/api/contact', limiter, async (req, res) => {
  const body = req.body ?? {}

  // Honeypot: real visitors never fill this hidden field. Pretend success to bots.
  if (body.website) return res.json({ ok: true })

  const name = clean(body.name, 100)
  const email = clean(body.email, 200)
  const company = clean(body.company, 150)
  const service = clean(body.service, 100)
  const details = String(body.details ?? '').trim().slice(0, 4000)

  const errors = {}
  if (!name) errors.name = 'Enter your name.'
  if (!EMAIL_RE.test(email)) errors.email = 'Enter a valid email address.'
  if (!company) errors.company = 'Enter your company name.'
  if (!SERVICES.includes(service)) errors.service = 'Choose a service.'
  if (Object.keys(errors).length) return res.status(400).json({ error: 'Please fix the highlighted fields.', errors })

  const text = [
    `Name: ${name}`, `Email: ${email}`, `Company: ${company}`, `Service: ${service}`, '', 'Details:', details || '(none)',
  ].join('\n')

  const row = (k, v) => `<tr><td style="padding:4px 16px 4px 0;color:#555">${k}</td><td style="padding:4px 0"><strong>${escapeHtml(v)}</strong></td></tr>`
  const html = `<table style="font-family:system-ui,sans-serif;font-size:15px">${row('Name', name)}${row('Email', email)}${row('Company', company)}${row('Service', service)}</table>
    <p style="font-family:system-ui,sans-serif;font-size:15px;margin-top:20px"><strong>Details</strong></p>
    <p style="font-family:system-ui,sans-serif;font-size:15px;white-space:pre-wrap">${escapeHtml(details || '(none)')}</p>`

  try {
    const info = await transporter.sendMail({
      from: `"DataForge website" <${SMTP_USER || 'no-reply@dataforge.local'}>`,
      to: INQUIRY_TO,
      replyTo: `"${name.replace(/"/g, '')}" <${email}>`, // hitting Reply goes to the visitor
      subject: `New inquiry: ${service} (${company})`,
      text,
      html,
    })
    if (dryRun) console.log('[DRY_RUN] email would be sent:\n', JSON.parse(info.message))
    res.json({ ok: true })
  } catch (err) {
    console.error('Failed to send inquiry email:', err.message)
    res.status(500).json({ error: 'We couldn’t send your inquiry. Please email hello@dataforge.com instead.' })
  }
})

// In production, serve the built React app from the same server (run `npm run build` in the project root first)
const dist = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../dist')
if (fs.existsSync(dist)) {
  app.use(express.static(dist))
  app.get('*', (_req, res) => res.sendFile(path.join(dist, 'index.html')))
}

if (!process.env.VERCEL) {
  app.listen(PORT, () => console.log(`DataForge server listening on http://localhost:${PORT}`))
}
export default app
