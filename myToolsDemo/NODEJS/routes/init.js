//路由配置
const cookieParser = require("cookie-parser")
const express = require("express")
require("../models/relation")//保证student中的include关联查询成功
const app = express()

//配置写在路由之前方便生效
//解析 application/x-www-form-urlencoded格式的请求体
app.use(express.urlencoded({ extended: true}))

//解析 application/json格式的请求体
app.use(express.json())

//.use使用中间件,处理错误的中间件
app.use(require("./errorMiddleware")) //第一个参数是匹配路径，不写就是匹配所有，第二个参数写require

//加入cookie-parser中间件
//加入后，会在req对象中注入cookie属性，用于获取所有请求传递过来的cookie
//加入后，会在res对象中注入cookie方法，用于设置cookie
app.use(cookieParser())

//加入验证token的中间件
app.use(require("./tokenMiddleware"))


//配置一个请求映射如果请求方法和请求路径均满足匹配，则交给函数进行处理
//app.请求方法（“请求路径”，处理函数）

//路由统一处理api 有关student或admin的请求
app.use("/api/student", require("./api/student"))
app.use("/api/admin", require("./api/admin"))

const port = 5008
app.listen(port, () =>{
    console.log(`server listen on ${port}`)
})

