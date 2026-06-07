/* PAGE: PRODUCT DETAIL */
import { FLAVORS } from '../js/data.js';

export function renderProduct(producerSlug, productSlug, t, lang) {
  // Find producer
  let producer = null;
  let parentFlavor = null;
  for (const flavor of FLAVORS) {
    const found = flavor.producers.find(p => p.slug === producerSlug);
    if (found) { producer = found; parentFlavor = flavor; break; }
  }
  if (!producer) return `<div class="page-entry"><div class="wrapper"><p>Producteur introuvable.</p></div></div>`;

  // Find product in producer.products, or fall back to flagship
  let product = null;
  if (producer.products) {
    product = producer.products.find(p => p.slug === productSlug);
  }
  if (!product && productSlug === 'flagship') {
    // Wrap flagship as product
    product = {
      ...producer.flagship,
      slug: 'flagship',
      aromas: { en: producer.flagship.notes?.en?.slice(0, 80) + '…' || '', fr: producer.flagship.notes?.fr?.slice(0, 80) + '…' || '', zh: '' },
      temperature: '15–20°C',
      grains: { en: 'Traditional sorghum', fr: 'Sorgho traditionnel', zh: '传统高粱' },
      aging: { en: 'Aged in earthen vessels', fr: 'Vieilli en cuves en céramique', zh: '陶坛陈酿' },
    };
  }
  if (!product) return `<div class="page-entry"><div class="wrapper"><p>Produit introuvable.</p></div></div>`;

  const tr = t();
  const flavorName = parentFlavor?.name?.[lang] ?? parentFlavor?.name?.en ?? '';
  const productNotes = product.notes?.[lang] ?? product.notes?.en ?? '';
  const productAromas = product.aromas?.[lang] ?? product.aromas?.en ?? '';
  const productGrains = product.grains?.[lang] ?? product.grains?.en ?? (typeof product.grains === 'string' ? product.grains : '');
  const productAging = product.aging?.[lang] ?? product.aging?.en ?? (typeof product.aging === 'string' ? product.aging : '');

  const tastingLabel = lang === 'zh' ? '品鉴艺术' : lang === 'fr' ? "L'ART DE LA" : 'THE ART OF';
  const tastingLabel2 = lang === 'zh' ? '' : lang === 'fr' ? 'DÉGUSTATION' : 'TASTING';
  const aromasLabel = lang === 'zh' ? '香气' : lang === 'fr' ? 'Arômes' : 'Aromas';
  const tempLabel = lang === 'zh' ? '饮用温度' : lang === 'fr' ? 'Température de service' : 'Serving temperature';
  const grainsLabel = lang === 'zh' ? '原料' : lang === 'fr' ? 'Céréales' : 'Grains';
  const agingLabel = lang === 'zh' ? '陈酿' : lang === 'fr' ? 'Élevage' : 'Aging';
  const buyLabel = lang === 'zh' ? '购买此产品' : lang === 'fr' ? 'Acheter ce produit' : 'Buy this product';
  const similarLabel = lang === 'zh' ? '发现更多产品' : lang === 'fr' ? 'DÉCOUVRIR DES PRODUITS' : 'DISCOVER MORE PRODUCTS';
  const similarLabel2 = lang === 'zh' ? '相似' : lang === 'fr' ? 'SIMILAIRES' : 'SIMILAR';

  // Similar products: other products from same producer (exclude current)
  const otherProducts = (producer.products || []).filter(p => p.slug !== productSlug).slice(0, 3);

  const similarCards = otherProducts.length > 0 ? otherProducts.map((p, i) => {
    const pNotes = p.notes?.[lang] ?? p.notes?.en ?? '';
    return `
    <a href="/product/${producerSlug}/${p.slug}" data-nav="/product/${producerSlug}/${p.slug}"
       class="product-card reveal" style="transition-delay:${i*80}ms; text-decoration:none; color:inherit; cursor:pointer;">
      <div class="product-card-img">
        <img src="${p.image}" alt="${p.name}" loading="lazy"/>
      </div>
      <div class="product-card-body">
        <p class="label" style="color:var(--accent); margin-bottom:0.4rem;">${flavorName}</p>
        <h3 style="font-size:1.05rem; margin-bottom:0.25rem;">${p.name}</h3>
        <p style="font-size:0.8rem; color:var(--ink-3);">${p.price}</p>
      </div>
    </a>`;
  }).join('') : '';

  return `
<div class="page-entry">

  <!-- BREADCRUMB -->
  <section class="section-sm">
    <div class="wrapper">
      <nav class="breadcrumb">
        <a href="/" data-nav="/" class="breadcrumb-item">${tr.nav.home}</a>
        <span class="breadcrumb-sep">›</span>
        <a href="/baijiu" data-nav="/baijiu" class="breadcrumb-item">${tr.nav.baijiu}</a>
        <span class="breadcrumb-sep">›</span>
        <a href="/producer/${producerSlug}" data-nav="/producer/${producerSlug}" class="breadcrumb-item">${producer.name}</a>
        <span class="breadcrumb-sep">›</span>
        <span class="breadcrumb-current">${product.name}</span>
      </nav>
    </div>
  </section>

  <!-- TASTING SECTION -->
  <section class="section section-cream">
    <div class="wrapper">
      <div class="grid-2" style="gap:3rem; align-items:center;">
        <div class="reveal">
          <h2 style="font-size:clamp(1.6rem,3vw,2.5rem); font-weight:900; line-height:1.1; margin-bottom:2rem; text-transform:uppercase;">
            ${tastingLabel}<br/>
            <span style="color:var(--red); font-style:italic;">${tastingLabel2}</span>
          </h2>
          <div class="product-tasting-table">
            <div class="product-tasting-row">
              <span class="product-tasting-icon">✦</span>
              <span class="product-tasting-key">${aromasLabel}</span>
              <span class="product-tasting-val">${productAromas}</span>
            </div>
            <div class="product-tasting-row">
              <span class="product-tasting-icon">🌡</span>
              <span class="product-tasting-key">${tempLabel}</span>
              <span class="product-tasting-val">${product.temperature || '15–20°C'}</span>
            </div>
            <div class="product-tasting-row">
              <span class="product-tasting-icon">⬡</span>
              <span class="product-tasting-key">${grainsLabel}</span>
              <span class="product-tasting-val">${productGrains}</span>
            </div>
            <div class="product-tasting-row">
              <span class="product-tasting-icon">↗</span>
              <span class="product-tasting-key">${agingLabel}</span>
              <span class="product-tasting-val">${productAging}</span>
            </div>
          </div>
          ${productNotes ? `
          <div style="margin-top:1.5rem; padding:1.25rem 1.5rem; background:#fff; border:1px solid var(--border); border-radius:4px;">
            <p style="font-size:0.875rem; color:var(--ink-2); line-height:1.7;">${productNotes}</p>
          </div>` : ''}
        </div>
        <div class="reveal" style="transition-delay:80ms;">
          <div style="background:var(--cream-2); border-radius:4px; padding:3rem 2rem; text-align:center; position:relative; overflow:hidden;">
            <div style="position:absolute; top:-20px; right:-30px; width:220px; height:220px; background:var(--cream-3); border-radius:50%; opacity:0.5;"></div>
            <img src="${product.image}" alt="${product.name}"
              style="max-height:400px; max-width:100%; object-fit:contain; position:relative; z-index:1; margin-bottom:1.5rem;"/>
            <div style="position:relative; z-index:1;">
              <p class="label mb-1" style="color:var(--ink-3);">${product.nameZh}</p>
              <h2 style="font-size:1.4rem; margin-bottom:0.75rem;">${product.name}</h2>
              <div style="display:flex;gap:1rem;justify-content:center;margin-bottom:1.5rem;">
                <span class="tag">ABV ${product.abv}</span>
                <span class="tag">${product.price}</span>
              </div>
              <a href="#" class="btn btn-dark" onclick="return false;">${buyLabel} ↗</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  ${similarCards ? `
  <!-- SIMILAR PRODUCTS -->
  <section class="section">
    <div class="wrapper">
      <div class="reveal" style="margin-bottom:2.5rem;">
        <h2 style="font-size:clamp(1.6rem,3vw,2.5rem); font-weight:900; line-height:1.1; text-transform:uppercase;">
          ${similarLabel}<br/>
          <span style="color:var(--red); font-style:italic;">${similarLabel2}</span>
        </h2>
      </div>
      <div class="grid-3" style="gap:1.25rem;">
        ${similarCards}
      </div>
    </div>
  </section>` : ''}

</div>`;
}
