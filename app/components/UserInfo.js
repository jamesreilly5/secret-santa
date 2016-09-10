var React = require('react');

var UserInfo = React.createClass({
	render: function() {
		return (
			<div className='row'>
                <div className='col-md-6'>{this.props.secretSantaName}</div>
                <div className='col-md-6'>{this.props.giftReceiverName}</div>
			</div>
		)
	}
});

module.exports = UserInfo;
