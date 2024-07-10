"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4285],{58860:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>f});var r=n(37953);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),l=c(n),d=o,f=l["".concat(p,".").concat(d)]||l[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[l]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},14834:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>b,frontMatter:()=>s,metadata:()=>c,toc:()=>l});n(37953);var r=n(58860);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={id:"custom-inputs",title:"Custom Inputs"},p=void 0,c={unversionedId:"api-reference/antd/components/inputs/custom-inputs",id:"version-3.xx.xx/api-reference/antd/components/inputs/custom-inputs",title:"Custom Inputs",description:"refine uses Ant Design's ` components to control and work with form data. Ant Design supports custom form items inside the  components. These items should be controllable via their value property and should implement onChange (or a custom callback name specified by 's trigger` prop).",source:"@site/versioned_docs/version-3.xx.xx/api-reference/antd/components/inputs/custom-inputs.md",sourceDirName:"api-reference/antd/components/inputs",slug:"/api-reference/antd/components/inputs/custom-inputs",permalink:"/docs/3.xx.xx/api-reference/antd/components/inputs/custom-inputs",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/antd/components/inputs/custom-inputs.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1720618583,formattedLastUpdatedAt:"Jul 10, 2024",frontMatter:{id:"custom-inputs",title:"Custom Inputs"},sidebar:"someSidebar",previous:{title:"<FilterDropdown>",permalink:"/docs/3.xx.xx/api-reference/antd/components/filter-dropdown"},next:{title:"Theme",permalink:"/docs/3.xx.xx/api-reference/antd/customization/antd-custom-theme"}},m={},l=[{value:"Example",id:"example",level:2},{value:"Example",id:"example-1",level:2}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",t)},d=u("DocThumbsUpDownFeedbackWidget"),f=u("CodeSandboxExample"),g={toc:l},y="wrapper";function b(e){var{components:t}=e,n=i(e,["components"]);return(0,r.yg)(y,a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"refine")," uses Ant Design's ",(0,r.yg)("a",{parentName:"p",href:"https://ant.design/components/form/"},(0,r.yg)("inlineCode",{parentName:"a"},"<Form>"))," components to control and work with form data. Ant Design supports custom form items inside the ",(0,r.yg)("a",{parentName:"p",href:"https://ant.design/components/form/#Form.Item"},(0,r.yg)("inlineCode",{parentName:"a"},"<Form.Item>"))," components. These items should be controllable via their ",(0,r.yg)("inlineCode",{parentName:"p"},"value")," property and should implement ",(0,r.yg)("inlineCode",{parentName:"p"},"onChange")," (or a custom callback name specified by ",(0,r.yg)("a",{parentName:"p",href:"https://ant.design/components/form/#Form.Item"},(0,r.yg)("inlineCode",{parentName:"a"},"<Form.Item>")),"'s ",(0,r.yg)("inlineCode",{parentName:"p"},"trigger")," prop)."),(0,r.yg)("p",null,"For some data types, displaying and editing as plain text may cause user experience problems."),(0,r.yg)("p",null,"Custom components may be useful when working with markdown (with markdown editor), JSON based rich text (draft, quill like editors), and HTML (a HTML editor). It can be used in table columns and form fields"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://ant.design/components/form/"},"Refer to the Ant Design docs for more detailed information about ",(0,r.yg)("inlineCode",{parentName:"a"},"<Form>"),". ","\u2192")),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)(d,{id:"example",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"We will demonstrate how to use custom input fields for markdown data by adding a markdown editor to edit and create forms."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/src/pages/posts/edit.tsx"',title:'"/src/pages/posts/edit.tsx"'},'import React, { useState } from "react";\nimport { IResourceComponentsProps } from "@pankod/refine-core";\nimport { Edit, Form, Input, useForm } from "@pankod/refine-antd";\n\n// highlight-start\nimport MDEditor from "@uiw/react-md-editor";\n// highlight-end\n\nimport { IPost } from "interfaces";\n\nexport const PostEdit: React.FC = (props) => {\n    const { formProps, saveButtonProps } = useForm<IPost>();\n\n    return (\n        <Edit {...props} saveButtonProps={saveButtonProps}>\n            <Form {...formProps} layout="vertical">\n                <Form.Item\n                    label="Title"\n                    name="title"\n                    rules={[\n                        {\n                            required: true,\n                        },\n                    ]}\n                >\n                    <Input />\n                </Form.Item>\n                // highlight-start\n                <Form.Item\n                    label="Content"\n                    name="content"\n                    rules={[\n                        {\n                            required: true,\n                        },\n                    ]}\n                >\n                    <MDEditor data-color-mode="light" />\n                </Form.Item>\n                // highlight-end\n            </Form>\n        </Edit>\n    );\n};\n')),(0,r.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/components/inputs/custom-inputs/markdown-input.png",alt:"Markdown input"}),(0,r.yg)("br",null)),(0,r.yg)("h2",{id:"example-1"},"Example"),(0,r.yg)(d,{id:"example-1",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)(f,{path:"input-custom",mdxType:"CodeSandboxExample"})))}b.isMDXComponent=!0}}]);