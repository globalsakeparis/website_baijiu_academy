/* ============================================================
   IMAGES.JS — Source unique de toutes les images du site
   ============================================================
   Toutes les images/URLs sont définies ici.
   Pour changer une image : modifier uniquement ce fichier.

   USAGE :
     import { IMAGES, POOL_B, POOL_W } from '../js/images.js';
     import { IMAGES, POOL_B, POOL_W } from './images.js';   // depuis js/

   IMAGES LOCALES : chemins relatifs depuis la racine du site
   IMAGES DISTANTES : URLs externes (remplacer par une locale si possible)
   ============================================================ */


/* ─────────────────────────────────────────────────────────────
   1. IMAGES PRINCIPALES (utilisées via IMAGES.xxx)
───────────────────────────────────────────────────────────── */
export const IMAGES = {

  /* ── PAGE D'ACCUEIL ───────────────────────────────────────── */

  // Hero plein écran — bannière principale de la page d'accueil
  home_banner: "images/home_banner.jpeg",

  // Section intro — cuves de fermentation en terre cuite (baijiu)
  // Utilisé aussi sur la page Baijiu
  fermentation: "images/baijiu_fermentation.png",

  // Bannière large — paysage chinois montagneux (page d'accueil, section culture)
  landscape: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?crop=entropy&cs=srgb&fm=jpg&w=1800&q=85",


  /* ── BAIJIU — GÉNÉRAL ──────────────────────────────────────── */

  // Tiges de sorgho (grain de base du baijiu)
  plant: "https://www.wsetglobal.com/media/9396/1608x900_sorghum_baijiu.jpg?anchor=center&mode=crop&width=1608&height=900&rnd=132832647090000000",

  // Bouteille Kweichow Moutai Feitian — image principale du producteur
  moutai: "https://www.barnews.ch/wp-content/uploads/Kweichow-Moutai.jpg",

  // Bouteille Kweichow Moutai — image alternative (même source que moutai)
  moutai2: "https://www.barnews.ch/wp-content/uploads/Kweichow-Moutai.jpg",

  // Ambiance spiritueux chinois — verres et bouteilles de baijiu
  cultural: "https://www.shutterstock.com/image-photo/baijiu-chinese-liquor-grain-600nw-2724793233.jpg",

  // Sorgho torréfié / en fermentation (grains gros plan)
  sorghum: "https://spiritsselection.com/app/uploads/A7069CAF-4534-4D83-AD32-567E63C9D05B_L0_001.jpg",

  // Bouteilles de baijiu en rang — photo ambiance presse
  sauce_aroma: "https://img.20mn.fr/b865ZctvTK6ACowWqqu-kA/1444x920_des-bouteilles-de-baijiu-un-spiritueux-chinois-connu-en-chine-mais-peu-a-l-etranger",

  // Langjiu — photo institutionnelle du groupe (page producteur)
  langjiu: "https://english.ckgsb.edu.cn/knowledge/wp-content/uploads/2025/01/Case-study_Spirited-Competition-How-alcohol-company-Langjiu-builds-brand-potential.jpg",

  // Carte géographique de la Chine — régions de production baijiu
  map: "images/china.jpg",




  /* ── EXPOSITIONS / ÉVÉNEMENTS ─────────────────────────────── */

  // Photo d'exposition — salle de dégustation / événement culturel
  // ⚠️ Fichier renommé (était : exibition.jpeg)
  exhibition: "images/exhibition.jpeg",

  // Photo générique d'événement festif en Asie
  event: "https://img.12go.asia/0/plain/s3://12go-web-static/static/images/upload-media/1843.jpg",

  // Vue aérienne de Paris — utilisé pour l'exposition Paris 2024
  paris: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?crop=entropy&cs=srgb&fm=jpg&w=1800&q=85",

  // Château médiéval — image décorative (pages génériques / académie)
  castle: "images/castle.png",


  /* ── ACADÉMIE / QUI SOMMES-NOUS ───────────────────────────── */

  // Temple chinois — ambiance culturelle (page Académie / qui sommes-nous)
  temple: "https://magazine-fr.wein.plus/uploads/media/magazine_news/194100/conversions/detail.jpg",


  /* ── VINS CHINOIS — CARTE & GÉNÉRAL ──────────────────────── */

  // Carte des régions viticoles de Chine
  winemap: "images/wine_china.jpg",

  // Bouteille de vin générique (fond sombre, photo studio)
  wineBottle: "https://images.unsplash.com/photo-1670065921509-d0e0d053355b?crop=entropy&cs=srgb&fm=jpg&w=1800&q=85",


  /* ── VINS CHINOIS — RÉGIONS ───────────────────────────────── */

  // Ningxia — terrasses viticoles sur collines arides (région phare)
  ningxia: "https://vinodelice.com/cdn/shop/articles/terrace-4440132_1920_752725eb-760f-4192-ba3b-ece441262f4d.webp?v=1772185825&width=1920",

  // Yantai / Shandong — Pavillon Penglai face à la mer
  yantai: "https://discoverplaces.travel/images/ScopriLaCina/Penglai-Pavillon-mod.jpg",

  // Xinjiang — paysage steppique / vignobles de l'ouest
  xinjiang: "https://res.klook.com/image/upload/fl_lossy.progressive,q_60/Mobile/City/hgmz78muq3roxbuhpxxh.jpg",

  // Yunnan — massif du Dragon de Jade près de Lijiang
  yunnan: "https://www.yunnan-roads.fr/wp-content/uploads/2025/08/Lijiang-Chine-massif-Dragon-de-Jade-shutterstock_173785184-scaled.jpg",

  // Hebei — Grande Muraille section Lanyuan (Laiyuan)
  heibei: "https://thumbs.dreamstime.com/b/great-wall-lanyuan-here-portion-inner-huhai-laiyuan-heibei-province-182063406.jpg",

  // Shanxi — paysage rural typique de la province
  shanxi: "https://www.chineescapade.com/Admin_Manager/uponepic/UpCityPic/images/201311/Shanxi-article.jpg",

  // Vignoble de Yantai — Château Changyu, côte est
  changyu: "https://asialyst.com/fr/wp-content/uploads/2016/07/CHINE-VIN-YANTAI.jpg",


  /* ── VINS CHINOIS — DOMAINES / BOUTEILLES ────────────────── */

  // Helan Qingxue — Jia Bei Lan Estate Red 2017 (Ningxia)
  helan_quingxue: "https://www.1855thebottleshop.com/cdn/shop/products/Helan-Qingxue-Jia-Bei-Lan-Estate-Red-2017.jpg?v=1706757489",

  // Silver Heights — bouteille He He Family Red (Ningxia)
  silver_heights: "https://static.wixstatic.com/media/612168_85d860f31a41448cac06b1ee55c71a35~mv2.png/v1/crop/x_0,y_145,w_1920,h_8077/fill/w_1920,h_8077,al_c,q_95,enc_avif,quality_auto/612168_85d860f31a41448cac06b1ee55c71a35~mv2.png",

  // Ao Yun — cuvée Yunnan 2015 (LVMH, vignoble de haute altitude)
  ao_yun: "https://drzx03g1xem1q.cloudfront.net/ROkzVPcAc4JkmxMaA1n9z3IT/vin-china-ao_yun-yunnan-2015-2000.webp",

  // Château Changyu — bâtiment historique du domaine (Yantai, 1892)
  changyu_pioner_wine: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Chateau-Changyu.jpg",

  // Jia Bei Lan Grand Reserve 2017 — cuvée haut de gamme (Ningxia)
  jia_bei_lan_grand_reserve: "https://www.decanterchina.com/assets/images/article/full/_____________________2017.jpg?1625499947",

  // Jia Bei Lan Reserve 2017 — cuvée intermédiaire (Ningxia)
  jia_bei_lan_reserve: "https://www.decanterchina.com/assets/images/article/full/_______________2017.png?1654455140",

  // Jia Bei Lan Chardonnay — blanc (Ningxia)
  jia_bei_lan_chardonnay: "https://www.kerrywines.com/media/catalog/product/cache/8b09f9fe82627886c88cc08d85e3dd9c/W/5/W5X546K90CC2-base_1.png",

  // The Summit — cuvée premium (Tiansai Vineyards, Xinjiang)
  the_summit: "https://www.rawwine.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMFUvRFE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--7bda74f25910209dae9dff51a4feb761210f6503/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFMa0JXa0M1QVU9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--5c7db84f938b38871ca9ee88250f6951d6743ffa/%E6%88%AA%E5%B1%8F2025-04-11%2010.png",

  // Family Reserve — fûts de vieillissement en cave
  family_reserve: "https://oldstcroix.com/wp-content/uploads/2022/01/Barrels_Family_mobil.jpg",

  // Tiansai Vineyards — vue du domaine / chai (Xinjiang)
  tiansai: "https://www.decantershanghai.com/images/exhibitors/banners/backboard_image_tiansai_vineyards.jpg?1523974642",

  // Tiansai Reserve — bouteille cuvée réserve (Xinjiang)
  tiansai_reserve: "https://www.decanterchina.com/assets/images/article/full/________________________[21].png?1749946107",

  // Silk Road Wines — bouteille (Xinjiang / route de la soie)
  silkroad_wine: "https://i0.wp.com/silkroadwines.com/wp-content/uploads/2019/09/Manavi-New.png?w=800&ssl=1",


  /* ── PRODUCTEURS BAIJIU — IMAGES INLINE data.js ──────────── */
  // Ces images étaient hardcodées directement dans data.js, centralisées ici.

  // Moutai Feitian 53% — bouteille emblématique fond blanc (gamme principale)
  moutai_feitian: "https://moutai.com.au/cdn/shop/files/Moutai_Feitian_500mL_Front.jpg?v=1750723051",

  // Moutai 1935 — bouteille édition commémorative Longue Marche
  moutai_1935: "https://moutai.com.au/cdn/shop/files/Moutai1935500mLBottleFront.jpg?v=1728515574",

  // Moutai Prince (王子酒) — entrée de gamme Moutai, rouge et or
  moutai_prince: "https://www.lxfrance.fr/12997-large_default/moutai-prince-53-500ml.jpg",

  // Guotai Jiu (国台酒) — photo institutionnelle du producteur (IWSC)
  guotai: "https://iwsc.net/img/entry/main_medium-64332.jpg",

  // Xijiu (习酒) — trophée / prix design du producteur
  xijiu: "https://design.museaward.com/upload/entry/files/ME232626/small/31601770363512.jpg",

  // Xifengjiu (西凤酒) — photo produit / bouteille (TasteAtlas)
  xifengjiu: "https://www.tasteatlas.com/images/ingredients/499513d995a341988f37801535cce648.jpg",

  // Baiyunbian (白云边) — bouteille ou ambiance distillerie (China Daily)
  baiyunbian: "https://www.chinadaily.com.cn/food/img/attachement/jpg/site1/20170812/d8cb8a51564a1af8e78b0d.jpg",


  /* ── PRODUCTEURS BAIJIU — FORT ARÔME (Strong Aroma) ─────── */
  // Ces URLs étaient hardcodées dans data.js

  // Wuliangye (五粮液) — producteur Fort Arôme, Yibin, Sichuan
  // Ambiance spiritueux en bouteille / verre ambré sur fond sombre
  wuliangye: "https://images.unsplash.com/photo-1544145945-f90425340c7e?crop=entropy&cs=srgb&fm=jpg&w=800&q=85",

  // Luzhou Laojiao (泸州老窖) — producteur Fort Arôme, Luzhou, Sichuan
  // Bouteilles alignées dans une cave / entrepôt
  luzhou_laojiao: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?crop=entropy&cs=srgb&fm=jpg&w=800&q=85",

  // Yanghe Distillery (洋河酒厂) — producteur Fort Arôme, Suqian, Jiangsu
  // Verre de spiritueux doré sur comptoir
  yanghe: "https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?crop=entropy&cs=srgb&fm=jpg&w=800&q=85",

  // Gujinggong Jiu (古井贡酒) — producteur Fort Arôme, Bozhou, Anhui
  // Bouteilles en lumière chaude / ambiance distillerie
  gujinggongjiu: "https://images.unsplash.com/photo-1608270586620-248524c67de9?crop=entropy&cs=srgb&fm=jpg&w=800&q=85",

  // Jiannanchun (剑南春) — producteur Fort Arôme, Mianzhu, Sichuan
  // Spiritueux versé en verre — macro shot ambré
  jiannanchun: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?crop=entropy&cs=srgb&fm=jpg&w=800&q=85",


  /* ── PRODUCTEURS BAIJIU — ARÔME LÉGER (Light Aroma) ─────── */

  // Fenjiu / Xinghuacun (汾酒·杏花村) — producteur Arôme Léger, Fenyang, Shanxi
  // Verre et pichet de spiritueux clair / blanc
  fenjiu: "https://images.unsplash.com/photo-1585825080368-e86cd3869e64?crop=entropy&cs=srgb&fm=jpg&w=800&q=85",

  // Red Star Erguotou (红星二锅头) — producteur Arôme Léger, Pékin
  // Bouteille de spiritueux clair — fond épuré
  red_star_erguotou: "https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?crop=entropy&cs=srgb&fm=jpg&w=800&q=85",

  // Niulanshan (牛栏山) — producteur Arôme Léger, Shunyi, Pékin
  // Portrait ambiance bar — verre et spiritueux
  niulanshan: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=srgb&fm=jpg&w=800&q=85",


  /* ── PRODUCTEURS BAIJIU — ARÔME DE RICE / AUTRES ────────── */

  // Guilin Sanhua (桂林三花酒) — producteur Arôme Riz, Guilin, Guangxi
  // Bouteilles de spiritueux en rang sur fond sombre
  guilin_sanhua: "https://images.unsplash.com/photo-1558618048-fbd2654d3a2e?crop=entropy&cs=srgb&fm=jpg&w=800&q=85",

  // Kouzijiao (口子窖) — producteur Arôme Mixte, Huaibei, Anhui
  // Photo institutionnelle du producteur (Baidu Baike)
  kouzijiao: "https://gbaike-image.cdn.bcebos.com/0824ab18972bd4077a4f607b77899e510eb309af/0824ab18972bd4077a4f607b77899e510eb309af_url?x-bce-process=image/format,f_auto/resize,m_lfit,h_1024,limit_1",

  // Dongjiu (董酒) — producteur Arôme aux Herbes, Zunyi, Guizhou
  // Intérieur de cave / fûts de vieillissement
  dongjiu: "https://images.unsplash.com/photo-1535916707207-35f997b83b81?crop=entropy&cs=srgb&fm=jpg&w=800&q=85",


  /* ── ARTICLES / BLOG ──────────────────────────────────────── */

  // Article "Aroma Lab Discovery" — image de couverture (octobre 2024)
  // Bouteilles de baijiu disposées sur une table de dégustation
  article_aroma_lab: "https://culture-chinoise.com/wp-content/uploads/2026/03/Baijiu-chinois-Tout-ce-que-vous-devez-savoir.jpg",

  // Article "Grand Tasting Paris 2025" — grande dégustation de vins et spiritueux
  // Verres de vin rouges sur table de dégustation professionnelle
  article_grand_tasting_2025: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?crop=entropy&cs=srgb&fm=jpg&w=800&q=85",

  // Article "Exposition 2025 Preview" — avant-première de l'exposition annuelle
  // Ambiance bar cocktail haut de gamme / lumières tamisées
  article_exposition_2025: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?crop=entropy&cs=srgb&fm=jpg&w=800&q=85",

  // Article "Concours Baijiu Paris 2026" — compétition internationale de baijiu
  // Scène d'événement / foule dans une grande salle éclairée
  article_concours_2026: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?crop=entropy&cs=srgb&fm=jpg&w=800&q=85",

  // Article "Changyu Inauguration Global Spirits" — inauguration du showroom Changyu
  // Gros plan d'un verre de vin rouge — dégustation formelle
  article_changyu_inauguration: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?crop=entropy&cs=srgb&fm=jpg&w=800&q=85",

  // Article "Moutai Diplomacy" — le rôle diplomatique du Moutai
  // Bouteilles en rangée dans une vitrine officielle / lumière froide
  article_moutai_diplomacy: "https://images.unsplash.com/photo-1577083552761-0af3f3a5d6e7?crop=entropy&cs=srgb&fm=jpg&w=800&q=85",

  // Article "Grand Tasting Paris 2026" — édition 2026 de la grande dégustation
  // Bouteilles de spiritueux alignées — ambiance cave professionnelle
  article_grand_tasting_2026: "https://images.unsplash.com/photo-1547595628-c61a29f496f0?crop=entropy&cs=srgb&fm=jpg&w=800&q=85",

  // Article "Moutai Wine Paris 2026" — présence Moutai au salon du vin de Paris
  // Coucher de soleil sur des vignes / paysage viticole
  article_moutai_wine_paris: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?crop=entropy&cs=srgb&fm=jpg&w=800&q=85",

  // Article "Baijiu Cocktail Renaissance" — le renouveau du cocktail au baijiu
  // Paysage montagneux de Guizhou — vallées brumeuses (ambiance distillerie)
  article_baijiu_cocktail: "https://images.unsplash.com/photo-1505935428862-770b6f24f629?crop=entropy&cs=srgb&fm=jpg&w=800&q=85",


  // A TRIER : 
  guotai_15_year:"https://www.watsonca.com/images/thumbnails/915/800/detailed/4/%E4%B8%BB%E5%9B%BE-02.png",
  xijiu_junpin:"https://whiskeyonline.co.nz/cdn/shop/files/xijiujun.jpg?v=1752757130",
  wuliangye_pujin:"https://y.zdmimg.com/202507/08/686cd90ed8a4d3366.jpg_a640.jpg",
  guojiao_1573:"https://www.lxfrance.fr/12499-large_default/-157352-500.jpg",
  dream_blue_m9:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStr2fvLTti6t0pPq46l9JlNHGjMZ_a77eW_w&s",
  gujinggong_20_year : "https://pic.cdfmembers.com/cd/shenqiProduct/622847153daff27124d58369.jpg/webp800",
  jiannanchun_special_reserve:"https://simplyalcohol.com.sg/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-18-at-15.56.10_9154f6c4.jpg",
  fenjiu_qinghua_30:"https://mvliquor.com.au/cdn/shop/files/FenJiuQingHua30YearOldBaijiu53_500ml_432d1e76-f4c7-41fe-9576-74542bb60680.png?v=1771990713",
  red_star_erguotou_blue:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2_bq_L753e_60eZPwjlukQJJwoF_4MacU_w&s",
  niulansha_premium: "https://pic.cdfmembers.com/cd/shenqiProduct/62284715de8ebe3386228bb5.png/webp800",
  guilin_sanhua_aged: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgDv0zq5TK1vRjXah-_9xSq-xE901VCx0acQ&s",
  quanzhou_baiyun: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/56/37/fe/baiyun-mountain.jpg?w=1200&h=-1&s=1",
  baiyun_classic: "",
  xifengjiu_6_year: "https://www.wine-searcher.com/images/labels/32/87/10963287.jpg",
  baiyunbian_15_year:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpB7t0rLPE39BC2y6TdZfA6yYx4th9H99YQQ&s",
  kouzijiao_10_year:"https://imgservice.suning.cn/uimg1/b2c/image/MasN_IljmWoi8E_pSsqnBg.jpg_800w_800h_4e_80Q_is",
  dongjiu_red_label:"https://img1.cnxiangyan.com/jiunew/2023/0516/4830_1.jpeg?x-image-process=style/sy",
  hengshui_laobaigan:"https://cdn.shoplightspeed.com/shops/633206/files/49470330/image.jpg",
  hengshui_laobaigan_67:"https://img.lazcdn.com/g/p/9c383192c41ea1f33d6bb2926e3a7431.jpg_720x720q80.jpg",
  jiugui_jiu:"https://cdn.shoplightspeed.com/shops/633206/files/29811120/1500x4000x3/jiugui-375ml.jpg",
  jiugui_jiu_red:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRO-jXfjxNL0xxpRdmi_yCesmuEpTGDdKG_Q&s",
  sige_jiu:"https://www.sitejiu.com/upload/part/bc5df4b415fc4d318bd8b875c195b152.png",
  sige_jiu_blue_classic:"https://www.sitejiu.com/upload/article/839407b26996489b9bae14c1fe41f23a.png",
  sesame_aroma:"https://cdn.aroma-zone.com/d_default_placeholder.png/c_fit,q_auto,f_auto,w_893/b_none/v1/cf/0xsz2r7o7t3z/6gk0dpHHafzlINSdPOfSKb/be82db653508566e25b4a2fa3517effc/AdobeStock_207085420.jpeg",
  jingzhi_baijiu: "",
  haizhilan: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Yubingshao.jpg/800px-Yubingshao.jpg",
  shiwan_yubingshao: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Yubingshao.jpg/800px-Yubingshao.jpg",
  jiujiang_shuangzheng: "",
  strong_aroma:"",
  light_aroma:"",
  rice_aroma:"",
  phoenix_aroma:"",
  mixed_aroma:"",
  herbal_aroma:"",
  laobaigan_aroma:"",
  fuyu_aroma:"",
  special_aroma:"",
  changyu_pioneer_wine:"https://media.licdn.com/dms/image/v2/C510BAQGCBmv42i_NzQ/company-logo_200_200/company-logo_200_200/0/1630566052289?e=2147483647&v=beta&t=R2GVgH1w1h4BP5-kkeIaxHQ6FubDlXlz7bT4cNkrFA0",
  noble_dragon_cabernet_sauvignon:"https://en.changyu.com.cn/wp-content/uploads/2023/11/2023110507261936.jpg",
  changyu_riesling_ixe_wine:"https://www.vinvm.co.uk/image/cache/catalog/chateau-changyu-golden-icewine-valley-2015-half-bottle-popup.jpg?v1585469555",
  cabernet_gernischt_heritage:"https://changiairport.scene7.com/is/image/changiairport/mp00670044-1-xige-1742962587895?$2x$",
  dynasty_fine_wine:"https://www.decanterchina.com/assets/images/article/full/remote_news-dynasty-slide.jpg",
  dynasty_grand_reserve: "https://www.decanterchina.com/assets/images/article/full/remote_news-dynasty-slide.jpg",
  dynasty_semi_dry_riesling:"https://www.decanterchina.com/assets/images/article/full/sino_french_joint_venture_dynasty_winery__inherit_semi_dry_white__tianjin__china_nv.jpg?1750234406",
  great_wall_wine:"https://www.internationalwinechallenge.com/canopy/images/wine_images/IWC/wine/2019/zoom/3492.jpg",
  great_wall_5_star_reserve:"https://www.internationalwinechallenge.com/canopy/images/wine_images/IWC/wine/2019/zoom/3492.jpg",
  great_wall_charfonnay:"https://www.internationalwinechallenge.com/canopy/images/wine_images/IWC/wine/2018/zoom/4504.jpg",
  suntime_international_wine:"https://images.vivino.com/labels/kbLeGrIUSs-vepAO1fxePg.jpg",
  suntime_reserve_syrah:"https://images.vivino.com/thumbs/EyToiXI9R-KBpUxy9TVeOA_375x500.jpg",
  suntime_desert_chardonnay:"https://static1.chronodrive.com/img/PM/Z/0/56/0Z_449456.jpg",
  loulan_winery:"https://www.decanterchina.com/assets/images/article/full/_________________________________2014_1.png?1558740115",
  loulan_old_vine_cabernet:"https://theorganiccellar.com/cdn/shop/files/Laudum_Old_Vine.png?v=1751910689",
  loulan_silk_road_werlot:"https://images.vivino.com/labels/z3qBwmSYR-GgIB-lFZJQ3w.jpg",
  tiansai_winjiang_estate:"https://i0.wp.com/vino-joy.com/wp-content/uploads/2021/12/tiansai.jpg?resize=640%2C423&ssl=1",
  yili_valley_cabernet_franc:"https://www.decanterchina.com/assets/images/article/full/bronze_ii[7].png?1749947112",
  yili_desert_blend : "https://www.decanterchina.com/assets/images/article/full/bronze_ii[7].png?1749947112",
  ao_yun : "https://www.terredevins.com/wp-content/uploads/2024/12/Ao-Yun.jpg",
  ao_yun_cabernet_sauvignon:"https://www.vinatis.com/78442-detail_default/ao-yun-2019-domaine-ao-yun.png",
  ao_yun_blanc_de_blancs:"",
  shangri_la_winery:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaF5da4zVnEAM35--K76FfO9t2xX57Oguajg&s",
  himalayan_cabernet_sauvignon:"https://cdn.shopify.com/s/files/1/0836/2698/3754/files/3609051284000-face_TRAITE_3c09342c-d97c-4268-a0db-0cbbfda54c80.jpg?v=1756387925",
  shangri_la_tibetan_rose:"",
  sun_spirit_estate:"",
  sun_spirit_high_altitude_syrah:"",
  lancang_valley_cabernet_bled:"",
  sino_french_demonstration_winery:"https://i1.wp.com/vino-joy.com/wp-content/uploads/2024/07/WeChat-Image_20240718093638-1024x683.jpg?ssl=1",
  sino_french_reserve_chardonnay:"",
  sino_french_cabernet_sauvignon:"",
  great_wall_huailai_estate:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1aJ0OI5JG4iTatWgBBouiRTkJkN63mXq0xA&s",
  hualilai_reserve_cabernet:"",
  huailai_muscat_blanc:"",
  jiming_mountain_winery:"",
  single_vineyard_merlot:"",
  jiming_estate_cabernet_blend:"",
  grace_vineyard:"",
  grace_vineyard_chardonnay:"",
  tasya_reserve:"",
  rongde_winery:"",
  rongde_reserve_cabernet:"",
  rongde_loess_plateau_merlot:"",
  helan_mountain_dynasty:"",helan_mountain_loess_merlot:"",
  helan_mountain_cabernet:"",
  grand_tasting:"https://www.grandtasting.com/wp-content/uploads/2026/04/GT-Paris-20-Ans-Paysage-62-Fabrice-Leseigneur.jpg",
  concours_article:"https://iwsc.net/img/blog/1-medium-untitled-design-3.png",
  article_wine_class:"images/wine_class.png",
  chi_aroma:"https://minuman.com/cdn/shop/articles/Baiiju_-The-Chinese-Spirit_1ff793fc-8187-4863-94e6-7cc20e124d19.jpg?v=1755229074",
  shiwan_yubingshao: "https://www.shiwandistillery.com/attachment/80/source/15c9401c7a7b2f785ad66ff1b9292061.jpg",
  shiwan_yubingshao_30: "https://gbaike-image.cdn.bcebos.com/a50f4bfbfbedab6450c4ed5bfb36afc378311ef2/a50f4bfbfbedab6450c4ed5bfb36afc378311ef2_url?x-bce-process=image/format,f_auto/resize,m_lfit,h_1024,limit_1",
  jiujiang_shuangzheng:"https://gbaike-image.cdn.bcebos.com/b3b7d0a20cf431ada0ff8c134636acaf2edd98ef/b3b7d0a20cf431ada0ff8c134636acaf2edd98ef_url?x-bce-process=image/format,f_auto/resize,m_lfit,h_1024,limit_1",
  jiujiang_shuangzheng_classic:""
};


/* ─────────────────────────────────────────────────────────────
   2. POOLS D'IMAGES GÉNÉRIQUES (Unsplash)
   Utilisées comme fallback pour articles/producteurs sans image dédiée.
   Toutes pointent vers Unsplash avec paramètres optimisés (1600px, q85).
───────────────────────────────────────────────────────────── */

const IMG = (id) => `https://images.unsplash.com/photo-${id}?crop=entropy&cs=srgb&fm=jpg&w=1600&q=85`;

// POOL_B — Pool d'images pour le Baijiu (ambiances sombres, spiritueux, cérémonies)
export const POOL_B = {
  a: IMG("1558618666-fcd25c85cd64"),  // Verre de spiritueux ambré sur fond sombre
  b: IMG("1547595628-c61a29f496f0"),  // Bouteilles alignées en cave / étagère
  c: IMG("1569949381669-ecf31ae8e613"), // Céramique / poterie artisanale chinoise
  d: IMG("1583623025817-d180a2221d0a"), // Grains de sorgho / céréales en vrac
  e: IMG("1505935428862-770b6f24f629"), // Paysage montagneux brumeux (Chine intérieure)
  f: IMG("1508804185872-d7badad00f7d"), // Rivière et falaises — paysage de Guizhou
  g: IMG("1545048702-79362596cdc9"),   // Fûts ou cuves de fermentation en bois
  h: IMG("1684606308245-a4784b99cea2"), // Intérieur de distillerie / lumière chaude
};

// POOL_W — Pool d'images pour les Vins chinois (vignes, bouteilles, paysages viticoles)
export const POOL_W = {
  a: IMG("1510972527921-ce03766a1cf1"), // Vignes en automne — feuilles rouges et or
  b: IMG("1726981897998-e9e7d981e26a"), // Rangées de vignes au coucher du soleil
  c: IMG("1684606308245-a4784b99cea2"), // Intérieur de cave / chais
  d: IMG("1547595628-c61a29f496f0"),    // Bouteilles de vin en étagère
  e: IMG("1569949381669-ecf31ae8e613"), // Céramique / carafe de dégustation
  f: IMG("1506377247377-2a5b3b417ebb"), // Verre de vin rouge — gros plan
};
