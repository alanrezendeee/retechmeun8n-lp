const features = [
  {
    title: 'Instância pronta',
    desc: 'n8n instalado e otimizado para produção. Você entra e já constrói fluxos.',
  },
  {
    title: 'Domínio configurado',
    desc: 'Endereço profissional no seu nome, com HTTPS. Transmite confiança desde o primeiro clique.',
  },
  {
    title: 'Banco de dados incluso',
    desc: 'Persistência gerenciada para credenciais, histórico e execuções — sem comandar BD.',
  },
  {
    title: 'Segurança em camadas',
    desc: 'Boas práticas de acesso, atualizações e isolamento. Menos risco, mais previsibilidade.',
  },
  {
    title: 'Alta performance',
    desc: 'Infra dimensionada para automações que precisam responder rápido, dia após dia.',
  },
]

export function Solution() {
  return (
    <section id="solucao" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-neon">
              A solução
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              Meu n8n:{' '}
              <span className="text-gradient-neon">automação nível empresa</span>,
              sem você virar TI
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-zinc-400">
              Nós montamos e mantemos tudo que fica “por baixo do capô”. Você
              recebe um ambiente sólido, com credenciais organizadas e caminho
              claro para escalar — seja lead, operação, financeiro ou atendimento.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                'Menos “me ajuda com o servidor”, mais “vamos vender”.',
                'Menos retrabalho, mais retrorno.',
                'Do caos de planilhas ao fluxo que roda sozinho.',
              ].map((line) => (
                <li key={line} className="flex gap-3 text-zinc-300">
                  <span
                    className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-neon shadow-[0_0_10px_#00e676]"
                    aria-hidden
                  />
                  {line}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-4 sm:grid-cols-1">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-white/10 bg-elevated p-6 transition hover:border-neon/35 hover:shadow-[0_0_48px_-16px_rgba(0,230,118,0.25)]"
              >
                <h3 className="font-display text-lg font-bold text-white">
                  {f.title}
                </h3>
                <p className="mt-2 text-zinc-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
