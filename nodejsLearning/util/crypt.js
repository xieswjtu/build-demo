//使用对称加密算法： aes-256-cbc
//密钥长度32 iv长度16
const crypto = require("crypto")

const secret = Buffer.from("j1h843sa28jk76dgha2f567jgfds65gd")
//准备一个iv，随机向量
const iv = Buffer.from(
    // Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8)
    "jg2hj26jsd937ha1"
) 

//加密
exports.encrypt = (str) => {
    const encry = crypto.createCipheriv("aes-256-cbc", secret, iv)
    let res = encry.update(str, "utf-8", "hex")
    res += encry.final("hex")
    return res
}

//解密
exports.dncrypt = (str) => {
    const dncry = crypto.createDecipheriv("aes-256-cbc", secret, iv)
    let res = dncry.update(str, "hex", "utf-8")
    res += dncry.final("utf-8")
    return res
}