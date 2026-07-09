import { Link } from "react-router-dom";
import Eyebrow from "./Eyebrow";

const CATEGORIES = [
  "Todos",
  "Projetos",
  "Observações",
  "Experimentos",
  "Tutoriais",
  "Atualizações",
];

const FEATURED_POST = {
  category: "Projetos",
  title: "Como estruturamos um monitoramento contínuo de área com dados de satélite",
  excerpt:
    "Um retrato de como desenhamos, do zero, um pipeline de observação da Terra capaz de gerar alertas confiáveis para um cliente do agronegócio.",
  author: "Nome do Autor",
  date: "18 jun 2026",
};

const POSTS = [
  {
    category: "Projetos",
    title: "Estudo de caso: levantamento GNSS em área de difícil acesso",
    author: "Nome do Autor",
    date: "10 jun 2026",
  },
  {
    category: "Atualizações",
    title: "Novidades na nossa plataforma de processamento de imagens",
    author: "Nome do Autor",
    date: "05 jun 2026",
  },
  {
    category: "Observações",
    title: "O que os dados geoespaciais revelam sobre mudanças climáticas",
    author: "Nome do Autor",
    date: "27 mai 2026",
  },
  {
    category: "Tutoriais",
    title: "Como montar um pipeline STAC para imagens de satélite",
    author: "Nome do Autor",
    date: "21 mai 2026",
  },
  {
    category: "Experimentos",
    title: "Testando modelos de detecção de mudanças em áreas urbanas",
    author: "Nome do Autor",
    date: "08 mai 2026",
  },
  {
    category: "Projetos",
    title: "Bastidores da implantação de uma rede geodésica municipal",
    author: "Nome do Autor",
    date: "22 abr 2026",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="container-page pb-16 pt-28 sm:pb-20 sm:pt-32">
        <Eyebrow label="Blog" code="01" />

        <h1 className="mt-4 max-w-3xl font-display text-3xl font-semibold leading-tight text-ink sm:text-5xl">
          Observações, projetos e bastidores do trabalho geoespacial.
        </h1>

        <p className="mt-6 max-w-2xl text-slate">
          Registros do que aprendemos construindo software geoespacial no dia
          a dia — do campo ao dado processado, passando pelos experimentos
          que nem sempre chegam ao produto final.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {CATEGORIES.map((category, index) => (
            <button
              key={category}
              type="button"
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                index === 0
                  ? "border-ink bg-ink text-white"
                  : "border-line text-slate hover:border-ink hover:text-ink"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Post em destaque */}
      <section className="container-page pb-16 sm:pb-20">
        <a
          href="#"
          className="group grid gap-6 overflow-hidden rounded-xl border border-line bg-white p-6 sm:grid-cols-2 sm:p-8"
        >
          <div className="aspect-[4/3] rounded-lg bg-line" aria-hidden="true" />
          <div className="flex flex-col justify-center">
            <span className="font-mono text-xs uppercase tracking-[0.14em] text-contour">
              {FEATURED_POST.category}
            </span>
            <h2 className="mt-3 font-display text-2xl font-semibold leading-snug text-ink group-hover:text-beacon sm:text-3xl">
              {FEATURED_POST.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate">
              {FEATURED_POST.excerpt}
            </p>
            <p className="mt-4 text-sm text-slate">
              {FEATURED_POST.author} · {FEATURED_POST.date}
            </p>
          </div>
        </a>
      </section>

      {/* Grid de posts */}
      <section className="container-page pb-20 sm:pb-28">
        <div className="grid gap-8 sm:grid-cols-3">
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

      <section className="container-page pb-20 sm:pb-28">
        <div className="rounded-xl border border-line bg-white p-8 sm:p-12">
          <Eyebrow label="Vamos conversar" code="02" />
          <h2 className="mt-4 max-w-xl font-display text-2xl font-semibold text-ink sm:text-3xl">
            Faça a localização trabalhar a favor da sua operação
          </h2>
          <p className="mt-4 max-w-xl text-slate">
            Desenvolvemos pipelines de dados, análises e sistemas geoespaciais
            que geram inteligência real sobre a sua operação.
          </p>
          <a
            href="/#contato"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-ink px-5 py-2.5 text-sm font-semibold text-white hover:bg-beacon"
          >
            Fale com a gente
            <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" aria-hidden="true">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </section>

      <section className="container-page pb-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate hover:text-ink"
        >
          <svg viewBox="0 0 16 16" className="h-4 w-4 rotate-180" fill="none" aria-hidden="true">
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Voltar para a página inicial
        </Link>
      </section>
    </>
  );
}
