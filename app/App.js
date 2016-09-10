var React = require('react');

var Footer = require('./components/Footer');
var SecretSantaList = require('./components/SecretSantaList');

var App = React.createClass({

	render: function() {
		return (
            <div clasName='container'>
                <SecretSantaList />
                <Footer />
            </div>
		)
	}

});

module.exports = App;
