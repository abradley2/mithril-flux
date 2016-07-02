type callback = (payload: any) => any

class Dispatcher {

    _isDispatching : boolean = false
    _activePayload : any = null
    _isPending: {[key: number]: boolean} = {}
    _isHandled: {[key: number]: boolean} = {}

    register (cb: callback) : number {
        this.callbacks.push(cb)
        return this.callbacks.length - 1
    }

    _invokeCallback(dispatchToken: number, payload: any) : void {
        this._isPending[dispatchToken] = true
        this.callbacks[dispatchToken](payload)
        this._isHandled[dispatchToken] = true
    }

    _onStartDispatching (payload : Object) : void {
        this._activePayload = payload
        for (var token in this.callbacks) {
            this._isPending[token] = false
            this._isHandled[token] = false
        }
        this._isDispatching = true
    }

    _onEndDispatching () : void {
        this._activePayload = null
        this._isDispatching = false
    }

    dispatch (payload: any) {
        this._onStartDispatching(payload)

        this.callbacks.forEach((cb, dispatchToken) => {
            // only invoke if it is not already pending
            if (!this._isPending[dispatchToken]) {
                this._invokeCallback(dispatchToken, this._activePayload)
            }
        })

        this._onEndDispatching()
    }

    waitFor (tokens: number[]) {
        var token
        for (token in tokens) {
            if (!this._isPending[token]) {
                this._invokeCallback(token, this._activePayload)
            }
        }
    }

    callbacks:  callback[] = []

    constructor () {

    }

}

export default new Dispatcher()
