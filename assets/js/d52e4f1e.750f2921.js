"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[34113],{58860:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>s});var a=r(37953);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var g=a.createContext({}),p=function(e){var t=a.useContext(g),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(g.Provider,{value:t},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,g=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),y=p(r),m=n,s=y["".concat(g,".").concat(m)]||y[m]||u[m]||o;return r?a.createElement(s,l(l({ref:t},d),{},{components:r})):a.createElement(s,l({ref:t},d))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var g in t)hasOwnProperty.call(t,g)&&(i[g]=t[g]);i.originalType=e,i[y]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},62162:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>g,default:()=>f,frontMatter:()=>i,metadata:()=>p,toc:()=>y});r(37953);var a=r(58860);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const i={title:"useLog"},g=void 0,p={unversionedId:"audit-logs/hooks/use-log/index",id:"audit-logs/hooks/use-log/index",title:"useLog",description:"If you need to create or update an audit log, you can use Refine's useLog hook. This hook will return two mutations called log and rename",source:"@site/docs/audit-logs/hooks/use-log/index.md",sourceDirName:"audit-logs/hooks/use-log",slug:"/audit-logs/hooks/use-log/",permalink:"/docs/audit-logs/hooks/use-log/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/audit-logs/hooks/use-log/index.md",tags:[],version:"current",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1719819837,formattedLastUpdatedAt:"Jul 1, 2024",frontMatter:{title:"useLog"},sidebar:"mainSidebar",previous:{title:"Audit Log Provider",permalink:"/docs/audit-logs/audit-log-provider/"},next:{title:"useLogList",permalink:"/docs/audit-logs/hooks/use-log-list/"}},d={},y=[{value:"log",id:"log",level:2},{value:"Properties",id:"properties",level:3},{value:"Type Parameters",id:"type-parameters",level:3},{value:"Return value",id:"return-value",level:3},{value:"rename",id:"rename",level:2},{value:"Properties",id:"properties-1",level:3},{value:"Type Parameters",id:"type-parameters-1",level:3},{value:"Return value",id:"return-value-1",level:3}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.yg)("div",t)},m=u("DocThumbsUpDownFeedbackWidget"),s=u("PropTag"),c={toc:y},N="wrapper";function f(e){var{components:t}=e,r=l(e,["components"]);return(0,a.yg)(N,o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){n(e,t,r[t])}))}return e}({},c,r),{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"If you need to create or update an audit log, you can use Refine's ",(0,a.yg)("inlineCode",{parentName:"p"},"useLog")," hook. This hook will return two mutations called ",(0,a.yg)("inlineCode",{parentName:"p"},"log")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"rename")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useLog } from "@refinedev/core";\n\nconst { log, rename } = useLog();\n')),(0,a.yg)("h2",{id:"log"},"log"),(0,a.yg)(m,{id:"log",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"log")," mutation is used to create an audit log event using the ",(0,a.yg)("inlineCode",{parentName:"p"},"create")," method from ",(0,a.yg)("a",{parentName:"p",href:"/docs/audit-logs/audit-log-provider#create"},(0,a.yg)("inlineCode",{parentName:"a"},"auditLogProvider"))," under the hood."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useLog } from "@refinedev/core";\n\nconst { log } = useLog();\nconst { mutate } = log;\n\nmutate({\n  resource: "posts",\n  action: "create",\n  author: {\n    username: "admin",\n  },\n  data: {\n    id: 1,\n    title: "New post",\n  },\n  meta: {\n    id: 1,\n  },\n});\n'))),(0,a.yg)("h3",{id:"properties"},"Properties"),(0,a.yg)(m,{id:"properties",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Property"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"resource ",(0,a.yg)(s,{asterisk:!0,mdxType:"PropTag"})),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"string"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"action ",(0,a.yg)(s,{asterisk:!0,mdxType:"PropTag"})),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"string"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"author"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"Record<string, any>"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"meta"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"Record<string, any>"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"data"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"Record<string, any>"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"previousData"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"Record<string, any>")))))),(0,a.yg)("h3",{id:"type-parameters"},"Type Parameters"),(0,a.yg)(m,{id:"type-parameters",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Property"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Default"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"TData"),(0,a.yg)("td",{parentName:"tr",align:null},"Result data of the mutation. Extends ",(0,a.yg)("a",{parentName:"td",href:"/docs/core/interface-references#baserecord"},(0,a.yg)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/core/interface-references#baserecord"},(0,a.yg)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/core/interface-references#baserecord"},(0,a.yg)("inlineCode",{parentName:"a"},"BaseRecord")))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"TError"),(0,a.yg)("td",{parentName:"tr",align:null},"Custom error object that extends ",(0,a.yg)("a",{parentName:"td",href:"/docs/core/interface-references#httperror"},(0,a.yg)("inlineCode",{parentName:"a"},"HttpError"))),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/core/interface-references#httperror"},(0,a.yg)("inlineCode",{parentName:"a"},"HttpError"))),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/core/interface-references#httperror"},(0,a.yg)("inlineCode",{parentName:"a"},"HttpError")))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"TVariables"),(0,a.yg)("td",{parentName:"tr",align:null},"Values for mutation function"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"{}")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"{}")))))),(0,a.yg)("h3",{id:"return-value"},"Return value"),(0,a.yg)(m,{id:"return-value",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Description"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Result of the ",(0,a.yg)("inlineCode",{parentName:"td"},"react-query"),"'s useMutation"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useMutation"},(0,a.yg)("inlineCode",{parentName:"a"},"UseMutationResult<{ data: TData}, TError, { id: BaseKey; name: string; }, unknown>"))))))),(0,a.yg)("h2",{id:"rename"},"rename"),(0,a.yg)(m,{id:"rename",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"rename")," mutation is used to update an audit log event using the ",(0,a.yg)("inlineCode",{parentName:"p"},"update")," method from ",(0,a.yg)("a",{parentName:"p",href:"/docs/audit-logs/audit-log-provider#update"},(0,a.yg)("inlineCode",{parentName:"a"},"auditLogProvider"))," under the hood."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useLog } from "@refinedev/core";\n\nconst { rename } = useLog();\nconst { mutate } = rename;\n\nmutate({\n  id: 1,\n  name: "Updated Name",\n});\n'))),(0,a.yg)("h3",{id:"properties-1"},"Properties"),(0,a.yg)(m,{id:"properties-1",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Property"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"id ",(0,a.yg)(s,{asterisk:!0,mdxType:"PropTag"})),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"BaseKey"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"name ",(0,a.yg)(s,{asterisk:!0,mdxType:"PropTag"})),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"string")))))),(0,a.yg)("h3",{id:"type-parameters-1"},"Type Parameters"),(0,a.yg)(m,{id:"type-parameters-1",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Property"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Default"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"TData"),(0,a.yg)("td",{parentName:"tr",align:null},"Result data of the mutation. Extends ",(0,a.yg)("a",{parentName:"td",href:"/docs/core/interface-references#baserecord"},(0,a.yg)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/core/interface-references#baserecord"},(0,a.yg)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/core/interface-references#baserecord"},(0,a.yg)("inlineCode",{parentName:"a"},"BaseRecord")))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"TError"),(0,a.yg)("td",{parentName:"tr",align:null},"Custom error object that extends ",(0,a.yg)("a",{parentName:"td",href:"/docs/core/interface-references#httperror"},(0,a.yg)("inlineCode",{parentName:"a"},"HttpError"))),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/core/interface-references#httperror"},(0,a.yg)("inlineCode",{parentName:"a"},"HttpError"))),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/core/interface-references#httperror"},(0,a.yg)("inlineCode",{parentName:"a"},"HttpError")))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"TVariables"),(0,a.yg)("td",{parentName:"tr",align:null},"Values for mutation function"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"{}")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"{}")))))),(0,a.yg)("h3",{id:"return-value-1"},"Return value"),(0,a.yg)(m,{id:"return-value-1",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Description"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Result of the ",(0,a.yg)("inlineCode",{parentName:"td"},"react-query"),"'s useMutation"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useMutation"},(0,a.yg)("inlineCode",{parentName:"a"},"UseMutationResult<{ data: TData}, TError, { id: BaseKey; name: string; }, unknown>"))))))))}f.isMDXComponent=!0}}]);