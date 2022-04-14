"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8105],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5561:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},assets:function(){return l},toc:function(){return p},default:function(){return f}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={},u=void 0,s={unversionedId:"inventory/Functions/Server/Inventory/SetMetadata",id:"inventory/Functions/Server/Inventory/SetMetadata",title:"SetMetadata",description:"Sets metadata on the specified slot.",source:"@site/docs/inventory/Functions/Server/Inventory/SetMetadata.md",sourceDirName:"inventory/Functions/Server/Inventory",slug:"/inventory/Functions/Server/Inventory/SetMetadata",permalink:"/docs/inventory/Functions/Server/Inventory/SetMetadata",editUrl:"https://github.com/5mLucifer/pristinerp/tree/main/docs/inventory/Functions/Server/Inventory/SetMetadata.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"SetDurability",permalink:"/docs/inventory/Functions/Server/Inventory/SetDurability"},next:{title:"SwapSlots",permalink:"/docs/inventory/Functions/Server/Inventory/SwapSlots"}},l={},p=[],d={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Sets metadata on the specified slot."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'-- inv: string or number\n-- slot: number\n-- metadata: table\nPRP["SetMetadata"](inv, slot, metadata)\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"PRP = exports[\"pristinerp\"]:initialiseCore()\n\nlocal water = PRP[\"Search\"](source, 1, 'water')\nfor k, v in pairs(water) do\n    print('\\n______________'..'\\n- index '..k)\n    print(v.name, 'slot: '..v.slot, 'metadata: '..json.encode(v.metadata))\n    water = v\nend\nwater.metadata.type = 'clean'\nPRP[\"SetMetadata\"](source, water.slot, water.metadata)\nprint(('modified %sx water in slot %s with new metadata'):format(water.count, water.slot))\n")))}f.isMDXComponent=!0}}]);