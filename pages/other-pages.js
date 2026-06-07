/* OTHER PAGES: Exposition, Events, Academie, Contact */
import { IMAGES } from '../js/config.js';
import { arrowSVG } from '../js/helpers.js';
import { getArticlesByCategory } from '../js/articles-data.js';

/* ─── EXPOSITION PAGE ─── */
export function renderExposition(t, lang) {
  const tr = t().expositions;
  const articles = getArticlesByCategory('exhibition');

  const articleCard = (a, i) => `
  <article class="press-card reveal" style="transition-delay:${i * 80}ms;">
    <a href="/exposition/${a.slug}" data-nav="/exposition/${a.slug}" class="press-card-img-link">
      <div class="press-card-img">
        ${a.image
          ? `<img src="${a.image}" alt="${a.title[lang] || a.title.fr}" loading="lazy"/>`
          : `<div class="blog-card-img-placeholder"></div>`}
        ${a.featured ? `<span class="press-card-badge">${lang==='zh'?'精选':lang==='fr'?'À la une':'Featured'}</span>` : ''}
      </div>
    </a>
    <div class="press-card-body">
      <p class="press-card-date">${a.date}</p>
      <h3 class="press-card-title">
        <a href="/exposition/${a.slug}" data-nav="/exposition/${a.slug}">${a.title[lang] || a.title.fr}</a>
      </h3>
      <p class="press-card-excerpt">${a.excerpt[lang] || a.excerpt.fr}</p>
      <a href="/exposition/${a.slug}" data-nav="/exposition/${a.slug}" class="press-card-link">
        ${lang==='zh'?'阅读全文':lang==='fr'?'Lire l\'article':'Read article'} ${arrowSVG(13)}
      </a>
    </div>
  </article>
`;

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

  <!-- ARTICLES GRID -->
  <section class="section section-cream">
    <div class="wrapper">
      <div class="blog-grid">
        ${articles.map(articleCard).join('')}
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="section-sm" style="background:var(--ink);">
    <div class="wrapper" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1.5rem;">
      <div>
        <p style="color:rgba(255,255,255,0.5);font-size:11px;letter-spacing:0.25em;text-transform:uppercase;font-weight:600;margin-bottom:0.5rem;">${lang === 'zh' ? '2025年版' : lang === 'fr' ? 'Édition 2025' : '2025 Edition'}</p>
        <h3 class="serif" style="color:#fff;">${lang === 'zh' ? '更大规模，更多内容' : lang === 'fr' ? 'Plus grand, plus riche' : 'Bigger, richer program'}</h3>
      </div>
      <a href="/contact" data-nav="/contact" class="btn btn-ghost-white">${lang === 'zh' ? '联系我们' : lang === 'fr' ? 'Nous contacter' : 'Get in touch'} ${arrowSVG()}</a>
    </div>
  </section>

</div>`;
}



/* ─── EVENTS PAGE ─── */
export function renderEvents(t, lang) {
  const tr = t().events;
  const articles = getArticlesByCategory('event');

  const articleCard = (a, i) => `
  <article class="press-card reveal" style="transition-delay:${i * 80}ms;">
    <a href="/evenements/${a.slug}" data-nav="/evenements/${a.slug}" class="press-card-img-link">
      <div class="press-card-img">
        ${a.image
          ? `<img src="${a.image}" alt="${a.title[lang] || a.title.fr}" loading="lazy"/>`
          : `<div class="blog-card-img-placeholder"></div>`}
        ${a.featured ? `<span class="press-card-badge">${lang==='zh'?'热门活动':lang==='fr'?'À la une':'Featured'}</span>` : ''}
      </div>
    </a>
    <div class="press-card-body">
      <p class="press-card-date">${a.date}</p>
      <h3 class="press-card-title">
        <a href="/evenements/${a.slug}" data-nav="/evenements/${a.slug}">${a.title[lang] || a.title.fr}</a>
      </h3>
      <p class="press-card-excerpt">${a.excerpt[lang] || a.excerpt.fr}</p>
      <a href="/evenements/${a.slug}" data-nav="/evenements/${a.slug}" class="press-card-link">
        ${lang==='zh'?'阅读全文':lang==='fr'?"Lire l'article":'Read article'} ${arrowSVG(13)}
      </a>
    </div>
  </article>
`;

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

  <!-- ARTICLES GRID -->
  <section class="section section-cream">
    <div class="wrapper">
      <div class="blog-grid">
        ${articles.map(articleCard).join('')}
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="section-sm" style="background:var(--ink);">
    <div class="wrapper" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1.5rem;">
      <div>
        <p style="color:rgba(255,255,255,0.5);font-size:11px;letter-spacing:0.25em;text-transform:uppercase;font-weight:600;margin-bottom:0.5rem;">${lang === 'zh' ? '2026年' : lang === 'fr' ? 'Édition 2026' : '2026 Edition'}</p>
        <h3 class="serif" style="color:#fff;">${lang === 'zh' ? '立即报名' : lang === 'fr' ? 'Inscrivez-vous dès maintenant' : 'Register now'}</h3>
      </div>
      <a href="/contact" data-nav="/contact" class="btn btn-ghost-white">${lang === 'zh' ? '联系我们' : lang === 'fr' ? 'Nous contacter' : 'Get in touch'} ${arrowSVG()}</a>
    </div>
  </section>

</div>`;
}

/* ─── ACADEMIE PAGE ─── */
export function renderAcademie(t, lang) {
  const tr = t().academie;
  const btnLabel = lang === 'zh' ? '查看课程与价格' : lang === 'fr' ? 'Voir les formations & tarifs' : 'View programmes & fees';
  const closeLabel = lang === 'zh' ? '关闭' : lang === 'fr' ? 'Fermer' : 'Close';
  const themesLabel = lang === 'zh' ? '主题' : lang === 'fr' ? 'Thématiques' : 'Topics';
  const feesLabel = lang === 'zh' ? '课程与价格' : lang === 'fr' ? 'Formations & Tarifs' : 'Programmes & Fees';
  const durationLabel = lang === 'zh' ? '时长' : lang === 'fr' ? 'Durée' : 'Duration';
  const contactLabel = lang === 'zh' ? '预约报名' : lang === 'fr' ? 'Réserver / S\'inscrire' : 'Book / Register';

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

  <!-- YOUTUBE VIDEO BANNER -->
  <div class="wrapper-wide reveal" style="margin-bottom:3rem;">
    <div class="yt-embed-wrap">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/r3RYYywn1G4"
        title="Introduction video"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen>
      </iframe>
    </div>
  </div>

  <!-- FORMATIONS GRID -->
  <section class="section section-cream">
    <div class="wrapper">
      <div class="reveal">
        <div class="section-title-block mb-4">
          <p class="label">${lang === 'zh' ? '我们的项目' : lang === 'fr' ? 'Nos formations' : 'Our programmes'}</p>
          <div class="divider-line"></div>
        </div>
      </div>
      <div class="grid-3" style="gap:1.25rem;">
        ${tr.guides.map((g, i) => `
          <div class="guide-card reveal" style="transition-delay:${i*60}ms;cursor:pointer;" onclick="openAcademieModal(${i})">
            <span class="guide-tag">${g.tag}</span>
            <div class="guide-title">${g.title}</div>
            <p class="guide-desc">${g.desc}</p>
            <div style="margin-top:auto;padding-top:0.75rem;">
              <span class="acad-see-more">${btnLabel} →</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- CLUB MEMBRES -->
  ${tr.club ? `
  <section class="section" style="background:var(--ink);">
    <div class="wrapper">
      <div class="reveal" style="text-align:center;margin-bottom:3rem;">
        <p class="label label-gold mb-2">${tr.club.title}</p>
        <div class="divider-line" style="background:rgba(255,255,255,0.15);"></div>
      </div>
      <div class="grid-3" style="gap:1.5rem;">
        ${tr.club.tiers.map((tier, ti) => `
          <div class="reveal club-tier-card" style="transition-delay:${ti*80}ms;background:${ti===2?'var(--red)':'rgba(255,255,255,0.06)'};border:1px solid ${ti===2?'var(--red)':'rgba(255,255,255,0.12)'};border-radius:4px;padding:2rem;display:flex;flex-direction:column;gap:1rem;">
            <div>
              <p class="label" style="color:${ti===2?'rgba(255,255,255,0.8)':'var(--gold)'};margin-bottom:0.25rem;">${tier.name}</p>
              <div style="font-family:'Cormorant Garamond',serif;font-size:2rem;font-weight:500;color:#fff;">${tier.price}</div>
            </div>
            <ul style="list-style:none;display:flex;flex-direction:column;gap:0.5rem;">
              ${tier.perks.map(p=>`<li style="color:rgba(255,255,255,0.75);font-size:0.875rem;display:flex;gap:0.5rem;align-items:flex-start;"><span style="color:${ti===2?'rgba(255,255,255,0.9)':'var(--gold)'};flex-shrink:0;">✓</span>${p}</li>`).join('')}
            </ul>
            <div style="margin-top:auto;padding-top:0.5rem;">
              <a href="/contact" data-nav="/contact" class="btn ${ti===2?'btn-ghost-white':'btn-outline-gold'}" style="width:100%;justify-content:center;">${contactLabel}</a>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>` : ''}

  <!-- CTA -->
  <section class="section-sm" style="background:var(--red);">
    <div class="wrapper" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1.5rem;">
      <div>
        <h3 class="serif" style="color:#fff;">${lang === 'zh' ? '有问题或建议？' : lang === 'fr' ? 'Des questions ou suggestions ?' : 'Questions or suggestions?'}</h3>
        <p style="color:rgba(255,255,255,0.7);margin-top:0.35rem;font-size:0.9rem;">${lang === 'zh' ? '我们欢迎您的意见。' : lang === 'fr' ? 'Nous accueillons vos retours.' : 'We welcome your feedback.'}</p>
      </div>
      <a href="/contact" data-nav="/contact" class="btn btn-ghost-white">${lang === 'zh' ? '联系我们' : lang === 'fr' ? 'Nous contacter' : 'Contact us'} ${arrowSVG()}</a>
    </div>
  </section>

  <!-- MODAL OVERLAY -->
  <div id="academie-modal-overlay" style="display:none;position:fixed;inset:0;background:rgba(13,13,13,0.75);z-index:9000;backdrop-filter:blur(4px);overflow-y:auto;">
    <div id="academie-modal" style="background:var(--cream);max-width:640px;margin:4rem auto;border-radius:6px;overflow:hidden;position:relative;box-shadow:0 32px 80px rgba(0,0,0,0.4);">
      <div id="academie-modal-inner"></div>
    </div>
  </div>

</div>

`;
}

/* ─── ACADEMIE MODAL INIT (called by app.js after innerHTML render) ─── */
export function initAcademieModal(guides, labels) {
  const { feesLabel, themesLabel, contactLabel, closeLabel } = labels;

  const overlay = document.getElementById('academie-modal-overlay');
  if (!overlay) return;

  // Close on backdrop click
  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) closeModal();
  });

  // Close on Escape
  document.addEventListener('keydown', function escHandler(e) {
    if (e.key === 'Escape') {
      closeModal();
      document.removeEventListener('keydown', escHandler);
    }
  });

  function closeModal() {
    overlay.style.display = 'none';
    document.body.style.overflow = '';
  }

  window.closeAcademieModal = closeModal;

  window.openAcademieModal = function(i) {
    const g = guides[i];

    const themesHtml = g.themes ? `
      <div style="margin-bottom:1.5rem;">
        <p style="font-size:0.75rem;letter-spacing:0.25em;text-transform:uppercase;color:var(--red);font-weight:700;margin-bottom:0.75rem;">${themesLabel}</p>
        <div style="display:flex;flex-wrap:wrap;gap:0.4rem;">
          ${g.themes.map(th => `<span style="background:var(--cream-2);border:1px solid var(--border);border-radius:2px;padding:0.2rem 0.65rem;font-size:0.8rem;color:var(--ink-2);">${th}</span>`).join('')}
        </div>
      </div>
    ` : '';

    const prixHtml = g.prix ? `
      <div>
        <p style="font-size:0.75rem;letter-spacing:0.25em;text-transform:uppercase;color:var(--red);font-weight:700;margin-bottom:0.75rem;">${feesLabel}</p>
        <div style="border:1px solid var(--border);border-radius:4px;overflow:hidden;">
          ${g.prix.map((p, pi) => `
            <div style="display:grid;grid-template-columns:1fr auto auto;gap:0.5rem 1rem;align-items:center;padding:0.75rem 1rem;background:${pi % 2 === 0 ? '#fff' : 'var(--cream-2)'};">
              <span style="font-size:0.875rem;color:var(--ink);font-weight:500;">${p.label}</span>
              <span style="font-size:0.8rem;color:var(--ink-3);white-space:nowrap;">${p.duration}</span>
              <span style="font-size:0.9rem;font-weight:700;color:var(--red);white-space:nowrap;">${p.price}</span>
            </div>
          `).join('')}
        </div>
      </div>
    ` : '';

    document.getElementById('academie-modal-inner').innerHTML = `
      <div style="background:var(--ink);padding:1.5rem 1.75rem 1.25rem;display:flex;justify-content:space-between;align-items:flex-start;gap:1rem;">
        <div>
          <span style="font-size:9px;font-weight:700;letter-spacing:0.35em;text-transform:uppercase;color:var(--gold);border:1px solid var(--gold);padding:0.2rem 0.6rem;border-radius:2px;display:inline-block;margin-bottom:0.6rem;">${g.tag}</span>
          <h3 class="serif" style="color:#fff;font-size:1.5rem;">${g.title}</h3>
        </div>
        <button onclick="window.closeAcademieModal()" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:1.5rem;cursor:pointer;padding:0;line-height:1;flex-shrink:0;" aria-label="${closeLabel}">✕</button>
      </div>
      <div style="padding:1.75rem;">
        <p style="color:var(--ink-2);font-size:0.95rem;line-height:1.65;margin-bottom:1.5rem;">${g.desc}</p>
        ${themesHtml}
        ${prixHtml}
        <div style="margin-top:1.5rem;">
          <a href="/contact" data-nav="/contact" class="btn btn-primary" onclick="window.closeAcademieModal()" style="width:100%;justify-content:center;">${contactLabel} →</a>
        </div>
      </div>
    `;
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
    overlay.scrollTop = 0;
  };
}

/* ─── CONTACT PAGE ─── */
export function renderContact(t, lang) {
  const tr = t().contact;
  return `
<div class="page-entry">

  <!-- HEADER -->
  <section class="section">
    <div class="wrapper">
      <div class="reveal text-center" style="max-width:600px;margin:0 auto;">
        <p class="label mb-2">${tr.overline}</p>
        <h1>${tr.title}</h1>
        <p class="lead mt-3">${tr.lead}</p>
      </div>
    </div>
  </section>

  <!-- CONTACT BLOCK -->
  <section class="section-sm" style="padding-bottom:6rem;">
    <div class="wrapper">
      <div class="contact-block reveal">

        <div class="contact-item">
          <div class="contact-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          </div>
          <div>
            <div class="contact-label">${lang === 'zh' ? '电子邮件' : lang === 'fr' ? 'Adresse email' : 'Email address'}</div>
            <a href="mailto:${tr.email}" class="contact-value" style="display:block;transition:color 0.3s;" onmouseover="this.style.color='var(--red)'" onmouseout="this.style.color='var(--ink)'">${tr.email}</a>
          </div>
        </div>

        <div class="contact-item">
          <div class="contact-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.36 10a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.27 0h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.67a16 16 0 0 0 8 8l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 24 17z"/></svg>
          </div>
          <div>
            <div class="contact-label">${lang === 'zh' ? '电话' : lang === 'fr' ? 'Téléphone' : 'Phone'}</div>
            <a href="tel:${tr.phone.replace(/\s/g,'')}" class="contact-value" style="display:block;transition:color 0.3s;" onmouseover="this.style.color='var(--red)'" onmouseout="this.style.color='var(--ink)'">${tr.phone}</a>
          </div>
        </div>

        <div class="contact-item" style="border-bottom:none;padding-bottom:0;">
          <div class="contact-icon" style="background:var(--gold);">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          </div>
          <div>
            <div class="contact-label">${lang === 'zh' ? '关于我们' : lang === 'fr' ? 'À propos' : 'About'}</div>
            <div class="contact-value" style="font-size:1.1rem;">${lang === 'zh' ? '独立教育资源' : lang === 'fr' ? 'Ressource éducative indépendante' : 'Independent educational resource'}</div>
            <p class="body-sm mt-1">${lang === 'zh' ? '关于白酒与中国葡萄酒的非商业性教育资源。我们欢迎更正、补充内容或合作提案。' : lang === 'fr' ? 'Ressource éducative non-commerciale sur le Baijiu et les vins chinois. Nous accueillons corrections, suggestions de contenu ou propositions de collaboration.' : 'A non-commercial educational resource on Baijiu and Chinese wines. We welcome corrections, content suggestions, or collaboration proposals.'}</p>
          </div>
        </div>

      </div>
    </div>
  </section>

</div>`;
}

/* ─── ARTICLE DETAIL PAGE ─── */
import { getArticleBySlug } from '../js/articles-data.js';

export function renderArticle(slug, backPath, t, lang) {
  const a = getArticleBySlug(slug);
  if (!a) return `<div class="page-entry"><section class="section"><div class="wrapper"><h1>404</h1></div></section></div>`;

  const homeLabel = lang==='zh'?'首页':lang==='fr'?'Accueil':'Home';
  const backLabel = backPath === '/events'
    ? (lang==='zh'?'活动':lang==='fr'?'Événements':'Events')
    : (lang==='zh'?'展览':lang==='fr'?'Exposition':'Exhibition');
  const body = a.body[lang] || a.body.fr || a.body.en;

  return `
<div class="page-entry">
  <section class="section-sm">
    <div class="wrapper">
      <nav class="breadcrumb">
        <a href="/" data-nav="/" class="breadcrumb-item">${homeLabel}</a>
        <span class="breadcrumb-sep">›</span>
        <a href="${backPath}" data-nav="${backPath}" class="breadcrumb-item">${backLabel}</a>
        <span class="breadcrumb-sep">›</span>
        <span class="breadcrumb-item breadcrumb-current">${a.title[lang] || a.title.fr}</span>
      </nav>
      <div class="reveal" style="margin-top:1.5rem;">
        <p class="label mb-2">${a.date}</p>
        <h1 style="max-width:820px;">${a.title[lang] || a.title.fr}</h1>
        <p class="lead max-prose mt-3">${a.excerpt[lang] || a.excerpt.fr}</p>
      </div>
    </div>
  </section>

  ${a.image ? `
  <div class="wrapper-wide reveal" style="margin-bottom:4rem;">
    <div class="img-wrap ratio-21-9" style="border-radius:4px;">
      <img src="${a.image}" alt="${a.title[lang] || a.title.fr}" loading="lazy"/>
    </div>
  </div>` : ''}

  <section class="section">
    <div class="wrapper">
      <div class="article-body reveal">${body}</div>
      ${a.video ? `
      <div class="reveal" style="margin:2.5rem 0;aspect-ratio:16/9;border-radius:4px;overflow:hidden;">
        <iframe width="100%" height="100%" src="${a.video}"
          frameborder="0" allowfullscreen loading="lazy"
          style="display:block;width:100%;height:100%;"></iframe>
      </div>` : ''}
    </div>
  </section>

  <section class="section-sm" style="background:var(--ink);">
    <div class="wrapper" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1.5rem;">
      <h3 class="serif" style="color:#fff;">${backLabel}</h3>
      <a href="${backPath}" data-nav="${backPath}" class="btn btn-ghost-white">← ${lang==='zh'?'返回':lang==='fr'?'Retour':'Back'}</a>
    </div>
  </section>
</div>`;
}

/* ─────────────────────────────────────────────────
   PRODUCTEURS DE VIN CHINOIS
───────────────────────────────────────────────── */
import { WINE_BRANDS, REGIONS } from '../js/data.js';

export function renderProducteurs(t, lang) {
  const tr = t();
  const title    = lang==='zh' ? '中国葡萄酒生产商' : lang==='fr' ? 'Producteurs de Vin Chinois' : 'Chinese Wine Producers';
  const overline = lang==='zh' ? '主要酒庄'         : lang==='fr' ? 'Domaines & Maisons'         : 'Estates & Houses';
  const lead     = lang==='zh'
    ? '从宁夏的高海拔葡萄园到云南的喜马拉雅山坡，中国葡萄酒产业汇聚了历史名庄与当代精品酒庄。'
    : lang==='fr'
    ? 'Des vignobles d\'altitude de Ningxia aux flancs himalayens du Yunnan, l\'industrie vinicole chinoise réunit maisons historiques et domaines de prestige contemporains.'
    : 'From the high-altitude vineyards of Ningxia to the Himalayan slopes of Yunnan, China\'s wine industry brings together historic houses and contemporary prestige estates.';
  const discoverLabel = lang==='zh' ? '探索产区' : lang==='fr' ? 'Explorer le domaine' : 'Explore estate';
  const regionLabel   = lang==='zh' ? '产区'     : lang==='fr' ? 'Région'              : 'Region';

  const cards = WINE_BRANDS.map((wb, i) => {
    const regionData = REGIONS.find(r => r.slug === wb.region);
    const regionName = regionData ? (regionData.name) : wb.region;
    const estateLink = regionData ? `/chinese-wine/${wb.region}` : '/chinese-wine';
    const desc = wb.desc[lang] || wb.desc.fr || wb.desc.en;
    return `
    <div class="reveal" style="transition-delay:${i*70}ms;">
      <a href="${estateLink}" data-nav="${estateLink}"
         style="display:block;text-decoration:none;color:inherit;background:#fff;border:1px solid var(--border);border-radius:4px;overflow:hidden;transition:box-shadow .2s;"
         onmouseover="this.style.boxShadow='0 6px 24px rgba(0,0,0,0.10)'" onmouseout="this.style.boxShadow=''">
        ${wb.image ? `<div style="aspect-ratio:16/9;overflow:hidden;background:var(--cream);">
          <img src="${wb.image}" alt="${wb.name}" loading="lazy" style="width:100%;height:100%;object-fit:cover;"/>
        </div>` : ''}
        <div style="padding:1.5rem;">
          <p style="font-family:'Outfit',sans-serif;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:var(--accent);margin-bottom:0.4rem;">${regionLabel} · ${regionName}</p>
          <h3 style="font-size:1.15rem;margin-bottom:0.75rem;">${wb.name}</h3>
          <p style="font-size:0.875rem;color:var(--ink-2);line-height:1.65;margin-bottom:1.25rem;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;">${desc}</p>
          <span style="font-family:'Outfit',sans-serif;font-size:12px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:var(--red);">${discoverLabel} →</span>
        </div>
      </a>
    </div>`;
  }).join('');

  return `
<div class="page-entry">

  <section class="section-sm">
    <div class="wrapper">
      <div class="reveal">
        <p class="label mb-2">${overline}</p>
        <h1>${title}</h1>
        <p class="lead max-prose mt-3">${lead}</p>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="wrapper">
      <div class="grid-2" style="gap:1.5rem;">
        ${cards}
      </div>
    </div>
  </section>

  <section class="section-sm" style="background:var(--ink);">
    <div class="wrapper" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1.5rem;">
      <div>
        <p style="color:rgba(255,255,255,0.5);font-size:11px;letter-spacing:0.25em;text-transform:uppercase;font-weight:600;margin-bottom:0.5rem;">
          ${lang==='zh'?'探索':'Explorer'}
        </p>
        <h3 class="serif" style="color:#fff;font-size:clamp(1.1rem,2vw,1.5rem);">
          ${lang==='zh'?'中国葡萄酒产区':lang==='fr'?'Régions viticoles chinoises':'Chinese Wine Regions'}
        </h3>
      </div>
      <a href="/chinese-wine" data-nav="/chinese-wine" class="btn btn-ghost-white">
        ${lang==='zh'?'查看所有产区':lang==='fr'?'Voir toutes les régions':'All regions'} →
      </a>
    </div>
  </section>

</div>`;
}
