const assert = require('power-assert');
describe('sample', function () {
    it('should failed:', function () {
        var x = 2;
        assert.equal(assert._expr(assert._capt(x, 'arguments/0'), {
            content: 'assert.equal(x, 1)',
            filepath: 'test\\test-demo.js',
            line: 6
        }), 1);
    });
});