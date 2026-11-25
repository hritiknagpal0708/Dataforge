import { useState } from 'react'
import { navLinks } from '../../data/navigation'

export const Wordmark = () => (
  <span className="inline-flex items-center gap-2 font-display font-bold text-xl tracking-tight">
    <span className="w-3 h-3 bg-brand" aria-hidden="true" />DataForge
  </span>
)

export default function Header() {
  const [open, setOpen] = useState(false)
  const links = navLinks.filter((l) => l.id !== 'home' && l.id !== 'contact')
  return (
    <header className="bg-ground">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-10 h-20 flex items-center justify-between">
        <a href="#home" aria-label="DataForge home"><Wordmark /></a>
        <nav className="hidden lg:flex items-center gap-8 text-sm">
          {links.map((l) => <a key={l.id} href={`#${l.id}`} className="text-muted hover:text-ink">{l.label}</a>)}
          <a href="#contact" className="bg-ink text-paper px-5 py-2.5 rounded-sm font-medium hover:bg-brand transition-colors">Book a data review</a>
        </nav>
        <button className="lg:hidden text-sm font-medium underline underline-offset-4" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? 'Close' : 'Menu'}
        </button>
      </div>
      {open && (
        <nav className="lg:hidden border-t border-line px-5 py-4 flex flex-col gap-4">
          {navLinks.filter((l) => l.id !== 'home').map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)} className="text-lg">{l.label}</a>
          ))}
        </nav>
      )}
    </header>
  )
}
