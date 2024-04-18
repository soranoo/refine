"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[67711],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>h});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(t),m=o,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return t?r.createElement(h,a(a({ref:n},c),{},{components:t})):r.createElement(h,a({ref:n},c))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var d=2;d<i;d++)a[d]=t[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},39231:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>y,frontMatter:()=>s,metadata:()=>d,toc:()=>p});t(96540);var r=t(15680);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const s={title:"Delete",swizzle:!0},l=void 0,d={unversionedId:"ui-integrations/chakra-ui/components/buttons/delete-button/index",id:"ui-integrations/chakra-ui/components/buttons/delete-button/index",title:"Delete",description:"` uses Chakra UI's  and ` components.",source:"@site/docs/ui-integrations/chakra-ui/components/buttons/delete-button/index.md",sourceDirName:"ui-integrations/chakra-ui/components/buttons/delete-button",slug:"/ui-integrations/chakra-ui/components/buttons/delete-button/",permalink:"/docs/ui-integrations/chakra-ui/components/buttons/delete-button/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/ui-integrations/chakra-ui/components/buttons/delete-button/index.md",tags:[],version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1713432458,formattedLastUpdatedAt:"Apr 18, 2024",frontMatter:{title:"Delete",swizzle:!0},sidebar:"mainSidebar",previous:{title:"Create",permalink:"/docs/ui-integrations/chakra-ui/components/buttons/create-button/"},next:{title:"Edit",permalink:"/docs/ui-integrations/chakra-ui/components/buttons/edit-button/"}},c={},p=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"recordItemId",id:"recorditemid",level:3},{value:"resource",id:"resource",level:3},{value:"onSuccess",id:"onsuccess",level:3},{value:"mutationMode",id:"mutationmode",level:3},{value:"hideText",id:"hidetext",level:3},{value:"accessControl",id:"accesscontrol",level:3},{value:"<del>resourceNameOrRouteName</del> <PropTag deprecated />",id:"resourcenameorroutename-",level:3},{value:"How to override confirm texts?",id:"how-to-override-confirm-texts",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],u=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",n)},m=u("DocThumbsUpDownFeedbackWidget"),h=u("PropTag"),g=u("PropsTable"),f={toc:p},v="wrapper";function y(e){var{components:n}=e,t=a(e,["components"]);return(0,r.yg)(v,i(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){o(e,n,t[n])}))}return e}({},f,t),{components:n,mdxType:"MDXLayout"}),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live shared",live:!0,shared:!0},"const { default: sharedRouterProvider } = LegacyRefineReactRouterV6;\nsetRefineProps({\n  legacyRouterProvider: sharedRouterProvider,\n  Layout: RefineChakra.Layout,\n  Sider: () => null,\n  catchAll: <RefineChakra.ErrorComponent />,\n});\n\nconst Wrapper = ({ children }) => {\n  return (\n    <ChakraUI.ChakraProvider theme={RefineChakra.refineTheme}>\n      {children}\n    </ChakraUI.ChakraProvider>\n  );\n};\n")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"<DeleteButton>")," uses Chakra UI's ",(0,r.yg)("a",{parentName:"p",href:"https://chakra-ui.com/docs/components/button/usage"},(0,r.yg)("inlineCode",{parentName:"a"},"<Button>"))," and ",(0,r.yg)("a",{parentName:"p",href:"https://chakra-ui.com/docs/components/popover/usage"},(0,r.yg)("inlineCode",{parentName:"a"},"<Popover>"))," components.\nWhen you try to delete something, a pop-up shows up and asks for confirmation. When confirmed it executes the ",(0,r.yg)("a",{parentName:"p",href:"/docs/data/hooks/use-delete"},(0,r.yg)("inlineCode",{parentName:"a"},"useDelete"))," method provided by your ",(0,r.yg)("a",{parentName:"p",href:"/docs/data/data-provider"},(0,r.yg)("inlineCode",{parentName:"a"},"dataProvider")),"."),(0,r.yg)("admonition",{title:"Good to know",type:"simple"},(0,r.yg)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,r.yg)("a",{parentName:"p",href:"/docs/packages/list-of-packages"},(0,r.yg)("strong",{parentName:"a"},"Refine CLI")))),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)(m,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=420px hideCode",live:!0,url:"http://localhost:3000",previewHeight:"420px",hideCode:!0},'setInitialRoutes(["/posts"]);\nimport { Refine } from "@refinedev/core";\nimport dataProvider from "@refinedev/simple-rest";\n\n// visible-block-start\nimport {\n  List,\n  // highlight-next-line\n  DeleteButton,\n} from "@refinedev/chakra-ui";\nimport {\n  TableContainer,\n  Table,\n  Thead,\n  Tr,\n  Th,\n  Tbody,\n  Td,\n} from "@chakra-ui/react";\nimport { useTable } from "@refinedev/react-table";\nimport { ColumnDef, flexRender } from "@tanstack/react-table";\n\nconst PostList: React.FC = () => {\n  const columns = React.useMemo<ColumnDef<IPost>[]>(\n    () => [\n      {\n        id: "id",\n        header: "ID",\n        accessorKey: "id",\n      },\n      {\n        id: "title",\n        header: "Title",\n        accessorKey: "title",\n      },\n      {\n        id: "actions",\n        header: "Actions",\n        accessorKey: "id",\n        cell: function render({ getValue }) {\n          return (\n            // highlight-start\n            <DeleteButton recordItemId={getValue() as number} />\n            // highlight-end\n          );\n        },\n      },\n    ],\n    [],\n  );\n\n  const { getHeaderGroups, getRowModel } = useTable({\n    columns,\n  });\n\n  return (\n    <List>\n      <TableContainer>\n        <Table variant="simple" whiteSpace="pre-line">\n          <Thead>\n            {getHeaderGroups().map((headerGroup) => (\n              <Tr key={headerGroup.id}>\n                {headerGroup.headers.map((header) => {\n                  return (\n                    <Th key={header.id}>\n                      {!header.isPlaceholder &&\n                        flexRender(\n                          header.column.columnDef.header,\n                          header.getContext(),\n                        )}\n                    </Th>\n                  );\n                })}\n              </Tr>\n            ))}\n          </Thead>\n          <Tbody>\n            {getRowModel().rows.map((row) => {\n              return (\n                <Tr key={row.id}>\n                  {row.getVisibleCells().map((cell) => {\n                    return (\n                      <Td key={cell.id}>\n                        {flexRender(\n                          cell.column.columnDef.cell,\n                          cell.getContext(),\n                        )}\n                      </Td>\n                    );\n                  })}\n                </Tr>\n              );\n            })}\n          </Tbody>\n        </Table>\n      </TableContainer>\n    </List>\n  );\n};\n\ninterface IPost {\n  id: number;\n  title: string;\n}\n// visible-block-end\n\nconst App = () => {\n  return (\n    <Refine\n      notificationProvider={RefineChakra.notificationProvider()}\n      dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n      resources={[\n        {\n          name: "posts",\n          list: PostList,\n        },\n      ]}\n    />\n  );\n};\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n'))),(0,r.yg)("h2",{id:"properties"},"Properties"),(0,r.yg)("h3",{id:"recorditemid"},"recordItemId"),(0,r.yg)(m,{id:"recorditemid",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"recordItemId")," allows us to manage which record will be deleted. By default, it will be read from the URL."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=200px",live:!0,url:"http://localhost:3000",previewHeight:"200px"},'setInitialRoutes(["/"]);\nimport { Refine } from "@refinedev/core";\nimport dataProvider from "@refinedev/simple-rest";\n\n// visible-block-start\nimport { DeleteButton } from "@refinedev/chakra-ui";\n\nconst MyDeleteComponent = () => {\n  return <DeleteButton recordItemId="123" />;\n};\n// visible-block-end\n\nconst App = () => {\n  const simpleRestDataProvider = dataProvider(\n    "https://api.fake-rest.refine.dev",\n  );\n\n  const customDataProvider = {\n    ...simpleRestDataProvider,\n    deleteOne: async ({ resource, id, variables }) => {\n      await new Promise((resolve) => setTimeout(resolve, 500));\n\n      return {\n        data: {},\n      };\n    },\n  };\n\n  return (\n    <Refine\n      notificationProvider={RefineChakra.notificationProvider()}\n      dataProvider={customDataProvider}\n      resources={[\n        {\n          name: "posts",\n          list: MyDeleteComponent,\n        },\n      ]}\n    />\n  );\n};\n\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n')),(0,r.yg)("p",null,"Clicking the button will trigger the ",(0,r.yg)("a",{parentName:"p",href:"/docs/data/hooks/use-delete"},(0,r.yg)("inlineCode",{parentName:"a"},"useDelete")),' method and then the record whose resource is "post" and whose id is "123" gets deleted.')),(0,r.yg)("h3",{id:"resource"},"resource"),(0,r.yg)(m,{id:"resource",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"resource")," allows us to manage which resource's record is going to be deleted. By default, it will be read from the URL."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=200px",live:!0,url:"http://localhost:3000",previewHeight:"200px"},'setInitialRoutes(["/"]);\n\nimport { Refine } from "@refinedev/core";\nimport dataProvider from "@refinedev/simple-rest";\n\n// visible-block-start\nimport { DeleteButton } from "@refinedev/chakra-ui";\n\nconst MyDeleteComponent = () => {\n  return <DeleteButton resource="categories" recordItemId="2" />;\n};\n// visible-block-end\n\nconst App = () => {\n  const simpleRestDataProvider = dataProvider(\n    "https://api.fake-rest.refine.dev",\n  );\n\n  const customDataProvider = {\n    ...simpleRestDataProvider,\n    deleteOne: async ({ resource, id, variables }) => {\n      await new Promise((resolve) => setTimeout(resolve, 500));\n\n      return {\n        data: {},\n      };\n    },\n  };\n\n  return (\n    <Refine\n      notificationProvider={RefineChakra.notificationProvider()}\n      dataProvider={customDataProvider}\n      resources={[\n        {\n          name: "posts",\n          list: MyDeleteComponent,\n        },\n        {\n          name: "categories",\n        },\n      ]}\n    />\n  );\n};\n\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n')),(0,r.yg)("p",null,"Clicking the button will trigger the ",(0,r.yg)("a",{parentName:"p",href:"/docs/data/hooks/use-delete"},(0,r.yg)("inlineCode",{parentName:"a"},"useDelete")),' method and then the record whose resource is "categories" and whose id is "2" gets deleted.'),(0,r.yg)("p",null,"If you have multiple resources with the same name, you can pass the ",(0,r.yg)("inlineCode",{parentName:"p"},"identifier")," instead of the ",(0,r.yg)("inlineCode",{parentName:"p"},"name")," of the resource. It will only be used as the main matching key for the resource, data provider methods will still work with the ",(0,r.yg)("inlineCode",{parentName:"p"},"name")," of the resource defined in the ",(0,r.yg)("inlineCode",{parentName:"p"},"<Refine/>")," component."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.yg)("a",{parentName:"p",href:"/docs/core/refine-component#identifier"},(0,r.yg)("inlineCode",{parentName:"a"},"identifier")," section of the ",(0,r.yg)("inlineCode",{parentName:"a"},"<Refine/>")," component documentation ","\u2192")))),(0,r.yg)("h3",{id:"onsuccess"},"onSuccess"),(0,r.yg)(m,{id:"onsuccess",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"onSuccess")," can be used if you want to do anything based on the result returned after the delete request."),(0,r.yg)("p",null,"For example, let's ",(0,r.yg)("inlineCode",{parentName:"p"},"console.log")," after deletion:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=200px",live:!0,url:"http://localhost:3000",previewHeight:"200px"},'setInitialRoutes(["/"]);\nimport { Refine } from "@refinedev/core";\nimport dataProvider from "@refinedev/simple-rest";\n\n// visible-block-start\nimport { DeleteButton } from "@refinedev/chakra-ui";\n\nconst MyDeleteComponent = () => {\n  return (\n    <DeleteButton\n      resourceNameOrRouteName="posts"\n      recordItemId="1"\n      onSuccess={(value) => {\n        console.log(value);\n      }}\n    />\n  );\n};\n// visible-block-end\n\nconst App = () => {\n  const simpleRestDataProvider = dataProvider(\n    "https://api.fake-rest.refine.dev",\n  );\n\n  const customDataProvider = {\n    ...simpleRestDataProvider,\n    deleteOne: async ({ resource, id, variables }) => {\n      await new Promise((resolve) => setTimeout(resolve, 500));\n\n      return {\n        message: "You have successfully deleted the record",\n      };\n    },\n  };\n\n  return (\n    <Refine\n      notificationProvider={RefineChakra.notificationProvider()}\n      dataProvider={customDataProvider}\n      resources={[\n        {\n          name: "posts",\n          list: MyDeleteComponent,\n        },\n      ]}\n    />\n  );\n};\n\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n'))),(0,r.yg)("h3",{id:"mutationmode"},"mutationMode"),(0,r.yg)(m,{id:"mutationmode",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"Determines which mode mutation will have while executing ",(0,r.yg)("inlineCode",{parentName:"p"},"<DeleteButton>"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=200px",live:!0,url:"http://localhost:3000",previewHeight:"200px"},'setInitialRoutes(["/"]);\nimport { Refine } from "@refinedev/core";\nimport dataProvider from "@refinedev/simple-rest";\n\n// visible-block-start\nimport { DeleteButton } from "@refinedev/chakra-ui";\n\nconst MyDeleteComponent = () => {\n  return <DeleteButton recordItemId="1" mutationMode="undoable" />;\n};\n// visible-block-end\n\nconst App = () => {\n  const simpleRestDataProvider = dataProvider(\n    "https://api.fake-rest.refine.dev",\n  );\n\n  const customDataProvider = {\n    ...simpleRestDataProvider,\n    deleteOne: async ({ resource, id, variables }) => {\n      await new Promise((resolve) => setTimeout(resolve, 500));\n\n      return {\n        data: {},\n      };\n    },\n  };\n\n  return (\n    <Refine\n      notificationProvider={RefineChakra.notificationProvider()}\n      dataProvider={customDataProvider}\n      notificationProvider={RefineChakra.notificationProvider()}\n      resources={[\n        {\n          name: "posts",\n          list: MyDeleteComponent,\n        },\n      ]}\n    />\n  );\n};\n\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n')),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.yg)("a",{parentName:"p",href:"/docs/advanced-tutorials/mutation-mode"},"mutation mode docsumentation ","\u2192")))),(0,r.yg)("h3",{id:"hidetext"},"hideText"),(0,r.yg)(m,{id:"hidetext",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"hideText")," is used to show and not show the text of the button. When ",(0,r.yg)("inlineCode",{parentName:"p"},"true"),", only the button icon is visible."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=200px",live:!0,url:"http://localhost:3000",previewHeight:"200px"},'setInitialRoutes(["/"]);\nimport { Refine } from "@refinedev/core";\nimport dataProvider from "@refinedev/simple-rest";\n\n// visible-block-start\nimport { DeleteButton } from "@refinedev/chakra-ui";\n\nconst MyDeleteComponent = () => {\n  return <DeleteButton recordItemId="1" hideText />;\n};\n// visible-block-end\n\nconst App = () => {\n  const simpleRestDataProvider = dataProvider(\n    "https://api.fake-rest.refine.dev",\n  );\n\n  const customDataProvider = {\n    ...simpleRestDataProvider,\n    deleteOne: async ({ resource, id, variables }) => {\n      await new Promise((resolve) => setTimeout(resolve, 500));\n\n      return {\n        data: {},\n      };\n    },\n  };\n\n  return (\n    <Refine\n      notificationProvider={RefineChakra.notificationProvider()}\n      dataProvider={customDataProvider}\n      resources={[\n        {\n          name: "posts",\n          list: MyDeleteComponent,\n        },\n      ]}\n    />\n  );\n};\n\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n'))),(0,r.yg)("h3",{id:"accesscontrol"},"accessControl"),(0,r.yg)(m,{id:"accesscontrol",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"accessControl")," prop can be used to skip the access control check with its ",(0,r.yg)("inlineCode",{parentName:"p"},"enabled")," property or to hide the button when the user does not have the permission to access the resource with ",(0,r.yg)("inlineCode",{parentName:"p"},"hideIfUnauthorized")," property. This is relevant only when an ",(0,r.yg)("a",{parentName:"p",href:"/docs/authorization/access-control-provider"},(0,r.yg)("inlineCode",{parentName:"a"},"accessControlProvider"))," is provided to ",(0,r.yg)("a",{parentName:"p",href:"/docs/core/refine-component"},(0,r.yg)("inlineCode",{parentName:"a"},"<Refine/>"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'import { DeleteButton } from "@refinedev/chakra-ui";\n\nexport const MyListComponent = () => {\n  return (\n    <DeleteButton accessControl={{ enabled: true, hideIfUnauthorized: true }} />\n  );\n};\n'))),(0,r.yg)("h3",{id:"resourcenameorroutename-"},(0,r.yg)("del",{parentName:"h3"},"resourceNameOrRouteName")," ",(0,r.yg)(h,{deprecated:!0,mdxType:"PropTag"})),(0,r.yg)(m,{id:"resourcenameorroutename-",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"Use ",(0,r.yg)("inlineCode",{parentName:"p"},"resource")," prop instead.")),(0,r.yg)("h2",{id:"how-to-override-confirm-texts"},"How to override confirm texts?"),(0,r.yg)(m,{id:"how-to-override-confirm-texts",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"You can change the text that appears when you confirm a transaction with ",(0,r.yg)("inlineCode",{parentName:"p"},"confirmTitle")," prop, as well as what 'ok' and 'cancel' buttons text look like with the ",(0,r.yg)("inlineCode",{parentName:"p"},"confirmOkText")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"confirmCancelText")," props."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=200px",live:!0,url:"http://localhost:3000",previewHeight:"200px"},'setInitialRoutes(["/"]);\nimport { Refine } from "@refinedev/core";\nimport dataProvider from "@refinedev/simple-rest";\n\n// visible-block-start\nimport { DeleteButton } from "@refinedev/chakra-ui";\n\nconst MyDeleteComponent = () => {\n  return (\n    <DeleteButton\n      //hide-start\n      recordItemId="1"\n      //hide-end\n      confirmTitle="Custom Title"\n      confirmOkText="Ok Text"\n      confirmCancelText="Delete Text"\n    />\n  );\n};\n// visible-block-end\n\nconst App = () => {\n  const simpleRestDataProvider = dataProvider(\n    "https://api.fake-rest.refine.dev",\n  );\n\n  const customDataProvider = {\n    ...simpleRestDataProvider,\n    deleteOne: async ({ resource, id, variables }) => {\n      console.log("girdi");\n      await new Promise((resolve) => setTimeout(resolve, 500));\n\n      return {\n        data: {},\n      };\n    },\n  };\n\n  return (\n    <Refine\n      notificationProvider={RefineChakra.notificationProvider()}\n      dataProvider={customDataProvider}\n      resources={[\n        {\n          name: "posts",\n          list: MyDeleteComponent,\n        },\n      ]}\n    />\n  );\n};\n\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n'))),(0,r.yg)("h2",{id:"api-reference"},"API Reference"),(0,r.yg)("h3",{id:"properties-1"},"Properties"),(0,r.yg)(m,{id:"properties-1",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)(g,{module:"@refinedev/chakra-ui/DeleteButton",mdxType:"PropsTable"})))}y.isMDXComponent=!0}}]);