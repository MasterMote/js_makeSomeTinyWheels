const MyPromise = require('./myPromise')

let promise = new MyPromise((resolve, rejected) => {
    resolve('success!!')
    // rejected('failed!!')
})

promise.then((data) => {
    console.log(data)
}, (err) => {
    console.log(err)
})