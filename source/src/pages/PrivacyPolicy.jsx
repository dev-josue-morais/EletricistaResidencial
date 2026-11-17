import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PolicySection from '@/components/privacy/PolicySection';
import { openWhatsApp, callPhone } from '@/services/contact';
import { openConsentPreferences } from '@/services/consent';
import { HOME_URL } from '@/config/routes';
import { privacyPolicy } from '@/data/privacyPolicy';

// Nesta página as seções ficam na página inicial, então os links levam para lá.
const goToHomeSection = (id) => window.location.assign(`${HOME_URL}#${id}`);

const PrivacyPolicy = () => (
	<>
		<Helmet>
			<title>{privacyPolicy.seoTitle}</title>
			<meta name="description" content={privacyPolicy.seoDescription} />
		</Helmet>
		<div className="min-h-screen bg-white">
			<Header onWhatsAppClick={openWhatsApp} scrollTo={goToHomeSection} />
			<main className="py-20 bg-gray-50" data-testid="privacy-policy-page">
				<div className="container mx-auto px-4">
					<article className="privacy-policy">
						<h1 className="text-4xl font-bold text-gray-900 mb-4">{privacyPolicy.title}</h1>
						<p className="privacy-policy__updated">Última atualização: {privacyPolicy.updatedAt}</p>
						<p className="privacy-policy__intro">{privacyPolicy.intro}</p>
						{privacyPolicy.sections.map((section) => (
							<PolicySection key={section.title} section={section} />
						))}
						<div className="privacy-policy__actions">
							<button type="button" className="cta-button privacy-policy__button" onClick={openConsentPreferences} data-testid="privacy-cookie-preferences-btn">
								Alterar minhas preferências de cookies
							</button>
							<a href={HOME_URL} className="privacy-policy__back" data-testid="privacy-back-home-link">Voltar para o site</a>
						</div>
					</article>
				</div>
			</main>
			<Footer onWhatsAppClick={openWhatsApp} onPhoneClick={callPhone} scrollTo={goToHomeSection} />
		</div>
	</>
);

export default PrivacyPolicy;
