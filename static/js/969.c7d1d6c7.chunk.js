(self.webpackChunkcontainer=self.webpackChunkcontainer||[]).push([[969],{9261:function(t,e,n){"use strict";n.d(e,{cq:function(){return a}});var r=n(5893),o=n(2747),i=(0,o.createContext)({}),a=function(){return(0,o.useContext)(i)};e.ZP=function(t){var e=t.children,n=t.userSettings;return(0,r.jsx)(i.Provider,{value:{userSettings:n},children:e})}},8665:function(t,e,n){"use strict";var r=n(5893),o=n(1508),i=n(2734),a=n(2658),s=n(2747),c=n(1934),u=n(4025),l=n(9261);e.Z=function(){var t=(0,i.Z)(),e=(0,l.cq)().userSettings,n=(0,c.useTranslation)("settings").t,d=(0,s.useMemo)((function(){switch(null==e?void 0:e.lang){case"uk":return"https://docs.google.com/document/d/1yQMjzpGbwyPdtM3TafBlpH_Q5rP-TcKGlHknkd1JR4w";case"pt-BR":return"https://docs.google.com/document/d/16DYgTruDgivUFUKZc0fRiXS9FqFBzliuEkkWbPs14gI";case"pl":return"https://docs.google.com/document/d/12mDDWuOuoMIfcYoPQfMGhtX9SD3rQR5hv_YqrKZExF0/edit#heading=h.7ocmqrn1cfld";default:return"https://docs.google.com/document/d/1IpploTrqQvNIF3XqAsz3b4KqhD9s3AXj8Lt_OnkGKow"}}),[null==e?void 0:e.lang]);return(0,r.jsxs)(o.Z,{sx:{marginTop:"15px",display:"flex",flexDirection:"column",gap:"8px","& a":{textDecoration:"none",color:t.palette.primary.main},"& p":{fontSize:"14px",color:t.palette.text.secondary}},children:[(0,r.jsxs)(a.Z,{sx:{fontSize:"16px !important",fontWeight:"800 !important",color:"".concat(t.palette.text.primary," !important")},children:[n("forApplicationSettings"),":"]}),(0,r.jsxs)(a.Z,{children:[n("downloadWordPressPlugin"),(0,r.jsx)("a",{download:!0,href:"".concat(u.yK,"/alterego-uspacy-and-contact-forms-7-integrations.zip"),children:"alterego-uspacy-and-contact-forms-7-integrations"})]}),(0,r.jsxs)(a.Z,{children:[n("installPluginOnSite"),(0,r.jsx)("br",{}),n("instructionsForWordPress")," ",(0,r.jsx)("a",{href:d,target:"_blank",rel:"noreferrer",children:n("here")})]}),(0,r.jsxs)(a.Z,{children:[n("pluginSettingsSpecifySecretKey"),(0,r.jsx)("br",{}),n("configureContactForm")]}),(0,r.jsxs)(a.Z,{children:[n("isThereNotEnoughFunctionalityForIntegration"),(0,r.jsx)("br",{}),n("teamIsInTouch")," –",(0,r.jsx)("a",{href:"tel:+380507007572",children:" +38 050 700 75 72"})," ",n("or"),(0,r.jsx)("a",{href:"mailto:mail@alterego.digital",children:" mail@alterego.digital"})]})]})}},6766:function(t,e,n){"use strict";var r=n(5893),o=n(9062),i=n(6483),a=function(){return a=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},a.apply(this,arguments)};e.Z=function(t){var e=t.style,n=t.size,s=void 0===n?50:n;return(0,r.jsx)(i.w,{sx:a({alignSelf:"center"},e),children:(0,r.jsx)(o.Z,{size:s})})}},6483:function(t,e,n){"use strict";n.d(e,{w:function(){return o}});var r=n(1508),o=(0,n(9602).ZP)(r.Z)((function(){return{display:"flex",justifyContent:"center",alignItems:"center",background:"transparent !important",height:"100%"}}))},3969:function(t,e,n){"use strict";n.r(e);var r=n(5893),o=n(1899),i=n(6824),a=n(1508),s=n(6867),c=n(2734),u=n(2884),l=n(2658),d=n(2747),p=n.n(d),f=n(1934),h=n(3170),g=n(9517),x=n(9261),v=n(8665),y=n(6766),m=n(5809),j=function(){var t=(0,f.useTranslation)("settings").t,e=(0,c.Z)(),n=(0,h.z_)(),p=n.key,x=n.regenerateSecretKey,j=n.loadingRegenerate,b=n.loading,k=(0,d.useState)(!1),Z=k[0],S=k[1];return b?(0,r.jsx)(a.Z,{sx:{height:"500px"},children:(0,r.jsx)(y.Z,{size:100})}):(0,r.jsxs)(a.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"flex-start",padding:"10px 50px"},children:[(0,r.jsxs)(l.Z,{sx:{fontSize:"16px",fontWeight:"800",color:e.palette.text.primary},children:[t("secretKey"),":"]}),(0,r.jsxs)(a.Z,{sx:{display:"flex",flexDirection:"row",gap:"8px",alignItems:"center",width:"100%"},children:[(0,r.jsx)(m.sS,{disabled:!0,fullWidth:!0,sx:{color:e.palette.text.disabled,"& .MuiOutlinedInput-notchedOutline":{borderStyle:"dashed"}},value:p}),(0,r.jsx)(u.Z,{arrow:!0,placement:"top",title:t("replicate"),children:(0,r.jsxs)(s.Z,{className:"icn",onClick:function(){navigator.clipboard.writeText(p),S(!0),setTimeout((function(){S(!1)}),500)},children:[(0,r.jsx)(o.Z,{fontSize:"small"}),(0,r.jsx)(m.Il,{className:Z&&"active-copied-message",sx:{position:"absolute",bottom:-30,right:"uk_dev"===g.Z.language||"uk"===g.Z.language?-25:-10},children:(0,r.jsx)(m.eB,{children:(0,r.jsx)(l.Z,{sx:{color:"#fff",fontWeight:500,fontSize:11},children:t("copied")})})})]})}),(0,r.jsx)(i.Z,{fullWidth:!0,loading:j,onClick:x,size:"large",type:"submit",variant:"contained",sx:{background:e.palette.primary.main,border:"1px solid ".concat(e.palette.primary.main),textTransform:"initial",borderRadius:"5px",padding:"5px 7px",width:"200px","& .MuiLoadingButton-loadingIndicator":{color:e.palette.primary.main}},children:t("regenerate")})]}),(0,r.jsx)(v.Z,{})]})};e.default=function(t){var e=t.userSettings;return(0,d.useEffect)((function(){g.Z.changeLanguage(null==e?void 0:e.lang)}),[null==e?void 0:e.lang]),(0,r.jsx)(p().Suspense,{children:(0,r.jsx)(f.I18nextProvider,{i18n:g.Z,children:(0,r.jsx)(x.ZP,{userSettings:e,children:(0,r.jsx)(h.ZP,{children:(0,r.jsx)(j,{})})})})})}},5809:function(t,e,n){"use strict";n.d(e,{Il:function(){return s},eB:function(){return c},sS:function(){return a}});var r=n(1508),o=n(9602),i=n(5157),a=(0,o.ZP)(i.Z)((function(t){var e=t.theme;return{width:"100%",fontSize:"16px",letterSpacing:"0.15px","& .MuiInputBase-root input":{background:e.palette.background.paper,color:e.palette.text.primary,padding:"8.5px 12px 8.5px 17px",fontSize:"16px","& :placeholder":{color:"green"}},"& .MuiOutlinedInput-notchedOutline":{border:"1px solid rgba(58, 53, 65, 0.23)"},"& .MuiFormHelperText-root.Mui-error":{position:"absolute",bottom:"-13px",fontSize:"8px"}}})),s=(0,o.ZP)(r.Z)((function(){return{pointerEvents:"none",opacity:0,transition:"all 0.3s","&.active-copied-message":{PointerEvents:"auto",opacity:1}}})),c=(0,o.ZP)(r.Z)((function(){return{position:"relative",padding:"4px 8px",borderRadius:4,backgroundColor:"rgba(97, 97, 97, 0.9)"}}))},3170:function(t,e,n){"use strict";n.d(e,{z_:function(){return d}});var r=n(5893),o=n(2747),i=n(4025),a=n(970),s=n(5642),c=function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{c(r.next(t))}catch(t){i(t)}}function s(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}c((r=r.apply(t,e||[])).next())}))},u=function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(c){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(a=0)),a;)try{if(n=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){a.label=s[1];break}if(6===s[0]&&a.label<o[1]){a.label=o[1],o=s;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(s);break}o[2]&&a.ops.pop(),a.trys.pop();continue}s=e.call(t,a)}catch(t){s=[6,t],r=0}finally{n=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}},l=(0,o.createContext)({}),d=function(){return(0,o.useContext)(l)};e.ZP=function(t){var e=t.children,n=(0,o.useState)(""),d=n[0],p=n[1],f=(0,o.useState)(!0),h=f[0],g=f[1],x=(0,o.useState)(!1),v=x[0],y=x[1],m="".concat(i.yK,"/wordpress/v1"),j=(0,s.G)().errorNotification,b=function(){return c(void 0,void 0,void 0,(function(){var t,e;return u(this,(function(n){switch(n.label){case 0:g(!0),n.label=1;case 1:return n.trys.push([1,5,6,7]),[4,(0,a.LP)()];case 2:return t=n.sent(),[4,fetch("".concat(m,"/keys/getKey"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)}})];case 3:return[4,n.sent().json()];case 4:return e=n.sent(),p((null==e?void 0:e.key)||""),[3,7];case 5:return n.sent(),j(),[3,7];case 6:return g(!1),[7];case 7:return[2]}}))}))};return(0,o.useEffect)((function(){b()}),[]),(0,r.jsx)(l.Provider,{value:{getSecretKey:b,regenerateSecretKey:function(){return c(void 0,void 0,void 0,(function(){var t,e;return u(this,(function(n){switch(n.label){case 0:y(!0),n.label=1;case 1:return n.trys.push([1,5,6,7]),[4,(0,a.LP)()];case 2:return t=n.sent(),[4,fetch("".concat(m,"/keys/regenerateKey"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)}})];case 3:return[4,n.sent().json()];case 4:return e=n.sent(),p((null==e?void 0:e.key)||""),[3,7];case 5:return n.sent(),j(),[3,7];case 6:return y(!1),[7];case 7:return[2]}}))}))},key:d,loadingRegenerate:v,loading:h},children:e})}},970:function(t,e,n){"use strict";n.d(e,{LP:function(){return i}});var r=n(5762),o=("tokens",n.n(r)().createInstance({name:"Uspacy",storeName:"tokens"})),i=function(){return o.getItem("token")}},4025:function(t,e,n){"use strict";n.d(e,{yK:function(){return r}});var r=window.location.host.includes("staging.uspacy.tech")?"https://wordpress-uspacy.alterego.biz.ua":"https://wordpress-uspacy.alterego.digital"},5642:function(t,e,n){"use strict";n.d(e,{G:function(){return i}});var r=n(2670),o=n(1934),i=function(){var t=(0,r.useSnackbar)().enqueueSnackbar,e=(0,o.useTranslation)("settings").t;return{errorNotification:function(n){t(n||e("requestExecutionError"),{variant:"error",anchorOrigin:{vertical:"top",horizontal:"right"}})}}}},9517:function(t,e,n){"use strict";var r=n(5146),o=n.n(r),i=n(4929),a=n.n(i),s=n(1934);o().use(s.initReactI18next).use(a()((function(t,e,r){n(7535)("./".concat(t,"/").concat(e,".json")).then((function(t){r(null,t)})).catch((function(t){r(t,null)}))}))).init({fallbackLng:"uk"}),e.Z=o()},7535:function(t,e,n){var r={"./en-US/settings.json":[852,852],"./en-US/translation.json":[567,567],"./pl/settings.json":[1441,441],"./pl/translation.json":[450,450],"./pt-BR/settings.json":[2248,248],"./pt-BR/translation.json":[9536,536],"./uk/settings.json":[8480,480],"./uk/translation.json":[2978,978]};function o(t){if(!n.o(r,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=r[t],o=e[0];return n.e(e[1]).then((function(){return n.t(o,19)}))}o.keys=function(){return Object.keys(r)},o.id=7535,t.exports=o}}]);
//# sourceMappingURL=969.c7d1d6c7.chunk.js.map