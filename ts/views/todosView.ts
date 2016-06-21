import * as m from 'mithril'
import todoActions from '../actions/todoActions'
import todoStore from '../stores/todoStore'

interface ViewModel {
    newTodo: App.Todos.TodoModel
}

function todosController () {

    return <ViewModel> {
        newTodo: {
            title: '',
            completed: false
        }
    }

}

function todosView (vm: ViewModel) {
    var actions = todoActions,
        todos = todoStore.getAll()

    return m('div.todo-list', [

        m('div.new-todo', [
            m('input[type="text"]', {
                value: vm.newTodo.title,
                onchange: (e) => {
                    vm.newTodo.title = e.target.value
                }
            }),
            m('button[type=button]', {
                onclick: (e) => {
                    actions.createTodo(vm.newTodo)
                    vm.newTodo = {
                        title: '',
                        completed: false
                    }
                }
            }, 'Add Todo')
        ]),

        m('ul.todos', todos.map((todo) => {

            return m('li.todo', [
                m('button[type="button"]', {
                    onclick: () => {
                        actions.toggleCompleted(todo.id)
                    }
                }, todo.completed ? 'X' : 'O'),
                m('span', todo.title)
            ])

        })),

        m('div.routes', [
            m('a[href="todos/all"]', 'All'),
            m('a[href="todos/incomplete"]', 'Incomplete'),
            m('a[href="todos/complete"]', 'Completed')
        ])

    ])

}

export default {
    controller: todosController,
    view: todosView
}
