const CACHE_NAME = 'wb-transportes-cache-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json'
];

// Install Event
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Caching initial shell assets');
      // Add assets one by one to ensure failure of one doesn't break the entire cache
      const cachePromises = ASSETS_TO_CACHE.map((asset) => {
        return cache.add(asset).catch((err) => {
          console.warn(`[Service Worker] Warning: Failed to pre-cache asset: ${asset}`, err);
        });
      });
      return Promise.all(cachePromises);
    })
  );
});

// Activate Event
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('[Service Worker] Deleting old cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event with dynamic network/cache fallback strategy
self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // Skip non-GET requests and browser extensions
  if (req.method !== 'GET' || !req.url.startsWith(self.location.origin)) {
    return;
  }

  // Define strategy based on asset types
  const isNavigate = req.mode === 'navigate' || url.pathname === '/';
  const isStaticAsset = url.pathname.includes('/assets/') || 
                        url.pathname.endsWith('.js') || 
                        url.pathname.endsWith('.css') || 
                        url.pathname.endsWith('.png') || 
                        url.pathname.endsWith('.jpg') || 
                        url.pathname.endsWith('.svg');

  if (isNavigate) {
    // Network First strategy for navigation
    event.respondWith(
      fetch(req)
        .then((response) => {
          // Cache a copy
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(req, responseClone);
          });
          return response;
        })
        .catch(() => {
          // If network failed, look in cache
          return caches.match('/') || caches.match('/index.html');
        })
    );
  } else if (isStaticAsset) {
    // Cache First, with fallback to Network strategy for fast asset serving
    event.respondWith(
      caches.match(req).then((cachedResponse) => {
        if (cachedResponse) {
          // Fetch high-priority background update (stale-while-revalidate style)
          fetch(req).then((networkResponse) => {
            if (networkResponse.status === 200) {
              caches.open(CACHE_NAME).then((cache) => cache.put(req, networkResponse));
            }
          }).catch(() => {/* Ignore background download fail when offline */});
          
          return cachedResponse;
        }

        return fetch(req).then((networkResponse) => {
          if (!networkResponse || networkResponse.status !== 200) {
            return networkResponse;
          }
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(req, responseClone);
          });
          return networkResponse;
        }).catch(() => {
          // Return offline placeholder check for images if applicable
          return new Response('Offline', { status: 503, statusText: 'Offline' });
        });
      })
    );
  } else {
    // Default: Network First, falling back to cache
    event.respondWith(
      fetch(req)
        .then((response) => {
          if (response.status === 200) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, responseClone));
          }
          return response;
        })
        .catch(() => caches.match(req))
    );
  }
});
