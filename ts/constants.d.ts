declare namespace payloads {

    namespace todos {

        interface CREATE_TODO {
            action: 'CREATE_TODO'
            todo: {
                title: string
            }
        }

        interface REMOVE_TODO {
            action: 'REMOVE_TODO',
            todoId: number
        }

        interface UPDATE_TODO {

        }

        interface EDIT_TODO {

        }

    }

}
