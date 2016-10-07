var dispatcher = require('../dispatcher')

function Store (initialState) {
	this.state = initialState || {}
	this.handlers = {}

	dispatcher.register(function (action) {
		if (this.handlers[action.type]) {
			var newState = this.handlers[action.type].call(this, action, this.state)

			if (!newState) throw new Error('Action handlers on store must return new state')

			this.state = newState
		}
	}.bind(this))
}

Store.prototype.get = function (attr) {
	return this.state[attr]
}

Store.prototype.getState = function () {
	return this.state
}

Store.prototype.on = function (actionType, handler) {
	if (!actionType) throw new TypeError('actionType must be defined')

	this.handlers[actionType] = handler
}

function createStore (initialState) {
	return new Store(initialState)
}

module.exports = createStore