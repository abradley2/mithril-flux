"use strict";
var m = require('mithril');
var Collection = (function () {
    function Collection() {
        this.hasFetched = m.prop(false);
        this.fetchedDeferred = m.deferred();
        this.string = 'api';
        this.modelId = 'id';
        this.models = [];
    }
    Collection.prototype.getUrl = function (action, data) {
        return 'test';
    };
    Collection.prototype.fetch = function () {
        var _this = this;
        var req = {
            method: 'GET',
            url: this.getUrl('fetch')
        };
        if (this.beforeRequest)
            req.config = this.beforeRequest;
        var promise = m.request(req);
        promise.then(function (res) {
            _this.set(res);
            if (_this.hasFetched() === false) {
                _this.hasFetched(true);
                _this.fetchedDeferred.resolve();
            }
        });
        return promise;
    };
    Collection.prototype.get = function (modelId) {
    };
    return Collection;
}());
