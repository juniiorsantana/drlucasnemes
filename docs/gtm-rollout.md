# GTM: entrega e publicação

Data: 18/09/2026. Site: https://www.drlucasnemes.com.br.

## Implementação

- App Router com Next.js 16.2.2 e `@next/third-parties` fixado em 16.2.2. O layout raiz carrega `GoogleTagManager` com `GTM-NP33SDP9`.
- Removidos o carregamento direto de `gtag/js?id=AW-11248666884`, sua configuração, a conversão direta por `gtag` e o script da MajorHub. GA4, Google Ads e Meta permanecem sob responsabilidade do contêiner já configurado pelo cliente.
- A home publica a meta `google-site-verification` com o valor `7QKrurk2gZexxJCvJyHvBEUG7c-e5mTn0vjPPNF-NSM` pela API de metadata.
- Telefone e WhatsApp usam o número confirmado pelo usuário: `5565996971216`. Rodapé: `(65) 99697-1216`, com `tel:+5565996971216`. Clínica: `Gastro MT — Anexo B (HMT)`.
- `drlucasnemes1.jpg`: 54.205 bytes; `drlucasnemes2.avif`: 91.699 bytes. Ambos com largura de 1200 px e qualidade 70, abaixo de 150 KB cada.
- Hero mobile usa `/bgheroMobile.webp` (45.310 bytes), com ajustes de apresentação e espaço para o botão principal na primeira tela. Conferir visualmente em dispositivos reais após a publicação.

## Eventos de WhatsApp

Os links de contato usam `src/components/ui/WhatsAppLink.tsx`, que chama `sendGTMEvent` antes da navegação. Campos:

| Campo | Valor |
|---|---|
| `event` | `clique_whatsapp` |
| `origem` | Seção do link |
| `servico` | `emagrecimento`, `reposicao_hormonal`, `pos_bariatrico` ou `geral` (padrão) |
| `pagina` | `window.location.pathname`, sem query string |

Origens aceitas: `hero`, `card_emagrecimento`, `card_longevidade`, `card_performance`, `sobre`, `tecnologia`, `servicos`, `clinica`, `cta_final`, `flutuante`, `rodape` e `blog`. Também foram previstas `navbar` e `bio` para pontos adicionais do site.

Mensagens específicas:

- Emagrecimento: “Olá, Dr. Lucas! Quero uma avaliação para emagrecimento.”
- Reposição hormonal: “Olá, Dr. Lucas! Quero uma avaliação sobre reposição hormonal.”
- Pós-bariátrica: “Olá, Dr. Lucas! Sou pós-bariátrico(a) e quero uma avaliação.”
- Demais contatos: “Olá, Dr. Lucas! Gostaria de agendar uma avaliação.”

O botão de **compartilhar artigo** do blog mantém `https://wa.me/?text=...`, sem destinatário e sem `clique_whatsapp`. Essa é uma decisão de implementação: compartilhar um artigo não demonstra contato com o consultório; tratá-lo como conversão inflaria a medição. Os CTAs de agendamento do blog usam o componente de contato.

## Política de Privacidade

O usuário autorizou uma política inicial padrão para revisão posterior do consultório. A página local `/politica-de-privacidade` e seu link direto no rodapé fazem parte desta entrega; não é necessária variável de ambiente para exibir o link.

O consultório deve revisar o texto e confirmar as práticas descritas, os responsáveis e os meios de atendimento aos titulares. A inclusão da página não constitui validação de conformidade com a LGPD. Essa revisão futura não impede a entrega autorizada da versão inicial.

## Auditoria do script MajorHub

Fonte inspecionada: https://tracker.majorhub.com.br/tracker.js. O JavaScript público identifica-se como **LeadSense 2.0.0**, com 47.299 bytes e SHA-256 `e61a2256f44dc91a7441e39d57471ca55bf6e5f7159ce0cf57c4dc2996550bb7` na data da auditoria.

O código gera IDs de visitante e sessão, mantém perfil em `localStorage` e cookies (o cookie de visitante dura 365 dias), e registra URL completa, título, referência, UTMs, dispositivo, navegador, idioma, fuso e resolução. Também registra cliques com texto e destino, rolagem, permanência, inatividade, mudança de aba, intenção de saída e navegação entre páginas.

Há capacidade de identificar nome, e-mail e WhatsApp de formulários enviados e de capturar respostas de popups/quizzes. Não foram encontrados formulários ou chamadas próprias de identificação no código do site; a configuração remota de popups não foi confirmada. Essas capacidades não significam que formulários ou quizzes estivessem ativos neste site.

Destinos definidos no script, sob `https://wxysuklwgqtobetlhnjb.supabase.co/functions/v1`:

| Endpoint | Uso no JavaScript |
|---|---|
| `track-events` | POST de eventos agrupados, a cada 5 segundos ou 10 eventos |
| `identify-lead` | POST de dados de contato, respostas personalizadas, IDs e UTMs |
| `enrich-ip` | GET para enriquecimento de IP/localização e detecção de bot |
| `get-config` | GET de configuração de popups |

O layout anterior carregava o rastreador automaticamente no modo padrão, sem integração própria de opt-in encontrada no projeto. O script foi removido conforme a alternativa autorizada no pedido. A inspeção do JavaScript não comprova retenção no servidor, destinatários posteriores ou finalidade contratual. Nenhum evento de teste ou dado de paciente foi enviado por esta auditoria.

A consulta opcional da configuração remota foi rejeitada pela aprovação automática por envolver envio de um token local a endpoint externo. A tentativa não foi contornada; a auditoria se limita ao código público e não confirma popups ativos.

## Validação local

- `npm run build`: aprovado, incluindo TypeScript e geração das 14 páginas estáticas.
- `npm run lint`: zero erros; 12 avisos existentes de imagens/fontes e variáveis sem uso.
- Chrome/Playwright sobre o build de produção: telas 320×568, 390×844, 768×1024 e 1440×900. Fundo carregado e CTA do hero completamente dentro da primeira tela em todas; capturas revisadas visualmente.
- 65 contatos exercitados entre home (incluindo menu mobile e flutuante), bio e dois artigos, com conferência de evento único, origem, serviço, caminho, destinatário e mensagens. Expansão do flutuante mobile não gera conversão antes da navegação.
- Confirmados: única solicitação do contêiner GTM por carregamento, remoção de scripts diretos antigos, meta do Search Console, telefone, página de política e seu canonical/link no rodapé. Nenhum erro de execução no navegador.
- O download do GTM foi interceptado durante os testes locais para evitar conversões artificiais. Essas verificações comprovam a integração do site e os eventos no dataLayer; não comprovam o recebimento no GA4, Ads ou Meta.

## Publicação

**Validação local concluída em 19/09/2026; publicação ainda não confirmada neste registro.** A integração existente foi identificada em leitura: repositório `juniiorsantana/drlucasnemes`, branch `main`, com deployments `Production` criados por `vercel[bot]`. A produção responde como Vercel. O último deploy observado antes destas alterações corresponde ao commit `8ba071b` e estava concluído com sucesso.

Roteiro:

1. Revisar o diff e concluir os checks locais aplicáveis: `npm run lint` e `npm run build`. Registrar os resultados efetivos da entrega.
2. Conferir a página inicial de privacidade, seu link no rodapé e registrar a revisão futura pelo consultório.
3. Publicar as alterações na branch `main` pelo fluxo autorizado e acompanhar o deployment da Vercel até o resultado final.
4. Conferir o domínio público e executar a validação abaixo. Manter referência ao commit/deploy publicado para eventual reversão.

## Validação após o deploy

1. Na home pública, conferir a meta do Search Console, telefone, clínica, política e imagens. Em mobile, verificar o fundo do hero e se o CTA principal aparece na primeira tela.
2. No Tag Assistant/Preview, conferir o contêiner `GTM-NP33SDP9` e os disparos de GA4, Google Ads e Meta configurados nele. Verificar que a tag AW direta e o tracker MajorHub não foram carregados pelo código do site.
3. Clicar nos contatos de diferentes seções, incluindo blog e bio. Conferir um `clique_whatsapp` por clique, com `origem`, `servico` e `pagina` corretos, destinatário `5565996971216` e mensagem esperada. Compartilhar artigo não deve gerar conversão de contato.
4. No GA4, verificar `clique_whatsapp` em tempo real. No Meta Events Manager, verificar `Contact` em “Testar eventos”.
5. No Google Ads, acompanhar a ação de conversão configurada pelo cliente (“Contato Wpp”/“Clique WhatsApp”) e sua atualização de status nas 24 horas seguintes, conforme o roteiro recebido.
6. Após confirmar a publicação, avisar o Dr. Lucas pelo canal definido, enviando URL, commit/deploy e pendências para a validação nas contas.

Os testes nas contas de GTM, GA4, Meta, Google Ads e Search Console não estão comprovados por este documento. O aviso ao Dr. Lucas depende de publicação concluída e canal de contato definido.
