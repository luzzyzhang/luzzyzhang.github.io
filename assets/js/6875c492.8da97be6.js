"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[610],{9167:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(6687),n=a(9867),r=a(2941);function o(e){const{metadata:t}=e,{previousPage:a,nextPage:o}=t;return l.createElement("nav",{className:"pagination-nav","aria-label":(0,n.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&l.createElement(r.Z,{permalink:a,title:l.createElement(n.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),o&&l.createElement(r.Z,{permalink:o,title:l.createElement(n.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},5321:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(6687),n=a(9246),r=a(9698);function o(e){let{items:t,component:a=r.Z}=e;return l.createElement(l.Fragment,null,t.map((e=>{let{content:t}=e;return l.createElement(n.n,{key:t.metadata.permalink,content:t},l.createElement(a,null,l.createElement(t,null)))})))}},6913:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var l=a(6687),n=a(4923),r=a(9867),o=a(2054),s=a(8115),c=a(8490),i=a(2820),m=a(6937),g=a(9167),u=a(8346),p=a(5321);function d(e){const t=function(){const{selectMessage:e}=(0,o.c)();return t=>e(t,(0,r.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,r.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function h(e){let{tag:t}=e;const a=d(t);return l.createElement(l.Fragment,null,l.createElement(s.d,{title:a}),l.createElement(u.Z,{tag:"blog_tags_posts"}))}function E(e){let{tag:t,items:a,sidebar:n,listMetadata:o}=e;const s=d(t);return l.createElement(m.Z,{sidebar:n},l.createElement("header",{className:"margin-bottom--xl"},l.createElement("h1",null,s),l.createElement(i.Z,{href:t.allTagsPath},l.createElement(r.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),l.createElement(p.Z,{items:a}),l.createElement(g.Z,{metadata:o}))}function b(e){return l.createElement(s.FG,{className:(0,n.Z)(c.k.wrapper.blogPages,c.k.page.blogTagPostListPage)},l.createElement(h,e),l.createElement(E,e))}},9184:(e,t,a)=>{a.d(t,{Z:()=>c});var l=a(4376),n=a(6687);var r=a(4923),o=a(2820);const s={tweetQuote:"tweetQuote_h8Rz",avatarImg:"avatarImg_b51M"};const c={...l.Z,highlight:function(e){let{children:t,color:a}=e;return n.createElement("span",{style:{backgroundColor:a,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},TweetQuote:function(e){let{url:t,handle:a,name:l,job:c,children:i}=e;const m=`https://unavatar.io/twitter/${a}`,g=`https://twitter.com/${a}`;return n.createElement("figure",{className:s.tweetQuote},n.createElement("blockquote",null,n.createElement(o.Z,{to:t},i)),n.createElement("figcaption",null,n.createElement(o.Z,{to:g,rel:"nofollow"},n.createElement("div",{className:"avatar"},n.createElement("img",{alt:l,className:(0,r.Z)("avatar__photo",s.avatarImg),src:m}),n.createElement("div",{className:(0,r.Z)("avatar__intro")},n.createElement("strong",{className:"avatar__name"},n.createElement("cite",null,l)),n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},c))))))}}}}]);