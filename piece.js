import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFGoogleTiltBrushMaterialExtension } from './lib/ob-core.js?v=sunset11';
import { SITE } from './site-data.js?v=sunset11';

// Show a readable message if brushes fail to draw on this device.
const _ce = console.error;
console.error = (...a) => { _ce(...a); const t = a.map(String).join(' ');
  if (/Shader Error|Couldn't load texture|WebGLProgram/.test(t)) { const m = document.getElementById('msg'); if (m) { m.style.display = 'block'; m.textContent = 'Some brushes could not be drawn here: ' + t.slice(0, 120); } } };

// Which piece is this page for? Set by data-piece on <body> (piece-03.html -> 3).
const N = +document.body.dataset.piece, PIECE = SITE.ar[N - 1] || { title: 'Piece ' + N, file: `ar/ar-${String(N).padStart(2, '0')}.glb`, note: '' };
const FILE = PIECE.file, START = PIECE.view || null;
const BRUSH_PATH = new URL('./brushes/', import.meta.url).href; // brush textures for Open Brush files


const $=id=>document.getElementById(id), msg=$('msg');
const tog=(b,on)=>b.setAttribute('aria-pressed',on);
const flash=t=>{msg.textContent=t;document.body.append(msg);clearTimeout(flash.k);flash.k=setTimeout(()=>msg.remove(),3500)};
const renderer=new THREE.WebGLRenderer({antialias:true,alpha:true});
renderer.setPixelRatio(Math.min(devicePixelRatio,2));
renderer.setClearColor(0x000000,0);
renderer.setSize(innerWidth,innerHeight);
document.body.prepend(renderer.domElement);
const scene=new THREE.Scene();
const camera=new THREE.PerspectiveCamera(50,innerWidth/innerHeight,0.01,100);
camera.position.set(0,0,4);
scene.add(camera);
const controls=new OrbitControls(camera,renderer.domElement);
controls.enableDamping=true; controls.autoRotateSpeed=1.5;

const holder=new THREE.Group(); scene.add(holder);
let size=1,depthN=0;
const loader=new GLTFLoader();
loader.register(p=>new GLTFGoogleTiltBrushMaterialExtension(p,BRUSH_PATH));
loader.load(FILE,gltf=>{
  const m=gltf.scene, box=new THREE.Box3().setFromObject(m), c=box.getCenter(new THREE.Vector3()), sz=box.getSize(new THREE.Vector3());
  size=Math.max(sz.x,sz.y,sz.z)||1; depthN=sz.z/size;
  m.position.sub(c); holder.add(m); holder.scale.setScalar(2/size);
  msg.remove();
},undefined,e=>{console.error(e);msg.textContent=`Couldn't load ${FILE}. Check that the file is in the ar folder and isn't empty.`});

// ---- Wall mode: artwork hangs flat, facing you. With the camera on and motion sensors available, it stays pinned in the room as you turn the phone.
let wall=true,gyro=false,gotOri=false,yawSet=false,dist=3,xr=false;
const D=Math.PI/180,qA=new THREE.Quaternion(-Math.SQRT1_2,0,0,Math.SQRT1_2),qW=new THREE.Quaternion(),qS=new THREE.Quaternion(),qYaw=new THREE.Quaternion(),eu=new THREE.Euler(),zAx=new THREE.Vector3(0,0,1),yAx=new THREE.Vector3(0,1,0),fw=new THREE.Vector3();
// ---- Starting view (from site-data.js): camera angle around the piece, distance and sideways offset
const _r=new THREE.Vector3(),_u=new THREE.Vector3(),_t=new THREE.Vector3();
function orbitTo(az,pol,r,px,py){
  const a=az*D,q=pol*D; camera.position.set(r*Math.sin(q)*Math.sin(a),r*Math.cos(q),r*Math.sin(q)*Math.cos(a));
  camera.up.set(0,1,0); camera.lookAt(0,0,0); camera.updateMatrixWorld();
  _r.setFromMatrixColumn(camera.matrixWorld,0); _u.setFromMatrixColumn(camera.matrixWorld,1);
  _t.set(0,0,0).addScaledVector(_r,px).addScaledVector(_u,py);
  camera.position.add(_t); controls.target.copy(_t); controls.enabled=true; controls.update();
}
function viewString(){ // current free-turn camera, in the format used by site-data.js
  const o=camera.position.clone().sub(controls.target),r=o.length(); camera.updateMatrixWorld();
  _r.setFromMatrixColumn(camera.matrixWorld,0); _u.setFromMatrixColumn(camera.matrixWorld,1);
  const f=v=>+v.toFixed(2);
  return `view: { az: ${f(Math.atan2(o.x,o.z)/D)}, pol: ${f(Math.acos(Math.min(1,Math.max(-1,o.y/r)))/D)}, dist: ${f(r)}, px: ${f(controls.target.dot(_r))}, py: ${f(controls.target.dot(_u))}, static: ${wall} }`;
}
function resetView(){
  camera.quaternion.identity(); holder.quaternion.identity(); holder.position.set(0,0,0); holder.visible=true; holder.scale.setScalar(2/size);
  if(gyro){camera.position.set(0,0,0);holder.position.set(0,0,-dist);controls.enabled=false}
  else if(START&&(wall?START.static:!START.static))orbitTo(START.az||0,START.pol??90,START.dist||4,START.px||0,START.py||0);
  else{camera.position.set(0,0,4);controls.target.set(0,0,0);controls.enabled=true;controls.update()}
  controls.enableRotate=!wall; controls.enablePan=!wall;
}
function setWall(on){wall=on;tog($('bWall'),on); if(on){controls.autoRotate=false;tog($('bSpin'),false);} else if(gyro)stopGyro(); resetView()}
function onOri(ev){
  if(ev.alpha==null)return;
  eu.set(ev.beta*D,ev.alpha*D,-ev.gamma*D,'YXZ');
  qW.setFromEuler(eu).multiply(qA).multiply(qS.setFromAxisAngle(zAx,-(screen.orientation?.angle||0)*D));
  if(!yawSet){fw.set(0,0,-1).applyQuaternion(qW);qYaw.setFromAxisAngle(yAx,-Math.atan2(-fw.x,-fw.z));yawSet=true;gyro=true;resetView()}
  camera.quaternion.copy(qYaw).multiply(qW);
}
async function startGyro(){
  if(gyro||!wall||!window.DeviceOrientationEvent)return;
  if(DeviceOrientationEvent.requestPermission){try{if(await DeviceOrientationEvent.requestPermission()!=='granted')return}catch(e){return}}
  gotOri=false; addEventListener('deviceorientation',e=>{gotOri=true},{once:true});
  addEventListener('deviceorientation',onOri,true);
  setTimeout(()=>{if(!gotOri)removeEventListener('deviceorientation',onOri,true)},1500);
}
function stopGyro(){removeEventListener('deviceorientation',onOri,true);gyro=false;yawSet=false;resetView()}
// zoom (wheel + pinch) when orbit controls are handed over to the sensors
const pts=new Map();let pd=0;const zoom=f=>{dist=Math.min(14,Math.max(0.8,dist*f));holder.position.z=-dist};
renderer.domElement.addEventListener('wheel',e=>{if(gyro)zoom(1+e.deltaY*0.001)},{passive:true});
renderer.domElement.addEventListener('pointerdown',e=>pts.set(e.pointerId,e));
renderer.domElement.addEventListener('pointermove',e=>{if(!pts.has(e.pointerId))return;pts.set(e.pointerId,e);
  if(gyro&&pts.size===2){const [a,b]=[...pts.values()],d=Math.hypot(a.clientX-b.clientX,a.clientY-b.clientY);if(pd)zoom(pd/d);pd=d}});
['pointerup','pointercancel'].forEach(t=>renderer.domElement.addEventListener(t,e=>{pts.delete(e.pointerId);pd=0}));

// ---- Buttons
let stream=null,camOn=false;
const camV=$('cam');
async function camStart(){
  if(!stream)stream=await navigator.mediaDevices.getUserMedia({video:{facingMode:'environment'},audio:false});
  stream.getTracks().forEach(k=>k.enabled=true);
  camV.srcObject=stream;camV.style.display='block';camV.play?.().catch(()=>{});camOn=true;tog($('bCam'),true);
  try{localStorage.setItem('cam','1')}catch(e){}
}
function camStop(){ // keep the granted stream alive (just hidden) so the browser never has to ask again this session
  stream?.getTracks().forEach(k=>k.enabled=false);camV.style.display='none';camOn=false;tog($('bCam'),false);
  if(gyro)stopGyro();try{localStorage.setItem('cam','0')}catch(e){}
}
$('bCam').onclick=async()=>{
  if(camOn){camStop();return}
  startGyro();
  try{await camStart()}catch(e){flash('Camera unavailable here (needs permission / HTTPS)')}
};
$('bWall').onclick=()=>{setWall(!wall); if(wall&&camOn)startGyro()};
$('bSpin').onclick=()=>{
  if(controls.autoRotate){controls.autoRotate=false;tog($('bSpin'),false);return}
  if(wall)setWall(false); controls.autoRotate=true; tog($('bSpin'),true);
};
$('bShot').onclick=async()=>{ // Capture: save what you see (camera picture or sunset background + the piece) as an image
  if(xr){flash('Capture is not available inside AR mode');return}
  const W=renderer.domElement.width,H=renderer.domElement.height,c=document.createElement('canvas');c.width=W;c.height=H;const g=c.getContext('2d');
  if(camOn&&camV.videoWidth){const s=Math.max(W/camV.videoWidth,H/camV.videoHeight),w=camV.videoWidth*s,h=camV.videoHeight*s;g.drawImage(camV,(W-w)/2,(H-h)/2,w,h)}
  else{const lg=g.createLinearGradient(0,0,0,H);[[0,'#0d1a3a'],[.26,'#26295c'],[.55,'#8f3a3a'],[.8,'#d9531e'],[1,'#f5a43a']].forEach(([o,k])=>lg.addColorStop(o,k));g.fillStyle=lg;g.fillRect(0,0,W,H);
    g.save();g.translate(W/2,H);g.scale(W*.7,H*.38);const rg=g.createRadialGradient(0,0,0,0,0,1);rg.addColorStop(0,'rgba(245,164,58,.75)');rg.addColorStop(1,'rgba(245,164,58,0)');g.fillStyle=rg;g.fillRect(-1.2,-1.2,2.4,2.4);g.restore()}
  renderer.render(scene,camera);g.drawImage(renderer.domElement,0,0);
  const blob=await new Promise(r=>c.toBlob(r,'image/png')),name=(PIECE.title||'piece').replace(/[^a-z0-9]+/gi,'-').replace(/^-|-$/g,'').toLowerCase()+'.png';
  const file=new File([blob],name,{type:'image/png'});
  if(navigator.canShare?.({files:[file]})){try{await navigator.share({files:[file],title:PIECE.title});return}catch(e){if(e.name==='AbortError')return}}
  const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(a.href),4000);flash('Saved '+name)};
if(new URLSearchParams(location.search).has('transparent')){document.body.classList.add('clear','hideui')}
setWall(true); if(START&&START.static===false)setWall(false); // start in the saved view
// resume the camera automatically on later visits if the browser already granted permission
(async()=>{try{if(localStorage.getItem('cam')!=='1')return;const st=await navigator.permissions.query({name:'camera'});if(st.state==='granted'){await camStart();startGyro()}}catch(e){}})();

// ---- WebXR AR: hit-test a real wall (or floor) and hang/stand the artwork there
renderer.xr.enabled=true;
let hitSrc=null,isWall=true;
const reticle=new THREE.Mesh(new THREE.RingGeometry(0.08,0.1,32).rotateX(-Math.PI/2),new THREE.MeshBasicMaterial({color:0xffffff,side:THREE.DoubleSide}));
reticle.matrixAutoUpdate=false;reticle.visible=false;scene.add(reticle);
function place(){
  const p=new THREE.Vector3(),q=new THREE.Quaternion(),s=new THREE.Vector3();reticle.matrix.decompose(p,q,s);
  const n=new THREE.Vector3(0,1,0).applyQuaternion(q),h=0.8,u=h/size;
  holder.scale.setScalar(u);holder.quaternion.identity();
  isWall=Math.abs(n.y)<0.5;
  if(isWall){holder.position.copy(p).addScaledVector(n,0.02+depthN*h/2);holder.lookAt(p.x+n.x,holder.position.y,p.z+n.z)}
  else holder.position.set(p.x,p.y+h/2,p.z);
  holder.visible=true;document.body.classList.remove('xr');
}
if(navigator.xr){navigator.xr.isSessionSupported('immersive-ar').then(ok=>{
  if(!ok)return;const b=$('bAR');b.hidden=false;
  b.onclick=async()=>{
    document.body.classList.add('xr');
    let s;try{s=await navigator.xr.requestSession('immersive-ar',{optionalFeatures:['local-floor','hit-test','dom-overlay'],domOverlay:{root:$('xrhint')}})}
    catch(e){document.body.classList.remove('xr');flash('AR could not start on this device');return}
    renderer.xr.setReferenceSpaceType('local');await renderer.xr.setSession(s);xr=true;
    holder.visible=false;
    try{hitSrc=await s.requestHitTestSource({space:await s.requestReferenceSpace('viewer')})}catch(e){hitSrc=null}
    if(!hitSrc){holder.scale.setScalar(0.8/size);holder.position.set(0,0,-1.5);holder.visible=true;isWall=true;document.body.classList.remove('xr')}
    s.addEventListener('select',()=>{if(reticle.visible)place()});
    s.addEventListener('end',()=>{xr=false;hitSrc=null;reticle.visible=false;document.body.classList.remove('xr');resetView()});
  };
}).catch(()=>{})}

addEventListener('resize',()=>{camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();renderer.setSize(innerWidth,innerHeight)});
renderer.setAnimationLoop((t,frame)=>{
  if(xr){
    if(frame&&hitSrc){const r=frame.getHitTestResults(hitSrc);
      if(r.length){reticle.visible=true;reticle.matrix.fromArray(r[0].getPose(renderer.xr.getReferenceSpace()).transform.matrix)}else reticle.visible=false}
    if(holder.visible&&!isWall)holder.rotation.y+=0.004;
  } else if(!gyro)controls.update();
  renderer.render(scene,camera);
});

// ---- Page chrome: title, back link, previous / next piece
document.title = `${PIECE.title} · ${SITE.artist}`;
$('pt').textContent = PIECE.title; $('pn').textContent = PIECE.note || '';
$('who').textContent = SITE.artist;
const pg = (i) => `piece-${String(i).padStart(2, '0')}.html`, T = SITE.ar.length;
$('prev').href = pg((N + T - 2) % T + 1); $('next').href = pg(N % T + 1);

// ---- ?view : shows the current free-turn camera so you can copy it into site-data.js (view: {...})
if (new URLSearchParams(location.search).has('view')) {
  const o = document.createElement('button'); o.id = 'viewout'; o.type = 'button'; o.textContent = 'Turn the piece, then tap here to copy its view';
  o.onclick = () => { navigator.clipboard?.writeText(o.dataset.v || '').catch(() => {}); flash('Copied. Paste it into site-data.js'); };
  document.body.appendChild(o); setInterval(() => { if (!gyro) { o.dataset.v = viewString(); o.textContent = o.dataset.v; } }, 300);
}

// ---- Occlusion experiment (pieces with occlude: true in site-data.js)
// A phone browser can't see real walls, so you aim an invisible "wall" at the real one: everything of the
// piece that would be behind that wall is hidden, so the tendrils stop at the wall instead of passing through it.
if (PIECE.occlude) {
  const wallMesh = new THREE.Mesh(new THREE.PlaneGeometry(80, 80), new THREE.MeshBasicMaterial({ colorWrite: false, depthWrite: true, side: THREE.DoubleSide }));
  wallMesh.renderOrder = -10; wallMesh.visible = false; scene.add(wallMesh);          // writes depth only: invisible, but hides what is behind it
  const guide = new THREE.Mesh(new THREE.PlaneGeometry(6, 6), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.16, side: THREE.DoubleSide, depthTest: false, depthWrite: false }));
  guide.renderOrder = 100; guide.visible = false; wallMesh.add(guide);                  // faint sheet shown while you adjust
  const origin = new THREE.Vector3(), dir = new THREE.Vector3(), Z = new THREE.Vector3(0, 0, 1); let on = false, d = 3, hideT;
  const row = document.createElement('div'); row.id = 'occRow'; row.hidden = true;
  row.innerHTML = '<p>Point your phone at the wall, tap <b>Aim here</b>, then slide until the art meets the wall.</p><div><input type="range" min="0.3" max="8" step="0.05" aria-label="Wall distance"><button type="button">Aim here</button></div>';
  document.body.appendChild(row);
  const slider = row.querySelector('input'), aim = row.querySelector('button');
  const put = () => { wallMesh.position.copy(origin).addScaledVector(dir, d); wallMesh.quaternion.setFromUnitVectors(Z, dir.clone().negate()); };
  const show = () => { guide.visible = true; clearTimeout(hideT); hideT = setTimeout(() => (guide.visible = false), 1800); };
  const capture = () => { camera.updateMatrixWorld(); origin.setFromMatrixPosition(camera.matrixWorld); dir.set(0, 0, -1).transformDirection(camera.matrixWorld);
    d = gyro ? dist : Math.max(0.3, origin.length()); slider.value = d; put(); show(); };           // starts through the middle of the piece
  const b = document.createElement('button'); b.id = 'bOcc'; b.type = 'button'; b.textContent = 'Occlusion'; b.setAttribute('aria-pressed', 'false');
  $('ui').insertBefore(b, $('bShot'));
  b.onclick = () => { on = !on; b.setAttribute('aria-pressed', on); row.hidden = !on; wallMesh.visible = on; if (on) capture(); else guide.visible = false; };
  aim.onclick = capture;
  slider.oninput = () => { d = +slider.value; put(); show(); };
}
