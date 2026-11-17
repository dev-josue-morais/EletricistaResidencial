/* global gtag */
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
	gtag('event', 'generate_lead', {
		'send_to': GA4_MEASUREMENT_ID,
		'lead_method': method,
		'lead_location': location
	});
	window.dataLayer.push({ event: LEAD_EVENT, lead_method: method, lead_location: location });
};

export const trackCotacaoConversion = (location) => {
	trackConversion(CONVERSION_COTACAO);
	trackLead('whatsapp', location);
};

export const trackLigacaoConversion = (location) => {
	trackConversion(CONVERSION_LIGACAO);
	trackLead('telefone', location);
};
