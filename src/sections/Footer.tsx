import { Link } from 'react-router-dom'
import { SITE_URL } from '../constants'

const links: {
  label: string
  href: string
  external?: boolean
}[] = [
  { label: 'Solução', href: '/#solucao' },
  { label: 'Planos', href: '/#planos' },
  { label: 'Por que nós', href: '/comparar' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Acessar plataforma', href: SITE_URL, external: true },
]

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        <div>
          <p className="font-display text-lg font-bold text-white">The Retech</p>
          <p className="mt-2 max-w-xs text-sm text-zinc-500">
            Infraestrutura e produtos digitais para quem prefere resultado a
            complicação desnecessária.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-8 gap-y-3" aria-label="Rodapé">
          {links.map((l) =>
            l.external ? (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-zinc-400 transition hover:text-neon-bright"
              >
                {l.label}
              </a>
            ) : l.href.startsWith('/') && !l.href.startsWith('/#') ? (
              <Link
                key={l.label}
                to={l.href}
                className="text-sm font-medium text-zinc-400 transition hover:text-neon-bright"
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.label}
                href={l.href}
                className="text-sm font-medium text-zinc-400 transition hover:text-neon-bright"
              >
                {l.label}
              </a>
            ),
          )}
        </nav>
      </div>
      <div className="mx-auto mt-12 max-w-6xl border-t border-white/5 px-4 pt-8 sm:px-6 lg:px-8">
        <p className="text-center text-xs text-zinc-600">
          © {new Date().getFullYear()} The Retech · Meu n8n ·{' '}
          <a
            href={SITE_URL}
            className="text-zinc-500 underline-offset-2 hover:text-neon hover:underline"
          >
            meun8n.theretech.com.br
          </a>
        </p>
      </div>
    </footer>
  )
}
