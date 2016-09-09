module.exports = [
    {
        /**
        * regular expression of URL
        */
        pattern: 'https://my-api(.*)',

        /**
        * returns the data
        *
        * @param match array Result of the resolution of the regular expression
        * @param params object sent by 'send' function
        * @param headers object set by 'set' function
        */
        fixtures: function (match, params, headers) {
            /**
            * Returning error codes example:
            *   request.get('https://domain.example/404').end(function(err, res){
            *     console.log(err); // 404
            *     console.log(res.notFound); // true
            *   })
            */
            if (match[1] === '/some-invalid-endpoint') {
                throw new Error(404);
            }

            if (match[1] === '/some-invalid-endpoint-with-a-420') {
                throw new Error(420);
            }

            /**
            * Checking on parameters example:
            *   request.get('https://domain.example/hero').send({superhero: "superman"}).end(function(err, res){
            *     console.log(res.body); // "Your hero: superman"
            *   })
            */

            if (match[1] === '/dublin') {
                return 'Some valid data';
            }
        },

        /**
        * returns the result of the GET request
        *
        * @param match array Result of the resolution of the regular expression
        * @param data  mixed Data returns by `fixtures` attribute
        */
        get: function (match, data) {
            return {
                body: data
            };
        }
    }
];
