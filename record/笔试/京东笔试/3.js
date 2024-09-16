function getAge(...age){
    console.log(typeof arguments)
    console.log(Object.prototype.toString.call())
}
getAge(21)


// Rest 参数 用于收集所有传入的参数并将它们放入一个数组中。...age 会将传入的参数（21）收集到数组中，并将该数组赋值给变量 age。
// 在这个例子中，age 作为数组会包含 [21]
// arguments 是一个类数组对象，包含函数调用时传入的所有参数（不管是否使用了 rest 参数）。
// 在 ES5 中以及以前的版本中，arguments 是唯一可以访问函数传参的方式。
// 重要：当函数使用了 rest 参数 (...age) 时，arguments 对象不会受到 rest 参数的影响，arguments 和 age 是独立存在的。

// typeof 操作符返回参数的类型。在 JavaScript 中，arguments 是一个对象，所以 typeof arguments 会返回 "object"。