const CACHE_NAME = "static-resources";

self.addEventListener("fetch", (event) => {
  console.log(event.request.url);
  if (event.request.url.startsWith("chrome-extension")) {
    return;
  }
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (!response.ok) {
          throw new TypeError("bad response status");
        }
        const clone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(response.url, clone));
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

self.addEventListener("activate", (event) => {
  fetch(event.request)
    .then((response) => {
      if (!response.ok) {
        throw new TypeError("bad response status");
      }
      const clone = response.clone();
      caches.open(CACHE_NAME).then((cache) => cache.put(response.url, clone));
      return response;
    })
    .catch((e) => {
      console.log(`Failed fetch ${event?.request?.url}`, e);
      return caches.match(event.request).catch(() => {
        return caches.match("index.html");
      });
    });
});

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) =>
        cache.addAll([
          "/",
          "/index.html",
          "/setupSw.js",
          "/service-worker.js",
          "/static/css/main.css",
          "/static/js/main.js",
        ])
      )
  );
});
