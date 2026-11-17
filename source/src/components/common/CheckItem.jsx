import React from 'react';
import { CheckCircle } from 'lucide-react';

const CheckItem = ({ children, className, iconClassName, textClassName }) => (
	<div className={className}>
		<CheckCircle className={iconClassName} />
		<span className={textClassName}>{children}</span>
	</div>
);

export default CheckItem;
