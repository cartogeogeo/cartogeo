import Eyebrow from "./Eyebrow";
import FeatureCard from "./FeatureCard";
import { Link } from "react-router-dom";

const items = [
  {
    id: "01",
    elevation: "3.842m",
    title: "GNSS de precisão",
    description:
      "Posicionamento centimétrico para levantamentos que exigem exatidão absoluta.",
    details: [
      "Rede de estações base RTK",
      "Pós-processamento PPK",
      "Monitoramento contínuo de deformação",
      "Precisão horizontal de até 1cm",
    ],
    link: "/servicos#gnss",
  },
  {
    id: "02",
    elevation: "1.207m",
    title: "LiDAR aéreo",
    description:
      "Nuvens de pontos de alta densidade para modelagem tridimensional do terreno.",
    details: [
      "Captura com drone ou aeronave",
      "Densidade de até 100 pts/m²",
      "Classificação automática de solo",
      "Geração de MDT e MDS",
    ],
    link: "/servicos#lidaraereo",
  },
  {
    id: "03",
    elevation: "0.634m",
    title: "Geoprocessamento",
    description:
      "Análise espacial e integração de dados em plataformas SIG customizadas.",
    details: [
      "Modelagem de bases geoespaciais",
      "Automação de análises espaciais",
      "Integração com SIG corporativo",
      "Dashboards e webmaps sob medida",
    ],
    link: "/servicos#geoprocessamento",
  },
  {
    id: "04",
    elevation: "2.915m",
    title: "Sensoriamento remoto",
    description:
      "Monitoramento por satélite para agricultura, meio ambiente e infraestrutura.",
    details: [
      "Séries temporais multiespectrais",
      "Detecção de mudanças no uso do solo",
      "Índices de vegetação (NDVI e outros)",
      "Alertas automatizados de anomalias",
    ],
    link: "/servicos#sensoriamnetoremoto",
  },
];

export default function Intro() {
  return (
    <section className="container-page py-20 sm:py-28">
      <Eyebrow label="O que fazemos" code="" />

      <p className="max-w-3xl font-display text-2xl font-medium leading-snug text-ink sm:text-3xl">
        Soluções completas em Cartografia Digital, Geodésia e Geoprocessamento — da coleta do dado em campo ao mapa que sustenta a decisão.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <FeatureCard key={item.id} {...item} />
        ))}
      </div>

      <Link
        to="/servicos"
        className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-beacon hover:underline"
      >
        Conheça nossos serviços
        <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" aria-hidden="true">
          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </section>
  );
}