import { Link } from "react-router-dom";
import Eyebrow from "./Eyebrow";

import gilberto from "../assets/team/Gilberto_camiseta_branca_sorrindo.webp";
import abraao from "../assets/team/Abraão_Nóbrega.webp";
import andre from "../assets/team/André_Victor.webp";
import anthony from "../assets/team/Anthony.webp";
import bruno from "../assets/team/Bruno_Xavier.webp";
import carolinac from "../assets/team/Carolina_Clemens.webp";
import carolinaf from "../assets/team/Carolina_Ferreira.webp";
import carolinag from "../assets/team/Carolina_Galvanese.webp";
import cecilia from "../assets/team/Cecília_Alarsa.webp";
import cicero  from "../assets/team/Cícero_Ramos.webp";
import cinthia from "../assets/team/Cinthia.webp";
import cristiane from "../assets/team/Cristiane-Magalhaes.webp";
import daria from "../assets/team/Dária_Cardoso_2.webp";
import douglas from "../assets/team/Douglas_Schimatto4.webp";
import fabiana from "../assets/team/Fabiana_2.webp";
import fernando from "../assets/team/Fernando_Henrique_Mamédio.webp";
import flavia from "../assets/team/Flavia_Piovani.webp";
import giselly from "../assets/team/Giselly.webp";
import guilherme from "../assets/team/Guilherme_Brito.webp";
import igor from "../assets/team/Igor_Teixeira.webp";
import irineu from "../assets/team/Irineu_dos_Santos.webp";
import isabelac from "../assets/team/Isabela_Cavalcanti_Martins.webp";
import isabelan from "../assets/team/Isabela_Nogueira.webp";
import isabelas from "../assets/team/Isabela_Nogueira_da_Silva.webp";
import jhonnes from "../assets/team/Jhonnes_Alberto_Vaz.webp";
import joao from "../assets/team/João_Ruben_Ramos_Leite.webp";
import jose from "../assets/team/José_Luiz_da_Silva_Neto.webp";
import johanssen from "../assets/team/Johanssen_Lobo.webp";
import leandro from "../assets/team/Leandro_Viana.webp";
import manoel from "../assets/team/Manoel_Luis.webp";
import mariab from "../assets/team/Maria_Beatriz_Pizzo.webp";
import mariao from "../assets/team/Maria_de_Oliveira.webp";
import mariar from "../assets/team/Maria_Rosane_Ribeiro.webp";
import mariana from "../assets/team/Mariana_Penido.webp";
import mateus from "../assets/team/Mateus_Duarte.webp";
import mateuss from "../assets/team/Mateus_Sampaio.webp";
import matheus from "../assets/team/Matheus_Martins.webp";
import osmane from "../assets/team/Osmane_Ribeiro.webp";
import paulo from "../assets/team/Paulo_Rodrigo.webp";
import pedroh from "../assets/team/Pedro_Henrique_Silva.webp";
import pedroi from "../assets/team/Pedro_Ivo_Valdez.webp";
import sandoval from "../assets/team/Sandoval_Amparo.webp";
import sergio from "../assets/team/Sérgio_Botton.webp";
import uendri from "../assets/team/Uendry_Maia.webp";
import veronica from "../assets/team/Verioní_4.webp";
import vinicius from "../assets/team/Vinnícius_Dionísio.webp";



// Substitua pelos nomes, cargos e fotos reais do time.
// `image` deve apontar para o caminho da foto (ex.: import ou "/team/nome.webp").
// Se `image` ficar vazio/undefined, o card exibe um placeholder.


const TEAM = [
  { name: "Dr. Gilberto Pessanha Ribeiro", role: "Fundador & CEO", image: gilberto, linkedin: "https://www.linkedin.com/in/gilberto-pessanha-ribeiro-42a189264/" },
  { name: "Abraão Nóbrega", role: "Arquiteto e Urbanista", image: abraao, linkedin: "https://www.linkedin.com/in/abra%C3%A3o-n%C3%B3brega-2032a9321/" },
  { name: "André Victor Barcia", role: "Geógrafo", image: andre, linkedin: "https://www.linkedin.com/in/andrevictorbarcia/" },
  { name: "Anthony Andrey Ramalho", role: "Engenheiro de Petróleo", image: anthony, linkedin: "" },
  { name: "Bruno Xavier", role: "Biólogo", image: bruno, linkedin: "https://www.linkedin.com/in/bruno-xavier-88971a237/" },
  { name: "Carolina Clemens", role: "Internacionalista", image: carolinac, linkedin: "https://www.linkedin.com/in/carolina-clemens/" },
  { name: "Carolina Ferreira", role: "Engenheira Ambiental e Sanitarista", image: carolinaf, linkedin: "https://www.linkedin.com/in/carolinaferreirapenteado/" },
  { name: "Carolina Galvanese", role: "Advogada", image: carolinag, linkedin: "https://www.linkedin.com/in/carolina-galvanese-phd-6a2207167/" },
  { name: "Cecília Alarsa", role: "Geógrafa", image: cecilia, linkedin: "https://www.linkedin.com/in/cecilia-alarsa/" },
  { name: "Cícero Ramos", role: "Técnico de Logística e Operador de Drone", image: cicero, linkedin: "https://www.linkedin.com/in/c%C3%ADcero-ramos-a9b225158/" },
  { name: "Cinthia Fernandes", role: "Advogada", image: cinthia, linkedin: "https://www.linkedin.com/in/cinthia-fernandes-746430b2/" },
  { name: "Cristiane Magalhães", role: "Arquiteta e Urbanista", image: cristiane, linkedin: "https://www.linkedin.com/in/cristianemagalhaes/" },
  { name: "Dária Cardoso", role: "Geógrafa", image: daria, linkedin: "https://www.linkedin.com/in/daria-cardoso-18112155/" },
  { name: "Douglas Schimatto", role: "Jornalista/Repórter Fotográfico", image: douglas, linkedin: "https://www.linkedin.com/in/douglas-schinatto/" },
  { name: "Fabiana Martins", role: "Arquiteta e Urbanista", image: fabiana, linkedin: "https://www.linkedin.com/in/fabianamartinsarq/" },
  { name: "Fernando Henrique Mamédio", role: "Cientista Social", image: fernando, linkedin: "https://www.linkedin.com/in/fernandomamedio/" },
  { name: "Flavia Piovani", role: "Engenheira Cartógrafa", image: flavia, linkedin: "https://www.linkedin.com/in/flavia-piovani-61748734/" },
  { name: "Giselly Larissa Santos", role: "Estagiária de Engenharia Ambiental", image: giselly, linkedin: "" },
  { name: "Guilherme Brito", role: "Engenheiro Cartógrafo", image: guilherme, linkedin: "https://www.linkedin.com/in/guilherme-brito-13392947/" },
  { name: "Igor Teixeira", role: "Arqueólogo", image: igor, linkedin: "https://www.linkedin.com/in/igor-teixeira-8a904621b/" },
  { name: "Irineu Santos", role: "Contador", image: irineu, linkedin: "https://www.linkedin.com/company/idscontadores/posts/" },
  { name: "Isabela Martins", role: "Assessora Comercial", image: isabelac, linkedin: "https://www.linkedin.com/in/isabela-cavalcanti-martins-a934921a5/" },
  { name: "Isabela Nogueira", role: "Cientista de Dados", image: isabelan, linkedin: "https://www.linkedin.com/in/isabela-nogueira/" },
  { name: "João Ruben Leite", role: "Engenheiro Civil", image: joao, linkedin: "www.linkedin.com/in/joao-leite-a84b6a380" },
  { name: "Jhonnes Alberto Vaz", role: "Engenheiro Cartógrafo", image: jhonnes, linkedin: "https://www.linkedin.com/in/jhonnes-alberto-vaz-20118925/" },
  { name: "José Luiz Neto", role: "Geógrafo", image: jose, linkedin: "https://www.linkedin.com/in/jos%C3%A9-luiz-da-silva-neto-758a6a309/" },
  { name: "Johanssen Lobo", role: "Engenheiro Cartógrafo", image: johanssen, linkedin: "https://www.linkedin.com/in/johanssen-lobo-6285ab1b7/" },
  { name: "Leandro Viana", role: "Psicólogo", image: leandro, linkedin: "https://www.linkedin.com/in/leandro-viana-a432b2211/" },
  { name: "Manoel Luis Neto", role: "Geógrafo", image: manoel, linkedin: "https://www.linkedin.com/in/manoeluisgeotec/" },
  { name: "Maria Beatriz Pizzo", role: "Bióloga", image: mariab, linkedin: "https://www.linkedin.com/in/maria-beatriz-fagundes-gov%C3%AAa-pizzo-3052021a2/" },
  { name: "Maria de Oliveira", role: "Geógrafa", image: mariao, linkedin: "https://www.linkedin.com/in/maria-aparecida-de-oliveira-29726850/" },
  { name: "Maria Rosane Ribeiro", role: "Pedagoga", image: mariar, linkedin: "https://www.linkedin.com/in/rosane-pessanha/" },
  { name: "Mariana Penido", role: "Estrategista de Marketing", image: mariana, linkedin: "https://www.linkedin.com/in/mariana-penido/" },
  { name: "Mateus Duarte", role: "Assessor de TI", image: mateus, linkedin: "" },
  { name: "Mateus Sampaio", role: "Geógrafo", image: mateuss, linkedin: "https://www.linkedin.com/in/mateus-sampaio-7bb35398/" },
  { name: "Matheus Martins", role: "Geógrafo", image: matheus, linkedin: "https://www.linkedin.com/in/matheus-martins-andrade7/" },
  { name: "Osmane Ribeiro", role: "Engenheiro Florestal", image: osmane, linkedin: "https://www.linkedin.com/in/osmane-ribeiro-bb26b417b/" },
  { name: "Paulo Rodrigo Simões", role: "Historiador", image: paulo, linkedin: "https://www.linkedin.com/in/paulorodrigosimoes/" },
  { name: "Pedro Henrique Silva", role: "Geógrafo", image: pedroh, linkedin: "https://www.linkedin.com/in/pedro-silva1996/" },
  { name: "Pedro Ivo Valdez", role: "Admistrador", image: pedroi, linkedin: "https://www.linkedin.com/in/pedro-ribeiro-72a6b5221/" },
  { name: "Sandoval Amparo", role: "Geógrafo", image: sandoval, linkedin: "https://www.linkedin.com/in/sandoval-amparo-74812171/" },
  { name: "Sérgio Botton", role: "Cientista Social", image: sergio, linkedin: "https://www.linkedin.com/in/s%C3%A9rgio-botton-barcellos-961787303/" },
  { name: "Uendry Maia", role: "Assessor Comercial", image: uendri, linkedin: "https://www.linkedin.com/in/uendry/" },
  { name: "Verioní Bastos", role: "Historiadora", image: veronica, linkedin: "https://www.linkedin.com/in/verion%C3%AD-r-bastos-357bb690/?locale=pt" },
  { name: "Vinnícius Dionízio", role: "Geógrafo", image: vinicius, linkedin: "https://www.linkedin.com/in/vinn%C3%ADcius-dion%C3%ADzio/" },
];


export default function TeamPage() {
  return (
    <>
      <section className="container-page pb-20 pt-28 sm:pb-28 sm:pt-32">
        <Eyebrow label="Equipe" code="01" />

        <h1 className="mt-4 max-w-3xl font-display text-3xl font-semibold leading-tight text-ink sm:text-5xl">
          As pessoas por trás de cada mapa que se transforma em decisão.
        </h1>

        <p className="mt-6 max-w-2xl text-slate">
          A CartoGeo nasceu para aproximar tecnologia geoespacial de quem toma
          decisão todos os dias. Cada pessoa do time traz uma combinação
          diferente de Cartografia, dados e Engenharia — e é dessa mistura que
          nascem as soluções que construímos junto com nossos clientes.
        </p>
      </section>

      <section className="container-page pb-20 sm:pb-28">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {TEAM.map((person) => (
            <div
              key={`${person.name}-${person.role}`}
              className="flex flex-col items-center gap-3 rounded-xl border border-line bg-white p-6 text-center"
            >
              {person.image ? (
                <img
                  src={person.image}
                  alt={person.name}
                  className="h-20 w-20 flex-none rounded-full object-cover"
                />
              ) : (
                <div
                  className="h-16 w-16 flex-none rounded-full bg-paper"
                  aria-hidden="true"
                />
              )}
              <div>
                {person.linkedin ? (
                  
                    <a href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-ink hover:text-beacon hover:underline"
                  >
                    {person.name}
                  </a>
                ) : (
                  <p className="font-semibold text-ink">{person.name}</p>
                )}
                <p className="text-sm text-slate">{person.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page pb-20 sm:pb-28">
        <div className="rounded-xl border border-line bg-white p-8 sm:p-12">
          <Eyebrow label="Trabalhe com a gente" code="02" />
          <h2 className="mt-4 max-w-xl font-display text-2xl font-semibold text-ink sm:text-3xl">
            Um time construído com propósito e visão de futuro
          </h2>
          <p className="mt-4 max-w-xl text-slate">
            Valorizamos responsabilidade, colaboração e aprendizado contínuo.
            Se você se interessa por tecnologia geoespacial e quer construir
            soluções que realmente são usadas, queremos te conhecer.
          </p>
          <a
            href="https://wa.me/5583988016010?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20cartogeo%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
            target="_blank"
            rel="noopener noreferrer"
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
