import * as m from 'mithril'
import dispatcher from '../dispatcher'

const todoActions = {

    createTodo: (newTodo: App.Todos.TodoModel) : void => {

        var payload : App.Todos.CREATE_TODO = {
            action: 'CREATE_TODO',
            todo: newTodo
        }

        dispatcher.dispatch(payload)

    },

    toggleCompleted: (id: number) : void => {

        var payload : App.Todos.TOGGLE_COMPLETED = {
            action: 'TOGGLE_COMPLETED',
            id: id
        }

        dispatcher.dispatch(payload)

    },

    removeTodo: (todoId: number) : void => {

        var payload : App.Todos.DELETE_TODO = {
            action: 'DELETE_TODO',
            id: todoId
        }

        dispatcher.dispatch(payload)

    }

}

export default todoActions
