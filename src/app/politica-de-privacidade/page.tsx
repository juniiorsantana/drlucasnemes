import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import {
  CLINIC_ADDRESS,
  CLINIC_CITY,
  CLINIC_PHONE,
  CLINIC_PHONE_FORMATTED,
  CLINIC_STATE,
  CRM,
  DOCTOR_NAME,
  SITE_URL,
} from "@/lib/constants";

const description =
  "Saiba como o site do Dr. Lucas Nemes utiliza dados de navegação, cookies e informações de contato e como exercer seus direitos de privacidade.";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description,
  alternates: {
    canonical: `${SITE_URL}/politica-de-privacidade`,
  },
  openGraph: {
    title: `Política de Privacidade | ${DOCTOR_NAME}`,
    description,
    url: `${SITE_URL}/politica-de-privacidade`,
    type: "website",
    locale: "pt_BR",
  },
};

const externalLinkClass =
  "text-accent underline underline-offset-4 hover:text-heading transition-colors break-words";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="bg-surface pt-28 sm:pt-36 pb-20 sm:pb-28">
        <article className="mx-auto max-w-3xl px-6 sm:px-8">
          <header className="mb-12 border-b border-subtle pb-10">
            <Link href="/" className="text-sm text-body hover:text-heading transition-colors">
              Voltar ao início
            </Link>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Seus dados e sua privacidade
            </p>
            <h1 className="mt-4 font-headline text-3xl sm:text-5xl font-semibold tracking-tight leading-tight text-heading">
              Política de Privacidade
            </h1>
            <p className="mt-5 text-sm text-body">
              Última atualização: <time dateTime="2026-09-18">18 de setembro de 2026</time>
            </p>
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-on-surface-variant">
              Esta política explica como os dados são utilizados durante sua visita ao
              site do {DOCTOR_NAME}, no contato com o consultório e na medição dos
              resultados das nossas campanhas.
            </p>
          </header>

          <div className="space-y-10 text-base leading-relaxed text-on-surface-variant [&_h2]:mb-4 [&_h2]:font-headline [&_h2]:text-xl [&_h2]:sm:text-2xl [&_h2]:font-semibold [&_h2]:text-heading [&_p+p]:mt-4 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_strong]:font-semibold [&_strong]:text-heading">
            <section aria-labelledby="responsavel">
              <h2 id="responsavel">1. Quem é responsável e como entrar em contato</h2>
              <p>
                O site apresenta os serviços do {DOCTOR_NAME}, {CRM}, responsável
                pelo tratamento dos dados no âmbito do consultório. O atendimento
                acontece em {CLINIC_ADDRESS}, {CLINIC_CITY} — {CLINIC_STATE}.
              </p>
              <p>
                Para dúvidas sobre esta política ou solicitações relacionadas aos
                seus dados, entre em contato pelo telefone{" "}
                <a href={`tel:+${CLINIC_PHONE_FORMATTED}`} className={externalLinkClass}>
                  {CLINIC_PHONE}
                </a>
                {" "}e informe que deseja tratar de privacidade.
              </p>
            </section>

            <section aria-labelledby="dados">
              <h2 id="dados">2. Quais dados podem ser tratados</h2>
              <ul>
                <li>
                  <strong>Dados de navegação:</strong> endereço IP, data e horário
                  do acesso, páginas visitadas, origem da visita e da campanha,
                  cliques, navegador, sistema operacional, dispositivo e
                  identificadores associados a cookies ou tecnologias semelhantes.
                </li>
                <li>
                  <strong>Dados fornecidos no contato:</strong> nome, telefone e
                  informações que você decidir enviar ao consultório pelo WhatsApp
                  ou informar durante um atendimento telefônico.
                </li>
                <li>
                  <strong>Dados de saúde:</strong> informações de saúde que você
                  compartilhar durante o atendimento exigem cuidado específico e
                  devem se limitar ao necessário para sua solicitação. Evite enviar
                  exames ou detalhes clínicos antes de receber orientação da equipe.
                </li>
              </ul>
              <p>
                Ao clicar em um botão de WhatsApp, o site registra a seção de origem,
                o serviço relacionado ao botão e o caminho da página. Esse registro
                de clique não inclui o conteúdo da conversa, seu nome ou seu telefone.
                A conversa ocorre no WhatsApp, quando você decide enviar a mensagem,
                e segue também a{" "}
                <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className={externalLinkClass}>
                  Política de Privacidade do WhatsApp
                </a>.
              </p>
            </section>

            <section aria-labelledby="finalidades">
              <h2 id="finalidades">3. Para que utilizamos essas informações</h2>
              <p>
                Os dados permitem disponibilizar e manter o site, compreender quais
                conteúdos são acessados, melhorar a navegação, avaliar campanhas e
                medir os cliques que levam ao contato com o consultório. As informações
                fornecidas diretamente à equipe permitem responder dúvidas, organizar
                agendamentos e dar continuidade às solicitações de atendimento.
              </p>
              <p>
                O tratamento também pode ser necessário para cumprir obrigações
                legais e regulatórias ou exercer direitos. A hipótese legal aplicável
                depende da finalidade e da natureza dos dados, incluindo procedimentos
                solicitados pelo titular e consentimento quando exigido. Dados de saúde
                estão sujeitos às hipóteses específicas previstas na LGPD.
              </p>
            </section>

            <section aria-labelledby="ferramentas">
              <h2 id="ferramentas">4. Cookies e ferramentas de medição</h2>
              <p>
                Cookies são pequenos arquivos armazenados pelo navegador. Junto a
                outras tecnologias, eles podem reconhecer um navegador e relacionar
                visitas e interações. O site utiliza as seguintes ferramentas:
              </p>
              <ul>
                <li>
                  <strong>Google Tag Manager:</strong> organiza o carregamento das
                  ferramentas e o envio dos eventos de interação.
                </li>
                <li>
                  <strong>Google Analytics 4:</strong> produz estatísticas sobre
                  visitas, páginas acessadas e cliques nos contatos por WhatsApp.
                </li>
                <li>
                  <strong>Google Ads:</strong> mede conversões de campanhas a
                  partir dos cliques nos botões de WhatsApp.
                </li>
                <li>
                  <strong>Meta Pixel:</strong> registra visualizações de página
                  (PageView) e cliques de contato (Contact), permitindo avaliar
                  resultados de publicidade.
                </li>
              </ul>
              <p>
                Essas ferramentas podem receber informações técnicas da conexão,
                identificadores e dados de navegação conforme suas configurações.
                Consulte a{" "}
                <a href="https://policies.google.com/privacy?hl=pt-BR" target="_blank" rel="noopener noreferrer" className={externalLinkClass}>
                  Política de Privacidade do Google
                </a>, as informações sobre{" "}
                <a href="https://policies.google.com/technologies/partner-sites?hl=pt-BR" target="_blank" rel="noopener noreferrer" className={externalLinkClass}>
                  uso de dados em sites que utilizam serviços Google
                </a>{" "}e a{" "}
                <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer" className={externalLinkClass}>
                  Política de Privacidade da Meta
                </a>.
              </p>
            </section>

            <section aria-labelledby="controles">
              <h2 id="controles">5. Como gerenciar cookies e preferências</h2>
              <p>
                Você pode consultar, apagar ou bloquear cookies nas configurações
                do seu navegador, inclusive cookies de terceiros. As opções variam
                conforme o navegador e podem afetar recursos dos sites que você visita.
                As contas Google e Meta também oferecem controles de privacidade e
                de publicidade. Desativar a personalização de anúncios não elimina
                necessariamente toda a medição de acessos e conversões.
              </p>
              <p>
                Para entender essas tecnologias e suas escolhas, consulte o{" "}
                <a href="https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/guia_orientativo_cookies_e_protecao_de_dados_pessoais" target="_blank" rel="noopener noreferrer" className={externalLinkClass}>
                  guia sobre cookies e proteção de dados pessoais da ANPD
                </a>. Solicitações ao consultório podem ser feitas pelo contato
                indicado nesta política.
              </p>
            </section>

            <section aria-labelledby="compartilhamento">
              <h2 id="compartilhamento">6. Compartilhamento e processamento no exterior</h2>
              <p>
                Os dados podem ser tratados por Google e Meta para as ferramentas
                descritas acima, pela Vercel na hospedagem do site e por prestadores
                que apoiam sua manutenção e operação ou o atendimento do consultório,
                conforme a atividade desempenhada. O uso do WhatsApp e de outros
                serviços externos também está sujeito às políticas de seus provedores.
              </p>
              <p>
                Esses fornecedores podem utilizar infraestrutura localizada fora
                do Brasil. O processamento internacional depende dos serviços
                utilizados e deve observar os requisitos legais aplicáveis às
                transferências de dados. Informações também podem ser fornecidas
                para cumprir uma obrigação legal ou uma determinação de autoridade
                competente.
              </p>
            </section>

            <section aria-labelledby="retencao">
              <h2 id="retencao">7. Por quanto tempo os dados são mantidos</h2>
              <p>
                O período de conservação depende da finalidade do tratamento, da
                necessidade de responder às solicitações, das obrigações legais e
                regulatórias e do exercício de direitos. Dados e cookies mantidos
                pelas ferramentas externas também dependem das configurações e das
                políticas de retenção desses serviços. Você pode solicitar informações
                sobre a conservação dos seus dados pelo canal de contato desta política.
              </p>
            </section>

            <section aria-labelledby="direitos">
              <h2 id="direitos">8. Seus direitos</h2>
              <p>
                Conforme a LGPD e as condições aplicáveis, você pode solicitar
                confirmação do tratamento, acesso e correção de dados; informações
                sobre compartilhamentos; anonimização, bloqueio ou eliminação de
                dados desnecessários, excessivos ou tratados irregularmente; e
                portabilidade nos termos da regulamentação.
              </p>
              <p>
                Quando o tratamento se basear em consentimento, você pode solicitar
                sua revogação e a eliminação dos dados, observadas as exceções legais,
                além de informações sobre a possibilidade de não consentir e suas
                consequências. Também pode se opor a tratamento em desacordo com a
                legislação e solicitar revisão de decisões exclusivamente automatizadas,
                quando aplicável.
              </p>
              <p>
                Para exercer esses direitos, contate{" "}
                <a href={`tel:+${CLINIC_PHONE_FORMATTED}`} className={externalLinkClass}>
                  {CLINIC_PHONE}
                </a>. Poderemos solicitar informações proporcionais para confirmar
                sua identidade e proteger seus dados. Você também pode consultar os{" "}
                <a href="https://www.gov.br/anpd/pt-br/canais_atendimento/cidadao-titular-de-dados" target="_blank" rel="noopener noreferrer" className={externalLinkClass}>
                  canais da ANPD para titulares de dados
                </a>.
              </p>
            </section>

            <section aria-labelledby="seguranca">
              <h2 id="seguranca">9. Segurança e cuidados no contato</h2>
              <p>
                A proteção das informações depende dos recursos de segurança do
                site, dos serviços utilizados e dos cuidados de quem acessa e recebe
                os dados. Nenhum serviço conectado à internet oferece proteção
                absoluta. Utilize os contatos oficiais, compartilhe apenas as
                informações necessárias e avise o consultório se identificar alguma
                situação suspeita envolvendo seus dados.
              </p>
              <p>
                Se o contato envolver dados de crianças ou adolescentes, solicitamos
                que um responsável participe da comunicação e informe essa condição
                à equipe, para que a solicitação receba os cuidados adequados.
              </p>
            </section>

            <section aria-labelledby="atualizacoes">
              <h2 id="atualizacoes">10. Atualizações desta política</h2>
              <p>
                Esta política pode ser atualizada para refletir mudanças no site,
                nos serviços utilizados ou nas práticas de tratamento de dados.
                A data no início da página identifica a versão disponível. Dúvidas
                sobre mudanças ou sobre o uso de seus dados podem ser encaminhadas
                ao consultório pelo telefone informado acima.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}