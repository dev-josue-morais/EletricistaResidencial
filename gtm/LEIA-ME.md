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

## Teste ao vivo (eletricaldas.com.br) — OK
- Antes do aceite de cookies: GA4 e Ads em modo restrito (sem cookies).
- Depois do aceite: GA4 `page_view`, `generate_lead` (whatsapp/telefone), `scroll_profundidade` 25/50/75/90, `tempo_na_pagina`.
- Ads: conversão WhatsApp (1o2gCIWM94UbENPj1aE_) e Ligação (M_BMCMq79oUbENPj1aE_), valor 1 BRL.
- Dica: desligue "Rolagens" na medição otimizada do GA4 (ela ainda envia `scroll` em 90%, duplicando).

# Conversões otimizadas para leads (serviço fechado)
O site só registra cliques (não há formulário), então a medição precisa vem da planilha de leads:
quem chega por anúncio recebe um código (EC-XXXXXX) na mensagem do WhatsApp e é salvo na aba "Leads" com o Google Click ID.

1. Cole o novo `source/integrations/google-sheets/Code.gs` no Apps Script da planilha > Implantar > Gerenciar implantações > editar > **Nova versão** (a URL não muda).
2. No Apps Script, rode uma vez a função **criarAgendamento** e autorize.
3. Quando fechar um serviço: na aba "Leads" coloque **sim**, o **valor** e o **telefone do cliente** (a data é preenchida sozinha).
4. Google Ads > Metas > Conversões > Nova ação > **Importar** > "Conversões de leads otimizadas / CRM" > nome exatamente **Serviço fechado**, categoria "Lead qualificado"/"Compra".
5. Google Ads > Ferramentas > **Gerenciador de dados** > Google Planilhas > selecione a aba **Google Ads** > mapeie as colunas (Google Click ID, GBRAID, WBRAID, Phone Number, Conversion Name, Conversion Time, Conversion Value, Conversion Currency, Ad User Data, Ad Personalization) > agendamento **diário**.
6. Google Ads > Metas > Configurações > **Conversões otimizadas para leads**: ativar e aceitar os termos de dados do cliente.
O telefone é enviado pelo Google com hash (SHA-256); só entram leads que aceitaram os cookies.
