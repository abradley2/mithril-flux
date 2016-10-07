function assign(target, source) {
	if (target === undefined || target === null) {
		throw new TypeError('Cannot convert undefined or null to object')
	}
	var output = Object(target)

	if (source !== undefined && source !== null) {
		for (var nextKey in source) {
			if (source.hasOwnProperty(nextKey)) {
				output[nextKey] = source[nextKey]
			}
		}
	}

	return output
}

module.exports = assign