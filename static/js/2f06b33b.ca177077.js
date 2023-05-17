(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{214:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"rightToc",(function(){return c})),t.d(n,"metadata",(function(){return s})),t.d(n,"default",(function(){return b}));var r=t(1),i=t(9),a=(t(0),t(520)),o={id:"RESVersion",uuid:"a5898e3d-229a-4d90-b667-0958c4573a37",title:"RES\u7248\u672c\u63a7\u5236"},c=[{value:"\u6e38\u620f\u8d44\u6e90\u7248\u672c\u63a7\u5236\u529f\u80fd\u7684\u8bbe\u8ba1\u4e0e\u5b9e\u73b0",id:"\u6e38\u620f\u8d44\u6e90\u7248\u672c\u63a7\u5236\u529f\u80fd\u7684\u8bbe\u8ba1\u4e0e\u5b9e\u73b0",children:[{value:"\u4e00. \u751f\u6210\u7248\u672c\u8d44\u6e90",id:"\u4e00-\u751f\u6210\u7248\u672c\u8d44\u6e90",children:[]},{value:"\u4e8c. \u89e3\u6790\u7248\u672c\u8d44\u6e90",id:"\u4e8c-\u89e3\u6790\u7248\u672c\u8d44\u6e90",children:[]},{value:"\u6700\u7ec8\u6548\u679c",id:"\u6700\u7ec8\u6548\u679c",children:[]}]}],s={id:"extension/RES/RESVersion",title:"RES\u7248\u672c\u63a7\u5236",description:"## \u6e38\u620f\u8d44\u6e90\u7248\u672c\u63a7\u5236\u529f\u80fd\u7684\u8bbe\u8ba1\u4e0e\u5b9e\u73b0",source:"@site/docs/extension/RES/RESVersion.md",permalink:"/engine/docs/extension/RES/RESVersion",sidebar:"someSidebar",previous:{title:"\u8d44\u6e90\u52a0\u8f7d\u914d\u7f6e",permalink:"/engine/docs/extension/RES/loadConfig"},next:{title:"MovieClip\u5e8f\u5217\u5e27\u52a8\u753b",permalink:"/engine/docs/extension/game/movieClip"}},l={rightToc:c,metadata:s},p="wrapper";function b(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)(p,Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"\u6e38\u620f\u8d44\u6e90\u7248\u672c\u63a7\u5236\u529f\u80fd\u7684\u8bbe\u8ba1\u4e0e\u5b9e\u73b0"},"\u6e38\u620f\u8d44\u6e90\u7248\u672c\u63a7\u5236\u529f\u80fd\u7684\u8bbe\u8ba1\u4e0e\u5b9e\u73b0"),Object(a.b)("hr",null),Object(a.b)("p",null,"\u672c\u7bc7\u6587\u6863\u4e3b\u8981\u4ee5\u63d2\u4ef6\u63a7\u5236\u6d41\u4e3a\u57fa\u7840\uff0c\u5b9e\u73b0\u81ea\u7531\u5b9a\u5236\u7684\u7248\u672c\u63a7\u5236\u529f\u80fd\u3002\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://tool.egret-labs.org/DocZip/engine/VersionControlDemo.zip"}),"\u793a\u4f8bdemo\u4e0b\u8f7d")),Object(a.b)("h3",{id:"\u4e00-\u751f\u6210\u7248\u672c\u8d44\u6e90"},"\u4e00. \u751f\u6210\u7248\u672c\u8d44\u6e90"),Object(a.b)("p",null,"\u5728\u65b0\u7684\u53d1\u5e03\u63d2\u4ef6\u6d41\u7a0b\u4e2d\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u5bf9\u6240\u6709\u8d44\u6e90\u548c\u4ee3\u7801\u8fdb\u884c\u5b9a\u5236\u5316\u5904\u7406\u3002\u800c\u7248\u672c\u63a7\u5236\u5c31\u662f\u5bf9\u8d44\u6e90\u7684\u540d\u79f0\u8fdb\u884c\u89c4\u8303\u5316\uff0c\u589e\u52a0\u7248\u672c\u53f7\u6216\u6821\u9a8c\u7801\u6bd4\u5bf9\u7b49\u529f\u80fd\u3002"),Object(a.b)("p",null,"\u6253\u5f00\u793a\u4f8b demo \u7684",Object(a.b)("inlineCode",{parentName:"p"},"scripts/resplugin.ts"),"\u6587\u4ef6"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'const crc32 = require("./crc32");\nexport class ResPlugin implements plugins.Command {\n    // \u7248\u672c\u63a7\u5236\u4fe1\u606f\n    private versionConfig = {};\n    // \u9700\u8981\u8fdb\u884c\u7248\u672c\u63a7\u5236\u7684\u6587\u4ef6\u5939\n    private versionPath = "resource/assets/";\n    // \u7248\u672c\u4fe1\u606f\u4fdd\u5b58\u8def\u5f84,\u5efa\u8bae\u653e\u5165resource\u5305\u91cc\u9762\uff0c\u56e0\u4e3a\u8fd9\u4e2a\u6587\u4ef6\u6bcf\u6b21\u90fd\u9700\u8981\u52a0\u8f7d\uff0c\u4e0d\u9700\u8981\u653e\u5728cdn\u4e0a\u3002\n    private versionConfigPath = "resource/version.json";\n    constructor() {\n    }\n    async onFile(file: plugins.File) {\n        //\u9664\u53bbjson\u53ef\u80fd\u5b58\u5728\u7684\u7a7a\u683c,\u5982\u4e0d\u9700\u8981\uff0c\u5f00\u53d1\u8005\u53ef\u81ea\u884c\u5220\u9664\n        if (file.extname === ".json") {\n            file.contents = new Buffer(JSON.stringify(JSON.parse(file.contents.toString())));\n        }\n        var path = file.origin;\n        //\u5bf9resource/assets\u4e0b\u9762\u7684\u8d44\u6e90\u8fdb\u884c\u7248\u672c\u63a7\u5236\n        if (path.indexOf(this.versionPath) != -1 && (file.extname === ".mp3" || file.extname === ".fnt" || file.extname === ".json" || file.extname === ".png" || file.extname === ".jpg")) {\n            path = path.replace(this.versionPath, "");\n            this.versionConfig[path] = crc32(file.contents.toString());\n            // \u539f\u59cb\u7684\u6587\u4ef6\u5939+crc32\u7801+\u540e\u7f00\u6269\u5c55\u540d\n            file.path = this.versionPath + this.versionConfig[path] + file.extname;\n        }\n        return file;\n    }\n    async onFinish(commandContext: plugins.CommandContext) {\n        commandContext.createFile(this.versionConfigPath, new Buffer(JSON.stringify(this.versionConfig)));\n    }\n}\n\n')),Object(a.b)("p",null,"\u4ee5\u4e0a\u4ee3\u7801\u5c31\u662f\u53d1\u5e03\u8d44\u6e90\u65f6\u8fdb\u884c\u7248\u672c\u63a7\u5236\u5904\u7406\u7684\u63d2\u4ef6\u4ee3\u7801\u3002\u6211\u4eec\u9009\u53d6\u4e86 ",Object(a.b)("inlineCode",{parentName:"p"},"crc32")," \u4f5c\u4e3a\u7248\u672c\u6821\u9a8c\u7684\u5de5\u5177\uff0c\u76f8\u6bd4\u8f83\u4e8e ",Object(a.b)("inlineCode",{parentName:"p"},"Md5"),"\uff0c",Object(a.b)("inlineCode",{parentName:"p"},"crc32")," \u751f\u6210\u7684\u4ee3\u7801\u66f4\u77ed\uff0c\u8fd9\u6837\u5de5\u7a0b\u89e3\u6790\u65f6\u9700\u8981\u52a0\u8f7d\u7684\u6587\u4ef6\u5c31\u4f1a\u5f88\u5c0f\uff0c\u66f4\u52a0\u9ad8\u6548\u3002\u901a\u8fc7\u4ee5\u4e0a\u4ee3\u7801\uff0c\u4f1a\u5bf9\u9879\u76ee\u4e2d ",Object(a.b)("inlineCode",{parentName:"p"},"resource/assets")," \u6587\u4ef6\u5939\u91cc\u7684\u6587\u4ef6\u8fdb\u884c\u7248\u672c\u63a7\u5236\u3002"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"if (command == 'publish') {\n    const outputDir = `bin-release/web/${version}`;\n    return {\n        outputDir,\n        commands: [\n            //...\n            new ResPlugin(),\n        ]\n    };\n}\n\n")),Object(a.b)("p",null,"\u5982\u4e0a\u56fe\u6240\u793a\uff0c\u5728 ",Object(a.b)("inlineCode",{parentName:"p"},"scripts/config.ts")," \u7684\u53d1\u5e03\u63a7\u5236\u6d41\u4e2d\u8c03\u7528\u81ea\u5b9a\u4e49\u63d2\u4ef6\u540e\uff0c\u5c31\u53ef\u4ee5\u8fdb\u884c\u7248\u672c\u7ba1\u7406\u3002"),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"static/image/p19.png",alt:null})),"\n\u5982\u4e0a\u56fe\u6240\u793a\uff0c\u6267\u884c ",Object(a.b)("inlineCode",{parentName:"p"},"egret publish")," \u547d\u4ee4\u540e\uff0c\u4f1a\u53d1\u5e03\u751f\u6210\u4e00\u4e2a ",Object(a.b)("inlineCode",{parentName:"p"},"version.json")," \u6587\u4ef6\uff0c\u91cc\u9762\u5305\u542b\u4e86\u8d44\u6e90\u7684\u7248\u672c\u4fe1\u606f\u3002"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n    //\u6587\u4ef6\u540d\uff1a\u5bf9\u5e94\u7684 crc32 \u6821\u9a8c\u7801\n    "bg.jpg": "edb6dd7b",\n    "egret_icon.png": "770b63da",\n    "Button/button_down.png": "342e118c",\n    "Button/button_up.png": "5a23cd86",\n    "CheckBox/checkbox_select_disabled.png": "153da087",\n    "CheckBox/checkbox_select_down.png": "c9ecc6fb",\n    ...\n')),Object(a.b)("h3",{id:"\u4e8c-\u89e3\u6790\u7248\u672c\u8d44\u6e90"},"\u4e8c. \u89e3\u6790\u7248\u672c\u8d44\u6e90"),Object(a.b)("p",null,"\u89e3\u6790\u7248\u672c\u63a7\u5236\u7684\u793a\u4f8b\u6587\u4ef6\u4e3a\uff1a ",Object(a.b)("inlineCode",{parentName:"p"},"src/VersionManager.ts")),Object(a.b)("p",null,"\u89e3\u6790\u4ee3\u7801\u4e3b\u8981\u5206\u4e3a\u4e09\u90e8\u5206\uff0c\u7b2c\u4e00\u90e8\u5206\u662f\u52a0\u8f7dversion.json\u7684\u914d\u7f6e\uff0c\u540e\u7eed\u6587\u4ef6\u52a0\u8f7d\u90fd\u4f1a\u901a\u8fc7\u8fd9\u4e2a\u914d\u7f6e\u53bb\u5bfb\u627e\uff0c\u7b2c\u4e8c\u90e8\u5206\u662f\u4f9d\u636e\u914d\u7f6e\u5220\u9664\u539f\u6709\u7684\u7f13\u5b58\u6587\u4ef6\uff0c\u6700\u540e\u4e00\u90e8\u5206\u662f\u8fd0\u884c\u65f6\u7684\u8d44\u6e90\u8def\u5f84\u7684\u66ff\u6362\u3002\u8fd9\u6837\u5f00\u53d1\u8005\u5728\u4f7f\u7528\u7684\u65f6\u5019\u53ea\u9700\u8981\u4fee\u6539\u7248\u672c\u53f7\u5c31\u80fd\u63a7\u5236\u8d44\u6e90\u7684\u7ef4\u62a4\u3002"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"function init(): Promise<any> {\n    if (RELEASE) { //\u53d1\u5e03\u6a21\u5f0f\n        return new Promise((resolve, reject) => {\n            //...\n            //\u6839\u636e\u7248\u672c\u63a7\u5236\u89e3\u6790\u8d44\u6e90\n            //...\n        });\n    }\n    else { //debug \u5f00\u53d1\u6a21\u5f0f\n        return Promise.resolve();\n    }\n}\n\n")),Object(a.b)("p",null,"\u4e0a\u9762\u4ee3\u7801\u517c\u5bb9\u4e86\u53d1\u5e03\u6a21\u5f0f\u548c\u5f00\u53d1\u6a21\u5f0f\u3002"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u5728\u5f00\u53d1\u6a21\u5f0f\u4e0b\uff0c\u4e0d\u8d70\u7248\u672c\u63a7\u5236\u7684\u903b\u8f91\uff0c\u8fd8\u662f\u7528",Object(a.b)("inlineCode",{parentName:"li"},"resource/assets/bg.jpg"),"\u8fd9\u79cd\u65b9\u5f0f\u52a0\u8f7d\u8d44\u6e90\uff0c\u4fbf\u4e8e\u66ff\u6362\u8d44\u6e90\u8c03\u8bd5\u9879\u76ee\u3002"),Object(a.b)("li",{parentName:"ul"},"\u5728\u53d1\u5e03\u6a21\u5f0f\u4e0b\uff0c\u4f1a\u7528",Object(a.b)("inlineCode",{parentName:"li"},"resource/assets/edb6dd7b.jpg"),"\u8fd9\u79cd\u65b9\u5f0f\u52a0\u8f7d\uff0c\u8fdb\u884c\u7248\u672c\u63a7\u5236\u3002")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"// \u4e0b\u9762\u4e3b\u8981\u662f\u5bf9\u5404\u79cd\u8fd0\u884c\u65f6\u7684\u7248\u672c\u63a7\u5236\uff0c\nif (egret.Capabilities.runtimeType == egret.RuntimeType.WXGAME) {\n    this.versionCacheWxgame(); //\u5fae\u4fe1\u5c0f\u6e38\u620f\n}\nelse if (egret.Capabilities.runtimeType == egret.RuntimeType.WEB) {\n    this.versionCacheWeb(); //\u6d4f\u89c8\u5668 H5\n}\n\n")),Object(a.b)("p",null,"\u4e0a\u9762\u7684\u793a\u4f8b\u4ee3\u7801\u517c\u5bb9\u4e86\u7f51\u9875\u6a21\u5f0f\u548c\u5fae\u4fe1\u5c0f\u6e38\u620f\uff0c\u8fd9\u6837\u4e00\u5957\u4ee3\u7801\u5c31\u53ef\u4ee5\u5904\u7406\u4e0d\u540c\u73af\u5883\u4e0b\u7684\u8d44\u6e90\u7ba1\u7406\u903b\u8f91\u3002"),Object(a.b)("h3",{id:"\u6700\u7ec8\u6548\u679c"},"\u6700\u7ec8\u6548\u679c"),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"static/image/p27.png",alt:null})),"\n\u4e0a\u56fe\u4e3a\u5fae\u4fe1\u5c0f\u6e38\u620f\u73af\u5883\u4e0b\uff0c\u8d44\u6e90\u4f7f\u7528\u7248\u672c\u63a7\u5236\u540e\u7684\u52a0\u8f7d\u6548\u679c"))}b.isMDXComponent=!0},520:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return f}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),p=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},b=function(e){var n=p(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(t),u=r,d=b["".concat(o,".").concat(u)]||b[u]||m[u]||a;return t?i.a.createElement(d,c({ref:n},l,{components:t})):i.a.createElement(d,c({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[u]="string"==typeof e?e:r,o[1]=c;for(var l=2;l<a;l++)o[l]=t[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);