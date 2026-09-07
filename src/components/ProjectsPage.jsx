import { Link } from "react-router-dom";
import Eyebrow from "./Eyebrow";

const PROJECTS = [
  {
    title: "Monitoramento de erosão e progradação de praias arenosas, com mapeamento dinâmico de dunas",
    description:
      "Liderança desde 2003 no mapeamento cartográfico temático digital da planície costeira do rio Paraíba do Sul, com suporte de imagens sensoriais. O trabalho é desdobramento de projetos de pesquisa interinstitucionais executados em 2004, 2005 e 2006, financiados pelo CNPq e pela FAPERJ — entre eles “Atafona, RJ: Avaliação do Processo de Erosão Marinha” e “Erosão em Atafona: Presente, Passado e Futuro”",
    bullets: [
      ,
    ],
  },
  {
    title: "Modelos 3D e medição da dinâmica do campo de dunas formado pela erosão em Atafona (RJ)",
    description:
      "Mapeamento digital do campo de dunas estabelecido nas últimas duas décadas na praia de Atafona, São João da Barra (RJ), com levantamentos geodésicos GPS nos modos relativo e cinemático. As medições de verão e inverno de 2006 apuraram diferença da ordem de 43 mil m³ de sedimentos depositados na área de alto risco ambiental, comprovando condições favoráveis à continuidade do soterramento da infraestrutura urbana local. Foram gerados modelos 3D das dunas estudadas",
    bullets: [
      ,
    ],
  },
  {
    title: "Caracterização e evolução espacial das áreas de erosão marinha na praia de Atafona (RJ)",
    description:
      "Mapeamento digital destinado à caracterização e à evolução da configuração espacial de áreas de erosão marinha na praia de Atafona, São João da Barra (RJ). O material fotográfico e científico do projeto está reunido em atafona.unifesp.br",
    bullets: [
      ,
    ],
  },
  {
    title: "O acervo visual de duas décadas do projeto Atafona — ciência, extensão e um documentário",
    description:
      "O projeto Atafona, criado em 2003 com financiamento inicial do CNPq, teve desdobramentos institucionais pela UFF e pela UERJ, inclusive extensionistas. Do acervo fazem parte o ensaio “ATAFONA: um ensaio sobre seus cenários” e o documentário ficcional “ATAFONA por quê?”, dirigido pelo Dr. Miguel F. Freire (UFF) e produzido pelo Dr. Gilberto P. Ribeiro",
    bullets: [
      ,
    ],
  },
  {
    title: "Solução geométrica com amparo legal para os limites oceânicos entre municípios e estados.",
    description:
      "Planejamento e execução de mapeamentos digitais para avaliação da redistribuição de royalties de petróleo e gás natural na costa brasileira, com bases cartográficas oficiais do IBGE, do SGB/CPRM, da Marinha do Brasil e da ANP, e emprego de QGIS e GlobalMapper. Amparo legal: Lei nº 2.004/1953 (Política Nacional do Petróleo) e Lei nº 3.257/1957, entre outras normas",
    bullets: [
      ,
    ],
  },
  {
    title: "Mapeamento digital e monitoramento das áreas de mangues do litoral fluminense.",
    description:
      "Pesquisa aplicada ao mapeamento das áreas de vegetação de mangues do litoral fluminense com tecnologias digitais de geoprocessamento: imagens sensoriais e fotografias aéreas ortorretificadas como base para identificação de feições e extração de informações sobre os manguezais da zona costeira do Rio de Janeiro, com uso integrado de SIG e sistemas de processamento digital de imagens. (Projeto FAPERJ.)",
    bullets: [
      ,
    ],
  },
  {
    title: "Geotecnologias e uso da terra frente às mudanças climáticas em sub-bacias de SP e RJ.",
    description:
      " Aplicação de geotecnologias na avaliação e orientação do uso da Terra diante dos impactos das mudanças climáticas globais sobre o ambiente costeiro das bacias hidrográficas litorâneas entre os litorais de São Paulo e do Rio de Janeiro, com ferramentas de tratamento de imagens de satélite e geração de mapas digitais. (Projeto FAPERJ/FAPESP.)",
    bullets: [
      ,
    ],
  },
  {
    title: "Geoprocessamento no estudo da contaminação difusa do rio do Peixe (2021–2023).",
    description:
      "Mapeamento com GPS e SIG das fontes de contaminação de água, solo e sedimento no Guarujá/SP — localização, extensão e distribuição das áreas impactadas — e dos efeitos da contaminação por esgoto sanitário no rio do Peixe, com georreferenciamento e geração de plantas, mapas e cartas temáticas.",
    bullets: [
      ,
    ],
  },
  {
    title: "Monitoramento da erosão marinha na Baía da Traição (PB), do drone à linha de costa.",
    description:
      "Monitoramento da erosão marinha na Baía da Traição (PB), com análise sistemática dos condicionantes naturais e antropogênicos: clima de ondas, regime de ventos, correntes litorâneas, marés astronômicas e meteorológicas e obras costeiras. Uso de imagens aéreas de drone para ortomosaicos, mapeamento regional com imagens de satélite e levantamentos de campo com o receptor GNSS Altus APS-3 na demarcação de falésias, crista da praia e linha de costa.",
    bullets: [
      ,
    ],
  },
  {
    title: "Coberturas aéreas detalhadas com drone DJI Air 3 Fly, do campo ao processamento.",
    description:
      "Mapeamento digital com drone em escalas locais e regionais, incluindo zonas costeiras — do rigor da coleta em campo ao processamento digital de imagens. Equipamentos cadastrados e com autorizações de voo junto aos órgãos reguladores, garantindo segurança jurídica aos clientes. Drone DJI Air 3 Fly e receptor GNSS Altus APS-3 com precisão centimétrica no apoio de campo.",
    bullets: [
      ,
    ],
  },
  {
    title: "Malhas de pontos geodésicos de referência com precisão centimétrica (Altus APS-3).",
    description:
      "Mapeamento digital com sistemas GNSS em escalas locais e regionais, incluindo zonas costeiras, unindo coleta rigorosa em campo e processamento de dados em gabinete. Operação com receptor GNSS Altus APS-3 (precisão centimétrica) e receptores Garmin de navegação. A agenda técnica de 2026 destaca o monitoramento de processos costeiros na Baía da Traição e projetos no sertão e no litoral paraibanos.",
    bullets: [
      ,
    ],
  },
  {
    title: "SIG institucional para análise espacial integrada e desenvolvimento territorial.",
    description:
      "Pesquisa aplicada ao desenvolvimento de Sistema de Informação Geográfica com suporte a análises espaciais integradas a partir de dados sociais e econômicos, projetando um SIG institucional de uso imediato pela gestão pública para o desenvolvimento territorial em escala regional. (Projeto FAPERJ.)",
    bullets: [
      ,
    ],
  },
  {
    title: "Inovação em processos de produção cartográfica e no uso dos produtos gerados.",
    description:
      "Frente dedicada à inovação tecnológica em mapeamento digital sob duas perspectivas: a otimização dos processos de produção de documentos cartográficos e a ampliação das formas de uso dos produtos — na leitura da CartoGeo, inovação também tem dimensão social, agregando potencialidades efetivas aos mapas, cartas e plantas produzidos.",
    bullets: [
      ,
    ],
  },
  {
    title: "Estudos de caso no alto sertão nordestino, incluindo territórios quilombolas.",
    description:
      "Elaboração e desenvolvimento de projetos de regularização fundiária no alto sertão nordestino, incluindo territórios de comunidades tradicionais quilombolas, com base na legislação ambiental e na função social da propriedade, nos eixos urbano e rural, com georreferenciamento de imóveis. Processamento de imagens LANDSAT 8 no sistema SPRING. Iniciativa de Fernando H. P. Mamédio e Gilberto P. Ribeiro, com colaboração de Verioní R. Bastos.",
    bullets: [
      ,
    ],
  },
  {
    title: "Estudos de viabilidade e implementação de projetos urbanísticos com GNSS e SIG.",
    description:
      "Atividades de geoprocessamento em estudos técnicos de viabilidade e implementação de projetos urbanísticos — parcelamento do solo, traçado de vias, áreas públicas e infraestrutura — com emprego imediato de GNSS e SIG.",
    bullets: [
      ,
    ],
  },
  {
    title: "Reconstituição cartográfica de um século de história fundiária em Rio das Ostras (RJ).",
    description:
      "Avaliação histórica da configuração espacial da Fazenda Cantagalo (Rio das Ostras, RJ) a partir de plantas impressas de 1891, 1947, 1954, 2001 e 2002: extração da geometria dos polígonos por métodos gráficos, georreferenciamento analítico em padrões cartográficos oficiais e comparação dos traçados ao longo do tempo, sobre mosaico de ortofotografias métricas de 2006 e referência espacial oficial do IBGE, com cálculo de áreas e perímetros de cada polígono.",
    bullets: [
      ,
    ],
  },
  {
    title: "Cartografia a serviço do patrimônio histórico em Petrópolis (RJ).",
    description:
      " Mapeamento digital para caracterização de áreas com acervo valioso de patrimônio histórico de interesse do IPHAN na localidade Meio da Serra, Petrópolis (RJ). As bases cartográficas deram suporte à localização de fotografias terrestres de remanescentes de edificações que contam parte importante da história local.",
    bullets: [
      ,
    ],
  },
  {
    title: "Mapeamento temático no suporte à pesquisa arqueológica em Santarém (PA) e na Serra do Cabral (MG).",
    description:
      "Planejamento e execução de mapeamento digital temático no suporte à pesquisa arqueológica pré-histórica e histórica — em Santarém (PA), com estudos dirigidos a tipos de solo, e na Serra do Cabral (MG), com estudos de ocupação humana histórica e alterações de paisagem. Reconhecimento de padrões em imagens LANDSAT com apoio de trabalhos de campo para mapeamento de uso da Terra e cobertura vegetal.",
    bullets: [
      ,
    ],
  },
  {
    title: "Processamento de imagens LANDSAT 8 e 9 com SPRING para mapeamento de uso da terra na Paraíba.",
    description:
      "Série de processamentos de imagens LANDSAT 8 e 9 (USGS) no sistema SPRING 5.5.6 (INPE), cobrindo Tavares, o alto sertão e o litoral paraibanos (Cabedelo e adjacências): avaliação de georreferenciamento e correções radiométricas, geométricas e atmosféricas; realce e contraste por banda; composições coloridas RGB; segmentação; classificação supervisionada ou semissupervisionada; e mapeamento temático de uso da Terra e cobertura vegetal. Equipe: Dr. Gilberto P. Ribeiro e Dr. Jhonnes A. Vaz.",
    bullets: [
      ,
    ],
  },
  {
    title: "Mapeamento do Parque Nacional da Serra dos Órgãos e da pressão urbana em seu entorno.",
    description:
      " Planejamento e execução do mapeamento digital do Parque Nacional da Serra dos Órgãos (PARNASO), o parque mais pesquisado do Brasil e importante Unidade de Conservação fluminense. Por segmentação e classificação de imagens digitais, o projeto acompanhou o processo de ocupação desordenada no entorno, produzindo mapas de uso da Terra e cobertura vegetal.",
    bullets: [
      ,
    ],
  },
  {
    title: "Arranjo Produtivo Local da banana orgânica em Casimiro de Abreu (RJ).",
    description:
      "Aplicações geoespaciais em Arranjo Produtivo Local voltado à produção de banana orgânica em escala regional no estado do Rio de Janeiro. A criação do APL busca gerar renda e emprego nas regiões produtoras, como Casimiro de Abreu, com inovações em processos, produtividade e competitividade da agricultura orgânica.",
    bullets: [
      ,
    ],
  },
  {
    title: "Banco de dados geoespacial e SIG para a gestão do turismo municipal.",
    description:
      "Mapeamentos digitais destinados à gestão do turismo municipal: geração de banco de dados geoespaciais turísticos, consultas e atualização no suporte à gestão. Análise integrada de cenários turístico-geográficos para diagnosticar problemas e identificar potencialidades do turismo em escala regional e de detalhe, a serviço das gestões pública e privada.",
    bullets: [
      ,
    ],
  },
  {
    title: "Sete projetos de pesquisa financiados: seis pela FAPERJ e um FAPERJ-FAPESP.",
    description:
      "Liderança no desenvolvimento de sete projetos de pesquisa com financiamento de agências de fomento — seis pela FAPERJ e um pelas agências FAPERJ-FAPESP — cobrindo do mapeamento da planície do rio Paraíba do Sul e dos efeitos do Porto do Açu ao monitoramento de mangues, sub-bacias litorâneas, SIG regional e diversidade biológica da Ilha Grande, todos com números de processo públicos.",
    bullets: [
      ,
    ],
  },
];

export default function ProjectsPage() {
  return (
    <>
      <section className="container-page pb-16 pt-28 sm:pb-20 sm:pt-32">
        <Eyebrow label="Projetos" code="" />

        <h1 className="mt-4 max-w-3xl font-display text-3xl font-semibold leading-tight text-ink sm:text-5xl">
          Projetos e Cases | CartoGeo
        </h1>

        <p className="mt-6 max-w-2xl text-slate">
          Cases que mostram o método científico aplicado a desafios reais — do litoral ao interior do Brasil.
        </p>

        <h1 className="mt-10 max-w-3xl font-display text-3xl font-semibold leading-tight text-ink sm:text-3xl">
          Projetos que falam por nós
        </h1>
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
          <Eyebrow label="Vamos conversar" code="" />
          <h2 className="mt-4 max-w-xl font-display text-2xl font-semibold text-ink sm:text-3xl">
            Tem um desafio parecido? Fale conosco.
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
