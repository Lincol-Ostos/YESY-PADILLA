/* =====================================================
   YESY PADILLA — script.js
   Handles: nav, cursor, scroll reveal, gallery,
   lightbox, social hover, contact form + EmailJS
   ===================================================== */

/* ══════════════════════════════════════
   CONFIG — edit these values
══════════════════════════════════════ */
const CONFIG = {
  // EmailJS — replace with your real credentials (see deployment guide)
  emailjs: {
    serviceId: 'service_bregrha',
    templateId: 'template_a87c4vl',
    publicKey: 'lzWoi5tEDjixmy88k'
  },
  // WhatsApp — replace with your number (international format, no + or spaces)
  whatsappNumber: '921546974',
};

/* ══════════════════════════════════════
   GALLERY DATA
   Add / remove items here.
   Categories: 'editorial' | 'lifestyle' | 'portrait'
══════════════════════════════════════ */
const galleryData = [
 
    /*{
   src: 'Agru-07.jpeg',
    alt: 'Lifestyle candid',
    label: 'Agrupación',
    category: '',
  },*/
  //////AGRUPACION INICIO
  {
     src: '02-01.jpg',
    alt: 'YESI PADILLA',
    label: 'YESY PADILLA',
    category: 'agrupacion',
  },
  {
   src: 'Agru-06.jpeg',
    alt: 'Integrantes de la agrupación YESI PADILLA',
    label: 'BAILARINES',
    category: 'agrupacion',
  },
  {
    src: 'Agru-05.jpeg',
    alt: 'Integrantes de la agrupación YESI PADILLA',
    label: 'Yanbier Mendoza',
    category: 'agrupacion',
  },
  {
   src: 'Agru-04.jpeg',
    alt: 'Integrantes de la agrupación YESI PADILLA',
    label: 'Yersi',
    category: 'agrupacion',
  },
  {
    src: 'Agru-03.jpeg',
    alt: 'Integrantes de la agrupación YESI PADILLA',
    label: 'Michel Sánchez',
    category: 'agrupacion',
  },
  {
    src: 'Agru-02.jpeg',
    alt: 'Integrantes de la agrupación YESI PADILLA',
    label: 'Edwin Rosales',
    category: 'agrupacion',
  },
  {
    src: 'Agru-01.jpeg',
    alt: 'Integrantes de la agrupación YESI PADILLA',
    label: 'LUIS',
    category: 'agrupacion',
  },
/////////AGRUPACION FIN
   /*{
    src: 'tink-01.jpg',
    alt: 'Editorial black & white',
    label: 'Recuerdos',
    category: 'recuerdos',
  },*/
  /////////CONCIERTOS INICIO
    {
    src: 'CON-01.jpeg',
    alt: 'Presentation in live of Yesy Padilla',
    label: 'Conciertos',
    category: 'conciertos',
  },
  {
    src: 'CON-02.jpeg',
    alt: 'Presentation in live of Yesy Padilla',
    label: 'Conciertos',
    category: 'conciertos',   
  },
  {
    src: 'CON-03.jpeg',
    alt: 'Presentation in live of Yesy Padilla',
    label: 'Conciertos',
    category: 'conciertos',
  },
    {
    src: 'CON-04.png',
    alt: 'Presentación en vivo de Yesy Padilla',
    label: 'Conciertos',
    category: 'conciertos',
  },
 
/////////////// CONCIERTOS FIN 

////////RECUERDOS INICIO
    {
    src: 'Rec-01.jpeg',
    alt: 'Recuerdos Yesy Padilla',
    label: 'SAN LUIS',
    category: 'recuerdos',
  },
  {
    src: 'Rec-02.jpeg',
    alt: 'Recuerdos Yesy Padilla',
    label: 'Grabación de un video',
    category: 'recuerdos',
  },
  {
    src: 'Rec-03.jpeg',
    alt: 'Recuerdos Yesy Padilla',
    label: 'LA CHOSA CARHUANCA',
    category: 'recuerdos',
  },
  {
    src: 'Rec-04.jpeg',
    alt: 'Recuerdos Yesy Padilla',
    label: 'Grabación de un video',
    category: 'recuerdos',
  },
   {
    src: 'Rec-05.jpeg',
    alt: 'Recuerdos Yesy Padilla',
    label: 'Grabación de un video',
    category: 'recuerdos',
  },
    {
      src: 'Rec-06.jpeg', 
      alt: 'Recuerdos Yesy Padilla',
      label: 'Grabación de un video',
      category: 'recuerdos',
    },

  ////////RECUERDOS FIN

  ///////// COLABORADORES INICIO
    {
    src: 'Colab-01.jpeg',
    alt: '  Colaboradores Yesy Padilla',
    label: 'POLLERIA KIARA',
    category: 'colaboradoes',
  },
  {
    src: 'JJYY.png',
    alt: 'Colaboradores Yesy Padilla',
    label: 'J&Y',
    category: 'colaboradoes',
  },
  //////// COLABORADORES FIN
];

/* ══════════════════════════════════════
   DOM READY
══════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initEmailJS();
  initCursor();
  initNav();
  initScrollReveal();
  initGallery();
  initLightbox();
  initContactForm();
  setYear();
});

/* ══════════════════════════════════════
   EMAILJS INIT
══════════════════════════════════════ */
function initEmailJS() {
  if (typeof emailjs !== 'undefined') {
    emailjs.init(CONFIG.emailjs.publicKey);
  }
}

/* ══════════════════════════════════════
   CUSTOM CURSOR
══════════════════════════════════════ */
function initCursor() {
  const cursor = document.getElementById('cursor');
  if (!cursor) return;

  // Limpieza absoluta de cualquier residuo interno
  cursor.innerHTML = '';

  // Activar solo en computadoras con mouse preciso
  if (!window.matchMedia('(pointer: fine)').matches) return;

  let currentScale = 1;

  document.addEventListener('mousemove', (e) => {
    // Al mover el mouse nos aseguramos de que el cursor sea visible y se mueva en 3D de forma fluida junto con su escala actual
    cursor.style.opacity = '1';
    cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%) scale(${currentScale})`;
  });

  // Ocultar la rosa si el puntero sale de la ventana del navegador para evitar que se quede congelada en los bordes
  document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
  });

  // Efecto hover coordinando dinámicamente la escala sin romper la matriz de traslación
  document.querySelectorAll('a, button, .gallery__item, .social__card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      currentScale = 1.3;
    });
    el.addEventListener('mouseleave', () => {
      currentScale = 1;
    });
  });
}

/* ══════════════════════════════════════
   NAV — scroll class + mobile toggle
══════════════════════════════════════ */
function initNav() {
  const nav    = document.getElementById('nav');
  const toggle = document.getElementById('navToggle');
  const links  = document.getElementById('navLinks');

  // Add scrolled class
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  // Mobile toggle
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open);
  });

  // Close on link click
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      // Restore scroll when menu closes via link tap on mobile
      document.body.style.overflow = '';
    });
  });

  // Prevent body scroll when mobile nav is open
  toggle.addEventListener('click', () => {
    const isOpen = links.classList.contains('open');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });
}

/* ══════════════════════════════════════
   SCROLL REVEAL
══════════════════════════════════════ */
function initScrollReveal() {
  const els = document.querySelectorAll('[data-reveal]');

  // Fallback: if IntersectionObserver isn't supported (very old Safari), reveal all immediately
  if (!('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Small delay to let Safari repaint before toggling class
        requestAnimationFrame(() => {
          entry.target.classList.add('revealed');
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => observer.observe(el));
}

/* ══════════════════════════════════════
   GALLERY — render + filter
══════════════════════════════════════ */
let currentFilter = 'all';

function initGallery() {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;

  // Render items
  galleryData.forEach((item, index) => {
    const div = document.createElement('div');
    // Use pointer cursor on touch devices; zoom-in is set via CSS on hover-capable devices
    div.className = `gallery__item${item.tall ? ' gallery__item--tall' : ''}`;
    div.dataset.category = item.category;
    div.dataset.index    = index;
    div.innerHTML = `
      <img
        class="gallery__item-img"
        src="${item.src}"
        alt="${item.alt}"
        loading="lazy"
      />
      <div class="gallery__item-overlay">
        <span class="gallery__item-label">${item.label}</span>
      </div>
      <svg class="gallery__item-icon" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="1.5" width="28" height="28">
        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
      </svg>
    `;
    div.addEventListener('click', () => openLightbox(index));
    grid.appendChild(div);
  });

  // Filter buttons
  document.querySelectorAll('.gallery__filter').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelector('.gallery__filter.active')?.classList.remove('active');
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      filterGallery(currentFilter);
    });
  });
}

function filterGallery(filter) {
  document.querySelectorAll('.gallery__item').forEach(item => {
    const match = filter === 'all' || item.dataset.category === filter;
    item.classList.toggle('hidden', !match);
    if (match) {
      // Stagger re-appearance
      item.style.animation = 'none';
      item.offsetHeight; // reflow
      item.style.animation = '';
    }
  });
}

/* ══════════════════════════════════════
   LIGHTBOX
══════════════════════════════════════ */
let lightboxIndex = 0;

function initLightbox() {
  const lb      = document.getElementById('lightbox');
  const closeBtn = document.getElementById('lightboxClose');
  const prevBtn  = document.getElementById('lightboxPrev');
  const nextBtn  = document.getElementById('lightboxNext');

  closeBtn.addEventListener('click', closeLightbox);
  prevBtn.addEventListener('click',  () => navigateLightbox(-1));
  nextBtn.addEventListener('click',  () => navigateLightbox(1));

  // Close on backdrop click
  lb.addEventListener('click', (e) => {
    if (e.target === lb) closeLightbox();
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lb.classList.contains('active')) return;
    if (e.key === 'Escape')      closeLightbox();
    if (e.key === 'ArrowLeft')   navigateLightbox(-1);
    if (e.key === 'ArrowRight')  navigateLightbox(1);
  });

  // Touch/swipe
  let touchStartX = 0;
  lb.addEventListener('touchstart', (e) => { touchStartX = e.changedTouches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend',   (e) => {
    const delta = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) navigateLightbox(delta > 0 ? 1 : -1);
  });
}

function openLightbox(index) {
  // Only show items that pass current filter
  const visible = galleryData.filter((_, i) => {
    const item = document.querySelector(`.gallery__item[data-index="${i}"]`);
    return item && !item.classList.contains('hidden');
  });
  lightboxIndex = visible.findIndex((_, i) => {
    const originalIndex = galleryData.indexOf(visible[i]);
    return originalIndex === index;
  });
  if (lightboxIndex === -1) lightboxIndex = 0;

  setLightboxImage(visible);
  document.getElementById('lightbox').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
  document.body.style.overflow = '';
}

function navigateLightbox(dir) {
  const visible = galleryData.filter((_, i) => {
    const item = document.querySelector(`.gallery__item[data-index="${i}"]`);
    return item && !item.classList.contains('hidden');
  });
  lightboxIndex = (lightboxIndex + dir + visible.length) % visible.length;
  setLightboxImage(visible);
}

function setLightboxImage(visible) {
  const item = visible[lightboxIndex];
  if (!item) return;
  const img = document.getElementById('lightboxImg');
  const cap = document.getElementById('lightboxCaption');
  img.src = item.src.replace('w=600', 'w=1200');
  img.alt = item.alt;
  cap.textContent = item.label;
}

/* ══════════════════════════════════════
   CONTACT FORM
══════════════════════════════════════ */
function initContactForm() {
  const form       = document.getElementById('contactForm');
  const submitBtn  = document.getElementById('submitBtn');
  const statusEl   = document.getElementById('formStatus');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Validate
    const name    = form.from_name.value.trim();
    const email   = form.from_email.value.trim();
    const message = form.message.value.trim();
    let valid = true;

    [form.from_name, form.from_email, form.message].forEach(el => {
      el.closest('.form__group').classList.remove('error');
    });

    if (!name) {
      form.from_name.closest('.form__group').classList.add('error');
      valid = false;
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      form.from_email.closest('.form__group').classList.add('error');
      valid = false;
    }
    if (!message) {
      form.message.closest('.form__group').classList.add('error');
      valid = false;
    }

    if (!valid) {
      showStatus('Please fill in all fields correctly.', 'error');
      return;
    }

    // Loading state
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;
    showStatus('', '');

    try {
      // ── Option A: EmailJS (preferred) ──────────────────────
      if (typeof emailjs !== 'undefined' &&
          CONFIG.emailjs.serviceId !== 'YOUR_EMAILJS_SERVICE_ID') {
        await emailjs.sendForm(
          CONFIG.emailjs.serviceId,
          CONFIG.emailjs.templateId,
          form
        );
        showStatus('Message sent! I\'ll reply soon. ✦', 'success');
        form.reset();

      // ── Option B: WhatsApp fallback ────────────────────────
      } else {
        const text = encodeURIComponent(
          `Hi Yesy! I'm ${name} (${email}).\n\n${message}`
        );
        window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${text}`, '_blank');
        showStatus('Redirected to WhatsApp. Talk soon! ✦', 'success');
        form.reset();
      }
    } catch (err) {
      console.error('Form error:', err);
      showStatus('Something went wrong. Please try WhatsApp.', 'error');
    } finally {
      submitBtn.classList.remove('loading');
      submitBtn.disabled = false;
    }
  });
}

function showStatus(msg, type) {
  const el = document.getElementById('formStatus');
  el.textContent = msg;
  el.className = 'form__status' + (type ? ` ${type}` : '');
}

/* ══════════════════════════════════════
   FOOTER YEAR
══════════════════════════════════════ */
function setYear() {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
}