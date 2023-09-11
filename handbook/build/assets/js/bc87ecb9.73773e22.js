"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[7586],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,k=m["".concat(i,".").concat(d)]||m[d]||s[d]||l;return n?r.createElement(k,o(o({ref:t},u),{},{components:n})):r.createElement(k,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7112:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const l={id:"rpcactionfilter",title:"Rpc\u670d\u52a1AOP"},o=void 0,c={unversionedId:"rpcactionfilter",id:"rpcactionfilter",title:"Rpc\u670d\u52a1AOP",description:"\u5b9a\u4e49",source:"@site/docs/rpcactionfilter.mdx",sourceDirName:".",slug:"/rpcactionfilter",permalink:"/touchsocket/docs/rpcactionfilter",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/docs/rpcactionfilter.mdx",tags:[],version:"current",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1694332145,formattedLastUpdatedAt:"Sep 10, 2023",frontMatter:{id:"rpcactionfilter",title:"Rpc\u670d\u52a1AOP"},sidebar:"docs",previous:{title:"SG\u4ee3\u7406\u63a8\u8350\u5199\u6cd5",permalink:"/touchsocket/docs/generateproxysourcegeneratordemo"},next:{title:"\u4ea7\u54c1\u53ca\u67b6\u6784\u4ecb\u7ecd",permalink:"/touchsocket/docs/dmtpdescription"}},i={},p=[{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",level:3},{value:"\u4e00\u3001\u8bf4\u660e",id:"\u4e00\u8bf4\u660e",level:2},{value:"\u4e8c\u3001\u652f\u6301\u7684\u7279\u6027\u65b9\u6cd5",id:"\u4e8c\u652f\u6301\u7684\u7279\u6027\u65b9\u6cd5",level:2},{value:"\u4e09\u3001\u4f7f\u7528",id:"\u4e09\u4f7f\u7528",level:2},{value:"3.1 \u5b9a\u4e49RpcActionFilterAttribute\u7279\u6027",id:"31-\u5b9a\u4e49rpcactionfilterattribute\u7279\u6027",level:3},{value:"3.2 \u4f7f\u7528",id:"32-\u4f7f\u7528",level:3}],u={toc:p};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u5b9a\u4e49"},"\u5b9a\u4e49"),(0,a.kt)("p",null,"\u547d\u540d\u7a7a\u95f4\uff1aTouchSocket.Rpc ",(0,a.kt)("br",null),"\n\u7a0b\u5e8f\u96c6\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/TouchSocket.Rpc"},"TouchSocket.Rpc.dll")),(0,a.kt)("h2",{id:"\u4e00\u8bf4\u660e"},"\u4e00\u3001\u8bf4\u660e"),(0,a.kt)("p",null,"Rpc\u670d\u52a1\u5728\u88ab\u8c03\u7528\u65f6\uff0c\u4f1a\u89e6\u53d1\u4e00\u7cfb\u5217\u7684Rpc\u7b5b\u9009\u5668AOP",(0,a.kt)("strong",{parentName:"p"},"IRpcActionFilter"),"\u7684",(0,a.kt)("strong",{parentName:"p"},"\u7279\u6027\uff08Attribute\uff09"),"\uff0c\u8fdb\u884c\u76f8\u5173AOP\u64cd\u4f5c\u3002\u6240\u4ee5\u53ef\u4ee5\u5229\u7528\u8be5\u7279\u6027\u505a\u5f88\u591a\u6709\u5173Rpc\u7684AOP\u64cd\u4f5c\u3002"),(0,a.kt)("h2",{id:"\u4e8c\u652f\u6301\u7684\u7279\u6027\u65b9\u6cd5"},"\u4e8c\u3001\u652f\u6301\u7684\u7279\u6027\u65b9\u6cd5"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u65b9\u6cd5\u540d"),(0,a.kt)("th",{parentName:"tr",align:null},"\u89e6\u53d1\u65f6\u673a"),(0,a.kt)("th",{parentName:"tr",align:null},"\u529f\u80fd"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ExecutingAsync"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5728\u6267\u884cRpc\u4e4b\u524d"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5f53invokeResult\u7684InvokeStatus\u4e0d\u4e3aInvokeStatus.Ready\u3002\u5219\u4e0d\u4f1a\u6267\u884cRpc\u3002\u540c\u65f6\uff0c\u5f53InvokeStatus\u4e3aSuccess\u3002\u4f1a\u76f4\u63a5\u8fd4\u56de\u7ed3\u679c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ExecutExceptionAsync"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6267\u884cRpc\u9047\u89c1\u5f02\u5e38"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u4fee\u6539invokeResult\u7684InvokeStatus\uff0c\u6216Result\u3002\u5219\u4f1a\u5f71\u54cdRpc\u6700\u7ec8\u7ed3\u679c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ExecutedAsync"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6210\u529f\u6267\u884cRpc\u540e"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u4fee\u6539invokeResult\u7684InvokeStatus\uff0c\u6216Result\u3002\u5219\u4f1a\u5f71\u54cdRpc\u6700\u7ec8\u7ed3\u679c")))),(0,a.kt)("h2",{id:"\u4e09\u4f7f\u7528"},"\u4e09\u3001\u4f7f\u7528"),(0,a.kt)("h3",{id:"31-\u5b9a\u4e49rpcactionfilterattribute\u7279\u6027"},"3.1 \u5b9a\u4e49RpcActionFilterAttribute\u7279\u6027"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'public class MyRpcActionFilterAttribute : RpcActionFilterAttribute\n{\n    public override Task<InvokeResult> ExecutingAsync(ICallContext callContext, object[] parameters, InvokeResult invokeResult)\n    {\n        //invokeResult = new InvokeResult()\n        //{\n        //    Status = InvokeStatus.UnEnable,\n        //    Message = "\u4e0d\u5141\u8bb8\u6267\u884c",\n        //    Result = default\n        //};\n        if (callContext.Caller is ISocketClient client)\n        {\n            client.Logger.Info($"\u5373\u5c06\u6267\u884cRpc-{callContext.MethodInstance.Name}");\n        }\n        return Task.FromResult(invokeResult);\n    }\n\n    public override Task<InvokeResult> ExecutedAsync(ICallContext callContext, object[] parameters, InvokeResult invokeResult)\n    {\n        if (callContext.Caller is ISocketClient client)\n        {\n            client.Logger.Info($"\u6267\u884cRPC-{callContext.MethodInstance.Name}\u5b8c\u6210\uff0c\u72b6\u6001={invokeResult.Status}");\n        }\n        return Task.FromResult(invokeResult);\n    }\n\n    public override Task<InvokeResult> ExecutExceptionAsync(ICallContext callContext, object[] parameters, InvokeResult invokeResult, Exception exception)\n    {\n        if (callContext.Caller is ISocketClient client)\n        {\n            client.Logger.Info($"\u6267\u884cRPC-{callContext.MethodInstance.Name}\u5f02\u5e38\uff0c\u4fe1\u606f={invokeResult.Message}");\n        }\n        return Task.FromResult(invokeResult);\n    }\n}\n')),(0,a.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u4f7f\u7528RpcActionFilterAttribute\u7279\u6027\uff0c\u4e0d\u4ec5\u53ef\u4ee5\u5b9e\u73b0\u65e5\u5fd7\u8bb0\u5f55\uff0c\u8fd8\u53ef\u4ee5\u5b9e\u73b0\u8bbf\u95ee\u6743\u9650\u9650\u5236\u3001\u5168\u5c40\u5f02\u5e38\u6355\u6349\u7b49\u3002")),(0,a.kt)("h3",{id:"32-\u4f7f\u7528"},"3.2 \u4f7f\u7528"),(0,a.kt)("p",null,"RpcActionFilterAttribute \u7279\u6027\u53ef\u4ee5\u5e94\u7528\u5230\u4efb\u4f55\u65b9\u6cd5\u4e0a\uff0c\u4e5f\u53ef\u4ee5\u5e94\u7528\u5230\u7c7b\u4e0a\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"{1,19}","{1,19}":!0},'[MyRpcActionFilter]\nclass MyRpcServer : RpcServer\n{\n    private readonly ILog m_logger;\n\n    public MyRpcServer(ILog logger)\n    {\n        this.m_logger = logger;\n    }\n\n    /// <summary>\n    /// \u5c06\u4e24\u4e2a\u6570\u76f8\u52a0\n    /// </summary>\n    /// <param name="a"></param>\n    /// <param name="b"></param>\n    /// <returns></returns>\n    [DmtpRpc(true)]//\u4f7f\u7528\u51fd\u6570\u540d\u76f4\u63a5\u8c03\u7528\n    [Description("\u5c06\u4e24\u4e2a\u6570\u76f8\u52a0")]//\u5176\u4f5c\u7528\u662f\u751f\u6210\u4ee3\u7406\u65f6\uff0c\u4f5c\u4e3a\u6ce8\u91ca\u3002\n    [MyRpcActionFilter]\n    public int Add(int a, int b)\n    {\n        this.m_logger.Info("\u8c03\u7528Add");\n        var sum = a + b;\n        return sum;\n    }\n}\n')))}s.isMDXComponent=!0}}]);