import dispatcher from '../dispatcher'

var _model = {
    loggedIn: <Mithril.Property<boolean>> m.prop(false),
    username: <Mithril.Property<string>> m.prop('')
}

var session = {

    getModel: () => {
        return _model
    },

    actions: {

        LOGIN: (payload: payloads.session.LOGIN) => {
            _model.loggedIn(true)
            _model.username(payload.username)
        },

        LOGOUT: (payload: payloads.session.LOGOUT) => {

        }

    }

}




dispatcher.register((payload) => {

    session.actions[ payload.action ]

})
