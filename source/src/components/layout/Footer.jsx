import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Brand from '@/components/layout/Brand';
import FooterLink from '@/components/layout/FooterLink';
import PhoneLink from '@/components/common/PhoneLink';
import { footerLinks } from '@/data/navigation';
import { businessHours } from '@/data/businessHours';
import { PHONE_DISPLAY, PHONE_INTERNATIONAL, LOCATION } from '@/config/contact';
import { openConsentPreferences } from '@/services/consent';

const FooterColumn = ({ title, children }) => (
	<div>
		<span className="text-lg font-semibold mb-4 block">{title}</span>
		<ul className="space-y-2 text-gray-400">{children}</ul>
	</div>
);

const Footer = ({ onWhatsAppClick, onPhoneClick, scrollTo }) => (
	<footer className="bg-gray-900 text-white py-12">
		<div className="container mx-auto px-4">
			<div className="grid md:grid-cols-4 gap-8">
				<div>
					<div className="flex items-center space-x-2 mb-4">
						<Brand nameClassName="text-xl font-bold" />
					</div>
					<p className="text-gray-400 mb-4">
						Eletricista profissional em Caldas Novas, oferecendo serviços elétricos de qualidade há mais de 6 anos.
					</p>
					<div className="flex space-x-4">
						<Button onClick={() => onWhatsAppClick('rodape')} size="sm" className="bg-green-600 hover:bg-green-700">
							<MessageCircle className="w-4 h-4" />
						</Button>
						<Button onClick={() => onPhoneClick('rodape')} size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
							<Phone className="w-4 h-4" />
						</Button>
					</div>
				</div>

				<FooterColumn title="Links Rápidos">
					{footerLinks.map((link) => (
						<FooterLink key={link.href} href={link.href} scrollTo={scrollTo}>{link.label}</FooterLink>
					))}
				</FooterColumn>

				<FooterColumn title="Contato">
					<li>
						<PhoneLink onPhoneClick={onPhoneClick} location="rodape_numero" href={`tel:${PHONE_INTERNATIONAL}`}>{PHONE_DISPLAY}</PhoneLink>
					</li>
					<li>{LOCATION}</li>
					<li>Atendimento 24 horas</li>
				</FooterColumn>

				<FooterColumn title="Horários">
					{businessHours.map((item) => (
						<li key={item}>{item}</li>
					))}
				</FooterColumn>
			</div>

			<div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
				<p>© 2024 EletriCaldas. Todos os direitos reservados. Eletricista em Caldas Novas, Goiás.</p>
				<button type="button" className="cookie-preferences-link" onClick={openConsentPreferences} data-testid="cookie-preferences-link">
					Preferências de cookies
				</button>
			</div>
		</div>
	</footer>
);

export default Footer;
