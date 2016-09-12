// Simple rudimentary clone function (doesnt care about Dates)
// useful for when you pass deep-nested objects to stores via actions.
// Pass-by-reference can risk tying state change directly to your views.
// For simpler object, just use Object.assign({}, ActionPayload)
export function clone <T> (obj: T): T {
    return (obj === null || typeof obj !== 'object') ? obj
        : Array.isArray(obj) ? Array.prototype.map.call(obj, clone)
            : (typeof obj === 'object' ) ? (() => {
                var retVal = {}
                Object.keys(obj).forEach((key) => retVal[key] = obj[key])
                return <T>retVal
            })()
                : obj
}
