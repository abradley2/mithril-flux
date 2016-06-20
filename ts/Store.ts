import Dispatcher from './Dispatcher'

interface StoreActions {

    [name: string]: Function

}

class Store {

    actions: StoreActions

    /**
    * Simple base class for a store that takes an actionMap
    * and the app dispatcher as its two arguments. The store
    * registers as a single callback to the dispatcher which
    * calls the actions whose key matches the name of the 'action'
    * in the payload.
    * Example: if in the actions map there is {'MY_ACTION': function () {}}
    * this will be automatically called on
    * dispatcher.dispatch({action: 'MY_ACTION'})
    */
    constructor (actions: StoreActions, dispatcher: Dispatcher) {
        this.actions = actions

        dispatcher.register((payload) => {

            this.actions[payload.action]()

        })
    }

}

export default Store
