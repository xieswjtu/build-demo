// 斐波那契数列
// 用 JavaScript 实现斐波那契数列函数,返回第n个斐波那契数。 f(1) = 1, f(2) = 1 等
// 斐波那契数列基本学js都会，1 1 2 3 5 8 13，后一个是前两个的和。
function fibonacci (n) {
    if (n === 0) return 0
    if (n === 1 || n === 2) return 1
    return fibonacci(n-1) + fibonacci(n-2)
}

console.log(fibonacci(7))