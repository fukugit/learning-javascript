# オブジェクトについて

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
目次

- [学んだこと](#%E5%AD%A6%E3%82%93%E3%81%A0%E3%81%93%E3%81%A8)
  - [オブジェクトの定義方法](#%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%81%AE%E5%AE%9A%E7%BE%A9%E6%96%B9%E6%B3%95)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
<br>


## 学んだこと
### オブジェクトの定義方法
```javascript
let object = {
  // プロパティ
  property1: 'hello',
  // メソッド
  property2: function() {
    return 'test';
  },
  // プロパティ（オブジェクトで）
  property3: {
    num: 1
  }
}

// ドット記法でプロパティにアクセス
console.log(object.property1);
console.log(object.property2());
console.log(object.property3.num);

// ブレケット記法でプロパティにアクセス
console.log(object['property1']);

```
<br>
