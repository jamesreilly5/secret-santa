var React = require('react');

var Spinner = React.createClass({
	render: function() {
		return (
			<div className='spinner'>
				<div className='row text-center spinner'><h1>Loading Secret Santas, please wait...</h1></div>
			</div>
		)
	}
});

module.exports = Spinner;
