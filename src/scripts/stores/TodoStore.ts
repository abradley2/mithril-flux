import * as m from 'mithril'
import {generate as uid} from 'shortid'
import dispatcher from '../dispatcher'
import Store from '../utils/Store'
import {TodoActions} from '../actions/TodoActions'

interface Todo {
    id?: string
    title: string
    completed: boolean
}

class TodoStore extends Store {

    _state: Mithril.Property<Todo[]> = m.prop([])

    getState () {
        return this._state
    }

    'TodoActions.Create' (action: TodoActions.Create) {
        this._state().push({
            id: uid(),
            title: 'New Todo',
            completed: false
        })
    }

    'TodoActions.SetTitle' (action: TodoActions.SetTitle) {
        this._state().some((todo, idx) => {
            if (todo.id === action.todoId) {
                this._state()[idx].title = action.title
                return true
            } else {
                return false
            }
        })
    }

    'TodoActions.ToggleCompleted' (action: TodoActions.ToggleCompleted) {
        this._state().some((todo, idx) => {
            if (todo.id === action.todoId) {
                this._state()[idx].completed = !this._state()[idx].completed
                return true
            } else {
                return false
            }
        })
    }

    'TodoActions.Remove' (action: TodoActions.Remove) {
        this._state(
            this._state().filter((todo) => todo.id !== action.todoId)
        )
    }

}

export default new TodoStore(dispatcher)
