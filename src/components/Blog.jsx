import Eyebrow from "./Eyebrow";
import { Link } from "react-router-dom";
import destrocosAtafona from "../assets/Destrocos-Atafona.webp";
import receptorAltusAps3 from "../assets/Receptor-Altus-Aps-3.webp";
import entrevistaDocumentario from "../assets/Entrevista-Documentario.webp";

const POSTS = [
  {
    category: "Projetos",
    title: "Remanescentes de casas na frente erosiva em Atafona.",
    author: "Gilberto Pessanha",
    date: "10 jun 2026",
    image: destrocosAtafona,
  },
  {
    category: "Geoespacial",
    title: "Receptor Altus APS-3 na praia de Atafona durante medições geodésicas da linha de falésia.",
    author: "Gilberto Pessanha",
    date: "05 jun 2026",
    image: receptorAltusAps3,
  },
  {
    category: "Produto",
    title: "Entrevista para a TV local com equipe de produção do documentário ficcional Atafona por quê?",
    author: "Gilberto Pessanha",
    date: "27 mai 2026",
    image: entrevistaDocumentario,
  },
];

export default function Blog() {
  return (
    <section id="blog" className="container-page py-20 sm:py-28">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <Eyebrow label="Últimos posts" code="" />
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">Conteúdo</h2>
        </div>
        <Link to="/blog" className="text-sm font-semibold text-beacon hover:underline">
          Ver todos os posts
        </Link>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-3">
        {POSTS.map((post) => (
          <article key={post.title} className="group">
            <div className="aspect-[4/3] overflow-hidden rounded-xl bg-line">
              <img
                src={post.image}
                alt={post.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <span className="mt-4 inline-block font-mono text-xs uppercase tracking-[0.14em] text-contour">
              {post.category}
            </span>
            <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-ink group-hover:text-beacon">
              <a href="#">{post.title}</a>
            </h3>
            <p className="mt-2 text-sm text-slate">
              {post.author} · {post.date}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}