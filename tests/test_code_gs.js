// Testa o Code.gs com mocks simples do Apps Script.
const fs = require('fs'); const vm = require('vm');
const src = fs.readFileSync('/app/source/integrations/google-sheets/Code.gs', 'utf8');
function makeSheet(name){ const s={name,data:[],
 getName:()=>name, getLastRow:()=>s.data.length, getLastColumn:()=>Math.max(0,...s.data.map(r=>r.length)),
 appendRow:(r)=>s.data.push([...r]), clearContents:()=>{s.data=[]},
 getRange:(a,b,c,d)=>{ if(typeof a==='string') return {createTextFinder:(t)=>({matchEntireCell:()=>({findNext:()=>s.data.some(r=>r[1]===t)})})};
   return {setValues:(v)=>v.forEach((row,i)=>{s.data[a-1+i]=s.data[a-1+i]||[];row.forEach((x,j)=>s.data[a-1+i][b-1+j]=x)}),
           getValues:()=>s.data.slice(a-1,a-1+c).map(r=>Array.from({length:d},(_,j)=>r[b-1+j]??''))}; } }; return s;}
const sheets={}; const ss={getSheetByName:(n)=>sheets[n], insertSheet:(n)=>(sheets[n]=makeSheet(n))};
const ctx={SpreadsheetApp:{getActiveSpreadsheet:()=>ss}, ContentService:{createTextOutput:(t)=>t},
 LockService:{getScriptLock:()=>({waitLock(){},releaseLock(){}})},
 Utilities:{formatDate:()=> '2026-06-10 10:00:00'}, ScriptApp:{getProjectTriggers:()=>[],newTrigger:()=>({timeBased:()=>({everyHours:()=>({create(){}})})})}, Date, console};
vm.createContext(ctx); vm.runInContext(src, ctx);
const post=(d)=>ctx.doPost({postData:{contents:JSON.stringify(d)}});
const base={lead_method:'whatsapp',lead_location:'hero'};
let ok=true; const eq=(a,b,m)=>{const p=JSON.stringify(a)===JSON.stringify(b); if(!p) ok=false; console.log(p?'PASS':'FAIL',m,p?'':JSON.stringify(a)+' != '+JSON.stringify(b));};
// planilha antiga com 9 colunas
sheets['Leads']=makeSheet('Leads'); sheets['Leads'].data.push(['Data/Hora do contato','Código','Google Click ID','Tipo do ID','Canal','Local do botão','Serviço fechado? (sim)','Data/Hora do fechamento','Valor (R$)']);
eq(post({...base,lead_code:'EC-ABC123',ad_click_id:'gclidXYZ',ad_click_type:'gclid'}),'ok','grava lead');
eq(sheets['Leads'].data[0][9],'Telefone do cliente (com DDD)','cabeçalho atualizado');
eq(post({...base,lead_code:'EC-ABC123',ad_click_id:'gclidXYZ',ad_click_type:'gclid'}),'duplicate','duplicado');
eq(post({...base,lead_code:'bad',ad_click_id:'x',ad_click_type:'gclid'}),'ignored','inválido');
post({...base,lead_code:'EC-DEF456',ad_click_id:'gb1',ad_click_type:'gbraid'});
post({...base,lead_code:'EC-GHI789',ad_click_id:'gc3',ad_click_type:'gclid'});
const L=sheets['Leads'].data;
// onEdit preenche data
const cell=(r,c)=>({getSheet:()=>({getName:()=> 'Leads'}),getRow:()=>r,getColumn:()=>c,getValue:()=>L[r-1][c-1],offset:(_,dc)=>({getValue:()=>L[r-1][c-1+dc],setValue:(v)=>L[r-1][c-1+dc]=v})});
L[1][6]='Sim'; ctx.onEdit({range:cell(2,7)}); eq(L[1][7],'2026-06-10 10:00:00-03:00','onEdit preenche fechamento');
L[1][8]='R$ 1.500,00'; L[1][9]='(64) 99286-9608';
L[2][6]='sim'; L[2][7]='2026-06-09 15:00:00-03:00'; L[2][8]='250'; L[2][9]='64992869608';
// linha 3 sem sim -> fora
ctx.criarAgendamento();
const G=sheets['Google Ads'].data;
eq(G.length,3,'só fechados exportados');
eq(G[1],['gclidXYZ','','','+5564992869608','Serviço fechado','2026-06-10 10:00:00-03:00',1500,'BRL','Granted','Granted'],'linha gclid');
eq(G[2],['','gb1','','+5564992869608','Serviço fechado','2026-06-09 15:00:00-03:00',250,'BRL','Granted','Granted'],'linha gbraid');
process.exit(ok?0:1);
