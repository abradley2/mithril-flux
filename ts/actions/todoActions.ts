import dispatcher from '../dispatcher'

interface todo {
    id?: number
    name: string
    completed: boolean
}

export <(newTodo: todo) => void>createTodo
