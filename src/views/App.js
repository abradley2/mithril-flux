var m = require('mithril')
var dispatcher = require('../dispatcher')
var AppActions = require('../constants').AppActions
var AppStore = require('../stores/AppStore')
var Counter = require('../components/Counter')

function AppController () {
	this.viewModel = m.prop({})
}

Object.assign(AppController.prototype, {
	
	increment: function () {
		dispatcher.dispatch({
			type: AppActions.INCREMENT
		})
	},

	decrement: function () {
		dispatcher.dispatch({
			type: AppActions.DECREMENT
		})
	}

})

function AppView (ctrl) {
	var AppState = AppStore.getState()

	return m('div', [

		m('h3', "Don't Panic"),

		m(Counter, {
			value: AppState.count,
			onIncrement: ctrl.increment,
			onDecrement: ctrl.decrement
		})

	])
}

module.exports = {
	controller: AppController,
	view: AppView
}