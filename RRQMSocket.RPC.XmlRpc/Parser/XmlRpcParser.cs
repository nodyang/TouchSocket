//------------------------------------------------------------------------------
//  此代码版权归作者本人若汝棋茗所有
//  源代码使用协议遵循本仓库的开源协议及附加协议，若本仓库没有设置，则按MIT开源协议授权
//  CSDN博客：https://blog.csdn.net/qq_40374647
//  哔哩哔哩视频：https://space.bilibili.com/94253567
//  Gitee源代码仓库：https://gitee.com/RRQM_Home
//  Github源代码仓库：https://github.com/RRQM
//  交流QQ群：234762506
//  感谢您的下载和使用
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
using RRQMCore.ByteManager;
using RRQMCore.Exceptions;
using RRQMCore.Helper;
using RRQMCore.Log;
using RRQMSocket.Http;
using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Globalization;
using System.Net;
using System.Net.Sockets;
using System.Reflection;
using System.Threading.Tasks;
using System.Xml;

namespace RRQMSocket.RPC.XmlRpc
{
    /// <summary>
    /// WebApi解析器
    /// </summary>
    public sealed class XmlRpcParser : RPCParser, IService
    {
        /// <summary>
        /// 构造函数
        /// </summary>
        public XmlRpcParser()
        {
            this.tcpService = new RRQMTcpService();
            this.actionMap = new ActionMap();
            this.tcpService.CreatSocketCliect += this.OnCreatSocketCliect;
            this.tcpService.OnReceived += this.OnReceived;
        }

        /// <summary>
        /// 在初次接收时
        /// </summary>
        /// <param name="socketClient"></param>
        /// <param name="creatOption"></param>
        private void OnCreatSocketCliect(RRQMSocketClient socketClient, CreatOption creatOption)
        {
            if (creatOption.NewCreat)
            {
                socketClient.DataHandlingAdapter = new HttpDataHandlingAdapter(this.BufferLength);
            }
        }

        private RRQMTcpService tcpService;

        /// <summary>
        /// 服务键映射图
        /// </summary>
        public ActionMap ActionMap { get { return this.actionMap; } }

        private ActionMap actionMap;

        /// <summary>
        /// 获取当前服务通信器
        /// </summary>
        public RRQMTcpService Service { get { return this.tcpService; } }

        /// <summary>
        /// 获取绑定状态
        /// </summary>
        public bool IsBind => this.tcpService.IsBind;

        /// <summary>
        /// 获取或设置缓存大小
        /// </summary>
        public int BufferLength { get { return this.tcpService.BufferLength; } set { this.tcpService.BufferLength = value; } }

        /// <summary>
        /// 获取内存池实例
        /// </summary>
        public BytePool BytePool => this.tcpService.BytePool;

        /// <summary>
        /// 获取或设置日志记录器
        /// </summary>
        public ILog Logger { get { return this.tcpService.Logger; } set { this.tcpService.Logger = value; } }

        /// <summary>
        /// 绑定服务
        /// </summary>
        /// <param name="port">端口号</param>
        /// <param name="threadCount">多线程数量</param>
        /// <exception cref="RRQMException"></exception>
        /// <exception cref="ArgumentNullException"></exception>
        /// <exception cref="Exception"></exception>
        public void Bind(int port, int threadCount = 1)
        {
            this.tcpService.Bind(port, threadCount);
        }

        /// <summary>
        /// 绑定服务
        /// </summary>
        /// <param name="iPHost">ip和端口号，格式如“127.0.0.1:7789”。IP可输入Ipv6</param>
        /// <param name="threadCount">多线程数量</param>
        /// <exception cref="RRQMException"></exception>
        /// <exception cref="ArgumentNullException"></exception>
        /// <exception cref="Exception"></exception>
        public void Bind(IPHost iPHost, int threadCount)
        {
            this.tcpService.Bind(iPHost, threadCount);
        }

        /// <summary>
        /// 绑定服务
        /// </summary>
        /// <param name="addressFamily">寻址方案</param>
        /// <param name="endPoint">绑定节点</param>
        /// <param name="threadCount">多线程数量</param>
        /// <exception cref="RRQMException"></exception>
        /// <exception cref="ArgumentNullException"></exception>
        /// <exception cref="Exception"></exception>
        public void Bind(AddressFamily addressFamily, EndPoint endPoint, int threadCount)
        {
            this.tcpService.Bind(addressFamily, endPoint, threadCount);
        }

        private void OnReceived(RRQMSocketClient socketClient, ByteBlock byteBlock, object obj)
        {
            HttpRequest httpRequest = (HttpRequest)obj;
            MethodInvoker methodInvoker = new MethodInvoker();
            httpRequest.Flag = socketClient;
            methodInvoker.Flag = httpRequest;

            XmlDocument xml = new XmlDocument();
            xml.LoadXml(httpRequest.BodyString);
            XmlNode methodName = xml.SelectSingleNode("methodCall/methodName");
            string actionKey = methodName.InnerText;

            if (this.actionMap.TryGet(actionKey, out MethodInstance methodInstance))
            {
                if (methodInstance.IsEnable)
                {
                    try
                    {
                        List<object> ps = new List<object>();
                        XmlNode paramsNode = xml.SelectSingleNode("methodCall/params");
                        int index = 0;
                        foreach (XmlNode paramNode in paramsNode.ChildNodes)
                        {
                            XmlNode valueNode = paramNode.FirstChild.FirstChild;
                            switch (valueNode.Name)
                            {
                                case "boolean":
                                    {
                                        ps.Add(bool.Parse(valueNode.InnerText));
                                        break;
                                    }
                                case "i4":
                                case "int":
                                    {
                                        ps.Add(int.Parse(valueNode.InnerText));
                                        break;
                                    }
                                case "double":
                                    {
                                        ps.Add(double.Parse(valueNode.InnerText));
                                        break;
                                    }
                                case "dateTime.iso8601":
                                    {
                                        ps.Add(DateTime.Parse(valueNode.InnerText));
                                        break;
                                    }
                                case "base64":
                                    {
                                        ps.Add(valueNode.InnerText);
                                        break;
                                    }
                                case "struct":
                                    {
                                        Type type = methodInstance.ParameterTypes[index];
                                        object instance = Activator.CreateInstance(type);
                                        foreach (XmlNode memberNode in valueNode.ChildNodes)
                                        {
                                            string name = memberNode.SelectSingleNode("name").InnerText;
                                            PropertyInfo property = type.GetProperty(name);
                                            //property.SetValue(instance,);
                                        }
                                        ps.Add(valueNode.InnerText);
                                        break;
                                    }
                                default:
                                case "string":
                                    {
                                        ps.Add(valueNode.InnerText);
                                        break;
                                    }
                            }
                            index++;
                        }
                    }
                    catch (Exception ex)
                    {
                        methodInvoker.Status = InvokeStatus.Exception;
                        methodInvoker.StatusMessage = ex.Message;
                        this.Logger.Debug(LogType.Error, ex.Message, ex.StackTrace);
                    }
                }
                else
                {
                    methodInvoker.Status = InvokeStatus.UnEnable;
                }
            }
            else
            {
                methodInvoker.Status = InvokeStatus.UnFound;
            }

            this.ExecuteMethod(methodInvoker, methodInstance);
        }

        private object GetValue()
        {

        }

        /// <summary>
        /// 结束调用
        /// </summary>
        /// <param name="methodInvoker"></param>
        /// <param name="methodInstance"></param>
        protected override void EndInvokeMethod(MethodInvoker methodInvoker, MethodInstance methodInstance)
        {
            HttpRequest httpRequest = (HttpRequest)methodInvoker.Flag;
            RRQMSocketClient socketClient = (RRQMSocketClient)httpRequest.Flag;

            HttpResponse httpResponse = new HttpResponse();

            httpResponse.ProtocolVersion = httpRequest.ProtocolVersion;
            ByteBlock byteBlock = this.BytePool.GetByteBlock(this.BufferLength);

            try
            {
                httpResponse.Build(byteBlock);
                socketClient.Send(byteBlock);
            }
            finally
            {
                byteBlock.Dispose();
            }

            if (!httpRequest.KeepAlive)
            {
                socketClient.Shutdown(SocketShutdown.Both);
            }
        }

        /// <summary>
        /// 初始化
        /// </summary>
        /// <param name="methodInstances"></param>
        protected override void InitializeServers(MethodInstance[] methodInstances)
        {
            foreach (var methodInstance in methodInstances)
            {
                foreach (var att in methodInstance.RPCAttributes)
                {
                    if (att is XmlRpcAttribute attribute)
                    {
                        if (methodInstance.IsByRef)
                        {
                            throw new RRQMRPCException("XmlRpc服务中不允许有out及ref关键字");
                        }
                        string actionKey = string.IsNullOrEmpty(attribute.ActionKey) ? $"{methodInstance.Provider.GetType().Name}.{methodInstance.Method.Name}" : attribute.ActionKey;

                        this.actionMap.Add(actionKey, methodInstance);
                    }
                }
            }
        }

        /// <summary>
        /// 释放资源
        /// </summary>
        public override void Dispose()
        {
            this.tcpService.Dispose();
        }
    }
}