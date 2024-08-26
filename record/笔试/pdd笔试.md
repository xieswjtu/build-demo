1.(ACM模式)
多多的数字组合
多多君最近在研究某种数字组合：
定义为：每个数字的十进制表示中(0~9)，每个数位各不相同且各个数位之和等于N。
满足条件的数字可能很多，找到其中的最小值即可。
多多君还有很多研究课题，于是多多君找到了你--未来的计算机科学家寻求帮助。

数据范围： 1≤n≤1000 1≤n≤1000 
进阶：空间复杂度 O(1) O(1)  ，时间复杂度 O(n) O(n) 
时间限制：C/C++ 1秒，其他语言2秒
空间限制：C/C++ 256M，其他语言512M
输入描述：

共一行，一个正整数N，如题意所示，表示组合中数字不同数位之和。
（1 <= N <= 1,000）

输出描述：
共一行，一个整数，表示该组合中的最小值。
如果组合中没有任何符合条件的数字，那么输出-1即可。

示例1
输入例子：
5
输出例子：
5
例子说明：
符合条件的数字有：5，14，23，32，41
其中最小值为5
 

示例2
输入例子：
12
输出例子：
39

示例3
输入例子：
50
输出例子：
-1
例子说明：
没有符合条件的数字 (Ｔ▽Ｔ) 

js node
const rl = require("readline").createInterface({ input: process.stdin });
rl.on("line", function(line){
    let N = parseInt(line)
    if (N > 45) {
      console.log(-1)
    }else if (N < 10){
        console.log(N)
    } else {
        let res = ""
        let num = N
        let count = 9
        while (num > count) {
            num = num - count
            res = count + res
            count--
        }
        res = num + res
        console.log(parseInt(res))
    }
})
（AC）

2.
多多的字符变换
多多君最近在研究字符串之间的变换，可以对字符串进行若干次变换操作:

    交换任意两个相邻的字符，代价为0。
    将任意一个字符a修改成字符b，代价为 |a - b|（绝对值）。 

现在有两个长度相同的字符串X和Y，多多君想知道，如果要将X和Y变成两个一样的字符串，需要的最少的代价之和是多少。

时间限制：C/C++ 1秒，其他语言2秒
空间限制：C/C++ 256M，其他语言512M
输入描述：

共三行，第一行，一个整数N，表示字符串的长度。
（1 <= N <= 2,000）
接下来两行，每行分别是一个字符串，表示字符串X和Y。
（字符串中仅包含小写字母）

输出描述：
共一行，一个整数，表示将X和Y变换成一样的字符串需要的最小的总代价。

示例1
输入例子：
4
abca
abcd
输出例子：
3
例子说明：
其中一种代价最小的变换方案：
都修改为abcd，那么将第一个字符串X最后一个字符a修改为d，代价为|a - d| = 3。

示例2
输入例子：
4
baaa
aabb
输出例子：
1
例子说明：
其中一种代价最小的变换方案：
首先将第一个字符串通过交换相邻的字符：baaa -> abaa -> aaba，代价为0。
然后将第二个字符串修改最后一个字符b：|b - a| = 1。
两个字符都修改为aaba，所以最小的总代价为1。

示例3
输入例子：
3
abc
xyz
输出例子：
69


const rl = require("readline").createInterface({ input: process.stdin });
let n = 0
let count = 0
const str = []
rl.on("line", function(line){
    if (n === 0) {
        n = parseInt(line)
        count++
    } else {
        str.push(line)
        count++
    }
    if (count === 3) {
        let x = str[0]
        let y = str[1]
        let xNums = []
        for (let i=0; i<x.length; i++){
            xNums.push(x[i].charCodeAt())
        }
        let yNums = []
        for (let i=0; i<y.length; i++){
            yNums.push(y[i].charCodeAt())
        }
        yNums.sort((a,b)=> a-b)
        xNums.sort((a,b)=> a-b)
        let res = 0
        for (let i=0; i<yNums.length; i++) {
            res+= Math.abs(xNums[i] - yNums[i])

        }
        console.log(res)
    }
})
(AC)

