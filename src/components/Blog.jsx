import Eyebrow from "./Eyebrow";
import { Link } from "react-router-dom";

const POSTS = [
  {
    category: "Projetos",
    title: "Título do post — estudo de caso de cliente",
    author: "Nome do Autor",
    date: "10 jun 2026",
  },
  {
    category: "Produto",
    title: "Título do post — novidade de produto",
    author: "Nome do Autor",
    date: "05 jun 2026",
  },
  {
    category: "Geoespacial",
    title: "Título do post — tendência do setor",
    author: "Nome do Autor",
    date: "27 mai 2026",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="container-page py-20 sm:py-28">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <Eyebrow label="Últimos posts" code="" />
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">Do blog da cartogeo</h2>
        </div>
        <Link to="/blog" className="text-sm font-semibold text-beacon hover:underline">
          Ver todos os posts
        </Link>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-3">
        {POSTS.map((post) => (
          <article key={post.title} className="group">
            <div className="aspect-[4/3] rounded-xl bg-line" aria-hidden="true" />
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
