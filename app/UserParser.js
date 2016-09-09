var parseUser = function(json) {
    return {
        id: json.guid,
        firstName: json.name.first,
        lastName: json.name.last,
        email: json.email,
        phone: json.phone
    };
}

module.exports = {
    parse: function(usersJson) {
        users = [];
        if(!usersJson || !usersJson.users) { return users }

        for(var i=0; i < usersJson.users.length; i++) {
            users.push(parseUser(usersJson.users[i]));
        }
        return users;
    }
};
