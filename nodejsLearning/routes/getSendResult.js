//统一响应的格式，按公司的具体要求制定

//错误响应的格式
exports.getErr = function(err = "server internal error", errCode = 500){
    return {
        code: errCode,
        msg: err
    }
}

//一般响应的格式
exports.getResult = function(res){
    return {
        code: 0,
        msg: "",
        data: res
    }
}


//统一异步错误捕获问题
exports.asyncHandler = function (fn){
    return async (req, res, next) => {
        try {
            const result = await fn(req, res, next)
            res.send(exports.getResult(result))
        } catch(err) {
            next(err)
        }
    }

}