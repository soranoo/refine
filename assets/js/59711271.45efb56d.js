"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[80524],{58860:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>h});var a=n(37953);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=i,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},24756:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>d});n(37953);var a=n(58860);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const s={title:"How to upload files from your HTML form using Base64 encoding",description:"Uploading files using Base64 encoding is a common practice. In this guide, I'm going to show you how to upload files using base64 encoding",slug:"how-to-base64-upload",authors:"melih",tags:["javascript"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/placeholder.png",hide_table_of_contents:!1},l=void 0,c={permalink:"/blog/how-to-base64-upload",source:"@site/blog/2021-12-22-base64-upload.md",title:"How to upload files from your HTML form using Base64 encoding",description:"Uploading files using Base64 encoding is a common practice. In this guide, I'm going to show you how to upload files using base64 encoding",date:"2021-12-22T00:00:00.000Z",formattedDate:"December 22, 2021",tags:[{label:"javascript",permalink:"/blog/tags/javascript"}],readingTime:3.145,hasTruncateMarker:!0,authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],frontMatter:{title:"How to upload files from your HTML form using Base64 encoding",description:"Uploading files using Base64 encoding is a common practice. In this guide, I'm going to show you how to upload files using base64 encoding",slug:"how-to-base64-upload",authors:"melih",tags:["javascript"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/placeholder.png",hide_table_of_contents:!1},prevItem:{title:"How to Multipart File Upload Using FormData with HTML",permalink:"/blog/how-to-multipart-upload"},nextItem:{title:"Refine vs AdminBro - Comparison Admin Panel Framework",permalink:"/blog/refine-vs-adminbro"},relatedPosts:[{title:"A Definitive guide on JavaScript every Method",description:"We expound with examples what the JavaScript every method is, how it works and when to use it.",permalink:"/blog/javascript-every-method",formattedDate:"February 7, 2024",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:12.06,date:"2024-02-07T00:00:00.000Z"},{title:"The Important Differences between URI VS URL",description:"We'll be looking at the differences between URI and URL, and how they are used in web development.",permalink:"/blog/uri-vs-url",formattedDate:"January 17, 2024",authors:[{name:"Deborah Emeni",title:"Software Engineer",url:"https://github.com/debemenitammy",imageURL:"https://github.com/debemenitammy.png",key:"deborah_emeni"}],readingTime:11.985,date:"2024-01-17T00:00:00.000Z"},{title:"How to Use the JavaScript Ternary Operator",description:"We expound on the use of JS Ternary Operator with examples of what it is, how it works and discuss the best practices.",permalink:"/blog/javascript-ternary-operator",formattedDate:"January 24, 2024",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:7.685,date:"2024-01-24T00:00:00.000Z"}],authorPosts:[{title:"Develop your Own Customizable Invoice Generator with Refine and Strapi | Part I",description:"Looking for an invoice generator? Try out Refine. With our custom interface, you can build your own invoice in minutes! Learn more here.",permalink:"/blog/refine-react-admin-invoice-generator",formattedDate:"February 22, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:11.21,date:"2022-02-22T00:00:00.000Z"},{title:"Building an Customizable Invoice Generator App with Refine, Strapi & Ant Design | Part II",description:"Looking for an invoice generator? Try out Refine. With our custom interface, you can build your own invoice in minutes! Learn more here.",permalink:"/blog/refine-invoice-generator",formattedDate:"March 1, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:13.395,date:"2022-03-01T00:00:00.000Z"},{title:"Create Your Easy Customizable Internal Issue Tracker With Refine and Supabase",description:"This web application will  us to create issue and tasks for your team members. You will also be able to choose the priority of these tasks, their tags, and which person to assign them to.",permalink:"/blog/customizable-issue-tracker-with-refine-and-supabase",formattedDate:"November 12, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:17.04,date:"2021-11-12T00:00:00.000Z"}]},p={authorsImageUrls:[void 0]},d=[{value:"What is Base64 encoding?",id:"what-is-base64-encoding",level:2},{value:"Example",id:"example",level:2},{value:"Live Codesandbox Example",id:"live-codesandbox-example",level:2},{value:"How to Base64 Upload with Refine?",id:"how-to-base64-upload-with-refine",level:2},{value:"Example",id:"example-1",level:2}],m=(u="CodeSandboxExample",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.yg)("div",e)});var u;const h={toc:d},g="wrapper";function f(e){var{components:t}=e,n=r(e,["components"]);return(0,a.yg)(g,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({},h,n),{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Uploading files using Base64 encoding is a common practice. In this guide, I'm going to show you how to upload files using base64 encoding"),(0,a.yg)("h2",{id:"what-is-base64-encoding"},"What is Base64 encoding?"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"Base64 Encoding")," is the most widely used technique for storing or transmitting binary data by converting it to text. With this technique, binary data, which basically consists of 8-bit bytes, is divided into 6-bit (2^6 = 64) parts. 64 different numbers expressed in 6 bits are matched with 64 different characters expressed as Printable Characters in the ",(0,a.yg)("inlineCode",{parentName:"p"},"ASCII")," character set."),(0,a.yg)("p",null,"Base64 encoding is most commonly used to attach binary files to electronic mail in applications of the MIME (Multipurpose Internet Mail Extensions) standard."),(0,a.yg)("p",null,"Another usage area of \u200b\u200bBase64 Encoding is adding images and other files to HTML and CSS documents by encoding with Base64 using Data URLs format in modern browsers."),(0,a.yg)("h2",{id:"example"},"Example"),(0,a.yg)("p",null,"In our example, we will upload the image file by encoding the image as Base64. First, let's write simple HTML and set the ",(0,a.yg)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/getting-started/introduction/"},"Bootstrap")," CSS link."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    <link rel="stylesheet" href="./index.css" />\n    <link\n      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"\n      rel="stylesheet"\n      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"\n      crossorigin="anonymous"\n    />\n    <title>Base64 File Upload</title>\n  </head>\n\n  <body>\n    <div style="margin: 24px">\n      <h2>Upload Image</h2>\n    </div>\n\n    <script src="./index.js"><\/script>\n  </body>\n</html>\n')),(0,a.yg)("p",null,"Then we need to use the HTML ",(0,a.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file"},"input")," tag to receive an image file from the user."),(0,a.yg)("p",null,"We will use ",(0,a.yg)("inlineCode",{parentName:"p"},"file input")," because it must be the input type file we want to receive."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    <link rel="stylesheet" href="./index.css" />\n    <link href="assets/css/bootstrap-responsive.css" rel="stylesheet" />\n    <link\n      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"\n      rel="stylesheet"\n      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"\n      crossorigin="anonymous"\n    />\n\n    <title>Base64 File Upload</title>\n  </head>\n  <body>\n    <div style="margin: 24px">\n      <h2>Upload Image</h2>\n    </div>\n    //highlight-start\n    <div style="margin: 16px; padding: 16px">\n      <input\n        class="form-control form-control-lg"\n        id="selectAvatar"\n        type="file"\n      />\n    </div>\n    //highlight-end\n</html>\n')),(0,a.yg)("p",null,"Now we have an input to interact with the user and select a file. Let's add the HTML elements that will show the image file and Base64 code we received from the user."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    <link rel="stylesheet" href="./index.css" />\n    <link href="assets/css/bootstrap-responsive.css" rel="stylesheet" />\n    <link\n      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"\n      rel="stylesheet"\n      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"\n      crossorigin="anonymous"\n    />\n\n    <title>Base64 File Upload</title>\n  </head>\n  <body>\n    <div style="margin: 24px">\n      <h2>Upload Image</h2>\n    </div>\n\n    <div style="margin: 16px; padding: 16px">\n      <input\n        class="form-control form-control-lg"\n        id="selectAvatar"\n        type="file"\n      />\n    </div>\n    //highlight-start\n    <div class="container">\n      <div class="row">\n        <div class="col">\n          <h6>Image Preview:</h6>\n          <img class="img" id="avatar" />\n        </div>\n        <div class="col">\n          <h6>Base64 Output</h6>\n          <textarea id="textArea" rows="30" cols="50"></textarea>\n        </div>\n      </div>\n    </div>\n    //highlight-end\n    <script src="./index.js"><\/script>\n  </body>\n</html>\n')),(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2021-12-22-base64-upload/upload.png",alt:"upload_screen"}),(0,a.yg)("br",null),(0,a.yg)("p",null,"Our fields are ready to display the image file and Base64 code. Now let's do our operations on the JavaScript side."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-jsx"},'const input = document.getElementById("selectAvatar");\nconst avatar = document.getElementById("avatar");\nconst textArea = document.getElementById("textAreaExample");\n\nconst convertBase64 = (file) => {\n  return new Promise((resolve, reject) => {\n    const fileReader = new FileReader();\n    fileReader.readAsDataURL(file);\n\n    fileReader.onload = () => {\n      resolve(fileReader.result);\n    };\n\n    fileReader.onerror = (error) => {\n      reject(error);\n    };\n  });\n};\n\nconst uploadImage = async (event) => {\n  const file = event.target.files[0];\n  const base64 = await convertBase64(file);\n  avatar.src = base64;\n  textArea.innerText = base64;\n};\n\ninput.addEventListener("change", (e) => {\n  uploadImage(e);\n});\n')),(0,a.yg)("p",null,"Here we take data in file format and encode it as Base64. Then we show this encoded image and Base64 encoding output."),(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2021-12-22-base64-upload/overview.png",alt:"overview"}),(0,a.yg)("br",null),(0,a.yg)("h2",{id:"live-codesandbox-example"},"Live Codesandbox Example"),(0,a.yg)("iframe",{src:"https://codesandbox.io/embed/base64-upload-file-h3yy0?autoresize=1&fontsize=14&theme=dark&view=preview",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"base64-upload-file",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,a.yg)("br",null),(0,a.yg)("br",null),(0,a.yg)("h2",{id:"how-to-base64-upload-with-refine"},"How to Base64 Upload with Refine?"),(0,a.yg)("p",null,"The Base64 file upload process with ",(0,a.yg)("strong",{parentName:"p"},"Refine")," is very simple. How to use it is explained step by step in the guide and example."),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://refine.dev/docs/guides-and-concepts/upload/base64-upload/"},"Refer to the ",(0,a.yg)("strong",{parentName:"a"},"Refine")," Base64 Upload guide for more information. \u2192")),(0,a.yg)("h2",{id:"example-1"},"Example"),(0,a.yg)(m,{path:"upload-antd-base64",mdxType:"CodeSandboxExample"}))}f.isMDXComponent=!0}}]);