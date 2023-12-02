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

using System;

namespace TouchSocket.Core
{
    /// <summary>
    /// 插件配置。
    /// </summary>
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Interface)]
    public sealed class PluginOptionAttribute : Attribute
    {
        /// <summary>
        /// 标识该插件在一个<see cref="IPluginManager"/>中仅仅只会有一个实例。
        /// </summary>
        public bool Singleton { get; set; }

        /// <summary>
        /// 标识该插件不需要注册到容器。可能是功能性插件。
        /// </summary>
        [Obsolete("插件的使用时机应该在容器构建之后，所以不应该再注入容器。", true)]
        public bool NotRegister { get; set; }
    }
}