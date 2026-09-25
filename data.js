// English content is separate from the interface so another language can be added without rebuilding the guide.
window.GUIDE = {
 checked:'25 September 2026',
 regions:[
 {id:'west',name:'Konstanz & the west',country:'Germany · Switzerland',tag:'Old lanes, a harbour beer, island detours',x:220,y:248,description:'The most flexible western base: proper town evenings, station-side rental and gentle escapes towards Mainau or Reichenau.'},
 {id:'north',name:'Überlingen & Meersburg',country:'Germany',tag:'Castle walls and long lake views',x:322,y:137,description:'Browse the north-west shore for promenades, stilt houses and a castle stop. Upper Meersburg adds a climb; the waterfront is the easy option.'},
 {id:'hops',name:'Friedrichshafen & hop country',country:'Germany',tag:'Airships, country breweries, a Swiss ferry',x:523,y:199,description:'A useful transport hub with a more rural beer detour behind it. Tettnang and Kressbronn-Berg are inland and hillier than the shore.'},
 {id:'lindau',name:'Lindau & the island',country:'Germany',tag:'The strongest little evening cluster',x:683,y:300,description:'An island of lanes, old inns and harbour views. A good fit if the best part of the day ends with the bikes parked and dinner on foot.'},
 {id:'austria',name:'Bregenz & the Austrian shore',country:'Austria',tag:'A swim, a mountain view, a lakeside table',x:733,y:375,description:'Combine a compact town base with the lakeside cycle corridor. The Pfänder is a separate mountain outing, best enjoyed without a cycling obligation.'},
 {id:'swiss',name:'Romanshorn, Arbon & Rorschach',country:'Switzerland',tag:'Harbour pauses and Swiss brewery bars',x:518,y:365,description:'A string of harbour towns with a quieter feel. Romanshorn connects across the water; Rorschach adds a real brewery bar and a former brewery beer garden.'}
 ],
 places:[
 {id:'johann',name:'Brauhaus Joh. Albrecht',area:'west',town:'Konstanz · Niederburg',kind:'Beer',why:'A proper brewery stop inside the medieval old town. The brewing equipment and historic rooms give the beer a sense of place.',try:'Ask for the current unfiltered house beer and the seasonal kitchen specials.',near:'Niederburg lanes, the cathedral and a walk down to the harbour.',note:'The operator currently lists daily opening from noon; check the current kitchen hours before going.',sources:[['Brewery & visiting','https://www.brauhaus-joh-albrecht.de/konstanz/index.php'],['House beers','https://www.brauhaus-joh-albrecht.de/konstanz/index.php/biere']]},
 {id:'hafenhalle',name:'Hafenhalle',area:'west',town:'Konstanz · harbour',kind:'Beer',why:'The easy “we have arrived” beer garden: boats, lake air and a kitchen with regional roots.',try:'Lentils with Spätzle and Wienerle, or ask about the current fish dishes.',near:'Harbour, station and old-town evening wander.',note:'Outdoor atmosphere is weather-dependent. Events and menus change.',sources:[['Restaurant, beer garden & menu','https://hafenhalle.com/']]},
 {id:'ruppaner',name:'Ruppaner brewery',area:'west',town:'Konstanz · Hohenegg',kind:'Beer',why:'A local beer name to recognise around Konstanz, with family brewing history on the lake.',try:'Look for Bio Schimmele or Hefeweizen where stocked.',near:'Bodensee-Therme and the eastern Konstanz shore.',note:'Brewery reference and detour idea: a walk-in taproom or tour for two has NOT been verified. Do not ride here expecting a public bar.',sources:[['Brewery history & beers','https://www.ruppaner-bodensee.de/die-brauerei/historie/']]},
 {id:'mainau',name:'Mainau island',area:'west',town:'Mainau · north of Konstanz',kind:'Explore',why:'A colourful break from town streets: gardens, water views and a reason to slow down.',try:'A garden wander with a coffee break; choose the seasonal highlights on the island website.',near:'Konstanz and the northward shore towards Wallhausen.',note:'Paid attraction. Check admission and bicycle arrangements before arrival; plan the island visit on foot.',sources:[['Official island arrival guide','https://www.mainau.de/de/anfahrt'],['Visitor questions','https://www.mainau.de/de/faqs']]},
 {id:'reichenau',name:'Reichenau island',area:'west',town:'Untersee · Germany',kind:'Explore',why:'A slower island detour with monastic heritage and open landscapes. Give it its own generous chunk of time.',try:'Look for seasonal island produce and explore the heritage sites.',near:'Konstanz and the western lake.',note:'This is a place to browse, not a promise of open churches or a particular farm shop; consult local visitor information.',sources:[['Reichenau visitor information','https://www.reichenau-tourismus.de/']]},
 {id:'stein',name:'Stein am Rhein',area:'west',town:'Western detour · Switzerland',kind:'Explore',why:'A western extension for old-town wandering when you want more than the main lake shore.',try:'A slow town walk and a riverside pause.',near:'Untersee; best treated as a separate outing from Konstanz.',note:'A longer detour, not a short hop. Consult the town visitor information for sights and access.',sources:[['Town & visitor information','https://www.steinamrhein.ch/']]},
 {id:'therme',name:'Bodensee-Therme & summer lido',area:'west',town:'Konstanz · eastern shore',kind:'Swim',why:'A useful choice between a summer swim and a warm-water pause when the weather changes.',try:'The seasonal outdoor pool and lake access, or the thermal baths.',near:'Ruppaner area and the shore towards Staad.',note:'Outdoor lake access is seasonal and temperature-dependent. Pool, thermal and sauna admission differ.',sources:[['Outdoor pool & lake access','https://www.therme-konstanz.de/freibad'],['Thermal baths','https://www.therme-konstanz.de/']]},
 {id:'halm',name:'Hotel Halm',area:'west',town:'Konstanz · Bahnhofplatz',kind:'Stay',why:'A traditional town hotel opposite the station: convenient for arrival, rental and an evening without bikes.',try:'Use it as a town-first base, with Hafenhalle and the old town on foot.',near:'Hafenhalle; Joh. Albrecht farther through the old town.',price:'€€–€€€ · comfortable to upscale',storage:'Unknown — confirm secure overnight storage.',charging:'Unknown — confirm battery charging policy.',rental:'Kultur-Rädle is on Bahnhofplatz; ask about collection and return times.',note:'The location is verified; hotel bike amenities are not.',sources:[['Hotel character & facilities','https://hotel-halm.de/en'],['Location','https://hotel-halm.de/anfahrt-parken']]},
 {id:'kultur',name:'Kultur-Rädle',area:'west',town:'Konstanz · Bahnhofplatz 29',kind:'Move',why:'A practical e-bike starting point beside the station and old town.',try:'Reserve two correctly sized pedelecs; ask for locks, chargers and route advice.',near:'Hotel Halm and Hafenhalle.',note:'Konstanz tourism confirms pedelecs/e-bikes. Cross-border use, ferry carriage, battery range and return arrangements need agreement with the rental shop.',sources:[['Official Konstanz rental listing','https://www.konstanz-info.com/attraktionen/kultur-raedle-9e1f435a56']]},
 {id:'meersburg',name:'Burg Meersburg',area:'north',town:'Meersburg · upper town',kind:'Explore',why:'A castle visit turns a pretty harbour stop into a proper exploration. A good excuse to park up and climb into the town.',try:'Explore the castle and then linger over the lake view.',near:'Lower-town waterfront and the Konstanz–Meersburg ferry.',note:'Paid admission; upper town involves gradients and walking. Check current tours directly.',sources:[['Castle visits','https://www.burg-meersburg.de/']]},
 {id:'pfahl',name:'Pfahlbauten museum',area:'north',town:'Unteruhldingen',kind:'Explore',why:'Reconstructed lakeside dwellings and original finds make an unusual break between harbour towns.',try:'The museum hall, immersive introduction and outdoor dwellings.',near:'Meersburg and Überlingen along the north-west shore.',note:'Paid attraction. Allow time off the bike and check seasonal hours.',sources:[['Official museum','https://www.pfahlbauten.de/']]},
 {id:'uber',name:'Überlingen promenade & old town',area:'north',town:'Überlingen',kind:'Explore',why:'A generous promenade and historic streets make this a place to linger rather than simply ride through.',try:'Walk the old town and gardens, then choose a waterfront café from the local directory.',near:'St. Nikolaus, town gardens and the western shore.',note:'A town browsing stop; individual cafés are not endorsed without separate checks.',sources:[['Official tourism portal','https://www.ueberlingen-bodensee.de/']]},
 {id:'badhotel',name:'Bad Hotel Überlingen',area:'north',town:'Überlingen · Christophstraße',kind:'Stay',why:'A potential base for a more unhurried north-west shore stay, near the promenade and old town.',try:'An evening promenade stroll and food in the old-town restaurant area.',near:'Überlingen promenade; specific pub matches still to be checked.',price:'€€€ · upscale shortlist',storage:'Unknown — confirm locked bike space.',charging:'Unknown — confirm e-bike charging.',rental:'Use the regional rental directory; a specific nearby e-bike pickup is not yet verified.',note:'Candidate hotel, with bike and evening-food research still incomplete.',sources:[['Hotel official information','https://www.bad-hotel-ueberlingen.de/de/badhotel/zusatzangebote'],['Regional rentals','https://webdisk.bodensee.eu/de/was-erleben/aktiv/radfahren/verleih']]},
 {id:'max',name:'Max & Moritz',area:'hops',town:'Kressbronn-Berg · Weinbichl 6',kind:'Beer',why:'The country brewery detour: head away from the waterfront for house-brewed beer and a substantial meal.',try:'House Helles or Special; choose from the current inn menu.',near:'Kressbronn and the eastern German shore.',note:'Inland hill detour. Private brewery tours list a 10-person minimum; two friends should look for public dates instead.',sources:[['Location & visiting','https://www.maxmoritz-bier.de/anfahrt/'],['English menu','https://www.maxmoritz-bier.de/Speisekarte/MM-Speisekarte_en.pdf'],['Official 2026 tour conditions','https://www.kressbronn.de/fileadmin/benutzerdaten/kressbronn-de/Bilder_und_PDF/5._Tourismus/Sehen___Erleben/F%C3%BChrungen/Fuehrungsangebote_2026.pdf']]},
 {id:'hopfengut',name:'Hopfengut No20',area:'hops',town:'Tettnang · Siggenweiler',kind:'Beer',why:'The most on-theme inland detour: hop growing, museum, brewery, shop and a beer garden in one place.',try:'Ask for the current house beer; fresh-hop specials are seasonal.',near:'Tettnang and its hop-growing countryside.',note:'The operator lists a Monday closure and shorter Sunday restaurant hours. Check public tasting tours; these are more realistic for two than private groups.',sources:[['Opening hours, tours & beer garden','https://www.hopfengut.de/']]},
 {id:'krone',name:'Tettnanger Krone hotel & brewery',area:'hops',town:'Tettnang · town centre',kind:'Stay',why:'Eight rooms in a historic brewing house: a characterful alternative if hop country is the focus.',try:'Ask where to enjoy the brewery’s Keller-Pils locally.',near:'Tettnang centre; Hopfengut is a separate inland outing.',price:'€€ · small traditional inn',storage:'Unknown — ask before choosing this base.',charging:'Unknown — ask before choosing this base.',rental:'No on-site e-bike rental verified; arrange pickup elsewhere.',note:'IMPORTANT: the traditional brewery restaurant is closed. The hotel and brewery remain open. Do not expect dinner downstairs; nearby dinner options need checking.',sources:[['Hotel','https://www.tettnanger-krone.de/hotel-tettnang/'],['Restaurant closure notice','https://www.tettnanger-krone.de/brauereigasthof/'],['Brewery','https://www.tettnanger-krone.de/kronen-brauerei/']]},
 {id:'zeppelin',name:'Zeppelin Museum',area:'hops',town:'Friedrichshafen · harbour',kind:'Explore',why:'An airship-and-art stop right where the ferry network becomes useful. Keep this one in mind for a rainy spell.',try:'Browse the current exhibitions before deciding how long to stay.',near:'Friedrichshafen promenade and Romanshorn ferry.',note:'Paid museum; confirm opening days and exhibitions.',sources:[['Official museum','https://www.zeppelin-museum.de/']]},
 {id:'maier',name:'Hotel Maier & Die Speiserei',area:'hops',town:'Friedrichshafen-Fischbach',kind:'Stay',why:'A food-focused base away from the main-town bustle, with its own restaurant and the lakeshore nearby.',try:'Dinner at Die Speiserei; inspect the current menu and opening days.',near:'Fischbach shore; central Friedrichshafen is a separate ride or transit journey, not a nearby pub cluster.',price:'€€–€€€ · comfortable / design rooms',storage:'Covered bicycle parking verified; whether it is locked is unknown.',charging:'Sockets at pedelec parking verified by hotel FAQ.',rental:'No on-site rental confirmed. Arrange a regional pickup before arrival.',note:'The hotel states the natural beach is 300 m away. Bring the rental charger and confirm access.',sources:[['Bike parking & charging FAQ','https://www.hotel-maier.de/das-maier/faq/'],['Location','https://www.hotel-maier.de/das-maier/lage'],['Restaurant information','https://www.hotel-maier.de/en/the-maier/faq']]},
 {id:'seehotel',name:'SEEhotel Friedrichshafen',area:'hops',town:'Friedrichshafen · station / promenade',kind:'Stay',why:'A practical town base for promenade evenings and ferry outings.',try:'An unhurried waterfront evening; check the hotel’s own food and bar offering.',near:'Town-centre restaurants and harbour; named pub shortlist still to be expanded.',price:'€€–€€€ · comfortable town hotel',storage:'Bicycle spaces in the underground garage verified; individual locking/security arrangements unknown.',charging:'Unknown — car charging does not establish e-bike charging.',rental:'Town rental options need confirmation; no hotel e-bike rental claimed.',note:'A transport-friendly candidate rather than a brewery inn.',sources:[['Hotel & bicycle parking','https://seehotelfn.de/']]},
 {id:'wiss',name:'Wissingers im Schlechterbräu',area:'lindau',town:'Lindau island · In der Grub 28',kind:'Beer',why:'An old-brewery setting with a tucked-away beer garden: a very good reason to stay on the island for the evening.',try:'Browse the current German kitchen menu; the published menu includes ox cheeks and hearty classics.',near:'Engel, Zur Fischerin and the island lanes.',note:'Operator currently lists Monday and Tuesday as rest days and a break between lunch and dinner. Verify before walking over.',sources:[['Restaurant & visiting hours','https://wissingers.de/wissingers-im-schlechterbraeu/zeitung1-wissingers-schlechterbraeu-lindau/'],['Current menu page','https://wissingers.de/geniessen/speisekarte/speisekarte-internet/']]},
 {id:'engelpub',name:'Engel Gast- und Bierstube',area:'lindau',town:'Lindau island · Schafgasse 4',kind:'Food',why:'Old rooms, inn character and Bavarian beer: the sort of place that makes parking the bikes for the night worthwhile.',try:'Regional inn cooking and Vesper; ask about the locally sourced lake fish.',near:'Wissingers, island harbour and Hotel Engel upstairs.',note:'Official pages disagree about Sunday opening. Check directly rather than relying on a saved timetable.',sources:[['Inn & kitchen','https://engel-lindau.de/gast-und-bierstube/'],['Hotel A–Z / hours','https://engel-lindau.de/hotel-a-z/']]},
 {id:'fischerin',name:'Zur Fischerin',area:'lindau',town:'Lindau island · Ludwigstraße 50',kind:'Food',why:'A characterful wine tavern with jazz in its history and a creative kitchen. A change of pace from the brewery tables.',try:'Share several dishes from the changing menu; this is a food-and-wine option.',near:'Island harbour and the Engel / Wissingers cluster.',note:'The operator lists Wednesday–Saturday evenings. Check the current menu.',sources:[['Tavern & current food','https://www.fischerin.com/']]},
 {id:'lindauharbour',name:'Lindau harbour & island lanes',area:'lindau',town:'Lindau island',kind:'Explore',why:'A compact island pause with a memorable harbour entrance, then lanes small enough to explore on foot.',try:'A harbour walk before dinner rather than another cycling target.',near:'Engel, Wissingers, Zur Fischerin and Helvetia.',note:'Busy pedestrian areas are easier with the bike parked. Use local signs for access.',sources:[['Official Lindau visitor information','https://www.lindau.de/']]},
 {id:'engel',name:'Hotel Engel',area:'lindau',town:'Lindau island · Schafgasse',kind:'Stay',why:'The pub-with-rooms choice: historic inn atmosphere and several dinner options close together.',try:'Engel downstairs, Wissingers or Zur Fischerin on foot.',near:'The island evening cluster and harbour.',price:'€€ · character inn',storage:'Unknown — confirm secure storage for two e-bikes.',charging:'Unknown — ordinary guest charger lending is not confirmation of e-bike charging.',rental:'Hotel lists Fahrrad Unger about two minutes away on foot; e-bike stock must be confirmed.',note:'Strong evening location, but bike facilities must be checked before committing.',sources:[['Hotel facilities & nearby rental','https://engel-lindau.de/hotel-a-z/']]},
 {id:'helvetia',name:'Yachthotel Helvetia',area:'lindau',town:'Lindau island · harbour',kind:'Stay',why:'The harbour-and-spa splurge, with the island’s dinner lanes within walking reach.',try:'Harbour time, then Engel, Wissingers or Zur Fischerin.',near:'Lindau harbour and island station.',price:'€€€€ · splurge / spa',storage:'Bicycle boxes in the YachtGarage verified by hotel FAQ, including for e-bikes.',charging:'E-bike charging listed by official Lindau tourism; confirm access and sockets.',rental:'Official tourism lists bicycle rental; specifically reserving e-bikes needs confirmation.',note:'Confirm space for both bikes and any charge before choosing rooms.',sources:[['Hotel bike boxes','https://www.hotel-helvetia.com/de/hotel-helvetia/wissenswertes/'],['Tourism listing: charging & rental','https://www.lindau.de/accommodations/yachthotel-helvetia/']]},
 {id:'premier',name:'Premier Inn Lindau',area:'lindau',town:'Lindau · mainland',kind:'Stay',why:'A simpler chain-hotel alternative when the room matters less than the exploring.',try:'Use the hotel bar for an easy last drink; reach the island separately for its pub cluster.',near:'Mainland Lindau; this is not an island-lane base.',price:'€ · value-oriented shortlist',storage:'Separate bicycle room listed by the operator; fee applies.',charging:'Unknown — confirm suitable charging.',rental:'No hotel e-bike rental verified; arrange a Lindau pickup.',note:'Value positioning is indicative, not a promise of the cheapest rate. Mainland location trades away immediate island pub access.',sources:[['Hotel & bicycle-room information','https://www.premierinn.com/de/de/hotels/deutschland/bayern/lindau/lindau.html']]},
 {id:'wirtshaus',name:'Wirtshaus am See',area:'austria',town:'Bregenz · lakeside',kind:'Food',why:'A traditional lakeside inn for the point when the cycling is done and a long meal sounds exactly right.',try:'Choose the current Austrian kitchen specials and ask what beer is on tap.',near:'Promenade, festival area and central Bregenz.',note:'Check current kitchen hours and terrace availability.',sources:[['Official inn','https://www.wirtshausamsee.at/']]},
 {id:'pfander',name:'Pfänder panorama',area:'austria',town:'Bregenz · mountain above town',kind:'Explore',why:'See the lake you have been exploring from above. A clear day makes this a very different kind of detour.',try:'The viewing terrace by the upper cable-car station.',near:'Bregenz town and Hotel Bodensee.',note:'Plan a cable-car-and-walking visit. This is not presented as an easy e-bike ascent; weather and operating status matter.',sources:[['Official panorama guide','https://www.pfaenderbahn.at/erlebnis/aussicht-panorama/'],['Cable car','https://www.pfaenderbahn.at/']]},
 {id:'seebad',name:'Seebad Bregenz',area:'austria',town:'Bregenz · lakeside',kind:'Swim',why:'A swim break with proper facilities, close to the town and waterfront.',try:'The seasonal strandbad; check indoor options if the weather turns.',near:'Wirtshaus am See and the promenade.',note:'Outdoor swimming is seasonal. Check the operator for opening status and admission.',sources:[['Official strandbad','https://www.seebad-bregenz.at/strandbad?type=98'],['City update on completed facilities','https://www.bregenz.gv.at/rathaus/news/seebad-bregenz-vollstaendig-fertiggestellt-1']]},
 {id:'bodensee',name:'Hotel Bodensee',area:'austria',town:'Bregenz · Kornmarktstraße 22',kind:'Stay',why:'A compact central base with the strongest directly documented bike setup on this shortlist.',try:'Walk to central restaurants or Wirtshaus am See; add a Pfänder trip on a clear day.',near:'Harbour, town centre and Pfänderbahn.',price:'€€ · comfortable central base',storage:'Lockable bicycle / e-bike storage verified in hotel FAQ.',charging:'Charging inside the bicycle room explicitly verified.',rental:'Radverleih Bregenz is a local e-bike operator; confirm pickup location and arrange separately.',note:'Confirm space and the charging arrangement for your two rental bikes.',sources:[['Hotel bike storage, charging & location','https://www.hotel-bodensee.at/faq-hotel-bodensee/'],['Local rental operator','https://www.radverleih-bregenz.at/']]},
 {id:'bregenzrental',name:'Radverleih Bregenz',area:'austria',town:'Bregenz',kind:'Move',why:'A local operator explicitly offering e-bikes for lakeside riding.',try:'Ask for two touring-style pedelecs with chargers and locks.',near:'Bregenz base; optional ride towards Lindau.',note:'Confirm cross-border permission, battery range, pickup address and return deadline directly. No live stock checked.',sources:[['Rental operator','https://www.radverleih-bregenz.at/']]},
 {id:'korn',name:'Kornhausbräu',area:'swiss',town:'Rorschach · Industriestrasse 21',kind:'Beer',why:'A real small-brewery bar rather than just a beer brand. A good Swiss-side anchor for an evening.',try:'Helles, Märzen or the dark “Das Schwarze”; an alcohol-free beer is also listed.',near:'Rorschach town and Löwengarten, with a separate walk between them.',note:'Bar hours vary between summer and September–May; Sundays closed in the published schedule. The brewery is not the harbour Kornhaus building.',sources:[['Beers, bar address & seasonal hours','https://www.kornhausbraeu.ch/']]},
 {id:'lowen',name:'Restaurant Löwengarten',area:'swiss',town:'Rorschach',kind:'Beer',why:'A former brewery bottling hall with a shaded beer garden and regional food.',try:'Ask for a regional beer and browse the changing kitchen menu.',near:'Rorschach; pair with Kornhausbräu as a walking evening after parking the bikes.',note:'Published beer-tasting packages are for 10–20 people, so do not assume a private tasting for two.',sources:[['Restaurant, beer garden & tasting conditions','https://www.restaurant-loewengarten.ch/']]},
 {id:'gustav',name:'Gustav Kahn',area:'swiss',town:'Romanshorn · harbour',kind:'Food',why:'A colourful harbour hangout with a relaxed terrace feel. Handy before or after the ferry.',try:'The current café/food offer; check whether a brunch date fits your visit.',near:'Romanshorn ferry and autobau.',note:'Food-and-drinks stop, not a verified brewery taproom. Check current opening hours.',sources:[['Official venue','https://www.gustavkahn.ch/']]},
 {id:'autobau',name:'autobau erlebniswelt',area:'swiss',town:'Romanshorn',kind:'Explore',why:'A collection of sports and racing cars gives the Swiss shore a different sort of stop.',try:'Check the current visitor programme and exhibition access.',near:'Romanshorn harbour and Gustav Kahn.',note:'Paid attraction with specific public visiting times; check before making the detour.',sources:[['Official collection & visits','https://www.autobau.ch/de/']]},
 {id:'seegarten',name:'Hotel Restaurant Seegarten',area:'swiss',town:'Arbon',kind:'Stay',why:'A bike-oriented Swiss base with a restaurant and the lake cycle route close at hand.',try:'Dinner in-house, with an Arbon wander when you want a quieter evening.',near:'Arbon; Rorschach breweries are a separate outing, not a short pub walk.',price:'€€–€€€ · comfortable Swiss base',storage:'Secure bicycle cellar and small repair workshop verified.',charging:'Not established from the checked source — confirm directly.',rental:'Hotel mentions partner rental bikes; e-bike model, collection and availability need confirmation.',note:'Good cycling credentials; the town pub shortlist still needs more research.',sources:[['Hotel bike services & restaurant','https://hotelseegarten.ch/']]},
 {id:'rentaswiss',name:'Rent a Bike · Swiss rental finder',area:'swiss',town:'Switzerland · station finder',kind:'Move',why:'A useful way to investigate Swiss-side bicycle and e-bike pickup options.',try:'Search the operator’s stations for your chosen base and verify the model before reserving.',near:'Choose a station to match your hotel, not the other way round.',note:'This is an operator directory, not a confirmed Romanshorn or Rorschach rental desk. No local stock or one-way return is assumed.',sources:[['Official rental network','https://www.rentabike.ch/home']]},
 {id:'staadferry',name:'Konstanz–Meersburg ferry',area:'west',town:'Staad ↔ Meersburg',kind:'Move',why:'A useful bridge between the western town base and the north shore, with bicycle carriage.',try:'Use it to open another shore without committing to the long way around.',near:'Staad is outside central Konstanz; allow time to ride to the correct terminal.',note:'Check current timetable and bicycle fare with Stadtwerke. This is not the central-harbour passenger ship.',sources:[['Operator bicycle information','https://www.stadtwerke-konstanz.de/faehre/aktuelles/mit-dem-fahrrad-auf-der-faehre/'],['Ferry information','https://www.stadtwerke-konstanz.de/faehre/infos/']]},
 {id:'romanferry',name:'Friedrichshafen–Romanshorn ferry',area:'hops',town:'Germany ↔ Switzerland',kind:'Move',why:'The most useful cross-lake link for a German / Swiss mix, with bicycles and e-bikes listed in the fare table.',try:'A harbour-to-harbour switch of country, then explore locally.',near:'Zeppelin Museum on one side; Gustav Kahn and autobau on the other.',note:'Consult the live timetable and return sailing. Confirm your rental agreement covers Switzerland.',sources:[['Official ferry timetable & bicycle fares','https://www.bsb.de/de/fahrplan/bodensee-faehre']]},
 {id:'kat',name:'Konstanz–Friedrichshafen catamaran',area:'west',town:'Central harbours',kind:'Move',why:'A passenger link between two useful town bases, but bicycle space is the limiting factor.',try:'Consider a foot-passenger outing if you want a relaxed beer evening across the lake.',near:'Konstanz and Friedrichshafen centres.',note:'Operator FAQ says a maximum of 10 bicycles per crossing. Carriage is not guaranteed; check current arrangements and allow another option.',sources:[['Operator bicycle FAQ','https://www.der-katamaran.de/die-reederei/faq.html']]}
 ],
 evenings:[
 {name:'Lindau island',area:'lindau',title:'Old inns, small lanes, no bike needed',text:'Engel, Wissingers and Zur Fischerin form the most developed dinner cluster here. Choose one meal and leave room for a wander. Engel or Helvetia keeps you on the island; Premier Inn is a mainland alternative.',ids:['engelpub','wiss','fischerin','engel','helvetia']},
 {name:'Konstanz old town',area:'west',title:'Brewery rooms to harbour air',text:'Joh. Albrecht in the Niederburg and Hafenhalle by the water offer two different moods within the centre. Hotel Halm is handy for arrival and the harbour; the brewery is a longer old-town stroll.',ids:['johann','hafenhalle','halm']},
 {name:'Bregenz centre',area:'austria',title:'Park, stroll, find a lakeside table',text:'Hotel Bodensee has verified lockable bike storage and charging. Wirtshaus am See is a lakeside dinner option. A second independently checked pub is still a gap in this area.',ids:['bodensee','wirtshaus']},
 {name:'Rorschach',area:'swiss',title:'A brewery bar and a brewery garden',text:'Kornhausbräu and Löwengarten make a Swiss beer pairing. They are separate town addresses, not neighbouring harbour bars; use the map links to check your walking route. A matching Rorschach hotel remains to be researched.',ids:['korn','lowen']}
 ],
 rides:[
 {name:'Lindau ↔ Bregenz',area:'lindau',length:'Roughly 10–15 km each way',text:'A manageable shore connection through the border area and Lochau. Promenades can be busy: slow down and allow plenty of stops. Save the beer for after the bikes are parked.',from:'Lindau Insel Germany',to:'Bregenz Hafen Austria',source:'https://www.bodensee-radweg.de/route/etappen/'},
 {name:'Meersburg ↔ Unteruhldingen',area:'north',length:'Roughly 5–8 km each way',text:'A short north-shore link between the castle town and Pfahlbauten. Walking time at either end can easily become the best part of the outing.',from:'Meersburg Hafen Germany',to:'Pfahlbauten Unteruhldingen Germany',source:'https://www.bodensee-radweg.de/route/etappen/'},
 {name:'Konstanz ↔ Mainau entrance',area:'west',length:'Roughly 8–12 km each way',text:'A flexible out-and-back towards the island gardens. Park and explore the island on foot; add swimming only if the season and conditions suit.',from:'Konstanz Bahnhof Germany',to:'Mainau Eingang Germany',source:'https://www.mainau.de/de/anfahrt'},
 {name:'Arbon ↔ Rorschach',area:'swiss',length:'Roughly 10–15 km each way',text:'A Swiss-shore link between a possible hotel base and the brewery town. For an evening tasting, arrange a return without riding afterwards.',from:'Arbon Switzerland',to:'Rorschach Switzerland',source:'https://www.bodensee-radweg.de/route/etappen/'}
 ]
};
// Property listings matched on Booking.com; no dates, rates or availability assumed.
const bookingListings = {
 halm:'https://www.booking.com/hotel/de/hotel-halm-konstanz.en-gb.html',
 badhotel:'https://www.booking.com/hotel/de/badhotel-ueberlingen.en-gb.html',
 krone:'https://www.booking.com/hotel/de/brauerei-gasthof-krone.de.html',
 maier:'https://www.booking.com/hotel/de/restaurant-maier.nl.html',
 seehotel:'https://www.booking.com/hotel/de/seehotel-friedrichshafen.html',
 engel:'https://www.booking.com/hotel/de/engel-lindauer-bier-und-weinstube.html',
 helvetia:'https://www.booking.com/hotel/de/wellness-wohlfuhl-domizil-helvetia.en-gb.html',
 premier:'https://www.booking.com/hotel/de/premier-inn-lindau1.html',
 bodensee:'https://www.booking.com/hotel/at/garni-bodensee.en-gb.html',
 seegarten:'https://www.booking.com/hotel/ch/restaurant-seegarten.en-gb.html'
};
window.GUIDE.places.forEach(place => { if (bookingListings[place.id]) place.booking = bookingListings[place.id]; });

// Additional pub-guide research, 25 September 2026.
window.GUIDE.places.push(...[
  {
    "id": "logans-city",
    "area": "west",
    "name": "Logan's City",
    "town": "Konstanz - Zogelmannstrasse 2",
    "pubType": "Pub",
    "kind": "Beer",
    "why": "An Irish-pub option in the centre of Konstanz, with Irish and German draught beers.",
    "try": "Guinness, Kilkenny or a German draught beer; check the current food and events menus.",
    "near": "See the Konstanz and western lake area guide for nearby stays, sights and cycling ideas.",
    "note": "Source checked 25 September 2026. Check current hours, food service and events directly; this is not a live opening-status check.",
    "sources": [
      [
        "Venue / official tourism source",
        "https://logans-pub.de/speisekarte"
      ]
    ]
  },
  {
    "id": "logans-rhein",
    "area": "west",
    "name": "Logan's am Seerhein",
    "town": "Konstanz - Reichenaustrasse 2",
    "pubType": "Pub",
    "kind": "Beer",
    "why": "The Seerhein branch gives you an alternative to the old-town pub circuit.",
    "try": "A pint and a sporting event; confirm the programme for your evening.",
    "near": "See the Konstanz and western lake area guide for nearby stays, sights and cycling ideas.",
    "note": "Source checked 25 September 2026. Check current hours, food service and events directly; this is not a live opening-status check.",
    "sources": [
      [
        "Venue / official tourism source",
        "https://www.konstanz-info.com/gastronomie/logans-am-seerhein-3d9a8dfc04"
      ]
    ]
  },
  {
    "id": "craic",
    "area": "west",
    "name": "The Craic",
    "town": "Konstanz",
    "pubType": "Pub",
    "kind": "Beer",
    "why": "An Irish pub for a straightforward pub evening in Konstanz.",
    "try": "Explore the current beer selection, including alcohol-free choices.",
    "near": "See the Konstanz and western lake area guide for nearby stays, sights and cycling ideas.",
    "note": "Source checked 25 September 2026. Check current hours, food service and events directly; this is not a live opening-status check.",
    "sources": [
      [
        "Venue / official tourism source",
        "https://www.craic-konstanz.de/"
      ]
    ]
  },
  {
    "id": "irish-exit",
    "area": "west",
    "name": "The Irish Exit",
    "town": "Radolfzell - Hoellstrasse 13",
    "pubType": "Pub",
    "kind": "Beer",
    "why": "A western-lake detour with a central bar and a small food menu.",
    "try": "Fish and chips or an oven-baked bread alongside a beer; check kitchen hours.",
    "near": "See the Konstanz and western lake area guide for nearby stays, sights and cycling ideas.",
    "note": "Source checked 25 September 2026. Check current hours, food service and events directly; this is not a live opening-status check.",
    "sources": [
      [
        "Venue / official tourism source",
        "https://the-irish-exit.de/"
      ]
    ]
  },
  {
    "id": "kolben",
    "area": "west",
    "name": "Kolbenfresser",
    "town": "Konstanz - Fuerstenbergstrasse 127",
    "pubType": "Pub",
    "kind": "Beer",
    "why": "A neighbourhood pub and beer garden away from the harbour circuit, listed by Konstanz tourism.",
    "try": "A casual beer and Vesper-style food; the tourism listing mentions rock music, darts and table football.",
    "near": "See the Konstanz and western lake area guide for nearby stays, sights and cycling ideas.",
    "note": "Official tourism guide from 2024; reconfirm current operation before a special trip.",
    "sources": [
      [
        "Venue / official tourism source",
        "https://www.konstanz-info.com/_Resources/Persistent/f442f32e24d37b2698380efec914024c83b19ed3/Genussvoll%20leben_2024.pdf"
      ]
    ]
  },
  {
    "id": "klimper",
    "area": "west",
    "name": "Klimperkasten",
    "town": "Konstanz - Bodanstrasse 40",
    "pubType": "Bar",
    "kind": "Beer",
    "why": "A spacious bar with music and events, listed by the local tourist office.",
    "try": "Check the event programme before choosing between a quiet drink and a lively night.",
    "near": "See the Konstanz and western lake area guide for nearby stays, sights and cycling ideas.",
    "note": "Source checked 25 September 2026. Check current hours, food service and events directly; this is not a live opening-status check.",
    "sources": [
      [
        "Venue / official tourism source",
        "https://www.konstanz-info.com/gastronomie/bar-klimperkasten-f4431752ce"
      ]
    ]
  },
  {
    "id": "galgen",
    "area": "north",
    "name": "Galgenhoelzle",
    "town": "Ueberlingen",
    "pubType": "Pub",
    "kind": "Beer",
    "why": "A pub, beer bar and live-music venue with a broad beer selection.",
    "try": "A beer and a look at the music calendar. The venue describes smoking and non-smoking areas.",
    "near": "See the Meersburg and Ueberlingen area guide for nearby stays, sights and cycling ideas.",
    "note": "Source checked 25 September 2026. Check current hours, food service and events directly; this is not a live opening-status check.",
    "sources": [
      [
        "Venue / official tourism source",
        "https://www.galgenhoelzle.de/"
      ]
    ]
  },
  {
    "id": "fauler",
    "area": "north",
    "name": "Wirtshaus zum Faulen Pelz",
    "town": "Ueberlingen - promenade",
    "pubType": "Beer garden",
    "kind": "Beer",
    "why": "A Bavarian-style inn and beer garden by the lake promenade.",
    "try": "Choose a meal and beer from the current menu; outdoor seating depends on conditions.",
    "near": "See the Meersburg and Ueberlingen area guide for nearby stays, sights and cycling ideas.",
    "note": "Source checked 25 September 2026. Check current hours, food service and events directly; this is not a live opening-status check.",
    "sources": [
      [
        "Venue / official tourism source",
        "https://zum-faulen-pelz.de/"
      ]
    ]
  },
  {
    "id": "saloon",
    "area": "hops",
    "name": "Western Saloon Cafe & Bar",
    "town": "Friedrichshafen",
    "pubType": "Pub",
    "kind": "Beer",
    "why": "A casual saloon-style bar with draught beer and bottled dark beer.",
    "try": "A freshly poured beer, or ask about the dark bottled beer selection.",
    "near": "See the Friedrichshafen and hop country area guide for nearby stays, sights and cycling ideas.",
    "note": "Source checked 25 September 2026. Check current hours, food service and events directly; this is not a live opening-status check.",
    "sources": [
      [
        "Venue / official tourism source",
        "https://saloon-friedrichshafen.de/"
      ]
    ]
  },
  {
    "id": "lammgarten",
    "area": "hops",
    "name": "Lammgarten",
    "town": "Friedrichshafen - waterfront promenade",
    "pubType": "Beer garden",
    "kind": "Beer",
    "why": "A substantial waterfront beer garden for an outdoor stop in Friedrichshafen.",
    "try": "A lakeside table and a beer; check seasonal operation before travelling.",
    "near": "See the Friedrichshafen and hop country area guide for nearby stays, sights and cycling ideas.",
    "note": "Source checked 25 September 2026. Check current hours, food service and events directly; this is not a live opening-status check.",
    "sources": [
      [
        "Venue / official tourism source",
        "https://www.lammgarten.de/"
      ]
    ]
  },
  {
    "id": "tiffany",
    "area": "hops",
    "name": "Tiffany's Lounge",
    "town": "Friedrichshafen - Friedrichstrasse 73",
    "pubType": "Bar",
    "kind": "Beer",
    "why": "A restaurant lounge with beers, cocktails and whisky, rather than a traditional pub.",
    "try": "An evening drink with food from the lounge menu if wanted.",
    "near": "See the Friedrichshafen and hop country area guide for nearby stays, sights and cycling ideas.",
    "note": "Source checked 25 September 2026. Check current hours, food service and events directly; this is not a live opening-status check.",
    "sources": [
      [
        "Venue / official tourism source",
        "https://www.tiffany-friedrichshafen.de/en/bar-friedrichshafen/"
      ]
    ]
  },
  {
    "id": "mikes",
    "area": "lindau",
    "name": "Mike's Irish Pub",
    "town": "Lindau island - In der Grub 34",
    "pubType": "Pub",
    "kind": "Beer",
    "why": "An Irish-pub listing in the same island lane as Wissingers.",
    "try": "Check directly before visiting: this entry is supported by a travel-directory listing, not a current operator website.",
    "near": "See the Lindau area guide for nearby stays, sights and cycling ideas.",
    "note": "Directory listing only; current operation and hours need direct confirmation.",
    "sources": [
      [
        "Travel-directory listing",
        "https://www.marcopolo.de/reisefuehrer/obersee-177093/highlights/ausgehen-345181"
      ]
    ]
  },
  {
    "id": "bierbar",
    "area": "austria",
    "name": "Bierbar",
    "town": "Bregenz - Kirchstrasse 6-8",
    "pubType": "Pub",
    "kind": "Beer",
    "why": "A beer-bar option listed by Bregenz tourism, useful for an evening in town.",
    "try": "Check the current beer list and opening hours directly.",
    "near": "See the Bregenz area guide for nearby stays, sights and cycling ideas.",
    "note": "Source checked 25 September 2026. Check current hours, food service and events directly; this is not a live opening-status check.",
    "sources": [
      [
        "Venue / official tourism source",
        "https://visitbregenz.com/en/experience-bregenz/eat-drink/nightlife-bars/bars/1"
      ]
    ]
  },
  {
    "id": "ambiente",
    "area": "austria",
    "name": "Ambiente Bar Pub Billard",
    "town": "Bregenz - Mariahilfstrasse 6",
    "pubType": "Pub",
    "kind": "Beer",
    "why": "A pub and billiards option listed by the local tourist office.",
    "try": "A drink and a game; confirm table availability and current hours.",
    "near": "See the Bregenz area guide for nearby stays, sights and cycling ideas.",
    "note": "Source checked 25 September 2026. Check current hours, food service and events directly; this is not a live opening-status check.",
    "sources": [
      [
        "Venue / official tourism source",
        "https://visitbregenz.com/en/erleben/essen-trinken/nachtleben-bars/details/ambiente-billard-bar"
      ]
    ]
  },
  {
    "id": "frohsinn",
    "area": "swiss",
    "name": "Brauerei Frohsinn",
    "town": "Arbon - Romanshornerstrasse 15",
    "pubType": "Brewery restaurant",
    "kind": "Beer",
    "why": "A brewery, restaurant and hotel in Arbon: a natural addition to a beer-focused Swiss-shore visit.",
    "try": "Ask about house beers and the current restaurant menu.",
    "near": "See the Swiss shore area guide for nearby stays, sights and cycling ideas.",
    "note": "Source checked 25 September 2026. Check current hours, food service and events directly; this is not a live opening-status check.",
    "sources": [
      [
        "Venue / official tourism source",
        "https://frohsinn-arbon.ch/"
      ]
    ]
  },
  {
    "id": "stars",
    "area": "swiss",
    "name": "Stars and Stripes",
    "town": "Rorschach",
    "pubType": "Bar",
    "kind": "Beer",
    "why": "An American bar and restaurant for a different style of Swiss-shore evening.",
    "try": "Look at the current drinks and food menus before deciding.",
    "near": "See the Swiss shore area guide for nearby stays, sights and cycling ideas.",
    "note": "Source checked 25 September 2026. Check current hours, food service and events directly; this is not a live opening-status check.",
    "sources": [
      [
        "Venue / official tourism source",
        "https://www.starsandstripes.ch/de/p/standorte/rorschach-1089.html"
      ]
    ]
  }
]);
const pubTypes={"johann":"Brewery restaurant","hafenhalle":"Beer garden","max":"Brewery restaurant","hopfengut":"Brewery restaurant","wiss":"Beer garden","engelpub":"Pub","korn":"Brewery bar","lowen":"Beer garden","wirtshaus":"Inn","gustav":"Bar"};window.GUIDE.places.forEach(p=>{if(pubTypes[p.id])p.pubType=pubTypes[p.id];});
