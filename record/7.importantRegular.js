//正则表达式 黑马前端两小时快速掌握正则表达式


const hd = "asklfdhaf.com"
const reg = /a/g
//------test------
console.log(reg.test(hd))
//------ecec------
console.log(reg.exec(hd))
//------replace------ 字符串方法
console.log(hd.replace(reg, "b"))
//------match------ 字符串方法
console.log(hd.match(reg))

// 修饰符 1.i 忽略大小写 2.g 全局匹配
const str = "a球员突破,A球员射门,A球员进球了!"
const regA = /a/ig
console.log(str.replace(regA, "b"))

//1.元字符 边界符
//单词边界 \b
const words = "I play the player in the game"
const regB = /\bplay\b/g
console.log(words.replace(regB, "control"))
//字符串边界 ^以…………开头（写在去前面） $以…………结尾（写在后面）  两个在一起为精确匹配
const regC = /^a/
console.log(regC.test("abc"))
console.log(regC.test("bca"))

//2.元字符 量词
const regD = /^a{1,4}$/
// *: 表示0次或更多次（写在后面）
// +: 表示1次或更多次（写在后面）
// ？: 表示0次或1次（写在后面）
// {n}: 只能有n次（写在后面）
// {n,}: 大于等于n次（写在后面）
// {m,n}: m到m次，包括m，n（写在后面）
console.log("---------------------")
console.log(regD.test("a"))
console.log(regD.test(""))
console.log(regD.test("bbb"))
console.log(regD.test("aaa"))

//3.元字符 字符类

//(1) [] 匹配字符合集
// 使用连字符 - 表示一个范围
// []里面加上^表示取反，注意要写入中括号里面
//(2) . 匹配换行符之外的单个字符
// const reg = /./
//(3) 预定义
// \d 匹配0-9之间的任意数字，相当于[0-9]
// \D 匹配0-9以外的任意字符，相当于[^0-9]
// \w 匹配任意的字母数字和下划线，相当于[a-ZA-Z0-9_]
// \W 匹配除字母数字下划线以外的字符，相当于[^a-zA-Z0-9_]
// \s 匹配空格（包含换行空格制表符等），相当于[\t\r\n\v\f]
// \S 匹配非空格的字符，相当于[^\t\r\n\v\f\]

// 分组 分组捕获：例如将YYYY-MM-DD格式的日期替换成MM/DD/YYYY
const regF = /(\d{4})-(\d{2})-(\d{2})/
const test = "今天的日期是2024-06-06"
console.log(test.replace(regF, "$2/$3/$1"))
// 分支结构 | 或

//案例1 密码匹配