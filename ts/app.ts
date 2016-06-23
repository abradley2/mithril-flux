import * as m from 'mithril'

import todoList from './components/todoList'

m.route.mode = 'pathname'

document.addEventListener('DOMContentLoaded', () => {

    m.route(document.querySelector('body'), '/', {
        '/': todoList
    })

})
