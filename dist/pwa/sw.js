if(!self.define){let e,s={};const a=(a,f)=>(a=new URL(a+".js",f).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(f,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let d={};const r=e=>a(e,c),n={module:{uri:c},exports:d,require:r};s[c]=Promise.all(f.map((e=>n[e]||r(e)))).then((e=>(i(...e),d)))}}define(["./workbox-17c5f633"],(function(e){"use strict";e.setCacheNameDetails({prefix:"bplan"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/Attention.6ef64de3.js",revision:"10298c44d5cdda4742ce0ef65119409a"},{url:"assets/axios.86629d15.js",revision:"c532c622fbb224eecfec54bd32a8ecbb"},{url:"assets/Daily.016888de.js",revision:"a0dd8abe8400719374c3c563e0de89a1"},{url:"assets/Error404.bdd43aea.js",revision:"2ad0fccd99a01e550931372aef3dd3ae"},{url:"assets/ezglobals.ceffc419.js",revision:"fb18688d98e5652ae00151f94628c240"},{url:"assets/fa-brands-400.b1d1c1b0.ttf",revision:"0ef11ce096706bcafc520aee12162ae4"},{url:"assets/fa-brands-400.c61287c2.woff2",revision:"e2f5b365c7d3d4497da73148ddfae997"},{url:"assets/fa-regular-400.5da313b0.woff2",revision:"4b162098158528431aeb5636116777f0"},{url:"assets/fa-regular-400.d7b19fe2.ttf",revision:"40e6df55734232692408d76ad5f9c34a"},{url:"assets/fa-solid-900.8f06540f.woff2",revision:"328a9d0f59f0ebb55cddac6f39995bea"},{url:"assets/fa-solid-900.e4f6a7e9.ttf",revision:"c0bf087a238488d351270a35c8f0cca0"},{url:"assets/fa-v4compatibility.2ddb3b41.ttf",revision:"36818ecc50af8ea6c4cbef88d0b2baad"},{url:"assets/fa-v4compatibility.f46715c9.woff2",revision:"6ddaf31a1e0e05490f6919cbb3347e9d"},{url:"assets/fastclick.8a4a8267.js",revision:"40efabedb876d409f1732920a78f9ae0"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fd84f88b.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.83be7b2f.woff2",revision:"393b5d8b3fd798486652801f3ee8c6ea"},{url:"assets/i18n.26e6f697.js",revision:"5caa632df1e4706e2f7546b8699fc366"},{url:"assets/index.41263d91.css",revision:"01bc8937944990fef3d3c76e9ad55d0e"},{url:"assets/index.aae40a94.js",revision:"bd8215987ea135aaf6e413ef8857e654"},{url:"assets/KFOkCnqEu92Fr1MmgVxIIzQ.34e9582c.woff",revision:"4aa2e69855e3b83110a251c47fdd05fc"},{url:"assets/KFOlCnqEu92Fr1MmEU9fBBc-.9ce7f3ac.woff",revision:"40bcb2b8cc5ed94c4c21d06128e0e532"},{url:"assets/KFOlCnqEu92Fr1MmSU5fBBc-.bf14c7d7.woff",revision:"ea60988be8d6faebb4bc2a55b1f76e22"},{url:"assets/KFOlCnqEu92Fr1MmWUlfBBc-.e0fd57c0.woff",revision:"0774a8b7ca338dc1aba5a0ec8f2b9454"},{url:"assets/KFOlCnqEu92Fr1MmYUtfBBc-.f6537e32.woff",revision:"bcb7c7e2499a055f0e2f93203bdb282b"},{url:"assets/KFOmCnqEu92Fr1Mu4mxM.f2abf7fb.woff",revision:"d3907d0ccd03b1134c24d3bcaf05b698"},{url:"assets/MainLayout.4f78cd94.js",revision:"633d3ab21a6f3690ea76e4ade154516c"},{url:"assets/MainLayout.b4604c05.css",revision:"bc77fd0adef8908adcef9911cc52ed51"},{url:"assets/Monthly.1dda4994.js",revision:"1e2de94c2a5ed4a1c5c589b414395ce0"},{url:"assets/QBtn.76e0b290.js",revision:"1826d401fb2e9e265c2a45c0c0537b98"},{url:"assets/QPage.663dfa1f.js",revision:"bcac6a37434222440eabd6d0aae47c39"},{url:"assets/register.79696773.js",revision:"5af461fc995b51aa6ec7cef08fbf7754"},{url:"assets/render.52eb7b4d.js",revision:"5874398841d5005981cc70fa675da03b"},{url:"assets/Ripple.b0cf0a5f.js",revision:"e3814b1cc140d033d29b2360667519aa"},{url:"assets/Someday.bd4459e5.js",revision:"8a9d64d4d1afad0850a0643857079e11"},{url:"assets/use-dark.8c4d1404.js",revision:"c00b23683d29571f9a115a7e4106bacf"},{url:"assets/Weekly.88370ddf.js",revision:"2c3f0a945d5f0e6467264ea748c2edf1"},{url:"assets/Yearly.f3c60d98.js",revision:"f89f0ebd676b050318c9d344e25b5f6d"},{url:"favicon.ico",revision:"8b9eb314ff597f6f7c7bf8c7a5f717ec"},{url:"icons/apple-icon-120x120.png",revision:"d082235f6e6d2109e84e397f66fa868d"},{url:"icons/apple-icon-152x152.png",revision:"3c728ce3e709b7395be487becf76283a"},{url:"icons/apple-icon-167x167.png",revision:"3fec89672a18e4b402ede58646917c2d"},{url:"icons/apple-icon-180x180.png",revision:"aa47843bd47f34b7ca4b99f65dd25955"},{url:"icons/favicon-128x128.png",revision:"1be07e62226c8f6a7086f132d9be1642"},{url:"icons/favicon-16x16.png",revision:"df5ff7f4728c4ef4b951d46b4136906f"},{url:"icons/favicon-32x32.png",revision:"64aa9e88dd6545f64226c1e2230f66cc"},{url:"icons/favicon-96x96.png",revision:"d22664397060743b24e8956a5a3fcdec"},{url:"icons/icon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/icon-192x192.png",revision:"7659f0d3e9602e71811f8b7cf2ce0e8e"},{url:"icons/icon-256x256.png",revision:"cf5ad3498fb6fda43bdafd3c6ce9b824"},{url:"icons/icon-384x384.png",revision:"fdfc1b3612b6833a27a7b260c9990247"},{url:"icons/icon-512x512.png",revision:"2c2dc987945806196bd18cb6028d8bf4"},{url:"icons/ms-icon-144x144.png",revision:"8de1b0e67a62b881cd22d935f102a0e6"},{url:"icons/safari-pinned-tab.svg",revision:"3e4c3730b00c89591de9505efb73afd3"},{url:"index.html",revision:"443e621c6ba6b0d5a083336daeef963c"},{url:"manifest.json",revision:"9f353dc9b8fe7aa44b651a2aeb327adf"},{url:"profile.svg",revision:"27a1fe10ce87b6fd68848227cdb3af3a"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\.js$/]}))}));
