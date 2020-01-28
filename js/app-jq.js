/**
 * jQueryライブラリを使用します。
 * $(function() を利用するとことで、読み込み時に実行されます。
 */

'use strict';

var $ = require('jQuery');

var jq = $(function() {
  $('h1').css('color', 'blue');
});

module.exports = jq;
