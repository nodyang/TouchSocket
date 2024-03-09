//------------------------------------------------------------------------------
//  此代码版权（除特别声明或在XREF结尾的命名空间的代码）归作者本人若汝棋茗所有
//  源代码使用协议遵循本仓库的开源协议及附加协议，若本仓库没有设置，则按MIT开源协议授权
//  CSDN博客：https://blog.csdn.net/qq_40374647
//  哔哩哔哩视频：https://space.bilibili.com/94253567
//  Gitee源代码仓库：https://gitee.com/RRQM_Home
//  Github源代码仓库：https://github.com/RRQM
//  API首页：https://touchsocket.net/
//  交流QQ群：234762506
//  感谢您的下载和使用
//------------------------------------------------------------------------------

using Newtonsoft.Json;
using System;
using System.Net.NetworkInformation;

namespace TouchSocket.Core
{
    /// <summary>
    /// String类型数据转换器
    /// </summary>
    public class StringSerializerConverter<TState> : TouchSocketSerializerConverter<string, TState>
    {
        /// <summary>
        /// String类型数据转换器
        /// </summary>
        public StringSerializerConverter(params ISerializerFormatter<string, TState>[] converters)
        {
            foreach (var converter in converters)
            {
                this.Add(converter);
            }
        }
    }

    /// <summary>
    /// String类型数据转换器
    /// </summary>
    public class StringSerializerConverter : StringSerializerConverter<object>
    {
        /// <summary>
        /// String类型数据转换器
        /// </summary>
        /// <param name="converters"></param>
        public StringSerializerConverter(params ISerializerFormatter<string, object>[] converters):base(converters)
        { 
        
        }
    }
}