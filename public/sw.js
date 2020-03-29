//installing 

//caches.open
//cache addAll and cache.all

const staticCacheName = 'site-static';
const assets = [
    '/',
    '/index.html',
    '/js/app.js',
    '/css/bootstrap.css',
    '/css/bootstrap.js',
    '/css/popper.min.js',
    '/css/tooltip.min.js',
    '/css/jquery-3.4.0.slim.min.js',
    '/icon-384x384.png',
];


self.addEventListener('install', event =>{
    console.log('service worker has been installed');
    event.waitUntil(
    caches.open(staticCacheName).then(cache => {
        console.log('caching shell assets');
        cache.addAll(assets);
     })
    );
});

//activation - info to
self.addEventListener('activate',event =>{
    console.log('Serive workering has been activated');
});

// //fetch event
// //Button to add on home screen
self.addEventListener('fetch', event => {
    console.log('Fetch event fired', event);
    event.respondWith(
        caches.match(event.request).then(cacheRes => {
            return cacheRes || fetch(event.request);
        })
    );
});
