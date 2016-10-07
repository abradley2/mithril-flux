var m = require('mithril')
var App = require('./views/App')

m.route.mode = 'pathname'

document.addEventListener('DOMContentLoaded', function () {

	m.route(document.getElementById('app'), '/', {
		'/': App
	})

})
