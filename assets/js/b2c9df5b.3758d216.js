"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[71615],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),g=s(n),m=o,h=g["".concat(l,".").concat(m)]||g[m]||p[m]||r;return n?i.createElement(h,a(a({ref:t},u),{},{components:n})):i.createElement(h,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=g;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<r;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},17859:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>s,toc:()=>p});n(67294);var i=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const c={title:"NextAuth - Google And GitHub Authentications for Nextjs",description:"How to implement Google and GitHub authentications using NextAuth.js in Next.js?",slug:"nextauth-google-github-authentication-nextjs",authors:"ekekenta_clinton",tags:["nextjs","access-control"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-18-auth-with-nextauth/social.png",social_image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-18-auth-with-nextauth/social.png",hide_table_of_contents:!1},l=void 0,s={permalink:"/blog/nextauth-google-github-authentication-nextjs",source:"@site/blog/2022-08-18-auth-with-nextauth.md",title:"NextAuth - Google And GitHub Authentications for Nextjs",description:"How to implement Google and GitHub authentications using NextAuth.js in Next.js?",date:"2022-08-18T00:00:00.000Z",formattedDate:"August 18, 2022",tags:[{label:"nextjs",permalink:"/blog/tags/nextjs"},{label:"access-control",permalink:"/blog/tags/access-control"}],readingTime:12.535,hasTruncateMarker:!0,authors:[{name:"Ekekenta Clinton",title:"Software Engineer",url:"https://github.com/icode247",imageURL:"https://github.com/icode247.png",key:"ekekenta_clinton"}],frontMatter:{title:"NextAuth - Google And GitHub Authentications for Nextjs",description:"How to implement Google and GitHub authentications using NextAuth.js in Next.js?",slug:"nextauth-google-github-authentication-nextjs",authors:"ekekenta_clinton",tags:["nextjs","access-control"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-18-auth-with-nextauth/social.png",social_image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-18-auth-with-nextauth/social.png",hide_table_of_contents:!1},prevItem:{title:"Temporal API - A new approach to managing Date and Time in JS",permalink:"/blog/temporal-date-api"},nextItem:{title:"Nextjs image optimization with examples",permalink:"/blog/using-next-image"},relatedPosts:[{title:"OTP Authentication with Supabase and Twilio in React",description:"We'll implement OTP(SMS) authorization using Twilio and Supabase in React app.",permalink:"/blog/supabase-twilio-otp-authentication-in-react",formattedDate:"September 22, 2022",authors:[{name:"Vijit Ail",title:"Software Engineer",url:"https://github.com/vijitail",imageURL:"https://github.com/vijitail.png",key:"vijit_ail"}],readingTime:14.095,date:"2022-09-22T00:00:00.000Z"},{title:"Next.js vs React - A Beginner's Guide",description:"We briefly run through the innovation driven differences between React and Next.js in rendering behavior, routing, data fetching, backend API development and app configuration.",permalink:"/blog/next-js-vs-react",formattedDate:"February 2, 2024",authors:[{name:"Marvel Ken",title:"Software Developer",imageURL:"/img/generic-profile.png",key:"marvel_ken"}],readingTime:22.54,date:"2024-02-02T00:00:00.000Z"},{title:"Build Access Control Mechanism using Permify",description:"We'll examine how to build an Access Control mechanism in Refine using Permify, an authorization as a service that helps you create any kind of authorization system easily with its panel.",permalink:"/blog/access-control",formattedDate:"January 9, 2024",authors:[{name:"Ege Ayt\u0131n",title:"Software Developer",url:"https://github.com/EgeAytin",imageURL:"https://github.com/EgeAytin.png",key:"ege"}],readingTime:10.66,date:"2024-01-09T00:00:00.000Z"}],authorPosts:[{title:"How to create a CRUD app with SvelteKit",description:"We'll build a CRUD Blog app using SvelteKit and Svelte MUI",permalink:"/blog/sveltekit-crud-app-with-svelte-mui",formattedDate:"September 2, 2022",authors:[{name:"Ekekenta Clinton",title:"Software Engineer",url:"https://github.com/icode247",imageURL:"https://github.com/icode247.png",key:"ekekenta_clinton"}],readingTime:10,date:"2022-09-02T00:00:00.000Z"}]},u={authorsImageUrls:[void 0]},p=[{value:"Introduction",id:"introduction",level:2}],g={toc:p};function m(e){var{components:t}=e,n=a(e,["components"]);return(0,i.kt)("wrapper",r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){o(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"We know how exhausting and time-consuming it can be to set up authentication, which includes handling databases, cookies, JWT, sessions, etc., on your own.\nThe goal of this article is for you to learn about an alternative and simple tool (NextAuth), which we will use to easily add Google and GitHub authentication to our application."))}m.isMDXComponent=!0}}]);