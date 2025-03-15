//针对学生的路由处理
const express = require("express")
const stuServ = require("../../services/studentService")
const {getResult} = require("../getSendResult")//引入统一响应格式函数

const router = express.Router()

router.get("/", async (req, res) => {
    const {page=1, limit=10, sex=-1, name=""} = req.query
    const stu = await stuServ.getStudent(page, limit, sex, name)
    res.send(getResult(stu))
})

router.get("/:id", (req, res) => {
    res.send("获取单个学生")
})

router.post("/", async (req, res) => {
    // const stu = await stuServ.addStudent(req.body)
    // res.send(getResult(stu))
})

router.delete("/:id", (req, res) => {
    res.send("删除一个学生")
})

router.put("/:id", (req, res) => {
    res.send("修改一个学生")
})

module.exports = router