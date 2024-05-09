"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3348],{15680:(e,t,a)=>{a.d(t,{xA:()=>s,yg:()=>g});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=d(a),c=r,g=u["".concat(l,".").concat(c)]||u[c]||m[c]||o;return a?n.createElement(g,i(i({ref:t},s),{},{components:a})):n.createElement(g,i({ref:t},s))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:r,i[1]=p;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},58229:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>p,metadata:()=>d,toc:()=>u});a(96540);var n=a(15680);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const p={id:"useImport",title:"useImport"},l=void 0,d={unversionedId:"api-reference/antd/hooks/import/useImport",id:"version-3.xx.xx/api-reference/antd/hooks/import/useImport",title:"useImport",description:"useImport hook allows you to import data from a CSV file. For each row in the file, it calls the create or createMany method of your data provider according to your configuration.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/antd/hooks/import/useImport.md",sourceDirName:"api-reference/antd/hooks/import",slug:"/api-reference/antd/hooks/import/useImport",permalink:"/docs/3.xx.xx/api-reference/antd/hooks/import/useImport",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/antd/hooks/import/useImport.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1715256221,formattedLastUpdatedAt:"May 9, 2024",frontMatter:{id:"useImport",title:"useImport"},sidebar:"someSidebar",previous:{title:"useStepsForm",permalink:"/docs/3.xx.xx/api-reference/antd/hooks/form/useStepsForm"},next:{title:"useSimpleList",permalink:"/docs/3.xx.xx/api-reference/antd/hooks/list/useSimpleList"}},s={},u=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>resourceName</code>",id:"resourcename",level:3},{value:"<code>mapData</code>",id:"mapdata",level:3},{value:"<code>paparseOptions</code>",id:"paparseoptions",level:3},{value:"<code>batchSize</code>",id:"batchsize",level:3},{value:"<code>onFinish</code>",id:"onfinish",level:3},{value:"<code>metaData</code>",id:"metadata",level:3},{value:"<code>onProgress</code>",id:"onprogress",level:3},{value:"<code>dataProviderName</code>",id:"dataprovidername",level:3},{value:"Return Values",id:"return-values",level:2},{value:"<code>buttonProps</code>",id:"buttonprops",level:3},{value:"<code>type</code>",id:"type",level:4},{value:"<code>loading</code>",id:"loading",level:4},{value:"<code>uploadProps</code>",id:"uploadprops",level:3},{value:"<code>onChange</code>",id:"onchange",level:4},{value:"<code>beforeUpload</code>",id:"beforeupload",level:4},{value:"<code>showUploadList</code>",id:"showuploadlist",level:4},{value:"<code>accept</code>",id:"accept",level:4},{value:"<code>isLoading</code>",id:"isloading",level:3},{value:"<code>mutationResult</code>",id:"mutationresult",level:3},{value:"FAQ",id:"faq",level:2},{value:"Handling Relational Data",id:"handling-relational-data",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3},{value:"Return Values",id:"return-values-1",level:3},{value:"Type Parameters",id:"type-parameters",level:3}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.yg)("div",t)},c=m("DocThumbsUpDownFeedbackWidget"),g=m("PropsTable"),y={toc:u},h="wrapper";function f(e){var{components:t}=e,a=i(e,["components"]);return(0,n.yg)(h,o(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){r(e,t,a[t])}))}return e}({},y,a),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"useImport")," hook allows you to import data from a ",(0,n.yg)("inlineCode",{parentName:"p"},"CSV")," file. For each row in the file, it calls the ",(0,n.yg)("inlineCode",{parentName:"p"},"create")," or ",(0,n.yg)("inlineCode",{parentName:"p"},"createMany")," method of your data provider according to your configuration."),(0,n.yg)("p",null,"Internally, it uses ",(0,n.yg)("a",{parentName:"p",href:"https://www.papaparse.com/docs"},"Papa Parse")," to parse the file contents."),(0,n.yg)("p",null,"It will return properties that are compatible with Ant Design ",(0,n.yg)("a",{parentName:"p",href:"https://ant.design/components/upload/"},(0,n.yg)("inlineCode",{parentName:"a"},"<Upload>"))," and ",(0,n.yg)("a",{parentName:"p",href:"https://ant.design/components/button/"},(0,n.yg)("inlineCode",{parentName:"a"},"<Button>"))," components."),(0,n.yg)("admonition",{type:"info"},(0,n.yg)("p",{parentName:"admonition"},(0,n.yg)("inlineCode",{parentName:"p"},"useImport")," hook is extended from ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/import-export/useImport/"},(0,n.yg)("inlineCode",{parentName:"a"},"useImport"))," hook from the ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/v3/packages/core"},(0,n.yg)("inlineCode",{parentName:"a"},"@pankod/refine-core"))," package. This means that you can use all the features of ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/import-export/useImport/"},(0,n.yg)("inlineCode",{parentName:"a"},"useImport"))," hook.")),(0,n.yg)("h2",{id:"basic-usage"},"Basic Usage"),(0,n.yg)(c,{id:"basic-usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"Here is a basic usage example of ",(0,n.yg)("inlineCode",{parentName:"p"},"useImport")," hook:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useImport, ImportButton } from "@pankod/refine-antd";\n\nexport const PostList: React.FC = () => {\n  const importProps = useImport();\n\n  return <ImportButton {...importProps}>Import</ImportButton>;\n};\n')),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/antd/components/buttons/import-button/"},"Refer to the ",(0,n.yg)("inlineCode",{parentName:"a"},"<ImportButton>")," interface for more information ","\u2192")),(0,n.yg)("p",null,"Also, you can use the ",(0,n.yg)("inlineCode",{parentName:"p"},"inputProps")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"uploadProps")," properties without the ",(0,n.yg)("inlineCode",{parentName:"p"},"<ImportButton>")," component for more customization:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useImport, Upload, Button } from "@pankod/refine-antd";\n\nexport const PostList: React.FC = () => {\n  const { buttonProps, uploadProps } = useImport();\n\n  return (\n    <Upload {...uploadProps}>\n      <Button {...buttonProps}>Import</Button>\n    </Upload>\n  );\n};\n'))),(0,n.yg)("h2",{id:"properties"},"Properties"),(0,n.yg)("h3",{id:"resourcename"},(0,n.yg)("inlineCode",{parentName:"h3"},"resourceName")),(0,n.yg)(c,{id:"resourcename",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"Default: It reads the ",(0,n.yg)("inlineCode",{parentName:"p"},"resource")," value from the current URL.")),(0,n.yg)("p",null,"Determines which resource is passed to the ",(0,n.yg)("inlineCode",{parentName:"p"},"create")," or ",(0,n.yg)("inlineCode",{parentName:"p"},"createMany")," method of your data provider."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-ts"},'useImport({\n  resourceName: "posts",\n});\n'))),(0,n.yg)("h3",{id:"mapdata"},(0,n.yg)("inlineCode",{parentName:"h3"},"mapData")),(0,n.yg)(c,{id:"mapdata",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"If you want to map the data before sending it to a data provider method, you can use the ",(0,n.yg)("inlineCode",{parentName:"p"},"mapData")," property."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-ts"},"useImport({\n  mapData: (data) => ({\n    ...data,\n    category: {\n      id: data.categoryId,\n    },\n  }),\n});\n"))),(0,n.yg)("h3",{id:"paparseoptions"},(0,n.yg)("inlineCode",{parentName:"h3"},"paparseOptions")),(0,n.yg)(c,{id:"paparseoptions",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"You can pass any Papa Parse ",(0,n.yg)("a",{parentName:"p",href:"https://www.papaparse.com/docs#config"},"options")," to the ",(0,n.yg)("inlineCode",{parentName:"p"},"paparseOptions")," property."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-ts"},"useImport({\n  paparseOptions: {\n    header: true,\n  },\n});\n"))),(0,n.yg)("h3",{id:"batchsize"},(0,n.yg)("inlineCode",{parentName:"h3"},"batchSize")),(0,n.yg)(c,{id:"batchsize",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"Default: ",(0,n.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER"},(0,n.yg)("inlineCode",{parentName:"a"},"Number.MAX_SAFE_INTEGER")))),(0,n.yg)("p",null,"If you want to send the data in batches, you can use the ",(0,n.yg)("inlineCode",{parentName:"p"},"batchSize")," property. When the ",(0,n.yg)("inlineCode",{parentName:"p"},"batchSize")," is 1, it calls the ",(0,n.yg)("inlineCode",{parentName:"p"},"create")," method of your data provider for each row in the file. When the ",(0,n.yg)("inlineCode",{parentName:"p"},"batchSize")," is greater than 1, it calls the ",(0,n.yg)("inlineCode",{parentName:"p"},"createMany")," method of your data provider for each batch."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-ts"},"useImport({\n  batchSize: 1,\n});\n"))),(0,n.yg)("h3",{id:"onfinish"},(0,n.yg)("inlineCode",{parentName:"h3"},"onFinish")),(0,n.yg)(c,{id:"onfinish",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"If you want to do something after the import is finished, you can use the ",(0,n.yg)("inlineCode",{parentName:"p"},"onFinish")," property. It returns an object with two properties: ",(0,n.yg)("inlineCode",{parentName:"p"},"succeeded")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"errored")," which contain the responses of the successful and failed requests."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-ts"},"useImport({\n  onFinish: (result) => {\n    // success requests response\n    result.succeeded.forEach((item) => {\n      console.log(item);\n    });\n\n    // failed requests response\n    result.errored.forEach((item) => {\n      console.log(item);\n    });\n  },\n});\n"))),(0,n.yg)("h3",{id:"metadata"},(0,n.yg)("inlineCode",{parentName:"h3"},"metaData")),(0,n.yg)(c,{id:"metadata",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"If you want to send additional data to the ",(0,n.yg)("inlineCode",{parentName:"p"},"create")," or ",(0,n.yg)("inlineCode",{parentName:"p"},"createMany")," method of your data provider, you can use the ",(0,n.yg)("inlineCode",{parentName:"p"},"metaData")," property."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-ts"},'useImport({\n  metaData: {\n    foo: "bar",\n  },\n});\n'))),(0,n.yg)("h3",{id:"onprogress"},(0,n.yg)("inlineCode",{parentName:"h3"},"onProgress")),(0,n.yg)(c,{id:"onprogress",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"A callback function that is called when the import progress changes. It returns an object with two properties: ",(0,n.yg)("inlineCode",{parentName:"p"},"totalAmount")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"processedAmount")," which contain the total amount of rows and the processed amount of rows."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-ts"},"useImport({\n  onProgress: ({ totalAmount, processedAmount }) => {\n    // progress percentage\n    console.log((processedAmount / totalAmount) * 100);\n  },\n});\n")),(0,n.yg)("p",null,"By default, it shows a notification with the progress percentage. You can override this behavior by passing a custom ",(0,n.yg)("inlineCode",{parentName:"p"},"onProgress")," function.")),(0,n.yg)("h3",{id:"dataprovidername"},(0,n.yg)("inlineCode",{parentName:"h3"},"dataProviderName")),(0,n.yg)(c,{id:"dataprovidername",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"If there is more than one ",(0,n.yg)("inlineCode",{parentName:"p"},"dataProvider"),", you can specify which one to use by passing the ",(0,n.yg)("inlineCode",{parentName:"p"},"dataProviderName")," prop. It is useful when you have a different data provider for different resources."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'useImport({\n  dataProviderName: "second-data-provider",\n});\n'))),(0,n.yg)("h2",{id:"return-values"},"Return Values"),(0,n.yg)("h3",{id:"buttonprops"},(0,n.yg)("inlineCode",{parentName:"h3"},"buttonProps")),(0,n.yg)(c,{id:"buttonprops",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"Button properties that are compatible with Ant Design ",(0,n.yg)("a",{parentName:"p",href:"https://ant.design/components/button/"},(0,n.yg)("inlineCode",{parentName:"a"},"<Button>"))," component."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useImport, Button } from "@pankod/refine-antd";\n\nexport const PostList: React.FC = () => {\n  const { buttonProps } = useImport();\n\n  return <Button {...buttonProps}>Import</Button>;\n};\n'))),(0,n.yg)("h4",{id:"type"},(0,n.yg)("inlineCode",{parentName:"h4"},"type")),(0,n.yg)(c,{id:"type",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"It is set to ",(0,n.yg)("inlineCode",{parentName:"p"},"default")," by default.")),(0,n.yg)("h4",{id:"loading"},(0,n.yg)("inlineCode",{parentName:"h4"},"loading")),(0,n.yg)(c,{id:"loading",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"If the import is in progress, it sets the loading state of the button.")),(0,n.yg)("h3",{id:"uploadprops"},(0,n.yg)("inlineCode",{parentName:"h3"},"uploadProps")),(0,n.yg)(c,{id:"uploadprops",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"Upload properties that are compatible with Ant Design ",(0,n.yg)("a",{parentName:"p",href:"https://ant.design/components/upload/"},(0,n.yg)("inlineCode",{parentName:"a"},"<Upload>"))," component."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useImport, Upload } from "@pankod/refine-antd";\n\nexport const PostList: React.FC = () => {\n  const { uploadProps } = useImport();\n\n  return <Upload {...uploadProps}>Import</Upload>;\n};\n'))),(0,n.yg)("h4",{id:"onchange"},(0,n.yg)("inlineCode",{parentName:"h4"},"onChange")),(0,n.yg)(c,{id:"onchange",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"Handles the file upload.")),(0,n.yg)("h4",{id:"beforeupload"},(0,n.yg)("inlineCode",{parentName:"h4"},"beforeUpload")),(0,n.yg)(c,{id:"beforeupload",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"By default, ",(0,n.yg)("inlineCode",{parentName:"p"},"() => false")," is set to prevent the file from being uploaded automatically.")),(0,n.yg)("h4",{id:"showuploadlist"},(0,n.yg)("inlineCode",{parentName:"h4"},"showUploadList")),(0,n.yg)(c,{id:"showuploadlist",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"By default, ",(0,n.yg)("inlineCode",{parentName:"p"},"false")," is set to hide the upload list.")),(0,n.yg)("h4",{id:"accept"},(0,n.yg)("inlineCode",{parentName:"h4"},"accept")),(0,n.yg)(c,{id:"accept",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"By default, ",(0,n.yg)("inlineCode",{parentName:"p"},'".csv"')," is set to accept only CSV files.")),(0,n.yg)("h3",{id:"isloading"},(0,n.yg)("inlineCode",{parentName:"h3"},"isLoading")),(0,n.yg)(c,{id:"isloading",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"It is a boolean value that indicates whether the import is in progress.")),(0,n.yg)("h3",{id:"mutationresult"},(0,n.yg)("inlineCode",{parentName:"h3"},"mutationResult")),(0,n.yg)(c,{id:"mutationresult",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"Result of the ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/data/useCreate/"},(0,n.yg)("inlineCode",{parentName:"a"},"useCreate"))," or ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/data/useCreateMany/"},(0,n.yg)("inlineCode",{parentName:"a"},"useCreateMany"))," method of your data provider.")),(0,n.yg)("h2",{id:"faq"},"FAQ"),(0,n.yg)("h3",{id:"handling-relational-data"},"Handling Relational Data"),(0,n.yg)(c,{id:"handling-relational-data",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"Sometimes you need to process your parsed ",(0,n.yg)("inlineCode",{parentName:"p"},"CSV")," data for certain cases, such as when your data includes relational data and references to other data, or when your backend API requires a specific data format. To handle this, you can use the ",(0,n.yg)("inlineCode",{parentName:"p"},"mapData")," option in ",(0,n.yg)("inlineCode",{parentName:"p"},"useImport")," to customize the process."),(0,n.yg)("p",null,"For example, the ",(0,n.yg)("inlineCode",{parentName:"p"},"CSV")," file is as follows:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-csv",metastring:'title="dummy.csv"',title:'"dummy.csv"'},'"title","content","status","categoryId","userId"\n"dummy title 1","dummy content 1","rejected","3","8"\n"dummy title 2","dummy content 2","draft","44","8"\n"dummy title 3","cummy content 3","published","41","10"\n')),(0,n.yg)("p",null,"Since the user and category are relational fields, we store only their id fields in the exported file as userId and categoryId respectively. To create resources from this file, we need to map the data back to the required format of the backend API. To do this, we use the mapData option in useImport. Here's an example:"),(0,n.yg)("p",null,"When creating these resources back, we should map it back to our backend API's required format. ",(0,n.yg)("inlineCode",{parentName:"p"},"mapData")," option allows us to do this. Here is an example:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-ts"},"useImport<IPostFile>({\n  mapData: (item) => {\n    return {\n      title: item.title,\n      content: item.content,\n      status: item.status,\n      category: {\n        id: item.categoryId,\n      },\n      user: {\n        id: item.userId,\n      },\n    };\n  },\n});\n\ninterface IPostFile {\n  title: string;\n  status: string;\n  content: string;\n  categoryId: string;\n  userId: string;\n}\n")),(0,n.yg)("p",null,"With this code, the parsed data will be mapped to conform to the API requirements.")),(0,n.yg)("h2",{id:"api-reference"},"API Reference"),(0,n.yg)("h3",{id:"properties-1"},"Properties"),(0,n.yg)(c,{id:"properties-1",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)(g,{module:"@pankod/refine-antd/useImport",mdxType:"PropsTable"})),(0,n.yg)("h3",{id:"return-values-1"},"Return Values"),(0,n.yg)(c,{id:"return-values-1",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Property"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"),(0,n.yg)("th",{parentName:"tr",align:null},"Type"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"buttonProps"),(0,n.yg)("td",{parentName:"tr",align:null},"Properties that are compatible with Ant Design ",(0,n.yg)("inlineCode",{parentName:"td"},"<Button>")," component"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"#buttonprops"},(0,n.yg)("inlineCode",{parentName:"a"},"ButtonProps")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"uploadProps"),(0,n.yg)("td",{parentName:"tr",align:null},"Properties that are compatible with Ant Design ",(0,n.yg)("inlineCode",{parentName:"td"},"<Upload>")," component"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"#uploadprops"},(0,n.yg)("inlineCode",{parentName:"a"},"UploadProps")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"isLoading"),(0,n.yg)("td",{parentName:"tr",align:null},"It can be used to handle the ",(0,n.yg)("inlineCode",{parentName:"td"},"loading")," status for the Import operation"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"boolean"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"mutationResult"),(0,n.yg)("td",{parentName:"tr",align:null},"Result of the mutation/mutations of creating imported resources"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useMutation"},(0,n.yg)("inlineCode",{parentName:"a"},"UseMutationResult<"),(0,n.yg)("br",null),(0,n.yg)("inlineCode",{parentName:"a"},"{ data: TData },"),(0,n.yg)("br",null),(0,n.yg)("inlineCode",{parentName:"a"},"TError,"),(0,n.yg)("br",null),(0,n.yg)("inlineCode",{parentName:"a"}," { resource: string; values: TVariables; },"),(0,n.yg)("br",null),(0,n.yg)("inlineCode",{parentName:"a"}," unknown>")),") ","|"," ",(0,n.yg)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useMutation"},(0,n.yg)("inlineCode",{parentName:"a"},"UseMutationResult<"),(0,n.yg)("br",null),(0,n.yg)("inlineCode",{parentName:"a"},"{ data: TData[]},"),(0,n.yg)("br",null),(0,n.yg)("inlineCode",{parentName:"a"},"TError,"),(0,n.yg)("br",null),(0,n.yg)("inlineCode",{parentName:"a"}," { resource: string; values: TVariables[]; },"),(0,n.yg)("br",null),(0,n.yg)("inlineCode",{parentName:"a"}," unknown>")),")"))))),(0,n.yg)("h3",{id:"type-parameters"},"Type Parameters"),(0,n.yg)(c,{id:"type-parameters",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Property"),(0,n.yg)("th",{parentName:"tr",align:null},"Desription"),(0,n.yg)("th",{parentName:"tr",align:null},"Default"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"TItem"),(0,n.yg)("td",{parentName:"tr",align:null},"Interface of parsed csv data"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"any"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"TData"),(0,n.yg)("td",{parentName:"tr",align:null},"Result type of the data query type that extends ",(0,n.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#baserecord"},(0,n.yg)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#baserecord"},(0,n.yg)("inlineCode",{parentName:"a"},"BaseRecord")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"TError"),(0,n.yg)("td",{parentName:"tr",align:null},"Custom error object that extends ",(0,n.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#httperror"},(0,n.yg)("inlineCode",{parentName:"a"},"HttpError"))),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#httperror"},(0,n.yg)("inlineCode",{parentName:"a"},"HttpError")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"TVariables"),(0,n.yg)("td",{parentName:"tr",align:null},"Values for mutation function"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"any")))))))}f.isMDXComponent=!0}}]);