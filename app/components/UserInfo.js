var React = require('react');

var UserInfo = React.createClass({
	render: function() {
		return (
			<div className='row'>
                <div className='col-md-5'>
                    <div className='user-block'>
                        <div className='santa-container text-center'>
                            <i className="santa"></i>
                        </div>
                        <div className='text-center user-info'>
                            <h4>{this.props.secretSantaName}</h4>
                            <div>{this.props.secretSantaEmail}</div>
                            <div>{this.props.secretSantaPhone}</div>
                        </div>
                    </div>
                </div>
                <div className='col-md-5 col-md-offset-2'>
                    <div className='user-block'>
                        <div className='gift-container text-center'>
                            <i className="gift"></i>
                        </div>
                        <div className='text-center user-info'>
                            <h4>{this.props.giftReceiverName}</h4>
                            <div>{this.props.giftReceiverEmail}</div>
                            <div>{this.props.giftReceiverPhone}</div>
                        </div>
                    </div>
                </div>
			</div>
		)
	}
});

module.exports = UserInfo;
