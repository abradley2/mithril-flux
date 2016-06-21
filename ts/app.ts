import * as m from 'mithril'

import todosView from './views/todosView'

document.addEventListener('DOMContentLoaded', () => {

    m.mount(
        document.querySelector('body'),
        todosView
    )

})
