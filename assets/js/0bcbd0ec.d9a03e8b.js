"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[40134],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),h=o,m=c["".concat(l,".").concat(h)]||c[h]||d[h]||a;return n?i.createElement(m,r(r({ref:t},u),{},{components:n})):i.createElement(m,r({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<a;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4751:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>p,toc:()=>d});n(67294);var i=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function r(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={title:"UI Libraries"},l=void 0,p={unversionedId:"guides-concepts/ui-libraries/index",id:"guides-concepts/ui-libraries/index",title:"UI Libraries",description:"Refine's UI library integrations enhance the core functionality by exposing hooks and components, offering prebuilt UI elements with minimal additional, library-specific logic. Refine offers seamless integration with popular UI libraries, allowing you to choose the one that suits your needs. These integrations don't constrain your application's logic. While they provide advantages, you can still create, extend, or mix components independently.",source:"@site/docs/guides-concepts/ui-libraries/index.md",sourceDirName:"guides-concepts/ui-libraries",slug:"/guides-concepts/ui-libraries/",permalink:"/docs/guides-concepts/ui-libraries/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/guides-concepts/ui-libraries/index.md",tags:[],version:"current",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1710926711,formattedLastUpdatedAt:"Mar 20, 2024",frontMatter:{title:"UI Libraries"},sidebar:"mainSidebar",previous:{title:"Authorization",permalink:"/docs/guides-concepts/authorization/"},next:{title:"Notifications",permalink:"/docs/guides-concepts/notifications/"}},u={},d=[{value:"Available Integrations",id:"available-integrations",level:2},{value:"Prebuilt Components",id:"prebuilt-components",level:2},{value:"Layouts and Menus",id:"layouts-and-menus",level:3},{value:"Buttons",id:"buttons",level:3},{value:"Views",id:"views",level:3},{value:"Fields",id:"fields",level:3},{value:"Auth Pages",id:"auth-pages",level:3},{value:"Error Pages",id:"error-pages",level:3},{value:"Customization",id:"customization",level:2},{value:"Using the props",id:"using-the-props",level:3},{value:"Using the Refine options",id:"using-the-refine-options",level:3},{value:"Using the <code>swizzle</code> command",id:"using-the-swizzle-command",level:3},{value:'Notifications <GuideBadge id="guides-concepts/notifications/" />',id:"notifications-",level:2},{value:"Custom Implementations",id:"custom-implementations",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},h=c("DocThumbsUpDownFeedbackWidget"),m=c("GuideBadge"),f={toc:d};function g(e){var{components:t}=e,n=r(e,["components"]);return(0,i.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){o(e,t,n[t])}))}return e}({},f,n),{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Refine's UI library integrations enhance the core functionality by exposing hooks and components, offering prebuilt UI elements with minimal additional, library-specific logic. Refine offers seamless integration with popular UI libraries, allowing you to choose the one that suits your needs. These integrations don't constrain your application's logic. While they provide advantages, you can still create, extend, or mix components independently."),(0,i.kt)("p",null,"The headless architecture offers the freedom to utilize any UI library or create custom UI integrations. It encapsulates application logic within hooks, helpers, and logical components, making them UI-agnostic and highly composable."),(0,i.kt)("h2",{id:"available-integrations"},"Available Integrations"),(0,i.kt)(h,{id:"available-integrations",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,i.kt)("p",null,"Refine has out of the box support for the four libraries that are widely used in the React ecosystem. Each of these has their own composition of components and hooks that are designed to be used seamlessly with little to no effort."),(0,i.kt)("p",null,"These integrations are made to provide solutions for common use cases such as menus, layouts, action buttons, tables, forms and more while providing a consistent design language with the UI library. Rather than a constraint, these integrations are designed as helpers and extensions to the core functionalities of Refine and the UI libraries."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/ui-integrations/ant-design/introduction"},"Ant Design with ",(0,i.kt)("inlineCode",{parentName:"a"},"@refinedev/antd"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/ui-integrations/material-ui/introduction"},"Material UI with ",(0,i.kt)("inlineCode",{parentName:"a"},"@refinedev/mui"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/ui-integrations/chakra-ui/introduction"},"Chakra UI with ",(0,i.kt)("inlineCode",{parentName:"a"},"@refinedev/chakra-ui"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/ui-integrations/mantine/introduction"},"Mantine with ",(0,i.kt)("inlineCode",{parentName:"a"},"@refinedev/mantine"))))),(0,i.kt)("h2",{id:"prebuilt-components"},"Prebuilt Components"),(0,i.kt)(h,{id:"prebuilt-components",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,i.kt)("p",null,"Refine's UI integration packages exposes prebuilt components that are designed to be used with the UI libraries. These components are compositions of the Refine's functionalities and the UI libraries' components. Since their implementation is based on the UI libraries, they are easy to customize and extend to fit your needs.")),(0,i.kt)("h3",{id:"layouts-and-menus"},"Layouts and Menus"),(0,i.kt)(h,{id:"layouts-and-menus",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,i.kt)("p",null,"Layouts and menus are one of the common elements of an application, this is why we're providing layout and menu components for the supported UI libraries. While these components are also a composition of the Refine's core functionalities, they fit well with the design language of the UI libraries and provide a seamless integration."),(0,i.kt)("p",null,"These components are designed to fit the most common needs of an application with a flexibility to customize them to fit your needs. For example, a ",(0,i.kt)("inlineCode",{parentName:"p"},"<Sider>")," component is available in all of the UI integrations which includes a navigation menu with a multi-level support, an authorization check for menu items and a logout button which leverages the ",(0,i.kt)("inlineCode",{parentName:"p"},"useLogout")," hook of refine."),(0,i.kt)("p",null,"As an addition to the layouts, there is also ",(0,i.kt)("inlineCode",{parentName:"p"},"<Breadcrumb />")," component that is designed to be used with the layouts which offers a breadcrumb navigation for the views.")),(0,i.kt)("h3",{id:"buttons"},"Buttons"),(0,i.kt)(h,{id:"buttons",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,i.kt)("p",null,"Refine's UI integrations offer variety of buttons that are built using the appropriate components of the UI libraries and includes many logical functionalities such as authorization checks, confirmation dialogs, loading states, invalidation, navigation and more."),(0,i.kt)("p",null,"The list of buttons that are available in the UI integrations are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<CreateButton />")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<EditButton />")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<ListButton />")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<ShowButton />")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<CloneButton />")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<DeleteButton />")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<SaveButton />")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<RefreshButton />")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<ImportButton />")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<ExportButton />")))),(0,i.kt)("h3",{id:"views"},"Views"),(0,i.kt)(h,{id:"views",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,i.kt)("p",null,"Views are designed as wrappers around the content of the pages in the application. They are designed to be used within the layouts and provide basic functionalities such as titles based on the resource, breadcrumbs, related actions and authorization checks."),(0,i.kt)("p",null,"The list of views that are available in the UI integrations are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<List />")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<Show />")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<Edit />")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<Create />")))),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)(h,{id:"fields",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,i.kt)("p",null,"Field components can be used to render values with appropriate design and format of the UI libraries. These components are built on top of respective components of the UI library and also provide logic for formatting of the values. While these components might not always be suitable for your use case, they can be combined or extended to provide the desired functionality."),(0,i.kt)("p",null,"The list of provided field components are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<BooleanField />")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<DateField />")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<EmailField />")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<FileField />")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<ImageField />")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<MarkdownField />")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<NumberField />")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<TagsField />")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<TextField />")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<UrlField />")))),(0,i.kt)("h3",{id:"auth-pages"},"Auth Pages"),(0,i.kt)(h,{id:"auth-pages",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,i.kt)("p",null,"Auth pages are designed to be used as the pages of the authentication flow of the application. They offer an out of the box solution for the login, register, forgot password and reset password pages by leveraging the authentication hooks of Refine."),(0,i.kt)("p",null,"The list of types of auth pages that are available in the UI integrations are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'<AuthPage type="login" />')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'<AuthPage type="register" />')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'<AuthPage type="forgot-password" />')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'<AuthPage type="reset-password" />')))),(0,i.kt)("h3",{id:"error-pages"},"Error Pages"),(0,i.kt)(h,{id:"error-pages",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,i.kt)("p",null,"UI integrations of Refine also provides an ",(0,i.kt)("inlineCode",{parentName:"p"},"<ErrorPage />")," component that you can use to render a 404 page in your app. While these components does not offer much functionality, they are provided as an easy way to render an error page with a consistent design language.")),(0,i.kt)("h2",{id:"customization"},"Customization"),(0,i.kt)(h,{id:"customization",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,i.kt)("p",null,"While the exported components from the UI integrations mostly accept the props of the underlying UI components, there are cases where you might want to customize these components to fit your needs on both logical and visual level. In these cases, you can use couple of different approaches to achieve your goal, from the most simple to the most complex, here are the options you have:")),(0,i.kt)("h3",{id:"using-the-props"},"Using the props"),(0,i.kt)(h,{id:"using-the-props",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,i.kt)("p",null,"In many of these components, you'll be able to pass props to override or extend the existing styling and logic. While this is the most simple approach, it might not be enough for some cases. For example, if you want to hide the ",(0,i.kt)("inlineCode",{parentName:"p"},"<EditButton />")," instead of disabling it depending on the user's authorization, you can pass the ",(0,i.kt)("inlineCode",{parentName:"p"},"accessControl")," prop to the component."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="edit.tsx"',title:'"edit.tsx"'},'import { EditButton } from "@refinedev/antd";\n\n<EditButton\n  accessControl={{\n    hideIfUnauthorized: true,\n  }}\n/>;\n'))),(0,i.kt)("h3",{id:"using-the-refine-options"},"Using the Refine options"),(0,i.kt)(h,{id:"using-the-refine-options",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,i.kt)("p",null,"Refine has the ability to change some configurations of the components and hooks globally through the ",(0,i.kt)("inlineCode",{parentName:"p"},"<Refine>")," component. This will let the user to change the default logical and visual approaches made in the UI components. For example, we can change the buttons' visibility based on the authorization status through ",(0,i.kt)("inlineCode",{parentName:"p"},"<Refine>")," component. This will effect all of the buttons in the application just by changing it in one place."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Refine } from "@refinedev/core";\n\n<Refine\n    accessControlProvider={{\n        can: async ({ resource, action, params }) => { ... },\n        options: {\n            buttons: {\n                hideIfUnauthorized: true,\n            },\n        },\n    }}\n/>\n')),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/core/refine-component"},"To learn more about the options, check out the ",(0,i.kt)("inlineCode",{parentName:"a"},"<Refine>")," component documentation."))),(0,i.kt)("h3",{id:"using-the-swizzle-command"},"Using the ",(0,i.kt)("inlineCode",{parentName:"h3"},"swizzle")," command"),(0,i.kt)(h,{id:"using-the-swizzle-command",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,i.kt)("p",null,"Refine's CLI has this command called ",(0,i.kt)("inlineCode",{parentName:"p"},"swizzle")," which lets you export the components of the UI integrations and use them in your application. This will let you to change the components in a granular level and use them in your application. You can also use this command to export the ",(0,i.kt)("inlineCode",{parentName:"p"},"<EditButton />")," and change its logic to hide instead of disabling it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"> npm run refine swizzle\n\nWhich package do you want to swizzle? (Use arrow keys or type to search)\n\nData Provider\n \u25ef @refinedev/simple-rest\nUI Framework\n \u25c9 @refinedev/antd\n\nWhich component do you want to swizzle?\n\nButtons\n \u25ef CreateButton\n \u25ef ShowButton\n\u276f\u25c9 EditButton\nPages\n \u25ef ErrorPage\n \u25ef AuthPage\n\n(Move up and down to reveal more choices)\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/packages/list-of-packages"},"To learn more about the ",(0,i.kt)("inlineCode",{parentName:"a"},"swizzle")," command, check out the CLI documentation.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"While ",(0,i.kt)("inlineCode",{parentName:"p"},"swizzle")," provides a way to customize the components, it's a one time operation and it may be hard to maintain the changes and keep track of the new features in the future. Swizzling a component will detach it from the related package and it will be your responsibility to keep it up to date."))),(0,i.kt)("h2",{id:"notifications-"},"Notifications ",(0,i.kt)(m,{id:"guides-concepts/notifications/",mdxType:"GuideBadge"})),(0,i.kt)(h,{id:"notifications-",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,i.kt)("p",null,"One of the most important parts of an application is the notifications and the visual feedbacks. Refine has this built-in notification integration that works automatically when it's needed in cases such as when a request fails or when a form is submitted."),(0,i.kt)("p",null,"While this integration is not coupled with the UI integrations, it will be a wise choice to use the one that is provided by the UI libraries for a consistent design language. This is why Refine's UI integrations also provides a ",(0,i.kt)("inlineCode",{parentName:"p"},"notificationProvider")," to be used with the notification integration of refine."),(0,i.kt)("p",null,"Using of the prebuilt notification providers are optional and can be customized, extended or even swapped with a custom implementation if needed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Refine } from "@refinedev/core";\nimport { useNotificationProvider } from "@refinedev/mantine";\n\nconst App = () => (\n  <Refine\n    // highlight-next-line\n    notificationProvider={useNotificationProvider}\n    /* ... */\n  >\n    {/* ... */}\n  </Refine>\n);\n'))),(0,i.kt)("h2",{id:"custom-implementations"},"Custom Implementations"),(0,i.kt)(h,{id:"custom-implementations",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,i.kt)("p",null,"While there are integrations for the popular UI libraries, every app has its own needs and requirements. This is why Refine is designed in a way that it can be used with any UI library or even without one. This is also true for the UI integrations, you can create your own custom UI integration for your needs."),(0,i.kt)("p",null,"If you've decided to create your own custom UI integration, the source code of the existing UI integrations will be a good starting point for you. You can check out the source code of the UI integrations from the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine"},"GitHub repository"))))}g.isMDXComponent=!0}}]);