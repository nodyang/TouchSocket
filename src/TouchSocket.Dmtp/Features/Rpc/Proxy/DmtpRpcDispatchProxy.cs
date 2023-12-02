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

#if NET6_0_OR_GREATER || NET481_OR_GREATER
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using TouchSocket.Rpc;

namespace TouchSocket.Dmtp.Rpc
{
    /// <summary>
    /// DmtpRpcDispatchProxy
    /// </summary>
    /// <typeparam name="TClient"></typeparam>
    /// <typeparam name="TAttribute"></typeparam>
    public abstract class DmtpRpcDispatchProxy<TClient, TAttribute> : RpcDispatchProxy<TClient, TAttribute> where TClient : IDmtpRpcActor where TAttribute : DmtpRpcAttribute
    {

    }

    /// <summary>
    /// DmtpRpcDispatchProxy
    /// </summary>
    /// <typeparam name="TClient"></typeparam>
    public abstract class DmtpRpcDispatchProxy<TClient> : DmtpRpcDispatchProxy<TClient, DmtpRpcAttribute> where TClient : IDmtpRpcActor
    {

    }

    /// <summary>
    /// DmtpRpcDispatchProxy
    /// </summary>
    public abstract class DmtpRpcDispatchProxy : DmtpRpcDispatchProxy<IDmtpRpcActor>
    {

    }
}


#endif