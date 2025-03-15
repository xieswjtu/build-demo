//路由配置
const express = require("express")
require("../models/relation")//保证student中的include关联查询成功
const app = express()

const port = 5008
app.listen(port, () =>{
    console.log(`server listen on ${port}`)
})

//配置一个请求映射如果请求方法和请求路径均满足匹配，则交给函数进行处理
//app.请求方法（“请求路径”，处理函数）

//统一处理api 有关student的请求
app.use("/api/student", require("./api/student"))

//解析 格式的请求体


//解析 application/json格式的请求体
app.use(express.json())

//.use使用中间件,处理错误的中间件
app.use(require("./errorMiddleware")) //第一个参数是匹配路径，不写就是匹配所有，第二个参数写require
