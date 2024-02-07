"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[82361],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,g=u["".concat(d,".").concat(m)]||u[m]||c[m]||a;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},70075:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>c});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const l={id:"adding-sort-and-filters",title:"6. Adding Sort and Filters",tutorial:{order:0,prev:"tutorial/adding-crud-pages/{preferredUI}/add-delete-feature",next:"tutorial/understanding-authprovider/index"}},d=void 0,p={unversionedId:"tutorial/adding-crud-pages/antd/adding-sort-and-filters",id:"tutorial/adding-crud-pages/antd/adding-sort-and-filters",title:"6. Adding Sort and Filters",description:"Adding Sorting",source:"@site/docs/tutorial/4-adding-crud-pages/antd/adding-sort-and-filters.md",sourceDirName:"tutorial/4-adding-crud-pages/antd",slug:"/tutorial/adding-crud-pages/antd/adding-sort-and-filters",permalink:"/docs/tutorial/adding-crud-pages/antd/adding-sort-and-filters",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/tutorial/4-adding-crud-pages/antd/adding-sort-and-filters.md",tags:[],version:"current",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1707306577,formattedLastUpdatedAt:"Feb 7, 2024",frontMatter:{id:"adding-sort-and-filters",title:"6. Adding Sort and Filters",tutorial:{order:0,prev:"tutorial/adding-crud-pages/{preferredUI}/add-delete-feature",next:"tutorial/understanding-authprovider/index"}}},s={},c=[{value:"Adding Sorting",id:"adding-sorting",level:2},{value:"Adding Filters",id:"adding-filters",level:2}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},m=u("Checklist"),g=u("ChecklistItem"),f={toc:c};function k(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},f,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"adding-sorting"},"Adding Sorting"),(0,r.kt)("p",null,"We will use ",(0,r.kt)("inlineCode",{parentName:"p"},"<Table.Column/>"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"sorter")," prop to add sorting to the table. You just need to open ",(0,r.kt)("inlineCode",{parentName:"p"},"src/pages/blog-posts/list.tsx")," file and add the ",(0,r.kt)("inlineCode",{parentName:"p"},"sorter")," prop to the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Table.Column/>")," component of the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," column:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'<Table.Column\n  dataIndex="id"\n  title="Id"\n  //highlight-next-line\n  sorter\n/>\n')),(0,r.kt)("p",null,"Now, you can sort the data by ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," on the table."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you want to add multiple sorting capabilities to the table, you can add the ",(0,r.kt)("inlineCode",{parentName:"p"},"sorter")," prop by priority.\nFor example, if you want to sort the data by ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," first and then by ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," on the table, you can add ",(0,r.kt)("inlineCode",{parentName:"p"},"sorter")," prop as below:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},'```tsx\n<Table.Column\n    dataIndex="id"\n    title="Id"\n    //highlight-next-line\n    sorter\n/>\n<Table.Column\n    dataIndex="id"\n    title="Name"\n    //highlight-next-line\n    sorter={{ multiple: 1 }}\n/>\n```\n'))),(0,r.kt)("h2",{id:"adding-filters"},"Adding Filters"),(0,r.kt)("p",null,"We'll use ",(0,r.kt)("inlineCode",{parentName:"p"},"<Table.Column/>"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"filterDropdown")," prop and the ",(0,r.kt)("inlineCode",{parentName:"p"},"<FilterDropdown/>")," component to add filters to the table."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<FilterDropdown/>")," acts as a bridge between its child input and the ",(0,r.kt)("inlineCode",{parentName:"p"},"useTable")," hook, providing necessary props and handling filtering logic. To add filtering to the ",(0,r.kt)("inlineCode",{parentName:"p"},"category")," column, we'll use the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Select/>")," component from ",(0,r.kt)("strong",{parentName:"p"},"Ant Design")," as the child input and the ",(0,r.kt)("inlineCode",{parentName:"p"},"useSelect")," hook to get necessary props like ",(0,r.kt)("inlineCode",{parentName:"p"},"options"),"."),(0,r.kt)("p",null,"First of all, open the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/pages/blog-posts/list.tsx")," file and import the following components and hooks:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'```tsx\nimport { FilterDropdown, useSelect } from "@refinedev/antd";\nimport { Select } from "antd";\n```\n')),(0,r.kt)("p",null,"Then call the ",(0,r.kt)("inlineCode",{parentName:"p"},"useSelect")," hook with the ",(0,r.kt)("inlineCode",{parentName:"p"},"categories")," resource to fill the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Select/>")," component with category options:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'```tsx\nconst { selectProps: categorySelectProps } = useSelect({\n    resource: "categories",\n});\n```\n')),(0,r.kt)("p",null,"Finally, follow the steps below:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Add ",(0,r.kt)("inlineCode",{parentName:"li"},"filterDropdown")," prop to the ",(0,r.kt)("inlineCode",{parentName:"li"},"<Table.Column/>")," component of the ",(0,r.kt)("inlineCode",{parentName:"li"},"category")," column."),(0,r.kt)("li",{parentName:"ol"},"Add the ",(0,r.kt)("inlineCode",{parentName:"li"},"<FilterDropdown/>")," component as the return value of the prop. Then, pass the ",(0,r.kt)("inlineCode",{parentName:"li"},"props")," to the ",(0,r.kt)("inlineCode",{parentName:"li"},"<FilterDropdown/>")," component."),(0,r.kt)("li",{parentName:"ol"},"Add the ",(0,r.kt)("inlineCode",{parentName:"li"},"<Select/>")," component as the child of ",(0,r.kt)("inlineCode",{parentName:"li"},"<FilterDropdown/>")," component. Then, pass the ",(0,r.kt)("inlineCode",{parentName:"li"},"categorySelectProps")," to the ",(0,r.kt)("inlineCode",{parentName:"li"},"<Select/>")," component.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'<Table.Column\n  dataIndex={["category", "id"]}\n  title="category"\n  render={(value) => {\n    if (isLoading) {\n      return <TextField value="Loading..." />;\n    }\n\n    return <TextField value={categoriesData?.data.find((item) => item.id === value)?.title} />;\n  }}\n  //highlight-start\n  filterDropdown={(props) => (\n    <FilterDropdown {...props}>\n      <Select style={{ minWidth: 200 }} mode="multiple" placeholder="Select Category" {...categorySelectProps} />\n    </FilterDropdown>\n  )}\n  //highlight-end\n/>\n')),(0,r.kt)("p",null,"And now, you can search and filter the data by category on the table."),(0,r.kt)("p",null,"For more information, check out the following documents:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/select"},(0,r.kt)("strong",{parentName:"a"},"Ant Design")," ",(0,r.kt)("inlineCode",{parentName:"a"},"<Select/>"))," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/ui-integrations/ant-design/hooks/use-select"},(0,r.kt)("inlineCode",{parentName:"a"},"useSelect")," documentations","\u2192")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/table#components-table-demo-custom-filter-panel"},(0,r.kt)("strong",{parentName:"a"},"Ant Design")," ",(0,r.kt)("inlineCode",{parentName:"a"},"<Table/>")," documentation")," for the ",(0,r.kt)("inlineCode",{parentName:"p"},"filterDropdown")," prop."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"/docs/ui-integrations/ant-design/components/filter-dropdown"},(0,r.kt)("inlineCode",{parentName:"a"},"<FilterDropdown/>")," documentation")," for the ",(0,r.kt)("inlineCode",{parentName:"p"},"<FilterDropdown/>")," component.")))),(0,r.kt)("br",null),(0,r.kt)(m,{mdxType:"Checklist"},(0,r.kt)(g,{id:"add-search-and-filters-antd",mdxType:"ChecklistItem"},"I have added search and filters to the table.")))}k.isMDXComponent=!0}}]);