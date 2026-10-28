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
  tagline: "Painting, drawing and sculpture in virtual reality",

  // Links that float on the 3D piece on the home screen.
  //   at: [x, y, z] is a spot on the model.
  //   To find a spot: open the site with  ?edit  on the end of the address
  //   (e.g. http://localhost:8000/?edit), click the model, and copy the
  //   coordinates it shows into "at" below.
  hotspots: [
    { label: "Gallery",           href: "#gallery", at: [-1.1, 0.35, 0.3] },
    { label: "Augmented reality", href: "#ar",      at: [0.2, 0.9, 0.2] },
    { label: "About",             href: "#about",   at: [1.0, -0.1, 0.4] },
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

  // Augmented reality: 10 pieces made in Open Brush (.glb).
  // "poster" is an optional preview image, e.g. "images/work-01.jpg".
  // Each piece has its own link: yoursite/#ar-3 opens piece 3 (handy for NFC tags and QR codes).
  // Size in AR, in metres (the tallest side of the piece):
  arSize: 1.2,
  ar: [
    { title: "Piece 1",  file: "ar/ar-01.glb", poster: "images/work-01.jpg", note: "Made in Open Brush." },
    { title: "Piece 2",  file: "ar/ar-02.glb", poster: "images/work-02.jpg", note: "Made in Open Brush." },
    { title: "Piece 3",  file: "ar/ar-03.glb", poster: "images/work-03.jpg", note: "Made in Open Brush." },
    { title: "Piece 4",  file: "ar/ar-04.glb", poster: "images/work-04.jpg", note: "Made in Open Brush." },
    { title: "Piece 5",  file: "ar/ar-05.glb", poster: "", note: "" },
    { title: "Piece 6",  file: "ar/ar-06.glb", poster: "", note: "" },
    { title: "Piece 7",  file: "ar/ar-07.glb", poster: "", note: "" },
    { title: "Piece 8",  file: "ar/ar-08.glb", poster: "", note: "" },
    { title: "Piece 9",  file: "ar/ar-09.glb", poster: "", note: "" },
    { title: "Piece 10", file: "ar/ar-10.glb", poster: "", note: "" },
  ],

  about: {
    portrait: "images/artist.jpg", // optional; hidden if the file isn't there
    paragraphs: [
      "XR artist creating bespoke experiences.",
    ],
    links: [
      { label: "Email", href: "mailto:you@example.com" },
      { label: "Instagram", href: "https://instagram.com/" },
    ],
  },
};
