HOW TO USE
(The site is pages that slide in from the right: Home, About, Gallery, Extended reality. Use the menu, arrow keys, or swipe. Open check.html if anything looks wrong.)
1. Run it from a local server (browsers block 3D files when you double-click index.html):
     cd this-folder
     python3 -m http.server 8000      then open http://localhost:8000
   To publish, upload the whole folder to any web host (Netlify, GitHub Pages, etc.).

2. Swap your work in by replacing files, keeping the names:
     images/work-01.jpg ... work-15.jpg    gallery pictures (full size, shown when clicked)
     images/thumbs/work-01.jpg ...         square pictures on the Gallery page (cropped around the fruit)
     ar/ar-01.glb ... ar-10.glb            extended reality pieces (empty slots show "Add ar-0X.glb")
     models/hero.glb                       the 3D piece the page is built around
     images/artist.jpg                     optional portrait for About
3. Change text, titles, years and links in site-data.js.
4. Move the links on the 3D piece: open http://localhost:8000/?edit , click where you want a link,
   and paste the coordinates it copies into "hotspots" in site-data.js.
5. Each AR piece has its own page: piece-01.html ... piece-10.html (e.g. yoursite.com/piece-03.html).
   Put the file in ar/ar-03.glb and that page shows it. These are the links to use for NFC tags and QR codes.
   The page offers Camera mode, Static, Auto-rotate and, on supported phones, Enter AR.
   Need more than 10? Copy piece-10.html to piece-10.html, change data-piece="10" to "11", and add an entry to ar: in site-data.js.

Brush textures and animation come from the Open Brush Toolkit (three-icosa), in lib/ and brushes/.

UPLOADING TO GITHUB PAGES
GitHub's website only accepts about 100 files per upload. Upload the folders in separate batches
(lib, brushes, ar, images, posters, models, then the loose files), or use GitHub Desktop, which has no limit.
If a piece says "Couldn't load texture ... brushes/...", some brush files didn't upload.
Open check.html on your site: it lists exactly which brush files are missing.

BRUSHES
brushes/ holds only the brushes your current pieces use. If you add a piece made with other Open Brush
brushes, copy those brushes' folders from the Open Brush Toolkit (icosa-foundation/open-brush-toolkit) into brushes/.

STARTING VIEWS (extended reality pages)
Each piece can open at a saved camera angle. In site-data.js, an entry in ar: can have
  view: { az, pol, dist, px, py, static }
To capture one: open the piece page with ?view on the end (piece-03.html?view), turn and zoom the piece
(Static must be off), then tap the line at the top to copy it and paste it into that piece's entry.

OCCLUSION EXPERIMENT (Purple Portal only, occlude: true in site-data.js)
Browsers on iPhone can't see real walls, so there is an Occlusion button. Turn it on, point the phone at the wall,
tap Aim here, then slide until the art meets the wall: everything that would be behind that wall is hidden.
