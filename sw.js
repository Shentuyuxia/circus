// Offline support: serve the app and word lists from cache, refresh them in the background.
const CACHE = "youyuanhui-v1";
const SHELL = [
  "./", "./index.html", "./manifest.webmanifest",
  "./icon.svg", "./icon-192.png", "./icon-512.png", "./tent-180.png", "./tent-192.png"
];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => Promise.all(SHELL.map(u => c.add(u).catch(() => null)))).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  const sameOrigin = url.origin === self.location.origin;
  const isFont = url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com";
  if (!sameOrigin && !isFont) return; // never touch API calls
  e.respondWith(
    caches.open(CACHE).then(async cache => {
      const cached = await cache.match(req, { ignoreSearch: sameOrigin });
      const fresh = fetch(req).then(res => {
        if (res && (res.ok || res.type === "opaque")) cache.put(req, res.clone());
        return res;
      }).catch(() => cached);
      return cached || fresh;
    })
  );
});
