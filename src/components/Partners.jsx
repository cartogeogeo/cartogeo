import Eyebrow from "./Eyebrow";

// Nomes fictícios — substitua pelos parceiros reais e seus logos.
const PARTNERS = [
  {
    initials: "GC",
    name: "GeoCloud",
    description:
      "Fornece infraestrutura de mapas e tiles para clientes com requisitos variados de escala e implementação.",
  },
  {
    initials: "OD",
    name: "OrbitalData",
    description:
      "Plataforma de computação em nuvem sob demanda para armazenamento e processamento de dados geoespaciais.",
  },
  {
    initials: "MW",
    name: "MapWorks",
    description:
      "Constelação de observação da Terra com imagens de alta frequência e resolução para análise contínua.",
  },
];

export default function Partners() {
  return (
    <section id="parceiros" className="container-page py-20 sm:py-28">
      <Eyebrow label="Como fazemos" code="A4" />

      <p className="max-w-2xl text-slate">
        Não é preciso construir tudo sozinho. Empresas de diversos setores nos
        chamam para somar expertise geoespacial à sua operação — parcerias que
        trazem conhecimento técnico atualizado e resultados compartilhados.
      </p>

      <h3 className="mt-12 font-display text-2xl font-semibold text-ink">Nossos parceiros</h3>

      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        {PARTNERS.map((partner) => (
          <article key={partner.name} className="rounded-xl border border-line bg-white p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-paper font-mono text-xs font-semibold text-slate">
              {partner.initials}
            </div>
            <h4 className="mt-4 font-display text-base font-semibold text-ink">{partner.name}</h4>
            <p className="mt-2 text-sm leading-relaxed text-slate">{partner.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
