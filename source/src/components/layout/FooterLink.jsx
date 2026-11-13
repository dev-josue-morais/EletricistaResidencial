import React from 'react';

const FooterLink = ({ href, children, scrollTo }) => (
	<li>
		<a
			href={href}
			onClick={(e) => {
				e.preventDefault();
				scrollTo(href.substring(1));
			}}
			className="hover:text-green-400 transition-colors"
		>
			{children}
		</a>
	</li>
);

export default FooterLink;
