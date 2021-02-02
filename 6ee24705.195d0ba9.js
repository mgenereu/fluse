(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(6),i=(n(0),n(82)),o={id:"api-fixture",title:"fixture()",sidebar_label:"fixture()"},c={unversionedId:"api-fixture",id:"api-fixture",isDocsHomePage:!1,title:"fixture()",description:"Creates a fixture definition.",source:"@site/docs\\api-fixture.md",slug:"/api-fixture",permalink:"/fluse/docs/api-fixture",editUrl:"https://github.com/Nayni/fluse/edit/master/website/docs/api-fixture.md",version:"current",sidebar_label:"fixture()",sidebar:"docs",previous:{title:"fluse()",permalink:"/fluse/docs/api-fluse"},next:{title:"scenario()",permalink:"/fluse/docs/api-scenario"}},u=[{value:"Signature",id:"signature",children:[]},{value:"Example",id:"example",children:[]}],l={rightToc:u};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Creates a fixture definition."),Object(i.b)("h2",{id:"signature"},"Signature"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"fixture<TResult, TArgs>(config: {\n  create: (\n    context: { [key: string]: PluginContext },\n    args: TArgs,\n    info: {\n      list: {\n        index: number,\n        size: number\n      }\n    }\n  ) => MaybePromise<TResult>;\n}) => (args?: TArgs) => Fixture<TResult>\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"create")," ",Object(i.b)("strong",{parentName:"li"},"(required)"),": A function that defines how to create a data model. This functions receives the following arguments:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"context"),": The context as defined by ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/fluse/docs/api-fluse"}),"fluse()"),","),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"args"),": Additional ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/fluse/docs/supplying-arguments"}),"arguments")," as defined by the ",Object(i.b)("inlineCode",{parentName:"li"},"TArgs")," type,"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"info"),": Additional info such as ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/fluse/docs/lists"}),"list information"))))),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'interface PostArgs {\n  author: User;\n}\n\nexport const postFixture = fixture<Post, PostArgs>({\n  create(context, args) {\n    const post = new Post({\n      title: context.faker.lorem.slug(),\n      body: context.faker.lorem.paragraphs(4),\n      author: args.author,\n    });\n\n    return post;\n  },\n});\n\nit("should be executable", async () => {\n  const post = await postFixture({ author: new User() }).execute();\n});\n')))}s.isMDXComponent=!0},82:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(n),f=r,d=p["".concat(o,".").concat(f)]||p[f]||b[f]||i;return n?a.a.createElement(d,c(c({ref:t},l),{},{components:n})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);