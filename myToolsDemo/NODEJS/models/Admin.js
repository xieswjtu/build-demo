const {  DataTypes } = require('sequelize');
const sequelize = require("./db")

const Admin = sequelize.define('Admin', {
  // 在这里定义模型属性
  loginId: {
    type: DataTypes.STRING,
    allowNull: false
  },
  loginPassword: {
    type: DataTypes.STRING,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
    // allowNull 默认为 true
}, {
  paranoid: true //从此以后该表的数据不会真正的删除，而是增加一列记录删除的时间
});

module.exports = Admin 