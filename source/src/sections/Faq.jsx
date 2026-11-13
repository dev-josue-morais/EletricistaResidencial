import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '@/components/common/SectionHeader';
import { faqs } from '@/data/faq';

const Faq = () => (
	<section id="faq" className="py-20 bg-gray-50">
		<div className="container mx-auto px-4">
			<SectionHeader title="Perguntas Frequentes" subtitle="Tire suas dúvidas sobre nossos serviços elétricos" />
			<div className="max-w-3xl mx-auto space-y-6">
				{faqs.map((faq, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: index * .1 }}
						className="bg-white rounded-xl p-6 shadow-sm border"
					>
						<h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
						<p className="text-gray-600">{faq.answer}</p>
					</motion.div>
				))}
			</div>
		</div>
	</section>
);

export default Faq;
