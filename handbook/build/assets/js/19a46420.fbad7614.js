"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[5725],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),k=i(r),d=a,m=k["".concat(c,".").concat(d)]||k[d]||s[d]||l;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=k;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var i=2;i<l;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},598:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var n=r(7462),a=(r(7294),r(3905));const l={id:"generateproxy",title:"\u751f\u6210\u3001\u83b7\u53d6\u4ee3\u7406"},o=void 0,p={unversionedId:"generateproxy",id:"generateproxy",title:"\u751f\u6210\u3001\u83b7\u53d6\u4ee3\u7406",description:"\u4e00\u3001\u8bf4\u660e",source:"@site/docs/generateproxy.mdx",sourceDirName:".",slug:"/generateproxy",permalink:"/touchsocket/docs/generateproxy",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/docs/generateproxy.mdx",tags:[],version:"current",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1675238151,formattedLastUpdatedAt:"Feb 1, 2023",frontMatter:{id:"generateproxy",title:"\u751f\u6210\u3001\u83b7\u53d6\u4ee3\u7406"},sidebar:"docs",previous:{title:"\u8c03\u7528\u914d\u7f6e",permalink:"/touchsocket/docs/rpcoption"},next:{title:"\u4f20\u8f93\u6587\u4ef6",permalink:"/touchsocket/docs/transferfile"}},c={},i=[{value:"\u4e00\u3001\u8bf4\u660e",id:"\u4e00\u8bf4\u660e",level:2},{value:"1.1 \u4e3a\u4ec0\u4e48\u8981\u751f\u6210\u4ee3\u7406\uff1f",id:"11-\u4e3a\u4ec0\u4e48\u8981\u751f\u6210\u4ee3\u7406",level:4},{value:"1.2 \u4e3a\u4ec0\u4e48TouchRpc\u4e0d\u652f\u6301\u63a5\u53e3\u4ee3\u7406\u8c03\u7528\uff1f",id:"12-\u4e3a\u4ec0\u4e48touchrpc\u4e0d\u652f\u6301\u63a5\u53e3\u4ee3\u7406\u8c03\u7528",level:4},{value:"1.3 TouchRpc\u6e90\u6587\u4ef6\u4ee3\u7406\u76f8\u6bd4\u63a5\u53e3\u4ee3\u7406\uff0c\u6709\u4ec0\u4e48\u4f18\u7f3a\u70b9\uff1f",id:"13-touchrpc\u6e90\u6587\u4ef6\u4ee3\u7406\u76f8\u6bd4\u63a5\u53e3\u4ee3\u7406\u6709\u4ec0\u4e48\u4f18\u7f3a\u70b9",level:4},{value:"\u4e8c\u3001\u4ece\u672c\u5730\u83b7\u53d6\u4ee3\u7406",id:"\u4e8c\u4ece\u672c\u5730\u83b7\u53d6\u4ee3\u7406",level:2},{value:"\u4e09\u3001\u4ee3\u7406\u7c7b\u578b\u6dfb\u52a0",id:"\u4e09\u4ee3\u7406\u7c7b\u578b\u6dfb\u52a0",level:2},{value:"3.1 \u6dfb\u52a0\u4ee3\u7406\u7c7b\u578b",id:"31-\u6dfb\u52a0\u4ee3\u7406\u7c7b\u578b",level:4},{value:"3.2 \u6807\u8bb0\u81ea\u5b9a\u4e49\u7c7b",id:"32-\u6807\u8bb0\u81ea\u5b9a\u4e49\u7c7b",level:4}],u={toc:i};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4e00\u8bf4\u660e"},"\u4e00\u3001\u8bf4\u660e"),(0,a.kt)("a",{name:"yZOS9"}),(0,a.kt)("h4",{id:"11-\u4e3a\u4ec0\u4e48\u8981\u751f\u6210\u4ee3\u7406"},"1.1 \u4e3a\u4ec0\u4e48\u8981\u751f\u6210\u4ee3\u7406\uff1f"),(0,a.kt)("p",null,"\u4f7f\u7528rpc\u7684\u539f\u5219\u5c31\u662f\u50cf\u4f7f\u7528\u672c\u5730\u65b9\u6cd5\u4e00\u6837\uff0c\u8ba9\u5f00\u53d1\u8005\u611f\u89c9\u4e0d\u5230\u4efb\u4f55\u7684\u4e0d\u540c\u3002\u6240\u4ee5\u5c31\u5fc5\u987b\u628a\u670d\u52a1\u4ee3\u7406\u5230\u672c\u5730\uff0c\u5e38\u89c1\u7684\u65b9\u5f0f\u6709\u4e09\u79cd\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u52a8\u6001\u4ee3\u7406\u63a5\u53e3"),"\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u9759\u6001\u7ec7\u5165"),"\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u9759\u6001\u7f16\u8bd1"),"\u3002\u4e09\u79cd\u65b9\u5f0f\u6b8a\u9014\u540c\u5f52\uff0c\u6700\u7ec8\u90fd\u662f\u6784\u5efa\u672c\u5730\u6570\u636e\u7ed3\u6784\uff0c\u7136\u540e\u548c\u8fdc\u7a0b\u901a\u4fe1\u3002\u4e09\u79cd\u65b9\u5f0f\u5404\u6709\u4f18\u7f3a\uff0c\u5177\u4f53\u5982\u4e0b\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"\u4f18\u7f3a\u70b9")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"\u52a8\u6001\u4ee3\u7406\u63a5\u53e3")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"\u9759\u6001\u7ec7\u5165")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"\u9759\u6001\u7f16\u8bd1")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"\u4f18\u70b9")),(0,a.kt)("td",{parentName:"tr",align:null},"\u52a8\u6001\u6784\u5efa\u7c7b\uff0c\u7075\u6d3b\u3001\u9002\u5e94\u6027\u5f3a\u3002"),(0,a.kt)("td",{parentName:"tr",align:null},"\u9759\u6001\u4ee3\u7801\u751f\u6210\uff0c\u81ea\u5b9a\u4e49\u7c7b\u53c2\u6570\u81ea\u52a8\u751f\u6210\uff0c\u4fee\u6539\u8f83\u7075\u6d3b\uff0c\u8c03\u7528\u6548\u7387\u9ad8"),(0,a.kt)("td",{parentName:"tr",align:null},"\u81ea\u5b9a\u4e49\u7c7b\u53c2\u6570\u81ea\u52a8\u751f\u6210\uff0c\u5bc6\u5c01\u6027\u5f3a\uff0c\u5b89\u5168\u6027\u9ad8\uff0c\u8c03\u7528\u6548\u7387\u9ad8\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"\u7f3a\u70b9")),(0,a.kt)("td",{parentName:"tr",align:null},"\u8c03\u7528\u6548\u7387\u8f83\u4f4e\uff0c\u81ea\u5b9a\u4e49\u7c7b\u53c2\u6570\u987b\u81ea\u884c\u6784\u5efa\uff0c\u5b9e\u73b0\u987bIL\u652f\u6301\uff0c\u5bf9\u8c03\u7528\u5e73\u53f0\u6709\u8981\u6c42\uff0c\u4f8b\u5982\uff1aIOS\u4e0d\u5141\u8bb8\u52a8\u6001\u7c7b\u751f\u6210\uff0c\u5219\u4e0d\u53ef\u4f7f\u7528\u3002"),(0,a.kt)("td",{parentName:"tr",align:null},"\u9879\u76ee\u4ee3\u7801\u7ba1\u7406\u96be\u7edf\u4e00\uff0c\u5f3a\u8feb\u75c7\u731d\u6b7b"),(0,a.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1\u4e00\u65e6\u6709\u7834\u574f\u6027\u5347\u7ea7\uff0c\u5219\u5fc5\u987b\u91cd\u65b0\u66ff\u6362dll\uff0c\u7075\u6d3b\u6027\u51e0\u4e4e\u4e3a0\u3002")))),(0,a.kt)("a",{name:"SxFfC"}),(0,a.kt)("h4",{id:"12-\u4e3a\u4ec0\u4e48touchrpc\u4e0d\u652f\u6301\u63a5\u53e3\u4ee3\u7406\u8c03\u7528"},"1.2 \u4e3a\u4ec0\u4e48TouchRpc\u4e0d\u652f\u6301\u63a5\u53e3\u4ee3\u7406\u8c03\u7528\uff1f"),(0,a.kt)("p",null,"\u3010\u539f\u56e0\u4e00\u3011\nTouchRpc\u652f\u6301out\u548cref\u53c2\u6570\uff0c\u5728\u4f7f\u7528\u4ee3\u7406\u65f6\uff0c\u6548\u7387\u4e0d\u9ad8\u3002"),(0,a.kt)("p",null,"\u3010\u539f\u56e0\u4e8c\u3011\nTouchRpc\u9700\u8981\u5728\u53c2\u6570\u652f\u6301\u8c03\u7528\u4e0a\u4e0b\u6587\uff0c\u6240\u4ee5\u65e0\u6cd5\u76f4\u63a5\u7528\u63a5\u53e3\u8c03\u7528\u3002"),(0,a.kt)("p",null,"\u3010\u539f\u56e0\u4e09\u3011\nTouchRpc\u652f\u6301\u5355\u6b21\u8c03\u7528\u7684\u8c03\u7528\u914d\u7f6e\uff08\u4f8b\u5982\u8d85\u65f6\u65f6\u95f4\uff0c\u53d6\u6d88\u8c03\u7528\uff0c\u5e8f\u5217\u5316\u65b9\u5f0f\u7b49\uff09"),(0,a.kt)("p",null,"\u3010\u539f\u56e0\u56db\u3011\n\u5f15\u7528\u95ee\u9898\uff0c\u5f53\u5728\u670d\u52a1\u63a5\u53e3\u4e2d\uff0c\u4f7f\u7528\u4e86\u5176\u4ed6\u7684\u9879\u76ee\u7684\u6570\u636e\u7ed3\u6784\u7684\u8bdd\uff0c\u5728\u63a5\u53e3\u8c03\u7528\u9879\u76ee\u4e0a\u4e5f\u9700\u8981\u5f15\u7528\u8be5\u9879\u76ee\u3002\u592a\u9ebb\u70e6\u3002"),(0,a.kt)("a",{name:"aJ0WL"}),(0,a.kt)("h4",{id:"13-touchrpc\u6e90\u6587\u4ef6\u4ee3\u7406\u76f8\u6bd4\u63a5\u53e3\u4ee3\u7406\u6709\u4ec0\u4e48\u4f18\u7f3a\u70b9"},"1.3 TouchRpc\u6e90\u6587\u4ef6\u4ee3\u7406\u76f8\u6bd4\u63a5\u53e3\u4ee3\u7406\uff0c\u6709\u4ec0\u4e48\u4f18\u7f3a\u70b9\uff1f"),(0,a.kt)("p",null,"\u6e90\u6587\u4ef6\u4ee3\u7406\u76f8\u6bd4\u63a5\u53e3\u4ee3\u7406\uff0c\u51e0\u4e4e\u6ca1\u4ec0\u4e48\u7f3a\u70b9\u3002\u6709\u4eba\u4f1a\u89c9\u5f97\u63a5\u53e3\u4ee3\u7406\u66f4\u6574\u6d01\u3001\u65b9\u4fbf\uff1f\u5b9e\u9645\u4e0a\u6e90\u6587\u4ef6\u4ee3\u7406\u53ea\u4f1a\u66f4\u6574\u6d01\u3001\u65b9\u4fbf\u3002"),(0,a.kt)("p",null,"\u5047\u8bbe\u4e00\u4e2a\u573a\u666f\uff0c\u4f60\u9700\u8981\u5f00\u53d1\u670d\u52a1\u5668\u548c\u5ba2\u6237\u7aef\uff0c\u8fd9\u65f6\uff0c\u4f60\u9700\u8981\u505a\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5148\u5355\u72ec\u5b9a\u4e49\u4e00\u4e2a\u63a5\u53e3\u9879\u76ee"),(0,a.kt)("li",{parentName:"ol"},"\u518d\u5b9a\u4e49\u4e00\u4e2a\u5b9e\u73b0\u9879\u76ee"),(0,a.kt)("li",{parentName:"ol"},"\u7f16\u8bd1\u63a5\u53e3\u9879\u76ee"),(0,a.kt)("li",{parentName:"ol"},"\u5f15\u7528\u5230\u5ba2\u6237\u7aef")),(0,a.kt)("p",null,"\u4e0a\u8ff0\u6b65\u9aa4\u4e2d\uff0c\u8fd8\u4e0d\u5305\u62ec\uff0c\u63a5\u53e3\u9879\u76ee\u548c\u5b9e\u73b0\u9879\u76ee\u9700\u8981\u5f15\u5165\u5176\u4ed6\u5f15\u7528\u7684\u60c5\u51b5\uff0c\u4e5f\u4e0d\u5305\u62ec\uff0c\u63a5\u53e3\u4e2d\u5305\u542b\u4e86\u5176\u4ed6\u9879\u76ee\u7684\u81ea\u5b9a\u4e49\u6570\u636e\u7ed3\u6784\u3002\u5982\u679c\u5305\u542b\u4e86\u7684\u8bdd\uff0c\u5ba2\u6237\u7aef\u8fd8\u9700\u8981\u5f15\u5165\u5176\u4ed6\u9879\u76ee\u3002"),(0,a.kt)("p",null,"\u800c\u4e14\uff0c\u8fd8\u9700\u8981\u8003\u8651\u63a5\u53e3\u9879\u76ee\u7684\u7f16\u8bd1\u76ee\u6807\u5e73\u53f0\u548c\u5176\u4ed6\u7f16\u8bd1\u53c2\u6570\u3002\u6700\u96be\u53d7\u7684\u662f\uff0c\u5982\u679c\u8fd9\u4e9b\u5de5\u4f5c\uff0c\u662f\u4f60\u548c\u540c\u4e8b\u5408\u4f5c\u7684\u8bdd\uff0c\u90a3\u53ef\u80fd\u5c31\u662f\u51fa\u4e2abug\uff0c\u540c\u4e8b\u4f20\u4f60\u4e00\u4e2adll v1.0\u7248\u672c\uff0c\u518d\u6709\u95ee\u9898\uff0cv1.1\u4fee\u590d\u7248\uff0c\u7b49\u7b49\u3002"),(0,a.kt)("p",null,"\u800c\u6700\u8981\u547d\u7684\uff0c\u5f53\u5c5e\u7a0b\u5e8f\u96c6\u6570\u636e\u6cc4\u9732\u3002\u8bbe\u60f3\u4e00\u4e0b\uff0c\u5982\u679c\u67d0\u4e2a\u540c\u4e8b\u5728\u5199\u6570\u636e\u5e93\u64cd\u4f5c\u7684\u9879\u76ee\u65f6\uff0c\u628a\u8fde\u63a5\u4fe1\u606f\u76f4\u63a5\u653e\u5728\u4e86\u4ee3\u7801\u91cc\uff08\u6216\u67d0\u4e2a\u903b\u8f91\uff09\uff0c\u672c\u8eab\u5982\u679c\u8fd9\u4e2a\u9879\u76ee\u53ea\u5728\u670d\u52a1\u5668\u5e94\u7528\uff0c\u4e5f\u6ca1\u6709\u5173\u7cfb\uff0c\u4f46\u662f\u56e0\u4e3a\u4f60\u61d2\uff0c\u4f60\u5728\u63a5\u53e3\u4e2d\u4f7f\u7528\u4e86\u8be5\u9879\u76ee\u7684\u4e00\u4e2a\u6570\u636e\u7ed3\u6784\uff0c\u8fd9\u5c31\u4f7f\u5f97\u4f60\u4e0d\u5f97\u4e0d\u628a\u8fd9\u4e2a\u9879\u76ee\u4e00\u540c\u4ea4\u7ed9\u8c03\u7528\u65b9\u7684\u540c\u4e8b\uff0c\u4f46\u4f60\u5bf9\u8fd9\u4e9b\u6beb\u65e0\u5bdf\u89c9\u3002\u55f7\u568e\uff0c\u9ed1\u7528\u6237\u4e00\u53cd\u7f16\u8bd1\uff0c\u76f4\u63a5\u5e2e\u4f60\u628a\u6570\u636e\u6574\u7406\u4e86\u3002"),(0,a.kt)("p",null,"\u4f46\u662f\u5982\u679c\u7528\u751f\u6210\u7684\u6e90\u4ee3\u7801\uff0c\u90a3\u4e0a\u8ff0\u7684\u53ef\u6015\u95ee\u9898\u6839\u672c\u4e0d\u7528\u8003\u8651\u3002\u5176\u6b21\uff0c\u4f1a\u66f4\u6574\u6d01\uff0c\u66f4\u65b9\u4fbf\u3002"),(0,a.kt)("p",null,"\u5047\u8bbe\u76f8\u540c\u573a\u666f\uff0c\u4f60\u9700\u8981\u5f00\u53d1\u670d\u52a1\u5668\u548c\u5ba2\u6237\u7aef\uff0c\u8fd9\u65f6\uff0c\u4f60\u9700\u8981\u505a\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5148\u5b9a\u4e49\u4e00\u4e2a\u670d\u52a1\u9879\u76ee\uff08\u53ef\u4ee5\u5199\u63a5\u53e3\uff0c\u4e5f\u80fd\u5199\u903b\u8f91\uff0c\u5f53\u7136\u4e5f\u53ef\u4ee5\u5206\u6210\u4e24\u4e2a\u9879\u76ee\uff09"),(0,a.kt)("li",{parentName:"ol"},"\u7f16\u8bd1\u9879\u76ee\uff0c\u7136\u540e\u5bfc\u51fa\u4ee3\u7406\u6e90\u4ee3\u7801\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5f15\u7528\u5230\u5ba2\u6237\u7aef")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u9700\u8981\u8003\u8651\u6570\u636e\u7ed3\u6784\u5f15\u7528\u95ee\u9898\uff0c\u56e0\u4e3a\u4ee3\u7406\u4f1a\u8f6c\u5199\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u9700\u8981\u8003\u8651\u7f16\u8bd1\u53c2\u6570\u95ee\u9898\uff0c\u56e0\u4e3a\u5ba2\u6237\u7aef\u62ff\u5230\u7684\u4e5f\u662f\u6e90\u7801\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u9700\u8981\u518d\u8ba9\u540c\u4e8b\u4e00\u6b21\u6b21\u53d1\u4f60dll\uff0c\u53ea\u9700\u8981\uff0c\u4ed6\u542f\u52a8\u670d\u52a1\uff0c\u4f60\u66f4\u65b0\u5f15\u7528\u5c31ok\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u9700\u8981\u6015\u7a0b\u5e8f\u96c6\u6570\u636e\u6cc4\u9732\uff0c\u56e0\u4e3a\u4e00\u5207\u90fd\u662f\u8f6c\u5199\u7684\uff0c\u800c\u4e14\u53ea\u8f6c\u5199\u5e94\u7528\u7684\u3001\u516c\u5171\u7684\u90e8\u5206\u3002")),(0,a.kt)("a",{name:"qJpS4"}),(0,a.kt)("h2",{id:"\u4e8c\u4ece\u672c\u5730\u83b7\u53d6\u4ee3\u7406"},"\u4e8c\u3001\u4ece\u672c\u5730\u83b7\u53d6\u4ee3\u7406"),(0,a.kt)("p",null,"\u5728\u5f00\u53d1\u8fc7\u7a0b\u4e2d\uff0c\u5982\u679c\u670d\u52a1\u5668\u548c\u5ba2\u6237\u7aef\uff0c\u90fd\u662f\u6211\u4eec\u81ea\u5df1\u5f00\u53d1\u7684\u8bdd\uff08\u5728\u540c\u4e00\u4e2a\u7535\u8111\uff09\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528\u672c\u5730\u4ee3\u7406\u751f\u6210\u3002"),(0,a.kt)("p",null,"\u8c03\u7528\u4e0b\u5217\u4ee3\u7801\uff0c\u4f1a\u5c06\u5df2\u6ce8\u518c\u7684\u6240\u6709\u670d\u52a1\uff0c\u5bfc\u51fa\u4ee3\u7406\u4e3a\u5b57\u7b26\u4e32\u3002"),(0,a.kt)("p",null,"RpcStore\u662f",(0,a.kt)("strong",{parentName:"p"},"\u5b9e\u4f8b"),"\uff0c\u6216\u8005\u662fIRpcParser\u7684",(0,a.kt)("strong",{parentName:"p"},"\u5c5e\u6027"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'string code=RpcStore.GetProxyCodes("MyNameSpace"));\n')),(0,a.kt)("p",null,"\u3010\u793a\u4f8b1\u3011\n\u5c06\u4ee3\u7406\u5b57\u7b26\u4e32\uff0c\u5199\u6210.cs\u6587\u4ef6\uff0c\u7136\u540e\u901a\u8fc7\u94fe\u63a5\u7684\u5f62\u5f0f\uff0c\u5c06\u4ee3\u7801\u6dfb\u52a0\u5230\u5ba2\u6237\u7aef\u9879\u76ee\u3002"),(0,a.kt)("p",null,"\u670d\u52a1\u5668\u4ee3\u7801\uff0c\u5728\u670d\u52a1\u5668\u6267\u884c\u540e\uff0c\u4f1a\u5728\u8fd0\u884c\u8def\u5f84\u4e0b\uff0c\u751f\u6210\u4e00\u4e2a",(0,a.kt)("strong",{parentName:"p"},"WhisperServers.cs"),"\u7684\u6587\u4ef6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'var service = new TcpTouchRpcService();\nvar config = new TouchSocketConfig()//\u914d\u7f6e\n                   .SetListenIPHosts(new IPHost[] { new IPHost(port) })\n                   .ConfigureContainer(a =>\n                   {\n                       a.AddConsoleLogger();\n                       a.AddFileLogger();\n                   })\n                   .ConfigureRpcStore(a =>\n                   {\n                       a.RegisterServer<MyRpcServer>();//\u6ce8\u518c\u670d\u52a1\n\n#if DEBUG\n                       File.WriteAllText("../../../WhisperServers.cs", a.GetProxyCodes("WhisperServers",new Type[] { typeof(TouchRpcAttribute) }));\n#endif\n                   })\n                   .SetVerifyToken("TouchRpc");\n\n            service.Setup(config)\n                .Start();\n')),(0,a.kt)("p",null,"\u7136\u540e\u6253\u5f00\u9700\u8981\u5f15\u5165\u7684\u5ba2\u6237\u7aef\u89e3\u51b3\u65b9\u6848\u3002\u9009\u62e9\u9700\u8981\u6dfb\u52a0\u4ee3\u7406\u7684\u9879\u76ee\uff0c\u4f9d\u6b21\u6267\u884c\uff1a"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53f3\u51fb\u9879\u76ee=\u300b\u6dfb\u52a0=\u300b\u73b0\u6709\u9879")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7136\u540e\u9009\u62e9\u670d\u52a1\u5668\u751f\u6210\u7684.cs\u6587\u4ef6\uff0c\u9009\u62e9\u201c\u6dfb\u52a0\u201d\u7684\u4e0b\u62c9\u6846\uff0c\u9009\u62e9\u201c\u6dfb\u52a0\u4e3a\u8fde\u63a5\u201d\u3002")),(0,a.kt)("p",null,"\u6700\u540e\u786e\u8ba4\u6587\u4ef6\u88ab\u6b63\u786e\u6dfb\u52a0\u4e3a\u94fe\u63a5\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8fd9\u6837\uff0c\u6bcf\u6b21\u5f53\u670d\u52a1\u6709\u66f4\u65b0\u7684\u65f6\u5019\uff0c\u53ea\u9700\u8981\u542f\u52a8\u4e00\u4e0b\u670d\u52a1\u5668\uff0c\u4ee3\u7406\u5c31\u4f1a\u81ea\u52a8\u5237\u65b0\u3002")),(0,a.kt)("p",null,"\u5b9e\u9645\u4e0a\u5728RpcStore\u5b8c\u6210",(0,a.kt)("strong",{parentName:"p"},"\u670d\u52a1\u6ce8\u518c"),"\u3001",(0,a.kt)("strong",{parentName:"p"},"\u89e3\u6790\u5668\u6dfb\u52a0"),"\u4ee5\u540e\uff0c\u8c03\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"GetProxyInfo"),"\uff0c\u8f93\u5165\u4ee3\u7406\u7c7b\u578b\u3001\u5373\u53ef\u83b7\u5f97\u4ee3\u7406\u4fe1\u606f\uff0c\u7136\u540e\u518d\u901a\u8fc7CodeGenerator.ConvertToCode\u65b9\u6cd5\uff0c\u8f6c\u6362\u4e3a\u53ef\u4ee5",(0,a.kt)("strong",{parentName:"p"},"\u76f4\u63a5\u7f16\u8bd1"),"\u7684\u4ee3\u7801\u3002\n\u6b64\u65f6\uff0c\u4f60\u53ef\u4ee5\u590d\u5236\u3001\u6216\u8005\u76f4\u63a5\u628a\u4ee3\u7406\u4ee3\u7801\u5199\u6210",(0,a.kt)("inlineCode",{parentName:"p"},"\u6e90\u4ee3\u7801"),"\uff08cs\u6587\u4ef6\uff09\u3002\n\u7136\u540e\u4f60\u53ef\u4ee5\u628a\u8fd9\u4e2a\u4ee3\u7801\u5f15\u5165\u5230",(0,a.kt)("strong",{parentName:"p"},"\u5ba2\u6237\u7aef"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'//\u6216\u8005\u76f4\u63a5\u672c\u5730\u5bfc\u51fa\u4ee3\u7406\u6587\u4ef6\u3002\nServerCellCode[] codes = rpcStore.GetProxyInfo(RpcStore.ProxyAttributeMap.Values.ToArray());\nstring codeString = CodeGenerator.ConvertToCode("RRQMProxy", codes);\n')),(0,a.kt)("p",null,"\u4ea6\u6216\u8005\uff0c\u4e3a\u9632\u6b62\u7be1\u6539\u751f\u6210\u7684\u4ee3\u7801\uff0c\u4e0d\u60f3\u628a\u4ee3\u7406\u4ee3\u7801\u76f4\u63a5\u6295\u5165\u4f7f\u7528\uff0c\u90a3\u53ef\u4ee5\u8003\u8651\u5c06\u4ee3\u7801\u5355\u72ec\u7f16\u8bd1\u6210dll\uff0c\u7136\u540e\u5c06\u7f16\u8bd1\u7684\u7a0b\u5e8f\u96c6\u52a0\u8f7d\u5230\u5ba2\u6237\u7aef\u3002"),(0,a.kt)("a",{name:"fSglb"}),(0,a.kt)("h2",{id:"\u4e09\u4ee3\u7406\u7c7b\u578b\u6dfb\u52a0"},"\u4e09\u3001\u4ee3\u7406\u7c7b\u578b\u6dfb\u52a0"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u901a\u8fc7\u4e4b\u524d\u7684\u5b66\u4e60\uff0c\u5927\u5bb6\u53ef\u80fd\u5927\u6982\u660e\u767d\u4e86\uff0c\u5728RRQMRPC\u4e2d\uff0c\u5ba2\u6237\u7aef\u4e0e\u670d\u52a1\u5668\u5728\u8fdb\u884c\u4ea4\u4e92\u65f6\uff0c\u6240\u9700\u7684\u6570\u636e\u7ed3\u6784\u4e0d\u8981\u6c42\u662f\u540c\u4e00\u7c7b\u578b\uff0c\u4ec5\u662f",(0,a.kt)("a",{parentName:"p",href:"https://gitee.com/RRQM_OS/RRQM/wikis/RRQM%E4%B8%93%E4%B8%9A%E5%90%8D%E7%A7%B0%E8%A7%A3%E9%87%8A?sort_id=4872799"},"\u6570\u636e\u7c7b\u578b\u7ed3\u6784\u76f8\u540c"),"\u5373\u53ef\u3002\u6240\u4ee5\u5728\u58f0\u660e\u4e86\u670d\u52a1\u4ee5\u540e\uff0c\u670d\u52a1\u4e2d\u6240\u5305\u542b\u7684\u81ea\u5b9a\u4e49\u7c7b\u578b\uff0c\u4f1a\u88ab\u590d\u523b\u6210\u7ed3\u6784\u76f8\u540c\u7684\u7c7b\u578b\uff0c\u4f46\u662f\u8fd9\u4e5f\u4ec5\u4ec5\u5c40\u9650\u4e8e\u53c2\u6570\u4e0e\u670d\u52a1",(0,a.kt)("inlineCode",{parentName:"p"},"\u76f8\u540c\u7a0b\u5e8f\u96c6"),"\u7684\u65f6\u5019\u3002\u5982\u679c\u670d\u52a1\u4e2d\u5f15\u5165\u4e86\u5176\u4ed6\u7a0b\u5e8f\u96c6\u7684\u6570\u636e\u7ed3\u6784\uff0c\u5219\u4e0d\u4f1a\u590d\u523b\u3002\u6240\u4ee5\u5728\u5ba2\u6237\u7aef\u8c03\u7528\u65f6\uff0c\u9700\u8981\u5f15\u5165\u540c\u4e00\u7a0b\u5e8f\u96c6\u3002")),(0,a.kt)("p",null,"\u4f46\u662f\uff0c\u5f80\u5f80\u5728\u670d\u52a1\u4e2d\uff0c\u4f1a\u5f15\u5165\u5176\u4ed6\u7a0b\u5e8f\u96c6\uff0c\u4f8b\u5982\uff0c\u6211\u4eec\u4e60\u60ef\u5728\u9879\u76ee\u4e2d\u5efa\u7acb\u4e00\u4e2aModels\u7a0b\u5e8f\u96c6\uff0c\u7528\u4e8e\u5b58\u653e\u6240\u6709\u7684\u5b9e\u4f53\u6a21\u578b\uff0c\u90a3\u662f\u4e0d\u662f\u610f\u5473\u7740\u5ba2\u6237\u7aef\u4e5f\u5fc5\u987b\u5f15\u5165\u8fd9\u4e2a\u7a0b\u5e8f\u96c6\u624d\u80fd\u8c03\u7528\u5462\uff1f\u6ca1\u522b\u7684\u65b9\u6cd5\u4e86\uff1f\uff1f\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"\u6709\uff0c\u4e14\u4e0d\u53ea\u6709\u4e00\u79cd"))," ",(0,a.kt)("a",{name:"r9HVa"})),(0,a.kt)("h4",{id:"31-\u6dfb\u52a0\u4ee3\u7406\u7c7b\u578b"},"3.1 \u6dfb\u52a0\u4ee3\u7406\u7c7b\u578b"),(0,a.kt)("p",null,"\u5728\u670d\u52a1\u6ce8\u518c\u4e4b\u524d\uff0c\u4efb\u610f\u65f6\u523b\uff0c\u53ef\u8c03\u7528CodeGenerator.AddProxyType\u9759\u6001\u65b9\u6cd5\uff0c\u6dfb\u52a0\u4ee3\u7406\u7c7b\u578b\uff0c\u540c\u65f6\u53ef\u4f20\u5165\u4e00\u4e2abool\u503c\uff0c\u8868\u660e\u662f\u5426\u6df1\u5ea6\u641c\u7d22\uff0c\u6bd4\u5982\uff0c\u5047\u5982RpcArgsClassLib.ProxyClass1\u4e2d\u8fd8\u6709\u5176\u4ed6\u7c7b\u578b\uff0c\u5219\u53c2\u6570\u4e3aTrue\u65f6\uff0c\u4f9d\u7136\u4f1a\u4ee3\u7406\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"RPCService rpcService = new RPCService();\nCodeGenerator.AddProxyType<RpcArgsClassLib.ProxyClass1>();\nCodeGenerator.AddProxyType<RpcArgsClassLib.ProxyClass2>(deepSearch:true);\n")),(0,a.kt)("a",{name:"L9jEG"}),(0,a.kt)("h4",{id:"32-\u6807\u8bb0\u81ea\u5b9a\u4e49\u7c7b"},"3.2 \u6807\u8bb0\u81ea\u5b9a\u4e49\u7c7b"),(0,a.kt)("p",null,"\u5728\u9700\u8981\u4ee3\u7406\u7684\u7c7b\u4e0a\u9762\u58f0\u660eRRQMProxy\u6807\u7b7e\uff0c\u7136\u540e\u4e5f\u53ef\u4ee5\u91cd\u65b0\u6307\u5b9a\u4ee3\u7406\u7c7b\u540d\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'[RRQMProxy("MyArgs")]\npublic class Args\n{\n}\n')))}s.isMDXComponent=!0}}]);