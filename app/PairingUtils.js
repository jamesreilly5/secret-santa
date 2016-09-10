// Shuffle an array in place using the Fisher-Yates algorithm,
// adapted from http://bost.ocks.org/mike/shuffle/
var shuffle = function(array) {
    for(var m = array.length;  m;) {
        var i = Math.floor(Math.random() * m--);
        var t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    return array;
}

function rotate(arr){
    arr.push(arr.shift());
    return arr;
}

module.exports = {
    /*
    * One way of pairing keys uniquely is to make a copy of the array and then
    * rotate the array by 1. e.g. for the array [1, 2, 3] you would have the
    * following pairs:
    *
    * Gift giver    => [1, 2, 3]
    * Gift receiver => [3, 1, 2]
    *
    * In order to take away the predictability we can shuffle the array of ids
    * first. This should work for all arrays of size 3 or greater. It won't
    * work for less than that but that would be a terrible Secret Santa anyway.
    */
    pair: function(keys) {
        keys = shuffle(keys)
        var keyPool = rotate(keys.slice(0));
        var pairs = [];

        for(var i=0; i < keys.length; i++) {
            // var pairIndex = getRandomIndex(keys.length, keys[i]);
            // pairs.push([keys[i], keyPool[pairIndex]]);
            // keyPool.splice(pairIndex, 1);
            // while(keyPool[0] === keys[i]) {
            //     keyPool = shuffle(keyPool);
            // }
            pairs.push([keys[i], keyPool[i]]);
        }
        return pairs;
    }
};
