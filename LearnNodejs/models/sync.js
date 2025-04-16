//同步所有模型
require("./Book");
require("./Class");
require("./Student");
require("./Admin");

const sequelize = require("./db");
sequelize.sync({ alter: true}).then(()=>{
    console.log("所有模型同步完成")
});

