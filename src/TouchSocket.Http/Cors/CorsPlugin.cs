//------------------------------------------------------------------------------
//  此代码版权（除特别声明或在XREF结尾的命名空间的代码）归作者本人若汝棋茗所有
//  源代码使用协议遵循本仓库的开源协议及附加协议，若本仓库没有设置，则按MIT开源协议授权
//  CSDN博客：https://blog.csdn.net/qq_40374647
//  哔哩哔哩视频：https://space.bilibili.com/94253567
//  Gitee源代码仓库：https://gitee.com/RRQM_Home
//  Github源代码仓库：https://github.com/RRQM
//  API首页：http://rrqm_home.gitee.io/touchsocket/
//  交流QQ群：234762506
//  感谢您的下载和使用
//------------------------------------------------------------------------------

using System.Threading.Tasks;
using TouchSocket.Core;

namespace TouchSocket.Http
{
    /// <summary>
    /// 可以配置跨域的插件
    /// </summary>
    public class CorsPlugin : PluginBase
    {
        /// <summary>
        /// 允许客户端携带验证信息
        /// </summary>
        public bool Credentials { get; set; }

        /// <summary>
        /// 允许跨域的方法。
        /// 默认为“PUT,POST,GET,DELETE,OPTIONS,HEAD,PATCH”
        /// </summary>
        public string Methods { get; set; }

        /// <summary>
        /// 允许跨域的域名
        /// </summary>
        public string Origin { get; set; }

        /// <summary>
        /// 允许任何Method。实际上包含：PUT,POST,GET,DELETE,OPTIONS,HEAD,PATCH
        /// </summary>
        /// <returns></returns>
        public CorsPlugin AllowAnyMethod()
        {
            this.Methods = "PUT,POST,GET,DELETE,OPTIONS,HEAD,PATCH";
            return this;
        }

        /// <summary>
        /// 允许所有的源
        /// </summary>
        /// <returns></returns>
        public CorsPlugin AllowAnyOrigin()
        {
            this.Origin = "*";
            return this;
        }

        /// <summary>
        /// 允许客户端携带验证信息
        /// </summary>
        /// <returns></returns>
        public CorsPlugin AllowCredentials()
        {
            this.Credentials = true;
            return this;
        }

        /// <summary>
        /// 允许跨域的方法。
        /// 例如“PUT,POST,GET,DELETE,OPTIONS,HEAD,PATCH”
        /// </summary>
        /// <param name="value"></param>
        /// <returns></returns>
        public CorsPlugin SetMethods(string value)
        {
            this.Methods = value;
            return this;
        }

        /// <summary>
        /// 允许跨域的域名
        /// </summary>
        /// <param name="value"></param>
        /// <returns></returns>
        public CorsPlugin SetOrigin(string value)
        {
            this.Origin = value;
            return this;
        }

        /// <inheritdoc/>
        protected override void Loaded(IPluginManager pluginManager)
        {
            pluginManager.Add<IHttpSocketClient, HttpContextEventArgs>(nameof(IHttpPlugin.OnHttpRequest), OnHttpRequest);
            base.Loaded(pluginManager);
        }

        private async Task OnHttpRequest(IHttpSocketClient client, HttpContextEventArgs e)
        {
            if (this.Credentials)
            {
                e.Context.Response.Headers.Add("Access-Control-Allow-Credentials", this.Credentials.ToString().ToLower());
            }
            if (this.Methods.HasValue())
            {
                e.Context.Response.Headers.Add("Access-Control-Allow-Methods", this.Methods);
            }
            if (this.Origin.HasValue())
            {
                e.Context.Response.Headers.Add("Access-Control-Allow-Origin", this.Origin);
            }

            await e.InvokeNext();
        }
    }
}