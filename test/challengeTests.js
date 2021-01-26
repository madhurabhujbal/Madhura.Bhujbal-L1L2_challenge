let assert = require('assert');
let challenge = require('../challenge.js');

describe('solution function', function () {
    describe('When Passed numeric string', function () {
    it('should process the digits in number', function () {
            assert.strictEqual(challenge.solution('326'), '632,623,362,326,263,236');
        });
    });

    describe('When Passed alphanumeric string', function () {
        it('should ignore the non-numeric characters and process the remaining digits', function () {
            assert.strictEqual(challenge.solution('A 3B2 C6D'), '632,623,362,326,263,236');
        });
    });

    describe('When Passed string with just one number', function () {
        it('should should return the number', function () {
            assert.strictEqual(challenge.solution('3'), '3');
        });
    });

    describe('When Passed alphabet string', function () {
        it('should give an error message', function () {
            assert.strictEqual(challenge.solution('A B CD'), "No valid number found in the given input => 'A B CD'");
        });
    });

});