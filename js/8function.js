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

/** 下記以降はNode.jsのexportsへ関数を定義しています。JavaScriptの関数とは関係ありません。 */
exports.plus = plus;
exports.factorial = factorial;
exports.hypotenuse = hypotenuse;
