type EventName = string
type EventCallback = (payload: any[]) => void

class EventEmitter {

    on (event: EventName, cb: EventCallback) : EventCallback {
        if (this.events[event]) {
            this.events[event].push(cb)
        } else {
            this.events[event] = [cb]
        }
        return this.events[event][ this.events[event].length - 1 ]
    }

    off (cb: EventCallback) : void {
        Object.keys(this.events).forEach((event) => {
            this.events[event] = this.events[event].filter((registeredCb) => {
                return registeredCb !== cb
            })
        })
    }

    trigger (event: EventName, data?: any) : void {
        this.events[event].forEach((cb) => {
            cb(data)
        })
    }

    events: { [eventName: string] : EventCallback[] } = {}

    constructor () {

    }

}

var events = new EventEmitter()

export default EventEmitter
