(self.webpackChunkcontainer=self.webpackChunkcontainer||[]).push([[671],{9890:function(e,n,t){"use strict";t.r(n),t.d(n,{I18nContext:function(){return I},I18nextProvider:function(){return se},Trans:function(){return Q},Translation:function(){return ue},composeInitialProps:function(){return z},date:function(){return ge},getDefaults:function(){return D},getI18n:function(){return A},getInitialProps:function(){return B},initReactI18next:function(){return L},number:function(){return me},plural:function(){return ve},select:function(){return be},selectOrdinal:function(){return he},setDefaults:function(){return C},setI18n:function(){return T},time:function(){return ye},useSSR:function(){return le},useTranslation:function(){return te},withSSR:function(){return de},withTranslation:function(){return ae}});var r=t(3366);function o(e,n){if(null==e)return{};var t,o,i=(0,r.Z)(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function a(e){var n=function(e,n){if("object"!==i(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!==i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===i(n)?n:String(n)}function c(e,n,t){return(n=a(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var u=t(2747),s=t.n(u),l=t(1739),f=t.n(l),p=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function d(e){var n={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},t=e.match(/<\/?([^\s]+?)[/\s>]/);if(t&&(n.name=t[1],(f()[t[1]]||"/"===e.charAt(e.length-2))&&(n.voidElement=!0),n.name.startsWith("!--"))){var r=e.indexOf("--\x3e");return{type:"comment",comment:-1!==r?e.slice(4,r):""}}for(var o=new RegExp(p),i=null;null!==(i=o.exec(e));)if(i[0].trim())if(i[1]){var a=i[1].trim(),c=[a,""];a.indexOf("=")>-1&&(c=a.split("=")),n.attrs[c[0]]=c[1],o.lastIndex--}else i[2]&&(n.attrs[i[2]]=i[3].trim().substring(1,i[3].length-1));return n}var g=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,y=/^\s*$/,m=Object.create(null);function b(e,n){switch(n.type){case"text":return e+n.content;case"tag":return e+="<"+n.name+(n.attrs?function(e){var n=[];for(var t in e)n.push(t+'="'+e[t]+'"');return n.length?" "+n.join(" "):""}(n.attrs):"")+(n.voidElement?"/>":">"),n.voidElement?e:e+n.children.reduce(b,"")+"</"+n.name+">";case"comment":return e+"\x3c!--"+n.comment+"--\x3e"}}var v={parse:function(e,n){n||(n={}),n.components||(n.components=m);var t,r=[],o=[],i=-1,a=!1;if(0!==e.indexOf("<")){var c=e.indexOf("<");r.push({type:"text",content:-1===c?e:e.substring(0,c)})}return e.replace(g,(function(c,u){if(a){if(c!=="</"+t.name+">")return;a=!1}var s,l="/"!==c.charAt(1),f=c.startsWith("\x3c!--"),p=u+c.length,g=e.charAt(p);if(f){var m=d(c);return i<0?(r.push(m),r):((s=o[i]).children.push(m),r)}if(l&&(i++,"tag"===(t=d(c)).type&&n.components[t.name]&&(t.type="component",a=!0),t.voidElement||a||!g||"<"===g||t.children.push({type:"text",content:e.slice(p,e.indexOf("<",p))}),0===i&&r.push(t),(s=o[i-1])&&s.children.push(t),o[i]=t),(!l||t.voidElement)&&(i>-1&&(t.voidElement||t.name===c.slice(2,-1))&&(i--,t=-1===i?r:o[i]),!a&&"<"!==g&&g)){s=-1===i?r:o[i].children;var b=e.indexOf("<",p),v=e.slice(p,-1===b?void 0:b);y.test(v)&&(v=" "),(b>-1&&i+s.length>=0||" "!==v)&&s.push({type:"text",content:v})}})),r},stringify:function(e){return e.reduce((function(e,n){return e+b("",n)}),"")}},h=v,O="".replace,j=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34);/g,w={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"'};function P(e){return w[e]}function S(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,a(r.key),r)}}function E(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function x(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?E(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):E(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var k,N={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0},I=s().createContext();function C(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};N=x(x({},N),e)}function D(){return N}var R=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.usedNamespaces={}}var n,t;return n=e,(t=[{key:"addUsedNamespaces",value:function(e){var n=this;e.forEach((function(e){n.usedNamespaces[e]||(n.usedNamespaces[e]=!0)}))}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}])&&S(n.prototype,t),Object.defineProperty(n,"prototype",{writable:!1}),e}();function T(e){k=e}function A(){return k}var L={type:"3rdParty",init:function(e){C(e.options.react),T(e)}};function z(e){return function(n){return new Promise((function(t){var r=B();e.getInitialProps?e.getInitialProps(n).then((function(e){t(x(x({},e),r))})):t(r)}))}}function B(){var e=A(),n=e.reportNamespaces?e.reportNamespaces.getUsedNamespaces():[],t={},r={};return e.languages.forEach((function(t){r[t]={},n.forEach((function(n){r[t][n]=e.getResourceBundle(t,n)||{}}))})),t.initialI18nStore=r,t.initialLanguage=e.language,t}function U(){if(console&&console.warn){for(var e,n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];"string"==typeof t[0]&&(t[0]="react-i18next:: ".concat(t[0])),(e=console).warn.apply(e,t)}}var H={};function K(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];"string"==typeof n[0]&&H[n[0]]||("string"==typeof n[0]&&(H[n[0]]=new Date),U.apply(void 0,n))}function V(e,n,t){e.loadNamespaces(n,(function(){e.isInitialized?t():e.on("initialized",(function n(){setTimeout((function(){e.off("initialized",n)}),0),t()}))}))}function F(e){return e.displayName||e.name||("string"==typeof e&&e.length>0?e:"Unknown")}var W=["format"],M=["children","count","parent","i18nKey","context","tOptions","values","defaults","components","ns","i18n","t","shouldUnescape"];function $(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function q(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?$(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):$(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function Y(e,n){if(!e)return!1;var t=e.props?e.props.children:e.children;return n?t.length>0:!!t}function Z(e){return e?e&&e.children?e.children:e.props&&e.props.children:[]}function J(e){return Array.isArray(e)?e:[e]}function G(e,n){if(!e)return"";var t="",r=J(e),a=n.transSupportBasicHtmlNodes&&n.transKeepBasicHtmlNodesFor?n.transKeepBasicHtmlNodesFor:[];return r.forEach((function(e,r){if("string"==typeof e)t+="".concat(e);else if(s().isValidElement(e)){var c=Object.keys(e.props).length,u=a.indexOf(e.type)>-1,l=e.props.children;if(!l&&u&&0===c)t+="<".concat(e.type,"/>");else if(l||u&&0===c)if(e.props.i18nIsDynamicList)t+="<".concat(r,"></").concat(r,">");else if(u&&1===c&&"string"==typeof l)t+="<".concat(e.type,">").concat(l,"</").concat(e.type,">");else{var f=G(l,n);t+="<".concat(r,">").concat(f,"</").concat(r,">")}else t+="<".concat(r,"></").concat(r,">")}else if(null===e)U("Trans: the passed in value is invalid - seems you passed in a null child.");else if("object"===i(e)){var p=e.format,d=o(e,W),g=Object.keys(d);if(1===g.length){var y=p?"".concat(g[0],", ").concat(p):g[0];t+="{{".concat(y,"}}")}else U("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",e)}else U("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",e)})),t}function Q(e){var n=e.children,t=e.count,r=e.parent,a=e.i18nKey,c=e.context,l=e.tOptions,f=void 0===l?{}:l,p=e.values,d=e.defaults,g=e.components,y=e.ns,m=e.i18n,b=e.t,v=e.shouldUnescape,w=o(e,M),S=(0,u.useContext)(I)||{},E=S.i18n,x=S.defaultNS,k=m||E||A();if(!k)return K("You will need to pass in an i18next instance by using i18nextReactModule"),n;var N=b||k.t.bind(k)||function(e){return e};c&&(f.context=c);var C=q(q({},D()),k.options&&k.options.react),R=y||N.ns||x||k.options&&k.options.defaultNS;R="string"==typeof R?[R]:R||["translation"];var T=d||G(n,C)||C.transEmptyNodeValue||a,L=C.hashTransKey,z=a||(L?L(T):T),B=p?f.interpolation:{interpolation:q(q({},f.interpolation),{},{prefix:"#$?",suffix:"?$#"})},U=q(q(q(q({},f),{},{count:t},p),B),{},{defaultValue:T,ns:R}),H=function(e,n,t,r,o,a){if(""===n)return[];var c=r.transKeepBasicHtmlNodesFor||[],u=n&&new RegExp(c.join("|")).test(n);if(!e&&!u)return[n];var l={};!function e(n){J(n).forEach((function(n){"string"!=typeof n&&(Y(n)?e(Z(n)):"object"!==i(n)||s().isValidElement(n)||Object.assign(l,n))}))}(e);var f=h.parse("<0>".concat(n,"</0>")),p=q(q({},l),o);function d(e,n,t){var r=Z(e),o=y(r,n.children,t);return function(e){return"[object Array]"===Object.prototype.toString.call(e)&&e.every((function(e){return s().isValidElement(e)}))}(r)&&0===o.length?r:o}function g(e,n,t,r,o){e.dummy&&(e.children=n),t.push(s().cloneElement(e,q(q({},e.props),{},{key:r}),o?void 0:n))}function y(n,o,l){var f=J(n);return J(o).reduce((function(n,o,m){var b,v,h,w,S=o.children&&o.children[0]&&o.children[0].content&&t.services.interpolator.interpolate(o.children[0].content,p,t.language);if("tag"===o.type){var E=f[parseInt(o.name,10)];!E&&1===l.length&&l[0][o.name]&&(E=l[0][o.name]),E||(E={});var x=0!==Object.keys(o.attrs).length?(v={props:o.attrs},(w=q({},h=E)).props=Object.assign(v.props,h.props),w):E,k=s().isValidElement(x),N=k&&Y(o,!0)&&!o.voidElement,I=u&&"object"===i(x)&&x.dummy&&!k,C="object"===i(e)&&null!==e&&Object.hasOwnProperty.call(e,o.name);if("string"==typeof x){var D=t.services.interpolator.interpolate(x,p,t.language);n.push(D)}else if(Y(x)||N)g(x,d(x,o,l),n,m);else if(I){var R=y(f,o.children,l);n.push(s().cloneElement(x,q(q({},x.props),{},{key:m}),R))}else if(Number.isNaN(parseFloat(o.name)))if(C)g(x,d(x,o,l),n,m,o.voidElement);else if(r.transSupportBasicHtmlNodes&&c.indexOf(o.name)>-1)if(o.voidElement)n.push(s().createElement(o.name,{key:"".concat(o.name,"-").concat(m)}));else{var T=y(f,o.children,l);n.push(s().createElement(o.name,{key:"".concat(o.name,"-").concat(m)},T))}else if(o.voidElement)n.push("<".concat(o.name," />"));else{var A=y(f,o.children,l);n.push("<".concat(o.name,">").concat(A,"</").concat(o.name,">"))}else if("object"!==i(x)||k)1===o.children.length&&S?n.push(s().cloneElement(x,q(q({},x.props),{},{key:m}),S)):n.push(s().cloneElement(x,q(q({},x.props),{},{key:m})));else{var L=o.children[0]?S:null;L&&n.push(L)}}else if("text"===o.type){var z=r.transWrapTextNodes,B=a?(b=t.services.interpolator.interpolate(o.content,p,t.language),O.call(b,j,P)):t.services.interpolator.interpolate(o.content,p,t.language);z?n.push(s().createElement(z,{key:"".concat(o.name,"-").concat(m)},B)):n.push(B)}return n}),[])}return Z(y([{dummy:!0,children:e||[]}],f,J(e||[]))[0])}(g||n,z?N(z,U):T,k,C,U,v),V=void 0!==r?r:C.defaultTransParent;return V?s().createElement(V,w,H):H}function X(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function _(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i,a,c=[],u=!0,s=!1;try{if(i=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;u=!1}else for(;!(u=(r=i.call(t)).done)&&(c.push(r.value),c.length!==n);u=!0);}catch(e){s=!0,o=e}finally{try{if(!u&&null!=t.return&&(a=t.return(),Object(a)!==a))return}finally{if(s)throw o}}return c}}(e,n)||function(e,n){if(e){if("string"==typeof e)return X(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?X(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ee(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function ne(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ee(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ee(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function te(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.i18n,r=(0,u.useContext)(I)||{},o=r.i18n,i=r.defaultNS,a=t||o||A();if(a&&!a.reportNamespaces&&(a.reportNamespaces=new R),!a){K("You will need to pass in an i18next instance by using initReactI18next");var c=function(e){return Array.isArray(e)?e[e.length-1]:e},s=[c,{},!1];return s.t=c,s.i18n={},s.ready=!1,s}a.options.react&&void 0!==a.options.react.wait&&K("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var l=ne(ne(ne({},D()),a.options.react),n),f=l.useSuspense,p=l.keyPrefix,d=e||i||a.options&&a.options.defaultNS;d="string"==typeof d?[d]:d||["translation"],a.reportNamespaces.addUsedNamespaces&&a.reportNamespaces.addUsedNamespaces(d);var g=(a.isInitialized||a.initializedStoreOnce)&&d.every((function(e){return function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return n.languages&&n.languages.length?void 0!==n.options.ignoreJSONStructure?n.hasLoadedNamespace(e,{precheck:function(n,r){if(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!r(n.isLanguageChangingTo,e))return!1}}):function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.languages[0],o=!!n.options&&n.options.fallbackLng,i=n.languages[n.languages.length-1];if("cimode"===r.toLowerCase())return!0;var a=function(e,t){var r=n.services.backendConnector.state["".concat(e,"|").concat(t)];return-1===r||2===r};return!(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!a(n.isLanguageChangingTo,e)||!n.hasResourceBundle(r,e)&&n.services.backendConnector.backend&&(!n.options.resources||n.options.partialBundledLanguages)&&(!a(r,e)||o&&!a(i,e)))}(e,n,t):(K("i18n.languages were undefined or empty",n.languages),!0)}(e,a,l)}));function y(){return a.getFixedT(null,"fallback"===l.nsMode?d:d[0],p)}var m=_((0,u.useState)(y),2),b=m[0],v=m[1],h=(0,u.useRef)(!0);(0,u.useEffect)((function(){var e=l.bindI18n,n=l.bindI18nStore;function t(){h.current&&v(y)}return h.current=!0,g||f||V(a,d,(function(){h.current&&v(y)})),e&&a&&a.on(e,t),n&&a&&a.store.on(n,t),function(){h.current=!1,e&&a&&e.split(" ").forEach((function(e){return a.off(e,t)})),n&&a&&n.split(" ").forEach((function(e){return a.store.off(e,t)}))}}),[a,d.join()]);var O=(0,u.useRef)(!0);(0,u.useEffect)((function(){h.current&&!O.current&&v(y),O.current=!1}),[a]);var j=[b,a,g];if(j.t=b,j.i18n=a,j.ready=g,g)return j;if(!g&&!f)return j;throw new Promise((function(e){V(a,d,(function(){e()}))}))}var re=["forwardedRef"];function oe(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function ie(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?oe(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):oe(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function ae(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(t){function r(r){var i=r.forwardedRef,a=o(r,re),c=_(te(e,a),3),u=c[0],l=c[1],f=c[2],p=ie(ie({},a),{},{t:u,i18n:l,tReady:f});return n.withRef&&i?p.ref=i:!n.withRef&&i&&(p.forwardedRef=i),s().createElement(t,p)}return r.displayName="withI18nextTranslation(".concat(F(t),")"),r.WrappedComponent=t,n.withRef?s().forwardRef((function(e,n){return s().createElement(r,Object.assign({},e,{forwardedRef:n}))})):r}}var ce=["ns","children"];function ue(e){var n=e.ns,t=e.children,r=_(te(n,o(e,ce)),3),i=r[0],a=r[1],c=r[2];return t(i,{i18n:a,lng:a.language},c)}function se(e){var n=e.i18n,t=e.defaultNS,r=e.children,o=(0,u.useMemo)((function(){return{i18n:n,defaultNS:t}}),[n,t]);return(0,u.createElement)(I.Provider,{value:o},r)}function le(e,n){var t=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).i18n,r=((0,u.useContext)(I)||{}).i18n,o=t||r||A();o.options&&o.options.isClone||(e&&!o.initializedStoreOnce&&(o.services.resourceStore.data=e,o.options.ns=Object.values(e).reduce((function(e,n){return Object.keys(n).forEach((function(n){e.indexOf(n)<0&&e.push(n)})),e}),o.options.ns),o.initializedStoreOnce=!0,o.isInitialized=!0),n&&!o.initializedLanguageOnce&&(o.changeLanguage(n),o.initializedLanguageOnce=!0))}var fe=["initialI18nStore","initialLanguage"];function pe(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function de(){return function(e){function n(n){var t=n.initialI18nStore,r=n.initialLanguage,i=o(n,fe);return le(t,r),s().createElement(e,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?pe(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):pe(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},i))}return n.getInitialProps=z(e),n.displayName="withI18nextSSR(".concat(F(e),")"),n.WrappedComponent=e,n}}var ge=function(){return""},ye=function(){return""},me=function(){return""},be=function(){return""},ve=function(){return""},he=function(){return""}},1739:function(e){e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}}}]);
//# sourceMappingURL=671.974dbab4.chunk.js.map