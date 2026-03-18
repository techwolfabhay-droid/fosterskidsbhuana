// ── DEFAULTS ──────────────────────────────────
const DEFAULTS = {
  heroBg:        'images/hero.jpeg',
  heroBadge: 'Admissions Open · 2026–27 · Bhirr, Buhana',
  heroH1: 'Where Every Child\'s\nFuture Begins\nwith Joy & Care',
  heroP: 'Foster Play School, Bhirr, Buhana — a warm and nurturing early learning environment designed to spark curiosity, build confidence and celebrate every child\'s unique potential.',
  stat1N: '200+', stat1L: 'Happy Students',
  stat2N: '10+',  stat2L: 'Expert Teachers',
  stat3N: '5+',   stat3L: 'Years of Trust',
  stat4N: '4.9★', stat4L: 'Parent Rating',
  aboutImg1:     'images/about1.jpeg',
  aboutImg2:     'images/about2.jpeg',
  aboutBadgeNum: '5+',
  aboutBadgeLbl: 'Years of\nExcellence',
  aboutTitle: 'Foster Play School — Bhirr\'s Most Trusted Play School',
  aboutP1: 'Foster Play School is a premium early childhood education institution located in Bhirr, Tehsil Buhana, Rajasthan. We believe in nurturing every child\'s natural love for learning through activity-based, play-centred education.',
  aboutP2: 'Our expert educators, child-friendly infrastructure and warm family atmosphere make FosterKids the top choice for parents in Bhirr and Buhana.',
  founderName: 'School Founder',
  founderRole: 'Founder & Director · Mr Naresh Yadav',
  founderQuals: 'Passionate about Early Childhood Education',
  founderPhoto:  'images/founder.jpeg',
  founderMsg: '"At FosterKids, we believe that the foundation built in a child\'s early years shapes everything that follows. Our mission is not just to educate — it is to inspire, to nurture and to celebrate every child\'s unique gift.\n\nWe started this school with one simple vision: to give the children of Bhirr and Buhana a world-class early education right in their own community.\n\nWe warmly invite you to visit our campus and experience the FosterKids difference for yourself. Your child\'s bright future begins here."',
  admBannerTitle: 'Admissions Open — Academic Year 2026–27',
  admBannerSub: 'Play Group · Pre-Nursery · Nursery  |  Limited Seats — Enroll Today!',
  admText: 'Admissions are now open for 2025–26. Our process is simple, friendly and parent-oriented.',
  locAddress: 'Foster Play School,\nVPO - Bhirr, Main Pacheri to Buhana Road,\nNear Bank of Baroda,\nTehsil Buhana, Rajasthan - 333515',
  locPhone: '+91 9729313222',
  locEmail: 'fosterkidsbhirr@gmail.com',
  locIg: '@fosterkidsbuhana',
  hoursWeekday: '9:00 AM – 2:00 PM',
  hoursSat: '9:00 AM – 2:00 PM',
  hoursSun: 'Closed',
  hoursOffice: '9:00 AM – 2:00 PM',
  igHandle: '@fosterkidsbuhana',
  igUrl: 'https://www.instagram.com/fosterkidsbuhana?igsh=MXd5NngyOW13bnI5Ng==',
  waNumber: '919729313222',
  schoolEmail: 'fosterkidsbhirr@gmail.com',
  gallery: [
    { url: 'images/gallery1.jpeg' },
    { url: 'images/gallery2.jpeg' },
    { url: 'images/gallery3.jpeg' },
    { url: 'images/gallery4.jpeg' },
    { url: 'images/gallery5.jpeg' },
    { url: 'images/gallery6.jpeg' },
    { url: 'images/gallery7.jpeg' },
    { url: 'images/gallery8.jpeg' },
    { url: 'images/gallery9.jpeg' },
    { url: 'images/gallery10.jpeg' },
  ]
};



// ── SIMPLE GETTER (defaults only) ────────────
function get(k) { return DEFAULTS[k]; }

// ── RENDER SITE ───────────────────────────────
function renderSite() {
  const waNum  = get('waNumber') || '919729313222';
  const igUrl  = get('igUrl')    || 'https://instagram.com/fosterkidsbuhana';

  document.getElementById('heroBg').style.backgroundImage = `url('${get('heroBg')}')`;
  document.getElementById('heroBadge').textContent = get('heroBadge');
  document.getElementById('heroH1').innerHTML = get('heroH1').replace(/\n/g, '<br/>');
  document.getElementById('heroP').textContent = get('heroP');

  ['stat1N','stat1L','stat2N','stat2L','stat3N','stat3L','stat4N','stat4L']
    .forEach(k => document.getElementById(k).textContent = get(k));

  document.getElementById('waHeroBtn').href = `https://wa.me/${waNum}`;

  document.getElementById('aboutImg1').src = get('aboutImg1');
  document.getElementById('aboutImg2').src = get('aboutImg2');
  document.getElementById('aboutBadgeNum').textContent = get('aboutBadgeNum');
  document.getElementById('aboutBadgeLbl').innerHTML = get('aboutBadgeLbl').replace(/\n/g, '<br/>');
  document.getElementById('aboutTitle').textContent = get('aboutTitle');
  document.getElementById('aboutP1').textContent = get('aboutP1');
  document.getElementById('aboutP2').textContent = get('aboutP2');

  const fp = get('founderPhoto');
  document.getElementById('founderPhoto').src  = fp;
  document.getElementById('founderAvatar').src = fp;
  document.getElementById('founderName').textContent     = get('founderName');
  document.getElementById('founderRole').textContent     = get('founderRole');
  document.getElementById('founderCardName').textContent = get('founderName');
  document.getElementById('founderCardRole').textContent = get('founderRole');
  document.getElementById('founderSign').textContent     = get('founderName');
  document.getElementById('founderQuals').textContent    = get('founderQuals');
  document.getElementById('founderMsg').innerHTML        = get('founderMsg').replace(/\n/g, '<br/>');

  document.getElementById('admBannerTitle').textContent = get('admBannerTitle');
  document.getElementById('admBannerSub').textContent   = get('admBannerSub');
  document.getElementById('admText').textContent        = get('admText');
  document.getElementById('admWaBtn').href              = `https://wa.me/${waNum}`;

  document.getElementById('locAddress').innerHTML = get('locAddress').replace(/\n/g, '<br/>');
  document.getElementById('locPhone').innerHTML   = get('locPhone').replace(/\n/g, '<br/>');
  document.getElementById('locEmail').innerHTML   = `<a href="mailto:${get('locEmail')}">${get('locEmail')}</a>`;
  document.getElementById('locIg').innerHTML      = `<a href="${igUrl}" target="_blank">${get('locIg')}</a>`;
  document.getElementById('hoursWeekday').textContent = get('hoursWeekday');
  document.getElementById('hoursSat').textContent     = get('hoursSat');
  document.getElementById('hoursSun').textContent     = get('hoursSun');
  document.getElementById('hoursOffice').textContent  = get('hoursOffice');
  document.getElementById('locWaBtn').href            = `https://wa.me/${waNum}`;

  document.getElementById('igHandle').textContent   = get('igHandle');
  document.getElementById('igFollowLink').href      = igUrl;

  renderGallery();
}

// ── GALLERY ───────────────────────────────────
let galCurrentIndex = 0;
const VISIBLE = 3;

function renderGallery() {
  const imgs   = get('gallery');
  const slider = document.getElementById('gallerySlider');
  const dots   = document.getElementById('galDots');
  slider.innerHTML = '';
  dots.innerHTML   = '';

  imgs.forEach((img, i) => {
    const div = document.createElement('div');
    div.className = 'gi';
    div.innerHTML = `<img src="${img.url}" alt="Gallery" loading="lazy"/><div class="gi-over"><i class="fa-solid fa-expand"></i></div>`;
    div.onclick = () => openLB(i);
    slider.appendChild(div);
  });

  const total = Math.max(1, imgs.length - VISIBLE + 1);
  for (let i = 0; i < total; i++) {
    const d = document.createElement('div');
    d.className = 'gal-dot' + (i === galCurrentIndex ? ' active' : '');
    d.onclick = () => goToSlide(i);
    dots.appendChild(d);
  }
  updateSlider();
}

function updateSlider() {
  const slider = document.getElementById('gallerySlider');
  const items  = slider.querySelectorAll('.gi');
  if (!items.length) return;
  slider.scrollTo({ left: galCurrentIndex * (items[0].offsetWidth + 14), behavior: 'smooth' });
  document.querySelectorAll('.gal-dot').forEach((d, i) => d.classList.toggle('active', i === galCurrentIndex));
}

function slideGallery(dir) {
  const max = Math.max(0, get('gallery').length - VISIBLE);
  galCurrentIndex = Math.min(max, Math.max(0, galCurrentIndex + dir));
  updateSlider();
}

function goToSlide(i) { galCurrentIndex = i; updateSlider(); }

// ── LIGHTBOX ──────────────────────────────────
let lbIndex = 0;
function openLB(i) {
  lbIndex = i;
  document.getElementById('lbImg').src = get('gallery')[i].url;
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLB() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}
function lbNav(dir) {
  const imgs = get('gallery');
  lbIndex = (lbIndex + dir + imgs.length) % imgs.length;
  document.getElementById('lbImg').src = imgs[lbIndex].url;
}



// ── TOAST ─────────────────────────────────────
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

// ── ENQUIRY FORMS ─────────────────────────────
function getFields() {
  return {
    pName: document.getElementById('pName').value.trim(),
    cName: document.getElementById('cName').value.trim(),
    phone: document.getElementById('phone').value.trim(),
    grade: document.getElementById('grade').value,
    age:   document.getElementById('age').value,
    msg:   document.getElementById('msg').value.trim()
  };
}

function sendEnquiryWA() {
  const f = getFields();
  if (!f.pName || !f.phone || !f.grade) {
    alert('Please fill in Parent Name, Phone Number and Program.');
    return;
  }
  const wa =
    `*Admission Enquiry — Foster Play School, Bhirr*\n\n` +
    `*Parent Name:* ${f.pName}\n` +
    `*Child Name:* ${f.cName || 'Not provided'}\n` +
    `*Phone:* ${f.phone}\n` +
    `*Program:* ${f.grade}\n` +
    (f.age ? `*Child Age:* ${f.age}\n` : '') +
    (f.msg ? `*Message:* ${f.msg}\n` : '') +
    `\nKindly contact us at the earliest. Thank you!`;
  window.open(`https://wa.me/${get('waNumber') || '919729313222'}?text=${encodeURIComponent(wa)}`, '_blank');
}

function sendEnquiryEmail() {
  const f = getFields();
  if (!f.pName || !f.phone || !f.grade) {
    alert('Please fill in Parent Name, Phone Number and Program.');
    return;
  }
  const to   = get('schoolEmail') || 'fosterkidsbhirr@gmail.com';
  const sub  = `Admission Enquiry — ${f.grade} | Foster Play School, Bhirr`;
  const body =
    `Dear FosterKids Team,\n\nAdmission enquiry details:\n\n` +
    `Parent: ${f.pName}\nChild: ${f.cName || 'Not provided'}\nPhone: ${f.phone}\nProgram: ${f.grade}\n` +
    (f.age ? `Age: ${f.age}\n` : '') +
    (f.msg ? `\nMessage: ${f.msg}\n` : '') +
    `\nThank you!`;
  window.location.href = `mailto:${to}?subject=${encodeURIComponent(sub)}&body=${encodeURIComponent(body)}`;
}



// ── INIT ──────────────────────────────────────
window.addEventListener('load', () => {
  renderSite();
  setTimeout(() => document.getElementById('loader').classList.add('gone'), 2000);
});

// ── NAV & SCROLL ──────────────────────────────
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => nav.classList.toggle('solid', window.scrollY > 60));

function openD()  { document.getElementById('drawer').classList.add('open');    document.body.style.overflow = 'hidden'; }
function closeD() { document.getElementById('drawer').classList.remove('open'); document.body.style.overflow = ''; }

// ── INTERSECTION OBSERVER (fade-in) ───────────
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.08 });
document.querySelectorAll('.fade').forEach(el => io.observe(el));

// ── SMOOTH SCROLL FOR ANCHOR LINKS ────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (!href || href === '#' || href.startsWith('javascript')) return;
    const t = document.querySelector(href);
    if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); }
  });
});

// ── LIGHTBOX CLICK OUTSIDE ────────────────────
document.getElementById('lightbox').addEventListener('click', function (e) {
  if (e.target === this) closeLB();
});


