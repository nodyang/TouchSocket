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
using System.Threading;
using System.Threading.Tasks;

namespace TouchSocket.Sockets
{
    /// <summary>
    /// 具有连接动作的对象
    /// </summary>
    public interface IConnectObject
    {
        /// <summary>
        /// 连接
        /// </summary>
        /// <param name="timeout">最大等待时间</param>
        /// <param name="token">可取消令箭</param>
        /// <exception cref="TimeoutException"></exception>
        /// <exception cref="Exception"></exception>
        void Connect(int timeout, CancellationToken token);

        /// <summary>
        /// 异步连接
        /// </summary>
        /// <param name="timeout">最大等待时间</param>
        /// <param name="token">可取消令箭</param>
        /// <exception cref="TimeoutException"></exception>
        /// <exception cref="Exception"></exception>
        Task ConnectAsync(int timeout, CancellationToken token);
    }
}