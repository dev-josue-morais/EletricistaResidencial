import React from 'react';
import { Helmet } from 'react-helmet';
import { SEO } from '@/config/seo';

const SeoHead = () => (
	<Helmet>
		<title>{SEO.title}</title>
		<meta name="description" content={SEO.description} />
		<meta name="keywords" content={SEO.keywords} />
		<meta property="og:title" content={SEO.ogTitle} />
		<meta property="og:description" content={SEO.ogDescription} />
		<meta property="og:image" content={SEO.ogImage} />
		<meta property="og:url" content={SEO.ogUrl} />
		<meta name="geo.region" content={SEO.geoRegion} />
		<meta name="geo.placename" content={SEO.geoPlacename} />
	</Helmet>
);

export default SeoHead;
