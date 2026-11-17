// Lê o número exibido no elemento marcado e retorna só os dígitos nacionais (sem 55).
export const getDisplayedPhoneDigits = (attr) => {
	const element = document.querySelector(`[${attr}]`);
	if (!element) return '';
	const digits = element.textContent.replace(/\D/g, '');
	return digits.length > 11 && digits.startsWith('55') ? digits.slice(2) : digits;
};
