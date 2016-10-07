function cloneDeep (obj) {
	if (!obj || typeof obj !== 'object') {
		// null, undefined, string or number
		return obj
	} else if (Array.isArray(obj)) {
		// if it is an array, map cloneDeep
		return obj.map(cloneDeep)
	} else if (typeof obj === 'object') {
		// if an oject, return a cloneDeep of all enumerated properties
		var cloned = {}

		for (var prop in obj) {
			if (Object.hasOwnProperty.call(obj, prop)) {
				cloned[prop] = cloneDeep( obj[prop] )
			}
		}

		return cloned
	} else {
		return obj
	}
}

module.exports = cloneDeep