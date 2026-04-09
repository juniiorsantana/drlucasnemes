Crie uma seção React chamada About em src/components/sections/About.tsx.
Conteúdo:

Nome: Dr. Lucas Nemes
Título: Nutrólogo Especialista em Emagrecimento em Cuiabá-MT
Credenciais: CRM/MT 8060 · RQE 7982
Parágrafo 1: Dr. Lucas Nemes, graduado em Medicina pela UFMT e Especialista em Nutrologia pela ABRAN/AMB, é referência no tratamento da obesidade e emagrecimento saudável em Cuiabá e região metropolitana.
Parágrafo 2: Nossa abordagem vai além da prescrição tradicional. Trabalhamos com mudança comportamental profunda, utilizando tecnologias avançadas. Cada paciente é único — por isso, desenvolvemos tratamentos personalizados que consideram aspectos físicos, emocionais e comportamentais, garantindo resultados duradouros.
Botão WhatsApp: usa a constante WHATSAPP_URL de @/lib/constants, texto Agende Uma Consulta Agora, ícone WhatsApp
Foto: src="/images/dr-lucas.jpg", alt="Dr. Lucas Nemes", use next/image com fill ou width/height

Layout:

Duas colunas em desktop (lg:grid-cols-2), coluna única empilhada no mobile
Foto à esquerda com rounded-3xl, leve shadow-xl, sem borda pesada
Conteúdo à direita com espaçamento generoso
Fundo da seção: bg-surface (usa a variável do projeto)

Tipografia e estilo:

Título H2 grande, font-headline font-extrabold text-primary
Credenciais em destaque com text-secondary font-semibold text-sm tracking-widest uppercase
Parágrafos com text-on-surface-variant leading-relaxed
Usa SectionLabel de @/components/ui/SectionLabel com o texto Sobre o Médico

Animações com Framer Motion:

Foto entra da esquerda: initial={{ opacity: 0, x: -40 }} → animate={{ opacity: 1, x: 0 }} com transition={{ duration: 0.7, ease: "easeOut" }}
Conteúdo entra da direita: initial={{ opacity: 0, x: 40 }} → animate={{ opacity: 1, x: 0 }} com transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
Usa whileInView com viewport={{ once: true }} para disparar só quando entrar na tela
Botão com whileHover={{ scale: 1.03 }} e whileTap={{ scale: 0.97 }}

Redes sociais (ícones simples com lucide-react ou SVG inline, cor text-primary, hover text-secondary):

Facebook: https://facebook.com/drlucasnemes
Instagram: https://instagram.com/drlucasnemes
Nenhum link externo para X/Twitter por ora

Observações:

Não criar CSS externo, tudo Tailwind
Componente sem props obrigatórias
Exportação default