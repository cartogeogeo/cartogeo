import Eyebrow from "./Eyebrow";
import { Link } from "react-router-dom";

const SERVICES = [
  {
    title: "Monitoramento de Processos Costeiros",
    description:
      "Monitoramento de erosão e progradação de praias arenosas, com mapeamento dinâmico de dunas.",
  },
  {
    title: "Mapeamento digital de campo de dunas",
    description:
      "Modelos 3D e medição da dinâmica do campo de dunas formado pela erosão em Atafona (RJ).",
  },
  {
    title: "Mapeamento digital destinado à caracterização e à evolução de configuração espacial de áreas de erosão",
    description:
      "Caracterização e evolução espacial das áreas de erosão marinha na praia de Atafona (RJ).",
  },
  {
    title: "Imagens de Atafona",
    description:
      "O acervo visual de duas décadas do projeto Atafona — ciência, extensão e um documentário.",
  },
  {
    title: "Águas Territoriais",
    description:
      "Solução geométrica com amparo legal para os limites oceânicos entre municípios e estados.",
  },
  {
    title: "Mapeamento digital e monitoramento das áreas de mangues",
    description:
      "Mapeamento digital e monitoramento das áreas de mangues do litoral fluminense.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="container-page py-20 sm:py-28">
      <Eyebrow label="Nossos projetos" code="" />

      <h2 className="max-w-2xl font-display text-3xl font-semibold text-ink sm:text-4xl">
        Da estratégia à operação, em cada camada do dado geoespacial
      </h2>

      <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service) => (
          <article key={service.title} className="flex flex-col gap-3 bg-white p-7">
            <span className="h-1.5 w-6 rounded-full bg-contour" aria-hidden="true" />
            <h3 className="font-display text-lg font-semibold text-ink">{service.title}</h3>
            <p className="text-sm leading-relaxed text-slate">{service.description}</p>
          </article>
        ))}
      </div>
      
      <Link
        to="/servicos"
        className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-beacon hover:underline"
      >
        Conheça nossos projetos
        <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" aria-hidden="true">
          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </section>
  );
}
