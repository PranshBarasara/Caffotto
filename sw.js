const CACHE_NAME = 'caffotto-mpa-v3';
const ASSETS = [
  'index.html',
  'about.html',
  'menu.html',
  'experience.html',
  'gallery.html',
  'reservation.html',
  'events.html',
  'contact.html',
  'css/style.css',
  'js/main.js',
  'js/animations.js',
  'js/menu.js',
  'js/chatbot.js',
  'js/reservation.js',
  'images/hero.png',
  'images/about.png',
  'images/pizza.png',
  'images/dessert.png',
  'images/ambience.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(e.request).catch(() => {
        // Cache fallback
      });
    })
  );
});
