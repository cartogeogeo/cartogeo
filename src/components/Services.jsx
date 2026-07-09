import Eyebrow from "./Eyebrow";

const SERVICES = [
  {
    title: "Consultoria Estratégica",
    description:
      "Ajudamos a alinhar tecnologia geoespacial, IA e fluxos operacionais para reduzir complexidade e melhorar a tomada de decisão.",
  },
  {
    title: "Observação da Terra & Sistemas de Dados",
    description:
      "Transformamos dados de satélite, sensores e IoT fragmentados em sistemas geoespaciais confiáveis para monitoramento e análise.",
  },
  {
    title: "IA & Analytics",
    description:
      "Aplicamos analytics espacial, machine learning e visão computacional para identificar padrões e gerar inteligência operacional.",
  },
  {
    title: "Engenharia de Cloud & Plataforma",
    description:
      "Modernizamos infraestrutura geoespacial legada com plataformas cloud-native, APIs e automações que melhoram desempenho e manutenção.",
  },
  {
    title: "Inteligência Operacional",
    description:
      "Desenvolvemos aplicações de suporte à decisão que ajudam equipes a responder mais rápido e agir com confiança em tempo real.",
  },
  {
    title: "Operação Geoespacial Gerenciada",
    description:
      "Suporte contínuo, otimização e gestão operacional de sistemas geoespaciais para escalar sem aumentar a complexidade interna.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="container-page py-20 sm:py-28">
      <Eyebrow label="Nossos serviços" code="" />

      <h2 className="max-w-2xl font-display text-3xl font-semibold text-ink sm:text-4xl">
        Da estratégia à operação, em cada camada do dado geoespacial.
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
    </section>
  );
}
