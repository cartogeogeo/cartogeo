import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import MapContact from "./Mapcontact";

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

function FooterColumn({ col }) {
  return (
    <div>
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
  );
}

function FooterContactForm() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      )
      .then(() => {
        setStatus("success");
        formRef.current?.reset();
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setStatus("error");
      });
  };

  return (
    <div>
      <h4 className="font-mono text-xs uppercase tracking-[0.14em] text-white/40">
        Fale conosco
      </h4>

      <form ref={formRef} onSubmit={handleSubmit} className="mt-4 space-y-3">
        <div>
          <label htmlFor="footer-name" className="sr-only">
            Nome
          </label>
          <input
            id="footer-name"
            name="user_name"
            type="text"
            required
            placeholder="Seu nome"
            className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/40 outline-none transition-colors focus:border-beacon"
          />
        </div>

        <div>
          <label htmlFor="footer-email" className="sr-only">
            E-mail
          </label>
          <input
            id="footer-email"
            name="user_email"
            type="email"
            required
            placeholder="seu@email.com"
            className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/40 outline-none transition-colors focus:border-beacon"
          />
        </div>

        <div>
          <label htmlFor="footer-message" className="sr-only">
            Mensagem
          </label>
          <textarea
            id="footer-message"
            name="message"
            required
            rows={3}
            placeholder="Sua mensagem"
            className="w-full resize-none rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/40 outline-none transition-colors focus:border-beacon"
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full rounded-md bg-white px-4 py-2 text-sm font-medium text-ink transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {status === "sending" ? "Enviando..." : "Enviar mensagem"}
        </button>

        {status === "success" && (
          <p className="text-xs text-white/70">Mensagem enviada com sucesso!</p>
        )}
        {status === "error" && (
          <p className="text-xs text-red-300">
            Não foi possível enviar. Tente novamente.
          </p>
        )}
      </form>
    </div>
  );
}

export default function Footer() {
  const [empresaCol, ...restColumns] = COLUMNS;

  return (
    <footer className="bg-ink text-white/70">
      <div className="container-page grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.3fr,0.9fr,0.7fr,0.7fr,0.7fr]">
        <div>
          <a href="#topo" className="flex items-center gap-2 font-display text-lg font-semibold text-white">
            <img
              src={`${import.meta.env.BASE_URL.replace(/\/$/, "")}/logo-cartogeo-icon-white.svg`}
              alt="CartoGeo"
              className="h-4 w-4 object-contain"
            />
            CartoGeo
          </a>
          <p className="mt-4 max-w-xs text-sm">
            Cartografia e Geodésia — conhecimento que transforma territórios.
          </p>
          <p className="mt-4 max-w-xs text-sm">
            Consultoria e assessoria especializada em Cartografia Digital, Geodésia e Geotecnologias. Sede em João Pessoa (PB), atendimento em todo o Brasil.
          </p>
          <p className="mt-4 max-w-xs text-sm">
            Av. Cabo Branco, 1.780, Loja 12 — Cabo Branco, João Pessoa - PB · CEP 58.045-010
          </p>
          <MapContact />
          <div className="mt-6 flex gap-4">
            <a href="#" aria-label="LinkedIn" className="text-white/60 hover:text-white">
              in
            </a>
            <a href="#" aria-label="Instagram" className="text-white/60 hover:text-white">
              ig
            </a>
          </div>
        </div>

        <FooterContactForm />

        <FooterColumn col={empresaCol} />

        {restColumns.map((col) => (
          <FooterColumn key={col.title} col={col} />
        ))}
      </div>

      <div className="container-page flex flex-col gap-2 border-t border-white/10 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} CartoGeo — Marca registrada no INPI · CNPJ 66.267.234/0001-08</p>
        <p>Mapas que pensam.</p>
      </div>
    </footer>
  );
}