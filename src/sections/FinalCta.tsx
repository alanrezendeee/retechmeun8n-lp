import { SITE_URL } from '../constants'

export function FinalCta() {
  return (
    <section className="border-t border-white/5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-neon/30 bg-gradient-to-br from-neon/15 via-elevated to-black px-8 py-16 text-center sm:px-16 sm:py-20">
          <div className="pointer-events-none absolute -right-24 top-0 h-64 w-64 rounded-full bg-neon/20 blur-3xl" />
          <div className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-emerald-600/20 blur-3xl" />
          <div className="relative">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
              Comece agora e automatize seu negócio hoje
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-zinc-300">
              Cada dia sem automação é lead perdido, follow-up atrasado e
              planilha virando gargalo. O Meu n8n tira o atrito técnico do
              caminho — você coloca o cérebro no que importa.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#planos"
                className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-neon-dim to-neon px-10 py-4 text-base font-bold text-black transition hover:brightness-110 glow-btn sm:w-auto"
              >
                Escolher meu plano
              </a>
              <a
                href={SITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-xl border border-white/20 px-10 py-4 text-base font-semibold text-white transition hover:border-neon/50 hover:bg-white/5 sm:w-auto"
              >
                Ir para meun8n.theretech.com.br
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
