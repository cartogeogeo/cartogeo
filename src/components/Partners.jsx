import Eyebrow from "./Eyebrow";

import logoNupec from "../assets/logo-nupec.webp"
import logoCepeg from "../assets/logo-cepeg.webp"
import logoLpsau from "../assets/logo-lpsau.webp"
import logoIds from "../assets/logo-ids.webp"
import logoGeoOne from "../assets/logo-geoone.webp"

const PARTNERS = [
  {
    logo: logoNupec,
    name: "NUPEC",
    fullName: "Núcleo Universitário de Pesquisas, Estudos e Consultoria",
    url: "http://www.nupec.org/",
  },
  {
    logo: logoCepeg,
    name: "CEPEG",
    fullName: "Centro de Meio Ambiente, Energia, Petróleo e Gás Natural",
    url: "https://cepeg.org/",
  },
  {
    logo: logoLpsau,
    name: "LPSAU",
    fullName: "Laboratório de Pesquisa em Sistemas Ambientais Urbanos",
    url: "https://www.ct.ufpb.br/lpsau/",
  },
  {
    logo: logoIds,
    name: "IDS",
    fullName: "Innovation Development Services",
    url: "https://idscontadores.com.br/",
  },
  {
    logo: logoGeoOne,
    name: "GeoOne",
    url: "https://geoone.com.br/",
  },
];

export default function Partners() {
  return (
    <section id="parceiros" className="container-page py-20 sm:py-28">
      <Eyebrow label="Parceiros" code="" />

      <p className="max-w-2xl text-slate">
        Instituições e empresas que caminham conosco.
      </p>

      <h3 className="mt-12 font-display text-2xl font-semibold text-ink">Nossos parceiros</h3>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PARTNERS.map((partner) => {
          const Wrapper = partner.url ? "a" : "div";
          const linkProps = partner.url
            ? {
                href: partner.url,
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": `Visitar o site do parceiro ${partner.name}`,
              }
            : {};

          return (
            <Wrapper
              key={partner.name}
              {...linkProps}
              className={`flex h-32 items-center justify-center rounded-xl border border-line bg-white p-6 ${
                partner.url
                  ? "transition hover:border-beacon hover:shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-beacon"
                  : ""
              }`}
            >
              <img
                src={partner.logo}
                alt={partner.fullName ? `${partner.name} — ${partner.fullName}` : partner.name}
                className="max-h-full max-w-full object-contain"
                loading="lazy"
              />
            </Wrapper>
          );
        })}
      </div>
    </section>
  );
}