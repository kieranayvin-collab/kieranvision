// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE to change text, titles and links.
//  To swap artwork, just replace the files in the folders:
//    images/work-01.jpg … work-10.jpg   (gallery photos)
//    ar/ar-01.glb … ar-10.glb           (augmented reality pieces)
//    models/hero.glb                    (the 3D piece the page is built around)
//  Keep the same file names and nothing else needs to change.
// ─────────────────────────────────────────────────────────────

export const SITE = {
  artist: "Kieran Vision",
  tagline: "XR artist creating bespoke experiences.",

  // Lines that fade through the bottom of the home screen like film subtitles.
  captions: [
    "XR artist creating bespoke experiences.",
    "Painting in three dimensions.",
    "Step inside the work.",
  ],

  // Links that float on the 3D piece on the home screen.
  //   at: [x, y, z] is a spot on the model.
  //   To find a spot: open the site with  ?edit  on the end of the address
  //   (e.g. http://localhost:8000/?edit), click the model, and copy the
  //   coordinates it shows into "at" below.
  hotspots: [
    { label: "About",             href: "#about",   at: [-1.2, 0.3, 0.2] },
    { label: "Gallery",           href: "#gallery", at: [0.1, 0.7, 0.2] },
    { label: "Extended reality",  href: "#xr",      at: [1.25, -0.15, 0.2] },
  ],

  // Gallery: 10 works. "image" is the file path.
  works: [
    { title: "Untitled I",    year: "2026", medium: "Digital watercolor", image: "images/work-01.jpg", note: "" },
    { title: "Untitled II",   year: "2026", medium: "Digital watercolor", image: "images/work-02.jpg", note: "" },
    { title: "Untitled III",  year: "2026", medium: "Digital watercolor", image: "images/work-03.jpg", note: "" },
    { title: "Untitled IV",   year: "2026", medium: "Digital watercolor", image: "images/work-04.jpg", note: "" },
    { title: "Untitled V",    year: "2026", medium: "Digital watercolor", image: "images/work-05.jpg", note: "" },
    { title: "Untitled VI",   year: "2026", medium: "Digital watercolor", image: "images/work-06.jpg", note: "" },
    { title: "Untitled VII",  year: "2026", medium: "Digital watercolor", image: "images/work-07.jpg", note: "" },
    { title: "Untitled VIII", year: "2026", medium: "Digital watercolor", image: "images/work-08.jpg", note: "" },
    { title: "Untitled IX",   year: "2026", medium: "Digital watercolor", image: "images/work-09.jpg", note: "" },
    { title: "Untitled X",    year: "2026", medium: "Digital watercolor", image: "images/work-10.jpg", note: "" },
  ],

  // Extended reality: one page per piece (piece-01.html, piece-02.html ...).
  // "file" is the .glb; "poster" is the preview picture on the card (optional).
  // Each piece has its own link, e.g. yoursite.com/piece-03.html, handy for NFC tags and QR codes.
  ar: [
    { title: "Berries", file: "ar/ar-01.glb", poster: "posters/ar-01.jpg", note: "" },
    { title: "Blue Bubbles", file: "ar/ar-02.glb", poster: "posters/ar-02.jpg", note: "" },
    { title: "Blue Circle, Yellow Sun", file: "ar/ar-03.glb", poster: "posters/ar-03.jpg", note: "" },
    { title: "Lotus", file: "ar/ar-04.glb", poster: "posters/ar-04.jpg", note: "" },
    { title: "Pink Fire Portal", file: "ar/ar-05.glb", poster: "posters/ar-05.jpg", note: "" },
    { title: "Purple Portal, Smoke and Velvet", file: "ar/ar-06.glb", poster: "posters/ar-06.jpg", note: "" },
    { title: "Yellow Streamers", file: "ar/ar-07.glb", poster: "posters/ar-07.jpg", note: "" },
    { title: "Blue Fire Portal", file: "ar/ar-08.glb", poster: "posters/ar-08.jpg", note: "" },
    { title: "Yellow Fire Portal", file: "ar/ar-09.glb", poster: "posters/ar-09.jpg", note: "" },
    { title: "Iridescent Pinwheels", file: "ar/ar-10.glb", poster: "posters/ar-10.jpg", note: "" },
  ],

  // Menu links (left side of the menu bar) and footer. Add or remove freely.
  links: [
    { label: "Email",     href: "mailto:kieranayvin@gmail.com" },
    { label: "Instagram", href: "https://www.instagram.com/KIERAN.XX/" },
    { label: "Donation",  href: "https://venmo.com/u/kieranxx" },
  ],

  about: {
    portrait: "images/artist.jpg",  // optional; small picture inside the opening line. Hidden if the file isn't there.
    lead: "XR artist creating bespoke experiences.",
    body: [
      "Add a longer description of your practice here: what you make, the tools you use, and what draws you to painting in three dimensions.",
    ],
    // Two pictures with captions under the text (optional; delete the list to hide them).
    photos: [
      { image: "images/work-02.jpg", caption: "Add a caption for this photo." },
      { image: "images/work-05.jpg", caption: "Add a caption for this photo." },
    ],
    // Exhibitions, features and press (optional; delete the list to hide it).
    press: [
      { outlet: "Publication name", date: "Jan 2026", title: "Title of the feature or exhibition", href: "#" },
      { outlet: "Gallery or venue", date: "Nov 2025", title: "Title of the show", href: "#" },
      { outlet: "Publication name", date: "Aug 2025", title: "Title of the feature", href: "#" },
    ],
  },
};
