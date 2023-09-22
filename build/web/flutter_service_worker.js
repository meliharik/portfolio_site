'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"favicon-16x16.png": "bcc3220ffa26338080480efa4c5a8fe0",
"version.json": "009c9e65172e010890f7f65fde438006",
"favicon.ico": "bb340f74d638aaf1caaa1b983ac35e64",
"index.html": "a17c0125ec2cd5d7556f1e353ebbc4e9",
"/": "a17c0125ec2cd5d7556f1e353ebbc4e9",
"android-chrome-192x192.png": "f667e9fc5bceb277ae0c9d8dde6e6391",
"apple-touch-icon.png": "8a99e724846e51de5c5501a31d29b509",
"main.dart.js": "a9293662e85ba5808beaa8593a59f83f",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "bb340f74d638aaf1caaa1b983ac35e64",
"android-chrome-512x512.png": "3aa64642aa6a1371e4ad9fb44497d2ce",
"icons/favicon-16x16.png": "bcc3220ffa26338080480efa4c5a8fe0",
"icons/favicon.ico": "bb340f74d638aaf1caaa1b983ac35e64",
"icons/android-chrome-192x192.png": "f667e9fc5bceb277ae0c9d8dde6e6391",
"icons/apple-touch-icon.png": "8a99e724846e51de5c5501a31d29b509",
"icons/apple-icon.png": "8dfe2575c466366bbf0d8a6f3b9ed094",
"icons/apple-icon-144x144.png": "18aef237b463b7a7d467f5e572f4108f",
"icons/android-icon-192x192.png": "09af73ad30d3f90c9f0753eb4dde39da",
"icons/apple-icon-precomposed.png": "8dfe2575c466366bbf0d8a6f3b9ed094",
"icons/apple-icon-114x114.png": "4d7841621a3b904f16b6911df6d90631",
"icons/ms-icon-310x310.png": "cf5a2d2ee48c225917d9ec1731cea04b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/ms-icon-144x144.png": "18aef237b463b7a7d467f5e572f4108f",
"icons/apple-icon-57x57.png": "0288e470e7d24a63db2c03683cda00f6",
"icons/apple-icon-152x152.png": "633b21c97057d811de4dabbc3a95b9f3",
"icons/favicon.png": "bb340f74d638aaf1caaa1b983ac35e64",
"icons/ms-icon-150x150.png": "07aafd7b42df7db3030c4a74f08c2623",
"icons/android-icon-72x72.png": "28031ceb56b9c8a43d662a1eea498fbe",
"icons/android-icon-96x96.png": "7d31ec54b1914f474a18524d95e1cfc1",
"icons/android-icon-36x36.png": "2e1c1e393ae9956772d8fe1230157fe2",
"icons/android-chrome-512x512.png": "3aa64642aa6a1371e4ad9fb44497d2ce",
"icons/apple-icon-180x180.png": "67449599f477125115063067dce05a79",
"icons/favicon-96x96.png": "8ee3dc46b6ef96c407b937e508b45a60",
"icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"icons/android-icon-48x48.png": "4e316cb3b0b6bd613f2f86c44af2d3fc",
"icons/apple-icon-76x76.png": "8cf0a523c21b0f54a794f94fd84653d4",
"icons/apple-icon-60x60.png": "d5e17a7f226b0c31ee49ed53ddd61fb7",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/android-icon-144x144.png": "18aef237b463b7a7d467f5e572f4108f",
"icons/apple-icon-72x72.png": "28031ceb56b9c8a43d662a1eea498fbe",
"icons/apple-icon-120x120.png": "090a366e1230fc6e4ae07fbaba5e34b3",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/favicon-32x32.png": "4e8c65fead5659cfe62963c24ad3d11b",
"icons/ms-icon-70x70.png": "da72378d96386de40c461f69ea772c8a",
"manifest.json": "964f5822a2841aefaf496d43fdc12f6a",
"assets/AssetManifest.json": "bdab7d016fb1718818b1afffbe9c207d",
"assets/NOTICES": "c6c34a5d8d71e43531eca4274d6d1a0e",
"assets/FontManifest.json": "59f84c52c2aa8d0981f214455827673e",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "305ab6021011d269fd9b858782f2f06b",
"assets/fonts/sfmono.otf": "f28892de5e5d3e75a4247d62be1e6cf0",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/svg/medium.svg": "86bbffd7f73d906c54c452200a8ed6a3",
"assets/assets/svg/github.svg": "c0e94df08ad3d521af33fa4ad69e2162",
"assets/assets/svg/appLogo.png": "7df7d2690ea72b34c624b25dfaec2644",
"assets/assets/svg/instagram.svg": "0f51da178eff1d87826480d0e5db970b",
"assets/assets/svg/profilePic.JPG": "72e184ee56e4e7400f70ddca75605103",
"assets/assets/svg/externalLink.svg": "1790fffa6c0b0eb87d7e90470cc80b86",
"assets/assets/svg/stackoverflow.svg": "ec181e798c8b9fe73dcf64d47926667a",
"assets/assets/svg/linkedIn.svg": "c408ef7fbd143d9052cd195819076f90",
"assets/assets/svg/twitter.svg": "d278ea034ebbe0c01e76739232fa2a3e",
"assets/assets/svg/folder.svg": "46a545a4289ba140f5b90613ceccd879",
"favicon-32x32.png": "4e8c65fead5659cfe62963c24ad3d11b",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
