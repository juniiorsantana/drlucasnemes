/**
 * Global constants for Dr. Lucas Nemes site
 * Data sourced from blueprint.md
 */

// WhatsApp Integration
export const WHATSAPP_NUMBER = "556596971216";
export const WHATSAPP_MESSAGE =
  "Olá, Dr. Lucas! Gostaria de agendar uma consulta.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

// Clinic Information
export const CLINIC_NAME = "Clínica HiperbáricaMT";
export const CLINIC_ADDRESS = "Gastro MT (Anexo HMT) R. das Begônias, 615 (Anexo B), Jardim Cuiabá";
export const CLINIC_CITY = "Cuiabá";
export const CLINIC_STATE = "MT";
export const CLINIC_POSTAL_CODE = "78043-112";
export const CLINIC_HOURS = "Segunda a Sexta, 07:00 às 19:00";
export const CLINIC_PHONE = "(65) 9697-1216";
export const CLINIC_PHONE_FORMATTED = "556596971216";

// Doctor Credentials
export const DOCTOR_NAME = "Dr. Lucas Nemes";
export const DOCTOR_SPECIALTY = "Médico Nutrólogo";
export const CRM = "CRM/MT 8060";
export const RQE = "RQE 7982";

// Navigation Links
export const NAV_LINKS = [
  { label: "Início", href: "/#" },
  { label: "Sobre", href: "/#sobre" },
  { label: "Especialidades", href: "/#servicos" },
  { label: "Tecnologia", href: "/#tecnologia" },
  { label: "Clínica", href: "/#clinica" },
  { label: "FAQ", href: "/#faq" },
  { label: "Blog", href: "/blog" },
] as const;

// Services
export const SERVICES = [
  {
    id: "emagrecimento",
    title: "Emagrecimento Saudável",
    description:
      "Protocolos personalizados focados na perda de gordura preservando a massa magra e saúde metabólica.",
    icon: "monitoring",
  },
  {
    id: "longevidade",
    title: "Longevidade e Bem-estar",
    description:
      "Foco na saúde preventiva, equilíbrio hormonal e reposição de nutrientes para uma vida vibrante.",
    icon: "vital_signs",
  },
  {
    id: "performance",
    title: "Alta Performance",
    description:
      "Otimização biológica para atletas e entusiastas que buscam superar seus limites físicos e mentais.",
    icon: "exercise",
  },
] as const;

// Technology & Exams
export const TECHNOLOGY_SECTIONS = [
  {
    id: "calorimetria",
    title: "Calorimetria Indireta",
    description:
      "Descubra o que seu corpo realmente precisa. Analisamos seu metabolismo real para criar estratégias nutricionais baseadas nos seus dados — não em médias populacionais.",
    icon: "biotech",
  },
  {
    id: "bioimpedancia",
    title: "Bioimpedância Avançada",
    description:
      "Análise completa que vai além do peso na balança. Avaliamos massa muscular, gordura visceral, hidratação e densidade óssea para fundamentar diagnósticos precisos.",
    icon: "biotech",
  },
  {
    id: "polissonografia",
    title: "Polissonografia Domiciliar",
    subtitle: "Tecnologia Biologix",
    description:
      "Avaliação completa do sono no conforto da sua casa. Monitora todos os parâmetros essenciais durante a noite.",
    icon: "bedtime",
  },
] as const;

// How It Works - Steps
export const TREATMENT_STEPS = [
  {
    step: 1,
    title: "Consulta Inicial",
    description:
      "Avaliamos suas metas, histórico de saúde e realizamos os exames de diagnóstico precisos.",
  },
  {
    step: 2,
    title: "Plano Personalizado",
    description:
      "Com base nos dados, criamos um protocolo exclusivo para o seu metabolismo e objetivos.",
  },
  {
    step: 3,
    title: "Acompanhamento Contínuo",
    description:
      "Monitoramos sua evolução e ajustamos o plano para garantir resultados reais e duradouros.",
  },
] as const;

// Clinic Amenities
export const CLINIC_AMENITIES = [
  {
    icon: "parking",
    title: "Estacionamento",
    description: "Mais comodidade e tranquilidade no atendimento",
  },
  {
    icon: "ac_unit",
    title: "Climatizados",
    description: "Conforto térmico em todos os ambientes",
  },
  {
    icon: "accessible",
    title: "Acessibilidade",
    description: "Infraestrutura adaptada com rampas e acessos amplos",
  },
  {
    icon: "cleaning_services",
    title: "Higienização",
    description: "Ambiente limpo e seguro com padrões rigorosos de limpeza",
  },
  {
    icon: "science",
    title: "Tecnologia de Ponta",
    description: "Equipamentos modernos e equipe altamente qualificada",
  },
] as const;

// FAQ Items
export const FAQ_ITEMS = [
  {
    id: "calorimetria-faq",
    question: "Para que serve o exame de calorimetria indireta?",
    answer:
      "A calorimetria indireta mede com precisão o quanto de energia seu corpo gasta em repouso e durante atividades. Com esse dado, calculamos exatamente quantas calorias você precisa consumir — eliminando achismos e dietas genéricas.",
  },
  {
    id: "bioimpedancia-faq",
    question: "Para que serve o exame de bioimpedância?",
    answer:
      "A bioimpedância avançada analisa sua composição corporal completa: massa muscular, gordura (total e visceral), hidratação e muito mais. Vamos muito além do peso na balança.",
  },
  {
    id: "polissonografia-faq",
    question: "Para que serve a Polissonografia Domiciliar (Biologix)?",
    answer:
      "A polissonografia avalia a qualidade do seu sono em casa, sem desconforto. O sono ruim é um dos maiores sabotadores do emagrecimento e da saúde hormonal — identificar e tratar distúrbios do sono potencializa todos os outros tratamentos.",
  },
  {
    id: "hipertrofia-faq",
    question: "Quais são os benefícios da hipertrofia muscular no emagrecimento?",
    answer:
      "Músculo ativo consome mais energia mesmo em repouso. Aumentar sua massa muscular acelera o metabolismo, melhora a forma corporal e torna o emagrecimento mais eficiente e sustentável a longo prazo.",
  },
  {
    id: "acompanhamento-faq",
    question: "O acompanhamento é apenas para quem quer emagrecer?",
    answer:
      "Não. Atendo pacientes com objetivos variados: emagrecimento, ganho de massa muscular, reposição hormonal, melhora de energia e disposição, performance esportiva e qualidade de vida em geral.",
  },
] as const;

// Social Links
export const SOCIAL_LINKS = [
  {
    platform: "instagram",
    icon: "camera",
    url: "#",
    label: "Instagram",
  },
  {
    platform: "youtube",
    icon: "video_library",
    url: "#",
    label: "YouTube",
  },
  {
    platform: "whatsapp",
    icon: "chat",
    url: WHATSAPP_URL,
    label: "WhatsApp",
  },
] as const;

// Footer Links
export const FOOTER_LINKS = [
  { label: "Termos de Uso", href: "#" },
  { label: "Política de Privacidade", href: "#" },
  { label: "Contato", href: "#" },
] as const;

// Developer Credit
export const DEVELOPER_CREDIT = "@hub.major";
export const CURRENT_YEAR = new Date().getFullYear();

// SEO
export const SITE_URL = "https://www.drlucasnemes.com.br";
export const SEO_KEYWORDS =
  "nutrólogo cuiabá, emagrecimento, nutrologia, reposição hormonal, performance, médico cuiabá";
