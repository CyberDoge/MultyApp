const CACHE_NAME = "static-resources";

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (
    new URL(request.url).origin !== location.origin ||
    request.url.startsWith("chrome-extension") ||
    request.url.endsWith(".hot-update.json")
  ) {
    return;
  }
  event.respondWith(
    fetch(request)
      .then((response) => {
        if (!response.ok) {
          throw new TypeError("bad response status");
        }
        const clone = response.clone();
        caches.open(CACHE_NAME).then(async (cache) => {
          if (await cache.match(request)) {
            return;
          }
          updateCacheIfNeed(cache, request.url, clone, /main\.[\da-z]{8}\.js/);
          updateCacheIfNeed(cache, request.url, clone, /main\.[\da-z]{8}\.css/);
        });
        return response;
      })
      .catch((e) => {
        console.log(`Failed fetch ${request?.url}`, e);
        return caches.match(request).catch(() => {
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

async function updateCacheIfNeed(cache, url, clone, pattern) {
  if (url.match(pattern)) {
    await clearPrevCache(cache, url, pattern);
    cache.put(url, clone);
    console.log(`обновил ресурс ${url}`);
  }
}

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(["/", "/index.html", "/setupSw.js"]))
  );
});
