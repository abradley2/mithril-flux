var dispatcher = {
	callbacks: [],
	register: function (cb) {
		this.callbacks.push(cb)
	},
	dispatch: function (action) {
		if (!action.type) throw new TypeError('Action must have "type"')

		for (var i = 0; i < this.callbacks.length; i++) {
			this.callbacks[i](action)
		}
	}
}

module.exports = dispatcher