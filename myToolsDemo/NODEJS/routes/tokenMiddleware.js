const { post } = require("./api/admin");
const {getErr} = require("./getSendResult")

const dontNeedToken = [
    {method:post, path: "/api/admin/login"}
]
//验证token
module.exports = (req, res, next) => {
    dontNeedToken.forEach(el => {
        if (req.method === el.method && req.path === el.path){
            next()
        }
    })
    const token = req.cookie.token
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
    console.log("认证通过")
    next()
}