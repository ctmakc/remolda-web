/* ============================================
   REMOLDA — Main JavaScript
   ============================================ */

// ============================================
// NAVIGATION — scroll behavior + mobile toggle
// ============================================

const nav = document.querySelector('.nav');
const navToggle = document.querySelector('.nav-toggle');

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    nav?.classList.add('scrolled');
  } else {
    nav?.classList.remove('scrolled');
  }
});

navToggle?.addEventListener('click', () => {
  document.querySelector('.nav-links')?.classList.toggle('mobile-open');
});

// Highlight active nav link
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

// ============================================
// SCROLL ANIMATIONS — Intersection Observer
// ============================================

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-up').forEach(el => fadeObserver.observe(el));

// ============================================
// METHODOLOGY — Phase tabs
// ============================================

const phaseItems = document.querySelectorAll('.phase-item');

phaseItems.forEach((item, i) => {
  item.addEventListener('click', () => {
    phaseItems.forEach(p => p.classList.remove('active'));
    item.classList.add('active');
    updateCycleHighlight(i);
  });
});

function updateCycleHighlight(activeIndex) {
  document.querySelectorAll('.cycle-node').forEach((node, i) => {
    node.classList.toggle('active', i === activeIndex);
  });
}

let phaseRotateInterval;
function startPhaseRotation() {
  let current = 0;
  phaseRotateInterval = setInterval(() => {
    phaseItems.forEach(p => p.classList.remove('active'));
    phaseItems[current]?.classList.add('active');
    updateCycleHighlight(current);
    current = (current + 1) % phaseItems.length;
  }, 2500);
}

if (phaseItems.length > 0) {
  phaseItems[0]?.classList.add('active');
  startPhaseRotation();
  phaseItems.forEach(item => {
    item.addEventListener('click', () => clearInterval(phaseRotateInterval));
  });
}

// ============================================
// CYCLE DIAGRAM — SVG built via DOM API (no innerHTML)
// ============================================

function svgEl(tag, attrs) {
  const el = document.createElementNS('http://www.w3.org/2000/svg', tag);
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
  return el;
}

function buildCycleDiagram() {
  const wrap = document.querySelector('.cycle-svg-wrap');
  if (!wrap) return;

  const phases = ['DISCOVER', 'DESIGN', 'DEPLOY', 'OPTIMIZE', 'SCALE'];
  const size = 380;
  const cx = size / 2;
  const cy = size / 2;
  const r = 130;

  const svg = svgEl('svg', { width: size, height: size, viewBox: `0 0 ${size} ${size}` });

  // Defs — gradient via DOM
  const defs = svgEl('defs', {});
  const grad = svgEl('linearGradient', { id: 'goldGrad', x1: '0%', y1: '0%', x2: '100%', y2: '100%' });
  const stop1 = svgEl('stop', { offset: '0%', 'stop-color': '#E8A838' });
  const stop2 = svgEl('stop', { offset: '100%', 'stop-color': '#F0C060' });
  grad.appendChild(stop1);
  grad.appendChild(stop2);
  defs.appendChild(grad);
  svg.appendChild(defs);

  // Track circle
  svg.appendChild(svgEl('circle', { cx, cy, r, fill: 'none', stroke: '#2A2A35', 'stroke-width': '1' }));

  // Animated arc
  const arcLen = 2 * Math.PI * r;
  const arc = svgEl('circle', {
    cx, cy, r, fill: 'none', stroke: 'url(#goldGrad)',
    'stroke-width': '2', 'stroke-dasharray': arcLen,
    'stroke-dashoffset': arcLen * 0.3, 'stroke-linecap': 'round',
    transform: `rotate(-90 ${cx} ${cy})`
  });
  arc.style.transition = 'stroke-dashoffset 0.5s ease';
  svg.appendChild(arc);

  // Phase nodes
  phases.forEach((phase, i) => {
    const angle = (i * 2 * Math.PI / phases.length) - Math.PI / 2;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);

    const g = svgEl('g', {});
    g.classList.add('cycle-node');
    g.style.cursor = 'pointer';
    g.dataset.index = i;

    g.appendChild(svgEl('circle', { cx: x, cy: y, r: '22', fill: '#12121A', stroke: '#2A2A35', 'stroke-width': '1.5' }));

    const dot = svgEl('circle', { cx: x, cy: y, r: '5', fill: '#5A5A6E' });
    dot.classList.add('node-dot');
    g.appendChild(dot);

    const labelR = r + 44;
    const lx = cx + labelR * Math.cos(angle);
    const ly = cy + labelR * Math.sin(angle);

    const text = svgEl('text', {
      x: lx, y: ly, 'text-anchor': 'middle', 'dominant-baseline': 'middle',
      'font-family': 'JetBrains Mono, monospace', 'font-size': '10',
      'font-weight': '500', 'letter-spacing': '0.08em', fill: '#5A5A6E'
    });
    text.classList.add('node-label');
    text.textContent = phase;
    g.appendChild(text);

    g.addEventListener('click', () => document.querySelectorAll('.phase-item')[i]?.click());
    svg.appendChild(g);
  });

  // Rotating arrow
  const arrowG = svgEl('g', { transform: `translate(${cx + r}, ${cy})` });
  const arrow = svgEl('polygon', { points: '-6,-4 6,0 -6,4', fill: '#E8A838' });
  const arrowAnim = svgEl('animateTransform', {
    attributeName: 'transform', type: 'rotate',
    from: `0 ${cx} ${cy}`, to: `360 ${cx} ${cy}`,
    dur: '12s', repeatCount: 'indefinite'
  });
  arrowG.appendChild(arrow);
  arrowG.appendChild(arrowAnim);
  svg.appendChild(arrowG);

  wrap.appendChild(svg);

  // Active node styles via stylesheet
  const sheet = document.styleSheets[0];
  sheet.insertRule('.cycle-node.active circle:first-child { stroke: #E8A838 !important; fill: rgba(232,168,56,0.1) !important; }', sheet.cssRules.length);
  sheet.insertRule('.cycle-node.active .node-dot { fill: #E8A838 !important; }', sheet.cssRules.length);
  sheet.insertRule('.cycle-node.active .node-label { fill: #E8A838 !important; }', sheet.cssRules.length);

  updateCycleHighlight(0);
}

buildCycleDiagram();

// ============================================
// COUNTER ANIMATION — Hero stats
// ============================================

function animateCounter(el, target, suffix) {
  const duration = 1800;
  const start = performance.now();
  function update(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target) + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target.querySelector('.number[data-target]');
      if (el) {
        const match = el.dataset.target.match(/^(\d+)(.*)$/);
        if (match) animateCounter(el, parseInt(match[1]), match[2]);
      }
      statObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.hero-stat').forEach(stat => statObserver.observe(stat));

// ============================================
// CONTACT FORM
// ============================================

const contactForm = document.querySelector('.contact-form');
contactForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = contactForm.querySelector('[type="submit"]');
  const orig = btn.textContent;
  btn.textContent = 'Sending...';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = '✓ Message Sent!';
    setTimeout(() => { btn.textContent = orig; btn.disabled = false; contactForm.reset(); }, 3000);
  }, 1200);
});

// ============================================
// LANGUAGE SWITCHER
// ============================================

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});
