var React = require('react');

var HeroPanel = React.createClass({
	render: function() {
		return (
            <section className='hero jumbotron'>
                <div>
                    <h1 className='text-center'>Secret Santa 2016</h1>
                </div>
            </section>
		)
	}
});

module.exports = HeroPanel;
