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

//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Text;
//using System.Threading.Tasks;
//using TouchSocket.Core;
//using TouchSocket.MultipathTcp;
//using TouchSocket.Sockets;

//namespace XUnitTestProject.MultipathTcp
//{
//    public class TestMultipathTcpClient:UnitBase
//    {
//        [Fact]
//        public void ShouldCanConnectAndReceive()
//        {
//            var waitTime = 100;
//            var client = new MultipathTcpClient();

//            var receivedCount = 0;
//            client.Received += (tcpClient, arg1, arg2) =>
//            {
//                receivedCount++;
//                return Task.CompletedTask;
//            };

//            client.Setup(new TouchSocketConfig()
//                .SetRemoteIPHost("127.0.0.1:7789"));//载入配置
//            client.Connect();//连接
//            Thread.Sleep(waitTime);

//            Assert.True(client.Online);
           
//            client.Send(BitConverter.GetBytes(1));
//            Thread.Sleep(waitTime);
//            Assert.Equal(1, receivedCount);

//            client.Send(BitConverter.GetBytes(2));
//            Thread.Sleep(waitTime);
//            Assert.Equal(2, receivedCount);

//            client.Close();
//            Thread.Sleep(waitTime);
//            Assert.True(!client.Online);
           

//            client.Connect();
//            Thread.Sleep(waitTime);
//            Assert.True(client.Online);
           

//            client.Send(BitConverter.GetBytes(3));
//            Thread.Sleep(waitTime);
//            Assert.Equal(3, receivedCount);

//            client.Send(BitConverter.GetBytes(4));
//            Thread.Sleep(waitTime);
//            Assert.Equal(4, receivedCount);

//            client.Dispose();
//            Thread.Sleep(waitTime);
//            Assert.True(!client.Online);
            

//            Assert.ThrowsAny<Exception>(() =>
//            {
//                client.Connect();
//            });

//            Thread.Sleep(1000);
            
//        }

//        [Fact]
//        public void ConnectShouldBeOk()
//        {
//            var waitTime = 100;
//            var client = new MultipathTcpClient();

//            var connectingCount = 0L;
//            var connectedCount = 0L;
//            var disconnectedCount = 0L;
//            var disconnectingCount = 0L;

//            client.Connecting = (client, e) =>
//            {
//                Interlocked.Increment(ref connectingCount);
//                return Task.CompletedTask;
//            };

//            client.Connected = (client, e) =>
//            {
//                Interlocked.Increment(ref connectedCount);
//                return Task.CompletedTask;
//            };

//            client.Disconnecting = (client, e) =>
//            {
//                Interlocked.Increment(ref disconnectingCount);
//                return Task.CompletedTask;
//            };

//            client.Disconnected = (client, e) =>
//            {
//                Interlocked.Increment(ref disconnectedCount);
//                return Task.CompletedTask;
//            };

//            var receivedCount = 0;
//            client.Received = (tcpClient, byteBlock, requestInfo) =>
//            {
//                receivedCount++;
//                return Task.CompletedTask;
//            };

//            client.Setup("127.0.0.1:7789");//载入配置

//            for (var i = 0; i < 1000; i++)
//            {
//                client.Connect();
//                Assert.True(client.Online);
//                //Thread.Sleep(1);

//                Assert.Equal(i + 1, Interlocked.Read(ref connectingCount));
//                Assert.Equal(i + 1, Interlocked.Read(ref connectedCount));

//                client.Close();
//                //Thread.Sleep(1);

//                Assert.False(client.Online);
//                Assert.Equal(i + 1, Interlocked.Read(ref disconnectingCount));
//                Assert.Equal(i + 1, Interlocked.Read(ref disconnectedCount));
//            }

//            client.Connect();
//            Thread.Sleep(waitTime);

//            connectingCount = 0;
//            connectedCount = 0;
//            disconnectingCount = 0;
//            disconnectedCount = 0;

//            //client.Send(BitConverter.GetBytes(1));
//            Thread.Sleep(waitTime);
//            Assert.Equal(1, receivedCount);

//            //client.Send(BitConverter.GetBytes(2));
//            Thread.Sleep(waitTime);
//            Assert.Equal(2, receivedCount);

//            client.Dispose();
//            Assert.False(client.Online);
//            Assert.Equal(1, Interlocked.Read(ref disconnectingCount));
//            Assert.Equal(1, Interlocked.Read(ref disconnectedCount));

//            Assert.ThrowsAny<Exception>(() =>
//            {
//                client.Connect();
//            });

//            connectingCount = 0;
//            connectedCount = 0;
//            disconnectingCount = 0;
//            disconnectedCount = 0;

//            Assert.Equal(0, Interlocked.Read(ref connectingCount));
//            Assert.Equal(0, Interlocked.Read(ref connectedCount));
//            Assert.Equal(0, Interlocked.Read(ref disconnectingCount));
//            Assert.Equal(0, Interlocked.Read(ref disconnectedCount));
//        }
//    }
//}