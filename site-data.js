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

  // The 3D piece on the home page. rotateY turns it around its vertical axis, in degrees.
  hero: { model: "models/hero.glb", rotateY: 270 },
  // Links that float on the 3D piece on the home screen.
  //   at: [x, y, z] is a spot on the model.
  //   To find a spot: open the site with  ?edit  on the end of the address
  //   (e.g. http://localhost:8000/?edit), click the model, and copy the
  //   coordinates it shows into "at" below.
  hotspots: [
    { label: "About",             href: "#about",   at: [-0.95, 0.25, 0.2] },
    { label: "Gallery",           href: "#gallery", at: [0.2, 0.85, 0.2] },
    { label: "Extended reality",  href: "#xr",      at: [1.05, -0.05, 0.2] },
  ],

  // Gallery: "image" is the full picture shown when someone clicks a work; "thumb" is the square picture on the Gallery page.
  // "slug" is the work's web address: yoursite.com/banana/ opens the Banana print. Keep it the same as the image file name.
  // The order here is the order on the page. Add "year" to a work to show a year.
  works: [
    { title: "Heart Peach", slug: "heart_peach", medium: "Watercolor print", image: "images/heart_peach.jpg", thumb: "images/thumbs/heart_peach.jpg", note: "" },
    { title: "Pineapple", slug: "pineapple", medium: "Watercolor print", image: "images/pineapple.jpg", thumb: "images/thumbs/pineapple.jpg", note: "" },
    { title: "Knicks Peach", slug: "knicks_peach", medium: "Watercolor print", image: "images/knicks_peach.jpg", thumb: "images/thumbs/knicks_peach.jpg", note: "" },
    { title: "Purple Peach", slug: "purple_peach", medium: "Watercolor print", image: "images/purple_peach.jpg", thumb: "images/thumbs/purple_peach.jpg", note: "" },
    { title: "Maracuya", slug: "maracuya", medium: "Watercolor print", image: "images/maracuya.jpg", thumb: "images/thumbs/maracuya.jpg", note: "" },
    { title: "Banana", slug: "banana", medium: "Watercolor print", image: "images/banana.jpg", thumb: "images/thumbs/banana.jpg", note: "" },
    { title: "Berries", slug: "berries", medium: "Watercolor print", image: "images/berries.jpg", thumb: "images/thumbs/berries.jpg", note: "" },
    { title: "Avocado", slug: "avocado", medium: "Watercolor print", image: "images/avocado.jpg", thumb: "images/thumbs/avocado.jpg", note: "" },
    { title: "Apple", slug: "apple", medium: "Watercolor print", image: "images/apple.jpg", thumb: "images/thumbs/apple.jpg", note: "" },
    { title: "Watermelon", slug: "watermelon", medium: "Watercolor print", image: "images/watermelon.jpg", thumb: "images/thumbs/watermelon.jpg", note: "" },
    { title: "Butterfly", slug: "butterfly", medium: "Watercolor print", image: "images/butterfly.jpg", thumb: "images/thumbs/butterfly.jpg", note: "" },
    { title: "Starfruit", slug: "starfruit", medium: "Watercolor print", image: "images/starfruit.jpg", thumb: "images/thumbs/starfruit.jpg", note: "" },
    { title: "Fruit Bowl", slug: "fruit_bowl", medium: "Watercolor print", image: "images/fruit_bowl.jpg", thumb: "images/thumbs/fruit_bowl.jpg", note: "" },
    { title: "Red Mango", slug: "red_mango", medium: "Watercolor print", image: "images/red_mango.jpg", thumb: "images/thumbs/red_mango.jpg", note: "" },
  ],

  // Extended reality: one page per piece (piece-01.html, piece-02.html ...).
  // "file" is the .glb; "poster" is the preview picture on the card (optional).
  // "view" is the starting camera: az = turn left/right (degrees), pol = tilt (90 = straight on, 0 = from above),
  // dist = how far away, px/py = slide the piece sideways/up, static = start in Fixed mode (true) or free-turn mode (false).
  // To capture a view for another piece: open its page with ?view on the end, turn it how you like, and copy the line it shows.
  // "zoom: 1.5" shows a piece 150% bigger (River uses it).
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
    { title: "Sparkles", file: "ar/ar-11.glb", poster: "posters/ar-11.jpg", note: "" },
    { title: "River", zoom: 1.5, file: "ar/ar-12.glb", poster: "posters/ar-12.jpg", note: "" },
    { title: "Roses", file: "ar/ar-13.glb", poster: "posters/ar-13.jpg", note: "" },
  ],

  // Menu links (left side of the menu bar) and footer. Add or remove freely.
  links: [
    { label: "Email",     href: "mailto:kieranayvin@gmail.com" },
    { label: "Instagram", href: "https://www.instagram.com/KIERAN.XX/" },
    { label: "Donation",  href: "https://venmo.com/u/kieranxx" },
  ],

  about: {
    portrait: "images/artist.jpg",  // optional; small picture inside the opening line. Hidden if the file isn't there.
    lead: "Kieran is an extended reality (XR) artist living in Brooklyn, NY.",
    // Each line below is one paragraph.
    body: [
      "After working at an augmented reality (AR) video game company in London, Kieran has dreamed about creating with XR. They created a virtual reality (VR) experience titled Beyond Doubt for Earth Day in 2020, which explored the connection between capitalism, consumerism, racism and the climate crisis.",
      "Kieran's fruit series began as an exploration of how fragmented shapes and colors can create a whole image. The fruit series has become a proof of concept and bridge between their XR and physical paintings.",
      "Kieran is excited to exhibit their fruit series, which is intended to bring a sense of wonder, excitement, brightness and joy. The fruit paintings are intended to depict a pure, bright imagery to align oneself with that feeling.",
    ],
    // Two pictures with captions under the text (optional; delete the list to hide them).
    photos: [
      { image: "images/thumbs/apple.jpg", caption: "Apple, from the fruit series" },
      { image: "images/thumbs/maracuya.jpg", caption: "Maracuya, from the fruit series" },
    ],
    // Exhibitions, features and press (optional). Add rows like { outlet: "...", date: "...", title: "...", href: "..." }.
    press: [],
  },
};
