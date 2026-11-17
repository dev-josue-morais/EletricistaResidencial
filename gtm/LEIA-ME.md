# Container GTM-W2FM3MNH — importação

1. GTM > Administrador > **Importar container** > arquivo `GTM-W2FM3MNH_container.json`.
2. Espaço de trabalho: Existente (Default). Opção: **Substituir** (apaga tudo e deixa só o que está no arquivo).
3. Clique em **Visualizar** (Preview) e teste no site: clicar no WhatsApp e no "Ligue Agora".
4. **Enviar / Publicar**.

## O que tem no container
| Tag | Acionador |
|---|---|
| Google Tag - GA4 (G-EMKHDNXVN1) | Inicialização - Todas as páginas |
| Google Tag - Google Ads (AW-16982045139) | Inicialização - Todas as páginas |
| Vinculador de conversões | Todas as páginas |
| GA4 - generate_lead (lead_method, lead_location, lead_code) | Evento `generate_lead` |
| Ads - Conversão WhatsApp (1o2gCIWM94UbENPj1aE_) | `generate_lead` com lead_method = whatsapp |
| Ads - Conversão Ligação (M_BMCMq79oUbENPj1aE_) | `generate_lead` com lead_method = telefone |
| GA4 - scroll_profundidade (percent_scrolled) | Rolagem 25/50/75/90% |
| GA4 - tempo_na_pagina (tempo_segundos) | A cada 30s, até 2 min |

## Depois de publicar
- GA4 > Admin > Eventos: marcar `generate_lead` como **evento-chave**.
- GA4 > Admin > Definições personalizadas: criar dimensões `lead_method`, `lead_location`, `percent_scrolled` e métrica `tempo_segundos`.
- GA4 > Fluxo de dados > Medição otimizada: pode desligar "Rolagens" para não duplicar com `scroll_profundidade`.
- Google Ads: conferir se as conversões "cotação" e "ligação" continuam com origem "Site" (as tags agora vêm do GTM).
- O consentimento LGPD (banner) continua no site; as tags Google respeitam o Consent Mode automaticamente.
