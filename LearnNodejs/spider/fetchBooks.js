//抓取豆瓣读书中的数据信息
const axios = require("axios").default

//获取豆瓣读书网页的源代码

async function getBooksHTML(){
    const resp = await axios.get("https://book.douban.com/latest")
    return resp.data
}

//从豆瓣读书中得到一个完整网页，从网页中分析出书的基本信息，得到书籍的数组



