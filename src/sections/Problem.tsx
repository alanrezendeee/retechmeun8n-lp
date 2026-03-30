const pains = [
  {
    title: 'Configurar n8n é complicado',
    body: 'Fila de tutoriais, variáveis, credenciais, integrações… O tempo some antes da primeira automação sair do papel.',
  },
  {
    title: 'Infraestrutura dá dor de cabeça',
    body: 'Servidor, SSL, backup, atualização e disponibilidade. Cada detalhe vira uma decisão técnica que deveria ser nossa, não sua.',
  },
  {
    title: 'Tempo perdido com tecnologia',
    body: 'Enquanto você briga com painel e hospedagem, seu negócio espera. Automação existe para acelerar — não para virar segundo emprego.',
  },
]

export function Problem() {
  return (
    <section className="border-b border-white/5 bg-black/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Se automação é estratégia,{' '}
            <span className="text-zinc-500">por que começar pelo jeito difícil?</span>
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            A maioria desiste antes do primeiro fluxo estável. Não por falta de
            vontade — mas porque o caminho técnico é íngreme demais para quem
            precisa vender, servir e crescer.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pains.map((item) => (
            <article
              key={item.title}
              className="group relative rounded-2xl border border-white/10 bg-elevated p-8 transition hover:border-red-500/20 hover:shadow-[0_0_40px_-12px_rgba(239,68,68,0.2)]"
            >
              <div className="absolute right-6 top-6 h-2 w-2 rounded-full bg-red-500/80 opacity-60 group-hover:opacity-100" />
              <h3 className="font-display text-xl font-bold text-white">
                {item.title}
              </h3>
              <p className="mt-3 leading-relaxed text-zinc-400">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
