const { post } = require("./api/admin");
const {getErr} = require("./getSendResult")
const { pathToRegexp } = require("path-to-regexp")
const { dncrypt } = require("../util/crypt")

const dontNeedToken = [
    {method:"POST", path: "/api/admin/login"}
]
//验证token
module.exports = (req, res, next) => {
    let noNeed = false
    dontNeedToken.forEach(el => {
        const { regexp } = pathToRegexp(el.path)
        if (req.method === el.method && regexp.test(req.path)){
            console.log("登录无需认证token")
            noNeed = true
            return
        }
    })
    if (noNeed){
        return next()
    }
    let token = req.cookies.token
    if (!token) {
        //若不是浏览器，token可能保存在header里，从中header中获取
        token = req.headers.authorization;
    }
    if (!token) {
        //没有认证
        res.status(403).send(getErr("you dont have any token to access the api"))
        console.log("认证未通过")
        return
    }
    const userId = dncrypt(token) //解密token
    req.userId = userId
    console.log(`认证通过,userId:${req.userId}`)
    next()
}