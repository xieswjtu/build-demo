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

const Class = require("../models/Class")
Class.bulkCreate(res)