// self.addEventListener('install', function(event) {
//     // Perform install steps
//     event.waitUntil(
//       caches.open("static")
//         .then(function(cache) {
//           console.log('Opened cache');
//           return cache.addAll(['/index.html']);
//         })
//     );
//   });
  
  
//   self.addEventListener("fetch", e =>{
//     e.respondWith(
//       caches.match(e.request).then(response =>{
//         return response || fetch(e.request);
//       })
//     );
    
//   })

const cacheName = "version1";
const cacheAssets = [
    "src\Components\Glogin.js",
    "src\Components\AdminHome.js",
    "src\Components\AddMenu.js",
    "src\Components\AdminMenu.js"
]

self.addEventListener('install',event =>
 console.log('sw is installed',event));

 self.addEventListener('activate',event =>
 console.log('sw is activated',event));

 self.addEventListener('fetch',event =>{
 console.log('sw is fetched',event)
 event.respondWith(fetch (event.request).catch(() => caches.match (event.request)));
 });
 