var Elm = require('./dist/elm/main.js');
var React = require('react');
var createReactClass = require('create-react-class');

module.exports = createReactClass({
	render: function () {
		return React.createElement('div', { ref: this.initialize });
	},
	initialize: function(node) {
		var app = Elm.Main.init({ node: node });
		// set up ports however you want
	},
	shouldComponentUpdate: function(prevProps) {
		return false;
	}
});
