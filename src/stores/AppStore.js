var dispatcher = require('../dispatcher')
var AppActions = require('../constants').AppActions
var createStore = require('./util/createStore')
var cloneWithProps = require('./util/cloneWithProps')

var AppStore = createStore({
	count: 1
})

AppStore.on(AppActions.INCREMENT, function (action, oldState) {

	return cloneWithProps(oldState, {
		count: state.count + 1
	})

})

AppStore.on(AppActions.DECREMENT, function (action, oldState) {

	return cloneWithProps(oldState, {
		count: state.count - 1
	})
	
})

module.exports = AppStore