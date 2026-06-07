/* PAGE: BAIJIU — Region filter sidebar + 12 aroma types + detail pages */
import { FLAVORS } from '../js/data.js';
import { arrowSVG } from '../js/helpers.js';
import { IMAGES } from '../js/config.js';

/* ─── REGION NORMALIZATION MAP ─── */
/*
 * Cards store regions as EN lowercase (from data.js: "Guizhou" → "guizhou").
 * Buttons pass r.toLowerCase() from the active lang config:
 *   EN  → "guizhou", "beijing", …          (already EN lowercase → identity)
 *   FR  → "pékin", "guizhou", …            (only Beijing differs)
 *   ZH  → "贵州", "北京", …               (CJK, toLowerCase is no-op)
 * This map normalises every incoming key to its EN canonical form.
 */
const REGION_MAP = {
  /* EN (identity — keeps fallback logic simple) */
  'guizhou':'guizhou','sichuan':'sichuan','jiangsu':'jiangsu','anhui':'anhui',
  'henan':'henan','shanxi':'shanxi','beijing':'beijing','hebei':'hebei',
  'guangxi':'guangxi','guangdong':'guangdong','shaanxi':'shaanxi','hubei':'hubei','shandong':'shandong',
  'hunan':'hunan','jiangxi':'jiangxi',
  /* FR aliases */
  'pékin':'beijing',
  /* ZH aliases */
  '贵州':'guizhou','四川':'sichuan','江苏':'jiangsu','安徽':'anhui',
  '河南':'henan','山西':'shanxi','北京':'beijing','河北':'hebei',
  '广西':'guangxi','广东':'guangdong','陕西':'shaanxi','湖北':'hubei','山东':'shandong',
  '湖南':'hunan','江西':'jiangxi',
};

/* Exposed globally so the onclick handlers in the HTML can reach it */
window.filterRegion = function filterRegion(btn, region) {
  document.querySelectorAll('.region-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const cards = document.querySelectorAll('.aroma-card');
  let visible = 0;

  cards.forEach(card => {
    if (region === 'all') {
      card.classList.remove('hidden');
      visible++;
    } else {
      const cardRegions = card.dataset.regions || '';
      const normalizedRegion = REGION_MAP[region] || region;
      const normalizedCard   = cardRegions.split(',').map(r => REGION_MAP[r.trim()] || r.trim());
      if (normalizedCard.includes(normalizedRegion)) {
        card.classList.remove('hidden');
        visible++;
      } else {
        card.classList.add('hidden');
      }
    }
  });

  /* Update count label */
  const countLabel = document.getElementById('aroma-count-label');
  const aromasTitle = document.getElementById('aroma-count-label')?.dataset.title || '';
  if (countLabel) countLabel.textContent = `${aromasTitle} — ${visible}`;

  /* Show/hide empty-state message */
  const noResults = document.getElementById('no-results');
  if (noResults) noResults.style.display = visible === 0 ? 'block' : 'none';

  /* Persist active filter so returning from a flavor page restores it */
  try { sessionStorage.setItem('bj-region-filter', region); } catch(_) {}
};

/* ─── MAIN BAIJIU PAGE ─── */
export function renderBaijiu(t, lang) {
  const tr = t().baijiu;

  const aromaCards = FLAVORS.map((f, i) => {
    const regionList = f.regions.join(', ');
    const name = f.name[lang] || f.name.en;
    return `
      <a href="/baijiu/${f.slug}" data-nav="/baijiu/${f.slug}"
        class="aroma-card reveal"
        style="--aroma-color:${f.color};transition-delay:${i*40}ms;"
        data-regions="${f.regions.join(',').toLowerCase()}">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;">
          <span class="aroma-num">${String(i+1).padStart(2,'0')}</span>
          <span class="aroma-zh">${f.nameZh}</span>
        </div>
        <div class="aroma-name">${name}</div>
        <div class="aroma-regions">${regionList}</div>
        <div style="margin-top:auto;padding-top:0.75rem;display:flex;align-items:center;gap:0.4rem;font-family:'Outfit',sans-serif;font-weight:600;letter-spacing:0.2em;text-transform:uppercase;color:var(--ink-3);">
          ${lang === 'zh' ? '了解更多' : lang === 'fr' ? 'Voir plus' : 'Learn more'} ${arrowSVG(12)}
        </div>
      </a>`;
  }).join('');

  const regionBtns = tr.regions.map(r => `
    <button class="region-btn" data-region="${r.toLowerCase()}" onclick="filterRegion(this,'${r.toLowerCase()}')">${r}</button>
  `).join('');

  const aromasTitle = tr.aromasTitle || 'Aroma types';

  return `
<div class="page-entry">

  <!-- HEADER -->
  <section class="section-sm">
    <div class="wrapper">
      <div class="reveal">
        <p class="label mb-2">${tr.overline}</p>
        <h1>${tr.title}</h1>
        <p class="lead max-prose mt-3">${tr.lead}</p>
      </div>
    </div>
  </section>

  <!-- HERO IMAGE -->
  <div class="wrapper-wide reveal" style="margin-bottom:3rem;">
    <div class="img-wrap ratio-4-3 no-zoom" style="border-radius:4px;max-width:1000px;margin-left:auto;margin-right:auto;">
      <img src="${IMAGES.map}" alt="Flavor Map of Chinese Baijiu" loading="lazy" style="object-fit:contain;background:#f5f0e8;"/>
    </div>
  </div>

  <!-- FILTER + GRID LAYOUT -->
  <section class="section-sm">
    <div class="wrapper">
      <div class="baijiu-layout" style="gap:2rem;">

        <!-- LEFT SIDEBAR: REGION FILTER -->
        <aside class="region-sidebar reveal">
          <div class="region-sidebar-title">${tr.regionFilter}</div>
          <button class="region-btn active" data-region="all" onclick="filterRegion(this,'all')">${tr.allRegions}</button>
          <div style="height:1px;background:var(--border);margin:0.75rem 0;"></div>
          ${regionBtns}
        </aside>

        <!-- RIGHT: AROMA CARDS -->
        <div>
          <div class="section-title-block" style="margin-bottom:1.5rem;">
            <p class="label" id="aroma-count-label" data-title="${aromasTitle}">${aromasTitle} — ${FLAVORS.length}</p>
            <div class="divider-line"></div>
          </div>
          <div class="aroma-grid" id="aroma-grid">
            ${aromaCards}
          </div>
          <p id="no-results" style="display:none;padding:2rem;color:var(--ink-3);">
            ${lang === 'zh' ? '该产区没有符合的香型。' : lang === 'fr' ? 'Aucun type aromatique pour cette région.' : 'No aroma types found for this region.'}
          </p>
        </div>

      </div>
    </div>
  </section>

  <!-- PRODUCTION NOTE -->
  <section class="section section-cream">
    <div class="wrapper">
      <div class="grid-2" style="gap:4rem;align-items:center;">
        <div class="reveal">
          <div class="img-wrap ratio-4-3" style="border-radius:4px;">
            <img src="${IMAGES.fermentation}" alt="Baijiu fermentation pits" loading="lazy"/>
          </div>
        </div>
        <div class="reveal" style="transition-delay:100ms;">
          <p class="label mb-2">${lang === 'zh' ? '生产工艺' : lang === 'fr' ? 'Processus de production' : 'Production Process'}</p>
          <h3 class="serif" style="margin-bottom:1.25rem;">${lang === 'zh' ? '固态发酵：让白酒与众不同的关键' : lang === 'fr' ? 'La fermentation à l\'état solide : ce qui rend le Baijiu unique' : 'Solid-state fermentation: what makes Baijiu unique'}</h3>
          <p style="color:var(--ink-2);line-height:1.75;">${lang === 'zh' ? '与西方烈酒的液态发酵不同，白酒的固态发酵将粮食、曲和水混合成半干的混合物，在特定容器中发酵。这种方法在数百种芳香化合物中产生无与伦比的复杂性。不同香型使用不同类型的曲（高温、中温或低温）和不同的容器（土窖、石窖、陶缸），产生截然不同的风味特征。' : lang === 'fr' ? 'Contrairement à la fermentation liquide des spiritueux occidentaux, la fermentation à l\'état solide du Baijiu mélange le grain, le qu et l\'eau en un mélange semi-sec qui fermente dans des récipients spécifiques. Cette méthode produit une complexité inégalée dans des centaines de composés aromatiques. Les différents types aromatiques utilisent différents types de qu et différents récipients, produisant des profils de saveur radicalement distincts.' : 'Unlike the liquid fermentation of Western spirits, Baijiu\'s solid-state fermentation mixes grain, qu, and water into a semi-dry mixture that ferments in specific containers. This method produces unparalleled complexity across hundreds of aromatic compounds. Different aroma types use different qu types (high-, medium-, or low-temperature) and different vessels (earthen pits, stone vats, ceramic containers), producing radically distinct flavor profiles.'}</p>
        </div>
      </div>
    </div>
  </section>

</div>`;
}

/* ─── AROMA DETAIL PAGE ─── */
export function renderBaijiuFlavor(slug, t, lang) {
  const idx    = FLAVORS.findIndex(f => f.slug === slug);
  const flavor = FLAVORS[idx];
  if (!flavor) return renderBaijiu(t, lang);

  const prev = idx > 0                  ? FLAVORS[idx - 1] : null;
  const next = idx < FLAVORS.length - 1 ? FLAVORS[idx + 1] : null;

  const tr = t().baijiu;
  const name = flavor.name[lang] || flavor.name.en;
  const desc = flavor.description[lang] || flavor.description.en;
  const science = flavor.science[lang] || flavor.science.en;

  const backLabel      = lang === 'zh' ? '白酒' : 'Baijiu';
  const homeLabel      = lang === 'zh' ? '首页' : lang === 'fr' ? 'Accueil' : 'Home';
  const producersTitle = tr.producersTitle || 'Key Producers';
  const scienceTitle   = lang === 'zh' ? '科学解析' : lang === 'fr' ? 'La science' : 'The Science';
  const videoTitle     = lang === 'zh' ? '视频介绍' : lang === 'fr' ? 'Présentation vidéo' : 'Video Introduction';
  const prevLabel      = lang === 'zh' ? '上一个' : lang === 'fr' ? 'Précédent' : 'Previous';
  const nextLabel      = lang === 'zh' ? '下一个' : lang === 'fr' ? 'Suivant'   : 'Next';

  return `
<div class="page-entry">

  <!-- HEADER -->
  <section class="section-sm">
    <div class="wrapper">

      <!-- BREADCRUMB -->
      <nav class="breadcrumb" aria-label="breadcrumb">
        <a href="/" data-nav="/" class="breadcrumb-item">${homeLabel}</a>
        <span class="breadcrumb-sep">›</span>
        <a href="/baijiu" data-nav="/baijiu" class="breadcrumb-item">${backLabel}</a>
        <span class="breadcrumb-sep">›</span>
        <span class="breadcrumb-item breadcrumb-current">${name}</span>
      </nav>

      <div class="reveal" style="margin-top:1rem;">
        <div class="aroma-hero-meta">
          <div class="aroma-color-dot" style="background:${flavor.color};"></div>
          <p class="label">${flavor.nameZh}</p>
          <span class="aroma-index-badge">${String(idx + 1).padStart(2,'0')} / ${FLAVORS.length}</span>
          <div class="aroma-region-tags">
            ${flavor.regions.map(r => `<span class="tag">${r}</span>`).join('')}
          </div>
        </div>
        <h1>${name}</h1>
      </div>
    </div>
  </section>

  <!-- DESCRIPTION -->
  <section class="section-sm">
    <div class="wrapper">
      <div class="reveal max-prose">
        <p class="lead">${desc}</p>
      </div>
    </div>
  </section>

  <!-- VIDEO -->
  <section class="section section-cream">
    <div class="wrapper">
      <div class="reveal">
        <div class="section-title-block mb-3">
          <p class="label">${videoTitle}</p>
          <div class="divider-line"></div>
        </div>
        <div class="video-embed">
          <iframe
            src="${flavor.video}"
            title="${name} — ${flavor.nameZh}"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe>
        </div>
      </div>
    </div>
  </section>

  <!-- SCIENCE -->
  <section class="section">
    <div class="wrapper">
      <div class="reveal">
        <div class="science-box">
          <h4>${scienceTitle}</h4>
          <p>${science}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- KEY PRODUCERS -->
  <section class="section section-cream">
    <div class="wrapper">
      <div class="reveal">
        <div class="section-title-block mb-3">
          <p class="label">${producersTitle}</p>
          <div class="divider-line"></div>
        </div>
        <div class="producers-grid">
          ${flavor.producers.map(p => `
            <a href="/producer/${p.slug}" data-nav="/producer/${p.slug}" class="producer-chip">
              ${p.name}
            </a>
          `).join('')}
        </div>
      </div>
    </div>
  </section>

  <!-- PREV / NEXT NAV -->
  <nav class="flavor-nav">
    <div class="wrapper">
      <div class="flavor-nav-inner">
        ${prev ? `
        <a href="/baijiu/${prev.slug}" data-nav="/baijiu/${prev.slug}" class="flavor-nav-btn flavor-nav-prev">
          <span class="flavor-nav-dir">← ${prevLabel}</span>
          <span class="flavor-nav-name">${prev.name[lang] || prev.name.en}</span>
        </a>` : `<div></div>`}
        ${next ? `
        <a href="/baijiu/${next.slug}" data-nav="/baijiu/${next.slug}" class="flavor-nav-btn flavor-nav-next">
          <span class="flavor-nav-dir">${nextLabel} →</span>
          <span class="flavor-nav-name">${next.name[lang] || next.name.en}</span>
        </a>` : `<div></div>`}
      </div>
    </div>
  </nav>

  <!-- BACK CTA -->
  <section class="section-sm" style="background:var(--ink);">
    <div class="wrapper" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1.5rem;">
      <div>
        <p style="color:rgba(255,255,255,0.5);font-size:11px;letter-spacing:0.25em;text-transform:uppercase;font-weight:600;margin-bottom:0.5rem;">${lang === 'zh' ? '继续探索' : lang === 'fr' ? 'Continuer l\'exploration' : 'Continue exploring'}</p>
        <h3 class="serif" style="color:#fff;font-size:clamp(1.1rem,2vw,1.5rem);">${lang === 'zh' ? '返回所有香型' : lang === 'fr' ? 'Retour à tous les types aromatiques' : 'Back to all aroma types'}</h3>
      </div>
      <a href="/baijiu" data-nav="/baijiu" class="btn btn-ghost-white">${lang === 'zh' ? '所有香型' : lang === 'fr' ? 'Tous les types' : 'All aroma types'} ${arrowSVG()}</a>
    </div>
  </section>

</div>`;
}
