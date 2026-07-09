import { useState } from "react";
import { Link } from "react-router-dom";

export default function FeatureCard({
  id,
  elevation,
  title,
  description,
  details = [],
  link = "/servicos",
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
      aria-label={`${title}, ${flipped ? "mostrando detalhes" : "toque para ver detalhes"}`}
      onClick={() => setFlipped((f) => !f)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setFlipped((f) => !f);
        }
      }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      className="group cursor-pointer [perspective:1200px] focus:outline-none"
    >
      <div
        className="relative h-72 w-full transition-transform duration-500 ease-out
                   [transform-style:preserve-3d] focus-visible:ring-2 focus-visible:ring-beacon"
        style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        {/* FRENTE */}
        <div
          className={`absolute inset-0 overflow-hidden rounded-sm border bg-paper p-6
                     [backface-visibility:hidden] transition-colors duration-300
                     ${flipped ? "border-beacon" : "border-line"}`}
        >
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.08]"
            viewBox="0 0 300 300"
            fill="none"
          >
            <circle cx="230" cy="60" r="40" stroke="currentColor" strokeWidth="1" className="text-contour" />
            <circle cx="230" cy="60" r="70" stroke="currentColor" strokeWidth="1" className="text-contour" />
            <circle cx="230" cy="60" r="100" stroke="currentColor" strokeWidth="1" className="text-contour" />
            <circle cx="230" cy="60" r="130" stroke="currentColor" strokeWidth="1" className="text-contour" />
          </svg>

          <div className="relative flex items-center justify-between font-mono text-xs text-slate">
            <span>{id}</span>
            <span className={`transition-colors duration-300 ${flipped ? "text-beacon" : "text-slate"}`}>
              {elevation}
            </span>
          </div>

          <h3 className="relative mt-4 font-display text-lg text-ink">
            {title}
          </h3>

          <p className="relative mt-2 text-sm leading-relaxed text-slate">
            {description}
          </p>

          <div className="absolute bottom-6 left-6 flex items-center gap-1.5 text-xs text-slate">
            <span>Toque para ver mais</span>
            <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* VERSO */}
        <div
          className="absolute inset-0 flex flex-col overflow-hidden rounded-sm border border-beacon
                     bg-ink p-6 [backface-visibility:hidden] [transform:rotateY(180deg)]"
        >
          <div className="flex items-center justify-between font-mono text-xs text-paper/60">
            <span>{id}</span>
            <span className="text-beacon">{elevation}</span>
          </div>

          <h3 className="mt-4 font-display text-base text-paper">
            {title}
          </h3>

          <ul className="mt-4 space-y-2.5">
            {details.map((detail, i) => (
              <li key={i} className="flex items-start gap-2 text-sm leading-snug text-paper/80">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-beacon" />
                {detail}
              </li>
            ))}
          </ul>

          <Link
            to={link}
            onClick={(e) => e.stopPropagation()}
            className="mt-auto inline-flex w-fit items-center gap-2 pt-4 text-sm font-semibold text-beacon hover:underline"
          >
            Saiba mais
            <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}