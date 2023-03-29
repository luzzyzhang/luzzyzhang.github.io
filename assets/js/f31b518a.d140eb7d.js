/*! For license information please see f31b518a.d140eb7d.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[969],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,g=u["".concat(c,".").concat(m)]||u[m]||f[m]||o;return r?n.createElement(g,l(l({ref:t},p),{},{components:r})):n.createElement(g,l({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7595:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=r(7462),a=(r(7294),r(3905)),o=r(640);const l={slug:"art-of-writing-software",title:"The Art of Writing Software",authors:["lz"],tags:["software"]},i=void 0,c={permalink:"/blog/art-of-writing-software",source:"@site/blog/2023-03-29-art-of-writing-software.mdx",title:"The Art of Writing Software",description:"---",date:"2023-03-29T00:00:00.000Z",formattedDate:"March 29, 2023",tags:[{label:"software",permalink:"/blog/tags/software"}],readingTime:.725,hasTruncateMarker:!0,authors:[{name:"luzzy zhang",title:"Software Development Engineer",url:"https://github.com/luzzyzhang/",imageURL:"https://github.com/luzzyzhang.png",key:"lz"}],frontMatter:{slug:"art-of-writing-software",title:"The Art of Writing Software",authors:["lz"],tags:["software"]},nextItem:{title:"Concurrency",permalink:"/blog/concurrency"}},s={authorsImageUrls:[void 0]},p=[],u={toc:p},f="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(f,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"video-container"},(0,a.kt)(o.Z,{id:"QdVFvsCWXrA",params:"autoplay=1&autohide=1&showinfo=1&rel=0",title:"The Art of Writing Software",poster:"maxresdefault",webp:!0,mdxType:"LiteYouTubeEmbed"})))}m.isMDXComponent=!0},640:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294),a=function(){return a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},a.apply(this,arguments)};function o(e){var t=n.useState(!1),r=t[0],o=t[1],l=n.useState(!1),i=l[0],c=l[1],s=encodeURIComponent(e.id),p="string"==typeof e.playlistCoverId?encodeURIComponent(e.playlistCoverId):null,u=e.title,f=e.poster||"hqdefault",m="&"+e.params||0,g=e.muted?"&mute=1":"",y=e.announce||"Watch",d=e.webp?"webp":"jpg",h=e.webp?"vi_webp":"vi",b=e.thumbnail||(e.playlist?"https://i.ytimg.com/"+h+"/"+p+"/"+f+"."+d:"https://i.ytimg.com/"+h+"/"+s+"/"+f+"."+d),w=e.noCookie;w=e.cookie?"https://www.youtube.com":"https://www.youtube-nocookie.com";var v=e.playlist?w+"/embed/videoseries?autoplay=1"+g+"&list="+s+m:w+"/embed/"+s+"?autoplay=1&state=1"+g+m,O=e.activatedClass||"lyt-activated",k=e.adNetwork||!1,E=e.aspectHeight||9,j=e.aspectWidth||16,C=e.iframeClass||"",T=e.playerClass||"lty-playbtn",P=e.wrapperClass||"yt-lite",x=e.onIframeAdded||function(){},z=e.rel?"prefetch":"preload";return n.useEffect((function(){i&&x()}),[i]),n.createElement(n.Fragment,null,n.createElement("link",{rel:z,href:b,as:"image"}),n.createElement(n.Fragment,null,r&&n.createElement(n.Fragment,null,n.createElement("link",{rel:"preconnect",href:w}),n.createElement("link",{rel:"preconnect",href:"https://www.google.com"}),k&&n.createElement(n.Fragment,null,n.createElement("link",{rel:"preconnect",href:"https://static.doubleclick.net"}),n.createElement("link",{rel:"preconnect",href:"https://googleads.g.doubleclick.net"})))),n.createElement("article",{onPointerOver:function(){r||o(!0)},onClick:function(){i||c(!0)},className:P+" "+(i?O:""),"data-title":u,style:a({backgroundImage:"url("+b+")"},{"--aspect-ratio":E/j*100+"%"})},n.createElement("button",{type:"button",className:T,"aria-label":y+" "+u}),i&&n.createElement("iframe",{className:C,title:u,width:"560",height:"315",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,src:v})))}}}]);