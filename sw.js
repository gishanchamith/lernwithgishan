self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('learnwithgishan-cache-v1').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/new.css',
        '/icon-192.png',
        '/icon-512.png',
        // Add more pages if you want
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
