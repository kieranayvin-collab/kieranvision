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

  // Gallery: "image" is the full picture shown when someone clicks a work.
  // "thumb" is the square picture on the Gallery page (cropped around the fruit). Add "year" to show a year.
  works: [
    { title: "Butterfly", medium: "Watercolor print", image: "images/work-01.jpg", thumb: "images/thumbs/work-01.jpg", note: "" },
    { title: "Heart Peach", medium: "Watercolor print", image: "images/work-02.jpg", thumb: "images/thumbs/work-02.jpg", note: "" },
    { title: "Red Mango", medium: "Watercolor print", image: "images/work-03.jpg", thumb: "images/thumbs/work-03.jpg", note: "" },
    { title: "Pineapple", medium: "Watercolor print", image: "images/work-04.jpg", thumb: "images/thumbs/work-04.jpg", note: "" },
    { title: "Knicks Peach", medium: "Watercolor print", image: "images/work-05.jpg", thumb: "images/thumbs/work-05.jpg", note: "" },
    { title: "Mr", medium: "Watercolor print", image: "images/work-06.jpg", thumb: "images/thumbs/work-06.jpg", note: "" },
    { title: "Purple Peach", medium: "Watercolor print", image: "images/work-07.jpg", thumb: "images/thumbs/work-07.jpg", note: "" },
    { title: "Maracuya", medium: "Watercolor print", image: "images/work-08.jpg", thumb: "images/thumbs/work-08.jpg", note: "" },
    { title: "Banana", medium: "Watercolor print", image: "images/work-09.jpg", thumb: "images/thumbs/work-09.jpg", note: "" },
    { title: "Berries", medium: "Watercolor print", image: "images/work-10.jpg", thumb: "images/thumbs/work-10.jpg", note: "" },
    { title: "Avocado", medium: "Watercolor print", image: "images/work-11.jpg", thumb: "images/thumbs/work-11.jpg", note: "" },
    { title: "Starfruit", medium: "Watercolor print", image: "images/work-12.jpg", thumb: "images/thumbs/work-12.jpg", note: "" },
    { title: "Apple", medium: "Watercolor print", image: "images/work-13.jpg", thumb: "images/thumbs/work-13.jpg", note: "" },
    { title: "Watermelon", medium: "Watercolor print", image: "images/work-14.jpg", thumb: "images/thumbs/work-14.jpg", note: "" },
    { title: "Apple 2", medium: "Watercolor print", image: "images/work-15.jpg", thumb: "images/thumbs/work-15.jpg", note: "" },
  ],

  // Extended reality: one page per piece (piece-01.html, piece-02.html ...).
  // "file" is the .glb; "poster" is the preview picture on the card (optional).
  // "view" is the starting camera: az = turn left/right (degrees), pol = tilt (90 = straight on, 0 = from above),
  // dist = how far away, px/py = slide the piece sideways/up, static = start in Static mode (true) or free-turn mode (false).
  // To capture a view for another piece: open its page with ?view on the end, turn it how you like, and copy the line it shows.
  // "occlude: true" adds the experimental Occlusion controls (see README).
  // Each piece has its own link, e.g. yoursite.com/piece-03.html, handy for NFC tags and QR codes.
  ar: [
    { title: "Berries", file: "ar/ar-01.glb", poster: "posters/ar-01.jpg", note: "" },
    { title: "Blue Bubbles", view: { az: -162, pol: 40, dist: 3.4, px: 0, py: 0.07, static: false }, file: "ar/ar-02.glb", poster: "posters/ar-02.jpg", note: "" },
    { title: "Blue Circle, Yellow Sun", view: { az: 0, pol: 90, dist: 4.4, static: true }, file: "ar/ar-03.glb", poster: "posters/ar-03.jpg", note: "" },
    { title: "Lotus", file: "ar/ar-04.glb", poster: "posters/ar-04.jpg", note: "" },
    { title: "Pink Fire Portal", view: { az: -21.5, pol: 84, dist: 4.0, static: false }, file: "ar/ar-05.glb", poster: "posters/ar-05.jpg", note: "" },
    { title: "Purple Portal, Smoke and Velvet", occlude: true, view: { az: -16.6, pol: 2, dist: 2.8, px: 0, py: 0.1, static: false }, file: "ar/ar-06.glb", poster: "posters/ar-06.jpg", note: "" },
    { title: "Yellow Streamers", view: { az: -12, pol: 88, dist: 3.3, px: -0.02, py: 0.06, static: false }, file: "ar/ar-07.glb", poster: "posters/ar-07.jpg", note: "" },
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
      "three dimensional abstract expressionist, painting somatic experiences.",
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
