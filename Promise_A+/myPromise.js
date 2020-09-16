const PENDING = 'pending',
    FULLFILLED = 'fullfilled',
    REJECTED = 'rejected'

class MyPromise {
    constructor(executor) {
        this.state = PENDING
        this.value = undefined
        this.reason = undefined

        const resolve = (value) => {
            if (this.state === PENDING) {
                this.state = FULLFILLED
                this.value = value
            }
        }
        const rejected = (reason) => {
            if (this.state === PENDING) {
                this.state = REJECTED
                this.reason = reason
            }
        }

        executor(resolve, rejected)
    }

    then(onFullfilled, onRejected) {
        if (this.state === FULLFILLED) {
            onFullfilled(this.value)
        }
        if (this.state === REJECTED) {
            onRejected(this.reason)
        }
    }

}


module.exports = MyPromise