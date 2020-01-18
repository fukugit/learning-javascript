var chai = require('chai');
var assert = chai.assert;
var math = require('../js/math.js');

describe('Testing for math.add() function', function () {
  it('1 + 2 = 3',
    function(){assert.strictEqual(math.add(1,2), 3) });

  var result = math.add(3,3);
  it('3 + 3 = 6',
    function(){ assert.strictEqual(result, 6) });
});
