export default class Component {

    props: any
    controller: any
    view: any

    constructor(props) {
        this.props = props || {};

        var component = this;

        this.controller = function() {

            var ctrl = {};
            component.init(ctrl);
            return ctrl;

        }

        this.controller.$original = this.init;
    }

    init(ctrl) {

    }

    instance() {
        var component = this;
        var controller = new this.controller()
        controller.render = function () {
            return component.view(controller)
        }
        return controller;
    }
}
