"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[3738],{3905:(A,t,e)=>{e.d(t,{Zo:()=>I,kt:()=>g});var r=e(7294);function n(A,t,e){return t in A?Object.defineProperty(A,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):A[t]=e,A}function o(A,t){var e=Object.keys(A);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(A);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(A,t).enumerable}))),e.push.apply(e,r)}return e}function i(A){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?o(Object(e),!0).forEach((function(t){n(A,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(t){Object.defineProperty(A,t,Object.getOwnPropertyDescriptor(e,t))}))}return A}function C(A,t){if(null==A)return{};var e,r,n=function(A,t){if(null==A)return{};var e,r,n={},o=Object.keys(A);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||(n[e]=A[e]);return n}(A,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(A);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(A,e)&&(n[e]=A[e])}return n}var a=r.createContext({}),E=function(A){var t=r.useContext(a),e=t;return A&&(e="function"==typeof A?A(t):i(i({},t),A)),e},I=function(A){var t=E(A.components);return r.createElement(a.Provider,{value:t},A.children)},u={inlineCode:"code",wrapper:function(A){var t=A.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(A,t){var e=A.components,n=A.mdxType,o=A.originalType,a=A.parentName,I=C(A,["components","mdxType","originalType","parentName"]),l=E(e),g=n,p=l["".concat(a,".").concat(g)]||l[g]||u[g]||o;return e?r.createElement(p,i(i({ref:t},I),{},{components:e})):r.createElement(p,i({ref:t},I))}));function g(A,t){var e=arguments,n=t&&t.mdxType;if("string"==typeof A||n){var o=e.length,i=new Array(o);i[0]=l;var C={};for(var a in t)hasOwnProperty.call(t,a)&&(C[a]=t[a]);C.originalType=A,C.mdxType="string"==typeof A?A:n,i[1]=C;for(var E=2;E<o;E++)i[E]=e[E];return r.createElement.apply(null,i)}return r.createElement.apply(null,e)}l.displayName="MDXCreateElement"},3160:(A,t,e)=>{e.r(t),e.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>C,toc:()=>E});var r=e(7462),n=(e(7294),e(3905));const o={id:"troubleshootunity3d",title:"Unity3D\u76f8\u5173"},i=void 0,C={unversionedId:"troubleshootunity3d",id:"troubleshootunity3d",title:"Unity3D\u76f8\u5173",description:"\u3010\u95ee\u3011\u7a0b\u5e8f\u96c6\u7528\u4e8eUnity 3D\u65f6\uff0c\u6709\u83ab\u540d\u5176\u5999\u7684\u5f02\u5e38\uff1f",source:"@site/docs/troubleshootunity3d.mdx",sourceDirName:".",slug:"/troubleshootunity3d",permalink:"/touchsocket/docs/troubleshootunity3d",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/docs/troubleshootunity3d.mdx",tags:[],version:"current",frontMatter:{id:"troubleshootunity3d",title:"Unity3D\u76f8\u5173"},sidebar:"docs",previous:{title:"\u7591\u96be\u89e3\u7b54",permalink:"/touchsocket/docs/troubleshootsourcecode"},next:{title:"\u5185\u5b58\u6c60",permalink:"/touchsocket/docs/bytepool"}},a={},E=[{value:"\u3010\u95ee\u3011\u7a0b\u5e8f\u96c6\u7528\u4e8eUnity 3D\u65f6\uff0c\u6709\u83ab\u540d\u5176\u5999\u7684\u5f02\u5e38\uff1f",id:"\u95ee\u7a0b\u5e8f\u96c6\u7528\u4e8eunity-3d\u65f6\u6709\u83ab\u540d\u5176\u5999\u7684\u5f02\u5e38",level:2},{value:"\u3010\u89e3\u51b31\u3011",id:"\u89e3\u51b31",level:3},{value:"\u3010\u89e3\u51b32\u3011",id:"\u89e3\u51b32",level:3}],I={toc:E};function u(A){let{components:t,...o}=A;return(0,n.kt)("wrapper",(0,r.Z)({},I,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u95ee\u7a0b\u5e8f\u96c6\u7528\u4e8eunity-3d\u65f6\u6709\u83ab\u540d\u5176\u5999\u7684\u5f02\u5e38"},"\u3010\u95ee\u3011\u7a0b\u5e8f\u96c6\u7528\u4e8eUnity 3D\u65f6\uff0c\u6709\u83ab\u540d\u5176\u5999\u7684\u5f02\u5e38\uff1f"),(0,n.kt)("p",null,"\u3010\u63cf\u8ff0\u3011"),(0,n.kt)("p",null,"\u6211\u5c06TouchSocket\u7a0b\u5e8f\u96c6\u5f15\u5165\u5230U3D\u4e2d\u540e\uff0c\u4f7f\u7528\u4e86\u76f8\u5173\u529f\u80fd\uff0c\u6216\u8005\u5176\u4ed6\u7ec4\u4ef6\u529f\u80fd\uff0c\u5728\u7f16\u8f91\u5668\u754c\u9762\u6b63\u5e38\uff0c\u4f46\u662f\u53d1\u5e03\u5230PC\u3001Android\u7b49\u5e73\u53f0\u65f6\u65e0\u6cd5\u4f7f\u7528\uff1f"),(0,n.kt)("h3",{id:"\u89e3\u51b31"},"\u3010\u89e3\u51b31\u3011"),(0,n.kt)("p",null,"\u9996\u5148\u67e5\u770b\u9879\u76ee\u662f\u5426\u8bbe\u7f6e\u4e86",(0,n.kt)("inlineCode",{parentName:"p"},"IL2CPP"),"\uff0c\u5982\u679c\u8bbe\u7f6e\u4e86\u7684\u8bdd\uff0c\u53ef\u4ee5\u8003\u8651\u662f\u5426\u80fd\u8bbe\u7f6e\u4e3a",(0,n.kt)("inlineCode",{parentName:"p"},"Mono"),"\uff0c\u5982\u679c\u80fd\uff0c\u5219OK\u3002"),(0,n.kt)("img",{src:e(7453).Z,width:"300"}),(0,n.kt)("h3",{id:"\u89e3\u51b32"},"\u3010\u89e3\u51b32\u3011"),(0,n.kt)("p",null,"\u9700\u8981unity\u5185link.xml\u8bbe\u7f6e(\u653e\u7f6e\u5728Assets\u6587\u4ef6\u5939\u5185)\u3002 ",(0,n.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/current/Manual/ManagedCodeStripping.html#LinkXML"},"unity\u5b98\u65b9\u6587\u6863 \u6258\u7ba1\u4ee3\u7801\u5265\u79bb")),(0,n.kt)("p",null,"\u4e0b\u5217\u4ec5\u793a\u4f8b\u90e8\u5206\uff0c\u5982\u679c\u662f\u5176\u4ed6\u7ec4\u4ef6\uff0c\u5219\u6dfb\u52a0\u76f8\u5e94\u7a0b\u5e8f\u96c6\u540d\u79f0\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"xml",xml:!0},'<linker>\n    <assembly fullname="TouchSocket" />\n</linker>\n')),(0,n.kt)("p",null,"\u7136\u540e\u5728\u7a0b\u5e8f\u8fd0\u4f5c\u6700\u5f00\u59cb\u65f6\u8c03\u7528\u5168\u5c40\u8bbe\u7f6e"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"GlobalEnvironment.OptimizedPlatforms = OptimizedPlatforms.Unity;\n")))}u.isMDXComponent=!0},7453:(A,t,e)=>{e.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYUAAACpCAYAAADEOiGxAAAAAXNSR0IArs4c6QAAHFBJREFUeF7tnQm0VVP8x38p9CiZShlShDIvCgkJFYkIDcqwzAqFTEVpMEerkDnjQiLDylzGzJVKGoypUBpUXijV+6/v/v/P/Z/uu+e+e3vnvnvOfZ+9VqveO+fs/duffdrfs3+/c/avStu2bUuMAgEIQAAClY7ADz/8YPXr19+g31UQhUp3H9BhCEAAAo4AosCNAAEIQAACCQKIAjcDBCAAAQggCtwDEIAABCBQmgArBe4KCEAAAhBgpcA9AAEIQAACrBS4ByAAAQhAIA0B3EfcHhCAAAQggPuIewACEIAABHAfcQ9AAAIQgADuI+4BCEAAAhDIhAAxhUwocQ4EIACBSkIAUagkA003IQABCGRCAFHIhBLnQAACEKgkBBCFSjLQdBMCEIBAJgQQhUwocQ4EIACBSkIAUagkA003IQABCGRCAFHIhBLnQAACEKgkBBCFSjLQdBMCEIBAJgQQhUwocQ4EIACBSkIgVFEYt2JFJcFGNyEAAQhUDgJtioqsStu2bUs2pruIwsZQ4xoIQAAC0SWAKER3bLAMAhCAQIUTCE0U2teqVeHG0yAEIAABCJSPgGIKs2vXTlSCKJSPJ1dDAAIQiDUBRCHWw4fxEIAABMIlgCiEy5PaIAABCMSaAKIQ6+HDeAhAAALhEsiZKLRsNThcS6kNAhCAAATKRaDKujVWbdlMqz5/fGA9OROFTvXqlct4LoYABCAAgXAJrK9aZMV1mtvaNf8GCgOiEC5zaoMABCAQaQIShiW7dbMa00aktBNRiPTwYRwEIACB8AksatzDak4Zmh9RuPDCC+25556z4uJi8/872ZoaNWpY+/btrUGDBrZ06VIbN26c/f7774nT9PtjjjnG6tSpY8uXL7eJEyfajBkzEsdV9+abb+5+Xr16tc2aNcs++eQTKyn53x07yjoePnZqhAAEIBBNAnkVhTvvvNNuvfVWN5H7/52M6vLLL7e5c+e6iXy33Xazk08+2YYMGWJr1qyxxo0b29lnn+2E4pdffrEdd9zRHX/zzTft008/dVWp7ieffNL++usvk8Acf/zxpmXQa6+9ltHxaA4dVkEAAhAIn0DkRWGTTTaxSy65xB588EFbv369I9CnTx8bM2aME4H+/fvb6NGjbc6cOQk6DRs2tIsuusj69u3rVgPJglOvXj277LLLrF+/fglR8MRJv0g+Hj52aoQABCAQTQKRF4VkbFtssYWbzG+55RarWbOm9ejRwwYMGJCWbrIoyM3Uu3dvJxreSsIvCsnHozl0WAUBCEAgPYH99tvP2rRpk/Kkd955x7755ptSx2IlClo1yP//888/mzq0xx57WLt27Wz48OFlisLIkSNt5cqVtuWWW9pJJ51kixcvdqsNTxTSHefGgwAEIBBXAnKX77PPPhuY/+2339pbb72VskuxEoUuXbpYUVGRPfHEE84ttMsuu1j37t3ttttuK1MUVqxYYevWrbN///3XZs+ebe+++6772ROFdMfjejNgNwQgAAE9THfs2NF23XVXB0Nu97Fjxybc8cmEYiMKevtInVJswZvMq1at6gLVd911ly1ZsiTRt2222cY6depkDz/8cMqYQjKEdEFubikIQAACcSegty87d+7suqEYrN7CDCqxEIWWLVta06ZN7d5773VvHPlL69at7cADD7THHnvMli1b5t4u0ttI+vfzzz+fWAn4YwaIQtxvceyHAASyJaAYrIrewkxXIiUKVapUSXw7IKPvuece1wG5h/7777/ECkHHtPz5/PPPTddIGI499lh3XIqo3+u43z2EKGR7C3E+BCBQGQnkVRTCBC5xkBKuWrVqA/EIsw3qggAEIFDoBApGFAp9oOgfBCAAgYoggChUBGXagAAEIBADAmyIF4NBwkQIQAACFUEgr1tnk2SnIoaYNiAAAQhkTiCvSXba16qVuaWcCQEIQAACkSCQs3wKiEIkxhcjIAABCGRFIGei0Ozff7MyhJMhAAEIQCC3BPRav7YR8j5yS9VazkSBHM25HVxqhwAEIJAtAX3s++eff7rvvIKEAVHIlirnQwACEIgxAQnC/PnzXRZLVgoxHkhMhwAEIBAWAaUm2GGHHfIvCsqT8P7777s0mV7ZbLPNXP6E+++/3/3Kn0vZO0dpN5Uj4aijjkrZCS8Np/+g/GZt27a1Pffc09auXesSTUyYMCGxlawS+ej3yZvvlRe68kgvXLjQZs6cWa6qguopK5e116h2lz3hhBPcHuvKMfHGG2+47XQpEIAABCIjCtq++p9//nGb3ynngYom79tvv9169erlfvbnWvaGTltma7/wbbfd1v2qQ4cO9uOPP9qMGTPcz7/+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q76g63RME/gRRxzhlmmyT5F/uXx++eUXF3c57LDDbKeddjK53dSeJnmPhfx6hxxyiJvcFRjyivrcvHlze/DBB92vJBDKfTFnzpzEOWrvqquusptuusnV5xcF2ST+Eo8ZM2Y4DhIFtd+3b1975plnbN68eYX9P4LeQaCSE4iEKMjFc/PNNzt3jibI/fbbz01Md999t3ua1TFNhHri33bbbe3YY4+1O+64w0XJk590dY0mMD3xa4LXJC5B+fHHH0uJwttvv2077rijPf300+6YJsWBAwfaBx984FwmEgVv4pw0aZKzQeKwZMkSe+WVVxK2pbI73XVqq2fPnrZq1Srnvtpnn31sjz32sPHjx7sJ+IILLnB9U5t77723c/3cd999rj3Zp9XPtGnT3MQtYfPKqaee6n5WvzT59+jRwwYMGFDqFu/Vq5drSwLk53fppZc6QZZNGoNGjRqZtkmXTaeddpqtXLnS/UyBAATiQUD/j+VSTlXeeecd++abb0odiowo3HLLLXbNNdc4//8mm2xiQ4cOtX79+rmn5ttuu81NhpqMVTp37uwmVE3eQaKgFUVZ7qMhQ4bYDTfcYPpb9R166KG27777usl29913T6wU9Bqt90QuH33Xrl2dTZqkg+zW5Bp03a677mrnnnuua1eTv4qETP3Rk7jsllvN+57j2muvtTFjxtjixYvdNeKklUNykYtn5syZzvUlkWnXrp0NHz681HlnnXWWE0mtcDx+ejPs/PPPt8GDBydsEv/333/fiULLli2tfv36CQGNx38JrIQABI4//nj34OkveviWpyFViYwoJE/umhTl4tEqQk+7mgi9IteJFFCukfKIglwo8rErqDxhwgTr06ePKf+0ViN+UVBbSgikp2+tJlQ0eabyyXt2K04SdJ1n/2OPPZbokzdRa7I//fTTnU1ekdtKoqAVQroYwMUXX2xfffWVe9LXJK8gssQruXjnyUXm1ZfOJonCQQcdZM2aNbOHHnqI/2UQgECMCOghW14TPYyqyEMwduxY5wKPrSjoaVx+cO+pWm/FyO2jjsm1pCdpFfnlhw0bZtddd52LPZS1UpAoSAD0JtLjjz/uzteTuFYMnihoZaAnaMUeBFOuHO+JOp0obL311oHXaTUiF5j/KV6unqlTp7o4ypFHHmmjRo3aYLy0gtLXhulEQUFlxQAUP9EKSwJ11113JVZYqlB1aNWlYxJcrz7FD44++mgbMWJEol2Jh5aXEgW5zfbaay/HiQIBCMSLwOabb+48LCp6mNb8GFRisVLQ064EQK4M+eolAnqjRpOoVhN64tZTr1wcUkStKtTpbt26OZeLfGfJRddJFHRe7969bcstt7SJEye6ALdfFA488EA3Sd97772uCgWy9buyVgoSk6DrNEAKAqtPclXpLSGtFPSz+qSJeuTIkbZgwQIXrJa7SgOpkk4U5DvU+Yp3qLRu3drZKj4KuEvEtHpQQFuvAvtFTddpRaZ2JX5aFUlcX3zxRScKCtrrFdaXX345Xv8bsBYCEHAEvK+UtbtEuhILUdBE+OWXX7rJU5O3Jk65U1Tk9pAC6qlXPrL27ds7/7wme03MWgUo2KzJzl/8onDwwQebXr9UO4oF+EVB7iIFfuXC0UpE7+rLX1+WKChGEXSd7NBK55RTTnErD303ILH76aef3ATcpEkT69Kli7NFKw6JlUSwrFdI5fOXgCgIryJ7JQxalWiVpTZUv1xk+jm5Pr291KlTJxdQFj/FUdRfXaPAuOxQgJsCAQgULoG8ikImWP0Tl1wfKpos/UU+M02AnnvJf0y/18Se6gO2TNr3zpEdqiPbeoKuk2r7FVvipViA3mRSUZ+22morFwBPFVQOsl2rKH2MppWBV8RAdqiuID+id67cThJeCYNXJCZa2cjtlI0t2fDlXAhAIBoEYiUK0UBWfis04cs1o1dc9RaQVg36LkFuMk3c5SlaxdSrV6/UdxnlqVPfh8h1lMoNV556uRYCEIgegQoThY3dEE9P+ZowvW0boodw4yySD19uKr22qjeN9C2F/+l842rNzVW1atVyAfBUK7HctEitEIBAPghU6IZ43tbZ8pFXq1YtH/2lTQhAAAIQCCCguKxepa+wrbNlhz4+kziU5ddm1CAAAQhAoGIJyK2tWKd2cwgqoW6dXbHdozUIQAACEAibAKIQNlHqgwAEIBBjAohCjAcP0yEAAQiETQBRCJso9UEAAhCIMQFEIcaDh+kQgAAEwiaAKIRNlPogAAEIxJgAohDjwcN0CEAAAmETQBTCJkp9EIAABGJMAFGI8eBhOgQgAIGwCSAKYROlPghAAAIxJoAoxHjwMB0CEIBA2AQQhbCJUh8EIACBGBNAFGI8eJgOAQhAIGwCiELYRKkPAhCAQIwJIAoxHjxMhwAEIBA2AUQhbKLUBwEIQCDGBBCFGA8epkMAAhAImwCiEDZR6oMABCAQYwKIQowHD9MhAAEIhE0AUQibKPVBAAIQiDEBRCHGg4fpEIAABMImgCiETZT6IAABCMSYQCpR+B/KDf3KXSO5+gAAAABJRU5ErkJggg=="}}]);