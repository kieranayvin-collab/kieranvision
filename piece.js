import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFGoogleTiltBrushMaterialExtension } from './lib/ob-core.js';
import { SITE } from './site-data.js';

// Which piece is this page for? Set by data-piece on <body> (piece-03.html -> 3).
const N = +document.body.dataset.piece, PIECE = SITE.ar[N - 1] || { title: 'Piece ' + N, file: `ar/ar-${String(N).padStart(2, '0')}.glb`, note: '' };
const FILE = PIECE.file;


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
scene.add(camera,new THREE.AmbientLight(0xffffff,1.2));
const sun=new THREE.DirectionalLight(0xffffff,1.5); sun.position.set(1,2,1.5); scene.add(sun);
const controls=new OrbitControls(camera,renderer.domElement);
controls.enableDamping=true; controls.autoRotateSpeed=1.5;

const holder=new THREE.Group(); scene.add(holder);
let size=1,depthN=0;
const loader=new GLTFLoader();
loader.register(p=>new GLTFGoogleTiltBrushMaterialExtension(p,''));
loader.load(FILE,gltf=>{
  const m=gltf.scene, box=new THREE.Box3().setFromObject(m), c=box.getCenter(new THREE.Vector3()), sz=box.getSize(new THREE.Vector3());
  size=Math.max(sz.x,sz.y,sz.z)||1; depthN=sz.z/size;
  m.position.sub(c); holder.add(m); holder.scale.setScalar(2/size);
  msg.remove();
},undefined,e=>{console.error(e);msg.textContent=`Couldn't load ${FILE}. Check that the file is in the ar folder and isn't empty.`});

// ---- Wall mode: artwork hangs flat, facing you. With the camera on and motion sensors available, it stays pinned in the room as you turn the phone.
let wall=true,gyro=false,gotOri=false,yawSet=false,dist=3,xr=false;
const D=Math.PI/180,qA=new THREE.Quaternion(-Math.SQRT1_2,0,0,Math.SQRT1_2),qW=new THREE.Quaternion(),qS=new THREE.Quaternion(),qYaw=new THREE.Quaternion(),eu=new THREE.Euler(),zAx=new THREE.Vector3(0,0,1),yAx=new THREE.Vector3(0,1,0),fw=new THREE.Vector3();
function resetView(){
  camera.quaternion.identity(); holder.quaternion.identity(); holder.position.set(0,0,0); holder.visible=true; holder.scale.setScalar(2/size);
  if(gyro){camera.position.set(0,0,0);holder.position.set(0,0,-dist);controls.enabled=false}
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
$('bClear').onclick=()=>{const on=document.body.classList.toggle('clear');tog($('bClear'),on)};
if(new URLSearchParams(location.search).has('transparent')){document.body.classList.add('clear','hideui')}
setWall(true);
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
