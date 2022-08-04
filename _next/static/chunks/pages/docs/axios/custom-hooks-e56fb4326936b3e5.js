(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[89],{5743:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/axios/custom-hooks",function(){return s(3558)}])},9030:function(e,t,s){"use strict";function i(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}var n=(0,s(8067).k)((function(e){var t;return{containerClass:(t={margin:"2% 15% 2% 10%"},i(t,e.fn.smallerThan("md"),{margin:"2%"}),i(t,e.fn.smallerThan("sm"),{margin:"1%"}),t)}}));t.Z=n},1385:function(e,t,s){"use strict";var i=s(5893),n=s(7870);t.Z=function(e){var t=e.theme;return(0,i.jsx)(n.Z,{id:"comments",repo:"biplobmahadi/biplobmahadi.github.io",repoId:"R_kgDOHkgVOA",category:"Comments",categoryId:"DIC_kwDOHkgVOM4CQGH7",mapping:"title",term:"Welcome!",reactionsEnabled:"1",emitMetadata:"0",inputPosition:"top",theme:t,lang:"en",loading:"lazy"})}},1580:function(e,t,s){"use strict";var i=s(5893),n=s(3857),r=s(6955);t.Z=function(e){var t=e.code,s=e.language,a=(0,n.rZ)().colorScheme;return(0,i.jsx)(r.p1,{sx:{margin:"1% 0",border:"1px gray solid",borderRadius:"6px"},language:s,withLineNumbers:!0,colorScheme:"dark"===a?"dark":"light",children:t})}},3558:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return d}});var i=s(5893),n=s(9008),r=s.n(n),a=s(7294),o=s(3857),c=s(112),u=s(1580),l=s(1385),h=s(9030),d=function(){var e=(0,o.rZ)().colorScheme,t=(0,h.Z)().classes;return(0,i.jsxs)(a.Fragment,{children:[(0,i.jsx)(r(),{children:(0,i.jsx)("title",{children:"Custom Hooks - Axios for React"})}),(0,i.jsxs)("div",{className:t.containerClass,children:[(0,i.jsx)(c.x,{size:"xl",weight:700,mb:30,align:"center",children:"Custom Axios Hooks"}),(0,i.jsx)("section",{children:(0,i.jsx)(c.x,{size:"xs",color:"dimmed",children:"Published: Jul 28, 2022 | Last Modified: Jul 31, 2022"})}),(0,i.jsxs)(c.x,{size:"sm",my:20,children:["We created 2 instances for our application. Using these instances we will create 2 different hooks which return all requests"," ",(0,i.jsx)("b",{children:"(GET, POST, PUT, PATCH, DELETE)"}),"."]}),(0,i.jsxs)(c.x,{size:"sm",children:["Create ",(0,i.jsx)("b",{children:"hooks/usePublicAxios.ts"})]}),(0,i.jsx)(u.Z,{code:'import axiosRequests from "../helpers/axiosRequests";\nimport { axiosPublicInstance } from "../instances";\n\nexport default function usePublicAxios() {\n  const {\n    getRequest: publicGet,\n    postRequest: publicPost,\n    putRequest: publicPut,\n    patchRequest: publicPatch,\n    deleteRequest: publicDelete,\n  } = axiosRequests(axiosPublicInstance);\n\n  return { publicGet, publicPost, publicPut, publicPatch, publicDelete };\n}',language:"typescript"}),(0,i.jsxs)(c.x,{size:"sm",mt:20,children:["Create ",(0,i.jsx)("b",{children:"hooks/usePrivateAxios.ts"})]}),(0,i.jsx)(u.Z,{code:'import { axiosPrivateInstance } from "../instances";\nimport axiosRequests from "../helpers/axiosRequests";\n\nexport default function usePrivateAxios() {\n  const {\n    getRequest: privateGet,\n    postRequest: privatePost,\n    putRequest: privatePut,\n    patchRequest: privatePatch,\n    deleteRequest: privateDelete,\n  } = axiosRequests(axiosPrivateInstance);\n\n  return { privateGet, privatePost, privatePut, privatePatch, privateDelete };\n}',language:"typescript"}),(0,i.jsx)(c.x,{size:"sm",my:20,children:"We can see, both are the same. Now we need to add the authorization header with all private requests using our private instance."}),(0,i.jsx)(c.x,{size:"sm",mb:20,children:"We will add the authorization using the axios interceptor, so that we can also configure access and refresh tokens."}),(0,i.jsx)(c.x,{size:"sm",mb:20,children:"See in interceptors page."}),(0,i.jsx)(l.Z,{theme:"dark"===e?"dark":"light"})]})]})}}},function(e){e.O(0,[298,774,888,179],(function(){return t=5743,e(e.s=t);var t}));var t=e.O();_N_E=t}]);