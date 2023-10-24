"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[7357],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),g=i,f=d["".concat(l,".").concat(g)]||d[g]||u[g]||o;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7169:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const o={id:"waitingclient",title:"\u540c\u6b65\u8bf7\u6c42"},a=void 0,c={unversionedId:"waitingclient",id:"version-1.3.9/waitingclient",title:"\u540c\u6b65\u8bf7\u6c42",description:"\u4e00\u3001\u8bf4\u660e",source:"@site/versioned_docs/version-1.3.9/waitingclient.mdx",sourceDirName:".",slug:"/waitingclient",permalink:"/touchsocket/docs/1.3.9/waitingclient",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/versioned_docs/version-1.3.9/waitingclient.mdx",tags:[],version:"1.3.9",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1697553075,formattedLastUpdatedAt:"Oct 17, 2023",frontMatter:{id:"waitingclient",title:"\u540c\u6b65\u8bf7\u6c42"},sidebar:"docs",previous:{title:"\u521b\u5efaTcpClient",permalink:"/touchsocket/docs/1.3.9/createtcpclient"},next:{title:"Tcp\u7aef\u53e3\u8f6c\u53d1",permalink:"/touchsocket/docs/1.3.9/natservice"}},l={},p=[{value:"\u4e00\u3001\u8bf4\u660e",id:"\u4e00\u8bf4\u660e",level:2},{value:"\u4e8c\u3001\u521b\u5efa\u53ca\u4f7f\u7528",id:"\u4e8c\u521b\u5efa\u53ca\u4f7f\u7528",level:2},{value:"2.1 \u4ee5TcpClient\u4e3a\u4f8b",id:"21-\u4ee5tcpclient\u4e3a\u4f8b",level:3},{value:"2.2 \u4ee5TcpService\u4e3a\u4f8b",id:"22-\u4ee5tcpservice\u4e3a\u4f8b",level:3}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u4e00\u8bf4\u660e"},"\u4e00\u3001\u8bf4\u660e"),(0,i.kt)("p",null,"\u6709\u5f88\u591a\u5c0f\u4f19\u4f34\u4e00\u76f4\u6709\u4e00\u4e9b\u9700\u6c42\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5ba2\u6237\u7aef\u53d1\u9001\u4e00\u4e2a\u6570\u636e\uff0c\u7136\u540e\u7b49\u5f85\u670d\u52a1\u5668\u56de\u5e94\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u670d\u52a1\u5668\u5411\u5ba2\u6237\u7aef\u53d1\u9001\u4e00\u4e2a\u6570\u636e\uff0c\u7136\u540e\u7b49\u5f85\u5ba2\u6237\u7aef\u56de\u5e94\u3002")),(0,i.kt)("p",null,"\u90a3\u9488\u5bf9\u8fd9\u4e9b\u9700\u6c42\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,i.kt)("strong",{parentName:"p"},"WaitingClient\u3002"),"\u5176\u5185\u90e8\u5b9e\u73b0\u4e86",(0,i.kt)("strong",{parentName:"p"},"IWaitSender"),"\u63a5\u53e3\uff0c\u80fd\u591f\u5728\u53d1\u9001\u5b8c\u6210\u540e\uff0c\u7b49\u5f85\u8fd4\u56de\u3002"),(0,i.kt)("h2",{id:"\u4e8c\u521b\u5efa\u53ca\u4f7f\u7528"},"\u4e8c\u3001\u521b\u5efa\u53ca\u4f7f\u7528"),(0,i.kt)("h3",{id:"21-\u4ee5tcpclient\u4e3a\u4f8b"},"2.1 \u4ee5TcpClient\u4e3a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'TcpClient m_tcpClient = new TcpClient();\nvar config = new TouchSocketConfig();\nconfig.SetRemoteIPHost(new IPHost("127.0.0.1:7789"));\n\n//\u8f7d\u5165\u914d\u7f6e\nm_tcpClient.Setup(config);\nm_tcpClient.Connect();\n\n//\u8c03\u7528GetWaitingClient\u83b7\u53d6\u5230IWaitingClient\u7684\u5bf9\u8c61\u3002\nvar waitClient = m_tcpClient.GetWaitingClient(new WaitingOptions()\n{\n    AdapterFilter = AdapterFilter.AllAdapter,//\u8868\u793a\u53d1\u9001\u548c\u63a5\u6536\u7684\u6570\u636e\u90fd\u4f1a\u7ecf\u8fc7\u9002\u914d\u5668\n    BreakTrigger = true,//\u8868\u793a\u5f53\u8fde\u63a5\u65ad\u5f00\u65f6\uff0c\u4f1a\u7acb\u5373\u89e6\u53d1\n    ThrowBreakException = true//\u8868\u793a\u5f53\u8fde\u63a5\u65ad\u5f00\u65f6\uff0c\u662f\u5426\u89e6\u53d1\u5f02\u5e38\n});\n\n//\u7136\u540e\u4f7f\u7528SendThenReturn\u3002\nbyte[] returnData = waitClient.SendThenReturn(Encoding.UTF8.GetBytes("RRQM"));\nm_tcpClient.Logger.Info($"\u6536\u5230\u56de\u5e94\u6d88\u606f\uff1a{Encoding.UTF8.GetString(returnData)}");\n\n//\u540c\u65f6\uff0c\u5982\u679c\u9002\u914d\u5668\u6536\u5230\u6570\u636e\u540e\uff0c\u8fd4\u56de\u7684\u5e76\u4e0d\u662f\u5b57\u8282\uff0c\u800c\u662fIRequestInfo\u5bf9\u8c61\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528SendThenResponse.\nResponsedData responsedData = waitClient.SendThenResponse(Encoding.UTF8.GetBytes("RRQM"));\nIRequestInfo requestInfo = responsedData.RequestInfo;//\u540c\u6b65\u6536\u5230\u7684RequestInfo\n')),(0,i.kt)("h3",{id:"22-\u4ee5tcpservice\u4e3a\u4f8b"},"2.2 \u4ee5TcpService\u4e3a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'var service = new TcpService();\nservice.Received = (client, byteBlock, requestInfo) =>\n{\n    //\u8c03\u7528GetWaitingClient\u83b7\u53d6\u5230IWaitingClient\u7684\u5bf9\u8c61\u3002\n    var waitClient = client.GetWaitingClient(new WaitingOptions()\n    {\n        AdapterFilter = AdapterFilter.AllAdapter,//\u8868\u793a\u53d1\u9001\u548c\u63a5\u6536\u7684\u6570\u636e\u90fd\u4f1a\u7ecf\u8fc7\u9002\u914d\u5668\n        BreakTrigger = true,//\u8868\u793a\u5f53\u8fde\u63a5\u65ad\u5f00\u65f6\uff0c\u4f1a\u7acb\u5373\u89e6\u53d1\n        ThrowBreakException = true//\u8868\u793a\u5f53\u8fde\u63a5\u65ad\u5f00\u65f6\uff0c\u662f\u5426\u89e6\u53d1\u5f02\u5e38\n    });\n\n    //\u7136\u540e\u4f7f\u7528SendThenReturn\u3002\n    byte[] returnData = waitClient.SendThenReturn(Encoding.UTF8.GetBytes("RRQM"));\n    client.Logger.Info($"\u6536\u5230\u56de\u5e94\u6d88\u606f\uff1a{Encoding.UTF8.GetString(returnData)}");\n\n    //\u540c\u65f6\uff0c\u5982\u679c\u9002\u914d\u5668\u6536\u5230\u6570\u636e\u540e\uff0c\u8fd4\u56de\u7684\u5e76\u4e0d\u662f\u5b57\u8282\uff0c\u800c\u662fIRequestInfo\u5bf9\u8c61\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528SendThenResponse.\n    ResponsedData responsedData = waitClient.SendThenResponse(Encoding.UTF8.GetBytes("RRQM"));\n    IRequestInfo responseRequestInfo = responsedData.RequestInfo;//\u540c\u6b65\u6536\u5230\u7684RequestInfo\n};\n\nservice.Setup(new TouchSocketConfig()//\u8f7d\u5165\u914d\u7f6e     \n    .SetListenIPHosts(new IPHost[] { new IPHost("tcp://127.0.0.1:7789"), new IPHost(7790) })//\u540c\u65f6\u76d1\u542c\u4e24\u4e2a\u5730\u5740\n    .ConfigureContainer(a =>//\u5bb9\u5668\u7684\u914d\u7f6e\u987a\u5e8f\u5e94\u8be5\u5728\u6700\u524d\u9762\n    {\n        a.AddConsoleLogger();//\u6dfb\u52a0\u4e00\u4e2a\u63a7\u5236\u53f0\u65e5\u5fd7\u6ce8\u5165\uff08\u6ce8\u610f\uff1a\u5728maui\u4e2d\u63a7\u5236\u53f0\u65e5\u5fd7\u4e0d\u53ef\u7528\uff09\n    })\n    .ConfigurePlugins(a =>\n    {\n        //a.Add();//\u6b64\u5904\u53ef\u4ee5\u6dfb\u52a0\u63d2\u4ef6\n    }))\n    .Start();//\u542f\u52a8\n')),(0,i.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"\u5728SendThenReturn\u65f6\uff0c\u901a\u8fc7\u5176\u4ed6\u53c2\u6570\uff0c\u8fd8\u53ef\u4ee5\u8bbe\u7f6eTimeout\uff0c\u4ee5\u53ca\u53ef\u53d6\u6d88\u7684\u7b49\u5f85Token\u3002")),(0,i.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"\u5b9e\u9645\u4e0a\u4e0a\u8ff0\u884c\u4e3a\uff0c\u53ea\u8981\u5b9e\u73b0IClient, IDefaultSender, ISend\u4e09\u4e2a\u63a5\u53e3\u7684\u7c7b\u5747\u53ef\u4ee5\u4f7f\u7528\u3002")),(0,i.kt)("admonition",{title:"\u6ce8\u610f\u4e8b\u9879",type:"danger"},(0,i.kt)("ol",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ol"},"\u53d1\u9001\u5b8c\u6570\u636e\uff0c\u5728\u7b49\u5f85\u65f6\uff0c\u5982\u679c\u6536\u5230\u5176\u4ed6\u8fd4\u56de\u6570\u636e\uff0c\u5219\u53ef\u80fd\u5f97\u5230\u9519\u8bef\u7ed3\u679c\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u53d1\u9001\u91c7\u7528Lock\u9501\uff0c\u4e00\u4e2a\u4e8b\u52a1\u6ca1\u7ed3\u675f\uff0c\u53e6\u4e00\u4e2a\u8bf7\u6c42\u4e5f\u53d1\u4e0d\u51fa\u53bb\u3002"))))}u.isMDXComponent=!0}}]);