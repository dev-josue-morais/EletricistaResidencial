import { getAdClick } from '@/services/adAttribution';
import { sendLeadToSheet } from '@/services/leadSheet';

// Registra o contato no Google Tag Manager
const trackLead = (method, location) => {
    const adClick = getAdClick();

    const attribution = adClick
        ? {
            lead_code: adClick.code,
            ad_click_id: adClick.id,
            ad_click_type: adClick.type
        }
        : {};

    // Evento de lead para o GTM
    window.dataLayer = window.dataLayer || [];

    window.dataLayer.push({
        event: 'generate_lead',
        lead_method: method,
        lead_location: location,
        ...attribution
    });

    // Mantém o envio dos leads identificados para a planilha
    if (adClick) {
        sendLeadToSheet({
            lead_method: method,
            lead_location: location,
            ...attribution
        });
    }
};

// Conversão de orçamento pelo WhatsApp
export const trackCotacaoConversion = (location) => {
    trackLead('whatsapp', location);
};

// Conversão de ligação
export const trackLigacaoConversion = (location) => {
    trackLead('telefone', location);
};