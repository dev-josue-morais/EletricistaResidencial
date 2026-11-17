export const HOME_URL = './';
export const PRIVACY_URL = './privacidade.html';
export const PRIVACY_PAGE = 'privacidade';

// Página atual definida pelo atributo data-page do <body> de cada HTML publicado.
export const getCurrentPage = () => document.body.dataset.page || 'home';
