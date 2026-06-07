/* ============================================================
   ARTICLES-DATA.JS — Blog articles for Exhibition & Events pages
   ============================================================
   Each article has:
   - slug: unique URL identifier
   - category: 'exhibition' | 'event' | 'culture' | 'education'
   - date: display date
   - image: URL or local path
   - title: { en, fr, zh }
   - excerpt: { en, fr, zh }
   - body: { en, fr, zh }  (HTML allowed)
   ============================================================ */

import { IMAGES } from "./config.js";

export const ARTICLES = [

  /* ── EVENTS ARTICLES ── */
  {
    slug: "changyu-longyu-l12-world-wine-king",
    category: "events",
    date: "Mars 2026",
    dateISO: "2026-03-02",
    image: IMAGES.changyu_pioner_wine,
    featured: true,
    title: {
      en: "Changyu Longyu L12: One of the World's Greatest Red Wines",
      fr: "Changyu Longyu L12 : sans doute l'un des meilleurs vins rouges du monde",
      zh: "长裕龙域L12：跻身世界最伟大红葡萄酒之列"
    },
    excerpt: {
      en: "At ProWein Düsseldorf, the Longyu L12 Cabernet Sauvignon scored level with Château Lafite Rothschild and surpassed Sassicaia — a landmark moment for Chinese wine on the world stage.",
      fr: "Au ProWein de Düsseldorf, le Longyu L12 a obtenu le même score que Château Lafite Rothschild et dépassé le légendaire Sassicaia — un moment historique pour le vin chinois.",
      zh: "在杜塞尔多夫ProWein展会上，龙域L12与拉菲古堡并驾齐驱，更超越了传奇的西施佳雅——中国葡萄酒在世界舞台上的历史性时刻。"
    },
    body: {
      en: `<p>At the latest edition of ProWein in Düsseldorf, <em>Drinks Business</em> magazine organised a prestigious blind tasting under the theme "World Wine King." Seven exceptional red wines were selected — including Château Lafite Rothschild, Opus One, and Penfolds Grange. The Changyu Longyu L12 Cabernet Sauvignon matched Lafite's score (same vintage) and surpassed the legendary Sassicaia from Tuscany.</p>
<p>The Longyu L12 is produced at Château Changyu Moser XV, located at the foot of the Helan Mountain range in Ningxia, at 1,100 metres altitude. The 2021 vintage is 100% Cabernet Sauvignon, aged 24 months in 100% new French oak barrels, assembled barrel by barrel under the supervision of chief winemaker Lenz M. Moser.</p>
<p>At WineParis 2026, Longyu CEO Sun Jian personally presented a 6-litre bottle to French President Emmanuel Macron — a gesture that symbolised the global ambitions of Chinese fine wine. Only a small portion of the 130,000 bottles produced reaches Europe; the wine is available in France, Switzerland (Mövenpick), Austria (WTG Parndorf) and Germany (Bosfood, Meerbusch) at approximately 260 euros per bottle.</p>
<p><strong>Source :</strong> <a href="https://dico-du-vin.com/chine-changyu-et-son-longyu-l12-sans-doute-lun-des-meilleurs-vins-rouges-du-monde/" target="_blank" rel="noopener">Dico du Vin</a></p>`,
      fr: `<p>À la dernière édition du ProWein de Düsseldorf, le magazine britannique <em>Drinks Business</em> a organisé un concours de vin sous le thème « World Wine King ». Sept vins rouges d'exception avaient été sélectionnés — dont Château Lafite Rothschild, Opus One et Penfolds Grange. Le Changyu Longyu L12 Cabernet Sauvignon a obtenu le même score que Lafite (même millésime) et a même dépassé le légendaire Sassicaia de Toscane.</p>
<p>Le Longyu L12 est produit au Château Changyu Moser XV, situé au pied des montagnes Helan en Ningxia, à 1 100 mètres d'altitude. Le millésime 2021 est composé à 100 % de Cabernet Sauvignon, élevé 24 mois en barriques de chêne français neuves à 100 %, assemblé barrique par barrique sous la supervision du chef vigneron Lenz M. Moser.</p>
<p>À WineParis 2026, le PDG de Longyu, Sun Jian, a personnellement remis une bouteille de 6 litres au Président Emmanuel Macron — un geste symbolisant les ambitions mondiales du vin fin chinois. Sur 130 000 bouteilles produites, seule une partie rejoint l'Europe ; le vin est disponible en France, en Suisse (Mövenpick), en Autriche (WTG Parndorf) et en Allemagne (Bosfood, Meerbusch) aux alentours de 260 euros la bouteille.</p>
<p><strong>Source :</strong> <a href="https://dico-du-vin.com/chine-changyu-et-son-longyu-l12-sans-doute-lun-des-meilleurs-vins-rouges-du-monde/" target="_blank" rel="noopener">Dico du Vin</a></p>`,
      zh: `<p>在杜塞尔多夫最新一届ProWein展会上，英国权威杂志<em>《Drinks Business》</em>以"世界葡萄酒之王"为主题举办了一场盲品竞赛。七款顶级红葡萄酒入选角逐——包括拉菲古堡、作品一号和奔富葛兰许。长裕龙域L12赤霞珠与拉菲（同一年份）并列同分，更超越了传奇的托斯卡纳西施佳雅。</p>
<p>龙域L12产自位于宁夏贺兰山脚下海拔1100米的长裕摩赛尔十五世酒庄。2021年份采用100%赤霞珠，在100%新法国橡木桶中陈酿24个月，由首席酿酒师Lenz M. Moser逐桶挑选调配。</p>
<p>在2026年巴黎葡萄酒展上，龙域首席执行官孙健亲手将一瓶6升装龙域L12赠予法国总统马克龙——这一举动象征着中国精品葡萄酒走向世界的雄心。在13万瓶产量中，仅有小部分出口欧洲；该酒在法国、瑞士（Mövenpick）、奥地利（WTG Parndorf）及德国（Meerbusch Bosfood）有售，售价约260欧元。</p>
<p><strong>来源：</strong> <a href="https://dico-du-vin.com/chine-changyu-et-son-longyu-l12-sans-doute-lun-des-meilleurs-vins-rouges-du-monde/" target="_blank" rel="noopener">Dico du Vin</a></p>`
    },
    video: "https://www.youtube.com/embed/XBWDUnb8whQ",
    tags: ["chinese-wine", "ningxia", "changyu", "cabernet-sauvignon"]
  },
  {
    slug: "wine-class-global-sake-paris",
    category: "events",
    date: "2026",
    dateISO: "2026-06-01",
    image: IMAGES.wine_class,
    featured: false,
    title: {
      en: "First Chinese Wine Class at Global Saké — Paris 8th",
      fr: "Première Wine Class dédiée aux vins chinois — Global Saké, Paris 8e",
      zh: "中国葡萄酒品鉴课首登巴黎 — Global Saké"
    },
    excerpt: {
      en: "An evening of discovery around Chinese wines at Global Saké, 76 Boulevard Haussmann, Paris — an opportunity to explore the diversity of China's wine regions through guided tasting.",
      fr: "Une soirée de découverte autour des vins de Chine chez Global Saké, 76 boulevard Haussmann à Paris — l'occasion d'explorer la diversité des régions viticoles chinoises en dégustation guidée.",
      zh: "在巴黎奥斯曼大道76号Global Saké举办的中国葡萄酒发现之夜——通过专业引导品鉴，探索中国葡萄酒产区的多样魅力。"
    },
    body: {
      en: `<p>For the first time, a Chinese wine class was held at <strong>Global Saké</strong>, 76 Boulevard Haussmann, Paris 8th — one of the French capital's leading addresses for Asian beverages.</p>
<p>The session invited participants to explore the diversity of China's wine regions: Ningxia and its high-altitude Helan Mountain vineyards, Shandong and the historic Changyu estates, Xinjiang and its extreme continental terroirs, and Yunnan with the Ao Yun project at 2,600 metres.</p>
<p>Through guided tasting, guests discovered how Chinese winemaking — drawing on decades of investment and expertise from Bordeaux and beyond — is producing wines that deserve serious attention on the international stage. A landmark evening marking the growing presence of Chinese wine culture in Paris.</p>`,
      fr: `<p>Pour la première fois, une wine class entièrement dédiée aux vins de Chine s'est tenue chez <strong>Global Saké</strong>, 76 boulevard Haussmann, Paris 8e — l'une des adresses de référence de la capitale pour les boissons asiatiques.</p>
<p>La session a invité les participants à explorer la diversité des régions viticoles chinoises : la Ningxia et ses vignobles d'altitude au pied des montagnes Helan, le Shandong et les domaines historiques de Changyu, le Xinjiang et ses terroirs continentaux extrêmes, ainsi que le Yunnan avec le projet Ao Yun à 2 600 mètres.</p>
<p>À travers une dégustation guidée, les participants ont découvert comment la viticulture chinoise — portée par des décennies d'investissements et d'échanges avec Bordeaux et au-delà — produit des vins qui méritent une attention sérieuse sur la scène internationale. Une soirée qui marque la place grandissante de la culture du vin chinois à Paris.</p>`,
      zh: `<p>中国葡萄酒品鉴课首次在巴黎8区奥斯曼大道76号的<strong>Global Saké</strong>举办——这里是法国首都亚洲饮品文化的标志性地址之一。</p>
<p>本次品鉴课带领参与者探索中国葡萄酒产区的多样性：宁夏贺兰山脚下的高海拔葡萄园、山东张裕历史名庄、新疆极端大陆性气候风土，以及云南海拔2600米的敖云项目。</p>
<p>通过专业引导品鉴，宾客们亲身感受到中国葡萄酒——历经数十年投资积累与波尔多等国际专家的深度合作——正在国际舞台上展现出值得高度关注的品质。这是一个见证中国葡萄酒文化在巴黎日益壮大的历史性夜晚。</p>`
    },
    video: "https://www.youtube.com/embed/r3RYYywn1G4",
    tags: ["chinese-wine", "paris", "events", "tasting"]
  },

  /* ── EXHIBITION ARTICLES ── */

  {
    slug: "aroma-lab-discovery",
    category: "exhibition",
    date: "October 2024",
    dateISO: "2024-10-16",
    image: IMAGES.article_aroma_lab,
    featured: false,
    title: {
      en: "The Aroma Type Discovery Lab: Teaching 11 Styles in One Session",
      fr: "Le Laboratoire de Découverte des Arômes : Enseigner 11 Styles en Une Session",
      zh: "香型探索实验室：一次品鉴11种香型"
    },
    excerpt: {
      en: "The most popular feature of the 2024 exhibition was a guided sensory journey through all 11 official Baijiu aroma types — from the crystalline purity of Light Aroma to the medicinal complexity of Herbal Aroma.",
      fr: "La caractéristique la plus populaire de l'exposition 2024 était un voyage sensoriel guidé à travers les 11 types d'arômes officiels du Baijiu.",
      zh: "2024年展览最受欢迎的环节是一场引导性感官体验之旅，带领参与者穿越全部11种官方白酒香型。"
    },
    body: {
      en: `<p>Running continuously from 10am to 8pm across all four exhibition days, the Aroma Type Discovery Lab became the single most discussed element of Paris Wine & Baijiu 2024. Led by trained educators, each 45-minute session guided groups of 20 through a structured tasting of all 11 officially recognised Baijiu aroma types.</p>
<p>The sequence was deliberate: Light Aroma first (to establish a baseline of clarity), followed by Strong Aroma (to introduce ethyl caproate's fruit character), then Sauce Aroma (for the full complexity of the most prestigious style), and progressively through Rice, Phoenix, Mixed, Sesame, Herbal, Laobaigan, Complex Fruity, and Special Aroma styles.</p>`,
      fr: `<p>Fonctionnant continuellement de 10h à 20h pendant les quatre jours d'exposition, le Laboratoire de Découverte des Arômes est devenu l'élément le plus discuté de Paris Wine & Baijiu 2024. Conduit par des éducateurs formés, chaque session de 45 minutes guidait des groupes de 20 personnes à travers une dégustation structurée de l'ensemble des 11 types d'arômes officiellement reconnus du Baijiu.</p>`,
      zh: `<p>在展览全部四天的上午10点至晚上8点持续开放，香型探索实验室成为2024年巴黎葡萄酒与白酒展览中讨论最为热烈的环节。由受过专业培训的教育者主导，每次45分钟的课程引导20人小组系统品鉴全部11种官方认定的白酒香型。</p>`
    }
  },

  /* ── EVENT ARTICLES ── */
  {
    slug: "concours-baijiu-paris-2026",
    category: "event",
    date: "6 juillet 2026",
    dateISO: "2026-07-06",
    image: IMAGES.concours_article,
    featured: true,
    title: {
      en: "1st International Elite Competition for Grandes Écoles on Baijiu — Paris 2026",
      fr: "1er Concours International d'Élite des Grandes Écoles sur le Baijiu — Paris 2026",
      zh: "首届国际精英高校白酒大赛 — 巴黎2026"
    },
    excerpt: {
      en: "A unique programme for students of France and Europe's top universities: training, blind tasting, cocktail creation — and for all teams, an immersive 9-day journey through China's Baijiu regions. 6 July 2026 · Maison du Baijiu, Paris 8.",
      fr: "Un parcours unique pour les étudiants des grandes écoles françaises et européennes : formation, dégustation à l'aveugle, création de cocktail — et pour toutes les équipes, un voyage immersif de 9 jours au cœur des régions du baijiu en Chine. 6 juillet 2026 · Maison du Baijiu, Paris 8.",
      zh: "面向法国及欧洲顶级高校学生的独特项目：培训、盲品、鸡尾酒创作——所有参赛队伍均受邀参加9天中国白酒产区沉浸之旅。2026年7月6日 · 白酒之家，巴黎8区。"
    },
    body: {
      en: `<h2>An unprecedented competition, open to Europe's finest institutions</h2>
<p>In 2026, Paris will host the inaugural International Elite Competition for Grandes Écoles dedicated to Baijiu — an event open to students from France's and Europe's leading universities. Participating schools include Sciences Po Paris, HEC Paris, ESSEC, ESCP, École Polytechnique, Université Paris-Saclay, EHL Lausanne, EPFL, Université Paris-Panthéon-Assas, and others.</p>

<h2>A three-stage journey</h2>
<h3>1. Preparatory Training & Masterclass</h3>
<p>Before the competition, participants will benefit from expert-led training from French and Chinese Baijiu and sommellerie specialists. The curriculum covers the full range of Baijiu aroma types and production methods, professional tasting techniques, and the codes of the Chinese table and business etiquette.</p>

<h3>2. The Competition in Paris</h3>
<p>Teams compete in a multi-discipline contest bringing together students from Europe's top institutions. The events include a written knowledge test (QCM), a professional blind tasting, and the creation of an original Baijiu-based cocktail.</p>

<h3>3. Immersive Journey to China — "The Baijiu Aroma Voyage"</h3>
<p>All participating teams are invited to take part in a 9-day immersive journey to China, visiting the most emblematic Baijiu-producing regions. The programme includes visits to leading distilleries (Moutai, Wuliangye, Langjiu, Fenjiu, Luzhou Laojiao, Jian Nan Chun and others), traditional fermentation processes, meetings with master producers, exploration of local gastronomy, and visits to Beijing's historical monuments — the Great Wall and the Forbidden City.</p>

<h2>Organisation & Jury</h2>
<p>The event is organised by the <strong>China Alcoholic Drinks Association (CADA)</strong>, China's national reference body for the regulation and standardisation of the spirits sector. The jury will be composed of the heads of leading Baijiu houses, a <strong>Best Sommelier of the World</strong>, and a <strong>Meilleur Ouvrier de France</strong>.</p>

<h2>Practical information</h2>
<p><strong>Date:</strong> Monday 6 July 2026, 15:30–17:00<br/>
<strong>Venue:</strong> Maison du Baijiu, 76 Boulevard Haussmann, 75008 Paris<br/>
<strong>Registration deadline:</strong> 5 June 2026<br/>
<strong>Contact:</strong> fan.lina@me.com · +33 6 68 23 40 20</p>

<p>To register (individually or as a team), complete the registration form and send it to <a href="mailto:fan.lina@me.com">fan.lina@me.com</a> with the subject line: <em>Inscription Concours Baijiu Paris</em>.</p>`,

      fr: `<h2>Un concours inédit, ouvert aux meilleures institutions européennes</h2>
<p>En 2026, Paris accueille le premier Concours International d'Élite des Grandes Écoles dédié au Baijiu — un événement ouvert aux étudiants des grandes écoles françaises et européennes. Parmi les écoles participantes : Sciences Po Paris, HEC Paris, ESSEC, ESCP, École Polytechnique, Université Paris-Saclay, EHL Lausanne, EPFL, Université Paris-Panthéon-Assas, et d'autres.</p>

<h2>Un parcours en trois étapes</h2>
<h3>1. Formation & Masterclass préparatoire</h3>
<p>Avant le concours, les participants bénéficieront d'une formation encadrée par des experts chinois et français du baijiu et de la sommellerie. Au programme : les arômes et méthodes de fabrication du baijiu, les techniques professionnelles de dégustation, ainsi que les codes de la table chinoise et l'étiquette des affaires.</p>

<h3>2. Le concours à Paris</h3>
<p>Les équipes s'affronteront lors d'une compétition réunissant les meilleures grandes écoles européennes. Les épreuves comprennent un QCM, une dégustation à l'aveugle et la création d'un cocktail à base de baijiu.</p>

<h3>3. Voyage immersif en Chine — « Le Voyage des Arômes du Baijiu »</h3>
<p>Toutes les équipes participantes sont invitées à un voyage immersif de 9 jours en Chine, au cœur des régions emblématiques du baijiu. Le séjour comprend des visites des grandes distilleries (Moutai, Wuliangye, Langjiu, Fenjiu, Luzhou Laojiao, Jian Nan Chun…), les processus de fermentation traditionnelle, des rencontres avec des maîtres producteurs, la découverte de la gastronomie locale et les monuments historiques de Pékin — la Grande Muraille et la Cité Interdite.</p>

<h2>Organisation & Jury</h2>
<p>L'événement est organisé par la <strong>China Alcoholic Drinks Association (CADA)</strong>, organisme national de référence pour la régulation du secteur des spiritueux en Chine. Le jury sera composé de dirigeants des grandes maisons de baijiu, d'un <strong>Meilleur Sommelier du Monde</strong> et d'un <strong>Meilleur Ouvrier de France</strong>.</p>

<h2>Informations pratiques</h2>
<p><strong>Date :</strong> Lundi 6 juillet 2026, 15h30–17h00<br/>
<strong>Lieu :</strong> Maison du Baijiu, 76 Boulevard Haussmann, 75008 Paris<br/>
<strong>Date limite d'inscription :</strong> 5 juin 2026<br/>
<strong>Contact :</strong> fan.lina@me.com · 06 68 23 40 20</p>

<p>Pour s'inscrire (individuellement ou en équipe), remplir le formulaire d'inscription et l'envoyer à <a href="mailto:fan.lina@me.com">fan.lina@me.com</a> avec l'objet : <em>Inscription Concours Baijiu Paris</em>.</p>`,

      zh: `<h2>史无前例的赛事，向欧洲顶尖院校开放</h2>
<p>2026年，巴黎将举办首届以白酒为主题的国际精英高校大赛——面向法国及欧洲顶级高校学生。参赛学校包括：巴黎政治学院、巴黎高等商学院（HEC）、ESSEC商学院、ESCP商学院、巴黎综合理工学院、巴黎萨克雷大学、洛桑酒店管理学院（EHL）、洛桑联邦理工学院（EPFL）、巴黎第二大学等。</p>

<h2>三阶段赛程</h2>
<h3>第一阶段：备赛培训与大师课</h3>
<p>赛前，参赛者将接受中法白酒与侍酒领域专家的指导培训。内容涵盖白酒香型与酿造工艺、专业品鉴技法，以及中国餐桌礼仪与商务礼节。</p>

<h3>第二阶段：巴黎竞赛</h3>
<p>各队将参加汇聚欧洲顶级高校的多项目比拼，包括知识问答（QCM）、专业盲品，以及以白酒为基酒的原创鸡尾酒创作。</p>

<h3>第三阶段：中国沉浸之旅——"白酒香气之旅"</h3>
<p>所有参赛队伍均受邀参加为期9天的中国白酒产区沉浸旅程，走访茅台、五粮液、郎酒、汾酒、泸州老窖、剑南春等顶级酒厂，亲历传统发酵工艺，与酿酒大师深度交流，品鉴当地美食，并参观北京历史名胜——长城与故宫。</p>

<h2>组织机构与评委</h2>
<p>本赛事由<strong>中国酒业协会（CADA）</strong>主办，该协会是中国烈酒行业规范管理的国家级权威机构。评委由白酒名企掌门人、<strong>世界最佳侍酒师</strong>及<strong>法国最佳工匠（MOF）</strong>共同组成。</p>

<h2>实用信息</h2>
<p><strong>日期：</strong>2026年7月6日（周一）15:30–17:00<br/>
<strong>地点：</strong>白酒之家，76 Boulevard Haussmann, 75008巴黎<br/>
<strong>报名截止日期：</strong>2026年6月5日<br/>
<strong>联系方式：</strong>fan.lina@me.com · +33 6 68 23 40 20</p>

<p>报名（个人或团队均可）请填写报名表，发送至 <a href="mailto:fan.lina@me.com">fan.lina@me.com</a>，邮件主题：<em>Inscription Concours Baijiu Paris</em>。</p>`
    }

  //CHANGYU ARTICLE
  },

  {
  slug: "changyu-longyu-l12-world-wine-king",
  category: "events",
  date: "Mars 2026",
  dateISO: "2026-03-02",
  image: IMAGES.changyu_pioneer_wine,
  featured: true,
  title: {
    en: "Changyu Longyu L12: One of the World's Greatest Red Wines",
    fr: "Changyu Longyu L12 : sans doute l'un des meilleurs vins rouges du monde",
    zh: "长裕龙域L12：跻身世界最伟大红葡萄酒之列"
  },
  excerpt: {
    en: "At ProWein Düsseldorf, the Longyu L12 Cabernet Sauvignon scored level with Château Lafite Rothschild and surpassed Sassicaia — a landmark moment for Chinese wine on the world stage.",
    fr: "Au ProWein de Düsseldorf, le Longyu L12 a obtenu le même score que Château Lafite Rothschild et dépassé le légendaire Sassicaia — un moment historique pour le vin chinois.",
    zh: "在杜塞尔多夫ProWein展会上，龙域L12与拉菲古堡并驾齐驱，更超越了传奇的西施佳雅——中国葡萄酒在世界舞台上的历史性时刻。"
  },
  body: {
    en: `<p>At the latest edition of ProWein in Düsseldorf, <em>Drinks Business</em> magazine organised a prestigious blind tasting under the theme "World Wine King." Seven exceptional red wines were selected — including Château Lafite Rothschild, Opus One, and Penfolds Grange. The Changyu Longyu L12 Cabernet Sauvignon matched Lafite's score (same vintage) and surpassed the legendary Sassicaia from Tuscany.</p>
<p>The Longyu L12 is produced at Château Changyu Moser XV, located at the foot of the Helan Mountain range in Ningxia, at 1,100 metres altitude. The 2021 vintage is 100% Cabernet Sauvignon, aged 24 months in 100% new French oak barrels, assembled barrel by barrel under the supervision of chief winemaker Lenz M. Moser.</p>
<p>At WineParis 2026, Longyu CEO Sun Jian personally presented a 6-litre bottle to French President Emmanuel Macron — a gesture that symbolised the global ambitions of Chinese fine wine. Only a small portion of the 130,000 bottles produced reaches Europe; the wine is available in France, Switzerland (Mövenpick), Austria (WTG Parndorf) and Germany (Bosfood, Meerbusch) at approximately 260 euros per bottle.</p>
<p><strong>Source :</strong> <a href="https://dico-du-vin.com/chine-changyu-et-son-longyu-l12-sans-doute-lun-des-meilleurs-vins-rouges-du-monde/" target="_blank" rel="noopener">Dico du Vin</a></p>`,
    fr: `<p>À la dernière édition du ProWein de Düsseldorf, le magazine britannique <em>Drinks Business</em> a organisé un concours de vin sous le thème « World Wine King ». Sept vins rouges d'exception avaient été sélectionnés — dont Château Lafite Rothschild, Opus One et Penfolds Grange. Le Changyu Longyu L12 Cabernet Sauvignon a obtenu le même score que Lafite (même millésime) et a même dépassé le légendaire Sassicaia de Toscane.</p>
<p>Le Longyu L12 est produit au Château Changyu Moser XV, situé au pied des montagnes Helan en Ningxia, à 1 100 mètres d'altitude. Le millésime 2021 est composé à 100 % de Cabernet Sauvignon, élevé 24 mois en barriques de chêne français neuves à 100 %, assemblé barrique par barrique sous la supervision du chef vigneron Lenz M. Moser.</p>
<p>À WineParis 2026, le PDG de Longyu, Sun Jian, a personnellement remis une bouteille de 6 litres au Président Emmanuel Macron — un geste symbolisant les ambitions mondiales du vin fin chinois. Sur 130 000 bouteilles produites, seule une partie rejoint l'Europe ; le vin est disponible en France, en Suisse (Mövenpick), en Autriche (WTG Parndorf) et en Allemagne (Bosfood, Meerbusch) aux alentours de 260 euros la bouteille.</p>
<p><strong>Source :</strong> <a href="https://dico-du-vin.com/chine-changyu-et-son-longyu-l12-sans-doute-lun-des-meilleurs-vins-rouges-du-monde/" target="_blank" rel="noopener">Dico du Vin</a></p>`,
    zh: `<p>在杜塞尔多夫最新一届ProWein展会上，英国权威杂志<em>《Drinks Business》</em>以"世界葡萄酒之王"为主题举办了一场盲品竞赛。七款顶级红葡萄酒入选角逐——包括拉菲古堡、作品一号和奔富葛兰许。长裕龙域L12赤霞珠与拉菲（同一年份）并列同分，更超越了传奇的托斯卡纳西施佳雅。</p>
<p>龙域L12产自位于宁夏贺兰山脚下海拔1100米的长裕摩赛尔十五世酒庄。2021年份采用100%赤霞珠，在100%新法国橡木桶中陈酿24个月，由首席酿酒师Lenz M. Moser逐桶挑选调配。</p>
<p>在2026年巴黎葡萄酒展上，龙域首席执行官孙健亲手将一瓶6升装龙域L12赠予法国总统马克龙——这一举动象征着中国精品葡萄酒走向世界的雄心。在13万瓶产量中，仅有小部分出口欧洲；该酒在法国、瑞士（Mövenpick）、奥地利（WTG Parndorf）及德国（Meerbusch Bosfood）有售，售价约260欧元。</p>
<p><strong>来源：</strong> <a href="https://dico-du-vin.com/chine-changyu-et-son-longyu-l12-sans-doute-lun-des-meilleurs-vins-rouges-du-monde/" target="_blank" rel="noopener">Dico du Vin</a></p>`
  },
  video: "https://www.youtube.com/embed/XBWDUnb8whQ",
  tags: ["chinese-wine", "ningxia", "changyu", "cabernet-sauvignon"]
},

{
  slug: "wine-class-global-sake-paris",
  category: "events",
  date: "2026",
  dateISO: "2026-05-01",
  image: IMAGES.article_wine_class,
  featured: false,
  title: {
    en: "First Chinese Wine Class at Global Saké — Paris 8th",
    fr: "Première Wine Class dédiée aux vins chinois — Global Saké, Paris 8e",
    zh: "中国葡萄酒品鉴课首登巴黎 — Global Saké"
  },
  excerpt: {
    en: "An evening of discovery around Chinese wines at Global Saké, 76 Boulevard Haussmann, Paris — an opportunity to explore the diversity of China's wine regions through guided tasting.",
    fr: "Une soirée de découverte autour des vins de Chine chez Global Saké, 76 boulevard Haussmann à Paris — l'occasion d'explorer la diversité des régions viticoles chinoises en dégustation guidée.",
    zh: "在巴黎奥斯曼大道76号Global Saké举办的中国葡萄酒发现之夜——通过专业引导品鉴，探索中国葡萄酒产区的多样魅力。"
  },
  body: {
    en: `<p>For the first time, a Chinese wine class was held at <strong>Global Saké</strong>, 76 Boulevard Haussmann, Paris 8th — one of the French capital's leading addresses for Asian beverages.</p>
<p>The session invited participants to explore the diversity of China's wine regions: Ningxia and its high-altitude Helan Mountain vineyards, Shandong and the historic Changyu estates, Xinjiang and its extreme continental terroirs, and Yunnan with the Ao Yun project at 2,600 metres.</p>
<p>Through guided tasting, guests discovered how Chinese winemaking — drawing on decades of investment and expertise from Bordeaux and beyond — is producing wines that deserve serious attention on the international stage. A landmark evening marking the growing presence of Chinese wine culture in Paris.</p>`,
    fr: `<p>Pour la première fois, une wine class entièrement dédiée aux vins de Chine s'est tenue chez <strong>Global Saké</strong>, 76 boulevard Haussmann, Paris 8e — l'une des adresses de référence de la capitale pour les boissons asiatiques.</p>
<p>La session a invité les participants à explorer la diversité des régions viticoles chinoises : la Ningxia et ses vignobles d'altitude au pied des montagnes Helan, le Shandong et les domaines historiques de Changyu, le Xinjiang et ses terroirs continentaux extrêmes, ainsi que le Yunnan avec le projet Ao Yun à 2 600 mètres.</p>
<p>À travers une dégustation guidée, les participants ont découvert comment la viticulture chinoise — portée par des décennies d'investissements et d'échanges avec Bordeaux et au-delà — produit des vins qui méritent une attention sérieuse sur la scène internationale. Une soirée qui marque la place grandissante de la culture du vin chinois à Paris.</p>`,
    zh: `<p>中国葡萄酒品鉴课首次在巴黎8区奥斯曼大道76号的<strong>Global Saké</strong>举办——这里是法国首都亚洲饮品文化的标志性地址之一。</p>
<p>本次品鉴课带领参与者探索中国葡萄酒产区的多样性：宁夏贺兰山脚下的高海拔葡萄园、山东张裕历史名庄、新疆极端大陆性气候风土，以及云南海拔2600米的敖云项目。</p>
<p>通过专业引导品鉴，宾客们亲身感受到中国葡萄酒——历经数十年投资积累与波尔多等国际专家的深度合作——正在国际舞台上展现出值得高度关注的品质。这是一个见证中国葡萄酒文化在巴黎日益壮大的历史性夜晚。</p>`
  },
  video: "https://www.youtube.com/embed/r3RYYywn1G4",
  tags: ["chinese-wine", "paris", "events", "tasting"]
},


  /* ── CULTURE ARTICLES ── */
  {
    slug: "changyu-inauguration-global-spirits",
    category: "events",
    date: "Décembre 2024",
    dateISO: "2024-12-10",
    image: IMAGES.changyu_pioneer_wine,
    featured: true,
    title: {
      en: "Changyu Inauguration at Global Spirits and Wine Paris: Chinese Wine Excellence Lands in France",
      fr: "Inauguration Changyu chez Global Spirits and Wine : la légende du vin chinois débarque à Paris",
      zh: "张裕亮相Global Spirits and Wine巴黎：中国葡萄酒传奇登陆法国"
    },
    excerpt: {
      en: "Global Spirits and Wine celebrated the arrival of Changyu — China's oldest and most prestigious wine house, founded in 1892 — with an exclusive inauguration event in Paris, bringing together professionals and enthusiasts around a century of Chinese viticultural excellence.",
      fr: "Global Spirits and Wine a célébré l'arrivée en France de la plus ancienne et prestigieuse maison de vin chinoise, fondée en 1892, lors d'une soirée inaugurale exclusive réunissant professionnels et amateurs autour de cuvées premium d'exception.",
      zh: "Global Spirits and Wine举办盛大揭幕活动，庆祝中国历史最悠久、最负盛名的葡萄酒品牌——创立于1892年的张裕——正式登陆法国，汇聚业界专业人士与爱好者共赏逾百年中国葡萄酒佳酿。"
    },
    body: {
      en: `<h2>The Legend of Chinese Wine Arrives in Paris</h2>
<p>With the inauguration of Changyu at our boutique, Global Spirits and Wine celebrated the arrival in France of the oldest and most prestigious Chinese wine house, founded in 1892 and a pioneer of modern viticulture in China.</p>
<p>True to our commitment to unveiling the viticultural treasures of Asia, we orchestrated an exclusive event around this historic brand — an evening that brought together professionals and enthusiasts alike around exceptional Chinese wines that bear witness to more than a century of expertise and innovation.</p>

<h2>At the Heart of the Inauguration</h2>
<p>The evening centred on a guided tasting of Changyu's premium cuvées, a presentation of the house's century-long history, and an exploration of Chinese wine-growing terroirs — from Shandong on the Yellow Sea coast to the internationally recognised excellence of Ningxia, situated along the foothills of the Helan Mountains.</p>
<p>Guests discovered how Changyu, founded by Zhang Bishi in Yantai, became China's first winery to import European varietals at scale — Cabernet Sauvignon, Chardonnay, Riesling — creating a viticultural bridge between East and West that continues to define the house today.</p>

<h2>A Cultural Bridge Between France and China</h2>
<p>This inauguration was conceived as a cultural bridge between France and China, marking an important milestone in our mission to promote exceptional Asian wines and spirits on the French market. The result was a memorable evening bringing together evidence of over a century of winemaking expertise and innovation.</p>
<blockquote>« A unique opportunity to introduce the French public to the richness and quality of premium Chinese wines, led by Changyu — a pioneering house that has succeeded in combining ancestral traditions and modern techniques to win over palates the world over. »</blockquote>

<h2>Changyu: 130 Years of Chinese Viticultural Excellence</h2>
<p>Founded in 1892 in Yantai, Shandong, by the entrepreneur Zhang Bishi, Changyu Pioneer Wine is the oldest wine company in China and one of the country's most internationally recognised luxury brands. The house was the first in China to import European grape varieties on a large scale, establishing a maritime-influenced terroir in Yantai that remains one of China's most suitable for premium European varietals.</p>
<p>Today, Changyu's production spans a number of China's finest wine regions — from the coast of Shandong to the arid plateau of Ningxia, where its Helan Mountain estate produces wines that have earned recognition at international competitions — as well as Yunnan, and Xinjiang, reflecting the extraordinary diversity of Chinese terroirs.</p>`,

      fr: `<h2>La légende du vin chinois débarque en France 🇨🇳🍷🎊</h2>
<p>Avec l'inauguration de Changyu dans notre boutique, Global Spirits and Wine a célébré l'arrivée en France de la plus ancienne et prestigieuse maison de vin chinoise, fondée en 1892 et pionnière de la viticulture moderne en Chine.</p>
<p>Fidèle à notre engagement de faire découvrir les trésors viticoles asiatiques, nous avons orchestré un événement exclusif autour de cette marque historique — une soirée mémorable réunissant professionnels et amateurs autour de vins chinois d'exception, témoins de plus d'un siècle de savoir-faire et d'innovation viticole.</p>

<h2>Au cœur de l'inauguration</h2>
<p>La soirée s'est articulée autour d'une dégustation guidée des cuvées premium de Changyu, d'une présentation de l'histoire centenaire de la maison et d'une découverte des terroirs viticoles chinois — du Shandong, sur la côte de la mer Jaune, jusqu'au Ningxia, région d'excellence reconnue internationalement, nichée au pied des montagnes Helan.</p>
<p>Les invités ont ainsi pu explorer comment Changyu, fondée par Zhang Bishi à Yantai, est devenue la première cave chinoise à importer des cépages européens à grande échelle — Cabernet Sauvignon, Chardonnay, Riesling — créant un pont viticole entre Orient et Occident qui continue de définir la maison aujourd'hui.</p>

<h2>Un pont culturel entre la France et la Chine</h2>
<p>Pensée comme un pont culturel entre la France et la Chine, cette inauguration marque une étape importante dans notre mission de valorisation des vins et spiritueux asiatiques d'exception sur le marché français.</p>
<blockquote>« Une opportunité unique de faire découvrir au public français la richesse et la qualité des vins chinois premium, portés par Changyu, maison pionnière qui a su allier traditions ancestrales et techniques modernes pour conquérir les palais du monde entier. »</blockquote>

<h2>Changyu : 130 ans d'excellence viticole chinoise</h2>
<p>Fondée en 1892 à Yantai, dans le Shandong, par l'entrepreneur Zhang Bishi, Changyu Pioneer Wine est la plus ancienne société vinicole de Chine et l'une des marques de luxe chinoises les plus reconnues à l'international. La maison a été la première en Chine à importer des cépages européens à grande échelle, établissant un terroir sous influence maritime à Yantai qui demeure l'un des plus propices en Chine pour les cépages européens premium.</p>
<p>Aujourd'hui, la production de Changyu s'étend sur plusieurs des plus belles régions viticoles de Chine — de la côte du Shandong au plateau aride du Ningxia, où son domaine du Helan Mountain produit des vins primés dans les concours internationaux — ainsi qu'au Yunnan et au Xinjiang, témoignant de l'extraordinaire diversité des terroirs chinois.</p>`,

      zh: `<h2>中国葡萄酒传奇登陆法国 🇨🇳🍷🎊</h2>
<p>随着张裕在Global Spirits and Wine精品店的盛大揭幕，我们庆祝这家中国历史最悠久、最负盛名的葡萄酒品牌——创立于1892年的现代中国葡萄酒酿造先驱——正式进入法国市场。</p>
<p>秉持我们推介亚洲葡萄酒珍藏的一贯使命，我们为这一历史品牌精心策划了一场专属活动，汇聚业界专业人士与爱好者，共赏承载逾百年酿造智慧与创新精神的中国顶级葡萄酒。</p>

<h2>揭幕活动精彩纷呈</h2>
<p>活动以张裕顶级系列导赏品鉴为核心，辅以品牌百年历史陈述及中国葡萄酒产区探索——从黄海之滨的山东，到国际公认的卓越产区宁夏贺兰山东麓。宾客们得以了解，由张弼士创立于烟台的张裕，如何成为中国首家大规模引进欧洲品种（赤霞珠、霞多丽、雷司令）的酒庄，在东西方之间架起一座延续至今的葡萄酒文化桥梁。</p>

<h2>中法文化交流的桥梁</h2>
<p>本次揭幕活动旨在成为连接中法两国的文化纽带，是我们致力于在法国市场推广亚洲顶级葡萄酒与烈酒使命中的重要里程碑。</p>
<blockquote>「这是向法国公众展示中国高端葡萄酒丰富内涵与卓越品质的绝佳契机。张裕作为先驱品牌，将祖传传统与现代酿造技术完美融合，征服了全球各地的品鉴者。」</blockquote>

<h2>张裕：130年中国葡萄酒卓越历程</h2>
<p>1892年，企业家张弼士在山东烟台创立张裕葡萄酿酒公司，这是中国历史最悠久的葡萄酒企业，也是国际知名度最高的中国奢侈品牌之一。张裕是中国首家大规模引进欧洲葡萄品种的酒庄，在烟台建立了受海洋气候影响的风土，至今仍是中国最适合欧洲优质品种的产区之一。如今，张裕的生产版图横跨中国多个顶级葡萄酒产区——从山东海岸到宁夏干旱高原（贺兰山酒庄在国际大赛中屡获殊荣）、云南及新疆，充分彰显了中国风土的非凡多样性。</p>`
    }
  },

  {
    slug: "moutai-diplomacy",
    category: "culture",
    date: "February 2025",
    dateISO: "2025-02-05",
    image: IMAGES.article_moutai_diplomacy,
    featured: false,
    title: {
      en: "The Spirit of Diplomacy: How Moutai Shaped China's Foreign Relations",
      fr: "Le Spiritueux de la Diplomatie : Comment Moutai a Façonné les Relations Étrangères de la Chine",
      zh: "外交烈酒：茅台如何塑造中国的对外关系"
    },
    excerpt: {
      en: "From Nixon's 1972 visit to state banquets for visiting heads of government, Kweichow Moutai has served as China's diplomatic calling card for over 70 years.",
      fr: "De la visite de Nixon en 1972 aux banquets d'État pour les chefs de gouvernement en visite, le Kweichow Moutai a servi de carte de visite diplomatique de la Chine pendant plus de 70 ans.",
      zh: "从1972年尼克松访华到国宾宴会，贵州茅台70多年来一直是中国的外交名片。"
    },
    body: {
      en: `<p>The history of Kweichow Moutai cannot be told without reference to the history of Chinese diplomacy. The two stories are intertwined so completely that understanding Moutai's rise to become the world's most valuable spirits brand requires understanding its role as an instrument of Chinese state power.</p>
<p>The defining moment came on February 21, 1972, when President Richard Nixon landed in Beijing for his historic nine-day visit to the People's Republic of China. At the state dinner hosted by Premier Zhou Enlai, both leaders drank Moutai throughout the meal. Nixon later wrote in his memoirs that he had been warned by the US advance team about the potency of the spirit, but found it "smooth and warming."</p>`,
      fr: `<p>L'histoire du Kweichow Moutai ne peut être racontée sans référence à l'histoire de la diplomatie chinoise. Le moment décisif est venu le 21 février 1972, quand le Président Richard Nixon a atterri à Pékin pour sa visite historique de neuf jours. Au dîner d'État organisé par le Premier Ministre Zhou Enlai, les deux dirigeants ont bu du Moutai tout au long du repas.</p>`,
      zh: `<p>贵州茅台的历史无法脱离中国外交史来讲述，两者的交织如此深入，以至于理解茅台如何跻身全球最有价值烈酒品牌，需要先理解其作为中国国家权力工具的角色。</p>
<p>决定性的时刻发生在1972年2月21日，当尼克松总统抵达北京，开始其历史性的九天访华之旅。在国务院总理周恩来主持的国宴上，两位领导人在整个用餐过程中都饮用了茅台。</p>`
    }
  },

  {
    slug: "grand-tasting-paris-2026",
    category: "exhibition",
    date: "Novembre 2026",
    dateISO: "2026-11-27",
    image: IMAGES.grand_tasting,
    featured: false,
    title: {
      en: "Le Grand Tasting Paris 2026 — 21st Edition at the Carrousel du Louvre",
      fr: "Le Grand Tasting Paris 2026 — 21e édition au Carrousel du Louvre",
      zh: "2026年巴黎大品鉴——第21届卢浮宫广场盛会"
    },
    excerpt: {
      en: "On 27 and 28 November 2026, the Carrousel du Louvre hosts the 21st edition of Le Grand Tasting Paris — organised by Bettane+Desseauve, France's premier public wine salon gathers the finest producers from Champagne, Burgundy, Bordeaux, the Rhône Valley and beyond for two days of intimate masterclasses and guided tastings.",
      fr: "Les 27 et 28 novembre 2026, le Carrousel du Louvre accueille la 21e édition du Grand Tasting Paris — organisé par Bettane+Desseauve, le premier salon de dégustation public de France réunit les meilleurs producteurs de Champagne, Bourgogne, Bordeaux, Vallée du Rhône et bien d'autres pour deux jours de masterclasses intimistes et de dégustations guidées.",
      zh: "2026年11月27日至28日，卢浮宫广场迎来第21届巴黎大品鉴——由Bettane+Desseauve主办，法国顶级公众葡萄酒沙龙汇聚香槟、勃艮第、波尔多、罗纳河谷等产区顶尖酒庄，举办为期两天的小型大师课与品鉴活动。"
    },
    body: {
      en: `<h2>France's Premier Wine Experience Returns to the Louvre</h2>
<p>Le Grand Tasting Paris is France's most prestigious public wine tasting salon, organised since its founding by <strong>Bettane+Desseauve</strong> — the reference French wine criticism house. Each year, it gathers the finest producers from every major French wine region under the historic vaulted ceilings of the Carrousel du Louvre. The 21st edition, on <strong>27 and 28 November 2026</strong>, follows the acclaimed 20th anniversary edition of 2025.</p>

<h2>Masterclasses at the Heart of the Experience</h2>
<p>The masterclasses are the jewel of Le Grand Tasting: intimate guided sessions of 45 minutes or 1 hour 15 minutes, with a maximum of 50 to 100 participants per session. Each session offers a tasting of four to six wines, presented by the producer themselves alongside a Bettane+Desseauve expert. From Burgundy premier cru to grower Champagne, the programme spans all levels of expertise. The 2026 masterclass schedule will be published in October — early booking is strongly advised as sessions sell out rapidly. Registration opens online via the Bettane+Desseauve billetterie platform; places can also be added to an existing entry booking.</p>

<h2>The Exhibitors</h2>
<p>The 2026 edition gathers an exceptional roster of producers region by region. In <strong>Champagne</strong>: Louis Roederer, Bollinger, Veuve Clicquot, Ruinart, Ayala, Drappier, Henriot, Gosset, Bruno Paillard, Charles Heidsieck, Lanson, Canard-Duchêne, Joseph Perrier, Champagne Thiénot, Mailly Grand Cru, and Frèrejean Frères. In <strong>Bourgogne</strong>: Bouchard Père et Fils, Domaine Faiveley, Albert Bichot, Château de Pommard, La Chablisienne, Domaine Vincent Girardin, Cave de Lugny, Château de Meursault, and Château de Marsannay. In <strong>Bordeaux</strong>: Château Léoville-Las Cases, Château Beychevelle, Jean-Pierre Moueix, Barton Family Wines, Château Lafon-Rochet, Château La Fleur de Boüard, and Baron Philippe de Rothschild. From the <strong>Rhône Valley</strong>: Famille Guigal, Inter-Rhône (Côtes du Rhône & Crus), Château de la Gardine, and Dauvergne Ranvier. From <strong>Alsace</strong>: Domaine Marcel Deiss, Gustave Lorentz, and Cave de Ribeauvillé. From the <strong>Loire Valley</strong>: Langlois, Maison Saget La Perrière, and Domaine de La Taille Aux Loups. From <strong>Languedoc</strong>: Château l'Hospitalet — Gérard Bertrand and Domaine Paul Mas. From <strong>Provence</strong>: Château La Coste. A dedicated <strong>Sans alcool</strong> section, featuring Maison Chavin and Sparkling Tea, reflects the growing importance of non-alcoholic alternatives.</p>

<h2>Practical Information</h2>
<p><strong>Dates:</strong> 27 and 28 November 2026<br/>
<strong>Venue:</strong> Carrousel du Louvre, 99 rue de Rivoli, 75001 Paris<br/>
<strong>Organised by:</strong> Bettane+Desseauve<br/>
<strong>Tickets:</strong> <a href="https://www.grandtasting.com/billetterie/" target="_blank">grandtasting.com/billetterie</a> — preferential rates for advance booking (2026 online ticketing not yet open)<br/>
<strong>Masterclasses:</strong> Programme available from October 2026<br/>
<strong>Full information:</strong> <a href="https://www.grandtasting.com" target="_blank">grandtasting.com</a></p>`,

      fr: `<h2>Le premier salon de dégustation de France revient au Louvre</h2>
<p>Le Grand Tasting Paris est le salon de dégustation public le plus prestigieux de France, organisé depuis sa création par <strong>Bettane+Desseauve</strong> — maison de référence de la critique vinicole française. Chaque année, il réunit les meilleurs producteurs de toutes les grandes régions viticoles françaises sous les voûtes historiques du Carrousel du Louvre. La 21e édition, les <strong>27 et 28 novembre 2026</strong>, fait suite à la très réussie 20e édition anniversaire de 2025.</p>

<h2>Les masterclasses, cœur de l'expérience</h2>
<p>Les masterclasses constituent le joyau du Grand Tasting : des sessions guidées intimistes de 45 minutes ou 1h15, accueillant un maximum de 50 à 100 participants par session. Chaque masterclass propose une dégustation de quatre à six vins, commentée par le producteur lui-même en compagnie d'un expert Bettane+Desseauve. Du premier cru de Bourgogne au Champagne de vigneron, le programme s'adresse à tous les niveaux. Le programme 2026 sera publié courant octobre — la réservation anticipée est vivement conseillée, les sessions affichant complet rapidement. L'inscription se fait en ligne via la billetterie Bettane+Desseauve ; les masterclasses peuvent être ajoutées lors de l'achat de l'entrée ou ultérieurement.</p>

<h2>Les exposants</h2>
<p>L'édition 2026 réunit un plateau exceptionnel de producteurs, région par région. En <strong>Champagne</strong> : Louis Roederer, Bollinger, Veuve Clicquot, Ruinart, Ayala, Drappier, Henriot, Gosset, Bruno Paillard, Charles Heidsieck, Lanson, Canard-Duchêne, Joseph Perrier, Champagne Thiénot, Mailly Grand Cru et Frèrejean Frères. En <strong>Bourgogne</strong> : Bouchard Père et Fils, Domaine Faiveley, Albert Bichot, Château de Pommard, La Chablisienne, Domaine Vincent Girardin, Cave de Lugny, Château de Meursault et Château de Marsannay. À <strong>Bordeaux</strong> : Château Léoville-Las Cases, Château Beychevelle, Jean-Pierre Moueix, Barton Family Wines, Château Lafon-Rochet, Château La Fleur de Boüard et Baron Philippe de Rothschild. En <strong>Vallée du Rhône</strong> : Famille Guigal, Inter-Rhône (Côtes du Rhône & Crus), Château de la Gardine et Dauvergne Ranvier. En <strong>Alsace</strong> : Domaine Marcel Deiss, Gustave Lorentz et Cave de Ribeauvillé. En <strong>Vallée de la Loire</strong> : Langlois, Maison Saget La Perrière et Domaine de La Taille Aux Loups. En <strong>Languedoc</strong> : Château l'Hospitalet — Gérard Bertrand et Domaine Paul Mas. En <strong>Provence</strong> : Château La Coste. Une section <strong>Sans alcool</strong> dédiée, avec Maison Chavin et Sparkling Tea, souligne l'importance croissante de cette catégorie.</p>

<h2>Informations pratiques</h2>
<p><strong>Dates :</strong> 27 et 28 novembre 2026<br/>
<strong>Lieu :</strong> Carrousel du Louvre, 99 rue de Rivoli, 75001 Paris<br/>
<strong>Organisé par :</strong> Bettane+Desseauve<br/>
<strong>Billetterie :</strong> <a href="https://www.grandtasting.com/billetterie/" target="_blank">grandtasting.com/billetterie</a> — tarifs préférentiels en réservant à l'avance (billetterie 2026 en ligne non encore ouverte)<br/>
<strong>Masterclasses :</strong> Programme disponible courant octobre 2026<br/>
<strong>Toutes les infos :</strong> <a href="https://www.grandtasting.com" target="_blank">grandtasting.com</a></p>`,

      zh: `<h2>法国顶级品鉴沙龙重返卢浮宫</h2>
<p>巴黎大品鉴是法国最负盛名的公众葡萄酒品鉴沙龙，自创办起始终由法国权威葡萄酒评论机构<strong>Bettane+Desseauve</strong>主办。每年，活动汇聚法国各大产区顶尖酒庄，在卢浮宫广场历史拱顶之下共聚一堂。第21届活动将于<strong>2026年11月27日至28日</strong>举行，承接2025年备受赞誉的第20届周年纪念版。</p>

<h2>大师课——体验的核心</h2>
<p>大师课是巴黎大品鉴的璀璨明珠：每场持续45分钟或1小时15分钟的小型导赏课程，每场最多接纳50至100名参与者。每场课程由酒庄代表亲自主讲，并搭配Bettane+Desseauve专家，提供4至6款佳酿的品鉴体验。从勃艮第一级园到独立酒农香槟，课程涵盖各类知识水平。2026年大师课日程将于10月公布，名额极为有限，强烈建议提前预订。报名可通过Bettane+Desseauve线上票务平台完成，也可在购买入场券后单独添加。</p>

<h2>参展商阵容</h2>
<p>2026年参展商阵容强大，汇聚各大产区名庄。<strong>香槟区</strong>：路易王妃、Bollinger、凯歌、Ruinart、Ayala、德乐比尔、亨利奥特、高士远、布鲁诺·帕亚尔、查理·海德西克、兰颂、卡纳尔-杜什纳、约瑟夫·佩利耶、香槟蒂厄诺、马利大区级香槟及Frèrejean Frères等。<strong>勃艮第</strong>：宝尚父子、法维莱、阿尔伯特·毕修、庞马尔城堡、夏布利联合、Vincent Girardin、卢尼山洞酒庄、默尔索城堡及马尔萨内城堡。<strong>波尔多</strong>：列支藤侯爵城堡、贝切维尔城堡、让-皮埃尔·穆埃克斯、巴顿家族佳酿、拉冯-罗谢城堡、波雅克花城堡及菲利普男爵。<strong>罗纳河谷</strong>：吉佳乐世家、罗纳葡萄酒产区联盟、加尔迪内城堡及Dauvergne Ranvier。<strong>阿尔萨斯</strong>：Marcel Deiss庄园、Gustave Lorentz及里博维尔酒窖。<strong>卢瓦尔河谷</strong>：Langlois、Maison Saget La Perrière及Domaine de La Taille Aux Loups。<strong>朗格多克</strong>：Gérard Bertrand及Domaine Paul Mas。<strong>普罗旺斯</strong>：Château La Coste。专设<strong>无酒精专区</strong>，展出Maison Chavin与Sparkling Tea，彰显这一品类日益重要的地位。</p>

<h2>实用信息</h2>
<p><strong>日期：</strong>2026年11月27日至28日<br/>
<strong>地点：</strong>卢浮宫广场，99 rue de Rivoli, 75001巴黎<br/>
<strong>主办方：</strong>Bettane+Desseauve<br/>
<strong>购票：</strong><a href="https://www.grandtasting.com/billetterie/" target="_blank">grandtasting.com/billetterie</a>——提前购票享优惠价（2026年线上票务尚未开启）<br/>
<strong>大师课：</strong>日程将于2026年10月公布<br/>
<strong>更多信息：</strong><a href="https://www.grandtasting.com" target="_blank">grandtasting.com</a></p>`
    }
  },

  {
    slug: "moutai-wine-paris-2026",
    category: "exhibition",
    date: "Février 2026",
    dateISO: "2026-02-09",
    image: IMAGES.moutai,
    featured: false,
    title: {
      en: "Kweichow Moutai at Wine Paris 2026: 12 Masterclasses and a World-Class Stand",
      fr: "Kweichow Moutai à Wine Paris 2026 : 12 Masterclasses et un Stand d'Exception",
      zh: "贵州茅台亮相2026年巴黎葡萄酒展：12场大师课与顶级展台"
    },
    excerpt: {
      en: "From 9 to 11 February 2026 at Paris Expo Porte de Versailles, Kweichow Moutai hosted 12 masterclasses at Stand E055 in Hall 2.2, led by a Michelin-starred chef, the IBA Vice President, and the world cocktail champion — an unmissable deep-dive into China's most iconic spirit.",
      fr: "Du 9 au 11 février 2026, Kweichow Moutai a proposé 12 masterclasses uniques au stand E055 du Hall 2.2 de Wine Paris, animées par une cheffe étoilée, le Vice-Président de l'IBA et le champion du monde de cocktail — une immersion incontournable dans le baijiu le plus iconique de Chine.",
      zh: "2026年2月9日至11日，贵州茅台在2.2馆E055展台举办12场大师课，由米其林星级主厨、IBA副主席及世界鸡尾酒冠军主持，带来无与伦比的中国国酒沉浸体验。"
    },
    body: {
      en: `<h2>Moutai Makes Its Mark at Wine Paris 2026</h2>
<p>At Wine Paris 2026, held from 9 to 11 February at Paris Expo Porte de Versailles, Kweichow Moutai occupied Stand E055 in Hall 2.2 of the Be Spirits section. The stand offered product tastings, cocktail discovery sessions, and an exceptional masterclass programme — one of the most anticipated Chinese spirits presences at a European trade fair in recent years.</p>

<h2>12 Masterclasses Across Three Days</h2>
<p>Twelve unique masterclasses ran throughout the three days, with four sessions daily at 11:00, 14:00, 15:00 and 16:00. Subjects covered Moutai's cultural heritage, dessert and chocolate pairings, cocktail creation, and food pairings — a comprehensive portrait of the spirit's extraordinary versatility.</p>
<p>Sessions were led by Michelin-starred chef Yurika Kitano; Serge Guillou, Vice President of the International Bartender Association (IBA); Alex Francis, co-founder of the acclaimed Paris bar De Vie; and Pierre Munier, the reigning world cocktail champion.</p>

<h2>Moutai: A Terroir and a Cultural Legacy</h2>
<p>The story of Moutai begins in the valley of the Chishui River in Guizhou province — a landscape of mountains, warm and humid climate, and exceptional microbial diversity creating conditions impossible to replicate elsewhere. The region's winemaking tradition stretches back to the Qin and Han dynasties, and Moutai was first recognised internationally at the Panama Universal Exposition in 1915.</p>
<p>Quality is built on time: Moutai's production cycle spans around five years, structured around nine rounds of cooking and eight rounds of fermentation. The spirit is produced from local glutinous sorghum (Hongyingzi), wheat, and the waters of the Chishui River. Today, Moutai is present in dozens of countries, and its status as a protected geographical indication reinforces the enduring association between the spirit, its origin, and the image of quality Chinese baijiu.</p>

<h2>Practical Information</h2>
<p><strong>Event:</strong> Wine Paris 2026<br/>
<strong>Dates:</strong> 9–11 February 2026<br/>
<strong>Venue:</strong> Paris Expo Porte de Versailles, 75015 Paris<br/>
<strong>Stand:</strong> Be Spirits — Hall 2.2, Stand E055<br/>
<strong>Full masterclass programme:</strong> <a href="https://moutaichina.fr/2026-paris-12-masterclasses/" target="_blank">moutaichina.fr</a></p>`,
      fr: `<h2>Moutai s'impose à Wine Paris 2026</h2>
<p>À Wine Paris 2026, organisé du 9 au 11 février à Paris Expo Porte de Versailles, Kweichow Moutai occupait le stand E055 dans le Hall 2.2 de la section Be Spirits. Le stand proposait dégustations, découverte de cocktails et un programme de masterclasses exceptionnel — l'une des présences chinoises les plus attendues d'un salon professionnel européen ces dernières années.</p>

<h2>12 masterclasses sur trois jours</h2>
<p>Douze masterclasses uniques se sont tenues sur les trois jours, avec quatre sessions quotidiennes à 11h, 14h, 15h et 16h. Les thèmes couvraient l'héritage culturel de Moutai, les accords avec desserts et chocolats, la création de cocktails et les accords mets et spiritueux — un portrait complet de la polyvalence extraordinaire de ce baijiu.</p>
<p>Animées par la cheffe étoilée Yurika Kitano ; Serge Guillou, Vice-Président de l'IBA ; Alex Francis, cofondateur du bar De Vie à Paris ; et Pierre Munier, champion du monde de cocktail en titre.</p>

<h2>Moutai : un terroir et un héritage culturel</h2>
<p>L'histoire de Moutai commence dans la vallée de la rivière Chishui, au Guizhou — montagnes, climat chaud et humide, diversité microbienne exceptionnelle créant des conditions impossibles à reproduire ailleurs. La tradition viticole de la région remonte aux dynasties Qin et Han, et Moutai a été reconnu internationalement pour la première fois lors de l'Exposition Universelle de Panama en 1915.</p>
<p>La qualité se construit dans le temps : le cycle de production s'étend sur environ cinq ans, avec neuf cycles de cuisson et huit de fermentation, à partir de sorgho gluant local (Hongyingzi), de blé et des eaux de la rivière Chishui. Son statut d'indication géographique protégée ancre durablement la marque dans son terroir unique.</p>

<h2>Informations pratiques</h2>
<p><strong>Événement :</strong> Wine Paris 2026<br/>
<strong>Dates :</strong> 9 au 11 février 2026<br/>
<strong>Lieu :</strong> Paris Expo Porte de Versailles, 75015 Paris<br/>
<strong>Stand :</strong> Be Spirits — Hall 2.2, Stand E055<br/>
<strong>Programme complet des masterclasses :</strong> <a href="https://moutaichina.fr/2026-paris-12-masterclasses/" target="_blank">moutaichina.fr</a></p>`,
      zh: `<h2>茅台在2026年巴黎葡萄酒展大放异彩</h2>
<p>2026年巴黎葡萄酒展于2月9日至11日在巴黎凡尔赛门展览中心举办，贵州茅台入驻Be Spirits专区2.2馆E055展台。展台设有产品品鉴、鸡尾酒体验及精彩大师课项目，是近年来在欧洲专业展会中备受期待的中国烈酒亮相。</p>

<h2>三天12场大师课</h2>
<p>展会三天共举办12场大师课，每天在11:00、14:00、15:00和16:00各设一场。主题涵盖茅台文化传承、甜点与巧克力搭配、鸡尾酒创作及美食佐酒，全面呈现这款白酒非凡的多元魅力。</p>
<p>主持人阵容强大：米其林星级主厨北野百合香、IBA副主席塞尔日·吉尤、巴黎De Vie酒吧联合创始人亚历克斯·弗朗西斯，以及世界鸡尾酒冠军皮埃尔·缪尼耶。</p>

<h2>茅台：独特风土与文化传承</h2>
<p>茅台发源于贵州赤水河谷，山岭环抱，气候温热潮湿，微生物多样性卓绝，造就了无可复制的生态。这片土地的酿造传统可追溯至秦汉；1915年巴拿马万国博览会上荣获金奖，首度走上国际舞台。茅台生产周期长达约五年，经历九次蒸煮、八次发酵，原料为当地红缨子糯高粱、小麦与赤水河水。地理标志保护身份进一步巩固了这款佳酿与其产地的深厚纽带。</p>

<h2>实用信息</h2>
<p><strong>活动：</strong>2026年巴黎葡萄酒展<br/>
<strong>日期：</strong>2026年2月9日至11日<br/>
<strong>地点：</strong>巴黎凡尔赛门展览中心，75015巴黎<br/>
<strong>展台：</strong>Be Spirits — 2.2馆E055<br/>
<strong>完整大师课日程：</strong><a href="https://moutaichina.fr/2026-paris-12-masterclasses/" target="_blank">moutaichina.fr</a></p>`
    }
  },

  {
    slug: "baijiu-cocktail-renaissance",
    category: "education",
    date: "March 2025",
    dateISO: "2025-03-12",
    image: IMAGES.article_baijiu_cocktail,
    featured: false,
    title: {
      en: "The Baijiu Cocktail Renaissance: How Bartenders Are Embracing China's Spirit",
      fr: "La Renaissance du Cocktail Baijiu : Comment les Bartenders Embracent le Spiritueux Chinois",
      zh: "白酒鸡尾酒的文艺复兴：调酒师如何拥抱中国烈酒"
    },
    excerpt: {
      en: "From London to New York to Shanghai, a new generation of bartenders is discovering that Baijiu's extraordinary aromatic complexity makes it one of the most versatile — and rewarding — cocktail spirits in the world.",
      fr: "De Londres à New York en passant par Shanghai, une nouvelle génération de bartenders découvre que la complexité aromatique extraordinaire du Baijiu en fait l'un des spiritueux de cocktail les plus polyvalents au monde.",
      zh: "从伦敦到纽约再到上海，新一代调酒师正在发现，白酒非凡的香气复杂性使其成为世界上最多样化、最令人回味的鸡尾酒烈酒之一。"
    },
    body: {
      en: `<p>The cocktail bar world has always been a laboratory for the exotic and the unexpected, but few spirits have presented as much creative potential — or as steep a learning curve — as Baijiu. The spirit that has been consumed by more people than any other on Earth remained almost entirely absent from international cocktail culture until the last decade.</p>
<p>That is now changing rapidly. At bars from London's Chinatown to New York's Lower East Side to Singapore's Marina Bay, Baijiu-forward cocktails are appearing on menus, and the bartenders creating them are discovering that the spirit's extraordinary aromatic range — from the fruity accessibility of Strong Aroma to the medicinal complexity of Herbal Aroma — provides creative possibilities unavailable with Western spirit categories.</p>`,
      fr: `<p>Le monde des bars à cocktails a toujours été un laboratoire pour l'exotique et l'inattendu, mais peu de spiritueux ont présenté autant de potentiel créatif que le Baijiu. Dans les bars de Chinatown à Londres jusqu'au Lower East Side de New York, les cocktails à base de Baijiu apparaissent sur les cartes.</p>`,
      zh: `<p>鸡尾酒吧世界历来是探索异域风味和意外体验的实验室，但很少有烈酒能像白酒一样呈现如此大的创作潜力。从伦敦唐人街的酒吧到纽约下东区，再到新加坡滨海湾，以白酒为主角的鸡尾酒正出现在各地菜单上。</p>`
    }
  },

];

/* ─── HELPERS ─── */
export function getArticlesByCategory(category) {
  // Accept both singular and plural forms (e.g. 'event' matches 'events')
  return ARTICLES.filter(a => a.category === category || a.category === category + 's' || a.category + 's' === category);
}

export function getFeaturedArticles() {
  return ARTICLES.filter(a => a.featured);
}

export function getArticleBySlug(slug) {
  return ARTICLES.find(a => a.slug === slug) || null;
}

export function getRelatedArticles(slug, limit = 3) {
  const article = getArticleBySlug(slug);
  if (!article) return [];
  return ARTICLES
    .filter(a => a.slug !== slug && a.category === article.category)
    .slice(0, limit);
}