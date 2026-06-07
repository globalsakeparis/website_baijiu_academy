# 📸 Référence des Images — Baijiu Encyclopedia

Modifiez les URLs dans ce fichier, puis reportez-les dans `js/config.js` dans l'objet `IMAGES`.

---

## 🗂️ Images locales (dossier `/images/`)

| Clé `IMAGES`   | Fichier                          | Utilisé dans                          |
|----------------|----------------------------------|---------------------------------------|
| `home_banner`  | `images/home_banner.jpeg`        | Hero de la page d'accueil             |
| `fermentation` | `images/baijiu_fermentation.png` | Page d'accueil (intro) + Baijiu       |
| `castle`       | `images/castle.png`              | Pages diverses                        |
| `exhibition`   | `images/exhibition.jpeg`         | Page Exposition / Événements          |
| `map`          | `images/china.png`               | Page Baijiu (carte)                   |
| `winemap`      | `images/wine-china.png`          | Page Chinese Wine (carte)             |

> ⚠️ Le fichier `images/exibition.jpeg` a été renommé en `images/exhibition.jpeg` (faute corrigée).

---

## 🌐 Images distantes (URLs externes)

### Baijiu général

| Clé `IMAGES`   | Description                         | URL actuelle |
|----------------|-------------------------------------|--------------|
| `landscape`    | Paysage chinois (bannière maison)   | Unsplash — `1508804185872-d7badad00f7d` |
| `plant`        | Sorgho / grain de baijiu            | wsetglobal.com |
| `moutai`       | Bouteille Kweichow Moutai           | barnews.ch |
| `moutai2`      | Bouteille Kweichow Moutai (alt)     | barnews.ch *(même URL que `moutai`)* |
| `cultural`     | Spiritueux chinois / liqueur        | shutterstock.com |
| `event`        | Photo événement                     | img.12go.asia |
| `sorghum`      | Sorgho / fermentation               | spiritsselection.com |
| `paris`        | Paris (vue générale)                | Unsplash — `1502602898657-3e91760cbb34` |
| `sauce_aroma`  | Bouteilles de baijiu (ambiance)     | img.20mn.fr |
| `langjiu`      | Langjiu — étude de marque           | english.ckgsb.edu.cn |

### Vins chinois — Régions

| Clé `IMAGES`   | Région                 | URL actuelle |
|----------------|------------------------|--------------|
| `temple`       | Temple (ambiance vin)  | magazine-fr.wein.plus |
| `changyu`      | Yantai / vignoble      | asialyst.com |
| `wineBottle`   | Bouteille de vin       | Unsplash — `1670065921509-d0e0d053355b` |
| `ningxia`      | Terrasses Ningxia      | vinodelice.com |
| `yantai`       | Pavillon Penglai       | discoverplaces.travel |
| `xinjiang`     | Xinjiang               | res.klook.com |
| `yunnan`       | Yunnan / Lijiang       | yunnan-roads.fr |
| `heibei`       | Grande Muraille        | thumbs.dreamstime.com |
| `shanxi`       | Shanxi                 | chineescapade.com |

### Vins chinois — Domaines / Produits

| Clé `IMAGES`              | Domaine / Produit            | URL actuelle |
|---------------------------|------------------------------|--------------|
| `helan_quingxue`          | Helan Qingxue Jia Bei Lan    | 1855thebottleshop.com |
| `silver_heights`          | Silver Heights               | static.wixstatic.com |
| `ao_yun`                  | Ao Yun — Yunnan 2015         | drzx03g1xem1q.cloudfront.net |
| `changyu_pioner_wine`     | Château Changyu              | upload.wikimedia.org |
| `jia_bei_lan_grand_reserve` | Jia Bei Lan Grand Reserve  | decanterchina.com |
| `jia_bei_lan_reserve`     | Jia Bei Lan Reserve          | decanterchina.com |
| `jia_bei_lan_chardonnay`  | Jia Bei Lan Chardonnay       | kerrywines.com |
| `the_summit`              | The Summit                   | rawwine.com |
| `family_reserve`          | Family Reserve               | oldstcroix.com |
| `tiansai`                 | Tiansai Vineyards            | decantershanghai.com |
| `tiansai_reserve`         | Tiansai Reserve              | decanterchina.com |
| `silkroad_wine`           | Silk Road Wines              | silkroadwines.com |

---

## 🎲 Pools d'images génériques (Unsplash)

Utilisées dynamiquement pour les articles/cartes sans image spécifique.

### `POOL_B` — Baijiu

| Clé | ID Unsplash                        |
|-----|------------------------------------|
| `a` | `1558618666-fcd25c85cd64`          |
| `b` | `1547595628-c61a29f496f0`          |
| `c` | `1569949381669-ecf31ae8e613`       |
| `d` | `1583623025817-d180a2221d0a`       |
| `e` | `1505935428862-770b6f24f629`       |
| `f` | `1508804185872-d7badad00f7d`       |
| `g` | `1545048702-79362596cdc9`          |
| `h` | `1684606308245-a4784b99cea2`       |

### `POOL_W` — Wine

| Clé | ID Unsplash                        |
|-----|------------------------------------|
| `a` | `1510972527921-ce03766a1cf1`       |
| `b` | `1726981897998-e9e7d981e26a`       |
| `c` | `1684606308245-a4784b99cea2`       |
| `d` | `1547595628-c61a29f496f0`          |
| `e` | `1569949381669-ecf31ae8e613`       |
| `f` | `1506377247377-2a5b3b417ebb`       |

---

## ✅ Bugs corrigés dans cette version

| Bug | Avant | Après |
|-----|-------|-------|
| Nom de fichier | `images/exibition.jpeg` | `images/exhibition.jpeg` |
| Clé IMAGES | `exhibition: "images/exibition.jpeg"` | `exhibition: "images/exhibition.jpeg"` |
| Clé dupliquée | `silver_heights` défini 2 fois | 1 seule définition (2ème URL conservée) |
| Email (partout) | `baijiucadademy.com` | `baijiuacademy.com` |
| Champ `phone` EN | `"Contact@baijiuacademy.com"` | `"+33 6 00 00 00 00"` |
