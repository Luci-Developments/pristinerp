"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2651],{1280:function(e,t,n){var i=n(7294);t.Z=function(e){var t={fontSize:"1.7rem",paddingRight:"left"===e.side&&"0.6rem",paddingLeft:"right"===e.side&&"0.6rem",verticalAlign:"center",display:"flex"};return i.createElement("div",{style:Object.assign({width:"fit-content",height:"3rem",padding:"0.8rem",borderRadius:"0.2rem",verticalAlign:"baseline",textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center",color:"white"},e.style),className:"icon-button"},"left"===e.side&&i.createElement("div",{style:t},e.icon),i.createElement("div",null,e.children),"right"===e.side&&i.createElement("div",{style:t},e.icon))}},4433:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return u},metadata:function(){return m},assets:function(){return c},toc:function(){return p},default:function(){return h}});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),o=n(1280),l=n(9583),s=["components"],d={title:"Building inventory UI"},u=void 0,m={unversionedId:"inventory/Guides/inventory_ui",id:"inventory/Guides/inventory_ui",title:"Building inventory UI",description:"Requirements to build:",source:"@site/docs/inventory/Guides/inventory_ui.md",sourceDirName:"inventory/Guides",slug:"/inventory/Guides/inventory_ui",permalink:"/docs/inventory/Guides/inventory_ui",editUrl:"https://github.com/5mLucifer/pristinerp/tree/main/docs/inventory/Guides/inventory_ui.md",tags:[],version:"current",frontMatter:{title:"Building inventory UI"},sidebar:"docs",previous:{title:"Creating custom drops",permalink:"/docs/inventory/Guides/customDrop"},next:{title:"Creating custom stashes",permalink:"/docs/inventory/Guides/stashes"}},c={},p=[{value:"Requirements to build:",id:"requirements-to-build",level:2},{value:"Installing Node.js:",id:"installing-nodejs",level:2},{value:"Installing Yarn:",id:"installing-yarn",level:2},{value:"Building the UI:",id:"building-the-ui",level:2}],v={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,i.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"requirements-to-build"},"Requirements to build:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Node.js"),(0,r.kt)("li",{parentName:"ul"},"Yarn")),(0,r.kt)("h2",{id:"installing-nodejs"},"Installing Node.js:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Download the LTS version of Node.js."),(0,r.kt)("li",{parentName:"ul"},"Go through the install and make sure you install all of the features."),(0,r.kt)("li",{parentName:"ul"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"node --version")," in cmd and make sure that it gives you the version number. If it doesn't then you didn't install it correctly.")),(0,r.kt)("div",{style:{width:"fit-content"}},(0,r.kt)("a",{href:"https://www.nodejs.org"},(0,r.kt)(o.Z,{side:"left",icon:(0,r.kt)(l.jPo,{mdxType:"FaNodeJs"}),mdxType:"IconButton"},"Download"))),(0,r.kt)("h2",{id:"installing-yarn"},"Installing Yarn:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Now that you've installed Node.js you can install Yarn by running ",(0,r.kt)("inlineCode",{parentName:"li"},"npm install --global yarn")," in cmd.")),(0,r.kt)("h2",{id:"building-the-ui"},"Building the UI:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"cd into the web directory of prp-inventory"),(0,r.kt)("li",{parentName:"ul"},"In your cmd type ",(0,r.kt)("inlineCode",{parentName:"li"},"yarn")," and in will start downloading the node modules."),(0,r.kt)("li",{parentName:"ul"},"After it's done downloading node modules you can run ",(0,r.kt)("inlineCode",{parentName:"li"},"yarn build")," to build the UI.")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Hot reloads")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"When working in the browser you can run ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn start"),", which supports hot reloads meaning that\nyou will see your changes after saving your file."),(0,r.kt)("p",{parentName:"div"},"If you want to work in game you can run ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn start:game")," which writes changes to disk, so\nthe only thing you have to do is restart the resource for it take affect."))))}h.isMDXComponent=!0}}]);