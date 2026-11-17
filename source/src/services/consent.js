/* global gtag */
import { CONSENT_STORAGE_KEY, CONSENT_GRANTED, CONSENT_DENIED, CONSENT_TYPES } from '@/config/consent';

const listeners = new Set();

const readStatus = () => {
	try {
		const stored = JSON.parse(localStorage.getItem(CONSENT_STORAGE_KEY));
		return stored && [CONSENT_GRANTED, CONSENT_DENIED].includes(stored.status) ? stored.status : null;
	} catch {
		return null;
	}
};

let state = { status: readStatus(), bannerOpen: false };
state.bannerOpen = state.status === null;

const emit = () => listeners.forEach((listener) => listener());

export const getConsentState = () => state;
export const isConsentGranted = () => state.status === CONSENT_GRANTED;

export const subscribeConsent = (listener) => {
	listeners.add(listener);
	return () => listeners.delete(listener);
};

export const openConsentPreferences = () => {
	state = { ...state, bannerOpen: true };
	emit();
};

export const setConsent = (status) => {
	state = { status, bannerOpen: false };
	try {
		localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify({ status, ts: Date.now() }));
	} catch {
		// Sem armazenamento: a escolha vale só para esta visita.
	}
	gtag('consent', 'update', Object.fromEntries(CONSENT_TYPES.map((type) => [type, status])));
	gtag('set', 'ads_data_redaction', status === CONSENT_DENIED);
	emit();
};
