import * as m from 'mithril'
import dispatcher from '../dispatcher'
import TodoStore from '../stores/TodoStore'

class TodoController extends Mithril.Controller {

    addTodo () {

    }

    removeTodo () {

    }

    editTodo () {

    }

    toggleTodoComplete () {

    }

    removeCompleted () {

    }

    constructor (args: any) {

    }

    todos: Mithril.Property<Entities.Todo[]>
    state: {
        newTodo: Mithril.Property<Entities.Todo>
    }
}

class TodoList implements Mithril.Component<TodoController> {

    controller () : TodoController {
        return new TodoController()
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
                        actions.createTodo(ctrl.state.newTodo())
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
                            actions.toggleCompleted(todo.id)
                        }
                    }, todo.completed ? 'X' : 'O'),
                    m('span', todo.title)
                ])
            })),
            m('div', [
                m('button[type="button"]', {
                    onclick: (e) => {
                        actions.removeCompleted()
                    }
                }, 'Remove Completed')
            ])
        ])

    }

}

export default new TodoList()
