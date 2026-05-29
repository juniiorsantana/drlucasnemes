# 📋 Blueprint — Site Dr. Lucas Nemes
> Versão 1.0 | Stack: Next.js + React + Tailwind CSS  
> Formato: Landing Page Única (Single Page Application)  
> Status: Estrutura base — fotos e efeitos a adicionar nas próximas iterações

---

## 🎨 Design System - teste

### Identidade Visual
- **Estilo:** Moderno e minimalista com toque premium
- **Tom:** Confiança médica + sofisticação + leveza

### Paleta de Cores (sugestão base — ajustar conforme preferência)
```css
/* Primárias */
--color-primary:     #185FA5;   
--color-accent:      #378ADD;   
--color-gold:        #dbbc68ff;  

/* Neutras */
--color-bg:          #F4F8FD;   /* Off-white quente */
--color-surface:     #E6F1FB;   /* Branco puro (cards) */
--color-text:        #1C1C1C;   /* Quase preto */
--color-muted:       #6B7280;   /* Cinza texto secundário */
--color-border:      #E5E7EB;   /* Bordas suaves */
```

### Tipografia (Google Fonts)
```
Títulos:    Playfair Display (serif) — elegância e autoridade médica
Corpo:      Inter (sans-serif) — leitura limpa e moderna
Destaque:   Inter Medium/Semibold — para CTAs e labels
```

### Espaçamento
- Seções: `py-24` (96px) no desktop, `py-16` no mobile
- Container: `max-w-6xl mx-auto px-6`
- Grids: Gap padrão `gap-8`

---

## 🗂️ Estrutura de Arquivos (Next.js App Router)

```
/app
  layout.tsx          ← Fonte, metadata, WhatsApp botão flutuante
  page.tsx            ← Importa todas as seções
/components
  /sections
    Navbar.tsx
    Hero.tsx
    About.tsx
    Services.tsx
    HowItWorks.tsx
    Technology.tsx
    Clinic.tsx
    FAQ.tsx
    FinalCTA.tsx
    Footer.tsx
  /ui
    Button.tsx
    Card.tsx
    SectionTitle.tsx
    WhatsAppButton.tsx
    AccordionItem.tsx
```

---

## 📐 Seções — Conteúdo e Especificações

---

### 1. NAVBAR
**Tipo:** Fixed top, com blur backdrop ao rolar

**Conteúdo:**
- Logo: `Dr. Lucas Nemes` (tipografia Playfair + subtítulo "Nutrólogo | CRM/MT 8060")
- Links âncora: `Sobre` · `Especialidades` · `Tecnologia` · `Clínica` · `FAQ`
- CTA botão direito: `Agendar Consulta` → link WhatsApp

**Comportamento:**
- Transparente no topo do Hero
- Fundo branco/blur após 80px de scroll
- Menu hamburguer no mobile

**Props/variáveis a preencher:**
```ts
const WHATSAPP_NUMBER = "556596971216"
const WHATSAPP_MESSAGE = "Olá, Dr. Lucas! Gostaria de agendar uma consulta."
```

---

### 2. HERO
**Tipo:** Full viewport height, imagem de fundo com overlay escuro

**Conteúdo:**
```
[BADGE]       Dr. Lucas Nemes · CRM/MT 8060 · RQE 7982

[H1]          Nutrologo em Cuiabá:
              Elimine o cansaço e transforme seu corpo com acompanhamento especializado

[Subtítulo]   Especialista em Emagrecimento Duradouro,
              Reposição Hormonal e Performance.

[CTA Primário]   → Agendar Minha Consulta  (WhatsApp)

```

**Visual:**
- Imagem de fundo: foto do Dr. Lucas (placeholder que vou adicionar posteriormente)
- Texto alinhado à esquerda no desktop, centralizado no mobile
- Animação de entrada: fade-in + slide-up (Framer Motion)

### 3. Nutrologia Médica em Cuiabá
**Tipo:** Seção com 3 cards visuais, com um botão de "+" que vira o card e mostra mais informações.  
**Âncora:** `id="nutrologia-medica-cuiaba"`

**Conteúdo:**
```
[Card1]   Titulo: Emagrecimento Saúdavel
          Subtitulo: Abordagem simples e eficiente para resultados duradouros
          [+]

[Card2]   Titulo: Longevidade e Bem-estar
          Subtitulo: Cuide do seu corpo e mente para uma vida melhor
          [+]

[Card3]   Titulo: Alta Performance
          Subtitulo: Máximo desempenho através da nutrição de precisão
          [+]

```

**Visual:**
- Imagem dos cards: (placeholder que vou adicionar posteriormente para cada card)
- Texto alinhado ao centro
- Animação de entrada: fade-in + slide-up (Framer Motion)
- Animação de click: o card vira e mostra mais informações


---

### 3. SOBRE (Quem Sou Eu)
**Tipo:** Duas colunas — foto à esquerda, texto à direita

**Conteúdo:**
```
[tag]   QUEM SOU EU

[H1]      Dr. Lucas Nemes
          Médico Nutrólogo Especialista em emagrecimento em Cuiabá

[Texto]
Sou o Dr. Lucas Nemes, graduado em medicina pela Universidade Federal de Mato Grosso (UFMT), e especialista pela ABRAN/AMB, é referência no tratamento da obesidade e emagrecimento saudável em Cuiabá e Região do MT

Minha abordagem vai além da prescrição tradicional. Trabalhamos com mudança comportamental profunda, utilizando tecnologia de ponta e acompanhamento individualizado para garantir resultados duradouros.

[Credenciais — badges visuais]
✓ CRM/MT 8060
✓ RQE 7982
✓ Especialista em Nutrologia
✓ Especialista em Reposição Hormonal
✓ Especialista em Performance
```

**Visual:**
- Foto do médico: Bordas arredondada, sombra suave (`rounded-2xl shadow-xl`)
- Badges: pequenos chips verdes com ícone de check
- Fundo da seção: branco

**Notas de desenvolvimento:**
- [ ] Inserir foto profissional do Dr. Lucas (`/images/dr-lucas.jpg`)

---

### 4. TECNOLOGIA
**Tipo:** Stack de cards com sobreposição (sticky scroll)
**Âncora:** `id="tecnologia"`

**Estrutura da seção**
- Altura: min-height: 280vh
- Fundo: neutro (off-white)
- Comportamento: scroll progressivo com sobreposição de blocos

**Label:** COMO AVALIAMOS

**H2:** Diagnóstico de Precisão com Tecnologia de Última Geração

**3 Blocos — layout alternado (imagem esq/dir):**

**Bloco 1 — Calorimetria Indireta**
```
Título:  Calorimetria Indireta
Texto:   Descubra o que seu corpo realmente precisa.
         Analisamos seu metabolismo real para criar estratégias
         nutricionais baseadas nos seus dados — não em médias populacionais.
         Com esses dados, desenvolvemos protocolos que acompanham
         mudanças reais na sua composição corporal.
Imagem:  /images/calorimetria.jpg  [placeholder]
```

**Bloco 2 — Bioimpedância Avançada**
```
Título:  Bioimpedância Avançada
Texto:   Análise completa que vai além do peso na balança.
         Avaliamos massa muscular, gordura visceral, hidratação
         e densidade óssea para fundamentar diagnósticos precisos
         e tratamentos personalizados.
Imagem:  /images/bioimpedancia.jpg  [placeholder]
```

**Bloco 3 — Polissonografia Domiciliar (Biologix)**
```
Título:  Polissonografia Domiciliar
Subtítulo: Tecnologia Biologix
Texto:   Avaliação completa do sono no conforto da sua casa.
         O dispositivo Biologix monitora todos os parâmetros
         essenciais durante a noite. Com base nos resultados,
         desenvolvemos estratégias para melhorar sua qualidade
         de sono e potencializar todos os outros tratamentos.
Imagem:  /images/polissonografia.jpg  [placeholder]
```

**Notas de desenvolvimento:**
- [ ] Inserir fotos reais dos equipamentos
- [ ] Animação de entrada por scroll (intersection observer)
- [ ] Considerar ícone animado/badge "Tecnologia de Ponta" no header da seção

---

### 5. ESPECIALIDADES / SERVIÇOS
**Tipo:** Grid de cards (3 colunas desktop, 1 mobile)
**Âncora:** `id="servicos"`

**Conteúdo — 3 cards:**

**Card 1 — Emagrecimento Duradouro**
```
Ícone: [escala/peso]
Título: Emagrecimento com Base Científica
Texto: Protocolos personalizados que vão além da balança.
       Analisamos composição corporal real, metabolismo e
       hábitos para criar estratégias que funcionam a longo prazo.
```

**Card 2 — Reposição Hormonal**
```
Ícone: [célula/hormônio]
Título: Reposição Hormonal
Texto: Avaliação completa dos níveis hormonais com tratamento
       individualizado para restaurar energia, disposição
       e qualidade de vida.
```

**Card 3 — Performance**
```
Ícone: [raio/troféu]
Título: Performance e Hipertrofia
Texto: Estratégias nutricionais e metabólicas para quem
       busca máximo desempenho físico, ganho muscular
       e recuperação acelerada.
```

**Visual:**
- Cards brancos com borda sutil, hover com sombra elevada
- Ícone colorido no topo de cada card (Lucide React ou Phosphor Icons)
- Fundo da seção: off-white (`--color-bg`)
- Botão ao final da seção: `Quero Saber Mais` → âncora #tecnologia

---

### 5. COMO FUNCIONA
**Tipo:** Timeline / Steps numerados
**Âncora:** `id="como-funciona"`

**Label:** COMO FUNCIONA

**H2:** Sua Jornada de Transformação em 3 Passos

**Passos:**
```
01  Consulta Inicial
    Avaliamos suas metas, histórico de saúde e realizamos
    os exames de diagnóstico precisos.

02  Plano Personalizado
    Com base nos dados, criamos um protocolo exclusivo
    para o seu metabolismo e objetivos.

03  Acompanhamento Contínuo
    Monitoramos sua evolução e ajustamos o plano para
    garantir resultados reais e duradouros.
```

**CTA ao final:** `Quero Agendar Minha Consulta` → WhatsApp

**Visual:**
- Linha vertical conectando os passos (desktop)
- Números grandes em verde com tipografia Playfair
- Fundo alternado ou gradiente sutil

---

### 7. CLÍNICA
**Tipo:** Duas colunas — galeria de fotos à esquerda, diferenciais à direita
**Âncora:** `id="clinica"`

**Label:** ONDE ATENDO

**H2:** Estrutura Completa e Moderna para Seu Tratamento
**Subtítulo:** Especializado na Clínica HiperbáricaMT

**Diferenciais (lista com ícones):**
```
🅿️  Estacionamento
    Mais comodidade e tranquilidade no atendimento

❄️  Climatizados
    Conforto térmico em todos os ambientes

♿  Acessibilidade
    Infraestrutura adaptada com rampas e acessos amplos

🧹  Higienização
    Ambiente limpo e seguro com padrões rigorosos de limpeza

🔬  Tecnologia de Ponta
    Equipamentos modernos e equipe altamente qualificada
```

**Informações de Funcionamento:**
```
Horário:   Segunda a Sexta, 07:00 às 19:00
Endereço:  R. das Begônias, 615 (Anexo B), Jardim Cuiabá,
           Cuiabá - MT, CEP 78043-112
Telefone:  (65) 99697-1216
```

**Visual:**
- Galeria: grid 2x2 de fotos da clínica (placeholders por enquanto)
- Badge "Ambiente de Excelência" no topo da coluna de fotos
- Mapa Google Maps embutido abaixo (opcional)

**Notas de desenvolvimento:**
- [ ] Inserir fotos reais da clínica
- [ ] Adicionar iframe Google Maps com endereço

---

### 8. FAQ
**Tipo:** Accordion expansível
**Âncora:** `id="faq"`

**Label:** PERGUNTAS FREQUENTES

**H2:** Tire Suas Dúvidas

**Perguntas:**
```
Q: Para que serve o exame de calorimetria indireta?
A: [Preencher com resposta do Dr. Lucas]
   Sugestão: A calorimetria indireta mede com precisão o quanto
   de energia seu corpo gasta em repouso e durante atividades.
   Com esse dado, calculamos exatamente quantas calorias você
   precisa consumir — eliminando achismos e dietas genéricas.

Q: Para que serve o exame de bioimpedância?
A: [Preencher com resposta do Dr. Lucas]
   Sugestão: A bioimpedância avançada analisa sua composição
   corporal completa: massa muscular, gordura (total e visceral),
   hidratação e muito mais. Vamos muito além do peso na balança.

Q: Para que serve a Polissonografia Domiciliar (Biologix)?
A: [Preencher com resposta do Dr. Lucas]
   Sugestão: A polissonografia avalia a qualidade do seu sono
   em casa, sem desconforto. O sono ruim é um dos maiores
   sabotadores do emagrecimento e da saúde hormonal —
   identificar e tratar distúrbios do sono potencializa
   todos os outros tratamentos.

Q: Quais são os benefícios da hipertrofia muscular no emagrecimento?
A: [Preencher com resposta do Dr. Lucas]
   Sugestão: Músculo ativo consome mais energia mesmo em repouso.
   Aumentar sua massa muscular acelera o metabolismo,
   melhora a forma corporal e torna o emagrecimento mais
   eficiente e sustentável a longo prazo.

Q: O acompanhamento é apenas para quem quer emagrecer?
A: [Preencher com resposta do Dr. Lucas]
   Sugestão: Não. Atendo pacientes com objetivos variados:
   emagrecimento, ganho de massa muscular, reposição hormonal,
   melhora de energia e disposição, performance esportiva
   e qualidade de vida em geral.
```

**Visual:**
- Accordion com animação suave de abertura/fechamento
- Ícone `+` / `−` à direita de cada item
- Separador sutil entre itens
- Fundo branco, seção com fundo off-white

---

### 9. FINAL CTA
**Tipo:** Seção de conversão, fundo verde escuro

**Conteúdo:**
```
[H2]   Dê o Primeiro Passo para uma Vida Mais Saudável

[Texto] Comece com uma consulta inicial. Avaliamos suas metas,
        analisamos seus dados e montamos um plano que realmente
        funciona. Estamos prontos para ajudar você.

[CTA]  → Agendar Minha Consulta Agora  (WhatsApp)
```

**Visual:**
- Fundo: `bg-primary` 
- Texto: branco
- Botão: verde esmeralda ou dourado
- Ícone WhatsApp no botão

---

### 10. FOOTER
**Tipo:** Rodapé completo, fundo quase preto

**Conteúdo:**
```
[Col 1 — Identidade]
Dr. Lucas Nemes
Médico Nutrólogo
CRM/MT 8060 · RQE 7982

[Col 2 — Links Rápidos]
Sobre
Especialidades
Tecnologia
Clínica
FAQ
Agendar Consulta

[Col 3 — Contato]
📍 R. das Begônias, 615 (Anexo B)
   Jardim Cuiabá, Cuiabá - MT
   CEP 78043-112

📱 (65) 9 9999-5515

🕐 Seg–Sex: 07:00 às 19:00

[Redes Sociais]
[ Instagram ]  [ WhatsApp ]

[Linha final]
© 2025 Dr. Lucas Nemes – Todos os direitos reservados.
Desenvolvido por @hub.major
```

---

## 📱 Componente Flutuante — WhatsApp

```tsx
// Fixo no canto inferior direito, sempre visível
// Aparece após 3 segundos ou 200px de scroll

<WhatsAppButton
  number="556596971216"
  message="Olá, Dr. Lucas! Gostaria de agendar uma consulta."
  label="Agendar Consulta"
/>
```

---

## 🔗 Links e Dados de Contato

| Campo | Valor |
|-------|-------|
| WhatsApp | (65) 9 9999-5515 |
| Número formatado | 5565999995515 |
| Endereço | R. das Begônias, 615, Anexo B, Jardim Cuiabá, Cuiabá - MT |
| CEP | 78043-112 |
| CRM | CRM/MT 8060 |
| RQE | RQE 7982 |
| Horário | Segunda a Sexta, 07:00 às 19:00 |
| Desenvolvido por | @hub.major |

---


## ⚙️ Dependências Recomendadas (Next.js)

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.0.0",
    "tailwindcss": "^3.4.0",
    "framer-motion": "^11.0.0",
    "lucide-react": "^0.400.0",
    "@radix-ui/react-accordion": "^1.1.0"
  }
}
```

---

## ✅ Checklist de Desenvolvimento

### Fase 1 — Estrutura Base (este documento)
- [x] Blueprint de conteúdo completo
- [x] Mapeamento de todas as seções
- [x] Paleta de cores e tipografia definidas
- [x] Mapa de imagens necessárias

### Fase 2 — Desenvolvimento
- [ ] Setup Next.js + Tailwind + Framer Motion
- [ ] Navbar com scroll behavior
- [ ] Hero com placeholder
- [ ] Seção Sobre
- [ ] Cards de Especialidades
- [ ] Blocos de Tecnologia
- [ ] Timeline "Como Funciona"
- [ ] Seção Clínica
- [ ] FAQ Accordion
- [ ] CTA Final
- [ ] Footer completo
- [ ] Botão WhatsApp flutuante
- [ ] Responsividade mobile

### Fase 3 — Assets
- [ ] Inserir fotos reais do Dr. Lucas
- [ ] Inserir fotos da clínica
- [ ] Inserir fotos dos equipamentos
- [ ] Ajustar paleta de cores com aprovação do cliente

### Fase 4 — Efeitos e Animações
- [ ] Animações de entrada por scroll (Framer Motion)
- [ ] Parallax no Hero
- [ ] Hover states nos cards
- [ ] Transições suaves no accordion
- [ ] Loading skeleton (opcional)

### Fase 5 — SEO e Performance
- [ ] Metadata (title, description, OG tags)
- [ ] Schema markup (MedicalBusiness, Physician)
- [ ] Otimização de imagens (next/image)
- [ ] Core Web Vitals check
- [ ] Google Analytics / Pixel (se necessário)

---

*Blueprint gerado com base no conteúdo do site atual (Dr. Lucas Nemes — Médico Nutrólogo)*  
*Próxima etapa: desenvolvimento de cada seção individualmente com código React/Next.js*