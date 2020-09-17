const MyPromise = require('./myPromise')

let promise = new MyPromise((resolve, rejected) => {
    // resolve('success!!')
    // rejected('failed!!')
    setTimeout(() => {
        resolve('success!!')
    }, 2000)
})

promise.then((data) => {
    console.log("promise1：" + data)
}, (err) => {
    console.log("promise1：" + err)
})

promise.then((data) => {
    console.log("promise2：" + data)
}, (err) => {
    console.log("promise2：" + err)
})