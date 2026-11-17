import React from 'react';
import Home from '@/pages/Home';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import CookieBanner from '@/components/consent/CookieBanner';
import { getCurrentPage, PRIVACY_PAGE } from '@/config/routes';

function App() {
	const Page = getCurrentPage() === PRIVACY_PAGE ? PrivacyPolicy : Home;
	return (
		<>
			<Page />
			<CookieBanner />
		</>
	);
}

export default App;
