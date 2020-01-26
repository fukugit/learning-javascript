/**
 * サイ本8章、P175
 * 関数について理解します。
 * 1. 様々な関数の種類を試します。
 */

/** this is for Mocha */
var chai = require('chai');
var assert = chai.assert;

/************ 1. 様々な関数の種類 ************/
/**
 * 一般的な関数定義です。
 * @param  {Number} x 演算対象の値
 * @param  {Number} y 演算対象の値
 * @return {Number}   xとyの合算値
 */
function plus(x,y) {
  return x + y;
}

/**
 * 再起関数です。(自分自身を呼び出します。)
 * 処理は階乗をしています。
 * @param  {Number} x 演算対象の値
 * @return {Number}   xの階乗値
 */
function factorial(x) {
  if(x <= 1) return 1;
  return x * factorial(x-1);
}

/**
 * 入れ子となっている関数定義です。
 * @param  {Number} x 演算対象の値
 * @param  {Number} y 演算対象の値
 * @return {Number}   xとyのsqrt(平方根)値
 */
function hypotenuse(a,b) {
  function square(x) {return x * x}
  return Math.sqrt(square(a) + square(b)); // ここで入れ子の関数を呼び出します。
}

/*** Testing by Mohca ***/
describe('8章関数: 1. 様々な関数の種類', function () {
  it('一般的な関数定義',
    function(){assert.strictEqual(plus(1,2), 3) });
  it('再帰関数',
    function(){assert.strictEqual(factorial(3), 6) });
  it('入れ子関数',
    function(){assert.strictEqual(hypotenuse(2,2), 2.8284271247461903) });
});
