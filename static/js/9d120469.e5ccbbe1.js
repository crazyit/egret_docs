(window.webpackJsonp=window.webpackJsonp||[]).push([[249],{376:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return l})),t.d(r,"rightToc",(function(){return i})),t.d(r,"metadata",(function(){return c})),t.d(r,"default",(function(){return m}));var a=t(1),o=t(9),n=(t(0),t(520)),l={id:"egret.web.EgretShaderLib"},i=[{value:"\u516c\u5171\u5c5e\u6027",id:"\u516c\u5171\u5c5e\u6027",children:[{value:"\u5c5e\u6027\u8be6\u7ec6\u4fe1\u606f",id:"\u5c5e\u6027\u8be6\u7ec6\u4fe1\u606f",children:[]},{value:"blur_frag",id:"blur_frag",children:[]},{value:"colorTransform_frag",id:"colortransform_frag",children:[]},{value:"colorTransform_frag_etc_alphamask_frag",id:"colortransform_frag_etc_alphamask_frag",children:[]},{value:"default_vert",id:"default_vert",children:[]},{value:"glow_frag",id:"glow_frag",children:[]},{value:"primitive_frag",id:"primitive_frag",children:[]},{value:"texture_etc_alphamask_frag",id:"texture_etc_alphamask_frag",children:[]},{value:"texture_frag",id:"texture_frag",children:[]}]}],c={id:"api/engine/egret.web.EgretShaderLib",title:"egret.web.EgretShaderLib",description:"**\u5305** \xa0\xa0 egret.web",source:"@site/docs/api/engine/egret.web.EgretShaderLib.md",permalink:"/engine/docs/api/engine/egret.web.EgretShaderLib",sidebar:"apiSidebar",previous:{title:"egret.web.DrawLabel",permalink:"/engine/docs/api/engine/egret.web.DrawLabel"},next:{title:"egret.web.IDrawData",permalink:"/engine/docs/api/engine/egret.web.IDrawData"}},b={rightToc:i,metadata:c},p="wrapper";function m(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(n.b)(p,Object(a.a)({},b,t,{components:r,mdxType:"MDXLayout"}),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"\u5305")," \xa0\xa0 egret.web"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"\u7c7b"),"  \xa0\xa0 public class EgretShaderLib"),Object(n.b)("h2",{id:"\u516c\u5171\u5c5e\u6027"},"\u516c\u5171\u5c5e\u6027"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u5c5e\u6027"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(a.a)({parentName:"td"},{href:"#blur_frag"}),"blur_frag")," : ",Object(n.b)("a",Object(a.a)({parentName:"td"},{href:"global.Types#string"}),"string"),Object(n.b)("br",null),"[\u9759\u6001]")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(a.a)({parentName:"td"},{href:"#colortransform_frag"}),"colorTransform_frag")," : ",Object(n.b)("a",Object(a.a)({parentName:"td"},{href:"global.Types#string"}),"string"),Object(n.b)("br",null),"[\u9759\u6001]")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(a.a)({parentName:"td"},{href:"#colortransform_frag_etc_alphamask_frag"}),"colorTransform_frag_etc_alphamask_frag")," : ",Object(n.b)("a",Object(a.a)({parentName:"td"},{href:"global.Types#string"}),"string"),Object(n.b)("br",null),"[\u9759\u6001]",'"precision mediump float;\t\tvarying vec2 vTextureCoord;\t\tvarying vec4 vColor;\t\tuniform mat4 matrix;\t\tuniform vec4 colorAdd;\t\tuniform sampler2D uSampler;\t\tuniform sampler2D uSamplerAlphaMask;\t\tvoid main(void){\t\t\tfloat alpha = texture2D(uSamplerAlphaMask, vTextureCoord).r;\t\t\tif (alpha ',"<"," 0.0039) { discard; }\t\t\tvec4 texColor = texture2D(uSampler, vTextureCoord);\t\t\tif(texColor.a > 0.0) {\t\t\t\t// \u62b5\u6d88\u9884\u4e58\u7684alpha\u901a\u9053\t\t\t\ttexColor = vec4(texColor.rgb / texColor.a, texColor.a);\t\t\t}\t\t\tvec4 v4Color = clamp(texColor ",Object(n.b)("em",{parentName:"td"}," matrix + colorAdd, 0.0, 1.0);\t\t\tv4Color.rgb = v4Color.rgb ")," alpha;\t\t\tv4Color.a = alpha;\t\t\tgl_FragColor = v4Color ","*",' vColor;\t\t}"')),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(a.a)({parentName:"td"},{href:"#default_vert"}),"default_vert")," : ",Object(n.b)("a",Object(a.a)({parentName:"td"},{href:"global.Types#string"}),"string"),Object(n.b)("br",null),"[\u9759\u6001]")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(a.a)({parentName:"td"},{href:"#glow_frag"}),"glow_frag")," : ",Object(n.b)("a",Object(a.a)({parentName:"td"},{href:"global.Types#string"}),"string"),Object(n.b)("br",null),"[\u9759\u6001]")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(a.a)({parentName:"td"},{href:"#primitive_frag"}),"primitive_frag")," : ",Object(n.b)("a",Object(a.a)({parentName:"td"},{href:"global.Types#string"}),"string"),Object(n.b)("br",null),"[\u9759\u6001]")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(a.a)({parentName:"td"},{href:"#texture_etc_alphamask_frag"}),"texture_etc_alphamask_frag")," : ",Object(n.b)("a",Object(a.a)({parentName:"td"},{href:"global.Types#string"}),"string"),Object(n.b)("br",null),"[\u9759\u6001]",'"precision lowp float;\t\tvarying vec2 vTextureCoord;\t\tvarying vec4 vColor;\t\tuniform sampler2D uSampler;\t\tuniform sampler2D uSamplerAlphaMask;\t\tvoid main(void) {\t\t\tfloat alpha = texture2D(uSamplerAlphaMask, vTextureCoord).r;\t\t\tif (alpha ',"<"," 0.0039) { discard; }\t\t\tvec4 v4Color = texture2D(uSampler, vTextureCoord);\t\t\tv4Color.rgb = v4Color.rgb ",Object(n.b)("em",{parentName:"td"}," alpha;\t\t\tv4Color.a = alpha;\t\t\tgl_FragColor = v4Color "),' vColor;\t\t}"')),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(a.a)({parentName:"td"},{href:"#texture_frag"}),"texture_frag")," : ",Object(n.b)("a",Object(a.a)({parentName:"td"},{href:"global.Types#string"}),"string"),Object(n.b)("br",null),"[\u9759\u6001]")))),Object(n.b)("h3",{id:"\u5c5e\u6027\u8be6\u7ec6\u4fe1\u606f"},"\u5c5e\u6027\u8be6\u7ec6\u4fe1\u606f"),Object(n.b)("h3",{id:"blur_frag"},"blur_frag"),Object(n.b)("p",null,"blur",Object(n.b)("em",{parentName:"p"},"frag : ",Object(n.b)("a",Object(a.a)({parentName:"em"},{href:"global.Types#string"}),"string"),' = "precision mediump float;',"\\","r","\\","nuniform vec2 blur;","\\","r","\\","nuniform sampler2D uSampler;","\\","r","\\","nvarying vec2 vTextureCoord;","\\","r","\\","nuniform vec2 uTextureSize;","\\","r","\\","nvoid main()","\\","r","\\","n{","\\","r","\\","n    const int sampleRadius = 5;","\\","r","\\","n    const int samples = sampleRadius ")," 2 + 1;","\\","r","\\","n    vec2 blurUv = blur / uTextureSize;","\\","r","\\","n    vec4 color = vec4(0, 0, 0, 0);","\\","r","\\","n    vec2 uv = vec2(0.0, 0.0);","\\","r","\\","n    blurUv /= float(sampleRadius);","\\","r","\\","n","\\","r","\\","n    for (int i = -sampleRadius; i ","<","= sampleRadius; i++) {","\\","r","\\","n        uv.x = vTextureCoord.x + float(i) _ blurUv.x;","\\","r","\\","n        uv.y = vTextureCoord.y + float(i) ","*"," blurUv.y;","\\","r","\\","n        color += texture2D(uSampler, uv);","\\","r","\\","n    }","\\","r","\\","n","\\","r","\\","n    color /= float(samples);","\\","r","\\","n    gl_FragColor = color;","\\","r","\\",'n}"'),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"\u652f\u6301\u7248\u672c:"),"all"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"\u8fd0\u884c\u5e73\u53f0"),":Web,Native")),Object(n.b)("h3",{id:"colortransform_frag"},"colorTransform_frag"),Object(n.b)("p",null,"colorTransform",Object(n.b)("em",{parentName:"p"},"frag : ",Object(n.b)("a",Object(a.a)({parentName:"em"},{href:"global.Types#string"}),"string"),' = "precision mediump float;',"\\","r","\\","nvarying vec2 vTextureCoord;","\\","r","\\","nvarying vec4 vColor;","\\","r","\\","nuniform mat4 matrix;","\\","r","\\","nuniform vec4 colorAdd;","\\","r","\\","nuniform sampler2D uSampler;","\\","r","\\","n","\\","r","\\","nvoid main(void) {","\\","r","\\","n    vec4 texColor = texture2D(uSampler, vTextureCoord);","\\","r","\\","n    if(texColor.a > 0.) {","\\","r","\\","n        // \u62b5\u6d88\u9884\u4e58\u7684alpha\u901a\u9053","\\","r","\\","n        texColor = vec4(texColor.rgb / texColor.a, texColor.a);","\\","r","\\","n    }","\\","r","\\","n    vec4 locColor = clamp(texColor ")," matrix + colorAdd, 0., 1.);","\\","r","\\","n    gl",Object(n.b)("em",{parentName:"p"},"FragColor = vColor ")," vec4(locColor.rgb ","*"," locColor.a, locColor.a);","\\","r","\\",'n}"'),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"\u652f\u6301\u7248\u672c:"),"all"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"\u8fd0\u884c\u5e73\u53f0"),":Web,Native")),Object(n.b)("h3",{id:"colortransform_frag_etc_alphamask_frag"},"colorTransform_frag_etc_alphamask_frag"),Object(n.b)("p",null,"colorTransform",Object(n.b)("em",{parentName:"p"},"frag_etc_alphamask_frag : ",Object(n.b)("a",Object(a.a)({parentName:"em"},{href:"global.Types#string"}),"string"),' = "precision mediump float;',"\\","r","\\","nvarying vec2 vTextureCoord;","\\","r","\\","nvarying vec4 vColor;","\\","r","\\","nuniform mat4 matrix;","\\","r","\\","nuniform vec4 colorAdd;","\\","r","\\","nuniform sampler2D uSampler;","\\","r","\\","nuniform sampler2D uSamplerAlphaMask;","\\","r","\\","n","\\","r","\\","nvoid main(void){","\\","r","\\","nfloat alpha = texture2D(uSamplerAlphaMask, vTextureCoord).r;","\\","r","\\","nif (alpha ","<"," 0.0039) { discard; }","\\","r","\\","nvec4 texColor = texture2D(uSampler, vTextureCoord);","\\","r","\\","nif(texColor.a > 0.0) {","\\","r","\\","n // \u62b5\u6d88\u9884\u4e58\u7684alpha\u901a\u9053","\\","r","\\","ntexColor = vec4(texColor.rgb / texColor.a, texColor.a);","\\","r","\\","n}","\\","r","\\","nvec4 v4Color = clamp(texColor ")," matrix + colorAdd, 0.0, 1.0);","\\","r","\\","nv4Color.rgb = v4Color.rgb _ alpha;","\\","r","\\","nv4Color.a = alpha;","\\","r","\\","ngl_FragColor = v4Color ","*"," vColor;","\\","r","\\",'n}"'),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"\u652f\u6301\u7248\u672c:"),"all"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"\u8fd0\u884c\u5e73\u53f0"),":Web,Native")),Object(n.b)("p",null,'"precision mediump float;\t\tvarying vec2 vTextureCoord;\t\tvarying vec4 vColor;\t\tuniform mat4 matrix;\t\tuniform vec4 colorAdd;\t\tuniform sampler2D uSampler;\t\tuniform sampler2D uSamplerAlphaMask;\t\tvoid main(void){\t\t\tfloat alpha = texture2D(uSamplerAlphaMask, vTextureCoord).r;\t\t\tif (alpha ',"<"," 0.0039) { discard; }\t\t\tvec4 texColor = texture2D(uSampler, vTextureCoord);\t\t\tif(texColor.a > 0.0) {\t\t\t\t// \u62b5\u6d88\u9884\u4e58\u7684alpha\u901a\u9053\t\t\t\ttexColor = vec4(texColor.rgb / texColor.a, texColor.a);\t\t\t}\t\t\tvec4 v4Color = clamp(texColor ",Object(n.b)("em",{parentName:"p"}," matrix + colorAdd, 0.0, 1.0);\t\t\tv4Color.rgb = v4Color.rgb ")," alpha;\t\t\tv4Color.a = alpha;\t\t\tgl_FragColor = v4Color ","*",' vColor;\t\t}"'),Object(n.b)("h3",{id:"default_vert"},"default_vert"),Object(n.b)("p",null,"default_vert : ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"global.Types#string"}),"string"),' = "attribute vec2 aVertexPosition;',"\\","r","\\","nattribute vec2 aTextureCoord;","\\","r","\\","nattribute vec4 aColor;","\\","r","\\","n","\\","r","\\","nuniform vec2 projectionVector;","\\","r","\\","n// uniform vec2 offsetVector;","\\","r","\\","n","\\","r","\\","nvarying vec2 vTextureCoord;","\\","r","\\","nvarying vec4 vColor;","\\","r","\\","n","\\","r","\\","nconst vec2 center = vec2(-1.0, 1.0);","\\","r","\\","n","\\","r","\\","nvoid main(void) {","\\","r","\\","n   gl_Position = vec4( (aVertexPosition / projectionVector) + center , 0.0, 1.0);","\\","r","\\","n   vTextureCoord = aTextureCoord;","\\","r","\\","n   vColor = aColor;","\\","r","\\",'n}"'),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"\u652f\u6301\u7248\u672c:"),"all"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"\u8fd0\u884c\u5e73\u53f0"),":Web,Native")),Object(n.b)("h3",{id:"glow_frag"},"glow_frag"),Object(n.b)("p",null,"glow",Object(n.b)("em",{parentName:"p"},"frag : ",Object(n.b)("a",Object(a.a)({parentName:"em"},{href:"global.Types#string"}),"string"),' = "precision highp float;',"\\","r","\\","nvarying vec2 vTextureCoord;","\\","r","\\","n","\\","r","\\","nuniform sampler2D uSampler;","\\","r","\\","n","\\","r","\\","nuniform float dist;","\\","r","\\","nuniform float angle;","\\","r","\\","nuniform vec4 color;","\\","r","\\","nuniform float alpha;","\\","r","\\","nuniform float blurX;","\\","r","\\","nuniform float blurY;","\\","r","\\","n// uniform vec4 quality;","\\","r","\\","nuniform float strength;","\\","r","\\","nuniform float inner;","\\","r","\\","nuniform float knockout;","\\","r","\\","nuniform float hideObject;","\\","r","\\","n","\\","r","\\","nuniform vec2 uTextureSize;","\\","r","\\","n","\\","r","\\","nfloat random(vec2 scale)","\\","r","\\","n{","\\","r","\\","n    return fract(sin(dot(gl_FragCoord.xy, scale)) ")," 43758.5453);","\\","r","\\","n}","\\","r","\\","n","\\","r","\\","nvoid main(void) {","\\","r","\\","n    vec2 px = vec2(1.0 / uTextureSize.x, 1.0 / uTextureSize.y);","\\","r","\\","n    // TODO \u81ea\u52a8\u8c03\u8282\u91c7\u6837\u6b21\u6570\uff1f","\\","r","\\","n    const float linearSamplingTimes = 7.0;","\\","r","\\","n    const float circleSamplingTimes = 12.0;","\\","r","\\","n    vec4 ownColor = texture2D(uSampler, vTextureCoord);","\\","r","\\","n    vec4 curColor;","\\","r","\\","n    float totalAlpha = 0.0;","\\","r","\\","n    float maxTotalAlpha = 0.0;","\\","r","\\","n    float curDistanceX = 0.0;","\\","r","\\","n    float curDistanceY = 0.0;","\\","r","\\","n    float offsetX = dist ",Object(n.b)("em",{parentName:"p"}," cos(angle) ")," px.x;","\\","r","\\","n    float offsetY = dist ",Object(n.b)("em",{parentName:"p"}," sin(angle) ")," px.y;","\\","r","\\","n","\\","r","\\","n    const float PI = 3.14159265358979323846264;","\\","r","\\","n    float cosAngle;","\\","r","\\","n    float sinAngle;","\\","r","\\","n    float offset = PI ",Object(n.b)("em",{parentName:"p"}," 2.0 / circleSamplingTimes ")," random(vec2(12.9898, 78.233));","\\","r","\\","n    float stepX = blurX ",Object(n.b)("em",{parentName:"p"}," px.x / linearSamplingTimes;","\\","r","\\","n    float stepY = blurY ")," px.y / linearSamplingTimes;","\\","r","\\","n    for (float a = 0.0; a ","<","= PI ",Object(n.b)("em",{parentName:"p"}," 2.0; a += PI ")," 2.0 / circleSamplingTimes) {","\\","r","\\","n        cosAngle = cos(a + offset);","\\","r","\\","n        sinAngle = sin(a + offset);","\\","r","\\","n        for (float i = 1.0; i ","<","= linearSamplingTimes; i++) {","\\","r","\\","n            curDistanceX = i ",Object(n.b)("em",{parentName:"p"}," stepX ")," cosAngle;","\\","r","\\","n            curDistanceY = i ",Object(n.b)("em",{parentName:"p"}," stepY ")," sinAngle;","\\","r","\\","n            if (vTextureCoord.x + curDistanceX - offsetX >= 0.0 && vTextureCoord.y + curDistanceY + offsetY ","<","= 1.0){","\\","r","\\","n                curColor = texture2D(uSampler, vec2(vTextureCoord.x + curDistanceX - offsetX, vTextureCoord.y + curDistanceY + offsetY));","\\","r","\\","n                totalAlpha += (linearSamplingTimes - i) ",Object(n.b)("em",{parentName:"p"}," curColor.a;","\\","r","\\","n            }","\\","r","\\","n            maxTotalAlpha += (linearSamplingTimes - i);","\\","r","\\","n        }","\\","r","\\","n    }","\\","r","\\","n","\\","r","\\","n    ownColor.a = max(ownColor.a, 0.0001);","\\","r","\\","n    ownColor.rgb = ownColor.rgb / ownColor.a;","\\","r","\\","n","\\","r","\\","n    float outerGlowAlpha = (totalAlpha / maxTotalAlpha) ")," strength ",Object(n.b)("em",{parentName:"p"}," alpha ")," (1. - inner) ",Object(n.b)("em",{parentName:"p"}," max(min(hideObject, knockout), 1. - ownColor.a);","\\","r","\\","n    float innerGlowAlpha = ((maxTotalAlpha - totalAlpha) / maxTotalAlpha) ")," strength ",Object(n.b)("em",{parentName:"p"}," alpha ")," inner ",Object(n.b)("em",{parentName:"p"}," ownColor.a;","\\","r","\\","n","\\","r","\\","n    ownColor.a = max(ownColor.a ")," knockout _ (1. - hideObject), 0.0001);","\\","r","\\","n    vec3 mix1 = mix(ownColor.rgb, color.rgb, innerGlowAlpha / (innerGlowAlpha + ownColor.a));","\\","r","\\","n    vec3 mix2 = mix(mix1, color.rgb, outerGlowAlpha / (innerGlowAlpha + ownColor.a + outerGlowAlpha));","\\","r","\\","n    float resultAlpha = min(ownColor.a + outerGlowAlpha + innerGlowAlpha, 1.);","\\","r","\\","n    gl_FragColor = vec4(mix2 ","*"," resultAlpha, resultAlpha);","\\","r","\\",'n}"'),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"\u652f\u6301\u7248\u672c:"),"all"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"\u8fd0\u884c\u5e73\u53f0"),":Web,Native")),Object(n.b)("h3",{id:"primitive_frag"},"primitive_frag"),Object(n.b)("p",null,"primitive_frag : ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"global.Types#string"}),"string"),' = "precision lowp float;',"\\","r","\\","nvarying vec2 vTextureCoord;","\\","r","\\","nvarying vec4 vColor;","\\","r","\\","n","\\","r","\\","nvoid main(void) {","\\","r","\\","n    gl_FragColor = vColor;","\\","r","\\",'n}"'),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"\u652f\u6301\u7248\u672c:"),"all"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"\u8fd0\u884c\u5e73\u53f0"),":Web,Native")),Object(n.b)("h3",{id:"texture_etc_alphamask_frag"},"texture_etc_alphamask_frag"),Object(n.b)("p",null,"texture",Object(n.b)("em",{parentName:"p"},"etc_alphamask_frag : ",Object(n.b)("a",Object(a.a)({parentName:"em"},{href:"global.Types#string"}),"string"),' = "precision lowp float;',"\\","r","\\","nvarying vec2 vTextureCoord;","\\","r","\\","nvarying vec4 vColor;","\\","r","\\","nuniform sampler2D uSampler;","\\","r","\\","nuniform sampler2D uSamplerAlphaMask;","\\","r","\\","nvoid main(void) {","\\","r","\\","nfloat alpha = texture2D(uSamplerAlphaMask, vTextureCoord).r;","\\","r","\\","nif (alpha ","<"," 0.0039) { discard; }","\\","r","\\","nvec4 v4Color = texture2D(uSampler, vTextureCoord);","\\","r","\\","nv4Color.rgb = v4Color.rgb ")," alpha;","\\","r","\\","nv4Color.a = alpha;","\\","r","\\","ngl",Object(n.b)("em",{parentName:"p"},"FragColor = v4Color ")," vColor;","\\","r","\\",'n}"'),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"\u652f\u6301\u7248\u672c:"),"all"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"\u8fd0\u884c\u5e73\u53f0"),":Web,Native")),Object(n.b)("p",null,'"precision lowp float;\t\tvarying vec2 vTextureCoord;\t\tvarying vec4 vColor;\t\tuniform sampler2D uSampler;\t\tuniform sampler2D uSamplerAlphaMask;\t\tvoid main(void) {\t\t\tfloat alpha = texture2D(uSamplerAlphaMask, vTextureCoord).r;\t\t\tif (alpha ',"<"," 0.0039) { discard; }\t\t\tvec4 v4Color = texture2D(uSampler, vTextureCoord);\t\t\tv4Color.rgb = v4Color.rgb ",Object(n.b)("em",{parentName:"p"}," alpha;\t\t\tv4Color.a = alpha;\t\t\tgl_FragColor = v4Color "),' vColor;\t\t}"'),Object(n.b)("h3",{id:"texture_frag"},"texture_frag"),Object(n.b)("p",null,"texture_frag : ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"global.Types#string"}),"string"),' = "precision lowp float;',"\\","r","\\","nvarying vec2 vTextureCoord;","\\","r","\\","nvarying vec4 vColor;","\\","r","\\","nuniform sampler2D uSampler;","\\","r","\\","n","\\","r","\\","nvoid main(void) {","\\","r","\\","n    gl_FragColor = texture2D(uSampler, vTextureCoord) ","*"," vColor;","\\","r","\\",'n}"'),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"\u652f\u6301\u7248\u672c:"),"all"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"\u8fd0\u884c\u5e73\u53f0"),":Web,Native")))}m.isMDXComponent=!0},520:function(e,r,t){"use strict";t.d(r,"a",(function(){return m})),t.d(r,"b",(function(){return v}));var a=t(0),o=t.n(a);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,a,o=function(e,r){if(null==e)return{};var t,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var b=o.a.createContext({}),p=function(e){var r=o.a.useContext(b),t=r;return e&&(t="function"==typeof e?e(r):i({},r,{},e)),t},m=function(e){var r=p(e.components);return o.a.createElement(b.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},g=Object(a.forwardRef)((function(e,r){var t=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),m=p(t),u=a,g=m["".concat(l,".").concat(u)]||m[u]||f[u]||n;return t?o.a.createElement(g,i({ref:r},b,{components:t})):o.a.createElement(g,i({ref:r},b))}));function v(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var n=t.length,l=new Array(n);l[0]=g;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var b=2;b<n;b++)l[b]=t[b];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,t)}g.displayName="MDXCreateElement"}}]);