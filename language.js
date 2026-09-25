/* Translations affect presentation only. IDs, URLs and category values remain stable. */
(()=>{
 const supported=['en','nb'];let lang='nb';try{const stored=localStorage.getItem('lake-days-language');if(supported.includes(stored))lang=stored;}catch{}
 document.documentElement.lang=lang;
 const dictionary=window.NB_TEXT||{};
 const phrases=Object.keys(dictionary).filter(s=>s.length>3&&s!=='Hotel').sort((a,b)=>b.length-a.length);
 const translatedValues=new Set(Object.values(dictionary));
 const escape=s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
 const phrasePattern=new RegExp(phrases.map(escape).join('|'),'g');
 function translate(value){
  if(lang!=='nb'||!value)return value;
  const text=value.trim();if(dictionary[text])return value.replace(text,dictionary[text]);if(translatedValues.has(text))return value;
  let result=value.replace(phrasePattern,match=>dictionary[match]);
  result=result.replace(/\b(Photo source:|Photo:|Area photograph ·|Area photo ·)/g,m=>({'Photo source:':'Bildekilde:','Photo:':'Foto:','Area photograph ·':'Områdefoto ·','Area photo ·':'Områdefoto ·'}[m]));
  result=result.replace(/\bBeer\b/g,'Øl').replace(/\bFood\b/g,'Mat').replace(/\bMove\b/g,'Transport').replace(/\bSwim\b/g,'Bading').replace(/\bStay\b/g,'Overnatting');
  result=result.replace(/\bGUIDE\b/g,'GUIDE').replace(/\bNext: /g,'Neste: ').replace(/\bSources checked /g,'Kilder sjekket ').replace(/\bChecked sources/g,'Kilder sjekket').replace(/\bSaved\b/g,'Lagret');
  result=result.replace(/(\d+) places match/g,'$1 treff').replace(/(\d+) sources/g,'$1 kilder').replace(/(\d+) source\b/g,'$1 kilde').replace(/(\d+) places around the lake/g,'$1 steder rundt innsjøen').replace(/(\d+) places around /g,'$1 steder ved ');
  result=result.replace(/(\d+) (bike hire options|pubs|hotels|sights|breweries) around /g,(_,n,t)=>n+' '+({'bike hire options':'sykkelleietilbud',pubs:'puber',hotels:'hoteller',sights:'severdigheter',breweries:'bryggerier'}[t])+' ved ');
  result=result.replace(/^No (.+) listed in this area yet\. Choose another area to explore\.$/,(_,t)=>'Ingen '+({hotels:'hoteller','pubs & bars':'puber og barer','sights & visits':'severdigheter',breweries:'bryggerier','bike hire & sharing':'sykkelleietilbud'}[t]||t)+' er oppført her ennå. Velg et annet område.');
  result=result.replace(/^Open (.+) guide$/, 'Åpne guiden til $1').replace(/^See photos and details for /,'Se bilder og detaljer for ').replace(/^View (.+) on Booking\.com$/,'Se $1 på Booking.com').replace(/^Unsave /,'Fjern fra lagrede: ').replace(/^Save /,'Lagre ');
  result=result.replace(/\b(Try|Nearby|Storage|Charging|Rental|Check): /g,m=>({'Try: ':'Prøv: ','Nearby: ':'I nærheten: ','Storage: ':'Oppbevaring: ','Charging: ':'Lading: ','Rental: ':'Sykkelleie: ','Check: ':'Sjekk: '}[m]));
  return result;
 }
 window.localeText=translate;
 const header=document.querySelector('header');
 const label=document.createElement('label');label.className='language-control';label.innerHTML='<span>Language / Språk</span><select id="language" aria-label="Language / Språk"><option value="en" lang="en">English</option><option value="nb" lang="nb">Norsk bokmål</option></select>';
 header.insertBefore(label,document.querySelector('#saved-top'));const select=label.querySelector('select');select.value=lang;
 select.onchange=()=>{try{localStorage.setItem('lake-days-language',select.value);sessionStorage.setItem('lake-days-map-category',typeof mapCategory==='string'?mapCategory:'guides');sessionStorage.setItem('lake-days-map-area',typeof mapArea==='string'?mapArea:'');}catch{}location.reload();};
 const localizedNodes=new WeakMap(),localizedAttributes=new WeakMap();
 function localize(){
  if(lang!=='nb')return;
  document.title=translate(document.title);
  const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);const nodes=[];let n;
  while(n=walker.nextNode())if(!n.parentElement?.closest('script,style,.language-control')&&n.nodeValue.trim())nodes.push(n);
  for(const n of nodes){if(localizedNodes.get(n)===n.nodeValue)continue;const result=translate(n.nodeValue);if(result!==n.nodeValue){if(n.parentElement.tagName==='OPTION'&&!n.parentElement.hasAttribute('value'))n.parentElement.value=n.parentElement.textContent;n.nodeValue=result;}localizedNodes.set(n,n.nodeValue);}
  document.querySelectorAll('[aria-label],[placeholder],[alt],[title]').forEach(el=>{if(el.closest('.language-control'))return;const memo=localizedAttributes.get(el)||{};for(const attr of ['aria-label','placeholder','alt','title'])if(el.hasAttribute(attr)){const original=el.getAttribute(attr);if(memo[attr]===original)continue;const result=translate(original);if(result!==original)el.setAttribute(attr,result);memo[attr]=result;}localizedAttributes.set(el,memo);});
 }
 localize();const observer=new MutationObserver(()=>{observer.disconnect();localize();observe();});const observe=()=>observer.observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['aria-label','placeholder','alt','title']});observe();
})();
