"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[6171],{3905:(e,t,n)=>{n.d(t,{Zo:()=>y,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},y=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,c=e.parentName,y=o(e,["components","mdxType","originalType","parentName"]),u=i(n),m=a,d=u["".concat(c,".").concat(m)]||u[m]||s[m]||p;return n?r.createElement(d,l(l({ref:t},y),{},{components:n})):r.createElement(d,l({ref:t},y))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,l=new Array(p);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var i=2;i<p;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5705:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>p,metadata:()=>o,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const p={id:"dependencyproperty",title:"\u4f9d\u8d56\u5c5e\u6027"},l=void 0,o={unversionedId:"dependencyproperty",id:"dependencyproperty",title:"\u4f9d\u8d56\u5c5e\u6027",description:"\u5b9a\u4e49",source:"@site/docs/dependencyproperty.mdx",sourceDirName:".",slug:"/dependencyproperty",permalink:"/touchsocket/docs/dependencyproperty",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/docs/dependencyproperty.mdx",tags:[],version:"current",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1691304938,formattedLastUpdatedAt:"Aug 6, 2023",frontMatter:{id:"dependencyproperty",title:"\u4f9d\u8d56\u5c5e\u6027"},sidebar:"docs",previous:{title:"\u4f9d\u8d56\u6ce8\u5165\u5bb9\u5668(IOC)",permalink:"/touchsocket/docs/ioc"},next:{title:"\u6587\u4ef6\u6d41\u6c60",permalink:"/touchsocket/docs/filepool"}},c={},i=[{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",level:3},{value:"\u4e00\u3001\u8bf4\u660e",id:"\u4e00\u8bf4\u660e",level:2},{value:"\u4e8c\u3001\u4ec0\u4e48\u662f\u4f9d\u8d56\u5c5e\u6027\uff1f",id:"\u4e8c\u4ec0\u4e48\u662f\u4f9d\u8d56\u5c5e\u6027",level:2},{value:"2.1 \u5185\u90e8\u58f0\u660e",id:"21-\u5185\u90e8\u58f0\u660e",level:3},{value:"2.2 \u6269\u5c55\u58f0\u660e",id:"22-\u6269\u5c55\u58f0\u660e",level:3},{value:"\u4e09\u3001\u573a\u666f",id:"\u4e09\u573a\u666f",level:2},{value:"\u56db\u3001\u4f18\u7f3a\u70b9",id:"\u56db\u4f18\u7f3a\u70b9",level:2}],y={toc:i};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u5b9a\u4e49"},"\u5b9a\u4e49"),(0,a.kt)("p",null,"\u547d\u540d\u7a7a\u95f4\uff1aTouchSocket.Core ",(0,a.kt)("br",null),"\n\u7a0b\u5e8f\u96c6\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/TouchSocket.Core"},"TouchSocket.Core.dll")),(0,a.kt)("h2",{id:"\u4e00\u8bf4\u660e"},"\u4e00\u3001\u8bf4\u660e"),(0,a.kt)("p",null,"\u7528\u8fc7WPF\u7684\u5c0f\u4f19\u4f34\u4e00\u5b9a\u5bf9\u4f9d\u8d56\u5c5e\u6027\u4e0d\u964c\u751f\u3002\u6240\u4ee5TouchSocket\u6a21\u4eff\u5176\u7ed3\u6784\uff0c\u521b\u5efa\u4e86\u9002\u7528\u4e8e\u7f51\u7edc\u6846\u67b6\u7684\u4f9d\u8d56\u5c5e\u6027\u3002"),(0,a.kt)("h2",{id:"\u4e8c\u4ec0\u4e48\u662f\u4f9d\u8d56\u5c5e\u6027"},"\u4e8c\u3001\u4ec0\u4e48\u662f\u4f9d\u8d56\u5c5e\u6027\uff1f"),(0,a.kt)("p",null,"\u6211\u4eec\u77e5\u9053\u5e38\u89c4\u5c5e\u6027\uff0c\u5c31\u662f\u62e5\u6709get\uff0cset\u8bbf\u95ee\u5668\u7684\u5b57\u6bb5\uff0c\u53eb\u505a\u5c5e\u6027\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"class MyClass\n{\n    public int MyProperty { get; set; }\n}\n")),(0,a.kt)("p",null,"\u800c\u4f9d\u8d56\u5c5e\u6027\uff0c\u5219\u662f\u5177\u6709\u6ce8\u5165\u7279\u5f81\u7684\u5c5e\u6027\u3002\u5b83\u5177\u6709\u5982\u4e0b\u7279\u6027\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u53ef\u4ee5\u50cf\u666e\u901a\u5c5e\u6027\u4e00\u6837\uff0c\u58f0\u660e\u5728\u7c7b\u5185\u90e8\uff08\u793a\u4f8b1\uff09\uff0c\u5bf9\u5916\u754c\u7684\u516c\u5e03\u548c\u5e38\u89c4\u6570\u636e\u4e00\u6a21\u4e00\u6837\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u58f0\u660e\u5728\u9759\u6001\u7c7b\u4e2d\uff0c\u505a\u6210\u6269\u5c55\u65b9\u6cd5\uff0c\u5b9e\u73b0\u771f\u6b63\u7684\u6ce8\u5165\u578b\u5c5e\u6027\uff08\u793a\u4f8b2\uff09\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u53ef\u4ee5\u58f0\u660e\u521d\u59cb\u503c\u3002")),(0,a.kt)("h3",{id:"21-\u5185\u90e8\u58f0\u660e"},"2.1 \u5185\u90e8\u58f0\u660e"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u7ee7\u627f",(0,a.kt)("strong",{parentName:"li"},"DependencyObject")),(0,a.kt)("li",{parentName:"ol"},"\u6309\u5982\u4e0b\u683c\u5f0f\u751f\u6210\u5c5e\u6027\u9879\uff08propdp\u4ee3\u7801\u5757\u53ef\u5feb\u901f\u5b9e\u73b0\uff09")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'class MyDependencyObject: DependencyObject\n{\n    /// <summary>\n    /// \u5c5e\u6027\u9879\n    /// </summary>\n    public int MyProperty1\n    {\n        get { return GetValue(MyPropertyProperty1); }\n        set { SetValue(MyPropertyProperty1, value); }\n    }\n\n    /// <summary>\n    /// \u4f9d\u8d56\u9879\n    /// </summary>\n    public static readonly DependencyProperty<int> MyPropertyProperty1 =\n        DependencyProperty<int>.Register("MyProperty1", typeof(MyDependencyObject), 10);\n\n}\n')),(0,a.kt)("h3",{id:"22-\u6269\u5c55\u58f0\u660e"},"2.2 \u6269\u5c55\u58f0\u660e"),(0,a.kt)("p",null,"\u6269\u5c55\u58f0\u660e\uff0c\u5fc5\u987b\u8981\u63d0\u524d\u58f0\u660e\u6269\u5c55\u7c7b\u3002"),(0,a.kt)("p",null,"\u4e0b\u5217\u793a\u4f8b\u58f0\u660e\u4e00\u4e2aMyProperty\u7684\u5c5e\u6027\u6269\u5c55\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'public static class DependencyExtensions\n{\n   /// <summary>\n    /// \u4f9d\u8d56\u9879\n    /// </summary>\n    public static readonly DependencyProperty<int> MyPropertyProperty2 =\n        DependencyProperty<int>.Register("MyProperty2", typeof(DependencyExtensions), 10);\n\n    /// <summary>\n    /// \u8bbe\u7f6eMyProperty2\n    /// </summary>\n    /// <typeparam name="TClient"></typeparam>\n    /// <param name="client"></param>\n    /// <param name="value"></param>\n    /// <returns></returns>\n    public static TClient SetMyProperty2<TClient>(this TClient client, int value) where TClient : IDependencyObject\n    {\n        client.SetValue(MyPropertyProperty2, value);\n        return client;\n    }\n\n    /// <summary>\n    /// \u83b7\u53d6MyProperty2\n    /// </summary>\n    /// <typeparam name="TClient"></typeparam>\n    /// <param name="client"></param>\n    /// <returns></returns>\n    public static int GetMyProperty2<TClient>(this TClient client) where TClient : IDependencyObject\n    {\n        return client.GetValue(MyPropertyProperty2);\n    }\n}\n')),(0,a.kt)("p",null,"\u90a3\u4e48\u8fd9\u65f6\u5019\uff0c",(0,a.kt)("strong",{parentName:"p"},"MyDependencyObject"),"\u5bf9\u8c61\u5373\u53ef\u8d4b\u503c\u548c\u83b7\u53d6",(0,a.kt)("strong",{parentName:"p"},"MyProperty2"),"\u7684\u5c5e\u6027\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"{2-3}","{2-3}":!0},"MyDependencyObject obj=new MyDependencyObject();\nobj.SetMyProperty2(2);//\u6269\u5c55\u5c5e\u6027\u5fc5\u987b\u901a\u8fc7\u6269\u5c55\u65b9\u6cd5\nint value=obj.GetMyProperty2();\n")),(0,a.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u6269\u5c55\u7684",(0,a.kt)("strong",{parentName:"p"},"SetMyProperty2"),"\u548c",(0,a.kt)("strong",{parentName:"p"},"GetMyProperty2"),"\u4e0d\u662f\u5fc5\u987b\u7684\u3002\u5982\u679c\u6ca1\u6709\u8fd9\u4e24\u4e2a\u65b9\u6cd5\uff0c\u6211\u4eec\u4f9d\u7136\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("strong",{parentName:"p"},"GetValue"),"\u548c",(0,a.kt)("strong",{parentName:"p"},"SetValue"),"\u65b9\u6cd5\u8bbf\u95ee\u3002"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"{2-3}","{2-3}":!0},"MyDependencyObject obj=new MyDependencyObject();\nobj.SetValue(DependencyExtensions.MyPropertyProperty2,2);\nint value=obj.GetValue(DependencyExtensions.MyPropertyProperty2);\n"))),(0,a.kt)("h2",{id:"\u4e09\u573a\u666f"},"\u4e09\u3001\u573a\u666f"),(0,a.kt)("p",null,"\u5047\u8bbe\u4ee5\u4e0b\u60c5\u51b5\uff1a\n\u6709\u4e00\u4e2aPerson\u7c7b\uff0c\u5df2\u7ecf\u88ab\u5c01\u88c5\u597d\u4e86\uff0c\u751a\u81f3\u5df2\u7ecf\u88ab\u7f16\u8bd1\u6210dll\u4e86\u3002\u4f46\u662f\u4ed6\u53ea\u6709\u4e00\u4e2aAge\u5c5e\u6027\uff0c\u5982\u679c\u6211\u4eec\u60f3\u5728\u5f00\u53d1\u540e\u671f\u518d\u6dfb\u52a0\u5c5e\u6027\uff0c\u5e94\u8be5\u600e\u4e48\u529e\u5462\uff1f"),(0,a.kt)("p",null,"\u5e38\u89c4\u505a\u6cd5\u5c31\u662f\u7ee7\u627f\uff0c\u7136\u540e\u5728\u5b50\u7c7b\u6dfb\u52a0\u5c5e\u6027\u3002\u4ea6\u6216\u8005\u4fee\u6539\u6e90\u7801\uff0c\u91cd\u65b0\u7f16\u8bd1\u3002"),(0,a.kt)("p",null,"\u65e0\u8bba\u54ea\u4e00\u79cd\u90fd\u6709\u5f88\u5927\u7684\u9ebb\u70e6\u4e8b\u3002"),(0,a.kt)("p",null,"\u7ee7\u627f\uff0c\u4f1a\u8ba9\u663e\u5f0f\u7684Person\u7c7b\u65e0\u6cd5\u4f7f\u7528\u58f0\u660e\u5230\u5b50\u7c7b\u7684\u5c5e\u6027\uff0c\u5230\u65f6\u5019\u5fc5\u987b\u8fdb\u884c\u5f3a\u5236\u8f6c\u6362\uff0c\u800c\u4e00\u65e6\u7ee7\u627f\u5206\u652f\u591a\u8d77\u6765\u7684\u8bdd\uff0c\u5c06\u975e\u5e38\u7cdf\u7cd5\u3002"),(0,a.kt)("p",null,"\u800c\u91cd\u65b0\u7f16\u8bd1\uff0c\u5e26\u6765\u7684\u95ee\u9898\u5c31\u66f4\u5927\u4e86\uff0c\u603b\u4e0d\u80fd\u628a\u5c5e\u6027\u90fd\u58f0\u660e\u5728\u7236\u7c7b\u5427\u3002\u4f55\u51b5\u8fd8\u6709dll\u7248\u672c\u4f9d\u8d56\u95ee\u9898\uff0c\u540c\u4e8b\u63a8\u8131\u95ee\u9898\uff0c\u5df4\u62c9\u5df4\u62c9\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public class Person\n{\n    /// <summary>\n    /// \u5e74\u9f84\n    /// </summary>\n    public int Age { get; set; }//\u5e38\u89c4\u5c5e\u6027\n}\n")),(0,a.kt)("p",null,"\u90a3\u6211\u4eec\u5982\u4f55\u89e3\u51b3\u5462\uff1f"),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5728\u4e00\u5f00\u59cb\uff0c\u5c31\u5c06Person\u7c7b\u6309\u5982\u4e0b\u58f0\u660e\u3002\u7ee7\u627fDependencyObject\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public class Person : DependencyObject\n{\n    /// <summary>\n    /// \u5e74\u9f84\n    /// </summary>\n    public int Age { get; set; }//\u5e38\u89c4\u5c5e\u6027\n}\n")),(0,a.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4e0d\u65b9\u4fbf\u7ee7\u627f\uff0c\u4e5f\u53ef\u4ee5\u5b9e\u73b0",(0,a.kt)("strong",{parentName:"p"},"IDependencyObject"),"\u63a5\u53e3\uff0c\u4f46\u662f\u53ef\u80fd\u4f60\u9700\u8981\u590d\u5236",(0,a.kt)("strong",{parentName:"p"},"DependencyObject"),"\u7684\u5b9e\u73b0\u6e90\u7801\u5230\u4f60\u7684\u57fa\u7c7b\u4e2d\u3002")),(0,a.kt)("p",null,"\u7136\u540e\uff0c\u5c31Ok\u4e86\u3002\u5f53\u540e\u7eed\u4f60\u9700\u8981\u4ec0\u4e48\u5c5e\u6027\u7684\u65f6\u5019\uff0c\u81ea\u5df1\u58f0\u660e\u6269\u5c55\u5373\u53ef\u3002"),(0,a.kt)("p",null,"\u8fd9\u6837\uff0c\u4f60\u5c31\u53ef\u4ee5\u968f\u610f\u7684\u5f80",(0,a.kt)("strong",{parentName:"p"},"Person"),"\u7c7b\u4e2d\u6dfb\u52a0\u5c5e\u6027\u4e86\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'public static class DependencyExtensions\n{\n   /// <summary>\n    /// \u4f9d\u8d56\u9879\n    /// </summary>\n    public static readonly DependencyProperty<int> MyPropertyProperty2 =\n        DependencyProperty<int>.Register("MyProperty2", typeof(DependencyExtensions), 10);\n\n    /// <summary>\n    /// \u8bbe\u7f6eMyProperty2\n    /// </summary>\n    /// <typeparam name="TClient"></typeparam>\n    /// <param name="client"></param>\n    /// <param name="value"></param>\n    /// <returns></returns>\n    public static TClient SetMyProperty2<TClient>(this TClient client, int value) where TClient : IDependencyObject\n    {\n        client.SetValue(MyPropertyProperty2, value);\n        return client;\n    }\n\n    /// <summary>\n    /// \u83b7\u53d6MyProperty2\n    /// </summary>\n    /// <typeparam name="TClient"></typeparam>\n    /// <param name="client"></param>\n    /// <returns></returns>\n    public static int GetMyProperty2<TClient>(this TClient client) where TClient : IDependencyObject\n    {\n        return client.GetValue(MyPropertyProperty2);\n    }\n}\n')),(0,a.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u5728\u58f0\u660e\u6269\u5c55\u65f6\uff0c\u8fd8\u53ef\u4ee5\u5bf9",(0,a.kt)("strong",{parentName:"p"},"where TClient : IDependencyObject"),"\u8fdb\u884c\u6cdb\u578b\u7ea6\u675f\uff0c\u8fd9\u6837\uff0c\u5c31\u80fd\u7ba1\u7406\u5c5e\u6027\u7684\u4f5c\u7528\u57df\u4e86\u3002")),(0,a.kt)("h2",{id:"\u56db\u4f18\u7f3a\u70b9"},"\u56db\u3001\u4f18\u7f3a\u70b9"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4f18\u70b9\uff1a")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u53ef\u4ee5\u4e0d\u58f0\u660e\u5728\u7c7b\u5185\u90e8\u3002\u8fd9\u610f\u5473\u7740\u53ef\u4ee5\u4ece\u5916\u90e8\u6ce8\u5165\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u4e0d\u9700\u8981\u521d\u59cb\u8d4b\u503c\uff0c\u4e5f\u5c31\u610f\u5473\u7740\u521b\u5efa\u5927\u91cf\u5bf9\u8c61\u65f6\uff0c\u53ef\u4ee5\u4e0d\u9700\u8981\u5360\u7528\u592a\u591a\u5185\u5b58\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7f3a\u70b9\uff1a")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5bf9\u6027\u80fd\u6709\u4e00\u5b9a\u6027\u80fd\u5f71\u54cd\u3002\u51c6\u786e\u8bf4\uff0c\u5bf9\u4e8e\u503c\u7c7b\u578b\uff0c\u6709\u62c6\u88c5\u7bb1\u3001\u67e5\u5b57\u5178\u4e24\u4e2a\u635f\u8017\u3002\u5bf9\u4e8e\u5f15\u7528\u7c7b\u578b\uff0c\u4f1a\u591a\u4e00\u4e2a\u5b57\u5178\u67e5\u8be2\u64cd\u4f5c\u3002\u4f46\u662f\u8fd9\u79cd\u6027\u80fd\u635f\u8017\uff0c\u7ecf\u5b9e\u6d4b\uff0c\u57281\u4ebf\u6b21\u5b58\u53d6\u65f6\uff0c\u624d\u6709\u4e0d\u5230\u4e00\u79d2\u7684\u5dee\u8ddd\u3002")))}s.isMDXComponent=!0}}]);