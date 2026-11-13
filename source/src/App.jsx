import React from 'react';
import SeoHead from '@/components/seo/SeoHead';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/sections/Hero';
import Services from '@/sections/Services';
import About from '@/sections/About';
import Testimonials from '@/sections/Testimonials';
import Faq from '@/sections/Faq';
import Contact from '@/sections/Contact';
import { Toaster } from '@/components/ui/toaster';
import { openWhatsApp, callPhone } from '@/services/contact';
import { scrollToSection } from '@/utils/scroll';

function App() {
	return (
		<>
			<SeoHead />
			<div className="min-h-screen bg-white">
				<Header onWhatsAppClick={openWhatsApp} scrollTo={scrollToSection} />
				<main>
					<Hero onWhatsAppClick={openWhatsApp} onPhoneClick={callPhone} />
					<Services onWhatsAppClick={openWhatsApp} />
					<About />
					<Testimonials />
					<Faq />
					<Contact onWhatsAppClick={openWhatsApp} onPhoneClick={callPhone} />
				</main>
				<Footer onWhatsAppClick={openWhatsApp} onPhoneClick={callPhone} scrollTo={scrollToSection} />
				<Toaster />
			</div>
		</>
	);
}

export default App;
