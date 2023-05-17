(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{215:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"default",(function(){return O}));var r=n(1),a=n(9),b=(n(0),n(520)),l={id:"webgl",uuid:"0559bfb1-a2d4-4a33-8cce-6d22ca1d409b",title:"WebGL\u6e32\u67d3"},c=[{value:"1.\u4ecb\u7ecd",id:"1\u4ecb\u7ecd",children:[{value:"WebGL \u517c\u5bb9\u6027",id:"webgl-\u517c\u5bb9\u6027",children:[]}]},{value:"2.\u4f7f\u7528",id:"2\u4f7f\u7528",children:[{value:"\u5f00\u542f WebGL \u6e32\u67d3",id:"\u5f00\u542f-webgl-\u6e32\u67d3",children:[]},{value:"\u5224\u65ad\u5f53\u524d\u7684\u6e32\u67d3\u6a21\u5f0f",id:"\u5224\u65ad\u5f53\u524d\u7684\u6e32\u67d3\u6a21\u5f0f",children:[]},{value:"WebGL \u4e0e\u810f\u77e9\u5f62",id:"webgl-\u4e0e\u810f\u77e9\u5f62",children:[]},{value:"\u5176\u4ed6\u6ce8\u610f\u4e8b\u9879",id:"\u5176\u4ed6\u6ce8\u610f\u4e8b\u9879",children:[]}]}],i={id:"renderMode/webgl",title:"WebGL\u6e32\u67d3",description:"## 1.\u4ecb\u7ecd",source:"@site/docs/renderMode/webgl.md",permalink:"/engine/docs/renderMode/webgl",sidebar:"someSidebar",previous:{title:"\u73af\u5883\u4fe1\u606f",permalink:"/engine/docs/multimedia/environment"},next:{title:"\u7f29\u653e\u6a21\u5f0f",permalink:"/engine/docs/screenAdaptation/zoomMode"}},o={rightToc:c,metadata:i},p="wrapper";function O(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(b.b)(p,Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"1\u4ecb\u7ecd"},"1.\u4ecb\u7ecd"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"WebGL \u662f\u4e00\u5957\u7528\u4e8e\u6e32\u67d3 2D \u548c 3D \u56fe\u5f62\u7684\u6807\u51c6\u56fe\u5f62\u5e93\uff0c\u5176\u6807\u51c6\u662f\u7531 Khronos\u3001AMD\u3001\u7231\u7acb\u4fe1\u3001\u8c37\u6b4c\u3001Mozilla\u3001Nvidia \u4ee5\u53ca Opera \u7b49\u5171\u540c\u5236\u5b9a\u3002")),Object(b.b)("p",null,"WebGL \u901a\u8fc7\u589e\u52a0 OpenGL ES 2.0 \u7684\u4e00\u4e2a JavaScript \u7ed1\u5b9a\uff0c\u53ef\u4ee5\u4e3a HTML5 Canvas \u63d0\u4f9b\u786c\u4ef6 3D \u52a0\u901f\u6e32\u67d3\u3002 Egret Engine 2D \u63d0\u4f9b\u4e86 WebGL \u6e32\u67d3\u6a21\u5f0f\u3002\u53ea\u9700\u5f00\u542f WebGL \u6e32\u67d3\uff0c\u5c31\u80fd\u83b7\u5f97\u786c\u4ef6\u52a0\u901f\u3002"),Object(b.b)("p",null,"WebGL \u63d0\u4f9b\u4e86\u5e95\u5c42\u7684\u6e32\u67d3 API\uff0c\u5bf9\u4e8e\u4f20\u7edf Web \u5f00\u53d1\u8005\u6765\u8bf4\u4f7f\u7528 WebGL API \u662f\u6bd4\u8f83\u590d\u6742\u7684\uff0c\u9700\u8981\u8865\u5145\u5927\u91cf\u7684 OpenGL ES \u76f8\u5173\u77e5\u8bc6\u3002 \u4f46\u5728 Egret Engine \u4e2d\u4f7f\u7528 WebGL \u5374\u5341\u5206\u65b9\u4fbf\uff0c \u53ea\u9700\u5728\u7a0b\u5e8f\u5f00\u59cb\u65f6\u9009\u62e9\u5f00\u542f WebGL \u6e32\u67d3\u3002"),Object(b.b)("p",null,"\u65e0\u9700\u62c5\u5fc3 WebGL \u6807\u51c6\u7684\u517c\u5bb9\u6027\u95ee\u9898\u3002\u5728\u5f00\u542f WebGL \u6e32\u67d3\u6a21\u5f0f\u4e0b\uff0c\u5982\u679c\u6d4f\u89c8\u5668\u4e0d\u652f\u6301\u5c06\u81ea\u52a8\u5207\u6362\u5230 Canvas \u6e32\u67d3\u6a21\u5f0f\u4e0b\u3002"),Object(b.b)("h3",{id:"webgl-\u517c\u5bb9\u6027"},"WebGL \u517c\u5bb9\u6027"),Object(b.b)("p",null,"\u4f7f\u7528 WebGL \u6e32\u67d3\u53ef\u4ee5\u83b7\u5f97\u786c\u4ef6\u52a0\u901f\u6e32\u67d3\uff0c\u63d0\u5347\u6027\u80fd\u3002\u56e0\u6b64\u5e0c\u671b\u53ef\u4ee5\u5728\u6240\u6709\u73af\u5883\u4e2d\u4f7f\u7528 WebGL \u6e32\u67d3\u3002\u76ee\u524d WebGL \u6b63\u5728\u83b7\u5f97\u66f4\u591a\u66f4\u5e7f\u6cdb\u7684\u652f\u6301\u3002"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"PC\u6d4f\u89c8\u5668"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"\u517c\u5bb9\u6027"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Chrome"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Chrome 8 \u5f00\u59cb\u652f\u6301\u3002")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Firefox"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"WebGL \u5728 Firefox 4 \u53ca\u4ee5\u4e0a\u7248\u672c\u9ed8\u8ba4\u652f\u6301\u3002")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Safari"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Safari 5.1 \u5f00\u59cb\u652f\u6301 (Lion \u7248\u672c\u7cfb\u7edf\u5df2\u7ecf\u4f7f\u7528)\u3002")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Opera"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Opera 12 alpha \u53ca\u4ee5\u4e0a\u7248\u672c\u3002")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"IE"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"IE 11 \u5f00\u59cb\u652f\u6301\u3002")))),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"\u624b\u673a\u6d4f\u89c8\u5668"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"\u517c\u5bb9\u6027"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"ChromeAndroid"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Chrome 30 \u5f00\u59cb\u5728\u652f\u6301 GL_EXT_robustness \u6269\u5c55\u7684\u8bbe\u5907\u4e0a\u652f\u6301.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u817e\u8bafx5\u5185\u6838"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"QQ\u6d4f\u89c8\u5668\u4ee5\u53caX5 tbs 2.x\uff1a android 4.0\u4ee5\u4e0b\u4e0d\u652f\u6301webgl\u529f\u80fd\uff0c4.0\u4ee5\u4e0a\u4f1a\u6839\u636e\u624b\u673a\u7684gl\u6307\u4ee4\u8fdb\u884c\u68c0\u67e5\u4ece\u800c\u6700\u7ec8\u51b3\u5b9a\u662f\u5426\u5f00\u542fwebgl\u529f\u80fd")))),Object(b.b)("h2",{id:"2\u4f7f\u7528"},"2.\u4f7f\u7528"),Object(b.b)("h3",{id:"\u5f00\u542f-webgl-\u6e32\u67d3"},"\u5f00\u542f WebGL \u6e32\u67d3"),Object(b.b)("p",null,"\u5728 Egret \u9879\u76ee\u6839\u76ee\u5f55\u4e2d\u53ef\u4ee5\u627e\u5230 index.html \u6587\u4ef6\u3002\u8be5\u6587\u4ef6\u662f Egret \u9879\u76ee\u7684\u5165\u53e3\uff0c\u5305\u542b\u521d\u59cb\u5316\u8bbe\u7f6e\u3002"),Object(b.b)("p",null,"\u5728 index.html \u4e2d\u6709 Egret \u7684\u542f\u52a8\u51fd\u6570\u3002\u5982\u679c\u8981\u5f00\u542f WebGL \u6e32\u67d3\uff0c\u5728\u5176\u4e2d\u4f20\u5165\u53c2\u6570\u5373\u53ef\uff0c\u4ee3\u7801\u5982\u4e0b\u3002"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'egret.runEgret({ renderMode: "webgl" });\n\n')),Object(b.b)("p",null,"\u5f53\u7136\u4e5f\u53ef\u4ee5\u6307\u5b9a\u6e32\u67d3\u6a21\u5f0f\u4e3a Canvas :"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'egret.runEgret({ renderMode: "canvas" });\n\n')),Object(b.b)("p",null,"\u76ee\u524d\u9ed8\u8ba4\u7684\u6e32\u67d3\u6a21\u5f0f\u4e3a webGL\u3002"),Object(b.b)("h3",{id:"\u5224\u65ad\u5f53\u524d\u7684\u6e32\u67d3\u6a21\u5f0f"},"\u5224\u65ad\u5f53\u524d\u7684\u6e32\u67d3\u6a21\u5f0f"),Object(b.b)("p",null,"\u53ef\u4ee5\u901a\u8fc7 ",Object(b.b)("inlineCode",{parentName:"p"},"Capabilities")," \u7c7b\u7684 ",Object(b.b)("inlineCode",{parentName:"p"},"renderMode")," \u6765\u5224\u65ad\u5f53\u524d\u7684\u6e32\u67d3\u6a21\u5f0f\u3002"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"console.log(egret.Capabilities.renderMode);\n\n")),Object(b.b)("p",null,"\u4e0a\u9762\u4e00\u884c\u4ee3\u7801\u5728 Canvas \u6a21\u5f0f\u4e0b\u5c06\u6253\u5370 ",Object(b.b)("inlineCode",{parentName:"p"},"canvas"),",\u5728 WebGL \u6a21\u5f0f\u4e0b\u5c06\u6253\u5370 ",Object(b.b)("inlineCode",{parentName:"p"},"webgl"),";"),Object(b.b)("h3",{id:"webgl-\u4e0e\u810f\u77e9\u5f62"},"WebGL \u4e0e\u810f\u77e9\u5f62"),Object(b.b)("p",null,"\u7531\u4e8e\u5728\u4e00\u4e9b\u6d4f\u89c8\u5668\u4e0a\u517c\u5bb9\u6027\u95ee\u9898\u6bd4\u8f83\u4e25\u91cd\uff0c\u76ee\u524d\u6682\u65f6\u5728 WebGL \u4e0b\u5173\u95ed\u4e86\u7684\u810f\u77e9\u5f62\u6e32\u67d3\u3002"),Object(b.b)("h3",{id:"\u5176\u4ed6\u6ce8\u610f\u4e8b\u9879"},"\u5176\u4ed6\u6ce8\u610f\u4e8b\u9879"),Object(b.b)("p",null,"\u53ef\u4ee5\u5728 Egret \u7a0b\u5e8f\u7684\u5165\u53e3\u4e2d\u5f00\u542f WebGL\u3002\u5982\u679c\u6d4f\u89c8\u5668\u4e0d\u652f\u6301 WebGL \u6e32\u67d3\u5c06\u81ea\u52a8\u5207\u6362\u5230 Canvas \u6e32\u67d3\u6a21\u5f0f\u4e0a\u3002"),Object(b.b)("p",null,"\u4f7f\u7528 WebGL \u6e32\u67d3\u53ef\u4ee5\u5f97\u5230\u6027\u80fd\u63d0\u5347\u3002\u4f46\u5728\u4f7f\u7528\u5f88\u591a\u6587\u672c\u548c\u77e2\u91cf\u7ed8\u56fe\u7684\u60c5\u51b5\u4e0b\uff0c\u53ef\u80fd\u6709\u66f4\u591a\u7684\u5f00\u9500\uff0c\u8d77\u4e0d\u5230\u63d0\u5347\u6027\u80fd\u7684\u4f5c\u7528\u3002\u56e0\u4e3a\u5728 WebGL \u6e32\u67d3\u6a21\u5f0f\u4e0b\u6587\u672c\u548c\u77e2\u91cf\u7ed8\u56fe\u662f\u9700\u8981\u5728 Canvas \u4e2d\u7f13\u5b58\u4e0b\u6765\u518d\u6e32\u67d3\u5230 WebGL \u4e2d\u3002\u7531\u4e8e\u591a\u4e86\u5728 Canvas \u6e32\u67d3\u7684\u8fc7\u7a0b\uff0c\u5982\u679c\u4f7f\u7528\u5927\u91cf\u7684\u6587\u672c\u6216\u8005\u77e2\u91cf\u7ed8\u56fe\u5c06\u4e0d\u80fd\u5f97\u5230\u76f8\u5e94\u7684\u6027\u80fd\u63d0\u5347\u3002"),Object(b.b)("p",null,"\u5728 WebGL \u4e0b\u5982\u679c\u8981\u4f7f\u7528 ",Object(b.b)("inlineCode",{parentName:"p"},"Texture")," \u5bf9\u8c61\u7684 ",Object(b.b)("inlineCode",{parentName:"p"},"toDataURL()")," \u65b9\u6cd5\u628a\u7eb9\u7406\u8f6c\u6362\u4e3a base64 \u5b57\u7b26\u4e32\uff0c\u90a3\u4e48\u7eb9\u7406\u56fe\u7247\u5e94\u653e\u5728\u540c\u4e00\u670d\u52a1\u5668\u4e0b\uff0c\u5f15\u7528\u4e0d\u540c\u7684\u670d\u52a1\u5668\u4e0b\u7684\u8d44\u6e90\u5c06\u4e0d\u6210\u529f\u3002"),Object(b.b)("p",null,"\u5f53\u7136 WebGL \u6807\u51c6\u6b63\u5728\u666e\u53ca\uff0c\u5728\u624b\u673a\u4e0a\u6709\u4e9b\u7279\u6027\u652f\u6301\u8fd8\u4e0d\u662f\u5f88\u53cb\u597d\u3002\u624b\u673a\u4e0a\u975e Chrome \u6d4f\u89c8\u5668\u73b0\u5728\u5bf9\u4e0d\u89c4\u5219\u906e\u7f69\u652f\u6301\u8fd8\u4e0d\u662f\u5f88\u597d\uff0c\u5728\u4f7f\u7528 WebGL \u6e32\u67d3\u5668\u65f6\u53ef\u4ee5\u5c3d\u91cf\u907f\u514d\u4f7f\u7528\u4e0d\u89c4\u5219\u906e\u7f69\u3002"))}O.isMDXComponent=!0},520:function(e,t,n){"use strict";n.d(t,"a",(function(){return O})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},b=Object.keys(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),p=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},O=function(e){var t=p(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},j=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,b=e.originalType,l=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),O=p(n),d=r,j=O["".concat(l,".").concat(d)]||O[d]||u[d]||b;return n?a.a.createElement(j,c({ref:t},o,{components:n})):a.a.createElement(j,c({ref:t},o))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=n.length,l=new Array(b);l[0]=j;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[d]="string"==typeof e?e:r,l[1]=c;for(var o=2;o<b;o++)l[o]=n[o];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"}}]);