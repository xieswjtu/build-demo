const { Sequelize } = require("sequelize")

const sequelize = new Sequelize('myschooldb', 'root', "ju62eg3gj358", {
    host: 'localhost',
    // 选择一种支持的数据库:
    // 'mysql', 'mariadb', 'postgres', 'mssql', 'sqlite', 'snowflake', 'db2' or 'ibmi'
    dialect: 'mysql'
  });