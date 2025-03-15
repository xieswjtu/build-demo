const express = require("express")
const app = express() //创建一个express应用

app.get("/news",(req, res, next) =>{
    console.log(res)
    next()
})

app.get("/news",(req, res, next) =>{
    console.log(req)
    next()
})


//.use使用中间件
app.use(require("./errorMiddleware")) //第一个参数是匹配路径，不写就是匹配所有，第二个参数写require
