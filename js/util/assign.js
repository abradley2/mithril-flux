"use strict";
function assign(target, source) {
    var output = Object(target);
    for (var nextKey in source) {
        if (Object.prototype.hasOwnProperty.call(source, nextKey)) {
            output[nextKey] = source[nextKey];
        }
    }
    return output;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = assign;
