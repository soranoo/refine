"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[26915],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},60063:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>v,frontMatter:()=>s,metadata:()=>l,toc:()=>u});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={title:"NestJS CRUD",source:"https://github.com/refinedev/refine/tree/master/packages/nestjsx-crud",swizzle:!0},c=void 0,l={unversionedId:"data/packages/nestjsx-crud/index",id:"data/packages/nestjsx-crud/index",title:"NestJS CRUD",description:"Refine provides a data provider for APIs powered with Nest.js CRUD, a module for Nest.js that provides easier ways to build CRUD RESTful APIs.",source:"@site/docs/data/packages/nestjsx-crud/index.md",sourceDirName:"data/packages/nestjsx-crud",slug:"/data/packages/nestjsx-crud/",permalink:"/docs/data/packages/nestjsx-crud/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/data/packages/nestjsx-crud/index.md",tags:[],version:"current",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1710926711,formattedLastUpdatedAt:"Mar 20, 2024",frontMatter:{title:"NestJS CRUD",source:"https://github.com/refinedev/refine/tree/master/packages/nestjsx-crud",swizzle:!0},sidebar:"mainSidebar",previous:{title:"Nest.js Query",permalink:"/docs/data/packages/nestjs-query/"},next:{title:"Hasura",permalink:"/docs/data/packages/hasura/"}},d={},u=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Example",id:"example",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},m=p("DocThumbsUpDownFeedbackWidget"),f=p("InstallPackagesCommand"),h=p("Tabs"),g=p("TabItem"),b=p("CodeSandboxExample"),y={toc:u};function v(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},y,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Refine provides a data provider for APIs powered with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nestjsx/crud/wiki"},"Nest.js CRUD"),", a module for Nest.js that provides easier ways to build CRUD RESTful APIs."),(0,r.kt)("admonition",{title:"Good to know",type:"simple"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"This library uses ",(0,r.kt)("a",{parentName:"li",href:"https://axios-http.com"},(0,r.kt)("inlineCode",{parentName:"a"},"axios"))," to handle the requests."),(0,r.kt)("li",{parentName:"ul"},"To learn more about data fetching in Refine, check out the ",(0,r.kt)("a",{parentName:"li",href:"/docs/guides-concepts/data-fetching"},"Data Fetching")," guide."))),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)(m,{id:"installation",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.kt)(f,{args:"@refinedev/nestjsx-crud",mdxType:"InstallPackagesCommand"})),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(m,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.kt)("p",null,"We'll provide the API url to the ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProvider")," function to create a data provider."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="app.tsx"',title:'"app.tsx"'},'import Refine from "@refinedev/core";\nimport dataProvider from "@refinedev/nestjsx-crud";\n\nconst App = () => (\n  <Refine\n    // highlight-next-line\n    dataProvider={dataProvider("<API_URL>")}\n  >\n    {/* ... */}\n  </Refine>\n);\n'))),(0,r.kt)("h2",{id:"authentication"},"Authentication"),(0,r.kt)(m,{id:"authentication",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.kt)("p",null,"If your API uses authentication, you can easily provide an axios instance with the authentication headers to the ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProvider")," function via second argument."),(0,r.kt)(h,{mdxType:"Tabs"},(0,r.kt)(g,{value:"headers",label:"Using Headers",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Refine, AuthProvider } from "@refinedev/core";\n/**\n * We\'re using the `axiosInstance` exported from the package\n * But you are free to use your own instance with your own configuration.\n */\n// highlight-next-line\nimport dataProvider, { axiosInstance } from "@refinedev/nestjsx-crud";\n\nconst authProvider: AuthProvider = {\n  login: async () => {\n    // ...\n    // We\'re setting the Authorization header when the user logs in.\n    // highlight-next-line\n    axiosInstance.defaults.headers.common[\n      "Authorization"\n    ] = `Bearer ${localStorage.getItem("token")}`;\n  },\n  logout: async () => {\n    // ...\n    // We\'re removing the Authorization header when the user logs out.\n    // highlight-next-line\n    axiosInstance.defaults.headers.common["Authorization"] = undefined;\n  },\n  // ...\n};\n\nconst App = () => {\n  return (\n    <Refine\n      // highlight-next-line\n      dataProvider={dataProvider("<API_URL>", axiosInstance)}\n      authProvider={authProvider}\n    >\n      {/* ... */}\n    </Refine>\n  );\n};\n'))),(0,r.kt)(g,{value:"axios",label:"Using Interceptors",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Refine, AuthProvider } from "@refinedev/core";\n/**\n * We\'re using the `axiosInstance` exported from the package\n * But you are free to use your own instance with your own configuration.\n */\n// highlight-next-line\nimport dataProvider, { axiosInstance } from "@refinedev/nestjsx-crud";\n\naxiosInstance.interceptors.request.use(\n  (config) => {\n    // ...\n    // We\'re setting the Authorization header if it\'s available in the localStorage.\n    const token = localStorage.getItem("token");\n    if (token) {\n      // highlight-next-line\n      config.headers["Authorization"] = `Bearer ${token}`;\n    }\n    return config;\n  },\n  (error) => {\n    return Promise.reject(error);\n  },\n);\n\nconst App = () => {\n  return (\n    <Refine\n      // highlight-next-line\n      dataProvider={dataProvider("<API_URL>", axiosInstance)}\n    >\n      {/* ... */}\n    </Refine>\n  );\n};\n'))))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)(m,{id:"example",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.kt)(b,{path:"data-provider-nestjsx-crud",mdxType:"CodeSandboxExample"})))}v.isMDXComponent=!0}}]);