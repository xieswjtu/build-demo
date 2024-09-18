let a = {c: 1}
let b = a
a = 1
b.c = 2
console.log(a.c)