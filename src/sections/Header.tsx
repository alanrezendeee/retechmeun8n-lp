import { useState } from 'react'
import { Link } from 'react-router-dom'
import { SITE_URL } from '../constants'

const nav = [
  { label: 'Solução', href: '/#solucao' },
  { label: 'Benefícios', href: '/#beneficios' },
  { label: 'Como funciona', href: '/#como-funciona' },
  { label: 'Planos', href: '/#planos' },
  { label: 'FAQ', href: '/#faq' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-surface/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="font-display text-lg font-bold tracking-tight text-white"
          onClick={() => setOpen(false)}
        >
          Meu n8n
          <span className="ml-1.5 text-[10px] font-semibold uppercase tracking-widest text-neon">
            .theretech
          </span>
        </Link>
        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Principal"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-zinc-400 transition-colors hover:text-neon-bright"
            >
              {item.label}
            </a>
          ))}
          <Link
            to="/comparar"
            className="text-sm font-medium text-zinc-400 transition-colors hover:text-neon-bright"
          >
            Por que nós
          </Link>
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-lg border border-white/10 px-4 py-2 text-sm font-semibold text-zinc-300 transition-colors hover:border-neon/40 hover:text-white lg:inline-flex"
          >
            Acessar painel
          </a>
          <a
            href="/#planos"
            className="hidden items-center justify-center rounded-xl bg-gradient-to-r from-neon-dim to-neon px-4 py-2.5 text-sm font-bold text-black transition hover:brightness-110 glow-btn sm:inline-flex"
            onClick={() => setOpen(false)}
          >
            Começar agora
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-neon md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="sr-only">Abrir menu</span>
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>
      {open && (
        <div
          id="mobile-menu"
          className="border-t border-white/5 bg-surface/95 px-4 py-4 md:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-sm font-medium text-zinc-300 hover:bg-white/5 hover:text-neon-bright"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Link
              to="/comparar"
              className="rounded-lg px-3 py-3 text-sm font-medium text-zinc-300 hover:bg-white/5 hover:text-neon-bright"
              onClick={() => setOpen(false)}
            >
              Por que nós
            </Link>
            <a
              href={SITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-3 py-3 text-sm font-medium text-zinc-300 hover:bg-white/5 hover:text-neon-bright"
              onClick={() => setOpen(false)}
            >
              Acessar painel
            </a>
            <a
              href="/#planos"
              className="mt-2 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-neon-dim to-neon py-3 text-sm font-bold text-black glow-btn"
              onClick={() => setOpen(false)}
            >
              Começar agora
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
