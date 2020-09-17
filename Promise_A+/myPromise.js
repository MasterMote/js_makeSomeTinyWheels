const PENDING = 'pending',
    FULLFILLED = 'fullfilled',
    REJECTED = 'rejected'

class MyPromise {
    constructor(executor) {
        this.state = PENDING
        this.value = undefined
        this.reason = undefined
        this.onFulfilledCallbacks = []
        this.onRejectedCallbacks = []

        const resolve = (value) => {
            if (this.state === PENDING) {
                this.state = FULLFILLED
                this.value = value
            }
            //发布
            this.onFulfilledCallbacks.map(fn => fn())
        }
        const rejected = (reason) => {
            if (this.state === PENDING) {
                this.state = REJECTED
                this.reason = reason
            }
            //发布
            this.onRejectedCallbacks.map(fn => fn())
        }

        try {
            executor(resolve, rejected)
        } catch (e) {
            rejected(e)
        }
    }

    then(onFulfilled, onRejected) {
        if (this.state === FULLFILLED) {
            onFulfilled(this.value)
        }
        if (this.state === REJECTED) {
            onRejected(this.reason)
        }
        if (this.state === PENDING) {
            //订阅
            this.onFulfilledCallbacks.push(() => {
                onFulfilled(this.value)
            })
            this.onRejectedCallbacks.push(() => {
                onRejected(this.reason)
            })
        }
    }

}


module.exports = MyPromise