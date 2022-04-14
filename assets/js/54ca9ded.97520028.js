"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9108],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),v=s(n),m=o,y=v["".concat(u,".").concat(m)]||v[m]||l[m]||i;return n?r.createElement(y,a(a({ref:t},p),{},{components:n})):r.createElement(y,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=v;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},7141:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},assets:function(){return p},toc:function(){return l},default:function(){return m}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={},u=void 0,s={unversionedId:"inventory/Functions/Server/Inventory/ConvertItems",id:"inventory/Functions/Server/Inventory/ConvertItems",title:"ConvertItems",description:"Takes traditional item data and updates it to support ox_inventory.",source:"@site/docs/inventory/Functions/Server/Inventory/ConvertItems.md",sourceDirName:"inventory/Functions/Server/Inventory",slug:"/inventory/Functions/Server/Inventory/ConvertItems",permalink:"/docs/inventory/Functions/Server/Inventory/ConvertItems",editUrl:"https://github.com/5mLucifer/pristinerp/tree/main/docs/inventory/Functions/Server/Inventory/ConvertItems.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"ConfiscateInventory",permalink:"/docs/inventory/Functions/Server/Inventory/ConfiscateInventory"},next:{title:"CustomDrop",permalink:"/docs/inventory/Functions/Server/Inventory/CustomDrop"}},p={},l=[],v={toc:l};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Takes traditional item data and updates it to support ox_inventory."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'-- playerId: number\n-- items: table\nPRP["ConvertItems"](playerId, items)\n')),(0,i.kt)("p",null,"Data conversion example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Old: [{"cola":1, "bread":3}]\nNew: [{"slot":1,"name":"cola","count":1}, {"slot":2,"name":"bread","count":3}]\n')))}m.isMDXComponent=!0}}]);