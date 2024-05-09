"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[41205],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>y});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=s(t),c=o,y=u["".concat(l,".").concat(c)]||u[c]||g[c]||a;return t?r.createElement(y,i(i({ref:n},d),{},{components:t})):r.createElement(y,i({ref:n},d))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=c;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[u]="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},10803:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>b,frontMatter:()=>p,metadata:()=>s,toc:()=>u});t(96540);var r=t(15680);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const p={id:"useRadioGroup",title:"useRadioGroup"},l=void 0,s={unversionedId:"api-reference/antd/hooks/field/useRadioGroup",id:"version-3.xx.xx/api-reference/antd/hooks/field/useRadioGroup",title:"useRadioGroup",description:"useRadioGroup hook allows you to manage an Ant Design Radio.Group component when records in a resource needs to be used as radio options.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/antd/hooks/field/useRadioGroup.md",sourceDirName:"api-reference/antd/hooks/field",slug:"/api-reference/antd/hooks/field/useRadioGroup",permalink:"/docs/3.xx.xx/api-reference/antd/hooks/field/useRadioGroup",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/antd/hooks/field/useRadioGroup.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1715256221,formattedLastUpdatedAt:"May 9, 2024",frontMatter:{id:"useRadioGroup",title:"useRadioGroup"},sidebar:"someSidebar",previous:{title:"useCheckboxGroup",permalink:"/docs/3.xx.xx/api-reference/antd/hooks/field/useCheckboxGroup"},next:{title:"useSelect",permalink:"/docs/3.xx.xx/api-reference/antd/hooks/field/useSelect/"}},d={},u=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"<code>resource</code>",id:"resource",level:3},{value:"<code>defaultValue</code>",id:"defaultvalue",level:3},{value:"<code>optionLabel</code> and <code>optionValue</code>",id:"optionlabel-and-optionvalue",level:3},{value:"<code>filters</code>",id:"filters",level:3},{value:"<code>sort</code>",id:"sort",level:3},{value:"<code>fetchSize</code>",id:"fetchsize",level:3},{value:"<code>queryOptions</code>",id:"queryoptions",level:3},{value:"<code>pagination</code>",id:"pagination",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3},{value:"Return values",id:"return-values",level:3},{value:"Example",id:"example",level:2}],g=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",n)},c=g("DocThumbsUpDownFeedbackWidget"),y=g("PropsTable"),m=g("CodeSandboxExample"),h={toc:u},f="wrapper";function b(e){var{components:n}=e,t=i(e,["components"]);return(0,r.yg)(f,a(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){o(e,n,t[n])}))}return e}({},h,t),{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"useRadioGroup")," hook allows you to manage an Ant Design ",(0,r.yg)("a",{parentName:"p",href:"https://ant.design/components/radio/#components-radio-demo-radiogroup-with-name"},"Radio.Group")," component when records in a resource needs to be used as radio options."),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)(c,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"We will demonstrate how to get data at ",(0,r.yg)("inlineCode",{parentName:"p"},"/languages")," endpoint from the ",(0,r.yg)("inlineCode",{parentName:"p"},"https://api.fake-rest.refine.dev")," REST API."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts",metastring:'title="https://api.fake-rest.refine.dev/languages"',title:'"https://api.fake-rest.refine.dev/languages"'},'{\n  [\n    {\n      id: 1,\n      title: "Turkish",\n    },\n    {\n      id: 2,\n      title: "English",\n    },\n    {\n      id: 3,\n      title: "German",\n    },\n  ];\n}\n')),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/posts/create.tsx"',title:'"pages/posts/create.tsx"'},'import { Form, Radio, useRadioGroup } from "@pankod/refine-antd";\n\nexport const PostCreate = () => {\n  // highlight-start\n  const { radioGroupProps } = useRadioGroup<ILanguage>({\n    resource: "languages",\n  });\n  // highlight-end\n\n  return (\n    <Form>\n      <Form.Item label="Languages" name="languages">\n        // highlight-next-line\n        <Radio.Group {...radioGroupProps} />\n      </Form.Item>\n    </Form>\n  );\n};\n\ninterface ILanguage {\n  id: number;\n  title: string;\n}\n')),(0,r.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/hooks/useRadioGroup/basic-usage.png",alt:"Radio group"}),(0,r.yg)("br",null),(0,r.yg)("p",null,"All we have to do is pass the ",(0,r.yg)("inlineCode",{parentName:"p"},"radioGroupProps")," it returns to the ",(0,r.yg)("inlineCode",{parentName:"p"},"<Radio.Group>")," component."),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"useRadioGroup")," uses the ",(0,r.yg)("inlineCode",{parentName:"p"},"useList")," hook for fetching data. ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/data/useList"},"Refer to Ant Design ",(0,r.yg)("inlineCode",{parentName:"a"},"useList")," hook for details. ","\u2192"))),(0,r.yg)("h2",{id:"options"},"Options"),(0,r.yg)("h3",{id:"resource"},(0,r.yg)("inlineCode",{parentName:"h3"},"resource")),(0,r.yg)(c,{id:"resource",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'const { radioGroupProps } = useRadioGroup({\n  resource: "languages",\n});\n')),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"resource")," property determines API resource endpoint to fetch records from ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/data-provider"},(0,r.yg)("inlineCode",{parentName:"a"},"dataProvider")),". It returns properly configured ",(0,r.yg)("inlineCode",{parentName:"p"},"options")," values for radio buttons."),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://ant.design/components/radio"},"Refer to the Ant Design's ",(0,r.yg)("inlineCode",{parentName:"a"},"Radio.Group")," component documentation for detailed info on ",(0,r.yg)("inlineCode",{parentName:"a"},"options"),". ","\u2192"))),(0,r.yg)("h3",{id:"defaultvalue"},(0,r.yg)("inlineCode",{parentName:"h3"},"defaultValue")),(0,r.yg)(c,{id:"defaultvalue",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'const { selectProps } = useRadioGroup({\n  resource: "languages",\n  // highlight-next-line\n  defaultValue: 1,\n});\n')),(0,r.yg)("p",null,"The easiest way to selecting a default value for an radio button field is by passing in ",(0,r.yg)("inlineCode",{parentName:"p"},"defaultValue"),".")),(0,r.yg)("h3",{id:"optionlabel-and-optionvalue"},(0,r.yg)("inlineCode",{parentName:"h3"},"optionLabel")," and ",(0,r.yg)("inlineCode",{parentName:"h3"},"optionValue")),(0,r.yg)(c,{id:"optionlabel-and-optionvalue",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'const { radioGroupProps } = useRadioGroup({\n  resource: "languages",\n  // highlight-start\n  optionLabel: "title",\n  optionValue: "id",\n  // highlight-end\n});\n')),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"optionLabel")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"optionValue")," allows you to change the values and appearances of your options. Default values are ",(0,r.yg)("inlineCode",{parentName:"p"},'optionLabel = "title"')," and ",(0,r.yg)("inlineCode",{parentName:"p"},'optionValue = "id"'),"."),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"Supports use with ",(0,r.yg)("inlineCode",{parentName:"p"},"optionLabel")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"optionValue")," ",(0,r.yg)("a",{parentName:"p",href:"https://lodash.com/docs/4.17.15#get"},"Object path")," syntax."),(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'const { options } = useSelect({\n  resource: "categories",\n  // highlight-start\n  optionLabel: "nested.title",\n  optionValue: "nested.id",\n  // highlight-end\n});\n')))),(0,r.yg)("h3",{id:"filters"},(0,r.yg)("inlineCode",{parentName:"h3"},"filters")),(0,r.yg)(c,{id:"filters",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'const { radioGroupProps } = useRadioGroup({\n  resource: "languages",\n  // highlight-start\n  filters: [\n    {\n      field: "title",\n      operator: "eq",\n      value: "German",\n    },\n  ],\n  // highlight-end\n});\n')),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"filters")," allows us to add filters while fetching the data. For example, if you want to list only the ",(0,r.yg)("inlineCode",{parentName:"p"},"titles")," that are equal to ",(0,r.yg)("inlineCode",{parentName:"p"},'"German"')," records.")),(0,r.yg)("h3",{id:"sort"},(0,r.yg)("inlineCode",{parentName:"h3"},"sort")),(0,r.yg)(c,{id:"sort",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'const { radioGroupProps } = useRadioGroup({\n  resource: "languages",\n  // highlight-start\n  sort: [\n    {\n      field: "title",\n      order: "asc",\n    },\n  ],\n  // highlight-end\n});\n')),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"sort")," allows us to sort the ",(0,r.yg)("inlineCode",{parentName:"p"},"options"),". For example, if you want to sort your list according to ",(0,r.yg)("inlineCode",{parentName:"p"},"title")," by ascending.")),(0,r.yg)("h3",{id:"fetchsize"},(0,r.yg)("inlineCode",{parentName:"h3"},"fetchSize")),(0,r.yg)(c,{id:"fetchsize",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'const { selectProps } = useRadioGroup({\n  resource: "languages",\n  // highlight-next-line\n  fetchSize: 20,\n});\n')),(0,r.yg)("p",null,"Amount of records to fetch in radio group buttons.")),(0,r.yg)("h3",{id:"queryoptions"},(0,r.yg)("inlineCode",{parentName:"h3"},"queryOptions")),(0,r.yg)(c,{id:"queryoptions",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'const { radioGroupProps } = useRadioGroup({\n  resource: "languages",\n  // highlight-start\n  queryOptions: {\n    onError: () => {\n      console.log("triggers when on query return Error");\n    },\n  },\n  // highlight-end\n});\n')),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useQuery"},"useQuery")," options can be set by passing ",(0,r.yg)("inlineCode",{parentName:"p"},"queryOptions")," property.")),(0,r.yg)("h3",{id:"pagination"},(0,r.yg)("inlineCode",{parentName:"h3"},"pagination")),(0,r.yg)(c,{id:"pagination",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"Allows us to set page and items per page values."),(0,r.yg)("p",null,"For example imagine that we have 1000 post records:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},'const { selectProps } = useSelect({\n  resource: "categories",\n  // highlight-next-line\n  pagination: { current: 3, pageSize: 8 },\n});\n')),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Listing will start from page 3 showing 8 records."))),(0,r.yg)("h2",{id:"api-reference"},"API Reference"),(0,r.yg)("h3",{id:"properties"},"Properties"),(0,r.yg)(c,{id:"properties",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)(y,{module:"@pankod/refine-antd/useRadioGroup",mdxType:"PropsTable"})),(0,r.yg)("h3",{id:"return-values"},"Return values"),(0,r.yg)(c,{id:"return-values",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Property"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"radioGroupProps"),(0,r.yg)("td",{parentName:"tr",align:null},"Ant design radio group props"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://ant.design/components/radio/#RadioGroup"},(0,r.yg)("inlineCode",{parentName:"a"},"Radio Group")))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"queryResult"),(0,r.yg)("td",{parentName:"tr",align:null},"Results of the query of a record"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useQuery"},(0,r.yg)("inlineCode",{parentName:"a"},"QueryObserverResult<{ data: TData }>"))))))),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)(c,{id:"example",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)(m,{path:"field-antd-use-radio-group",mdxType:"CodeSandboxExample"})))}b.isMDXComponent=!0}}]);