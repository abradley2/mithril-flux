import * as m from 'mithril'
import dispatcher from '../dispatcher'
import TodoStore from '../stores/TodoStore'

class TodoController implements Mithril.Controller {

    addTodo (todo: Entities.Todo) {
        var payload : Actions.Todos.CREATE_TODO = {
            action: 'Todos.CREATE_TODO',
            todo: todo
        }

        dispatcher.dispatch(payload)
    }

    removeTodo (id: number) {
        var payload : Actions.Todos.DELETE_TODO = {
            action: 'Todos.DELETE_TODO',
            id: id
        }

        dispatcher.dispatch(payload)
    }

    editTodoTitle (id: number, title: string) {
        var payload : Actions.Todos.EDIT_TITLE = {
            action: 'Todos.EDIT_TITLE',
            title: title,
            id: id
        }

        dispatcher.dispatch(payload)
    }

    toggleTodoComplete (todo: Entities.Todo) {
        var payload : Actions.Todos.TOGGLE_COMPLETED = {
            action: 'Todos.TOGGLE_COMPLETED',
            id: todo.id
        }

        dispatcher.dispatch(payload)
    }

    removeCompleted () {
        var payload : Actions.Todos.REMOVE_COMPLETED = {
            action: 'Todos.REMOVE_COMPLETED'
        }

        dispatcher.dispatch(payload)
    }

    todos = TodoStore.getAll()
    state = {
        newTodo: <Mithril.Property<Entities.Todo>>m.prop({
            title: '',
            completed: false
        })
    }

    constructor (args) {

    }

}

class TodoList implements Mithril.Component<TodoController> {

    controller (args) : TodoController {
        return new TodoController(args)
    }

    view (ctrl: TodoController) {
        var todos = ctrl.todos,
            state = ctrl.state

        return m('div', [
            m('div', [
                m('input[type="text"]', {
                    value: state.newTodo().title,
                    onchange: (e) => {
                        state.newTodo().title = e.target.value
                    }
                }),
                m('button[type="button"]', {
                    onclick: (e) => {
                        ctrl.addTodo(ctrl.state.newTodo())
                        state.newTodo({
                            title: '',
                            completed: false
                        })
                    }
                }, 'Add Todo')
            ]),
            m('ul', todos().map((todo) => {
                return m('li', [
                    m('button[type="button"]', {
                        onclick: (e) => {
                            ctrl.toggleTodoComplete(todo)
                        }
                    }, todo.completed ? 'X' : 'O'),
                    m('input[type="text"]', {
                        value: todo.title,
                        onchange: (e) => {
                            ctrl.editTodoTitle(todo.id, e.target.value)
                        }
                    })
                ])
            })),
            m('div', [
                m('button[type="button"]', {
                    onclick: (e) => {
                        ctrl.removeCompleted()
                    }
                }, 'Remove Completed')
            ])
        ])

    }

}

export default new TodoList()
