(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(9464)}])},3740:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return x}});let r=n(4788),i=n(8754),o=n(1757),a=n(224),s=o._(n(7294)),c=i._(n(2636)),u=n(7757),l=n(3735),f=n(3341);n(4210);let h=i._(n(7746)),d={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function p(t){return void 0!==t.default}function v(t){return"number"==typeof t||void 0===t?t:"string"==typeof t&&/^[0-9]+$/.test(t)?parseInt(t,10):NaN}function g(t,e,n,i,o,a,s){if(!t||t["data-loaded-src"]===e)return;t["data-loaded-src"]=e;let c="decode"in t?t.decode():Promise.resolve();c.catch(()=>{}).then(()=>{if(t.parentElement&&t.isConnected){if("blur"===n&&a(!0),null==i?void 0:i.current){let e=new Event("load");Object.defineProperty(e,"target",{writable:!1,value:t});let n=!1,o=!1;i.current(r._({},e,{nativeEvent:e,currentTarget:t,target:t,isDefaultPrevented:()=>n,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{n=!0,e.preventDefault()},stopPropagation:()=>{o=!0,e.stopPropagation()}}))}(null==o?void 0:o.current)&&o.current(t)}})}function m(t){let[e,n]=s.version.split("."),r=parseInt(e,10),i=parseInt(n,10);return r>18||18===r&&i>=3?{fetchPriority:t}:{fetchpriority:t}}let b=(0,s.forwardRef)((t,e)=>{var{imgAttributes:n,heightInt:i,widthInt:o,qualityInt:c,className:u,imgStyle:l,blurStyle:f,isLazy:h,fetchPriority:d,fill:p,placeholder:v,loading:b,srcString:y,config:x,unoptimized:w,loader:_,onLoadRef:j,onLoadingCompleteRef:O,setBlurComplete:P,setShowAltText:S,onLoad:k,onError:C}=t,E=a._(t,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fetchPriority","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return b=h?"lazy":b,s.default.createElement(s.default.Fragment,null,s.default.createElement("img",r._({},E,m(d),{loading:b,width:o,height:i,decoding:"async","data-nimg":p?"fill":"1",className:u,style:r._({},l,f)},n,{ref:(0,s.useCallback)(t=>{e&&("function"==typeof e?e(t):"object"==typeof e&&(e.current=t)),t&&(C&&(t.src=t.src),t.complete&&g(t,y,v,j,O,P,w))},[y,v,j,O,P,C,w,e]),onLoad:t=>{let e=t.currentTarget;g(e,y,v,j,O,P,w)},onError:t=>{S(!0),"blur"===v&&P(!0),C&&C(t)}})))}),y=(0,s.forwardRef)((t,e)=>{let n,i;var o,{src:g,sizes:y,unoptimized:x=!1,priority:w=!1,loading:_,className:j,quality:O,width:P,height:S,fill:k,style:C,onLoad:E,onLoadingComplete:M,placeholder:I="empty",blurDataURL:N,fetchPriority:R,layout:B,objectFit:D,objectPosition:A,lazyBoundary:z,lazyRoot:F}=t,L=a._(t,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","fetchPriority","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let T=(0,s.useContext)(f.ImageConfigContext),H=(0,s.useMemo)(()=>{let t=d||T||l.imageConfigDefault,e=[...t.deviceSizes,...t.imageSizes].sort((t,e)=>t-e),n=t.deviceSizes.sort((t,e)=>t-e);return r._({},t,{allSizes:e,deviceSizes:n})},[T]),V=L,W=V.loader||h.default;delete V.loader;let G="__next_img_default"in W;if(G){if("custom"===H.loader)throw Error('Image with src "'.concat(g,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let t=W;W=e=>{let{config:n}=e,r=a._(e,["config"]);return t(r)}}if(B){"fill"===B&&(k=!0);let t={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[B];t&&(C=r._({},C,t));let e={responsive:"100vw",fill:"100vw"}[B];e&&!y&&(y=e)}let q="",Q=v(P),Y=v(S);if("object"==typeof(o=g)&&(p(o)||void 0!==o.src)){let t=p(g)?g.default:g;if(!t.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(t)));if(!t.height||!t.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(t)));if(n=t.blurWidth,i=t.blurHeight,N=N||t.blurDataURL,q=t.src,!k){if(Q||Y){if(Q&&!Y){let e=Q/t.width;Y=Math.round(t.height*e)}else if(!Q&&Y){let e=Y/t.height;Q=Math.round(t.width*e)}}else Q=t.width,Y=t.height}}let U=!w&&("lazy"===_||void 0===_);(!(g="string"==typeof g?g:q)||g.startsWith("data:")||g.startsWith("blob:"))&&(x=!0,U=!1),H.unoptimized&&(x=!0),G&&g.endsWith(".svg")&&!H.dangerouslyAllowSVG&&(x=!0),w&&(R="high");let[X,K]=(0,s.useState)(!1),[J,Z]=(0,s.useState)(!1),$=v(O),tt=Object.assign(k?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:D,objectPosition:A}:{},J?{}:{color:"transparent"},C),te="blur"===I&&N&&!X?{backgroundSize:tt.objectFit||"cover",backgroundPosition:tt.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat((0,u.getImageBlurSvg)({widthInt:Q,heightInt:Y,blurWidth:n,blurHeight:i,blurDataURL:N,objectFit:tt.objectFit}),'")')}:{},tn=function(t){let{config:e,src:n,unoptimized:r,width:i,quality:o,sizes:a,loader:s}=t;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:c,kind:u}=function(t,e,n){let{deviceSizes:r,allSizes:i}=t;if(n){let t=/(^|\s)(1?\d?\d)vw/g,e=[];for(let r;r=t.exec(n);r)e.push(parseInt(r[2]));if(e.length){let t=.01*Math.min(...e);return{widths:i.filter(e=>e>=r[0]*t),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof e)return{widths:r,kind:"w"};let o=[...new Set([e,2*e].map(t=>i.find(e=>e>=t)||i[i.length-1]))];return{widths:o,kind:"x"}}(e,i,a),l=c.length-1;return{sizes:a||"w"!==u?a:"100vw",srcSet:c.map((t,r)=>"".concat(s({config:e,src:n,quality:o,width:t})," ").concat("w"===u?t:r+1).concat(u)).join(", "),src:s({config:e,src:n,quality:o,width:c[l]})}}({config:H,src:g,unoptimized:x,width:Q,quality:$,sizes:y,loader:W}),tr=g,ti=(0,s.useRef)(E);(0,s.useEffect)(()=>{ti.current=E},[E]);let to=(0,s.useRef)(M);(0,s.useEffect)(()=>{to.current=M},[M]);let ta=r._({isLazy:U,imgAttributes:tn,heightInt:Y,widthInt:Q,qualityInt:$,className:j,imgStyle:tt,blurStyle:te,loading:_,config:H,fetchPriority:R,fill:k,unoptimized:x,placeholder:I,loader:W,srcString:tr,onLoadRef:ti,onLoadingCompleteRef:to,setBlurComplete:K,setShowAltText:Z},V);return s.default.createElement(s.default.Fragment,null,s.default.createElement(b,r._({},ta,{ref:e})),w?s.default.createElement(c.default,null,s.default.createElement("link",r._({key:"__nimg-"+tn.src+tn.srcSet+tn.sizes,rel:"preload",as:"image",href:tn.srcSet?void 0:tn.src,imageSrcSet:tn.srcSet,imageSizes:tn.sizes,crossOrigin:V.crossOrigin},m(R)))):null)}),x=y;("function"==typeof e.default||"object"==typeof e.default&&null!==e.default)&&void 0===e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)},7757:function(t,e){"use strict";function n(t){let{widthInt:e,heightInt:n,blurWidth:r,blurHeight:i,blurDataURL:o,objectFit:a}=t,s=r||e,c=i||n,u=o.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return s&&c?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(s," ").concat(c,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(r&&i?"1":"20","'/%3E").concat(u,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(o,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none","' x='0' y='0' height='100%25' width='100%25' href='").concat(o,"'/%3E%3C/svg%3E")}Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},7746:function(t,e){"use strict";function n(t){let{config:e,src:n,width:r,quality:i}=t;return"".concat(e.path,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r}}),n.__next_img_default=!0;let r=n},4306:function(t,e,n){"use strict";n.d(e,{Av:function(){return c},PZ:function(){return u},Xh:function(){return s}});var r=n(5893),i=n(7294),o=n(7386),a=n.n(o);function s(t){let{children:e,onClick:n,enabled:o=!0}=t,s=(0,i.useRef)(null);function c(){var t;null===(t=s.current)||void 0===t||t.classList.remove(a().hold)}return(0,r.jsx)("button",{ref:s,className:"".concat(a().bigButton," ").concat(o?a().enabled:""),onClick:n,onPointerDown:function(){var t;null===(t=s.current)||void 0===t||t.classList.add(a().hold)},onPointerUp:c,onPointerOut:c,disabled:!o,children:e})}function c(t){let{children:e,onClick:n,enabled:o=!0}=t,s=(0,i.useRef)(null);function c(){var t;null===(t=s.current)||void 0===t||t.classList.remove(a().hold)}return(0,r.jsx)("button",{ref:s,className:"".concat(a().textButton," ").concat(o?a().enabled:""),onClick:n,onPointerDown:function(){var t;null===(t=s.current)||void 0===t||t.classList.add(a().hold)},onPointerUp:c,onPointerOut:c,children:e})}function u(t){let{children:e,onClick:n}=t;return(0,r.jsx)("button",{className:a().closeButton,onClick:n,children:e})}},9464:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return O}});var r=n(5893),i=n(195),o=n.n(i);n(269),n(8804);var a=n(9008),s=n.n(a),c=n(7294),u=n(5675),l=n.n(u),f=n(8556),h=n.n(f),d=n(4306),p={src:"/_next/static/media/skansen-treasureHunt-2youth.154b6f30.svg",height:263,width:390,blurWidth:0,blurHeight:0};function v(){let[t,e]=(0,c.useState)(!0),[n,i]=(0,c.useState)("start"),[o,a]=(0,c.useState)("se");function s(){e(!1)}function u(){e(!0),i("info")}return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:h().background,children:(0,r.jsxs)("div",{className:h().content,children:[(0,r.jsx)("button",{className:h().button,onClick:function(){e(!0),i("start")},children:(0,r.jsx)("img",{className:h().skansenLogo,src:"/logo.svg"})}),(0,r.jsx)("div",{className:h().buttonList,children:(0,r.jsx)("button",{className:h().button,onClick:u,children:(0,r.jsx)("div",{className:h().infoButton,children:"?"})})})]})}),(0,r.jsx)("div",{className:"".concat(h().panel," ").concat(t?"":h().hidePanel),children:(0,r.jsxs)("div",{className:h().panelContent,children:[(0,r.jsxs)("div",{className:"".concat(h().startPage," ").concat("start"!=n?h().hidePage:""),children:[(0,r.jsx)("small",{children:"V\xe4lkommen att testa demoversionen av"}),(0,r.jsx)("h1",{className:"font-extrabold",children:"Skansens tips\xadpromenad"}),(0,r.jsx)("p",{children:"Under 2023 kan du vara med och testa v\xe5r digitala tipspromenad. Ta en tur i parken och utforska natur, djur och kultur. Vid varje station hittar du en kod best\xe5ende av symboler. Tryck in r\xe4tt kod i mobilen f\xf6r att l\xe5sa upp stationen. Se, lyssna och l\xe4s och svara p\xe5 n\xe5gra kluriga fr\xe5gor. Lycka till!"}),(0,r.jsxs)("div",{className:"text-center",children:[(0,r.jsx)(d.Xh,{onClick:s,children:"Starta tipspromenad"}),(0,r.jsx)(d.Av,{onClick:u,children:"Hur spelar jag?"})]}),(0,r.jsx)(l(),{alt:"Start page image",src:p})]}),(0,r.jsxs)("div",{className:"".concat(h().infoPage," ").concat("info"!=n?h().hidePage:""),children:[(0,r.jsx)("h1",{className:"font-extrabold",children:"Instruktioner"}),(0,r.jsx)("img",{src:"https://picsum.photos/520/300"}),(0,r.jsx)("p",{children:"Consectetur est minim occaecat ex magna anim sint pariatur culpa velit."}),(0,r.jsx)("p",{children:"Laborum magna esse adipisicing tempor id in labore. Veniam nisi laboris duis ad labore elit consectetur et irure. Nostrud enim nostrud aliqua dolor amet."}),(0,r.jsx)("div",{className:"text-center",children:(0,r.jsx)(d.Xh,{onClick:s,children:"Starta tipspromenad"})})]})]})})]})}var g=n(3218),m=n(7904),b=function(t,e,n,r){let i=(0,c.useRef)(e);x(()=>{i.current=e},[e]),(0,c.useEffect)(()=>{var e;let o=null!==(e=null==n?void 0:n.current)&&void 0!==e?e:window;if(!(o&&o.addEventListener))return;let a=t=>i.current(t);return o.addEventListener(t,a,r),()=>{o.removeEventListener(t,a,r)}},[t,n,r])};let y="undefined"!=typeof window?c.useLayoutEffect:c.useEffect;var x=y,w=function(){let[t,e]=(0,c.useState)({width:0,height:0}),n=()=>{e({width:window.innerWidth,height:window.innerHeight})};return b("resize",n),x(()=>{n()},[]),t},_=n(725),j=n.n(_);function O(t){let{Component:e,pageProps:n}=t,{width:i,height:a}=w(),c=(0,g.o)(m.WG);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s(),{children:[(0,r.jsx)("title",{children:"Tipspromenad - Skansen"}),(0,r.jsx)("meta",{name:"description",content:"Prova p\xe5 en interaktiv tipspromenad p\xe5 Skansen!"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"}),(0,r.jsx)("meta",{property:"og:title",content:"Tipspromenad - Skansen"}),(0,r.jsx)("meta",{property:"og:description",content:"Prova p\xe5 en interaktiv tipspromenad p\xe5 Skansen!"}),(0,r.jsx)("meta",{property:"og:image",content:"https://skansen.se/wp-content/uploads/2022/02/logo-1.svg"}),(0,r.jsx)("meta",{property:"og:image:secure_url",content:"https://skansen.se/wp-content/uploads/2022/02/logo-1.svg"}),(0,r.jsx)("meta",{property:"og:url",content:"https://quiz.skansen.se/"}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),(0,r.jsx)("link",{rel:"manifest",href:"/site.webmanifest"}),(0,r.jsx)("link",{rel:"mask-icon",href:"/safari-pinned-tab.svg",color:"#b73337"}),(0,r.jsx)("meta",{name:"msapplication-TileColor",content:"#b73337"}),(0,r.jsx)("meta",{name:"theme-color",content:"#ffffff"})]}),(0,r.jsxs)("div",{className:"flex flex-col ".concat(o().className),style:{height:"100svh"},children:[(0,r.jsx)(v,{}),(0,r.jsx)("main",{className:"w-full mx-auto flex flex-1 overflow-auto",children:(0,r.jsx)(e,{...n})}),(0,r.jsx)(j(),{width:i,height:a,numberOfPieces:c==m.KR.Result?70:0})]})]})}},7904:function(t,e,n){"use strict";n.d(e,{KR:function(){return a},Sj:function(){return u},U7:function(){return o},WG:function(){return l},YZ:function(){return f},b9:function(){return c}});var r,i,o,a,s=n(175);(r=o||(o={}))[r.MapBrowse=0]="MapBrowse",r[r.MapPreview=1]="MapPreview",r[r.StationDetails=2]="StationDetails";let c=(0,s.c)(o.MapBrowse);function u(t){c.set(t),c.notify()}(i=a||(a={}))[i.Password=0]="Password",i[i.Information=1]="Information",i[i.Quiz=2]="Quiz",i[i.Result=3]="Result";let l=(0,s.c)(a.Password);function f(t){l.set(t),l.notify()}},269:function(){},8804:function(){},195:function(t){t.exports={style:{fontFamily:"'__Mulish_431c34', '__Mulish_Fallback_431c34'",fontStyle:"normal"},className:"__className_431c34"}},7386:function(t){t.exports={bigButton:"Buttons_bigButton__4SL3e",textButton:"Buttons_textButton__eVmKV",hold:"Buttons_hold__RVzbf",enabled:"Buttons_enabled__GOokY",closeButton:"Buttons_closeButton__fyQWH"}},8556:function(t){t.exports={background:"Header_background__dgFaM",content:"Header_content__CVWkX",buttonList:"Header_buttonList__RiRIz",button:"Header_button__dPxi8",skansenLogo:"Header_skansenLogo__nG3CV",languageButton:"Header_languageButton__tHGFV",infoButton:"Header_infoButton__tja3f",panel:"Header_panel__Ux5En",hidePanel:"Header_hidePanel__yiF0a",panelContent:"Header_panelContent__a_TAK",startPage:"Header_startPage__sTvIH",infoPage:"Header_infoPage__GKIHJ",hidePage:"Header_hidePage__gXiXS"}},9008:function(t,e,n){t.exports=n(2636)},5675:function(t,e,n){t.exports=n(3740)},725:function(t,e,n){var r;"undefined"!=typeof self&&self,t.exports=(r=n(7294),function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e||4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,(function(e){return t[e]}).bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e){t.exports=r},function(t,e,n){"use strict";var r={linear:function(t,e,n,r){return(n-e)*t/r+e},easeInQuad:function(t,e,n,r){return(n-e)*(t/=r)*t+e},easeOutQuad:function(t,e,n,r){return-(n-e)*(t/=r)*(t-2)+e},easeInOutQuad:function(t,e,n,r){var i=n-e;return(t/=r/2)<1?i/2*t*t+e:-i/2*(--t*(t-2)-1)+e},easeInCubic:function(t,e,n,r){return(n-e)*(t/=r)*t*t+e},easeOutCubic:function(t,e,n,r){return(n-e)*((t=t/r-1)*t*t+1)+e},easeInOutCubic:function(t,e,n,r){var i=n-e;return(t/=r/2)<1?i/2*t*t*t+e:i/2*((t-=2)*t*t+2)+e},easeInQuart:function(t,e,n,r){return(n-e)*(t/=r)*t*t*t+e},easeOutQuart:function(t,e,n,r){return-(n-e)*((t=t/r-1)*t*t*t-1)+e},easeInOutQuart:function(t,e,n,r){var i=n-e;return(t/=r/2)<1?i/2*t*t*t*t+e:-i/2*((t-=2)*t*t*t-2)+e},easeInQuint:function(t,e,n,r){return(n-e)*(t/=r)*t*t*t*t+e},easeOutQuint:function(t,e,n,r){return(n-e)*((t=t/r-1)*t*t*t*t+1)+e},easeInOutQuint:function(t,e,n,r){var i=n-e;return(t/=r/2)<1?i/2*t*t*t*t*t+e:i/2*((t-=2)*t*t*t*t+2)+e},easeInSine:function(t,e,n,r){var i=n-e;return-i*Math.cos(t/r*(Math.PI/2))+i+e},easeOutSine:function(t,e,n,r){return(n-e)*Math.sin(t/r*(Math.PI/2))+e},easeInOutSine:function(t,e,n,r){return-(n-e)/2*(Math.cos(Math.PI*t/r)-1)+e},easeInExpo:function(t,e,n,r){return 0==t?e:(n-e)*Math.pow(2,10*(t/r-1))+e},easeOutExpo:function(t,e,n,r){var i=n-e;return t==r?e+i:i*(1-Math.pow(2,-10*t/r))+e},easeInOutExpo:function(t,e,n,r){var i=n-e;return 0===t?e:t===r?e+i:(t/=r/2)<1?i/2*Math.pow(2,10*(t-1))+e:i/2*(2-Math.pow(2,-10*--t))+e},easeInCirc:function(t,e,n,r){return-(n-e)*(Math.sqrt(1-(t/=r)*t)-1)+e},easeOutCirc:function(t,e,n,r){return(n-e)*Math.sqrt(1-(t=t/r-1)*t)+e},easeInOutCirc:function(t,e,n,r){var i=n-e;return(t/=r/2)<1?-i/2*(Math.sqrt(1-t*t)-1)+e:i/2*(Math.sqrt(1-(t-=2)*t)+1)+e},easeInElastic:function(t,e,n,r){var i,o,a,s=n-e;return a=1.70158,0===t?e:1==(t/=r)?e+s:(o=0,o=.3*r,(i=s)<Math.abs(s)?(i=s,a=o/4):a=o/(2*Math.PI)*Math.asin(s/i),-i*Math.pow(2,10*(t-=1))*Math.sin((t*r-a)*(2*Math.PI)/o)+e)},easeOutElastic:function(t,e,n,r){var i,o,a,s=n-e;return a=1.70158,0===t?e:1==(t/=r)?e+s:(o=0,o=.3*r,(i=s)<Math.abs(s)?(i=s,a=o/4):a=o/(2*Math.PI)*Math.asin(s/i),i*Math.pow(2,-10*t)*Math.sin((t*r-a)*(2*Math.PI)/o)+s+e)},easeInOutElastic:function(t,e,n,r){var i,o,a,s=n-e;return a=1.70158,0===t?e:2==(t/=r/2)?e+s:(o=0,o=r*(.3*1.5),(i=s)<Math.abs(s)?(i=s,a=o/4):a=o/(2*Math.PI)*Math.asin(s/i),t<1?-(i*Math.pow(2,10*(t-=1))*Math.sin((t*r-a)*(2*Math.PI)/o)*.5)+e:i*Math.pow(2,-10*(t-=1))*Math.sin((t*r-a)*(2*Math.PI)/o)*.5+s+e)},easeInBack:function(t,e,n,r,i){return void 0===i&&(i=1.70158),(n-e)*(t/=r)*t*((i+1)*t-i)+e},easeOutBack:function(t,e,n,r,i){return void 0===i&&(i=1.70158),(n-e)*((t=t/r-1)*t*((i+1)*t+i)+1)+e},easeInOutBack:function(t,e,n,r,i){var o=n-e;return void 0===i&&(i=1.70158),(t/=r/2)<1?o/2*(t*t*((1+(i*=1.525))*t-i))+e:o/2*((t-=2)*t*((1+(i*=1.525))*t+i)+2)+e},easeInBounce:function(t,e,n,i){var o=n-e;return o-r.easeOutBounce(i-t,0,o,i)+e},easeOutBounce:function(t,e,n,r){var i=n-e;return(t/=r)<1/2.75?i*(7.5625*t*t)+e:t<2/2.75?i*(7.5625*(t-=1.5/2.75)*t+.75)+e:t<2.5/2.75?i*(7.5625*(t-=2.25/2.75)*t+.9375)+e:i*(7.5625*(t-=2.625/2.75)*t+.984375)+e},easeInOutBounce:function(t,e,n,i){var o=n-e;return t<i/2?.5*r.easeInBounce(2*t,0,o,i)+e:.5*r.easeOutBounce(2*t-i,0,o,i)+.5*o+e}};t.exports=r},function(t,e,n){t.exports=n(3)},function(t,e,n){"use strict";n.r(e),n.d(e,"ReactConfetti",function(){return z});var r,i,o,a,s=n(0),c=n.n(s),u=n(1),l=n.n(u);function f(t,e){return t+Math.random()*(e-t)}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}(r=o||(o={}))[r.Circle=0]="Circle",r[r.Square=1]="Square",r[r.Strip=2]="Strip",(i=a||(a={}))[i.Positive=1]="Positive",i[i.Negative=-1]="Negative";var p=function(){var t,e;function n(t,e,r,i){(function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")})(this,n),d(this,"context",void 0),d(this,"radius",void 0),d(this,"x",void 0),d(this,"y",void 0),d(this,"w",void 0),d(this,"h",void 0),d(this,"vx",void 0),d(this,"vy",void 0),d(this,"shape",void 0),d(this,"angle",void 0),d(this,"angularSpin",void 0),d(this,"color",void 0),d(this,"rotateY",void 0),d(this,"rotationDirection",void 0),d(this,"getOptions",void 0),this.getOptions=e;var o=this.getOptions(),s=o.colors,c=o.initialVelocityX,u=o.initialVelocityY;this.context=t,this.x=r,this.y=i,this.w=f(5,20),this.h=f(5,20),this.radius=f(5,10),this.vx="number"==typeof c?f(-c,c):f(c.min,c.max),this.vy="number"==typeof u?f(-u,0):f(u.min,u.max),this.shape=Math.floor(0+3*Math.random()),this.angle=f(0,360)*Math.PI/180,this.angularSpin=f(-.2,.2),this.color=s[Math.floor(Math.random()*s.length)],this.rotateY=f(0,1),this.rotationDirection=f(0,1)?a.Positive:a.Negative}return t=[{key:"update",value:function(){var t=this.getOptions(),e=t.gravity,n=t.wind,r=t.friction,i=t.opacity,s=t.drawShape;this.x+=this.vx,this.y+=this.vy,this.vy+=e,this.vx+=n,this.vx*=r,this.vy*=r,this.rotateY>=1&&this.rotationDirection===a.Positive?this.rotationDirection=a.Negative:this.rotateY<=-1&&this.rotationDirection===a.Negative&&(this.rotationDirection=a.Positive);var c=.1*this.rotationDirection;if(this.rotateY+=c,this.angle+=this.angularSpin,this.context.save(),this.context.translate(this.x,this.y),this.context.rotate(this.angle),this.context.scale(1,this.rotateY),this.context.rotate(this.angle),this.context.beginPath(),this.context.fillStyle=this.color,this.context.strokeStyle=this.color,this.context.globalAlpha=i,this.context.lineCap="round",this.context.lineWidth=2,s&&"function"==typeof s)s.call(this,this.context);else switch(this.shape){case o.Circle:this.context.beginPath(),this.context.arc(0,0,this.radius,0,2*Math.PI),this.context.fill();break;case o.Square:this.context.fillRect(-this.w/2,-this.h/2,this.w,this.h);break;case o.Strip:this.context.fillRect(-this.w/6,-this.h/2,this.w/3,this.h)}this.context.closePath(),this.context.restore()}}],h(n.prototype,t),e&&h(n,e),n}();function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var g=function t(e,n){var r=this;(function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")})(this,t),v(this,"canvas",void 0),v(this,"context",void 0),v(this,"getOptions",void 0),v(this,"x",0),v(this,"y",0),v(this,"w",0),v(this,"h",0),v(this,"lastNumberOfPieces",0),v(this,"tweenInitTime",Date.now()),v(this,"particles",[]),v(this,"particlesGenerated",0),v(this,"removeParticleAt",function(t){r.particles.splice(t,1)}),v(this,"getParticle",function(){var t=f(r.x,r.w+r.x),e=f(r.y,r.h+r.y);return new p(r.context,r.getOptions,t,e)}),v(this,"animate",function(){var t=r.canvas,e=r.context,n=r.particlesGenerated,i=r.lastNumberOfPieces,o=r.getOptions(),a=o.run,s=o.recycle,c=o.numberOfPieces,u=o.debug,l=o.tweenFunction,f=o.tweenDuration;if(!a)return!1;var h=r.particles.length,d=s?h:n,p=Date.now();if(d<c){i!==c&&(r.tweenInitTime=p,r.lastNumberOfPieces=c);for(var v=r.tweenInitTime,g=l(p-v>f?f:Math.max(0,p-v),d,c,f),m=Math.round(g-d),b=0;b<m;b++)r.particles.push(r.getParticle());r.particlesGenerated+=m}return u&&(e.font="12px sans-serif",e.fillStyle="#333",e.textAlign="right",e.fillText("Particles: ".concat(h),t.width-10,t.height-20)),r.particles.forEach(function(e,n){e.update(),(e.y>t.height||e.y<-100||e.x>t.width+100||e.x<-100)&&(s&&d<=c?r.particles[n]=r.getParticle():r.removeParticleAt(n))}),h>0||d<c}),this.canvas=e;var i=this.canvas.getContext("2d");if(!i)throw Error("Could not get canvas context");this.context=i,this.getOptions=n};function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach(function(e){x(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function x(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var w={width:"undefined"!=typeof window?window.innerWidth:300,height:"undefined"!=typeof window?window.innerHeight:200,numberOfPieces:200,friction:.99,wind:0,gravity:.1,initialVelocityX:4,initialVelocityY:10,colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548"],opacity:1,debug:!1,tweenFunction:l.a.easeInOutQuad,tweenDuration:5e3,recycle:!0,run:!0},_=function(){var t;function e(t,n){var r=this;(function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")})(this,e),x(this,"canvas",void 0),x(this,"context",void 0),x(this,"_options",void 0),x(this,"generator",void 0),x(this,"rafId",void 0),x(this,"setOptionsWithDefaults",function(t){var e={confettiSource:{x:0,y:0,w:r.canvas.width,h:0}};r._options=b(b(b({},e),w),t),Object.assign(r,t.confettiSource)}),x(this,"update",function(){var t=r.options,e=t.run,n=t.onConfettiComplete,i=r.canvas,o=r.context;e&&(o.fillStyle="white",o.clearRect(0,0,i.width,i.height)),r.generator.animate()?r.rafId=requestAnimationFrame(r.update):(n&&"function"==typeof n&&r.generator.particlesGenerated>0&&n.call(r,r),r._options.run=!1)}),x(this,"reset",function(){r.generator&&r.generator.particlesGenerated>0&&(r.generator.particlesGenerated=0,r.generator.particles=[],r.generator.lastNumberOfPieces=0)}),x(this,"stop",function(){r.options={run:!1},r.rafId&&(cancelAnimationFrame(r.rafId),r.rafId=void 0)}),this.canvas=t;var i=this.canvas.getContext("2d");if(!i)throw Error("Could not get canvas context");this.context=i,this.generator=new g(this.canvas,function(){return r.options}),this.options=n,this.update()}return y(e.prototype,[{key:"options",get:function(){return this._options},set:function(t){var e=this._options&&this._options.run,n=this._options&&this._options.recycle;this.setOptionsWithDefaults(t),this.generator&&(Object.assign(this.generator,this.options.confettiSource),"boolean"==typeof t.recycle&&t.recycle&&!1===n&&(this.generator.lastNumberOfPieces=this.generator.particles.length)),"boolean"==typeof t.run&&t.run&&!1===e&&this.update()}}]),t&&y(e,t),e}();function j(t){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function O(){return(O=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function P(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function S(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?P(Object(n),!0).forEach(function(e){R(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function k(t,e){if(t){if("string"==typeof t)return C(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?C(t,e):void 0}}function C(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function E(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function M(t,e){return(M=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function I(t){if(void 0===t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function N(t){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function R(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var B=c.a.createRef(),D=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&M(t,e)}(o,t);var e,n,r,i=(e=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}(),function(){var t,n,r=N(o);if(e){var i=N(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return(t=n)&&("object"===j(t)||"function"==typeof t)?t:I(this)});function o(t){var e;!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,o);for(var n=arguments.length,r=Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return R(I(e=i.call.apply(i,[this,t].concat(r))),"canvas",c.a.createRef()),R(I(e),"confetti",void 0),e.canvas=t.canvasRef||B,e}return n=[{key:"componentDidMount",value:function(){if(this.canvas.current){var t=A(this.props)[0];this.confetti=new _(this.canvas.current,t)}}},{key:"componentDidUpdate",value:function(){var t=A(this.props)[0];this.confetti&&(this.confetti.options=t)}},{key:"componentWillUnmount",value:function(){this.confetti&&this.confetti.stop(),this.confetti=void 0}},{key:"render",value:function(){var t,e=function(t){if(Array.isArray(t))return t}(t=A(this.props))||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}return n}}(t,2)||k(t,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),n=e[0],r=e[1],i=S({zIndex:2,position:"absolute",pointerEvents:"none",top:0,left:0,bottom:0,right:0},r.style);return c.a.createElement("canvas",O({width:n.width,height:n.height,ref:this.canvas},r,{style:i}))}}],E(o.prototype,n),r&&E(o,r),o}(s.Component);function A(t){var e,n={},r={},i=[].concat(function(t){if(Array.isArray(t))return C(t)}(e=Object.keys(w))||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(e)||k(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),["confettiSource","drawShape","onConfettiComplete"]),o=["canvasRef"];for(var a in t){var s=t[a];i.includes(a)?n[a]=s:o.includes(a)?o[a]=s:r[a]=s}return[n,r,{}]}R(D,"defaultProps",S({},w)),R(D,"displayName","ReactConfetti");var z=c.a.forwardRef(function(t,e){return c.a.createElement(D,O({canvasRef:e},t))});e.default=z}]).default)},3250:function(t,e,n){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(7294),i="function"==typeof Object.is?Object.is:function(t,e){return t===e&&(0!==t||1/t==1/e)||t!=t&&e!=e},o=r.useState,a=r.useEffect,s=r.useLayoutEffect,c=r.useDebugValue;function u(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!i(t,n)}catch(t){return!0}}var l="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(t,e){return e()}:function(t,e){var n=e(),r=o({inst:{value:n,getSnapshot:e}}),i=r[0].inst,l=r[1];return s(function(){i.value=n,i.getSnapshot=e,u(i)&&l({inst:i})},[t,n,e]),a(function(){return u(i)&&l({inst:i}),t(function(){u(i)&&l({inst:i})})},[t]),c(n),n};e.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:l},1688:function(t,e,n){"use strict";t.exports=n(3250)},3218:function(t,e,n){"use strict";n.d(e,{o:function(){return o}});var r=n(7294),i=n(1688);function o(t,e={}){let n=(0,r.useCallback)(n=>{var r;let i;return e.keys?(r=e.keys,i=new Set([...r,void 0]),t.listen((t,e)=>{i.has(e)&&n(t,e)})):t.listen(n)},[e.keys,t]),o=t.get.bind(t);return(0,i.useSyncExternalStore)(n,o,o)}},175:function(t,e,n){"use strict";n.d(e,{c:function(){return o},y:function(){return i}});let r=[],i=0,o=(t,e)=>{let n;let o=[],a={lc:0,l:e||0,value:t,set(t){a.value=t,a.notify()},get:()=>(a.lc||a.listen(()=>{})(),a.value),notify(t){n=o;let e=!r.length;for(let e=0;e<n.length;e+=2)r.push(n[e],a.value,t,n[e+1]);if(e){i++;for(let t=0;t<r.length;t+=4){let e=!1;for(let n=t+7;n<r.length;n+=4)if(r[n]<r[t+3]){e=!0;break}e?r.push(r[t],r[t+1],r[t+2],r[t+3]):r[t](r[t+1],r[t+2])}r.length=0}},listen:(t,e)=>(o===n&&(o=o.slice()),a.lc=o.push(t,e||a.l)/2,()=>{o===n&&(o=o.slice());let e=o.indexOf(t);~e&&(o.splice(e,2),a.lc--,a.lc||a.off())}),subscribe(t,e){let n=a.listen(t,e);return t(a.value),n},off(){}};return a}}},function(t){var e=function(e){return t(t.s=e)};t.O(0,[774,179],function(){return e(6840),e(6885)}),_N_E=t.O()}]);