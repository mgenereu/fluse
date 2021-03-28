(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{64:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),i=n(7),a=(n(0),n(94)),o={id:"create-plugin",title:"How to create a plugin",sidebar_label:"How to create a plugin"},c={unversionedId:"create-plugin",id:"create-plugin",isDocsHomePage:!1,title:"How to create a plugin",description:"Creating a plugin starts by importing the createPlugin function from Fluse.",source:"@site/docs\\plugins-create.md",slug:"/create-plugin",permalink:"/fluse/docs/create-plugin",editUrl:"https://github.com/Nayni/fluse/edit/master/website/docs/plugins-create.md",version:"current",sidebar_label:"How to create a plugin",sidebar:"docs",previous:{title:"Introduction",permalink:"/fluse/docs/plugins-introduction"},next:{title:"plugin-faker",permalink:"/fluse/docs/plugin-faker"}},u=[],l={toc:u};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Creating a plugin starts by importing the ",Object(a.b)("inlineCode",{parentName:"p"},"createPlugin")," function from Fluse."),Object(a.b)("p",null,"This function is a generic TypeScript function that requires two generic arguments to be passed:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"a type for the plugins context shape, this represents what your plugin will add to the context. In case your plugin doesn't add anything to the context you can use the ",Object(a.b)("inlineCode",{parentName:"li"},"EmptyContext")," type which is exported by Fluse."),Object(a.b)("li",{parentName:"ul"},"a type for runtime options that your plugin may use. These runtime options can be used to alter behaviour at runtime. They're mainly used for stateful resources such as database connections.")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},'import { createPlugin } from "fluse";\n\n// Defines what we will put on the context.\n// Don\'t forget to export this type!\nexport interface MyPluginContext {\n  foo: string;\n  baz: number;\n}\n\n// Defines what we will accept as runtime options.\n// Don\'t forget to export this type!\nexport interface MyPluginOptions {\n  printHello?: boolean;\n}\n\n// The plugin\nfunction myPlugin() {\n  return createPlugin<MyPluginContext, MyPluginOptions>({\n    // Every plugin requires a name.\n    // Fluse will use this to report possible issues back to you.\n    name: "myplugin",\n    // Plugins must specific a semver compatible range.\n    version: "0.x",\n    // Execute is the method you must implement as a plugin.\n    // You\'ll receieve a next function as well as runtimeOptions (in case you typed them)\n    execute(next, runtimeOptions) {\n      if (runtimeOptions.printHello) {\n        console.log("hello");\n      }\n\n      // You must call the next function, and provide your context.\n      // Fluse will take care of the rest.\n      return next({\n        foo: "bar",\n        baz: 1,\n      });\n    },\n  });\n}\n\nexport default myPlugin;\n')),Object(a.b)("p",null,"Once we have our plugin, we can use it by setting it up in the initialize:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},'import { fluse } from "fluse";\n\nexport const { fixture, scenario } = fluse({\n  plugins: {\n    myplugin: myPlugin(),\n  },\n});\n')),Object(a.b)("p",null,"Fixture definitions will now contain a key ",Object(a.b)("inlineCode",{parentName:"p"},"myplugin")," which contains the plugins context. Additionally runtime options are now available on the execute method:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"const user = await userFixture().execute({\n  myplugin: { printHello: true },\n});\n")),Object(a.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"If your plugin will be published as a separate npm package you should include Fluse as a ",Object(a.b)("inlineCode",{parentName:"p"},"peerDependency"),"."))))}p.isMDXComponent=!0},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=p(n),b=r,d=s["".concat(o,".").concat(b)]||s[b]||m[b]||a;return n?i.a.createElement(d,c(c({ref:t},l),{},{components:n})):i.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=b;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);