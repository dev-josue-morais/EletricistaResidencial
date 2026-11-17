import { AD_CLICK_PARAMS, AD_CLICK_STORAGE_KEY, AD_CLICK_MAX_AGE_DAYS, LEAD_CODE_PREFIX } from '@/config/attribution';
import { isConsentGranted, subscribeConsent } from '@/services/consent';

const CODE_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
const MAX_AGE_MS = AD_CLICK_MAX_AGE_DAYS * 24 * 60 * 60 * 1000;

// Clique de anúncio desta visita, mantido só em memória até o visitante aceitar os cookies.
let pendingClick = null;

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

const persist = (click) => {
	try {
		localStorage.setItem(AD_CLICK_STORAGE_KEY, JSON.stringify(click));
	} catch {
		// Armazenamento indisponível: o site segue funcionando sem o código.
	}
};

const clearStored = () => {
	try {
		localStorage.removeItem(AD_CLICK_STORAGE_KEY);
	} catch {
		// Nada a remover.
	}
};

const syncWithConsent = () => {
	if (!isConsentGranted()) {
		clearStored();
		return;
	}
	if (pendingClick) persist(pendingClick);
};

// Lê o identificador do anúncio (gclid/gbraid/wbraid) e só o guarda com consentimento.
export const captureAdClick = () => {
	const params = new URLSearchParams(window.location.search);
	const type = AD_CLICK_PARAMS.find((name) => params.get(name));
	if (type) {
		const id = params.get(type);
		const previous = readStored();
		const code = previous && previous.id === id ? previous.code : generateLeadCode();
		pendingClick = { type, id, code, ts: Date.now() };
	}
	syncWithConsent();
	subscribeConsent(syncWithConsent);
};

export const getAdClick = () => (isConsentGranted() ? pendingClick || readStored() : null);
