import { PHONE_DISPLAY, LOCATION } from '@/config/contact';
import { AD_CLICK_MAX_AGE_DAYS } from '@/config/attribution';

// Texto da política. Revise e ajuste conforme a realidade do negócio.
export const privacyPolicy = {
	seoTitle: 'Política de Privacidade - EletriCaldas',
	seoDescription: 'Saiba como a EletriCaldas coleta, usa e protege seus dados pessoais e cookies, conforme a LGPD.',
	title: 'Política de Privacidade',
	updatedAt: '17/11/2026',
	intro: `Esta política explica como a EletriCaldas, eletricista em ${LOCATION}, trata os dados pessoais de quem visita este site, conforme a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 – LGPD).`,
	sections: [
		{
			title: '1. Quem é o responsável pelos dados',
			paragraphs: [
				`O controlador dos dados é a EletriCaldas, com atendimento em ${LOCATION}. Para qualquer assunto sobre privacidade, fale conosco pelo WhatsApp ou telefone ${PHONE_DISPLAY}.`,
			],
		},
		{
			title: '2. Quais dados coletamos',
			items: [
				'Dados de navegação: páginas visitadas, tipo de dispositivo, navegador, cidade aproximada e origem da visita, coletados pelo Google Analytics.',
				'Dados de anúncios: quando você chega por um anúncio do Google, o identificador do clique (gclid, gbraid ou wbraid) e um código de atendimento gerado pelo site (ex.: EC-AB12CD).',
				'Interações com o site: qual botão de WhatsApp ou telefone foi clicado.',
				'Dados que você nos envia por WhatsApp ou telefone, como nome, endereço e descrição do serviço.',
			],
		},
		{
			title: '3. Para que usamos os dados',
			items: [
				'Responder seus pedidos de orçamento e prestar o serviço contratado.',
				'Medir o desempenho do site e dos anúncios no Google Ads.',
				'Saber quais anúncios geraram atendimentos e serviços fechados, para melhorar nossas campanhas.',
			],
		},
		{
			title: '4. Base legal',
			paragraphs: [
				'Os cookies e identificadores de análise e anúncios só são usados com o seu consentimento (art. 7º, I, da LGPD), dado no aviso de cookies. Os dados que você envia para pedir um orçamento são usados para atender ao seu pedido e executar o serviço (art. 7º, V).',
			],
		},
		{
			title: '5. Cookies e tecnologias semelhantes',
			paragraphs: [
				'Usamos o Google Tag Manager, o Google Analytics e o Google Ads. Antes de você aceitar, esses serviços funcionam em modo restrito, sem gravar cookies de análise ou de anúncios no seu navegador (modo de consentimento do Google).',
				'Se você aceitar, o site também guarda no seu navegador o identificador do anúncio e o código de atendimento para que o código seja incluído na mensagem do WhatsApp. Se você recusar, nada disso é guardado e a mensagem segue sem código.',
				'A seção de depoimentos exibe avaliações do Google por meio do serviço Elfsight, que pode usar seus próprios recursos técnicos para carregar o conteúdo.',
			],
		},
		{
			title: '6. Com quem compartilhamos',
			items: [
				'Google (Analytics, Ads, Tag Manager e Planilhas Google), para medição de resultados e registro dos atendimentos vindos de anúncios.',
				'WhatsApp (Meta), quando você escolhe falar conosco por esse canal.',
				'Elfsight, para exibir as avaliações do Google no site.',
			],
			paragraphs: ['Não vendemos seus dados pessoais.'],
		},
		{
			title: '7. Por quanto tempo guardamos',
			items: [
				`O identificador do anúncio e o código de atendimento ficam no seu navegador por até ${AD_CLICK_MAX_AGE_DAYS} dias.`,
				'Os registros de atendimentos vindos de anúncios são mantidos apenas pelo tempo necessário para medir os resultados das campanhas.',
				'Os dados de navegação seguem o prazo de retenção configurado no Google Analytics.',
			],
		},
		{
			title: '8. Seus direitos',
			paragraphs: ['Pela LGPD, você pode a qualquer momento:'],
			items: [
				'Confirmar se tratamos seus dados e acessá-los.',
				'Corrigir dados incompletos ou desatualizados.',
				'Pedir a exclusão, anonimização ou bloqueio de dados desnecessários.',
				'Revogar o consentimento dos cookies, pelo link "Preferências de cookies" no rodapé ou pelo botão abaixo.',
				`Fazer qualquer solicitação pelo WhatsApp ou telefone ${PHONE_DISPLAY}.`,
			],
		},
		{
			title: '9. Alterações nesta política',
			paragraphs: ['Esta política pode ser atualizada. A data da última atualização fica sempre no início desta página.'],
		},
	],
};
