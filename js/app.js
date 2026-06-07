/* APP.JS — Router, i18n, navbar orchestration */
import { T } from './config.js';
import { revealObserver } from './helpers.js';
import { renderHome }                                          from '../pages/home.js';
import { renderWhoWeAre }                                      from '../pages/who-we-are.js';
import { renderBaijiu, renderBaijiuFlavor }                    from '../pages/baijiu.js';
import { renderChineseWine, renderWineRegion, renderWineEstate } from '../pages/wine.js';
import { renderExposition, renderEvents, renderAcademie, renderContact, renderArticle, renderProducteurs, initAcademieModal } from '../pages/other-pages.js';
import { renderProducer }                                      from '../pages/producer.js';
import { renderProduct }                                       from '../pages/product.js';

/* ─────────────────────────────────────────────
   LANG STATE
───────────────────────────────────────────── */
let lang = localStorage.getItem('bj-lang') || 'en';
const t  = () => T[lang] || T.en;
window.router = (p) => router(p);

/* ─────────────────────────────────────────────
   I18N
───────────────────────────────────────────── */
function setLang(l) {
  lang = l;
  localStorage.setItem('bj-lang', l);
  document.documentElement.lang = l;
  updateLangUI();
  router();
}

function updateLangUI() {
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
}

function updateStaticI18n() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const parts = el.dataset.i18n.split('.');
    let val = t();
    for (const p of parts) val = val?.[p];
    if (val) el.textContent = val;
  });
}

/* ─────────────────────────────────────────────
   TITLE HELPER
───────────────────────────────────────────── */
function setTitle(key) {
  const titles = {
    home:        { zh: '白酒百科',      fr: 'Encyclopédie Baijiu',  en: 'Baijiu Encyclopedia' },
    whoWeAre:    { zh: '关于我们',      fr: 'Qui sommes-nous',       en: 'Who We Are' },
    baijiu:      { zh: '香型',          fr: 'Types aromatiques',     en: 'Aroma Types' },
    wine:        { zh: '中国葡萄酒',    fr: 'Vins de Chine',         en: 'Chinese Wine' },
    exposition:  { zh: '展览',          fr: 'Exposition',            en: 'Exhibition' },
    events:      { zh: '活动',          fr: 'Événements',            en: 'Events' },
    academie:    { zh: '学院',          fr: 'Académie',              en: 'Academy' },
  };
  const entry = titles[key];
  if (!entry) { document.title = 'Baijiu Encyclopedia'; return; }
  const label = entry[lang] || entry.en;
  document.title = key === 'home' ? label : label + ' — Baijiu Encyclopedia';
}

function setTitleFromH1() {
  const h1 = document.querySelector('h1');
  if (h1) document.title = h1.textContent.trim() + ' — Baijiu Encyclopedia';
}

/* ─────────────────────────────────────────────
   ROUTER
───────────────────────────────────────────── */
function router(path) {
  path = path || location.pathname;
  const app    = document.getElementById('app');
  const navbar = document.getElementById('main-navbar');
  window.scrollTo(0, 0);
  closeMobile();

  /* ── RENDER ── */
  if (path === '/') {
    app.innerHTML = renderHome(t, lang);
    setTitle('home');

  } else if (path === '/who-we-are') {
    app.innerHTML = renderWhoWeAre(t, lang);
    setTitle('whoWeAre');

  /* ── BAIJIU ── */
  } else if (path === '/baijiu') {
    app.innerHTML = renderBaijiu(t, lang);
    setTitle('baijiu');
    setTimeout(() => {
      try {
        const saved = sessionStorage.getItem('bj-region-filter');
        if (saved && saved !== 'all') {
          const btn = document.querySelector(`.region-btn[data-region="${saved}"]`);
          if (btn) window.filterRegion(btn, saved);
        }
      } catch(_) {}
    }, 0);

  } else if (path.startsWith('/baijiu/')) {
    const slug = path.replace('/baijiu/', '');
    app.innerHTML = renderBaijiuFlavor(slug, t, lang);
    setTitleFromH1();

  /* ── CHINESE WINE ── */
  } else if (path === '/chinese-wine') {
    app.innerHTML = renderChineseWine(t, lang);
    setTitle('wine');

  } else if (path.startsWith('/chinese-wine/')) {
    const parts = path.replace('/chinese-wine/', '').split('/');
    if (parts.length === 1) {
      app.innerHTML = renderWineRegion(parts[0], t, lang);
    } else {
      app.innerHTML = renderWineEstate(parts[0], parts[1], t, lang);
    }
    setTitleFromH1();

  /* ── EXPOSITION ── */
  } else if (path === '/private-expositions') {
    app.innerHTML = renderExposition(t, lang);
    setTitle('exposition');

  } else if (path.startsWith('/exposition/')) {
    const slug = path.replace('/exposition/', '');
    app.innerHTML = renderArticle(slug, '/private-expositions', t, lang);
    setTitleFromH1();

  /* ── EVENTS ── */
  } else if (path === '/events') {
    app.innerHTML = renderEvents(t, lang);
    setTitle('events');

  } else if (path.startsWith('/evenements/')) {
    const slug = path.replace('/evenements/', '');
    app.innerHTML = renderArticle(slug, '/events', t, lang);
    setTitleFromH1();

  /* ── PRODUCTEURS ── */
  } else if (path === '/producteurs') {
    app.innerHTML = renderProducteurs(t, lang);
    setTitleFromH1();

  /* ── PROGRAMME PAGES ── */
  } else if (path === '/prestige-academie') {
    app.innerHTML = renderAcademie(t, lang);
    setTitle('academie');
    const tr = t().academie;
    initAcademieModal(tr.guides, {
      feesLabel:    lang === 'zh' ? '课程与价格'         : lang === 'fr' ? 'Formations & Tarifs'        : 'Programmes & Fees',
      themesLabel:  lang === 'zh' ? '主题'               : lang === 'fr' ? 'Thématiques'                : 'Topics',
      contactLabel: lang === 'zh' ? '预约报名'           : lang === 'fr' ? "Réserver / S'inscrire"      : 'Book / Register',
      closeLabel:   lang === 'zh' ? '关闭'               : lang === 'fr' ? 'Fermer'                     : 'Close',
    });

  } else if (path === '/contact') {
    app.innerHTML = renderContact(t, lang);
    document.title = 'Contact — Baijiu Encyclopedia';

  /* ── PRODUCER / PRODUCT ── */
  } else if (path.startsWith('/producer/')) {
    const slug = path.replace('/producer/', '');
    app.innerHTML = renderProducer(slug, t, lang);
    setTitleFromH1();

  } else if (path.startsWith('/product/')) {
    const parts = path.replace('/product/', '').split('/');
    app.innerHTML = renderProduct(parts[0], parts[1] || 'flagship', t, lang);
    setTitleFromH1();

  /* ── 404 → HOME ── */
  } else {
    app.innerHTML = renderHome(t, lang);
    setTitle('home');
  }

  /* ── NAVBAR MODE ── */
  const isHome = path === '/';
  if (isHome) {
    navbar.className = 'on-dark';
    window.addEventListener('scroll', onHomeScroll);
  } else {
    navbar.className = 'light';
    window.removeEventListener('scroll', onHomeScroll);
  }

  /* ── ACTIVE NAV LINKS ── */
  const programmePaths = ['/private-expositions', '/events', '/prestige-academie', '/producteurs'];
  document.querySelectorAll('[data-nav]').forEach(el => {
    el.classList.remove('active');
    const np = el.dataset.nav;
    if (
      np === path ||
      (np !== '/' && path.startsWith(np.split('/').slice(0, 2).join('/')))
    ) {
      el.classList.add('active');
    }
  });
  const dropdownTrigger = document.querySelector('.nav-dropdown-trigger');
  if (dropdownTrigger) {
    dropdownTrigger.classList.toggle('active', programmePaths.some(p => path.startsWith(p)));
  }

  updateStaticI18n();
  updateLangUI();
  setTimeout(() => revealObserver(), 60);
}

function onHomeScroll() {
  const nb = document.getElementById('main-navbar');
  nb.classList.toggle('scrolled', window.scrollY > 20);
}

/* ─────────────────────────────────────────────
   NAVIGATION
───────────────────────────────────────────── */
function navigate(path) {
  history.pushState({}, '', path);
  router(path);
}

document.addEventListener('click', e => {
  const el = e.target.closest('[data-nav]');
  if (el) {
    const href = el.dataset.nav;
    if (href && href.startsWith('/')) { e.preventDefault(); navigate(href); }
  }
});

window.addEventListener('popstate', () => router(location.pathname));

/* ─────────────────────────────────────────────
   MOBILE MENU
───────────────────────────────────────────── */
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

function closeMobile() {
  hamburger.classList.remove('open');
  mobileMenu.classList.remove('open');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', () => {
  const open = mobileMenu.classList.contains('open');
  if (open) {
    closeMobile();
  } else {
    hamburger.classList.add('open');
    mobileMenu.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
});

/* ─────────────────────────────────────────────
   LANG BUTTONS
───────────────────────────────────────────── */
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLang(btn.dataset.lang));
});

/* ─────────────────────────────────────────────
   BOOT
───────────────────────────────────────────── */
document.documentElement.lang = lang;
router(location.pathname);
updateStaticI18n();
updateLangUI();