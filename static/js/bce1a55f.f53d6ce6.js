(window.webpackJsonp=window.webpackJsonp||[]).push([[299],{426:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(1),a=n(9),o=(n(0),n(520)),c={id:"URLLoaderDataformat",uuid:"56b48730-0c9f-4f53-8d35-ebb1fa2315c4",title:"URLLoader\u8bfb\u53d6\u4e0d\u540c\u6570\u636e\u683c\u5f0f"},i=[],l={id:"extension/game/URLLoaderDataformat",title:"URLLoader\u8bfb\u53d6\u4e0d\u540c\u6570\u636e\u683c\u5f0f",description:"\u5728\u7f51\u7edc\u901a\u4fe1\u4e2d\uff0c\u4e0d\u4ec5\u4f1a\u52a0\u8f7d\u4e00\u4e2a\u7b80\u5355\u7684\u6587\u672c\u6570\u636e\uff0c\u8fd8\u4f1a\u52a0\u8f7d\u4e00\u4e9b\u56fe\u7247\u8d44\u6e90\u3001\u97f3\u9891\u8d44\u6e90\u7b49\u7b49\u3002",source:"@site/docs/extension/game/URLLoaderDataformat.md",permalink:"/engine/docs/extension/game/URLLoaderDataformat",sidebar:"someSidebar",previous:{title:"URLLoader\u7f51\u7edc\u901a\u8baf",permalink:"/engine/docs/extension/game/URLLoaderNetwork"},next:{title:"URLLoader\u4e2dPOST\u4e0eGET",permalink:"/engine/docs/extension/game/postAndGet"}},p={rightToc:i,metadata:l},u="wrapper";function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)(u,Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u5728\u7f51\u7edc\u901a\u4fe1\u4e2d\uff0c\u4e0d\u4ec5\u4f1a\u52a0\u8f7d\u4e00\u4e2a\u7b80\u5355\u7684\u6587\u672c\u6570\u636e\uff0c\u8fd8\u4f1a\u52a0\u8f7d\u4e00\u4e9b\u56fe\u7247\u8d44\u6e90\u3001\u97f3\u9891\u8d44\u6e90\u7b49\u7b49\u3002"),Object(o.b)("p",null,"\u5728\u9488\u5bf9\u4e0d\u540c\u683c\u5f0f\u6570\u636e\u7684\u8bf7\u6c42\u4e2d\uff0c\u9700\u8981\u5236\u5b9a\u4e0d\u540c\u7684\u5904\u7406\u65b9\u5f0f\u3002\u5728Egret\u4e2d\uff0c\u63d0\u4f9b\u4e86\u4e94\u79cd\u53ef\u7528\u7684\u6570\u636e\u683c\u5f0f\uff0c\u5206\u522b\u662f\uff1a"),Object(o.b)("p",null,"1.\u4e8c\u8fdb\u5236\u683c\u5f0f"),Object(o.b)("p",null,"2.\u6587\u672c\u683c\u5f0f"),Object(o.b)("p",null,"3.URL\u7f16\u7801\u683c\u5f0f"),Object(o.b)("p",null,"4.\u4f4d\u56fe\u7eb9\u7406\u683c\u5f0f"),Object(o.b)("p",null,"5.\u97f3\u9891\u683c\u5f0f\u3002"),Object(o.b)("p",null,"\u4ee5\u4e0a\u4e94\u79cd\u6570\u636e\u683c\u5f0f\u7684\u8bbe\u7f6e\u5747\u9700\u8981 ",Object(o.b)("inlineCode",{parentName:"p"},"URLLOaderDataFormat")," \u7c7b\u3002\u5982\u679c\u60f3\u66f4\u6539\u9ed8\u8ba4\u7684\u6587\u672c\u683c\u5f0f\uff0c\u53ef\u4ee5\u4fee\u6539 ",Object(o.b)("inlineCode",{parentName:"p"},"URLLoader")," \u4e2d\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"dataFormat")," \u5c5e\u6027\u3002 \u5177\u4f53\u793a\u4f8b\u4ee3\u7801\u5982\u4e0b\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'class NetDemo extends egret.DisplayObjectContainer {\n    public constructor() {\n        super();\n        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);\n    }\n    private urlloader: egret.URLLoader;\n    private onAddToStage(event: egret.Event) {\n        this.urlloader = new egret.URLLoader();\n        this.urlloader.dataFormat = egret.URLLoaderDataFormat.VARIABLES;\n        const urlreq: egret.URLRequest = new egret.URLRequest();\n        urlreq.url = "http://httpbin.org/headers";\n        this.urlloader.load(urlreq);\n        this.urlloader.addEventListener(egret.Event.COMPLETE, this.onComplete, this);\n    }\n    private onComplete(event: egret.Event): void {\n        console.log(this.urlloader.data);\n    }\n}\n\n')),Object(o.b)("p",null,"\u5176\u4e2d\u6709\u4e00\u884c\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"this.urlloader.dataFormat = egret.URLLoaderDataFormat.VARIABLES;\n\n")),Object(o.b)("p",null,"\u5bf9\u52a0\u8f7d\u7684\u6570\u636e\u683c\u5f0f\u8fdb\u884c\u4e86\u4fee\u6539\uff0c\u8bbe\u7f6e\u4e3a\u201cURL\u7f16\u7801\u201d\u683c\u5f0f\u3002"),Object(o.b)("p",null,"\u7f16\u8bd1\u540e\u8fd0\u884c\uff0c\u6548\u679c\u5982\u56fe\uff1a"),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"static/image/568b4313ae75c.png",alt:null}))))}d.isMDXComponent=!0},520:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},d=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,m=d["".concat(c,".").concat(b)]||d[b]||s[b]||o;return n?a.a.createElement(m,i({ref:t},p,{components:n})):a.a.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[b]="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);