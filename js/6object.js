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

/** 下記以降はNode.jsのexportsへ関数を定義しています。 */
exports.getNovelTitle = getNovelTitle;
