const Class = require("../models/Class");
const Student = require("../models/Student")
const {  Op } = require('sequelize');

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

//当数据较多的时候，做分页查询
exports.getStudent = async function (page = 1, limit = 10, sex = -1, name = "") {
    // const res = await Student.findAll({
    //     offset: (page-1) * limit, //表示跳过多少条
    //     limit: limit //表示取多少条
    // })
    // const total = await Student.count()
    // const datas = JSON.parse(JSON.stringify(res))
    // return {
    //     total,
    //     datas
    // }
    
    //其他精准查询，保证无值时的查询范围
    const condition = {}
    //性别查询逻辑，当未输入sex项时，默认查全部
    if (sex !== -1) {
        condition.sex = !!sex
    } 
    //姓名查询逻辑
    if (!!name) {
        condition.name = {
            [Op.like] : `%${name}%` //满足模糊查询功能
        }
    }

    //结合findAll和count，该方法返回count（一个整数，符合查询条件的记录整数）和rows（一个数组，获得的记录）
    const res = await Student.findAndCountAll({
        where: condition,
        include: {    
            model: Class,
            attributes: ["id","name"]
        }, //获取包含元素
        offset: (page-1)*limit,
        limit: limit
    })
    return {
        total: res.count,
        datas: JSON.parse(JSON.stringify(res.rows))
    }
}