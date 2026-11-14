import { WebGLRenderer, PerspectiveCamera, Scene, Group, Box3, Vector3, Raycaster, Vector2, Plane } from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { GLTFGoogleTiltBrushMaterialExtension } from './lib/ob-core.js?v=sunset11';
import { SITE } from './site-data.js?v=sunset11';

const $ = (id) => document.getElementById(id);
const BRUSH_PATH = new URL('./brushes/', import.meta.url).href;
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const EDIT = new URLSearchParams(location.search).has('edit');

/* ── text ───────────────────────────────────── */
$('brand').textContent = SITE.artist; $('artist').textContent = SITE.artist; document.title = SITE.artist;

/* ── model loading (same Open Brush code as the piece pages) ── */
function loadModel(url, size) {
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();
    loader.register((p) => new GLTFGoogleTiltBrushMaterialExtension(p, BRUSH_PATH));
    loader.load(url, (gltf) => {
      const box = new Box3().setFromObject(gltf.scene), c = box.getCenter(new Vector3());
      const s = size / Math.max(...box.getSize(new Vector3()).toArray());
      gltf.scene.position.sub(c);
      const g = new Group(); g.add(gltf.scene); g.scale.setScalar(s); resolve(g);
    }, undefined, reject);
  });
}

/* ── hero scene (lives inside the Home page) ── */
const HERO = 3.4, stage = $('stage');
const renderer = new WebGLRenderer({ antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2)); renderer.setClearColor(0, 0);
stage.appendChild(renderer.domElement);
const scene = new Scene(), camera = new PerspectiveCamera(40, 1, 0.1, 100), pivot = new Group(); scene.add(pivot);
let fitH = 1.4, fitW = 2.1, px = 0, py = 0, heroReady = false, W = 1, H = 1;

function resize() {
  W = stage.clientWidth || innerWidth; H = stage.clientHeight || innerHeight;
  renderer.setSize(W, H); camera.aspect = W / H; camera.updateProjectionMatrix();
  const t = Math.tan((camera.fov / 2) * Math.PI / 180);
  const fw = camera.aspect < 0.8 ? fitW * 0.55 : fitW; // wide pieces may extend past the edges on phones
  camera.position.set(0, 0, Math.max(fitH / t, fw / (t * camera.aspect)) + 1.2);
}
addEventListener('resize', resize); resize();
addEventListener('pointermove', (e) => { px = e.clientX / innerWidth - .5; py = e.clientY / innerHeight - .5; });

loadModel(SITE.hero?.model || 'models/hero.glb', HERO).then((m) => {
  pivot.add(m); heroReady = true; pivot.updateMatrixWorld(true);
  const b = new Box3().setFromObject(m);
  fitH = Math.max(Math.abs(b.min.y), b.max.y) * 1.05 + .15; fitW = Math.max(Math.abs(b.min.x), b.max.x) * 1.05 + .15; resize();
}).catch((err) => { console.error('Hero model failed:', err); $('subs').innerHTML = '<span></span>'; $('subs').firstChild.textContent = 'Could not load models/hero.glb. Open check.html to diagnose.'; });

/* floating links on the model */
const spots = SITE.hotspots.map((h) => {
  const a = document.createElement('a'); a.className = 'spot'; a.href = h.href; a.textContent = h.label;
  $('spots').appendChild(a); return { el: a, at: new Vector3(...h.at) };
});
const v = new Vector3();
function placeSpots() {
  for (const s of spots) {
    v.copy(s.at); pivot.localToWorld(v); v.project(camera);
    const hw = s.el.offsetWidth / 2 + 8; // keep every link fully on screen
    const x = Math.min(Math.max((v.x * .5 + .5) * W, hw), W - hw);
    s.el.style.transform = `translate(${x}px,${(-v.y * .5 + .5) * H}px) translate(-50%,-50%)`;
  }
}
if (EDIT) { // click the model to get link coordinates
  const out = document.createElement('div'); out.className = 'edit-out';
  out.textContent = 'Edit mode: click the model to get link coordinates'; document.body.appendChild(out);
  const ray = new Raycaster(); renderer.domElement.style.pointerEvents = 'auto'; stage.style.zIndex = 2;
  renderer.domElement.addEventListener('click', (e) => {
    const r = stage.getBoundingClientRect();
    ray.setFromCamera(new Vector2((e.clientX - r.left) / r.width * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1), camera);
    const hit = ray.intersectObject(pivot, true)[0];
    const p = hit ? hit.point.clone() : ray.ray.intersectPlane(new Plane(new Vector3(0, 0, 1), 0), new Vector3());
    pivot.worldToLocal(p);
    const txt = `at: [${p.x.toFixed(2)}, ${p.y.toFixed(2)}, ${p.z.toFixed(2)}]`;
    out.textContent = txt + '  (copied)'; navigator.clipboard?.writeText(txt).catch(() => {});
  });
}
const t0 = performance.now(); let cur = 0;
renderer.setAnimationLoop(() => {
  if (cur !== 0 || document.hidden) return; // only draw while the Home page is showing
  const t = (performance.now() - t0) / 1000;
  if (!EDIT && !reduce) { pivot.rotation.y = Math.sin(t * .25) * .3 + px * .2; pivot.rotation.x = py * .08; }
  placeSpots(); if (heroReady) renderer.render(scene, camera);
});

/* ── gallery ────────────────────────────────── */
const lb = $('lightbox'); let wk = 0;
SITE.works.forEach((w, i) => {
  const b = document.createElement('button'); b.className = 'work'; b.innerHTML = `<img loading="lazy" alt=""><span></span>`;
  b.firstChild.src = w.thumb || w.image; b.firstChild.alt = `${w.title}, ${w.medium}`; b.lastChild.textContent = w.title;
  b.onclick = () => openWork(i); $('grid').appendChild(b);
});
function openWork(i) {
  wk = (i + SITE.works.length) % SITE.works.length; const w = SITE.works[wk];
  $('lb-img').src = w.image; $('lb-img').alt = w.title; $('lb-cap').innerHTML = `<b></b><span></span>`;
  $('lb-cap').firstChild.textContent = w.title; $('lb-cap').lastChild.textContent = [w.year, w.medium, w.note].filter(Boolean).join(', ');
  lb.hidden = false;
}
lb.querySelector('.prev').onclick = () => openWork(wk - 1); lb.querySelector('.next').onclick = () => openWork(wk + 1);
document.querySelectorAll('[data-close]').forEach((b) => (b.onclick = () => (lb.hidden = true)));

/* ── extended reality: every card opens its own page ── */
const COLORS = [['#e8651f', '#7a2a12'], ['#2a3a7a', '#0d1a3a'], ['#f5a43a', '#b8432b'], ['#a8381a', '#0d1a3a'], ['#d9531e', '#2a3a7a']];
SITE.ar.forEach(async (a, i) => {
  const c = document.createElement('a'); c.className = 'ar-card';
  const [c1, c2] = COLORS[i % COLORS.length]; c.style.setProperty('--c1', c1); c.style.setProperty('--c2', c2);
  $('argrid').appendChild(c);
  let ok = false;
  try { const r = await fetch(a.file, { method: 'HEAD' }); ok = r.ok && r.headers.get('content-length') !== '0' && !(r.headers.get('content-type') || '').includes('html'); } catch {}
  c.innerHTML = `<b></b><small></small>`; c.firstChild.textContent = a.title; c.href = `piece-${String(i + 1).padStart(2, '0')}.html`;
  if (!ok) { c.classList.add('empty'); c.removeAttribute('href'); c.lastChild.textContent = `Add ${a.file}`; return; }
  c.lastChild.textContent = ''; if (a.poster) c.style.backgroundImage = `url("${a.poster}")`;
});

/* ── menu links, footer, about ───────────────── */
const ext = (el, l) => { el.href = l.href; el.textContent = l.label; if (/^https?:/.test(l.href)) { el.target = '_blank'; el.rel = 'noopener'; } return el; };
const LINKS = SITE.links || SITE.about.links || [];
LINKS.forEach((l) => $('links').appendChild(ext(document.createElement('a'), l)));
document.querySelectorAll('.foot').forEach((f) => {
  f.innerHTML = '<span></span><nav aria-label="Footer"></nav>'; f.firstChild.textContent = `© ${new Date().getFullYear()} ${SITE.artist}`;
  LINKS.forEach((l) => f.lastChild.appendChild(ext(document.createElement('a'), l)));
});
const A = SITE.about;
{ const lead = $('lead'); lead.textContent = A.lead || '';
  if (A.portrait) { const im = document.createElement('img'); im.alt = ''; im.className = 'inline'; im.hidden = true; im.onload = () => (im.hidden = false); im.src = A.portrait; lead.append(' ', im); } }
(A.body || []).forEach((t) => { const p = document.createElement('p'); p.textContent = t; $('about-text').appendChild(p); });
(A.photos || []).forEach((ph) => { const f = document.createElement('figure'); f.innerHTML = '<img alt=""><figcaption></figcaption>'; f.firstChild.src = ph.image; f.firstChild.alt = ph.caption; f.lastChild.textContent = ph.caption; $('photos').appendChild(f); });
(A.press || []).forEach((p) => { const li = document.createElement('li'); li.innerHTML = '<b></b><time></time><a></a>'; li.children[0].textContent = p.outlet; li.children[1].textContent = p.date; li.children[2].textContent = p.title; li.children[2].href = p.href || '#'; $('press').appendChild(li); });
if (!A.press?.length) $('press').remove(); if (!A.photos?.length) $('photos').remove();

/* ── page navigation: pages slide in from the right ── */
const PAGES = ['home', 'about', 'gallery', 'xr'], track = $('track');
function show(i, animate) {
  cur = i; track.classList.toggle('instant', !animate); track.style.setProperty('--i', i);
  PAGES.forEach((p, k) => { $(p).inert = k !== i; if (k === i) $(p).scrollTop = 0; });
  document.querySelectorAll('[data-go]').forEach((a) => a.toggleAttribute('aria-current', a.dataset.go === PAGES[i]));
  document.body.dataset.page = PAGES[i]; if (i === 0) resize();
}
const fromHash = (animate) => show(Math.max(0, PAGES.indexOf(location.hash.slice(1))), animate);
const goTo = (name) => { if (location.hash !== '#' + name) history.pushState(null, '', '#' + name); fromHash(!reduce); }; // pushState: no browser scroll-to-anchor
document.addEventListener('click', (e) => { // in-page links slide instead of jumping
  const a = e.target.closest('a[href^="#"]'); if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey) return;
  const name = a.getAttribute('href').slice(1); if (!PAGES.includes(name)) return;
  e.preventDefault(); goTo(name);
});
addEventListener('popstate', () => fromHash(!reduce)); addEventListener('hashchange', () => fromHash(!reduce));
addEventListener('scroll', () => { if (scrollX || scrollY) scrollTo(0, 0); }); // the viewport itself must never scroll sideways
fromHash(false);
const go = (i) => { if (i >= 0 && i < PAGES.length && lb.hidden) goTo(PAGES[i]); };
addEventListener('keydown', (e) => {
  if (e.key === 'Escape') lb.hidden = true;
  if (!lb.hidden) { if (e.key === 'ArrowLeft') openWork(wk - 1); if (e.key === 'ArrowRight') openWork(wk + 1); return; }
  if (e.key === 'ArrowRight') go(cur + 1); if (e.key === 'ArrowLeft') go(cur - 1);
});
let sx = 0, sy = 0; // swipe left / right on phones and tablets
addEventListener('touchstart', (e) => { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
addEventListener('touchend', (e) => {
  const dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
  if (Math.abs(dx) > 70 && Math.abs(dx) > Math.abs(dy) * 1.6) go(cur + (dx < 0 ? 1 : -1));
}, { passive: true });
