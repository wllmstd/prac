'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "6f9aa351b4844077670d8aff5d22559f",
"assets/AssetManifest.bin.json": "69cee5723e996b10b1fbe1e4f307de4a",
"assets/AssetManifest.json": "bb81ebac7e1af53545452a17068c1037",
"assets/assets_low/01.jpg": "635349a1284cbd043965ff19549d8feb",
"assets/assets_low/02.jpg": "169e6047c39b304e7a3b0a5b3fbb0868",
"assets/assets_low/03.jpg": "f0ba0f55cccedf1bb7561479c55b552f",
"assets/assets_low/04.jpg": "c560fcc06ffdc42954b76c40ffdd6ad7",
"assets/assets_low/05.jpg": "5093181abb330f8264c0e900c6f24dba",
"assets/assets_low/06.jpg": "1290bd4b7b833ce9ad646b0cc0501808",
"assets/assets_low/07.jpg": "270cdffb80d91f7693dfe202db167132",
"assets/assets_low/08.jpg": "c8f2ab05fa628a2d2f4963db28b86310",
"assets/assets_low/09.jpg": "e1f65de66334e19b3aad3ce47e75fef8",
"assets/assets_low/10.jpg": "fc607c0726f5e5c584f3a08376d06165",
"assets/assets_low/11.jpg": "a953fd128e100880d0596700c85f7e38",
"assets/assets_low/12.jpg": "ba4f293239b57a7ca151a9f8c4c6656d",
"assets/assets_low/13.jpg": "e1733a8d725b747024b2bbd2ff939cdb",
"assets/assets_low/14.jpg": "7a0fcb7e28facbde5c2adf4137ca5c4d",
"assets/assets_low/15.jpg": "81a684c4a52cd039d3483346be6f2774",
"assets/assets_low/16.jpg": "df8cf5ecfe734e05d8348f8caad14b95",
"assets/assets_low/17.jpg": "3ac5fe99f347ed7892896b0c11e33c6d",
"assets/assets_low/18.jpg": "b77164018be3c4774760c420cb979234",
"assets/assets_low/19.jpg": "2ff985008c5ecc808edd7fed0a830836",
"assets/assets_low/20.jpg": "7b44c1d471f24be2398653c156d8f561",
"assets/assets_low/21.jpg": "acfbb2fb3f1e8fe82c93acc21e8b3390",
"assets/assets_low/22.jpg": "811dc31a0db6df7ea5e69a5adc6d3ec8",
"assets/assets_low/23.jpg": "58069918541636facf7cfae949b94515",
"assets/assets_low/24.jpg": "3bead47e66062be786cb810f0dcd76a4",
"assets/assets_low/25.jpg": "e2e5acbbeb903353ba717a81d3562a8b",
"assets/assets_low/26.jpg": "0fe595b1882a6ca50008e9dec809d28c",
"assets/assets_low/27.jpg": "4045dceae669624a3a7cf5df9ecfac05",
"assets/assets_low/28.jpg": "98c484c767f95fbe1c9fafe9c631433f",
"assets/assets_low/29.jpg": "025753ac628ec6c8e7cf4f3cfc1ace2c",
"assets/assets_low/30.jpg": "991eddcf79c28e3d99a4fccdb5f117f7",
"assets/assets_low/31.jpg": "5086eb3d2e439f656f39c5de319cfff8",
"assets/assets_low/32.jpg": "c0818510c53114d84e9df7bda3ceaf33",
"assets/assets_low/33.jpg": "2453a2ed2667809f4903fb7dac168af1",
"assets/assets_low/stad.jpg": "4362e66a053b86729c3a92c5329f9bd6",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "5c7ee6a325607553b8f6cdff3e8fd407",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0db203e8632f03baae0184700f3bda48",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "01bb14ae3f14c73ee03eed84f480ded9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "efc6c90b58d765987f922c95c2031dd2",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "7da8c7a925850271b9f06e912037dbf6",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7112dd5a7ed80870552b44b00eaad354",
"/": "7112dd5a7ed80870552b44b00eaad354",
"main.dart.js": "d502ae36a7eaa8003b8e4e43132de153",
"manifest.json": "4beb4e5bfb45b49bba8ea22608d70c66",
"version.json": "04aae4832af47591497b4aaa50b7f25e"};
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
