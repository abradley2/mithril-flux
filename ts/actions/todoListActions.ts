import * as m from 'mithril'
import dispatcher from '../dispatcher'

const todoListActions = {

    createTodo: (newTodo: Entities.Todo) : void => {
        var payload : Actions.Todos.CREATE_TODO = {
            action: 'CREATE_TODO',
            todo: newTodo
        }

        dispatcher.dispatch(payload)
    },

    toggleCompleted: (id: number) : void => {
        var payload : Actions.Todos.TOGGLE_COMPLETED = {
            action: 'TOGGLE_COMPLETED',
            id: id
        }

        dispatcher.dispatch(payload)
    },

    removeTodo: (todoId: number) : void => {
        var payload : Actions.Todos.DELETE_TODO = {
            action: 'DELETE_TODO',
            id: todoId
        }

        dispatcher.dispatch(payload)
    },

    removeCompleted: () : void => {
        var payload : Actions.Todos.REMOVE_COMPLETED = {
            action: 'REMOVE_COMPLETED'
        }

        dispatcher.dispatch(payload)
    }

}

export default todoListActions
