const Mock = require("mockjs")

const res = Mock.mock({
    "datas|500-700": [
        {
            name: "@cname",
            birthday: "@date",
            "sex|1-2": true,
            mobile:/1\d{10}/,
            "ClassId|1-16": 0,
        },
    ],
}).datas;

// console.log(res)
const Student = require("../models/Student")
Student.bulkCreate(res)