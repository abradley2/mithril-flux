var m = require('mithril')

function Counter (ctrl, args) {
	return m('div', [
		m('div', args.value),
		m('button', {onclick: args.onIncrement}, '+'),
		m('button', {onclick: args.onDecrement}, '-')
	])
}

module.exports = {
	view: Counter
}