var WordPress_AlterEGO;!function(){"use strict";var n,e,t,r,u,o,i,f,c,a,l,s,d,h,p,v,b,m,g,y,w={8694:function(n,e,t){var r={"./app":function(){return Promise.all([t.e(508),t.e(747),t.e(170),t.e(650),t.e(497)]).then((function(){return function(){return t(3497)}}))},"./settings":function(){return Promise.all([t.e(508),t.e(278),t.e(747),t.e(170),t.e(650),t.e(56),t.e(322),t.e(969)]).then((function(){return function(){return t(3969)}}))}},u=function(n,e){return t.R=e,e=t.o(r,n)?r[n]():Promise.resolve().then((function(){throw new Error('Module "'+n+'" does not exist in container.')})),t.R=void 0,e},o=function(n,e){if(t.S){var r="default",u=t.S[r];if(u&&u!==n)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[r]=n,t.I(r,e)}};t.d(e,{get:function(){return u},init:function(){return o}})}},P={};function O(n){var e=P[n];if(void 0!==e)return e.exports;var t=P[n]={exports:{}};return w[n](t,t.exports,O),t.exports}O.m=w,O.c=P,O.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return O.d(e,{a:e}),e},e=Object.getPrototypeOf?function(n){return Object.getPrototypeOf(n)}:function(n){return n.__proto__},O.t=function(t,r){if(1&r&&(t=this(t)),8&r)return t;if("object"==typeof t&&t){if(4&r&&t.__esModule)return t;if(16&r&&"function"==typeof t.then)return t}var u=Object.create(null);O.r(u);var o={};n=n||[null,e({}),e([]),e(e)];for(var i=2&r&&t;"object"==typeof i&&!~n.indexOf(i);i=e(i))Object.getOwnPropertyNames(i).forEach((function(n){o[n]=function(){return t[n]}}));return o.default=function(){return t},O.d(u,o),u},O.d=function(n,e){for(var t in e)O.o(e,t)&&!O.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},O.f={},O.e=function(n){return Promise.all(Object.keys(O.f).reduce((function(e,t){return O.f[t](n,e),e}),[]))},O.u=function(n){return"static/js/"+n+"."+{16:"58f623f9",56:"75402bb1",170:"12e071e9",248:"2a49bbcd",278:"b82b64bf",294:"4fca81f3",311:"362f93b3",322:"17d587c0",404:"ef5b5c4c",441:"062abc75",450:"aedca4f6",462:"34f65ee4",480:"6730e374",483:"f42fec86",497:"c07495d1",508:"12d390e2",536:"b9eb62ef",567:"4c2f8036",609:"2c3c713b",650:"48fe773c",671:"974dbab4",747:"8d3683ef",852:"28032c4c",890:"1157f7fa",932:"a6963d55",935:"b2654abc",969:"e76c9c70",973:"6649c348",978:"34821bac"}[n]+".chunk.js"},O.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),O.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t={},r="container:",O.l=function(n,e,u,o){if(t[n])t[n].push(e);else{var i,f;if(void 0!==u)for(var c=document.getElementsByTagName("script"),a=0;a<c.length;a++){var l=c[a];if(l.getAttribute("src")==n||l.getAttribute("data-webpack")==r+u){i=l;break}}i||(f=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,O.nc&&i.setAttribute("nonce",O.nc),i.setAttribute("data-webpack",r+u),i.src=n),t[n]=[e];var s=function(e,r){i.onerror=i.onload=null,clearTimeout(d);var u=t[n];if(delete t[n],i.parentNode&&i.parentNode.removeChild(i),u&&u.forEach((function(n){return n(r)})),e)return e(r)},d=setTimeout(s.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=s.bind(null,i.onerror),i.onload=s.bind(null,i.onload),f&&document.head.appendChild(i)}},O.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},function(){O.S={};var n={},e={};O.I=function(t,r){r||(r=[]);var u=e[t];if(u||(u=e[t]={}),!(r.indexOf(u)>=0)){if(r.push(u),n[t])return n[t];O.o(O.S,t)||(O.S[t]={});var o=O.S[t],i="container",f=function(n,e,t,r){var u=o[n]=o[n]||{},f=u[e];(!f||!f.loaded&&(!r!=!f.eager?r:i>f.from))&&(u[e]={get:t,from:i,eager:!!r})},c=[];return"default"===t&&(f("@emotion/react","11.11.1",(function(){return Promise.all([O.e(973),O.e(747),O.e(462)]).then((function(){return function(){return O(1973)}}))})),f("@emotion/styled","11.11.0",(function(){return Promise.all([O.e(747),O.e(170),O.e(404)]).then((function(){return function(){return O(932)}}))})),f("i18next-resources-to-backend","1.1.4",(function(){return O.e(16).then((function(){return function(){return O(7016)}}))})),f("i18next","23.4.6",(function(){return O.e(609).then((function(){return function(){return O(6609)}}))})),f("localforage","1.10.0",(function(){return O.e(483).then((function(){return function(){return O(9483)}}))})),f("notistack","3.0.1",(function(){return Promise.all([O.e(311),O.e(747),O.e(56)]).then((function(){return function(){return O(3311)}}))})),f("react-dom","18.2.0",(function(){return Promise.all([O.e(935),O.e(747)]).then((function(){return function(){return O(3935)}}))})),f("react-i18next","11.16.7",(function(){return Promise.all([O.e(747),O.e(890)]).then((function(){return function(){return O(9890)}}))})),f("react","18.2.0",(function(){return O.e(294).then((function(){return function(){return O(7294)}}))}))),n[t]=c.length?Promise.all(c).then((function(){return n[t]=1})):1}}}(),function(){var n;O.g.importScripts&&(n=O.g.location+"");var e=O.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");if(t.length)for(var r=t.length-1;r>-1&&!n;)n=t[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),O.p=n}(),u=function(n){var e=function(n){return n.split(".").map((function(n){return+n==n?+n:n}))},t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(n),r=t[1]?e(t[1]):[];return t[2]&&(r.length++,r.push.apply(r,e(t[2]))),t[3]&&(r.push([]),r.push.apply(r,e(t[3]))),r},o=function(n,e){n=u(n),e=u(e);for(var t=0;;){if(t>=n.length)return t<e.length&&"u"!=(typeof e[t])[0];var r=n[t],o=(typeof r)[0];if(t>=e.length)return"u"==o;var i=e[t],f=(typeof i)[0];if(o!=f)return"o"==o&&"n"==f||"s"==f||"u"==o;if("o"!=o&&"u"!=o&&r!=i)return r<i;t++}},i=function(n){var e=n[0],t="";if(1===n.length)return"*";if(e+.5){t+=0==e?">=":-1==e?"<":1==e?"^":2==e?"~":e>0?"=":"!=";for(var r=1,u=1;u<n.length;u++)r--,t+="u"==(typeof(f=n[u]))[0]?"-":(r>0?".":"")+(r=2,f);return t}var o=[];for(u=1;u<n.length;u++){var f=n[u];o.push(0===f?"not("+c()+")":1===f?"("+c()+" || "+c()+")":2===f?o.pop()+" "+o.pop():i(f))}return c();function c(){return o.pop().replace(/^\((.+)\)$/,"$1")}},f=function(n,e){if(0 in n){e=u(e);var t=n[0],r=t<0;r&&(t=-t-1);for(var o=0,i=1,c=!0;;i++,o++){var a,l,s=i<n.length?(typeof n[i])[0]:"";if(o>=e.length||"o"==(l=(typeof(a=e[o]))[0]))return!c||("u"==s?i>t&&!r:""==s!=r);if("u"==l){if(!c||"u"!=s)return!1}else if(c)if(s==l)if(i<=t){if(a!=n[i])return!1}else{if(r?a>n[i]:a<n[i])return!1;a!=n[i]&&(c=!1)}else if("s"!=s&&"n"!=s){if(r||i<=t)return!1;c=!1,i--}else{if(i<=t||l<s!=r)return!1;c=!1}else"s"!=s&&"n"!=s&&(c=!1,i--)}}var d=[],h=d.pop.bind(d);for(o=1;o<n.length;o++){var p=n[o];d.push(1==p?h()|h():2==p?h()&h():p?f(p,e):!h())}return!!h()},c=function(n,e){var t=n[e];return Object.keys(t).reduce((function(n,e){return!n||!t[n].loaded&&o(n,e)?e:n}),0)},a=function(n,e,t,r){return"Unsatisfied version "+t+" from "+(t&&n[e][t].from)+" of shared singleton module "+e+" (required "+i(r)+")"},l=function(n,e,t,r){var u=c(n,t);return f(r,u)||d(a(n,t,u,r)),h(n[t][u])},s=function(n,e,t){var r=n[e];return(e=Object.keys(r).reduce((function(n,e){return!f(t,e)||n&&!o(n,e)?n:e}),0))&&r[e]},d=function(n){"undefined"!=typeof console&&console.warn&&console.warn(n)},h=function(n){return n.loaded=1,n.get()},v=(p=function(n){return function(e,t,r,u){var o=O.I(e);return o&&o.then?o.then(n.bind(n,e,O.S[e],t,r,u)):n(e,O.S[e],t,r,u)}})((function(n,e,t,r,u){return e&&O.o(e,t)?l(e,0,t,r):u()})),b=p((function(n,e,t,r,u){var o=e&&O.o(e,t)&&s(e,t,r);return o?h(o):u()})),m={},g={2747:function(){return v("default","react",[4,18,2,0],(function(){return O.e(294).then((function(){return function(){return O(7294)}}))}))},2170:function(){return v("default","@emotion/react",[1,11,11,0],(function(){return O.e(973).then((function(){return function(){return O(1973)}}))}))},56:function(){return v("default","react-dom",[4,18,2,0],(function(){return O.e(935).then((function(){return function(){return O(3935)}}))}))},1934:function(){return b("default","react-i18next",[4,11,16,7],(function(){return O.e(671).then((function(){return function(){return O(9890)}}))}))},4301:function(){return v("default","@emotion/styled",[1,11,11,0],(function(){return O.e(932).then((function(){return function(){return O(932)}}))}))},2670:function(){return b("default","notistack",[1,3,0,1],(function(){return O.e(311).then((function(){return function(){return O(3311)}}))}))},4929:function(){return b("default","i18next-resources-to-backend",[1,1,1,4],(function(){return O.e(16).then((function(){return function(){return O(7016)}}))}))},5146:function(){return b("default","i18next",[1,23,4,6],(function(){return O.e(609).then((function(){return function(){return O(6609)}}))}))},5762:function(){return b("default","localforage",[4,1,10,0],(function(){return O.e(483).then((function(){return function(){return O(9483)}}))}))}},y={56:[56],170:[2170],322:[2670,4929,5146,5762],650:[1934,4301],747:[2747]},O.f.consumes=function(n,e){O.o(y,n)&&y[n].forEach((function(n){if(O.o(m,n))return e.push(m[n]);var t=function(e){m[n]=0,O.m[n]=function(t){delete O.c[n],t.exports=e()}},r=function(e){delete m[n],O.m[n]=function(t){throw delete O.c[n],e}};try{var u=g[n]();u.then?e.push(m[n]=u.then(t).catch(r)):t(u)}catch(n){r(n)}}))},function(){var n={616:0};O.f.j=function(e,t){var r=O.o(n,e)?n[e]:void 0;if(0!==r)if(r)t.push(r[2]);else if(/^(170|322|56|650|747)$/.test(e))n[e]=0;else{var u=new Promise((function(t,u){r=n[e]=[t,u]}));t.push(r[2]=u);var o=O.p+O.u(e),i=new Error;O.l(o,(function(t){if(O.o(n,e)&&(0!==(r=n[e])&&(n[e]=void 0),r)){var u=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+u+": "+o+")",i.name="ChunkLoadError",i.type=u,i.request=o,r[1](i)}}),"chunk-"+e,e)}};var e=function(e,t){var r,u,o=t[0],i=t[1],f=t[2],c=0;if(o.some((function(e){return 0!==n[e]}))){for(r in i)O.o(i,r)&&(O.m[r]=i[r]);f&&f(O)}for(e&&e(t);c<o.length;c++)u=o[c],O.o(n,u)&&n[u]&&n[u][0](),n[u]=0},t=self.webpackChunkcontainer=self.webpackChunkcontainer||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))}();var j=O(8694);WordPress_AlterEGO=j}();
//# sourceMappingURL=remoteEntry.js.map