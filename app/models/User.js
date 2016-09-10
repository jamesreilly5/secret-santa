var User = function(userData) {
    this.firstName = userData.firstName;
    this.lastName = userData.lastName;
    this.email = userData.email;
    this.phone = userData.phone;
};

User.prototype.fullName = function() {
    return this.firstName + ' ' + this.lastName;
};

User.prototype.equals = function(compare) {
    return compare.firstName === this.firstName &&
    compare.lastName === this.lastName &&
    compare.email === this.email &&
    compare.phone === this.phone;
};

module.exports = User;
