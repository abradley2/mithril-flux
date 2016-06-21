type callback = (payload: any) => any

/*
    Very simple dispatcher. Just registers and responds
    to dispatch payloads. Has no 'waitFor' function, since
    Mithril promises attempt to resolve synchronously if possible
*/
class Dispatcher {

    register (cb: callback) : number {
        this.callbacks.push(cb)
        return this.callbacks.length - 1
    }

    dispatch (payload: any) {
        this.callbacks.forEach((cb) => {
            cb(payload)
        })
    }

    callbacks:  callback[] = []

    constructor () {

    }

}

export default new Dispatcher()
