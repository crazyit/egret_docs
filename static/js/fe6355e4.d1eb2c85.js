(window.webpackJsonp=window.webpackJsonp||[]).push([[387],{514:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"default",(function(){return O}));var b=a(1),n=a(9),r=(a(0),a(520)),l={id:"egret.TouchEvent"},c=[{value:"\u516c\u5171\u5c5e\u6027",id:"\u516c\u5171\u5c5e\u6027",children:[]},{value:"\u516c\u5171\u65b9\u6cd5",id:"\u516c\u5171\u65b9\u6cd5",children:[{value:"\u5c5e\u6027\u8be6\u7ec6\u4fe1\u606f",id:"\u5c5e\u6027\u8be6\u7ec6\u4fe1\u606f",children:[]},{value:"TOUCH_BEGIN",id:"touch_begin",children:[]},{value:"TOUCH_CANCEL",id:"touch_cancel",children:[]},{value:"TOUCH_END",id:"touch_end",children:[]},{value:"TOUCH_MOVE",id:"touch_move",children:[]},{value:"TOUCH_RELEASE_OUTSIDE",id:"touch_release_outside",children:[]},{value:"TOUCH_TAP",id:"touch_tap",children:[]},{value:"localX",id:"localx",children:[]},{value:"localY",id:"localy",children:[]},{value:"stageX",id:"stagex",children:[]},{value:"stageY",id:"stagey",children:[]},{value:"touchDown",id:"touchdown",children:[]},{value:"touchPointID",id:"touchpointid",children:[]}]},{value:"\u65b9\u6cd5\u8be6\u7ec6\u4fe1\u606f",id:"\u65b9\u6cd5\u8be6\u7ec6\u4fe1\u606f",children:[{value:"TouchEvent()",id:"touchevent",children:[]},{value:"dispatchTouchEvent()",id:"dispatchtouchevent",children:[]},{value:"updateAfterEvent()",id:"updateafterevent",children:[]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]}]}],o={id:"api/engine/egret.TouchEvent",title:"egret.TouchEvent",description:"**\u5305** \xa0\xa0 egret",source:"@site/docs/api/engine/egret.TouchEvent.md",permalink:"/engine/docs/api/engine/egret.TouchEvent",sidebar:"apiSidebar",previous:{title:"egret.TimerEvent",permalink:"/engine/docs/api/engine/egret.TimerEvent"},next:{title:"egret.VerticalAlign",permalink:"/engine/docs/api/engine/egret.VerticalAlign"}},i={rightToc:c,metadata:o},p="wrapper";function O(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)(p,Object(b.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u5305")," \xa0\xa0 egret"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u7c7b"),"  \xa0\xa0 public class TouchEvent"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u7ee7\u627f")," \xa0\xa0 egret.TouchEvent \u2192 ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://docs.egret.com/engine/docs/api/engine/egret.Event"}),"egret.Event")," \u2192 ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://docs.egret.com/engine/docs/api/engine/egret.HashObject"}),"egret.HashObject")),Object(r.b)("p",null,"\u4f7f\u7528 TouchEvent \u7c7b\uff0c\u60a8\u53ef\u4ee5\u5904\u7406\u8bbe\u5907\u4e0a\u90a3\u4e9b\u68c0\u6d4b\u7528\u6237\u4e0e\u8bbe\u5907\u4e4b\u95f4\u7684\u63a5\u89e6\u7684\u4e8b\u4ef6\u3002\u5f53\u7528\u6237\u4e0e\u5e26\u6709\u89e6\u6478\u5c4f\u7684\u79fb\u52a8\u7535\u8bdd\u6216\u5e73\u677f\u7535\u8111\u7b49\u8bbe\u5907\u4ea4\u4e92\u65f6\uff0c\u7528\u6237\u901a\u5e38\u4f7f\u7528\u624b\u6307\u6216\u6307\u9488\u8bbe\u5907\u63a5\u89e6\u5c4f\u5e55\u3002\u53ef\u4f7f\u7528 TouchEvent\u7c7b\u5f00\u53d1\u54cd\u5e94\u57fa\u672c\u89e6\u6478\u4e8b\u4ef6\uff08\u5982\u5355\u4e2a\u624b\u6307\u70b9\u51fb\uff09\u7684\u5e94\u7528\u7a0b\u5e8f\u3002\u4f7f\u7528\u6b64\u7c7b\u4e2d\u5b9a\u4e49\u7684\u4e8b\u4ef6\u7c7b\u578b\u521b\u5efa\u4e8b\u4ef6\u4fa6\u542c\u5668\u3002\u6ce8\u610f\uff1a\u5f53\u5bf9\u8c61\u5d4c\u5957\u5728\u663e\u793a\u5217\u8868\u4e2d\u65f6\uff0c\u89e6\u6478\u4e8b\u4ef6\u7684\u76ee\u6807\u5c06\u662f\u663e\u793a\u5217\u8868\u4e2d\u53ef\u89c1\u7684\u6700\u6df1\u7684\u53ef\u80fd\u5d4c\u5957\u5bf9\u8c61\u3002\u6b64\u5bf9\u8c61\u79f0\u4e3a\u76ee\u6807\u8282\u70b9\u3002\u8981\u4f7f\u76ee\u6807\u8282\u70b9\u7684\u7956\u4ee3\uff08\u7956\u4ee3\u662f\u4e00\u4e2a\u5305\u542b\u663e\u793a\u5217\u8868\u4e2d\u6240\u6709\u76ee\u6807\u8282\u70b9\u7684\u5bf9\u8c61\uff0c\u4ece\u821e\u53f0\u5230\u76ee\u6807\u8282\u70b9\u7684\u7236\u8282\u70b9\u5747\u5305\u62ec\u5728\u5185\uff09\u63a5\u6536\u89e6\u6478\u4e8b\u4ef6\u7684\u901a\u77e5\uff0c\u8bf7\u5bf9\u7956\u4ee3\u8282\u70b9\u4f7f\u7528 EventDispatcher.on() \u5e76\u5c06 type \u53c2\u6570\u8bbe\u7f6e\u4e3a\u8981\u68c0\u6d4b\u7684\u7279\u5b9a\u89e6\u6478\u4e8b\u4ef6\u3002"),Object(r.b)("h2",{id:"\u516c\u5171\u5c5e\u6027"},"\u516c\u5171\u5c5e\u6027"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u5c5e\u6027"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"#touch_begin"}),"TOUCH_BEGIN")," : ",Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"global.Types#string"}),"string"),Object(r.b)("br",null),"[\u9759\u6001]","\u5f53\u7528\u6237\u7b2c\u4e00\u6b21\u89e6\u6478\u542f\u7528\u89e6\u6478\u7684\u8bbe\u5907\u65f6\uff08\u4f8b\u5982\uff0c\u7528\u624b\u6307\u89e6\u6478\u914d\u6709\u89e6\u6478\u5c4f\u7684\u79fb\u52a8\u7535\u8bdd\u6216\u5e73\u677f\u7535\u8111\uff09\u8c03\u5ea6")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"#touch_cancel"}),"TOUCH_CANCEL")," : ",Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"global.Types#string"}),"string"),Object(r.b)("br",null),"[\u9759\u6001]","\u7531\u4e8e\u67d0\u4e2a\u4e8b\u4ef6\u53d6\u6d88\u4e86\u89e6\u6478\u65f6\u89e6\u53d1")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"#touch_end"}),"TOUCH_END")," : ",Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"global.Types#string"}),"string"),Object(r.b)("br",null),"[\u9759\u6001]","\u5f53\u7528\u6237\u79fb\u9664\u4e0e\u542f\u7528\u89e6\u6478\u7684\u8bbe\u5907\u7684\u63a5\u89e6\u65f6\uff08\u4f8b\u5982\uff0c\u5c06\u624b\u6307\u4ece\u914d\u6709\u89e6\u6478\u5c4f\u7684\u79fb\u52a8\u7535\u8bdd\u6216\u5e73\u677f\u7535\u8111\u4e0a\u62ac\u8d77\uff09\u8c03\u5ea6")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"#touch_move"}),"TOUCH_MOVE")," : ",Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"global.Types#string"}),"string"),Object(r.b)("br",null),"[\u9759\u6001]","\u5f53\u7528\u6237\u89e6\u78b0\u8bbe\u5907\u65f6\u8fdb\u884c\u8c03\u5ea6\uff0c\u800c\u4e14\u4f1a\u8fde\u7eed\u8c03\u5ea6\uff0c\u76f4\u5230\u63a5\u89e6\u70b9\u88ab\u5220\u9664")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"#touch_release_outside"}),"TOUCH_RELEASE_OUTSIDE")," : ",Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"global.Types#string"}),"string"),Object(r.b)("br",null),"[\u9759\u6001]","\u5f53\u7528\u6237\u5728\u89e6\u6478\u8bbe\u5907\u4e0a\u4e0e\u5f00\u59cb\u89e6\u6478\u7684\u4e0d\u540c DisplayObject \u5b9e\u4f8b\u4e0a\u62ac\u8d77\u63a5\u89e6\u70b9\u65f6\u8c03\u5ea6")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"#touch_tap"}),"TOUCH_TAP")," : ",Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"global.Types#string"}),"string"),Object(r.b)("br",null),"[\u9759\u6001]","\u5f53\u7528\u6237\u5728\u89e6\u6478\u8bbe\u5907\u4e0a\u4e0e\u5f00\u59cb\u89e6\u6478\u7684\u540c\u4e00 DisplayObject \u5b9e\u4f8b\u4e0a\u62ac\u8d77\u63a5\u89e6\u70b9\u65f6\u8c03\u5ea6")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"#localx"}),"localX")," : ",Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"global.Types#number"}),"number"),Object(r.b)("br",null),"\u4e8b\u4ef6\u53d1\u751f\u70b9\u76f8\u5bf9\u4e8e\u6240\u5c5e\u663e\u793a\u5bf9\u8c61\u7684\u6c34\u5e73\u5750\u6807")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"#localy"}),"localY")," : ",Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"global.Types#number"}),"number"),Object(r.b)("br",null),"\u4e8b\u4ef6\u53d1\u751f\u70b9\u76f8\u5bf9\u4e8e\u6240\u5c5e\u663e\u793a\u5bf9\u8c61\u7684\u5782\u76f4\u5750\u6807")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"#stagex"}),"stageX")," : ",Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"global.Types#number"}),"number"),Object(r.b)("br",null),"\u4e8b\u4ef6\u53d1\u751f\u70b9\u5728\u5168\u5c40\u821e\u53f0\u5750\u6807\u4e2d\u7684\u6c34\u5e73\u5750\u6807")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"#stagey"}),"stageY")," : ",Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"global.Types#number"}),"number"),Object(r.b)("br",null),"\u4e8b\u4ef6\u53d1\u751f\u70b9\u5728\u5168\u5c40\u821e\u53f0\u5750\u6807\u4e2d\u7684\u5782\u76f4\u5750\u6807")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"#touchdown"}),"touchDown")," : ",Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"global.Types#boolean"}),"boolean"),Object(r.b)("br",null),"\u8868\u793a\u89e6\u6478\u5df2\u6309\u4e0b (true) \u8fd8\u662f\u672a\u6309\u4e0b (false)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"#touchpointid"}),"touchPointID")," : ",Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"global.Types#number"}),"number"),Object(r.b)("br",null),"\u5206\u914d\u7ed9\u89e6\u6478\u70b9\u7684\u552f\u4e00\u6807\u8bc6\u53f7")))),Object(r.b)("h2",{id:"\u516c\u5171\u65b9\u6cd5"},"\u516c\u5171\u65b9\u6cd5"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u65b9\u6cd5"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"#touchevent"}),"TouchEvent"),"(type:",Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"global.Types#string"}),"string"),",bubbles:",Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"global.Types#boolean"}),"boolean"),",cancelable:",Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"global.Types#boolean"}),"boolean"),",stageX:",Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"global.Types#number"}),"number"),",stageY:",Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"global.Types#number"}),"number"),",touchPointID:",Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"global.Types#number"}),"number"),")",Object(r.b)("br",null),"\u521b\u5efa\u4e00\u4e2a TouchEvent \u5bf9\u8c61\uff0c\u5176\u4e2d\u5305\u542b\u6709\u5173Touch\u4e8b\u4ef6\u7684\u4fe1\u606f")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"#dispatchtouchevent"}),"dispatchTouchEvent"),"(target:",Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"https://docs.egret.com/engine/docs/api/engine/egret.IEventDispatcher"}),"egret.IEventDispatcher"),",type:",Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"global.Types#string"}),"string"),",bubbles:",Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"global.Types#boolean"}),"boolean"),",cancelable:",Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"global.Types#boolean"}),"boolean"),",stageX:",Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"global.Types#number"}),"number"),",stageY:",Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"global.Types#number"}),"number"),",touchPointID:",Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"global.Types#number"}),"number"),",touchDown:",Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"global.Types#boolean"}),"boolean"),"):",Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"global.Types#boolean"}),"boolean"),Object(r.b)("br",null),"[\u9759\u6001]","\u4f7f\u7528\u6307\u5b9a\u7684EventDispatcher\u5bf9\u8c61\u6765\u629b\u51faEvent\u4e8b\u4ef6\u5bf9\u8c61")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"#updateafterevent"}),"updateAfterEvent"),"():",Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"global.Types#void"}),"void"),Object(r.b)("br",null),"\u5982\u679c\u5df2\u4fee\u6539\u663e\u793a\u5217\u8868\uff0c\u8c03\u7528\u6b64\u65b9\u6cd5\u5c06\u4f1a\u5ffd\u7565\u5e27\u9891\u9650\u5236\uff0c\u5728\u6b64\u4e8b\u4ef6\u5904\u7406\u5b8c\u6210\u540e\u7acb\u5373\u91cd\u7ed8\u5c4f\u5e55")))),Object(r.b)("h3",{id:"\u5c5e\u6027\u8be6\u7ec6\u4fe1\u606f"},"\u5c5e\u6027\u8be6\u7ec6\u4fe1\u606f"),Object(r.b)("h3",{id:"touch_begin"},"TOUCH_BEGIN"),Object(r.b)("p",null,"TOUCH_BEGIN : ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"global.Types#string"}),"string"),' = "touchBegin"'),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"\u652f\u6301\u7248\u672c:"),"Egret 2.4"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"\u8fd0\u884c\u5e73\u53f0"),":Web,Native")),Object(r.b)("p",null,"\u5f53\u7528\u6237\u7b2c\u4e00\u6b21\u89e6\u6478\u542f\u7528\u89e6\u6478\u7684\u8bbe\u5907\u65f6\uff08\u4f8b\u5982\uff0c\u7528\u624b\u6307\u89e6\u6478\u914d\u6709\u89e6\u6478\u5c4f\u7684\u79fb\u52a8\u7535\u8bdd\u6216\u5e73\u677f\u7535\u8111\uff09\u8c03\u5ea6\u3002"),Object(r.b)("h3",{id:"touch_cancel"},"TOUCH_CANCEL"),Object(r.b)("p",null,"TOUCH_CANCEL : ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"global.Types#string"}),"string"),' = "touchCancel"'),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"\u652f\u6301\u7248\u672c:"),"Egret 3.0.1"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"\u8fd0\u884c\u5e73\u53f0"),":Web,Native")),Object(r.b)("p",null,"\u7531\u4e8e\u67d0\u4e2a\u4e8b\u4ef6\u53d6\u6d88\u4e86\u89e6\u6478\u65f6\u89e6\u53d1\u3002\u6bd4\u5982 eui.Scroller \u5728\u5f00\u59cb\u6eda\u52a8\u540e\u4f1a\u89e6\u53d1 'TOUCH_CANCEL' \u4e8b\u4ef6\uff0c\u4e0d\u518d\u89e6\u53d1\u540e\u7eed\u7684 'TOUCH_END' \u548c 'TOUCH_TAP' \u4e8b\u4ef6"),Object(r.b)("h3",{id:"touch_end"},"TOUCH_END"),Object(r.b)("p",null,"TOUCH_END : ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"global.Types#string"}),"string"),' = "touchEnd"'),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"\u652f\u6301\u7248\u672c:"),"Egret 2.4"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"\u8fd0\u884c\u5e73\u53f0"),":Web,Native")),Object(r.b)("p",null,"\u5f53\u7528\u6237\u79fb\u9664\u4e0e\u542f\u7528\u89e6\u6478\u7684\u8bbe\u5907\u7684\u63a5\u89e6\u65f6\uff08\u4f8b\u5982\uff0c\u5c06\u624b\u6307\u4ece\u914d\u6709\u89e6\u6478\u5c4f\u7684\u79fb\u52a8\u7535\u8bdd\u6216\u5e73\u677f\u7535\u8111\u4e0a\u62ac\u8d77\uff09\u8c03\u5ea6\u3002"),Object(r.b)("h3",{id:"touch_move"},"TOUCH_MOVE"),Object(r.b)("p",null,"TOUCH_MOVE : ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"global.Types#string"}),"string"),' = "touchMove"'),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"\u652f\u6301\u7248\u672c:"),"Egret 2.4"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"\u8fd0\u884c\u5e73\u53f0"),":Web,Native")),Object(r.b)("p",null,"\u5f53\u7528\u6237\u89e6\u78b0\u8bbe\u5907\u65f6\u8fdb\u884c\u8c03\u5ea6\uff0c\u800c\u4e14\u4f1a\u8fde\u7eed\u8c03\u5ea6\uff0c\u76f4\u5230\u63a5\u89e6\u70b9\u88ab\u5220\u9664\u3002"),Object(r.b)("h3",{id:"touch_release_outside"},"TOUCH_RELEASE_OUTSIDE"),Object(r.b)("p",null,"TOUCH_RELEASE_OUTSIDE : ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"global.Types#string"}),"string"),' = "touchReleaseOutside"'),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"\u652f\u6301\u7248\u672c:"),"Egret 2.4"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"\u8fd0\u884c\u5e73\u53f0"),":Web,Native")),Object(r.b)("p",null,"\u5f53\u7528\u6237\u5728\u89e6\u6478\u8bbe\u5907\u4e0a\u4e0e\u5f00\u59cb\u89e6\u6478\u7684\u4e0d\u540c DisplayObject \u5b9e\u4f8b\u4e0a\u62ac\u8d77\u63a5\u89e6\u70b9\u65f6\u8c03\u5ea6\u3002"),Object(r.b)("h3",{id:"touch_tap"},"TOUCH_TAP"),Object(r.b)("p",null,"TOUCH_TAP : ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"global.Types#string"}),"string"),' = "touchTap"'),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"\u652f\u6301\u7248\u672c:"),"Egret 2.4"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"\u8fd0\u884c\u5e73\u53f0"),":Web,Native")),Object(r.b)("p",null,"\u5f53\u7528\u6237\u5728\u89e6\u6478\u8bbe\u5907\u4e0a\u4e0e\u5f00\u59cb\u89e6\u6478\u7684\u540c\u4e00 DisplayObject \u5b9e\u4f8b\u4e0a\u62ac\u8d77\u63a5\u89e6\u70b9\u65f6\u8c03\u5ea6\u3002"),Object(r.b)("h3",{id:"localx"},"localX"),Object(r.b)("p",null,"localX : ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"global.Types#number"}),"number")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"\u652f\u6301\u7248\u672c:"),"Egret 2.4"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"\u8fd0\u884c\u5e73\u53f0"),":Web,Native")),Object(r.b)("p",null,"\u4e8b\u4ef6\u53d1\u751f\u70b9\u76f8\u5bf9\u4e8e\u6240\u5c5e\u663e\u793a\u5bf9\u8c61\u7684\u6c34\u5e73\u5750\u6807\u3002"),Object(r.b)("h3",{id:"localy"},"localY"),Object(r.b)("p",null,"localY : ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"global.Types#number"}),"number")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"\u652f\u6301\u7248\u672c:"),"Egret 2.4"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"\u8fd0\u884c\u5e73\u53f0"),":Web,Native")),Object(r.b)("p",null,"\u4e8b\u4ef6\u53d1\u751f\u70b9\u76f8\u5bf9\u4e8e\u6240\u5c5e\u663e\u793a\u5bf9\u8c61\u7684\u5782\u76f4\u5750\u6807\u3002"),Object(r.b)("h3",{id:"stagex"},"stageX"),Object(r.b)("p",null,"stageX : ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"global.Types#number"}),"number")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"\u652f\u6301\u7248\u672c:"),"Egret 2.4"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"\u8fd0\u884c\u5e73\u53f0"),":Web,Native")),Object(r.b)("p",null,"\u4e8b\u4ef6\u53d1\u751f\u70b9\u5728\u5168\u5c40\u821e\u53f0\u5750\u6807\u4e2d\u7684\u6c34\u5e73\u5750\u6807\u3002"),Object(r.b)("h3",{id:"stagey"},"stageY"),Object(r.b)("p",null,"stageY : ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"global.Types#number"}),"number")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"\u652f\u6301\u7248\u672c:"),"Egret 2.4"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"\u8fd0\u884c\u5e73\u53f0"),":Web,Native")),Object(r.b)("p",null,"\u4e8b\u4ef6\u53d1\u751f\u70b9\u5728\u5168\u5c40\u821e\u53f0\u5750\u6807\u4e2d\u7684\u5782\u76f4\u5750\u6807\u3002"),Object(r.b)("h3",{id:"touchdown"},"touchDown"),Object(r.b)("p",null,"touchDown : ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"global.Types#boolean"}),"boolean")," = false"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"\u652f\u6301\u7248\u672c:"),"Egret 2.4"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"\u8fd0\u884c\u5e73\u53f0"),":Web,Native")),Object(r.b)("p",null,"\u8868\u793a\u89e6\u6478\u5df2\u6309\u4e0b (true) \u8fd8\u662f\u672a\u6309\u4e0b (false)\u3002"),Object(r.b)("h3",{id:"touchpointid"},"touchPointID"),Object(r.b)("p",null,"touchPointID : ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"global.Types#number"}),"number")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"\u652f\u6301\u7248\u672c:"),"Egret 2.4"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"\u8fd0\u884c\u5e73\u53f0"),":Web,Native")),Object(r.b)("p",null,"\u5206\u914d\u7ed9\u89e6\u6478\u70b9\u7684\u552f\u4e00\u6807\u8bc6\u53f7"),Object(r.b)("h2",{id:"\u65b9\u6cd5\u8be6\u7ec6\u4fe1\u606f"},"\u65b9\u6cd5\u8be6\u7ec6\u4fe1\u606f"),Object(r.b)("h3",{id:"touchevent"},"TouchEvent()"),Object(r.b)("p",null,"public TouchEvent(type:",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"global.Types#string"}),"string"),",bubbles:",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"global.Types#boolean"}),"boolean"),",cancelable:",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"global.Types#boolean"}),"boolean"),",stageX:",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"global.Types#number"}),"number"),",stageY:",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"global.Types#number"}),"number"),",touchPointID:",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"global.Types#number"}),"number"),")"),Object(r.b)("p",null,"\u521b\u5efa\u4e00\u4e2a TouchEvent \u5bf9\u8c61\uff0c\u5176\u4e2d\u5305\u542b\u6709\u5173Touch\u4e8b\u4ef6\u7684\u4fe1\u606f"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"\u652f\u6301\u7248\u672c:"),"Egret 2.4"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"\u8fd0\u884c\u5e73\u53f0"),":Web,Native"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"\u53c2\u6570"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"type:",Object(r.b)("a",Object(b.a)({parentName:"li"},{href:"global.Types#string"}),"string")," - \u4e8b\u4ef6\u7684\u7c7b\u578b\uff0c\u53ef\u4ee5\u4f5c\u4e3a Event.type \u8bbf\u95ee\u3002"),Object(r.b)("li",{parentName:"ul"},"bubbles:",Object(r.b)("a",Object(b.a)({parentName:"li"},{href:"global.Types#boolean"}),"boolean")," - \u786e\u5b9a Event \u5bf9\u8c61\u662f\u5426\u53c2\u4e0e\u4e8b\u4ef6\u6d41\u7684\u5192\u6ce1\u9636\u6bb5\u3002\u9ed8\u8ba4\u503c\u4e3a false\u3002"),Object(r.b)("li",{parentName:"ul"},"cancelable:",Object(r.b)("a",Object(b.a)({parentName:"li"},{href:"global.Types#boolean"}),"boolean")," - \u786e\u5b9a\u662f\u5426\u53ef\u4ee5\u53d6\u6d88 Event \u5bf9\u8c61\u3002\u9ed8\u8ba4\u503c\u4e3a false\u3002"),Object(r.b)("li",{parentName:"ul"},"stageX:",Object(r.b)("a",Object(b.a)({parentName:"li"},{href:"global.Types#number"}),"number")," - \u4e8b\u4ef6\u53d1\u751f\u70b9\u5728\u5168\u5c40\u821e\u53f0\u5750\u6807\u7cfb\u4e2d\u7684\u6c34\u5e73\u5750\u6807"),Object(r.b)("li",{parentName:"ul"},"stageY:",Object(r.b)("a",Object(b.a)({parentName:"li"},{href:"global.Types#number"}),"number")," - \u4e8b\u4ef6\u53d1\u751f\u70b9\u5728\u5168\u5c40\u821e\u53f0\u5750\u6807\u7cfb\u4e2d\u7684\u5782\u76f4\u5750\u6807"),Object(r.b)("li",{parentName:"ul"},"touchPointID:",Object(r.b)("a",Object(b.a)({parentName:"li"},{href:"global.Types#number"}),"number")," - \u5206\u914d\u7ed9\u89e6\u6478\u70b9\u7684\u552f\u4e00\u6807\u8bc6\u53f7")))),Object(r.b)("h3",{id:"dispatchtouchevent"},"dispatchTouchEvent()"),Object(r.b)("p",null,"public dispatchTouchEvent(target:",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://docs.egret.com/engine/docs/api/engine/egret.IEventDispatcher"}),"egret.IEventDispatcher"),",type:",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"global.Types#string"}),"string"),",bubbles:",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"global.Types#boolean"}),"boolean"),",cancelable:",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"global.Types#boolean"}),"boolean"),",stageX:",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"global.Types#number"}),"number"),",stageY:",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"global.Types#number"}),"number"),",touchPointID:",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"global.Types#number"}),"number"),",touchDown:",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"global.Types#boolean"}),"boolean"),"):",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"global.Types#boolean"}),"boolean")),Object(r.b)("p",null,"\u4f7f\u7528\u6307\u5b9a\u7684EventDispatcher\u5bf9\u8c61\u6765\u629b\u51faEvent\u4e8b\u4ef6\u5bf9\u8c61\u3002\u629b\u51fa\u7684\u5bf9\u8c61\u5c06\u4f1a\u7f13\u5b58\u5728\u5bf9\u8c61\u6c60\u4e0a\uff0c\u4f9b\u4e0b\u6b21\u5faa\u73af\u590d\u7528\u3002"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"\u652f\u6301\u7248\u672c:"),"Egret 2.4"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"\u8fd0\u884c\u5e73\u53f0"),":Web,Native"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"\u53c2\u6570"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"target:",Object(r.b)("a",Object(b.a)({parentName:"li"},{href:"https://docs.egret.com/engine/docs/api/engine/egret.IEventDispatcher"}),"egret.IEventDispatcher")," - \u6d3e\u53d1\u4e8b\u4ef6\u76ee\u6807"),Object(r.b)("li",{parentName:"ul"},"type:",Object(r.b)("a",Object(b.a)({parentName:"li"},{href:"global.Types#string"}),"string")," - \u4e8b\u4ef6\u7684\u7c7b\u578b\uff0c\u53ef\u4ee5\u4f5c\u4e3a Event.type \u8bbf\u95ee\u3002"),Object(r.b)("li",{parentName:"ul"},"bubbles:",Object(r.b)("a",Object(b.a)({parentName:"li"},{href:"global.Types#boolean"}),"boolean")," - \u786e\u5b9a Event \u5bf9\u8c61\u662f\u5426\u53c2\u4e0e\u4e8b\u4ef6\u6d41\u7684\u5192\u6ce1\u9636\u6bb5\u3002\u9ed8\u8ba4\u503c\u4e3a false\u3002"),Object(r.b)("li",{parentName:"ul"},"cancelable:",Object(r.b)("a",Object(b.a)({parentName:"li"},{href:"global.Types#boolean"}),"boolean")," - \u786e\u5b9a\u662f\u5426\u53ef\u4ee5\u53d6\u6d88 Event \u5bf9\u8c61\u3002\u9ed8\u8ba4\u503c\u4e3a false\u3002"),Object(r.b)("li",{parentName:"ul"},"stageX:",Object(r.b)("a",Object(b.a)({parentName:"li"},{href:"global.Types#number"}),"number")," - \u4e8b\u4ef6\u53d1\u751f\u70b9\u5728\u5168\u5c40\u821e\u53f0\u5750\u6807\u7cfb\u4e2d\u7684\u6c34\u5e73\u5750\u6807"),Object(r.b)("li",{parentName:"ul"},"stageY:",Object(r.b)("a",Object(b.a)({parentName:"li"},{href:"global.Types#number"}),"number")," - \u4e8b\u4ef6\u53d1\u751f\u70b9\u5728\u5168\u5c40\u821e\u53f0\u5750\u6807\u7cfb\u4e2d\u7684\u5782\u76f4\u5750\u6807"),Object(r.b)("li",{parentName:"ul"},"touchPointID:",Object(r.b)("a",Object(b.a)({parentName:"li"},{href:"global.Types#number"}),"number")," - \u5206\u914d\u7ed9\u89e6\u6478\u70b9\u7684\u552f\u4e00\u6807\u8bc6\u53f7"),Object(r.b)("li",{parentName:"ul"},"touchDown:",Object(r.b)("a",Object(b.a)({parentName:"li"},{href:"global.Types#boolean"}),"boolean"))))),Object(r.b)("h3",{id:"updateafterevent"},"updateAfterEvent()"),Object(r.b)("p",null,"public updateAfterEvent():",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"global.Types#void"}),"void")),Object(r.b)("p",null,"\u5982\u679c\u5df2\u4fee\u6539\u663e\u793a\u5217\u8868\uff0c\u8c03\u7528\u6b64\u65b9\u6cd5\u5c06\u4f1a\u5ffd\u7565\u5e27\u9891\u9650\u5236\uff0c\u5728\u6b64\u4e8b\u4ef6\u5904\u7406\u5b8c\u6210\u540e\u7acb\u5373\u91cd\u7ed8\u5c4f\u5e55\u3002"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"\u652f\u6301\u7248\u672c:"),"Egret 2.4"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"\u8fd0\u884c\u5e73\u53f0"),":Web,Native")),Object(r.b)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),Object(r.b)("pre",null,Object(r.b)("code",Object(b.a)({parentName:"pre"},{className:"language-javascript"}),'/**\n * \u4ee5\u4e0b\u793a\u4f8b\u6f14\u793a\u4e86\u4e8b\u4ef6\u7684\u6355\u83b7\u5192\u6ce1\u3002\n */\nclass TouchEventExample extends egret.DisplayObjectContainer {\n    public constructor() {\n        super();\n        this.touchEventDemo();\n        this.touchCancelDemo();\n    }\n    private touchEventDemo() {\n        const container = new egret.Sprite();\n        this.addChild(container);\n        container.rotation = 45;\n        const left: egret.Shape = new egret.Shape();\n        left.graphics.beginFill(0xff0000);\n        left.graphics.drawRect(0, 0, 100, 100);\n        left.graphics.endFill();\n        left.x = 100;\n        container.addChild(left);\n        left.touchEnabled = true;\n        left.addEventListener(egret.TouchEvent.TOUCH_TAP, function (event) {\n            egret.log("\u70b9\u51fb\u5de6\u4fa7\u65b9\u5757\uff0ceventPhase\uff1a" + event.eventPhase);\n        }, left);\n        const right: egret.Shape = new egret.Shape();\n        right.graphics.beginFill(0x00ff00);\n        right.graphics.drawRect(0, 0, 100, 100);\n        right.graphics.endFill();\n        right.x = 145;\n        right.y = -40;\n        container.addChild(right);\n        right.touchEnabled = true;\n        right.addEventListener(egret.TouchEvent.TOUCH_TAP, function (event) {\n            egret.log("\u70b9\u51fb\u53f3\u4fa7\u65b9\u5757\uff0ceventPhase\uff1a" + event.eventPhase);\n        }, right);\n        container.touchEnabled = true;\n        container.addEventListener(egret.TouchEvent.TOUCH_TAP, function (event) {\n            egret.log("\u5bb9\u5668\u5192\u6ce1\u4fa6\u542c\uff0ceventPhase\uff1a" + event.eventPhase);\n        }, this);\n        container.addEventListener(egret.TouchEvent.TOUCH_TAP, function (event) {\n            egret.log("\u5bb9\u5668\u6355\u83b7\u4fa6\u542c\uff0ceventPhase\uff1a" + event.eventPhase);\n        }, this, true);\n    }\n    private touchCancelDemo() {\n        const scroller = new eui.Scroller();\n        scroller.x = 250;\n        const list = new eui.List();\n        const ac = new eui.ArrayCollection([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);\n        list.dataProvider = ac;\n        list.itemRendererSkinName = `\n        <e:Skin states="up,down,disabled" minHeight="50" minWidth="100" xmlns:e="http://ns.egret.com/eui">\n                <e:Image width="100%" height="100%" scale9Grid="1,3,8,8" alpha.disabled="0.5"\n                         source="resource/button_up.png"\n                         source.down="resource/button_down.png"/>\n                <e:Label text="{data}" top="8" bottom="8" left="8" right="8"\n                         textColor="0xFFFFFF" verticalAlign="middle" textAlign="center"/>\n            </e:Skin>`;\n        scroller.viewport = list;\n        scroller.height = 200;\n        this.addChild(scroller);\n        scroller.addEventListener(egret.TouchEvent.TOUCH_BEGIN, () => { egret.log("111 Scroller Begin"); }, this);\n        list.addEventListener(egret.TouchEvent.TOUCH_BEGIN, () => { egret.log("111 List Begin"); }, this);\n        scroller.addEventListener(egret.TouchEvent.TOUCH_END, () => { egret.log("222 Scroller END"); }, this);\n        list.addEventListener(egret.TouchEvent.TOUCH_END, () => { egret.log("222 List END"); }, this);\n        scroller.addEventListener(egret.TouchEvent.TOUCH_TAP, () => { egret.log("33 Scroller Tap"); }, this);\n        list.addEventListener(egret.TouchEvent.TOUCH_TAP, () => { egret.log("33 List Tap"); }, this);\n        //scroller \u6eda\u52a8\u540e\u4f1a\u89e6\u53d1 touchCancel \u4e8b\u4ef6\n        //dispatch touchcancel event after scroller move\n        scroller.addEventListener(egret.TouchEvent.TOUCH_CANCEL, () => { egret.log("44 Scroller cancel"); }, this);\n        list.addEventListener(egret.TouchEvent.TOUCH_CANCEL, () => { egret.log("44 List cancel"); }, this);\n    }\n}\n\n')))}O.isMDXComponent=!0},520:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return g}));var b=a(0),n=a.n(b);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);t&&(b=b.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,b)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,b,n=function(e,t){if(null==e)return{};var a,b,n={},r=Object.keys(e);for(b=0;b<r.length;b++)a=r[b],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(b=0;b<r.length;b++)a=r[b],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=n.a.createContext({}),p=function(e){var t=n.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},O=function(e){var t=p(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},u="mdxType",j={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},s=Object(b.forwardRef)((function(e,t){var a=e.components,b=e.mdxType,r=e.originalType,l=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),O=p(a),u=b,s=O["".concat(l,".").concat(u)]||O[u]||j[u]||r;return a?n.a.createElement(s,c({ref:t},i,{components:a})):n.a.createElement(s,c({ref:t},i))}));function g(e,t){var a=arguments,b=t&&t.mdxType;if("string"==typeof e||b){var r=a.length,l=new Array(r);l[0]=s;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[u]="string"==typeof e?e:b,l[1]=c;for(var i=2;i<r;i++)l[i]=a[i];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);