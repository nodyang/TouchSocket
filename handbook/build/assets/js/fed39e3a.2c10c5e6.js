"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[4606],{3905:(t,e,n)=>{n.d(e,{Zo:()=>i,kt:()=>k});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=a.createContext({}),u=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},i=function(t){var e=u(t.components);return a.createElement(c.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,c=t.parentName,i=o(t,["components","mdxType","originalType","parentName"]),d=u(n),k=r,E=d["".concat(c,".").concat(k)]||d[k]||m[k]||l;return n?a.createElement(E,p(p({ref:e},i),{},{components:n})):a.createElement(E,p({ref:e},i))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,p=new Array(l);p[0]=d;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o.mdxType="string"==typeof t?t:r,p[1]=o;for(var u=2;u<l;u++)p[u]=n[u];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5245:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const l={id:"touchrpcdescription",sidebar_position:1,title:"\u4ea7\u54c1\u53ca\u67b6\u6784\u4ecb\u7ecd",sidebar_label:"11.1 \u4ea7\u54c1\u53ca\u67b6\u6784\u4ecb\u7ecd"},p=void 0,o={unversionedId:"11\u3001TouchRpc\u7ec4\u4ef6/touchrpcdescription",id:"11\u3001TouchRpc\u7ec4\u4ef6/touchrpcdescription",title:"\u4ea7\u54c1\u53ca\u67b6\u6784\u4ecb\u7ecd",description:"\u4e00\u3001\u8bf4\u660e",source:"@site/docs/11\u3001TouchRpc\u7ec4\u4ef6/11.1 \u4ea7\u54c1\u53ca\u67b6\u6784\u4ecb\u7ecd.mdx",sourceDirName:"11\u3001TouchRpc\u7ec4\u4ef6",slug:"/11\u3001TouchRpc\u7ec4\u4ef6/touchrpcdescription",permalink:"/touchsocket/docs/11\u3001TouchRpc\u7ec4\u4ef6/touchrpcdescription",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/docs/11\u3001TouchRpc\u7ec4\u4ef6/11.1 \u4ea7\u54c1\u53ca\u67b6\u6784\u4ecb\u7ecd.mdx",tags:[],version:"current",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1675090210,formattedLastUpdatedAt:"Jan 30, 2023",sidebarPosition:1,frontMatter:{id:"touchrpcdescription",sidebar_position:1,title:"\u4ea7\u54c1\u53ca\u67b6\u6784\u4ecb\u7ecd",sidebar_label:"11.1 \u4ea7\u54c1\u53ca\u67b6\u6784\u4ecb\u7ecd"},sidebar:"tutorialSidebar",previous:{title:"10.5 \u57fa\u4e8eWS\u7684JsonRpc",permalink:"/touchsocket/docs/10\u3001WebSocket\u7ec4\u4ef6/wsjsonrpc"},next:{title:"11.2 \u521b\u5efaTouchRpc\u670d\u52a1\u5668",permalink:"/touchsocket/docs/11\u3001TouchRpc\u7ec4\u4ef6/createtouchrpcservice"}},c={},u=[{value:"\u4e00\u3001\u8bf4\u660e",id:"\u4e00\u8bf4\u660e",level:2},{value:"\u4e8c\u3001\u7279\u70b9\uff1a",id:"\u4e8c\u7279\u70b9",level:2},{value:"\u4e09\u3001\u573a\u666f",id:"\u4e09\u573a\u666f",level:2},{value:"\u56db\u3001\u53ef\u914d\u7f6e\u9879",id:"\u56db\u53ef\u914d\u7f6e\u9879",level:2},{value:"\u4e94\u3001\u652f\u6301\u63d2\u4ef6\u63a5\u53e3\u5ba2\u6237\u7aef\u3001\u670d\u52a1\u5668\u5747\u652f\u6301",id:"\u4e94\u652f\u6301\u63d2\u4ef6\u63a5\u53e3\u5ba2\u6237\u7aef\u670d\u52a1\u5668\u5747\u652f\u6301",level:2},{value:"<strong>ITouchRpcPlugin</strong>",id:"itouchrpcplugin",level:3}],i={toc:u};function m(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},i,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4e00\u8bf4\u660e"},"\u4e00\u3001\u8bf4\u660e"),(0,r.kt)("p",null,"TouchRpc\u662f\u4e00\u4e2a\u7b80\u5355\u6613\u7528\uff0c\u4fbf\u6377\u9ad8\u6548\uff0c\u4e14\u6613\u4e8e\u6269\u5c55\u7684",(0,r.kt)("strong",{parentName:"p"},"\u81ea\u5b9a\u4e49\u6570\u636e\u683c\u5f0f"),"\u7684",(0,r.kt)("strong",{parentName:"p"},"\u53ef\u9760\u6267\u884c\u4f20\u8f93\u534f\u8bae"),"\u3002"),(0,r.kt)("p",null,"\u3010\u534f\u8bae\u683c\u5f0f\u3011"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"2\u5b57\u8282"),(0,r.kt)("th",{parentName:"tr",align:null},"n\u5b57\u8282")))),(0,r.kt)("p",null,"\u534f\u8bae\u683c\u5f0f\u975e\u5e38\u7b80\u5355\u3002\n\u524d\u4e24\u4e2a\u5b57\u8282\u4e3a\u9ed8\u8ba4\u7aef\u5e8f\u7684\u5c0f\u7aef\uff0cint16\u6709\u7b26\u53f7\u7c7b\u578b\u3002\u5176\u4e2d\u5c0f\u4e8e0\u7684\u534f\u8bae\u4e00\u822c\u4e0d\u8981\u5360\u7528\uff0c\u56e0\u4e3a\u6846\u67b6\u5728\u4f7f\u7528\u3002\n\u540e\u7eed\u5b57\u8282\u5219\u4e3a\u672c\u6b21\u534f\u8bae\u7684\u8f7d\u8377\u6570\u636e\u3002"),(0,r.kt)("p",null,"\u7ec6\u5fc3\u7684\u5c0f\u4f19\u4f34\u53ef\u80fd\u4f1a\u95ee\uff0c\u8fd9\u4e2a\u6570\u636e\u534f\u8bae\u6ca1\u6709\u5206\u5305\u6807\u8bc6\u554a\uff0c\u4e5f\u5c31\u662f\u65e0\u6cd5\u5206\u8fa8\u4e00\u4e2a\u6570\u636e\u5305\u662f\u4e0d\u662f\u5b8c\u6574\u7684\u3002\u8fd9\u662f\u56e0\u4e3aTouchRpc\u652f\u6301\u591a\u79cd\u534f\u8bae\u8fd0\u884c\uff0c\u53ef\u80fd\u5728\u4e00\u4e9b\u534f\u8bae\u4e0a\uff0c\u5c31\u5df2\u7ecf\u6db5\u76d6\u4e86\u5206\u5305\u673a\u5236\uff0c\u6240\u4ee5\u4e3a\u907f\u514d\u8fc7\u5ea6\u5c01\u88c5\uff0c\u6240\u4ee5TouchRpc\u5e76\u672a\u5236\u5b9a\u5206\u5305\u3002\u6240\u4ee5TouchRpc\u5728\u4e0d\u540c\u534f\u8bae\u5de5\u4f5c\u65f6\uff0c\u53ef\u80fd\u5b9e\u9645\u7684\u6570\u636e\u683c\u5f0f\u4e5f\u4e0d\u76f8\u540c\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982\uff1a\u5728Tcp\u5de5\u4f5c\u65f6\uff0c\u5176\u5206\u5305\u7b97\u6cd5\u4f7f\u7528\u7684\u662f",(0,r.kt)("a",{parentName:"p",href:"../08%E3%80%81%E6%95%B0%E6%8D%AE%E5%A4%84%E7%90%86%E9%80%82%E9%85%8D%E5%99%A8/8.2%20Tcp%E9%80%82%E9%85%8D%E5%99%A8/fixedheaderpackageadapter"},"\u56fa\u5b9a\u5305\u5934"),"\u3002\u5728websocket\u5de5\u4f5c\u65f6\uff0c\u4f7f\u7528\u7684\u5c31\u662f\u5176\u81ea\u8eab\u7684\u5206\u5305\u7b97\u6cd5\u3002"),(0,r.kt)("p",null,"\u53ef\u80fd\u597d\u591a\u4eba\u4f1a\u7591\u60d1\uff0cTouchRpc\u548ctcp\u3001udp\u6709\u4ec0\u4e48\u5173\u7cfb\uff1f\u6216\u8005\u8bf4\uff0c\u7c7b\u4f3ctcp\uff0c\u672c\u8eab\u5c31\u662f\u53ef\u9760\u4f20\u8f93\u534f\u8bae\u4e86\uff0c\u90a3TouchRpc\u7684\u53ef\u9760\u53c8\u4f53\u73b0\u5728\u4ec0\u4e48\u5730\u65b9\u5462\uff1f"),(0,r.kt)("p",null,"\uff081\uff09TouchRpc\u548ctcp\u3001udp\u6709\u4ec0\u4e48\u5173\u7cfb\uff1f\nTouchRpc\u50cfhttp\u548cwebsocket\u4e00\u6837\uff0c\u4e5f\u662f\u5c01\u88c5\u7684\u5e94\u7528\u5c42\u534f\u8bae\u3002\u5b83\u53ef\u4ee5\u57fa\u4e8e\u6700\u57fa\u672c\u7684tcp\u6216udp\u5de5\u4f5c\uff0c\u4e5f\u80fd\u57fa\u4e8ehttp\u548cwebsocket\u5de5\u4f5c\u3002\u6240\u4ee5\uff0c\u53ef\u4ee5\u8ba4\u4e3aTouchRpc\u662f\u66f4\u4e3a\u9ad8\u7ea7\u7684\u5e94\u7528\u5c42\u534f\u8bae\u3002"),(0,r.kt)("p",null,"\uff082\uff09tcp\u672c\u8eab\u5c31\u662f\u53ef\u9760\u4f20\u8f93\u534f\u8bae\u4e86\uff0c\u90a3TouchRpc\u7684\u53ef\u9760\u53c8\u4f53\u73b0\u5728\u4ec0\u4e48\u5730\u65b9\u5462\uff1f\n\u9996\u5148\u5462\uff0c\u6211\u4eec\u5f97\u660e\u786e\uff0ctcp\u7684\u53ef\u9760\uff0c\u662f\u5728\u4fdd\u6301\u8fde\u63a5\u7684\u65f6\u5019\uff0c\u624d\u53ef\u9760\u3002\u5f53\u7a81\u7136\u65ad\u7f51\u65f6\uff0c\u8fd9\u79cd\u53ef\u9760\u5c06\u88ab\u6253\u7834\u3002\u5176\u6b21\u8fd9\u79cd\u53ef\u9760\u662f\u5355\u9879\u7684\uff0c\u4e3e\u4f8b\u6765\u8bf4\uff0c\u53d1\u9001\u65b9\u53ea\u662f\u8d1f\u8d23\u5c06\u6570\u636e\u53d1\u7ed9\u63a5\u6536\u65b9\uff0c\u81f3\u4e8e\u63a5\u6536\u65b9\u5904\u7406\u4e86\u6ca1\u6709\uff0c\u6216\u8005\u5904\u7406\u7ed3\u679c\u5982\u4f55\uff0c\u90fd\u662f\u672a\u77e5\u7684\u3002\u90a3\u4e48\u8fd9\u65f6\u5019\u806a\u660e\u7684\u5c0f\u4f19\u4f34\u5c31\u4f1a\u60f3\u5230\u8ba9\u63a5\u6536\u65b9\u56de\u590d\u4e00\u4e2a\u72b6\u6001\u4e0d\u5c31\u884c\u4e86\uff1f\u662f\u7684\uff0c\u8fd9\u5c31\u662fTouchRpc\u5de5\u4f5c\u7684\u573a\u666f\u4e4b\u4e00\u4e86\u3002"),(0,r.kt)("p",null,"\u5f53\u7136\uff0cTouchRpc\u7684\u529f\u80fd\u8fdc\u975e\u4e0a\u8ff0\u7684\u4e24\u4e2a\u573a\u666f\uff0c\u8be6\u7ec6\u6982\u89c8\u5982\u4e0b\uff1a"),(0,r.kt)("h2",{id:"\u4e8c\u7279\u70b9"},"\u4e8c\u3001\u7279\u70b9\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"\u529f\u80fd")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"\u7279\u70b9")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u57fa\u7840\u529f\u80fd"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,"\u652f\u6301",(0,r.kt)("a",{parentName:"p",href:"7.4%20%E5%9F%BA%E7%A1%80%E5%8A%9F%E8%83%BD%5C1%E3%80%81%E5%9F%BA%E7%A1%80%E5%8A%9F%E8%83%BD.md"},"\u8fde\u63a5\u9a8c\u8bc1"),"\uff0c\u4e5f\u652f\u6301\u52a8\u6001\u4fe1\u606f\u9a8c\u8bc1\u3002\n\u652f\u6301",(0,r.kt)("a",{parentName:"p",href:"7.4%20%E5%9F%BA%E7%A1%80%E5%8A%9F%E8%83%BD%5C1%E3%80%81%E5%9F%BA%E7%A1%80%E5%8A%9F%E8%83%BD.md"},"ID\u540c\u6b65"),"\uff0c\u6bcf\u4e2a\u5ba2\u6237\u7aef\u8fde\u63a5\u5230\u670d\u52a1\u5668\u540e\uff0c\u81ea\u8eabID\u4f1a\u4e0e\u670d\u52a1\u5668ID\u540c\u6b65\uff0c\u4e14\u652f\u6301\u91cd\u7f6e\u3002\n\u652f\u6301ssl\u52a0\u5bc6\u3002\n\u652f\u6301",(0,r.kt)("a",{parentName:"p",href:"7.4%20%E5%9F%BA%E7%A1%80%E5%8A%9F%E8%83%BD%5C2%E3%80%81%E5%8D%8F%E8%AE%AE%E6%89%A9%E5%B1%95.md"},"\u534f\u8bae\u6269\u5c55"),"\u3002|\n| RPC\u529f\u80fd |\n\u652f\u6301\u5e38\u89c4",(0,r.kt)("a",{parentName:"p",href:"7.5%20Rpc%E5%8A%9F%E8%83%BD%5C1%E3%80%81%E5%88%9B%E5%BB%BArpc%E6%9C%8D%E5%8A%A1.md"},"rpc"),"\u64cd\u4f5c\u3002\n\u652f\u6301\u4ee3\u7406\u4ee3\u7801\u751f\u6210\u3002\n\u652f\u6301\u81ea\u5b9a\u4e49\u7c7b\u578b\u7684\u53c2\u6570\u3002\n\u652f\u6301out\u3001ref\u5173\u952e\u5b57\u53c2\u6570\u3002\n\u652f\u6301\u670d\u52a1\u5668",(0,r.kt)("a",{parentName:"p",href:"7.5%20Rpc%E5%8A%9F%E8%83%BD%5C3%E3%80%81%E5%8F%8D%E5%90%91rpc%EF%BC%88%E6%9C%8D%E5%8A%A1%E5%99%A8%E4%B8%BB%E5%8A%A8Call%E5%AE%A2%E6%88%B7%E7%AB%AF%EF%BC%89.md"},"\u4e3b\u52a8Call\u5ba2\u6237\u7aef"),"\uff0c\u548c",(0,r.kt)("a",{parentName:"p",href:"7.5%20Rpc%E5%8A%9F%E8%83%BD%5C4%E3%80%81%E5%AE%A2%E6%88%B7%E7%AB%AF%E7%9B%B8%E4%BA%92%E8%B0%83%E7%94%A8rpc.md"},"\u5ba2\u6237\u7aef\u4e4b\u95f4\u4e92Call"),"\u3002\n\u652f\u6301\u8c03\u7528\u4e0a\u4e0b\u6587\uff0c\u53ef\u8fdb\u884c\u670d\u52a1AOP\u3002\n\u652f\u6301\u5f02\u6b65\u8c03\u7528\u3002\n\u652f\u6301\u8c03\u7528\u8d85\u65f6\u3001\u8c03\u7528\u4e2d\u65ad\u3002\n\u652f\u6301\u5168\u5f02\u5e38\u53cd\u9988\uff0c\u88ab\u8c03\u7528\u65b9\u53d1\u751f\u7684\u4e00\u5207\u5f02\u5e38\uff0c\u90fd\u4f1a\u4f20\u9012\u5230\u8c03\u7528\u65b9\u3002\n\u652f\u6301.NET\u4e8c\u8fdb\u5236\u5e8f\u5217\u5316\u3001Json\u5e8f\u5217\u5316\u3001xml\u5e8f\u5217\u5316\u3001Fast\u5e8f\u5217\u5316\uff0c\u4ee5\u53ca\u81ea\u5b9a\u4e49\u5e8f\u5217\u5316\u6269\u5c55\u3002\n\u9ad8\u6027\u80fd\u8c03\u7528\uff0c\u5728\u4fdd\u8bc1\u9001\u8fbe\u4f46\u4e0d\u8fd4\u56de\u7684\u60c5\u51b5\u4e0b\uff0c10w\u6b21\u8c03\u7528\u7528\u65f60.8s\uff0c\u5728\u8fd4\u56de\u7684\u60c5\u51b5\u4e0b\uff0c\u7528\u65f63.9s\u3002|\n| \u6587\u4ef6\u4f20\u8f93 |\n\u652f\u6301\u4efb\u610f\u5927\u5c0f\u7684",(0,r.kt)("a",{parentName:"p",href:"7.6%20%E6%96%87%E4%BB%B6%E4%BC%A0%E8%BE%93%5C2%E3%80%81%E4%BC%A0%E8%BE%93%E6%96%87%E4%BB%B6.md"},"\u6587\u4ef6\u4f20\u8f93"),"\u3002\n\u652f\u6301\u65ad\u70b9\u7eed\u4f20\u3002\n\u652f\u6301\u4f20\u8f93\u9650\u901f\u3002\n\u652f\u6301\u670d\u52a1\u5668\u4e3b\u52a8\u5411\u5ba2\u6237\u7aef\u8bf7\u6c42\u3001\u53d1\u9001\u6587\u4ef6\u3002\n\u652f\u6301\u5ba2\u6237\u7aef\u4e4b\u95f4\u4e92\u76f8\u8bf7\u6c42\u3001\u53d1\u9001\u6587\u4ef6\u3002\n\u652f\u6301",(0,r.kt)("a",{parentName:"p",href:"7.6%20%E6%96%87%E4%BB%B6%E4%BC%A0%E8%BE%93%5C3%E3%80%81%E5%B0%8F%E6%96%87%E4%BB%B6%E4%BC%A0%E8%BE%93.md"},"\u5c0f\u6587\u4ef6\u5feb\u901f\u4f20\u8f93"),"\u3002\n\u652f\u6301\u8d85\u5927\u6587\u4ef6\u591a\u94fe\u8def\u3001",(0,r.kt)("a",{parentName:"p",href:"7.6%20%E6%96%87%E4%BB%B6%E4%BC%A0%E8%BE%93%5C4%E3%80%81%E5%A4%9A%E7%BA%BF%E7%A8%8B%E6%96%87%E4%BB%B6%E4%BC%A0%E8%BE%93.md"},"\u591a\u7ebf\u7a0b\u4f20\u8f93"),"\u3002|\n| \u8fdc\u7a0b\u64cd\u4f5c |\n\u652f\u6301",(0,r.kt)("a",{parentName:"p",href:"7.7%20%E8%BF%9C%E7%A8%8B%E6%96%87%E4%BB%B6%E6%93%8D%E4%BD%9C.md"},"\u521b\u5efa\u6587\u4ef6\u5939"),"\u3002\n\u652f\u6301\u6587\u4ef6\u7684\u5220\u9664\u3001\u79fb\u52a8\u3001\u91cd\u547d\u540d\u7b49\u64cd\u4f5c\u3002\n\u652f\u6301\u670d\u52a1\u5668\u5bf9\u5ba2\u6237\u7aef\u7684\u4e3b\u52a8\u64cd\u4f5c\u3002\n\u652f\u6301\u5ba2\u6237\u7aef\u4e4b\u95f4\u7684\u64cd\u4f5c\u3002|\n| \u6d41\u6570\u636e\u65b9\u9762 |\n\u652f\u6301\u53d1\u9001",(0,r.kt)("a",{parentName:"p",href:"7.8%20%E6%B5%81%E6%95%B0%E6%8D%AE%E4%BC%A0%E8%BE%93%5C1%E3%80%81Stream%E4%BC%A0%E8%BE%93.md"},"\u4efb\u610f\u7c7b\u578b\u7684Stream"),"\u3002\n\u652f\u6301\u5c06\u8fdc\u7a0b\u7684\u6d41\u6570\u636e\u6620\u5c04\u5230\u672c\u5730\uff0c\u7136\u540e\u76f4\u63a5Read\u6216Write\u3002\n\u652f\u6301\u5b9e\u65bd\u4f20\u8f93\u538b\u7f29\u3002| Channel\u6570\u636e |\n\u652f\u6301\u72ec\u7acb\u901a\u9053\u6570\u636e\uff0c\u53ef\u8fdb\u884c\u6570\u636e\u9694\u79bb\u3002\n\u652f\u6301\u670d\u52a1\u5668\u5230\u5ba2\u6237\u7aef\uff0c\u5ba2\u6237\u7aef\u5230\u5ba2\u6237\u7aef\u7684\u64cd\u4f5c\u3002|\n| EventBus |\n\u652f\u6301\u4e8b\u4ef6\u7684",(0,r.kt)("a",{parentName:"p",href:"7.9%20EventBus.md"},"\u521b\u5efa\u3001\u8ba2\u9605\u3001\u53d6\u6d88\u3001\u89e6\u53d1"),"\u7b49\u3002\n\u652f\u6301\u89e6\u53d1\u6743\u9650\u3002\n\u652f\u6301\u4e8b\u4ef6\u5e7f\u64ad\u3002|\n| Redis |\n\u652f\u6301string\u4e3a\u952e\u7684\u4efb\u610f\u7c7b\u578b\u7684\u6570\u636e\u3002\n\u652f\u6301\u670d\u52a1\u5668\u5411\u5ba2\u6237\u7aef\u5b58\u50a8\u3002\n\u652f\u6301\u5b58\u50a8\u6301\u4e45\u5316\u3002|"),(0,r.kt)("h2",{id:"\u4e09\u573a\u666f"},"\u4e09\u3001\u573a\u666f"),(0,r.kt)("p",null,"\u4ec0\u4e48\u60c5\u51b5\u4e0b\u4f7f\u7528TouchRpc\u6bd4\u8f83\u597d\u5462\uff1f\u9996\u5148\uff0c\u4f60\u5f97\u5148\u4e86\u89e3RPC\uff0c\u4e86\u89e3\u5b8c\u540e\uff0c\u56e0\u4e3aTouchRpc\u65e0\u6cd5\u8de8\u8bed\u8a00\uff0c\u6240\u4ee5\uff0c\u5efa\u8bae\u4ee5\u4e0b\u573a\u666f\u4f7f\u7528TouchRpc\u6bd4\u8f83\u7a33\u59a5\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4e0d\u9700\u8981\u8de8\u8bed\u8a00\u7684\u7ec8\u7aef\uff0c\u4f8b\u5982\uff1aUnity\u6e38\u620f\uff0cWinform\u3001WPF\u3001MAUI\u7b49\u8f6f\u4ef6\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u670d\u52a1\u5668\u4e4b\u95f4\u96c6\u7fa4\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u6269\u5c55\u5fae\u670d\u52a1\uff0c\u6b64\u65f6\u53ef\u4ee5\u4f7f\u7528\u53cd\u5411RPC\u5b9e\u73b0\u3002")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"\u5b9e\u9645\u4e0aTouchRpc\u6709\u56db\u4e2a\u7248\u672c\uff0c\u5206\u522b\u4e3a\uff1a")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"\u7c7b\u578b")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"\u7279\u6027")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Tcp\u7248")),(0,r.kt)("td",{parentName:"tr",align:null},"\u57fa\u4e8eTCP\u534f\u8bae\uff0c\u8fde\u63a5\u6027\u80fd\u6700\u597d\uff0c\u6267\u884c\u6548\u7387\u6700\u9ad8\uff0c\u652f\u6301TouchRpc\u6240\u6709\u529f\u80fd\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Udp\u7248")),(0,r.kt)("td",{parentName:"tr",align:null},"\u57fa\u4e8eUDP Package\u534f\u8bae\uff0c\u65e0\u8fde\u63a5\uff0c\u6267\u884c\u6548\u7387\u9ad8\uff0c\u4ec5\u652f\u6301TouchRpc\u7684Rpc\u529f\u80fd\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Http\u7248")),(0,r.kt)("td",{parentName:"tr",align:null},"\u57fa\u4e8eHttp\u63e1\u624b\u8fde\u63a5\uff0c\u6570\u636e\u4ea4\u4e92\u4ecd\u7136\u4f7f\u7528TCP\u3002\u8fde\u63a5\u6027\u80fd\u4e00\u822c\uff0c\u4f46\u517c\u5bb9\u6027\u5f3a\uff0c\u652f\u6301JsonRpc\uff0cWebApi\uff0cXmlRpc\uff0cWebSocket\u7b49\u4e00\u7cfb\u5217Http\u7ec4\u4ef6\uff0c\u4e14\u6267\u884c\u6548\u7387\u548cTCP\u7248\u4e00\u6837\u9ad8\uff0c\u652f\u6301TouchRpc\u6240\u6709\u529f\u80fd\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"WebSocket\u7248")),(0,r.kt)("td",{parentName:"tr",align:null},"\u8be5\u7248\u672c\u662f\u4ec5\u9002\u7528\u4e8eAsp.Net Core\u7684\u7248\u672c\uff0c\u7279\u70b9\u5c31\u662f\u548cAsp.Net Core\u5171\u7528\u7aef\u53e3\u3002\u4f46\u662f\u6267\u884c\u6570\u636e\u4f7f\u7528\u7684\u662fWebSocket\uff0c\u6240\u6709\u6548\u7387\u53ea\u6709Tcp\u7248\u768480%\u3002\u652f\u6301TouchRpc\u6240\u6709\u529f\u80fd")))),(0,r.kt)("h2",{id:"\u56db\u53ef\u914d\u7f6e\u9879"},"\u56db\u3001\u53ef\u914d\u7f6e\u9879"),(0,r.kt)("p",null,"\u7ee7\u627f\u57fa\u7c7b\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"\u5c5e\u6027\u540d")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"\u5c5e\u6027\u63cf\u8ff0")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SetVerifyTimeout"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u9a8c\u8bc1\u8d85\u65f6\u65f6\u95f4\uff0c\u9ed8\u8ba43000ms\u3002\uff08\u4ec5TcpTouchRpc\u53ef\u7528\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SetVerifyToken"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u9a8c\u8bc1\u53e3\u4ee4\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SetHeartbeatFrequency"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u5fc3\u8df3\u3002\u9ed8\u8ba4\u4e3a\u95f4\u96942000ms\uff0c\u8fde\u7eed3\u6b21\u65e0\u54cd\u5e94\u5373\u89c6\u4e3a\u65ad\u5f00\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SetSerializationSelector"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u5e8f\u5217\u5316\u9009\u62e9\u5668\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SetResponseType"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u5141\u8bb8\u7684\u54cd\u5e94\u7c7b\u578b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SetRootPath"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u6839\u8def\u5f84")))),(0,r.kt)("h2",{id:"\u4e94\u652f\u6301\u63d2\u4ef6\u63a5\u53e3\u5ba2\u6237\u7aef\u670d\u52a1\u5668\u5747\u652f\u6301"},"\u4e94\u3001\u652f\u6301\u63d2\u4ef6\u63a5\u53e3\u5ba2\u6237\u7aef\u3001\u670d\u52a1\u5668\u5747\u652f\u6301"),(0,r.kt)("p",null,"\u58f0\u660e\u81ea\u5b9a\u4e49\u5b9e\u4f8b\u7c7b\uff0c\u7136\u540e\u5b9e\u73b0",(0,r.kt)("strong",{parentName:"p"},"ITouchRpcPlugin"),"\u63a5\u53e3\uff0c\u5373\u53ef\u5b9e\u73b0\u4e0b\u5217\u4e8b\u52a1\u7684\u89e6\u53d1\u3002\n\u6216\u8005\u7ee7\u627f\u81ea",(0,r.kt)("strong",{parentName:"p"},"TouchRpcPluginBase"),"\u7c7b\uff0c\u91cd\u5199\u76f8\u5e94\u65b9\u6cd5\u5373\u53ef\u3002"),(0,r.kt)("h3",{id:"itouchrpcplugin"},(0,r.kt)("strong",{parentName:"h3"},"ITouchRpcPlugin")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OnHandshaking"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5ba2\u6237\u7aef\u5728\u9a8c\u8bc1\u8fde\u63a5\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6846\u67b6\u4f1a\u9996\u5148\u9a8c\u8bc1\u8fde\u63a5Token\u662f\u5426\u6b63\u786e\uff0c\u5982\u679c\u4e0d\u6b63\u786e\u5219\u76f4\u63a5\u62d2\u7edd\u3002\u4e0d\u4f1a\u6709\u4efb\u4f55\u6295\u9012\u3002\u7528\u6237\u4e5f\u53ef\u4ee5\u4f7f\u7528Metadata\u8fdb\u884c\u52a8\u6001\u9a8c\u8bc1\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OnHandshaked"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5ba2\u6237\u7aef\u5b8c\u6210\u8fde\u63a5\u9a8c\u8bc1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OnFileTransfering"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5728\u6587\u4ef6\u4f20\u8f93\u5373\u5c06\u8fdb\u884c\u65f6\u89e6\u53d1\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OnFileTransfered"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u6587\u4ef6\u4f20\u8f93\u7ed3\u675f\u4e4b\u540e\u3002\u5e76\u4e0d\u610f\u5473\u7740\u5b8c\u6210\u4f20\u8f93\uff0c\u8bf7\u901a\u8fc7e.Result\u5c5e\u6027\u503c\u8fdb\u884c\u5224\u65ad\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OnLoadingStream"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5728\u8fdc\u7a0b\u8bf7\u6c42\u52a0\u8f7d\u6d41\u65f6\u89e6\u53d1\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OnReceivedProtocolData"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6536\u5230\u534f\u8bae\u6570\u636e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OnRemoteAccessing"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5728\u8fdc\u7a0b\u64cd\u4f5c\u8bbf\u95ee\u4e4b\u524d\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OnRemoteAccessed"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5728\u8fdc\u7a0b\u64cd\u4f5c\u8bbf\u95ee\u4e4b\u540e\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OnRouting"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u9700\u8981\u8f6c\u53d1\u8def\u7531\u5305\u65f6\u3002\u4e00\u822c\u6240\u6709\u7684",(0,r.kt)("strong",{parentName:"td"},"\u5ba2\u6237\u7aef\u4e4b\u95f4"),"\u7684\u6570\u636e\u4f20\u8f93\uff0c\u90fd\u9700\u8981\u7ecf\u8fc7\u8be5\u51fd\u6570\u7684\u8fd0\u884c\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OnStreamTransfering"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5373\u5c06\u63a5\u6536\u6d41\u6570\u636e\uff0c\u7528\u6237\u9700\u8981\u5728\u6b64\u4e8b\u4ef6\u4e2d\u5bf9e.Bucket\u521d\u59cb\u5316\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OnStreamTransfered"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6d41\u6570\u636e\u5904\u7406\uff0c\u7528\u6237\u9700\u8981\u5728\u6b64\u4e8b\u4ef6\u4e2d\u5bf9e.Bucket\u624b\u52a8\u91ca\u653e\u3002 \u5f53\u6d41\u6570\u636e\u4f20\u8f93\u7ed3\u675f\u4e4b\u540e\u3002\u5e76\u4e0d\u610f\u5473\u7740\u5b8c\u6210\u4f20\u8f93\uff0c\u8bf7\u901a\u8fc7e.Result\u5c5e\u6027\u503c\u8fdb\u884c\u5224\u65ad\u3002")))))}m.isMDXComponent=!0}}]);