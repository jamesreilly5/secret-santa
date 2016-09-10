var PairingUtils = require('./../app/PairingUtils.js');

describe('PairingUtils', function() {
    describe('pair', function() {
        describe('given an array of keys', function() {
            it('returns a list of pairs', function() {
                var pairs = PairingUtils.pair([1, 2, 3, 4, 5]);
                expect(pairs.length).toEqual(5);
                expect(pairs[0].length).toEqual(2);
                expect(pairs[4].length).toEqual(2);
            });

            it('does not match a key with itself', function() {
                var pairs = PairingUtils.pair([1, 2, 3, 4, 5, 120, 45, 8]);
                for(var i=0; i < pairs.length; i++) {
                    expect(pairs[i][0]).not.toEqual(pairs[i][1]);
                }
            });

            it('does not match with an already matched key', function() {
                var pairs = PairingUtils.pair([1, 2, 3, 4, 5]);
                expect(
                    [pairs[0][1], pairs[1][1], pairs[2][1], pairs[3][1], pairs[4][1]].sort()
                ).toEqual([1, 2, 3, 4, 5]);
            });
        });
    });
});
