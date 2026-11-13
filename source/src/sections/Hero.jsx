import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CheckItem from '@/components/common/CheckItem';
import { heroHighlights } from '@/data/hero';

const Hero = ({ onWhatsAppClick, onPhoneClick }) => (
	<section className="relative bg-gradient-to-br from-green-50 to-blue-50 hero-pattern py-20">
		<div className="container mx-auto px-4">
			<div className="grid lg:grid-cols-2 gap-12 items-center">
				<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}>
					<h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
						Eletricista em <span className="gradient-text">Caldas Novas</span>
					</h1>
					<p className="text-xl text-gray-600 mb-8">
						Serviços elétricos residenciais e prediais com segurança, qualidade e preço justo. Atendimento 24 horas em Caldas Novas.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 mb-8">
						<Button onClick={onWhatsAppClick} size="lg" className="cta-button text-white text-lg px-8 py-4">
							<MessageCircle className="w-5 h-5 mr-2" />
							Peça seu Orçamento Grátis
						</Button>
						<Button onClick={onPhoneClick} variant="outline" size="lg" className="text-lg px-8 py-4 border-green-500 text-green-600 hover:bg-green-50">
							<Phone className="w-5 h-5 mr-2" />
							Ligue Agora
						</Button>
					</div>
					<div className="flex items-center space-x-6 text-sm text-gray-600">
						{heroHighlights.map((item) => (
							<CheckItem key={item} className="flex items-center space-x-2" iconClassName="w-5 h-5 text-green-500">{item}</CheckItem>
						))}
					</div>
				</motion.div>

				<motion.div initial={{ opacity: 0, scale: .8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .2 }} className="relative">
					<img alt="Eletricista profissional trabalhando em instalação elétrica" className="rounded-2xl shadow-2xl w-full h-auto" src="./assets/img1.jpg" />
					<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4" />
				</motion.div>
			</div>
		</div>
	</section>
);

export default Hero;
