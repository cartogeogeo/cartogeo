const COLUMNS = [
  {
    title: "Empresa",
    links: [
      { label: "Sobre", href: "#empresa" },
      { label: "Carreiras", href: "#" },
    ],
  },
  {
    title: "Navegação",
    links: [
      { label: "Serviços", href: "#servicos" },
      { label: "Parceiros", href: "#parceiros" },
      { label: "Contato", href: "#contato" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Política de Privacidade", href: "#" },
      { label: "Código de Conduta", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="container-page grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr,1fr,1fr,1fr]">
        <div>
          <a href="#topo" className="flex items-center gap-2 font-display text-lg font-semibold text-white">
            <svg viewBox="0 0 16 16" className="h-4 w-4 text-beacon" fill="none" aria-hidden="true">
              <path d="M8 1V6M8 10V15M1 8H6M10 8H15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
            CartoGeo
          </a>
          <p className="mt-4 max-w-xs text-sm">
            Consultoria, desenvolvimento de software e ciência de dados
            geoespaciais para a sua equipe.
          </p>
          <div className="mt-6 flex gap-4">
            <a href="#" aria-label="LinkedIn" className="text-white/60 hover:text-white">
              in
            </a>
            <a href="#" aria-label="Instagram" className="text-white/60 hover:text-white">
              ig
            </a>
          </div>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h4 className="font-mono text-xs uppercase tracking-[0.14em] text-white/40">{col.title}</h4>
            <ul className="mt-4 space-y-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="container-page flex flex-col gap-2 border-t border-white/10 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} CartoGeo. Todos os direitos reservados.</p>
        <p>Mapas que pensam.</p>
      </div>
    </footer>
  );
}
