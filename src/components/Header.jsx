import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const NAV_LINKS = [
  { label: "Empresa", href: "#empresa" },
  { label: "Serviços", href: "#servicos" },
  { label: "Parceiros", href: "#parceiros" },
  { label: "Projetos", href: "#projeto" },
  { label: "Blog", href: "#blog" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Sólido quando rolou a página OU quando o menu mobile está aberto
  // (evita texto claro sobre o painel de menu, que é sempre opaco).
  const { pathname } = useLocation();
  const solid = scrolled || open || pathname !== "/";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "border-b border-line bg-paper/90 backdrop-blur" : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <a
          href="#topo"
          className={`flex items-center gap-2 font-display text-lg font-semibold transition-colors duration-300 ${
            solid ? "text-ink" : "text-white"
          }`}
        >
          <svg viewBox="0 0 16 16" className="h-4 w-4 text-beacon" fill="none" aria-hidden="true">
            <path d="M8 1V6M8 10V15M1 8H6M10 8H15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
          CartoGeo
        </a>

        {/* Navegação — desktop */}
        <nav className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`group relative inline-block py-1 text-sm font-medium tracking-wide transition-colors duration-300 ${
                solid ? "text-slate hover:text-ink" : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-0.5 left-0 h-px w-0 transition-all duration-300 ease-out group-hover:w-full ${
                  solid ? "bg-beacon" : "bg-white"
                }`}
                aria-hidden="true"
              />
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className={`hidden rounded-md px-4 py-2 text-sm font-semibold transition-colors duration-300 md:inline-flex ${
            solid
              ? "bg-ink text-white hover:bg-beacon"
              : "border border-white/40 text-white hover:border-white hover:bg-white/10"
          }`}
        >
          Vamos conversar
        </a>

        {/* Botão menu — mobile */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`inline-flex h-9 w-9 items-center justify-center rounded-md border transition-colors duration-300 md:hidden ${
            solid ? "border-line text-ink" : "border-white/40 text-white"
          }`}
          aria-label="Abrir menu de navegação"
          aria-expanded={open}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {/* Navegação — mobile (sempre sólida, independente do scroll) */}
      {open && (
        <nav className="border-t border-line bg-paper md:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm font-medium text-slate hover:bg-line/40 hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-ink px-4 py-2 text-center text-sm font-semibold text-white"
            >
              Vamos conversar
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
