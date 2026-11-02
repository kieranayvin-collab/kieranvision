HOW TO USE
(The site is pages that slide in from the right: Home, About, Gallery, Extended reality. Use the menu, arrow keys, or swipe. Open check.html if anything looks wrong.)
1. Run it from a local server (browsers block 3D files when you double-click index.html):
     cd this-folder
     python3 -m http.server 8000      then open http://localhost:8000
   To publish, upload the whole folder to any web host (Netlify, GitHub Pages, etc.).

2. Swap your work in by replacing files, keeping the names:
     images/work-01.jpg ... work-10.jpg    gallery photos
     ar/ar-01.glb ... ar-11.glb            extended reality pieces (empty slots show "Add ar-0X.glb")
     models/hero.glb                       the 3D piece the page is built around
     images/artist.jpg                     optional portrait for About
3. Change text, titles, years and links in site-data.js.
4. Move the links on the 3D piece: open http://localhost:8000/?edit , click where you want a link,
   and paste the coordinates it copies into "hotspots" in site-data.js.
5. Each AR piece has its own page: piece-01.html ... piece-11.html (e.g. yoursite.com/piece-03.html).
   Put the file in ar/ar-03.glb and that page shows it. These are the links to use for NFC tags and QR codes.
   The page offers Camera mode, Static, Auto-rotate and, on supported phones, Enter AR.
   Need more than 10? Copy piece-10.html to piece-11.html, change data-piece="10" to "11", and add an entry to ar: in site-data.js.

Brush textures and animation come from the Open Brush Toolkit (three-icosa), in lib/ and brushes/.
