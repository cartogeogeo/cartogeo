import Eyebrow from "./Eyebrow";

/**
 * Página — Política de Privacidade
 *
 * Segue o mesmo padrão visual das demais páginas do site: hero escuro (bg-ink)
 * com o motivo de Eyebrow + título em font-display, seguido de um corpo em
 * bg-paper organizado em seções numeradas (estilo "carta topográfica").
 *
 * Conteúdo é fictício — placeholder para revisão posterior.
 */

const SECTIONS = [
  {
    code: "01",
    title: "Do papel da CartoGeo no tratamento de dados pessoais",
    body: [
      "1.1. Nas hipóteses de tratamento de dados decorrentes da navegação no sítio eletrônico, do atendimento a interessados, da gestão de contratos e da realização de atividades educacionais e de seleção, a CARTOGEO atua na qualidade de controladora, nos termos do art. 5º, VI, da LGPD, competindo-lhe as decisões referentes ao tratamento.",
      "1.2. Na execução de projetos técnicos contratados por órgãos públicos, sociedades empresárias, escritórios de advocacia ou órgãos do Poder Judiciário — tais como mapeamentos, levantamentos geodésicos, laudos e perícias —, a CARTOGEO atua, em regra, na qualidade de operadora, nos termos do art. 5º, VII, da LGPD, realizando o tratamento em nome e conforme as instruções do contratante, a quem incumbe a condição de controlador.",
      "1.3. Na hipótese do item 1.2, as finalidades do tratamento e a política de privacidade aplicável são aquelas definidas pelo controlador, sem prejuízo do dever da CARTOGEO de observar as obrigações que lhe são próprias por força de lei e de contrato.",
    ],
  },
  {
    code: "02",
    title: "Dos dados pessoais objeto de tratamento",
    body: [
      "2.1. Do contato por meio do sítio eletrônico e demais canais de atendimento. São tratados:",
      {
        bullets: [
          "nome, endereço eletrônico e o teor da mensagem encaminhada por meio do formulário de contato;",
          "dados fornecidos espontaneamente pelo titular em comunicações por WhatsApp, telefone ou correio eletrônico, inclusive informações relativas ao projeto de seu interesse;",
          "registros de acesso à aplicação gerados automaticamente pelo provedor de hospedagem, compreendendo endereço IP e data e hora da conexão, cuja guarda observa o disposto no art. 15 da Lei nº 12.965/2014 (Marco Civil da Internet);",
          "dados de navegação coletados por meio de cookies e de ferramentas de medição de audiência, tais como endereço IP, identificador do dispositivo, tipo de navegador e de sistema operacional, páginas acessadas, tempo de permanência e origem do acesso, na forma da Cláusula 9ª;",
          "endereço IP e informações técnicas do dispositivo transmitidos automaticamente a provedores de redes de distribuição de conteúdo, em razão do carregamento de recursos externos necessários à exibição das páginas, na forma do item 9.7.",
        ],
      },
      "2.2. Da contratação e da execução de projetos técnicos. São tratados:",
      {
        bullets: [
          "dados de identificação e de contato de representantes legais, proprietários, possuidores, ocupantes e demais pessoas envolvidas no projeto;",
          "dados cadastrais e documentais necessários à prestação de serviços de regularização fundiária e de georreferenciamento, tais como matrícula do imóvel e documentos comprobatórios de posse ou de propriedade;",
          "dados de localização precisa, compreendendo coordenadas geodésicas, limites e feições de imóveis, obtidos mediante receptores GNSS, estação total e demais equipamentos de levantamento;",
          "imagens aéreas e terrestres obtidas por aeronave remotamente pilotada, câmeras e sistemas sensores, que podem registrar, de modo incidental, pessoas, veículos e edificações;",
          "informações necessárias à elaboração de laudos e perícias técnicas, inclusive peças e documentos processuais fornecidos pelo juízo, pelas partes ou por seus procuradores.",
        ],
      },
      "2.3. Da participação em cursos, palestras, mentorias e processos seletivos. São tratados:",
      {
        bullets: [
          "nome, endereço eletrônico, telefone e demais dados de inscrição, bem como o número de inscrição no Cadastro de Pessoas Físicas (CPF), quando necessário à emissão de certificado;",
          "currículo e informações acadêmicas e profissionais, nas hipóteses de candidatura a estágio ou a vaga de trabalho.",
        ],
      },
    ],
  },
  {
    code: "03",
    title: " Do tratamento de dados pessoais sensíveis e das comunidades tradicionais",
    body: [
      "3.1. Determinados projetos desenvolvidos pela CARTOGEO, notadamente aqueles relativos à demarcação e à regularização de territórios quilombolas e indígenas, podem envolver o tratamento de informações reveladoras de origem racial ou étnica e de pertencimento a comunidades tradicionais, as quais se qualificam como dados pessoais sensíveis, nos termos do art. 5º, II, da LGPD, submetendo-se ao regime reforçado do art. 11 do mesmo diploma legal.",
      "3.2. Nessas hipóteses, a CARTOGEO observa as seguintes diretrizes:",
      {
        bullets: [
          "realização do tratamento exclusivamente mediante base legal específica, consistente, em regra, no consentimento livre, informado e destacado da comunidade e dos titulares envolvidos, ou no cumprimento de obrigação legal ou regulatória, no exercício regular de direitos em processo judicial ou administrativo, ou ainda na execução de políticas públicas pelo órgão contratante;",
          "limitação da coleta ao estritamente necessário ao atingimento da finalidade do projeto, em observância aos princípios da necessidade e da finalidade (art. 6º, I e III, da LGPD);",
          "realização de diálogo prévio com as lideranças e as instâncias de representação comunitária acerca dos dados a serem coletados, das finalidades pretendidas e dos agentes que terão acesso às informações;",
          "vedação à divulgação, em quaisquer canais da CARTOGEO, de dados ou documentos cartográficos aptos a expor a localização de pessoas ou de bens comunitários, salvo mediante autorização expressa.",
        ],
      },
      "3.3. A CARTOGEO não utiliza dados de comunidades tradicionais para finalidades comerciais próprias, notadamente para atividades de marketing, prospecção ou publicidade.",
    ],
  },
  {
    code: "04",
    title: "Das imagens obtidas por aeronave remotamente pilotada e por sistemas sensores",
    body: [
      "4.1. A CARTOGEO opera aeronaves remotamente pilotadas em conformidade com a regulamentação aplicável, mediante equipamentos regularmente cadastrados e autorizações de voo perante os órgãos reguladores competentes.",
      "4.2. As imagens são captadas com finalidade estritamente técnica de mapeamento. Verificado o registro incidental de pessoas ou de bens de terceiros, aplicam-se as seguintes medidas:",
      {
        bullets: [
          "utilização restrita à finalidade do projeto contratado;",
          "armazenamento em ambiente de acesso limitado à equipe técnica responsável;",
          "supressão ou ocultação de elementos identificáveis, tais como rostos e placas de veículos, quando a imagem for empregada em materiais de divulgação, portfólio ou publicações;",
          "divulgação em canais da CARTOGEO somente mediante autorização do contratante e, quando aplicável, dos titulares identificáveis.",
        ],
      },
    ],
  },
  {
    code: "05",
    title: "Das finalidades do tratamento e das respectivas bases legais",
    body: [
      "5.1. O tratamento de dados pessoais pela CARTOGEO observa as seguintes finalidades e bases legais:",
      {
        bullets: [
          "Atendimento a contatos e elaboração de propostas comerciais. execução de contrato e de procedimentos preliminares a pedido do titular, nos termos do art. 7º, V, da LGPD.",
          "Execução de projetos técnicos, mapeamentos e levantamentos. execução de contrato, nos termos do art. 7º, V, da LGPD.",
          "Elaboração de laudos e perícias judiciais e arbitrais. cumprimento de obrigação legal ou regulatória e exercício regular de direitos em processo judicial, administrativo ou arbitral, nos termos do art. 7º, II e VI, da LGPD.",
          "Apoio técnico à regularização fundiária e a políticas públicas territoriais. execução de políticas públicas pelo órgão contratante e cumprimento de obrigação legal, nos termos do art. 7º, II e III, da LGPD.",
          "Cumprimento de obrigações fiscais, contábeis e contratuais. cumprimento de obrigação legal ou regulatória, nos termos do art. 7º, II, da LGPD.",
          "Envio de comunicações institucionais e de conteúdos técnicos. consentimento do titular ou legítimo interesse, nos termos do art. 7º, I e IX, da LGPD, assegurada em todas as mensagens a faculdade de descadastramento.",
          "Manutenção dos registros de acesso à aplicação e segurança do sítio eletrônico. cumprimento de obrigação legal, nos termos do art. 7º, II, da LGPD, combinado com o art. 15 da Lei nº 12.965/2014.",
          "Aferição de audiência e aprimoramento do sítio eletrônico mediante cookies e ferramentas de medição. consentimento do titular, nos termos do art. 7º, I, da LGPD, manifestado por meio do banner de consentimento, ressalvados os cookies estritamente necessários ao funcionamento da aplicação, tratados com fundamento no legítimo interesse (art. 7º, IX).",
          "Condução de processos seletivos de estagiários e colaboradores. execução de procedimentos preliminares relacionados a contrato, a pedido do titular, nos termos do art. 7º, V, da LGPD.",
        ],
      },
    ],
  },
  {
    code: "06",
    title: "Do compartilhamento de dados pessoais",
    body: [
      "6.1. A CARTOGEO não comercializa dados pessoais. O compartilhamento ocorre exclusivamente quando necessário ao atingimento das finalidades previstas nesta Política, com os seguintes destinatários:",
      {
        bullets: [
          "o contratante do projeto, destinatário dos produtos técnicos elaborados;",
          "órgãos públicos, serventias extrajudiciais e autoridades competentes, quando exigido por lei, por contrato ou por determinação judicial, notadamente no protocolo de processos de regularização fundiária e na entrega de laudos periciais;",
          "profissionais e sociedades parceiras que atuem tecnicamente no projeto, mediante obrigação contratual de confidencialidade;",
          "fornecedores de tecnologia responsáveis pela hospedagem do sítio eletrônico e pela operação das ferramentas de comunicação, medição e exibição de conteúdo, a saber: HostGator (hospedagem); EmailJS (transmissão das mensagens enviadas por meio do formulário de contato); Gmail (correio eletrônico); WhatsApp Business (atendimento); Google Tag Manager, Google Analytics e Google Search Console (medição de audiência e desempenho); Google Fonts (fornecimento de fontes tipográficas); e OpenStreetMap Foundation (fornecimento das camadas cartográficas exibidas no mapa interativo).",
        ],
      },
      "6.2. As ferramentas empregadas no desenvolvimento do sítio eletrônico são, em sua maioria, de código aberto e executadas no navegador do visitante, sem coleta autônoma de dados pessoais.",
      "6.3. Determinados fornecedores indicados no item 6.1 realizam o tratamento de dados fora do território nacional. Em tais hipóteses, a CARTOGEO exige que a transferência internacional observe os requisitos previstos nos arts. 33 a 36 da LGPD.",
    ],
  },
  {
    code: "07",
    title: "Dos prazos de conservação dos dados",
    body: [
      "7.1. Os dados pessoais são conservados pelo tempo necessário ao atingimento das finalidades previstas nesta Política e, após, pelos prazos legais aplicáveis, observados os seguintes parâmetros:",
      {
        bullets: [
          "Mensagens de contato não convertidas em contratação. 24 (vinte e quatro) meses, contados do último contato.",
          "Registros de acesso à aplicação. 6 (seis) meses, nos termos do art. 15 da Lei nº 12.965/2014, ressalvada a conservação por prazo superior mediante requisição de autoridade competente.",
          "Dados de navegação coletados por ferramentas de medição. conforme o período de retenção configurado na respectiva ferramenta, limitado a 14 (quatorze) meses.",
          "Dados contratuais, fiscais e contábeis. pelos prazos exigidos pela legislação aplicável.",
          "Produtos técnicos, dados brutos de campo e imagens. 24 (vinte e quatro) meses, contados da entrega final do projeto, ressalvada a conservação por prazo superior quando necessária ao exercício regular de direitos ou por determinação legal ou contratual.",
          "Documentos relativos a perícias judiciais. pelo prazo exigido pelo juízo e pela legislação processual aplicável.",
          "Currículos de candidaturas não aproveitadas. 12 (doze) meses, contados do recebimento.",
        ],
      },
      "7.2. Findos os prazos de conservação, os dados são eliminados ou submetidos a processo de anonimização, ressalvadas as hipóteses de guarda previstas no art. 16 da LGPD.",
    ],
  },
  {
    code: "08",
    title: " Das medidas de segurança",
    body: [
      "8.1. A CARTOGEO adota medidas técnicas e administrativas aptas a proteger os dados pessoais de acessos não autorizados e de situações acidentais ou ilícitas de destruição, perda, alteração, comunicação ou difusão, nos termos do art. 46 da LGPD, entre as quais: controle de acesso por perfil de usuário; utilização de senhas e de mecanismos de autenticação nos sistemas; realização de cópias de segurança; utilização de protocolo criptografado de tráfego no sítio eletrônico (HTTPS); armazenamento dos arquivos de projeto em ambientes de acesso restrito; e celebração de cláusulas de confidencialidade com a equipe e com os parceiros.",
      "8.2. Na hipótese de incidente de segurança que possa acarretar risco ou dano relevante aos titulares, a CARTOGEO comunicará a Autoridade Nacional de Proteção de Dados (ANPD) e os titulares afetados, nos termos do art. 48 da LGPD.",
    ],
  },
  {
    code: "09",
    title: "Dos cookies, das ferramentas de medição e dos recursos externos",
    body: [
      "9.1. Cookies são pequenos arquivos armazenados no dispositivo do visitante, destinados a viabilizar o funcionamento da aplicação e a compreender a forma de sua utilização.",
      "9.2. O sítio eletrônico da CARTOGEO emprega as seguintes categorias de cookies:",
      {
        bullets: [
          "Cookies estritamente necessários. indispensáveis ao funcionamento e à segurança da aplicação, razão pela qual não dependem de consentimento, sendo tratados com fundamento no legítimo interesse (art. 7º, IX, da LGPD).",
          "Cookies de medição e desempenho. destinados a aferir audiência, compreender a navegação e aprimorar o sítio eletrônico, instalados por meio do Google Tag Manager e do Google Analytics, cujo tratamento depende do consentimento prévio do titular (art. 7º, I, da LGPD).",
        ],
      },
      "9.3. A CARTOGEO não utiliza cookies de publicidade comportamental, tampouco comercializa ou disponibiliza dados de navegação para fins publicitários de terceiros.",
      "9.4. O consentimento para os cookies de medição e desempenho é obtido por meio de banner exibido no primeiro acesso, no qual o visitante poderá aceitá-los ou recusá-los sem prejuízo à navegação. A manifestação poderá ser alterada ou revogada a qualquer tempo, por meio do próprio banner ou das configurações do navegador utilizado.",
      "9.5. A CARTOGEO utiliza, ainda, o Google Search Console, ferramenta destinada exclusivamente à aferição do desempenho do sítio eletrônico nos mecanismos de busca, que não instala cookies no dispositivo do visitante.",
      "9.6. O envio de mensagem por meio do formulário de contato é processado pela ferramenta EmailJS, que atua exclusivamente na transmissão do conteúdo informado pelo próprio titular ao endereço eletrônico da CARTOGEO, não se destinando a rastreamento ou a formação de perfil.",
      "9.7. Para a exibição de determinados elementos das páginas, o sítio eletrônico carrega recursos hospedados por terceiros, o que implica a transmissão automática do endereço IP e de informações técnicas do dispositivo aos respectivos provedores, ainda que não sejam instalados cookies. São eles:",
      {
        bullets: [
          "Google Fonts. fornecimento das fontes tipográficas utilizadas nas páginas.",
          "OpenStreetMap. fornecimento das camadas cartográficas (tiles) exibidas no mapa interativo do sítio eletrônico.",
        ],
      },
      "9.8. O tratamento descrito no item 9.7 é realizado com fundamento no legítimo interesse da CARTOGEO na adequada exibição e no funcionamento de seu sítio eletrônico (art. 7º, IX, da LGPD), limitando-se ao estritamente necessário a tal finalidade.",
      "9.9. Alterações nas ferramentas descritas nesta Cláusula ensejarão a prévia atualização desta Política.",
    ],
  },
  {
    code: "10",
    title: "Dos direitos do titular",
    body: [
      "10.1. Nos termos do art. 18 da LGPD, é assegurado ao titular o direito de obter da CARTOGEO, mediante requisição:",
      {
        bullets: [
          "a confirmação da existência de tratamento e o acesso aos dados;",
          "a correção de dados incompletos, inexatos ou desatualizados;",
          "a anonimização, o bloqueio ou a eliminação de dados desnecessários, excessivos ou tratados em desconformidade com a LGPD;",
          "a portabilidade dos dados a outro fornecedor de serviço ou produto, mediante requisição expressa;",
          "a eliminação dos dados tratados com fundamento no consentimento;",
          "a informação sobre as entidades públicas e privadas com as quais a CARTOGEO realizou uso compartilhado de dados;",
          "a informação sobre a possibilidade de não fornecer consentimento e sobre as consequências da negativa;",
          "a revogação do consentimento, a qualquer tempo, mediante manifestação expressa.",
        ],
      },
      "10.2. Os direitos previstos no item 10.1 poderão ser exercidos mediante requerimento encaminhado ao endereço eletrônico info@cartogeo.org, sendo a resposta prestada no menor prazo possível, observados os limites legais.",
      "10.3. A CARTOGEO poderá solicitar informações adicionais destinadas exclusivamente à confirmação da identidade do requerente, como medida de segurança do próprio titular.",
      "10.4. É facultado ao titular apresentar reclamação perante a Autoridade Nacional de Proteção de Dados (ANPD).",
    ],
  },
  {
    code: "11",
    title: "Do encarregado pelo tratamento de dados pessoais",
    body: [
      "11.1. Nos termos do art. 41 da LGPD, a CARTOGEO indica como encarregado pelo tratamento de dados pessoais o Dr. Gilberto Pessanha Ribeiro, sócio-administrador, que poderá ser contatado por meio do endereço eletrônico info@cartogeo.org.",
      "11.2. Compete ao encarregado receber comunicações dos titulares e da Autoridade Nacional de Proteção de Dados, prestar esclarecimentos e adotar as providências cabíveis, bem como orientar os colaboradores da CARTOGEO acerca das práticas de proteção de dados.",
    ],
  },
  {
    code: "12",
    title: "Do tratamento de dados de crianças e adolescentes",
    body: [
      "12.1. Os serviços da CARTOGEO não se destinam a crianças e adolescentes.",
      "12.2. Verificado o tratamento de dados de menores de idade em atividades educacionais, observar-se-á o disposto no art. 14 da LGPD, exigindo-se, quanto às crianças, o consentimento específico e em destaque de ao menos um dos pais ou do responsável legal, e observando-se, em todas as hipóteses, o melhor interesse do titular.",
    ],
  },
  {
    code: "13",
    title: "Do tratamento de dados de crianças e adolescentes",
    body: [
      "13.1. A presente Política poderá ser alterada a qualquer tempo, em razão de modificações legislativas, regulatórias ou dos processos internos da CARTOGEO.",
      "13.2. A versão vigente permanecerá disponível nesta página, com indicação da respectiva data de vigência, recomendando-se ao titular a sua consulta periódica.",
    ],
  },
  {
    code: "14",
    title: "Do contato",
    body: [
      "CARTOGEO — CARTOGRAFIA E GEODÉSIA CONSULTORIA ESPECIALIZADA LTDA.",
      "CNPJ/MF nº 66.267.234/0001-08",
      "Avenida Cabo Branco, nº 1.780, Loja 12 — Cabo Branco, João Pessoa/PB — CEP 58.045-010",
      "Correio eletrônico: info@cartogeo.org",
      "Telefones: (83) 98801-6010 e (83) 98608-8019",
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

export default function PoliticaPrivacidade() {
  return (
    <div className="min-h-screen bg-paper">
      <main>
        {/* Hero */}
        <section className="bg-ink pb-16 pt-32 text-white sm:pb-20 sm:pt-40">
          <div className="container-page">
            <Eyebrow label="Legal" code="" tone="dark" />
            <h1 className="max-w-2xl font-display text-4xl font-semibold sm:text-5xl">
              Política de Privacidade
            </h1>
            <p className="mt-4 max-w-xl text-sm text-white/70 sm:text-base">
              A presente Política tem por objeto informar aos titulares de dados quais dados pessoais são objeto de tratamento pela CARTOGEO, as respectivas finalidades e bases legais, as hipóteses de compartilhamento, os prazos de conservação e os meios de exercício de direitos, aplicando-se ao sítio eletrônico cartogeo.org, aos canais de atendimento mantidos pela CARTOGEO e às atividades técnicas por ela desenvolvidas.
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
                Contato
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate sm:text-base">
                Em caso de dúvidas sobre esta Política de Privacidade, entre em
                contato pelo e-mail{" "}
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
