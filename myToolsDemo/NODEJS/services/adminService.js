//管理员初始化
//判断数据库中是否有管理员，如果没有，自动添加一个默认管理员

const Admin = require("./models/Admin")

exports.addAdmin = async function(adminObj, operatoId){
    //判断adminObj的各种属性是否合理，以及账号是否存在
    const ins = await Admin.create(adminObj) //构建一个模型实例
    return ins.toJSON()
}

exports.deleteAdmin = async function(adminId){
    //方式1 得到实例 之后再删除
    // const ins = await Admin.findByPk(adminId) //构建一个模型实例
    // if (ins) {
    //     await ins.destroy()
    // }
    //方式2
    Admin.destroy({
        where: {
            id: adminId,
        }
    })
}

exports.updateAdmin = async function(id, adminObj){
    //方法1
    // const ins = await Admin.findByPk(id)
    // ins.loginId = adminObj.loginId
    // ins.save()
    //方法二
    await Admin.update(adminObj,{
        where: {
            id,
        },
    });
}