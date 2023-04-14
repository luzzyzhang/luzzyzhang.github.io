"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7201],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(t),d=a,g=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return t?r.createElement(g,l(l({ref:n},p),{},{components:t})):r.createElement(g,l({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[m]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2569:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const i={id:"execve",title:"System call execve",tags:["til","linux","system-programming"]},l=void 0,o={unversionedId:"til/linux/execve",id:"til/linux/execve",title:"System call execve",description:"Description",source:"@site/docs/til/linux/2023-04-06-execve.mdx",sourceDirName:"til/linux",slug:"/til/linux/execve",permalink:"/docs/til/linux/execve",draft:!1,tags:[{label:"til",permalink:"/docs/tags/til"},{label:"linux",permalink:"/docs/tags/linux"},{label:"system-programming",permalink:"/docs/tags/system-programming"}],version:"current",frontMatter:{id:"execve",title:"System call execve",tags:["til","linux","system-programming"]},sidebar:"tutorialSidebar",previous:{title:"Linux",permalink:"/docs/category/linux"},next:{title:"Elixir",permalink:"/docs/category/elixir"}},c={},s=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"References",id:"references",level:2}],p={toc:s},m="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"execve()")," executes the program referred to by ",(0,a.kt)("inlineCode",{parentName:"p"},"pathname"),".\nThis causes the program that is currently being run by the calling process to\nbe replaced with a new program, with newly initialized stack, heap, and\n(initialized and uninitialized) data segments."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"One sometimes sees ",(0,a.kt)("inlineCode",{parentName:"p"},"execve()")," (and the related functions described\nin ",(0,a.kt)("inlineCode",{parentName:"p"},"exec(3)"),') described as "executing a ',(0,a.kt)("strong",{parentName:"p"},"new"),' process" (or similar).\n',(0,a.kt)("strong",{parentName:"p"},"This is a highly misleading description: there is no new process;\nmany attributes of the calling process remain unchanged (in\nparticular, its PID)."),"  All that ",(0,a.kt)("inlineCode",{parentName:"p"},"execve()")," does is arrange for an\nexisting process (the calling process) to execute a new program.")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"exec()")," is standard C library (libc, -lc), ",(0,a.kt)("inlineCode",{parentName:"p"},"execve()")," is systemcall."),(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"exec()")," family of functions replaces the current process image\nwith a new process image.")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"The following program is designed to be execed by the second\nprogram below.  It just echoes its command-line arguments, one\nper line."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'/* myecho.c */\n\n#include <stdio.h>\n#include <stdlib.h>\n\nint\nmain(int argc, char *argv[])\n{\n   for (int j = 0; j < argc; j++)\n       printf("argv[%d]: %s\\n", j, argv[j]);\n\n   exit(EXIT_SUCCESS);\n}\n')),(0,a.kt)("p",null,"This program can be used to exec the program named in its\ncommand-line argument:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'/* execve.c */\n\n#include <stdio.h>\n#include <stdlib.h>\n#include <unistd.h>\n\nint\nmain(int argc, char *argv[])\n{\n   char *newargv[] = { NULL, "hello", "world", NULL };\n   char *newenviron[] = { NULL };\n\n   if (argc != 2) {\n       fprintf(stderr, "Usage: %s <file-to-exec>\\n", argv[0]);\n       exit(EXIT_FAILURE);\n   }\n\n   newargv[0] = argv[1];\n\n   execve(argv[1], newargv, newenviron);\n   perror("execve");   /* execve() returns only on error */\n   exit(EXIT_FAILURE);\n}\n')),(0,a.kt)("p",null,"We can use the second program to exec the first as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ cc myecho.c -o myecho\n$ cc execve.c -o execve\n$ ./execve ./myecho\nargv[0]: ./myecho\nargv[1]: hello\nargv[2]: world\n")),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://man7.org/linux/man-pages/man2/execve.2.html"},"https://man7.org/linux/man-pages/man2/execve.2.html")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://tldp.org/LDP/LG/issue23/flower/psimage.html/"},"Process image"))))}u.isMDXComponent=!0}}]);