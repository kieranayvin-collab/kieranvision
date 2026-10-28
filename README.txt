HOW TO USE
1. Run it from a local server (browsers block 3D files when you double-click index.html):
     cd this-folder
     python3 -m http.server 8000      then open http://localhost:8000
   To publish, upload the whole folder to any web host (Netlify, GitHub Pages, etc.).

2. Swap your work in by replacing files, keeping the names:
     images/work-01.jpg ... work-10.jpg    gallery photos
     ar/ar-01.glb ... ar-10.glb            augmented reality pieces (empty slots show "Add ar-0X.glb")
     models/hero.glb                       the 3D piece the page is built around
     images/artist.jpg                     optional portrait for About
3. Change text, titles, years and links in site-data.js.
4. Move the links on the 3D piece: open http://localhost:8000/?edit , click where you want a link,
   and paste the coordinates it copies into "hotspots" in site-data.js.
5. Each AR piece has its own link, e.g. yoursite.com/#ar-3 -- good for NFC tags and QR codes.

Brush textures and animation come from the Open Brush Toolkit (three-icosa), in lib/ and brushes/.
