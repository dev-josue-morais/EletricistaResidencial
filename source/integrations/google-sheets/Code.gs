/**
 * Google Apps Script — grava na planilha os contatos vindos de anúncios do site EletriCaldas
 * e monta a aba "Google Ads" (conversões otimizadas para leads) para importar no Gerenciador de dados do Google Ads.
 * Instalação: Planilha Google > Extensões > Apps Script > cole este código > Implantar > Nova implantação
 * > Tipo "App da Web" > Executar como "Eu" > Quem pode acessar "Qualquer pessoa" > copie a URL.
 * Depois, rode uma vez a função criarAgendamento (atualiza a aba "Google Ads" a cada hora).
 */
const SHEET_NAME = 'Leads';
const ADS_SHEET_NAME = 'Google Ads';
const CONVERSION_NAME = 'Serviço fechado';
const TIME_ZONE = 'America/Sao_Paulo';
const HEADERS = ['Data/Hora do contato', 'Código', 'Google Click ID', 'Tipo do ID', 'Canal', 'Local do botão', 'Serviço fechado? (sim)', 'Data/Hora do fechamento', 'Valor (R$)', 'Telefone do cliente (com DDD)'];
const COL = { clickId: 2, clickType: 3, closed: 6, closedAt: 7, value: 8, phone: 9 };
const ADS_HEADERS = ['Google Click ID', 'GBRAID', 'WBRAID', 'Phone Number', 'Conversion Name', 'Conversion Time', 'Conversion Value', 'Conversion Currency', 'Ad User Data', 'Ad Personalization'];
const PATTERNS = {
  lead_code: /^EC-[A-Z0-9]{6}$/,
  ad_click_id: /^[A-Za-z0-9_-]{1,200}$/,
  ad_click_type: /^(gclid|gbraid|wbraid)$/,
  lead_method: /^[a-z_]{1,30}$/,
  lead_location: /^[a-z_]{1,40}$/,
};

const now = () => Utilities.formatDate(new Date(), TIME_ZONE, 'yyyy-MM-dd HH:mm:ss') + '-03:00';

function getLeadsSheet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0 || sheet.getLastColumn() < HEADERS.length) {
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
  }
  return sheet;
}

function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  const valid = Object.keys(PATTERNS).every((key) => PATTERNS[key].test(String(data[key] || '')));
  if (!valid) return ContentService.createTextOutput('ignored');

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const sheet = getLeadsSheet();
    const alreadySaved = sheet.getRange('B:B').createTextFinder(data.lead_code).matchEntireCell(true).findNext();
    if (alreadySaved) return ContentService.createTextOutput('duplicate');

    sheet.appendRow([now(), data.lead_code, data.ad_click_id, data.ad_click_type, data.lead_method, data.lead_location, '', '', '', '']);
    return ContentService.createTextOutput('ok');
  } finally {
    lock.releaseLock();
  }
}

// Ao marcar "sim" em "Serviço fechado?", preenche a data/hora do fechamento automaticamente.
function onEdit(e) {
  const range = e.range;
  if (range.getSheet().getName() !== SHEET_NAME || range.getRow() < 2 || range.getColumn() !== COL.closed + 1) return;
  const closedAt = range.offset(0, 1);
  if (String(range.getValue()).trim().toLowerCase() === 'sim' && !closedAt.getValue()) closedAt.setValue(now());
}

// Telefone brasileiro no formato E.164 (+55DDDNUMERO).
function toE164(raw) {
  let digits = String(raw || '').replace(/\D/g, '').replace(/^0+/, '');
  if (digits.length === 10 || digits.length === 11) digits = '55' + digits;
  return /^55\d{10,11}$/.test(digits) ? '+' + digits : '';
}

function toNumber(raw) {
  if (typeof raw === 'number') return raw;
  const n = parseFloat(String(raw || '').replace(/[^\d,.-]/g, '').replace(/\.(?=\d{3}(\D|$))/g, '').replace(',', '.'));
  return isNaN(n) ? '' : n;
}

function formatTime(value) {
  return value instanceof Date ? Utilities.formatDate(value, TIME_ZONE, 'yyyy-MM-dd HH:mm:ss') + '-03:00' : String(value);
}

// Monta a aba "Google Ads" só com os serviços fechados (lida pelo Gerenciador de dados do Google Ads).
function atualizarConversoes() {
  const leads = getLeadsSheet();
  const rows = leads.getLastRow() > 1 ? leads.getRange(2, 1, leads.getLastRow() - 1, HEADERS.length).getValues() : [];
  const output = rows
    .filter((r) => String(r[COL.closed]).trim().toLowerCase() === 'sim' && r[COL.closedAt])
    .map((r) => {
      const type = r[COL.clickType];
      return [
        type === 'gclid' ? r[COL.clickId] : '',
        type === 'gbraid' ? r[COL.clickId] : '',
        type === 'wbraid' ? r[COL.clickId] : '',
        toE164(r[COL.phone]),
        CONVERSION_NAME,
        formatTime(r[COL.closedAt]),
        toNumber(r[COL.value]),
        'BRL',
        'Granted',
        'Granted',
      ];
    });

  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadsheet.getSheetByName(ADS_SHEET_NAME) || spreadsheet.insertSheet(ADS_SHEET_NAME);
  sheet.clearContents();
  sheet.getRange(1, 1, 1, ADS_HEADERS.length).setValues([ADS_HEADERS]);
  if (output.length) sheet.getRange(2, 1, output.length, ADS_HEADERS.length).setValues(output);
}

// Rode uma vez: atualiza a aba "Google Ads" a cada hora.
function criarAgendamento() {
  ScriptApp.getProjectTriggers()
    .filter((t) => t.getHandlerFunction() === 'atualizarConversoes')
    .forEach((t) => ScriptApp.deleteTrigger(t));
  ScriptApp.newTrigger('atualizarConversoes').timeBased().everyHours(1).create();
  atualizarConversoes();
}
