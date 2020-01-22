var chai = require('chai');
var assert = chai.assert;
var func = require('../js/6object.js');

describe('オブジェクトの継承の確認をします。', function () {
  it('ベースオブジェクトのtitleが取得出来ていることを確認します。',
    function(){assert.strictEqual(func.getNovelTitle(), "This is a novel.") });
});
