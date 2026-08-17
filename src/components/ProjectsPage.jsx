import { Link } from "react-router-dom";
import Eyebrow from "./Eyebrow";

const PROJECTS = [
  {
    title: "Levantamento GNSS de Precisão",
    description:
      "Planejamento e execução de trabalhos de campo com receptores GNSS de dupla frequência e de navegação, com controle de qualidade em cada etapa da coleta.",
    bullets: [
      "Posicionamento estático e cinemático (RTK/PPK)",
      "Implantação e monitoramento de redes geodésicas",
      "Integração com bases de referência e RBMC",
      "Pós-processamento e ajuste de observações",
    ],
  },
  {
    title: "Processamento de Imagens de Observação da Terra",
    description:
      "Processamento de imagens científicas de satélite por meio de sistemas computacionais especializados, do dado bruto ao produto pronto para análise.",
    bullets: [
      "Correção radiométrica e geométrica",
      "Classificação e detecção de mudanças",
      "Geração de índices espectrais e produtos derivados",
      "Integração com pipelines de dados abertos (STAC, OGC)",
    ],
  },
  {
    title: "Cartografia & Geoprocessamento",
    description:
      "Produção cartográfica e análises espaciais sob medida, unindo rigor técnico e clareza visual para apoiar decisões operacionais.",
    bullets: [
      "Elaboração de mapas temáticos e cartas topográficas",
      "Modelagem digital de terreno e curvas de nível",
      "Análises espaciais e geoestatística",
      "Padronização de bases cartográficas",
    ],
  },
  {
    title: "Sistemas de Informação Geográfica",
    description:
      "Desenvolvimento de sistemas e ferramentas para armazenar, consultar e visualizar dados geoespaciais de forma acessível para o time.",
    bullets: [
      "Modelagem de bancos de dados geoespaciais",
      "Dashboards e visualizações interativas",
      "APIs e integrações com sistemas existentes",
      "Automação de fluxos de atualização de dados",
    ],
  },
  {
    title: "Monitoramento Ambiental",
    description:
      "Acompanhamento contínuo de áreas de interesse a partir de dados de sensoriamento remoto, com alertas e relatórios periódicos.",
    bullets: [
      "Monitoramento de cobertura e uso do solo",
      "Detecção de alterações e alertas automatizados",
      "Relatórios técnicos periódicos",
      "Apoio a licenciamento e compliance ambiental",
    ],
  },
  {
    title: "Consultoria em Dados Geoespaciais",
    description:
      "Apoio técnico para estruturar, validar e escalar projetos que dependem de dado espacial como parte central da operação.",
    bullets: [
      "Diagnóstico de maturidade de dados espaciais",
      "Definição de arquitetura e padrões de dados",
      "Curadoria e validação de bases existentes",
      "Capacitação técnica de equipes internas",
    ],
  },
];

export default function ProjectsPage() {
  return (
    <>
      <section className="container-page pb-16 pt-28 sm:pb-20 sm:pt-32">
        <Eyebrow label="Projetos" code="01" />

        <h1 className="mt-4 max-w-3xl font-display text-3xl font-semibold leading-tight text-ink sm:text-5xl">
          Do campo ao dado processado, projetos que sustentam decisões reais.
        </h1>

        <p className="mt-6 max-w-2xl text-slate">
          Cada projeto da cartogeo nasce de um problema concreto de campo ou
          de dado. Combinamos levantamento, processamento e engenharia para
          entregar informação geoespacial confiável, do início ao fim da
          operação.
        </p>
      </section>

      <section className="container-page pb-20 sm:pb-28">
        <div className="grid gap-6 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <article
              key={project.title}
              className="flex flex-col gap-4 rounded-xl border border-line bg-white p-7 sm:p-8"
            >
              <span className="h-1.5 w-6 rounded-full bg-contour" aria-hidden="true" />
              <h2 className="font-display text-xl font-semibold text-ink">
                {project.title}
              </h2>
              <p className="text-sm leading-relaxed text-slate">
                {project.description}
              </p>
              <ul className="mt-1 flex flex-col gap-2">
                {project.bullets.map((bullet) => (
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
            Tem um projeto de campo ou de dado pela frente?
          </h2>
          <p className="mt-4 max-w-xl text-slate">
            Conte um pouco sobre o desafio e a gente ajuda a desenhar o
            caminho mais direto entre a coleta e a decisão.
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
