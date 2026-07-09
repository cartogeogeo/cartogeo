import ContourBackground from "./ContourBackground";

const STACK = ["Satélite", "Drones", "Sensores", "Mobilidade", "Clima", "Infraestrutura"];

export default function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden bg-ink text-white">
      <ContourBackground />

      <div className="container-page relative py-24 sm:py-32">
        <div className="flex items-center gap-3 text-white/70">
          <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 text-beacon" fill="none" aria-hidden="true">
            <path d="M8 1V6M8 10V15M1 8H6M10 8H15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
          <span className="font-mono text-xs uppercase tracking-[0.18em]">CartoGeo / Cartografia, Geodésia e Gestão. </span>
        </div>

        <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Cartografia Digital com o uso de tecnologias digitais de Geoprocessamento.
        </h1>

        <p className="mt-6 max-w-xl text-base text-white/75 sm:text-lg">
          Desenvolvimento de atividades comerciais envolvendo consultoria 
          e assessoria, de forma predominante na área de Cartografia Digital.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#contato"
            className="inline-flex items-center gap-2 rounded-md bg-beacon px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-beacon/85"
          >
            Vamos conversar
            <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Faixa de domínios atendidos — substitui o carrossel de ícones do site de referência */}
        <div className="mt-16 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/15 pt-8">
          {STACK.map((item) => (
            <span key={item} className="font-mono text-xs uppercase tracking-[0.14em] text-white/50">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
