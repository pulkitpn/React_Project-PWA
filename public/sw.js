self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
      caches.open("static")
        .then(function(cache) {
          console.log('Opened cache');
          return cache.addAll(['/index.html']);
        })
    );
  });
  
  
  self.addEventListener("fetch", e =>{
    e.respondWith(
      caches.match(e.request).then(response =>{
        return response || fetch(e.request);
      })
    );
    
  })