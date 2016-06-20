"use strict";
var m = require('mithril');
var Model = (function () {
    function Model(attributes) {
        this.attributes = {};
        this.hasFetched = m.prop(false);
        this.fetchedDeferred = m.deferred();
        this.idAttribute = 'id';
        this.urlRoot = 'api';
        if (attributes)
            this.attributes = attributes;
    }
    Model.prototype.get = function (attributeName) {
        return this.attributes[attributeName];
    };
    Model.prototype.set = function (attributeName, attributeValue) {
        var _this = this;
        if (typeof attributeName === 'object') {
            Object.keys(attributeName).forEach(function (attr) {
                _this.set(attr, attributeName[attr]);
            });
        }
        else {
            this.attributes[attributeName] = attributeValue;
        }
    };
    Model.prototype.fetch = function () {
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
    Model.prototype.fetched = function () {
        return this.fetchedDeferred.promise;
    };
    Model.prototype.save = function () {
        var _this = this;
        var req = {
            method: 'PUT',
            data: this.attributes,
            url: this.getUrl('save', this.attributes)
        };
        if (this.beforeRequest)
            req.config = this.beforeRequest;
        var promise = m.request(req);
        promise.then(function (res) {
            _this.set(res);
        });
        return promise;
    };
    Model.prototype.getUrl = function (action, data) {
        switch (action) {
        }
        return 'test';
    };
    return Model;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Model;
