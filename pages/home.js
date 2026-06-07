/* PAGE: HOME */
import { IMAGES } from '../js/config.js';
import { arrowSVG } from '../js/helpers.js';

export function renderHome(t, lang) {
  const tr = t().home;
  return `
<div>
  <!-- HERO -->
  <section class="hero">
    <img class="hero-bg" src="${IMAGES.home_banner}" alt="Baijiu distillery" loading="eager" />
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <div class="reveal">
        <p class="label label-gold" style="color:rgba(212,160,23,0.9);margin-bottom:1.25rem;">${tr.overline}</p>
        <h1 class="hero-headline">${tr.headline}</h1>
        <p class="hero-sub">${tr.subhead}</p>
        <div class="hero-actions">
          <a href="/baijiu" data-nav="/baijiu" class="btn btn-primary">${tr.cta} ${arrowSVG()}</a>
          <a href="/chinese-wine" data-nav="/chinese-wine" class="btn btn-ghost-white">${tr.ctaWine}</a>
        </div>
      </div>
    </div>
  </section>

  <!-- STATS BAR -->
  <div class="stats-bar">
    <div class="wrapper">
      <div class="stats-grid">
        ${tr.stats.map(s => `
          <div class="stat-item reveal">
            <div class="stat-num">${s.num}</div>
            <div class="stat-label">${s.label}</div>
          </div>
        `).join('')}
      </div>
    </div>
  </div>

  <!-- INTRO -->
  <section class="section">
    <div class="wrapper">
      <div class="intro-grid">
        <div>
          <div class="reveal">
            <p class="label mb-2">${tr.introOverline}</p>
            <h2>${tr.introTitle}</h2>
            <p class="lead mt-3">${tr.introBody}</p>
            <a href="/who-we-are" data-nav="/who-we-are" class="btn btn-ghost mt-4">${lang === 'zh' ? '了解更多' : lang === 'fr' ? 'En savoir plus' : 'Learn more'} ${arrowSVG()}</a>
          </div>
        </div>
        <div class="reveal" style="transition-delay:120ms;">
          <div class="img-wrap ratio-4-3" style="border-radius:4px;">
            <img src="${IMAGES.fermentation}" alt="Baijiu fermentation" loading="lazy"/>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- PILLARS -->
  <section class="section section-cream">
    <div class="wrapper">
      <div class="reveal">
        <div class="section-title-block">
          <p class="label">${tr.pillarsOverline}</p>
          <div class="divider-line"></div>
        </div>
      </div>
      <div class="grid-4">
        ${tr.pillars.map((p, i) => `
          <a href="${p.to}" data-nav="${p.to}" class="pillar-card reveal" style="transition-delay:${i*80}ms;">
            <span class="pillar-icon">${p.icon}</span>
            <h4 class="pillar-title">${p.title}</h4>
            <p class="pillar-desc">${p.desc}</p>
          </a>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- CULTURE IMAGE -->
  <section style="padding:0;">
    <div class="wrapper-wide reveal">
      <div class="img-wrap ratio-21-9" style="border-radius:0;">
        <img src="${IMAGES.landscape}" alt="Chinese landscape" loading="lazy"/>
      </div>
    </div>
  </section>

  <!-- TIMELINE -->
  <section class="section section-dark">
    <div class="wrapper">
      <div class="reveal">
        <p class="label label-gold mb-2">${tr.timelineOverline}</p>
        <h2 style="color:#fff;margin-bottom:3rem;">${tr.timelineTitle}</h2>
      </div>
      <div class="grid-2" style="gap:3rem;align-items:start;">
        <div>
          <div class="timeline">
            ${tr.timeline.slice(0, Math.ceil(tr.timeline.length/2)).map((item, i) => `
              <div class="timeline-item reveal" style="transition-delay:${i*60}ms;">
                <div class="timeline-dot"></div>
                <div class="timeline-year">${item.year}</div>
                <div class="timeline-event">${item.event}</div>
              </div>
            `).join('')}
          </div>
        </div>
        <div>
          <div class="timeline">
            ${tr.timeline.slice(Math.ceil(tr.timeline.length/2)).map((item, i) => `
              <div class="timeline-item reveal" style="transition-delay:${i*60}ms;">
                <div class="timeline-dot"></div>
                <div class="timeline-year">${item.year}</div>
                <div class="timeline-event">${item.event}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA STRIP -->
  <section class="section-sm" style="background:var(--red);">
    <div class="wrapper" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1.5rem;">
      <div>
        <h3 class="serif" style="color:#fff;font-size:clamp(1.25rem,2.5vw,1.875rem);">${lang === 'zh' ? '准备开始探索？' : lang === 'fr' ? 'Prêt à explorer ?' : 'Ready to explore?'}</h3>
        <p style="color:rgba(255,255,255,0.7);margin-top:0.35rem;font-size:0.9rem;">${lang === 'zh' ? '从12种香型开始您的白酒之旅' : lang === 'fr' ? 'Commencez votre voyage par les 12 types aromatiques' : 'Start your journey through the 12 aroma types'}</p>
      </div>
      <a href="/baijiu" data-nav="/baijiu" class="btn btn-ghost-white">${tr.cta} ${arrowSVG()}</a>
    </div>
  </section>

</div>`;
}
