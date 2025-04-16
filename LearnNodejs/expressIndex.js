const express = require("express")
const app = express()

//配置一个请求映射如果请求方法和请求路径均满足匹配，则交给函数进行处理
//app.请求方法（“请求路径”，处理函数）

const port = 5008
app.listen(port, () =>{
    console.log(`server listen on ${port}`)
})