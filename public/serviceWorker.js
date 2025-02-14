const staticPWA = "PWA-v1";
const assets = [
  "/",
  "/build/index.html",
  "/build/css/globals.css",
  "/build/js/app.js",
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
