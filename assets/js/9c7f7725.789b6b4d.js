"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[62561],{15680:(e,n,a)=>{a.d(n,{xA:()=>d,yg:()=>y});var t=a(96540);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=t.createContext({}),p=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},d=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(a),c=i,y=m["".concat(l,".").concat(c)]||m[c]||g[c]||r;return a?t.createElement(y,o(o({ref:n},d),{},{components:a})):t.createElement(y,o({ref:n},d))}));function y(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=c;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[m]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=a[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},78002:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>y,frontMatter:()=>s,metadata:()=>p,toc:()=>m});a(96540);var t=a(15680);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})),e}function o(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}const s={title:"How to Use JavaScript Array Splice",description:"This post is about various uses of the splice() method in JavaScript.",slug:"javascript-splice-method",authors:"abdullah_numan",tags:["javascript"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-20-js-splice/social.png",hide_table_of_contents:!1},l=void 0,p={permalink:"/blog/javascript-splice-method",source:"@site/blog/2023-10-20-js-splice.md",title:"How to Use JavaScript Array Splice",description:"This post is about various uses of the splice() method in JavaScript.",date:"2023-10-20T00:00:00.000Z",formattedDate:"October 20, 2023",tags:[{label:"javascript",permalink:"/blog/tags/javascript"}],readingTime:11.04,hasTruncateMarker:!1,authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],frontMatter:{title:"How to Use JavaScript Array Splice",description:"This post is about various uses of the splice() method in JavaScript.",slug:"javascript-splice-method",authors:"abdullah_numan",tags:["javascript"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-20-js-splice/social.png",hide_table_of_contents:!1},prevItem:{title:"Kubectl Restart Pod - Restarting Pods in Kubernetes",permalink:"/blog/kubectl-restart-pod"},nextItem:{title:"A complete guide to Kubectl exec",permalink:"/blog/kubectl-exec-command"},relatedPosts:[{title:"JavaScript Substring Method",description:"We'll learn how to use JavaScript substring method to extract substrings from a parent string.",permalink:"/blog/javascript-substring-method",formattedDate:"October 23, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:8.88,date:"2023-10-23T00:00:00.000Z"},{title:"How to Install and Use NVM?",description:"Guide to using NVM with Mac and Windows",permalink:"/blog/install-nvm-mac-and-windows",formattedDate:"November 9, 2022",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:7.415,date:"2022-11-09T00:00:00.000Z"},{title:"How to Multipart File Upload Using FormData with React Hook Form",description:"In this guide, I'm going to show you how to multipart files upload with using React Hook Form",permalink:"/blog/how-to-multipart-file-upload-with-react-hook-form",formattedDate:"March 29, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:7.06,date:"2022-03-29T00:00:00.000Z"}],authorPosts:[{title:"A Detailed Guide on TypeScript Pick Type",description:"We'll deep dive into the TypeScript Pick utility type with examples and use cases.",permalink:"/blog/typescript-pick-utility-type",formattedDate:"September 30, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:6.475,date:"2022-09-30T00:00:00.000Z"},{title:"TypeScript Mapped Types in Depth",description:"This post provides an in-depth guide on how to derive mapped types in TypeScript.",permalink:"/blog/typescript-mapped-types",formattedDate:"February 29, 2024",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:11.19,date:"2024-02-29T00:00:00.000Z"},{title:"How to Use JavaScript Slice Method",description:"JavaScript Slice method implementation on Array and Strings with examples",permalink:"/blog/javascript-slice",formattedDate:"January 31, 2024",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:10.75,date:"2024-01-31T00:00:00.000Z"}]},d={authorsImageUrls:[void 0]},m=[{value:"Introduction",id:"introduction",level:2},{value:"JavaScript Splice",id:"javascript-splice",level:2},{value:"JS <code>Array.prototype.splice()</code> Method Signature",id:"js-arrayprototypesplice-method-signature",level:3},{value:"JS <code>splice()</code> Result / Return Value",id:"js-splice-result--return-value",level:3},{value:"JS <code>Array.prototype.splice()</code> without Arguments",id:"js-arrayprototypesplice-without-arguments",level:3},{value:"Wiping All After <code>n</code> Items - JavaScript <code>splice()</code> with Only <code>startIndex</code>",id:"wiping-all-after-n-items---javascript-splice-with-only-startindex",level:3},{value:"Deleting Intermediary Items with JS <code>Array.prototype.splice()</code>",id:"deleting-intermediary-items-with-js-arrayprototypesplice",level:3},{value:"Replacing Items with JS <code>Array.prototype.splice()</code>",id:"replacing-items-with-js-arrayprototypesplice",level:3},{value:"Items Injection with <code>Array.prototype.splice()</code>",id:"items-injection-with-arrayprototypesplice",level:3},{value:"Tailgrowing with <code>Array.prototype.splice()</code>",id:"tailgrowing-with-arrayprototypesplice",level:3},{value:"Inject Items Before Last <code>n</code> Items - JavaScript <code>slice()</code> with Negative <code>startIndex</code>",id:"inject-items-before-last-n-items---javascript-slice-with-negative-startindex",level:3},{value:"Nuances of JS <code>Array.prototype.splice()</code>",id:"nuances-of-js-arrayprototypesplice",level:2},{value:"Higher Negatives of <code>startIndex</code>",id:"higher-negatives-of-startindex",level:3},{value:"Higher <code>startIndex</code> Value",id:"higher-startindex-value",level:3},{value:"Summary",id:"summary",level:2}],g={toc:m},c="wrapper";function y(e){var{components:n}=e,a=o(e,["components"]);return(0,t.yg)(c,r(function(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{},t=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),t.forEach((function(n){i(e,n,a[n])}))}return e}({},g,a),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"introduction"},"Introduction"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"Array.prototype.splice()")," is a JavaScript ",(0,t.yg)("inlineCode",{parentName:"p"},"Array")," method that is used to remove, replace or insert items starting at a chosen index. It is also an effective tool for adding items to the end of an array."),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"Array.prototype.splice()")," is a sparsely used but powerful JavaScript method for manipulating arrays ",(0,t.yg)("strong",{parentName:"p"},"in place"),". This means, we are mutating the actual array, not a copy of it. JavaScript ",(0,t.yg)("inlineCode",{parentName:"p"},"splice()")," is useful for wiping all items after ",(0,t.yg)("inlineCode",{parentName:"p"},"n")," number of initial items. It is handy for removing a number of intermediary items starting at an indicated index. It is especially needed for inserting items when we want to replace items or overload an array besides replacement. JavaScript ",(0,t.yg)("inlineCode",{parentName:"p"},"splice()")," offers an alternative to ",(0,t.yg)("inlineCode",{parentName:"p"},"Array.prototype.push()")," for growing the tail of the array as well."),(0,t.yg)("p",null,"Unlike several other ",(0,t.yg)("inlineCode",{parentName:"p"},"Array")," methods, JavaScript ",(0,t.yg)("inlineCode",{parentName:"p"},"slice()")," does not have a ",(0,t.yg)("inlineCode",{parentName:"p"},"String")," equivalent."),(0,t.yg)("p",null,"In this post, we play around to illustrate various use cases of JavaScript ",(0,t.yg)("inlineCode",{parentName:"p"},"splice()")," with trivial examples. We start with the method signature for ",(0,t.yg)("inlineCode",{parentName:"p"},"Array.prototype.splice()"),", its possible parameters (",(0,t.yg)("inlineCode",{parentName:"p"},"startIndex"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"deleteCount"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"item"),"s) and what they represent. We then go ahead and see examples of using combinations of passed arguments to manipulate an array. In particular, we observe how to wipe out items from a certain index onward. We also go through examples of replacing existing items with new ones. We explore how to insert items in the case of overloaded replacement and injection. We also figure out ",(0,t.yg)("inlineCode",{parentName:"p"},"splice()")," way of adding items to the tail of the array."),(0,t.yg)("p",null,"Towards the end, we touch base on the nuances of the values passed as ",(0,t.yg)("inlineCode",{parentName:"p"},"startIndex")," and learn how JavaScript ",(0,t.yg)("inlineCode",{parentName:"p"},"splice()")," behaves when ",(0,t.yg)("inlineCode",{parentName:"p"},"startIndex")," argument is negative or greater than the array length."),(0,t.yg)("p",null,"Steps we'll cover in this post:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#javascript-splice"},"JavaScript Splice"),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#js-arrayprototypesplice-method-signature"},"JS ",(0,t.yg)("inlineCode",{parentName:"a"},"Array.prototype.splice()")," Method Signature")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#js-splice-result--return-value"},"JS ",(0,t.yg)("inlineCode",{parentName:"a"},"splice()")," Result / Return Value")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#js-arrayprototypesplice-without-arguments"},"JS ",(0,t.yg)("inlineCode",{parentName:"a"},"Array.prototype.splice()")," without Arguments")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#wiping-all-after-n-items---javascript-splice-with-only-startindex"},"Wiping All After ",(0,t.yg)("inlineCode",{parentName:"a"},"n")," Items - JavaScript ",(0,t.yg)("inlineCode",{parentName:"a"},"splice()")," with Only ",(0,t.yg)("inlineCode",{parentName:"a"},"startIndex"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#deleting-intermediary-items-with-js-arrayprototypesplice"},"Deleting Intermediary Items with JS ",(0,t.yg)("inlineCode",{parentName:"a"},"Array.prototype.splice()"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#replacing-items-with-js-arrayprototypesplice"},"Replacing Items with JS ",(0,t.yg)("inlineCode",{parentName:"a"},"Array.prototype.splice()"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#items-injection-with-arrayprototypesplice"},"Items Injection with ",(0,t.yg)("inlineCode",{parentName:"a"},"Array.prototype.splice()"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#tailgrowing-with-arrayprototypesplice"},"Tailgrowing with ",(0,t.yg)("inlineCode",{parentName:"a"},"Array.prototype.splice()"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#inject-items-before-last-n-items---javascript-slice-with-negative-startindex"},"Inject Items Before Last ",(0,t.yg)("inlineCode",{parentName:"a"},"n")," Items - JavaScript ",(0,t.yg)("inlineCode",{parentName:"a"},"slice()")," with Negative ",(0,t.yg)("inlineCode",{parentName:"a"},"startIndex"))))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#nuances-of-js-arrayprototypesplice"},"Nuances of JS ",(0,t.yg)("inlineCode",{parentName:"a"},"Array.prototype.splice()")),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#higher-negatives-of-startindex"},"Higher Negatives of ",(0,t.yg)("inlineCode",{parentName:"a"},"startIndex"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#higher-startindex-value"},"Higher ",(0,t.yg)("inlineCode",{parentName:"a"},"startIndex")," Value"))))),(0,t.yg)("h2",{id:"javascript-splice"},"JavaScript Splice"),(0,t.yg)("p",null,"When called by an array, JavaScript ",(0,t.yg)("inlineCode",{parentName:"p"},"splice()")," takes three possible arguments: ",(0,t.yg)("inlineCode",{parentName:"p"},"startIndex"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"deleteCount")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"item"),"s list. Of these three types of arguments, ",(0,t.yg)("inlineCode",{parentName:"p"},"startIndex")," indicates a zero-based index at which mutation kicks off. ",(0,t.yg)("inlineCode",{parentName:"p"},"deleteCount")," denotes the number of items to be deleted and ",(0,t.yg)("inlineCode",{parentName:"p"},"item"),"s is a possibly infinite list of items to be inserted."),(0,t.yg)("h3",{id:"js-arrayprototypesplice-method-signature"},"JS ",(0,t.yg)("inlineCode",{parentName:"h3"},"Array.prototype.splice()")," Method Signature"),(0,t.yg)("p",null,"Possible call signatures for JavaScript ",(0,t.yg)("inlineCode",{parentName:"p"},"splice()")," are:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},"splice()\nsplice(startIndex)\nsplice(startIndex, deleteCount, item1)\nsplice(startIndex, deleteCount, item1, item2, /*...*/, itemN)\n")),(0,t.yg)("p",null,"None of the arguments for ",(0,t.yg)("inlineCode",{parentName:"p"},"Array.prototype.splice()")," are required. However, when we want to mutate the caller array, we have to pass the ",(0,t.yg)("inlineCode",{parentName:"p"},"startIndex")," as a minimum. Passing ",(0,t.yg)("inlineCode",{parentName:"p"},"deleteCount")," depends on whether we want to delete any item/s or not. And passing the ",(0,t.yg)("inlineCode",{parentName:"p"},"item"),"s list depends on whether/what we want to insert or add to the array. It is also possible to pass all arguments at the same time. In the coming sections, we consider most of the cases."),(0,t.yg)("h3",{id:"js-splice-result--return-value"},"JS ",(0,t.yg)("inlineCode",{parentName:"h3"},"splice()")," Result / Return Value"),(0,t.yg)("p",null,"As we'll start seeing next, ",(0,t.yg)("inlineCode",{parentName:"p"},"splice()")," mutates the original array and returns an array containing ",(0,t.yg)("strong",{parentName:"p"},"removed items"),"."),(0,t.yg)("h3",{id:"js-arrayprototypesplice-without-arguments"},"JS ",(0,t.yg)("inlineCode",{parentName:"h3"},"Array.prototype.splice()")," without Arguments"),(0,t.yg)("p",null,"Although, JavaScript ",(0,t.yg)("inlineCode",{parentName:"p"},"splice()")," attempts to mutate the caller array, the returned value is ",(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("em",{parentName:"strong"},"an array of removed items")),". We can get a hint of the return value when an array calls it without passing any argument:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'const mnemonic = [\n  "Please",\n  "Send",\n  "Cats",\n  "Monkeys",\n  "And",\n  "Zebras",\n  "In",\n  "Large",\n  "Cages",\n  "Make",\n  "Sure",\n  "Padlocked",\n];\n\n// Return value\nconsole.log(mnemonic.splice()); // []\n\nconsole.log(mnemonic); // ["Please", "Send", "Cats", "Monkeys", "And", "Zebras", "In", "Large", "Cages", "Make", "Sure", "Padlocked"]\n')),(0,t.yg)("p",null,"As we can see, ",(0,t.yg)("inlineCode",{parentName:"p"},"splice()")," without argument returns an empty array ",(0,t.yg)("inlineCode",{parentName:"p"},"[]"),". And as we'll see it become clearer in the next section, it is an array of removed items. In the case above, since no item is being removed, it is empty."),(0,t.yg)("p",null,"Notice that, although ",(0,t.yg)("inlineCode",{parentName:"p"},"splice()")," is geared to remove items, it did not mutate the caller above, since we have not passed ",(0,t.yg)("inlineCode",{parentName:"p"},"startIndex"),"."),(0,t.yg)("h3",{id:"wiping-all-after-n-items---javascript-splice-with-only-startindex"},"Wiping All After ",(0,t.yg)("inlineCode",{parentName:"h3"},"n")," Items - JavaScript ",(0,t.yg)("inlineCode",{parentName:"h3"},"splice()")," with Only ",(0,t.yg)("inlineCode",{parentName:"h3"},"startIndex")),(0,t.yg)("p",null,"When we pass ",(0,t.yg)("inlineCode",{parentName:"p"},"startIndex"),", we should expect the caller array to mutate."),(0,t.yg)("p",null,"With ",(0,t.yg)("strong",{parentName:"p"},"only")," ",(0,t.yg)("inlineCode",{parentName:"p"},"startIndex")," passed to JavaScript ",(0,t.yg)("inlineCode",{parentName:"p"},"splice()"),", all items including the one ",(0,t.yg)("strong",{parentName:"p"},"at and after")," ",(0,t.yg)("inlineCode",{parentName:"p"},"startIndex")," are removed:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'const mnemonic = [\n  "Please",\n  "Send",\n  "Cats",\n  "Monkeys",\n  "And",\n  "Zebras",\n  "In",\n  "Large",\n  "Cages",\n  "Make",\n  "Sure",\n  "Padlocked",\n];\n\n// Return value\nconsole.log(mnemonic.splice(4)); // ["And", "Zebras", "In", "Large", "Cages", "Make", "Sure", "Padlocked"]\n\n// Caller array\nconsole.log(mnemonic); // ["Please", "Send", "Cats", "Monkeys"]\n')),(0,t.yg)("p",null,"We can clearly see from this example that the returned array now has items including the one at ",(0,t.yg)("inlineCode",{parentName:"p"},"startIndex")," (",(0,t.yg)("inlineCode",{parentName:"p"},"4"),") till the end ",(0,t.yg)("strong",{parentName:"p"},"removed"),". In other words, they were wiped out and the items upto ",(0,t.yg)("inlineCode",{parentName:"p"},"startIndex")," are remaining in the original array."),(0,t.yg)("p",null,"It is important to notice that removal begins at ",(0,t.yg)("inlineCode",{parentName:"p"},"startIndex")," ",(0,t.yg)("strong",{parentName:"p"},"included"),". This gives rise to a noticeable pattern where the zero based ",(0,t.yg)("inlineCode",{parentName:"p"},"startIndex")," actually corresponds to first ",(0,t.yg)("strong",{parentName:"p"},"n")," items ",(0,t.yg)("strong",{parentName:"p"},"remaining")," in the caller array, i.e. ",(0,t.yg)("inlineCode",{parentName:"p"},"n = startIndex"),":"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'const mnemonic = [\n  "Please",\n  "Send",\n  "Cats",\n  "Monkeys",\n  "And",\n  "Zebras",\n  "In",\n  "Large",\n  "Cages",\n  "Make",\n  "Sure",\n  "Padlocked",\n];\n\n// Wiping all after first 4 items\nconsole.log(mnemonic.splice(4)); // ["And", "Zebras", "In", "Large", "Cages", "Make", "Sure", "Padlocked"]\nconsole.log(mnemonic); // ["Please", "Send", "Cats", "Monkeys"]\n\n// Wiping all after first 2 items\nconsole.log(mnemonic.splice(2)); // ["Cats", "Monkeys"]\nconsole.log(mnemonic); // ["Please", "Send"]\n\n// Wiping all items\nconsole.log(mnemonic.splice(0)); // ["Please", "Send"]\nconsole.log(mnemonic); // []\n')),(0,t.yg)("p",null,"In the above examples, for each of the values passed as ",(0,t.yg)("inlineCode",{parentName:"p"},"startIndex"),", we want that number of items to remain at the head of the original array. With ",(0,t.yg)("inlineCode",{parentName:"p"},"mnemonic.splice(0)"),", we are emptying the original array."),(0,t.yg)("h3",{id:"deleting-intermediary-items-with-js-arrayprototypesplice"},"Deleting Intermediary Items with JS ",(0,t.yg)("inlineCode",{parentName:"h3"},"Array.prototype.splice()")),(0,t.yg)("p",null,"We can remove intermediary items from an array by passing ",(0,t.yg)("inlineCode",{parentName:"p"},"deleteCount")," as the second argument. This removes the indicated number of items beginning at ",(0,t.yg)("inlineCode",{parentName:"p"},"startIndex"),":"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'const mnemonic = [\n  "Please",\n  "Send",\n  "Cats",\n  "Monkeys",\n  "And",\n  "Zebras",\n  "In",\n  "Large",\n  "Cages",\n  "Make",\n  "Sure",\n  "Padlocked",\n];\nconsole.log(mnemonic.splice(4, 2)); // ["And", "Zebras"]\nconsole.log(mnemonic); // ["Please", "Send", "Cats", "Monkeys", "In", "Large", "Cages", "Make", "Sure", "Padlocked"]\n')),(0,t.yg)("p",null,"In the above call, we are passing ",(0,t.yg)("inlineCode",{parentName:"p"},"2")," as ",(0,t.yg)("inlineCode",{parentName:"p"},"deleteCount"),". Deleting starts at ",(0,t.yg)("inlineCode",{parentName:"p"},"startIndex")," and ends at the index where ",(0,t.yg)("inlineCode",{parentName:"p"},"deleteCount")," is achieved. Notice, removal slides the items after ",(0,t.yg)("inlineCode",{parentName:"p"},"deleteCount")," to the ",(0,t.yg)("strong",{parentName:"p"},"left"),"."),(0,t.yg)("h3",{id:"replacing-items-with-js-arrayprototypesplice"},"Replacing Items with JS ",(0,t.yg)("inlineCode",{parentName:"h3"},"Array.prototype.splice()")),(0,t.yg)("p",null,"We can replace removed items with new ones by passing in items as a list after the second argument. All items passed are added ",(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("em",{parentName:"strong"},"to ",(0,t.yg)("inlineCode",{parentName:"em"},"startIndex")," onwards")),":"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'const mnemonic = [\n  "Please",\n  "Send",\n  "Cats",\n  "Monkeys",\n  "And",\n  "Zebras",\n  "In",\n  "Large",\n  "Cages",\n  "Make",\n  "Sure",\n  "Padlocked",\n];\nconsole.log(mnemonic.splice(4, 0, "Ants", "Zebus")); // []\nconsole.log(mnemonic); // ["Please", "Send", "Cats", "Monkeys", "Ants", "Zebus", "And", "Zebras", "In", "Large", "Cages", "Make", "Sure", "Padlocked"]\nconsole.log(mnemonic.splice(4, 2)); // ["Ants", "Zebus"]\nconsole.log(mnemonic); // ["Please", "Send", "Cats", "Monkeys", "And", "Zebras", "In", "Large", "Cages", "Make", "Sure", "Padlocked"]\n\n// Items removed first and then added\nconsole.log(mnemonic.splice(4, 2, "Alpacas", "Zorillas"));\nconsole.log(mnemonic); // ["Please", "Send", "Cats", "Monkeys", "Alpacas", "Zorillas", "In", "Large", "Cages", "Make", "Sure", "Padlocked"]\n')),(0,t.yg)("p",null,"Observe above that deletion gains precedence over insertion. It becomes more apparent when ",(0,t.yg)("inlineCode",{parentName:"p"},"deleteCount")," is positive and items are replaced or added with arguments after . In the above series of mutations,",(0,t.yg)("inlineCode",{parentName:"p"},'"Ants", "Zebus"')," first inserted at ",(0,t.yg)("inlineCode",{parentName:"p"},"4"),", with ",(0,t.yg)("inlineCode",{parentName:"p"},"0")," items removed first. Then they were removed with ",(0,t.yg)("inlineCode",{parentName:"p"},"4")," as ",(0,t.yg)("inlineCode",{parentName:"p"},"startIndex"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"2")," as ",(0,t.yg)("inlineCode",{parentName:"p"},"deleteCount")," and no items replacing them. In the last mutation, further removal of ",(0,t.yg)("inlineCode",{parentName:"p"},"2")," items at index ",(0,t.yg)("inlineCode",{parentName:"p"},"4")," happens, that are replaced subsequently with the new items."),(0,t.yg)("p",null,"We can actually go further and overload the array by adding more items than removed:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'const mnemonic = [\n  "Please",\n  "Send",\n  "Cats",\n  "Monkeys",\n  "And",\n  "Zebras",\n  "In",\n  "Large",\n  "Cages",\n  "Make",\n  "Sure",\n  "Padlocked",\n];\n\n// Add more items than removed\nconsole.log(mnemonic.splice(4, 2, "Ants", "Zebus", "Donkeys", "Bears")); // ["And", "Zebras"]\nconsole.log(mnemonic); // ["Please", "Send", "Cats", "Monkeys", "Ants", "Zebus", "Donkeys", "Bears", "In", "Large", "Cages", "Make", "Sure", "Padlocked"]\n')),(0,t.yg)("p",null,"Notice that because we are replacing or overloading items, the items that come after get displaced towards the ",(0,t.yg)("strong",{parentName:"p"},"right"),"."),(0,t.yg)("h3",{id:"items-injection-with-arrayprototypesplice"},"Items Injection with ",(0,t.yg)("inlineCode",{parentName:"h3"},"Array.prototype.splice()")),(0,t.yg)("p",null,"You might already noticed that, if we want to only inject items at a certain point in the array, we can pass ",(0,t.yg)("inlineCode",{parentName:"p"},"0")," as ",(0,t.yg)("inlineCode",{parentName:"p"},"deleteCount"),":"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'const mnemonic = [\n  "Please",\n  "Send",\n  "Cats",\n  "Monkeys",\n  "And",\n  "Zebras",\n  "In",\n  "Large",\n  "Cages",\n  "Make",\n  "Sure",\n  "Padlocked",\n];\nconsole.log(mnemonic.splice(4, 0, "Ants", "Zebus", "Donkeys", "Bears")); // []\nconsole.log(mnemonic); // ["Please", "Send", "Cats", "Monkeys", "Ants", "Zebus", "Donkeys", "Bears", "And", "Zebras", "In", "Large", "Cages", "Make", "Sure", "Padlocked"]\n')),(0,t.yg)("p",null,"New items are added starting at ",(0,t.yg)("inlineCode",{parentName:"p"},"startIndex")," directly because with ",(0,t.yg)("inlineCode",{parentName:"p"},"deleteCount")," set to ",(0,t.yg)("inlineCode",{parentName:"p"},"0"),", so no items are deleted."),(0,t.yg)("h3",{id:"tailgrowing-with-arrayprototypesplice"},"Tailgrowing with ",(0,t.yg)("inlineCode",{parentName:"h3"},"Array.prototype.splice()")),(0,t.yg)("p",null,"We can add to the tail by using the ",(0,t.yg)("inlineCode",{parentName:"p"},"length")," of the caller array as ",(0,t.yg)("inlineCode",{parentName:"p"},"startIndex"),":"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'const mnemonic = [\n  "Please",\n  "Send",\n  "Cats",\n  "Monkeys",\n  "And",\n  "Zebras",\n  "In",\n  "Large",\n  "Cages",\n  "Make",\n  "Sure",\n  "Padlocked",\n];\nconsole.log(\n  mnemonic.splice(mnemonic.length, 0, "Ants", "Zebus", "Donkeys", "Bears"),\n); // []\nconsole.log(mnemonic); // ["Please", "Send", "Cats", "Monkeys", "In", "Large", "Cages", "Make", "Sure", "Padlocked", "Ants", "Zebus", "Donkeys", "Bears"]\n')),(0,t.yg)("p",null,"Caller ",(0,t.yg)("inlineCode",{parentName:"p"},"length")," finds the tail for an incoming item as ",(0,t.yg)("inlineCode",{parentName:"p"},"length")," is greater than the last index in the zero-index based array. Using ",(0,t.yg)("inlineCode",{parentName:"p"},"length")," like this with ",(0,t.yg)("inlineCode",{parentName:"p"},"splice()")," is a good occasional alternative to ",(0,t.yg)("inlineCode",{parentName:"p"},"Array.prototype.push()"),"."),(0,t.yg)("p",null,"It important to caution that using ",(0,t.yg)("inlineCode",{parentName:"p"},"-1")," as ",(0,t.yg)("inlineCode",{parentName:"p"},"startIndex")," ",(0,t.yg)("strong",{parentName:"p"},"doesn't")," add to the tail. That's because for ",(0,t.yg)("inlineCode",{parentName:"p"},"startIndex < 0"),", mutation starts at ",(0,t.yg)("inlineCode",{parentName:"p"},"startIndex + mnemonic.length"),". So, the last item always gets displaced as last and we never add to the tail:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'const mnemonic = [\n  "Please",\n  "Send",\n  "Cats",\n  "Monkeys",\n  "And",\n  "Zebras",\n  "In",\n  "Large",\n  "Cages",\n  "Make",\n  "Sure",\n  "Padlocked",\n];\nconsole.log(mnemonic.splice(-1, 0, "Ants", "Zebus", "Donkeys", "Bears")); // []\nconsole.log(mnemonic); // ["Please", "Send", "Cats", "Monkeys", "And", "Zebras", "In", "Large", "Cages", "Make", "Sure" "Ants", "Zebus", "Donkeys", "Bears", "Padlocked"]\n')),(0,t.yg)("p",null,"A variation of this next."),(0,t.yg)("h3",{id:"inject-items-before-last-n-items---javascript-slice-with-negative-startindex"},"Inject Items Before Last ",(0,t.yg)("inlineCode",{parentName:"h3"},"n")," Items - JavaScript ",(0,t.yg)("inlineCode",{parentName:"h3"},"slice()")," with Negative ",(0,t.yg)("inlineCode",{parentName:"h3"},"startIndex")),(0,t.yg)("p",null,"We can inject new items before last ",(0,t.yg)("inlineCode",{parentName:"p"},"n")," items by passing in ",(0,t.yg)("inlineCode",{parentName:"p"},"-n")," as ",(0,t.yg)("inlineCode",{parentName:"p"},"startIndex"),". This is another example when ",(0,t.yg)("inlineCode",{parentName:"p"},"startIndex < 0"),":"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'const mnemonic = [\n  "Please",\n  "Send",\n  "Cats",\n  "Monkeys",\n  "And",\n  "Zebras",\n  "In",\n  "Large",\n  "Cages",\n  "Make",\n  "Sure",\n  "Padlocked",\n];\n\n// Inject before last 2 items\nconsole.log(mnemonic.splice(-2, 0, "Ants", "Zebus", "Donkeys", "Bears")); // []\nconsole.log(mnemonic); // ["Please", "Send", "Cats", "Monkeys", "And", "Zebras", "In", "Large", "Cages", "Make", "Ants", "Zebus", "Donkeys", "Bears", "Sure", "Padlocked"]\n\n// Inject before last 4 items\nconsole.log(mnemonic.splice(-4, 0, "Apacas", "Zorillas")); // []\nconsole.log(mnemonic); // ["Please", "Send", "Cats", "Monkeys", "And", "Zebras", "In", "Large", "Cages", "Make", "Ants", "Zebus", "Apacas", "Zorillas", "Donkeys", "Bears", "Sure", "Padlocked"]\n')),(0,t.yg)("p",null,"Again, a negative ",(0,t.yg)("inlineCode",{parentName:"p"},"startIndex")," brings ",(0,t.yg)("inlineCode",{parentName:"p"},"-n + mnemonic.length")," to play. So, mutation starts at ",(0,t.yg)("inlineCode",{parentName:"p"},"n")," items (",(0,t.yg)("strong",{parentName:"p"},"not")," indexes) from the end of the array -- keeping last ",(0,t.yg)("inlineCode",{parentName:"p"},"n")," items intact in the tail."),(0,t.yg)("h2",{id:"nuances-of-js-arrayprototypesplice"},"Nuances of JS ",(0,t.yg)("inlineCode",{parentName:"h2"},"Array.prototype.splice()")),(0,t.yg)("p",null,"In this section, let's consider other quirks of using JavaScript ",(0,t.yg)("inlineCode",{parentName:"p"},"slice()"),"."),(0,t.yg)("h3",{id:"higher-negatives-of-startindex"},"Higher Negatives of ",(0,t.yg)("inlineCode",{parentName:"h3"},"startIndex")),(0,t.yg)("p",null,"There is another nuance of using negative ",(0,t.yg)("inlineCode",{parentName:"p"},"startIndex")," with ",(0,t.yg)("inlineCode",{parentName:"p"},"splice()"),". For example, when ",(0,t.yg)("inlineCode",{parentName:"p"},"startIndex < -mnemonic.length"),", it is effectively ",(0,t.yg)("inlineCode",{parentName:"p"},"0"),":"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'const mnemonic = [\n  "Please",\n  "Send",\n  "Cats",\n  "Monkeys",\n  "And",\n  "Zebras",\n  "In",\n  "Large",\n  "Cages",\n  "Make",\n  "Sure",\n  "Padlocked",\n];\nconsole.log(mnemonic.splice(-100, 10, "Ants", "Zebus", "Donkeys", "Bears")); // ["Please", "Send", "Cats", "Monkeys", "And", "Zebras", "In", "Large", "Cages", "Make"]\nconsole.log(mnemonic); // ["Ants", "Zebus", "Donkeys", "Bears", "Sure", "Padlocked"]\n')),(0,t.yg)("p",null,"Here, with ",(0,t.yg)("inlineCode",{parentName:"p"},"startIndex")," value of ",(0,t.yg)("inlineCode",{parentName:"p"},"-100"),", removal starts at index ",(0,t.yg)("inlineCode",{parentName:"p"},"0")," and first ",(0,t.yg)("inlineCode",{parentName:"p"},"10")," items are removed. The passed items are added after removal at index ",(0,t.yg)("inlineCode",{parentName:"p"},"0"),"."),(0,t.yg)("br",null),(0,t.yg)("h3",{id:"higher-startindex-value"},"Higher ",(0,t.yg)("inlineCode",{parentName:"h3"},"startIndex")," Value"),(0,t.yg)("p",null,"When ",(0,t.yg)("inlineCode",{parentName:"p"},"startIndex")," is greater than the length of the array, no items is deleted even if ",(0,t.yg)("inlineCode",{parentName:"p"},"deleteCount")," is passed. Plus all passed items are tucked to the tail:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'const mnemonic = [\n  "Please",\n  "Send",\n  "Cats",\n  "Monkeys",\n  "And",\n  "Zebras",\n  "In",\n  "Large",\n  "Cages",\n  "Make",\n  "Sure",\n  "Padlocked",\n];\nconsole.log(mnemonic.splice(100, 10, "Ants", "Zebus", "Donkeys", "Bears")); // []\nconsole.log(mnemonic); // ["Please", "Send", "Cats", "Monkeys", "And", "Zebras", "In", "Large", "Cages", "Make", "Sure", "Padlocked", "Ants", "Zebus", "Donkeys", "Bears"]\n')),(0,t.yg)("p",null,"As we can see, ",(0,t.yg)("inlineCode",{parentName:"p"},"100")," is far greater than ",(0,t.yg)("inlineCode",{parentName:"p"},"mnemonic.length"),", and we asked for deletion of ",(0,t.yg)("inlineCode",{parentName:"p"},"10")," items somewhere non-existent. So, none is deleted inside the array. And passed items are added to the tail."),(0,t.yg)("p",null,"Using an arbitrary higher index is, however, not safe for tailgrowing, since it does not always make sure ",(0,t.yg)("inlineCode",{parentName:"p"},"startIndex")," is greater or equal to caller ",(0,t.yg)("inlineCode",{parentName:"p"},"length"),"."),(0,t.yg)("h2",{id:"summary"},"Summary"),(0,t.yg)("p",null,"In this post, explored various cases and patterns of using JavaScript ",(0,t.yg)("inlineCode",{parentName:"p"},"splice()"),". We learned that ",(0,t.yg)("inlineCode",{parentName:"p"},"Array.prototype.splice()")," is an array method and it doesn't have a ",(0,t.yg)("inlineCode",{parentName:"p"},"String")," equivalent. We also understood that it mutates the original array and returns an array of removed items."),(0,t.yg)("p",null,"We found out how to wipe out all items after first ",(0,t.yg)("inlineCode",{parentName:"p"},"n")," items by passing ",(0,t.yg)("inlineCode",{parentName:"p"},"n")," as the ",(0,t.yg)("inlineCode",{parentName:"p"},"startIndex")," to ",(0,t.yg)("inlineCode",{parentName:"p"},"splice()"),". We illustrated how to remove intermediary items by passing ",(0,t.yg)("inlineCode",{parentName:"p"},"deleteCount")," as the second argument. We also saw how to replace removed items by passing in new items as third argument and onward. We learned how to inject items with ",(0,t.yg)("inlineCode",{parentName:"p"},"0")," passed as ",(0,t.yg)("inlineCode",{parentName:"p"},"deleteCount"),"."),(0,t.yg)("p",null,"We figured out an alternative to ",(0,t.yg)("inlineCode",{parentName:"p"},"Array.prototype.push()")," by using ",(0,t.yg)("inlineCode",{parentName:"p"},"Array.prototype.splice()")," with caller ",(0,t.yg)("inlineCode",{parentName:"p"},"length")," passed as ",(0,t.yg)("inlineCode",{parentName:"p"},"startIndex"),". We also discovered the pattern of adding items prior to last ",(0,t.yg)("inlineCode",{parentName:"p"},"n")," items using ",(0,t.yg)("inlineCode",{parentName:"p"},"-n")," as the ",(0,t.yg)("inlineCode",{parentName:"p"},"startIndex"),". In the end, we explored the quirks of using extreme values of ",(0,t.yg)("inlineCode",{parentName:"p"},"startIndex"),", particularly when it is more negative than ",(0,t.yg)("inlineCode",{parentName:"p"},"-length")," of the caller array and when it is higher than ",(0,t.yg)("inlineCode",{parentName:"p"},"length"),"."))}y.isMDXComponent=!0}}]);