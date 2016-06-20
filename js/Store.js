"use strict";
var Store = (function () {
    function Store(actions, dispatcher) {
        var _this = this;
        this.actions = actions;
        dispatcher.register(function (payload) {
            _this.actions[payload.action]();
        });
    }
    return Store;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Store;
