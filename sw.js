const CACHE = 'editor-pwa-v1';

const ASSETS = [
    '/',
    '/manifest.webmanifest',
    '/icons/16.png',
    '/icons/32.png',
    '/icons/48.png',
    '/icons/128.png',
    '/icons/192.png',
    '/icons/512.png',
    '/imagens/cpy.png',
    '/imagens/f.png',
    '/mapas/morse.json',
    '/mapas/pequeno.json',
    '/mapas/pontacabeca.json',
    '/app.js',
    '/index.html',
    '/styles.css'
]

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('activate', (event) => {
    event.waitUntil(caches.keys().then((keys)=>Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))));
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cached)=>{
      return (
        cached ||
        fetch(event.request).catch(()=>
          new Response("Sem conexão.", {
            headers: {'Content-Type': 'text/plain'}
          })
        )
      );
    })
  );
});