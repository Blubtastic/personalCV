"use strict";var precacheConfig=[["/index.html","80ba0e4b649bdde366a80bec5d31ac1f"],["/static/css/main.59bec06d.css","a335a203cb945d1ab3fa0fd849c668f1"],["/static/js/main.cc4f5414.js","7911f69d1e89981e07e7eb1dfcce6124"],["/static/media/angular.d96aab81.png","d96aab816b07038a4771b38a1a21b36f"],["/static/media/code_bubble.ec8d0336.png","ec8d03361ddf989d5b2c1d86f4b6933a"],["/static/media/face.6163476d.png","6163476d4921dbaf83480bfe4690fb4e"],["/static/media/genetic.a92f1920.png","a92f192005292ee47cf2a85256da6473"],["/static/media/git.957c4dd9.png","957c4dd9aa815cc1de2040cc1259589f"],["/static/media/gmail.8e462b04.png","8e462b045122dd2affac057a2f7939f7"],["/static/media/google_maps3.366ce9de.png","366ce9deeed8f5f0d4cf1556921eb51b"],["/static/media/hs_logo.b8eff16c.png","b8eff16cc7dc0564ce1e9eb14355f9a6"],["/static/media/io.8878cf88.png","8878cf88f8eb6e115a3ff2473b625ebc"],["/static/media/me.bfc0711f.png","bfc0711f842e9d4207ea1e5368cd4f2d"],["/static/media/ms3.e9174116.png","e91741164cea194ac8142f8e719132bd"],["/static/media/propeller_simple.ec8b98fa.png","ec8b98faa20a4f700c75fef19e3e1346"],["/static/media/propeller_simple2.65a967e4.png","65a967e468570482cb8659b0cfc8c9f6"],["/static/media/react.f5c1af3b.png","f5c1af3bad4136d1bedc8a57eb4a954a"],["/static/media/simple_cover3.12c85ffd.png","12c85ffdae034855120d1f438e44edb6"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});