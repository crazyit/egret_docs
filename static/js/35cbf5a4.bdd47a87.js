(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{222:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"metadata",(function(){return p})),a.d(t,"default",(function(){return j}));var r=a(1),b=a(9),n=(a(0),a(520)),c={id:"egret.BitmapData"},l=[{value:"\u516c\u5171\u5c5e\u6027",id:"\u516c\u5171\u5c5e\u6027",children:[]},{value:"\u516c\u5171\u65b9\u6cd5",id:"\u516c\u5171\u65b9\u6cd5",children:[{value:"\u5c5e\u6027\u8be6\u7ec6\u4fe1\u606f",id:"\u5c5e\u6027\u8be6\u7ec6\u4fe1\u606f",children:[]},{value:"debugCompressedTextureURL",id:"debugcompressedtextureurl",children:[]},{value:"etcAlphaMask",id:"etcalphamask",children:[]},{value:"format",id:"format",children:[]},{value:"height",id:"height",children:[]},{value:"source",id:"source",children:[]},{value:"width",id:"width",children:[]}]},{value:"\u65b9\u6cd5\u8be6\u7ec6\u4fe1\u606f",id:"\u65b9\u6cd5\u8be6\u7ec6\u4fe1\u606f",children:[{value:"BitmapData()",id:"bitmapdata",children:[]},{value:"clearCompressedTextureData()",id:"clearcompressedtexturedata",children:[]},{value:"create()",id:"create",children:[]},{value:"getCompressed2dTextureData()",id:"getcompressed2dtexturedata",children:[]},{value:"hasCompressed2d()",id:"hascompressed2d",children:[]}]}],p={id:"api/engine/egret.BitmapData",title:"egret.BitmapData",description:"**\u5305** &nbsp;&nbsp; egret",source:"@site/docs/api/engine/egret.BitmapData.md",permalink:"/engine/docs/api/engine/egret.BitmapData",sidebar:"apiSidebar",previous:{title:"egret.Bitmap",permalink:"/engine/docs/api/engine/egret.Bitmap"},next:{title:"egret.BitmapFillMode",permalink:"/engine/docs/api/engine/egret.BitmapFillMode"}},i={rightToc:l,metadata:p},O="wrapper";function j(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(n.b)(O,Object(r.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"\u5305")," ","\xa0","\xa0"," egret"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"\u7c7b"),"  ","\xa0","\xa0"," public class BitmapData"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"\u7ee7\u627f")," ","\xa0","\xa0"," egret.BitmapData \u2192 ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.egret.com/engine/docs/api/engine/egret.HashObject"}),"egret.HashObject")),Object(n.b)("p",null,"BitmapData \u5bf9\u8c61\u662f\u4e00\u4e2a\u5305\u542b\u50cf\u7d20\u6570\u636e\u7684\u6570\u7ec4\u3002\u6b64\u6570\u636e\u53ef\u4ee5\u8868\u793a\u5b8c\u5168\u4e0d\u900f\u660e\u7684\u4f4d\u56fe\uff0c\u6216\u8868\u793a\u5305\u542b Alpha \u901a\u9053\u6570\u636e\u7684\u900f\u660e\u4f4d\u56fe\u3002\u4ee5\u4e0a\u4efb\u4e00\u7c7b\u578b\u7684 BitmapData \u5bf9\u8c61\u90fd\u4f5c\u4e3a 32 \u4f4d\u6574\u6570\u7684\u7f13\u51b2\u533a\u8fdb\u884c\u5b58\u50a8\u3002\u6bcf\u4e2a 32 \u4f4d\u6574\u6570\u786e\u5b9a\u4f4d\u56fe\u4e2d\u5355\u4e2a\u50cf\u7d20\u7684\u5c5e\u6027\u3002"),Object(n.b)("p",null,"\u6bcf\u4e2a 32 \u4f4d\u6574\u6570\u90fd\u662f\u56db\u4e2a 8 \u4f4d\u901a\u9053\u503c\uff08\u4ece 0 \u5230 255\uff09\u7684\u7ec4\u5408\uff0c\u8fd9\u4e9b\u503c\u63cf\u8ff0\u50cf\u7d20\u7684 Alpha \u900f\u660e\u5ea6\u4ee5\u53ca\u7ea2\u8272\u3001\u7eff\u8272\u3001\u84dd\u8272 (ARGB) \u503c\u3002\uff08\u5bf9\u4e8e ARGB \u503c\uff0c\u6700\u9ad8\u6709\u6548\u5b57\u8282\u4ee3\u8868 Alpha \u901a\u9053\u503c\uff0c\u5176\u540e\u7684\u6709\u6548\u5b57\u8282\u5206\u522b\u4ee3\u8868\u7ea2\u8272\u3001\u7eff\u8272\u548c\u84dd\u8272\u901a\u9053\u503c\u3002\uff09"),Object(n.b)("h2",{id:"\u516c\u5171\u5c5e\u6027"},"\u516c\u5171\u5c5e\u6027"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"\u5c5e\u6027"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"#debugcompressedtextureurl"}),"debugCompressedTextureURL")," : ",Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"global.Types#string"}),"string"),Object(n.b)("br",null))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"#etcalphamask"}),"etcAlphaMask")," : Nullable","<",Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"https://docs.egret.com/engine/docs/api/engine/egret.BitmapData"}),"egret.BitmapData"),">",Object(n.b)("br",null))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"#format"}),"format")," : ",Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"global.Types#string"}),"string"),Object(n.b)("br",null),"\u7eb9\u7406\u683c\u5f0f")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"#height"}),"height")," : ",Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"global.Types#number"}),"number"),Object(n.b)("br",null),"\u4f4d\u56fe\u56fe\u50cf\u7684\u9ad8\u5ea6\uff0c\u4ee5\u50cf\u7d20\u4e3a\u5355\u4f4d")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"#source"}),"source")," : ",Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"global.Types#any"}),"any"),Object(n.b)("br",null))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"#width"}),"width")," : ",Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"global.Types#number"}),"number"),Object(n.b)("br",null),"\u4f4d\u56fe\u56fe\u50cf\u7684\u5bbd\u5ea6\uff0c\u4ee5\u50cf\u7d20\u4e3a\u5355\u4f4d")))),Object(n.b)("h2",{id:"\u516c\u5171\u65b9\u6cd5"},"\u516c\u5171\u65b9\u6cd5"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"\u65b9\u6cd5"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"#bitmapdata"}),"BitmapData"),"(source:",Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"global.Types#any"}),"any"),")",Object(n.b)("br",null),"\u521b\u5efa\u4e00\u4e2a\u5f15\u7528\u6307\u5b9a source \u5b9e\u4f8b\u7684 BitmapData \u5bf9\u8c61")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"#clearcompressedtexturedata"}),"clearCompressedTextureData"),"():",Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"global.Types#void"}),"void"),Object(n.b)("br",null))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"#create"}),"create"),'(type:"arraybuffer"',"|",'"base64",data:ArrayBuffer',"|",Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"global.Types#string"}),"string"),",callback:(bitmapData:",Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"https://docs.egret.com/engine/docs/api/engine/egret.BitmapData"}),"egret.BitmapData"),")=>",Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"global.Types#void"}),"void"),"):",Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"https://docs.egret.com/engine/docs/api/engine/egret.BitmapData"}),"egret.BitmapData"),Object(n.b)("br",null),"[\u9759\u6001]")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"#getcompressed2dtexturedata"}),"getCompressed2dTextureData"),"():",Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"https://docs.egret.com/engine/docs/api/engine/egret.CompressedTextureData"}),"egret.CompressedTextureData"),Object(n.b)("br",null))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"#hascompressed2d"}),"hasCompressed2d"),"():",Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"global.Types#boolean"}),"boolean"),Object(n.b)("br",null))))),Object(n.b)("h3",{id:"\u5c5e\u6027\u8be6\u7ec6\u4fe1\u606f"},"\u5c5e\u6027\u8be6\u7ec6\u4fe1\u606f"),Object(n.b)("h3",{id:"debugcompressedtextureurl"},"debugCompressedTextureURL"),Object(n.b)("p",null,"debugCompressedTextureURL : ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"global.Types#string"}),"string")," = ''"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"\u652f\u6301\u7248\u672c:"),"all"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"\u8fd0\u884c\u5e73\u53f0"),":Web,Native")),Object(n.b)("h3",{id:"etcalphamask"},"etcAlphaMask"),Object(n.b)("p",null,"etcAlphaMask : Nullable","<",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.egret.com/engine/docs/api/engine/egret.BitmapData"}),"egret.BitmapData"),">"," = null"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"\u652f\u6301\u7248\u672c:"),"all"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"\u8fd0\u884c\u5e73\u53f0"),":Web,Native")),Object(n.b)("h3",{id:"format"},"format"),Object(n.b)("p",null,"format : ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"global.Types#string"}),"string"),' = "image"'),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"\u652f\u6301\u7248\u672c:"),"Egret 2.4"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"\u8fd0\u884c\u5e73\u53f0"),":Web,Native")),Object(n.b)("p",null,"\u7eb9\u7406\u683c\u5f0f\u3002"),Object(n.b)("h3",{id:"height"},"height"),Object(n.b)("p",null,"height : ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"global.Types#number"}),"number")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"\u652f\u6301\u7248\u672c:"),"Egret 2.4"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"\u8fd0\u884c\u5e73\u53f0"),":Web,Native")),Object(n.b)("p",null,"\u4f4d\u56fe\u56fe\u50cf\u7684\u9ad8\u5ea6\uff0c\u4ee5\u50cf\u7d20\u4e3a\u5355\u4f4d\u3002"),Object(n.b)("h3",{id:"source"},"source"),Object(n.b)("p",null,"source : ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"global.Types#any"}),"any")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"\u652f\u6301\u7248\u672c:"),"all"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"\u8fd0\u884c\u5e73\u53f0"),":Web,Native")),Object(n.b)("h3",{id:"width"},"width"),Object(n.b)("p",null,"width : ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"global.Types#number"}),"number")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"\u652f\u6301\u7248\u672c:"),"Egret 2.4"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"\u8fd0\u884c\u5e73\u53f0"),":Web,Native")),Object(n.b)("p",null,"\u4f4d\u56fe\u56fe\u50cf\u7684\u5bbd\u5ea6\uff0c\u4ee5\u50cf\u7d20\u4e3a\u5355\u4f4d\u3002"),Object(n.b)("h2",{id:"\u65b9\u6cd5\u8be6\u7ec6\u4fe1\u606f"},"\u65b9\u6cd5\u8be6\u7ec6\u4fe1\u606f"),Object(n.b)("h3",{id:"bitmapdata"},"BitmapData()"),Object(n.b)("p",null,"public BitmapData(source:",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"global.Types#any"}),"any"),")"),Object(n.b)("p",null,"\u521b\u5efa\u4e00\u4e2a\u5f15\u7528\u6307\u5b9a source \u5b9e\u4f8b\u7684 BitmapData \u5bf9\u8c61"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"\u652f\u6301\u7248\u672c:"),"Egret 2.4"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"\u8fd0\u884c\u5e73\u53f0"),":Web,Native"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"\u53c2\u6570"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"source:",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"global.Types#any"}),"any")," - \u88ab\u5f15\u7528\u7684 source \u5b9e\u4f8b")))),Object(n.b)("h3",{id:"clearcompressedtexturedata"},"clearCompressedTextureData()"),Object(n.b)("p",null,"public clearCompressedTextureData():",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"global.Types#void"}),"void")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"\u652f\u6301\u7248\u672c:"),"all"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"\u8fd0\u884c\u5e73\u53f0"),":Web,Native")),Object(n.b)("h3",{id:"create"},"create()"),Object(n.b)("p",null,'public create(type:"arraybuffer"|"base64",data:ArrayBuffer|',Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"global.Types#string"}),"string"),",callback:(bitmapData:",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.egret.com/engine/docs/api/engine/egret.BitmapData"}),"egret.BitmapData"),")=>",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"global.Types#void"}),"void"),"):",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.egret.com/engine/docs/api/engine/egret.BitmapData"}),"egret.BitmapData")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"\u652f\u6301\u7248\u672c:"),"all"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"\u8fd0\u884c\u5e73\u53f0"),":Web,Native"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"\u53c2\u6570"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},'type:"arraybuffer"|"base64"'),Object(n.b)("li",{parentName:"ul"},"data:ArrayBuffer|",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"global.Types#string"}),"string")),Object(n.b)("li",{parentName:"ul"},"callback:(bitmapData:",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.egret.com/engine/docs/api/engine/egret.BitmapData"}),"egret.BitmapData"),")=>",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"global.Types#void"}),"void"))))),Object(n.b)("h3",{id:"getcompressed2dtexturedata"},"getCompressed2dTextureData()"),Object(n.b)("p",null,"public getCompressed2dTextureData():",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.egret.com/engine/docs/api/engine/egret.CompressedTextureData"}),"egret.CompressedTextureData")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"\u652f\u6301\u7248\u672c:"),"all"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"\u8fd0\u884c\u5e73\u53f0"),":Web,Native")),Object(n.b)("h3",{id:"hascompressed2d"},"hasCompressed2d()"),Object(n.b)("p",null,"public hasCompressed2d():",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"global.Types#boolean"}),"boolean")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"\u652f\u6301\u7248\u672c:"),"all"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"\u8fd0\u884c\u5e73\u53f0"),":Web,Native")))}j.isMDXComponent=!0},520:function(e,t,a){"use strict";a.d(t,"a",(function(){return j})),a.d(t,"b",(function(){return d}));var r=a(0),b=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,b=function(e,t){if(null==e)return{};var a,r,b={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var i=b.a.createContext({}),O=function(e){var t=b.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},j=function(e){var t=O(e.components);return b.a.createElement(i.Provider,{value:t},e.children)},m="mdxType",o={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),j=O(a),m=r,u=j["".concat(c,".").concat(m)]||j[m]||o[m]||n;return a?b.a.createElement(u,l({ref:t},i,{components:a})):b.a.createElement(u,l({ref:t},i))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,c=new Array(n);c[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:r,c[1]=l;for(var i=2;i<n;i++)c[i]=a[i];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);