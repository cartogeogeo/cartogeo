import { Link } from "react-router-dom";
import Eyebrow from "./Eyebrow";

const SERVICES = [
  {
    title: "Consultoria Estratégica",
    description:
      "Ajudamos a alinhar tecnologia geoespacial, IA e fluxos operacionais para reduzir complexidade e melhorar a tomada de decisão.",
    bullets: [
      "Diagnóstico de maturidade geoespacial",
      "Decisões de construir vs. comprar",
      "Definição de roadmap de dados e produto",
      "Apoio em fusões, aquisições e parcerias técnicas",
    ],
  },
  {
    title: "Observação da Terra & Sistemas de Dados",
    description:
      "Transformamos dados de satélite, sensores e IoT fragmentados em sistemas geoespaciais confiáveis para monitoramento e análise.",
    bullets: [
      "Ingestão e processamento de imagens de satélite",
      "Pipelines de dados de sensores e IoT",
      "Arquitetura de dados em padrões abertos (STAC, OGC)",
      "Monitoramento contínuo e alertas automatizados",
    ],
  },
  {
    title: "IA & Analytics",
    description:
      "Aplicamos analytics espacial, machine learning e visão computacional para identificar padrões e gerar inteligência operacional.",
    bullets: [
      "Desenvolvimento de algoritmos espaciais sob medida",
      "Modelos de machine learning e visão computacional",
      "Detecção de anomalias e mudanças",
      "Geração de insights a partir de dados brutos",
    ],
  },
  {
    title: "Engenharia de Cloud & Plataforma",
    description:
      "Modernizamos infraestrutura geoespacial legada com plataformas cloud-native, APIs e automações que melhoram desempenho e manutenção.",
    bullets: [
      "Modernização de infraestrutura legada",
      "Arquitetura cloud-native e APIs",
      "Automação de fluxos de trabalho",
      "Frameworks de autenticação e segurança",
    ],
  },
  {
    title: "Inteligência Operacional",
    description:
      "Desenvolvemos aplicações de suporte à decisão que ajudam equipes a responder mais rápido e agir com confiança em tempo real.",
    bullets: [
      "Dashboards e visualizações sob medida",
      "Aplicações de suporte à decisão em tempo real",
      "Integração com sistemas já existentes",
      "Desenho de experiência para times operacionais",
    ],
  },
  {
    title: "Operação Geoespacial Gerenciada",
    description:
      "Suporte contínuo, otimização e gestão operacional de sistemas geoespaciais para escalar sem aumentar a complexidade interna.",
    bullets: [
      "Suporte contínuo e monitoramento de sistemas",
      "Otimização de performance e custo",
      "Gestão de releases e manutenção evolutiva",
      "Times dedicados sob demanda",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="container-page pb-16 pt-28 sm:pb-20 sm:pt-32">
        <Eyebrow label="Serviços" code="01" />

        <h1 className="mt-4 max-w-3xl font-display text-3xl font-semibold leading-tight text-ink sm:text-5xl">
          Da estratégia à operação, em cada camada do dado geoespacial.
        </h1>

        <p className="mt-6 max-w-2xl text-slate">
          A cartogeo desenvolve software geoespacial sob medida para empresas
          que dependem de localização para operar — unindo engenharia, dados e
          cartografia para reduzir a distância entre o mapa e a decisão.
          Combinamos qualquer um dos serviços abaixo conforme a maturidade e a
          necessidade do seu time.
        </p>
      </section>

      <section className="container-page pb-20 sm:pb-28">
        <div className="grid gap-6 sm:grid-cols-2">
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className="flex flex-col gap-4 rounded-xl border border-line bg-white p-7 sm:p-8"
            >
              <span className="h-1.5 w-6 rounded-full bg-contour" aria-hidden="true" />
              <h2 className="font-display text-xl font-semibold text-ink">
                {service.title}
              </h2>
              <p className="text-sm leading-relaxed text-slate">
                {service.description}
              </p>
              <ul className="mt-1 flex flex-col gap-2">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2 text-sm text-slate">
                    <span
                      className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-beacon"
                      aria-hidden="true"
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="container-page pb-20 sm:pb-28">
        <div className="rounded-xl border border-line bg-white p-8 sm:p-12">
          <Eyebrow label="Vamos conversar" code="02" />
          <h2 className="mt-4 max-w-xl font-display text-2xl font-semibold text-ink sm:text-3xl">
            Pronto para colocar a localização no centro da operação?
          </h2>
          <p className="mt-4 max-w-xl text-slate">
            Conte um pouco sobre o desafio que você está tentando resolver e a
            gente te ajuda a encontrar o caminho mais direto até lá.
          </p>
          <a
            href="/#contato"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-ink px-5 py-2.5 text-sm font-semibold text-white hover:bg-beacon"
          >
            Fale com a gente
            <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" aria-hidden="true">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </section>

      <section className="container-page pb-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate hover:text-ink"
        >
          <svg viewBox="0 0 16 16" className="h-4 w-4 rotate-180" fill="none" aria-hidden="true">
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Voltar para a página inicial
        </Link>
      </section>
    </>
  );
}
