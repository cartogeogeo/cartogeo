import { Link } from "react-router-dom";
import Eyebrow from "./Eyebrow";
import FeatureCard from "./FeatureCard";

import remenecentecasa from "../assets/project/Remanescente_de_casa_na_linha_de_erosão_em_atafona_1.webp";
import dunasatafona from "../assets/project/Dunas_Atafona.webp";
import erosaoatafona from "../assets/project/Atafona.webp";
import erosaonortefluminense from "../assets/project/NorteFluminense.webp";
import aguasitabapuana from "../assets/project/Aguas_Territorias_Itabapoana.webp";
import mangues from "../assets/project/Mangues_no_Estado_do_RJ.webp";
import baixadasantista from "../assets/project/Carta_Imagem_Baixada_Santista.webp";
import riodopeixe from "../assets/project/Rio_do_Peixe.webp";
import ilhagrande from "../assets/project/RAPELD.webp";
import baiatraicao from "../assets/project/Baia_Traicao.webp";
import drone from "../assets/project/Drone.webp";
import gnss from "../assets/project/Gnss.webp";
import mapasregionais from "../assets/project/Mapas_Regionais.webp";
import inovacaotecnologica from "../assets/project/Inovacao_Tecnologica.webp";
import reurb from "../assets/project/REURB.webp";
import projetourbanistico from "../assets/project/Projeto_Urbanistico.webp";
import regularizacao from "../assets/project/Regularizacao_Fundiaria.webp";
import landsat from "../assets/project/Colorida_LANDSAT.webp";
import fazendacantagalo from "../assets/project/Fazenda_Cantagalo.webp";
import meiodaserra from "../assets/project/Meio_da_Serra.webp";
import arqueoligiaamazonia from "../assets/project/Arqueologia_Amazonia.webp";
import arqueologia from "../assets/project/Arqueologia.webp";
import coremas from "../assets/project/Coremas_PB.webp";
import regiaoserrana from "../assets/project/Regiao_Serrana.webp";
import casimirodeabreu from "../assets/project/APL_da_Banana2_-_Casimiro_de_Abreu_RJ.webp";
import bancodedados from "../assets/project/SIG_Turismo.webp";
import portodoacu from "../assets/project/Porto_do_Acu.webp";
import enseadabaleia from "../assets/project/Enseada_da_Baleia_Cananeia_SP.webp";
import oleo from "../assets/project/Oil.webp";
import fape from "../assets/project/FAPERJ_FAPESP.webp";


const PROJECTS = [
  {
    slug:"processos-costeiros",
    title: "Monitoramento de erosão e progradação de praias arenosas, com mapeamento dinâmico de dunas",
    description:
      "Liderança desde 2003 no mapeamento cartográfico temático digital da planície costeira do rio Paraíba do Sul, com suporte de imagens sensoriais. O trabalho é desdobramento de projetos de pesquisa interinstitucionais executados em 2004, 2005 e 2006, financiados pelo CNPq e pela FAPERJ — entre eles “Atafona, RJ: Avaliação do Processo de Erosão Marinha” e “Erosão em Atafona: Presente, Passado e Futuro”",
    bullets: [
      "Perícias Técnicas",
      "Cartografia e Mapeamento Digital",
      "Levantamentos e Processamentos de Dados GNSS",
      "Processamento Digital de Imagens Científicas",
      "Geotecnologias Aplicadas a Processos Costeiros",
    ],
    image: remenecentecasa,
  },
  {
    slug:"meio-da-serra",
    title: "Modelos 3D e medição da dinâmica do campo de dunas formado pela erosão em Atafona (RJ)",
    description:
      "Mapeamento digital do campo de dunas estabelecido nas últimas duas décadas na praia de Atafona, São João da Barra (RJ), com levantamentos geodésicos GPS nos modos relativo e cinemático. As medições de verão e inverno de 2006 apuraram diferença da ordem de 43 mil m³ de sedimentos depositados na área de alto risco ambiental, comprovando condições favoráveis à continuidade do soterramento da infraestrutura urbana local. Foram gerados modelos 3D das dunas estudadas",
    bullets: [
      "Perícias Técnicas",
      "Cartografia e Mapeamento Digital",
      "Levantamentos e Processamentos de Dados GNSS",
      "Geotecnologias Aplicadas a Processos Costeiros",
      "Licenciamento Ambiental",
    ],
    image: dunasatafona,
  },
  {
    slug:"postos-geologicos-atafona",
    title: "Caracterização e evolução espacial das áreas de erosão marinha na praia de Atafona (RJ)",
    description:
      "Mapeamento digital destinado à caracterização e à evolução da configuração espacial de áreas de erosão marinha na praia de Atafona, São João da Barra (RJ). O material fotográfico e científico do projeto está reunido em atafona.unifesp.br",
    bullets: [
      "Perícias Técnicas",
      "Cartografia e Mapeamento Digital",
      "Geotecnologias Aplicadas a Processos Costeiros",
      "Licenciamento Ambiental",
      "Localização e Indicação Geográficas",
    ],
    image: erosaoatafona,
  },
  {
    slug:"atafonas-unifesp",
    title: "O acervo visual de duas décadas do projeto Atafona — ciência, extensão e um documentário",
    description:
      "O projeto Atafona, criado em 2003 com financiamento inicial do CNPq, teve desdobramentos institucionais pela UFF e pela UERJ, inclusive extensionistas. Do acervo fazem parte o ensaio “ATAFONA: um ensaio sobre seus cenários” e o documentário ficcional “ATAFONA por quê?”, dirigido pelo Dr. Miguel F. Freire (UFF) e produzido pelo Dr. Gilberto P. Ribeiro",
    bullets: [
      "Cartografia e Mapeamento Digital",
      "Geotecnologias Aplicadas à Arqueologia",
      "Licenciamento Ambiental",
      "Localização e Indicação Geográficas",
    ],
    image: erosaonortefluminense,
  },
  {
    slug:"aguas-territorias",
    title: "Solução geométrica com amparo legal para os limites oceânicos entre municípios e estados",
    description:
      "Planejamento e execução de mapeamentos digitais para avaliação da redistribuição de royalties de petróleo e gás natural na costa brasileira, com bases cartográficas oficiais do IBGE, do SGB/CPRM, da Marinha do Brasil e da ANP, e emprego de QGIS e GlobalMapper. Amparo legal: Lei nº 2.004/1953 (Política Nacional do Petróleo) e Lei nº 3.257/1957, entre outras normas",
    bullets: [
      "Engenharia Civil",
      "Geosserviços Educacionais",
      "Mentorias",
      "Mapeamento de Águas Territoriais",
      "Perícias Técnicas",
      "Cartografia e Mapeamento Digital",
      "Localização e Indicação Geográficas",
    ],
    image: aguasitabapuana,
  },
  {
    slug:"mangues",
    title: "Mapeamento digital e monitoramento das áreas de mangues do litoral fluminense",
    description:
      "Pesquisa aplicada ao mapeamento das áreas de vegetação de mangues do litoral fluminense com tecnologias digitais de geoprocessamento: imagens sensoriais e fotografias aéreas ortorretificadas como base para identificação de feições e extração de informações sobre os manguezais da zona costeira do Rio de Janeiro, com uso integrado de SIG e sistemas de processamento digital de imagens. (Projeto FAPERJ.)",
    bullets: [
      "Engenharia Civil",
      "Geosserviços Educacionais",
      "Mentorias",
      "Perícias Técnicas",
      "Cartografia e Mapeamento Digital",
      "Levantamentos e Processamentos de Dados GNSS",
      "Processamento Digital de Imagens Científicas",
      "Geotecnologias Aplicadas a Processos Costeiros",
      "Plano e Planejamento Urbanos",
      "Localização e Indicação Geográficas",
    ],
    image: mangues,
  },
  {
    slug:"bh-litoraneas",
    title: "Geotecnologias e uso da Terra frente às mudanças climáticas em sub-bacias de SP e RJ",
    description:
      " Aplicação de geotecnologias na avaliação e orientação do uso da Terra diante dos impactos das mudanças climáticas globais sobre o ambiente costeiro das bacias hidrográficas litorâneas entre os litorais de São Paulo e do Rio de Janeiro, com ferramentas de tratamento de imagens de satélite e geração de mapas digitais. (Projeto FAPERJ/FAPESP.)",
    bullets: [
      "Engenharia Civil",
      "Geosserviços Educacionais",
      "Mentorias",
      "Perícias Técnicas",
      "Cartografia e Mapeamento Digital",
      "Levantamentos e Processamentos de Dados GNSS",
      "Processamento Digital de Imagens Científicas",
      "Geotecnologias Aplicadas a Processos Costeiros",
      "Licenciamento Ambiental",
      "Localização e Indicação Geográficas",
    ],
    image: baixadasantista,
  },
  {
    slug:"rio-do-peixe",
    title: "Geoprocessamento no estudo da contaminação difusa do rio do Peixe (2021–2023)",
    description:
      "Mapeamento com GPS e SIG das fontes de contaminação de água, solo e sedimento no Guarujá/SP — localização, extensão e distribuição das áreas impactadas — e dos efeitos da contaminação por esgoto sanitário no rio do Peixe, com georreferenciamento e geração de plantas, mapas e cartas temáticas.",
    bullets: [
      "Engenharia Civil",
      "Geosserviços Educacionais",
      "Mentorias",
      "Perícias Técnicas",
      "Cartografia e Mapeamento Digital",
      "Levantamentos e Processamentos de Dados GNSS",
      "Processamento Digital de Imagens Científicas",
      "Localização e Indicação Geográficas",
    ],
    image: riodopeixe,
  },
  {
    slug:"ilha-grande",
    title: "Mapeamento digital aplicado à diversidade biológica da Ilha Grande (RJ)",
    description:
      "Colaboração na área de Cartografia em projeto coordenado pela profa. Dra. Helena Bergallo (UERJ) sobre os fatores que estruturam a biodiversidade da Ilha Grande, Angra dos Reis (RJ) — base para pesquisas de longa duração e para a conservação da Mata Atlântica. (Projeto FAPERJ.)",
    bullets: [
      "Engenharia Civil",
      "Geosserviços Educacionais",
      "Mentorias",
      "Perícias Técnicas",
      "Cartografia e Mapeamento Digital",
      "Levantamentos e Processamentos de Dados GNSS",
      "Processamento Digital de Imagens Científicas",
      "Geotecnologias Aplicadas a Processos Costeiros",
      "Geotecnologias Aplicadas à Arqueologia",
      "Licenciamento Ambiental",
      "Plano e Planejamento Urbanos",
      "Localização e Indicação Geográficas",
    ],
    image: ilhagrande,
  },
  {
    slug:"baia-de-traicao",
    title: "Monitoramento da erosão marinha na Baía da Traição (PB), do drone à linha de costa",
    description:
      "Monitoramento da erosão marinha na Baía da Traição (PB), litoral norte paraibano, com análise sistemática dos condicionantes naturais e antropogênicos: clima de ondas, regime de ventos, correntes litorâneas, marés astronômicas e meteorológicas e obras costeiras. Uso de imagens aéreas de drone para ortomosaicos, mapeamento regional com imagens de satélite e levantamentos de campo com o receptor GNSS Altus APS-3 na demarcação de falésias, crista da praia e linha de costa.",
    bullets: [
      "Engenharia Civil",
      "Geosserviços Educacionais",
      "Mentorias",
      "Perícias Técnicas",
      "Cartografia e Mapeamento Digital",
      "Levantamentos e Processamentos de Dados GNSS",
      "Processamento Digital de Imagens Científicas",
      "Geotecnologias Aplicadas a Processos Costeiros",
      "Geotecnologias Aplicadas à Arqueologia",
      "Licenciamento Ambiental",
      "Plano e Planejamento Urbanos",
      "Localização e Indicação Geográficas",
    ],
    image: baiatraicao,
  },
  {
    slug:"drone",
    title: "Coberturas aéreas detalhadas com drone DJI Air 3 Fly, do campo ao processamento",
    description:
      "Mapeamento digital com drone em escalas locais e regionais, incluindo zonas costeiras — do rigor da coleta em campo ao processamento digital de imagens. Equipamentos cadastrados e com autorizações de voo junto aos órgãos reguladores, garantindo segurança jurídica aos clientes. Drone DJI Air 3 Fly e receptor GNSS Altus APS-3 com precisão centimétrica no apoio de campo.",
    bullets: [
      "Engenharia Civil",
      "Geosserviços Educacionais",
      "Mentorias",
      "Perícias Técnicas",
      "Cartografia e Mapeamento Digital",
      "Levantamentos e Processamentos de Dados GNSS",
      "Processamento Digital de Imagens Científicas",
      "Geotecnologias Aplicadas a Processos Costeiros",
      "Licenciamento Ambiental",
      "Plano e Planejamento Urbanos",
      "Localização e Indicação Geográficas",
    ],
    image: drone,
  },
  {
    slug:"gnss",
    title: "Malhas de pontos geodésicos de referência com precisão centimétrica (Altus APS-3)",
    description:
      "Mapeamento digital com sistemas GNSS em escalas locais e regionais, incluindo zonas costeiras, unindo coleta rigorosa em campo e processamento de dados em gabinete. Operação com receptor GNSS Altus APS-3 (precisão centimétrica) e receptores Garmin de navegação. A agenda técnica de 2026 destaca o monitoramento de processos costeiros na Baía da Traição e projetos no sertão e no litoral paraibanos.",
    bullets: [
      "Engenharia Civil",
      "Geosserviços Educacionais",
      "Mentorias",
      "Perícias Técnicas",
      "Cartografia e Mapeamento Digital",
      "Levantamentos e Processamentos de Dados GNSS",
      "Licenciamento Ambiental",
      "Plano e Planejamento Urbanos",
      "Localização e Indicação Geográficas",
    ],
    image: gnss,
  },
  {
    slug:"sig-regional",
    title: "SIG institucional para análise espacial integrada e desenvolvimento territorial",
    description:
      "Pesquisa aplicada ao desenvolvimento de Sistema de Informação Geográfica com suporte a análises espaciais integradas a partir de dados sociais e econômicos, projetando um SIG institucional de uso imediato pela gestão pública para o desenvolvimento territorial em escala regional. (Projeto FAPERJ.)",
    bullets: [
      "Engenharia Civil",
      "Geosserviços Educacionais",
      "Mentorias",
      "Perícias Técnicas",
      "Cartografia e Mapeamento Digital",
      "Levantamentos e Processamentos de Dados GNSS",
      "Processamento Digital de Imagens Científicas",
      "Geotecnologias Aplicadas a Processos Costeiros",
      "Licenciamento Ambiental",
      "Localização e Indicação Geográficas",
    ],
    image: mapasregionais,
  },
  {
    slug:"inovacao-tecnologica",
    title: "Inovação em processos de produção cartográfica e no uso dos produtos gerados",
    description:
      "Frente dedicada à inovação tecnológica em mapeamento digital sob duas perspectivas: a otimização dos processos de produção de documentos cartográficos e a ampliação das formas de uso dos produtos — na leitura da CartoGeo, inovação também tem dimensão social, agregando potencialidades efetivas aos mapas, cartas e plantas produzidos.",
    bullets: [
      "Engenharia Civil",
      "Geosserviços Educacionais",
      "Mentorias",
      "Perícias Técnicas",
      "Cartografia e Mapeamento Digital",
      "Levantamentos e Processamentos de Dados GNSS",
      "Processamento Digital de Imagens Científicas",
      "Geotecnologias Aplicadas a Processos Costeiros",
      "Licenciamento Ambiental",
      "Localização e Indicação Geográficas",
    ],
    image: inovacaotecnologica,
  },
  {
    slug:"regularizacao-fundiaria",
    title: "Inovação em processos de produção cartográfica e no uso dos produtos gerados",
    description:
      "Elaboração e desenvolvimento de projetos de regularização fundiária no alto sertão nordestino, incluindo territórios de comunidades tradicionais quilombolas, com base na legislação ambiental e na função social da propriedade, nos eixos urbano e rural, com georreferenciamento de imóveis. Processamento de imagens LANDSAT 8 no sistema SPRING. Iniciativa de Fernando H. P. Mamédio e Gilberto P. Ribeiro, com colaboração de Verioní R. Bastos.",
    bullets: [
      "Engenharia Civil",
      "Geosserviços Educacionais",
      "Mentorias",
      "Mapeamento de Águas Territoriais",
      "Perícias Técnicas",
      "Cartografia e Mapeamento Digital",
      "Levantamentos e Processamentos de Dados GNSS",
      "Processamento Digital de Imagens Científicas",
      "Geotecnologias Aplicadas a Processos Costeiros",
      "Geotecnologias Aplicadas à Arqueologia",
      "Licenciamento Ambiental",
      "Plano e Planejamento Urbanos",
      "Localização e Indicação Geográficas",
    ],
    image: landsat,
  },
  {
    slug:"projetos-urbanisticos",
    title: "Mapeamento digital em conformidade com as exigências técnicas da REURB",
    description:
      "Projetos técnicos de Regularização Fundiária Urbana em total conformidade com a legislação em vigor, com mapeamentos digitais em escalas cadastrais e regionais — identificando núcleos urbanos informais a regularizar e apoiando a melhoria das condições urbanísticas e ambientais das ocupações, conforme os objetivos legais da REURB (art. 10).",
    bullets: [
      "Engenharia Civil",
      "Geosserviços Educacionais",
      "Mentorias",
      "Perícias Técnicas",
      "Cartografia e Mapeamento Digital",
      "Levantamentos e Processamentos de Dados GNSS",
      "Processamento Digital de Imagens Científicas",
      "Plano e Planejamento Urbanos",
      "Localização e Indicação Geográficas",
    ],
    image: projetourbanistico,
  },
  {
    slug:"regularizacao-fundiaria",
    title: "Estudos de caso no alto sertão nordestino, incluindo territórios quilombolas",
    description:
      "Elaboração e desenvolvimento de projetos de regularização fundiária no alto sertão nordestino, incluindo territórios de comunidades tradicionais quilombolas, com base na legislação ambiental e na função social da propriedade, nos eixos urbano e rural, com georreferenciamento de imóveis. Processamento de imagens LANDSAT 8 no sistema SPRING. Iniciativa de Fernando H. P. Mamédio e Gilberto P. Ribeiro, com colaboração de Verioní R. Bastos.",
    bullets: [
      "Engenharia Civil",
      "Geosserviços Educacionais",
      "Mentorias",
      "Perícias Técnicas",
      "Cartografia e Mapeamento Digital",
      "Levantamentos e Processamentos de Dados GNSS",
      "Processamento Digital de Imagens Científicas",
      "Plano e Planejamento Urbanos",
      "Localização e Indicação Geográficas",
    ],
    image: regularizacao,
  },
  {
    slug:"meio-da-serra",
    title: "Estudos de viabilidade e implementação de projetos urbanísticos com GNSS, imagens de drones e SIG",
    description:
      "Atividades de geoprocessamento em estudos técnicos de viabilidade e implementação de projetos urbanísticos — parcelamento do solo, traçado de vias, áreas públicas e infraestrutura — com emprego imediato de GNSS e SIG.",
    bullets: [
      "Engenharia Civil",
      "Geosserviços Educacionais",
      "Mentorias",
      "Perícias Técnicas",
      "Cartografia e Mapeamento Digital",
      "Levantamentos e Processamentos de Dados GNSS",
      "Processamento Digital de Imagens Científicas",
      "Licenciamento Ambiental",
      "Plano e Planejamento Urbanos",
      "Localização e Indicação Geográficas",
    ],
    image: reurb,
  },
  {
    slug:"fazenda-catagalo",
    title: "Reconstituição cartográfica de um século de história fundiária em Rio das Ostras (RJ)",
    description:
      "Avaliação histórica da configuração espacial da Fazenda Cantagalo (Rio das Ostras, RJ) a partir de plantas impressas de 1891, 1947, 1954, 2001 e 2002: extração da geometria dos polígonos por métodos gráficos, georreferenciamento analítico em padrões cartográficos oficiais e comparação dos traçados ao longo do tempo, sobre mosaico de ortofotografias métricas de 2006 e referência espacial oficial do IBGE, com cálculo de áreas e perímetros de cada polígono.",
    bullets: [
      "Engenharia Civil",
      "Geosserviços Educacionais",
      "Mentorias",
      "Mapeamento de Águas Territoriais",
      "Perícias Técnicas",
      "Cartografia e Mapeamento Digital",
      "Levantamentos e Processamentos de Dados GNSS",
      "Processamento Digital de Imagens Científicas",
      "Geotecnologias Aplicadas a Processos Costeiros",
      "Geotecnologias Aplicadas à Arqueologia",
      "Licenciamento Ambiental",
      "Plano e Planejamento Urbanos",
      "Localização e Indicação Geográficas",
    ],
    image: fazendacantagalo,
  },
  {
    slug:"meio-da-serra",
    title: "Cartografia a serviço do patrimônio histórico em Petrópolis (RJ)",
    description:
      " Mapeamento digital para caracterização de áreas com acervo valioso de patrimônio histórico de interesse do IPHAN na localidade Meio da Serra, Petrópolis (RJ). As bases cartográficas deram suporte à localização de fotografias terrestres de remanescentes de edificações que contam parte importante da história local.",
    bullets: [
      "Engenharia Civil",
      "Geosserviços Educacionais",
      "Mentorias",
      "Mapeamento de Águas Territoriais",
      "Perícias Técnicas",
      "Cartografia e Mapeamento Digital",
      "Levantamentos e Processamentos de Dados GNSS",
      "Processamento Digital de Imagens Científicas",
      "Geotecnologias Aplicadas a Processos Costeiros",
      "Geotecnologias Aplicadas à Arqueologia",
      "Licenciamento Ambiental",
      "Plano e Planejamento Urbanos",
      "Localização e Indicação Geográficas",
    ],
    image: meiodaserra,
  },
  {
    slug:"projetos-urbanisticos",
    title: "GNSS, SIG e drone a serviço da arqueologia amazônica em Conceição do Araguaia (PA). OBS: Em desenvolvimento",
    description:
      "Linha de pesquisa em arqueologia amazônica no recorte das imediações de Conceição do Araguaia (PA), em cooperação com o prof. Dr. Sandoval Amparo (UEPA), indigenista e geógrafo. Equipe especializada em geotecnologias aplicáveis a pesquisas em Arqueologia e Geografia, com drone DJI Air 3 Fly e receptor GNSS de precisão.",
    bullets: [
      "Engenharia Civil",
      "Geosserviços Educacionais",
      "Mentorias",
      "Cartografia e Mapeamento Digital",
      "Levantamentos e Processamentos de Dados GNSS",
      "Processamento Digital de Imagens Científicas",
      "Geotecnologias Aplicadas à Arqueologia",
      "Licenciamento Ambiental",
      "Plano e Planejamento Urbanos",
      "Localização e Indicação Geográficas",
    ],
    image: arqueoligiaamazonia,
  },
  {
    slug:"arqueologia",
    title: "Mapeamento temático no suporte à pesquisa arqueológica em Santarém (PA) e na Serra do Cabral (MG)",
    description:
      " Planejamento e execução de mapeamento digital temático no suporte à pesquisa arqueológica pré-histórica e histórica — em Santarém (PA), com estudos dirigidos a tipos de solo arqueológico rico em argila, e na Serra do Cabral (MG), com estudos de ocupação humana histórica e alterações de paisagem, análise em escala regional. Reconhecimento de padrões em imagens LANDSAT com apoio de trabalhos de campo para mapeamento de uso da Terra e cobertura vegetal, e investidas em pesquisas e estudos dirigidos a partir de interpretação de contextos e seus artefatos arqueológicos.",
    bullets: [
      "Engenharia Civil",
      "Geosserviços Educacionais",
      "Mentorias",
      "Perícias Técnicas",
      "Cartografia e Mapeamento Digital",
      "Levantamentos e Processamentos de Dados GNSS",
      "Processamento Digital de Imagens Científicas",
      "Geotecnologias Aplicadas à Arqueologia",
      "Licenciamento Ambiental",
      "Localização e Indicação Geográficas",
    ],
    image: arqueologia,
  },
  {
    slug:"landsat",
    title: "Processamento de imagens LANDSAT 8 e 9 com SPRING para mapeamento de uso da terra na Paraíba",
    description:
      "Série de processamentos de imagens LANDSAT 8 e 9 (USGS) no sistema SPRING 5.5.6 (INPE), cobrindo Tavares, o alto sertão e o litoral paraibanos (Cabedelo e adjacências): avaliação de georreferenciamento e correções radiométricas, geométricas e atmosféricas; realce e contraste por banda; composições coloridas RGB; segmentação; classificação supervisionada ou semi supervisionada; e mapeamento temático de uso da Terra e cobertura vegetal. Equipe: Dr. Gilberto P. Ribeiro e Dr. Jhonnes A. Vaz.",
    bullets: [
      "Engenharia Civil",
      "Geosserviços Educacionais",
      "Mentorias",
      "Perícias Técnicas",
      "Cartografia e Mapeamento Digital",
      "Levantamentos e Processamentos de Dados GNSS",
      "Processamento Digital de Imagens Científicas",
      "Licenciamento Ambiental",
      "Plano e Planejamento Urbanos",
      "Localização e Indicação Geográficas",
    ],
    image: coremas,
  },
  {
    slug:"parnaso",
    title: "Mapeamento digital temático do Parque Nacional da Serra dos Órgãos e da pressão urbana em seu entorno",
    description:
      " Planejamento e execução do mapeamento digital do Parque Nacional da Serra dos Órgãos (PARNASO), o parque mais pesquisado do Brasil e importante Unidade de Conservação fluminense. Por segmentação e classificação de imagens digitais, o projeto acompanhou o processo de ocupação desordenada no entorno, produzindo mapas de uso da Terra e cobertura vegetal.",
    bullets: [
      "Engenharia Civil",
      "Geosserviços Educacionais",
      "Mentorias",
      "Perícias Técnicas",
      "Cartografia e Mapeamento Digital",
      "Levantamentos e Processamentos de Dados GNSS",
      "Processamento Digital de Imagens Científicas",
      "Localização e Indicação Geográficas",
    ],
    image: regiaoserrana,
  },
  {
    slug:"apl-banana",
    title: "Arranjo Produtivo Local da banana orgânica em Casimiro de Abreu (RJ)",
    description:
      "Aplicações geoespaciais em Arranjo Produtivo Local voltado à produção de banana orgânica em escala regional no estado do Rio de Janeiro. A criação do APL busca gerar renda e emprego nas regiões produtoras, como Casimiro de Abreu, com inovações em processos, produtividade e competitividade da agricultura orgânica.",
    bullets: [
      "Engenharia Civil",
      "Geosserviços Educacionais",
      "Mentorias",
      "Perícias Técnicas",
      "Cartografia e Mapeamento Digital",
      "Levantamentos e Processamentos de Dados GNSS",
      "Processamento Digital de Imagens Científicas",
      "Localização e Indicação Geográficas",
    ],
    image: casimirodeabreu,
  },
  {
    slug:"sig-turismo",
    title: "Banco de dados geoespacial e SIG para a gestão do turismo municipal",
    description:
      "Mapeamentos digitais destinados à gestão do turismo municipal: geração de banco de dados geoespaciais turísticos, consultas e atualização no suporte à gestão. Análise integrada de cenários turístico-geográficos para diagnosticar problemas e identificar potencialidades do turismo em escala regional e de detalhe, a serviço das gestões pública e privada.",
    bullets: [
      "Engenharia Civil",
      "Geosserviços Educacionais",
      "Mentorias",
      "Perícias Técnicas",
      "Cartografia e Mapeamento Digital",
      "Levantamentos e Processamentos de Dados GNSS",
      "Processamento Digital de Imagens Científicas",
      "Localização e Indicação Geográficas",
    ],
    image: bancodedados,
  },
  {
    slug:"a-definir",
    title: "Efeitos do Complexo Industrial e Portuário do Açu sobre a planície costeira do Norte Fluminense",
    description:
      "Mapeamento digital da planície quaternária do rio Paraíba do Sul e dos efeitos do Complexo Industrial e Portuário do Açu sobre os ambientes costeiros. Trabalhos de campo com receptores GPS para georreferenciamento de imagens de satélite e fotografias aéreas métricas; validação de imagens LANDSAT, SPOT e IKONOS; e série de mapas temáticos para análise de cenários diante da evolução do empreendimento.",
    bullets: [
      "Engenharia Civil",
      "Geosserviços Educacionais",
      "Mentorias",
      "Perícias Técnicas",
      "Cartografia e Mapeamento Digital",
      "Levantamentos e Processamentos de Dados GNSS",
      "Processamento Digital de Imagens Científicas",
      "Geotecnologias Aplicadas a Processos Costeiros",
      "Geotecnologias Aplicadas à Arqueologia",
      "Licenciamento Ambiental",
      "Plano e Planejamento Urbanos",
      "Localização e Indicação Geográficas",
    ],
    scroll: true,
    image: portodoacu,
  },
  {
    slug:"a-definir",
    title: "Parecer técnico sobre alteração da linha de costa e influência antrópica em processo erosivo — Ilha do Cardoso, Cananéia/SP",
    description:
      " Integração de Cartografia, Geociências, análise espacial e interpretação de processos territoriais para subsidiar uma conclusão pericial. Informações espaciais, registros históricos e fundamentos das Geociências estruturados em uma análise para questão pericial complexa.",
    bullets: [
      "Engenharia Civil",
      "Geosserviços Educacionais",
      "Mentorias",
      "Mapeamento de Águas Territoriais",
      "Perícias Técnicas",
      "Cartografia e Mapeamento Digital",
      "Levantamentos e Processamentos de Dados GNSS",
      "Processamento Digital de Imagens Científicas",
      "Geotecnologias Aplicadas a Processos Costeiros",
      "Geotecnologias Aplicadas à Arqueologia",
      "Licenciamento Ambiental",
      "Plano e Planejamento Urbanos",
      "Localização e Indicação Geográficas",
    ],
    image: enseadabaleia,
  },
  {
    slug:"pesquisas-aplicadas",
    title: "Sete projetos de pesquisa financiados: seis pela FAPERJ e um FAPERJ-FAPESP",
    description:
      "Liderança no desenvolvimento de sete projetos de pesquisa com financiamento de agências de fomento — seis pela FAPERJ e um pelas agências FAPERJ-FAPESP — cobrindo do mapeamento da planície do rio Paraíba do Sul e dos efeitos do Porto do Açu ao monitoramento de mangues, sub-bacias litorâneas, SIG regional e diversidade biológica da Ilha Grande, todos com números de processo públicos.",
    bullets: [
      "Engenharia Civil",
      "Geosserviços Educacionais",
      "Mentorias",
      "Mapeamento de Águas Territoriais",
      "Perícias Técnicas",
      "Cartografia e Mapeamento Digital",
      "Levantamentos e Processamentos de Dados GNSS",
      "Processamento Digital de Imagens Científicas",
      "Geotecnologias Aplicadas a Processos Costeiros",
      "Geotecnologias Aplicadas à Arqueologia",
      "Licenciamento Ambiental",
      "Plano e Planejamento Urbanos",
      "Localização e Indicação Geográficas",
    ],
    image: oleo,
  },
  {
    slug:"a-definir",
    title: "PROJETOS FINANCIADOS FAPERJ-FAPESP:",
    description:
      "1- Mapeamento digital da planície quaternária do rio Paraíba do Sul e efeitos do Porto do Açu (Processo FAPERJ ES-26/112.630/2012) (Coordenador). \n\n2- Análise espacial integrada no Bonfim, Petrópolis, RJ, aplicado ao uso da Terra (Processo FAPERJ ES-26/111.893/2012) (Coordenador)",
    bullets: [
      "3- Aplicação de geotecnologias na orientação do uso da Terra com base nos Impactos das mudanças climáticas globais: sub-bacias hidrográficas litorâneas do estado de São Paulo e do estado do Rio de Janeiro. (Processo FAPERJ/FAPESP ES-26/111.619/2011) (Coordenador).",
      "4- Sistema de Informação Geográfica (SIG) aplicado à análise espacial integrada apoiada em dados socioeconômicos, destinado ao desenvolvimento territorial, na área industrial, em escala regional. (Processo FAPERJ ES-26/190.110/2010) (Coordenador).",
      "5- Mapeamento digital e monitoramento das áreas de mangues do litoral fluminense, através de tecnologias digitais de geoprocessamento e análise espacial. (Processo FAPERJ ES-26/110.830/2010) (Coordenador).",
      "6- Diversidade Biológica na Ilha Grande: uma análise sintética dos processos e base para pesquisas de longa duração. Coordenação: Dra. Helena de Godoy Bergallo (Instituto de Biologia – UERJ) (Colaborador, Coordenador da área de Geoprocessamento/FAPERJ ).",
      "7- Mapeamento Cartográfico Temático Digital da Planície Costeira do Rio Paraíba do Sul com Suporte de Imagens Sensoriais. Apoio à Pesquisa (FAPERJ/APQ1/2006) – (Processo FAPERJ E-26/170.128/2006) (Coordenador).",
    ],
    scroll: true,
    image: fape,
    imageHeightClass: "h-60",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <section className="container-page pb-16 pt-28 sm:pb-20 sm:pt-32">
        <Eyebrow label="Projetos" code="" />
        <h1 className="mt-4 max-w-3xl font-display text-3xl font-semibold leading-tight text-ink sm:text-5xl">
          Projetos e Cases | CartoGeo
        </h1>
        <p className="mt-6 max-w-2xl text-slate">
          Cases que mostram o método científico aplicado a desafios reais — do litoral ao interior do Brasil.
        </p>
      </section>

      <section className="container-page pb-20 sm:pb-28">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <FeatureCard
              key={project.slug}
              id={`P${String(i + 1).padStart(2, "0")}`}
              title={project.title}
              description={project.description}
              details={project.bullets}
              image={project.image}
              imageAlt={project.title}
              imageLink={`/projetos/${project.slug}`}
              link={`/projetos/${project.slug}`}
              contentScroll={project.scroll}
              imageHeightClass={project.imageHeightClass}
            />
          ))}
        </div>
      </section>
          <section className="container-page pb-20 sm:pb-28">
        <div className="rounded-xl border border-line bg-white p-8 sm:p-12">
          <Eyebrow label="Vamos conversar" code="" />
          <h2 className="mt-4 max-w-xl font-display text-2xl font-semibold text-ink sm:text-3xl">
            Tem um desafio parecido? Fale conosco.
          </h2>
          <p className="mt-4 max-w-xl text-slate">
            Conte um pouco sobre o desafio e a gente ajuda a desenhar o
            caminho mais direto entre a coleta e a decisão.
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
