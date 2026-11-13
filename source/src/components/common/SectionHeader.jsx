import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ title, subtitle }) => (
	<motion.div
		initial={{ opacity: 0, y: 20 }}
		whileInView={{ opacity: 1, y: 0 }}
		viewport={{ once: true }}
		className="text-center mb-16"
	>
		<h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
		<p className="text-xl text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
		<div className="section-divider mt-8 max-w-24 mx-auto" />
	</motion.div>
);

export default SectionHeader;
