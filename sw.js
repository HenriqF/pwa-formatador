const CACHE = 'editor-pwa-v1';

const ASSETS = [
    '/',
    '/manifest.webmanifest',
    'app/icons/16.png',
    'app/icons/32.png',
    'app/icons/48.png',
    'app/icons/128.png',
    'app/icons/192.png',
    'app/icons/512.png',
    'app/imagens/cpy.png',
    'app/imagens/f.png',
    'app/mapas/morse.json',
    'app/mapas/pequeno.json',
    'app/mapas/pontacabeca.json',
    'app/app.js',
    'app/index.html',
    'app/styles.css'
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