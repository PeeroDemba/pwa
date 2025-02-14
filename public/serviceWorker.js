const staticPWA = "PWA-v1";
const assets = [
  "/",
  "index.html",
  "/css/globals.css",
  "/js/app.js",
  "/images/pexels-darina-belonogova-mobile.png",
  "/images/pexels-darina-belonogova.png",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticPWA).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});
