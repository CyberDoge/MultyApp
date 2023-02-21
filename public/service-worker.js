self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => response || fetch(event.request))
      .catch(function (error) {
        return caches.match("index.html");
      })
  );
});

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open("static-resources")
      .then((cache) =>
        cache.addAll([
          "/",
          "/index.html",
          "/setupSw.js",
          "/service-worker.js",
          "/static/css/main.aa68753a.css",
          "/static/js/main.cdd53bc4.js",
        ])
      )
  );
});
