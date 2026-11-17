# EletricistaResidencial – Refatoração estrutural
## Problema
assets/index.js (~19 mil linhas, bundle Vite compilado/formatado) sem código-fonte. Objetivo: dividir em módulos <1000 linhas, preservando 100% o comportamento, build e GitHub Pages.
## Decisões do usuário
- Reconstruir o código-fonte em módulos (source/ com Vite 4)
- Publicação em poucos arquivos JS (index.js, vendor.js, vendor-react.js)
## Implementado (2026-06)
- source/: 35 arquivos JS/JSX (maior: 88 linhas) + styles/index.css original
- vite.config.js: saída na raiz (index.html + assets/), nomes fixos, modulepreload, scripts inline do index.html preservados sem reprocessamento
- Versões das libs iguais às do bundle (React 18.3.1, framer-motion 10.18.0, lucide-react 0.285, react-helmet 6.1.0, radix toast 1.2.x, tailwind-merge 1.14)
- Teste: DOM renderizado idêntico (md5) ao original, meta/SEO idênticos, todos os botões abrem os mesmos destinos, scroll idêntico, mobile idêntico
## Backlog
- Publicar via Save to Github

## Conversões Google Ads (iteração 2)
- GTM-N8PP79HM adicionado (snippet oficial head + noscript), gtag.js original mantido
- Evento GA4 `generate_lead` + dataLayer `lead_click` (lead_method, lead_location) em todos os botões
- Número da seção Contato e do rodapé clicáveis (tel:)
- Botões de ligar discam o número exibido em [data-phone-display] (compatível com número de encaminhamento do Google Ads)
- Pendente (usuário): criar tag "Chamadas do site" no GTM com número "(64) 99286-9608"

## Venda fechada + rodapé (iteração 3)
- services/adAttribution.js: captura gclid/gbraid/wbraid (localStorage ec_ad_click, 90 dias), gera código EC-XXXXXX
- Mensagem WhatsApp recebe " Código: EC-XXXXXX" somente para visitantes vindos de anúncio
- lead_code, ad_click_id, ad_click_type enviados no generate_lead (GA4) e lead_click (dataLayer)
- Rodapé exibe (64) 99286-9608
- Pendente (usuário): dimensões personalizadas no GA4, ação de conversão "Importar cliques" no Ads

## Planilha + LGPD (iteração 4)
- Consent Mode v2 no index.html (padrão negado, url_passthrough, ads_data_redaction), banner Aceitar/Recusar, link "Preferências de cookies" no rodapé
- gclid só é gravado/código só é gerado com consentimento
- services/leadSheet.js envia via sendBeacon para Apps Script (source/integrations/google-sheets/Code.gs); LEAD_SHEET_URL em src/config/integrations.js (vazio = desligado)
- Pendente (usuário): implantar Apps Script e enviar URL; página de Política de Privacidade

## Política de Privacidade (iteração 5)
- privacidade.html gerado no build (mesmo bundle, body data-page="privacidade"); pages/Home.jsx e pages/PrivacyPolicy.jsx; texto em data/privacyPolicy.js
- Links: rodapé ("Política de Privacidade" + "Preferências de cookies") e aviso de cookies
- Planilha: aguardando usuário criar Apps Script e enviar URL /exec
- Observação: container GTM dispara GA4 extras (G-3RM56F8D4X, G-Y20R1VWPS6) — possível contagem duplicada
