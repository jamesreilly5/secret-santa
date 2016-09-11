var User = require('./../../app/models/User.js');

describe("User", function() {

    var user = new User({
        firstName: 'John',
        lastName: 'Smith',
        email: 'jsmith@example.com',
        phone: '123456789'
    });

    var partialUser = new User({ firstName: 'John' });

    describe("fullName", function() {
        describe("when a first and last name are provided", function() {
            it("returns the first and last naem concatenated", function() {
                expect(user.fullName()).toEqual('John Smith');
            });
        });

        describe("when only a first name is provided", function() {
            it("returns the first and last naem concatenated", function() {
                expect(partialUser.fullName()).toEqual('John');
            });
        });
    });

    describe("emailAddress", function() {
        it("returns the email", function() {
            expect(user.emailAddress()).toEqual('jsmith@example.com');
        });
    });

    describe("phoneNo", function() {
        it("returns the phone number", function() {
            expect(user.phoneNo()).toEqual('123456789');
        });
    });
});
