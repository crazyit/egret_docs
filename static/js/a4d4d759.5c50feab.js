(window.webpackJsonp=window.webpackJsonp||[]).push([[264],{391:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"rightToc",(function(){return l})),t.d(n,"metadata",(function(){return b})),t.d(n,"default",(function(){return p}));var a=t(1),r=t(9),o=(t(0),t(520)),i={id:"audio",uuid:"9a5fb4b3-2213-4727-8c76-f79d4eae9412",title:"\u97f3\u9891"},l=[{value:"1.\u521b\u5efaSound",id:"1\u521b\u5efasound",children:[{value:"1.1.\u901a\u8fc7Sound\u52a0\u88c5\u97f3\u9891",id:"11\u901a\u8fc7sound\u52a0\u88c5\u97f3\u9891",children:[]},{value:"1.2.\u901a\u8fc7 URLLoader \u52a0\u88c5\u97f3\u9891\u3002",id:"12\u901a\u8fc7-urlloader-\u52a0\u88c5\u97f3\u9891\u3002",children:[]},{value:"1.3.\u901a\u8fc7 res \u52a0\u88c5\u97f3\u9891\u3002",id:"13\u901a\u8fc7-res-\u52a0\u88c5\u97f3\u9891\u3002",children:[]}]},{value:"2.\u64ad\u653eSound",id:"2\u64ad\u653esound",children:[{value:"2.1.\u64ad\u653e\u65b9\u6cd5",id:"21\u64ad\u653e\u65b9\u6cd5",children:[]},{value:"2.2.\u64ad\u653e\u7c7b\u578b",id:"22\u64ad\u653e\u7c7b\u578b",children:[]}]},{value:"3.\u97f3\u9891\u793a\u4f8b",id:"3\u97f3\u9891\u793a\u4f8b",children:[]},{value:"4.\u6ce8\u610f\u4e8b\u9879",id:"4\u6ce8\u610f\u4e8b\u9879",children:[]}],b={id:"multimedia/audio",title:"\u97f3\u9891",description:"## 1.\u521b\u5efaSound",source:"@site/docs/multimedia/audio.md",permalink:"/engine/docs/multimedia/audio",sidebar:"someSidebar",previous:{title:"\u65f6\u95f4\u63a7\u5236",permalink:"/engine/docs/timeControl/timeControl"},next:{title:"\u89c6\u9891",permalink:"/engine/docs/multimedia/video"}},d={rightToc:l,metadata:b},c="wrapper";function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)(c,Object(a.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"1\u521b\u5efasound"},"1.\u521b\u5efaSound"),Object(o.b)("h3",{id:"11\u901a\u8fc7sound\u52a0\u88c5\u97f3\u9891"},"1.1.\u901a\u8fc7Sound\u52a0\u88c5\u97f3\u9891"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u901a\u8fc7 ",Object(o.b)("inlineCode",{parentName:"li"},"var sound:egret.Sound = new egret.Sound()")," \u521b\u5efa ",Object(o.b)("inlineCode",{parentName:"li"},"Sound")," \u5bf9\u8c61\uff0c\u518d\u901a\u8fc7 ",Object(o.b)("inlineCode",{parentName:"li"},"sound.load(url)"),"\u52a0\u8f7d\uff0c",Object(o.b)("inlineCode",{parentName:"li"},"Sound")," \u7c7b\u652f\u6301\u7684\u4e8b\u4ef6\u7c7b\u578b\u6709\u4e24\u4e2a\uff1a",Object(o.b)("inlineCode",{parentName:"li"},"egret.Event.COMPLETE")," \u97f3\u9891\u52a0\u8f7d\u5b8c\u6210\u65f6\u629b\u51fa\uff1b",Object(o.b)("inlineCode",{parentName:"li"},"egret.IOErrorEvent.IO_ERROR")," \u97f3\u9891\u52a0\u8f7d\u5931\u8d25\u65f6\u629b\u51fa.")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'const sound: egret.Sound = new egret.Sound();\nsound.addEventListener(egret.Event.COMPLETE, function loadOver(event: egret.Event) {\n    sound.play();\n}, this);\nsound.addEventListener(egret.IOErrorEvent.IO_ERROR, function loadError(event: egret.IOErrorEvent) {\n    console.log("loaded error!");\n}, this);\nsound.load("resource/sound/sound.mp3");\n\n')),Object(o.b)("h3",{id:"12\u901a\u8fc7-urlloader-\u52a0\u88c5\u97f3\u9891\u3002"},"1.2.\u901a\u8fc7 URLLoader \u52a0\u88c5\u97f3\u9891\u3002"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u5177\u4f53\u8c03\u7528\u5982\u4e0b\u3002")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'const loader: egret.URLLoader = new egret.URLLoader();\nloader.addEventListener(egret.Event.COMPLETE, function loadOver(event: egret.Event) {\n    const sound: egret.Sound = loader.data;\n    sound.play();\n}, this);\nloader.dataFormat = egret.URLLoaderDataFormat.SOUND;\nloader.load(new egret.URLRequest("resource/sound/sound.mp3"));\n\n')),Object(o.b)("h3",{id:"13\u901a\u8fc7-res-\u52a0\u88c5\u97f3\u9891\u3002"},"1.3.\u901a\u8fc7 res \u52a0\u88c5\u97f3\u9891\u3002"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u5177\u4f53\u8c03\u7528\u5982\u4e0b\u3002")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'const sound: egret.Sound = RES.getRes("sound_mp3");\nsound.play();\n\n')),Object(o.b)("h2",{id:"2\u64ad\u653esound"},"2.\u64ad\u653eSound"),Object(o.b)("h3",{id:"21\u64ad\u653e\u65b9\u6cd5"},"2.1.\u64ad\u653e\u65b9\u6cd5"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"play()")," \u65b9\u6cd5\u64ad\u653e\u97f3\u9891\uff0c\u67092\u4e2a\u53c2\u6570\u3002",Object(o.b)("inlineCode",{parentName:"p"},"startTime"),"\uff1a\u58f0\u97f3\u5f00\u59cb\u64ad\u653e\u7684\u4f4d\u7f6e\uff0c\u9ed8\u8ba4\u4e3a0\u3002",Object(o.b)("inlineCode",{parentName:"p"},"loops"),"\uff1a\u58f0\u97f3\u64ad\u653e\u7684\u6b21\u6570\uff0c\u5c0f\u4e8e\u7b49\u4e8e0\u5747\u4e3a\u65e0\u9650\u5faa\u73af\u64ad\u653e\uff0c\u5927\u4e8e0\u6309\u7167\u5bf9\u5e94\u7684\u503c\u64ad\u653e\u6b21\u6570\u3002")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"\u8fd0\u884c ",Object(o.b)("inlineCode",{parentName:"p"},"play()")," \u4e4b\u540e\uff0c\u4f1a\u8fd4\u56de\u4e00\u4e2a ",Object(o.b)("inlineCode",{parentName:"p"},"SoundChannel")," \u5bf9\u8c61\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u76f4\u63a5\u5bf9 ",Object(o.b)("inlineCode",{parentName:"p"},"SoundChannel")," \u8fdb\u884c\u64cd\u4f5c\uff0c\u6bd4\u5982\u8bbe\u7f6e\u97f3\u91cf\u7b49\u3002")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"SoundChannel")," \u5bf9\u8c61\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"egret.Event.SOUND_COMPLETE")," \u4e8b\u4ef6\u662f\u64ad\u653e\u5b8c\u6210\u4e8b\u4ef6\u3002")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"\u6839\u636e ",Object(o.b)("inlineCode",{parentName:"p"},"SoundChannel")," \u8fd4\u56de\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"position")," \u5c5e\u6027\u548c ",Object(o.b)("inlineCode",{parentName:"p"},"Sound")," \u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"play()")," \u65b9\u6cd5\u53ef\u5b9e\u73b0\u6682\u505c\u548c\u91cd\u64ad\u529f\u80fd\u3002")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"stop()")," \u65b9\u6cd5\u505c\u6b62\u64ad\u653e\u3002"))),Object(o.b)("h3",{id:"22\u64ad\u653e\u7c7b\u578b"},"2.2.\u64ad\u653e\u7c7b\u578b"),Object(o.b)("p",null,"\u76ee\u524d\u5f15\u64ce\u5185\u63d0\u4f9b\u4e864\u79cd\u58f0\u97f3\u7684\u517c\u5bb9\u6a21\u5f0f\uff0c\u5206\u522b\u662f Audio\u3001 WebAudio\u3001QQAudio\uff08qzone\u63d0\u4f9b\u7684\u58f0\u97f3\u89e3\u51b3\u65b9\u6848\uff09\u3001\u4ee5\u53ca NativeAudio\uff08\u6253\u5305\u65b9\u6848Audio\uff09"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"WebAudio\uff1aIOS\u7cfb\u7edf\u7248\u672c\u5927\u4e8e\u7b49\u4e8e7\u7684\u6240\u6709IOS\u7248\u672c\u7684\u6d4f\u89c8\u5668\uff0cEgret 3.2.0 \u4ee5\u540e Android \u9ed8\u8ba4\u4e5f\u4f7f\u7528 WebAudio\uff0c\u5982\u679c\u4e0d\u652f\u6301 WebAudio \u7684 app \u5219\u4f1a\u81ea\u52a8\u6539\u6210 Audio \u65b9\u5f0f\u3002")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"QQAudio\uff1a\u5728html\u9875\u9762\u6307\u5b9a\u4e86 \u201c ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"static/js/jsbridge.js"}),"static/js/jsbridge.js")," \u201d \uff08Qzone\u4f7f\u7528\u7684js api\uff09\u5e76\u4e14\u8fd0\u884c\u5728",Object(o.b)("inlineCode",{parentName:"p"},"qq\u7a7a\u95f4"),"\u7684 android \u673a\u578b\u3002")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Audio\uff1a\u9664\u4f7f\u7528 WebAudio \u4ee5\u53ca QQAudio \u5916\u7684\u5176\u4ed6\u6240\u6709\u7684 Web \u6d4f\u89c8\u5668\u6216\u8005\u5e73\u53f0\u3002\u53ef\u80fd\u51fa\u73b0\u7684\u95ee\u9898\u662f\u58f0\u97f3\u64ad\u653e\u6709\u5ef6\u8fdf\uff0c\u540c\u4e00\u65f6\u95f4\u53ea\u80fd\u6709\u4e00\u4e2a\u97f3\u9891\u7684\u5b58\u5728\u3002")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"NativeAudio\uff1a\u6253\u5305\u65b9\u6848\u4f7f\u7528\u7684audio\u3002"))),Object(o.b)("p",null,"\u8bbe\u7f6e\u64ad\u653e\u7c7b\u578b\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u7684 index.html \u6a21\u677f\u6587\u4ef6\u4e2d\u8fdb\u884c\uff1a "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'/**\n* {\n* "renderMode":, //\u5f15\u64ce\u6e32\u67d3\u6a21\u5f0f\uff0c"canvas" \u6216\u8005 "webgl"\n* "audioType": 0 //\u4f7f\u7528\u7684\u97f3\u9891\u7c7b\u578b\uff0c0:\u9ed8\u8ba4\uff0c1:qq audio\uff0c2:web audio\uff0c3:audio\n* "antialias": //WebGL\u6a21\u5f0f\u4e0b\u662f\u5426\u5f00\u542f\u6297\u952f\u9f7f\uff0ctrue:\u5f00\u542f\uff0cfalse:\u5173\u95ed\uff0c\u9ed8\u8ba4\u4e3afalse\n* "retina": //\u662f\u5426\u57fa\u4e8edevicePixelRatio\u7f29\u653e\u753b\u5e03\n* }\n**/\negret.runEgret({ renderMode: "webgl", audioType: 0 });\n\n')),Object(o.b)("h2",{id:"3\u97f3\u9891\u793a\u4f8b"},"3.\u97f3\u9891\u793a\u4f8b"),Object(o.b)("p",null,"\u64ad\u653e\u97f3\u9891\u7684\u7b80\u5355\u793a\u4f8b\u4ee3\u7801\u5982\u4e0b :"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'class SoundExample extends egret.DisplayObjectContainer {\n    public constructor() {\n        super();\n        this.once(egret.Event.ADDED_TO_STAGE, this.onAddtoStage, this);\n    }\n    private onAddtoStage() {\n        this.startLoad();\n    }\n    private startLoad(): void {\n        //\u521b\u5efa URLLoader \u5bf9\u8c61\n        const loader: egret.URLLoader = new egret.URLLoader();\n        //\u8bbe\u7f6e\u52a0\u8f7d\u65b9\u5f0f\u4e3a\u58f0\u97f3\n        loader.dataFormat = egret.URLLoaderDataFormat.SOUND;\n        //\u6dfb\u52a0\u52a0\u8f7d\u5b8c\u6210\u4fa6\u542c\n        loader.addEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);\n        //\u97f3\u9891\u8d44\u6e90\u653e\u5728resource\u6587\u4ef6\u5939\u4e0b\n        const url: string = "resource/soundtest.mp3";\n        const request: egret.URLRequest = new egret.URLRequest(url);\n        //\u5f00\u59cb\u52a0\u8f7d\n        loader.load(request);\n    }\n    private onLoadComplete(event: egret.Event): void {\n        const loader: egret.URLLoader = <egret.URLLoader>event.target;\n        //\u83b7\u53d6\u52a0\u8f7d\u5230\u7684 Sound \u5bf9\u8c61\n        const sound: egret.Sound = <egret.Sound>loader.data;\n        this.sound = sound;\n        //\u4e00\u4e2a\u7b80\u5355\u7684\u64ad\u653e\u6309\u94ae\n        const btn = new egret.Sprite();\n        btn.graphics.beginFill(0x18f7ff);\n        btn.graphics.drawRoundRect(0, 0, 80, 40, 5, 5);\n        btn.graphics.endFill();\n        btn.touchEnabled = true;\n        btn.anchorOffsetX = btn.width / 2;\n        btn.x = this.stage.stageWidth / 2;\n        btn.anchorOffsetY = btn.height / 2;\n        btn.y = this.stage.stageHeight / 2;\n        //\u76d1\u542c\u6309\u94ae\u7684\u89e6\u6478\u4e8b\u4ef6\n        btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);\n        this.addChild(btn);\n    }\n    private sound: egret.Sound;\n    private soundChannel: egret.SoundChannel;\n    private onTouch(event: egret.Event) {\n        const sound = this.sound;\n        let channel: egret.SoundChannel = this.soundChannel;\n        if (channel) {\n            //\u8c03\u7528soundChannel\u5bf9\u8c61\u7684stop\u65b9\u6cd5\u505c\u6b62\u64ad\u653e\u97f3\u9891\n            console.log(channel);\n            channel.stop();\n            this.soundChannel = null;\n            return;\n        }\n        //\u4f7f\u7528SoundChannel\u64ad\u653e\u97f3\u9891\n        channel = sound.play(0, -1);\n        //Egret 3.0.4 \u65b0\u589e\u83b7\u53d6\u97f3\u9891\u957f\u5ea6 length \u5c5e\u6027\u3002\n        console.log(sound.length);\n        channel.addEventListener(egret.Event.SOUND_COMPLETE, this.onSoundComplete, this);\n        //\u4fdd\u5b58soundChannel\u5bf9\u8c61\n        this.soundChannel = channel;\n    }\n    private onSoundComplete(event: egret.Event): void {\n        console.log("onSoundComplete");\n    }\n}\n\n')),Object(o.b)("p",null,"\u9996\u5148\u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"URLLoader")," \u6765\u8f7d\u5165\u97f3\u9891\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u4e0a\u9762\u7684\u5176\u4ed6\u4e24\u79cd\u65b9\u5f0f\u8f7d\u5165\u97f3\u9891\u3002\u76d1\u542c\u8fd9\u4e2a\u97f3\u9891\u7684\u52a0\u8f7d\u5b8c\u6210\u4e8b\u4ef6\uff0c\u5f53\u52a0\u8f7d\u5b8c\u6210\u4e4b\u540e\u83b7\u53d6\u5230\u97f3\u9891\u7684\u6570\u636e\u5e76\u65b0\u5efa",Object(o.b)("inlineCode",{parentName:"p"},"sound"),"\u5bf9\u8c61\u3002\n\u8c03\u7528",Object(o.b)("inlineCode",{parentName:"p"},"play()"),"\u65b9\u6cd5\u6765\u64ad\u653e\u97f3\u9891\uff0c\u672c\u4f8b\u4e2d\uff0c\u5f00\u59cb\u65f6\u95f4\u7684\u5355\u4f4d\u4e3a0\u79d2\uff0c\u5faa\u73af\u64ad\u653e\u3002\n\u8fd9\u91cc",Object(o.b)("inlineCode",{parentName:"p"},"play"),"\u65b9\u6cd5\u4f1a\u8fd4\u56de\u4e00\u4e2a",Object(o.b)("inlineCode",{parentName:"p"},"SoundChannel"),"\u5bf9\u8c61\uff0c\u901a\u8fc7\u63a7\u5236",Object(o.b)("inlineCode",{parentName:"p"},"SoundChannel"),"\u7684",Object(o.b)("inlineCode",{parentName:"p"},"volume"),"\u5c5e\u6027\u6765\u8bbe\u7f6e\u97f3\u91cf\u5927\u5c0f,\u97f3\u91cf\u8303\u56f4\u4ece 0\uff08\u9759\u97f3\uff09\u81f3 1\uff08\u6700\u5927\u97f3\u91cf\uff09\u3002",Object(o.b)("inlineCode",{parentName:"p"},"SoundChannel"),"\u5bf9\u8c61\u7684",Object(o.b)("inlineCode",{parentName:"p"},"position"),"\u5c5e\u6027\u53ef\u4ee5\u83b7\u53d6\u5230\u5f53\u524d\u64ad\u653e\u7684\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a\u79d2\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f",Object(o.b)("inlineCode",{parentName:"p"},"position"),"\u5c5e\u6027\u662f\u4e00\u4e2a\u53ea\u8bfb\u7684\u5c5e\u6027\uff0c\u4e0d\u80fd\u901a\u8fc7\u8bbe\u7f6e",Object(o.b)("inlineCode",{parentName:"p"},"position"),"\u6765\u8bbe\u7f6e\u5f53\u524d\u7684\u64ad\u653e\u65f6\u95f4\u3002\n\u5982\u679c\u9700\u8981\u505c\u6b62\u58f0\u97f3\uff0c\u53ef\u4ee5\u8c03\u7528",Object(o.b)("inlineCode",{parentName:"p"},"SoundChannel"),"\u5bf9\u8c61\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"stop()")," \u65b9\u6cd5\u3002"),Object(o.b)("h2",{id:"4\u6ce8\u610f\u4e8b\u9879"},"4.\u6ce8\u610f\u4e8b\u9879"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u58f0\u97f3\u8d44\u6e90\u7684\u683c\u5f0f\u751f\u6210\u8bf7\u4e25\u683c\u6309\u7167\u6b64\u6b65\u9aa4\u6765\uff0c\u4e0d\u7136\u4f1a\u5f71\u54cd\u517c\u5bb9\u6027\u3002")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"\u4f7f\u7528\u683c\u5f0f\u5de5\u5382\u3002\u9009\u62e9 44100Hz\uff0c96kbps \u8f6c\u6362\u3002")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"\u5982\u679c\u8fd8\u6709\u95ee\u9898\uff0c\u8bf7\u518d\u8f6c\u4e00\u6b21\u3002")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"\u5982\u679c\u8fd8\u6709\u95ee\u9898\uff0c\u8bf7\u88c1\u51cf\u97f3\u9891\u957f\u5ea6\u518d\u6b21\u8f6c\u6362\u3002")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"\u5982\u679c\u8fd8\u6709\u95ee\u9898\uff0c\u8bf7\u5230\u8bba\u575b\u8054\u7cfb\u6211\u4eec ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://bbs.egret.com/portal.php"}),"\u5f00\u53d1\u8005\u8bba\u575b"),"\uff0c\u5e76\u63d0\u4f9b\u5bf9\u5e94\u7684\u97f3\u9891\u6587\u4ef6\u3002"))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u5982\u679c\u6709\u95ee\u9898\uff0c\u8bf7\u5c1d\u8bd5\u591a\u8f6c\u51e0\u6b21\u3002")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u5bf9\u4e8e\u66f4\u4e13\u4e1a\u7684\u8f6c\u6362\u5de5\u5177\u6bd4\u5982 audition\uff0c\u5728\u6d4b\u8bd5\u4e2d\u53d1\u73b0\u8f6c\u6362\u540e\u7684\u6587\u4ef6\u5e76\u4e0d\u80fd\u89e3\u51b3\u5728\u6240\u6709\u7684\u6d4f\u89c8\u5668\u4e2d\u7684\u64ad\u653e\u95ee\u9898\uff0c\u6240\u4ee5\u4e0d\u63a8\u8350\u5927\u5bb6\u4f7f\u7528\u3002")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u5728 iOS \u7cfb\u7edf\uff08\u6240\u6709\u8bbe\u5907\uff0c\u5305\u62ecIPAD\uff09\u4e2d\uff0c\u4f7f\u7528\u8005\u5728\u53ef\u80fd\u4ed8\u8d39\u7684\u7f51\u7edc\u73af\u5883\u4e2d\u9700\u8981\u7b49\u5f85\u7528\u6237\u4ea4\u4e92\u64cd\u4f5c\u540e\u624d\u80fd\u64ad\u653e\u5a92\u4f53\u3002\u4e3a\u4e86\u83b7\u5f97\u5728 iOS \u7cfb\u7edf\u4e2d\u6700\u5927\u7684\u517c\u5bb9\u6027\uff0c\u8bf7\u907f\u514d\u4f7f\u7528\u81ea\u52a8\u64ad\u653e\u97f3\u9891\uff08\u8f7d\u5165\u5b8c\u6210\u5373\u64ad\u653e\uff09\uff0c\u5e94\u6dfb\u52a0\u5408\u9002\u7684\u89e6\u53d1\u6761\u4ef6\uff08\u6bd4\u5982\u64ad\u653e\u6309\u94ae\uff09\u3002")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u5982\u679c\u4f7f\u7528 WebAudio \u65b9\u5f0f\u8fd8\u4e0d\u80fd\u81ea\u52a8\u64ad\u653e\u7684\u8bdd\uff0c\u90a3\u4e48\u76ee\u524d\u6765\u8bf4\u6ca1\u6709\u5176\u4ed6\u65b9\u5f0f\u6765\u89e3\u51b3\u81ea\u52a8\u64ad\u653e\u7684\u95ee\u9898\u3002")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"iOS \u6e38\u620f\u7684\u57df\u540d\u5fc5\u987b\u8981\u5728\u73a9\u5427\u6307\u5b9a\u7684\u57df\u540d\u4e0b\u624d\u53ef\u4ee5\u4f7f\u7528\u4e0a\u9762\u63d0\u5230\u7684Qzone\u7684js api(jsBridge)\u3002")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"\u7531\u4e8e\u4e00\u4e9b\u6d4f\u89c8\u5668\u4e0d\u652f\u6301\u76f4\u63a5\u52a0\u8f7d\u540e\u64ad\u653e\uff0c\u56e0\u6b64\u5efa\u8bae\u5148\u9884\u52a0\u8f7d\u97f3\u4e50\u6587\u4ef6\uff0c\u5e76\u5728\u70b9\u51fb\u4e8b\u4ef6\u65f6\u76f4\u63a5\u8c03\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"sound.play()"),"\u3002")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"\u975e WebAudio \u65b9\u5f0f\u64ad\u653e\u7684\u97f3\u9891\uff0c\u5f88\u6709\u53ef\u80fd\u5728\u6d4f\u89c8\u5668\u53ea\u80fd\u540c\u65f6\u64ad\u653e\u4e00\u79cd\u58f0\u97f3\uff08\u8fd9\u4e2a\u4e5f\u662f\u4e3a\u4ec0\u4e48qzone\u5355\u72ec\u63d0\u4f9b\u4e86\u58f0\u97f3\u89e3\u51b3\u65b9\u6848\uff09\u3002"))))}p.isMDXComponent=!0},520:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=r.a.createContext({}),c=function(e){var n=r.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l({},n,{},e)),t},p=function(e){var n=c(e.components);return r.a.createElement(d.Provider,{value:n},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},O=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=b(e,["components","mdxType","originalType","parentName"]),p=c(t),u=a,O=p["".concat(i,".").concat(u)]||p[u]||s[u]||o;return t?r.a.createElement(O,l({ref:n},d,{components:t})):r.a.createElement(O,l({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=O;var l={};for(var b in n)hasOwnProperty.call(n,b)&&(l[b]=n[b]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=t[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}O.displayName="MDXCreateElement"}}]);