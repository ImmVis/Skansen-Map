(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5852)}])},5852:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return H},default:function(){return G}});var i={};n.r(i),n.d(i,{MDXContext:function(){return d},MDXProvider:function(){return p},useMDXComponents:function(){return h},withMDXComponents:function(){return u}});var r=n(5893),a=n(7294),s=n(3218),o=n(5675),l=n.n(o),c=n(2746);let d=a.createContext({});function u(e){return function(t){let n=h(t.components);return a.createElement(e,{...t,allComponents:n})}}function h(e){let t=a.useContext(d);return a.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let f={};function p({components:e,children:t,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||f:h(e),a.createElement(d.Provider,{value:i},t)}function g({compiledSource:e,frontmatter:t,scope:n,components:r={},lazy:s}){let[o,l]=(0,a.useState)(!s||"undefined"==typeof window);(0,a.useEffect)(()=>{if(s){let e=window.requestIdleCallback(()=>{l(!0)});return()=>window.cancelIdleCallback(e)}},[]);let d=(0,a.useMemo)(()=>{let r=Object.assign({opts:{...i,...c.jsxRuntime}},{frontmatter:t},n),a=Object.keys(r),s=Object.values(r),o=Reflect.construct(Function,a.concat(`${e}`));return o.apply(o,s).default},[n,e]);if(!o)return a.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});let u=a.createElement(p,{components:r},a.createElement(d,null));return s?a.createElement("div",null,u):u}"undefined"!=typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(e){var t=Date.now();return setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)}),n(1864);var m={src:"/_next/static/media/play.9268550d.svg",height:800,width:800,blurWidth:0,blurHeight:0};function x(e){let{src:t}=e,[n,i]=(0,a.useState)(!1);return(0,r.jsxs)("div",{className:"video-wrapper",children:[(0,r.jsxs)("video",{onClick:function(e){let{target:t}=e;t.paused?t.play():t.pause(),i(!t.paused)},playsInline:!0,children:[(0,r.jsx)("source",{src:t,type:"video/mp4"}),"Your browser does not support the video tag."]}),!n&&(0,r.jsx)("div",{className:"video-playbutton",children:(0,r.jsx)(l(),{alt:"play",src:m})})]})}var v=n(6105),j=n.n(v);function w(e){let{symbols:t,password:n,onSuccess:i}=e,[s,o]=(0,a.useState)([]);function l(e){var t,r;let a=s.concat([e]);a.length<n.length?null===(t=c.current)||void 0===t||t.classList.remove(j().incorrect):a.length>=n.length&&(JSON.stringify(a)==JSON.stringify(n)?i():(null===(r=c.current)||void 0===r||r.classList.add(j().incorrect),a=[])),o(a)}let c=(0,a.useRef)(null);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:j().dots,ref:c,children:n.map((e,t)=>(0,r.jsx)("div",{className:s.length>t?j().dotOn:j().dotOff},e))}),(0,r.jsx)("div",{className:j().wrapper,children:t.map(e=>(0,r.jsx)(b,{symbol:e,highlight:s.includes(e),addInput:l},e))})]})}function b(e){let{symbol:t,highlight:n,addInput:i}=e,[s,o]=(0,a.useState)(!1);function c(){s&&(i(t),o(!1))}return(0,r.jsx)("div",{className:"".concat(j().button," ").concat(s&&j().hold," ").concat(n&&j().highlight),onPointerDown:()=>o(!0),onTouchStart:()=>o(!0),onMouseLeave:()=>o(!1),onPointerUp:c,onTouchEnd:c,onContextMenu:e=>e.preventDefault(),children:(0,r.jsx)(l(),{width:64,height:64,alt:t,src:"/symbols/".concat(t,".svg")})})}function k(e){let{symbols:t,password:n}=e;return(0,r.jsx)("div",{className:j().previewWrapper,children:n.map(e=>(0,r.jsx)("div",{className:j().previewButton,children:(0,r.jsx)(l(),{width:64,height:64,alt:e,src:"/symbols/".concat(e,".svg")})},e))})}var C=n(4306),_=n(175);let y=(e,t,n,i)=>(e.events=e.events||{},e.events[n+10]||(e.events[n+10]=i(t=>{e.events[n].reduceRight((e,t)=>(t(e),e),{shared:{},...t})})),e.events[n]=e.events[n]||[],e.events[n].push(t),()=>{let i=e.events[n],r=i.indexOf(t);i.splice(r,1),i.length||(delete e.events[n],e.events[n+10](),delete e.events[n+10])}),S=(e,t)=>{let n=n=>{let i=t(n);i&&e.events[6].push(i)};return y(e,n,5,t=>{let n=e.listen;e.listen=(...i)=>(e.lc||e.active||(e.active=!0,t()),n(...i));let i=e.off;return e.events[6]=[],e.off=()=>{i(),setTimeout(()=>{if(e.active&&!e.lc){for(let t of(e.active=!1,e.events[6]))t();e.events[6]=[]}},1e3)},()=>{e.listen=n,e.off=i}})},N=(e,t)=>{let n;Array.isArray(e)||(e=[e]);let i=[],r=()=>{let r=e.map(e=>e.get());(n!==_.y||r.some((e,t)=>e!==i[t]))&&(n=_.y,i=r,a.set(t(...r)))},a=(0,_.c)(void 0,Math.max(...e.map(e=>e.l))+1);return S(a,()=>{let t=e.map(e=>e.listen(r,a.l));return r(),()=>{for(let e of t)e()}}),a},A=(0,_.c)([]);function z(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=A.get().find(t=>t.id==e);if(n)return n;let i={id:e,hasVisited:!1,visitCount:0,passwordCorrect:!1,quiz:{answers:[],correct:[],submitted:!1}};return t&&A.set([...A.get(),i]),i}function P(e,t,n,i){let r=z(e,!0);r.quiz.answers[t]=n,r.quiz.correct[t]=i,A.notify()}let R=N(A,e=>e.filter(e=>e.hasVisited));N(A,e=>e.filter(e=>e.passwordCorrect));let T=N(A,e=>e.filter(e=>e.quiz.submitted));var E=n(7904),M=n(8110),O=n.n(M);function U(e){let{stationId:t,questions:n,onComplete:i}=e,a=(0,s.o)(R),o=a.find(e=>e.id==t),l=0;if(o)for(let e of o.quiz.answers)if(-1!=e&&null!=e)l++;else break;return(0,r.jsxs)(r.Fragment,{children:[n.map((e,i)=>(0,r.jsx)(q,{stationId:t,question:e,index:i,max:n.length,selected:o?o.quiz.answers[i]:-1,locked:i>l},i)),(0,r.jsx)(C.Xh,{onClick:()=>i("result"),enabled:l==n.length,children:"Kontrollera svar"})]})}function q(e){let{stationId:t,question:n,index:i,max:a,selected:s,locked:o}=e,c=n.options.every(e=>e.length<=16);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"".concat(O().question," ").concat(o?O().locked:""),children:[(0,r.jsxs)("h5",{className:"font-black",children:["Fr\xe5ga ",i+1," av ",a]}),n.image&&(0,r.jsx)(l(),{width:520,height:250,alt:n.image,src:n.image}),(0,r.jsx)("h3",{className:"mt-6 mb-6",children:n.question}),(0,r.jsx)("div",{className:"grid gap-x-4 gap-y-4 ".concat(c?"grid-cols-2":"grid-cols-1"),children:n.options.map((e,a)=>(0,r.jsx)(I,{correct:n.correct-1==a,selected:s==a,onSelect:()=>(function(e){if(s!=e){let r=n.correct-1==e;P(t,i,e,r)}else P(t,i,-1,!1)})(a),children:e},a))})]}),(0,r.jsx)("hr",{})]})}function I(e){let{children:t,correct:n,selected:i,onSelect:s}=e,[o,l]=(0,a.useState)(!1);function c(){o&&(s(),l(!1))}return(0,r.jsx)("div",{className:"".concat(O().button," ").concat(o&&O().hold," ").concat(i&&O().selected),onPointerDown:()=>l(!0),onTouchStart:()=>l(!0),onMouseLeave:()=>l(!1),onTouchMove:()=>l(!1),onPointerUp:c,onTouchEnd:c,onContextMenu:e=>e.preventDefault(),children:[...t]})}function D(e){let{stations:t,completedStations:n,selectedStation:i,onExplore:o,onClose:c}=e,d=(0,s.o)(E.b9),u=n.length==t.length&&n.every(e=>e.quiz.submitted);(0,a.useEffect)(()=>{if(i){let e=z(i.data.id);e.passwordCorrect?(0,E.YZ)(E.KR.Information):(0,E.YZ)(E.KR.Password)}},[d,i]);let h=t.reduce((e,t)=>e+t.data.quiz.length,0),f=n.reduce((e,t)=>e+t.quiz.correct.filter(e=>e).length,0);return(0,r.jsxs)("div",{className:"panel-content",children:[(0,r.jsx)("div",{className:"flex flex-col h-full justify-center ".concat(d!=E.U7.MapBrowse?"hidden":""),children:u?(0,r.jsxs)("div",{className:"m-6 pb-2",children:[(0,r.jsx)("p",{children:"Du har funnit alla stationer!"}),(0,r.jsx)(C.Xh,{onClick:()=>(0,E.Sj)(E.U7.VictoryScreen),children:"Se resultat"})]}):(0,r.jsx)("div",{className:"m-6 font-extrabold",children:"Tryck p\xe5 en station"})}),t.map(e=>{var t;return d==E.U7.MapPreview&&e==i&&(0,r.jsxs)("div",{className:"flex flex-col h-full justify-center",children:[(0,r.jsx)("span",{className:"text-xl font-extrabold pt-4 mb-4",children:e.data.name}),(null===(t=z(e.data.id))||void 0===t?void 0:t.passwordCorrect)?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{children:"Du har redan l\xe5st upp den h\xe4r stationen!"}),(0,r.jsx)(k,{symbols:e.data.symbols||[],password:e.data.password||[]}),(0,r.jsx)("div",{className:"mb-6",children:(0,r.jsx)(C.Xh,{onClick:o,children:"Forts\xe4tt utforska"})})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l(),{width:512,height:512,className:"panel-preview-image",alt:e.data.icon,src:e.data.icon}),(0,r.jsxs)("div",{className:"mb-8",children:[(0,r.jsx)("p",{children:e.data.brief}),(0,r.jsx)(C.Xh,{onClick:o,children:"L\xe5s upp"})]})]}),(0,r.jsx)(C.PZ,{onClick:c,children:"\xd7"})]},e.data.id+"preview")}),t.map(e=>d==E.U7.StationDetails&&e==i&&(0,r.jsx)("div",{className:"p-4 pt-8",children:(0,r.jsx)(B,{station:e,atom:z(e.data.id),onClose:c})},e.data.id+"detail")),(0,r.jsx)("div",{className:"flex flex-col h-full justify-center ".concat(d!=E.U7.VictoryScreen?"hidden":""),children:(0,r.jsxs)("div",{className:"p-4 pt-8",children:[(0,r.jsx)(l(),{width:520,height:250,alt:"Result image",src:"https://picsum.photos/520/250"}),(0,r.jsx)("h1",{children:"Grattis!"}),(0,r.jsx)("h3",{children:"Du har utforskat alla stationer!"}),(0,r.jsxs)("h4",{children:["Ditt samlade resultat \xe4r ",f," r\xe4tt av ",h," fr\xe5gor."]}),(0,r.jsx)("hr",{}),(0,r.jsx)("p",{children:"Tack f\xf6r att du vill l\xe4ra dig mer!"}),(0,r.jsx)("p",{children:"Den biologiska m\xe5ngfalden i naturen \xe4r fantastiskt! Tillsammans kan vi g\xf6ra skillnad f\xf6r alla djur, insekter och v\xe4xter som vi delar v\xe5r planet med!"}),(0,r.jsxs)("div",{className:"mt-12 mb-8",children:[(0,r.jsx)(C.Xh,{onClick:()=>window.open("https://skansen.se/","_blank"),children:"Svara p\xe5 v\xe5r enk\xe4t"}),(0,r.jsx)("br",{}),(0,r.jsx)(C.Av,{onClick:()=>(0,E.Sj)(E.U7.MapBrowse),children:"G\xe5 till karta"})]})]})})]})}function B(e){let{station:t,atom:n,onClose:i}=e,a=(0,s.o)(E.WG);return(0,r.jsxs)(r.Fragment,{children:[a==E.KR.Password&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h1",{children:"Skriv in l\xf6senord"}),(0,r.jsx)("p",{children:"Du hittar koden vid stationen. Tryck in symbolerna i r\xe4tt ordning f\xf6r att l\xe5sa upp stationen. Lycka till!"}),(0,r.jsx)(w,{symbols:t.data.symbols||[],password:t.data.password||[],onSuccess:function(){!function(e){let t=z(e,!0);t.passwordCorrect=!0,A.notify()}(t.data.id),(0,E.YZ)(E.KR.Information)}}),(0,r.jsx)(C.Xh,{onClick:i,children:"G\xe5 tillbaka"})]}),a==E.KR.Information&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l(),{width:256,height:256,className:"w-auto m-auto h-24",alt:t.data.icon,src:t.data.icon}),(0,r.jsx)("div",{className:"text-left",children:(0,r.jsx)(g,{...t.content,components:(t.mdxPath,{Video:x})})}),(0,r.jsxs)("div",{className:"mt-12 mb-8",children:[n.quiz.submitted?(0,r.jsx)(C.Xh,{onClick:()=>(0,E.YZ)(E.KR.Result),children:"Se dina svar"}):(0,r.jsx)(C.Xh,{onClick:()=>(0,E.YZ)(E.KR.Quiz),children:"Starta quiz"}),(0,r.jsx)("br",{}),(0,r.jsx)(C.Av,{onClick:i,children:"G\xe5 tillbaka till kartan"})]})]}),a==E.KR.Quiz&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(U,{stationId:t.data.id,questions:t.data.quiz,onComplete:function(){!function(e){let t=z(e,!0);t.quiz.submitted=!0,A.notify()}(t.data.id),(0,E.YZ)(E.KR.Result)}}),(0,r.jsx)("div",{className:"mt-12 mb-8",children:(0,r.jsx)(C.Av,{onClick:()=>(0,E.YZ)(E.KR.Information),children:"G\xe5 tillbaka"})})]}),a==E.KR.Result&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h1",{children:"Resultat"}),(0,r.jsx)(l(),{width:520,height:250,alt:"Result image",src:"https://picsum.photos/520/250"}),(0,r.jsx)("p",{children:"Bra gjort!"}),(0,r.jsxs)("p",{children:["Du svarade r\xe4tt p\xe5 ",n.quiz.correct.filter(Boolean).length," av ",n.quiz.correct.length," fr\xe5gor."]}),(0,r.jsx)("div",{className:"mt-12 mb-8",children:(0,r.jsx)(C.Xh,{onClick:()=>(0,E.Sj)(E.U7.MapBrowse),children:"G\xe5 till karta"})})]}),(0,r.jsx)(C.PZ,{onClick:i,children:"\xd7"})]})}var K=n(7054),L={src:"/_next/static/media/location_blue.258ec806.svg",height:200,width:200,blurWidth:0,blurHeight:0};function F(){let[e,t]=(0,a.useState)(!1),[n,i]=(0,a.useState)({lat:0,lng:0}),[s,o]=(0,a.useState)(100);return(0,a.useEffect)(()=>{navigator.geolocation?navigator.geolocation.watchPosition(e=>{console.log("LOCATION",e,e.coords.accuracy),i({lat:e.coords.latitude,lng:e.coords.longitude}),o(e.coords.accuracy),t(!0)},e=>{},{enableHighAccuracy:!0,timeout:5e3,maximumAge:0}):console.error("Unable to use geolocation")},[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(K.Cd,{options:{center:n,fillColor:"#4185f5",fillOpacity:.25,radius:s,strokeColor:"#4185f5",strokeOpacity:.5,strokeWeight:2,visible:e}}),(0,r.jsx)(K.Jx,{position:n,options:{icon:{url:L.src,scaledSize:new google.maps.Size(50,50),anchor:new google.maps.Point(25,25)}}})]})}var X={src:"/_next/static/media/geoTag-check.b818a5f5.svg",height:175,width:118,blurWidth:0,blurHeight:0};let W={width:"100%",height:"100%"};function Z(e){let{googleMapsApiKey:t,center:n,stations:i,completedStations:s,selectedStation:o,onStationClick:l}=e,{isLoaded:c}=(0,K.Ji)({id:"google-map-script",googleMapsApiKey:t}),[d,u]=(0,a.useState)(null),h=(0,a.useCallback)(function(e){let t=new window.google.maps.LatLngBounds(new google.maps.LatLng(59.323,18.0979),new google.maps.LatLng(59.3307,18.1122));e.fitBounds(t,0),e.panTo(n),u(e)},[n]),f=(0,a.useCallback)(function(e){u(null)},[]),p={north:59.330333,south:59.322608,east:18.112642,west:18.0969};return p.north,p.south,p.east,p.west,o&&(o.data.position.lat,o.data.position.lat,o.data.position.lng,o.data.position.lng),null==d||d.panTo(n),null==d||d.setOptions({gestureHandling:o?"none":"greedy",maxZoom:19}),c?(0,r.jsx)("div",{className:"map-container",children:(0,r.jsxs)(K.b6,{mapContainerStyle:W,zoom:11,heading:90,tilt:45,onLoad:h,onUnmount:f,options:{controlSize:null,disableDefaultUI:!0,styles:[{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]}]},children:[(0,r.jsx)(K.$e,{url:"/Skansen_map_georeff_v1.png",bounds:p,opacity:1,onClick:()=>{l(null)}},"url"),i.map(e=>(0,r.jsx)(K.Jx,{position:e.data.position,onClick:()=>{l(e)},animation:o==e?google.maps.Animation.BOUNCE:void 0,options:{icon:{url:s.find(t=>t.id==e.data.id)?X.src:e.data.pin,scaledSize:new google.maps.Size(80,80),anchor:new google.maps.Point(40,80)}},children:(0,r.jsx)("p",{children:e.data.name})},e.data.name)),(0,r.jsx)(F,{})]})}):(0,r.jsx)(r.Fragment,{})}var H=!0;function G(e){let{stations:t,googleMapsApiKey:n,test:i}=e,[o,l]=(0,a.useState)({lat:59.32650223048287,lng:18.10463536192017}),c=(0,s.o)(E.b9),d=(0,s.o)(E.WG),u=(0,s.o)(T),[h,f]=(0,a.useState)("");function p(e){e?(l({lng:e.data.position.lng,lat:e.data.position.lat}),f(e.data.id),(0,E.Sj)(E.U7.MapPreview)):(f(""),(0,E.Sj)(E.U7.MapBrowse))}let g=t.find(e=>e.data.id==h);function m(e){e?(!function(e){let t=z(e,!0);t.hasVisited=!0,t.visitCount+=1,A.notify()}(e.data.id),(0,E.Sj)(E.U7.StationDetails)):(0,E.Sj)(E.U7.MapBrowse)}let x=(0,a.useRef)(null);(0,a.useEffect)(()=>{var e;null===(e=x.current)||void 0===e||e.scrollTo(0,0)},[d]),(0,a.useEffect)(()=>{c==E.U7.MapBrowse&&f("")},[c]);let v=c!=E.U7.MapBrowse,j=!(c==E.U7.MapBrowse||c==E.U7.MapPreview);return(0,r.jsxs)("main",{className:"wrapper",style:{minHeight:"-webkit-fill-available"},children:[(0,r.jsx)("div",{className:"map-wrapper ".concat(j?"active":""),children:(0,r.jsx)(Z,{googleMapsApiKey:n,center:o,stations:t,completedStations:u,selectedStation:g,onStationClick:p})}),(0,r.jsx)("div",{ref:x,className:"panel-wrapper ".concat(v?"active":""),children:(0,r.jsx)(D,{stations:t,completedStations:u,selectedStation:g,onExplore:()=>{m(g)},onClose:()=>{p(null),m(null)}})})]})}},6105:function(e){e.exports={wrapper:"Password_wrapper__OI11T",dots:"Password_dots__s4NDH",dotOn:"Password_dotOn__HZr7U",dotOff:"Password_dotOff__EBd0k",button:"Password_button__naCRh",highlight:"Password_highlight__BOpUI",hold:"Password_hold__E9sUv",previewWrapper:"Password_previewWrapper__itvvj",previewButton:"Password_previewButton__RK6yo",incorrect:"Password_incorrect__iK8IW",Shake:"Password_Shake__Secrx"}},8110:function(e){e.exports={question:"Quiz_question__eEjsW",locked:"Quiz_locked__YKgzj",button:"Quiz_button__KpbrJ",hold:"Quiz_hold__tUaES",selected:"Quiz_selected__i5w4y"}},1864:function(e){!function(){"use strict";var t={114:function(e){function t(e){if("string"!=typeof e)throw TypeError("Path must be a string. Received "+JSON.stringify(e))}function n(e,t){for(var n,i="",r=0,a=-1,s=0,o=0;o<=e.length;++o){if(o<e.length)n=e.charCodeAt(o);else if(47===n)break;else n=47;if(47===n){if(a===o-1||1===s);else if(a!==o-1&&2===s){if(i.length<2||2!==r||46!==i.charCodeAt(i.length-1)||46!==i.charCodeAt(i.length-2)){if(i.length>2){var l=i.lastIndexOf("/");if(l!==i.length-1){-1===l?(i="",r=0):r=(i=i.slice(0,l)).length-1-i.lastIndexOf("/"),a=o,s=0;continue}}else if(2===i.length||1===i.length){i="",r=0,a=o,s=0;continue}}t&&(i.length>0?i+="/..":i="..",r=2)}else i.length>0?i+="/"+e.slice(a+1,o):i=e.slice(a+1,o),r=o-a-1;a=o,s=0}else 46===n&&-1!==s?++s:s=-1}return i}var i={resolve:function(){for(var e,i,r="",a=!1,s=arguments.length-1;s>=-1&&!a;s--)s>=0?i=arguments[s]:(void 0===e&&(e=""),i=e),t(i),0!==i.length&&(r=i+"/"+r,a=47===i.charCodeAt(0));return(r=n(r,!a),a)?r.length>0?"/"+r:"/":r.length>0?r:"."},normalize:function(e){if(t(e),0===e.length)return".";var i=47===e.charCodeAt(0),r=47===e.charCodeAt(e.length-1);return(0!==(e=n(e,!i)).length||i||(e="."),e.length>0&&r&&(e+="/"),i)?"/"+e:e},isAbsolute:function(e){return t(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0==arguments.length)return".";for(var e,n=0;n<arguments.length;++n){var r=arguments[n];t(r),r.length>0&&(void 0===e?e=r:e+="/"+r)}return void 0===e?".":i.normalize(e)},relative:function(e,n){if(t(e),t(n),e===n||(e=i.resolve(e))===(n=i.resolve(n)))return"";for(var r=1;r<e.length&&47===e.charCodeAt(r);++r);for(var a=e.length,s=a-r,o=1;o<n.length&&47===n.charCodeAt(o);++o);for(var l=n.length-o,c=s<l?s:l,d=-1,u=0;u<=c;++u){if(u===c){if(l>c){if(47===n.charCodeAt(o+u))return n.slice(o+u+1);if(0===u)return n.slice(o+u)}else s>c&&(47===e.charCodeAt(r+u)?d=u:0===u&&(d=0));break}var h=e.charCodeAt(r+u);if(h!==n.charCodeAt(o+u))break;47===h&&(d=u)}var f="";for(u=r+d+1;u<=a;++u)(u===a||47===e.charCodeAt(u))&&(0===f.length?f+="..":f+="/..");return f.length>0?f+n.slice(o+d):(o+=d,47===n.charCodeAt(o)&&++o,n.slice(o))},_makeLong:function(e){return e},dirname:function(e){if(t(e),0===e.length)return".";for(var n=e.charCodeAt(0),i=47===n,r=-1,a=!0,s=e.length-1;s>=1;--s)if(47===(n=e.charCodeAt(s))){if(!a){r=s;break}}else a=!1;return -1===r?i?"/":".":i&&1===r?"//":e.slice(0,r)},basename:function(e,n){if(void 0!==n&&"string"!=typeof n)throw TypeError('"ext" argument must be a string');t(e);var i,r=0,a=-1,s=!0;if(void 0!==n&&n.length>0&&n.length<=e.length){if(n.length===e.length&&n===e)return"";var o=n.length-1,l=-1;for(i=e.length-1;i>=0;--i){var c=e.charCodeAt(i);if(47===c){if(!s){r=i+1;break}}else -1===l&&(s=!1,l=i+1),o>=0&&(c===n.charCodeAt(o)?-1==--o&&(a=i):(o=-1,a=l))}return r===a?a=l:-1===a&&(a=e.length),e.slice(r,a)}for(i=e.length-1;i>=0;--i)if(47===e.charCodeAt(i)){if(!s){r=i+1;break}}else -1===a&&(s=!1,a=i+1);return -1===a?"":e.slice(r,a)},extname:function(e){t(e);for(var n=-1,i=0,r=-1,a=!0,s=0,o=e.length-1;o>=0;--o){var l=e.charCodeAt(o);if(47===l){if(!a){i=o+1;break}continue}-1===r&&(a=!1,r=o+1),46===l?-1===n?n=o:1!==s&&(s=1):-1!==n&&(s=-1)}return -1===n||-1===r||0===s||1===s&&n===r-1&&n===i+1?"":e.slice(n,r)},format:function(e){var t,n;if(null===e||"object"!=typeof e)throw TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return t=e.dir||e.root,n=e.base||(e.name||"")+(e.ext||""),t?t===e.root?t+n:t+"/"+n:n},parse:function(e){t(e);var n,i={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return i;var r=e.charCodeAt(0),a=47===r;a?(i.root="/",n=1):n=0;for(var s=-1,o=0,l=-1,c=!0,d=e.length-1,u=0;d>=n;--d){if(47===(r=e.charCodeAt(d))){if(!c){o=d+1;break}continue}-1===l&&(c=!1,l=d+1),46===r?-1===s?s=d:1!==u&&(u=1):-1!==s&&(u=-1)}return -1===s||-1===l||0===u||1===u&&s===l-1&&s===o+1?-1!==l&&(0===o&&a?i.base=i.name=e.slice(1,l):i.base=i.name=e.slice(o,l)):(0===o&&a?(i.name=e.slice(1,s),i.base=e.slice(1,l)):(i.name=e.slice(o,s),i.base=e.slice(o,l)),i.ext=e.slice(s,l)),o>0?i.dir=e.slice(0,o-1):a&&(i.dir="/"),i},sep:"/",delimiter:":",win32:null,posix:null};i.posix=i,e.exports=i}},n={};function i(e){var r=n[e];if(void 0!==r)return r.exports;var a=n[e]={exports:{}},s=!0;try{t[e](a,a.exports,i),s=!1}finally{s&&delete n[e]}return a.exports}i.ab="//";var r=i(114);e.exports=r}()},2746:function(e,t,n){e.exports.jsxRuntime=n(5893)}},function(e){e.O(0,[255,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);