var React = require('react');

var UserParser = require('./../UserParser');
var PairingUtils = require('./../PairingUtils');

var Spinner = require('./Spinner');
var UserInfo = require('./UserInfo');

var SecretSantaList = React.createClass({
    getInitialState: function(){
		return { data: { secretSantaList: null } };
	},

	componentWillMount: function() {
        var validResponseData = require('./../../specs/fixtures/users.json');
        this.handleDataLoadSuccess(validResponseData);
	},

    handleDataLoadSuccess: function(data) {
        var parsedData = UserParser.parse(data);
        this.setState({ secretSantaList: parsedData });
    },

	render: function() {
        if (!this.state.secretSantaList) { return <Spinner /> }

        var secretSantaList = this.state.secretSantaList,
            matches = PairingUtils.pair(Object.keys(secretSantaList));

        return (
            <div className='container'>
            {
                matches.map(function(keyPair, i) {
                    return <UserInfo key={i}
                        secretSantaName={secretSantaList[keyPair[0]].fullName()}
                        secretSantaEmail={secretSantaList[keyPair[0]].emailAddress()}
                        secretSantaPhone={secretSantaList[keyPair[0]].phoneNo()}
                        giftReceiverName={secretSantaList[keyPair[1]].fullName()}
                        giftReceiverEmail={secretSantaList[keyPair[1]].emailAddress()}
                        giftReceiverPhone={secretSantaList[keyPair[1]].phoneNo()}
                    />
                })
            }
            </div>
        )
	}
});

module.exports = SecretSantaList;
