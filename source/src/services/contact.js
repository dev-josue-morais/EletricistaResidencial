import { PHONE_NUMBER, WHATSAPP_MESSAGE } from '@/config/contact';
import { trackCotacaoConversion, trackLigacaoConversion } from '@/services/analytics';

export const openWhatsApp = () => {
	trackCotacaoConversion();
	window.open(`https://wa.me/55${PHONE_NUMBER}?text=${WHATSAPP_MESSAGE}`, "_blank");
};

export const callPhone = () => {
	trackLigacaoConversion();
	window.open(`tel:+55${PHONE_NUMBER}`);
};
