import { LEAD_SHEET_URL } from '@/config/integrations';

// Envia o lead vindo de anúncio para a planilha Google (via Apps Script), sem atrasar o clique.
export const sendLeadToSheet = (lead) => {
	if (!LEAD_SHEET_URL || !navigator.sendBeacon) return;
	const body = new Blob([JSON.stringify({ ...lead, page: window.location.pathname })], { type: 'text/plain' });
	navigator.sendBeacon(LEAD_SHEET_URL, body);
};
