(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2161)}])},2161:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return en},default:function(){return ei}});var i={};n.r(i),n.d(i,{MDXContext:function(){return d},MDXProvider:function(){return m},useMDXComponents:function(){return h},withMDXComponents:function(){return u}});var s=n(5893),a=n(7294),r=n(3218),l=n(5675),o=n.n(l),c=n(2746);let d=a.createContext({});function u(e){return function(t){let n=h(t.components);return a.createElement(e,{...t,allComponents:n})}}function h(e){let t=a.useContext(d);return a.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let f={};function m({components:e,children:t,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||f:h(e),a.createElement(d.Provider,{value:i},t)}function g({compiledSource:e,frontmatter:t,scope:n,components:s={},lazy:r}){let[l,o]=(0,a.useState)(!r||"undefined"==typeof window);(0,a.useEffect)(()=>{if(r){let e=window.requestIdleCallback(()=>{o(!0)});return()=>window.cancelIdleCallback(e)}},[]);let d=(0,a.useMemo)(()=>{let s=Object.assign({opts:{...i,...c.jsxRuntime}},{frontmatter:t},n),a=Object.keys(s),r=Object.values(s),l=Reflect.construct(Function,a.concat(`${e}`));return l.apply(l,r).default},[n,e]);if(!l)return a.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});let u=a.createElement(m,{components:s},a.createElement(d,null));return r?a.createElement("div",null,u):u}"undefined"!=typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(e){var t=Date.now();return setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)}),n(1864);var p={src:"/_next/static/media/play.9268550d.svg",height:800,width:800,blurWidth:0,blurHeight:0};function x(e){let{src:t}=e,[n,i]=(0,a.useState)(!1);return(0,s.jsxs)("div",{className:"video-wrapper",children:[(0,s.jsxs)("video",{onClick:function(e){let{target:t}=e;t.paused?t.play():t.pause(),i(!t.paused)},playsInline:!0,children:[(0,s.jsx)("source",{src:t,type:"video/mp4"}),"Your browser does not support the video tag."]}),!n&&(0,s.jsx)("div",{className:"video-playbutton",children:(0,s.jsx)(o(),{alt:"play",src:p})})]})}var v=n(6105),j=n.n(v);function w(e){let{symbols:t,password:n,onSuccess:i}=e,[r,l]=(0,a.useState)([]);function o(e){var t,s;let a=r.concat([e]);a.length<n.length?null===(t=c.current)||void 0===t||t.classList.remove(j().incorrect):a.length>=n.length&&(JSON.stringify(a)==JSON.stringify(n)?i():(null===(s=c.current)||void 0===s||s.classList.add(j().incorrect),a=[])),l(a)}let c=(0,a.useRef)(null);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:j().dots,ref:c,children:n.map((e,t)=>(0,s.jsx)("div",{className:r.length>t?j().dotOn:j().dotOff},e))}),(0,s.jsx)("div",{className:j().wrapper,children:t.map(e=>(0,s.jsx)(b,{symbol:e,highlight:r.includes(e),addInput:o},e))})]})}function b(e){let{symbol:t,highlight:n,addInput:i}=e,[r,l]=(0,a.useState)(!1);function c(){r&&(i(t),l(!1))}return(0,s.jsx)("div",{className:"".concat(j().button," ").concat(r&&j().hold," ").concat(n&&j().highlight),onPointerDown:()=>l(!0),onTouchStart:()=>l(!0),onMouseLeave:()=>l(!1),onPointerUp:c,onTouchEnd:c,onContextMenu:e=>e.preventDefault(),children:(0,s.jsx)(o(),{width:64,height:64,alt:t,src:"/symbols/".concat(t,".svg")})})}function _(e){let{symbols:t,password:n}=e;return(0,s.jsx)("div",{className:j().previewWrapper,children:n.map(e=>(0,s.jsx)("div",{className:j().previewButton,children:(0,s.jsx)(o(),{width:64,height:64,alt:e,src:"/symbols/".concat(e,".svg")})},e))})}var k=n(4306),y=n(175);let C=(e,t,n,i)=>(e.events=e.events||{},e.events[n+10]||(e.events[n+10]=i(t=>{e.events[n].reduceRight((e,t)=>(t(e),e),{shared:{},...t})})),e.events[n]=e.events[n]||[],e.events[n].push(t),()=>{let i=e.events[n],s=i.indexOf(t);i.splice(s,1),i.length||(delete e.events[n],e.events[n+10](),delete e.events[n+10])}),N=(e,t)=>{let n=n=>{let i=t(n);i&&e.events[6].push(i)};return C(e,n,5,t=>{let n=e.listen;e.listen=(...i)=>(e.lc||e.active||(e.active=!0,t()),n(...i));let i=e.off;return e.events[6]=[],e.off=()=>{i(),setTimeout(()=>{if(e.active&&!e.lc){for(let t of(e.active=!1,e.events[6]))t();e.events[6]=[]}},1e3)},()=>{e.listen=n,e.off=i}})},S=(e,t)=>{let n;Array.isArray(e)||(e=[e]);let i=[],s=()=>{let s=e.map(e=>e.get());(n!==y.y||s.some((e,t)=>e!==i[t]))&&(n=y.y,i=s,a.set(t(...s)))},a=(0,y.c)(void 0,Math.max(...e.map(e=>e.l))+1);return N(a,()=>{let t=e.map(e=>e.listen(s,a.l));return s(),()=>{for(let e of t)e()}}),a},z=(0,y.c)([]);function A(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=z.get().find(t=>t.id==e);if(n)return n;let i={id:e,hasVisited:!1,visitCount:0,passwordCorrect:!1,quiz:{answers:[],correct:[],submitted:!1}};return t&&z.set([...z.get(),i]),i}function R(e,t,n,i){let s=A(e,!0);s.quiz.answers[t]=n,s.quiz.correct[t]=i,z.notify()}let q=S(z,e=>e.filter(e=>e.hasVisited));S(z,e=>e.filter(e=>e.passwordCorrect));let P=S(z,e=>e.filter(e=>e.quiz.submitted));var T=n(7904),E=n(8110),O=n.n(E);function M(e){let{stationId:t,questions:n,onComplete:i}=e,a=(0,r.o)(q),l=a.find(e=>e.id==t),o=0;if(l)for(let e of l.quiz.answers)if(-1!=e&&null!=e)o++;else break;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("p",{children:"Du hittar svaren till fr\xe5gorna runt omkring dig och i texten i din telefon."}),(0,s.jsx)("hr",{}),n.map((e,i)=>(0,s.jsx)(U,{stationId:t,question:e,index:i,max:n.length,selected:l?l.quiz.answers[i]:-1,locked:i>o},i)),(0,s.jsx)(k.Xh,{onClick:()=>i("result"),enabled:o==n.length,children:"Kontrollera svar"})]})}function U(e){let{stationId:t,question:n,index:i,max:a,selected:r,locked:l}=e,c=n.options.every(e=>e.length<=14);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"".concat(O().question," ").concat(l?O().locked:""),children:[(0,s.jsxs)("h5",{className:"font-black",children:["Fr\xe5ga ",i+1," av ",a]}),n.image&&(0,s.jsx)(o(),{width:520,height:250,alt:n.image,src:n.image}),(0,s.jsx)("h3",{className:"mt-6 mb-6",children:n.question}),(0,s.jsx)("div",{className:"grid gap-x-4 gap-y-4 ".concat(c?"grid-cols-2":"grid-cols-1"),children:n.options.map((e,a)=>(0,s.jsx)(I,{correct:n.correct-1==a,selected:r==a,onSelect:()=>(function(e){if(r!=e){let s=n.correct-1==e;R(t,i,e,s)}else R(t,i,-1,!1)})(a),children:e},a))})]}),(0,s.jsx)("hr",{})]})}function I(e){let{children:t,correct:n,selected:i,onSelect:r}=e,[l,o]=(0,a.useState)(!1);function c(){l&&(r(),o(!1))}return(0,s.jsx)("div",{className:"".concat(O().button," ").concat(l&&O().hold," ").concat(i&&O().selected),onPointerDown:()=>o(!0),onTouchStart:()=>o(!0),onMouseLeave:()=>o(!1),onTouchMove:()=>o(!1),onPointerUp:c,onTouchEnd:c,onContextMenu:e=>e.preventDefault(),children:[...t]})}var D=n(5750),F=n.n(D),K={src:"/_next/static/media/circle-xmark.19ed2214.svg",height:512,width:512,blurWidth:0,blurHeight:0},B={src:"/_next/static/media/circle-check.b3ec435b.svg",height:512,width:512,blurWidth:0,blurHeight:0},L={src:"/_next/static/media/circle.145df54c.svg",height:512,width:512,blurWidth:0,blurHeight:0},W={src:"/_next/static/media/chevron-down.3a9e37a8.svg",height:512,width:512,blurWidth:0,blurHeight:0};function X(e){let{stationId:t,questions:n,onComplete:i}=e,a=(0,r.o)(q),l=a.find(e=>e.id==t);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("hr",{}),n.map((e,i)=>(0,s.jsx)(H,{stationId:t,question:e,index:i,max:n.length,answer:l?l.quiz.answers[i]:-1},i))]})}function H(e){let{stationId:t,question:n,index:i,max:r,answer:l}=e,[c,d]=(0,a.useState)(l!=n.correct-1);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"".concat(F().question," ").concat(c?"py-4":"my-0"),onClick:()=>d(!0),children:[(0,s.jsx)("h4",{className:"mt-0 mb-4",children:n.question}),(0,s.jsx)("div",{className:"grid gap-y-0.5 grid-cols-1",children:n.options.map((e,t)=>(0,s.jsx)(Q,{correct:n.correct-1==t,answer:l==t,showAll:c,children:e},t))})]}),!c&&(0,s.jsx)(o(),{width:"64",height:"64",alt:"Se alla alternativ",src:W,className:"m-auto w-3 mt-1 opacity-50"}),(0,s.jsx)("hr",{})]})}function Q(e){let{children:t,correct:n,answer:i,showAll:a}=e,r=!n&&i;return(0,s.jsx)(s.Fragment,{children:a||i?(0,s.jsxs)("div",{className:"".concat(F().button," ").concat(n&&F().correct," ").concat(r&&F().incorrect),children:[n?(0,s.jsx)(o(),{width:"64",height:"64",alt:"R\xe4tt svar",src:B,className:F().icon}):r?(0,s.jsx)(o(),{width:"64",height:"64",alt:"Fel svar",src:K,className:F().icon}):(0,s.jsx)(o(),{width:"64",height:"64",alt:"Fel svar",src:L,className:"".concat(F().icon," opacity-20")}),...t]}):(0,s.jsx)(s.Fragment,{})})}function Z(e){let{stations:t,completedStations:n,selectedStation:i,onExplore:l,onClose:c}=e,d=(0,r.o)(T.b9),u=n.length==t.length&&n.every(e=>e.quiz.submitted);(0,a.useEffect)(()=>{if(i){let e=A(i.data.id);e.passwordCorrect?(0,T.YZ)(T.KR.Information):(0,T.YZ)(T.KR.Password)}},[d,i]);let h=t.reduce((e,t)=>e+t.data.quiz.length,0),f=n.reduce((e,t)=>e+t.quiz.correct.filter(e=>e).length,0);return(0,s.jsxs)("div",{className:"panel-content",children:[(0,s.jsx)("div",{className:"flex flex-col h-full justify-center ".concat(d!=T.U7.MapBrowse?"hidden":""),children:u?(0,s.jsxs)("div",{className:"m-6 pb-2",children:[(0,s.jsx)("h3",{className:"mt-3",children:"Du har funnit alla stationer!"}),(0,s.jsx)(k.Xh,{onClick:()=>(0,T.Sj)(T.U7.VictoryScreen),children:"Se resultat"})]}):(0,s.jsx)("div",{className:"m-6 font-extrabold",children:"Tryck p\xe5 en station"})}),t.map(e=>{var t;return d==T.U7.MapPreview&&e==i&&(0,s.jsxs)("div",{className:"panel-preview-wrapper",children:[(0,s.jsx)("span",{className:"panel-preview-title",children:e.data.name}),(null===(t=A(e.data.id))||void 0===t?void 0:t.passwordCorrect)?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("p",{children:"Du har redan l\xe5st upp den h\xe4r stationen!"}),(0,s.jsx)(_,{symbols:e.data.symbols||[],password:e.data.password||[]}),(0,s.jsx)("div",{className:"mb-6",children:(0,s.jsx)(k.Xh,{onClick:l,children:"Forts\xe4tt utforska"})})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"panel-preview-image-wrapper",children:(0,s.jsx)(o(),{width:512,height:512,className:"panel-preview-image",alt:e.data.icon,src:e.data.icon})}),(0,s.jsxs)("div",{className:"mb-6",children:[(0,s.jsx)("p",{className:"panel-preview-brief",children:e.data.brief}),(0,s.jsx)(k.Xh,{onClick:l,children:"L\xe5s upp"})]})]}),(0,s.jsx)(k.PZ,{onClick:c,children:"\xd7"})]},e.data.id+"preview")}),t.map(e=>d==T.U7.StationDetails&&e==i&&(0,s.jsx)("div",{className:"p-4 pt-8",children:(0,s.jsx)(G,{station:e,atom:A(e.data.id),onClose:c})},e.data.id+"detail")),(0,s.jsx)("div",{className:"flex flex-col h-full justify-center ".concat(d!=T.U7.VictoryScreen?"hidden":""),children:(0,s.jsxs)("div",{className:"p-4 pt-8",children:[(0,s.jsx)(o(),{width:520,height:250,alt:"Result image",src:"/stations/stad/media/Linderossvin.jpg"}),(0,s.jsx)("h1",{children:"Grattis!"}),(0,s.jsx)("h3",{children:"Du har utforskat alla stationer!"}),(0,s.jsxs)("h4",{className:"mt-0",children:["Ditt samlade resultat \xe4r ",f," r\xe4tt av ",h," fr\xe5gor."]}),(0,s.jsx)("hr",{}),(0,s.jsx)("p",{children:"Tack f\xf6r att du vill l\xe4ra dig mer!"}),(0,s.jsx)("p",{children:"Den biologiska m\xe5ngfalden i naturen \xe4r fantastiskt! Tillsammans kan vi g\xf6ra skillnad f\xf6r alla djur, insekter och v\xe4xter som vi delar v\xe5r planet med!"}),(0,s.jsxs)("div",{className:"mt-12 mb-8",children:[(0,s.jsx)(k.Xh,{onClick:()=>window.open("https://skansen.se/skansens-quiz/","_blank"),children:"Svara p\xe5 v\xe5r enk\xe4t"}),(0,s.jsx)("br",{}),(0,s.jsx)(k.Av,{onClick:()=>(0,T.Sj)(T.U7.MapBrowse),children:"G\xe5 till karta"})]})]})})]})}function G(e){let{station:t,atom:n,onClose:i}=e,a=(0,r.o)(T.WG);function l(){!function(e){let t=A(e,!0);t.quiz.submitted=!0,z.notify()}(t.data.id),(0,T.YZ)(T.KR.Result)}let c=n.quiz.correct.filter(Boolean).length;return(0,s.jsxs)(s.Fragment,{children:[a==T.KR.Password&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h1",{className:"mt-0",children:"Tryck in r\xe4tt kod"}),(0,s.jsx)("p",{className:"leading-5",children:"Du hittar koden vid stationen. Tryck in symbolerna i r\xe4tt ordning f\xf6r att l\xe5sa upp stationen. Lycka till!"}),(0,s.jsx)(w,{symbols:t.data.symbols||[],password:t.data.password||[],onSuccess:function(){!function(e){let t=A(e,!0);t.passwordCorrect=!0,z.notify()}(t.data.id),(0,T.YZ)(T.KR.Information)}}),(0,s.jsx)(k.Xh,{onClick:i,children:"G\xe5 tillbaka"})]}),a==T.KR.Information&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o(),{width:256,height:256,className:"w-auto m-auto h-24",alt:t.data.icon,src:t.data.icon}),(0,s.jsx)("div",{className:"text-left",children:(0,s.jsx)(g,{...t.content,components:(t.mdxPath,{Video:x})})}),(0,s.jsxs)("div",{className:"mt-12 mb-8",children:[n.quiz.submitted?(0,s.jsx)(k.Xh,{onClick:()=>(0,T.YZ)(T.KR.Result),children:"Se dina svar"}):(0,s.jsx)(k.Xh,{onClick:()=>(0,T.YZ)(T.KR.Quiz),children:"Starta quiz"}),(0,s.jsx)("br",{}),(0,s.jsx)(k.Av,{onClick:i,children:"G\xe5 tillbaka till kartan"})]})]}),a==T.KR.Quiz&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(M,{stationId:t.data.id,questions:t.data.quiz,onComplete:l}),(0,s.jsx)("div",{className:"mt-12 mb-8",children:(0,s.jsx)(k.Av,{onClick:()=>(0,T.YZ)(T.KR.Information),children:"G\xe5 tillbaka"})})]}),a==T.KR.Result&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o(),{width:520,height:250,alt:"Ditt resultat",src:c>=4?"/images/animals/Berguv.jpg":3==c?"/images/animals/Kaniner.jpg":2==c?"/images/animals/Asenfar2.jpg":1==c?"/images/animals/Utter.jpg":"/images/animals/Visent.jpg"}),(0,s.jsx)("h1",{children:"Resultat"}),(0,s.jsxs)("h3",{className:"mt-0",children:["Du svarade r\xe4tt p\xe5 ",c," av ",n.quiz.correct.length," fr\xe5gor!"]}),(0,s.jsx)(X,{stationId:t.data.id,questions:t.data.quiz,onComplete:l}),(0,s.jsx)("div",{className:"mt-12 mb-8",children:(0,s.jsx)(k.Xh,{onClick:()=>(0,T.Sj)(T.U7.MapBrowse),children:"G\xe5 till karta"})})]}),(0,s.jsx)(k.PZ,{onClick:i,children:"\xd7"})]})}var Y=n(7054),J={src:"/_next/static/media/location_blue.258ec806.svg",height:200,width:200,blurWidth:0,blurHeight:0};function V(){let[e,t]=(0,a.useState)(!1),[n,i]=(0,a.useState)({lat:0,lng:0}),[r,l]=(0,a.useState)(100);return(0,a.useEffect)(()=>{navigator.geolocation?navigator.geolocation.watchPosition(e=>{console.log("LOCATION",e,e.coords.accuracy),i({lat:e.coords.latitude,lng:e.coords.longitude}),l(e.coords.accuracy),t(!0)},e=>{},{enableHighAccuracy:!0,timeout:5e3,maximumAge:0}):console.error("Unable to use geolocation")},[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(Y.Cd,{options:{center:n,fillColor:"#4185f5",fillOpacity:.25,radius:r,strokeColor:"#4185f5",strokeOpacity:.5,strokeWeight:2,visible:e}}),(0,s.jsx)(Y.Jx,{position:n,options:{icon:{url:J.src,scaledSize:new google.maps.Size(50,50),anchor:new google.maps.Point(25,25)}}})]})}var $={src:"/_next/static/media/geoTag-check.7f81f4a3.svg",height:175,width:118,blurWidth:0,blurHeight:0};let ee={width:"100%",height:"100%"};function et(e){let{googleMapsApiKey:t,center:n,stations:i,completedStations:r,selectedStation:l,onStationClick:o}=e,{isLoaded:c}=(0,Y.Ji)({id:"google-map-script",googleMapsApiKey:t}),[d,u]=(0,a.useState)(null),h=(0,a.useCallback)(function(e){let t=new window.google.maps.LatLngBounds(new google.maps.LatLng(59.323,18.0979),new google.maps.LatLng(59.3307,18.1122));e.fitBounds(t,0),e.panTo(n),u(e)},[n]),f=(0,a.useCallback)(function(e){u(null)},[]),m={north:59.330333,south:59.322608,east:18.112642,west:18.0969};return m.north,m.south,m.east,m.west,l&&(l.data.position.lat,l.data.position.lat,l.data.position.lng,l.data.position.lng),null==d||d.panTo(n),null==d||d.setOptions({gestureHandling:l?"none":"greedy",maxZoom:19}),c?(0,s.jsx)("div",{className:"map-container",children:(0,s.jsxs)(Y.b6,{mapContainerStyle:ee,zoom:11,heading:90,tilt:45,onLoad:h,onUnmount:f,options:{controlSize:null,disableDefaultUI:!0,styles:[{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]}]},children:[(0,s.jsx)(Y.$e,{url:"/Skansen_map_georeff_v1.png",bounds:m,opacity:1,onClick:()=>{o(null)}},"url"),i.map(e=>(0,s.jsx)(Y.Jx,{position:e.data.position,onClick:()=>{o(e)},animation:l==e?google.maps.Animation.BOUNCE:void 0,options:{icon:{url:r.find(t=>t.id==e.data.id)?$.src:e.data.pin,scaledSize:new google.maps.Size(80,80),anchor:new google.maps.Point(40,80)}},children:(0,s.jsx)("p",{children:e.data.name})},e.data.name)),(0,s.jsx)(V,{})]})}):(0,s.jsx)(s.Fragment,{})}var en=!0;function ei(e){let{stations:t,googleMapsApiKey:n,test:i}=e,[l,o]=(0,a.useState)({lat:59.32650223048287,lng:18.10463536192017}),c=(0,r.o)(T.b9),d=(0,r.o)(T.WG),u=(0,r.o)(P),[h,f]=(0,a.useState)("");function m(e){e?(o({lng:e.data.position.lng,lat:e.data.position.lat}),f(e.data.id),(0,T.Sj)(T.U7.MapPreview)):(f(""),(0,T.Sj)(T.U7.MapBrowse))}let g=t.find(e=>e.data.id==h);function p(e){e?(!function(e){let t=A(e,!0);t.hasVisited=!0,t.visitCount+=1,z.notify()}(e.data.id),(0,T.Sj)(T.U7.StationDetails)):(0,T.Sj)(T.U7.MapBrowse)}let x=(0,a.useRef)(null);(0,a.useEffect)(()=>{var e;null===(e=x.current)||void 0===e||e.scrollTo(0,0)},[d]),(0,a.useEffect)(()=>{c==T.U7.MapBrowse&&f("")},[c]);let v=c!=T.U7.MapBrowse,j=!(c==T.U7.MapBrowse||c==T.U7.MapPreview);return(0,s.jsxs)("main",{className:"wrapper",style:{minHeight:"-webkit-fill-available"},children:[(0,s.jsx)("div",{className:"map-wrapper ".concat(j?"active":""),children:(0,s.jsx)(et,{googleMapsApiKey:n,center:l,stations:t,completedStations:u,selectedStation:g,onStationClick:m})}),(0,s.jsx)("div",{ref:x,className:"panel-wrapper ".concat(v?"active":""," ").concat(j?"fullscreen":""),children:(0,s.jsx)(Z,{stations:t,completedStations:u,selectedStation:g,onExplore:()=>{p(g)},onClose:()=>{m(null),p(null)}})})]})}},6105:function(e){e.exports={wrapper:"Password_wrapper__OI11T",dots:"Password_dots__s4NDH",dotOn:"Password_dotOn__HZr7U",dotOff:"Password_dotOff__EBd0k",button:"Password_button__naCRh",highlight:"Password_highlight__BOpUI",hold:"Password_hold__E9sUv",previewWrapper:"Password_previewWrapper__itvvj",previewButton:"Password_previewButton__RK6yo",incorrect:"Password_incorrect__iK8IW",Shake:"Password_Shake__Secrx"}},8110:function(e){e.exports={question:"Quiz_question__eEjsW",locked:"Quiz_locked__YKgzj",button:"Quiz_button__KpbrJ",hold:"Quiz_hold__tUaES",selected:"Quiz_selected__i5w4y"}},5750:function(e){e.exports={question:"QuizResults_question__tA37p",locked:"QuizResults_locked__8E4s2",button:"QuizResults_button__9vo_g",correct:"QuizResults_correct__O_Rhd",incorrect:"QuizResults_incorrect__s0aGb",icon:"QuizResults_icon__p7Lo5"}},1864:function(e){!function(){"use strict";var t={114:function(e){function t(e){if("string"!=typeof e)throw TypeError("Path must be a string. Received "+JSON.stringify(e))}function n(e,t){for(var n,i="",s=0,a=-1,r=0,l=0;l<=e.length;++l){if(l<e.length)n=e.charCodeAt(l);else if(47===n)break;else n=47;if(47===n){if(a===l-1||1===r);else if(a!==l-1&&2===r){if(i.length<2||2!==s||46!==i.charCodeAt(i.length-1)||46!==i.charCodeAt(i.length-2)){if(i.length>2){var o=i.lastIndexOf("/");if(o!==i.length-1){-1===o?(i="",s=0):s=(i=i.slice(0,o)).length-1-i.lastIndexOf("/"),a=l,r=0;continue}}else if(2===i.length||1===i.length){i="",s=0,a=l,r=0;continue}}t&&(i.length>0?i+="/..":i="..",s=2)}else i.length>0?i+="/"+e.slice(a+1,l):i=e.slice(a+1,l),s=l-a-1;a=l,r=0}else 46===n&&-1!==r?++r:r=-1}return i}var i={resolve:function(){for(var e,i,s="",a=!1,r=arguments.length-1;r>=-1&&!a;r--)r>=0?i=arguments[r]:(void 0===e&&(e=""),i=e),t(i),0!==i.length&&(s=i+"/"+s,a=47===i.charCodeAt(0));return(s=n(s,!a),a)?s.length>0?"/"+s:"/":s.length>0?s:"."},normalize:function(e){if(t(e),0===e.length)return".";var i=47===e.charCodeAt(0),s=47===e.charCodeAt(e.length-1);return(0!==(e=n(e,!i)).length||i||(e="."),e.length>0&&s&&(e+="/"),i)?"/"+e:e},isAbsolute:function(e){return t(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0==arguments.length)return".";for(var e,n=0;n<arguments.length;++n){var s=arguments[n];t(s),s.length>0&&(void 0===e?e=s:e+="/"+s)}return void 0===e?".":i.normalize(e)},relative:function(e,n){if(t(e),t(n),e===n||(e=i.resolve(e))===(n=i.resolve(n)))return"";for(var s=1;s<e.length&&47===e.charCodeAt(s);++s);for(var a=e.length,r=a-s,l=1;l<n.length&&47===n.charCodeAt(l);++l);for(var o=n.length-l,c=r<o?r:o,d=-1,u=0;u<=c;++u){if(u===c){if(o>c){if(47===n.charCodeAt(l+u))return n.slice(l+u+1);if(0===u)return n.slice(l+u)}else r>c&&(47===e.charCodeAt(s+u)?d=u:0===u&&(d=0));break}var h=e.charCodeAt(s+u);if(h!==n.charCodeAt(l+u))break;47===h&&(d=u)}var f="";for(u=s+d+1;u<=a;++u)(u===a||47===e.charCodeAt(u))&&(0===f.length?f+="..":f+="/..");return f.length>0?f+n.slice(l+d):(l+=d,47===n.charCodeAt(l)&&++l,n.slice(l))},_makeLong:function(e){return e},dirname:function(e){if(t(e),0===e.length)return".";for(var n=e.charCodeAt(0),i=47===n,s=-1,a=!0,r=e.length-1;r>=1;--r)if(47===(n=e.charCodeAt(r))){if(!a){s=r;break}}else a=!1;return -1===s?i?"/":".":i&&1===s?"//":e.slice(0,s)},basename:function(e,n){if(void 0!==n&&"string"!=typeof n)throw TypeError('"ext" argument must be a string');t(e);var i,s=0,a=-1,r=!0;if(void 0!==n&&n.length>0&&n.length<=e.length){if(n.length===e.length&&n===e)return"";var l=n.length-1,o=-1;for(i=e.length-1;i>=0;--i){var c=e.charCodeAt(i);if(47===c){if(!r){s=i+1;break}}else -1===o&&(r=!1,o=i+1),l>=0&&(c===n.charCodeAt(l)?-1==--l&&(a=i):(l=-1,a=o))}return s===a?a=o:-1===a&&(a=e.length),e.slice(s,a)}for(i=e.length-1;i>=0;--i)if(47===e.charCodeAt(i)){if(!r){s=i+1;break}}else -1===a&&(r=!1,a=i+1);return -1===a?"":e.slice(s,a)},extname:function(e){t(e);for(var n=-1,i=0,s=-1,a=!0,r=0,l=e.length-1;l>=0;--l){var o=e.charCodeAt(l);if(47===o){if(!a){i=l+1;break}continue}-1===s&&(a=!1,s=l+1),46===o?-1===n?n=l:1!==r&&(r=1):-1!==n&&(r=-1)}return -1===n||-1===s||0===r||1===r&&n===s-1&&n===i+1?"":e.slice(n,s)},format:function(e){var t,n;if(null===e||"object"!=typeof e)throw TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return t=e.dir||e.root,n=e.base||(e.name||"")+(e.ext||""),t?t===e.root?t+n:t+"/"+n:n},parse:function(e){t(e);var n,i={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return i;var s=e.charCodeAt(0),a=47===s;a?(i.root="/",n=1):n=0;for(var r=-1,l=0,o=-1,c=!0,d=e.length-1,u=0;d>=n;--d){if(47===(s=e.charCodeAt(d))){if(!c){l=d+1;break}continue}-1===o&&(c=!1,o=d+1),46===s?-1===r?r=d:1!==u&&(u=1):-1!==r&&(u=-1)}return -1===r||-1===o||0===u||1===u&&r===o-1&&r===l+1?-1!==o&&(0===l&&a?i.base=i.name=e.slice(1,o):i.base=i.name=e.slice(l,o)):(0===l&&a?(i.name=e.slice(1,r),i.base=e.slice(1,o)):(i.name=e.slice(l,r),i.base=e.slice(l,o)),i.ext=e.slice(r,o)),l>0?i.dir=e.slice(0,l-1):a&&(i.dir="/"),i},sep:"/",delimiter:":",win32:null,posix:null};i.posix=i,e.exports=i}},n={};function i(e){var s=n[e];if(void 0!==s)return s.exports;var a=n[e]={exports:{}},r=!0;try{t[e](a,a.exports,i),r=!1}finally{r&&delete n[e]}return a.exports}i.ab="//";var s=i(114);e.exports=s}()},2746:function(e,t,n){e.exports.jsxRuntime=n(5893)}},function(e){e.O(0,[255,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);