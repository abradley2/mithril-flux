import * as m from 'mithril'

m.route.mode = 'pathname'

document.addEventListener('DOMContentLoaded', () => {

    m.route(document.querySelector('body'), '/', {
        '/': null
    })

})
