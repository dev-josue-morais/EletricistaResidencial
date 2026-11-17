import React from 'react';
import { Zap, Wrench, Shield, Clock } from 'lucide-react';

export const services = [
	{
		icon: <Zap className="w-8 h-8" />,
		title: "Instalações Elétricas",
		description: "Instalação completa de sistemas elétricos residenciais e prediais com segurança e qualidade."
	},
	{
		icon: <Wrench className="w-8 h-8" />,
		title: "Manutenção Elétrica",
		description: "Manutenção preventiva e corretiva em sistemas elétricos, garantindo funcionamento perfeito."
	},
	{
		icon: <Shield className="w-8 h-8" />,
		title: "Painéis de Disjuntores",
		description: "Instalação e manutenção de quadros elétricos e painéis de disjuntores com total segurança."
	},
	{
		icon: <Clock className="w-8 h-8" />,
		title: "Emergências 24h",
		description: "Atendimento de emergência 24 horas para resolver problemas elétricos urgentes."
	}
];
