import * as m from 'mithril'
import dispatcher from '../dispatcher'
import * as _ from 'underscore'

class TodoStore {

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

    'Todos.CREATE_TODO' (payload: Actions.Todos.CREATE_TODO) : void {
        var newTodo = <Entities.Todo> _.clone(payload.todo)

        newTodo.id = Date.now()
        this._todos().push( newTodo )

    }

    'Todos.TOGGLE_COMPLETED' (payload: Actions.Todos.TOGGLE_COMPLETED) : void {
        this._todos().some((todo, idx) => {
            if (todo.id === payload.id) {
                this._todos()[idx].completed = !todo.completed
                return true
            } else {
                return false
            }
        })
    }

    'Todos.EDIT_TITLE' (payload: Actions.Todos.EDIT_TITLE) : void {
        this._todos().some((todo, idx) => {
            if (todo.id === payload.id) {
                this._todos()[idx].title = payload.title
                return true
            } else {
                return false
            }
        })
    }

    'Todos.DELETE_TODO' (payload: Actions.Todos.DELETE_TODO) : void {
        this._todos(
            this._todos().filter((todo) => {
                return todo.id !== payload.id
            })
        )
    }

    'Todos.REMOVE_COMPLETED' (payload: Actions.Todos.REMOVE_COMPLETED) : void {
        this._todos(
            this._todos().filter((todo) => {
                return todo.completed !== true
            })
        )
    }

    dispatchToken: number

    constructor (dispatcher) {

        this.dispatchToken = dispatcher.register((payload) => {

            switch (payload.action) {
                default:
                    if (this[payload.action]) this[payload.action](payload)
                    break
            }

        })

    }

}


export default new TodoStore(dispatcher)
