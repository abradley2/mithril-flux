declare namespace App {

    namespace Todos {

        interface TodoModel {
            id?: number
            title: string
            completed: boolean
        }

        interface CREATE_TODO {
            action: 'CREATE_TODO'
            todo: TodoModel
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

    }

}
