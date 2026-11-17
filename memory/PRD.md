# EletriCaldas — site (React/Vite, GitHub Pages)
## Pedido
Resetar o Tag Manager: remover tags fixas do site, usar só o novo container GTM-W2FM3MNH e recriar GA4 (G-EMKHDNXVN1) + Google Ads (AW-16982045139) dentro do GTM.
## Feito (jun/2026)
- source/index.html: removidos gtag.js G-34GW7YSWYZ, config AW e funções gtag_conversion_*; inserido snippet novo do GTM. Consent Mode default mantido.
- Build regenerado (index.html, privacidade.html, assets).
- gtm/GTM-W2FM3MNH_container.json (importável) + gtm/LEIA-ME.md.
- Site envia dataLayer `generate_lead` (lead_method whatsapp/telefone, lead_location, lead_code).
## Feito (iteração 2)
- Teste ao vivo em eletricaldas.com.br: GA4 + Ads recebendo page_view, generate_lead, scroll, tempo e as 2 conversões.
- Code.gs: coluna "Telefone do cliente", onEdit preenche data de fechamento, aba "Google Ads" (gclid/gbraid/wbraid + telefone E.164 + valor) atualizada a cada hora para o Gerenciador de dados (conversões otimizadas para leads). Teste: tests/test_code_gs.js
## Backlog
- Conversões avançadas (enhanced conversions), evento de envio de formulário se surgir formulário.
