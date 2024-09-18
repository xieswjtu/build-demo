var regex = /^[a-zA-Z]:\\([^\\:*<>|"?\r\n/]+\\)*([^\\:*<>\"?\r\n/]+)?$/
console.log(regex.test("F:\\study\\javascript\\regex\\regular expression.pdf"))
console.log(regex.test("F:\\study\\javascript\\regex\\"))
console.log(regex.test("F:\\study\\javascript\\"))
console.log(regex.test("F:\\"))