/**
 * Google Apps Script — grava na planilha os contatos vindos de anúncios do site EletriCaldas.
 * Instalação: Planilha Google > Extensões > Apps Script > cole este código > Implantar > Nova implantação
 * > Tipo "App da Web" > Executar como "Eu" > Quem pode acessar "Qualquer pessoa" > copie a URL.
 */
const SHEET_NAME = 'Leads';
const HEADERS = ['Data/Hora do contato', 'Código', 'Google Click ID', 'Tipo do ID', 'Canal', 'Local do botão', 'Serviço fechado? (sim)', 'Data/Hora do fechamento', 'Valor (R$)'];
const PATTERNS = {
  lead_code: /^EC-[A-Z0-9]{6}$/,
  ad_click_id: /^[A-Za-z0-9_-]{1,200}$/,
  ad_click_type: /^(gclid|gbraid|wbraid)$/,
  lead_method: /^[a-z_]{1,30}$/,
  lead_location: /^[a-z_]{1,40}$/,
};

function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  const valid = Object.keys(PATTERNS).every((key) => PATTERNS[key].test(String(data[key] || '')));
  if (!valid) return ContentService.createTextOutput('ignored');

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);
    if (sheet.getLastRow() === 0) sheet.appendRow(HEADERS);

    const alreadySaved = sheet.getRange('B:B').createTextFinder(data.lead_code).matchEntireCell(true).findNext();
    if (alreadySaved) return ContentService.createTextOutput('duplicate');

    const time = Utilities.formatDate(new Date(), 'America/Sao_Paulo', 'yyyy-MM-dd HH:mm:ss') + '-03:00';
    sheet.appendRow([time, data.lead_code, data.ad_click_id, data.ad_click_type, data.lead_method, data.lead_location, '', '', '']);
    return ContentService.createTextOutput('ok');
  } finally {
    lock.releaseLock();
  }
}
