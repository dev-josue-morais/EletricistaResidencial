import React from 'react';

// Link de telefone que dispara a conversão de ligação ao ser clicado.
const PhoneLink = ({ onPhoneClick, location, href, children, ...props }) => (
	<a
		href={href}
		onClick={(e) => {
			e.preventDefault();
			onPhoneClick(location);
		}}
		{...props}
	>
		{children}
	</a>
);

export default PhoneLink;
