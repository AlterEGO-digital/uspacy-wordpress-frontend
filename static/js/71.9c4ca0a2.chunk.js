(self.webpackChunkcontainer=self.webpackChunkcontainer||[]).push([[71],{5071:function(e,t,n){"use strict";n.r(t);var r=n(5893),o=n(745),i=n(1899),a=n(6824),s=n(1508),c=n(6867),l=n(2734),u=n(2884),d=n(2658),p=n(2747),f=n.n(p),g=n(1934),h=window.location.host.includes("staging.uspacy.tech"),x=n(5762),y=("tokens",n.n(x)().createInstance({name:"Uspacy",storeName:"tokens"})),m=function(){return y.getItem("token")},j=n(2670),v=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((r=r.apply(e,t||[])).next())}))},b=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(c){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(a=0)),a;)try{if(n=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){a.label=s[1];break}if(6===s[0]&&a.label<o[1]){a.label=o[1],o=s;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(s);break}o[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(e){s=[6,e],r=0}finally{n=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}},k=(0,p.createContext)({}),S=function(e){var t,n,o=e.children,i=(0,p.useState)(""),a=i[0],s=i[1],c=(0,p.useState)(!0),l=c[0],u=c[1],d=(0,p.useState)(!1),f=d[0],x=d[1],y="https://".concat(h?"wordpress-uspacy.alterego.biz.ua":"wordpress-uspacy.alterego.digital","/webflow/v1"),S=(t=(0,j.useSnackbar)().enqueueSnackbar,n=(0,g.useTranslation)("settings").t,{errorNotification:function(e){t(e||n("requestExecutionError"),{variant:"error",anchorOrigin:{vertical:"top",horizontal:"right"}})}}).errorNotification,w=function(){return v(void 0,void 0,void 0,(function(){var e,t;return b(this,(function(n){switch(n.label){case 0:u(!0),n.label=1;case 1:return n.trys.push([1,5,6,7]),[4,m()];case 2:return e=n.sent(),[4,fetch("".concat(y,"/keys/getKey"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(e)}})];case 3:return[4,n.sent().json()];case 4:return t=n.sent(),s((null==t?void 0:t.key)||""),[3,7];case 5:return n.sent(),S(),[3,7];case 6:return u(!1),[7];case 7:return[2]}}))}))};return(0,p.useEffect)((function(){w()}),[]),(0,r.jsx)(k.Provider,{value:{getSecretKey:w,regenerateSecretKey:function(){return v(void 0,void 0,void 0,(function(){var e,t;return b(this,(function(n){switch(n.label){case 0:x(!0),n.label=1;case 1:return n.trys.push([1,5,6,7]),[4,m()];case 2:return e=n.sent(),[4,fetch("".concat(y,"/keys/regenerateKey"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(e)}})];case 3:return[4,n.sent().json()];case 4:return t=n.sent(),s((null==t?void 0:t.key)||""),[3,7];case 5:return n.sent(),S(),[3,7];case 6:return x(!1),[7];case 7:return[2]}}))}))},key:a,loadingRegenerate:f,loading:l},children:o})},w=n(5146),Z=n.n(w),z=n(4929),P=n.n(z);Z().use(g.initReactI18next).use(P()((function(e,t,r){n(7535)("./".concat(e,"/").concat(t,".json")).then((function(e){r(null,e)})).catch((function(e){r(e,null)}))}))).init({fallbackLng:"uk"});var I=Z(),T=(0,p.createContext)({}),O=function(e){var t=e.children,n=e.userSettings;return(0,r.jsx)(T.Provider,{value:{userSettings:n},children:t})},C=function(){var e=(0,l.Z)(),t=(0,p.useContext)(T).userSettings,n=(0,g.useTranslation)("settings").t,o=(0,p.useMemo)((function(){switch(null==t?void 0:t.lang){case"uk":return"https://docs.google.com/document/d/1yQMjzpGbwyPdtM3TafBlpH_Q5rP-TcKGlHknkd1JR4w";case"pt-BR":return"https://docs.google.com/document/d/16DYgTruDgivUFUKZc0fRiXS9FqFBzliuEkkWbPs14gI";case"pl":return"https://docs.google.com/document/d/12mDDWuOuoMIfcYoPQfMGhtX9SD3rQR5hv_YqrKZExF0/edit#heading=h.7ocmqrn1cfld";default:return"https://docs.google.com/document/d/1IpploTrqQvNIF3XqAsz3b4KqhD9s3AXj8Lt_OnkGKow"}}),[null==t?void 0:t.lang]);return(0,r.jsxs)(s.Z,{sx:{marginTop:"15px",display:"flex",flexDirection:"column",gap:"8px","& a":{textDecoration:"none",color:e.palette.primary.main},"& p":{fontSize:"14px",color:e.palette.text.secondary}},children:[(0,r.jsxs)(d.Z,{sx:{fontSize:"16px !important",fontWeight:"800 !important",color:"".concat(e.palette.text.primary," !important")},children:[n("forApplicationSettings"),":"]}),(0,r.jsxs)(d.Z,{children:[n("downloadWordPressPlugin"),(0,r.jsx)("a",{download:!0,href:"https://wordpress-uspacy.alterego.biz.ua/alterego-uspacy-and-contact-forms-7-integrations.zip",children:"alterego-uspacy-and-contact-forms-7-integrations"})]}),(0,r.jsxs)(d.Z,{children:[n("installPluginOnSite"),(0,r.jsx)("br",{}),n("instructionsForWordPress")," ",(0,r.jsx)("a",{href:o,target:"_blank",rel:"noreferrer",children:n("here")})]}),(0,r.jsxs)(d.Z,{children:[n("pluginSettingsSpecifySecretKey"),(0,r.jsx)("br",{}),n("configureContactForm")]}),(0,r.jsxs)(d.Z,{children:[n("isThereNotEnoughFunctionalityForIntegration"),(0,r.jsx)("br",{}),n("teamIsInTouch")," –",(0,r.jsx)("a",{href:"tel:+380507007572",children:" +38 050 700 75 72"})," ",n("or"),(0,r.jsx)("a",{href:"mailto:y.andrusyak@alterego.digital",children:" y.andrusyak@alterego.digital"})]})]})},E=n(9062),R=n(9602),D=(0,R.ZP)(s.Z)((function(){return{display:"flex",justifyContent:"center",alignItems:"center",background:"transparent !important",height:"100%"}})),K=function(){return K=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},K.apply(this,arguments)},M=function(e){var t=e.style,n=e.size,o=void 0===n?50:n;return(0,r.jsx)(D,{sx:K({alignSelf:"center"},t),children:(0,r.jsx)(E.Z,{size:o})})},F=n(5157),B=(0,R.ZP)(F.Z)((function(e){var t=e.theme;return{width:"100%",fontSize:"16px",letterSpacing:"0.15px","& .MuiInputBase-root input":{background:t.palette.background.paper,color:t.palette.text.primary,padding:"8.5px 12px 8.5px 17px",fontSize:"16px","& :placeholder":{color:"green"}},"& .MuiOutlinedInput-notchedOutline":{border:"1px solid rgba(58, 53, 65, 0.23)"},"& .MuiFormHelperText-root.Mui-error":{position:"absolute",bottom:"-13px",fontSize:"8px"}}})),N=(0,R.ZP)(s.Z)((function(){return{pointerEvents:"none",opacity:0,transition:"all 0.3s","&.active-copied-message":{PointerEvents:"auto",opacity:1}}})),W=(0,R.ZP)(s.Z)((function(){return{position:"relative",padding:"4px 8px",borderRadius:4,backgroundColor:"rgba(97, 97, 97, 0.9)"}})),q=function(){var e=(0,g.useTranslation)("settings").t,t=(0,l.Z)(),n=(0,p.useContext)(k),o=n.key,f=n.regenerateSecretKey,h=n.loadingRegenerate,x=n.loading,y=(0,p.useState)(!1),m=y[0],j=y[1];return x?(0,r.jsx)(s.Z,{sx:{height:"500px"},children:(0,r.jsx)(M,{size:100})}):(0,r.jsxs)(s.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"flex-start",padding:"10px 50px"},children:[(0,r.jsxs)(d.Z,{sx:{fontSize:"16px",fontWeight:"800",color:t.palette.text.primary},children:[e("secretKey"),":"]}),(0,r.jsxs)(s.Z,{sx:{display:"flex",flexDirection:"row",gap:"8px",alignItems:"center",width:"100%"},children:[(0,r.jsx)(B,{disabled:!0,fullWidth:!0,sx:{color:t.palette.text.disabled,"& .MuiOutlinedInput-notchedOutline":{borderStyle:"dashed"}},value:o}),(0,r.jsx)(u.Z,{arrow:!0,placement:"top",title:e("replicate"),children:(0,r.jsxs)(c.Z,{className:"icn",onClick:function(){navigator.clipboard.writeText(o),j(!0),setTimeout((function(){j(!1)}),500)},children:[(0,r.jsx)(i.Z,{fontSize:"small"}),(0,r.jsx)(N,{className:m&&"active-copied-message",sx:{position:"absolute",bottom:-30,right:"uk_dev"===I.language||"uk"===I.language?-25:-10},children:(0,r.jsx)(W,{children:(0,r.jsx)(d.Z,{sx:{color:"#fff",fontWeight:500,fontSize:11},children:e("copied")})})})]})}),(0,r.jsx)(a.Z,{fullWidth:!0,loading:h,onClick:f,size:"large",type:"submit",variant:"contained",sx:{background:t.palette.primary.main,border:"1px solid ".concat(t.palette.primary.main),textTransform:"initial",borderRadius:"5px",padding:"5px 7px",width:"200px","& .MuiLoadingButton-loadingIndicator":{color:t.palette.primary.main}},children:e("regenerate")})]}),(0,r.jsx)(C,{})]})},A=document.getElementById("root");(0,o.s)(A).render((0,r.jsx)((function(e){var t=e.userSettings;return(0,p.useEffect)((function(){I.changeLanguage(null==t?void 0:t.lang)}),[null==t?void 0:t.lang]),(0,r.jsx)(f().Suspense,{children:(0,r.jsx)(g.I18nextProvider,{i18n:I,children:(0,r.jsx)(O,{userSettings:t,children:(0,r.jsx)(S,{children:(0,r.jsx)(q,{})})})})})}),{}))},745:function(e,t,n){"use strict";var r=n(56);t.s=r.createRoot,r.hydrateRoot},7535:function(e,t,n){var r={"./en-US/settings.json":[852,852],"./en-US/translation.json":[567,567],"./pl/settings.json":[1441,441],"./pl/translation.json":[450,450],"./pt-BR/settings.json":[2248,248],"./pt-BR/translation.json":[9536,536],"./uk/settings.json":[8480,480],"./uk/translation.json":[2978,978]};function o(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return n.e(t[1]).then((function(){return n.t(o,19)}))}o.keys=function(){return Object.keys(r)},o.id=7535,e.exports=o}}]);
//# sourceMappingURL=71.9c4ca0a2.chunk.js.map