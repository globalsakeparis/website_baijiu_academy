/* PAGE: WHO WE ARE / ABOUT */
import { IMAGES } from '../js/config.js';
import { arrowSVG } from '../js/helpers.js';

export function renderWhoWeAre(t, lang) {
  const tr = t().who;
  const home = t().home;
  return `
<div class="page-entry">

  <!-- HEADER -->
  <section class="section">
    <div class="wrapper">
      <div class="reveal">
        <p class="label mb-2">${tr.overline}</p>
        <h1>${tr.title}</h1>
        <p class="lead max-prose mt-3">${tr.lead}</p>
      </div>
    </div>
  </section>

  <!-- HERO IMAGE -->
  <div class="wrapper-wide reveal" style="margin-bottom:5rem;">
    <div class="img-wrap ratio-21-9" style="border-radius:4px;">
      <img src="${IMAGES.cultural}" alt="Chinese culture" loading="lazy"/>
    </div>
  </div>

  <!-- MISSION -->
  <section class="section section-cream">
    <div class="wrapper">
      <div class="grid-2" style="gap:4rem;align-items:start;">
        <div class="reveal">
          <p class="label mb-2">${tr.missionTitle}</p>
          <p style="font-size:1rem;color:var(--ink-2);line-height:1.7;">${tr.mission}</p>
        </div>
        <div class="reveal" style="transition-delay:100ms;">
          <div class="img-wrap ratio-4-3" style="border-radius:4px;">
            <img src="${IMAGES.plant}" alt="Baijiu tasting" loading="lazy"/>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- WHAT IS BAIJIU -->
  <section class="section">
    <div class="wrapper">
      <div class="reveal">
        <div class="section-title-block">
          <p class="label">${tr.whatTitle}</p>
          <div class="divider-line"></div>
        </div>
        <div class="grid-2" style="gap:4rem;align-items:start;">
          <div>
            <p style="font-size:1rem;color:var(--ink-2);line-height:1.75;">${tr.whatBody}</p>
          </div>
          <div>
            <div class="img-wrap ratio-4-3" style="border-radius:4px;">
              <img src="${IMAGES.fermentation}" alt="Fermentation jars" loading="lazy"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- VS COMPARISON -->
  <section class="section section-cream2">
    <div class="wrapper">
      <div class="reveal">
        <p class="label mb-2">${tr.vsTitle}</p>
        <div class="vs-grid mt-3">
          ${tr.vs.map(v => `
            <div class="vs-cell">
              <div class="vs-label">${v.label}</div>
              <div class="vs-body">${v.body}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  </section>

  <!-- RISE OF CHINESE WINE -->
  <section class="section">
    <div class="wrapper">
      <div class="grid-2" style="gap:4rem;align-items:center;">
        <div class="reveal">
          <div class="img-wrap ratio-4-3" style="border-radius:4px;">
            <img src="${IMAGES.changyu}" alt="Chinese vineyard" loading="lazy"/>
          </div>
        </div>
        <div class="reveal" style="transition-delay:100ms;">
          <p class="label mb-2">${tr.riseTitle}</p>
          <p style="font-size:1rem;color:var(--ink-2);line-height:1.75;">${tr.riseBody}</p>
          <a href="/chinese-wine" data-nav="/chinese-wine" class="btn btn-ghost mt-4">${lang === 'zh' ? '探索产区' : lang === 'fr' ? 'Explorer les régions' : 'Explore regions'} ${arrowSVG()}</a>
        </div>
      </div>
    </div>
  </section>

  <!-- HISTORICAL TIMELINE -->
  <section class="section section-dark">
    <div class="wrapper">
      <div class="reveal">
        <p class="label label-gold mb-2">${tr.timelineTitle}</p>
      </div>
      <div class="grid-2" style="gap:3rem;margin-top:2.5rem;">
        <div>
          <div class="timeline">
            ${home.timeline.slice(0, Math.ceil(home.timeline.length/2)).map((item,i) => `
              <div class="timeline-item reveal" style="transition-delay:${i*60}ms;">
                <div class="timeline-dot"></div>
                <div class="timeline-year">${item.year}</div>
                <div class="timeline-event" style="color:rgba(255,255,255,0.7);">${item.event}</div>
              </div>
            `).join('')}
          </div>
        </div>
        <div>
          <div class="timeline">
            ${home.timeline.slice(Math.ceil(home.timeline.length/2)).map((item,i) => `
              <div class="timeline-item reveal" style="transition-delay:${i*60}ms;">
                <div class="timeline-dot"></div>
                <div class="timeline-year">${item.year}</div>
                <div class="timeline-event" style="color:rgba(255,255,255,0.7);">${item.event}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  </section>

</div>`;
}
