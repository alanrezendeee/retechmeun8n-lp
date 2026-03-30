const bullets = [
  {
    title: 'Setup em minutos',
    text: 'Escolhe o plano, a gente entrega o ambiente. Sem madrugada aprendendo deploy.',
  },
  {
    title: 'Zero obrigação de ser técnico',
    text: 'Feito para donos de negócio, agências e quem quer resultado — não certificação em Linux.',
  },
  {
    title: 'Alta disponibilidade',
    text: 'Sua automação no ar quando importa: campanha, pico de leads, fim de mês.',
  },
  {
    title: 'Escalável conforme você cresce',
    text: 'Começa enxuto, evolui o plano quando a operação pede mais fôlego.',
  },
  {
    title: 'Suporte especializado',
    text: 'Time que fala a mesma língua: negócio + automação, sem empurrar paleativo.',
  },
]

export function Benefits() {
  return (
    <section
      id="beneficios"
      className="scroll-mt-24 border-y border-white/5 bg-gradient-to-b from-black/60 to-surface py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Benefícios que você sente no{' '}
            <span className="text-gradient-neon">primeiro dia</span>
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Clareza, velocidade e previsibilidade. É isso que compra quem não
            quer virar refém de hospedagem genérica.
          </p>
        </div>
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {bullets.map((b) => (
            <li
              key={b.title}
              className="flex gap-4 rounded-2xl border border-white/10 bg-elevated/80 p-6 backdrop-blur-sm"
            >
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-neon/30 bg-neon/10 font-mono text-sm font-bold text-neon-bright"
                aria-hidden
              >
                ✓
              </span>
              <div>
                <h3 className="font-display font-bold text-white">{b.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                  {b.text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
