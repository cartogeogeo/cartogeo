/**
 * Eyebrow / marca de referência.
 *
 * Elemento de assinatura visual da cartogeo: uma pequena mira (cruz),
 * como uma marca de cota em carta topográfica, seguida de um rótulo
 * em monoespaçada com tracking largo. Usado no topo de cada seção
 * para criar um fio condutor visual consistente.
 *
 * @param {string} label - texto curto do rótulo (ex: "SERVIÇOS")
 * @param {string} code  - código curto opcional, estilo "referência de mapa" (ex: "B2")
 * @param {"light"|"dark"} tone - ajusta a cor para fundos claros ou escuros
 */
export default function Eyebrow({ label, code, tone = "light" }) {
  const colorClass = tone === "dark" ? "text-white/70" : "text-slate";
  const lineClass = tone === "dark" ? "bg-white/30" : "bg-line";

  return (
    <div className={`mb-4 flex items-center gap-3 ${colorClass}`}>
      <svg
        className="ref-mark flex-none"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M8 1V6M8 10V15M1 8H6M10 8H15"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
      <span className="font-mono text-xs uppercase tracking-[0.18em]">
        {label}
      </span>
      {code && (
        <>
          <span className={`h-px w-6 ${lineClass}`} />
          <span className="font-mono text-xs tracking-widest">{code}</span>
        </>
      )}
    </div>
  );
}
