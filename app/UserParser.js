var User = require('./models/User');

var parseUser = function(json) {
    return {
        firstName: json.name.first,
        lastName: json.name.last,
        email: json.email,
        phone: json.phone
    };
}

module.exports = {
    parse: function(usersJson) {
        users = {};
        if(!usersJson || !usersJson.users) { return users }

        for(var i=0; i < usersJson.users.length; i++) {
            var userData = usersJson.users[i];
            users[userData.guid] = new User(parseUser(userData));
        }
        return users;
    }
};
