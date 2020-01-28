/**
 * exports.関数名 = 関数名　でindex.jsで関数を使用することが可能になります。
 * exportsはnodeの機能なので、ブラウザで使用するにはbrowserifyでビルドする必要があります。
 * exports.関数名を使用するとこで、１ファイルに複数関数を設定することができます。
 * 呼び出し側は下記のようにします。
 * var app = require('./js/app.js');
 * app.plus(3,1);
 * app.minus(3,1);
 */
function plus(x,y) {
  return x + y;
}
function minus(x,y) {
  return x - y;
}
exports.plus = plus;
exports.minus = minus;

/**
 * exports.exports = 関数名　でindex.jsで関数を使用することが可能になります。
 * exports.exportsを使用するとこで、１ファイルに1つの関数のみを設定することができます。
 * 呼び出し側は下記のようにします。
 * var plus = require('./js/app.js');
 * app.plus(3,1);
 */
// var plus = function(x,y) {
//   return x + y;
// }
// module.exports = plus;
