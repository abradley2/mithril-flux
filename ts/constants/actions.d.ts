declare namespace Actions {

    namespace Todos {

        interface CREATE_TODO {
            action: 'CREATE_TODO'
            todo: Entities.Todo
        }

        interface DELETE_TODO {
            action: 'DELETE_TODO'
            id: number
        }

        interface TOGGLE_COMPLETED {
            action: 'TOGGLE_COMPLETED'
            id: number
        }

        interface EDIT_TITLE {
            action: 'UPDATE_TODO'
            id: number
            title: string
        }

        interface REMOVE_COMPLETED {
            action: 'REMOVE_COMPLETED'
        }
    }

}
