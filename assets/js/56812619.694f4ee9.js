/*! For license information please see 56812619.694f4ee9.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6409],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(r),f=n,b=u["".concat(c,".").concat(f)]||u[f]||m[f]||o;return r?a.createElement(b,l(l({ref:t},p),{},{components:r})):a.createElement(b,l({ref:t},p))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6303:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var a=r(7462),n=(r(7294),r(3905)),o=r(640);const l={slug:"atomic-habits",title:"Atomic Habits",tags:["til","psychology","self-help"]},i=void 0,c={permalink:"/blog/atomic-habits",source:"@site/blog/2023-04-12-atomic-habits.mdx",title:"Atomic Habits",description:"Summary of book Atomic Habits.",date:"2023-04-12T00:00:00.000Z",formattedDate:"April 12, 2023",tags:[{label:"til",permalink:"/blog/tags/til"},{label:"psychology",permalink:"/blog/tags/psychology"},{label:"self-help",permalink:"/blog/tags/self-help"}],readingTime:5.88,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"atomic-habits",title:"Atomic Habits",tags:["til","psychology","self-help"]},nextItem:{title:"The Art of Writing Software",permalink:"/blog/art-of-writing-software"}},s={authorsImageUrls:[]},p=[],u={toc:p},m="wrapper";function f(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Summary of book Atomic Habits."),(0,n.kt)("p",null,"You are your habits(We are the sum of our habits)."),(0,n.kt)("p",null,"How to build good habits and break bad ones?"),(0,n.kt)("p",null,"How to make the small changes that will transform your habits and deliver\nremarkable results?"),(0,n.kt)("p",null,"How to build a system for getting 1% better every day?"),(0,n.kt)("div",{className:"video-container"},(0,n.kt)(o.Z,{id:"PZ7lDrwYdZc",params:"autoplay=1&autohide=1&showinfo=1&rel=0",title:"How to become 37.78 times better at anything",poster:"maxresdefault",webp:!0,mdxType:"LiteYouTubeEmbed"})))}f.isMDXComponent=!0},640:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(7294),n=function(){return n=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},n.apply(this,arguments)};function o(e){var t=a.useState(!1),r=t[0],o=t[1],l=a.useState(!1),i=l[0],c=l[1],s=encodeURIComponent(e.id),p="string"==typeof e.playlistCoverId?encodeURIComponent(e.playlistCoverId):null,u=e.title,m=e.poster||"hqdefault",f="&"+e.params||0,b=e.muted?"&mute=1":"",y=e.announce||"Watch",d=e.webp?"webp":"jpg",g=e.webp?"vi_webp":"vi",h=e.thumbnail||(e.playlist?"https://i.ytimg.com/"+g+"/"+p+"/"+m+"."+d:"https://i.ytimg.com/"+g+"/"+s+"/"+m+"."+d),w=e.noCookie;w=e.cookie?"https://www.youtube.com":"https://www.youtube-nocookie.com";var v=e.playlist?w+"/embed/videoseries?autoplay=1"+b+"&list="+s+f:w+"/embed/"+s+"?autoplay=1&state=1"+b+f,k=e.activatedClass||"lyt-activated",O=e.adNetwork||!1,E=e.aspectHeight||9,j=e.aspectWidth||16,C=e.iframeClass||"",P=e.playerClass||"lty-playbtn",T=e.wrapperClass||"yt-lite",x=e.onIframeAdded||function(){},H=e.rel?"prefetch":"preload";return a.useEffect((function(){i&&x()}),[i]),a.createElement(a.Fragment,null,a.createElement("link",{rel:H,href:h,as:"image"}),a.createElement(a.Fragment,null,r&&a.createElement(a.Fragment,null,a.createElement("link",{rel:"preconnect",href:w}),a.createElement("link",{rel:"preconnect",href:"https://www.google.com"}),O&&a.createElement(a.Fragment,null,a.createElement("link",{rel:"preconnect",href:"https://static.doubleclick.net"}),a.createElement("link",{rel:"preconnect",href:"https://googleads.g.doubleclick.net"})))),a.createElement("article",{onPointerOver:function(){r||o(!0)},onClick:function(){i||c(!0)},className:T+" "+(i?k:""),"data-title":u,style:n({backgroundImage:"url("+h+")"},{"--aspect-ratio":E/j*100+"%"})},a.createElement("button",{type:"button",className:P,"aria-label":y+" "+u}),i&&a.createElement("iframe",{className:C,title:u,width:"560",height:"315",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,src:v})))}}}]);