"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8610],{9703:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(7294),n=a(5999),r=a(2244);function s(e){const{metadata:t}=e,{previousPage:a,nextPage:s}=t;return l.createElement("nav",{className:"pagination-nav","aria-label":(0,n.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&l.createElement(r.Z,{permalink:a,title:l.createElement(n.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),s&&l.createElement(r.Z,{permalink:s,title:l.createElement(n.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},9985:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(7294),n=a(9460),r=a(390);function s(e){let{items:t,component:a=r.Z}=e;return l.createElement(l.Fragment,null,t.map((e=>{let{content:t}=e;return l.createElement(n.n,{key:t.metadata.permalink,content:t},l.createElement(a,null,l.createElement(t,null)))})))}},1714:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var l=a(7294),n=a(6010),r=a(5999),s=a(8824),o=a(1944),c=a(5281),i=a(9960),m=a(9058),g=a(9703),u=a(197),p=a(9985);function d(e){const t=function(){const{selectMessage:e}=(0,s.c)();return t=>e(t,(0,r.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,r.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function h(e){let{tag:t}=e;const a=d(t);return l.createElement(l.Fragment,null,l.createElement(o.d,{title:a}),l.createElement(u.Z,{tag:"blog_tags_posts"}))}function E(e){let{tag:t,items:a,sidebar:n,listMetadata:s}=e;const o=d(t);return l.createElement(m.Z,{sidebar:n},l.createElement("header",{className:"margin-bottom--xl"},l.createElement("h1",null,o),l.createElement(i.Z,{href:t.allTagsPath},l.createElement(r.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),l.createElement(p.Z,{items:a}),l.createElement(g.Z,{metadata:s}))}function b(e){return l.createElement(o.FG,{className:(0,n.Z)(c.k.wrapper.blogPages,c.k.page.blogTagPostListPage)},l.createElement(h,e),l.createElement(E,e))}},745:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(702),n=a(7294);var r=a(6010),s=a(9960);const o="tweetQuote_h8Rz",c="avatarImg_b51M";const i={...l.Z,highlight:function(e){let{children:t,color:a}=e;return n.createElement("span",{style:{backgroundColor:a,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},TweetQuote:function(e){let{url:t,handle:a,name:l,job:i,children:m}=e;const g=`https://unavatar.io/twitter/${a}`,u=`https://twitter.com/${a}`;return n.createElement("figure",{className:o},n.createElement("blockquote",null,n.createElement(s.Z,{to:t},m)),n.createElement("figcaption",null,n.createElement(s.Z,{to:u,rel:"nofollow"},n.createElement("div",{className:"avatar"},n.createElement("img",{alt:l,className:(0,r.Z)("avatar__photo",c),src:g}),n.createElement("div",{className:(0,r.Z)("avatar__intro")},n.createElement("strong",{className:"avatar__name"},n.createElement("cite",null,l)),n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},i))))))}}}}]);