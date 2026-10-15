import { Link } from 'react-router-dom'
import { Map, Compass, Scale, Briefcase } from 'lucide-react'
import Eyebrow from './Eyebrow'



const AREAS = [
  { icon: Map, label: 'Cartografia' },
  { icon: Compass, label: 'Geodésia' },
  { icon: Scale, label: 'Direito' },
  { icon: Briefcase, label: 'Gestão' },
]

/* Ordem cronológica de início. */
const TRAJETORIA = [
  {
    periodo: '1987 – 1992',
    instituicao: 'IBGE',
    detalhe: 'Departamento de Geodésia',
    papel: 'Analista Especializado',
  },
  {
    periodo: '1992 – 2013',
    instituicao: 'UFF',
    detalhe: 'Instituto de Geociências',
    papel: 'Professor-pesquisador',
  },
  {
    periodo: '2001 – 2013',
    instituicao: 'UERJ',
    detalhe: 'Faculdade de Engenharia',
    papel: 'Professor-pesquisador',
  },
  {
    periodo: '2013 – 2023',
    instituicao: 'UNIFESP',
    detalhe: 'Instituto do Mar',
    papel: 'Professor-pesquisador',
  },
]

const focusRing =
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-beacon'

export default function CompanyPage() {
  return (
    <main className="bg-paper text-ink">
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-paper">
        {/* Curvas de nível (motivo da carta topográfica) */}
        <svg
          aria-hidden="true"
          viewBox="0 0 800 400"
          preserveAspectRatio="xMidYMid slice"
          className="pointer-events-none absolute inset-0 h-full w-full text-contour opacity-20"
        >
          <g fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M-20 320 C 140 240, 260 360, 420 280 S 700 200, 820 260" />
            <path d="M-20 280 C 140 200, 260 320, 420 240 S 700 160, 820 220" />
            <path d="M-20 240 C 140 160, 260 280, 420 200 S 700 120, 820 180" />
            <path d="M-20 200 C 140 120, 260 240, 420 160 S 700 80, 820 140" />
            <path d="M-20 160 C 140 80, 260 200, 420 120 S 700 40, 820 100" />
          </g>
        </svg>

        <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-36 md:pb-28 md:pt-44">
          <Eyebrow>A empresa</Eyebrow>
          <h1 className="font-display mt-4 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
            Cartografia e Geodésia com visão técnica, jurídica e de gestão.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/80">
            A CartoGeo reúne profissionais especialistas de reconhecido
            prestígio e larga experiência em Cartografia, Geodésia, Direito e
            Gestão para atuar em consultorias e assessorias técnicas e
            científicas.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/servicos"
              className={`rounded-md bg-beacon px-6 py-3 font-medium text-ink transition-opacity hover:opacity-90 ${focusRing}`}
            >
              Conheça os serviços
            </Link>
            <Link
              to="/projetos"
              className={`rounded-md border border-paper/40 px-6 py-3 font-medium text-paper transition-colors hover:border-paper ${focusRing}`}
            >
              Veja os projetos
            </Link>
          </div>
        </div>
      </section>

      {/* Áreas de atuação */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">
          <h2 className="font-display text-2xl font-semibold md:text-3xl">
            Quatro áreas, uma equipe
          </h2>
          <ul className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {AREAS.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-3 rounded-lg border border-line bg-white p-5"
              >
                <Icon aria-hidden="true" className="h-6 w-6 shrink-0 text-beacon" />
                <span className="font-display text-lg font-medium">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Liderança */}
      <section id="lideranca">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-5 md:py-24">
          <div className="md:col-span-2">
            <Eyebrow>Liderança</Eyebrow>
            <h2 className="font-display mt-3 text-3xl font-semibold md:text-4xl">
              Dr. Gilberto Pessanha Ribeiro
            </h2>
            <p className="mt-5 max-w-prose leading-relaxed text-slate">
              Engenheiro cartógrafo e professor-pesquisador, com mais de 30
              anos de experiência na área. Também atuou por 3 anos como
              responsável técnico por projetos executivos na Globalgeo
              Geotecnologias.
            </p>
          </div>

          <ol className="relative md:col-span-3">
            <span
              aria-hidden="true"
              className="absolute bottom-2 left-[7px] top-2 w-px bg-line"
            />
            {TRAJETORIA.map((item) => (
              <li key={item.instituicao} className="relative pb-10 pl-10 last:pb-0">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 border-beacon bg-paper"
                />
                <p className="font-mono text-sm text-slate">{item.periodo}</p>
                <h3 className="font-display mt-1 text-xl font-semibold">
                  {item.instituicao}
                  <span className="font-normal text-slate"> · {item.detalhe}</span>
                </h3>
                <p className="mt-1 text-slate">{item.papel}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Fechamento */}
      <section className="border-t border-line bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center md:py-24">
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            Uma equipe escolhida para dar continuidade a uma história de excelência
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-slate">
            A CartoGeo é o ápice da vida profissional do Dr. Gilberto, que
            reuniu com cuidado uma equipe preparada e capacitada para atender à
            grande demanda de projetos que ele já conduz há anos. Seguimos
            escrevendo essa história com dedicação, em consultorias e
            assessorias técnicas e científicas.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {/* <a> nativo para hash, igual ao Header.jsx */}
            <a
              href="/cartogeo/#time"
              className={`rounded-md bg-ink px-6 py-3 font-medium text-paper transition-opacity hover:opacity-90 ${focusRing}`}
            >
              Conheça a equipe
            </a>
            <a
              href="/cartogeo/#contato"
              className={`rounded-md border border-ink px-6 py-3 font-medium text-ink transition-colors hover:bg-ink hover:text-paper ${focusRing}`}
            >
              Fale com a gente
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
