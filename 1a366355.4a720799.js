(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{59:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(2),o=n(6),r=(n(0),n(82)),i={id:"introduction",title:"Introduction",sidebar_label:"Introduction",slug:"/"},s={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"Introduction",description:"Fluse is a data-fixture builder. It allows you to build up fixtures in a declarative, composable and type-safe way.",source:"@site/docs\\introduction.md",slug:"/",permalink:"/fluse/docs/",editUrl:"https://github.com/Nayni/fluse/edit/master/website/docs/introduction.md",version:"current",sidebar_label:"Introduction",sidebar:"docs",previous:{title:"Quickstart",permalink:"/fluse/docs/quickstart"},next:{title:"Initialize",permalink:"/fluse/docs/initialize"}},l=[{value:"Why Fluse?",id:"why-fluse",children:[]},{value:"Example case: The blog",id:"example-case-the-blog",children:[]}],c={rightToc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Fluse is a data-fixture builder. It allows you to build up fixtures in a ",Object(r.b)("strong",{parentName:"p"},"declarative"),", ",Object(r.b)("strong",{parentName:"p"},"composable")," and ",Object(r.b)("strong",{parentName:"p"},"type-safe")," way."),Object(r.b)("h2",{id:"why-fluse"},"Why Fluse?"),Object(r.b)("p",null,"Testing an application requires data, more specifically it requires data in certain states."),Object(r.b)("p",null,"In almost every project I've worked on, creating test data would result in a combination of the following approaches:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Inline entity creation (i.e.: ",Object(r.b)("inlineCode",{parentName:"li"},"new User()"),"),"),Object(r.b)("li",{parentName:"ul"},"Custom utility functions to make large sets of data"),Object(r.b)("li",{parentName:"ul"},"External pacakges like ",Object(r.b)("inlineCode",{parentName:"li"},"faker")," to generate randomness"),Object(r.b)("li",{parentName:"ul"},"Abusing the built-in ORM solutions like migrations to seed databases while testing")),Object(r.b)("p",null,"Sadly these solutions don't scale well and as time passes this quickly results in chaos."),Object(r.b)("p",null,"Testing an application should be easy. This starts with generating test data for your application models. Fluse brings you a slightly opinionated way of creating test data using fixtures and in return gives you a toolbelt that consists of:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A unified way of defining fixtures"),Object(r.b)("li",{parentName:"ul"},"A declarative scenario builder, composing fixtures together"),Object(r.b)("li",{parentName:"ul"},"Built-in supprt for ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/fluse/docs/lists"}),"lists")," and",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/fluse/docs/supplying-arguments"})," deeply nested structures")),Object(r.b)("li",{parentName:"ul"},"Type-safety all the way through"),Object(r.b)("li",{parentName:"ul"},"Extensions in the form of ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/fluse/docs/plugins-introduction"}),"plugins"),".")),Object(r.b)("p",null,"This might all still sound a little vague so let me give you an example!"),Object(r.b)("h2",{id:"example-case-the-blog"},"Example case: The blog"),Object(r.b)("p",null,"Let's say we are building a blog. A blog typically has the following types of data: a ",Object(r.b)("inlineCode",{parentName:"p"},"User"),", a ",Object(r.b)("inlineCode",{parentName:"p"},"Post")," and a ",Object(r.b)("inlineCode",{parentName:"p"},"Comment"),"."),Object(r.b)("p",null,"Creating a user is fairly straight forward:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'const user = new User({\n  firstName: "Bob",\n  lastName: "The Builder",\n  email: "bob@fluse.io",\n  phone: "(711) 265-9193",\n  country: "US",\n});\n')),Object(r.b)("p",null,"Next up we have a post:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'const post = new Post({\n  title: "How to test using fitures",\n  body: "Lorem ipsum....",\n  image: "https://photos.io/cat.jpg?size=200x200",\n  author: user,\n});\n')),Object(r.b)("p",null,"Lastly we have comments:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'const comment = new Comment({\n  message: "Lorem ipsum....",\n  author: user,\n});\n')),Object(r.b)("p",null,"In order to add comments to a post, our post entity has a method ",Object(r.b)("inlineCode",{parentName:"p"},"addComment(comment: Comment)"),"."),Object(r.b)("p",null,"The feature we are building is to list posts based on the most comments given. A test for this feature would look something like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'// getPostsByCommentCount.test.ts\nit("should return the posts ordered by their comment count (desc)", async () => {\n  const bob = new User({\n    firstName: "Bob",\n    lastName: "The Builder",\n    phone: "(711) 265-9193",\n    country: "US",\n    email: "bob@fluse.io",\n  });\n  const alice = new User({\n    firstName: "Alice",\n    lastName: "The Malice",\n    phone: "(712) 265-9188",\n    country: "US",\n    email: "alice@fluse.io",\n  });\n  const bobsPost = new Post({\n    title: "How to test using fitures",\n    body: "Lorem ipsum....",\n    image: "https://photos.io/cat.jpg?size=200x200",\n    author: bob,\n  });\n  const bobsPostComments = Array(10)\n    .fill(0)\n    .map((_, index) => {\n      const comment = new Comment({\n        message: "Lorem ipsum....",\n        author: new User({\n          firstName: "Random",\n          lastName: "Commenter",\n          phone: "(711) 265-9193",\n          country: "US",\n          email: `commenter${index}@fluse.io`,\n        }),\n        post: bobsPost,\n      });\n    });\n  bobsPostComments.forEach((comment) => {\n    bobsPost.addComment(comment);\n  });\n\n  const alicesPost = new Post({\n    title: "Unit or integration tests?",\n    body: "Lorem ipsum....",\n    image: "https://photos.io/cat.jpg?size=200x200",\n    author: alice,\n  });\n  const alicesPostComments = Array(5)\n    .fill(0)\n    .map((_, index) => {\n      const comment = new Comment({\n        message: "Lorem ipsum....",\n        author: new User({\n          firstName: "Random",\n          lastName: "Commenter",\n          phone: "(711) 265-9193",\n          country: "US",\n          email: `commenter${index}@fluse.io`,\n        }),\n        post: alicesPost,\n      });\n    });\n  alicesPostComments.forEach((comment) => {\n    alicesPost.addComment(comment);\n  });\n\n  await db.save([bob, alice, bobsPost, alicesPost]);\n\n  const actual = await getPostsByCommentCount();\n\n  expect(actual[0].id).toBe(bobsPost.id);\n  expect(actual[1].id).toBe(alicesPost.id);\n});\n')),Object(r.b)("p",null,"Do you notice how much ",Object(r.b)("strong",{parentName:"p"},"imperative")," code is required to set up our test data? All this code ",Object(r.b)("strong",{parentName:"p"},"distracts us")," from what we are actually testing."),Object(r.b)("p",null,"However, the attentive reader might consider:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"I could introduce ",Object(r.b)("inlineCode",{parentName:"li"},"faker")," here to generate all this data and make it more random"),Object(r.b)("li",{parentName:"ul"},"I could refactor this setup code into its own function making the test itself less cluttered"),Object(r.b)("li",{parentName:"ul"},"I could refactor so the database becomes a dependency of my setup code")),Object(r.b)("p",null,"This is true and is exactly why I created Fluse. I kept noticing that in every project I would end up doing the same things over and over: I craft utility functions for creating single entities, lists and complex scenario's."),Object(r.b)("p",null,"The reality however ends up being a mixed bag of inline entity creations, scenario's and other utility functions."),Object(r.b)("p",null,"Fluse was designed to ",Object(r.b)("strong",{parentName:"p"},"streamline")," this process and give you a slightly opinionated workflow for creating data fixtures, by following this workflow Fluse in return gives you some additional benefits such as a ",Object(r.b)("strong",{parentName:"p"},"declarative")," scenario builder and extra ",Object(r.b)("strong",{parentName:"p"},"utilities")," for lists and deeply nested structures."),Object(r.b)("p",null,"Let's re-build the example above with Fluse."),Object(r.b)("p",null,"We start with initializing ",Object(r.b)("inlineCode",{parentName:"p"},"fluse")," and creating some fixture definitions:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'import { fluse } from "fluse";\nimport fakerPlugin from "fluse-plugin-faker";\nimport typeormPlugin from "fluse-plugin-typeorm";\nimport { Comment } from "./entities/Comment";\nimport { User } from "./entities/User";\nimport { Post } from "./entities/Post";\n\nexport const { fixture, scenario } = fluse({\n  plugins: {\n    faker: fakerPlugin(),\n    orm: typeormPlugin(),\n  },\n});\n\nexport const userFixture = fixture<User>({\n  create({ orm, faker }) {\n    const user = new User({\n      firstName: faker.name.firstName(),\n      lastName: faker.name.lastName(),\n      phone: faker.phone.phoneNumber(),\n      country: faker.address.countryCode(),\n      email: faker.internet.email(),\n    });\n\n    return orm.entityManager.save(user);\n  },\n});\n\ninterface CommentArgs {\n  author: User;\n}\n\nexport const commentFixture = fixture<Comment, CommentArgs>({\n  create({ orm, faker }, args) {\n    const comment = new Comment({\n      message: faker.lorem.slug(),\n      author: args.author,\n    });\n\n    return orm.entityManager.save(comment);\n  },\n});\n\ninterface PostArgs {\n  author: User;\n  comments: Comment[];\n}\n\nexport const postFixture = fixture<Post, PostArgs>({\n  create({ orm, faker }, args) {\n    const post = new Post({\n      title: faker.lorem.slug(),\n      body: faker.lorem.paragraphs(4),\n      author: args.author,\n    });\n\n    if (args.comments.length) {\n      args.comments.forEach((comment) => {\n        post.addComment(comment);\n      });\n    }\n\n    return orm.entityManager.save(post);\n  },\n});\n')),Object(r.b)("p",null,"After some initial configuration of ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/fluse/docs/plugins-introduction"}),"plugins")," the ",Object(r.b)("strong",{parentName:"p"},"first step")," of Fluse's workflow is to define ",Object(r.b)("strong",{parentName:"p"},"fixture definitions"),". These definitions will be our primitive building blocks."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Fluse is able to integrate with your favorite libraries by using plugins. In this example we configured a Faker plugin and a TypeORM plugin."))),Object(r.b)("p",null,"Now let's go back to our test:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'// getPostsByCommentCount.test.ts\nimport { userFixture, postFixture, commentFixture } from "./entities/fixtures";\n\nconst testScenario = scenario()\n  .with("bob", userFixture())\n  .with("alice", userFixture())\n  .with("bobsPosts", ({ bob }) =>\n    postFixture({\n      author: bob,\n      comments: commentFixture({\n        author: userFixture(),\n      }).list(10),\n    })\n  )\n  .with("alicesPosts", ({ alice }) =>\n    postFixture({\n      author: alice,\n      comments: commentFixture({\n        author: userFixture(),\n      }).list(5),\n    })\n  )\n  .compose();\n\nit("should return the posts ordered by their comment count (desc)", async () => {\n  const { bobsPosts, alicesPosts } = await testScenario.execute();\n\n  const actual = await getPostsByCommentCount();\n\n  expect(actual[0].id).toBe(bobsPost.id);\n  expect(actual[1].id).toBe(alicesPost.id);\n});\n')),Object(r.b)("p",null,"The previously large chunk of imperative code has been replaced with a ",Object(r.b)("strong",{parentName:"p"},"declarative scenario"),"."),Object(r.b)("p",null,"The scenario is built by composing our fixture definitions together. Notice how:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The scenario is ",Object(r.b)("strong",{parentName:"li"},"declarative")," by nature and can be ",Object(r.b)("strong",{parentName:"li"},"re-used"),","),Object(r.b)("li",{parentName:"ul"},"The scenario is ",Object(r.b)("strong",{parentName:"li"},"type-safe"),","),Object(r.b)("li",{parentName:"ul"},"The scenario has references to ",Object(r.b)("strong",{parentName:"li"},"named")," objects that we chose during composition,"),Object(r.b)("li",{parentName:"ul"},"We can go from a single entity to a list of entities by simply refering to it as a ",Object(r.b)("inlineCode",{parentName:"li"},"list"),","),Object(r.b)("li",{parentName:"ul"},"We can re-use fixture definitions in a ",Object(r.b)("strong",{parentName:"li"},"nested")," way (i.e. to create a random user per comment),"),Object(r.b)("li",{parentName:"ul"},"We can use libraries like Faker and TypeORM by configuring them upfront in the form of ",Object(r.b)("strong",{parentName:"li"},"plugins"))),Object(r.b)("p",null,"Find out more about what you can do with Fluse such as:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/fluse/docs/supplying-arguments"}),"Supplying arguments")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/fluse/docs/lists"}),"Lists")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/fluse/docs/scenarios"}),"Scenarios")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/fluse/docs/plugins-introduction"}),"Plugins"))))}u.isMDXComponent=!0},82:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=u(n),p=a,d=b["".concat(i,".").concat(p)]||b[p]||m[p]||r;return n?o.a.createElement(d,s(s({ref:t},c),{},{components:n})):o.a.createElement(d,s({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);