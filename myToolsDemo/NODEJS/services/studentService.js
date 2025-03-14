const { JSON } = require("sequelize")
const Student = require("../models/Student")

exports.addStudent = async function(stuObj){
    const ins = await Student.create(stuObj) //构建一个模型实例
    return ins.toJSON()
}

exports.deleteStudent = async function(id){
    return await Student.destroy({
        where: {
            id,
        }
    })
}

exports.updateStudent = async function(id, stuObj){
    return await Student.update(Object,{
        where:{
            id,
        }
    })
}

//做分页查询
exports.getStudent = async function (page = 1, limit = 10) {
    const res = await Student.findAll({
        offset: (page-1) * limit, //表示跳过多少条
        limit: limit //表示取多少条
    })
    const total = await Student.count()
    const datas = JSON.parse(JSON.stringify(res))
    return {
        total,
        datas
    }
}