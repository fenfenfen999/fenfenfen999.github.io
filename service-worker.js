"use strict";var precacheConfig=[["icon_120x120.ad228f26c007f8d3181cb94e7de54eaa.png","ad228f26c007f8d3181cb94e7de54eaa"],["icon_152x152.53247b32ed6b07506bf39484ad93fd9f.png","53247b32ed6b07506bf39484ad93fd9f"],["icon_180x180.68156d8d9f3f1acfbd9dde7fa2da408f.png","68156d8d9f3f1acfbd9dde7fa2da408f"],["icon_60x60.7cd6278f0f042972ee4e400d50c87c8b.png","7cd6278f0f042972ee4e400d50c87c8b"],["icon_76x76.8386ad44b9a1891a8d3452a56618284e.png","8386ad44b9a1891a8d3452a56618284e"],["service-worker.js","6d38d4f2468513f3e30d01041e366c68"],["static/css/app.50737ab76355aa464267bfcfb4dac890.css","5ff6c261c5db418cb6d4400f0cf1b581"],["static/fonts/element-icons.535877f.woff","535877f50039c0cb49a6196a5b7517cd"],["static/fonts/element-icons.732389d.ttf","732389ded34cb9c52dd88271f1345af9"],["static/img/pipe-m-s.65968d4.png","65968d406b9a5a36fc7bfbace978be8d"],["static/img/pipe-m.6f79815.png","6f79815ee3726b0e0bad7842cdafbeb6"],["static/js/0.1fa81611a1be95198f0d.js","ce0ef052ca6d33ae1c813575ceeaaa8a"],["static/js/1.029fa73706e35cc6e666.js","f153286c2183d37dfb9ef5303c236d66"],["static/js/2.66c7c767dc1e54aab227.js","a91ff85dd454332af9d641596e56e3da"],["static/js/3.dd243e984064a97de24d.js","ca109c8c777185a98237a231a164e72d"],["static/js/4.5b5a36ee3ca328ec1885.js","b324023f26c1c5e0a25a2e7775e9b74a"],["static/js/5.8938e8aff49279a35a46.js","504fa1ae39b0bac90796bfa12847645c"],["static/js/app.eaaa6f4a2125e0be70bc.js","f1b9594bce1a1fabdb5e06311ccdd18d"],["static/js/manifest.313d293f3ab3834f92c0.js","7bcdb276568fb4223364198f5dda42c6"],["static/js/vendor.9d794fe86ac27f8b4a67.js","6344ecee2c7db86a4d0c198e203c8642"]],cacheName="sw-precache-v3-jimdb.github-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,!1);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));0,t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});