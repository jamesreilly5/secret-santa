var React = require('react');

var HeroPanel = React.createClass({
	render: function() {
		return (
            <section className='hero jumbotron'>
                <div className='text-center'>
                    <i className="santa text-center circle santa-large"></i>
                    <div className='title'>
                        <h1 className='text-center'>Secret Santa</h1>
                    </div>
                </div>
            </section>
		)
	}
});

module.exports = HeroPanel;
