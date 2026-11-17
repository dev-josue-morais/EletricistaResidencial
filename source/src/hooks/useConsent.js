import { useSyncExternalStore } from 'react';
import { getConsentState, subscribeConsent } from '@/services/consent';

export const useConsent = () => useSyncExternalStore(subscribeConsent, getConsentState);
