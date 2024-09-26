var val = "a"
function F (){
    console.log(val)
    var val = "b"
    console.log(val)
}

F()//undefined b

// 全局作用域:
// var val = "a"; 这行代码定义了一个全局变量 val，并将其初始化为 "a"。
// 函数声明:
// function F() { ... } 定义了一个名为 F 的函数，包含一些代码逻辑。
// 函数执行:
// 当调用 F() 时，执行到 console.log(val);（第3行）。
// 变量提升:
// 在函数 F 中，var val = "b"; 声明了一个局部变量 val。由于 var 声明会被提升，因此在函数的顶部会隐式声明一个局部变量 val，这会遮蔽全局的 val 变量。
// 第一条 console.log 语句:
// 在执行 console.log(val); 时，由于局部变量 val 已经被提升，但未被初始化，所以此时的 val 是 undefined。因此，输出结果是 undefined。
// 局部变量赋值:
// 接下来执行 var val = "b";，将局部变量 val 初始化为 "b"。
// 第二条 console.log 语句:
// 最后执行 console.log(val);，此时局部变量 val 已被赋值为 "b"，所以输出结果是 "b"。