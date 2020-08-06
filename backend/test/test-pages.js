var assert = require('assert');

describe('Simple String Test', function () {
    it('should return number of characters in a string', function () {
        assert.equal("Hello World!".length, 12);
    });
});