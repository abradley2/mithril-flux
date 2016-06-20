/*
    Based on the MDN polyfill for Object.assign
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
*/
function assign (target: Object, source: Object) {
    var output = Object(target)

    for (var nextKey in source) {
        if (Object.prototype.hasOwnProperty.call(source, nextKey)) {
            output[nextKey] = source[nextKey]
        }
    }

    return output
}

export default assign
