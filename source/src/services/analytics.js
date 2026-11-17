/* global gtag */
import { getAdClick } from '@/services/adAttribution';
import { sendLeadToSheet } from '@/services/leadSheet';
import { GA4_MEASUREMENT_ID, CONVERSION_COTACAO, CONVERSION_LIGACAO, CONVERSION_CURRENCY, LEAD_EVENT } from '@/config/analytics';

const trackConversion = (sendTo) => {
	gtag('event', 'conversion', {
		'send_to': sendTo,
		'value': 1.0,
		'currency': CONVERSION_CURRENCY
	});
};

// Informa ao GA4 e ao Tag Manager qual botão gerou o contato.
const trackLead = (method, location) => {
	const adClick = getAdClick();
	const attribution = adClick ? { lead_code: adClick.code, ad_click_id: adClick.id, ad_click_type: adClick.type } : {};
	gtag('event', 'generate_lead', {
		'send_to': GA4_MEASUREMENT_ID,
		'lead_method': method,
		'lead_location': location,
		...attribution
	});
	window.dataLayer.push({ event: LEAD_EVENT, lead_method: method, lead_location: location, ...attribution });
	if (adClick) sendLeadToSheet({ lead_method: method, lead_location: location, ...attribution });
};

export const trackCotacaoConversion = (location) => {
	trackConversion(CONVERSION_COTACAO);
	trackLead('whatsapp', location);
};

export const trackLigacaoConversion = (location) => {
	trackConversion(CONVERSION_LIGACAO);
	trackLead('telefone', location);
};
