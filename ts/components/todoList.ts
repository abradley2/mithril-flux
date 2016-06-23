import * as m from 'mithril'
import todoListActions from '../actions/todoListActions'
import todosStore from '../stores/todosStore'

interface ICtrl {
    todos: Mithril.Property<Entities.Todo[]>,
    state: {
        newTodo: Mithril.Property<Entities.Todo>
    }
}

class TodoList implements Mithril.Component<ICtrl> {

    controller () : ICtrl {
        return {
            todos: todosStore.getAll(),
            state: {
                newTodo: m.prop({
                    title: '',
                    completed: false
                })
            }
        }
    }

    view (ctrl: ICtrl) {
        var todos = ctrl.todos,
            state = ctrl.state,
            actions = todoListActions

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
