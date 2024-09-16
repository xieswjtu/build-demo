const name1 = "小明"
const name2 = new String("小红")
name1.age = 17
name2.age = 18
console.log(name1.age, name2.age)//undefined 18

//自动装箱 仅仅是在你调用方法或读取现有属性时临时创建包装对象，但它不会永久地改变原始值或保存新的属性。
// 添加新属性（如 name1.age = 17）不会被持久存储，因为原始类型在 JavaScript 中是不可变的，自动装箱的对象在操作后立刻销毁。