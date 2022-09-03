(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[215],{1503:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/axios/instances",function(){return i(729)}])},1385:function(e,n,i){"use strict";var s=i(5893),t=i(7870);n.Z=function(e){var n=e.theme;return(0,s.jsx)(t.Z,{id:"comments",repo:"biplobmahadi/biplobmahadi.github.io",repoId:"R_kgDOHkgVOA",category:"Comments",categoryId:"DIC_kwDOHkgVOM4CQGH7",mapping:"title",term:"Welcome!",reactionsEnabled:"1",emitMetadata:"0",inputPosition:"top",theme:n,lang:"en",loading:"lazy"})}},1580:function(e,n,i){"use strict";var s=i(5893),t=i(3857),r=i(6955);n.Z=function(e){var n=e.code,i=e.language,a=(0,t.rZ)().colorScheme;return(0,s.jsx)(r.p1,{sx:{margin:"1% 0",border:"1px gray solid",borderRadius:"6px"},language:i,withLineNumbers:!0,colorScheme:"dark"===a?"dark":"light",children:n})}},729:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return l}});var s=i(5893),t=i(9008),r=i.n(t),a=i(7294),o=i(3857),c=i(112),d=i(1580),x=i(1385),l=function(){var e=(0,o.rZ)().colorScheme;return(0,s.jsxs)(a.Fragment,{children:[(0,s.jsx)(r(),{children:(0,s.jsx)("title",{children:"Instances - Axios for React"})}),(0,s.jsxs)("div",{style:{margin:"2% 1%"},children:[(0,s.jsx)(c.x,{size:"xl",weight:700,mb:30,align:"center",children:"Axios Instances"}),(0,s.jsx)("section",{children:(0,s.jsx)(c.x,{size:"xs",color:"dimmed",children:"Published: Jul 16, 2022 | Last Modified: Jul 16, 2022"})}),(0,s.jsx)(c.x,{size:"sm",my:20,children:"We can create a new instance of axios with a custom config."}),(0,s.jsx)(c.x,{size:"sm",mb:20,children:"We will create 2 axios instances for our project. One for public requests which does not need any authorization and another for private requests which need an authorization header."}),(0,s.jsx)(c.x,{size:"sm",mb:20,children:"We can use only one instance, when we add authorization header using axios interceptor then every request will add the authorization header. So we need 2 different instances to request with the authorization header and without."}),(0,s.jsx)(c.x,{id:"publicInstance",sx:{scrollMarginTop:"95px"},weight:700,mb:10,children:"Public Instance"}),(0,s.jsxs)(c.x,{size:"sm",children:["Create ",(0,s.jsx)("b",{children:"instances/publicInstance.ts"})]}),(0,s.jsx)(d.Z,{code:"import axios, { AxiosInstance } from \"axios\";\n\nexport const axiosPublicInstance: AxiosInstance = axios.create({\n  baseURL: 'Your API Base URL',\n});",language:"typescript"}),(0,s.jsx)(c.x,{id:"privateInstance",sx:{scrollMarginTop:"95px"},weight:700,mb:10,mt:30,children:"Private Instance"}),(0,s.jsxs)(c.x,{size:"sm",children:["Create ",(0,s.jsx)("b",{children:"instances/privateInstance.ts"})]}),(0,s.jsx)(d.Z,{code:"import axios, { AxiosInstance } from \"axios\";\n\nexport const axiosPrivateInstance: AxiosInstance = axios.create({\n  baseURL: 'Your API Base URL',\n});",language:"typescript"}),(0,s.jsxs)(c.x,{size:"sm",mt:20,children:["Create a ",(0,s.jsx)("b",{children:"instances/index.ts"})," file to export everything from"," ",(0,s.jsx)("b",{children:"instances"})," folder"]}),(0,s.jsx)(d.Z,{code:'export * from "./publicInstance";\nexport * from "./privateInstance";',language:"typescript"}),(0,s.jsx)("div",{style:{marginTop:"20px"},children:(0,s.jsx)(x.Z,{theme:"dark"===e?"dark":"light"})})]})]})}}},function(e){e.O(0,[298,774,888,179],(function(){return n=1503,e(e.s=n);var n}));var n=e.O();_N_E=n}]);