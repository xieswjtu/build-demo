//设置模型关系
const Class = require("./Class")
const Student = require("./Student")
Class.hasMany(Student,{
    foreignKey: "ClassId"
})
Student.belongsTo(Class, {
    foreignKey: "ClassId",
})