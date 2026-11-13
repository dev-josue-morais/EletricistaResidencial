import React from 'react';
import { motion } from 'framer-motion';
import CheckItem from '@/components/common/CheckItem';
import { aboutBenefits, aboutStats } from '@/data/about';

const About = () => (
	<section id="sobre" className="py-20 bg-gray-50">
		<div className="container mx-auto px-4">
			<div className="grid lg:grid-cols-2 gap-12 items-center">
				<motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
					<img alt="Equipe de eletricistas profissionais em Caldas Novas" className="rounded-2xl shadow-xl w-full h-auto" src="./assets/img2.jpg" />
				</motion.div>

				<motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
					<h2 className="text-4xl font-bold text-gray-900 mb-6">Por que escolher nossos serviços?</h2>
					<p className="text-lg text-gray-600 mb-8">
						Somos especialistas em serviços elétricos em Caldas Novas com mais de 6 anos de experiência. Oferecemos soluções seguras, eficientes e com preços justos.
					</p>
					<div className="space-y-4 mb-8">
						{aboutBenefits.map((item) => (
							<CheckItem key={item} className="flex items-center space-x-3" iconClassName="w-6 h-6 text-green-500 flex-shrink-0" textClassName="text-gray-700">{item}</CheckItem>
						))}
					</div>
					<div className="grid grid-cols-3 gap-6 text-center">
						{aboutStats.map((stat) => (
							<div key={stat.label}>
								<div className="text-3xl font-bold text-green-600">{stat.value}</div>
								<div className="text-sm text-gray-600">{stat.label}</div>
							</div>
						))}
					</div>
				</motion.div>
			</div>
		</div>
	</section>
);

export default About;
