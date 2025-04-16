const moment = require("moment")

moment.locale("zh-cn")//设置语言库

//得到当前时间
console.log(moment().toString())
console.log(moment.utc().toString())//utc时间

//得到当前时间戳
console.log(moment().valueOf()) //重写了valueOf方法
console.log(moment.utc().valueOf())
//还可以是
console.log(+moment()) //原理是会自动调用valueOf
console.log(+moment.utc())

//根据指定的时间格式得到时间
//使用日期令牌转换
//令牌是一个格式化的字符串，例如“YYYY-MM-DD HH:mm:ss”
const formats = ["YYYY-MM-DD HH:mm:ss", "YYYY-M-D H:m:s", "x"] //设置支持的几种格式，将其转换成utc
console.log(moment.utc("1999-01-01 00:00:00",formats,true).toString())
console.log(moment.utc("1999-1-1 0:0:0",formats,true).toString())
console.log(moment.utc(0,formats,true).toString())

//显示（一般发生在客户端）
const m = moment.utc("1999-01-01 00:00:00",formats,true)
console.log(m.format("YYYY年MM月DD日 HH点mm分ss秒"))
console.log(m.local().format("YYYY年MM月DD日 HH点mm分ss秒"))//转换成本地时间

const n = moment("2015-01-06 22:00:01",formats,true)//用户输入本地时间将其转换成utc时间
const toServer = n.utc().format("YYYY年MM月DD日 HH点mm分ss秒")
console.log(toServer)

console.log(m.local().fromNow())//看此时间距现在是多久 （通过设置语言库调整显示语言）
