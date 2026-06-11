/* CONFIG.JS — Trilingual Educational Baijiu & Chinese Wine Website */

// Toutes les images sont centralisées dans images.js — modifier là-bas uniquement.
export { IMAGES, POOL_B, POOL_W } from './images.js';

export const VIDEOS = {
  general_aroma : "https://www.youtube.com/watch?v=2LPcQLaeb5k&t=45s",
};

export const CONTACT = { email: "contact@baijiuacademy.com", phone: "+33 7 83 84 99 31" };

export const T = {
en: {
  nav: { home:"Home", who:"About", baijiu:"Baijiu", wine:"Chinese Wine", expositions:"Exhibition", academie:"Academy", events:"Events", contact:"Contact", cta:"Explore", programme:"Programme", producteurs:"Producers" },
  home: {
    overline: "",
    headline: "The House of Baijiu & Chinese Wines",
    subhead: "Global Spirits & Wine Experience Center is a unique cultural venue bringing together some of the world’s most prestigious spirits. We are honored to showcase Chinese alcoholic beverages through the House of Baijiu and Chinese Wine, an international, non-profit educational association. Our establishment also serves as a showroom dedicated to baijiu, this millennia-old spirit with more than 1,000 years of history, as well as to wines that reflect the richness and diversity of China’s terroirs.",
    cta: "Explore Baijiu", ctaWine: "Chinese Wines",
    stats: [
      { num:"5,000+", label:"Years of history" },
      { num:"12", label:"Official aroma types" },
      { num:"14", label:"Major producing regions" },
      { num:"#1", label:"Spirit by global volume" },
    ],
    introOverline: "What is Baijiu?",
    introTitle: "China's national spirit — and the world's best-kept secret.",
    introBody: "Baijiu (白酒) is a distilled spirit produced primarily from sorghum using solid-state fermentation that dates back over a millennium. Despite being consumed in greater volume than any other spirit on Earth, it remains largely unknown outside China. This site aims to change that.",
    pillarsOverline: "Areas of Study",
    pillars: [
      { icon:"🏺", title:"Aroma Types", desc:"12 officially recognized aromatic families, each tied to a region, a grain, and a fermentation method.", to:"/baijiu" },
      { icon:"🗺️", title:"Regions", desc:"From Guizhou to Shandong — 14 major producing provinces with distinct terroirs.", to:"/baijiu" },
      { icon:"📖", title:"History", desc:"5,000 years of fermentation culture — from imperial courts to modern global markets.", to:"/who-we-are" },
    ],
    timelineOverline: "Historical Timeline",
    timelineTitle: "5,000 years of Baijiu.",
    timeline: [
      { year:"3000 BCE", event:"First evidence of grain fermentation in China — clay vessels with sorghum and rice residue found in Shaanxi." },
      { year:"200 BCE", event:"Han Dynasty establishes official state alcohol monopoly. Early distillation techniques develop." },
      { year:"960 CE", event:"Song Dynasty sees widespread production of qu (曲), the fermentation starter that defines Baijiu's complexity." },
      { year:"1368", event:"Ming Dynasty — distillation technology matures. Sorghum becomes dominant. Regional styles diverge." },
      { year:"1704", event:"Kweichow Moutai distillery precursor founded in Maotai village, Guizhou. Sauce aroma tradition born." },
      { year:"1915", event:"Moutai wins gold at the Panama-Pacific International Exposition — first international recognition." },
      { year:"1952", event:"First National Baijiu Competition classifies four aroma types: Sauce, Strong, Light, Rice." },
      { year:"1989", event:"Classification expands to 12 official aroma types, reflecting regional diversity." },
      { year:"2012", event:"Baijiu becomes the world's best-selling spirit by volume, overtaking vodka." },
    ],
  },
  who: {
    overline:"About",
    title:"An independent educational resource on Chinese spirits and wines.",
    lead:"This site was created to fill a gap: despite Baijiu being the world's most consumed spirit, quality educational content in Western languages remains scarce. We document aroma types, regions, producers, and history with factual accuracy.",
    missionTitle:"Our Educational Mission",
    mission:"We believe that understanding Baijiu requires understanding China — its geography, agriculture, cultural rituals, and culinary traditions. This site approaches the subject the way a serious reference work would: factual, structured, and without commercial bias.",
    whatTitle:"What is Baijiu?",
    whatBody:"Baijiu is a distilled spirit made primarily from sorghum, fermented using qu (曲) — a culture of molds, bacteria, and yeast compacted into bricks or balls. The fermentation happens in solid or semi-solid state, unlike the liquid fermentation used in Western spirits. This produces an extraordinarily complex aromatic profile with hundreds of flavor compounds not found in whisky, vodka, or gin.",
    vsTitle:"Baijiu vs. Other Spirits",
    vs:[
      { label:"vs. Whisky", body:"Both are grain-based and aged, but Baijiu uses solid-state fermentation with qu cultures, producing far more aromatic complexity. ABV typically 40–65%." },
      { label:"vs. Vodka", body:"Vodka prioritizes neutrality through repeated distillation. Baijiu does the opposite — it amplifies the fermentation character, producing hundreds of identifiable aromatic compounds." },
      { label:"vs. Cognac", body:"Both are refined prestige spirits with protected regional designations. But Baijiu's fermentation science is entirely distinct — no grapes, no pot stills, no wood aging in most styles." },
    ],
    riseTitle:"The Rise of Chinese Wines",
    riseBody:"China is now the 6th largest wine-producing country by volume. Regions like Ningxia, Yunnan, and Shandong produce internationally awarded wines. The 2011 Decanter Asia Wine Awards launched Helan Qingxue's Jia Bei Lan to global attention — a turning point for Chinese wine credibility.",
    timelineTitle:"Baijiu Through History",
  },
  baijiu: {
    overline:"Baijiu · 白酒",
    title:"The 12 Aroma Types of Baijiu",
    lead:"Chinese national standards recognize 12 official aroma types (香型, xiānɡ xíng). Each is tied to a region, a fermentation method, a grain composition, and a set of chemical markers. Filter by region to explore which aroma types are produced where.",
    regionFilter:"Filter by Region",
    allRegions:"All Regions",
    aromasTitle:"Aroma Types",
    regions:["Guizhou","Sichuan","Jiangsu","Anhui","Henan","Shanxi","Beijing","Hebei","Guangxi","Guangdong","Shaanxi","Hubei","Shandong","Hunan","Jiangxi"],
    producersTitle:"Key Producers",
  },
  wine: {
    overline:"Chinese Wine · 中国葡萄酒",
    title:"China's Wine Regions",
    lead:"China has been producing wine for over 2,000 years, but the modern industry took shape in the 1980s. Today, twelve key wine regions produce internationally recognized wines across a range of styles and climates.",
  },
  expositions: {
    overline:"Exhibition",
    title:"Paris Wine & Baijiu 2024",
    lead:"The landmark exhibition bringing Chinese spirits and wines to European connoisseurs.",
    heroBody:"Held in Paris in October 2024, the Paris Wine & Baijiu exhibition gathered over 40 producers from China's leading Baijiu and wine regions for a four-day event attended by sommeliers, importers, journalists, and collectors from across Europe. The exhibition featured educational masterclasses, blind tasting sessions, and a dedicated conference program on the history and science of Baijiu fermentation.",
    section1Title:"Format & Program",
    section1Body:"The event was structured around three core formats: a public tasting salon open to all visitors, professional buyer sessions by appointment, and an evening conference series with Chinese and European experts presenting on aroma type classification, the Chinese wine terroir landscape, and the cultural significance of Baijiu in contemporary China.",
    section2Title:"Educational Focus",
    section2Body:"A central feature of the 2024 edition was the Aroma Type Discovery Lab — a guided sensory experience allowing visitors to smell and taste across all 12 official Baijiu aroma types side by side. Conducted by trained educators, the sessions ran continuously throughout the event and were consistently oversubscribed.",
    section3Title:"2025 Edition",
    section3Body:"The 2025 edition is in planning, with an expanded program including a dedicated Chinese wine masterclass track and the first European Baijiu cocktail competition.",
  },
  events: {
    overline:"Events",
    title:"Events & Brand Highlights",
    lead:"Festivals, tastings, and brand showcases dedicated to Chinese spirits and wines.",
    changyu: {
      overline:"Brand Spotlight",
      title:"Changyu: 130 Years of Chinese Wine Excellence",
      body:"Founded in 1892 by Zhang Bishi in Yantai, Shandong, Changyu Pioneer Wine is the oldest and largest wine company in China. With over 130 years of continuous production, Changyu has pioneered every major chapter of Chinese wine history — from importing French varietal cuttings in the 1890s, to earning international recognition at early 20th century world fairs, to today producing award-winning wines across 7 regions.",
      bodyExtra:"Changyu was the first Chinese winery to introduce Western wine-making techniques at scale. Today, the company's portfolio spans Cabernet Sauvignon, Chardonnay, Ice Wine, Brandy, and sparkling wine — produced across estates in Shandong, Xinjiang, Ningxia, Liaoning, Shaanxi, and beyond. Changyu's century-old underground wine cellar in Yantai is a classified cultural heritage site and receives over 200,000 visitors annually.",
      stats:[
        { num:"1892", label:"Year founded" },
        { num:"7", label:"Wine regions" },
        { num:"130+", label:"Years of production" },
      ],
    },
    otherEvents: [
      { title:"Chengdu Baijiu Festival", date:"March 2024", desc:"Annual celebration in the capital of Strong Aroma Baijiu, featuring the top 20 Sichuan distilleries." },
      { title:"Ningxia Wine Harvest", date:"September 2024", desc:"Harvest season open days at Ningxia's leading estates including Helan Qingxue, Silver Heights, and Tiansai." },
      { title:"Beijing Baijiu Week", date:"November 2024", desc:"Week-long educational program at the National Museum of China covering Baijiu history, production, and culture." },
    ],
  },
  academie: {
    overline:"Academy",
    title:"Our Training Programmes",
    lead:"Situated at 76 Boulevard Haussmann, Paris — an international training centre dedicated to wines, spirits, sake, baijiu and sensory analysis.",
    guides: [
      {
        title:"<strong>Baijiu</strong> Academy",
        desc:"Europe's first structured training platform dedicated to Chinese baijiu — its history, the 12 aroma families, production techniques and professional tasting methodology.",
        tag:"FORMATION",
        themes:["History & culture of Baijiu","The 12 major aroma families","Production techniques","Tasting methodology","Major Chinese brands","Food & Baijiu pairing"],
        prix:[
          { label:"Baijiu Discovery", duration:"2h", price:"49 €" },
          { label:"Baijiu Introduction", duration:"½ day", price:"120 €" },
          { label:"Baijiu Certification Level 1", duration:"1 day", price:"290 €" },
          { label:"Baijiu Certification Level 2", duration:"2 days", price:"590 €" },
          { label:"Expert Baijiu Certification", duration:"3 days", price:"1 200 €" },
          { label:"Masterclass — Major Chinese Brands", duration:"2h", price:"80 – 150 €" },
        ]
      },
      {
        title:"<strong>WSET</strong> Academy",
        desc:"The world's most recognised international certifications in wines and spirits, taught by certified educators with official WSET study materials.",
        tag:"CERTIFICATION",
        themes:["Official WSET study materials","Pedagogical tastings","Official exam","International certification"],
        prix:[
          { label:"WSET Level 1 Award", duration:"1 day", price:"299 €" },
          { label:"WSET Level 2 Award", duration:"3 days", price:"890 €" },
          { label:"WSET Level 3 Award", duration:"5 days", price:"1 790 €" },
        ]
      },
      {
        title:"<strong>Cheese</strong> Academy",
        desc:"An immersion in the world of French and international cheeses — history, terroirs, aroma families, and expert pairing with wines, sake and spirits.",
        tag:"ATELIER",
        themes:["History & terroirs","Cheese families","Sensory analysis","Pairing with wines, sake & spirits"],
        prix:[
          { label:"Cheese Discovery", duration:"2h", price:"49 €" },
          { label:"Cheese & Wine Pairing", duration:"3h", price:"89 €" },
          { label:"Cheeses of France Certification", duration:"1 day", price:"290 €" },
          { label:"Professional Cheese Training", duration:"2 days", price:"590 €" },
        ]
      },
      {
        title:"<strong>Wine Region</strong> Academy",
        desc:"An in-depth approach to the world's great wine regions — Bordeaux, Burgundy, Champagne, Rhône Valley, Alsace, Tuscany, Piedmont, Rioja, Napa Valley, Australia.",
        tag:"CERTIFICATION",
        themes:["Bordeaux","Burgundy","Champagne","Rhône Valley","Alsace","Tuscany · Piedmont · Rioja","Napa Valley · Australia"],
        prix:[
          { label:"Bordeaux Certification", duration:"1 day", price:"390 €" },
          { label:"Burgundy Certification", duration:"1 day", price:"450 €" },
          { label:"Champagne Certification", duration:"1 day", price:"490 €" },
          { label:"Grands Crus Masterclass", duration:"½ day", price:"150 – 250 €" },
          { label:"Advanced Wine Regions Certification", duration:"2 days", price:"790 €" },
        ]
      },
      {
        title:"<strong>Sensory</strong> Academy",
        desc:"Develop your olfactory memory and sensory analysis skills through structured exploration of aromatic families, aroma kits and professional tasting methodology.",
        tag:"DÉGUSTATION",
        themes:["Fruity aroma recognition","Floral families","Spices & aromatic herbs","Woody notes","Fault identification","Professional tasting"],
        prix:[
          { label:"Aromas Introduction", duration:"2h", price:"69 €" },
          { label:"Olfactory Memory Workshop", duration:"1 day", price:"290 €" },
          { label:"Professional Sensory Training", duration:"2 days", price:"590 €" },
          { label:"Annual Sensory Programme", duration:"12 workshops", price:"990 €" },
        ]
      },
      {
        title:"<strong>Sake</strong> Academy",
        desc:"Discover the world of sake through Japanese culture, tasting and gastronomy — from classification and brewing techniques to regional producers and food pairings.",
        tag:"FORMATION",
        themes:["History of sake","Sake classification","Brewing techniques","Producing regions","Food & sake pairing"],
        prix:[
          { label:"Sake Discovery", duration:"2h", price:"49 €" },
          { label:"Sake Introduction", duration:"½ day", price:"120 €" },
          { label:"Sake Certification Level 1", duration:"1 day", price:"290 €" },
          { label:"Sake Certification Level 2", duration:"2 days", price:"590 €" },
          { label:"Sake Sommelier Programme", duration:"3 days", price:"1 200 €" },
          { label:"Masterclass Dassai", duration:"2h", price:"80 – 150 €" },
          { label:"Masterclass Premium Japanese Sakes", duration:"2h", price:"80 – 150 €" },
        ]
      },
      {
        title:"<strong>Whisky</strong> Academy",
        desc:"Explore the great whisky styles of the world — Scotch, Japanese, Irish, Bourbon & Rye — including gastronomic pairings and collection & investment insights.",
        tag:"FORMATION",
        themes:["Scotch Whisky","Japanese Whisky","Irish Whiskey","Bourbon & Rye","Gastronomic pairings","Collection & investment"],
        prix:[
          { label:"Whisky Discovery", duration:"2h", price:"59 €" },
          { label:"Whisky Introduction", duration:"½ day", price:"150 €" },
          { label:"Scotch Whisky Certification", duration:"1 day", price:"390 €" },
          { label:"Japanese Whisky Certification", duration:"1 day", price:"450 €" },
          { label:"Advanced Whisky Training", duration:"2 days", price:"790 €" },
          { label:"Masterclass Rare Whiskies", duration:"2h", price:"120 – 250 €" },
        ]
      },
      {
        title:"<strong>Oenology</strong> Workshop",
        desc:"Accessible tastings and wine discovery workshops for all levels — grands crus, wine & cheese, wine & chocolate, themed tastings and private events.",
        tag:"ATELIER",
        themes:["Introduction to tasting","Grands crus","Wine & cheese","Wine & chocolate","Themed tastings","Private & corporate events"],
        prix:[
          { label:"Introduction to Tasting", duration:"2h", price:"39 €" },
          { label:"Wine & Cheese Pairing", duration:"2h", price:"59 €" },
          { label:"Wine & Chocolate Pairing", duration:"2h", price:"69 €" },
          { label:"Bordeaux vs Burgundy", duration:"2h", price:"79 €" },
          { label:"Grands Crus & Exceptional Wines", duration:"2h", price:"120 – 250 €" },
          { label:"Corporate & Private Events", duration:"—", price:"On request" },
        ]
      },
    ],
    club: {
      title:"Members Club",
      tiers:[
        { name:"Silver", price:"199 €/year", perks:["Priority booking","5% discount on all programmes"] },
        { name:"Gold", price:"499 €/year", perks:["10% discount on all programmes","4 workshops included per year"] },
        { name:"Prestige", price:"990 €/year", perks:["Priority booking","12 workshops included per year","VIP invitations","Exclusive partner benefits"] },
      ]
    }
  },
  contact: {
    overline:"Contact",
    title:"Get in Touch",
    lead:"Questions, corrections, or collaboration proposals — we read every message.",
    email:"Contact@baijiuacademy.com",
    phone:"+33 6 00 00 00 00",
  },
  footer: {
    tagline:"An independent educational resource on Baijiu & Chinese wines.",
    navTitle:"Navigation",
    contactTitle:"Contact",
    copy:"© 2024 — Educational Resource on Baijiu & Chinese Wines",
    legal:"Independent · Factual · Non-commercial",
  },
},

fr: {
  nav: { home:"Accueil", who:"À Propos", baijiu:"Baijiu", wine:"Vin Chinois", expositions:"Exposition", academie:"Académie", events:"Événements", contact:"Contact", cta:"Explorer", programme:"Programme", producteurs:"Producteurs" },
  home: {
    overline: "",
    headline: "La Maison du Baijiu & <br> du Vin Chinois",
    subhead: "Global Spirits & Wine Experience Center est un lieu culturel unique rassemblant les plus grands alcools de prestige du monde. Nous avons l’honneur de mettre à l’honneur les alcools chinois à travers la Maison du Baijiu et du Vin Chinois, un centre international d’éducation associatif et non lucratif. Notre établissement est également une showroom dédiée au baijiu, ce spiritueux millénaire (plus de 1000 ans d’histoire), ainsi qu’aux vins qui expriment toute la richesse des terroirs chinois.",
    cta: "Explorer le Baijiu", ctaWine: "Vins Chinois",
    stats: [
      { num:"5 000+", label:"Ans d'histoire" },
      { num:"12", label:"Types aromatiques officiels" },
      { num:"14", label:"Régions productrices majeures" },
      { num:"N°1", label:"Spiritueux en volume mondial" },
    ],
    introOverline: "Qu'est-ce que le Baijiu ?",
    introTitle: "Le spiritueux national chinois — et le secret le mieux gardé du monde.",
    introBody: "Le Baijiu (白酒) est un spiritueux distillé produit principalement à partir de sorgho grâce à un processus de fermentation à l'état solide qui remonte à plus d'un millénaire. Malgré un volume de consommation supérieur à tout autre spiritueux sur Terre, il reste largement méconnu hors de Chine. Ce site vise à changer cela.",
    pillarsOverline: "Domaines d'étude",
    pillars: [
      { icon:"🏺", title:"Types aromatiques", desc:"11 familles aromatiques officielles, chacune liée à une région, un grain et une méthode de fermentation.", to:"/baijiu" },
      { icon:"🗺️", title:"Régions", desc:"Du Guizhou au Shandong — 14 provinces productrices majeures aux terroirs distinctifs.", to:"/baijiu" },
      { icon:"📖", title:"Histoire", desc:"5 000 ans de culture de fermentation — des cours impériales aux marchés mondiaux.", to:"/who-we-are" },
    ],
    timelineOverline: "Frise chronologique",
    timelineTitle: "5 000 ans de Baijiu.",
    timeline: [
      { year:"3000 av. J.-C.", event:"Premières preuves de fermentation céréalière en Chine — récipients en argile avec résidus de sorgho trouvés dans le Shaanxi." },
      { year:"200 av. J.-C.", event:"La Dynastie Han établit un monopole d'État sur la production d'alcool. Les premières techniques de distillation se développent." },
      { year:"960 ap. J.-C.", event:"La Dynastie Song voit la production généralisée de qu (曲), le ferment qui définit la complexité du Baijiu." },
      { year:"1368", event:"Dynastie Ming — la distillation arrive à maturité. Le sorgho devient dominant. Les styles régionaux divergent." },
      { year:"1704", event:"La distillerie précurseur de Kweichow Moutai est fondée dans le village de Maotai, Guizhou." },
      { year:"1915", event:"Moutai remporte une médaille d'or à l'Exposition Panama-Pacific — première reconnaissance internationale." },
      { year:"1952", event:"Premier concours national de Baijiu : classification en quatre types aromatiques : Sauce, Fort, Léger, Riz." },
      { year:"1989", event:"La classification s'étend à 11 types aromatiques officiels." },
      { year:"2012", event:"Le Baijiu devient le spiritueux le plus vendu au monde en volume." },
    ],
  },
  who: {
    overline:"À Propos",
    title:"Une ressource éducative indépendante sur les spiritueux et vins chinois.",
    lead:"Ce site a été créé pour combler un vide : malgré le Baijiu comme spiritueux le plus consommé au monde, les contenus éducatifs de qualité en langues occidentales restent rares.",
    missionTitle:"Notre mission éducative",
    mission:"Nous croyons que comprendre le Baijiu nécessite de comprendre la Chine — sa géographie, son agriculture, ses rituels culturels et ses traditions culinaires. Ce site aborde le sujet comme un ouvrage de référence sérieux : factuel, structuré, sans biais commercial.",
    whatTitle:"Qu'est-ce que le Baijiu ?",
    whatBody:"Le Baijiu est un spiritueux distillé à base de sorgho, fermenté grâce au qu (曲) — une culture de moisissures, bactéries et levures compactée en briques. La fermentation s'effectue à l'état solide, contrairement aux spiritueux occidentaux. Cela produit un profil aromatique extraordinairement complexe, avec des centaines de composés absents du whisky, vodka ou gin.",
    vsTitle:"Baijiu vs. Autres Spiritueux",
    vs:[
      { label:"vs. Whisky", body:"Les deux sont à base de céréales et vieillis, mais le Baijiu utilise une fermentation à l'état solide avec cultures de qu, produisant une complexité aromatique bien supérieure. Titre alcoométrique : 40–65%." },
      { label:"vs. Vodka", body:"La vodka vise la neutralité par distillation répétée. Le Baijiu fait l'inverse — il amplifie le caractère de fermentation, produisant des centaines de composés aromatiques identifiables." },
      { label:"vs. Cognac", body:"Les deux sont des spiritueux de prestige à appellation protégée. Mais la science de fermentation du Baijiu est entièrement distincte — pas de raisins, pas d'alambics, pas de bois dans la plupart des styles." },
    ],
    riseTitle:"L'essor des vins chinois",
    riseBody:"La Chine est le 6e pays producteur de vin en volume. Les Decanter Asia Wine Awards 2011 ont propulsé le Jia Bei Lan de Helan Qingxue sur la scène mondiale — tournant décisif pour la crédibilité du vin chinois.",
    timelineTitle:"Le Baijiu à travers l'histoire",
  },
  baijiu: {
    overline:"Baijiu · 白酒",
    title:"Les 11 types aromatiques du Baijiu",
    lead:"Les normes nationales chinoises reconnaissent 11 types aromatiques officiels (香型). Chacun est lié à une région, une méthode de fermentation, une composition de grains et des marqueurs chimiques précis. Filtrez par région pour explorer quels types sont produits où.",
    regionFilter:"Filtrer par région",
    allRegions:"Toutes les régions",
    aromasTitle:"Types aromatiques",
    regions:["Guizhou","Sichuan","Jiangsu","Anhui","Henan","Shanxi","Pékin","Hebei","Guangxi","Guangdong","Shaanxi","Hubei","Shandong","Hunan","Jiangxi"],
    producersTitle:"Producteurs clés",
  },
  wine: {
    overline:"Vin Chinois · 中国葡萄酒",
    title:"Les régions viticoles de Chine",
    lead:"La Chine produit du vin depuis plus de 2 000 ans, mais l'industrie moderne a pris forme dans les années 1980. Douze régions viticoles clés produisent aujourd'hui des vins reconnus à l'international.",
  },
  expositions: {
    overline:"Exposition",
    title:"Paris Wine & Baijiu 2024",
    lead:"L'exposition phare réunissant spiritueux et vins chinois pour les connaisseurs européens.",
    heroBody:"Tenu à Paris en octobre 2024, cette exposition a rassemblé plus de 40 producteurs des principales régions de Baijiu et de vin de Chine pour un événement de quatre jours réunissant sommeliers, importateurs, journalistes et collectionneurs de toute l'Europe.",
    section1Title:"Format & Programme",
    section1Body:"L'événement s'articulait autour de trois formats principaux : un salon de dégustation public, des sessions acheteurs professionnels sur rendez-vous, et une série de conférences en soirée avec des experts chinois et européens.",
    section2Title:"Focus éducatif",
    section2Body:"Une expérience sensorielle guidée permettait aux visiteurs de sentir et goûter les 11 types aromatiques officiels du Baijiu côte à côte. Animées par des éducateurs formés, les sessions étaient continuellement complets.",
    section3Title:"Édition 2025",
    section3Body:"L'édition 2025 est en préparation, avec un programme élargi incluant une série de masterclasses sur les vins chinois et le premier concours européen de cocktails au Baijiu.",
  },
  events: {
    overline:"Événements",
    title:"Événements & Marques à l'honneur",
    lead:"Festivals, dégustations et présentations dédiés aux spiritueux et vins chinois.",
    changyu: {
      overline:"Marque à l'honneur",
      title:"Changyu : 130 ans d'excellence viticole chinoise",
      body:"Fondée en 1892 par Zhang Bishi à Yantai, Shandong, Changyu Pioneer Wine est la plus ancienne et la plus grande entreprise vinicole de Chine. Pionnière dans chaque grand chapitre de l'histoire du vin chinois.",
      bodyExtra:"Changyu fut la première cave chinoise à introduire les techniques viticoles occidentales à grande échelle. Aujourd'hui, son portefeuille couvre Cabernet Sauvignon, Chardonnay, Vin de glace, Brandy et mousseux — dans 7 régions. Sa cave centenaire de Yantai est classée patrimoine culturel.",
      stats:[
        { num:"1892", label:"Année de fondation" },
        { num:"7", label:"Régions viticoles" },
        { num:"130+", label:"Années de production" },
      ],
    },
    otherEvents: [
      { title:"Festival Baijiu de Chengdu", date:"Mars 2024", desc:"Célébration annuelle dans la capitale du Baijiu Fort, réunissant les 20 meilleures distilleries du Sichuan." },
      { title:"Vendanges de Ningxia", date:"Septembre 2024", desc:"Journées portes ouvertes lors des vendanges dans les domaines phares de Ningxia : Helan Qingxue, Silver Heights et Tiansai." },
      { title:"Semaine Baijiu de Pékin", date:"Novembre 2024", desc:"Programme éducatif au Musée National de Chine sur l'histoire, la production et la culture du Baijiu." },
    ],
  },
  academie: {
    overline:"Académie",
    title:"Nos Programmes de Formation",
    lead:"Située au 76 Boulevard Haussmann, Paris — un centre international de formation dédié aux vins, spiritueux, sakés, baijiu et à l'analyse sensorielle.",
    guides: [
      {
        title:"<strong>Baijiu</strong> Academy",
        desc:"Première plateforme européenne dédiée à l'enseignement structuré du Baijiu — son histoire, les 12 grandes familles aromatiques, les techniques de production et la méthodologie de dégustation.",
        tag:"FORMATION",
        themes:["Histoire et culture du Baijiu","Les 12 grandes familles aromatiques","Techniques de production","Méthodologie de dégustation","Grandes marques chinoises","Accords mets & Baijiu"],
        prix:[
          { label:"Découverte du Baijiu", duration:"2h", price:"49 €" },
          { label:"Initiation au Baijiu", duration:"½ journée", price:"120 €" },
          { label:"Certification Baijiu Niveau 1", duration:"1 journée", price:"290 €" },
          { label:"Certification Baijiu Niveau 2", duration:"2 journées", price:"590 €" },
          { label:"Certification Expert Baijiu", duration:"3 journées", price:"1 200 €" },
          { label:"Masterclass Grandes Marques Chinoises", duration:"2h", price:"80 – 150 €" },
        ]
      },
      {
        title:"<strong>WSET</strong> Academy",
        desc:"Les certifications internationales les plus reconnues dans le secteur des vins et spiritueux, animées par des formateurs certifiés avec les supports officiels WSET.",
        tag:"CERTIFICATION",
        themes:["Supports officiels WSET","Dégustations pédagogiques","Examen officiel","Certification internationale"],
        prix:[
          { label:"WSET Level 1 Award", duration:"1 journée", price:"299 €" },
          { label:"WSET Level 2 Award", duration:"3 journées", price:"890 €" },
          { label:"WSET Level 3 Award", duration:"5 journées", price:"1 790 €" },
        ]
      },
      {
        title:"<strong>Cheese</strong> Academy",
        desc:"Une immersion dans l'univers des fromages français et internationaux — histoire et terroirs, familles de fromages, analyse sensorielle et accords avec vins, sakés et spiritueux.",
        tag:"ATELIER",
        themes:["Histoire et terroirs","Familles de fromages","Analyse sensorielle","Accords vins, sakés et spiritueux"],
        prix:[
          { label:"Découverte des Fromages", duration:"2h", price:"49 €" },
          { label:"Accords Fromages & Vins", duration:"3h", price:"89 €" },
          { label:"Certification Fromages de France", duration:"1 journée", price:"290 €" },
          { label:"Formation Professionnelle Fromages", duration:"2 journées", price:"590 €" },
        ]
      },
      {
        title:"<strong>Wine Region</strong> Academy",
        desc:"Une approche approfondie des grandes régions viticoles du monde — Bordeaux, Bourgogne, Champagne, Vallée du Rhône, Alsace, Toscane, Piémont, Rioja, Napa Valley, Australie.",
        tag:"CERTIFICATION",
        themes:["Bordeaux","Bourgogne","Champagne","Vallée du Rhône","Alsace","Toscane · Piémont · Rioja","Napa Valley · Australie"],
        prix:[
          { label:"Certification Bordeaux", duration:"1 journée", price:"390 €" },
          { label:"Certification Bourgogne", duration:"1 journée", price:"450 €" },
          { label:"Certification Champagne", duration:"1 journée", price:"490 €" },
          { label:"Masterclass Grands Crus", duration:"½ journée", price:"150 – 250 €" },
          { label:"Certification Avancée Régions Viticoles", duration:"2 journées", price:"790 €" },
        ]
      },
      {
        title:"<strong>Sensory</strong> Academy",
        desc:"Développez votre mémoire olfactive et vos capacités d'analyse sensorielle à travers des familles aromatiques, des kits d'arômes et une méthodologie de dégustation professionnelle.",
        tag:"DÉGUSTATION",
        themes:["Reconnaissance des arômes fruités","Familles florales","Épices et herbes aromatiques","Notes boisées","Identification des défauts","Dégustation professionnelle"],
        prix:[
          { label:"Initiation aux Arômes", duration:"2h", price:"69 €" },
          { label:"Atelier Mémoire Olfactive", duration:"1 journée", price:"290 €" },
          { label:"Formation Professionnelle Sensorielle", duration:"2 journées", price:"590 €" },
          { label:"Programme Annuel Sensoriel", duration:"12 ateliers", price:"990 €" },
        ]
      },
      {
        title:"<strong>Saké</strong> Academy",
        desc:"Découverte de l'univers du saké à travers la culture japonaise, la dégustation et la gastronomie — classification, techniques de brassage, régions productrices et accords mets.",
        tag:"FORMATION",
        themes:["Histoire du saké","Classification des sakés","Techniques de brassage","Régions productrices","Accords mets & saké"],
        prix:[
          { label:"Découverte du Saké", duration:"2h", price:"49 €" },
          { label:"Initiation au Saké", duration:"½ journée", price:"120 €" },
          { label:"Certification Saké Niveau 1", duration:"1 journée", price:"290 €" },
          { label:"Certification Saké Niveau 2", duration:"2 journées", price:"590 €" },
          { label:"Programme Saké Sommelier", duration:"3 journées", price:"1 200 €" },
          { label:"Masterclass Dassai", duration:"2h", price:"80 – 150 €" },
          { label:"Masterclass Sakés Premium du Japon", duration:"2h", price:"80 – 150 €" },
        ]
      },
      {
        title:"<strong>Whisky</strong> Academy",
        desc:"Explorer les grands styles de whiskies du monde — Scotch, Japanese, Irish, Bourbon & Rye — accords gastronomiques, collection et investissement.",
        tag:"FORMATION",
        themes:["Scotch Whisky","Japanese Whisky","Irish Whiskey","Bourbon & Rye","Accords gastronomiques","Collection et investissement"],
        prix:[
          { label:"Découverte du Whisky", duration:"2h", price:"59 €" },
          { label:"Initiation au Whisky", duration:"½ journée", price:"150 €" },
          { label:"Certification Scotch Whisky", duration:"1 journée", price:"390 €" },
          { label:"Certification Japanese Whisky", duration:"1 journée", price:"450 €" },
          { label:"Formation Avancée Whisky", duration:"2 journées", price:"790 €" },
          { label:"Masterclass Whiskies Rares", duration:"2h", price:"120 – 250 €" },
        ]
      },
      {
        title:"Atelier <strong>Oenologie</strong>",
        desc:"Des ateliers accessibles à tous pour découvrir l'univers du vin dans une ambiance conviviale — grands crus, vins & fromages, vins & chocolats, dégustations thématiques.",
        tag:"ATELIER",
        themes:["Initiation à la dégustation","Grands crus","Vins & fromages","Vins & chocolats","Dégustations thématiques","Événements privés et entreprises"],
        prix:[
          { label:"Initiation à la Dégustation", duration:"2h", price:"39 €" },
          { label:"Accords Vins & Fromages", duration:"2h", price:"59 €" },
          { label:"Accords Vins & Chocolats", duration:"2h", price:"69 €" },
          { label:"Bordeaux vs Bourgogne", duration:"2h", price:"79 €" },
          { label:"Grands Crus & Vins d'Exception", duration:"2h", price:"120 – 250 €" },
          { label:"Ateliers Entreprises & Privatisation", duration:"—", price:"Sur devis" },
        ]
      },
    ],
    club: {
      title:"Club Membres",
      tiers:[
        { name:"Silver", price:"199 €/an", perks:["Priorité de réservation","5 % de remise sur les formations"] },
        { name:"Gold", price:"499 €/an", perks:["10 % de remise sur les formations","4 ateliers offerts par an"] },
        { name:"Prestige", price:"990 €/an", perks:["Réservation prioritaire","12 ateliers offerts par an","Invitations VIP","Avantages partenaires exclusifs"] },
      ]
    }
  },
  contact: {
    overline:"Contact",
    title:"Nous contacter",
    lead:"Questions, corrections ou propositions de collaboration — nous lisons chaque message.",
    email:"Contact@baijiuacademy.com",
    phone:"+33 6 00 00 00 00",
  },
  footer: {
    tagline:"Une ressource éducative indépendante sur le Baijiu & les vins chinois.",
    navTitle:"Navigation",
    contactTitle:"Contact",
    copy:"© 2024 — Ressource éducative sur le Baijiu & les vins chinois",
    legal:"Indépendant · Factuel · Non-commercial",
  },
},

zh: {
  nav: { home:"首页", who:"关于", baijiu:"白酒", wine:"中国葡萄酒", expositions:"展览", academie:"学院", events:"活动", contact:"联系", cta:"探索", programme:"活动项目", producteurs:"生产商" },
  home: {
    overline: "",
    headline: "白酒与中国美酒之家",
    subhead: "全球烈酒与葡萄酒体验中心（Global Spirits & Wine Experience Center） 是一个独特的文化场所，汇聚了世界上最具声望的高端酒类。我们十分荣幸通过 中国白酒与葡萄酒之家（一个国际性、非营利性的教育机构）向公众展示中国酒文化。<br> 本中心同时也是一个专注于 白酒 的展示空间。白酒拥有逾千年的悠久历史，是中国传统蒸馏酒的杰出代表。此外，我们还展示能够充分体现中国风土特色与地域魅力的葡萄酒，呈现中国酒业的丰富多样性。",
    cta: "探索白酒", ctaWine: "中国葡萄酒",
    stats: [
      { num:"5000+", label:"年历史" },
      { num:"12", label:"官方香型" },
      { num:"14", label:"主要产区" },
      { num:"第一", label:"全球销量烈酒" },
    ],
    introOverline: "什么是白酒？",
    introTitle: "中国国家烈酒——世界上最鲜为人知的秘密。",
    introBody: "白酒是一种主要以高粱为原料酿造的蒸馏酒，采用固态发酵工艺，历史可追溯至一千多年前。尽管其消费量超过地球上任何其他烈酒，它在中国以外仍鲜为人知。本网站旨在改变这一现状。",
    pillarsOverline: "研究领域",
    pillars: [
      { icon:"🏺", title:"香型", desc:"11种官方认可的香型，每种都与一个地区、一种粮食和一种发酵方法相关联。", to:"/baijiu" },
      { icon:"🗺️", title:"产区", desc:"从贵州到山东——14个主要产酒省份，各具独特风土。", to:"/baijiu" },
      { icon:"🍷", title:"中国葡萄酒", desc:"宁夏、云南、山东——中国新兴葡萄酒产区正与国际标准比肩。", to:"/chinese-wine" },
      { icon:"📖", title:"历史", desc:"五千年发酵文化——从皇家宫廷到现代全球市场。", to:"/who-we-are" },
    ],
    timelineOverline: "历史年表",
    timelineTitle: "白酒五千年。",
    timeline: [
      { year:"公元前3000年", event:"中国最早的谷物发酵证据——在陕西发现带有高粱和大米残留物的陶罐。" },
      { year:"公元前200年", event:"汉朝建立官方酒类专卖制度。早期蒸馏技术开始发展。" },
      { year:"公元960年", event:"宋朝曲（酒曲）的生产得到广泛推广，这是定义白酒复杂性的发酵剂。" },
      { year:"1368年", event:"明朝——蒸馏技术趋于成熟。高粱成为主要粮食原料。各地风格开始分化。" },
      { year:"1704年", event:"茅台酒前身蒸馏厂在贵州茅台村建立。酱香型传统由此诞生。" },
      { year:"1915年", event:"茅台酒在巴拿马太平洋国际博览会上荣获金奖——首次获得国际认可。" },
      { year:"1952年", event:"第一届全国白酒品评会正式确立四大香型：酱香、浓香、清香、米香。" },
      { year:"1989年", event:"分类扩展至11种官方香型，体现地区多样性。" },
      { year:"2012年", event:"白酒成为全球销量最大的烈酒，超越伏特加。" },
    ],
  },
  who: {
    overline:"关于",
    title:"关于中国烈酒与葡萄酒的独立教育资源。",
    lead:"本网站的创建是为了填补一个空白：尽管白酒是全球消费量最大的烈酒，但西方语言中优质的教育内容仍然匮乏。",
    missionTitle:"我们的教育使命",
    mission:"我们相信，理解白酒需要理解中国——其地理、农业、文化礼仪和饮食传统。本网站以严肃参考著作的方式来处理这一主题：事实性、结构化、无商业偏见。",
    whatTitle:"什么是白酒？",
    whatBody:"白酒是一种主要以高粱为原料，通过曲（各种霉菌、细菌和酵母的混合物）发酵而成的蒸馏酒。发酵过程在固态或半固态状态下进行，与西方烈酒的液态发酵截然不同。这产生了极其复杂的芳香特征，含有数百种在威士忌、伏特加或金酒中找不到的风味化合物。",
    vsTitle:"白酒与其他烈酒的对比",
    vs:[
      { label:"vs. 威士忌", body:"两者都以谷物为基础并经过陈酿，但白酒使用固态发酵和曲文化，产生更丰富的芳香复杂性。酒精度通常在40-65%之间。" },
      { label:"vs. 伏特加", body:"伏特加通过反复蒸馏追求中性。白酒则相反——它颂扬并放大发酵特性，产生数百种可识别的芳香化合物。" },
      { label:"vs. 干邑", body:"两者都是有受保护地区标志的精致高档烈酒。但白酒的发酵科学完全不同——没有葡萄，没有壶式蒸馏器，大多数风格也没有橡木桶陈酿。" },
    ],
    riseTitle:"中国葡萄酒的兴起",
    riseBody:"中国现在是全球第六大葡萄酒产量国。2011年醇鉴亚洲葡萄酒大赛将贺兰晴雪的加贝兰推向了全球舞台——这是中国葡萄酒可信度的重要转折点。",
    timelineTitle:"白酒历史年表",
  },
  baijiu: {
    overline:"白酒",
    title:"白酒的11种香型",
    lead:"中国国家标准认定11种官方香型。每种香型都与一个产区、一种发酵方法、一种粮食组成和一组化学标志物相关联。按产区筛选，探索各地生产的香型。",
    regionFilter:"按产区筛选",
    allRegions:"全部产区",
    aromasTitle:"香型",
    regions:["贵州","四川","江苏","安徽","河南","山西","北京","河北","广西","广东","陕西","湖北","山东","湖南","江西"],
    producersTitle:"主要酿造商",
  },
  wine: {
    overline:"中国葡萄酒",
    title:"中国葡萄酒产区",
    lead:"中国生产葡萄酒已有2000多年的历史，但现代葡萄酒产业在1980年代才开始成型。如今，十二个主要葡萄酒产区出产获得国际认可的各种风格葡萄酒。",
  },
  expositions: {
    overline:"展览",
    title:"2024巴黎葡萄酒与白酒展",
    lead:"将中国烈酒与葡萄酒带给欧洲鉴赏家的重要展览。",
    heroBody:"2024年10月在巴黎举办，汇聚了来自中国白酒和葡萄酒主要产区的40多家生产商，吸引了来自欧洲各地的侍酒师、进口商、记者和收藏家参加为期四天的活动。",
    section1Title:"形式与议程",
    section1Body:"活动围绕三种核心形式展开：面向所有访客开放的公开品鉴沙龙、预约制专业买家会议，以及由中欧专家主讲的系列晚间讲座。",
    section2Title:"教育重点",
    section2Body:"本届展览的核心亮点是\"香型探索实验室\"——一项引导性感官体验，让访客能够并排闻、尝11种官方白酒香型。由受训教育者主持的会议全程持续进行，场场爆满。",
    section3Title:"2025年版",
    section3Body:"2025年版正在筹备中，计划推出扩大的中国葡萄酒大师课系列和首届欧洲白酒鸡尾酒大赛。",
  },
  events: {
    overline:"活动",
    title:"活动与品牌聚焦",
    lead:"致力于中国烈酒与葡萄酒的节日、品鉴会和品牌展示。",
    changyu: {
      overline:"品牌聚焦",
      title:"张裕：130年中国葡萄酒卓越历程",
      body:"张裕葡萄酒于1892年由张弼士在山东烟台创立，是中国历史最悠久、规模最大的葡萄酒企业。经过130多年的持续生产，张裕引领了中国葡萄酒历史的每一个重要篇章。",
      bodyExtra:"张裕是第一家大规模引进西方酿酒技术的中国酒庄。今天，公司的产品组合涵盖赤霞珠、霞多丽、冰酒、白兰地和起泡酒——在7个产区生产。其位于烟台的百年地下酒窖被列为文化遗产，每年吸引逾20万名游客。",
      stats:[
        { num:"1892", label:"创立年份" },
        { num:"7", label:"葡萄酒产区" },
        { num:"130+", label:"年生产历史" },
      ],
    },
    otherEvents: [
      { title:"成都白酒节", date:"2024年3月", desc:"在浓香型白酒之都举办的年度盛会，汇聚四川最顶尖的20家蒸馏厂。" },
      { title:"宁夏葡萄采收节", date:"2024年9月", desc:"宁夏主要酒庄开放日，包括贺兰晴雪、银色高地和天塞。" },
      { title:"北京白酒周", date:"2024年11月", desc:"中国国家博物馆举办的为期一周的教育活动，涵盖白酒历史、生产和文化。" },
    ],
  },
  academie: {
    overline:"学院",
    title:"我们的培训项目",
    lead:"位于巴黎奥斯曼大道76号——一个致力于葡萄酒、烈酒、清酒、白酒及感官分析的国际培训中心。",
    guides: [
      {
        title:"<strong>白酒</strong>学院",
        desc:"欧洲首个专注于中国白酒系统教学的平台——历史与文化、12大香型、生产工艺与专业品鉴方法论。",
        tag:"培训",
        themes:["白酒历史与文化","12大香型","生产工艺","品鉴方法论","中国主要品牌","白酒美食搭配"],
        prix:[
          { label:"白酒体验课", duration:"2小时", price:"49 €" },
          { label:"白酒入门课", duration:"半天", price:"120 €" },
          { label:"白酒一级认证", duration:"1天", price:"290 €" },
          { label:"白酒二级认证", duration:"2天", price:"590 €" },
          { label:"白酒专家认证", duration:"3天", price:"1 200 €" },
          { label:"中国名酒大师课", duration:"2小时", price:"80 – 150 €" },
        ]
      },
      {
        title:"<strong>WSET</strong>学院",
        desc:"全球最权威的葡萄酒与烈酒国际认证，由认证讲师授课，配备官方WSET教材，涵盖入门至文凭各级别。",
        tag:"认证",
        themes:["官方WSET教材","教学品鉴","官方考试","国际认证"],
        prix:[
          { label:"WSET 一级认证", duration:"1天", price:"299 €" },
          { label:"WSET 二级认证", duration:"3天", price:"890 €" },
          { label:"WSET 三级认证", duration:"5天", price:"1 790 €" },
        ]
      },
      {
        title:"<strong>奶酪</strong>学院",
        desc:"深入法国及国际奶酪世界——历史与风土、奶酪家族、感官分析，以及与葡萄酒、清酒和烈酒的专业搭配技巧。",
        tag:"工作坊",
        themes:["历史与风土","奶酪家族","感官分析","与葡萄酒、清酒和烈酒的搭配"],
        prix:[
          { label:"奶酪体验课", duration:"2小时", price:"49 €" },
          { label:"奶酪与葡萄酒搭配", duration:"3小时", price:"89 €" },
          { label:"法国奶酪认证", duration:"1天", price:"290 €" },
          { label:"奶酪专业培训", duration:"2天", price:"590 €" },
        ]
      },
      {
        title:"<strong>葡萄酒产区</strong>学院",
        desc:"深入探索世界各大葡萄酒产区——波尔多、勃艮第、香槟、罗纳河谷、阿尔萨斯、托斯卡纳、皮埃蒙特、里奥哈、纳帕谷、澳大利亚。",
        tag:"认证",
        themes:["波尔多","勃艮第","香槟","罗纳河谷","阿尔萨斯","托斯卡纳·皮埃蒙特·里奥哈","纳帕谷·澳大利亚"],
        prix:[
          { label:"波尔多认证", duration:"1天", price:"390 €" },
          { label:"勃艮第认证", duration:"1天", price:"450 €" },
          { label:"香槟认证", duration:"1天", price:"490 €" },
          { label:"顶级葡萄园大师课", duration:"半天", price:"150 – 250 €" },
          { label:"葡萄酒产区高级认证", duration:"2天", price:"790 €" },
        ]
      },
      {
        title:"<strong>感官</strong>学院",
        desc:"通过香气家族、专业嗅觉套件及品鉴方法论的系统学习，培养嗅觉记忆与感官分析能力。",
        tag:"品鉴",
        themes:["果香识别","花香家族","香料与芳草","木质气息","缺陷识别","专业品鉴"],
        prix:[
          { label:"香气入门课", duration:"2小时", price:"69 €" },
          { label:"嗅觉记忆工作坊", duration:"1天", price:"290 €" },
          { label:"专业感官培训", duration:"2天", price:"590 €" },
          { label:"年度感官培训计划", duration:"12场工作坊", price:"990 €" },
        ]
      },
      {
        title:"<strong>清酒</strong>学院",
        desc:"通过日本文化、品鉴与美食搭配探索清酒世界——清酒分类、酿造技术、产区及美食搭配。",
        tag:"培训",
        themes:["清酒历史","清酒分类","酿造技术","产酒地区","清酒美食搭配"],
        prix:[
          { label:"清酒体验课", duration:"2小时", price:"49 €" },
          { label:"清酒入门课", duration:"半天", price:"120 €" },
          { label:"清酒一级认证", duration:"1天", price:"290 €" },
          { label:"清酒二级认证", duration:"2天", price:"590 €" },
          { label:"清酒侍酒师课程", duration:"3天", price:"1 200 €" },
          { label:"獺祭大师课", duration:"2小时", price:"80 – 150 €" },
          { label:"日本顶级清酒大师课", duration:"2小时", price:"80 – 150 €" },
        ]
      },
      {
        title:"<strong>威士忌</strong>学院",
        desc:"探索世界各大威士忌风格——苏格兰、日本、爱尔兰、波本与黑麦威士忌，以及美食搭配、收藏与投资。",
        tag:"培训",
        themes:["苏格兰威士忌","日本威士忌","爱尔兰威士忌","波本与黑麦","美食搭配","收藏与投资"],
        prix:[
          { label:"威士忌体验课", duration:"2小时", price:"59 €" },
          { label:"威士忌入门课", duration:"半天", price:"150 €" },
          { label:"苏格兰威士忌认证", duration:"1天", price:"390 €" },
          { label:"日本威士忌认证", duration:"1天", price:"450 €" },
          { label:"威士忌高级培训", duration:"2天", price:"790 €" },
          { label:"珍稀威士忌大师课", duration:"2小时", price:"120 – 250 €" },
        ]
      },
      {
        title:"<strong>葡萄酒学</strong>工作坊",
        desc:"面向所有级别的葡萄酒体验工作坊——顶级葡萄园、葡萄酒与奶酪、葡萄酒与巧克力、主题品鉴及私人活动。",
        tag:"工作坊",
        themes:["品鉴入门","顶级葡萄园","葡萄酒与奶酪","葡萄酒与巧克力","主题品鉴","企业与私人活动"],
        prix:[
          { label:"品鉴入门课", duration:"2小时", price:"39 €" },
          { label:"葡萄酒与奶酪搭配", duration:"2小时", price:"59 €" },
          { label:"葡萄酒与巧克力搭配", duration:"2小时", price:"69 €" },
          { label:"波尔多 vs 勃艮第", duration:"2小时", price:"79 €" },
          { label:"顶级葡萄园与珍藏佳酿", duration:"2小时", price:"120 – 250 €" },
          { label:"企业与私人定制活动", duration:"—", price:"报价" },
        ]
      },
    ],
    club: {
      title:"会员俱乐部",
      tiers:[
        { name:"Silver 银卡", price:"199 €/年", perks:["优先预订","全部课程享95折"] },
        { name:"Gold 金卡", price:"499 €/年", perks:["全部课程享9折","每年赠送4场工作坊"] },
        { name:"Prestige 尊享卡", price:"990 €/年", perks:["优先预订","每年赠送12场工作坊","VIP活动邀请","专属合作伙伴礼遇"] },
      ]
    }
  },
  contact: {
    overline:"联系",
    title:"联系我们",
    lead:"问题、更正或合作建议——我们阅读每一封消息。",
    email:"Contact@baijiuacademy.com",
    phone:"+33 6 00 00 00 00",
  },
  footer: {
    tagline:"关于白酒与中国葡萄酒的独立教育资源。",
    navTitle:"导航",
    contactTitle:"联系",
    copy:"© 2024 — 白酒与中国葡萄酒教育资源",
    legal:"独立 · 客观 · 非商业",
  },
},

};
