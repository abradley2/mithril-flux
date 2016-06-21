import dispatcher from '../dispatcher'

interface todo {
    id?: number
    title: string
    completed: boolean
}

export function createTodo (newTodo: todo) : void {

    var payload : payloads.todos.CREATE_TODO = {
        action: 'CREATE_TODO',
        todo: <todo> newTodo
    }

    dispatcher.dispatch(payload)

}

export function removeTodo (todoId: number) : void {

    var payload : payloads.todos.REMOVE_TODO = {
        action: 'REMOVE_TODO',
        todoId: todoId
    }


    dispatcher.dispatch(payload)

}
