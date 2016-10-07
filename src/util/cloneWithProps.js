var cloneDeep = require('./cloneDeep')
var assign = require('./assign')

function cloneWithProps (obj, extras) {
	return assign( cloneDeep(obj), extras )
}

module.exports = cloneWithProps