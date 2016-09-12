abstract class Store {
    constructor (dispatcher) {
        dispatcher.register((action) => {
            if (this[action.type]) this[action.type](action)
        })
    }
}

export default Store
