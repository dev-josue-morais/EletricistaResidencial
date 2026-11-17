import { AD_CLICK_PARAMS, AD_CLICK_STORAGE_KEY, AD_CLICK_MAX_AGE_DAYS, LEAD_CODE_PREFIX } from '@/config/attribution';

const CODE_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
const MAX_AGE_MS = AD_CLICK_MAX_AGE_DAYS * 24 * 60 * 60 * 1000;

const generateLeadCode = () => {
	const values = crypto.getRandomValues(new Uint32Array(6));
	return LEAD_CODE_PREFIX + Array.from(values, (v) => CODE_CHARS[v % CODE_CHARS.length]).join('');
};

const readStored = () => {
	try {
		const stored = JSON.parse(localStorage.getItem(AD_CLICK_STORAGE_KEY));
		return stored && Date.now() - stored.ts < MAX_AGE_MS ? stored : null;
	} catch {
		return null;
	}
};

// Guarda o identificador do anúncio (gclid/gbraid/wbraid) quando o visitante chega por um anúncio.
export const captureAdClick = () => {
	const params = new URLSearchParams(window.location.search);
	const type = AD_CLICK_PARAMS.find((name) => params.get(name));
	if (!type) return;
	const id = params.get(type);
	const previous = readStored();
	const code = previous && previous.id === id ? previous.code : generateLeadCode();
	try {
		localStorage.setItem(AD_CLICK_STORAGE_KEY, JSON.stringify({ type, id, code, ts: Date.now() }));
	} catch {
		// Armazenamento indisponível: o site segue funcionando sem o código.
	}
};

export const getAdClick = () => readStored();
