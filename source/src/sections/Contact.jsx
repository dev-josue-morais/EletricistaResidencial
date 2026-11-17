import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PhoneLink from '@/components/common/PhoneLink';
import { PHONE_DISPLAY, PHONE_INTERNATIONAL, LOCATION } from '@/config/contact';
import { PHONE_DISPLAY_ATTR } from '@/services/contact';

const Contact = ({ onWhatsAppClick, onPhoneClick }) => {
	const contactItems = [
		{
			Icon: Phone,
			key: 'telefone',
			text: (
				<PhoneLink onPhoneClick={onPhoneClick} location="contato_numero" href={`tel:${PHONE_INTERNATIONAL}`} {...{ [PHONE_DISPLAY_ATTR]: '' }}>
					{PHONE_DISPLAY}
				</PhoneLink>
			),
		},
		{ Icon: MessageCircle, key: 'whatsapp', text: 'WhatsApp disponível 24h' },
		{ Icon: MapPin, key: 'local', text: LOCATION },
	];

	return (
	<section id="contato" className="py-20 bg-green-600">
		<div className="container mx-auto px-4">
			<div className="grid lg:grid-cols-2 gap-12 items-center">
				<motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
					<h2 className="text-4xl font-bold text-white mb-6">Precisa de um eletricista em Caldas Novas?</h2>
					<p className="text-xl text-green-100 mb-8">
						Entre em contato conosco agora mesmo e solicite seu orçamento gratuito. Atendemos 24 horas para emergências!
					</p>
					<div className="space-y-4 mb-8">
						{contactItems.map(({ Icon, key, text }) => (
							<div key={key} className="flex items-center space-x-3 text-white">
								<Icon className="w-6 h-6" />
								<span className="text-lg">{text}</span>
							</div>
						))}
					</div>
					<div className="flex flex-col sm:flex-row gap-4">
						<Button onClick={() => onWhatsAppClick('contato')} size="lg" className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-4">
							<MessageCircle className="w-5 h-5 mr-2" />
							WhatsApp
						</Button>
						<Button onClick={() => onPhoneClick('contato')} variant="outline" size="lg" className="border-white text-gray hover:bg-white hover:text-green-600 text-lg px-8 py-4">
							<Phone className="w-5 h-5 mr-2" />
							Ligar Agora
						</Button>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 30 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					className="bg-white rounded-2xl p-8 shadow-xl flex items-center justify-center"
				>
					<h3 className="text-2xl font-bold text-gray-900 text-center">
						Entre em contato via WhatsApp ou Telefone para um orçamento rápido!
					</h3>
				</motion.div>
			</div>
		</div>
	</section>
	);
};

export default Contact;
