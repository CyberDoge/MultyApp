const CACHE_NAME = "static-resources";

self.addEventListener("fetch", (event) => {
  if (
    new URL(event.request.url).origin !== location.origin ||
    event.request.url.startsWith("chrome-extension") ||
    event.request.url.endsWith(".hot-update.json")
  ) {
    return;
  }
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (!response.ok) {
          throw new TypeError("bad response status");
        }
        const clone = response.clone();
        caches.open(CACHE_NAME).then(async (cache) => {
          clearPrevCache(cache, response.url, /main\.[\da-z]{8}\.js/);
          clearPrevCache(cache, response.url, /main\.[\da-z]{8}\.css/);
          cache.put(response.url, clone);
        });
        return response;
      })
      .catch((e) => {
        console.log(`Failed fetch ${event?.request?.url}`, e);
        return caches.match(event.request).catch(() => {
          return caches.match("index.html");
        });
      })
  );
});

async function clearPrevCache(cache, url, pattern) {
  if (url.match(pattern)) {
    const keys = await cache.keys();
    for (const key of keys) {
      if (key.url.match(pattern)) {
        cache.delete(key);
      }
    }
  }
}
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(["/", "/index.html", "/setupSw.js"]))
  );
});
