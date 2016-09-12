import dispatcher from '../dispatcher'

export namespace TodoActions {

    export interface Create {
        type: 'TodoActions.Create'
    }
    export interface SetTitle {
        type: 'TodoActions.SetTitle'
        todoId: string
        title: string
    }
    export interface ToggleCompleted {
        type: 'TodoActions.ToggleCompleted'
        todoId: string
    }
    export interface Remove {
        type: 'TodoActions.Remove'
        todoId: string
    }

}

export const TodoActionCreators = dispatcher.wrapActions({

    Create: (): TodoActions.Create => {
        return {
            type: 'TodoActions.Create'
        }
    },
    SetTitle: (todoId: string, title: string): TodoActions.SetTitle => {
        return {
            type: 'TodoActions.SetTitle',
            todoId: todoId,
            title: title
        }
    },
    ToggleCompleted: (todoId: string): TodoActions.ToggleCompleted => {
        return {
            type: 'TodoActions.ToggleCompleted',
            todoId: todoId
        }
    },
    removeTodo: (todoId: string): TodoActions.Remove => {
        return {
            type: 'TodoActions.Remove',
            todoId: todoId
        }
    }

})
