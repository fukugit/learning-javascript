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


var myFunc = function(a, b){
    return a + b;
};

describe('テストのタイトル', function () {
  it('myFuncのテスト', function(){ assert.strictEqual(myFunc(1,2), 3) });
  var result = myFunc(3,3);
  it('myFuncのテスト2', function(){ assert.strictEqual(result, 6) });
});
