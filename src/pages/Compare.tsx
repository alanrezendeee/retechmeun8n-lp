import { Link } from 'react-router-dom'

const dimensions = [
  {
    title: 'O que você está comprando',
    us: 'Um produto: n8n gerenciado ponta a ponta, com o pacote que o seu negócio precisa para operar.',
    vps:
      'Principalmente infraestrutura: uma máquina com n8n instalado. O “resto” varia com cada provedor e com o que você souber configurar.',
    diy: 'Peças soltas: servidor, SO, Docker ou PM2, banco, proxy reverso, certificado, backup — tudo é escolha sua.',
    cloud:
      'SaaS oficial do n8n: forte para quem quer a ferramenta na nuvem deles, com regras e limites do produto global.',
  },
  {
    title: 'Quem opera o dia a dia',
    us: 'A The Retech: atualização, disponibilidade, camadas de segurança e suporte no idioma e no fuso do Brasil.',
    vps:
      'Na prática, muitas vezes você ou alguém da sua equipe vira “mini TI”: painel da hospedagem, SSH, espaço em disco, patches.',
    diy: '100% sua responsabilidade — ou do freelancer que você contratar quando der problema.',
    cloud: 'A equipe n8n — em inglês, filas de suporte globais, políticas internacionais.',
  },
  {
    title: 'Domínio, HTTPS e primeira impressão',
    us: 'Domínio profissional e HTTPS fazem parte do pacote: seu cliente vê marca, não “um IP com aviso de certificado”.',
    vps: 'Dá para chegar lá — desde que você saiba apontar DNS, renovar certificado e manter tudo alinhado.',
    diy: 'Você monta cada detalhe; cada etapa é mais uma oportunidade de erro ou atraso.',
    cloud: 'URL na estrutura do serviço oficial; marca própria costuma exigir passos e custos adicionais.',
  },
  {
    title: 'Banco de dados e dados de execução',
    us: 'Persistência incluída e dimensionada para o plano — sem você gerenciar usuário de BD, backup manual ou versão do Postgres.',
    vps: 'Pode vir incluso ou não; upgrades, snapshots e recuperação continuam sendo decisões suas.',
    diy: 'Você escolhe, instala, cuida de backup e performance. Enquanto isso, o negócio espera.',
    cloud: 'Gerenciado pelo produto oficial, segundo as regras da plataforma deles.',
  },
  {
    title: 'Suporte quando a automação é prioridade',
    us: 'Canal com quem fala “fluxo, lead, campanha, operação” — além de infra. Feito para agência, empresário e operações.',
    vps: 'Suporte de hospedagem resolve hospedagem; dúvida de fluxo, integração fina ou arquitetura muitas vezes fica com você.',
    diy: 'Stack Overflow, fóruns e dor de cabeça às 2h da manhã.',
    cloud: 'Suporte do ecossistema oficial — ótimo, mas nem sempre alinhado ao contexto brasileiro ou ao seu ritmo comercial.',
  },
  {
    title: 'Previsibilidade para escalar',
    us: 'Planos com limites claros de execução e upgrade quando crescer — sem surpresa de “servidor estourou”.',
    vps: 'Limites mudam com CPU, RAM e tráfego; picos podem virar ticket ou conta mais alta sem pacote “de produto”.',
    diy: 'Cada pico é um projeto de capacidade; você descobre sob pressão.',
    cloud: 'Escalabilidade do SaaS oficial, de acordo com a tabela e as regras globais deles.',
  },
]

const closingPoints = [
  {
    h: 'Não competimos com “VPS barato” — competimos com o seu tempo',
    p: 'Se o objetivo é poupar no curto prazo e gastar muitas horas aprendendo painel, fila e log, o VPS pode fazer sentido. Se o objetivo é automação no ar, estável, com alguém responsável pelo ambiente, o Meu n8n foi desenhado para isso.',
  },
  {
    h: 'Transparência de categoria',
    p: 'Hospedagens que oferecem “n8n auto-hospedado” em geral entregam uma máquina com software instalado. Nós entregamos um serviço: o conjunto domínio, segurança, banco, operação contínua e suporte alinhado ao negócio.',
  },
  {
    h: 'n8n Cloud oficial também é excelente — e diferente',
    p: 'O SaaS global do n8n é uma ótima opção para quem se encaixa nas regras deles. O Meu n8n existe para quem quer marca própria no domínio, atendimento e contexto locais e pacote pensado para empresas e agências brasileiras — sem virar engenheiro de infraestrutura.',
  },
]

export function Compare() {
  return (
    <main className="border-b border-white/5">
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(0,230,118,0.12),transparent)]" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-widest text-neon">
            Comparativo
          </p>
          <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Por que o <span className="text-gradient-neon">Meu n8n</span> existe
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-zinc-400">
            Este texto compara{' '}
            <strong className="font-semibold text-zinc-300">categorias</strong> de
            solução — não preço. VPS com n8n (como ofertas de grandes
            hospedagens), DIY na nuvem, n8n Cloud oficial e o nosso modelo{' '}
            <strong className="font-semibold text-zinc-300">
              gerenciado pela The Retech
            </strong>
            . Cada um serve a perfis diferentes; abaixo está o que nos separa
            quando o que importa é{' '}
            <strong className="font-semibold text-zinc-300">
              tempo, clareza e alguém assumindo a operação
            </strong>
            .
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/#planos"
              className="inline-flex rounded-xl bg-gradient-to-r from-neon-dim to-neon px-6 py-3 text-sm font-bold text-black glow-btn"
            >
              Ver planos
            </Link>
            <Link
              to="/"
              className="inline-flex rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold text-white hover:border-neon/40 hover:bg-white/5"
            >
              Voltar à página inicial
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
          O mesmo checklist, quatro jeitos de resolver
        </h2>
        <p className="mt-3 max-w-3xl text-zinc-400">
          Para cada dimensão, pense onde cai a{' '}
          <strong className="font-semibold text-zinc-300">
            responsabilidade
          </strong>
          : com você, com a hospedagem genérica ou com um{' '}
          <strong className="font-semibold text-zinc-300">
            produto focado em n8n gerenciado
          </strong>
          .
        </p>

        <div className="mt-12 space-y-12">
          {dimensions.map((row) => (
            <article
              key={row.title}
              className="rounded-2xl border border-white/10 bg-elevated/50 p-6 sm:p-8"
            >
              <h3 className="font-display text-lg font-bold text-neon-bright sm:text-xl">
                {row.title}
              </h3>
              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <div className="rounded-xl border border-neon/30 bg-neon/5 p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-neon">
                    Meu n8n · The Retech
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-200">
                    {row.us}
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                      VPS + n8n (modelo hospedagem)
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                      {row.vps}
                    </p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                      DIY · nuvem genérica
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                      {row.diy}
                    </p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                      n8n Cloud (oficial)
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                      {row.cloud}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-white/5 bg-black/40 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            Em três frases
          </h2>
          <ul className="mt-10 space-y-8">
            {closingPoints.map((item) => (
              <li key={item.h}>
                <h3 className="font-display text-lg font-bold text-white">
                  {item.h}
                </h3>
                <p className="mt-2 leading-relaxed text-zinc-400">{item.p}</p>
              </li>
            ))}
          </ul>
          <p className="mt-12 text-center text-sm text-zinc-500">
            Marcas citadas são categorias de mercado; não há endosso nem par
            comercial implícito. A escolha certa depende do seu perfil — nós
            somos a opção quando **infraestrutura não pode ser o seu segundo
            emprego**.
          </p>
          <div className="mt-10 flex justify-center">
            <Link
              to="/#planos"
              className="inline-flex rounded-xl bg-gradient-to-r from-neon-dim to-neon px-8 py-4 text-sm font-bold text-black glow-btn"
            >
              Quero o Meu n8n
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
