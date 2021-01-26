let assert = require('assert');
let permute = require('../permute');

describe('When Passed phanumeric string', function () {
 it('should ignore the non-numeric characters and process the reamining digits', function () {
        assert.equal(permute.solution('326'), '632,623,362,326,263,236');
    });
});