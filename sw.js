if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const p=e||("document"in self?document.currentScript.src:"")||location.href;if(s[p])return;let l={};const n=e=>a(e,p),o={module:{uri:p},exports:l,require:n};s[p]=Promise.all(i.map((e=>o[e]||n(e)))).then((e=>(c(...e),l)))}}define(["./workbox-5f8782c7"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"icons/apple-icon-180.png",revision:"a3550de99757aa26725c237162606b97"},{url:"icons/apple-splash-1125-2436.jpg",revision:"bac5fe988e5a6fbf1da027743245a682"},{url:"icons/apple-splash-1136-640.jpg",revision:"f4a5c65d74eac10c8ca14a3e8eb98026"},{url:"icons/apple-splash-1170-2532.jpg",revision:"c9fcff8fc6a654793ed15b850b2b67be"},{url:"icons/apple-splash-1179-2556.jpg",revision:"65c8d96af00c97584003a5367d42936c"},{url:"icons/apple-splash-1242-2208.jpg",revision:"872e434a1f8e8701bcb5dcfffa3337cb"},{url:"icons/apple-splash-1242-2688.jpg",revision:"82b39183c72026560947bad50cbeda2d"},{url:"icons/apple-splash-1284-2778.jpg",revision:"7205117619a307edd3c2ddd9f92f05d2"},{url:"icons/apple-splash-1290-2796.jpg",revision:"f909cce3eba099cd66bd83f957809968"},{url:"icons/apple-splash-1334-750.jpg",revision:"c88525f0fcd465bad21f9a738e8eeea0"},{url:"icons/apple-splash-1536-2048.jpg",revision:"1d7f13ddb2cd31c725da0514a8404c4d"},{url:"icons/apple-splash-1620-2160.jpg",revision:"bcc5607b678f94e36e31a1065a0e277e"},{url:"icons/apple-splash-1668-2224.jpg",revision:"a57eac66686805e073c276abe378103a"},{url:"icons/apple-splash-1668-2388.jpg",revision:"d00a4faa05011d0aadc5899bc21fecbe"},{url:"icons/apple-splash-1792-828.jpg",revision:"381c0230783e8d59c5c579196a4513ad"},{url:"icons/apple-splash-2048-1536.jpg",revision:"a8d228b01ef1606396b2851c8e64f450"},{url:"icons/apple-splash-2048-2732.jpg",revision:"cd16f7d6bc161440848d83b542b011eb"},{url:"icons/apple-splash-2160-1620.jpg",revision:"6d7873f3a92c8bfed7d9c1df80d9175d"},{url:"icons/apple-splash-2208-1242.jpg",revision:"c2bca791fcc834e0207abfc26c4e7391"},{url:"icons/apple-splash-2224-1668.jpg",revision:"3712b24a12db47bfa5ace4b57b8eda9d"},{url:"icons/apple-splash-2388-1668.jpg",revision:"4c000ac2bf31abd7a8b506d7f4ab43ee"},{url:"icons/apple-splash-2436-1125.jpg",revision:"be1c7ce9cadd9267a03c9edd721d7740"},{url:"icons/apple-splash-2532-1170.jpg",revision:"e9b497d33a9d84a08d8a490f3384e29c"},{url:"icons/apple-splash-2556-1179.jpg",revision:"626b8b2679ec58d3275bd18227a11450"},{url:"icons/apple-splash-2688-1242.jpg",revision:"91f931b6d0eea8e190cb48599548c7dd"},{url:"icons/apple-splash-2732-2048.jpg",revision:"c1e5f77b9e8e1a891a1ba470c3cf56f1"},{url:"icons/apple-splash-2778-1284.jpg",revision:"2eff57fb7980e4cc0e30ddd12b4fb5ff"},{url:"icons/apple-splash-2796-1290.jpg",revision:"c50b0e69549e81895fbcfb6f3f563e5d"},{url:"icons/apple-splash-640-1136.jpg",revision:"dc31633a2fcf92242f3fec9942840bd8"},{url:"icons/apple-splash-750-1334.jpg",revision:"6925e89da5921bbd5fa8422addaaa10f"},{url:"icons/apple-splash-828-1792.jpg",revision:"8e9610154712aeba06713b92f9053f34"},{url:"icons/manifest-icon-192.maskable.png",revision:"6ca415d4cf576e890af9697f8875fbad"},{url:"icons/manifest-icon-512.maskable.png",revision:"cc125909643c2c18d1156289fb7b4206"},{url:"index.html",revision:"804753f232eb7b1e36533cc743e58390"},{url:"logo.png",revision:"0f659be5a48716ed46a915fd2d187c14"},{url:"manifest.json",revision:"e1a1826cfea6c5f158d5684e55c5b886"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map