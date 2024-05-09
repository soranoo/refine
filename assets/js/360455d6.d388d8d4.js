"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3048],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>g});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),d=n,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return a?r.createElement(g,i(i({ref:t},c),{},{components:a})):r.createElement(g,i({ref:t},c))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},14402:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>u});a(96540);var r=a(15680);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const l={title:"How to Multipart File Upload Using FormData with React Hook Form",description:"In this guide, I'm going to show you how to multipart files upload with using React Hook Form",slug:"how-to-multipart-file-upload-with-react-hook-form",authors:"melih",tags:["Refine","react","react-hook-form","javascript"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-03-29-react-hook-form-upload/social.jpg",hide_table_of_contents:!1},s=void 0,p={permalink:"/blog/how-to-multipart-file-upload-with-react-hook-form",source:"@site/blog/2022-03-29-react-hook-form-upload.md",title:"How to Multipart File Upload Using FormData with React Hook Form",description:"In this guide, I'm going to show you how to multipart files upload with using React Hook Form",date:"2022-03-29T00:00:00.000Z",formattedDate:"March 29, 2022",tags:[{label:"Refine",permalink:"/blog/tags/refine"},{label:"react",permalink:"/blog/tags/react"},{label:"react-hook-form",permalink:"/blog/tags/react-hook-form"},{label:"javascript",permalink:"/blog/tags/javascript"}],readingTime:7.06,hasTruncateMarker:!0,authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],frontMatter:{title:"How to Multipart File Upload Using FormData with React Hook Form",description:"In this guide, I'm going to show you how to multipart files upload with using React Hook Form",slug:"how-to-multipart-file-upload-with-react-hook-form",authors:"melih",tags:["Refine","react","react-hook-form","javascript"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-03-29-react-hook-form-upload/social.jpg",hide_table_of_contents:!1},prevItem:{title:"Top React Component Libraries and Frameworks Every Developer Should Know",permalink:"/blog/top-react-component-libraries-and-frameworks-every-developer-should-know"},nextItem:{title:"We are going back to 1995! The perfect harmony of Modern stack and Win95",permalink:"/blog/awesome-react-windows95-ui-with-refine"},relatedPosts:[{title:"Getting started with Astro Framework",description:"We will learn how to set up Astrojs, create a new project, and basics.",permalink:"/blog/astro-js-guide",formattedDate:"February 7, 2024",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:16.44,date:"2024-02-07T00:00:00.000Z"},{title:"Using React Hot Toast as a Notification Provider for CRUD apps",description:"We'll introduce create a custom notification provider using the react-hot-toast library.",permalink:"/blog/react-hot-toast",formattedDate:"October 6, 2023",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:12.97,date:"2023-10-06T00:00:00.000Z"},{title:"Understanding Virtual DOM in React",description:"We'll dive into the concept of a virtual DOM in the React as well as explore its purpose.",permalink:"/blog/react-virtual-dom",formattedDate:"November 23, 2023",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:12.11,date:"2023-11-23T00:00:00.000Z"}],authorPosts:[{title:"How to Import CSV File with React",description:"In this guide, I will show you how to import CSV files using React and JavaScript.",permalink:"/blog/how-to-import-csv",formattedDate:"January 18, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:4.365,date:"2022-01-18T00:00:00.000Z"},{title:"ReactJS Frameworks You Should Know Before Start Developing B2B/Internal Application",description:"We have listed Open source ReactJS frameworks that will help and speed you up while developing internal-tool applications.",permalink:"/blog/best-internal-tool-react-frameworks",formattedDate:"March 16, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:4.115,date:"2022-03-16T00:00:00.000Z"},{title:"Develop your Own Customizable Invoice Generator with Refine and Strapi | Part I",description:"Looking for an invoice generator? Try out Refine. With our custom interface, you can build your own invoice in minutes! Learn more here.",permalink:"/blog/refine-react-admin-invoice-generator",formattedDate:"February 22, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:11.21,date:"2022-02-22T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},u=[{value:"Introduction",id:"introduction",level:2},{value:"Create Express Server",id:"create-express-server",level:2},{value:"Create React Project",id:"create-react-project",level:2},{value:"Multipart File Upload with React Hook Form",id:"multipart-file-upload-with-react-hook-form",level:2},{value:"Are You Looking React Web Framework?",id:"are-you-looking-react-web-framework",level:2},{value:"How to Multipart File Upload with Refine and React Hook Form?",id:"how-to-multipart-file-upload-with-refine-and-react-hook-form",level:2},{value:"Example",id:"example",level:2}],m=(d="CodeSandboxExample",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",e)});var d;const g={toc:u},h="wrapper";function f(e){var{components:t}=e,a=i(e,["components"]);return(0,r.yg)(h,o(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),r.forEach((function(t){n(e,t,a[t])}))}return e}({},g,a),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-03-29-react-hook-form-upload/overview.gif",alt:"Refine Example Overview"}),(0,r.yg)("br",null),(0,r.yg)("p",null,"In this example, we will learn how to upload files with ",(0,r.yg)("a",{parentName:"p",href:"https://react-hook-form.com/"},"React Hook Form"),", which is very preferred for managing forms with React. We will use ",(0,r.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData"},"FormData")," to upload a file and we will upload a file of type multipart/form-data."),(0,r.yg)("h2",{id:"introduction"},"Introduction"),(0,r.yg)("p",null,"We will examine step by step how to use the Multipart file upload process, which is generally used to upload an image or file to a server, with React Hook Form. Let's first create a simple ",(0,r.yg)("a",{parentName:"p",href:"https://expressjs.com/"},"express")," server to upload the files. Then, let's upload our files to this server with the React Hook form. Let's start!"),(0,r.yg)("h2",{id:"create-express-server"},"Create Express Server"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"npm i express\n")),(0,r.yg)("p",null,"Then, let's install the cors package necessary to allow file upload to the server, and the express-fileupload package to manage the paths of the downloaded files."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"npm i cors express-fileupload\n")),(0,r.yg)("p",null,"We have completed our installations to create a simple server. This server will indicate that the file has been uploaded successfully or failed, in response to a ",(0,r.yg)("inlineCode",{parentName:"p"},"POST")," call to an endpoint that we have specified."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-jsx"},'import express from "express";\nimport fileupload from "express-fileupload";\nimport cors from "cors";\n\nconst app = express();\n\napp.use(\n  fileupload({\n    createParentPath: true,\n  }),\n);\n\napp.use(cors());\napp.use(express.json());\napp.use(express.urlencoded({ extended: true }));\n\napp.post("/upload-file", async (req, res) => {\n  try {\n    if (!req.files) {\n      res.send({\n        status: "failed",\n        message: "No file uploaded",\n      });\n    } else {\n      let file = req.files.file;\n\n      console.log(req.files);\n\n      file.mv("./uploads/" + file.name);\n\n      res.send({\n        status: "success",\n        message: "File is uploaded",\n        data: {\n          name: file.name,\n          mimetype: file.mimetype,\n          size: file.size,\n        },\n      });\n    }\n  } catch (err) {\n    res.status(500).send(err);\n  }\n});\n\nconst port = process.env.PORT || 5000;\n\napp.listen(port, () => console.log(`Server started on port ${port}`));\n')),(0,r.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-03-29-react-hook-form-upload/server_start.gif",alt:"Express Server"}),(0,r.yg)("br",null),(0,r.yg)("p",null,"We created a server with Express. As you can see, we have successfully started our server, now we have an endpoint to handle requests to this port. Now let's create a React project and send our files to this server with React Hook Form."),(0,r.yg)("h2",{id:"create-react-project"},"Create React Project"),(0,r.yg)("p",null,"Let's create a react project with ",(0,r.yg)("a",{parentName:"p",href:"https://create-react-app.dev/"},"Create React App")," and then install the necessary packages for our project."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"npx create-react-app react-hook-form-multipart-upload\n")),(0,r.yg)("p",null,"After your project is ready, let's go to our project directory and install the React Hook Form package."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"cd react-hook-form-multipart-upload\nnpm install react-hook-form\n\nnpm run start\n")),(0,r.yg)("hr",null),(0,r.yg)("div",{className:"banner-container"},(0,r.yg)("div",{className:"banner-header"},"Stop wasting your time copy/pasting your table code all over your application!"),(0,r.yg)("p",null,"Meet the headless, React-based solution to build sleek ",(0,r.yg)("strong",{parentName:"p"},"CRUD")," applications. With Refine, you can be confident that your codebase will always stay clean and boilerplate-free."),(0,r.yg)("p",null,"Try ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/pankod/refine"},"Refine")," to rapidly build your next ",(0,r.yg)("strong",{parentName:"p"},"CRUD")," project, whether it's an admin panel, dashboard, internal tool or storefront."),(0,r.yg)("div",null,(0,r.yg)("a",{href:"https://github.com/pankod/refine"},(0,r.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/generic_banner.png",alt:"refine blog logo"}))),(0,r.yg)("br",null),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Refine")," is an open-source, React-based framework for building CRUD applications without constraints. It\u2019s headless by design and seamlessly works with ",(0,r.yg)("strong",{parentName:"p"},"any custom design")," or ",(0,r.yg)("strong",{parentName:"p"},"UI framework")," you favor. For convenience, it ships with ready-made integrations for ",(0,r.yg)("strong",{parentName:"p"},"Ant Design, Material UI and Mantine UI"),"."),(0,r.yg)("p",null,"It can ",(0,r.yg)("strong",{parentName:"p"},"speed up your development time up to 3X")," without compromising freedom on styling, customization and project workflow."),(0,r.yg)("p",null,"Visit ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/pankod/refine"},"Refine GitHub repository")," for more information, demos, tutorials, and example projects.")),(0,r.yg)("hr",null),(0,r.yg)("h2",{id:"multipart-file-upload-with-react-hook-form"},"Multipart File Upload with React Hook Form"),(0,r.yg)("p",null,"We created our React project and installed our react hook form package. Now let's create a form and manage it with the react hook form."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App.js"',title:'"App.js"'},'import React from "react";\n//highlight-next-line\nimport { useForm } from "react-hook-form";\n\nfunction App() {\n  //highlight-next-line\n  const { register, handleSubmit } = useForm();\n\n  const onSubmit = () => {};\n\n  return (\n    //highlight-start\n    <div className="App">\n      <form onSubmit={handleSubmit(onSubmit)}>\n        <input type="file" {...register("file")} />\n\n        <input type="submit" />\n      </form>\n    </div>\n    //highlight-end\n  );\n}\n\nexport default App;\n')),(0,r.yg)("p",null,"To manage our form and its elements, we defined the register and handleSubmit methods from the react hook form. Now, let's upload the file selected in our onSubmit method to our server by placing it in the formData."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App.js"',title:'"App.js"'},'import React from "react";\nimport { useForm } from "react-hook-form";\n\nfunction App() {\n  const { register, handleSubmit } = useForm();\n\n  const onSubmit = async (data) => {\n    //highlight-start\n    const formData = new FormData();\n    formData.append("file", data.file[0]);\n\n    const res = await fetch("http://localhost:5000/upload-file", {\n      method: "POST",\n      body: formData,\n    }).then((res) => res.json());\n    alert(JSON.stringify(`${res.message}, status: ${res.status}`));\n    //highlight-end\n  };\n\n  return (\n    <div className="App">\n      <form onSubmit={handleSubmit(onSubmit)}>\n        <input type="file" {...register("file")} />\n\n        <input type="submit" />\n      </form>\n    </div>\n  );\n}\n\nexport default App;\n')),(0,r.yg)("p",null,"Our project is ready! With React Hook Form, we can now send the selected file to our server in ",(0,r.yg)("inlineCode",{parentName:"p"},"multipart/form-data")," type. Let's test it!"),(0,r.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-03-29-react-hook-form-upload/image_upload.gif",alt:"multipart/form-data file upload"}),(0,r.yg)("br",null),(0,r.yg)("br",null),(0,r.yg)("div",null,(0,r.yg)("a",{href:"https://discord.gg/refine"},(0,r.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord_big_blue.png",alt:"discord banner"}))),(0,r.yg)("h2",{id:"are-you-looking-react-web-framework"},"Are You Looking React Web Framework?"),(0,r.yg)("p",null,"A React-based framework for building internal tools, rapidly. ",(0,r.yg)("strong",{parentName:"p"},"Refine")," offers lots of out-of-the box functionality for rapid development, without compromising extreme customizability. Use-cases include, but are not limited to admin panels, B2B applications and dashboards."),(0,r.yg)("p",null,"\ud83d\udd25 ",(0,r.yg)("strong",{parentName:"p"},"Headless")," : Works with any UI framework"),(0,r.yg)("p",null,"\u2699\ufe0f Zero-configuration: One-line setup with superplate. It takes less than a minute to start a project."),(0,r.yg)("p",null,"\ud83d\udce6 Out-of-the-box : Routing, networking, authentication, state management, i18n and UI."),(0,r.yg)("p",null,"\ud83d\udd0c Backend Agnostic : Connects to any custom backend. Built-in support for REST API, Strapi, NestJs CRUD, Hasura, Airtable, Medusa, Supabase, and Appwrite."),(0,r.yg)("p",null,"\ud83d\udcdd Native Typescript Core : You can always opt-out for plain JavaScript."),(0,r.yg)("p",null,"\ud83d\udc1c Enterprise UI : Works seamlessly with Ant Design. (Support for multiple UI frameworks is on the Roadmap)"),(0,r.yg)("p",null,"\ud83d\udcdd Boilerplate-free Code : Keeps your codebase clean and readable."),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://refine.dev/docs/"},"Refer to the ",(0,r.yg)("strong",{parentName:"a"},"Refine")," documentation for more information. \u2192")),(0,r.yg)("h2",{id:"how-to-multipart-file-upload-with-refine-and-react-hook-form"},"How to Multipart File Upload with Refine and React Hook Form?"),(0,r.yg)("p",null,"It allows you to manage your forms and send data to your server with the ",(0,r.yg)("a",{parentName:"p",href:"/docs/packages/list-of-packages"},"refine-react-hook-form adapter")," it publishes with its ",(0,r.yg)("strong",{parentName:"p"},"Refine")," ",(0,r.yg)("strong",{parentName:"p"},"headless")," feature. With this adapter, you can use all the features of the React Hook Form in harmony with ",(0,r.yg)("strong",{parentName:"p"},"Refine"),". You can also perform ",(0,r.yg)("inlineCode",{parentName:"p"},"Multipart File Upload(multipart/form-data)")," operation very easily using this adapter."),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/docs/packages/list-of-packages"},"Refer to the refine-react-hook-form adapter documentation for detailed information. \u2192")),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/examples/reactHookForm/useForm"},"View Source")),(0,r.yg)("p",null,"You can manage your form very easily with the ",(0,r.yg)("inlineCode",{parentName:"p"},"refine-react-hook-form adapter"),". The data created in the form will be automatically saved to the database with the ",(0,r.yg)("strong",{parentName:"p"},"Refine")," ",(0,r.yg)("inlineCode",{parentName:"p"},"onFinish")," method."),(0,r.yg)("p",null,"This is a basic ",(0,r.yg)("inlineCode",{parentName:"p"},"CMS")," app that was created with ",(0,r.yg)("strong",{parentName:"p"},"Refine"),"'s ",(0,r.yg)("strong",{parentName:"p"},"headless")," feature. You may quickly build records and save them to your database using ",(0,r.yg)("strong",{parentName:"p"},"Refine"),". We'll look at the CreatePost page of this step. We'll create a record in the form and manage it with the ",(0,r.yg)("inlineCode",{parentName:"p"},"refine-react-hook-form")," adapter."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/CreatePost"',title:'"src/pages/CreatePost"'},'import { useState } from "react";\n//highlight-next-line\nimport { useForm } from "@refinedev/react-hook-form";\nimport { useSelect, useApiUrl } from "@refinedev/core";\n\nimport axios from "axios";\n\nexport const PostCreate: React.FC = () => {\n  const [isUploading, setIsUploading] = useState<boolean>(false);\n\n  //highlight-start\n  const {\n    refineCore: { onFinish, formLoading },\n    register,\n    handleSubmit,\n    formState: { errors },\n    setValue,\n  } = useForm();\n  //highlight-end\n\n  //highlight-next-line\n  const apiURL = useApiUrl();\n\n  const { options } = useSelect({\n    resource: "categories",\n  });\n\n  //highlight-start\n  const onSubmitFile = async () => {\n    setIsUploading(true);\n    const inputFile = document.getElementById("fileInput") as HTMLInputElement;\n\n    const formData = new FormData();\n    formData.append("file", inputFile?.files?.item(0) as File);\n\n    const res = await axios.post<{ url: string }>(\n      `${apiURL}/media/upload`,\n      formData,\n      {\n        withCredentials: false,\n        headers: {\n          "Access-Control-Allow-Origin": "*",\n        },\n      },\n    );\n\n    setValue("thumbnail", res.data.url);\n    setIsUploading(false);\n  };\n  //highlight-end\n\n  return (\n    //highlight-next-line\n    <form onSubmit={handleSubmit(onFinish)}>\n      <label>Title: </label>\n      <input {...register("title", { required: true })} />\n      {errors.title && <span>This field is required</span>}\n      <br />\n      <label>Status: </label>\n      <select {...register("status")}>\n        <option value="published">published</option>\n        <option value="draft">draft</option>\n        <option value="rejected">rejected</option>\n      </select>\n      <br />\n      <label>Category: </label>\n      <select\n        defaultValue={""}\n        {...register("category.id", { required: true })}\n      >\n        <option value={""} disabled>\n          Please select\n        </option>\n        {options?.map((category) => (\n          <option key={category.value} value={category.value}>\n            {category.label}\n          </option>\n        ))}\n      </select>\n      {errors.category && <span>This field is required</span>}\n      <br />\n      <label>Content: </label>\n      <br />\n      <textarea\n        {...register("content", { required: true })}\n        rows={10}\n        cols={50}\n      />\n      {errors.content && <span>This field is required</span>}\n      <br />\n      <br />\n      //highlight-start\n      <label>Image: </label>\n      <input id="fileInput" type="file" onChange={onSubmitFile} />\n      <input type="hidden" {...register("thumbnail", { required: true })} />\n      {errors.thumbnail && <span>This field is required</span>}\n      //highlight-end\n      <br />\n      <br />\n      <input type="submit" disabled={isUploading} value="Submit" />\n      {formLoading && <p>Loading</p>}\n    </form>\n  );\n};\n')),(0,r.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-03-29-react-hook-form-upload/overview.gif",alt:"Refine Example Overview"}),(0,r.yg)("br",null),(0,r.yg)("p",null,"As you can see, we have easily saved both our data such as title, category, status and an image in the form of ",(0,r.yg)("inlineCode",{parentName:"p"},"multipart/form-data")," to our database using the ",(0,r.yg)("inlineCode",{parentName:"p"},"refine-react-hook-form")," adapter. We've only shown how to utilize the Multipart File Upload feature for our example in this tutorial. For examine ",(0,r.yg)("strong",{parentName:"p"},"Refine")," CMS example, checkout the live codeSandbox below."),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)(m,{path:"form-react-hook-form-use-form",mdxType:"CodeSandboxExample"}))}f.isMDXComponent=!0}}]);