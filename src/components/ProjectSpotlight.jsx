import Eyebrow from "./Eyebrow";
import { Link } from "react-router-dom";

export default function ProjectSpotlight() {
  return (
    <section id="projeto" className="bg-ink text-white">
      <div className="container-page grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-2">
        <div>
          <Eyebrow label="Projetos" code="" tone="dark" />
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Projetos que falam por nós
          </h2>
          <p className="mt-5 max-w-md text-white/75">
            Da erosão costeira em Atafona ao mapeamento digital da planície Quaternária do rio Paraíba do Sul : cases que mostram o método científico aplicado a desafios reais.
          </p>
          <p className="mt-5 max-w-md text-white/75">
            Erosão costeira em Atafona (RJ). Referência nacional no monitoramento de processos costeiros, com levantamentos GNSS e mapeamento dinâmico de dunas.
          </p>
          <p className="mt-5 max-w-md text-white/75">
            Águas territoriais e royalties. Solução geométrica com amparo legal para os limites oceânicos entre municípios e estados brasileiros.
          </p>
          <p className="mt-5 max-w-md text-white/75">
            Complexo Industrial e Portuário do Açu. Mapeamento digital da planície Quaternária do rio Paraíba do Sul e efeitos do empreendimento
             do Complexo Industrial e Portuário do Açu (CIPA) sobre os ambientes costeiros no norte fluminense.
          </p>
        <Link
          to="/projetos"
          className="mt-7 inline-flex items-center gap-2 rounded-md border border-white/25 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white/60"
        >
          Ver todos os projetos
          <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
        </div>

        {/* Placeholder visual — substitua por um mockup/captura do projeto */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-white/5">
          <svg viewBox="0 0 400 300" className="h-full w-full opacity-60" fill="none" aria-hidden="true">
            <g stroke="#3C6E55" strokeWidth="1">
              <path d="M0 220 C 80 190, 160 240, 240 200 C 300 175, 360 220, 400 190" />
              <path d="M0 170 C 90 150, 170 190, 250 160 C 310 140, 360 170, 400 150" />
              <path d="M0 120 C 90 105, 180 135, 260 110 C 320 95, 365 115, 400 105" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
