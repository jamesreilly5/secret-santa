var UserParser = require('./../app/UserParser.js');

describe('UserParser', function() {
    describe('parse', function() {
        var validResponseData = require('./fixtures/users.json'),
            expectedOutput = require('./fixtures/parsedUsers.json');

        describe('when valid data is supplied', function() {
            it('parses the expected output', function() {
                expect(UserParser.parse(validResponseData)).toEqual(expectedOutput);
            });
        });

        describe('when no data is supplied', function() {
            it('returns an empty array', function() {
                expect(UserParser.parse(null)).toEqual([]);
            });
        });
    });
});
