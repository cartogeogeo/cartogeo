import Eyebrow from "./Eyebrow";
import { Link } from "react-router-dom";

export default function Intro() {
  return (
    <section className="container-page py-20 sm:py-28">
      <Eyebrow label="O que fazemos" code="" />

      <p className="max-w-3xl font-display text-2xl font-medium leading-snug text-ink sm:text-3xl">
        A cartogeo desenvolve software geoespacial sob medida para empresas que
        dependem de localização para operar — unindo engenharia, dados e
        cartografia para reduzir a distância entre o mapa e a decisão.
      </p>

      <Link
        to="/servicos"
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-beacon hover:underline"
      >
        Conheça nossos serviços
        <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" aria-hidden="true">
          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </section>
  );
}
