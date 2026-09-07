import { Link } from "react-router-dom";
import Eyebrow from "./Eyebrow";

// Substitua pelos nomes, cargos e fotos reais do time.
const TEAM = [
  { name: "Dr. Gilberto Pessanha Ribeiro", role: "Fundador(a) & CEO" },
  { name: "Nome da Pessoa", role: "Lead de Geoprocessamento" },
  { name: "Nome da Pessoa", role: "Desenvolvedor(a) Senior" },
  { name: "Nome da Pessoa", role: "Cientista de Dados" },
  { name: "Nome da Pessoa", role: "Designer de Produto" },
  { name: "Nome da Pessoa", role: "Gerente de Projetos" },
  { name: "Nome da Pessoa", role: "Desenvolvedor(a)" },
  { name: "Nome da Pessoa", role: "Analista Geoespacial" },
];

export default function TeamPage() {
  return (
    <>
      <section className="container-page pb-20 pt-28 sm:pb-28 sm:pt-32">
        <Eyebrow label="Equipe" code="01" />

        <h1 className="mt-4 max-w-3xl font-display text-3xl font-semibold leading-tight text-ink sm:text-5xl">
          As pessoas por trás de cada mapa que se transforma em decisão.
        </h1>

        <p className="mt-6 max-w-2xl text-slate">
          A cartogeo nasceu para aproximar tecnologia geoespacial de quem toma
          decisão todos os dias. Cada pessoa do time traz uma combinação
          diferente de cartografia, dados e engenharia — e é dessa mistura que
          nascem as soluções que construímos junto com nossos clientes.
        </p>
      </section>

      <section className="container-page pb-20 sm:pb-28">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {TEAM.map((person) => (
            <div
              key={`${person.name}-${person.role}`}
              className="flex flex-col items-center gap-3 rounded-xl border border-line bg-white p-6 text-center"
            >
              <div
                className="h-16 w-16 flex-none rounded-full bg-paper"
                aria-hidden="true"
              />
              <div>
                <p className="font-semibold text-ink">{person.name}</p>
                <p className="text-sm text-slate">{person.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page pb-20 sm:pb-28">
        <div className="rounded-xl border border-line bg-white p-8 sm:p-12">
          <Eyebrow label="Trabalhe com a gente" code="02" />
          <h2 className="mt-4 max-w-xl font-display text-2xl font-semibold text-ink sm:text-3xl">
            Um time construído com propósito e visão de futuro
          </h2>
          <p className="mt-4 max-w-xl text-slate">
            Valorizamos responsabilidade, colaboração e aprendizado contínuo.
            Se você se interessa por tecnologia geoespacial e quer construir
            soluções que realmente são usadas, queremos te conhecer.
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
