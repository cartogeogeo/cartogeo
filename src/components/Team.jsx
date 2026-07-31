import { Link } from "react-router-dom";
import Eyebrow from "./Eyebrow";

export default function Team() {
  return (
    <section id="empresa" className="container-page py-20 sm:py-28">
      <Eyebrow label="Quem somos" code="" />

      <p className="max-w-2xl text-slate">
        A CartoGeo nasceu da trajetória do Dr. Gilberto Pessanha Ribeiro, 
        nome de destaque no setor, engenheiro cartógrafo com mais de três décadas de atuação como pesquisador e professor universitário. 
        Pioneira no mapeamento de águas territoriais no Brasil, a empresa une método científico, 
        tecnologia de ponta e uma equipe multidisciplinar para transformar dados geográficos em decisões seguras.
        <br />
        Mais do que entregar mapas, entregamos respostas: soluções cartográficas juridicamente fundamentadas que apoiam a gestão territorial,
        a engenharia, a regularização fundiária e o desenvolvimento sustentável, do litoral ao interior do Brasil.
      </p>
      <Link
        to="/time"
        className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-beacon hover:underline"
      >
        Conheça nossa história
        <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" aria-hidden="true">
          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>

      <div className="mt-12 grid gap-10 rounded-xl border border-line bg-white p-8 sm:grid-cols-[auto,1fr] sm:items-center sm:p-10">
        <div className="h-20 w-20 flex-none rounded-full bg-paper" aria-hidden="true" />
        <div>
          <blockquote className="font-display text-xl font-medium leading-snug text-ink">
            "Três décadas de ciência aplicada ao território — do IBGE à sala de aula, do litoral ao tribunal".
          </blockquote>
          <p className="mt-4 text-sm font-semibold text-slate">
            Dr. Gilberto Pessanha Ribeiro <span className="font-normal text-slate/70">— CEO, cartogeo</span>
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
