/* global gtag */
import { CONVERSION_COTACAO, CONVERSION_LIGACAO, CONVERSION_CURRENCY } from '@/config/analytics';

const trackConversion = (sendTo) => {
	gtag('event', 'conversion', {
		'send_to': sendTo,
		'value': 1.0,
		'currency': CONVERSION_CURRENCY
	});
};

export const trackCotacaoConversion = () => trackConversion(CONVERSION_COTACAO);
export const trackLigacaoConversion = () => trackConversion(CONVERSION_LIGACAO);
