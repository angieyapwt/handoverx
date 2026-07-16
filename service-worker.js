const CACHE = "handoverx-v17";
const ASSETS = ["./", "./index.html", "./styles.css?v=17", "./app.js?v=17", "./manifest.json", "./og.png", "./vendor/pdf-lib.min.js"];
self.addEventListener("install", event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting())));
self.addEventListener("activate", event => event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim())));
self.addEventListener("fetch", event => {
  const request = event.request;
  const url = new URL(request.url);
  const isLiveCode = url.origin === self.location.origin && (request.mode === "navigate" || /\.(?:js|css)$/.test(url.pathname));
  if (isLiveCode) {
    event.respondWith(fetch(request, { cache: "no-store" }).catch(() => caches.match(request)));
    return;
  }
  event.respondWith(caches.match(request).then(cached => cached || fetch(request)));
});
