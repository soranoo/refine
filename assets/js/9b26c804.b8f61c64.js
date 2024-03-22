"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[68868,4004,15435,97474,90034,3534,15758,96771,90636,3664,15766,69050,45619,35194,56490,68134,45603,34685,56326,68562,45243,50176,8407,50233],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},50551:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),a=r(86010);const l="tabItem_Ymn6";function o({children:e,hidden:t,className:r}){return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,r),hidden:t},e)}},53787:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(67294),a=r(86010),l=r(6379),o=r(93874),i=r(30358);const u="tabList__CuJ",s="tabItem_LNqP";function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){c(e,t,r[t])}))}return e}function d(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function m({className:e,block:t,selectedValue:r,selectValue:o,tabValues:i}){var u;const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,l.o5)(),f=e=>{const t=e.currentTarget,n=c.indexOf(t),a=i[n].value;a!==r&&(m(t),o(a))},b=e=>{var t,r;let n=null;switch(e.key){case"Enter":f(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;var a;n=null!==(a=c[t])&&void 0!==a?a:c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;var l;n=null!==(l=c[t])&&void 0!==l?l:c[c.length-1];break}}null===(r=n)||void 0===r||null===(t=r.focus)||void 0===t||t.call(r)};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},e)},i.map((({value:e,label:t,attributes:l})=>n.createElement("li",d(p({role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,key:e,ref:e=>c.push(e),onKeyDown:b,onClick:f},l),{className:(0,a.Z)("tabs__item",s,null===(u=l)||void 0===u?void 0:u.className,{"tabs__item--active":r===e})}),null!=t?t:e))))}function f({lazy:e,children:t,selectedValue:r}){const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function b(e){const t=(0,o.Y)(e);return n.createElement("div",{className:(0,a.Z)("tabs-container",u)},n.createElement(m,p({},e,t)),n.createElement(f,p({},e,t)))}function y(e){const t=(0,i.Z)();return n.createElement(b,p({key:String(t)},e))}},93874:(e,t,r)=>{r.d(t,{Y:()=>m});var n=r(67294),a=r(76775),l=r(47348);var o=r(76632);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function s(e){return function(e){var t,r,a;return null!==(a=null===(r=n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===r||null===(t=r.filter)||void 0===t?void 0:t.call(r,Boolean))&&void 0!==a?a:[]}(e).map((({props:{value:e,label:t,attributes:r,default:n}})=>({value:e,label:t,attributes:r,default:n})))}function c(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=null!=t?t:s(r);return function(e){const t=function(e,t=((e,t)=>e===t)){return e.filter(((r,n)=>e.findIndex((e=>t(e,r)))!==n))}(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p({value:e,tabValues:t}){return t.some((t=>t.value===e))}function d({queryString:e=!1,groupId:t}){const r=(0,a.k6)(),o=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t}),s=(0,l._X)(o),c=(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace(u(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){i(e,t,r[t])}))}return e}({},r.location),{search:t.toString()}))}),[o,r]);return[s,c]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,l=c(e),[i,u]=(0,n.useState)((()=>function({defaultValue:e,tabValues:t}){if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!p({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var r;const n=null!==(r=t.find((e=>e.default)))&&void 0!==r?r:t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,m]=d({queryString:r,groupId:a}),[f,b]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[r,a]=(0,o.Nk)(t);return[r,(0,n.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:a}),y=(()=>{const e=null!=s?s:f;return p({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{y&&u(y)}),[y]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),m(e),b(e)}),[m,b,l]),tabValues:l}}},65748:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>p,toc:()=>m});r(67294);var n=r(3905),a=r(53787),l=r(50551);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const s={id:"telemetry",title:"Telemetry",sidebar_label:"Telemetry"},c="Telemetry",p={unversionedId:"further-readings/telemetry",id:"version-3.xx.xx/further-readings/telemetry",title:"Telemetry",description:"Summary",source:"@site/versioned_docs/version-3.xx.xx/further-readings/telemetry.md",sourceDirName:"further-readings",slug:"/further-readings/telemetry",permalink:"/docs/3.xx.xx/further-readings/telemetry",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/further-readings/telemetry.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1711095618,formattedLastUpdatedAt:"Mar 22, 2024",frontMatter:{id:"telemetry",title:"Telemetry",sidebar_label:"Telemetry"},sidebar:"someSidebar",previous:{title:"Benchmarks",permalink:"/docs/3.xx.xx/further-readings/benchmarks"}},d={},m=[{value:"Summary",id:"summary",level:2},{value:"Why do we need this?",id:"why-do-we-need-this",level:2},{value:"How do we collect data?",id:"how-do-we-collect-data",level:2}],f=(b="DocThumbsUpDownFeedbackWidget",function(e){return console.warn("Component "+b+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var b;const y={toc:m};function g(e){var{components:t}=e,r=u(e,["components"]);return(0,n.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},y,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"telemetry"},"Telemetry"),(0,n.kt)("h2",{id:"summary"},"Summary"),(0,n.kt)(f,{id:"summary",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"refine")," implements a ",(0,n.kt)("strong",{parentName:"p"},"simple")," and ",(0,n.kt)("strong",{parentName:"p"},"transparent")," telemetry module for collecting usage statistics defined in a ",(0,n.kt)("strong",{parentName:"p"},"very limited scope"),"."),(0,n.kt)("p",null,"Tracking is totally ",(0,n.kt)("strong",{parentName:"p"},"secure")," and ",(0,n.kt)("strong",{parentName:"p"},"anonymous"),". It includes no personally identifiable information and ",(0,n.kt)("strong",{parentName:"p"},"does not use cookies"),". Participation is optional and users may easily ",(0,n.kt)("strong",{parentName:"p"},"opt-out"),".")),(0,n.kt)("h2",{id:"why-do-we-need-this"},"Why do we need this?"),(0,n.kt)(f,{id:"why-do-we-need-this",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.kt)("p",null,"We try to answer the question ",(0,n.kt)("strong",{parentName:"p"},"how many users are actively using the Refine framework"),". This information is critical for open-source projects like Refine to better understand their communities and measure their growth metrics.")),(0,n.kt)("h2",{id:"how-do-we-collect-data"},"How do we collect data?"),(0,n.kt)(f,{id:"how-do-we-collect-data",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.kt)(a.Z,{mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"refine-core",label:"refine core",default:!0,mdxType:"TabItem"},'The tracking happens when a Refine application is loaded on the user\'s browser. On application init, a single HTTP request is sent to "https://telemetry.refine.dev". The request body is encoded with Base64 to be decoded on Refine servers.',(0,n.kt)("p",null,"There are no consequent requests for that session, as we do NOT collect any behavioral information such as ",(0,n.kt)("em",{parentName:"p"},"page views"),", ",(0,n.kt)("em",{parentName:"p"},"button clicks"),", etc."),(0,n.kt)("h2",null,"What is collected?"),(0,n.kt)("p",null,"The HTTP call has a JSON payload having the following application-specific attributes:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"providers"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"boolean[]")),(0,n.kt)("td",{parentName:"tr",align:null},"List of providers used in the project (auth, data, router, live, notification, auditLog, i18n or accessControl)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"version"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:null},"Version of the refine package.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"resourceCount"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",{parentName:"tr",align:null},"Number of total resources.")))),(0,n.kt)("p",null,"Additionally, the following information is extracted and collected from the HTTP header:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"IP Address"),(0,n.kt)("td",{parentName:"tr",align:null},"IP Address of the machine the request is coming from.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Hostname"),(0,n.kt)("td",{parentName:"tr",align:null},"Hostname of the machine the request is coming from.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Browser"),(0,n.kt)("td",{parentName:"tr",align:null},"Browser and browser version.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"OS"),(0,n.kt)("td",{parentName:"tr",align:null},"OS and OS version.")))),(0,n.kt)("h2",null,"How to opt-out?"),(0,n.kt)("p",null,"You can opt out of telemetry by simply adding ",(0,n.kt)("inlineCode",{parentName:"p"},"disableTelemetry")," prop to the ",(0,n.kt)("inlineCode",{parentName:"p"},"<Refine />")," component.")),(0,n.kt)(l.Z,{value:"refine-cli",label:"refine CLI",mdxType:"TabItem"},(0,n.kt)("p",null,"After running a command with the ",(0,n.kt)("inlineCode",{parentName:"p"},"refine")," CLI, a single HTTP POST request is sent to ",(0,n.kt)("inlineCode",{parentName:"p"},"https://telemetry.refine.dev/cli"),"."),(0,n.kt)("h2",null,"What is collected?"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"nodeEnv"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:null},"Specifies the environment in which an application is running.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"nodeVersion"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:null},"Installed Node.js version.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"os"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:null},"Operating system name.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"osVersion"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:null},"Operating system version.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"command"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:null},"Running script name.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"packages"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'{ "name": "string", "version": "string" }[]')),(0,n.kt)("td",{parentName:"tr",align:null},"Installed ",(0,n.kt)("inlineCode",{parentName:"td"},"refine")," packages.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"projectFramework"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:null},"Installed ",(0,n.kt)("inlineCode",{parentName:"td"},"react")," framework.")))),(0,n.kt)("p",null,"Additionally, the following information is extracted and collected from the HTTP header:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"IP Address"),(0,n.kt)("td",{parentName:"tr",align:null},"IP Address of the machine the request is coming from.")))),(0,n.kt)("h2",null,"How to opt-out?"),(0,n.kt)("p",null,"You can opt out of telemetry by simply adding ",(0,n.kt)("inlineCode",{parentName:"p"},"REFINE_NO_TELEMETRY=true")," to environment variables.")))))}g.isMDXComponent=!0}}]);