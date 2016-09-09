var React = require('react');

var Footer = require('./components/Footer');

var App = React.createClass({

	render: function() {
		return (
            <div clasName='container'>
                Hello World
                <Footer />
            </div>
		)
	}

});

module.exports = App;
