const testimonials = [
  {
    quote:
      'Em duas semanas estávamos disparando follow-up de orçamento sozinhos. Zero stress com VPS.',
    name: 'Marina Alves',
    role: 'CEO, estúdio de branding',
  },
  {
    quote:
      'Cliente pedia n8n “no ar” e eu perdia horas. Hoje entrego o link e volto para copy e campanha.',
    name: 'Rafael Mota',
    role: 'Head de growth, agência',
  },
  {
    quote:
      'Não sou técnico. Ter domínio e banco prontos fez eu finalmente parar de adiar automação.',
    name: 'Eduardo Pires',
    role: 'Fundador, operação de e-commerce',
  },
]

const cases = [
  {
    title: 'Agência reduz 12h/semana de operação manual',
    detail:
      'Integração de leads do site com CRM e notificações no Slack — tudo rodando em instância única.',
  },
  {
    title: 'E-commerce sincroniza pedidos com planilha e e-mail',
    detail:
      'Pedidos novos viram linha na planilha + aviso para logística, sem planilheiro em plantão.',
  },
  {
    title: 'Consultor fecha onboarding mais rápido',
    detail:
      'Formulários disparam contratos e lembretes; o time foca em atendimento, não em “passo 7 do tutorial”.',
  },
]

export function SocialProof() {
  return (
    <section className="border-t border-white/5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Quem já trocou dor de cabeça{' '}
            <span className="text-gradient-neon">por fluxo</span>
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Histórias reais de quem queria automação sem virar administrador de
            servidor. (Depoimentos ilustrativos — substitua pelos seus assim que
            tiver autorização dos clientes.)
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="flex flex-col rounded-2xl border border-white/10 bg-elevated p-8"
            >
              <p className="flex-1 text-lg leading-relaxed text-zinc-200">
                “{t.quote}”
              </p>
              <footer className="mt-6 border-t border-white/5 pt-6">
                <cite className="not-italic">
                  <span className="font-display font-bold text-white">
                    {t.name}
                  </span>
                  <span className="mt-1 block text-sm text-zinc-500">
                    {t.role}
                  </span>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
        <div className="mt-16">
          <h3 className="text-center font-display text-xl font-bold text-white">
            Cases em uma linha
          </h3>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {cases.map((c) => (
              <div
                key={c.title}
                className="rounded-xl border border-neon/20 bg-black/40 p-6"
              >
                <p className="font-display font-semibold text-neon-bright">
                  {c.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {c.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
