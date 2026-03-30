const steps = [
  {
    n: '01',
    title: 'Escolha seu plano',
    body: 'Starter, Growth ou Scale — o tamanho certo para onde você está hoje, com espaço para amanhã.',
  },
  {
    n: '02',
    title: 'Receba seu n8n pronto',
    body: 'Domínio, SSL, banco e ambiente entregues. Você só acessa e começa a montar seus fluxos.',
  },
  {
    n: '03',
    title: 'Comece a automatizar',
    body: 'Conecte WhatsApp, planilhas, CRMs, e-mails e APIs. Transforme tarefas repetitivas em rotina invisível.',
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-neon">
            Como funciona
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            Três passos. Sem curva de sofrimento.
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Do pagamento ao primeiro fluxo, o caminho é curto — porque a parte
            chata já vem resolvida.
          </p>
        </div>
        <div className="relative mt-16 grid gap-8 lg:grid-cols-3">
          <div
            className="pointer-events-none absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-neon/40 to-transparent lg:block"
            aria-hidden
          />
          {steps.map((s) => (
            <div key={s.n} className="relative text-center lg:text-left">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-neon/40 bg-neon/10 font-display text-xl font-extrabold text-neon-bright glow-ring lg:mx-0">
                {s.n}
              </div>
              <h3 className="font-display text-xl font-bold text-white">
                {s.title}
              </h3>
              <p className="mt-3 leading-relaxed text-zinc-400">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
