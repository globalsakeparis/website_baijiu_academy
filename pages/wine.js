/* PAGE: CHINESE WINE — region list · estate detail · product fiche */
import { REGIONS, WINE_BRANDS } from '../js/data.js';
import { IMAGES } from '../js/config.js';
import { arrowSVG } from '../js/helpers.js';

/* ─────────────────────────────────────────────────
   SHARED HELPERS
───────────────────────────────────────────────── */
function L(obj, lang) { return obj[lang] || obj.en; }

function colorBadge(type, lang) {
  const t = L(type, lang).toLowerCase();
  let bg = '#8b1a2e', label = L(type, lang);
  if (t.includes('blanc') || t.includes('white')) bg = '#c8a96e';
  if (t.includes('rosé') || t.includes('rose'))  bg = '#e0826a';
  return `<span class="wine-type-badge" style="background:${bg};">${label}</span>`;
}

/* Exposed globally so onclick handlers in the HTML can reach it — same
   pattern as window.filterRegion in baijiu.js. Must live at module level
   (not inside a <script> injected via innerHTML) to actually execute. */
window.toggleFiche = function(id) {
  const panel   = document.getElementById(id);
  const chevron = document.getElementById(id + '-chevron');
  if (!panel) return;
  const open = panel.classList.toggle('is-open');
  panel.setAttribute('aria-hidden', String(!open));
  if (chevron) chevron.style.transform = open ? 'rotate(180deg)' : 'rotate(0deg)';
};

/* ─────────────────────────────────────────────────
   1.  MAIN WINE PAGE (region 2×3 grid)
───────────────────────────────────────────────── */
export function renderChineseWine(t, lang) {
  const tr = t().wine;
  const regTitle = lang==='zh' ? '六大产区' : lang==='fr' ? 'Régions viticoles' : 'Wine Regions';

  return `
<div class="page-entry">

  <section class="section-sm">
    <div class="wrapper">
      <div class="reveal">
        <p class="label mb-2">${tr.overline}</p>
        <h1>${tr.title}</h1>
        <p class="lead max-prose mt-3">${tr.lead}</p>
      </div>
    </div>
  </section>

  <div class="wrapper-wide reveal" style="margin-bottom:4rem;">
    <div class="img-wrap ratio-4-3 no-zoom" style="border-radius:4px;max-width:900px;margin-left:auto;margin-right:auto;">
      <img src="${IMAGES.winemap}" alt="Chinese wine regions map" loading="lazy" style="object-fit:contain;background:#f5f0e8;"/>
    </div>
  </div>


  <!-- REGION GRID 2×3 -->
  <section class="section">
    <div class="wrapper">
      <div class="reveal">
        <div class="section-title-block mb-4">
          <p class="label">${regTitle}</p>
          <div class="divider-line"></div>
        </div>
      </div>
      <div class="wine-regions-grid reveal">
        ${REGIONS.map((r,i)=>`
          <a href="/chinese-wine/${r.slug}" data-nav="/chinese-wine/${r.slug}"
             class="wine-region-btn" style="transition-delay:${i*60}ms;">
            <span class="wine-region-btn-icon">${r.icon}</span>
            <span class="wine-region-btn-zh">${r.nameZh}</span>
            <span class="wine-region-btn-name">${r.name}</span>
            <span class="wine-region-btn-climate">${L(r.climate,lang)}</span>
            <span class="wine-region-btn-estates">
              ${r.estates.map(e=>`<span>${e.name}</span>`).join('<span class="sep">·</span>')}
            </span>
            <span class="wine-region-btn-arrow">${arrowSVG(14)}</span>
          </a>`).join('')}
      </div>
    </div>
  </section>

  <!-- FEATURED ESTATES -->
  <section class="section section-dark">
    <div class="wrapper">
      <div class="reveal">
        <p class="label label-gold mb-2">${lang==='zh'?'旗舰酒庄':lang==='fr'?'Domaines phares':'Flagship Estates'}</p>
        <h2 style="color:#fff;margin-bottom:3rem;">${lang==='zh'?'中国葡萄酒的标杆':lang==='fr'?'Les références du vin chinois':'The benchmarks of Chinese wine'}</h2>
      </div>
      <div class="grid-2" style="gap:1.5rem;">
        ${WINE_BRANDS.map((wb,i)=>`
          <div class="reveal" style="transition-delay:${i*60}ms;">
            <div style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.08);border-radius:4px;padding:2rem;display:flex;flex-direction:column;gap:0.75rem;">
              <div style="display:flex;align-items:baseline;justify-content:space-between;gap:1rem;">
                <h3 style="color:#fff;font-size:1.2rem;">${wb.name}</h3>
                <span style="font-family:'Outfit',sans-serif;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:var(--gold-light);white-space:nowrap;">${wb.region.toUpperCase()}</span>
              </div>
              <p style="font-size:0.875rem;color:rgba(255,255,255,0.6);line-height:1.65;">${L(wb.desc,lang)}</p>
            </div>
          </div>`).join('')}
      </div>
    </div>
  </section>

</div>`;
}

/* ─────────────────────────────────────────────────
   2.  REGION DETAIL PAGE (estate buttons)
───────────────────────────────────────────────── */
export function renderWineRegion(slug, t, lang) {
  const region = REGIONS.find(r=>r.slug===slug);
  if (!region) return renderChineseWine(t, lang);

  const homeLabel  = lang==='zh'?'首页':lang==='fr'?'Accueil':'Home';
  const wineLabel  = lang==='zh'?'中国葡萄酒':lang==='fr'?'Vins de Chine':'Chinese Wine';
  const estTitle   = lang==='zh'?'三大酒庄':lang==='fr'?'Trois domaines emblématiques':'Three flagship estates';
  const prodCount  = lang==='zh'?'款葡萄酒':lang==='fr'?'vins':' wines';
  const prevLabel  = lang==='zh'?'上一产区':lang==='fr'?'Précédente':'Previous';
  const nextLabel  = lang==='zh'?'下一产区':lang==='fr'?'Suivante':'Next';

  const idx  = REGIONS.findIndex(r=>r.slug===slug);
  const prev = idx > 0 ? REGIONS[idx-1] : null;
  const next = idx < REGIONS.length-1 ? REGIONS[idx+1] : null;

  return `
<div class="page-entry">

  <section class="section-sm">
    <div class="wrapper">
      <nav class="breadcrumb" aria-label="breadcrumb">
        <a href="/" data-nav="/" class="breadcrumb-item">${homeLabel}</a>
        <span class="breadcrumb-sep">›</span>
        <a href="/chinese-wine" data-nav="/chinese-wine" class="breadcrumb-item">${wineLabel}</a>
        <span class="breadcrumb-sep">›</span>
        <span class="breadcrumb-item breadcrumb-current">${region.name}</span>
      </nav>
      <div class="reveal" style="margin-top:1.25rem;">
        <div style="display:flex;align-items:center;gap:1rem;margin-bottom:0.75rem;">
          <span style="font-size:2rem;">${region.icon}</span>
          <p class="label">${region.nameZh}</p>
        </div>
        <h1>${region.name}</h1>
        <p class="lead max-prose mt-3">${L(region.desc,lang)}</p>
      </div>
      <div class="reveal" style="margin-top:2rem;display:flex;flex-wrap:wrap;gap:1rem;">
        <div class="wine-region-fact">
          <span class="wine-region-fact-key">${lang==='zh'?'气候':lang==='fr'?'Climat':'Climate'}</span>
          <span class="wine-region-fact-val">${L(region.climate,lang)}</span>
        </div>
        <div class="wine-region-fact">
          <span class="wine-region-fact-key">${lang==='zh'?'主要品种':lang==='fr'?'Cépages':'Key varieties'}</span>
          <span class="wine-region-fact-val">${L(region.grapes,lang)}</span>
        </div>
      </div>
    </div>
  </section>

  <div class="wrapper-wide reveal" style="margin-bottom:4rem;">
    <div class="img-wrap ratio-21-9" style="border-radius:4px;">
      <img src="${region.image}" alt="${region.name}" loading="lazy"/>
    </div>
  </div>

  <!-- ESTATE BUTTONS -->
  <section class="section section-cream">
    <div class="wrapper">
      <div class="reveal">
        <div class="section-title-block mb-4">
          <p class="label">${estTitle}</p>
          <div class="divider-line"></div>
        </div>
      </div>
      <div class="wine-estate-grid reveal">
        ${region.estates.map((e,i)=>`
          <a href="/chinese-wine/${region.slug}/${e.slug}"
             data-nav="/chinese-wine/${region.slug}/${e.slug}"
             class="wine-estate-card" style="transition-delay:${i*80}ms;">
            <div class="wine-estate-card-img">
              <img src="${e.image}" alt="${e.name}" loading="lazy"/>
            </div>
            <div class="wine-estate-card-body">
              <span class="wine-estate-card-zh">${e.nameZh}</span>
              <h3 class="wine-estate-card-name">${e.name}</h3>
              <p class="wine-estate-card-founded">${lang==='zh'?'创立于':lang==='fr'?'Fondé en':'Est.'} ${e.founded}</p>
              <p class="wine-estate-card-desc">${L(e.desc,lang)}</p>
              <div class="wine-estate-card-footer">
                <span class="wine-estate-card-count">${e.products.length} ${prodCount}</span>
                <span class="wine-estate-card-cta">
                  ${lang==='zh'?'查看详情':lang==='fr'?'Voir le domaine':'View estate'} ${arrowSVG(13)}
                </span>
              </div>
            </div>
          </a>`).join('')}
      </div>
    </div>
  </section>

  <!-- PREV / NEXT -->
  <nav class="flavor-nav">
    <div class="wrapper">
      <div class="flavor-nav-inner">
        ${prev?`<a href="/chinese-wine/${prev.slug}" data-nav="/chinese-wine/${prev.slug}" class="flavor-nav-btn flavor-nav-prev">
          <span class="flavor-nav-dir">← ${prevLabel}</span>
          <span class="flavor-nav-name">${prev.icon} ${prev.name}</span>
        </a>`:`<div></div>`}
        ${next?`<a href="/chinese-wine/${next.slug}" data-nav="/chinese-wine/${next.slug}" class="flavor-nav-btn flavor-nav-next">
          <span class="flavor-nav-dir">${nextLabel} →</span>
          <span class="flavor-nav-name">${next.icon} ${next.name}</span>
        </a>`:`<div></div>`}
      </div>
    </div>
  </nav>

</div>`;
}

/* ─────────────────────────────────────────────────
   3.  ESTATE DETAIL PAGE (info + product cards with fiche)
───────────────────────────────────────────────── */
export function renderWineEstate(regionSlug, estateSlug, t, lang) {
  const region = REGIONS.find(r=>r.slug===regionSlug);
  if (!region) return renderChineseWine(t, lang);
  const estate = region.estates.find(e=>e.slug===estateSlug);
  if (!estate) return renderWineRegion(regionSlug, t, lang);

  const homeLabel    = lang==='zh'?'首页':lang==='fr'?'Accueil':'Home';
  const wineLabel    = lang==='zh'?'中国葡萄酒':lang==='fr'?'Vins de Chine':'Chinese Wine';
  const prodTitle    = lang==='zh'?'葡萄酒产品':lang==='fr'?'Vins du domaine':'Estate wines';
  const ficheLabel   = lang==='zh'?'技术档案':lang==='fr'?'Fiche technique':'Technical sheet';
  const closeLabel   = lang==='zh'?'收起':lang==='fr'?'Fermer':'Close';
  const foundLabel   = lang==='zh'?'创立于':lang==='fr'?'Fondé en':'Founded';
  const noseLabel    = lang==='zh'?'香气':lang==='fr'?'Nez':'Nose';
  const palateLabel  = lang==='zh'?'口感':lang==='fr'?'Bouche':'Palate';
  const finishLabel  = lang==='zh'?'余味':lang==='fr'?'Finale':'Finish';
  const agingLabel   = lang==='zh'?'陈酿':lang==='fr'?'Élevage':'Ageing';
  const tempLabel    = lang==='zh'?'侍酒温度':lang==='fr'?'Température de service':'Serving temp.';
  const grapeLabel   = lang==='zh'?'葡萄品种':lang==='fr'?'Cépage(s)':'Grape variety';
  const abvLabel     = lang==='zh'?'酒精度':lang==='fr'?'Alcool':'ABV';
  const priceLabel   = lang==='zh'?'参考价格':lang==='fr'?'Prix indicatif':'Price';
  const vintLabel    = lang==='zh'?'年份':lang==='fr'?'Millésime':'Vintage';
  const backLabel    = lang==='zh'?'返回产区':lang==='fr'?'Retour à la région':'Back to region';

  /* prev/next estates within same region */
  const eIdx  = region.estates.findIndex(e=>e.slug===estateSlug);
  const ePrev = eIdx > 0 ? region.estates[eIdx-1] : null;
  const eNext = eIdx < region.estates.length-1 ? region.estates[eIdx+1] : null;
  const prevLabel = lang==='zh'?'上一酒庄':lang==='fr'?'Précédent':'Previous';
  const nextLabel = lang==='zh'?'下一酒庄':lang==='fr'?'Suivant':'Next';

  function ficheTable(p) {
    const rows = [
      [vintLabel,   p.vintage],
      [grapeLabel,  L(p.grapes,lang)],
      [abvLabel,    p.abv],
      [agingLabel,  L(p.aging,lang)],
      [tempLabel,   p.temp],
      [priceLabel,  L(p.price,lang)],
    ];
    return rows.map(([k,v])=>`
      <div class="fiche-row">
        <span class="fiche-key">${k}</span>
        <span class="fiche-val">${v}</span>
      </div>`).join('');
  }

  function productCard(p, i) {
    const id = `fiche-${p.slug}`;
    return `
    <div class="wine-product-card reveal" style="transition-delay:${i*70}ms;">
      <div class="wine-product-card-header">
        <div class="wine-product-card-img">
          <img src="${p.image}" alt="${p.name}" loading="lazy"/>
        </div>
        <div class="wine-product-card-meta">
          ${colorBadge(p.type,lang)}
          <span class="wine-product-card-zh">${p.nameZh}</span>
          <h3 class="wine-product-card-name">${p.name}</h3>
          <p class="wine-product-card-vintage">${vintLabel} ${p.vintage}</p>
          <p class="wine-product-card-grapes">${L(p.grapes,lang)}</p>
          <div class="wine-product-card-pills">
            <span class="wine-pill">${p.abv}</span>
            <span class="wine-pill">${L(p.price,lang)}</span>
            <span class="wine-pill">${p.temp}</span>
          </div>
          <button class="wine-fiche-btn" onclick="window.toggleFiche('${id}')">
            <span id="${id}-label">${ficheLabel}</span>
            <svg width="13" height="13" viewBox="0 0 16 16" id="${id}-chevron" style="transform:rotate(0deg);transition:transform .25s;flex-shrink:0"><path d="M2 5l6 6 6-6" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round"/></svg>
          </button>
        </div>
      </div>

      <!-- FICHE TECHNIQUE -->
      <div class="wine-fiche-panel" id="${id}" aria-hidden="true">
        <div class="wine-fiche-inner">
          <div class="fiche-section">
            <div class="fiche-grid">
              ${ficheTable(p)}
            </div>
          </div>
          <div class="fiche-tasting">
            <div class="fiche-tasting-row">
              <span class="fiche-tasting-key">${noseLabel}</span>
              <span class="fiche-tasting-val">${L(p.nose,lang)}</span>
            </div>
            <div class="fiche-tasting-row">
              <span class="fiche-tasting-key">${palateLabel}</span>
              <span class="fiche-tasting-val">${L(p.palate,lang)}</span>
            </div>
            <div class="fiche-tasting-row">
              <span class="fiche-tasting-key">${finishLabel}</span>
              <span class="fiche-tasting-val">${L(p.finish,lang)}</span>
            </div>
          </div>
          <button class="fiche-close-btn" onclick="window.toggleFiche('${id}')">${closeLabel}</button>
        </div>
      </div>
    </div>`;
  }

  return `
<div class="page-entry">

  <section class="section-sm">
    <div class="wrapper">
      <nav class="breadcrumb" aria-label="breadcrumb">
        <a href="/" data-nav="/" class="breadcrumb-item">${homeLabel}</a>
        <span class="breadcrumb-sep">›</span>
        <a href="/chinese-wine" data-nav="/chinese-wine" class="breadcrumb-item">${wineLabel}</a>
        <span class="breadcrumb-sep">›</span>
        <a href="/chinese-wine/${region.slug}" data-nav="/chinese-wine/${region.slug}" class="breadcrumb-item">${region.icon} ${region.name}</a>
        <span class="breadcrumb-sep">›</span>
        <span class="breadcrumb-item breadcrumb-current">${estate.name}</span>
      </nav>

      <div class="reveal" style="margin-top:1.25rem;">
        <p class="label mb-2" style="color:var(--accent);">${region.nameZh} · ${region.name}</p>
        <h1>${estate.name}</h1>
        <p class="label mt-1 mb-3" style="color:var(--ink-3);">${foundLabel} ${estate.founded} · ${estate.nameZh}</p>
        <p class="lead max-prose">${L(estate.desc,lang)}</p>
      </div>

      <div class="reveal" style="margin-top:1.5rem;">
        <div class="wine-flagship-tag">
          <span style="font-family:'Outfit',sans-serif;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:var(--ink-3);display:block;margin-bottom:0.25rem;">
            ${lang==='zh'?'旗舰酒款':lang==='fr'?'Vin phare':'Flagship wine'}
          </span>
          <span style="font-family:'Cormorant Garamond',serif;font-size:1.1rem;font-style:italic;color:var(--ink);">${L(estate.flagship,lang)}</span>
        </div>
      </div>
    </div>
  </section>

  ${estate.video ? `
  <div class="wrapper-wide reveal" style="margin-bottom:4rem;">
    <div style="border-radius:4px;overflow:hidden;aspect-ratio:16/9;">
      <iframe width="100%" height="100%" src="${estate.video}"
        frameborder="0" allowfullscreen loading="lazy"
        style="display:block;width:100%;height:100%;"></iframe>
    </div>
  </div>` : `
  <div class="wrapper-wide reveal" style="margin-bottom:4rem;">
    <div class="img-wrap ratio-21-9" style="border-radius:4px;">
      <img src="${estate.image}" alt="${estate.name}" loading="lazy"/>
    </div>
  </div>`}

  <!-- PRODUCT CARDS WITH FICHE TECHNIQUE -->
  <section class="section section-cream">
    <div class="wrapper">
      <div class="reveal">
        <div class="section-title-block mb-4">
          <p class="label">${prodTitle}</p>
          <div class="divider-line"></div>
        </div>
      </div>
      <div class="wine-products-list">
        ${estate.products.map((p,i)=>productCard(p,i)).join('')}
      </div>
    </div>
  </section>

  <!-- PREV / NEXT ESTATE -->
  <nav class="flavor-nav">
    <div class="wrapper">
      <div class="flavor-nav-inner">
        ${ePrev?`<a href="/chinese-wine/${region.slug}/${ePrev.slug}" data-nav="/chinese-wine/${region.slug}/${ePrev.slug}" class="flavor-nav-btn flavor-nav-prev">
          <span class="flavor-nav-dir">← ${prevLabel}</span>
          <span class="flavor-nav-name">${ePrev.name}</span>
        </a>`:`<div></div>`}
        ${eNext?`<a href="/chinese-wine/${region.slug}/${eNext.slug}" data-nav="/chinese-wine/${region.slug}/${eNext.slug}" class="flavor-nav-btn flavor-nav-next">
          <span class="flavor-nav-dir">${nextLabel} →</span>
          <span class="flavor-nav-name">${eNext.name}</span>
        </a>`:`<div></div>`}
      </div>
    </div>
  </nav>

  <!-- BACK -->
  <section class="section-sm" style="background:var(--ink);">
    <div class="wrapper" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1.5rem;">
      <div>
        <p style="color:rgba(255,255,255,0.5);font-size:11px;letter-spacing:0.25em;text-transform:uppercase;font-weight:600;margin-bottom:0.5rem;">${region.icon} ${region.name}</p>
        <h3 class="serif" style="color:#fff;font-size:clamp(1.1rem,2vw,1.5rem);">${lang==='zh'?'返回所有酒庄':lang==='fr'?'Retour aux domaines':'Back to all estates'}</h3>
      </div>
      <a href="/chinese-wine/${region.slug}" data-nav="/chinese-wine/${region.slug}" class="btn btn-ghost-white">${backLabel} ${arrowSVG()}</a>
    </div>
  </section>

</div>`;
}