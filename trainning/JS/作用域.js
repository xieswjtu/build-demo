//自由变量
//内部作用域能访问的外部，取决于函数定义的位置，与调用无关
// var a = 1

// function m(){
//     a++
// }

// function m2(){
//     var a = 3;
//     m()
//     console.log(a)
// }

// m2()
// console.log(a)
// 3 2

//变量函数提升
//作用域内变量函数声明会被提升的作用域的顶部
// var a = 1, b = 2

// function m1() {
//     console.log(a)
//     var a = 3
//     function m2() {
//         console.log(a, b)
//     }
//     m2()
// }

// m1()
//undefined
//3 2

//百度面试
var a = 1

function m1() {
    a++
}

function m2() {
    var a = 2
    m1()
    console.log(a)
}

m2()
console.log(a)
//2
//2