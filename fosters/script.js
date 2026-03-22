/* ══════════════════════════════════════════
   FOSTER KIDS SCHOOL — script.js (Updated)
══════════════════════════════════════════ */

const GALLERY = [
  'images/gallery1.jpeg',
  'images/gallery2.jpeg',
  'images/gallery3.jpeg',
  'images/gallery4.jpeg',
  'images/gallery5.jpeg',
  'images/gallery6.jpeg',
  'images/gallery7.jpeg',
  'images/gallery8.jpeg',
  'images/gallery9.jpeg',
  'images/gallery10.jpeg',
];

// ── SCROLL PROGRESS BAR ──────────────────────
function initScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = pct + '%';
  }, { passive: true });
}

// ── GALLERY ──────────────────────────────────
let galIndex = 0;
const VISIBLE = 3;

function buildGallery() {
  const slider = document.getElementById('gallerySlider');
  const dots   = document.getElementById('galDots');
  if (!slider || !dots) return;

  slider.innerHTML = '';
  dots.innerHTML   = '';

  GALLERY.forEach((url, i) => {
    const div = document.createElement('div');
    div.className = 'gi';
    div.innerHTML = `<img src="${url}" alt="Gallery ${i+1}" loading="lazy"/><div class="gi-over"><i class="fa-solid fa-expand"></i></div>`;
    div.onclick = () => openLB(i);
    slider.appendChild(div);
  });

  const totalDots = Math.max(1, GALLERY.length - VISIBLE + 1);
  for (let i = 0; i < totalDots; i++) {
    const d = document.createElement('div');
    d.className = 'gal-dot' + (i === 0 ? ' active' : '');
    d.onclick = () => { galIndex = i; updateSlider(); };
    dots.appendChild(d);
  }
  updateSlider();
}

function updateSlider() {
  const slider = document.getElementById('gallerySlider');
  if (!slider) return;
  const items = slider.querySelectorAll('.gi');
  if (!items.length) return;
  const w = items[0].offsetWidth + 14;
  slider.scrollTo({ left: galIndex * w, behavior: 'smooth' });
  document.querySelectorAll('.gal-dot').forEach((d, i) => d.classList.toggle('active', i === galIndex));
}

function slideGallery(dir) {
  const max = Math.max(0, GALLERY.length - VISIBLE);
  galIndex = Math.min(max, Math.max(0, galIndex + dir));
  updateSlider();
}

// ── LIGHTBOX ─────────────────────────────────
let lbIndex = 0;

function openLB(i) {
  lbIndex = i;
  const img = document.getElementById('lbImg');
  if (img) img.src = GALLERY[i];
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLB() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

function lbNav(dir) {
  lbIndex = (lbIndex + dir + GALLERY.length) % GALLERY.length;
  const img = document.getElementById('lbImg');
  if (img) img.src = GALLERY[lbIndex];
}

document.getElementById('lightbox').addEventListener('click', function(e) {
  if (e.target === this) closeLB();
});

// ── NAV ──────────────────────────────────────
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (nav) nav.classList.toggle('solid', window.scrollY > 60);
}, { passive: true });

function openD() {
  document.getElementById('drawer').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeD() {
  document.getElementById('drawer').classList.remove('open');
  document.body.style.overflow = '';
}

// ── SMOOTH SCROLL ────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (!href || href === '#' || href.startsWith('javascript')) return;
    const target = document.querySelector(href);
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});

// ── SECTION REVEAL (ZOOM EFFECT) ─────────────
function initSectionReveal() {
  const sections = document.querySelectorAll('.sec-reveal');
  if (!sections.length) return;

  const sObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('revealed');
        sObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.05 });

  sections.forEach(s => sObs.observe(s));
}

// ── FADE + ZOOM IN OBSERVER ───────────────────
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.07 });

document.querySelectorAll('.fade, .zoom-img').forEach(el => observer.observe(el));

// ── TESTIMONIALS AUTO SLIDER ──────────────────
let testIndex = 0;
let testTimer = null;

function initTestSlider() {
  const track = document.getElementById('testSlider');
  if (!track) return;

  const cards = track.querySelectorAll('.test-card-new');
  const perView = window.innerWidth <= 900 ? 1 : 3;
  const total = cards.length; // 4 cards
  const maxIndex = total - perView; // desktop=1, mobile=3

  testIndex = 0;

  // Dots
  const dots = document.getElementById('testDots');
  if (dots) {
    dots.innerHTML = '';
    for (let i = 0; i <= maxIndex; i++) {
      const d = document.createElement('div');
      d.className = 'test-dot' + (i === 0 ? ' active' : '');
      d.onclick = () => goToTest(i);
      dots.appendChild(d);
    }
  }

  resetTestTimer();
  const wrap = document.querySelector('.test-outer');
  if (wrap) {
    wrap.addEventListener('mouseenter', () => clearInterval(testTimer));
    wrap.addEventListener('mouseleave', resetTestTimer);
  }
}

function goToTest(i) {
  const track = document.getElementById('testSlider');
  if (!track) return;
  const cards = track.querySelectorAll('.test-card-new');
  const perView = window.innerWidth <= 900 ? 1 : 3;
  const maxIndex = cards.length - perView;

  testIndex = Math.max(0, Math.min(i, maxIndex));

  // Card width + margin
  const card = cards[0];
  const cardW = card.offsetWidth + 16;
  track.style.transform = `translateX(-${testIndex * cardW}px)`;

  document.querySelectorAll('.test-dot').forEach((d, idx) => d.classList.toggle('active', idx === testIndex));
  resetTestTimer();
}

function moveTest(dir) {
  const track = document.getElementById('testSlider');
  if (!track) return;
  const cards = track.querySelectorAll('.test-card-new');
  const perView = window.innerWidth <= 900 ? 1 : 3;
  const maxIndex = cards.length - perView;
  const next = testIndex + dir;
  if (next < 0) goToTest(maxIndex);
  else if (next > maxIndex) goToTest(0);
  else goToTest(next);
}

function resetTestTimer() {
  clearInterval(testTimer);
  testTimer = setInterval(() => moveTest(1), 4500);
}

// ── FACILITIES PARTICLES ──────────────────────
function initFacParticles() {
  const container = document.getElementById('facParticles');
  if (!container) return;
  const colors = ['rgba(245,166,35,', 'rgba(92,45,145,', 'rgba(233,30,140,'];
  for (let i = 0; i < 18; i++) {
    const p = document.createElement('div');
    p.className = 'fac-particle';
    const size = Math.random() * 6 + 3;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const opacity = Math.random() * 0.5 + 0.2;
    const left = Math.random() * 100;
    const delay = Math.random() * 8;
    const duration = Math.random() * 6 + 6;
    p.style.cssText = `
      width:${size}px; height:${size}px;
      background:${color}${opacity});
      left:${left}%;
      bottom:0;
      animation-duration:${duration}s;
      animation-delay:${delay}s;
    `;
    container.appendChild(p);
  }
}

// ── ENQUIRY FORM ──────────────────────────────
function sendEnquiryWA() {
  const pName = document.getElementById('pName').value.trim();
  const cName = document.getElementById('cName').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const grade = document.getElementById('grade').value;
  const age   = document.getElementById('age').value;
  const msg   = document.getElementById('msg').value.trim();

  if (!pName || !phone || !grade) {
    alert('Please fill in Parent Name, Phone Number and Program.');
    return;
  }

  const text =
    `*Admission Enquiry — Foster School, Bhirr, Buhana*\n\n` +
    `*Parent Name:* ${pName}\n` +
    `*Child Name:* ${cName || 'Not provided'}\n` +
    `*Phone:* ${phone}\n` +
    `*Program:* ${grade}\n` +
    (age ? `*Child Age:* ${age}\n` : '') +
    (msg ? `*Message:* ${msg}\n` : '') +
    `\nKindly contact us at the earliest. Thank you!`;

  window.open(`https://wa.me/919729313222?text=${encodeURIComponent(text)}`, '_blank');
}

function sendEnquiryEmail() {
  const pName = document.getElementById('pName').value.trim();
  const cName = document.getElementById('cName').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const grade = document.getElementById('grade').value;
  const age   = document.getElementById('age').value;
  const msg   = document.getElementById('msg').value.trim();

  if (!pName || !phone || !grade) {
    alert('Please fill in Parent Name, Phone Number and Program.');
    return;
  }

  const sub  = `Admission Enquiry — ${grade} | Foster School, Bhirr`;
  const body =
    `Dear FosterKids Team,\n\nAdmission enquiry details:\n\n` +
    `Parent: ${pName}\nChild: ${cName || 'Not provided'}\nPhone: ${phone}\nProgram: ${grade}\n` +
    (age ? `Age: ${age}\n` : '') +
    (msg ? `\nMessage: ${msg}\n` : '') +
    `\nThank you!`;

  window.location.href = `mailto:fosterkidsbhirr@gmail.com?subject=${encodeURIComponent(sub)}&body=${encodeURIComponent(body)}`;
}

// ── TOAST ─────────────────────────────────────
function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

// ── LOADER HIDE ───────────────────────────────
function hideLoader() {
  const loader = document.getElementById('loader');
  if (loader) loader.classList.add('gone');
}

// ── INIT ──────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  buildGallery();
  initScrollProgress();
  initSectionReveal();
  initTestSlider();
  initFacParticles();
  setTimeout(hideLoader, 1500);
});

window.addEventListener('load', () => {
  setTimeout(hideLoader, 1500);
});


