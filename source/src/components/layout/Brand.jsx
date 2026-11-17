import React from 'react';
import { BRAND_NAME, LOGO_SRC, LOGO_ALT } from '@/config/brand';

const Brand = ({ nameClassName }) => (
	<>
		<img src={LOGO_SRC} alt={LOGO_ALT} className="w-10 h-10" />
		<span className={nameClassName}>{BRAND_NAME}</span>
	</>
);

export default Brand;
