(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[660],{7500:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/qr",function(){return n(6824)}])},1516:function(e,t){"use strict";function n(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return j}});let r=n(4788),o=n(8754),l=n(224),u=o._(n(7294)),a=n(4532),f=n(3353),c=n(1410),i=n(9064),s=n(370),d=n(9955),p=n(4224),h=n(508),y=n(1516),b=n(4266),v=new Set;function g(e,t,n,r,o){if(o||(0,f.isLocalURL)(t)){if(!r.bypassPrefetchedCheck){let o=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,l=t+"%"+n+"%"+o;if(v.has(l))return;v.add(l)}Promise.resolve(e.prefetch(t,n,r)).catch(e=>{})}}function m(e){return"string"==typeof e?e:(0,c.formatUrl)(e)}let _=u.default.forwardRef(function(e,t){let n,o;let{href:c,as:v,children:_,prefetch:j,passHref:x,replace:M,shallow:C,scroll:P,locale:k,onClick:E,onMouseEnter:O,onTouchStart:w,legacyBehavior:N=!1}=e,L=l._(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=_,N&&("string"==typeof n||"number"==typeof n)&&(n=u.default.createElement("a",null,n));let R=!1!==j,T=u.default.useContext(d.RouterContext),I=u.default.useContext(p.AppRouterContext),S=null!=T?T:I,A=!T,{href:U,as:D}=u.default.useMemo(()=>{if(!T){let e=m(c);return{href:e,as:v?m(v):e}}let[e,t]=(0,a.resolveHref)(T,c,!0);return{href:e,as:v?(0,a.resolveHref)(T,v):t||e}},[T,c,v]),K=u.default.useRef(U),q=u.default.useRef(D);N&&(o=u.default.Children.only(n));let H=N?o&&"object"==typeof o&&o.ref:t,[B,X,z]=(0,h.useIntersection)({rootMargin:"200px"}),F=u.default.useCallback(e=>{(q.current!==D||K.current!==U)&&(z(),q.current=D,K.current=U),B(e),H&&("function"==typeof H?H(e):"object"==typeof H&&(H.current=e))},[D,H,U,z,B]);u.default.useEffect(()=>{S&&X&&R&&g(S,U,D,{locale:k},A)},[D,U,X,k,R,null==T?void 0:T.locale,S,A]);let G={ref:F,onClick(e){N||"function"!=typeof E||E(e),N&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),S&&!e.defaultPrevented&&function(e,t,n,r,o,l,a,c,i,s){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!i&&!(0,f.isLocalURL)(n)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:l,locale:c,scroll:a}):t[o?"replace":"push"](r||n,{forceOptimisticNavigation:!s})};i?u.default.startTransition(h):h()}(e,S,U,D,M,C,P,k,A,R)},onMouseEnter(e){N||"function"!=typeof O||O(e),N&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),S&&(R||!A)&&g(S,U,D,{locale:k,priority:!0,bypassPrefetchedCheck:!0},A)},onTouchStart(e){N||"function"!=typeof w||w(e),N&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),S&&(R||!A)&&g(S,U,D,{locale:k,priority:!0,bypassPrefetchedCheck:!0},A)}};if((0,i.isAbsoluteUrl)(D))G.href=D;else if(!N||x||"a"===o.type&&!("href"in o.props)){let e=void 0!==k?k:null==T?void 0:T.locale,t=(null==T?void 0:T.isLocaleDomain)&&(0,y.getDomainLocale)(D,e,null==T?void 0:T.locales,null==T?void 0:T.domainLocales);G.href=t||(0,b.addBasePath)((0,s.addLocale)(D,e,null==T?void 0:T.defaultLocale))}return N?u.default.cloneElement(o,G):u.default.createElement("a",r._({},L,G),n)}),j=_;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return f}});let r=n(7294),o=n(29),l="function"==typeof IntersectionObserver,u=new Map,a=[];function f(e){let{rootRef:t,rootMargin:n,disabled:f}=e,c=f||!l,[i,s]=(0,r.useState)(!1),d=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{d.current=e},[]);(0,r.useEffect)(()=>{if(l){if(c||i)return;let e=d.current;if(e&&e.tagName){let r=function(e,t,n){let{id:r,observer:o,elements:l}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=a.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=u.get(r)))return t;let o=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:l,elements:o},a.push(n),u.set(n,t),t}(n);return l.set(e,t),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),u.delete(r);let e=a.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!i){let e=(0,o.requestIdleCallback)(()=>s(!0));return()=>(0,o.cancelIdleCallback)(e)}},[c,n,t,i,d.current]);let h=(0,r.useCallback)(()=>{s(!1)},[]);return[p,i,h]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6824:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(5893),o=n(1664),l=n.n(o);function u(){let e="bg-amber-500 text-lg col-span-4 px-4 py-2 rounded-lg hover:bg-amber-400";return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("main",{className:"p-24",children:(0,r.jsxs)("div",{className:"flex flex-row justify-evenly",children:[(0,r.jsx)(l(),{href:"/map",className:e,children:"Google Maps interaction"}),(0,r.jsx)(l(),{href:"/qr",className:e,children:"QR code scanning"}),(0,r.jsx)(l(),{href:"/markdown",className:e,children:"Markdown content"}),(0,r.jsx)(l(),{href:"/api",className:e,children:"Session API"})]})})})}},1664:function(e,t,n){e.exports=n(5569)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=7500)}),_N_E=e.O()}]);