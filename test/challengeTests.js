let assert = require('assert');
let challenge = require('../challenge.js');

describe('solution function', function () {
    describe('When Passed numeric string', function () {
    it('should process the digits in number', function () {
            assert.strictEqual(challenge.solution('326'), '632,623,362,326,263,236');
        });
    });
});