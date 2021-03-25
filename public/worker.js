var CACHE_NAME = 'pwa-task-manager';
var urlsToCache = [
    './',
    './completed',
    'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap',
    'https://sqsinformatique.com/mrms/client/static/js/bundle.js',
    'https://sqsinformatique.com/mrms/client/static/js/0.chunk.js',
    'https://sqsinformatique.com/mrms/client/static/js/main.chunk.js',
    'https://sqsinformatique.com/mrms/client/src/styles/index.scss',
    'https://sqsinformatique.com/mrms/client/favicon.ico',
    'https://sqsinformatique.com/mrms/client/manifest.json',
    'https://sqsinformatique.com/mrms/client/logo192.png',
    'https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxK.woff2',
    'https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmEU9fBBc4.woff2',
    'https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmEU9fABc4EsA.woff2',
    'https://sqsinformatique.com/mrms/client/src/asetss/images/login-background.png',
    'https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu5mxKOzY.woff2',
    'https://sqsinformatique.com/mrms/client/src/asetss/images/worker-avatar.jpg',
    'https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfBBc4.woff2',
    'https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfABc4EsA.woff2',
    'https://sqsinformatique.com/mrms/client/src/asetss/images/scrap.png',
    'https://sqsinformatique.com/mrms/client/src/asetss/images/draft-icon.png'
];

// Install a service worker
self.addEventListener('install', event => {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

// Cache and return requests
// fetch event
self.addEventListener('fetch', evt => {
    // check if request is made by chrome extensions or web page
    // if request is made for web page url must contains http.
    if (!(evt.request.url.indexOf('http') === 0)) return; // skip the request. if request is not made with http protocol

    evt.respondWith(
        caches
            .match(evt.request)
            .then(
                cacheRes =>
                    cacheRes ||
                    fetch(evt.request).then(fetchRes =>
                        caches.open(dynamicNames).then(cache => {
                            cache.put(evt.request.url, fetchRes.clone());
                            // check cached items size
                            limitCacheSize(dynamicNames, 75);
                            return fetchRes;
                        })
                    )
            )
            .catch(() => caches.match('/fallback'))
    );
});

// cache size limit function
const limitCacheSize = (name, size) => {
    caches.open(name).then(cache => {
        cache.keys().then(keys => {
            if (keys.length > size) {
                cache.delete(keys[0]).then(limitCacheSize(name, size));
            }
        });
    });
};

// Update a service worker
self.addEventListener('activate', event => {
    var cacheWhitelist = ['pwa-task-manager'];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});