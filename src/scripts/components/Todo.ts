import * as m from 'mithril'

interface TodoCtrl {}

interface TodoArgs {
    id: string
    title: string
    completed: string
    onEditAttr: (attr: string, val: any) => any
    onToggleCompleted: () => any
}

const Todo = {
    controller: function (): TodoCtrl {
        return {

        }
    },
    view: function (ctrl: TodoCtrl, args: TodoArgs) {
        return m('h3', 'Todo')
    }
}

export default function (args: TodoArgs) {
    return m.component(Todo, args)
}
