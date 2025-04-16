//利用cookie写登录相关内容
const express = require("express")
const adminServ = require("../../services/adminService")
const {getResult, asyncHandler} = require("../getSendResult")//引入统一响应格式函数
const { encrypt } = require("../../util/crypt")

const router = express.Router()

router.post("/login",
    asyncHandler(async (req, res) => {
        const response = await adminServ.login(req.body.loginId, req.body.loginPwd)
        if (response){
            //登录成功
            //token 通过cookie给予适配浏览器，通过header给予适配其他终端
            const value = encrypt(response.id.toString()) //将数字id转成字符串，然后加密token
            res.cookie("token", value,{
                path: '/',
                domain: "localhost",
                maxAge: 7 * 24 * 3600 * 1000 //毫秒数
            })
            res.header("authorization", value)
        }
        return response
    })
)

module.exports = router