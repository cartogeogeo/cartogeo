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
      <img
            src={`${import.meta.env.BASE_URL.replace(/\/$/, "")}/logo-cartogeo-icon-black.svg`}
            alt="CartoGeo"
            className="h-4 w-4 object-contain"
      />
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
