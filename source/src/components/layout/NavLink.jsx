import React from 'react';

const NavLink = ({ href, children, scrollTo, setMenuOpen }) => (
	<a
		href={href}
		onClick={(e) => {
			e.preventDefault();
			scrollTo(href.substring(1));
			setMenuOpen && setMenuOpen(false);
		}}
		className="text-gray-600 hover:text-green-600 transition-colors"
	>
		{children}
	</a>
);

export default NavLink;
