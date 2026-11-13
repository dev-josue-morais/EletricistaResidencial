import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeader from '@/components/common/SectionHeader';
import { services } from '@/data/services';

const ServiceCard = ({ service, index }) => (
	<motion.div
		initial={{ opacity: 0, y: 30 }}
		whileInView={{ opacity: 1, y: 0 }}
		viewport={{ once: true }}
		transition={{ delay: index * .1 }}
		className="service-card bg-white rounded-xl p-6 text-center"
	>
		<div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
			{service.icon}
		</div>
		<h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
		<p className="text-gray-600">{service.description}</p>
	</motion.div>
);

const Services = ({ onWhatsAppClick }) => (
	<section id="servicos" className="py-20 bg-white">
		<div className="container mx-auto px-4">
			<SectionHeader
				title="Nossos Serviços"
				subtitle="Oferecemos soluções completas em serviços elétricos para residências e prédios em Caldas Novas"
			/>
			<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
				{services.map((service, index) => (
					<ServiceCard key={index} service={service} index={index} />
				))}
			</div>
			<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-12">
				<Button onClick={onWhatsAppClick} size="lg" className="cta-button text-white text-lg px-8 py-4">
					<MessageCircle className="w-5 h-5 mr-2" />
					Solicitar Orçamento
				</Button>
			</motion.div>
		</div>
	</section>
);

export default Services;
