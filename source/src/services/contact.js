import { PHONE_NUMBER, WHATSAPP_MESSAGE } from '@/config/contact';
import { LEAD_CODE_LABEL } from '@/config/attribution';
import { trackCotacaoConversion, trackLigacaoConversion } from '@/services/analytics';
import { getAdClick } from '@/services/adAttribution';
import { getDisplayedPhoneDigits } from '@/utils/phone';

export const PHONE_DISPLAY_ATTR = 'data-phone-display';

// Visitantes vindos de anúncio recebem um código na mensagem para identificar a venda depois.
const buildWhatsAppMessage = () => {
	const adClick = getAdClick();
	return adClick ? `${WHATSAPP_MESSAGE} ${LEAD_CODE_LABEL} ${adClick.code}` : WHATSAPP_MESSAGE;
};

export const openWhatsApp = (location) => {
	trackCotacaoConversion(location);
	window.open(`https://wa.me/55${PHONE_NUMBER}?text=${buildWhatsAppMessage()}`, "_blank");
};

// Liga para o número exibido na página (que pode ser o número de encaminhamento do Google Ads).
export const callPhone = (location) => {
	trackLigacaoConversion(location);
	window.open(`tel:+55${getDisplayedPhoneDigits(PHONE_DISPLAY_ATTR) || PHONE_NUMBER}`);
};
