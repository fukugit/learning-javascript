var chai = require('chai');
var assert = chai.assert;
var func = require('../js/8function.js');

describe('通常の関数、plus(x,y) の動作確認をします。', function () {
  it('plus(x,y)の引数へ1,2を渡して、3が返却されることを確認します。',
    function(){assert.strictEqual(func.plus(1,2), 3) });
});

describe('再帰関数、factorial(x) の動作確認をします。', function () {
  it('factorial(x)の引数へ3を渡して、6が返却されることを確認します。',
    function(){assert.strictEqual(func.factorial(3), 6) });
});
