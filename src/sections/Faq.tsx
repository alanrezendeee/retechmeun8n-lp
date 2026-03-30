const items = [
  {
    q: 'Preciso saber programar?',
    a: 'Não. O n8n é visual: você conecta blocos como se montasse um fluxograma. Se quiser regras mais avançadas no futuro, evolui com calma — mas o básico não exige código.',
  },
  {
    q: 'Posso usar com WhatsApp?',
    a: 'Sim. O ecossistema do n8n integra com diversos canais — inclusive WhatsApp, conforme as políticas e APIs oficiais ou conectores suportados. Nossa infraestrutura está pronta para você plugar suas credenciais com segurança.',
  },
  {
    q: 'Posso cancelar quando quiser?',
    a: 'Você não fica refém. Os detalhes de fidelidade e aviso prévio estão no contrato no momento da assinatura — mas a filosofia é simples: se não faz sentido, você não fica forçado.',
  },
  {
    q: 'É seguro?',
    a: 'Entregamos HTTPS, boas práticas de acesso e ambiente isolado. Segurança também depende de como você usa senhas e compartilha credenciais — e damos orientação para você não tirar selfie da senha do banco. 🙂',
  },
]

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 border-t border-white/5 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-3xl font-bold text-white sm:text-4xl">
          Perguntas frequentes
        </h2>
        <p className="mt-4 text-center text-lg text-zinc-400">
          Direto ao ponto — como a conversa que você teria com a gente numa call
          de 15 minutos.
        </p>
        <div className="mt-12 space-y-3">
          {items.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-white/10 bg-elevated px-6 open:border-neon/30 open:shadow-[0_0_40px_-16px_rgba(0,230,118,0.2)]"
            >
              <summary className="cursor-pointer list-none py-5 font-display font-semibold text-white [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  {item.q}
                  <span className="text-neon transition group-open:rotate-180">
                    ⌄
                  </span>
                </span>
              </summary>
              <p className="border-t border-white/5 pb-5 leading-relaxed text-zinc-400">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
