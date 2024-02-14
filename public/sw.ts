// // src/sw.ts

// const CACHE_NAME: string = 'my-react-app-cache-v1';
// const urlsToCache: string[] = [
//   '/',
//   '/index.html',
//   '/main.tsx',
//   '/logo192.png',
//   '/logo512.png'
// ];

// self.addEventListener('install', (event: ExtendableEvent) => {
//   event.waitUntil(
//     caches.open(CACHE_NAME)
//       .then(cache => cache.addAll(urlsToCache))
//   );
// });

// self.addEventListener('fetch', (event: FetchEvent) => {
//   event.respondWith(
//     caches.match(event.request)
//       .then(response => {
//         if (response) {
//           return response;
//         }
//         return fetch(event.request);
//       })
//   );
// });

// self.addEventListener('activate', (event: ExtendableEvent) => {
//   const cacheWhitelist: string[] = ['my-react-app-cache-v1'];

//   event.waitUntil(
//     caches.keys().then(cacheNames => {
//       return Promise.all(
//         cacheNames.map(cacheName => {
//           if (cacheWhitelist.indexOf(cacheName) === -1) {
//             return caches.delete(cacheName);
//           }
//         })
//       );
//     })
//   );
// });
    