import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useConsent } from '@/hooks/useConsent';
import { setConsent } from '@/services/consent';
import { CONSENT_GRANTED, CONSENT_DENIED } from '@/config/consent';

const CookieBanner = () => {
	const { bannerOpen } = useConsent();

	return (
		<AnimatePresence>
			{bannerOpen && (
				<motion.div
					role="dialog"
					aria-live="polite"
					aria-label="Aviso de cookies"
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 40 }}
					transition={{ duration: .35 }}
					className="cookie-banner"
					data-testid="cookie-banner"
				>
					<p className="cookie-banner__title">Sua privacidade</p>
					<p className="cookie-banner__text">
						Usamos cookies para medir as visitas e o resultado dos nossos anúncios no Google. Você pode aceitar ou recusar; o site funciona normalmente nos dois casos.
					</p>
					<div className="cookie-banner__actions">
						<button type="button" className="cookie-banner__decline" onClick={() => setConsent(CONSENT_DENIED)} data-testid="cookie-decline-btn">
							Recusar
						</button>
						<button type="button" className="cookie-banner__accept cta-button" onClick={() => setConsent(CONSENT_GRANTED)} data-testid="cookie-accept-btn">
							Aceitar
						</button>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default CookieBanner;
