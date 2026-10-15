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
      { label: "Política de Privacidade", href: "/cartogeo/#politicadeprivacidade" },
      { label: "Código de Ética e Conduta", href: "/cartogeo/#codigodeconduta" },
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

const SERVICES = [
  "Consultoria Especializada",
  "Engenharia Civil",
  "Geoserviços Educacionais",
  "Mentorias",
];

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
  const fieldClass =
    "w-full rounded-lg border border-transparent bg-white px-4 py-3 text-base text-ink placeholder-slate-400 outline-none transition-shadow focus:border-beacon focus:ring-2 focus:ring-beacon/40";

  return (
    <div>
    <h4 className="group relative inline-block pb-2 font-display text-2xl font-semibold text-white">
  Fale conosco
  <span
    className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-beacon transition-all duration-300 ease-out group-hover:w-full"
    aria-hidden="true"
  />
</h4>
  <p className="mt-3 text-sm text-white/100">
          Conte sobre o seu projeto e retornamos em breve.
  </p>

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
            className={fieldClass}
            
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
            placeholder="Email"
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="footer-email" className="sr-only">
            Empresa
          </label>
          <input
            id="footer-empresa"
            name="user_empresa"
            type="empresa"
            required
            placeholder="Empresa"
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="footer-service" className="sr-only">
            Tipo de serviço
          </label>
          <select
            id="footer-service"
            name="service_type"
            required
            defaultValue=""
            className={`${fieldClass} appearance-none bg-[length:1.25rem] bg-[right_1rem_center] bg-no-repeat invalid:text-slate-400`}
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%2364748b'%3E%3Cpath fill-rule='evenodd' d='M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z' clip-rule='evenodd'/%3E%3C/svg%3E\")",
            }}
          >
            <option value="" disabled>
              Tipo de serviço
            </option>
            {SERVICES.map((service) => (
              <option key={service} value={service} className="text-ink">
                {service}
              </option>
            ))}
          </select>
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
            className={`${fieldClass} resize-none`}
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full rounded-lg bg-beacon px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-beacon/30 transition-all hover:-translate-y-0.5 hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ink disabled:translate-y-0 disabled:opacity-50"
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
            <a
              href="https://br.linkedin.com/company/cartogeo-org?trk=public_post_follow-view-profile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="opacity-60 hover:opacity-100 transition-opacity"
            >
              <img src={`${import.meta.env.BASE_URL.replace(/\/$/, "")}/linkedin-48.svg`} alt="LinkedIn" width="20" height="20" />
            </a>

            <a
              href="https://www.instagram.com/cartogeo_org?stkn=MW80bjUxb2x6cm1tZA=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="opacity-60 hover:opacity-100 transition-opacity"
            >
              <img src={`${import.meta.env.BASE_URL.replace(/\/$/, "")}/instagram-48.svg`} alt="Instagram" width="20" height="20" />
            </a>

            <a
              href="https://www.youtube.com/@cartogeo_org"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="opacity-60 hover:opacity-100 transition-opacity"
            >
              <img src={`${import.meta.env.BASE_URL.replace(/\/$/, "")}/youtube-48.svg`} alt="YouTube" width="20" height="20" />
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