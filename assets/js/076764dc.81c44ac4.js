"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[74178],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=s(t),f=o,u=m["".concat(c,".").concat(f)]||m[f]||l[f]||i;return t?r.createElement(u,a(a({ref:n},d),{},{components:t})):r.createElement(u,a({ref:n},d))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},56881:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>b,frontMatter:()=>c,metadata:()=>d,toc:()=>m});var r=t(67294),o=t(3905);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const c={id:"inferencer",title:"Inferencer"},s=void 0,d={unversionedId:"api-reference/antd/components/inferencer",id:"version-3.xx.xx/api-reference/antd/components/inferencer",title:"Inferencer",description:"You can automatically generate views for your resources using @pankod/refine-inferencer. Inferencer exports AntdListInferencer, AntdShowInferencer, AntdEditInferencer, AntdCreateInferencer and AntdInferencer (which combines all in one place) components.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/antd/components/inferencer.md",sourceDirName:"api-reference/antd/components",slug:"/api-reference/antd/components/inferencer",permalink:"/docs/3.xx.xx/api-reference/antd/components/inferencer",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/antd/components/inferencer.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1711095618,formattedLastUpdatedAt:"Mar 22, 2024",frontMatter:{id:"inferencer",title:"Inferencer"},sidebar:"someSidebar",previous:{title:"<AuthPage>",permalink:"/docs/3.xx.xx/api-reference/antd/components/antd-auth-page"},next:{title:"Create",permalink:"/docs/3.xx.xx/api-reference/antd/components/basic-views/create"}},l={},m=[{value:"Usage",id:"usage",level:2},{value:"Views",id:"views",level:2},{value:"<code>List</code>",id:"list",level:3},{value:"<code>Show</code>",id:"show",level:3},{value:"<code>Create</code>",id:"create",level:3},{value:"<code>Edit</code>",id:"edit",level:3},{value:"Example",id:"example",level:2}],f=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",n)},u=f("DocThumbsUpDownFeedbackWidget"),h=f("Tabs"),k=f("TabItem"),g=f("CodeSandboxExample"),v={toc:m};function b(e){var{components:n}=e,t=p(e,["components"]);return(0,o.kt)("wrapper",a(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){i(e,n,t[n])}))}return e}({},v,t),{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can automatically generate views for your resources using ",(0,o.kt)("inlineCode",{parentName:"p"},"@pankod/refine-inferencer"),". Inferencer exports ",(0,o.kt)("inlineCode",{parentName:"p"},"AntdListInferencer"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"AntdShowInferencer"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"AntdEditInferencer"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"AntdCreateInferencer")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"AntdInferencer")," (which combines all in one place) components."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)(u,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.kt)("p",null,"Ant Design components can be imported from ",(0,o.kt)("inlineCode",{parentName:"p"},"@pankod/refine-inferencer/antd"),". You can directly use the components in ",(0,o.kt)("inlineCode",{parentName:"p"},"resources")," prop of ",(0,o.kt)("inlineCode",{parentName:"p"},"Refine")," component or you can use them in your custom components by passing the ",(0,o.kt)("inlineCode",{parentName:"p"},"resource")," prop as the resource name."),(0,o.kt)(h,{defaultValue:"resources",values:[{label:(0,o.kt)(r.Fragment,null,"In",(0,o.kt)("code",{style:{margin:"0 0.7ch"}},"resources"),"prop"),value:"resources"},{label:"In Custom Components",value:"custom"}],mdxType:"Tabs"},(0,o.kt)(k,{value:"resources",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'// highlight-next-line\nimport { AntdInferencer } from "@pankod/refine-inferencer/antd";\n\nconst App = () => {\n  return (\n    <Refine\n      resources={[\n        {\n          name: "samples",\n          // highlight-start\n          list: AntdInferencer,\n          show: AntdInferencer,\n          create: AntdInferencer,\n          edit: AntdInferencer,\n          // highlight-end\n        },\n      ]}\n    />\n  );\n};\n'))),(0,o.kt)(k,{value:"custom",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'// highlight-next-line\nimport { AntdInferencer } from "@pankod/refine-inferencer/antd";\n\nconst SampleList = () => {\n  return (\n    // highlight-next-line\n    <AntdInferencer resource="samples" action="list" />\n  );\n};\n\nconst SampleShow = () => {\n  return (\n    // highlight-next-line\n    <AntdInferencer resource="samples" action="show" id="1" />\n  );\n};\n\nconst SampleCreate = () => {\n  return (\n    // highlight-next-line\n    <AntdInferencer resource="samples" action="create" />\n  );\n};\n\nconst SampleEdit = () => {\n  return (\n    // highlight-next-line\n    <AntdInferencer resource="samples" action="edit" id="1" />\n  );\n};\n')))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"To learn more about ",(0,o.kt)("inlineCode",{parentName:"p"},"@pankod/refine-inferencer")," package, please check out ",(0,o.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/packages/documentation/inferencer"},"Docs")))),(0,o.kt)("h2",{id:"views"},"Views"),(0,o.kt)("h3",{id:"list"},(0,o.kt)("inlineCode",{parentName:"h3"},"List")),(0,o.kt)(u,{id:"list",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.kt)("p",null,"Generates a sample list view for your resources according to the API response. It uses ",(0,o.kt)("inlineCode",{parentName:"p"},"List")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Table")," components with ",(0,o.kt)("inlineCode",{parentName:"p"},"useTable")," hook from ",(0,o.kt)("inlineCode",{parentName:"p"},"@pankod/refine-antd"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode previewHeight=600px url=http://localhost:3000/samples",live:!0,hideCode:!0,previewHeight:"600px",url:"http://localhost:3000/samples"},'setInitialRoutes(["/"]);\n\n// visible-block-start\nimport { Refine } from "@pankod/refine-core";\nimport { Layout } from "@pankod/refine-antd";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// highlight-next-line\nimport { AntdInferencer } from "@pankod/refine-inferencer/antd";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n  return (\n    <Refine\n      routerProvider={routerProvider}\n      dataProvider={dataProvider(API_URL)}\n      Layout={Layout}\n      resources={[\n        {\n          name: "samples",\n          // highlight-next-line\n          list: AntdInferencer,\n          show: AntdInferencer,\n          create: AntdInferencer,\n          edit: AntdInferencer,\n          canDelete: true,\n        },\n        {\n          name: "categories",\n          // highlight-next-line\n          list: AntdInferencer,\n          show: AntdInferencer,\n        },\n        {\n          name: "tags",\n          // highlight-next-line\n          list: AntdInferencer,\n          show: AntdInferencer,\n        },\n      ]}\n    />\n  );\n};\n\n// visible-block-end\n\nrender(<App />);\n'))),(0,o.kt)("h3",{id:"show"},(0,o.kt)("inlineCode",{parentName:"h3"},"Show")),(0,o.kt)(u,{id:"show",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.kt)("p",null,"Generates a sample show view for your resources according to the API response. It uses ",(0,o.kt)("inlineCode",{parentName:"p"},"Show")," and field components from ",(0,o.kt)("inlineCode",{parentName:"p"},"@pankod/refine-antd")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"useShow")," hook from ",(0,o.kt)("inlineCode",{parentName:"p"},"@pankod/refine-core"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode previewHeight=600px url=http://localhost:3000/samples/show/123",live:!0,hideCode:!0,previewHeight:"600px",url:"http://localhost:3000/samples/show/123"},'setInitialRoutes(["/samples/show/123"]);\n\n// visible-block-start\nimport { Refine } from "@pankod/refine-core";\nimport { Layout } from "@pankod/refine-antd";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// highlight-next-line\nimport { AntdInferencer } from "@pankod/refine-inferencer/antd";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n  return (\n    <Refine\n      routerProvider={routerProvider}\n      dataProvider={dataProvider(API_URL)}\n      Layout={Layout}\n      resources={[\n        {\n          name: "samples",\n          list: AntdInferencer,\n          // highlight-next-line\n          show: AntdInferencer,\n          create: AntdInferencer,\n          edit: AntdInferencer,\n          canDelete: true,\n        },\n        {\n          name: "categories",\n          list: AntdInferencer,\n          // highlight-next-line\n          show: AntdInferencer,\n        },\n        {\n          name: "tags",\n          list: AntdInferencer,\n          // highlight-next-line\n          show: AntdInferencer,\n        },\n      ]}\n    />\n  );\n};\n\n// visible-block-end\n\nrender(<App />);\n'))),(0,o.kt)("h3",{id:"create"},(0,o.kt)("inlineCode",{parentName:"h3"},"Create")),(0,o.kt)(u,{id:"create",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.kt)("p",null,"Generates a sample create view for your resources according to the first record in list API response. It uses ",(0,o.kt)("inlineCode",{parentName:"p"},"Create")," component and ",(0,o.kt)("inlineCode",{parentName:"p"},"useForm")," hook from ",(0,o.kt)("inlineCode",{parentName:"p"},"@pankod/refine-antd"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode previewHeight=600px url=http://localhost:3000/samples/create",live:!0,hideCode:!0,previewHeight:"600px",url:"http://localhost:3000/samples/create"},'setInitialRoutes(["/samples/create"]);\n\n// visible-block-start\nimport { Refine } from "@pankod/refine-core";\nimport { Layout } from "@pankod/refine-antd";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// highlight-next-line\nimport { AntdInferencer } from "@pankod/refine-inferencer/antd";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n  return (\n    <Refine\n      routerProvider={routerProvider}\n      dataProvider={dataProvider(API_URL)}\n      Layout={Layout}\n      resources={[\n        {\n          name: "samples",\n          list: AntdInferencer,\n          show: AntdInferencer,\n          // highlight-next-line\n          create: AntdInferencer,\n          edit: AntdInferencer,\n          canDelete: true,\n        },\n        {\n          name: "categories",\n          list: AntdInferencer,\n          show: AntdInferencer,\n        },\n        {\n          name: "tags",\n          list: AntdInferencer,\n          show: AntdInferencer,\n        },\n      ]}\n    />\n  );\n};\n\n// visible-block-end\n\nrender(<App />);\n'))),(0,o.kt)("h3",{id:"edit"},(0,o.kt)("inlineCode",{parentName:"h3"},"Edit")),(0,o.kt)(u,{id:"edit",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.kt)("p",null,"Generates a sample edit view for your resources according to the API response. It uses ",(0,o.kt)("inlineCode",{parentName:"p"},"Edit")," component and ",(0,o.kt)("inlineCode",{parentName:"p"},"useForm")," hook from ",(0,o.kt)("inlineCode",{parentName:"p"},"@pankod/refine-antd"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode previewHeight=600px url=http://localhost:3000/samples/edit/123",live:!0,hideCode:!0,previewHeight:"600px",url:"http://localhost:3000/samples/edit/123"},'setInitialRoutes(["/samples/edit/123"]);\n\n// visible-block-start\nimport { Refine } from "@pankod/refine-core";\nimport { Layout } from "@pankod/refine-antd";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// highlight-next-line\nimport { AntdInferencer } from "@pankod/refine-inferencer/antd";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n  return (\n    <Refine\n      routerProvider={routerProvider}\n      dataProvider={dataProvider(API_URL)}\n      Layout={Layout}\n      resources={[\n        {\n          name: "samples",\n          list: AntdInferencer,\n          show: AntdInferencer,\n          create: AntdInferencer,\n          // highlight-next-line\n          edit: AntdInferencer,\n          canDelete: true,\n        },\n        {\n          name: "categories",\n          list: AntdInferencer,\n          show: AntdInferencer,\n        },\n        {\n          name: "tags",\n          list: AntdInferencer,\n          show: AntdInferencer,\n        },\n      ]}\n    />\n  );\n};\n\n// visible-block-end\n\nrender(<App />);\n'))),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)(u,{id:"example",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.kt)("p",null,"Below you'll find a Live CodeSandbox Example displaying a fully setup ",(0,o.kt)("inlineCode",{parentName:"p"},"Refine")," app with ",(0,o.kt)("inlineCode",{parentName:"p"},"@pankod/refine-inferencer/antd")," components."),(0,o.kt)(g,{path:"inferencer-antd",mdxType:"CodeSandboxExample"})))}b.isMDXComponent=!0}}]);