"use strict";
var Dispatcher = (function () {
    function Dispatcher() {
        this.callbacks = [];
    }
    Dispatcher.prototype.register = function (cb) {
        this.callbacks.push(cb);
        return this.callbacks.length - 1;
    };
    Dispatcher.prototype.dispatch = function (payload) {
        this.callbacks.forEach(function (cb) {
            cb(payload);
        });
    };
    return Dispatcher;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Dispatcher;
