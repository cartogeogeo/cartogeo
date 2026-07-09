import { Link } from "react-router-dom";
import Eyebrow from "./Eyebrow";

export default function Team() {
  return (
    <section id="empresa" className="container-page py-20 sm:py-28">
      <Eyebrow label="Quem somos" code="" />

      <p className="max-w-2xl text-slate">
        A cartogeo é formada por gente que se dedica a tecnologia geoespacial
        em profundidade. Trabalhamos lado a lado com nossos clientes,
        oferecendo expertise que raramente existe internamente — com escuta
        atenta e liberdade para propor a solução certa, e não a mais óbvia.
      </p>

      <div className="mt-12 grid gap-10 rounded-xl border border-line bg-white p-8 sm:grid-cols-[auto,1fr] sm:items-center sm:p-10">
        <div className="h-20 w-20 flex-none rounded-full bg-paper" aria-hidden="true" />
        <div>
          <blockquote className="font-display text-xl font-medium leading-snug text-ink">
            "Nosso trabalho começa onde o mapa para de ser imagem e passa a
            ser decisão. É aí que a cartogeo entra."
          </blockquote>
          <p className="mt-4 text-sm font-semibold text-slate">
            Nome do Fundador <span className="font-normal text-slate/70">— CEO, cartogeo</span>
          </p>
        </div>
      </div>

      <Link
        to="/time"
        className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-beacon hover:underline"
      >
        Conheça o time
        <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" aria-hidden="true">
          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </section>
  );
}
