import React from 'react';

const PolicySection = ({ section }) => (
	<section className="privacy-policy__section">
		<h2 className="privacy-policy__heading">{section.title}</h2>
		{section.paragraphs?.map((text) => (
			<p key={text} className="privacy-policy__text">{text}</p>
		))}
		{section.items && (
			<ul className="privacy-policy__list">
				{section.items.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
		)}
	</section>
);

export default PolicySection;
