import { FLAVORS } from '../js/data.js';

export function renderProducer(slug, t, lang) {
  let producer = null;
  let parentFlavor = null;
  for (const flavor of FLAVORS) {
    const found = flavor.producers.find(p => p.slug === slug);
    if (found) { producer = found; parentFlavor = flavor; break; }
  }
  if (!producer) return `<div class="page-entry"><div class="wrapper"><p>Producteur introuvable.</p></div></div>`;

  const tr = t();
  const { flagship } = producer;
  const foundedLabel = lang === 'zh' ? '创立于' : lang === 'fr' ? 'Fondé en' : 'Founded';
  const flagshipLabel = lang === 'zh' ? '旗舰产品' : lang === 'fr' ? 'Produit phare' : 'Flagship';
  const productsLabel = lang === 'zh' ? '我们的产品' : lang === 'fr' ? 'NOS' : 'OUR';
  const productsLabel2 = lang === 'zh' ? '' : lang === 'fr' ? 'PRODUITS' : 'PRODUCTS';
  const discoverLabel = lang === 'zh' ? '发现' : lang === 'fr' ? 'Découvrir' : 'Discover';

  const desc = producer.description?.[lang] ?? producer.description?.en ?? '';
  const notes = flagship.notes?.[lang] ?? flagship.notes?.en ?? '';
  const flavorName = parentFlavor?.name?.[lang] ?? parentFlavor?.name?.en ?? '';

  // Products grid section
  const products = producer.products;
  const productsSection = products && products.length > 0 ? `
  <section class="section">
    <div class="wrapper">
      <div class="reveal" style="margin-bottom:2.5rem;">
        <h2 style="font-size:clamp(1.6rem,3vw,2.5rem); font-weight:900; line-height:1.1; text-transform:uppercase;">
          ${productsLabel}<br/>
          <span style="color:var(--red); font-style:italic;">${productsLabel2}</span>
        </h2>
      </div>
      <div class="grid-3" style="gap:1.25rem;">
        ${products.slice(0, 3).map((p, i) => {
          const pNotes = p.notes?.[lang] ?? p.notes?.en ?? '';
          return `
        <a href="/product/${slug}/${p.slug}" data-nav="/product/${slug}/${p.slug}"
           class="product-card reveal" style="transition-delay:${i*80}ms; text-decoration:none; color:inherit;">
          <div class="product-card-img">
            <img src="${p.image}" alt="${p.name}" loading="lazy"/>
          </div>
          <div class="product-card-body">
            <p class="label" style="color:var(--accent); margin-bottom:0.4rem; font-size:0.7rem;">${flavorName}</p>
            <h3 style="font-size:1.05rem; margin-bottom:0.3rem;">${p.name}</h3>
            <div style="display:flex;gap:0.75rem;align-items:center;margin-bottom:0.5rem;">
              <span class="tag" style="font-size:0.7rem;">ABV ${p.abv}</span>
              <span style="font-size:0.8rem;color:var(--ink-3);">${p.price}</span>
            </div>
            <p style="font-size:0.825rem;color:var(--ink-2);line-height:1.6;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">${pNotes}</p>
          </div>
        </a>`;
        }).join('')}
      </div>
    </div>
  </section>` : '';

  return `
<div class="page-entry">
  <section class="section-sm">
    <div class="wrapper">
      <nav class="breadcrumb">
        <a href="/" data-nav="/" class="breadcrumb-item">${tr.nav.home}</a>
        <span class="breadcrumb-sep">›</span>
        <a href="/baijiu" data-nav="/baijiu" class="breadcrumb-item">${tr.nav.baijiu}</a>
        <span class="breadcrumb-sep">›</span>
        <span class="breadcrumb-current">${producer.name}</span>
      </nav>
      <div class="reveal" style="margin-top:1.5rem;">
        <p class="label mb-2" style="color:var(--accent);">${flavorName}</p>
        <h1>${producer.name}</h1>
        <p class="label mt-2">${producer.region} · ${foundedLabel} ${producer.founded}</p>
        <p class="lead max-prose mt-3">${desc}</p>
      </div>
    </div>
  </section>

  <section class="section section-cream">
    <div class="wrapper">
      <div class="section-title-block mb-3">
        <p class="label">${flagshipLabel}</p>
        <div class="divider-line"></div>
      </div>
      <div class="grid-2" style="gap:3rem;align-items:center;">
        <div class="reveal">
          <div class="img-wrap ratio-4-3" style="border-radius:4px;">
            <img src="${flagship.image}" alt="${flagship.name}" loading="lazy"/>
          </div>
        </div>
        <div class="reveal" style="transition-delay:80ms;">
          <p class="label mb-2">${flagship.nameZh}</p>
          <h2>${flagship.name}</h2>
          <div style="display:flex;gap:1.5rem;margin:1.25rem 0;">
            <span class="tag">ABV ${flagship.abv}</span>
            <span class="tag">${flagship.price}</span>
          </div>
          <p style="color:var(--ink-2);line-height:1.75;">${notes}</p>
        </div>
      </div>
    </div>
  </section>

  ${productsSection}
</div>`;
}
