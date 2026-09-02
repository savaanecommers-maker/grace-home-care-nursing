(function () {
  'use strict';

  // ===== Mobile navigation toggle =====
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('nav-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });

    // Close menu when a link is clicked (mobile)
    menu.addEventListener('click', function (e) {
      if (e.target.tagName === 'A' && menu.classList.contains('open')) {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ===== Dynamic footer year =====
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ===== Years of experience (founded 2022) =====
  var foundedYear = 2022;
  var years = new Date().getFullYear() - foundedYear;
  if (years < 1) years = 1;
  ['expYears', 'expYearsBadge'].forEach(function (id) {
    var el = document.getElementById(id);
    if (el) el.textContent = years;
  });

  // ===== Hero typing effect (cycles through multiple phrases) =====
  var typedEl = document.getElementById('typed');
  var heroPrefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  // treat small screens / touch devices as "no heavy animation" to prevent flicker
  var isMobile = window.matchMedia && window.matchMedia('(max-width: 820px)').matches;
  var noAnim = heroPrefersReduced || isMobile;

  if (typedEl) {
    var phrases = [
      'Empowering Care, Enriching Lives',
      'Compassionate Home Nursing',
      'Care That Feels Like Family',
      'Your Health, Our Priority'
    ];

    if (noAnim) {
      typedEl.textContent = phrases[0];
      var caret = document.querySelector('.type-caret');
      if (caret) caret.style.display = 'none';
      startQuotes();
    } else {
      var pIndex = 0;
      var charIndex = 0;
      var deleting = false;
      var typeSpeed = 70;      // ms per character while typing
      var deleteSpeed = 40;    // ms per character while deleting
      var holdFull = 1600;     // pause when a phrase is fully typed
      var holdEmpty = 300;     // pause before typing next phrase

      startQuotes(); // quotes run independently below

      (function cycle() {
        var current = phrases[pIndex];
        if (!deleting) {
          typedEl.textContent = current.slice(0, charIndex);
          charIndex++;
          if (charIndex > current.length) {
            deleting = true;
            setTimeout(cycle, holdFull);
            return;
          }
          setTimeout(cycle, typeSpeed);
        } else {
          typedEl.textContent = current.slice(0, charIndex);
          charIndex--;
          if (charIndex < 0) {
            deleting = false;
            charIndex = 0;
            pIndex = (pIndex + 1) % phrases.length;
            setTimeout(cycle, holdEmpty);
            return;
          }
          setTimeout(cycle, deleteSpeed);
        }
      })();
    }
  } else {
    startQuotes();
  }

  // ===== Rotating hero quotes =====
  function startQuotes() {
    var quoteEl = document.getElementById('heroQuote');
    if (!quoteEl) return;
    var quotes = [
      'Compassionate care where you call home.',
      'We treat every patient like family.',
      'Your health is our priority, every single day.',
      'Trusted by 255+ families across Vizag.',
      'Skilled nurses, right at your doorstep.',
      'Caring hands, healing hearts.'
    ];
    var qi = 0;

    function showQuote() {
      quoteEl.textContent = '“' + quotes[qi] + '”';
      quoteEl.classList.remove('fade');
    }

    showQuote();

    if (noAnim) return; // no rotation on mobile / reduced motion

    // gentle, slower crossfade so it reads as an elegant transition (not a blink)
    setInterval(function () {
      quoteEl.classList.add('fade');
      setTimeout(function () {
        qi = (qi + 1) % quotes.length;
        showQuote();
      }, 700);
    }, 5000);
  }

  // ===== Scroll reveal (fail-safe) =====
  var revealTargets = Array.prototype.slice.call(document.querySelectorAll(
    '.card, .why-item, .testimonial, .stat, .about-copy, .about-visual, .contact-info, .contact-form, .section-head, .chairman-card, .step, .gallery-item'
  ));
  function revealAll() {
    revealTargets.forEach(function (el) { el.classList.add('visible'); });
  }

  if (!('IntersectionObserver' in window) || noAnim) {
    // no animation on mobile / reduced motion — everything visible immediately
    revealAll();
  } else {
    // enable JS-driven animation only now that we know JS is running & supported
    document.documentElement.classList.add('js-anim');
    revealTargets.forEach(function (el) { el.classList.add('reveal'); });

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0,
      rootMargin: '0px 0px 0px 0px'
    });

    revealTargets.forEach(function (el) { observer.observe(el); });

    // Reveal anything already in view on load right away
    requestAnimationFrame(function () {
      revealTargets.forEach(function (el) {
        var r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) el.classList.add('visible');
      });
    });

    // Safety net: if anything is still hidden after 2.5s, reveal it so nothing stays blank
    setTimeout(revealAll, 2500);
  }

  // ===== Contact form validation =====
  var form = document.getElementById('contactForm');
  var status = document.getElementById('formStatus');

  function isEmail(v) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  }

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      status.textContent = '';
      status.className = 'form-status';

      var name = form.name;
      var phone = form.phone;
      var email = form.email;
      var valid = true;

      [name, phone, email].forEach(function (f) { f.classList.remove('invalid'); });

      if (!name.value.trim()) { name.classList.add('invalid'); valid = false; }
      if (!phone.value.trim()) { phone.classList.add('invalid'); valid = false; }
      if (!isEmail(email.value.trim())) { email.classList.add('invalid'); valid = false; }

      if (!valid) {
        status.textContent = 'Please fill in your name, phone, and a valid email.';
        status.classList.add('error');
        return;
      }

      // Simulated successful submission (no backend)
      status.textContent = 'Thank you! We received your request. For urgent care, call us at +91 63010 52929.';
      status.classList.add('success');
      form.reset();
    });
  }

  // ===== Header shadow + scroll progress + back-to-top =====
  var header = document.querySelector('.site-header');
  var progress = document.getElementById('scrollProgress');
  var topBtn = document.getElementById('scrollTop');

  var scrollTicking = false;
  var lastScrolled = null;
  var lastTop = null;

  function updateScroll() {
    scrollTicking = false;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    var pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    if (progress) progress.style.width = pct + '%';

    var isScrolled = scrollTop > 10;
    if (header && isScrolled !== lastScrolled) {
      header.classList.toggle('scrolled', isScrolled);
      lastScrolled = isScrolled;
    }
    var showTop = scrollTop > 500;
    if (topBtn && showTop !== lastTop) {
      topBtn.classList.toggle('show', showTop);
      lastTop = showTop;
    }
  }

  function onScroll() {
    if (!scrollTicking) {
      scrollTicking = true;
      window.requestAnimationFrame(updateScroll);
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  updateScroll();

  if (topBtn) {
    topBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ===== Animated count-up for stats =====
  var stats = document.querySelectorAll('.stat-num');

  function animateCount(el) {
    var raw = el.textContent.trim();
    var match = raw.match(/([\d.]+)/);
    if (!match) return; // non-numeric (e.g., "No:1", "7 Days") - leave as is
    var target = parseFloat(match[1]);
    var suffix = raw.slice(match.index + match[1].length);
    var prefix = raw.slice(0, match.index);
    var isDecimal = match[1].indexOf('.') !== -1;
    var duration = 1400;
    var startTime = null;

    function step(ts) {
      if (!startTime) startTime = ts;
      var p = Math.min((ts - startTime) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      var val = target * eased;
      el.textContent = prefix + (isDecimal ? val.toFixed(1) : Math.round(val)) + suffix;
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = raw;
    }
    requestAnimationFrame(step);
  }

  var prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if ('IntersectionObserver' in window && !prefersReduced) {
    var statObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          statObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    stats.forEach(function (el) { statObserver.observe(el); });
  }

  // ===== Gallery: build from asset list =====
  var galleryFiles = [
    'ceo taking award.jpeg', 'home care nursing services.webp', 'care giving.webp',
    'Elederly care.jpeg', 'elderly care 2.jpeg', 'old age home care.webp',
    'personal care.webp', 'Icu setup.webp', 'grace home care services to the NRI.webp',
    'care take service.webp', 'home care services to the Indian Navy.webp',
    'best home care services in vizag.webp', 'home care nursing.webp',
    'home care services in vizag.webp', 'NRI services in vizag.webp',
    '1.jpeg', '2.jpeg', '3.jpeg', '5.jpeg', '6.jpeg',
    '10.jpeg', '13.jpeg', '15.jpeg', '17.jpeg', '19.jpeg', '21.jpeg', '23.jpeg',
    'unnamed.webp', 'unnamed (1).webp', 'unnamed (2).webp', 'unnamed (3).webp',
    'unnamed (4).webp', 'unnamed (5).webp', 'unnamed (6).webp', 'unnamed (7).webp',
    'unnamed (8).webp', 'unnamed (9).webp', 'unnamed (10).webp', 'unnamed (11).webp',
    'unnamed (12).webp', 'unnamed (13).webp', 'unnamed (14).webp', 'unnamed (15).webp',
    'unnamed (16).webp', 'unnamed (17).webp', 'unnamed (18).webp', 'unnamed (19).webp',
    'unnamed (20).webp', 'unnamed (21).webp', 'unnamed (22).webp', 'unnamed (23).webp',
    'unnamed (24).webp', 'unnamed (25).webp', 'unnamed (26).webp', 'unnamed (27).webp',
    'unnamed (28).webp', 'unnamed (29).webp', 'unnamed (30).webp', 'unnamed (31).webp',
    'unnamed (32).webp', 'unnamed (33).webp', 'unnamed (34).webp', 'unnamed (35).webp',
    'unnamed (36).webp', 'unnamed (37).webp', 'unnamed (38).webp', 'unnamed (39).webp',
    'unnamed (40).webp', 'unnamed (41).webp', 'unnamed (42).webp', 'unnamed (43).webp',
    'unnamed (44).webp', 'unnamed (45).webp', 'unnamed (46).webp', 'unnamed (47).webp',
    'unnamed (48).webp', 'unnamed (49).webp', 'unnamed (50).webp', 'unnamed (51).webp',
    'unnamed (52).webp', 'unnamed (53).webp', 'unnamed (54).webp', 'unnamed (55).webp',
    'unnamed (56).webp', 'unnamed (57).webp', 'unnamed (58).webp', 'unnamed (59).webp',
    'unnamed (60).webp', 'unnamed (61).webp', 'unnamed (62).webp'
  ];

  var captionMap = {
    'ceo taking award': 'Chairman Receiving an Award',
    'Elederly care': 'Elderly Care',
    'elderly care 2': 'Elderly Care',
    'home care nursing services': 'Home Care Nursing',
    'grace home care services to the NRI': 'NRI Family Care',
    'home care services to the Indian Navy': 'Serving the Indian Navy',
    'best home care services in vizag': 'Trusted in Vizag',
    'Icu setup': 'Home ICU Setup',
    'care take service': 'Care Taker Service',
    'care giving': 'Compassionate Caregiving'
  };

  function prettyCaption(file) {
    var base = file.replace(/\.(webp|jpe?g|png)$/i, '');
    if (captionMap[base]) return captionMap[base];
    if (/^unnamed/i.test(base) || /^\d+$/.test(base)) return 'Grace Home Care';
    return base.replace(/\b\w/g, function (c) { return c.toUpperCase(); });
  }

  var galleryGrid = document.getElementById('galleryGrid');
  var galleryMoreBtn = document.getElementById('galleryMore');
  var galleryMoreWrap = galleryMoreBtn ? galleryMoreBtn.parentNode : null;
  var GALLERY_BATCH = 8;
  var galleryShown = 0;

  function renderGalleryBatch() {
    if (!galleryGrid) return;
    var end = Math.min(galleryShown + GALLERY_BATCH, galleryFiles.length);
    for (var i = galleryShown; i < end; i++) {
      var file = galleryFiles[i];
      var fig = document.createElement('figure');
      fig.className = 'gallery-item';
      var img = document.createElement('img');
      img.src = 'assets/' + encodeURIComponent(file);
      img.alt = prettyCaption(file);
      img.loading = 'lazy';
      var cap = document.createElement('figcaption');
      cap.textContent = prettyCaption(file);
      fig.appendChild(img);
      fig.appendChild(cap);
      galleryGrid.appendChild(fig);
    }
    galleryShown = end;
    if (galleryShown >= galleryFiles.length && galleryMoreWrap) {
      galleryMoreWrap.classList.add('hidden');
    }
    bindGalleryItems();
  }

  if (galleryGrid) {
    renderGalleryBatch();
    if (galleryMoreBtn) {
      galleryMoreBtn.addEventListener('click', renderGalleryBatch);
    }
  }

  // ===== Gallery lightbox =====
  var galleryItems = [];
  function bindGalleryItems() {
    galleryItems = Array.prototype.slice.call(document.querySelectorAll('.gallery-item img'));
  }
  // event delegation: one listener on the grid handles all (current + future) items
  if (galleryGrid) {
    galleryGrid.addEventListener('click', function (e) {
      var fig = e.target.closest('.gallery-item');
      if (!fig) return;
      var img = fig.querySelector('img');
      var idx = galleryItems.indexOf(img);
      if (idx === -1) { bindGalleryItems(); idx = galleryItems.indexOf(img); }
      if (idx !== -1) openLightbox(idx);
    });
  }
  var lightbox = document.getElementById('lightbox');
  var lbImg = document.getElementById('lightboxImg');
  var lbCaption = document.getElementById('lightboxCaption');
  var lbClose = document.getElementById('lightboxClose');
  var lbPrev = document.getElementById('lightboxPrev');
  var lbNext = document.getElementById('lightboxNext');
  var currentIndex = 0;

  function showImage(i) {
    if (i < 0) i = galleryItems.length - 1;
    if (i >= galleryItems.length) i = 0;
    currentIndex = i;
    var img = galleryItems[i];
    lbImg.src = img.src;
    lbImg.alt = img.alt;
    var fig = img.closest('.gallery-item');
    var cap = fig ? fig.querySelector('figcaption') : null;
    lbCaption.textContent = cap ? cap.textContent : img.alt;
  }

  function openLightbox(i) {
    if (lbPrev) lbPrev.style.display = '';
    if (lbNext) lbNext.style.display = '';
    showImage(i);
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // open lightbox for a standalone image (hero, etc.) — no prev/next
  function openStandaloneLightbox(src, caption) {
    if (!lightbox) return;
    lbImg.src = src;
    lbImg.alt = caption || '';
    lbCaption.textContent = caption || '';
    if (lbPrev) lbPrev.style.display = 'none';
    if (lbNext) lbNext.style.display = 'none';
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  // any image with data-lightbox opens standalone
  document.querySelectorAll('[data-lightbox]').forEach(function (img) {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', function () {
      openStandaloneLightbox(img.src, img.getAttribute('data-lightbox') || img.alt);
    });
  });

  if (lightbox) {
    if (lbClose) lbClose.addEventListener('click', closeLightbox);
    if (lbPrev) lbPrev.addEventListener('click', function () { lbPrev.style.display = ''; lbNext.style.display = ''; showImage(currentIndex - 1); });
    if (lbNext) lbNext.addEventListener('click', function () { lbPrev.style.display = ''; lbNext.style.display = ''; showImage(currentIndex + 1); });

    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', function (e) {
      if (!lightbox.classList.contains('open')) return;
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
      else if (e.key === 'ArrowRight') showImage(currentIndex + 1);
    });
  }

  // ===== Service detail modals =====
  var openServiceModal = null;

  function closeServiceModal() {
    if (!openServiceModal) return;
    openServiceModal.classList.remove('open');
    openServiceModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    openServiceModal = null;
  }

  function openModalById(id) {
    var modal = document.getElementById(id);
    if (!modal) return;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    openServiceModal = modal;
  }

  // open triggers (any element with data-modal, incl. whole service cards)
  document.querySelectorAll('[data-modal]').forEach(function (trigger) {
    trigger.addEventListener('click', function (e) {
      // if the click originated on a real link inside the card (e.g. external), let it work
      if (e.target.closest('a[href]')) return;
      openModalById(trigger.getAttribute('data-modal'));
    });
    // keyboard access for card-role buttons
    trigger.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModalById(trigger.getAttribute('data-modal'));
      }
    });
  });

  // close triggers + backdrop click
  document.querySelectorAll('.service-modal').forEach(function (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target === modal || e.target.closest('[data-modal-close]')) {
        closeServiceModal();
      }
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeServiceModal();
  });
})();
