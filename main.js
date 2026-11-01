import { WebGLRenderer, PerspectiveCamera, Scene, Group, Box3, Vector3, Raycaster, Vector2, Plane, AdditiveBlending } from './lib/three.module.js';
import { GLTFLoader } from './lib/GLTFLoader.js';
import { GLTFGoogleTiltBrushMaterialExtension } from './lib/three-icosa.module.js';
import { SITE } from './site-data.js';

const $ = (id) => document.getElementById(id);
const BRUSH_PATH = new URL('./brushes/', import.meta.url).href;
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const EDIT = new URLSearchParams(location.search).has('edit');

/* ── text content ───────────────────────────── */
document.title = SITE.artist;
$('brand').textContent = SITE.artist;
$('artist').textContent = SITE.artist;
$('tagline').textContent = SITE.tagline;

/* ── model loading (Open Brush + Tilt Brush files) ── */
function loadModel(url, size) {
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();
    // Older Tilt Brush / Open Brush exports: brush shaders, textures and animation from the toolkit.
    loader.register((p) => new GLTFGoogleTiltBrushMaterialExtension(p, BRUSH_PATH));
    loader.load(url, (gltf) => {
      // Newer Open Brush exports ("ob-" materials): vertex colours + additive glow.
      gltf.scene.traverse((o) => {
        if (!o.isMesh) return;
        for (const m of [].concat(o.material)) {
          if (m.name?.startsWith('ob-')) {
            if (o.geometry.attributes.color) m.vertexColors = true;
            if (m.transparent) { m.blending = AdditiveBlending; m.depthWrite = false; }
            m.needsUpdate = true;
          }
        }
      });
      // Centre it and scale it so its longest side equals `size`.
      const box = new Box3().setFromObject(gltf.scene);
      const c = box.getCenter(new Vector3());
      const s = size / Math.max(...box.getSize(new Vector3()).toArray());
      gltf.scene.position.sub(c);
      const g = new Group(); g.add(gltf.scene); g.scale.setScalar(s);
      resolve(g);
    }, undefined, reject);
  });
}

/* ── hero scene ─────────────────────────────── */
const HERO = 3.4;
const renderer = new WebGLRenderer({ antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.setClearColor(0, 0);
$('stage').appendChild(renderer.domElement);
const scene = new Scene();
const camera = new PerspectiveCamera(40, 1, 0.1, 100);
const pivot = new Group(); scene.add(pivot);
let fitH = 1.4, fitW = 2.1, scrollP = 0, px = 0, py = 0, heroReady = false;

function resize() {
  const w = innerWidth, h = innerHeight;
  renderer.setSize(w, h); camera.aspect = w / h; camera.updateProjectionMatrix();
  const t = Math.tan((camera.fov / 2) * Math.PI / 180);
  camera.position.set(0, 0, Math.max(fitH / t, fitW / (t * camera.aspect)) + 1.2);
}
addEventListener('resize', resize); resize();
addEventListener('scroll', () => { scrollP = Math.min(scrollY / innerHeight, 1); }, { passive: true });
addEventListener('pointermove', (e) => { px = e.clientX / innerWidth - .5; py = e.clientY / innerHeight - .5; });

loadModel(SITE.hero?.model || 'models/hero.glb', HERO).then((m) => {
  pivot.add(m); heroReady = true; pivot.updateMatrixWorld(true);
  const b = new Box3().setFromObject(m); // frame whatever model is loaded
  fitH = Math.max(Math.abs(b.min.y), b.max.y) * 1.05 + .15; fitW = Math.max(Math.abs(b.min.x), b.max.x) * 1.05 + .15; resize();
})
  .catch((err) => { console.error('Hero model failed:', err); $('tagline').textContent = 'Could not load models/hero.glb (see browser console for details)'; });

/* floating links */
const spots = SITE.hotspots.map((h) => {
  const a = document.createElement('a');
  a.className = 'spot'; a.href = h.href; a.textContent = h.label;
  $('spots').appendChild(a);
  return { el: a, at: new Vector3(...h.at) };
});
const v = new Vector3();
function placeSpots() {
  const fade = 1 - Math.min(scrollP * 3, 1);
  for (const s of spots) {
    v.copy(s.at); pivot.localToWorld(v); v.project(camera);
    s.el.style.transform = `translate(${(v.x * .5 + .5) * innerWidth}px,${(-v.y * .5 + .5) * innerHeight}px) translate(-50%,-50%)`;
    s.el.style.opacity = fade; s.el.style.visibility = fade > .02 ? 'visible' : 'hidden';
  }
}

/* edit mode: click the model to get coordinates for a link */
if (EDIT) {
  const out = document.createElement('div'); out.className = 'edit-out';
  out.textContent = 'Edit mode: click the model to get link coordinates'; document.body.appendChild(out);
  const ray = new Raycaster(); ray.params.Line = { threshold: .05 };
  renderer.domElement.style.pointerEvents = 'auto'; $('stage').style.zIndex = 2;
  renderer.domElement.addEventListener('click', (e) => {
    ray.setFromCamera(new Vector2(e.clientX / innerWidth * 2 - 1, -(e.clientY / innerHeight) * 2 + 1), camera);
    const hit = ray.intersectObject(pivot, true)[0];
    const p = hit ? hit.point.clone() : ray.ray.intersectPlane(new Plane(new Vector3(0, 0, 1), 0), new Vector3());
    pivot.worldToLocal(p);
    const txt = `at: [${p.x.toFixed(2)}, ${p.y.toFixed(2)}, ${p.z.toFixed(2)}]`;
    out.textContent = txt + '  (copied)'; navigator.clipboard?.writeText(txt).catch(() => {});
  });
}

const clock = performance.now();
renderer.setAnimationLoop(() => {
  const t = (performance.now() - clock) / 1000;
  if (!EDIT && !reduce) { pivot.rotation.y = Math.sin(t * .25) * .3 + px * .2 - scrollP * 1.4; pivot.rotation.x = py * .08; }
  renderer.domElement.style.opacity = 1 - scrollP * .6;
  placeSpots();
  if (heroReady) renderer.render(scene, camera);
});

/* ── gallery ────────────────────────────────── */
const lb = $('lightbox'); let cur = 0;
SITE.works.forEach((w, i) => {
  const b = document.createElement('button'); b.className = 'work';
  b.innerHTML = `<img loading="lazy" alt=""><span></span>`;
  b.firstChild.src = w.image; b.firstChild.alt = `${w.title}, ${w.medium}`;
  b.lastChild.textContent = w.title;
  b.onclick = () => openWork(i);
  $('grid').appendChild(b);
});
function openWork(i) {
  cur = (i + SITE.works.length) % SITE.works.length; const w = SITE.works[cur];
  $('lb-img').src = w.image; $('lb-img').alt = w.title;
  $('lb-cap').innerHTML = `<b></b><span></span>`;
  $('lb-cap').firstChild.textContent = w.title;
  $('lb-cap').lastChild.textContent = [w.year, w.medium, w.note].filter(Boolean).join(', ');
  lb.hidden = false;
}
lb.querySelector('.prev').onclick = () => openWork(cur - 1);
lb.querySelector('.next').onclick = () => openWork(cur + 1);

/* ── augmented reality: every card opens its own page (piece-01.html …) ── */
const COLORS = [['#e8651f', '#7a2a12'], ['#2a3a7a', '#0d1a3a'], ['#f5a43a', '#b8432b'], ['#a8381a', '#0d1a3a'], ['#d9531e', '#2a3a7a']];
SITE.ar.forEach(async (a, i) => {
  const c = document.createElement('a'); c.className = 'ar-card';
  const [c1, c2] = COLORS[i % COLORS.length]; c.style.setProperty('--c1', c1); c.style.setProperty('--c2', c2);
  $('argrid').appendChild(c);
  let ok = false;
  try { const r = await fetch(a.file, { method: 'HEAD' }); ok = r.ok && r.headers.get('content-length') !== '0' && !(r.headers.get('content-type') || '').includes('html'); } catch {}
  c.innerHTML = `<b></b><small></small>`; c.firstChild.textContent = a.title;
  c.href = `piece-${String(i + 1).padStart(2, '0')}.html`;
  if (!ok) { c.classList.add('empty'); c.removeAttribute('href'); c.lastChild.textContent = `Add ${a.file}`; return; }
  c.lastChild.textContent = 'View in AR';
  if (a.poster) c.style.backgroundImage = `url("${a.poster}")`;
});

function closeOverlays() { lb.hidden = true; }
document.querySelectorAll('[data-close]').forEach((b) => (b.onclick = closeOverlays));
addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeOverlays();
  if (!lb.hidden && e.key === 'ArrowLeft') openWork(cur - 1);
  if (!lb.hidden && e.key === 'ArrowRight') openWork(cur + 1);
});

/* ── about ──────────────────────────────────── */
const A = SITE.about;
A.paragraphs.forEach((t) => { const p = document.createElement('p'); p.textContent = t; $('about-text').appendChild(p); });
A.links.forEach((l) => { for (const box of ['about-links', 'acts']) { const a = document.createElement('a'); a.href = l.href; a.textContent = l.label; $(box).appendChild(a); } });
if (A.portrait) { const im = $('portrait'); im.onload = () => (im.hidden = false); im.src = A.portrait; }
