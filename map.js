/* Real map imagery and elevation; area anchors intentionally avoid pretending to be venue coordinates. */
(function(){
 const $=s=>document.querySelector(s);let map,terrain=true,satellite=true,expanded=false;const markers=[];
 const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
 const homeView=()=>({center:$('#real-map').clientWidth<600?[9.36,47.63]:[9.32,47.64],zoom:Math.min(9.25,8.55+Math.log2(Math.max(320,$('#real-map').clientWidth)/390)),pitch:$('#real-map').clientWidth<600?40:48,bearing:$('#real-map').clientWidth<600?-40:-12});
 function visiblePlaces(){const q=state.query.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');return G.places.filter(p=>(state.area==='all'||p.area===state.area)&&(state.kind==='All'||p.kind===state.kind)&&(!state.savedOnly||saved.has(p.id))&&[p.name,p.town,p.kind,p.why,p.try,p.near].join(' ').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').includes(q));}
 window.renderMapSidebar=()=>{
  const r=G.regions.find(r=>r.id===state.area);const all=state.area==='all';
  $('#region-buttons').classList.toggle('hidden',!all);$('#all-areas').classList.toggle('hidden',all);
  $('#map-side-kicker').textContent=all?'SIX WAYS INTO BODENSEE':r.country.toUpperCase();
  $('#map-side-title').textContent=all?'Pick your corner.':MEDIA.regions[r.id].label;
  $('#map-side-description').textContent=all?'Every shore has its own character.':r.tag;
  $('#map-results').innerHTML=all?'':`<div class="map-mini-filters">${['All','Beer','Food','Explore','Stay','Move','Swim'].map(k=>`<button data-map-kind="${k}" class="${state.kind===k?'active':''}" aria-pressed="${state.kind===k}">${k==='All'?'Everything':k}</button>`).join('')}</div><p class="map-results-count">${visiblePlaces().length} places to explore</p>`+visiblePlaces().map(p=>`<button class="map-place" data-map-open="${p.id}"><img src="${placePhotos(p)[0].src}" alt="" loading="lazy" referrerpolicy="no-referrer"><span><small>${p.kind} · ${p.town}</small><strong>${escapeHTML(p.name)}</strong><em>${p.price||'Explore this place'} ↗</em></span></button>`).join('')+(visiblePlaces().length?'':'<p>No places match these filters. Try Everything.</p>');
  document.querySelectorAll('[data-map-open]').forEach(b=>b.onclick=()=>openPlace(b.dataset.mapOpen));
  document.querySelectorAll('[data-map-kind]').forEach(b=>b.onclick=()=>{state.kind=b.dataset.mapKind;render();});
  markers.forEach(({id,el})=>{el.classList.toggle('selected',id===state.area);el.setAttribute('aria-pressed',id===state.area);});
 };
 window.focusMapArea=id=>{if(!map)return;const r=MEDIA.regions[id];map.flyTo({...r?{center:r.center,zoom:r.zoom}:homeView(),pitch:terrain?(id==='all'?homeView().pitch:id==='austria'?64:48):0,bearing:id==='all'?homeView().bearing:id==='austria'?35:-12,duration:reduced?0:1500,essential:false});};
 function failure(){ $('#map-loading').classList.add('hidden');$('#map-offline').classList.remove('hidden');$('#map-hint').textContent='Map unavailable · browse areas in the panel';}
 $('#map-reset').onclick=()=>{state.area='all';render();window.focusMapArea('all');};
 $('#map-dimension').onclick=()=>{terrain=!terrain;$('#map-dimension').textContent=terrain?'3D terrain':'2D map';$('#map-dimension').setAttribute('aria-pressed',terrain);$('#map-hint').textContent=terrain?'Real terrain · area pins · drag to explore':'Flat map · area pins · drag to explore';if(map){map.setTerrain(terrain?{source:'elevation',exaggeration:1}:null);map.easeTo({pitch:terrain?55:0,duration:reduced?0:700});}};
 function switchLayer(value){satellite=value;$('#satellite').classList.toggle('active',value);$('#streets').classList.toggle('active',!value);$('#satellite').setAttribute('aria-pressed',value);$('#streets').setAttribute('aria-pressed',!value);if(map?.getLayer('satellite')){map.setLayoutProperty('satellite','visibility',value?'visible':'none');map.setLayoutProperty('streets','visibility',value?'none':'visible');}}
 $('#satellite').onclick=()=>switchLayer(true);$('#streets').onclick=()=>switchLayer(false);
 function setExpanded(value){expanded=value;document.body.classList.toggle('map-immersive',value);$('#map-expand').textContent=value?'✕ Close map':'⛶ Expand';$('#map-expand').setAttribute('aria-pressed',value);setTimeout(()=>map?.resize(),50);}
 $('#map-expand').onclick=()=>setExpanded(!expanded);document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!$('#detail').open&&expanded)setExpanded(false);});
 renderMapSidebar();
 if(!window.maplibregl){failure();return;}
 try{
 map=new maplibregl.Map({container:'real-map',...homeView(),maxZoom:17,minZoom:7,maxPitch:75,attributionControl:true,style:{version:8,sources:{satellite:{type:'raster',tiles:['https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'],tileSize:256,maxzoom:19,attribution:'Imagery © <a href="https://www.arcgis.com/home/item.html?id=10df2279f9684e4a9f6a7f08febac2a9" target="_blank">Esri, Vantor, Earthstar Geographics, GIS User Community</a>'},streets:{type:'raster',tiles:['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],tileSize:256,maxzoom:19,attribution:'© <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap contributors</a>'},elevation:{type:'raster-dem',url:'https://tiles.mapterhorn.com/tilejson.json',tileSize:512,attribution:'Terrain: <a href="https://mapterhorn.com/attribution" target="_blank">Mapterhorn</a>'}},layers:[{id:'satellite',type:'raster',source:'satellite',paint:{'raster-saturation':-.08,'raster-contrast':.08}},{id:'streets',type:'raster',source:'streets',layout:{visibility:'none'}}],terrain:{source:'elevation',exaggeration:1},sky:{'sky-color':'#b9d5e6','horizon-color':'#e8f1ef','fog-color':'#dbeaf0','fog-ground-blend':.4}}});
 map.addControl(new maplibregl.NavigationControl({visualizePitch:true}),'bottom-right');map.addControl(new maplibregl.ScaleControl({maxWidth:100,unit:'metric'}),'bottom-left');
 map.on('resize',()=>{if(state.area==='all')map.jumpTo({...homeView(),pitch:terrain?homeView().pitch:0});});
 map.on('load',()=>{$('#map-loading').classList.add('hidden');$('#map-hint').textContent='Real terrain · area pins · drag to explore';});
 let errors=0;map.on('error',()=>{errors++;if(errors>3)$('#map-hint').textContent='Some map tiles could not load · try Streets or 2D';});
 for(const r of G.regions){const m=MEDIA.regions[r.id],el=document.createElement('button');el.className='area-pin pin-'+r.id;el.setAttribute('aria-label','Explore '+m.label);el.setAttribute('aria-pressed','false');el.innerHTML=`<span class="pin-index">${G.regions.indexOf(r)+1}</span><span class="pin-photo"><img src="${m.photo.src}" alt="" referrerpolicy="no-referrer"></span><span class="pin-name">${m.label}</span>`;el.onclick=()=>chooseArea(r.id);new maplibregl.Marker({element:el,anchor:'bottom'}).setLngLat(m.center).addTo(map);markers.push({id:r.id,el});}
 setTimeout(()=>{if(!map.loaded()&&errors)failure();},15000);
 }catch(e){failure();console.warn('Map unavailable:',e.message);}
})();
