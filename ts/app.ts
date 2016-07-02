import * as m from 'mithril'

import TodoList from './components/TodoList'

m.route.mode = 'pathname'

document.addEventListener('DOMContentLoaded', () => {

    m.route(document.querySelector('body'), '/', {
        '/': TodoList
    })

})
