self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => response || fetch(event.request))
      .catch(function () {
        return caches.match("index.html");
      })
  );
});
/*self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cache) => {
      return fetch(event.request).then((response) => {
        cache.put(event.request, response.clone());
        return response;
      });
    })
  );
});*/
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
          "/static/css/main.css",
          "/static/js/main.js",
        ])
      )
  );
});
