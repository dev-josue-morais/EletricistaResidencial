import { PHONE_NUMBER, WHATSAPP_MESSAGE } from '@/config/contact';
import { trackCotacaoConversion, trackLigacaoConversion } from '@/services/analytics';
import { getDisplayedPhoneDigits } from '@/utils/phone';

export const PHONE_DISPLAY_ATTR = 'data-phone-display';

export const openWhatsApp = (location) => {
	trackCotacaoConversion(location);
	window.open(`https://wa.me/55${PHONE_NUMBER}?text=${WHATSAPP_MESSAGE}`, "_blank");
};

// Liga para o número exibido na página (que pode ser o número de encaminhamento do Google Ads).
export const callPhone = (location) => {
	trackLigacaoConversion(location);
	window.open(`tel:+55${getDisplayedPhoneDigits(PHONE_DISPLAY_ATTR) || PHONE_NUMBER}`);
};
