declare namespace Actions {

    namespace Todos {
        interface CREATE_TODO {
            action: 'Todos.CREATE_TODO'
            todo: Entities.Todo
        }

        interface DELETE_TODO {
            action: 'Todos.DELETE_TODO'
            id: number
        }

        interface TOGGLE_COMPLETED {
            action: 'Todos.TOGGLE_COMPLETED'
            id: number
        }

        interface EDIT_TITLE {
            action: 'Todos.UPDATE_TODO'
            id: number
            title: string
        }

        interface REMOVE_COMPLETED {
            action: 'Todos.REMOVE_COMPLETED'
        }
    }

}
