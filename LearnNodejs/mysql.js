// const mysql = require("mysql2");

//异步方式操作数据库
const mysql2 = require("mysql2/promise")

async function test(id){
    const connection = await mysql2.createConnection({
        host: "localhost",
        user: "root",
        password: "ju62eg3gj358",
        database: "test",
        multipleStatements: true,
    });
    //const [res] = await connection.query("select * from company;")
    //因为其sql字符串的形式，使用query会有sql注入风险，比如用户可以使用sql命令作为id对数据库中的数据进行操作
    //所以应该使用execute
    const sql = "select * from company where company_id=?;"
    const [res] = await connection.execute(sql, [id])
    console.log(res)
}
test("1")


//创建一个数据库连接
// const connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "ju62eg3gj358",
//     database: "test",
// });

//联表
// connection.query(
//     'SELECT * FROM company as c INNER JOIN employee as e on c.company_id = e.company_id INNER JOIN employee_info as i on i.employee_id = e.employee_id',
//     function (err, results) {
//         console.log(results);
//     }
// )

//增
// connection.query(
//     "insert into employee(company_id, employee_name) values('3','王六十');",
//     (err,res) =>{
//         console.log(res)
//     }
// )

//改
// connection.query(
//     "update employee set employee_name = 'wangliushi' where employee_id = '24'",
//     (err, res) => {
//         console.log(res)
//     }
// )

//删
// connection.query(
//     "delete from employee where employee_id = '24'",
//     (err, res) =>{
//         console.log(res)
//     }
// )