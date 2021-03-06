/**
 * サイ本6章、P121
 * オブジェクトについて理解します。
 * 1. オブジェクトリテラルの様々なパターンを実施します。
 * 2. プロトタイプを使ったオブジェクトの継承を実施します。
 */

/** this is for Mocha */
var chai = require('chai');
var assert = chai.assert;

/************ 1. オブジェクトリテラルの様々なパターン ************/
var empty1 = {};                              // プロパティを持たないオブジェクトを生成
empty1.name = "その1";
var empty2 = new Object();                    // 上記と同じオブジェクトを生成
empty2.name = "その2";
var empty3 = Object.create(Object.prototype); // 上記と同じ。引数へはObject.prototypeが必要。
empty3.name = "その3";
var point4 = {name:"その4", y:0};

/*** Testing by Mohca ***/
describe('6章オブジェクト: 1. オブジェクトリテラルの様々なパターン', function () {
  it('empty1の確認',
    function(){assert.strictEqual(empty1.name, "その1") });
  it('empty2の確認',
    function(){assert.strictEqual(empty2.name, "その2") });
  it('empty3の確認',
    function(){assert.strictEqual(empty3.name, "その3") });
  it('point4の確認',
    function(){assert.strictEqual(point4.name, "その4") });
});



/************ 2. プロトタイプを使ったオブジェクトの継承 ************/
/**
 * 親オブジェクト
 */
var japan = {
  area: "東の小さな国",
  getArea: function() {
    return this.area;
  }
}

/**
 * 子オブジェクト, その１
 */
function createTokyoObject() {
  // オブジェクトを継承するために空の関数(コンストラクタ)を用意します。
  // varで宣言したオブジェクトへは継承できません。（コンストラクタが無いため）
  // １つの関数には１つのプロトタイプしかないため、継承できるオブジェクトは１階層のみです。（多重階層を継承するにはミックスインが必要）
  function tokyo() {  // オブジェクトを継承するために空の関数(コンストラクタ)を用意します。
    this.region = "関東";
  };
  tokyo.prototype = japan; // プロトタイプに親オブジェクトを入れることで、親を継承します。
  return new tokyo();
}

/**
 * 子オブジェクト, その２
 */
function createOsakaObject() {
  function osaka() {
    this.region = "かんさい";
  };
  osaka.prototype = japan;
  return new osaka();
}

/**
 * 親オブジェクトのメソッドを呼び出します。
 */
function getTokyoArea() {
  var tokyo = createTokyoObject();
  return tokyo.getArea();
}

/**
 * 子オブジェクトのフィールドを呼び出します。
 */
function getOsakaRegion() {
  var osaka = createOsakaObject();
  return osaka.region;
}

/*** Testing by Mohca ***/
describe('6章オブジェクト: 2. プロトタイプを使ったオブジェクトの継承', function () {
  it('親オブジェクトが継承できていることを確認します。 ',
    function(){assert.strictEqual(getTokyoArea(), "東の小さな国") });
  it('子オブジェクトのフィールドが参照できることを確認します。 ',
    function(){assert.strictEqual(getOsakaRegion(), "かんさい") });
});
