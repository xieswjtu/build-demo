// require("./models/relation")
// require("./mock/mockStudent")

const adminServ = require("./services/adminService")
const stuServ = require("./services/studentService")
//查询用户
// adminServ.login("admin2", "abc666666").then(res=>{
//     console.log(res)
// })

//修改用户
// adminServ.updateAdmin("2",{loginId: "admin2",loginPwd: "abc666666"}).then(res=>{
//     console.log(res)
// })

//分页查询
stuServ.getStundent(1,10).then(rep=>{
    console.log(rep)
})
