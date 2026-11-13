import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Brand from '@/components/layout/Brand';
import NavLink from '@/components/layout/NavLink';
import { headerLinks } from '@/data/navigation';

const Header = ({ onWhatsAppClick, scrollTo }) => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<header className="bg-white shadow-sm border-b sticky top-0 z-50">
			<div className="container mx-auto px-4 py-4">
				<div className="flex justify-between items-center">
					<motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center space-x-2">
						<Brand nameClassName="text-xl font-bold gradient-text" />
					</motion.div>

					<nav className="hidden md:flex items-center space-x-8">
						{headerLinks.map((link) => (
							<NavLink key={link.href} href={link.href} scrollTo={scrollTo}>{link.label}</NavLink>
						))}
					</nav>

					<motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center space-x-2">
						{/* Botão MOBILE: só ícone */}
						<Button onClick={onWhatsAppClick} className="cta-button text-white md:hidden">
							<MessageCircle className="w-5 h-5" />
						</Button>
						{/* Botão DESKTOP: ícone + texto */}
						<Button onClick={onWhatsAppClick} className="cta-button text-white hidden md:flex">
							<MessageCircle className="w-4 h-4 mr-2" />
							WhatsApp
						</Button>
					</motion.div>

					<div className="md:hidden">
						<button onClick={() => setMenuOpen(!menuOpen)}>
							{menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
						</button>
					</div>
				</div>
			</div>

			{menuOpen && (
				<motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="md:hidden bg-white pb-4">
					<nav className="flex flex-col items-center space-y-4">
						{headerLinks.map((link) => (
							<NavLink key={link.href} href={link.href} scrollTo={scrollTo} setMenuOpen={setMenuOpen}>{link.label}</NavLink>
						))}
						<Button onClick={onWhatsAppClick} className="cta-button text-white w-full max-w-xs mx-auto">
							<MessageCircle className="w-4 h-4 mr-2" />
							WhatsApp
						</Button>
					</nav>
				</motion.div>
			)}
		</header>
	);
};

export default Header;
