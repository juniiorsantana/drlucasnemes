import { Metadata } from "next";
import { DOCTOR_NAME, CRM, RQE, SITE_URL } from "@/lib/constants";

const CHECKOUT_URL = "https://pay.hotmart.com/N106123722W";
const PRICE = "37,00";

export const metadata: Metadata = {
  title: "Guia Prático de Dietoterapia Pós-Bariátrica | Dr. Lucas Nemes",
  description:
    "47 receitas funcionais para o pós-bariátrico. Combata queda de cabelo, cansaço e deficiências nutricionais com alimentação certa. Por R$37.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Guia Prático de Dietoterapia Pós-Bariátrica",
    description:
      "47 receitas funcionais desenvolvidas por médico nutrólogo para o metabolismo pós-bariátrico.",
    url: `${SITE_URL}/blog/guia-pos-bariatrico`,
    type: "website",
  },
};

const BENEFITS = [
  {
    icon: "restaurant_menu",
    text: "47 receitas funcionais desenvolvidas especificamente para o metabolismo pós-bariátrico — que entregam os nutrientes que seu corpo mais precisa, no formato que ele consegue absorver",
  },
  {
    icon: "medical_information",
    text: "Entendimento do seu tipo de cirurgia — porque bypass, sleeve e outros procedimentos têm necessidades diferentes, e o guia respeita isso",
  },
  {
    icon: "healing",
    text: "O protocolo alimentar que combate as deficiências mais comuns — as que causam queda de cabelo, fraqueza nas unhas, cansaço e baixa imunidade",
  },
  {
    icon: "schedule",
    text: "Receitas que cabem na sua rotina — sem ingredientes impossíveis, sem tempo de chef, sem culpa",
  },
  {
    icon: "favorite",
    text: "Uma nova relação com a comida — não como restrição, mas como ferramenta de recuperação e qualidade de vida",
  },
];

const FAQ = [
  {
    question: "Para quem é esse guia?",
    answer:
      "Para qualquer pessoa que fez bariátrica — bypass, sleeve, ou outra modalidade — e ainda enfrenta sintomas como queda de cabelo, unhas fracas, cansaço ou dificuldade para saber o que comer.",
  },
  {
    question: "Preciso saber cozinhar?",
    answer:
      "Não. As receitas foram pensadas para o dia a dia real — sem técnicas complicadas.",
  },
  {
    question: "Posso acessar pelo celular?",
    answer:
      "Sim. O guia é digital e pode ser acessado pelo celular, tablet ou computador, imediatamente após a compra.",
  },
  {
    question: "E se eu não gostar?",
    answer: "7 dias de garantia. Reembolso total, sem questionamentos.",
  },
];

function CTAButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={CHECKOUT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2.5 rounded-xl bg-cta-bg px-10 py-4 text-lg font-bold text-cta-text shadow-[0_6px_30px_rgba(13,27,75,0.3)] transition-all duration-300 hover:shadow-[0_12px_48px_rgba(13,27,75,0.5)] hover:-translate-y-1 active:scale-95 ${className}`}
    >
      Quero o Guia Prático — R$ {PRICE}
      <span className="material-symbols-outlined text-xl">arrow_forward</span>
    </a>
  );
}

export default function GuiaPosBariatricoTSL() {
  return (
    <div className="min-h-screen bg-surface">
      {/* ─── Trust bar ──────────────────────────────────────── */}
      <div className="bg-primary text-on-primary">
        <div className="max-w-4xl mx-auto px-6 py-3 flex items-center justify-center gap-3 text-xs font-medium tracking-wide">
          <span className="material-symbols-outlined text-sm">verified</span>
          <span>
            {DOCTOR_NAME} · Médico Nutrólogo · {CRM} · {RQE}
          </span>
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* ─── Hero ─────────────────────────────────────────── */}
        <section className="pt-16 pb-12 text-center">
          <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary text-[11px] font-bold uppercase tracking-widest rounded-full mb-8">
            Guia Prático · Dietoterapia Pós-Bariátrica
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-heading leading-[1.15] tracking-tight mb-6">
            Você Fez a Cirurgia Para Mudar Sua Vida.{" "}
            <span className="text-secondary">
              Então Por Que Seu Cabelo Ainda Está Caindo?
            </span>
          </h1>

          <p className="text-lg text-on-surface-variant leading-relaxed max-w-2xl mx-auto">
            Se você passou pela bariátrica, mas ainda enfrenta queda de cabelo,
            unhas quebrando, cansaço constante ou não sabe exatamente o que pode
            comer — esse texto foi escrito para você.
          </p>
        </section>

        {/* ─── Separador ────────────────────────────────────── */}
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-outline/10" />
          <span className="material-symbols-outlined text-outline/30 text-lg">
            more_horiz
          </span>
          <div className="h-px flex-1 bg-outline/10" />
        </div>

        {/* ─── A História (Empatia) ─────────────────────────── */}
        <section className="py-14">
          <div className="prose-custom space-y-5 text-on-surface-variant leading-[1.85] text-[16px]">
            <p>Você tomou a decisão mais corajosa da sua vida.</p>

            <p>
              Enfrentou o medo, o julgamento de quem não entendia, os meses de
              espera, o pré-operatório, a cirurgia em si — e saiu do outro lado
              com a esperança de que tudo ia mudar.
            </p>

            <p>
              E mudou. O peso foi embora. A balança finalmente virou sua aliada.
            </p>

            <p className="text-heading font-semibold text-lg">
              Só que ninguém te avisou sobre o que vinha depois.
            </p>

            <p>
              Você começou a perceber o ralo cheio de cabelo toda manhã no
              banho. As unhas que antes eram bonitas agora quebram no meio do
              nada. Um cansaço que não passa nem depois de dormir bem. E aquela
              sensação estranha de que o seu corpo está{" "}
              <strong className="text-heading">pedindo socorro</strong> — mas
              você não sabe o que ele quer.
            </p>

            <p>
              Você foi atrás de respostas. Leu artigo. Perguntou no grupo.
              Tentou comer mais proteína. Tomou um suplemento que alguém
              indicou.
            </p>

            <p className="text-heading font-medium">E continua igual.</p>

            <p>
              O pior não é o cabelo. O pior é a sensação de que você fez tudo
              certo... e ainda assim o seu corpo não cooperou.
            </p>
          </div>
        </section>

        {/* ─── O Que Ninguém Te Contou ──────────────────────── */}
        <section className="py-14 border-t border-outline/10">
          <h2 className="text-2xl sm:text-3xl font-bold text-heading mb-6">
            O Que Ninguém Te Contou Sobre o Pós-Operatório
          </h2>

          <div className="space-y-5 text-on-surface-variant leading-[1.85] text-[16px]">
            <p>
              O que poucos falam é que a bariátrica{" "}
              <strong className="text-heading">
                não termina na mesa de cirurgia
              </strong>
              .
            </p>

            <p>Ela começa ali.</p>

            <p>
              O seu estômago mudou. O modo como o seu corpo absorve nutrientes
              mudou. O que funcionava antes — aquela salada, aquele iogurte,
              aquele prato "saudável" — pode não ser suficiente para o que o
              seu metabolismo precisa agora.
            </p>

            <p>
              E quando o seu corpo não recebe o que precisa, ele faz uma
              escolha silenciosa:
            </p>

            <div className="p-6 rounded-2xl bg-surface-container border border-outline/10">
              <p className="text-heading font-semibold mb-4 text-[15px]">
                Ele sacrifica o que considera "dispensável" para proteger o que
                considera vital.
              </p>
              <div className="space-y-2">
                {["Cabelo?", "Unhas?", "Disposição?"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="text-error font-semibold text-[15px]">
                      {item}
                    </span>
                    <span className="text-muted text-sm italic">
                      Dispensável.
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <p>O resultado disso você já conhece de perto.</p>

            <p>
              Não é frescura. Não é falta de força de vontade. Não é porque
              "seu organismo é difícil".
            </p>

            <p className="text-heading font-semibold text-lg">
              É deficiência nutricional — e ela tem solução.
            </p>
          </div>
        </section>

        {/* ─── A Causa Real ─────────────────────────────────── */}
        <section className="py-14 border-t border-outline/10">
          <h2 className="text-2xl sm:text-3xl font-bold text-heading mb-6">
            A Causa Real Por Trás de Tudo Isso
          </h2>

          <div className="space-y-5 text-on-surface-variant leading-[1.85] text-[16px]">
            <p>
              Existe uma razão pela qual isso acontece com tanta gente que fez
              bariátrica:
            </p>

            <p className="text-heading font-semibold text-lg">
              Ninguém ensinou o que comer. De verdade.
            </p>

            <p>
              O hospital deu uma lista genérica. O cirurgião curou a parte
              estrutural. Mas a parte mais importante —{" "}
              <em>
                como alimentar um corpo que agora funciona de um jeito
                completamente diferente
              </em>{" "}
              — ficou no vazio.
            </p>

            <p>Não é culpa sua. É uma falha no sistema.</p>

            <p>
              Depois da bariátrica, o seu corpo tem necessidades específicas de
              proteínas, vitaminas e micronutrientes — que precisam ser
              entregues na forma certa, na quantidade certa, na consistência
              certa.
            </p>

            <p>
              Comer "saudável" não basta. Você precisa comer{" "}
              <strong className="text-heading">funcionalmente</strong> — de um
              jeito que faça sentido para o seu novo metabolismo.
            </p>
          </div>
        </section>

        {/* ─── Quem Criou ───────────────────────────────────── */}
        <section className="py-14 border-t border-outline/10">
          <h2 className="text-2xl sm:text-3xl font-bold text-heading mb-6">
            Quem Criou a Solução
          </h2>

          <div className="space-y-5 text-on-surface-variant leading-[1.85] text-[16px] mb-8">
            <p>
              Foi exatamente isso que levou o{" "}
              <strong className="text-heading">{DOCTOR_NAME}</strong>, médico
              nutrólogo especializado em pacientes pós-bariátricos, a criar o
              que você vai ver agora.
            </p>

            <p>
              Ao longo da sua prática clínica, o Dr. Nemes acompanhou centenas
              de pacientes que chegavam com a mesma história:{" "}
              <em>a cirurgia funcionou, mas o corpo ainda sofre.</em>
            </p>

            <p>
              A causa, em quase todos os casos, era a mesma —{" "}
              <strong className="text-heading">
                ausência de uma alimentação funcional e adaptada para o
                pós-cirúrgico.
              </strong>
            </p>

            <p>
              Não por descuido das pacientes. Mas porque ninguém nunca tinha
              mostrado, de forma prática e acessível, exatamente o que colocar
              no prato.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start gap-6 p-6 rounded-2xl bg-surface-container-lowest border border-outline/5 shadow-editorial">
            <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-3xl">
                stethoscope
              </span>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">
                Autor do guia
              </p>
              <h3 className="text-xl font-bold text-heading mb-2">
                {DOCTOR_NAME}
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Médico Nutrólogo ({CRM} · {RQE}), especializado em pacientes
                pós-bariátricos. Atende em Cuiabá-MT com protocolos
                individualizados baseados em evidência científica.
              </p>
            </div>
          </div>
        </section>

        {/* ─── Apresentação do Produto ──────────────────────── */}
        <section className="py-14 border-t border-outline/10">
          <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-[10px] font-bold uppercase tracking-widest rounded-full mb-5">
            Apresentando
          </span>

          <h2 className="text-2xl sm:text-3xl font-bold text-heading mb-4">
            Guia Prático de Dietoterapia Pós-Bariátrica
          </h2>

          <p className="text-on-surface-variant leading-relaxed text-[16px] mb-10">
            Um guia desenvolvido por médico nutrólogo, com linguagem direta, sem
            complicação — feito para quem precisa de resposta prática, não de
            teoria.
          </p>

          <p className="text-sm font-bold uppercase tracking-widest text-heading mb-6">
            Dentro do guia, você vai encontrar:
          </p>

          <div className="space-y-4">
            {BENEFITS.map((benefit) => (
              <div
                key={benefit.icon}
                className="flex gap-4 p-5 rounded-2xl bg-surface-container-lowest border border-outline/5 shadow-editorial"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center mt-0.5">
                  <span className="material-symbols-outlined text-secondary text-xl">
                    {benefit.icon}
                  </span>
                </div>
                <p className="text-on-surface text-[15px] leading-relaxed">
                  {benefit.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Oferta / Preço ───────────────────────────────── */}
        <section className="py-14 border-t border-outline/10">
          <div className="text-center p-8 sm:p-12 rounded-3xl bg-surface-container-lowest border border-outline/10 shadow-editorial">
            <h2 className="text-2xl sm:text-3xl font-bold text-heading mb-4">
              O Quanto Isso Vale Para Você?
            </h2>

            <p className="text-on-surface-variant leading-relaxed max-w-lg mx-auto mb-8 text-[16px]">
              Uma consulta com um nutrólogo especializado em pós-bariátrico
              custa, em média, R$300 a R$500. E muitas vezes você sai de lá com
              uma lista de orientações que não sabe como transformar em comida de
              verdade.
            </p>

            <p className="text-on-surface-variant mb-8 max-w-lg mx-auto text-[16px]">
              O Guia Prático de Dietoterapia do Dr. Nemes entrega esse
              conhecimento em forma de{" "}
              <strong className="text-heading">
                receitas prontas para aplicar
              </strong>{" "}
              — pelo valor de:
            </p>

            <div className="flex flex-col items-center gap-1 mb-4">
              <p className="text-sm text-muted line-through">
                R$ 300–500 (valor de uma consulta)
              </p>
              <p className="text-5xl sm:text-6xl font-bold text-heading">
                R$ <span className="text-secondary">{PRICE}</span>
              </p>
            </div>

            <p className="text-sm text-muted mb-10">
              Isso mesmo. Uma única vez. Sem mensalidade, sem renovação.
            </p>

            <CTAButton />

            <p className="mt-5 text-xs text-muted">
              Acesso imediato · Pagamento seguro via Hotmart
            </p>
          </div>
        </section>

        {/* ─── Garantia ─────────────────────────────────────── */}
        <section className="py-14 border-t border-outline/10">
          <div className="flex flex-col sm:flex-row items-center gap-6 p-6 sm:p-8 rounded-2xl bg-surface-container-low border border-outline/5">
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-secondary text-3xl">
                shield
              </span>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-bold text-heading mb-2">
                Risco Zero — Garantia de 7 Dias
              </h3>
              <p className="text-[15px] text-on-surface-variant leading-relaxed mb-3">
                Se em 7 dias você abrir o guia, ler, tentar as receitas e sentir
                que não era o que precisava — você pede o reembolso integral. Sem
                burocracia. Sem pergunta.
              </p>
              <p className="text-[15px] text-on-surface-variant leading-relaxed">
                Porque quem está sofrendo com queda de cabelo depois da
                bariátrica, e finalmente entende{" "}
                <strong className="text-heading">por que</strong> isso acontece
                e <strong className="text-heading">o que fazer</strong> — não
                quer voltar para antes.
              </p>
            </div>
          </div>
        </section>

        {/* ─── CTA intermediário ────────────────────────────── */}
        <section className="py-10 text-center">
          <h2 className="text-2xl font-bold text-heading mb-4">
            Seu Corpo Passou Por Muito. Ele Merece o Que Falta.
          </h2>
          <p className="text-on-surface-variant mb-8 text-[16px]">
            Você já fez a parte mais difícil. Agora é só aprender a alimentar o
            corpo que você reconstruiu.
          </p>
          <CTAButton />
          <p className="mt-4 text-xs text-muted">
            Acesso imediato · Garantia de 7 dias · Desenvolvido por médico
            especialista
          </p>
        </section>

        {/* ─── FAQ ──────────────────────────────────────────── */}
        <section className="py-14 border-t border-outline/10">
          <h2 className="text-2xl font-bold text-heading mb-8">
            Perguntas Frequentes
          </h2>

          <div className="space-y-4">
            {FAQ.map((item) => (
              <details
                key={item.question}
                className="group rounded-xl bg-surface-container-lowest border border-outline/5 shadow-editorial overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none text-heading font-semibold text-[15px]">
                  {item.question}
                  <span className="material-symbols-outlined text-muted text-lg transition-transform duration-200 group-open:rotate-180 shrink-0">
                    expand_more
                  </span>
                </summary>
                <div className="px-6 pb-5 text-sm text-on-surface-variant leading-relaxed">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ─── CTA Final ────────────────────────────────────── */}
        <section className="py-16 text-center border-t border-outline/10">
          <CTAButton />
          <p className="mt-4 text-xs text-muted">
            R$ {PRICE} · Acesso imediato · Garantia 7 dias
          </p>
        </section>
      </main>

      {/* ─── Footer mínimo ────────────────────────────────── */}
      <footer className="border-t border-outline/10 bg-surface-container-low">
        <div className="max-w-3xl mx-auto px-6 py-6 text-center text-xs text-muted space-y-1">
          <p>
            Guia desenvolvido pelo {DOCTOR_NAME}, Médico Nutrólogo · {CRM} ·{" "}
            {RQE}
          </p>
          <p>
            Este produto não substitui acompanhamento médico individualizado.
          </p>
        </div>
      </footer>
    </div>
  );
}
