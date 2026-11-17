import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '@/components/common/SectionHeader';
import { ELFSIGHT_REVIEWS_CLASS } from '@/config/integrations';

const Testimonials = () => (
	<section id="depoimentos" className="py-20 bg-white">
		<div className="container mx-auto px-4">
			<SectionHeader
				title="O que nossos clientes dizem"
				subtitle="Veja os depoimentos de quem já confiou em nossos serviços elétricos"
			/>
			<motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
				<div className={ELFSIGHT_REVIEWS_CLASS} data-elfsight-app-lazy={true} />
			</motion.div>
		</div>
	</section>
);

export default Testimonials;
