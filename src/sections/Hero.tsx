import { Link } from 'react-router-dom'
import { SITE_URL } from '../constants'

function WorkflowMock() {
  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-elevated p-6 glow-ring"
      aria-hidden
    >
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-neon/15 blur-3xl" />
      <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="relative flex flex-col gap-4">
        <div className="flex items-center justify-between border-b border-white/5 pb-4">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-neon shadow-[0_0_12px_#00e676]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Instância ativa
            </span>
          </div>
          <span className="rounded-md bg-white/5 px-2 py-1 font-mono text-[10px] text-neon-bright">
            meun8n.theretech.com.br
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 py-4 sm:gap-4">
          <div className="rounded-xl border border-neon/30 bg-black/40 px-4 py-3 text-center shadow-[0_0_24px_-8px_rgba(0,230,118,0.4)]">
            <p className="text-[10px] font-medium uppercase tracking-wide text-zinc-500">
              Gatilho
            </p>
            <p className="mt-1 text-sm font-semibold text-white">Formulário</p>
          </div>
          <div className="hidden text-neon sm:block">→</div>
          <div className="rounded-xl border border-white/10 bg-zinc-900/50 px-4 py-3 text-center">
            <p className="text-[10px] font-medium uppercase tracking-wide text-zinc-500">
              Processar
            </p>
            <p className="mt-1 text-sm font-semibold text-white">n8n</p>
          </div>
          <div className="hidden text-neon sm:block">→</div>
          <div className="rounded-xl border border-white/10 bg-zinc-900/50 px-4 py-3 text-center">
            <p className="text-[10px] font-medium uppercase tracking-wide text-zinc-500">
              Enviar
            </p>
            <p className="mt-1 text-sm font-semibold text-white">CRM / E-mail</p>
          </div>
        </div>

        <div className="grid gap-2 sm:grid-cols-3">
          {[
            { k: 'Execuções hoje', v: '1.284' },
            { k: 'Tempo médio', v: '0,4s' },
            { k: 'Disponibilidade', v: '99,9%' },
          ].map((row) => (
            <div
              key={row.k}
              className="rounded-lg border border-white/5 bg-black/30 px-3 py-2"
            >
              <p className="text-[10px] text-zinc-500">{row.k}</p>
              <p className="font-display text-lg font-bold text-neon-bright">
                {row.v}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden border-b border-white/5"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(0,230,118,0.18),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(0,200,83,0.08),transparent_50%)]" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-28">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-neon/25 bg-neon/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-neon-bright">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-neon shadow-[0_0_8px_#00e676]" />
            Infra pronta · Você no comando
          </p>
          <h1 className="font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.25rem] xl:text-6xl">
            Tenha seu próprio{' '}
            <span className="text-gradient-neon">sistema de automação</span>{' '}
            em minutos
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
            Sem servidor, sem configuração, sem complicação. O Meu n8n entrega
            sua instância profissional com domínio, banco e segurança — para você
            focar em resultado, não em tecnologia.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="/#planos"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-neon-dim to-neon px-8 py-4 text-base font-bold text-black transition hover:brightness-110 glow-btn"
            >
              Começar agora
            </a>
            <a
              href={SITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 px-8 py-4 text-base font-semibold text-white transition hover:border-neon/40 hover:bg-white/5"
            >
              Ver demonstração
            </a>
          </div>
          <p className="mt-6 text-sm text-zinc-500">
            A partir de <span className="font-semibold text-zinc-300">R$147</span>{' '}
            · Ativação rápida · Suporte humano ·{' '}
            <Link
              to="/comparar"
              className="font-medium text-neon-bright underline-offset-2 hover:underline"
            >
              Por que não é só mais um VPS com n8n
            </Link>
          </p>
        </div>
        <WorkflowMock />
      </div>
    </section>
  )
}
