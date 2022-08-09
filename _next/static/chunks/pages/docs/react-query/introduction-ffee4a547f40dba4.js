(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[824],{7870:function(e,t,s){"use strict";s.d(t,{Z:function(){return i}});var r=s(5893),n=s(7294);function i({id:e,repo:t,repoId:i,category:a,categoryId:o,mapping:c,term:l,reactionsEnabled:d,emitMetadata:u,inputPosition:h,theme:m,lang:f,loading:p}){const[x,y]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{x||(s.e(904).then(s.bind(s,904)),y(!0))}),[]),x?(0,r.jsx)("giscus-widget",{id:e,repo:t,repoid:i,category:a,categoryid:o,mapping:c,term:l,reactionsenabled:d,emitmetadata:u,inputposition:h,theme:m,lang:f,loading:p}):null}},8076:function(e,t,s){"use strict";s.d(t,{e:function(){return f}});var r=s(7294),n=s(3857),i=s(112),a=(0,s(8067).k)((()=>({root:{backgroundColor:"transparent",cursor:"pointer",padding:0,border:0}}))),o=Object.defineProperty,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,t,s)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,h=(e,t)=>{for(var s in t||(t={}))l.call(t,s)&&u(e,s,t[s]);if(c)for(var s of c(t))d.call(t,s)&&u(e,s,t[s]);return e};const m={},f=(0,r.forwardRef)(((e,t)=>{const s=(0,n.Z3)("Anchor",m,e),{component:o,className:u,classNames:f,styles:p}=s,x=((e,t)=>{var s={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(s[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&d.call(e,r)&&(s[r]=e[r]);return s})(s,["component","className","classNames","styles"]),{classes:y,cx:g}=a(null,{name:"Anchor",classNames:f,styles:p}),b="button"===o?{type:"button"}:null;return r.createElement(i.x,h(h({component:o||"a",variant:"link",ref:t,className:g(y.root,u)},b),x))}));f.displayName="@mantine/core/Anchor"},7051:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/react-query/introduction",function(){return s(6370)}])},1385:function(e,t,s){"use strict";var r=s(5893),n=s(7870);t.Z=function(e){var t=e.theme;return(0,r.jsx)(n.Z,{id:"comments",repo:"biplobmahadi/biplobmahadi.github.io",repoId:"R_kgDOHkgVOA",category:"Comments",categoryId:"DIC_kwDOHkgVOM4CQGH7",mapping:"title",term:"Welcome!",reactionsEnabled:"1",emitMetadata:"0",inputPosition:"top",theme:t,lang:"en",loading:"lazy"})}},6370:function(e,t,s){"use strict";s.r(t);var r=s(5893),n=s(9008),i=s.n(n),a=s(7294),o=s(3857),c=s(112),l=s(8076),d=s(1385);t.default=function(){var e=(0,o.rZ)().colorScheme;return(0,r.jsxs)(a.Fragment,{children:[(0,r.jsx)(i(),{children:(0,r.jsx)("title",{children:"Introduction - React Query"})}),(0,r.jsxs)("div",{style:{margin:"2% 1%"},children:[(0,r.jsx)(c.x,{size:"xl",weight:700,mb:30,align:"center",children:"Introduction to React Query"}),(0,r.jsx)("section",{children:(0,r.jsx)(c.x,{size:"xs",color:"dimmed",children:"Published: Jul 28, 2022 | Last Modified: Jul 31, 2022"})}),(0,r.jsxs)(c.x,{size:"sm",my:20,children:["Using React Query we can ",(0,r.jsx)("b",{children:"fetch, cache and update data"}),' in our React applications all without touching any "global state".']}),(0,r.jsxs)(c.x,{size:"sm",mb:20,children:["We can do all requests ",(0,r.jsx)("b",{children:"(GET, POST, PUT, PATCH, DELETE)"})," using React Query with"," ",(0,r.jsx)("b",{children:"caching, synchronizing and updating server state"}),"."]}),(0,r.jsx)(c.x,{id:"whyReactQuery",size:"sm",mb:20,weight:700,children:"Why should we use React Query?"}),(0,r.jsx)(c.x,{size:"sm",mb:20,children:"In our react applications, we always need to fetch data and update DOM with the data using GET requests. And for that we need state and need to update state using the life cycle method in React. But using React Query we can achieve it easily and it has some other great features like caching."}),(0,r.jsx)(c.x,{size:"sm",mb:20,children:"We always use some side effects with API calls. Like, after API success we need to do some tasks, also after getting errors we need to do something."}),(0,r.jsxs)(c.x,{size:"sm",mb:20,children:["And for all requests ",(0,r.jsx)("b",{children:"(GET, POST, PUT, PATCH, DELETE)"})," we can handle those side effects easily, optimizely."]}),(0,r.jsxs)(c.x,{size:"sm",mb:20,children:["There is a popular library like React Query: ",(0,r.jsx)("b",{children:"SWR"}),". But we have greater control and much more features in React Query. Also React Query is more optimized."]}),(0,r.jsx)(c.x,{id:"ourAchievement",size:"sm",mb:20,weight:700,children:"What do we achieve here?"}),(0,r.jsxs)(c.x,{size:"sm",mb:20,children:["In one word, we will do some customization for reusability. We will make 5 custom hooks using React Query to handle"," ",(0,r.jsx)("b",{children:"GET, POST, PUT, PATCH and DELETE"})," requests with all features."]}),(0,r.jsx)(c.x,{size:"sm",mb:20,children:"We don\u2019t need to write query functions and mutation functions every time for every request after creating our custom hooks."}),(0,r.jsx)(c.x,{size:"sm",mb:20,children:"After this setup it will be so much easier to handle all API requests using React Query."}),(0,r.jsxs)(c.x,{size:"sm",mb:20,children:["React Query does support ",(0,r.jsx)("b",{children:"fetch"})," and other clients ",(0,r.jsx)("b",{children:"(axios)"})," ","for API calls. We will use ",(0,r.jsx)("b",{children:"axios"})," for our setup. Previously we did a setup for axios. We need a small update here for React Query. It will be discussed on the next page."]}),(0,r.jsxs)(c.x,{size:"sm",mb:20,children:["There are many more features available in react query and everything is well documented."," ",(0,r.jsx)(l.e,{href:"https://react-query-v3.tanstack.com",target:"_blank",children:"We must read everything"}),"."]}),(0,r.jsx)(d.Z,{theme:"dark"===e?"dark":"light"})]})]})}}},function(e){e.O(0,[774,888,179],(function(){return t=7051,e(e.s=t);var t}));var t=e.O();_N_E=t}]);