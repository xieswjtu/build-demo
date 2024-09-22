1.http1,http1.1,http2,http3的区别
http1 默认非持久连接
http1.1 
默认持久连接;
新增缓存策略，如Etag;
新增host字段;
新增请求方法,如PUT，HEAD
http2
二进制协议，将首部和数据封装成帧；
实现多路复用，解决http队头阻塞问题，但没有解决TCP队头阻塞问题（TCP连接中丢包后，之后的数据就不会再传了）；
实现头信息压缩；
实现服务器推送；
http3
不使用TCP作为传输层协议，使用基于UDP的QUIC;
QUIC集成了TLS加密、流量控制、多路复用等功能,解决了TCP队头阻塞问题。

2.http状态码
（1）2XX 成功
● 200 OK，表示从客户端发来的请求在服务器端被正确处理
● 204 No content，表示请求成功，但响应报文不含实体的主体部分
● 205 Reset Content，表示请求成功，但响应报文不含实体的主体部分，但是与 204 响应不同在于要求请求方重置内容
● 206 Partial Content，进行范围请求
（2）3XX 重定向
● 301 moved permanently，永久性重定向，表示资源已被分配了新的 URL
● 302 found，临时性重定向，表示资源临时被分配了新的 URL
● 303 see other，表示资源存在着另一个 URL，应使用 GET 方法获取资源
● 304 not modified，表示服务器允许访问资源，但因发生请求未满足条件的情况
● 307 temporary redirect，临时重定向，和302含义类似，但是期望客户端保持请求方法不变向新的地址发出请求
（3）4XX 客户端错误
● 400 bad request，请求报文存在语法错误
● 401 unauthorized，表示发送的请求需要有通过 HTTP 认证的认证信息
● 403 forbidden，表示对请求资源的访问被服务器拒绝
● 404 not found，表示在服务器上没有找到请求的资源
（4）5XX 服务器错误
● 500 internal sever error，表示服务器端在执行请求时发生了错误
● 501 Not Implemented，表示服务器不支持当前请求所需要的某个功能
● 503 service unavailable，表明服务器暂时处于超负载或正在停机维护，无法处理请求
