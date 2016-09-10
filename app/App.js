var React = require('react');

var Footer = require('./components/Footer');
var HeroPanel = require('./components/HeroPanel');
var SecretSantaList = require('./components/SecretSantaList');

var App = React.createClass({

	render: function() {
		return (
            <div clasName='container'>
                <HeroPanel />
                <SecretSantaList />
                <Footer />
            </div>
		)
	}

});

module.exports = App;
