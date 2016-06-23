import * as m from 'mithril'
import dispatcher from '../dispatcher'
import clone from '../util/clone'
import EventEmitter from '../util/EventEmitter'

class TodosStore extends EventEmitter {

    _todos : Mithril.Property<Entities.Todo[]> = m.prop([
        {id: Date.now(), title: 'my todo', completed: false }
    ])

    // ACCESSORS

    getById (id: number) : Mithril.Property<Entities.Todo>  {
        var retVal
        this._todos().some((todo) => {
            if (todo.id === id) {
                retVal = todo
                return true
            } else {
                return false
            }
        })
        return m.prop(retVal)
    }

    getAll () : Mithril.Property<Entities.Todo[]>  {
        return this._todos
    }

    // ACTIONS

    CREATE_TODO (payload: Actions.Todos.CREATE_TODO) : void {
        var newTodo = <Entities.Todo> clone(payload.todo)

        newTodo.id = Date.now()
        this._todos().push( newTodo )

    }

    TOGGLE_COMPLETED (payload: Actions.Todos.TOGGLE_COMPLETED) : void {
        this._todos().some((todo, idx) => {
            if (todo.id === payload.id) {
                this._todos()[idx].completed = !todo.completed
                return true
            } else {
                return false
            }
        })
    }

    EDIT_TITLE (payload: Actions.Todos.EDIT_TITLE) : void {
        this._todos().some((todo, idx) => {
            if (todo.id === payload.id) {
                this._todos()[idx].title = payload.title
                return true
            } else {
                return false
            }
        })
    }

    DELETE_TODO (payload: Actions.Todos.DELETE_TODO) : void {
        this._todos(
            this._todos().filter((todo) => {
                return todo.id !== payload.id
            })
        )
    }

    REMOVE_COMPLETED (payload: Actions.Todos.REMOVE_COMPLETED) : void {
        this._todos(
            this._todos().filter((todo) => {
                return todo.completed !== true
            })
        )
    }

}

var todosStore = new TodosStore()

dispatcher.register((payload) => {

    if ( todosStore[payload.action] ) {
        todosStore[payload.action](payload)
    }

})

export default todosStore
