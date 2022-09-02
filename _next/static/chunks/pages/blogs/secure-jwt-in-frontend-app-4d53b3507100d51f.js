(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[499],{7870:function(e,r,s){"use strict";s.d(r,{Z:function(){return n}});var t=s(5893),o=s(7294);function n({id:e,repo:r,repoId:n,category:i,categoryId:a,mapping:l,term:c,reactionsEnabled:d,emitMetadata:h,inputPosition:u,theme:p,lang:m,loading:f}){const[w,b]=(0,o.useState)(!1);return(0,o.useEffect)((()=>{w||(s.e(904).then(s.bind(s,904)),b(!0))}),[]),w?(0,t.jsx)("giscus-widget",{id:e,repo:r,repoid:n,category:i,categoryid:a,mapping:l,term:c,reactionsenabled:d,emitmetadata:h,inputposition:u,theme:p,lang:m,loading:f}):null}},8076:function(e,r,s){"use strict";s.d(r,{e:function(){return m}});var t=s(7294),o=s(3857),n=s(112),i=(0,s(8067).k)((()=>({root:{backgroundColor:"transparent",cursor:"pointer",padding:0,border:0}}))),a=Object.defineProperty,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,h=(e,r,s)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[r]=s,u=(e,r)=>{for(var s in r||(r={}))c.call(r,s)&&h(e,s,r[s]);if(l)for(var s of l(r))d.call(r,s)&&h(e,s,r[s]);return e};const p={},m=(0,t.forwardRef)(((e,r)=>{const s=(0,o.Z3)("Anchor",p,e),{component:a,className:h,classNames:m,styles:f}=s,w=((e,r)=>{var s={};for(var t in e)c.call(e,t)&&r.indexOf(t)<0&&(s[t]=e[t]);if(null!=e&&l)for(var t of l(e))r.indexOf(t)<0&&d.call(e,t)&&(s[t]=e[t]);return s})(s,["component","className","classNames","styles"]),{classes:b,cx:g}=i(null,{name:"Anchor",classNames:m,styles:f}),x="button"===a?{type:"button"}:null;return t.createElement(n.x,u(u({component:a||"a",variant:"link",ref:r,className:g(b.root,h)},x),w))}));m.displayName="@mantine/core/Anchor"},5208:function(e,r,s){"use strict";s.d(r,{Z:function(){return C}});var t=s(7294),o=s(3857),n=s(8067),i=(0,n.k)(((e,{radius:r,shadow:s,withBorder:t})=>({root:{outline:0,WebkitTapHighlightColor:"transparent",display:"block",textDecoration:"none",color:"dark"===e.colorScheme?e.colors.dark[0]:e.black,backgroundColor:"dark"===e.colorScheme?e.colors.dark[7]:e.white,boxSizing:"border-box",borderRadius:e.fn.radius(r),boxShadow:e.shadows[s]||s||"none",border:t?`1px solid ${"dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[2]}`:void 0}}))),a=s(1267),l=Object.defineProperty,c=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,u=(e,r,s)=>r in e?l(e,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[r]=s;const p={},m=(0,t.forwardRef)(((e,r)=>{const s=(0,o.Z3)("Paper",p,e),{component:n,className:l,children:m,radius:f,withBorder:w,shadow:b}=s,g=((e,r)=>{var s={};for(var t in e)d.call(e,t)&&r.indexOf(t)<0&&(s[t]=e[t]);if(null!=e&&c)for(var t of c(e))r.indexOf(t)<0&&h.call(e,t)&&(s[t]=e[t]);return s})(s,["component","className","children","radius","withBorder","shadow"]),{classes:x,cx:y}=i({radius:f,shadow:b,withBorder:w},{name:"Paper"});return t.createElement(a.x,((e,r)=>{for(var s in r||(r={}))d.call(r,s)&&u(e,s,r[s]);if(c)for(var s of c(r))h.call(r,s)&&u(e,s,r[s]);return e})({component:n||"div",className:y(x.root,l),ref:r},g),m)}));m.displayName="@mantine/core/Paper";var f=(0,n.k)(((e,{padding:r,first:s,last:t})=>({cardSection:{display:"block",marginLeft:-1*e.fn.size({size:r,sizes:e.spacing}),marginRight:-1*e.fn.size({size:r,sizes:e.spacing}),marginTop:s?-1*e.fn.size({size:r,sizes:e.spacing}):void 0,marginBottom:t?-1*e.fn.size({size:r,sizes:e.spacing}):void 0}}))),w=Object.defineProperty,b=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,y=(e,r,s)=>r in e?w(e,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[r]=s;const k=(0,t.forwardRef)(((e,r)=>{var s=e,{className:o,padding:n=0,component:i,first:l,last:c}=s,d=((e,r)=>{var s={};for(var t in e)g.call(e,t)&&r.indexOf(t)<0&&(s[t]=e[t]);if(null!=e&&b)for(var t of b(e))r.indexOf(t)<0&&x.call(e,t)&&(s[t]=e[t]);return s})(s,["className","padding","component","first","last"]);const{classes:h,cx:u}=f({padding:n,first:l,last:c},{name:"Card"});return t.createElement(a.x,((e,r)=>{for(var s in r||(r={}))g.call(r,s)&&y(e,s,r[s]);if(b)for(var s of b(r))x.call(r,s)&&y(e,s,r[s]);return e})({component:i||"div",className:u(h.cardSection,o),ref:r},d))}));k.displayName="@mantine/core/CardSection";var j=(0,n.k)((e=>({root:{position:"relative",overflow:"hidden",backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.white}}))),v=Object.defineProperty,z=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable,P=(e,r,s)=>r in e?v(e,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[r]=s;const S={p:"md"},C=(0,t.forwardRef)(((e,r)=>{const s=(0,o.Z3)("Card",S,e),{component:n,className:i,p:a,radius:l,children:c,classNames:d,styles:h}=s,u=((e,r)=>{var s={};for(var t in e)O.call(e,t)&&r.indexOf(t)<0&&(s[t]=e[t]);if(null!=e&&z)for(var t of z(e))r.indexOf(t)<0&&N.call(e,t)&&(s[t]=e[t]);return s})(s,["component","className","p","radius","children","classNames","styles"]),{classes:p,cx:f}=j(null,{name:"Card",classNames:d,styles:h}),w=t.Children.toArray(c),b=w.map(((e,r)=>"object"===typeof e&&e&&"type"in e&&e.type===k?(0,t.cloneElement)(e,{padding:a,first:0===r,last:r===w.length-1}):e));return t.createElement(m,((e,r)=>{for(var s in r||(r={}))O.call(r,s)&&P(e,s,r[s]);if(z)for(var s of z(r))N.call(r,s)&&P(e,s,r[s]);return e})({className:f(p.root,i),radius:l,p:a,component:n||"div",ref:r},u),b)}));C.Section=k,C.displayName="@mantine/core/Card"},8533:function(e,r,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blogs/secure-jwt-in-frontend-app",function(){return s(1814)}])},6447:function(e,r,s){"use strict";function t(e,r,s){return r in e?Object.defineProperty(e,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[r]=s,e}var o=(0,s(8067).k)((function(e){var r;return{containerClass:(r={margin:"2% 15%"},t(r,e.fn.smallerThan("md"),{margin:"2%"}),t(r,e.fn.smallerThan("sm"),{margin:"1%"}),r)}}));r.Z=o},4816:function(e,r,s){"use strict";var t=(0,s(8067).k)((function(e){return{noteCard:{"&::before":{content:'""',position:"absolute",top:0,bottom:0,left:0,width:6,backgroundImage:e.fn.linearGradient(0,e.colors.yellow[6])}}}}));r.Z=t},1385:function(e,r,s){"use strict";var t=s(5893),o=s(7870);r.Z=function(e){var r=e.theme;return(0,t.jsx)(o.Z,{id:"comments",repo:"biplobmahadi/biplobmahadi.github.io",repoId:"R_kgDOHkgVOA",category:"Comments",categoryId:"DIC_kwDOHkgVOM4CQGH7",mapping:"title",term:"Welcome!",reactionsEnabled:"1",emitMetadata:"0",inputPosition:"top",theme:r,lang:"en",loading:"lazy"})}},1814:function(e,r,s){"use strict";s.r(r);var t=s(5893),o=s(3857),n=s(112),i=s(5208),a=s(8076),l=s(9008),c=s.n(l),d=s(6447),h=s(4816),u=s(1385);r.default=function(){var e=(0,o.rZ)().colorScheme,r=(0,d.Z)().classes,s=(0,h.Z)().classes;return(0,t.jsxs)("div",{className:r.containerClass,children:[(0,t.jsx)(c(),{children:(0,t.jsx)("title",{children:"Secure JWT (Access & Refresh Token) in Frontend App"})}),(0,t.jsx)(n.x,{mb:30,size:"xl",weight:700,align:"center",children:"Secure JWT (Access & Refresh Token) in Frontend App"}),(0,t.jsx)("section",{children:(0,t.jsx)(n.x,{size:"xs",color:"dimmed",children:"Published: Jul 28, 2022 | Last Modified: Jul 31, 2022"})}),(0,t.jsxs)("main",{children:[(0,t.jsxs)(n.x,{size:"sm",my:20,children:["We all know about some authorization techniques like"," ",(0,t.jsx)("b",{children:"Session Cookies and JWT"}),". There are lots of discussions about why JWT is more useful for modern applications. So we don't want to discuss it here, also what is JWT, how it works."]}),(0,t.jsx)(n.x,{size:"sm",mb:20,children:"As a beginner most of us can't use JWT securely. We use JWT in our frontend app like, after logged in we store our JWT in local storage or session storage. But it can be accessible with javascript scripts. This is as bad as it sounds, an XSS attack could give an external attacker access to the token."}),(0,t.jsx)(n.x,{size:"sm",mb:20,children:"In the frontend app, we also don't want to store user information in local storage. If application business logic depends on user information, then this is the worst to store in local storage. Like, when application business logic depends on the user role and we use it from local storage, this is so bad."}),(0,t.jsx)(n.x,{size:"sm",mb:10,weight:700,children:"So let's discuss how we can secure our app properly?"}),(0,t.jsx)(n.x,{size:"sm",mb:20,children:"After authentication we will set our refresh token in the browser's cookies and store access token, user information in the application store (state). We need to store them in a global store (Redux, React Context). When we need to pass Authorization with the request header, we will pass our access token from the global store."}),(0,t.jsx)(n.x,{size:"sm",mb:10,weight:700,children:"Now, we will discuss how to store refresh token and use it properly."}),(0,t.jsx)(n.x,{size:"sm",mb:20,children:"We will set refresh token in browser's cookies with a path and with httponly (no javascript script can get our token) must. We will set the path as the path of the refresh API (the API by which we can get a new access token). We know browsers always send cookies in every request. When we set the path as a refresh API, browser will only send cookies when we request to get a new access token. And we also set our refresh token in cookies with expiration time. When a user logout from our application, we will destroy our cookie."}),(0,t.jsx)(n.x,{size:"sm",weight:700,children:"To store refresh token in the browser's cookies, there are 2 things."}),(0,t.jsx)("div",{style:{paddingLeft:"5%"},children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsx)(n.x,{size:"sm",children:"If server and frontend is deployed in the same domain, we only need to store our refresh token with a path, httponly and expire time."})}),(0,t.jsx)("li",{children:(0,t.jsx)(n.x,{size:"sm",children:"If server and frontend is deployed in the different domain, we must store our refresh token with path, httplony, expire time, same site as none and secure as true."})})]})}),(0,t.jsx)(n.x,{size:"sm",weight:700,children:"Let's see, How exactly will our setup work?"}),(0,t.jsx)("div",{style:{paddingLeft:"5%"},children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsx)(n.x,{size:"sm",children:"After login, store access token to app store and set refresh token to cookie"})}),(0,t.jsx)("li",{children:(0,t.jsx)(n.x,{size:"sm",children:"Send this access token in every request when there is need"})}),(0,t.jsx)("li",{children:(0,t.jsx)(n.x,{size:"sm",children:"When request failed for authorization, call refresh API and obviously browser will send cookie here automatically"})}),(0,t.jsx)("li",{children:(0,t.jsx)(n.x,{size:"sm",children:"Then using new access token, call the previous failed API"})}),(0,t.jsx)("li",{children:(0,t.jsx)(n.x,{size:"sm",children:"After logout, destroy the cookie"})})]})}),(0,t.jsx)(i.Z,{className:s.noteCard,my:"lg",radius:"lg",shadow:"sm",children:(0,t.jsx)(n.x,{size:"sm",children:"We can set up this process using Axios interceptors."})}),(0,t.jsx)(n.x,{size:"sm",mb:10,weight:700,children:"Finally, the most important thing."}),(0,t.jsxs)(n.x,{size:"sm",mb:20,children:["When we set or send cookies to the server using ",(0,t.jsx)("b",{children:"XMLHttpRequest"})," ","(using Axios), we must pass withCredentials option. Also from the server side, we need to add the frontend domain to Access-Control-Allow-Origin."]}),(0,t.jsxs)(n.x,{size:"sm",mb:20,children:["We can read more details about Set-Cookie."," ",(0,t.jsx)(a.e,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie",target:"_blank",children:"Check it out"}),"."]}),(0,t.jsx)(u.Z,{theme:"dark"===e?"dark":"light"})]})]})}}},function(e){e.O(0,[774,888,179],(function(){return r=8533,e(e.s=r);var r}));var r=e.O();_N_E=r}]);