import * as m from 'mithril'
import dispatcher from '../dispatcher'
import TodoStore from '../stores/TodoStore'
import {TodoActionCreators} from '../actions/TodoActions'

interface TodoListArgs {

}

class TodoListController {

}

class TodoList implements Mithril.Component<TodoListController> {
    controller () {
        return new TodoListController()
    }
    view (ctrl: TodoListController, args: TodoListArgs) {
        return m('div')
    }
}

let component = new TodoList()

export default function (args: TodoListArgs) {
    return m.component(component, args)
}
