//利用cookie写登录相关内容
const express = require("express")
const adminServ = require("../../services/adminService")
const {getResult, asyncHandler} = require("../getSendResult")//引入统一响应格式函数

const router = express.Router()

router.post("/login",
    asyncHandler(async (req, res) => {
        console.log(req.body.loginId)
        const response = await adminServ.login(req.query.loginId, req.query.loginPwd)
        if (response){
            //登录成功
            res.header("set-cookie", `token=${response.id}; path=/; domain=localhost; max-age=3600`)
        }
        return response
    })
)

module.exports = router