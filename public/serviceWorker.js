const staticPWA = "PWA-v1";
const assets = [
  "/",
  "/_next/static/index.html",
  "/_next/static/css/globals.css",
  "/_next/static/js/app.js",
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
