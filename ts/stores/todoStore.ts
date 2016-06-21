import * as m from 'mithril'
import dispatcher from '../dispatcher'

const _todos : Mithril.Property<App.Todos.TodoModel[]> = m.prop([
    {id: Date.now(), title: 'my todo', completed: false }
])

const todosStore = {

    // ACCESSORS

    get: (id: number) : App.Todos.TodoModel => {
        var retVal
        _todos().some((todo) => {
            if (todo.id === id) {
                retVal = todo
                return true
            } else {
                return false
            }
        })
        return retVal
    },

    getAll: () : App.Todos.TodoModel[] => {
        return _todos()
    },

    // ACTIONS

    CREATE_TODO: (payload: App.Todos.CREATE_TODO) => {

        payload.todo.id = Date.now()

        _todos().push(payload.todo)

    },

    TOGGLE_COMPLETED: (payload: App.Todos.TOGGLE_COMPLETED) => {
        _todos().some((todo, idx) => {
            if (todo.id === payload.id) {
                _todos()[idx].completed = !todo.completed
                return true
            } else {
                return false
            }
        })
    },

    EDIT_TITLE: (payload: App.Todos.EDIT_TITLE) => {
        _todos().some((todo, idx) => {
            if (todo.id === payload.id) {
                _todos()[idx].title = payload.title
                return true
            } else {
                return false
            }
        })
    },

    DELETE_TODO: (payload: App.Todos.DELETE_TODO) => {
        _todos(
            _todos().filter((todo) => {
                return todo.id !== payload.id
            })
        )
    }

}

dispatcher.register((payload) => {

    if ( todosStore[payload.action] ) {
        todosStore[payload.action](payload)
    }

})

export default todosStore
