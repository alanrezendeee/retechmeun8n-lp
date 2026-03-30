import { whatsAppUrlForPlan } from '../whatsappPlan'

const plans = [
  {
    name: 'Starter',
    price: '147',
    pitch: 'Para validar automações com consistência.',
    features: [
      '1 instância n8n dedicada',
      'Domínio + HTTPS inclusos',
      'Banco gerenciado',
      'Até 10 mil execuções / mês',
      'Suporte por e-mail',
    ],
    cta: 'Começar no Starter',
    highlight: false,
  },
  {
    name: 'Growth',
    price: '397',
    pitch: 'O ponto ideal para agências e operações em crescimento.',
    features: [
      'Tudo do Starter',
      'Até 75 mil execuções / mês',
      'Prioridade na fila de suporte',
      'Snapshot de backup semanal',
      'Dica de arquitetura de fluxos',
    ],
    cta: 'Quero o Growth',
    highlight: true,
  },
  {
    name: 'Scale',
    price: '897',
    pitch: 'Performance e margem para missão crítica.',
    features: [
      'Tudo do Growth',
      'Até 300 mil execuções / mês',
      'Canal direto com especialista',
      'Checklist de segurança avançado',
      'Revisão trimestral do ambiente',
    ],
    cta: 'Falar com Scale',
    highlight: false,
  },
]

export function Pricing() {
  return (
    <section
      id="planos"
      className="scroll-mt-24 border-t border-white/5 bg-black/50 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Planos claros.{' '}
            <span className="text-gradient-neon">Upgrade quando fizer sentido.</span>
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Transparência de preço para você comparar com tranquilidade — sem
            surpresa escondida em “consulte valores”.
          </p>
        </div>
        <div className="mt-14 grid gap-8 lg:grid-cols-3 lg:items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-3xl border p-8 ${
                plan.highlight
                  ? 'border-neon/50 bg-elevated glow-ring scale-100 lg:-mt-4 lg:scale-105 lg:py-10'
                  : 'border-white/10 bg-elevated/80'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-neon/40 bg-gradient-to-r from-neon-dim to-neon px-4 py-1 text-xs font-extrabold uppercase tracking-wider text-black">
                  Mais popular
                </div>
              )}
              <h3 className="font-display text-xl font-bold text-white">
                {plan.name}
              </h3>
              <p className="mt-2 min-h-[3rem] text-sm text-zinc-400">
                {plan.pitch}
              </p>
              <p className="mt-6 flex items-baseline gap-1">
                <span className="text-sm font-semibold text-zinc-500">R$</span>
                <span className="font-display text-5xl font-extrabold tracking-tight text-white">
                  {plan.price}
                </span>
                <span className="text-zinc-500">/mês</span>
              </p>
              <ul className="mt-8 flex-1 space-y-3 text-left text-sm text-zinc-300">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="text-neon" aria-hidden>
                      ●
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={whatsAppUrlForPlan(plan.name, plan.price)}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-xl py-4 text-center text-sm font-bold transition ${
                  plan.highlight
                    ? 'bg-gradient-to-r from-neon-dim to-neon text-black hover:brightness-110 glow-btn'
                    : 'border border-white/15 text-white hover:border-neon/40 hover:bg-white/5'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-zinc-500">
          Valores em Real (BRL). Cancele quando quiser, conforme condições do
          contrato. Dúvidas? Fale com a gente antes de fechar.
        </p>
      </div>
    </section>
  )
}
