const CACHE_NAME = 'jatra-pwa-v1';
const ASSETS = [
  'index.html',
  'manifest.json'
];

// इन्स्टॉलेशन आणि कॅशिंग
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// ऑफलाईन असताना फाईल्स लोड करणे
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
