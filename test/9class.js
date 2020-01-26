/**
 * サイ本9章、P213
 * クラスについて理解します。
 * 1. ES5の通常のクラス(継承あり)を実施します。
 * 2. ES6の通常のクラス(継承あり)を実施します。(サイ本には載っていない。)
 */

 /** this is for Mocha */
 var chai = require('chai');
 var assert = chai.assert;

/************ 1. ES5の通常のクラス(継承あり) ************/

/**
 * 親クラス
 */
function Japan(area){
  // コンストラクタ
  this.area = area;
}
Japan.prototype = {
  // メソッド
  getArea: function() {
    return this.area;
  }
}

/**
 * 子クラス、その１
 */
function Tokyo(region) {
  this.region = region;
};
Tokyo.prototype.getRegion = function(){
  return this.region;
}
Tokyo.prototype.parent = new Japan("東の小さな国",); // 子クラスもprototypeを使っているので、prototypeのparentに親クラスを入れる必要があります。それを回避するのがその２です。

/**
 * 子クラス、その２
 */
function Osaka(region) {
  this.region = region;
  this.getRegion = function() { // メソッドはprototyopeではなく、コンストラクタに定義することも可能ですが、これだとインスタンス化の数ぶんだけメモリ展開されてしまいます。
    return this.region;
  }
};
Osaka.prototype = new Japan("東の小さな国",); // 子クラスがprototypeを使っていない場合は、親クラスをprototype直入れできます。


/**
 * 子クラスその１をインスタンス化します。
 */
function getTokyo() {
  var tokyo = new Tokyo("関東");
  return tokyo;
}

/**
 * 子クラスその２をインスタンス化します。
 */
function getOsaka() {
  var osaka = new Osaka("かんさい");
  return osaka;
}

/*** Testing by Mohca ***/
describe('9章クラス: 1.ES5の通常のクラス(継承あり)', function () {
  it('Tokyoの親クラスが継承できていることを確認します。 ',
    function(){assert.strictEqual(getTokyo().parent.getArea(), "東の小さな国") });
  it('Tokyoのメソッドが使用できることを確認します。 ',
    function(){assert.strictEqual(getTokyo().getRegion(), "関東") });
  it('Osakaの親クラスが継承できていることを確認します。 ',
    function(){assert.strictEqual(getOsaka().getArea(), "東の小さな国") });
  it('Osakaのメソッドが使用できることを確認します。 ',
    function(){assert.strictEqual(getOsaka().getRegion(), "かんさい") });

});
