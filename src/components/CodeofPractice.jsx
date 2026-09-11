import Eyebrow from "./Eyebrow";

/**
 * Página — Código de Conduta
 *
 * Mesmo padrão visual da Política de Privacidade: hero escuro (bg-ink) com
 * Eyebrow + título em font-display, corpo em bg-paper com seções numeradas.
 *
 * Cada item de `body` pode ser:
 *  - uma string → renderizada como parágrafo;
 *  - um objeto `{ bullets: [...] }` → renderizado como lista com marcadores.
 *
 * Conteúdo é fictício — placeholder para revisão posterior.
 */

const SECTIONS = [
  {
    code: "01",
    title: "Dos valores institucionais",
    body: [
      "1.1. A conduta da CARTOGEO orienta-se pelos seguintes valores: excelência técnica; segurança jurídica e territorial; compromisso com o território; inovação tecnológica; foco no cliente; ética; confiabilidade e transparência; integração e colaboração; e sustentabilidade.",
      "1.2. Os valores enunciados no item 1.1 constituem parâmetro de interpretação e de aplicação de todas as disposições deste Código.",
    ],
  },
  {
    code: "02",
    title: "Da integridade técnica e científica",
    body: [
      "2.1. A CARTOGEO compromete-se a:",
      {
        bullets: [
          "empregar metodologias consolidadas, normas técnicas aplicáveis e dados oriundos de fontes oficiais, documentando os métodos utilizados em cada projeto;",
          "abster-se de alterar, omitir ou selecionar resultados com o propósito de favorecer interesse próprio, do contratante ou de terceiros;",
          "informar as limitações, as margens de incerteza e as condicionantes de seus produtos técnicos, vedada a asseveração de precisão ou de conclusões não amparadas pelos dados;",
          "recusar ou interromper a execução de trabalhos sempre que as condições impedirem a sua realização tecnicamente correta;",
          "observar os direitos de autoria, creditando pesquisadores, instituições e fontes, e abstendo-se de utilizar produção de terceiros sem a devida autorização e referência.",
        ],
      },
    ],
  },
  {
    code: "03",
    title: "Da independência e dos conflitos de interesse",
    body: [
      "3.1. As atividades de perícia técnica, de arbitragem e de assessoria a órgãos públicos exigem independência, cuja preservação constitui dever inderrogável da CARTOGEO.",
      "3.2. Para tanto, a CARTOGEO obriga-se a:",
      {
        bullets: [
          "declarar previamente qualquer relação pessoal, societária, contratual ou financeira apta a comprometer, ou a aparentar comprometer, a sua imparcialidade;",
          "observar, nas perícias judiciais e arbitrais, os deveres de imparcialidade e as hipóteses legais de impedimento e de suspeição, recusando a nomeação ou o encargo quando configuradas;",
          "abster-se de assumir, simultaneamente, encargos que a coloquem em posições conflitantes no mesmo caso ou na mesma disputa territorial;",
          "resistir a pressões, de contratantes ou de terceiros, tendentes à obtenção de conclusões técnicas predeterminadas.",
        ],
      },
      "3.3. As declarações de que trata o item 3.2 são registradas internamente, por projeto, e ficam à disposição para eventual verificação.",
    ],
  },
  {
    code: "04",
    title: "Da relação com o poder público e da prevenção à corrupção",
    body: [
      "4.1. A CARTOGEO observa a Lei nº 12.846/2013, a Lei nº 14.133/2021 e as demais normas aplicáveis às relações com a Administração Pública, obrigando-se a:",
      {
        bullets: [
          "não oferecer, prometer, autorizar, exigir ou aceitar vantagem indevida, sob a forma de numerário, presentes, favores ou qualquer outra utilidade, a agentes públicos ou privados, diretamente ou por interposta pessoa;",
          "abster-se de realizar doações a partidos políticos, campanhas ou candidatos em nome da CARTOGEO;",
          "participar de licitações e de contratações públicas mediante informações verdadeiras, vedados o ajuste ou a combinação de preços, a fraude a procedimentos e a utilização de informação privilegiada;",
          "repudiar a intermediação de contratos por facilitadores que atuem à margem de relação contratual formal e transparente.",
        ],
      },
      "4.2. Quanto a brindes, presentes e hospitalidades:",
      {
        bullets: [
          "é permitida a oferta e o recebimento de brindes institucionais de valor simbólico, desprovidos de valor comercial expressivo e destituídos de qualquer aptidão para influenciar decisões;",
          "hospitalidades vinculadas a eventos técnicos, científicos ou de capacitação — tais como inscrição, deslocamento e hospedagem — são admitidas mediante autorização prévia e expressa da direção, observado o limite de R$ 300,00 (trezentos reais) por evento e por pessoa;",
          "é vedada, em qualquer hipótese, a oferta de presentes ou de hospitalidades a agente público que participe de processo decisório relativo a contratação, licitação, fiscalização ou perícia em que a CARTOGEO atue ou pretenda atuar.",
        ],
      },
    ],
  },
  {
    code: "05",
    title: "Da confidencialidade e do tratamento da informação",
    body: [
      "5.1. A CARTOGEO obriga-se a:",
      {
        bullets: [
          "tratar como confidenciais os dados, documentos e produtos técnicos de contratantes, de partes processuais e de comunidades, utilizando-os exclusivamente para a finalidade contratada;",
          "preservar o sigilo dos processos judiciais e arbitrais em que atue, abstendo-se de manifestação pública sobre casos em andamento;",
          "divulgar projetos em portfólio, sítio eletrônico e redes sociais somente mediante autorização do contratante e sem exposição de informação sensível ou apta a identificar pessoas sem o respectivo consentimento;",
          "realizar o tratamento de dados pessoais em conformidade com a Lei nº 13.709/2018 (LGPD) e com a Política de Privacidade e de Proteção de Dados Pessoais da CARTOGEO.",
        ],
      },
    ],
  },
  {
    code: "06",
    title: "Do respeito às comunidades e aos territórios",
    body: [
      "6.1. Considerando que parcela relevante das atividades da CARTOGEO desenvolve-se em territórios habitados, notadamente por comunidades quilombolas, indígenas e tradicionais, a CARTOGEO obriga-se a:",
      {
        bullets: [
          "identificar-se com clareza perante a comunidade, informando quem é, quem contratou o trabalho, o que será executado e a destinação dos dados coletados;",
          "promover diálogo prévio com as lideranças e as instâncias de representação comunitária, respeitando suas formas próprias de organização e de deliberação;",
          "limitar a coleta ao estritamente necessário e abster-se de utilizar saberes, imagens ou informações comunitárias para finalidades comerciais próprias;",
          "abster-se de publicar documentos cartográficos ou informações que exponham a localização de pessoas ou de bens comunitários sem autorização expressa;",
          "conduzir suas atividades com a cautela exigida pela repercussão que a representação cartográfica produz sobre a vida das pessoas e sobre os direitos territoriais.",
        ],
      },
    ],
  },
  {
    code: "07",
    title: "Da segurança, dos trabalhos de campo e da operação de aeronaves remotamente pilotadas",
    body: [
      "7.1. A CARTOGEO obriga-se a:",
      {
        bullets: [
          "operar aeronaves remotamente pilotadas mediante equipamentos regularmente cadastrados e autorizações de voo perante os órgãos reguladores competentes, observadas as restrições de espaço aéreo;",
          "planejar voos e trabalhos de campo considerando a segurança da equipe, de terceiros e do patrimônio;",
          "evitar a captação desnecessária de imagens de pessoas, de residências e de propriedades não relacionadas ao objeto do trabalho;",
          "solicitar autorização para acesso a propriedades privadas e observar as normas aplicáveis a unidades de conservação e a áreas especialmente protegidas.",
        ],
      },
    ],
  },
  {
    code: "08",
    title: "Do respeito às pessoas e do ambiente de trabalho",
    body: [
      "8.1. A CARTOGEO não tolera:",
      {
        bullets: [
          "discriminação de qualquer natureza, notadamente em razão de raça, cor, etnia, origem, religião, idade, deficiência, sexo, identidade de gênero ou orientação sexual;",
          "assédio moral ou sexual, intimidação, constrangimento ou humilhação, em qualquer relação de trabalho, de campo ou de parceria;",
          "o trabalho infantil, o trabalho forçado ou em condições análogas à de escravo, em suas atividades ou em sua cadeia de fornecedores.",
        ],
      },
      "8.2. A CARTOGEO compromete-se a promover a formação profissional, assegurando a estagiários e a profissionais em início de carreira orientação técnica adequada e o devido crédito por suas contribuições.",
    ],
  },
  {
    code: "09",
    title: "Da responsabilidade socioambiental",
    body: [
      "9.1. A CARTOGEO obriga-se a:",
      {
        bullets: [
          "considerar os impactos ambientais das atividades que apoia e a produzir informação técnica que favoreça decisões sustentáveis;",
          "observar a legislação ambiental e as condicionantes de licenciamento aplicáveis aos projetos em que atue;",
          "minimizar os impactos decorrentes dos trabalhos de campo, especialmente em ambientes costeiros, unidades de conservação e áreas de vegetação protegida.",
        ],
      },
    ],
  },
  {
    code: "10",
    title: "Da comunicação institucional e do uso da marca",
    body: [
      "10.1. A CARTOGEO obriga-se a:",
      {
        bullets: [
          "veicular comunicação institucional verdadeira e verificável, vedado o anúncio de serviços, equipamentos, certificações ou experiências que não possua;",
          "abster-se de atribuir a si a autoria de trabalhos de terceiros e de utilizar marcas ou logotipos de contratantes e parceiros sem autorização.",
        ],
      },
      "10.2. Manifestações pessoais de sócios e colaboradores em redes sociais ou em outros canais não representam a posição institucional da CARTOGEO.",
    ],
  },
  {
    code: "11",
    title: "Do canal de relatos e da apuração",
    body: [
      "11.1. Qualquer pessoa — colaborador, contratante, integrante de comunidade, parceiro ou cidadão — poderá relatar condutas em desacordo com este Código por meio do endereço eletrônico info@cartogeo.org.",
      "11.2. Os relatos poderão ser identificados ou anônimos, assegurada, em qualquer hipótese, a vedação de retaliação contra quem relate de boa-fé.",
      "11.3. O recebimento do relato será confirmado ao relatante identificado no prazo de até 24 (vinte e quatro) horas.",
      "11.4. A apuração compete ao Dr. Gilberto Pessanha Ribeiro, sócio-administrador, e será conduzida de forma proporcional, imparcial e confidencial, no menor prazo compatível com a complexidade dos fatos.",
      "11.5. Configurada a violação, serão adotadas as medidas cabíveis, que compreendem, conforme a gravidade, orientação, advertência, rescisão de contrato de trabalho ou de parceria e comunicação às autoridades competentes.",
      "11.6. Verificado conflito de interesse do responsável pela apuração, esta será conduzida por profissional externo designado para tal fim.",
    ],
  },
  {
    code: "12",
    title: "Da vigência, da divulgação e da revisão",
    body: [
      "12.1. Este Código aplica-se a todas as atividades da CARTOGEO e entra em vigor na data indicada no preâmbulo.",
      "12.2. A CARTOGEO promoverá a divulgação deste Código a seus colaboradores e parceiros e manterá a versão vigente permanentemente disponível em seu sítio eletrônico.",
      "12.3. Este Código será revisto periodicamente e sempre que necessário à sua adequação a alterações legislativas ou às atividades da CARTOGEO.",
      "12.4. Dúvidas quanto à sua aplicação poderão ser encaminhadas ao canal indicado na Cláusula 11ª.",
    ],
  },
];

function BulletList({ bullets }) {
  return (
    <ul className="space-y-2">
      {bullets.map((item, i) => (
        <li key={i} className="flex gap-3 text-sm leading-relaxed text-slate sm:text-base">
          <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-beacon" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Section({ code, title, body }) {
  return (
    <div className="grid gap-4 border-t border-line py-10 sm:grid-cols-[80px,1fr] sm:gap-8">
      <span className="font-mono text-xs tracking-widest text-slate">{code}</span>
      <div>
        <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
          {title}
        </h2>
        <div className="mt-4 space-y-3">
          {body.map((item, i) =>
            typeof item === "string" ? (
              <p key={i} className="text-sm leading-relaxed text-slate sm:text-base">
                {item}
              </p>
            ) : (
              <BulletList key={i} bullets={item.bullets} />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default function CodigoConduta() {
  return (
    <div className="min-h-screen bg-paper">
      <main>
        {/* Hero */}
        <section className="bg-ink pb-16 pt-32 text-white sm:pb-20 sm:pt-40">
          <div className="container-page">
            <Eyebrow label="Legal" code="" tone="dark" />
            <h1 className="max-w-2xl font-display text-4xl font-semibold sm:text-5xl">
              Código de Conduta
            </h1>
            <p className="mt-4 max-w-xl text-sm text-white/70 sm:text-base">
              A CARTOGEO institui o presente Código de Ética e Conduta, de observância obrigatória por sócios, colaboradores, estagiários, consultores e parceiros, em todas as suas atividades, e de acesso público a clientes, comunidades e à sociedade em geral.
            </p>
            <p className="mt-6 font-mono text-xs uppercase tracking-[0.14em] text-white/40">
              Última atualização — 31 de agosto de 2026.
            </p>
          </div>
        </section>

        {/* Corpo */}
        <section className="container-page pb-24">
          <div className="mx-auto max-w-3xl">
            {SECTIONS.map((s) => (
              <Section key={s.code} {...s} />
            ))}

            <div className="border-t border-line py-10">
              <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                Canal de contato
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate sm:text-base">
                Dúvidas ou relatos relacionados a este Código de Conduta podem
                ser enviados para{" "}
                <a href="mailto:info@cartogeo.org" className="text-ink underline decoration-line underline-offset-4 hover:decoration-beacon">
                  info@cartogeo.org
                </a>{" "}
                ou pelos canais disponíveis no rodapé do site.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
