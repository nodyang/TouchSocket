"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[8032],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),c=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(t),d=r,y=m["".concat(i,".").concat(d)]||m[d]||u[d]||l;return t?a.createElement(y,o(o({ref:n},p),{},{components:t})):a.createElement(y,o({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<l;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4139:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const l={id:"ioc",title:"\u4f9d\u8d56\u6ce8\u5165\u5bb9\u5668(IOC)"},o=void 0,s={unversionedId:"ioc",id:"ioc",title:"\u4f9d\u8d56\u6ce8\u5165\u5bb9\u5668(IOC)",description:"\u5b9a\u4e49",source:"@site/docs/ioc.mdx",sourceDirName:".",slug:"/ioc",permalink:"/touchsocket/docs/ioc",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/docs/ioc.mdx",tags:[],version:"current",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1694582119,formattedLastUpdatedAt:"Sep 13, 2023",frontMatter:{id:"ioc",title:"\u4f9d\u8d56\u6ce8\u5165\u5bb9\u5668(IOC)"},sidebar:"docs",previous:{title:"Json\u5e8f\u5217\u5316",permalink:"/touchsocket/docs/jsonserialize"},next:{title:"\u4f9d\u8d56\u5c5e\u6027",permalink:"/touchsocket/docs/dependencyproperty"}},i={},c=[{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",level:3},{value:"\u4e00\u3001\u8bf4\u660e",id:"\u4e00\u8bf4\u660e",level:2},{value:"\u4e8c\u3001\u7279\u70b9",id:"\u4e8c\u7279\u70b9",level:2},{value:"\u4e09\u3001\u6ce8\u5165\u65b9\u5f0f",id:"\u4e09\u6ce8\u5165\u65b9\u5f0f",level:2},{value:"3.1 \u6784\u9020\u51fd\u6570\u6ce8\u5165",id:"31-\u6784\u9020\u51fd\u6570\u6ce8\u5165",level:3},{value:"3.2 \u5c5e\u6027\u6ce8\u5165",id:"32-\u5c5e\u6027\u6ce8\u5165",level:3},{value:"3.3 \u65b9\u6cd5\u6ce8\u5165",id:"33-\u65b9\u6cd5\u6ce8\u5165",level:3},{value:"3.4 \u6ce8\u5165\u7b5b\u9009",id:"34-\u6ce8\u5165\u7b5b\u9009",level:3},{value:"\u56db\u3001\u751f\u547d\u5468\u671f",id:"\u56db\u751f\u547d\u5468\u671f",level:2},{value:"\u4e94\u3001\u4f7f\u7528ServiceCollection",id:"\u4e94\u4f7f\u7528servicecollection",level:2}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"\u5b9a\u4e49"},"\u5b9a\u4e49"),(0,r.kt)("p",null,"\u547d\u540d\u7a7a\u95f4\uff1aTouchSocket.Core ",(0,r.kt)("br",null),"\n\u7a0b\u5e8f\u96c6\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/TouchSocket.Core"},"TouchSocket.Core.dll")),(0,r.kt)("h2",{id:"\u4e00\u8bf4\u660e"},"\u4e00\u3001\u8bf4\u660e"),(0,r.kt)("p",null,"\u6240\u8c13\u4f9d\u8d56\u6ce8\u5165\uff0c\u662f\u6307\u7a0b\u5e8f\u8fd0\u884c\u8fc7\u7a0b\u4e2d\uff0c\u5982\u679c\u9700\u8981\u8c03\u7528\u53e6\u4e00\u4e2a\u5bf9\u8c61\u534f\u52a9\u65f6\uff0c\u65e0\u987b\u5728\u4ee3\u7801\u4e2d\u521b\u5efa\u88ab\u8c03\u7528\u8005\uff0c\u800c\u662f\u4f9d\u8d56\u4e8e\u5916\u90e8\u7684\u6ce8\u5165\u3002\u901a\u4fd7\u6765\u8bb2\uff0c\u5c31\u662f\u628a\u6709\u4f9d\u8d56\u5173\u7cfb\u7684\u7c7b\u653e\u5230\u5bb9\u5668\u4e2d\uff0c\u7136\u540e\u5728\u6211\u4eec\u9700\u8981\u8fd9\u4e9b\u7c7b\u65f6\uff0c\u5bb9\u5668\u81ea\u52a8\u89e3\u6790\u51fa\u8fd9\u4e9b\u7c7b\u7684\u5b9e\u4f8b\u3002\u4f9d\u8d56\u6ce8\u5165\u6700\u5927\u7684\u597d\u5904\u65f6\u5b9e\u73b0\u7c7b\u7684\u89e3\u8026\uff0c\u5229\u4e8e\u7a0b\u5e8f\u62d3\u5c55\u3001\u5355\u5143\u6d4b\u8bd5\u3001\u81ea\u52a8\u5316\u6a21\u62df\u6d4b\u8bd5\u7b49\u3002\u4f9d\u8d56\u6ce8\u5165\u7684\u82f1\u6587\u4e3a\uff1aDependency Injection\uff0c\u7b80\u79f0 DI\u3002\uff08\u8bf4\u660e\u6765\u81ea\u7f51\u7edc\uff09"),(0,r.kt)("p",null,"TouchSocket\u5185\u7f6e\u4e86",(0,r.kt)("strong",{parentName:"p"},"Container"),"\u5bb9\u5668\u3002\u53ea\u9700\u8981\u5f15\u5165TouchSocket.Core\u5373\u53ef\u4f7f\u7528\u3002"),(0,r.kt)("h2",{id:"\u4e8c\u7279\u70b9"},"\u4e8c\u3001\u7279\u70b9"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u6784\u9020\u51fd\u6570\u3001\u5c5e\u6027\u3001\u65b9\u6cd5\u4e09\u79cd\u6ce8\u5165\u65b9\u5f0f\uff0c\u53ef\u4ee5\u9009\u62e9\u5176\u4e2d\u90e8\u5206\u751f\u6548\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301",(0,r.kt)("inlineCode",{parentName:"li"},"Singleton"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"Transient"),"\u4e24\u79cd\u751f\u547d\u5468\u671f\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u5355\u63a5\u53e3\uff0c\u591a\u5b9e\u73b0\u6ce8\u5165\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u5f53\u83b7\u53d6\u7c7b\u578b\u662f\u53ef\u5b9e\u4f8b\u7c7b\u578b\u65f6\uff0c\u5373\u4f7f\u4e0d\u6ce8\u518c\uff0c\u4e5f\u80fd\u6210\u529f\u6784\u9020\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u9ed8\u8ba4\u53c2\u6570\u6ce8\u5165\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u6784\u5efa\u53c2\u6570\u6ce8\u5165\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u6807\u7b7e\u53c2\u6570\u6ce8\u5165\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u6cdb\u578b\u6ce8\u5165\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301Object\u6ce8\u5165\u3002")),(0,r.kt)("h2",{id:"\u4e09\u6ce8\u5165\u65b9\u5f0f"},"\u4e09\u3001\u6ce8\u5165\u65b9\u5f0f"),(0,r.kt)("h3",{id:"31-\u6784\u9020\u51fd\u6570\u6ce8\u5165"},"3.1 \u6784\u9020\u51fd\u6570\u6ce8\u5165"),(0,r.kt)("p",null,"\u3010\u5b9a\u4e49\u7c7b\u578b\u3011"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"class MyClass1\n{\n\n}\n\nclass MyClass2\n{\n    public MyClass2(MyClass1 myClass1)\n    {\n        this.MyClass1 = myClass1;\n    }\n\n    public MyClass1 MyClass1 { get; }\n}\n")),(0,r.kt)("p",null,"\u3010\u6ce8\u518c\u548c\u83b7\u53d6\u3011"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"/// <summary>\n/// \u6784\u9020\u51fd\u6570\u6ce8\u5165\n/// </summary>\nstatic void ConstructorInject()\n{\n    var container = GetContainer();\n    container.RegisterSingleton<MyClass1>();\n    container.RegisterSingleton<MyClass2>();\n\n    var myClass1 = container.Resolve<MyClass1>();\n    var myClass2 = container.Resolve<MyClass2>();\n\n    Console.WriteLine(MethodBase.GetCurrentMethod().Name);\n}\n")),(0,r.kt)("h3",{id:"32-\u5c5e\u6027\u6ce8\u5165"},"3.2 \u5c5e\u6027\u6ce8\u5165"),(0,r.kt)("p",null,"\u4f7f\u7528",(0,r.kt)("strong",{parentName:"p"},"DependencyParamterInject"),"\uff0c\u6216\u8005",(0,r.kt)("strong",{parentName:"p"},"DependencyInject"),"\u6807\u8bb0\u5c5e\u6027\uff0c\u5373\u53ef\u6ce8\u5165\u3002"),(0,r.kt)("p",null,"\u3010\u5b9a\u4e49\u7c7b\u578b\u3011"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'class MyClass3\n{\n    /// <summary>\n    /// \u76f4\u63a5\u6309\u7c7b\u578b\uff0c\u9ed8\u8ba4\u65b9\u5f0f\u83b7\u53d6\n    /// </summary>\n    [DependencyInject]\n    public MyClass1 MyClass1 { get; set; }\n\n    /// <summary>\n    /// \u83b7\u5f97\u6307\u5b9a\u7c7b\u578b\u7684\u5bf9\u8c61\uff0c\u7136\u540e\u8d4b\u503c\u5230object\n    /// </summary>\n    [DependencyParamterInject(typeof(MyClass2))]\n    public object MyClass2 { get; set; }\n\n    /// <summary>\n    /// \u6309\u7167\u7c7b\u578b+Key\u83b7\u53d6\n    /// </summary>\n    [DependencyParamterInject("key")]\n    public MyClass1 KeyMyClass1 { get; set; }\n}\n')),(0,r.kt)("p",null,"\u3010\u6ce8\u518c\u548c\u83b7\u53d6\u3011"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'static void PropertyInject()\n{\n    var container = GetContainer();\n    container.RegisterSingleton<MyClass1>();\n    container.RegisterSingleton<MyClass1>("key");\n    container.RegisterSingleton<MyClass2>();\n\n    container.RegisterSingleton<MyClass3>();\n\n    var myClass3 = container.Resolve<MyClass3>();\n    Console.WriteLine(MethodBase.GetCurrentMethod().Name);\n}\n')),(0,r.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"DependencyParamterInject"),"\u7279\u6027\u4e2d\uff0cType\u548cKey\uff0c\u53ef\u4ee5\u540c\u65f6\u4f7f\u7528\uff0c\u4e5f\u53ef\u4ee5\u53ea\u4f7f\u7528\u5176\u4e2d\u4e00\u4e2a\u3002")),(0,r.kt)("h3",{id:"33-\u65b9\u6cd5\u6ce8\u5165"},"3.3 \u65b9\u6cd5\u6ce8\u5165"),(0,r.kt)("p",null,"\u4f7f\u7528",(0,r.kt)("strong",{parentName:"p"},"DependencyInject"),"\u6807\u8bb0\u5c5e\u6027\uff0c\u5373\u53ef\u5bf9\u65b9\u6cd5\u6ce8\u5165\u3002"),(0,r.kt)("p",null,"\u3010\u5b9a\u4e49\u7c7b\u578b\u3011"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"class MyClass4\n{\n    public MyClass1 MyClass1 { get;private set; }\n\n\n    [DependencyInject]\n    public void MethodInject(MyClass1 myClass1)\n    {\n        this.MyClass1 = myClass1;\n    }\n}\n")),(0,r.kt)("p",null,"\u3010\u6ce8\u518c\u548c\u83b7\u53d6\u3011"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"static void MethodInject()\n{\n    var container = GetContainer();\n    container.RegisterSingleton<MyClass1>();\n    container.RegisterSingleton<MyClass4>();\n\n    var myClass4= container.Resolve<MyClass4>();\n    Console.WriteLine(MethodBase.GetCurrentMethod().Name);\n}\n")),(0,r.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"DependencyInject"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"DependencyParamterInject"),"\u7279\u6027\uff0c\u4e5f\u53ef\u4ee5\u5728\u65b9\u6cd5\u6ce8\u5165\u65f6\uff0c\u5bf9\u53c2\u6570\u8fdb\u884c\u4f7f\u7528\u3002")),(0,r.kt)("h3",{id:"34-\u6ce8\u5165\u7b5b\u9009"},"3.4 \u6ce8\u5165\u7b5b\u9009"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u4e00\u4e2a\u7c7b\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4f1a\u652f\u6301",(0,r.kt)("inlineCode",{parentName:"p"},"\u6784\u9020\u51fd\u6570"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"\u5c5e\u6027"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"\u65b9\u6cd5"),"\u4e09\u79cd\u6ce8\u5165\u65b9\u5f0f\u3002\u4f46\u662f\uff0c\u5f53\u660e\u786e\u77e5\u9053\u8be5\u7c7b\u578b\u4ec5\u4f1a\u4f7f\u7528\u5176\u4e2d\u90e8\u5206\u65b9\u5f0f\u6ce8\u5165\u65f6\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u6ce8\u5165\u7c7b\u578b\uff0c\u4ee5\u6b64\u8282\u7ea6\u6027\u80fd\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"{4}","{4}":!0},"/// <summary>\n/// \u8ba9MyClass1\u4ec5\u652f\u6301\u6784\u9020\u51fd\u6570\u548c\u5c5e\u6027\u6ce8\u5165\n/// </summary>\n[DependencyType(DependencyType.Constructor | DependencyType.Property)]\nclass MyClass1\n{\n\n}\n")),(0,r.kt)("h2",{id:"\u56db\u751f\u547d\u5468\u671f"},"\u56db\u3001\u751f\u547d\u5468\u671f"),(0,r.kt)("p",null,"\u751f\u547d\u5468\u671f\u662f\u5bf9\u6ce8\u5165\u6784\u9020\u7684\u5b9e\u4f8b\u7684\u6709\u6548\u6027\u800c\u8a00\u7684\u3002TouchSocket\u652f\u6301\u4e24\u79cd\u751f\u547d\u5468\u671f\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Singleton\uff1a\u5355\u4f8b\u6ce8\u5165\uff0c\u5f53\u6ce8\u5165\uff0c\u5e76\u4e14\u5b9e\u4f8b\u5316\u4ee5\u540e\uff0c\u5168\u5c40\u552f\u4e00\u5b9e\u4f8b\u3002"),(0,r.kt)("li",{parentName:"ul"},"Transient\uff1a\u77ac\u65f6\u6ce8\u5165\uff0c\u6bcf\u6b21\u83b7\u53d6\u7684\u5b9e\u4f8b\u90fd\u662f\u65b0\u5b9e\u4f8b\u3002")),(0,r.kt)("p",null,"\u5bf9\u4e8e\u524d\u4e24\u79cd\uff0c\u719f\u6089IOC\u7684\u540c\u5b66\uff0c\u76f8\u4fe1\u90fd\u77e5\u9053\u5230\u3002"),(0,r.kt)("h2",{id:"\u4e94\u4f7f\u7528servicecollection"},"\u4e94\u3001\u4f7f\u7528ServiceCollection"),(0,r.kt)("p",null,"\u8bf7\u5b89\u88c5NuGet\u5305\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"TouchSocket.Core.DependencyInjection"),"\u3002"),(0,r.kt)("p",null,"\u7136\u540e\u76f4\u63a5\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"AspNetCoreContainer"),"\u66ff\u4ee3",(0,r.kt)("inlineCode",{parentName:"p"},"Container"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"static IContainer GetContainer()\n{\n    //return new Container();//\u9ed8\u8ba4IOC\u5bb9\u5668\n\n    return new AspNetCoreContainer(new ServiceCollection());//\u4f7f\u7528Aspnetcore\u7684\u5bb9\u5668\n}\n")),(0,r.kt)("p",null,"Config\u4f7f\u7528"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"var config=new TouchSocketConfig()//\u8f7d\u5165\u914d\u7f6e\n                .UseAspNetCoreContainer(new ServiceCollection());//ServiceCollection\u53ef\u4ee5\u4f7f\u7528\u73b0\u6709\u7684\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://gitee.com/RRQM_Home/TouchSocket/tree/master/examples/Core/IocConsoleApp"},"\u672c\u6587\u793a\u4f8bDemo")))}u.isMDXComponent=!0}}]);