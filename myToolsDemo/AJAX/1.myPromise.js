// myPromise

class myPromise {
    state = 'pending' //状态
    value = undefined
    reason = undefined

    //配合.then
    resolveCallbacks = [] //pending状态下，储存成功后的回调
    rejectCallbacks = [] //pengding状态下，储存失败后的回调

    constructor(fn) {      
        const resolveHandle = (value) => {
            if (this.state === 'pending') {
                this.state = 'fulfilled'
                this.value = value 
                this.resolveCallbacks.forEach(fn => fn(this.value))
            }

        }

        const rejectHandle = (reason) => {
            if (this.state == 'pending') {
                this.state = 'rejected'
                this.reason = reason
                this.rejectCallbacks.forEach((fn) => fn(this.reason))
            }
        }

        try {
            fn (resolveHandle, rejectHandle)
        } catch(err) {
            resolveHandle(err)
        }

        then(fn1, fn2) {
            //pending状态下，fn1和fn2被存储在callback中
            //判断是不是函数,若不是返回其原来的值
            fn1 = typeof fn1 === 'function' ? fn1 : (v) => v
            fn2 = typeof fn2 === 'function' ? fn2 : (e) => e
            if (this.state === 'pending') {
                const p1 = new MyPromise ((resolve, reject) => {
                    this.resovleCallbacks.push(() => {
                        try {
                            const newValue = fn1(this.value)
                            resolve(newValue)
                        } catch(err) {
                            reject(err)
                        }
                    })
                    this.rejectCallbacks.push(() => {
                        try {
                            const newReason = fn2(this.reason)
                            reject(newReason)
                        } catch(err) {
                            reject(err)
                        }
                    })
                })

            }

            if (this.state === 'fulfilled') {
                const p1 = new MyPromise ((resolve, reject) => {
                    try {
                        const newValue = fn1(this.value) //得到新value值
                        resolve(newValue) //新value值赋给p1.value
                    } catch(err) {
                        reject(err)
                    }

                })
            }

            if (this.state === 'rejected') {
                const p1 = new MyPromise ((resolve, reject) => {
                    try {
                        const newReason = fn2(this.reason) //得到新reason值
                        reject(newReason) //新reason值赋给p1.reason
                    } catch(err) {
                        reject(err)
                    }

                })
            }
            
        }
        //then的一个语法糖
        catch(fn) {
            return this.then(null, fn)
        }
    }
}
// 全局静态api
myPromise.resolve = function (value) {
    return new MyPromise((resolve, reject) => resolve(value))
}

myPromise.reject = function (reason) {
    return new MyPromise((resolve, reject) => reject(reason))
}

myPromise.All = function (promiseList = []) {
    const p1 = new myPromise ((resolve, reject) => {
        const res = []
        const len = promiseList.length
        let resolvedCount = 0
        promiseList.forEach(p =>{
            p.then(data => {
                res.push(data)
                resolvedCount++
                if (resolvedCount === len) {
                    resolve(res)
                }
            }).catch(err =>{
                reject(err)
            })
        })
    })
    return p1
}

myPromise.race = function (promiseList = []) {
    let resloved = false
    const p1 = new myPromise((reslove, reject) => {
        promiseList.forEach(p => {
            p.then(data => {
                if (!resloved) {
                    reslove(data)
                    resloved = true
                }
            }).catch(err => {
                reject(err)
            })
        })        
    })
    return p1
}