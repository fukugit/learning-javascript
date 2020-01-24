
/**
 * ベースとなるオブジェクト
 */
var book = {
  title: "JavaScript",
  getTitle: function() {
    return this.title;
  }
}

/**
 * bookを継承したオブジェクトを作成します。
 */
function createObject() {
  function novel() {
    this.title = "This is a novel."
  };
  // ここでベースオブジェクトを継承します。しかしtitleは子オブジェクトのものが有効になります。
  novel.prototype = book;
  return new novel(); // novelオブジェクトのprototypeにはベースオブジェクトが入っているので、ベースのメソッドが使用できます。
}

/**
 * bookを継承したオブジェクトから、ベースオブジェクトbookのメソッドを呼び出します。
 */
function getNovelTitle() {
  var f = createObject();
  return f.getTitle();
}

/************ Testing by Mohca ************/

var chai = require('chai');
var assert = chai.assert;

describe('オブジェクトの継承の確認をします。', function () {
  it('ベースオブジェクトのtitleが取得出来ていることを確認します。',
    function(){assert.strictEqual(getNovelTitle(), "This is a novel.") });
});
