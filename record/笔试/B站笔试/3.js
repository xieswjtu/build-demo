console.log(-1 >>> 32)

console.log(Math.abs(-6.666))

console.log(["1", "2", "3"].map(parseInt)) //[1, NaN, NaN] 为什么?
// 这个问题的关键在于 JavaScript 中 Array.prototype.map() 方法的工作原理，以及 parseInt 函数如何被调用。
// 1. map(parseInt) 背后发生了什么？
// map() 方法会对数组的每一个元素调用指定的回调函数，传递三个参数：
// value（当前元素）
// index（当前元素的索引）
// array（调用 map 的数组）
// parseInt 函数接受两个参数：
// string（要解析的字符串）
// radix（表示解析时使用的基数，值在 2 到 36 之间）
// 因此，当我们写 ["1", "2", "3"].map(parseInt) 时，map 方法实际上会将三个参数传递给 parseInt，导致一些意外结果。
// 2. parseInt 的行为
// parseInt(string, radix)
// parseInt 的第一个参数是要转换的字符串，第二个参数是基数（radix），表示字符串应该按照哪个进制来解析。
// 让我们看看 map 是如何调用 parseInt 的：
// 对于第一个元素 "1"，调用 parseInt("1", 0)：
// "1" 作为字符串被传递，radix 为 0，parseInt 采用默认的 10 进制，所以结果是 1。
// 对于第二个元素 "2"，调用 parseInt("2", 1)：
// "2" 作为字符串被传递，radix 为 1。1 不是有效的进制，因此 parseInt 返回 NaN。
// 对于第三个元素 "3"，调用 parseInt("3", 2)：
// "3" 作为字符串被传递，radix 为 2（二进制），而 "3" 不是有效的二进制数，所以 parseInt 返回 NaN。
// 3. 结果
// 因此，最终结果是：
// [1, NaN, NaN]
// 4. 如何正确使用 parseInt 和 map？
// 如果你只想将数组的字符串元素转换为整数，而不需要 radix 参数，可以使用 map 的回调函数只传递单个参数：
// console.log(["1", "2", "3"].map(x => parseInt(x)))
// 或者使用 Number 构造函数代替 parseInt：
// console.log(["1", "2", "3"].map(Number))  // [1, 2, 3]
// 这样会得到你期望的结果 [1, 2, 3]，因为 Number 只接受一个参数，并不会因为额外的 index 参数而出现问题。

console.log([1<2<3, 3<2<1]) //[true, true] 为什么?
// 1 < 2 为true 然后true < 3 相当于 1 < 3
// 3 < 2  为false 然后false < 1 相当于 0 < 1

// 如何在div容器里展示<div></div>这几个字符?
document.querySelector("div").innerText = "<div></div>"