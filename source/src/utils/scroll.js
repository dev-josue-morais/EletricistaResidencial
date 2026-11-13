export const scrollToSection = (id) => {
	const element = document.getElementById(id);
	element && element.scrollIntoView({ behavior: "smooth" });
};
