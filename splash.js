(()=>{
 const no=document.documentElement.lang==='nb';const t=(en,nb)=>no?nb:en;
 const splash=document.createElement('dialog');splash.className='welcome-splash';splash.setAttribute('aria-labelledby','welcome-title');
 splash.innerHTML=`<video playsinline preload="none" poster="assets/welcome.jpg" aria-label="${t('Cycling through the trees','Sykkeltur mellom trærne')}"></video><div class="welcome-shade"></div><div class="welcome-heading"><span>LAKE DAYS · BODENSEE</span><h1 id="welcome-title">${t('Happy days by the lake.','Gode dager ved innsjøen.')}</h1><p>${t('Two bikes. Good beer. Just the two of us.','To sykler. Godt øl. Bare oss to.')}</p></div><div class="welcome-bottom"><div class="welcome-controls"><button type="button" id="welcome-play"></button><button type="button" id="welcome-sound" aria-pressed="false">${t('Sound on','Slå på lyd')}</button><button type="button" id="welcome-skip" autofocus>${t('Skip to the guide →','Gå til guiden →')}</button></div><p class="welcome-status" role="status">${t('Our trip starts with a little happy music.','Turen vår starter med litt gladmusikk.')}</p></div>`;
 document.body.appendChild(splash);
 const video=splash.querySelector('video'),play=splash.querySelector('#welcome-play'),sound=splash.querySelector('#welcome-sound'),skip=splash.querySelector('#welcome-skip'),status=splash.querySelector('.welcome-status');let timer,returnFocus;
 function cleanup(){clearTimeout(timer);video.pause();document.body.classList.remove('welcome-open');if(returnFocus?.isConnected)returnFocus.focus({preventScroll:true});}
 function finish(){if(splash.open)splash.close();cleanup();}
 function sync(){play.textContent=video.paused?t('Play with music','Spill av med musikk'):t('Pause','Pause');sound.textContent=video.muted?t('Sound on','Slå på lyd'):t('Sound off','Slå av lyd');sound.setAttribute('aria-pressed',String(!video.muted));}
 async function start(){clearTimeout(timer);timer=setTimeout(finish,20000);try{await video.play();}catch{clearTimeout(timer);status.textContent=t('Tap Play with music to start the film.','Trykk Spill av med musikk for å starte filmen.');}sync();}
 function open(){returnFocus=document.activeElement;if(!video.src){video.src='assets/welcome.mp4';video.load();}video.currentTime=0;video.muted=false;status.textContent=t('Our trip starts with a little happy music.','Turen vår starter med litt gladmusikk.');splash.showModal();document.body.classList.add('welcome-open');sync();start();}
 skip.onclick=finish;play.onclick=()=>{if(video.paused)start();else{clearTimeout(timer);video.pause();sync();}};
 sound.onclick=()=>{video.muted=!video.muted;sync();if(video.paused)start();};video.onended=finish;video.onplay=sync;video.onpause=sync;video.onerror=()=>{clearTimeout(timer);status.textContent=t('The video could not load. You can continue to the guide.','Videoen kunne ikke lastes. Du kan gå videre til guiden.');};splash.addEventListener('close',cleanup);
 const replay=document.createElement('button');replay.id='welcome-replay';replay.textContent=t('Watch the welcome film','Se velkomstfilmen');replay.onclick=open;document.querySelector('footer').appendChild(replay);
 open();
})();
