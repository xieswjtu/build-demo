//自动生成班级数据
const Mock = require("mockjs")

const res = Mock.mock({
    "datas|16": [
        {
            "id|+1": 1,
            name: "前端第@id期",
            openDate: "@date"
        },
    ],
}).datas;

// console.log(res)
const Class = require("../models/Class")
Class.bulkCreate(res)