import Eyebrow from "./Eyebrow";
import FeatureCard from "./FeatureCard";
import { Link } from "react-router-dom";

const items = [
  {
    id: "01",
    elevation: "3.842m",
    title: "Mapeamento de águas territoriais",
    description:
      "Pioneirismo em limites marítimos e royalties",
    details: [
      "Definição de limites territoriais marítimos com amparo legal, até às 200 milhas náuticas, para a justa redistribuição de royalties de petróleo e gás natural entre municípios e estados.",
    ],
    link: "/servicos#mapeamentodeauguasterritorias",
  },
  {
    id: "02",
    elevation: "1.207m",
    title: "Perícias técnicas e geodésicas",
    description:
      "Precisão que sustenta decisões judiciais",
    details: [
      "Laudos e perícias em geociências, engenharias e meio ambiente para tribunais de justiça e câmaras de arbitragem, com fundamentação científica e conformidade legal.",
    ],
    link: "/servicos#periciatecnicaegeodesicas",
  },
  {
    id: "03",
    elevation: "0.634m",
    title: "Cartografia e mapeamento digital",
    description:
      "Do dado bruto ao mapa que decide",
    details: [
      "Plantas, cartas e mapas temáticos produzidos em sistemas SIG especializados, em escalas variadas, para projetos ambientais, urbanos, de saneamento e de energias renováveis.",
    ],
    link: "/servicos#cartografiaemapeamentodigital",
  },
  {
    id: "04",
    elevation: "2.915m",
    title: "Levantamentos GNSS e drone",
    description:
      "Alta precisão, em campo e no ar",
    details: [
      " Levantamentos geodésicos com receptor GNSS de dupla frequência e mapeamento aéreo com drone, gerando bases cartográficas precisas para engenharia, infraestrutura e regularização fundiária.",
    ],
    link: "/servicos#sensoriamnetoremoto",
  },
  {
    id: "05",
    elevation: "4.876m",
    title: "Regularização fundiária",
    description:
      "Segurança jurídica para a propriedade",
    details: [
      " Georreferenciamento e cadastro territorial em conformidade com a legislação, para órgãos públicos, empresas e proprietários — incluindo REURB e demarcação de territórios quilombolas e indígenas.",
    ],
    link: "/servicos#regularizaçãofundiaria",
  },
  {
    id: "06",
    elevation: "3.888m",
    title: "Engenharia civil",
    description:
      "Geodésia à serviço da obra",
    details: [
      " Levantamentos topográficos e geodésicos de alta precisão para obras e infraestrutura: controle de recalque, auscultação de barragens, instalações industriais, PCH, usinas solares e parques eólicos.",
    ],
    link: "/servicos#engenhariacivil",
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

      <p className="max-w-2xl text-slate">
        <br />
        Também compartilhamos o que sabemos: cursos, palestras técnicas e mentorias com quem lidera projetos de mapeamento digital há mais de três décadas.
      </p>

      <Link
        to="/geoserviçoseducacionais"
        className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-beacon hover:underline"
      >
        Geoserviços educacionais
        <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" aria-hidden="true">
          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </section>
  );
}